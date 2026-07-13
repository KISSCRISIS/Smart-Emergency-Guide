'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

import { Button } from '@/components/Button';
import {
  PROFESSIONAL_GRADE_OPTIONS,
  type ProfessionalGrade,
  getSuggestedTrackForProfessionalGrade,
} from '@/lib/auth/profile-access';
import {
  type ClinicalRole,
  getAllClinicalRoleConfigs,
} from '@/lib/auth/role-home';
import { APP_NAME } from '@/lib/constants';
import {
  createBrowserSupabaseClient,
  isSupabaseConfigured,
} from '@/lib/supabase';

type RegistrationForm = {
  fullName: string;
  email: string;
  phone: string;
  professionalGrade: ProfessionalGrade | '';
  primaryLearningTrack: ClinicalRole | '';
  password: string;
  acceptedTerms: boolean;
  acceptedEducationalDisclaimer: boolean;
};

const PRIMARY_TRACK_OPTIONS = getAllClinicalRoleConfigs().map(
  (option) => ({
    value: option.value,
    label: option.label,
  }),
);

const E164_PHONE_PATTERN = /^\+[1-9][0-9]{7,14}$/;
const INPUT_CLASS_NAME =
  'mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100';

function normalizePhone(value: string) {
  return value.replace(/[\s()-]/g, '');
}

