'use client';

import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';
import {
  useEffect,
  useState,
} from 'react';

import { createBrowserSupabaseClient } from '@/lib/supabase';

const LEGACY_AUTH_STORAGE_KEY = 'seg_current_user';

export function SignOutButton({
  compact = false,
}: {
  compact?: boolean;
}) {
  const router = useRouter();
  const [hasSession, setHasSession] = useState(false);
  const [signingOut, setSigningOut] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const supabase = createBrowserSupabaseClient();

    if (!supabase) {
      return;
    }

    let active = true;

    void supabase.auth.getSession().then(({ data }) => {
      if (active) {
        setHasSession(Boolean(data.session));
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (active) {
        setHasSession(Boolean(session));
      }
    });

    return () => {
      active = false;
      subscription.unsubscribe();
    };
  }, []);

  const signOut = async () => {
    setSigningOut(true);
    setError('');

    try {
      const supabase = createBrowserSupabaseClient();

      if (!supabase) {
        throw new Error('Authentication is not configured.');
      }

      const { error: signOutError } = await supabase.auth.signOut();

      if (signOutError) {
        throw signOutError;
      }

      // Remove only the obsolete demo-auth record.
      // Do not clear progress, bookmarks, last position, or preferences.
      localStorage.removeItem(LEGACY_AUTH_STORAGE_KEY);

      setHasSession(false);
      router.replace('/auth/sign-in?message=signed-out');
      router.refresh();
    } catch (caughtError: unknown) {
      setError(
        caughtError instanceof Error
          ? caughtError.message
          : 'Could not sign out. Please try again.',
      );
    } finally {
      setSigningOut(false);
    }
  };

  if (!hasSession) {
    return null;
  }

  return (
    <div className={compact ? '' : 'space-y-2'}>
      <button
        type="button"
        onClick={signOut}
        disabled={signingOut}
        aria-label="Sign out"
        className={
          compact
            ? 'inline-flex items-center justify-center rounded-full border border-rose-400/30 bg-rose-400/10 p-2 text-rose-100 transition hover:bg-rose-400/20 disabled:cursor-not-allowed disabled:opacity-60'
            : 'flex w-full items-center justify-center gap-2 rounded-2xl border border-rose-400/30 bg-rose-400/10 px-3 py-2.5 text-sm font-bold text-rose-100 transition hover:bg-rose-400/20 disabled:cursor-not-allowed disabled:opacity-60'
        }
      >
        <LogOut size={17} />
        {compact ? null : (
          <span>{signingOut ? 'Signing out...' : 'Sign out'}</span>
        )}
      </button>

      {!compact && error ? (
        <p
          role="alert"
          className="text-xs font-semibold leading-5 text-rose-300"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}

export default SignOutButton;
