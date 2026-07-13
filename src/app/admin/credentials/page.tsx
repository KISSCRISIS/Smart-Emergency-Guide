import Link from 'next/link';
import { redirect } from 'next/navigation';

import { reviewCredentialSubmission } from '@/app/admin/credentials/actions';
import { AdminLevelBadge } from '@/components/verification/AdminLevelBadge';
import { getProfessionalGradeLabel } from '@/lib/auth/profile-access';
import { createServerSupabaseClient } from '@/lib/supabase/server';

type AdminCredentialsPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

type CredentialSubmission = {
  id: string;
  owner_user_id: string;
  credential_type: string;
  document_title: string;
  issuing_authority: string | null;
  license_number: string | null;
  country: string | null;
  issue_date: string | null;
  expiry_date: string | null;
  document_path: string;
  original_filename: string;
  mime_type: string;
  file_size_bytes: number;
  submission_status: string;
  submitted_at: string;
  reviewed_at: string | null;
  review_note: string | null;
};

type OwnerProfile = {
  id: string;
  full_name: string;
  email: string;
  professional_grade: string;
  admin_level: string;
};

const REVIEW_STATUS_OPTIONS = [
  ['submitted', 'Submitted'],
  ['under_review', 'Under Review'],
  ['needs_changes', 'Needs Changes'],
  ['verified', 'Verified'],
  ['rejected', 'Rejected'],
  ['revoked', 'Revoked'],
] as const;

const PRIORITY: Record<string, number> = {
  submitted: 0,
  under_review: 1,
  needs_changes: 2,
  verified: 3,
  rejected: 4,
  revoked: 5,
};

function statusLabel(status: string) {
  return (
    REVIEW_STATUS_OPTIONS.find(
      ([value]) => value === status,
    )?.[1] ?? status
  );
}

function statusClass(status: string) {
  switch (status) {
    case 'verified':
      return 'border-emerald-300/25 bg-emerald-300/10 text-emerald-100';
    case 'submitted':
    case 'under_review':
      return 'border-cyan-300/25 bg-cyan-300/10 text-cyan-100';
    case 'needs_changes':
      return 'border-amber-300/25 bg-amber-300/10 text-amber-100';
    case 'rejected':
    case 'revoked':
      return 'border-rose-300/25 bg-rose-300/10 text-rose-100';
    default:
      return 'border-slate-700 bg-slate-800 text-slate-200';
  }
}

function formatDate(value: string | null) {
  if (!value) {
    return 'Not reviewed';
  }

  return new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date(value));
}

function formatBytes(value: number) {
  if (value < 1024 * 1024) {
    return `${Math.max(1, Math.round(value / 1024))} KB`;
  }

  return `${(value / (1024 * 1024)).toFixed(1)} MB`;
}