function getErrorMessage(error: unknown) {
  return error instanceof Error
    ? error.message
    : 'Could not create the account. Check the information and try again.';
}

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState<RegistrationForm>({
    fullName: '',
    email: '',
    phone: '',
    professionalGrade: '',
    primaryLearningTrack: '',
    password: '',
    acceptedTerms: false,
    acceptedEducationalDisclaimer: false,
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    const fullName = form.fullName.trim();
    const email = form.email.trim().toLowerCase();
    const phone = normalizePhone(form.phone);
    const professionalGrade = form.professionalGrade;
    const primaryLearningTrack = form.primaryLearningTrack;

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

    if (!professionalGrade) {
      setError('Please select your professional grade.');
      return;
    }

    if (!primaryLearningTrack) {
      setError('Please select your primary learning track.');
      return;
    }

    if (form.password.length < 8) {
      setError('Password must contain at least 8 characters.');
      return;
    }

    if (!form.acceptedTerms || !form.acceptedEducationalDisclaimer) {
      setError(
        'You must accept the platform terms and educational disclaimer.',
      );
      return;
    }

    setLoading(true);

    const pendingUser = {
      fullName,
      email,
      phone,
      professionalGrade,
      primaryLearningTrack,
      acceptedTerms: true,
      acceptedEducationalDisclaimer: true,
      accountStatus: 'active',
      professionalVerificationStatus: 'not_submitted',
      subscriptionStatus: 'free',
      educatorStatus: 'not_applied',
      role: 'Student',
      aiEnabled: false,
      createdAt: new Date().toISOString(),
    };

    try {
      if (isSupabaseConfigured) {
        const supabase = createBrowserSupabaseClient();

        if (!supabase) {
          throw new Error(
            'Supabase configuration is incomplete. Check the public URL and publishable key.',
          );
        }

        const { data, error: signUpError } = await supabase.auth.signUp({
          email,
          password: form.password,
          options: {
            emailRedirectTo: `${window.location.origin}/auth/callback`,
            data: {
              full_name: fullName,
              phone,
              professional_grade: professionalGrade,
              primary_learning_track: primaryLearningTrack,
              clinical_role: primaryLearningTrack,
              accepted_terms: true,
              accepted_educational_disclaimer: true,
            },
          },
        });

        if (signUpError) {
          throw signUpError;
        }

        if (!data.user) {
          throw new Error('Supabase did not create the user account.');
        }

        router.replace('/pending-approval?stage=email-confirmation');
        return;
      }

      // Temporary development fallback. It never stores the password.
      localStorage.setItem('seg_pending_user', JSON.stringify(pendingUser));

      const storedUsers = JSON.parse(
        localStorage.getItem('seg_pending_users') || '[]',
      ) as unknown;
      const pendingUsers = Array.isArray(storedUsers) ? storedUsers : [];

      pendingUsers.unshift(pendingUser);
      localStorage.setItem(
        'seg_pending_users',
        JSON.stringify(pendingUsers),
      );

      router.replace('/pending-approval?stage=email-confirmation');
    } catch (caughtError: unknown) {
      setError(getErrorMessage(caughtError));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto flex min-h-[88vh] max-w-5xl items-center justify-center">
      <div className="grid w-full overflow-hidden rounded-[2rem] bg-white shadow-glass lg:grid-cols-2">
        <div className="bg-medical-gradient p-8 text-white">
          <Image
            src="/brand/seg-logo-final.png"
            width={150}
            height={150}
            alt="Smart Emergency Guide"
            priority
            className="h-auto w-36 object-contain drop-shadow-2xl"
          />

          <p className="mt-6 text-sm font-black uppercase tracking-[0.2em] text-cyan-100">
            Welcome to SEG
          </p>

          <h1 className="mt-2 text-3xl font-black">
            Start Your Learning Journey
          </h1>

          <p className="mt-3 leading-7 text-slate-100">
            Create your account, confirm your email, complete the required
            information, and enter the platform directly.
          </p>

          <div className="mt-5 space-y-3">
            <p className="rounded-2xl bg-white/10 p-4 text-sm leading-7 arabic-support">
              أهلًا بك في دليل الطوارئ الذكي. أنشئ حسابك، أكّد بريدك
              الإلكتروني، وأكمل بياناتك لتبدأ التعلّم مباشرة.
            </p>

            <p className="rounded-2xl border border-cyan-200/25 bg-cyan-100/10 p-4 text-sm font-bold leading-7 arabic-support">
              تذكير مهم: رقم الهاتف بصيغة دولية مطلوب لإتمام التسجيل، بما
              في ذلك الحسابات التي سيتم ربطها عبر Google أو Facebook.
            </p>
          </div>
        </div>

        <form onSubmit={submit} className="space-y-4 p-8">
          <div>
            <h2 className="text-2xl font-black text-slate-950">{APP_NAME}</h2>
            <p className="mt-1 text-sm leading-6 text-slate-600">
              Complete the fields below. Basic access does not require
              manual admin approval.
            </p>
          </div>

          <label className="block">
            <span className="text-sm font-bold text-slate-700">Full Name</span>
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
            <span className="text-sm font-bold text-slate-700">Email</span>
            <input
              required
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  email: event.target.value,
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
              className={INPUT_CLASS_NAME}
            />
            <span className="mt-1 block text-xs font-semibold text-amber-700">
              Required to complete registration. Use international format.
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
                    current.primaryLearningTrack ||
                    getSuggestedTrackForProfessionalGrade(
                      professionalGrade,
                    ),
                }));
              }}
              className={INPUT_CLASS_NAME}
            >
              <option
                value=""
                disabled
                className="bg-white text-slate-500"
              >
                Select your current professional grade
              </option>
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
              This is self-reported. Selecting Specialist or Consultant
              does not grant verification, a badge, or a public verified
              title.
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
                  primaryLearningTrack:
                    event.target.value as ClinicalRole,
                }))
              }
              className={INPUT_CLASS_NAME}
            >
              <option
                value=""
                disabled
                className="bg-white text-slate-500"
              >
                Select your main SEG learning track
              </option>
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
              This controls the homepage opened after sign-in. Browsing
              another track does not change this selection.
            </span>
          </label>

          <label className="block">
            <span className="text-sm font-bold text-slate-700">Password</span>
            <input
              required
              type="password"
              minLength={8}
              autoComplete="new-password"
              value={form.password}
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  password: event.target.value,
                }))
              }
              className={INPUT_CLASS_NAME}
            />
            <span className="mt-1 block text-xs text-slate-500">
              Use at least 8 characters.
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
              I confirm that the registration information is accurate and
              accept the platform terms.
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
                  acceptedEducationalDisclaimer: event.target.checked,
                }))
              }
              className="mt-1 h-4 w-4 accent-emerald-600"
            />
            <span className="text-sm leading-6 text-slate-700">
              I understand that SEG is an educational platform and does not
              replace licensed clinical judgment or official protocols.
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

          <Button type="submit" disabled={loading}>
            {loading ? 'Creating account...' : 'Create Account'}
          </Button>

          <div className="text-sm text-slate-500">
            Already have an account?{' '}
            <Link
              href="/auth/sign-in"
              className="font-bold text-emerald-700"
            >
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
