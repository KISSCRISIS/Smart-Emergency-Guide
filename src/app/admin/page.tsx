import { redirect } from 'next/navigation';

import { updateProfessionalVerification } from '@/app/admin/actions';
import { AdminLevelBadge } from '@/components/verification/AdminLevelBadge';
import {
  PROFESSIONAL_VERIFICATION_STATUS_LABELS,
  getProfessionalGradeLabel,
  getProfessionalVerificationStatusLabel,
  type ProfessionalVerificationStatus,
} from '@/lib/auth/profile-access';
import { getClinicalRoleLabel } from '@/lib/auth/role-home';
import { createServerSupabaseClient } from '@/lib/supabase/server';

type AdminPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

type VerificationProfile = {
  id: string;
  full_name: string;
  email: string;
  professional_grade: string;
  primary_learning_track: string;
  professional_verification_status: string;
  admin_level: string;
  professional_verification_review_note: string | null;
  professional_verification_reviewed_at: string | null;
  created_at: string;
};

const STATUS_OPTIONS = Object.keys(
  PROFESSIONAL_VERIFICATION_STATUS_LABELS,
) as ProfessionalVerificationStatus[];

const PRIORITY: Record<string, number> = {
  submitted: 0,
  under_review: 1,
  needs_changes: 2,
  draft: 3,
  not_submitted: 4,
  verified: 5,
  rejected: 6,
  revoked: 7,
  expired: 8,
};

function formatDate(value: string | null) {
  if (!value) {
    return 'Not reviewed';
  }

  return new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date(value));
}

function statusClass(status: string) {
  switch (status) {
    case 'verified':
      return 'border-emerald-300/25 bg-emerald-300/10 text-emerald-200';
    case 'submitted':
    case 'under_review':
      return 'border-cyan-300/25 bg-cyan-300/10 text-cyan-100';
    case 'needs_changes':
      return 'border-amber-300/25 bg-amber-300/10 text-amber-100';
    case 'rejected':
    case 'revoked':
    case 'expired':
      return 'border-rose-300/25 bg-rose-300/10 text-rose-100';
    default:
      return 'border-slate-700 bg-slate-800/70 text-slate-300';
  }
}

export default async function AdminPage({
  searchParams,
}: AdminPageProps) {
  const params = await searchParams;
  const updated = params.updated === '1';

  const supabase = await createServerSupabaseClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/auth/sign-in?next=/admin');
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
    .from('profiles')
    .select(
      'id, full_name, email, professional_grade, primary_learning_track, professional_verification_status, admin_level, professional_verification_review_note, professional_verification_reviewed_at, created_at',
    )
    .order('created_at', { ascending: false })
    .limit(200);

  const profiles = ((data ?? []) as VerificationProfile[]).sort(
    (a, b) =>
      (PRIORITY[a.professional_verification_status] ?? 99) -
      (PRIORITY[b.professional_verification_status] ?? 99),
  );

  const counts = profiles.reduce<Record<string, number>>(
    (current, profile) => {
      current[profile.professional_verification_status] =
        (current[profile.professional_verification_status] ?? 0) + 1;

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
            Professional Verification Queue
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
            Review professional verification status using real Supabase
            profiles. Self-reported professional grade is shown for
            context only and does not grant a badge by itself.
          </p>

          {updated ? (
            <div
              role="status"
              className="mt-5 rounded-2xl border border-emerald-300/25 bg-emerald-300/10 px-4 py-3 text-sm font-bold text-emerald-100"
            >
              Professional verification was updated successfully.
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
            Could not load verification profiles: {error.message}
          </div>
        ) : null}

        <section className="space-y-4">
          {profiles.length === 0 ? (
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 text-center text-slate-400">
              No profiles are available.
            </div>
          ) : (
            profiles.map((profile) => (
              <article
                key={profile.id}
                className="rounded-[1.75rem] border border-slate-800 bg-slate-900/70 p-5"
              >
                <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_minmax(360px,0.8fr)]">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-lg font-black text-white">
                        {profile.full_name}
                      </h2>
                      <AdminLevelBadge level={profile.admin_level} compact />
                      <span
                        className={[
                          'rounded-full border px-2.5 py-1 text-[11px] font-black',
                          statusClass(
                            profile.professional_verification_status,
                          ),
                        ].join(' ')}
                      >
                        {getProfessionalVerificationStatusLabel(
                          profile.professional_verification_status,
                        )}
                      </span>
                    </div>

                    <p className="mt-2 break-all text-sm text-slate-400">
                      {profile.email}
                    </p>

                    <dl className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
                      <div className="rounded-2xl bg-slate-950/60 p-3">
                        <dt className="text-xs font-bold text-slate-500">
                          Self-reported grade
                        </dt>
                        <dd className="mt-1 font-black text-slate-200">
                          {getProfessionalGradeLabel(
                            profile.professional_grade,
                          )}
                        </dd>
                      </div>

                      <div className="rounded-2xl bg-slate-950/60 p-3">
                        <dt className="text-xs font-bold text-slate-500">
                          Learning path
                        </dt>
                        <dd className="mt-1 font-black text-slate-200">
                          {getClinicalRoleLabel(
                            profile.primary_learning_track,
                          )}
                        </dd>
                      </div>
                    </dl>

                    <p className="mt-4 text-xs font-semibold text-slate-500">
                      Last review: {formatDate(profile.professional_verification_reviewed_at)}
                    </p>
                  </div>

                  <form
                    action={updateProfessionalVerification}
                    className="space-y-3 rounded-2xl border border-slate-800 bg-slate-950/60 p-4"
                  >
                    <input
                      type="hidden"
                      name="profile_id"
                      value={profile.id}
                    />

                    <label className="block">
                      <span className="text-xs font-black text-slate-400">
                        Verification status
                      </span>
                      <select
                        name="professional_verification_status"
                        defaultValue={
                          profile.professional_verification_status
                        }
                        className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2.5 text-sm font-bold text-white outline-none focus:border-cyan-400"
                      >
                        {STATUS_OPTIONS.map((status) => (
                          <option key={status} value={status}>
                            {
                              PROFESSIONAL_VERIFICATION_STATUS_LABELS[
                                status
                              ]
                            }
                          </option>
                        ))}
                      </select>
                    </label>

                    <label className="block">
                      <span className="text-xs font-black text-slate-400">
                        Private Admin review note
                      </span>
                      <textarea
                        name="review_note"
                        defaultValue={profile.professional_verification_review_note ?? ''}
                        maxLength={2000}
                        rows={3}
                        className="mt-2 w-full resize-y rounded-xl border border-slate-700 bg-slate-900 px-3 py-2.5 text-sm text-white outline-none focus:border-cyan-400"
                        placeholder="Reason, requested correction, or review note..."
                      />
                    </label>

                    <button
                      type="submit"
                      className="w-full rounded-xl bg-cyan-500/15 px-4 py-3 text-sm font-black text-cyan-100 transition hover:bg-cyan-500/25"
                    >
                      Save verification review
                    </button>
                  </form>
                </div>
              </article>
            ))
          )}
        </section>

        <div className="rounded-3xl border border-amber-300/20 bg-amber-300/10 p-5 text-sm leading-7 text-amber-100">
          Bronze, Silver, Gold, and verified Consultant titles are not
          assigned in this batch. They require separate Admin-controlled
          verified-grade and academic-badge fields, so they cannot be
          derived from the user-editable professional grade.
        </div>
      </div>
    </main>
  );
}