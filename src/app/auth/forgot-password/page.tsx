'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  FormEvent,
  useState,
} from 'react';

import { Button } from '@/components/Button';
import {
  createBrowserSupabaseClient,
  isSupabaseConfigured,
} from '@/lib/supabase';

function getErrorMessage(error: unknown) {
  return error instanceof Error
    ? error.message
    : 'Could not send the reset email. Please try again.';
}

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const [loading, setLoading] = useState(false);

  const requestReset = async (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    setError('');
    setNotice('');
    setLoading(true);

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

      const redirectTo =
        `${window.location.origin}/auth/callback` +
        '?next=/auth/reset-password';

      const { error: resetError } =
        await supabase.auth.resetPasswordForEmail(
          email.trim(),
          { redirectTo },
        );

      if (resetError) {
        throw resetError;
      }

      // Keep the response generic so the page does not disclose
      // whether an email address is registered.
      setNotice(
        'If an SEG account exists for this email, a password reset link has been sent. Check your inbox and spam folder.',
      );
    } catch (caughtError: unknown) {
      setError(getErrorMessage(caughtError));
    } finally {
      setLoading(false);
    }
  };

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
          Reset your password
        </h1>

        <p className="mx-auto mt-3 max-w-lg text-center text-sm leading-7 text-slate-600">
          Enter the email connected to your SEG account. We will send a
          secure password reset link.
        </p>

        <form
          onSubmit={requestReset}
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

          {notice ? (
            <div
              role="status"
              className="rounded-2xl bg-emerald-50 p-3 text-sm font-bold leading-6 text-emerald-800"
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
            {loading ? 'Sending...' : 'Send reset link'}
          </Button>
        </form>

        <div className="mt-5 text-center">
          <Link
            href="/auth/sign-in"
            className="text-sm font-bold text-emerald-700 hover:underline"
          >
            Back to sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