export default async function AdminCredentialsPage({
  searchParams,
}: AdminCredentialsPageProps) {
  const params = await searchParams;
  const updated = params.updated === '1';

  const supabase = await createServerSupabaseClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/auth/sign-in?next=/admin/credentials');
  }

  const { data: adminProfile } = await supabase
    .from('profiles')
    .select('role, account_status')
    .eq('id', user.id)
    .maybeSingle<{
      role: string;
      account_status: string;
    }>();

  if (
    !adminProfile ||
    adminProfile.role !== 'Admin' ||
    adminProfile.account_status !== 'active'
  ) {
    redirect('/');
  }

  const { data, error } = await supabase
    .from('professional_credential_submissions')
    .select(
      'id, owner_user_id, credential_type, document_title, issuing_authority, license_number, country, issue_date, expiry_date, document_path, original_filename, mime_type, file_size_bytes, submission_status, submitted_at, reviewed_at, review_note',
    )
    .order('created_at', { ascending: false })
    .limit(200);

  const submissions = (
    (data ?? []) as CredentialSubmission[]
  ).sort(
    (a, b) =>
      (PRIORITY[a.submission_status] ?? 99) -
      (PRIORITY[b.submission_status] ?? 99),
  );

  const ownerIds = Array.from(
    new Set(
      submissions.map((submission) => submission.owner_user_id),
    ),
  );

  let ownerProfiles: OwnerProfile[] = [];

  if (ownerIds.length > 0) {
    const { data: profileData } = await supabase
      .from('profiles')
      .select(
        'id, full_name, email, professional_grade, admin_level',
      )
      .in('id', ownerIds);

    ownerProfiles = (profileData ?? []) as OwnerProfile[];
  }

  const owners = new Map(
    ownerProfiles.map((profile) => [profile.id, profile]),
  );

  const rows = await Promise.all(
    submissions.map(async (submission) => {
      const { data: signedData } = await supabase.storage
        .from('credential-documents')
        .createSignedUrl(submission.document_path, 600);

      return {
        ...submission,
        documentUrl: signedData?.signedUrl ?? null,
      };
    }),
  );

  const counts = rows.reduce<Record<string, number>>(
    (current, submission) => {
      current[submission.submission_status] =
        (current[submission.submission_status] ?? 0) + 1;

      return current;
    },
    {},
  );

  return (
    <main className="px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1500px] space-y-6">
        <section className="rounded-[2rem] border border-cyan-300/20 bg-gradient-to-br from-slate-900 to-cyan-950/50 p-6 sm:p-8">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
            SEG Administration
          </p>
          <h1 className="mt-3 text-3xl font-black text-white sm:text-4xl">
            Credential Document Reviews
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
            Review private professional documents through temporary
            signed links. An Admin cannot review their own submission.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/admin"
              className="rounded-xl border border-slate-700 px-4 py-2 text-sm font-black text-slate-200 transition hover:border-cyan-300/40 hover:text-cyan-100"
            >
              Verification Queue
            </Link>
            <Link
              href="/credentials"
              className="rounded-xl border border-slate-700 px-4 py-2 text-sm font-black text-slate-200 transition hover:border-cyan-300/40 hover:text-cyan-100"
            >
              My Credentials
            </Link>
          </div>

          {updated ? (
            <div
              role="status"
              className="mt-5 rounded-2xl border border-emerald-300/25 bg-emerald-300/10 px-4 py-3 text-sm font-bold text-emerald-100"
            >
              Credential review was saved successfully.
            </div>
          ) : null}
        </section>

        <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {[
            ['Submitted', counts.submitted ?? 0],
            ['Under Review', counts.under_review ?? 0],
            ['Needs Changes', counts.needs_changes ?? 0],
            ['Verified', counts.verified ?? 0],
          ].map(([label, value]) => (
            <div
              key={String(label)}
              className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">
                {label}
              </p>
              <p className="mt-3 text-3xl font-black text-white">
                {value}
              </p>
            </div>
          ))}
        </section>

        {error ? (
          <div className="rounded-3xl border border-rose-300/25 bg-rose-300/10 p-5 text-sm font-bold text-rose-100">
            Could not load credential submissions: {error.message}
          </div>
        ) : null}

        <section className="space-y-4">
          {rows.length === 0 ? (
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 text-center text-slate-400">
              No credential documents have been submitted.
            </div>
          ) : (
            rows.map((submission) => {
              const owner = owners.get(submission.owner_user_id);
              const selfReview =
                submission.owner_user_id === user.id;

              return (
                <article
                  key={submission.id}
                  className="rounded-[1.75rem] border border-slate-800 bg-slate-900/70 p-5"
                >
                  <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_minmax(360px,0.8fr)]">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h2 className="text-xl font-black text-white">
                          {owner?.full_name ?? 'Unknown profile'}
                        </h2>
                        <AdminLevelBadge
                          level={owner?.admin_level}
                          compact
                        />
                        <span
                          className={[
                            'rounded-full border px-2.5 py-1 text-[11px] font-black',
                            statusClass(
                              submission.submission_status,
                            ),
                          ].join(' ')}
                        >
                          {statusLabel(
                            submission.submission_status,
                          )}
                        </span>
                      </div>

                      <p className="mt-2 break-all text-sm text-slate-400">
                        {owner?.email ?? submission.owner_user_id}
                      </p>

                      <div className="mt-5 rounded-3xl border border-slate-800 bg-slate-950/60 p-5">
                        <h3 className="text-lg font-black text-white">
                          {submission.document_title}
                        </h3>
                        <p className="mt-1 text-sm font-bold text-cyan-200">
                          {submission.credential_type}
                        </p>

                        <dl className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
                          <div>
                            <dt className="font-bold text-slate-500">
                              Self-reported grade
                            </dt>
                            <dd className="mt-1 text-slate-200">
                              {getProfessionalGradeLabel(
                                owner?.professional_grade,
                              )}
                            </dd>
                          </div>
                          <div>
                            <dt className="font-bold text-slate-500">
                              Issuing authority
                            </dt>
                            <dd className="mt-1 text-slate-200">
                              {submission.issuing_authority || 'Not provided'}
                            </dd>
                          </div>
                          <div>
                            <dt className="font-bold text-slate-500">
                              License / certificate number
                            </dt>
                            <dd className="mt-1 break-all text-slate-200">
                              {submission.license_number || 'Not provided'}
                            </dd>
                          </div>
                          <div>
                            <dt className="font-bold text-slate-500">
                              Country
                            </dt>
                            <dd className="mt-1 text-slate-200">
                              {submission.country || 'Not provided'}
                            </dd>
                          </div>
                          <div>
                            <dt className="font-bold text-slate-500">
                              Issue / expiry
                            </dt>
                            <dd className="mt-1 text-slate-200">
                              {submission.issue_date || 'Unknown'}
                              {' → '}
                              {submission.expiry_date || 'No expiry provided'}
                            </dd>
                          </div>
                          <div>
                            <dt className="font-bold text-slate-500">
                              Submitted
                            </dt>
                            <dd className="mt-1 text-slate-200">
                              {formatDate(submission.submitted_at)}
                            </dd>
                          </div>
                        </dl>

                        <div className="mt-5 flex flex-wrap items-center gap-3">
                          {submission.documentUrl ? (
                            <a
                              href={submission.documentUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="rounded-xl bg-cyan-500/15 px-4 py-2.5 text-sm font-black text-cyan-100 transition hover:bg-cyan-500/25"
                            >
                              Open private document
                            </a>
                          ) : (
                            <span className="text-sm font-bold text-rose-300">
                              Temporary document link unavailable
                            </span>
                          )}

                          <span className="text-xs font-semibold text-slate-500">
                            {submission.original_filename}
                            {' · '}
                            {formatBytes(
                              submission.file_size_bytes,
                            )}
                            {' · '}
                            Link expires in 10 minutes
                          </span>
                        </div>
                      </div>

                      <p className="mt-4 text-xs font-semibold text-slate-500">
                        Last review: {formatDate(submission.reviewed_at)}
                      </p>
                    </div>

                    {selfReview ? (
                      <div className="rounded-2xl border border-amber-300/25 bg-amber-300/10 p-5 text-sm font-bold leading-7 text-amber-100">
                        You cannot review your own credential. Sign in
                        with the other authorized Admin account to
                        complete this review.
                      </div>
                    ) : (
                      <form
                        action={reviewCredentialSubmission}
                        className="space-y-3 rounded-2xl border border-slate-800 bg-slate-950/60 p-4"
                      >
                        <input
                          type="hidden"
                          name="submission_id"
                          value={submission.id}
                        />

                        <label className="block">
                          <span className="text-xs font-black text-slate-400">
                            Review status
                          </span>
                          <select
                            name="submission_status"
                            defaultValue={
                              submission.submission_status
                            }
                            className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2.5 text-sm font-bold text-white outline-none focus:border-cyan-400"
                          >
                            {REVIEW_STATUS_OPTIONS.map(
                              ([value, label]) => (
                                <option key={value} value={value}>
                                  {label}
                                </option>
                              ),
                            )}
                          </select>
                        </label>

                        <label className="block">
                          <span className="text-xs font-black text-slate-400">
                            Private Admin review note
                          </span>
                          <textarea
                            name="review_note"
                            defaultValue={
                              submission.review_note ?? ''
                            }
                            maxLength={2000}
                            rows={4}
                            className="mt-2 w-full resize-y rounded-xl border border-slate-700 bg-slate-900 px-3 py-2.5 text-sm text-white outline-none focus:border-cyan-400"
                            placeholder="Decision, correction request, or private review note..."
                          />
                        </label>

                        <button
                          type="submit"
                          className="w-full rounded-xl bg-cyan-500/15 px-4 py-3 text-sm font-black text-cyan-100 transition hover:bg-cyan-500/25"
                        >
                          Save credential review
                        </button>
                      </form>
                    )}
                  </div>
                </article>
              );
            })
          )}
        </section>
      </div>
    </main>
  );
}