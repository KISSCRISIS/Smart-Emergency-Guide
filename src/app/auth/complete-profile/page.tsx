'use client';

import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  FormEvent,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { Button } from '@/components/Button';
import {
  PROFESSIONAL_GRADE_OPTIONS,
  type ProfessionalGrade,
  getSuggestedTrackForProfessionalGrade,
  normalizeProfessionalGrade,
} from '@/lib/auth/profile-access';
import {
  type ClinicalRole,
  getAllClinicalRoleConfigs,
  getRoleHomePath,
  normalizeClinicalRole,
} from '@/lib/auth/role-home';
import {
  createBrowserSupabaseClient,
  isSupabaseConfigured,
} from '@/lib/supabase';

type ProfileForm = {
  fullName: string;
  phone: string;
  professionalGrade: ProfessionalGrade;
  primaryLearningTrack: ClinicalRole;
  acceptedTerms: boolean;
  acceptedEducationalDisclaimer: boolean;
};

type ExistingProfile = {
  full_name: string;
  phone: string | null;
  professional_grade: string | null;
  primary_learning_track: string | null;
  clinical_role: string;
  profile_completed: boolean;
  terms_accepted_at: string | null;
  educational_disclaimer_accepted_at: string | null;
};

const E164_PHONE_PATTERN = /^\+[1-9][0-9]{7,14}$/;
const INPUT_CLASS_NAME =
  'mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100';

const PRIMARY_TRACK_OPTIONS = getAllClinicalRoleConfigs().map(
  (option) => ({
    value: option.value,
    label: option.label,
  }),
);

function normalizePhone(value: string) {
  return value.replace(/[\s()-]/g, '');
}

function getSafeNextPath(value: string | null) {
  if (!value || !value.startsWith('/') || value.startsWith('//')) {
    return null;
  }

  return value;
}

function getErrorMessage(error: unknown) {
  return error instanceof Error
    ? error.message
    : 'Could not complete the profile. Please try again.';
}

