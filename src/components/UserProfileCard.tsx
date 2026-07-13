'use client';

import Link from 'next/link';
import {
  Home,
  UserRound,
} from 'lucide-react';
import {
  useCallback,
  useEffect,
  useState,
} from 'react';

import { SignOutButton } from '@/components/SignOutButton';
import { ProfessionalVerificationBadge } from '@/components/verification/ProfessionalVerificationBadge';
import {
  getProfessionalGradeLabel,
} from '@/lib/auth/profile-access';
import {
  getRoleHomePath,
} from '@/lib/auth/role-home';
import { createBrowserSupabaseClient } from '@/lib/supabase';

type ProfileSummary = {
  full_name: string;
  email: string;
  phone: string | null;
  clinical_role: string;
  professional_grade: string;
  primary_learning_track: string;
  professional_verification_status: string;
  role: string;
  account_status: string;
};

function getInitials(name: string) {
  const parts = name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2);

  const initials = parts.map((part) => part[0]?.toUpperCase()).join('');
  return initials || 'SEG';
}

export function UserProfileCard({
  compact = false,
}: {
  compact?: boolean;
}) {
  const [profile, setProfile] = useState<ProfileSummary | null>(null);
  const [hasSession, setHasSession] = useState(false);
  const [loading, setLoading] = useState(true);

  const loadProfile = useCallback(async () => {
    const supabase = createBrowserSupabaseClient();

    if (!supabase) {
      setLoading(false);
      return;
    }

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setHasSession(false);
      setProfile(null);
      setLoading(false);
      return;
    }

    setHasSession(true);

    const { data } = await supabase
      .from('profiles')
      .select(
        'full_name, email, phone, clinical_role, professional_grade, primary_learning_track, professional_verification_status, role, account_status',
      )
      .eq('id', user.id)
      .maybeSingle<ProfileSummary>();

    setProfile(data ?? null);
    setLoading(false);
  }, []);

  useEffect(() => {
    void loadProfile();

    const supabase = createBrowserSupabaseClient();

    if (!supabase) {
      return;
    }

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      window.setTimeout(() => {
        void loadProfile();
      }, 0);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [loadProfile]);

  if (compact) {
    if (!hasSession || loading) {
      return (
        <Link
          href="/auth/sign-in"
          className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1.5 text-xs font-bold text-cyan-100"
        >
          Sign in
        </Link>
      );
    }

    const homePath = getRoleHomePath(
      profile?.primary_learning_track ?? profile?.clinical_role,
    );

    return (
      <div className="flex items-center gap-2">
        <Link
          href={homePath}
          aria-label="My role home"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-100"
        >
          <Home size={16} />
        </Link>

        <Link
          href="/profile"
          aria-label="My profile"
          className="inline-flex h-9 min-w-9 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2 text-xs font-black text-cyan-100"
        >
          {getInitials(profile?.full_name ?? 'SEG')}
        </Link>

        <SignOutButton compact />
      </div>
    );
  }

  if (loading) {
    return (
      <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-xs font-semibold text-slate-400">
        Loading account...
      </div>
    );
  }

  if (!hasSession) {
    return (
      <div className="space-y-2 rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
        <Link
          href="/auth/sign-in"
          className="block rounded-xl bg-cyan-500/15 px-3 py-2 text-center text-sm font-black text-cyan-100"
        >
          Sign in
        </Link>
        <Link
          href="/auth/register"
          className="block text-center text-xs font-bold text-slate-400"
        >
          Create account
        </Link>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="space-y-3 rounded-2xl border border-rose-400/20 bg-rose-400/10 p-4">
        <p className="text-xs font-bold text-rose-100">
          Profile information is unavailable.
        </p>
        <SignOutButton />
      </div>
    );
  }

  const homePath = getRoleHomePath(
    profile.primary_learning_track ?? profile.clinical_role,
  );

  return (
    <div className="space-y-3 rounded-2xl border border-cyan-400/20 bg-slate-900/80 p-4">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 text-sm font-black text-cyan-100">
          {getInitials(profile.full_name)}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex min-w-0 flex-wrap items-center gap-1.5">
            <p className="min-w-0 truncate text-sm font-black text-white">
              {profile.full_name}
            </p>
            <ProfessionalVerificationBadge
              status={profile.professional_verification_status}
              compact
            />
          </div>
          <p className="truncate text-xs font-semibold text-slate-400">
            {getProfessionalGradeLabel(profile.professional_grade)}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <Link
          href={homePath}
          className="inline-flex items-center justify-center gap-1 rounded-xl border border-amber-400/25 bg-amber-400/10 px-2 py-2 text-xs font-black text-amber-100"
        >
          <Home size={14} />
          My Home
        </Link>

        <Link
          href="/profile"
          className="inline-flex items-center justify-center gap-1 rounded-xl border border-cyan-400/25 bg-cyan-400/10 px-2 py-2 text-xs font-black text-cyan-100"
        >
          <UserRound size={14} />
          My Profile
        </Link>
      </div>

      <SignOutButton />
    </div>
  );
}

export default UserProfileCard;