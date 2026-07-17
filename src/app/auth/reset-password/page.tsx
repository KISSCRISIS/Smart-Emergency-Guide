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
import { createBrowserSupabaseClient } from '@/lib/supabase';

const MINIMUM_PASSWORD_LENGTH = 8;

function getErrorMessage(error: unknown) {
  return error instanceof Error
    ? error.message
    : 'Could not update the password. Please request a new reset link.';
}

export default function ResetPasswordPage() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [checkingSession, setCheckingSession] = useState(true);
  const [hasSession, setHasSession] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const supabase = createBrowserSupabaseClient();

    if (!supabase) {
      setError('Authentication is not configured.');
      setCheckingSession(false);
      return;
    }

    let active = true;

    void supabase.auth.getSession().then(({ data, error: sessionError }) => {
      if (!active) {
        return;
      }

      if (sessionError) {
        setError(sessionError.message);
      }

      setHasSession(Boolean(data.session));
      setCheckingSession(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (!active) {
        return;
      }

      if (event === 'PASSWORD_RECOVERY' || event === 'SIGNED_IN') {
        setHasSession(Boolean(session));
        setCheckingSession(false);
      }

      if (event === 'SIGNED_OUT') {
        setHasSession(false);
      }
    });

    return () => {
      active = false;
      subscription.unsubscribe();
    };
  }, []);

  const updatePassword = async (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    setError('');

    if (password.length < MINIMUM_PASSWORD_LENGTH) {
      setError(
        `Password must be at least ${MINIMUM_PASSWORD_LENGTH} characters.`,
      );
      return;
    }

    if (password !== confirmPassword) {
      setError('The two passwords do not match.');
      return;
    }

    const supabase = createBrowserSupabaseClient();

    if (!supabase) {
      setError('Authentication is not configured.');
      return;
    }

    setSubmitting(true);

    try {
      const { error: updateError } =
        await supabase.auth.updateUser({ password });

      if (updateError) {
        throw updateError;
      }

      const { error: signOutError } =
        await supabase.auth.signOut();

      if (signOutError) {
        throw signOutError;
      }

      router.replace('/auth/sign-in?message=password-reset');
      router.refresh();
    } catch (caughtError: unknown) {
      setError(getErrorMessage(caughtError));
    } finally {
      setSubmitting(false);
    }
  };

  if (checkingSession) {
    return (
      <div className="mx-auto flex min-h-[70vh] max-w-2xl items-center justify-center">
        <p className="font-bold text-slate-600">
          Verifying the reset link...
        </p>
      </div>
    );
  }

  if (!hasSession) {
    return (
      <div className="mx-auto flex min-h-[80vh] max-w-2xl items-center justify-center">
        <div className="w-full rounded-[2rem] bg-white p-8 text-center shadow-glass">
          <h1 className="text-3xl font-black text-slate-950">
            Reset link unavailable
          </h1>
          <p className="mt-4 leading-7 text-slate-600">
            This reset link is invalid, expired, or has already been used.
            Request a new link to continue.
          </p>
          <Link
            href="/auth/forgot-password"
            className="mt-6 inline-flex rounded-2xl bg-emerald-700 px-5 py-3 font-bold text-white"
          >
            Request a new reset link
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto flex min-h-[85vh] max-w-2xl items-center justify-center">
      <div className="w-full rounded-[2rem] bg-white p-8 shadow-glass">
        <Image
          src="/brand/seg-logo-final.png"
          width={90}
          height={90}
          alt="SEG"
          className="mx-auto h-auto w-28 object-contain"
        />

        <h1 className="mt-5 text-center text-3xl font-black text-slate-950">
          Choose a new password
        </h1>

        <p className="mx-auto mt-3 max-w-lg text-center text-sm leading-7 text-slate-600">
          Enter a new password for your SEG account.
        </p>

        <form
          onSubmit={updatePassword}
          className="mx-auto mt-6 max-w-md space-y-4"
        >
          <input
            required
            type="password"
            minLength={MINIMUM_PASSWORD_LENGTH}
            autoComplete="new-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="New password"
            className="w-full rounded-2xl border border-slate-200 px-4 py-3"
          />

          <input
            required
            type="password"
            minLength={MINIMUM_PASSWORD_LENGTH}
            autoComplete="new-password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            placeholder="Confirm new password"
            className="w-full rounded-2xl border border-slate-200 px-4 py-3"
          />

          {error ? (
            <div
              role="alert"
              className="rounded-2xl bg-rose-50 p-3 text-sm font-bold text-rose-800"
            >
              {error}
            </div>
          ) : null}

          <Button type="submit" disabled={submitting}>
            {submitting ? 'Updating...' : 'Update password'}
          </Button>
        </form>
      </div>
    </div>
  );
}