export default function CompleteProfilePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const requestedNext = useMemo(
    () => getSafeNextPath(searchParams.get('next')),
    [searchParams],
  );

  const [form, setForm] = useState<ProfileForm>({
    fullName: '',
    phone: '',
    professionalGrade: 'other',
    primaryLearningTrack: 'other',
    acceptedTerms: false,
    acceptedEducationalDisclaimer: false,
  });
  const [phoneLocked, setPhoneLocked] = useState(false);
  const [loadingProfile, setLoadingProfile] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;

    async function loadProfile() {
      if (!isSupabaseConfigured) {
        if (active) {
          setError('Supabase is not configured.');
          setLoadingProfile(false);
        }
        return;
      }

      const supabase = createBrowserSupabaseClient();

      if (!supabase) {
        if (active) {
          setError('Supabase configuration is incomplete.');
          setLoadingProfile(false);
        }
        return;
      }

      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        router.replace('/auth/sign-in');
        return;
      }

      const {
        data: profile,
        error: profileError,
      } = await supabase
        .from('profiles')
        .select(
          'full_name, phone, professional_grade, primary_learning_track, clinical_role, profile_completed, terms_accepted_at, educational_disclaimer_accepted_at',
        )
        .eq('id', user.id)
        .single<ExistingProfile>();

      if (!active) {
        return;
      }

      if (profileError) {
        setError(profileError.message);
        setLoadingProfile(false);
        return;
      }

      const primaryLearningTrack = normalizeClinicalRole(
        profile.primary_learning_track ?? profile.clinical_role,
      );

      if (profile.profile_completed) {
        router.replace(
          requestedNext ??
            getRoleHomePath(primaryLearningTrack),
        );
        return;
      }

      setPhoneLocked(Boolean(profile.phone));
      setForm({
        fullName: profile.full_name ?? '',
        phone: profile.phone ?? '',
        professionalGrade: normalizeProfessionalGrade(
          profile.professional_grade,
        ),
        primaryLearningTrack,
        acceptedTerms: Boolean(profile.terms_accepted_at),
        acceptedEducationalDisclaimer: Boolean(
          profile.educational_disclaimer_accepted_at,
        ),
      });
      setLoadingProfile(false);
    }

    void loadProfile();

    return () => {
      active = false;
    };
  }, [requestedNext, router]);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    const fullName = form.fullName.trim();
    const phone = normalizePhone(form.phone);

    if (fullName.length < 2) {
      setError('Please enter your full name.');
      return;
    }

    if (!E164_PHONE_PATTERN.test(phone)) {
      setError(
        'Use an international phone number, for example +9627XXXXXXXX.',
      );
      return;
    }

    if (!form.acceptedTerms || !form.acceptedEducationalDisclaimer) {
      setError(
        'You must accept the platform terms and educational disclaimer.',
      );
      return;
    }

    const supabase = createBrowserSupabaseClient();

    if (!supabase) {
      setError('Supabase configuration is incomplete.');
      return;
    }

    setSubmitting(true);

    try {
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        throw new Error('Your session is no longer valid. Sign in again.');
      }

      const acceptedAt = new Date().toISOString();

      const profileUpdate: {
        full_name: string;
        professional_grade: ProfessionalGrade;
        primary_learning_track: ClinicalRole;
        clinical_role: ClinicalRole;
        terms_accepted_at: string;
        educational_disclaimer_accepted_at: string;
        profile_completed: boolean;
        phone?: string;
      } = {
        full_name: fullName,
        professional_grade: form.professionalGrade,
        primary_learning_track: form.primaryLearningTrack,
        clinical_role: form.primaryLearningTrack,
        terms_accepted_at: acceptedAt,
        educational_disclaimer_accepted_at: acceptedAt,
        profile_completed: true,
      };

      if (!phoneLocked) {
        profileUpdate.phone = phone;
      }

      const { error: updateError } = await supabase
        .from('profiles')
        .update(profileUpdate)
        .eq('id', user.id);

      if (updateError) {
        throw updateError;
      }

      router.replace(
        requestedNext ??
          getRoleHomePath(form.primaryLearningTrack),
      );
      router.refresh();
    } catch (caughtError: unknown) {
      setError(getErrorMessage(caughtError));
    } finally {
      setSubmitting(false);
    }
  };

  if (loadingProfile) {
    return (
      <div className="mx-auto flex min-h-[70vh] max-w-2xl items-center justify-center">
        <p className="font-bold text-slate-600">
          Loading your profile...
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto flex min-h-[85vh] max-w-4xl items-center justify-center">
      <div className="grid w-full overflow-hidden rounded-[2rem] bg-white shadow-glass lg:grid-cols-2">
        <div className="bg-medical-gradient p-8 text-white">
          <Image
            src="/brand/seg-logo-final.png"
            width={110}
            height={110}
            alt="SEG"
            className="h-auto w-32 object-contain drop-shadow-2xl"
          />
          <h1 className="mt-6 text-3xl font-black">
            Complete Your Profile
          </h1>
          <p className="mt-3 leading-7 text-slate-100">
            Add the required information to unlock normal access to the
            SEG learning platform.
          </p>
          <p className="mt-4 rounded-2xl bg-white/10 p-4 text-sm arabic-support">
            أكمل البيانات المطلوبة، بما فيها رقم الهاتف، وحدد درجتك
            المهنية ومسارك التعليمي الأساسي.
          </p>
        </div>

        <form onSubmit={submit} className="space-y-4 p-8">
          <label className="block">
            <span className="text-sm font-bold text-slate-700">
              Full Name
            </span>
            <input
              required
              autoComplete="name"
              value={form.fullName}
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  fullName: event.target.value,
                }))
              }
              className={INPUT_CLASS_NAME}
            />
          </label>

          <label className="block">
            <span className="text-sm font-bold text-slate-700">
              Phone Number
            </span>
            <input
              required
              readOnly={phoneLocked}
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="+9627XXXXXXXX"
              value={form.phone}
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  phone: event.target.value,
                }))
              }
              className={`${INPUT_CLASS_NAME} ${
                phoneLocked
                  ? 'cursor-not-allowed bg-slate-100 text-slate-600'
                  : 'bg-white text-slate-900'
              }`}
            />
            <span className="mt-1 block text-xs text-slate-500">
              {phoneLocked
                ? 'Your saved phone number is locked and cannot be removed from this page.'
                : 'Required for email, Google, and Facebook accounts. It becomes locked after saving.'}
            </span>
          </label>

          <label className="block">
            <span className="text-sm font-bold text-slate-700">
              Professional Grade
            </span>
            <select
              required
              value={form.professionalGrade}
              onChange={(event) => {
                const professionalGrade =
                  event.target.value as ProfessionalGrade;

                setForm((current) => ({
                  ...current,
                  professionalGrade,
                  primaryLearningTrack:
                    current.primaryLearningTrack === 'other'
                      ? getSuggestedTrackForProfessionalGrade(
                          professionalGrade,
                        )
                      : current.primaryLearningTrack,
                }));
              }}
              className={`${INPUT_CLASS_NAME} bg-white text-slate-900`}
            >
              {PROFESSIONAL_GRADE_OPTIONS.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  className="bg-white text-slate-900"
                >
                  {option.label}
                </option>
              ))}
            </select>
            <span className="mt-1 block text-xs leading-5 text-slate-500">
              Self-reported only. Specialist or Consultant remains
              unverified until reviewed by SEG Admin.
            </span>
          </label>

          <label className="block">
            <span className="text-sm font-bold text-slate-700">
              Primary Learning Track
            </span>
            <select
              required
              value={form.primaryLearningTrack}
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  primaryLearningTrack: normalizeClinicalRole(
                    event.target.value,
                  ),
                }))
              }
              className={`${INPUT_CLASS_NAME} bg-white text-slate-900`}
            >
              {PRIMARY_TRACK_OPTIONS.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  className="bg-white text-slate-900"
                >
                  {option.label}
                </option>
              ))}
            </select>
            <span className="mt-1 block text-xs leading-5 text-slate-500">
              This controls the role-specific homepage opened after
              sign-in.
            </span>
          </label>

          <label className="flex items-start gap-3 rounded-2xl border border-slate-200 p-4">
            <input
              required
              type="checkbox"
              checked={form.acceptedTerms}
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  acceptedTerms: event.target.checked,
                }))
              }
              className="mt-1 h-4 w-4 accent-emerald-600"
            />
            <span className="text-sm leading-6 text-slate-700">
              I confirm that my information is accurate and accept the
              platform terms.
            </span>
          </label>

          <label className="flex items-start gap-3 rounded-2xl border border-slate-200 p-4">
            <input
              required
              type="checkbox"
              checked={form.acceptedEducationalDisclaimer}
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  acceptedEducationalDisclaimer:
                    event.target.checked,
                }))
              }
              className="mt-1 h-4 w-4 accent-emerald-600"
            />
            <span className="text-sm leading-6 text-slate-700">
              I understand that SEG is educational and does not replace
              licensed clinical judgment or official protocols.
            </span>
          </label>

          {error ? (
            <div
              role="alert"
              className="rounded-2xl bg-rose-50 p-3 text-sm font-bold text-rose-800"
            >
              {error}
            </div>
          ) : null}

          <Button type="submit" disabled={submitting}>
            {submitting ? 'Saving...' : 'Complete Profile'}
          </Button>
        </form>
      </div>
    </div>
  );
}
