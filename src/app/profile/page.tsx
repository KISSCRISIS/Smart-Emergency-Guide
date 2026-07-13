'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  FormEvent,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { Button } from '@/components/Button';
import { ProfessionalVerificationBadge } from '@/components/verification/ProfessionalVerificationBadge';
import {
  PROFESSIONAL_GRADE_OPTIONS,
  type ProfessionalGrade,
  getAccountStatusLabel,
  getEducatorStatusLabel,
  getProfessionalGradeLabel,
  getProfessionalVerificationStatusLabel,
  getSubscriptionStatusLabel,
  normalizeProfessionalGrade,
} from '@/lib/auth/profile-access';
import {
  type ClinicalRole,
  getAllClinicalRoleConfigs,
  getClinicalRoleLabel,
  getRoleHomePath,
  normalizeClinicalRole,
} from '@/lib/auth/role-home';
import { createBrowserSupabaseClient } from '@/lib/supabase';

type UserProfile = {
  full_name: string;
  email: string;
  phone: string | null;
  clinical_role: string;
  professional_grade: string;
  primary_learning_track: string;
  role: string;
  account_status: string;
  professional_verification_status: string;
  subscription_status: string;
  educator_status: string;
  profile_completed: boolean;
};

function getInitials(name: string) {
  const parts = name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2);

  return parts.map((part) => part[0]?.toUpperCase()).join('') || 'SEG';
}

function getErrorMessage(error: unknown) {
  return error instanceof Error
    ? error.message
    : 'Could not update your profile. Please try again.';
}

