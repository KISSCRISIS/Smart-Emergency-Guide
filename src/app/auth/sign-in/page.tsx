'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  FormEvent,
  useEffect,
  useState,
} from 'react';

import { Button } from '@/components/Button';
import {
  getBlockedAccountStage,
  isBlockedAccountStatus,
} from '@/lib/auth/profile-access';
import { getRoleHomePath } from '@/lib/auth/role-home';
import {
  createBrowserSupabaseClient,
  isSupabaseConfigured,
} from '@/lib/supabase';

const LEGACY_AUTH_STORAGE_KEY = 'seg_current_user';

const CALLBACK_ERROR_MESSAGES: Record<string, string> = {
  missing_confirmation_code:
    'The confirmation link is incomplete. Request a new email and try again.',
  confirmation_failed:
    'The confirmation link is invalid or expired. Please sign in again or request a new confirmation email.',
};

type SignInProfile = {
  account_status: string;
  profile_completed: boolean;
  primary_learning_track: string;
  clinical_role: string;
};

function getSafeNextPath() {
  const params = new URLSearchParams(window.location.search);
  const value = params.get('next');

  if (!value || !value.startsWith('/') || value.startsWith('//')) {
    return null;
  }

  return value;
}

function getErrorMessage(error: unknown) {
  if (
    typeof error === 'object' &&
    error !== null &&
    'code' in error &&
    error.code === 'email_not_confirmed'
  ) {
    return 'Confirm your email before signing in.';
  }

  return error instanceof Error
    ? error.message
    : 'Could not sign in. Check your credentials and try again.';
}

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Remove only the obsolete demo-auth record.
    // Learning progress, bookmarks, and UI preferences are preserved.
    localStorage.removeItem(LEGACY_AUTH_STORAGE_KEY);

    const params = new URLSearchParams(window.location.search);
    const callbackError = params.get('error');
    const message = params.get('message');

    if (callbackError && CALLBACK_ERROR_MESSAGES[callbackError]) {
      setError(CALLBACK_ERROR_MESSAGES[callbackError]);
    }

    const hashParams = new URLSearchParams(
      window.location.hash.replace(/^#/, ''),
    );
    const hashErrorCode = hashParams.get('error_code');

    if (hashErrorCode === 'otp_expired') {
      setError(
        'This confirmation link has expired or was already used. Try signing in first. If sign-in fails, request a new confirmation email.',
      );
    }

    if (message === 'signed-out') {
      setNotice('You have signed out successfully.');
    }

    if (message === 'password-reset') {
      setNotice(
        'Your password was updated successfully. Sign in with the new password.',
      );
    }
  }, []);

  const login = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    setNotice('');

    try {
      if (!isSupabaseConfigured) {
        throw new Error(
          'Authentication is not configured. Check the Supabase environment variables.',
        );
      }

      const supabase = createBrowserSupabaseClient();

      if (!supabase) {
        throw new Error(
          'Authentication is not configured. Check the Supabase environment variables.',
        );
      }

      const { data, error: authError } =
        await supabase.auth.signInWithPassword({
          email: email.trim(),
          password,
        });

      if (authError) {
        throw authError;
      }

      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select(
          'account_status, profile_completed, primary_learning_track, clinical_role',
        )
        .eq('id', data.user.id)
        .maybeSingle<SignInProfile>();

      if (profileError || !profile) {
        router.replace('/pending-approval?stage=profile-unavailable');
        router.refresh();
        return;
      }

      if (isBlockedAccountStatus(profile.account_status)) {
        router.replace(
          `/pending-approval?stage=${getBlockedAccountStage(
            profile.account_status,
          )}`,
        );
        router.refresh();
        return;
      }

      const requestedNext = getSafeNextPath();

      if (!profile.profile_completed) {
        const completeProfileUrl = new URL(
          '/auth/complete-profile',
          window.location.origin,
        );

        if (requestedNext) {
          completeProfileUrl.searchParams.set('next', requestedNext);
        }

        router.replace(
          `${completeProfileUrl.pathname}${completeProfileUrl.search}`,
        );
        router.refresh();
        return;
      }

      localStorage.removeItem(LEGACY_AUTH_STORAGE_KEY);

      router.replace(
        requestedNext ??
          getRoleHomePath(
            profile.primary_learning_track ?? profile.clinical_role,
          ),
      );
      router.refresh();
    } catch (caughtError: unknown) {
      setError(getErrorMessage(caughtError));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto flex min-h-[85vh] max-w-4xl items-center justify-center">
      <div className="w-full rounded-[2rem] bg-white p-8 shadow-glass">
        <Image
          src="/brand/seg-logo-final.png"
          width={90}
          height={90}
          alt="SEG"
          className="mx-auto h-auto w-28 object-contain"
        />

        <h1 className="mt-5 text-center text-3xl font-black text-slate-950">
          Sign in
        </h1>

        <p className="mx-auto mt-3 max-w-xl text-center text-sm leading-7 text-slate-600">
          Sign in with your SEG account. Access is verified through
          Supabase and the protected server middleware.
        </p>

        <form
          onSubmit={login}
          className="mx-auto mt-6 max-w-md space-y-4"
        >
          <input
            required
            type="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email"
            className="w-full rounded-2xl border border-slate-200 px-4 py-3"
          />

          <input
            required
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
            className="w-full rounded-2xl border border-slate-200 px-4 py-3"
          />

          <div className="text-right">
            <Link
              href="/auth/forgot-password"
              className="text-sm font-bold text-emerald-700 hover:underline"
            >
              Forgot password?
            </Link>
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

          <Button type="submit" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign in'}
          </Button>
        </form>

        <div className="mt-4 text-center text-sm text-slate-500">
          Need an account?{' '}
          <Link
            href="/auth/register"
            className="font-bold text-emerald-700"
          >
            Create account
          </Link>
        </div>
      </div>
    </div>
  );
}
