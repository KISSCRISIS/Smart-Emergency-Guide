import { NextResponse } from 'next/server';

import { createServerSupabaseClient } from '@/lib/supabase/server';

/**
 * Current access policy:
 * - Free for every signed-in SEG user with a confirmed email,
 *   an active account, and a completed profile.
 *
 * A subscription check may be added here later without rewriting
 * every protected API route.
 */
export async function requireActiveApiUser():
  Promise<NextResponse | null> {
  const supabase = await createServerSupabaseClient();

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    return NextResponse.json(
      {
        error: 'Authentication required.',
      },
      {
        status: 401,
      },
    );
  }

  if (!user.email_confirmed_at) {
    return NextResponse.json(
      {
        error: 'Email confirmation required.',
      },
      {
        status: 403,
      },
    );
  }

  const { data: profile, error: profileError } = await supabase
    .from('profiles')
    .select('account_status, profile_completed')
    .eq('id', user.id)
    .maybeSingle<{
      account_status: string;
      profile_completed: boolean;
    }>();

  if (profileError || !profile) {
    return NextResponse.json(
      {
        error: 'An active SEG profile is required.',
      },
      {
        status: 403,
      },
    );
  }

  if (profile.account_status !== 'active') {
    return NextResponse.json(
      {
        error: 'This SEG account is not active.',
      },
      {
        status: 403,
      },
    );
  }

  if (!profile.profile_completed) {
    return NextResponse.json(
      {
        error: 'Complete your SEG profile before using this feature.',
      },
      {
        status: 403,
      },
    );
  }

  return null;
}