export default function ProfilePage() {
  const router = useRouter();
  const trackOptions = useMemo(
    () => getAllClinicalRoleConfigs(),
    [],
  );

  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [fullName, setFullName] = useState('');
  const [professionalGrade, setProfessionalGrade] =
    useState<ProfessionalGrade>('other');
  const [primaryLearningTrack, setPrimaryLearningTrack] =
    useState<ClinicalRole>('other');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');

  useEffect(() => {
    let active = true;

    async function loadProfile() {
      const supabase = createBrowserSupabaseClient();

      if (!supabase) {
        if (active) {
          setError('Authentication is not configured.');
          setLoading(false);
        }
        return;
      }

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.replace('/auth/sign-in?next=/profile');
        return;
      }

      const { data, error: profileError } = await supabase
        .from('profiles')
        .select(
          'full_name, email, phone, clinical_role, professional_grade, primary_learning_track, role, account_status, professional_verification_status, subscription_status, educator_status, profile_completed',
        )
        .eq('id', user.id)
        .single<UserProfile>();

      if (!active) {
        return;
      }

      if (profileError) {
        setError(profileError.message);
        setLoading(false);
        return;
      }

      if (!data.profile_completed || !data.phone) {
        router.replace('/auth/complete-profile?next=/profile');
        return;
      }

      setProfile(data);
      setFullName(data.full_name);
      setProfessionalGrade(
        normalizeProfessionalGrade(data.professional_grade),
      );
      setPrimaryLearningTrack(
        normalizeClinicalRole(
          data.primary_learning_track ?? data.clinical_role,
        ),
      );
      setLoading(false);
    }

    void loadProfile();

    return () => {
      active = false;
    };
  }, [router]);

  const saveProfile = async (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    setError('');
    setNotice('');

    const normalizedName = fullName.trim();

    if (normalizedName.length < 2) {
      setError('Please enter your full name.');
      return;
    }

    const supabase = createBrowserSupabaseClient();

    if (!supabase) {
      setError('Authentication is not configured.');
      return;
    }

    setSaving(true);

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        throw new Error('Your session is no longer valid.');
      }

      // Phone and protected authorization/review fields are intentionally
      // excluded from normal profile updates.
      const { error: updateError } = await supabase
        .from('profiles')
        .update({
          full_name: normalizedName,
          professional_grade: professionalGrade,
          primary_learning_track: primaryLearningTrack,
          clinical_role: primaryLearningTrack,
        })
        .eq('id', user.id);

      if (updateError) {
        throw updateError;
      }

      setProfile((current) =>
        current
          ? {
              ...current,
              full_name: normalizedName,
              professional_grade: professionalGrade,
              primary_learning_track: primaryLearningTrack,
              clinical_role: primaryLearningTrack,
            }
          : current,
      );
      setNotice(
        'Profile updated. Your default homepage now follows your primary learning track.',
      );
      router.refresh();
    } catch (caughtError: unknown) {
      setError(getErrorMessage(caughtError));
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="mx-auto flex min-h-[70vh] max-w-3xl items-center justify-center">
        <p className="font-bold text-slate-400">
          Loading your profile...
        </p>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="mx-auto max-w-2xl p-8">
        <div className="rounded-3xl border border-rose-400/20 bg-rose-400/10 p-6 text-rose-100">
          {error || 'Profile information is unavailable.'}
        </div>
      </div>
    );
  }

  const homePath = getRoleHomePath(primaryLearningTrack);

  return (
    <main className="px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <aside className="rounded-[2rem] border border-cyan-400/20 bg-slate-900/80 p-6">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 text-2xl font-black text-cyan-100">
            {getInitials(profile.full_name)}
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-2">
            <h1 className="text-2xl font-black text-white">
              {profile.full_name}
            </h1>
            <ProfessionalVerificationBadge
              status={profile.professional_verification_status}
            />
          </div>
          <p className="mt-1 text-sm font-bold text-cyan-200">
            {getProfessionalGradeLabel(profile.professional_grade)}
          </p>
          <p className="mt-1 text-xs font-semibold text-slate-400">
            Primary track:{' '}
            {getClinicalRoleLabel(
              profile.primary_learning_track ??
                profile.clinical_role,
            )}
          </p>

          <dl className="mt-6 grid gap-4 text-sm">
            <div>
              <dt className="font-bold text-slate-500">Account role</dt>
              <dd className="mt-1 font-black text-slate-200">
                {profile.role}
              </dd>
            </div>
            <div>
              <dt className="font-bold text-slate-500">Account status</dt>
              <dd className="mt-1 font-black text-emerald-300">
                {getAccountStatusLabel(profile.account_status)}
              </dd>
            </div>
            <div>
              <dt className="font-bold text-slate-500">
                Professional verification
              </dt>
              <dd className="mt-1 font-black text-slate-200">
                {getProfessionalVerificationStatusLabel(
                  profile.professional_verification_status,
                )}
              </dd>
            </div>
            <div>
              <dt className="font-bold text-slate-500">
                Subscription
              </dt>
              <dd className="mt-1 font-black text-slate-200">
                {getSubscriptionStatusLabel(
                  profile.subscription_status,
                )}
              </dd>
            </div>
            <div>
              <dt className="font-bold text-slate-500">
                Educator status
              </dt>
              <dd className="mt-1 font-black text-slate-200">
                {getEducatorStatusLabel(profile.educator_status)}
              </dd>
            </div>
          </dl>

          <Link
            href={homePath}
            className="mt-6 block rounded-2xl bg-cyan-500/15 px-4 py-3 text-center text-sm font-black text-cyan-100"
          >
            Open My Role Home
          </Link>
        </aside>

        <form
          onSubmit={saveProfile}
          className="space-y-5 rounded-[2rem] bg-white p-7 text-slate-950 shadow-glass"
        >
          <div>
            <h2 className="text-2xl font-black">My Profile</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Update your name, self-reported professional grade, or
              primary SEG learning track.
            </p>
          </div>

          <label className="block">
            <span className="text-sm font-black text-slate-700">
              Full Name
            </span>
            <input
              required
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
            />
          </label>

          <label className="block">
            <span className="text-sm font-black text-slate-700">
              Email
            </span>
            <input
              readOnly
              value={profile.email}
              className="mt-2 w-full cursor-not-allowed rounded-2xl border border-slate-200 bg-slate-100 px-4 py-3 text-slate-600"
            />
          </label>

          <div>
            <span className="text-sm font-black text-slate-700">
              Phone Number
            </span>
            <div className="mt-2 rounded-2xl border border-amber-200 bg-amber-50 p-4">
              <div className="font-black text-slate-900">
                {profile.phone}
              </div>
              <p className="mt-2 text-xs font-semibold leading-5 text-amber-800">
                Your phone number is required and locked after
                registration. It cannot be deleted or changed from the
                normal profile page. A future verified recovery process
                will be required for any phone change.
              </p>
            </div>
          </div>

          <label className="block">
            <span className="text-sm font-black text-slate-700">
              Professional Grade
            </span>
            <select
              required
              value={professionalGrade}
              onChange={(event) =>
                setProfessionalGrade(
                  normalizeProfessionalGrade(event.target.value),
                )
              }
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
            >
              {PROFESSIONAL_GRADE_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <p className="mt-2 text-xs leading-5 text-slate-500">
              This field is self-reported. Specialist or Consultant does
              not become verified and does not receive a badge until
              Admin reviews official credentials.
            </p>
          </label>
          <section
            aria-labelledby="learning-path-heading"
            className="space-y-3"
          >
            <div>
              <h3
                id="learning-path-heading"
                className="text-sm font-black text-slate-700"
              >
                Learning Path Inside SEG
              </h3>
              <p className="mt-2 text-xs leading-5 text-slate-500">
                Choose what you want SEG to prioritize for learning.
                This is separate from your real professional grade and
                does not grant verification, permissions, or a badge.
              </p>
            </div>

            <div
              role="radiogroup"
              aria-label="Learning Path Inside SEG"
              className="grid gap-3 sm:grid-cols-2"
            >
              {trackOptions.map((option) => {
                const selected =
                  primaryLearningTrack === option.value;

                return (
                  <button
                    key={option.value}
                    type="button"
                    role="radio"
                    aria-checked={selected}
                    onClick={() =>
                      setPrimaryLearningTrack(option.value)
                    }
                    className={[
                      'rounded-2xl border p-4 text-left transition',
                      selected
                        ? 'border-cyan-400 bg-cyan-50 ring-4 ring-cyan-100'
                        : 'border-slate-200 bg-white hover:border-cyan-300 hover:bg-slate-50',
                    ].join(' ')}
                  >
                    <span
                      className={[
                        'block text-sm font-black',
                        selected
                          ? 'text-cyan-900'
                          : 'text-slate-900',
                      ].join(' ')}
                    >
                      {option.label}
                    </span>

                    <span className="mt-2 block text-xs leading-5 text-slate-500">
                      {option.description}
                    </span>

                    {selected ? (
                      <span className="mt-3 inline-flex rounded-full bg-cyan-600 px-2.5 py-1 text-[10px] font-black uppercase tracking-wide text-white">
                        Primary learning path
                      </span>
                    ) : null}
                  </button>
                );
              })}
            </div>
          </section>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs leading-6 text-slate-600">
            Your phone, email, full date of birth, credential documents,
            license details, and Admin review notes remain private by
            default. Public professional details will require your choice
            and the approved verification workflow.
          </div>

          {notice ? (
            <div
              role="status"
              className="rounded-2xl bg-emerald-50 p-3 text-sm font-bold text-emerald-800"
            >
              {notice}
            </div>
          ) : null}

          {error ? (
            <div
              role="alert"
              className="rounded-2xl bg-rose-50 p-3 text-sm font-bold text-rose-800"
            >
              {error}
            </div>
          ) : null}

          <Button type="submit" disabled={saving}>
            {saving ? 'Saving...' : 'Save Profile'}
          </Button>
        </form>
      </div>
    </main>
  );
}
