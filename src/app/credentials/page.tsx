'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from 'react';

import { createBrowserSupabaseClient } from '@/lib/supabase';

const MAX_FILE_SIZE = 10 * 1024 * 1024;

const ALLOWED_MIME_TYPES = new Set([
  'application/pdf',
  'image/jpeg',
  'image/png',
]);

const CREDENTIAL_TYPES = [
  'Professional License',
  'Residency Certificate',
  'Board Certificate',
  'Specialist Certificate',
  'Consultant Certificate',
  'Degree / Graduation Certificate',
  'Other Professional Credential',
] as const;

type Submission = {
  id: string;
  credential_type: string;
  document_title: string;
  issuing_authority: string | null;
  original_filename: string;
  submission_status: string;
  submitted_at: string;
  reviewed_at: string | null;
  review_note: string | null;
};

function statusLabel(status: string) {
  return status
    .split('_')
    .map(
      (part) =>
        part.charAt(0).toUpperCase() + part.slice(1),
    )
    .join(' ');
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

function extensionFor(file: File) {
  switch (file.type) {
    case 'application/pdf':
      return 'pdf';
    case 'image/jpeg':
      return 'jpg';
    case 'image/png':
      return 'png';
    default:
      return '';
  }
}

function optionalText(
  formData: FormData,
  field: string,
) {
  const value = formData.get(field);

  return typeof value === 'string' && value.trim()
    ? value.trim()
    : null;
}

export default function CredentialsPage() {
  const router = useRouter();

  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');

  const loadSubmissions = useCallback(async () => {
    const supabase = createBrowserSupabaseClient();

    if (!supabase) {
      setError('Authentication is not configured.');
      setLoading(false);
      return;
    }

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      router.replace('/auth/sign-in?next=/credentials');
      return;
    }

    const { data, error: queryError } = await supabase
      .from('professional_credential_submissions')
      .select(
        'id, credential_type, document_title, issuing_authority, original_filename, submission_status, submitted_at, reviewed_at, review_note',
      )
      .eq('owner_user_id', user.id)
      .order('created_at', { ascending: false });

    if (queryError) {
      setError(queryError.message);
      setLoading(false);
      return;
    }

    setSubmissions((data ?? []) as Submission[]);
    setLoading(false);
  }, [router]);

  useEffect(() => {
    void loadSubmissions();
  }, [loadSubmissions]);

  async function submitCredential(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const fileValue = formData.get('document');

    setError('');
    setNotice('');

    if (!(fileValue instanceof File) || fileValue.size === 0) {
      setError('Choose a credential document.');
      return;
    }

    if (!ALLOWED_MIME_TYPES.has(fileValue.type)) {
      setError('Use PDF, JPEG, or PNG only.');
      return;
    }

    if (fileValue.size > MAX_FILE_SIZE) {
      setError('The document must be 10 MB or smaller.');
      return;
    }

    const credentialType = optionalText(
      formData,
      'credential_type',
    );
    const documentTitle = optionalText(
      formData,
      'document_title',
    );

    if (!credentialType || !documentTitle) {
      setError('Credential type and document title are required.');
      return;
    }

    const extension = extensionFor(fileValue);

    if (!extension) {
      setError('Unsupported document format.');
      return;
    }

    const supabase = createBrowserSupabaseClient();

    if (!supabase) {
      setError('Authentication is not configured.');
      return;
    }

    setSubmitting(true);

    let uploadedPath = '';

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        throw new Error('Your session is no longer valid.');
      }

      const submissionId = crypto.randomUUID();

      uploadedPath =
        `${user.id}/${submissionId}/credential.${extension}`;

      const { error: uploadError } = await supabase.storage
        .from('credential-documents')
        .upload(uploadedPath, fileValue, {
          cacheControl: '3600',
          contentType: fileValue.type,
          upsert: false,
        });

      if (uploadError) {
        throw uploadError;
      }

      const { error: submissionError } = await supabase.rpc(
        'submit_professional_credential_submission',
        {
          p_id: submissionId,
          p_credential_type: credentialType,
          p_document_title: documentTitle,
          p_issuing_authority: optionalText(
            formData,
            'issuing_authority',
          ),
          p_license_number: optionalText(
            formData,
            'license_number',
          ),
          p_country: optionalText(formData, 'country'),
          p_issue_date: optionalText(formData, 'issue_date'),
          p_expiry_date: optionalText(formData, 'expiry_date'),
          p_document_path: uploadedPath,
          p_original_filename: fileValue.name,
          p_mime_type: fileValue.type,
          p_file_size_bytes: fileValue.size,
        },
      );

      if (submissionError) {
        throw submissionError;
      }

      form.reset();
      setNotice(
        'Credential submitted securely. Another Admin must review it before verification.',
      );
      await loadSubmissions();
      router.refresh();
    } catch (caughtError: unknown) {
      if (uploadedPath) {
        await supabase.storage
          .from('credential-documents')
          .remove([uploadedPath]);
      }

      setError(
        caughtError instanceof Error
          ? caughtError.message
          : 'Could not submit the credential.',
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl space-y-6">
        <section className="rounded-[2rem] border border-cyan-300/20 bg-gradient-to-br from-slate-900 to-cyan-950/40 p-6 sm:p-8">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
            Private professional verification
          </p>
          <h1 className="mt-3 text-3xl font-black text-white sm:text-4xl">
            My Professional Credentials
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
            Upload official professional documents for Admin review.
            Self-reported grade never grants verification by itself.
          </p>

          <Link
            href="/profile"
            className="mt-5 inline-flex rounded-xl border border-slate-700 px-4 py-2 text-sm font-black text-slate-200 transition hover:border-cyan-300/40 hover:text-cyan-100"
          >
            Back to My Profile
          </Link>
        </section>

        <section className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
          <form
            onSubmit={submitCredential}
            className="space-y-5 rounded-[2rem] bg-white p-6 text-slate-950 shadow-glass sm:p-8"
          >
            <div>
              <h2 className="text-2xl font-black">
                Submit a credential
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Documents remain private and are available only to
                you and authorized Admin reviewers.
              </p>
            </div>

            <label className="block">
              <span className="text-sm font-black text-slate-700">
                Credential type
              </span>
              <select
                required
                name="credential_type"
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
              >
                {CREDENTIAL_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="text-sm font-black text-slate-700">
                Document title
              </span>
              <input
                required
                name="document_title"
                maxLength={200}
                placeholder="Example: Jordan Medical Council license"
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
              />
            </label>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-black text-slate-700">
                  Issuing authority
                </span>
                <input
                  name="issuing_authority"
                  maxLength={200}
                  placeholder="Authority or institution"
                  className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
                />
              </label>

              <label className="block">
                <span className="text-sm font-black text-slate-700">
                  License / certificate number
                </span>
                <input
                  name="license_number"
                  maxLength={120}
                  placeholder="Optional"
                  className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
                />
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <label className="block">
                <span className="text-sm font-black text-slate-700">
                  Country
                </span>
                <input
                  name="country"
                  maxLength={100}
                  placeholder="Optional"
                  className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
                />
              </label>

              <label className="block">
                <span className="text-sm font-black text-slate-700">
                  Issue date
                </span>
                <input
                  type="date"
                  name="issue_date"
                  className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
                />
              </label>

              <label className="block">
                <span className="text-sm font-black text-slate-700">
                  Expiry date
                </span>
                <input
                  type="date"
                  name="expiry_date"
                  className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
                />
              </label>
            </div>

            <label className="block">
              <span className="text-sm font-black text-slate-700">
                Credential document
              </span>
              <input
                required
                type="file"
                name="document"
                accept="application/pdf,image/jpeg,image/png"
                className="mt-2 block w-full rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-4 py-5 text-sm file:mr-4 file:rounded-xl file:border-0 file:bg-cyan-100 file:px-4 file:py-2 file:font-black file:text-cyan-950"
              />
              <p className="mt-2 text-xs leading-5 text-slate-500">
                PDF, JPEG, or PNG. Maximum 10 MB.
              </p>
            </label>

            {notice ? (
              <div
                role="status"
                className="rounded-2xl bg-emerald-50 p-4 text-sm font-bold text-emerald-800"
              >
                {notice}
              </div>
            ) : null}

            {error ? (
              <div
                role="alert"
                className="rounded-2xl bg-rose-50 p-4 text-sm font-bold text-rose-800"
              >
                {error}
              </div>
            ) : null}

            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-2xl bg-cyan-950 px-5 py-3.5 text-sm font-black text-white transition hover:bg-cyan-900 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting
                ? 'Uploading securely...'
                : 'Submit for verification'}
            </button>
          </form>

          <section className="space-y-4">
            <div>
              <h2 className="text-2xl font-black text-white">
                Submission history
              </h2>
              <p className="mt-2 text-sm text-slate-400">
                Admin decisions and private correction notes appear here.
              </p>
            </div>

            {loading ? (
              <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 font-bold text-slate-400">
                Loading submissions...
              </div>
            ) : submissions.length === 0 ? (
              <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 text-sm leading-7 text-slate-400">
                No professional credentials have been submitted yet.
              </div>
            ) : (
              submissions.map((submission) => (
                <article
                  key={submission.id}
                  className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-black text-white">
                      {submission.document_title}
                    </h3>
                    <span
                      className={[
                        'rounded-full border px-2.5 py-1 text-[11px] font-black',
                        statusClass(submission.submission_status),
                      ].join(' ')}
                    >
                      {statusLabel(submission.submission_status)}
                    </span>
                  </div>

                  <dl className="mt-4 grid gap-3 text-sm">
                    <div>
                      <dt className="font-bold text-slate-500">
                        Type
                      </dt>
                      <dd className="mt-1 text-slate-200">
                        {submission.credential_type}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-bold text-slate-500">
                        File
                      </dt>
                      <dd className="mt-1 break-all text-slate-200">
                        {submission.original_filename}
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
                    <div>
                      <dt className="font-bold text-slate-500">
                        Last review
                      </dt>
                      <dd className="mt-1 text-slate-200">
                        {formatDate(submission.reviewed_at)}
                      </dd>
                    </div>
                  </dl>

                  {submission.review_note ? (
                    <div className="mt-4 rounded-2xl border border-amber-300/20 bg-amber-300/10 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.12em] text-amber-200">
                        Private Admin note
                      </p>
                      <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-amber-50">
                        {submission.review_note}
                      </p>
                    </div>
                  ) : null}
                </article>
              ))
            )}
          </section>
        </section>
      </div>
    </main>
  );
}