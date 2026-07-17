import { NextRequest, NextResponse } from 'next/server';

import {
  getBlockedAccountStage,
  isBlockedAccountStatus,
} from '@/lib/auth/profile-access';
import { getRoleHomePath } from '@/lib/auth/role-home';
import { createServerSupabaseClient } from '@/lib/supabase/server';

type CallbackProfile = {
  account_status: string;
  profile_completed: boolean;
  primary_learning_track: string;
  clinical_role: string;
};

function getSafeNextPath(value: string | null): string | null {
  if (!value || !value.startsWith('/') || value.startsWith('//')) {
    return null;
  }

  return value;
}

function redirectToSignIn(
  request: NextRequest,
  errorCode: 'missing_confirmation_code' | 'confirmation_failed',
) {
  const redirectUrl = new URL('/auth/sign-in', request.url);
  redirectUrl.searchParams.set('error', errorCode);

  return NextResponse.redirect(redirectUrl);
}

function redirectToPending(
  request: NextRequest,
  stage:
    | 'profile-unavailable'
    | 'rejected'
    | 'suspended'
    | 'blocked',
) {
  const redirectUrl = new URL('/pending-approval', request.url);
  redirectUrl.searchParams.set('stage', stage);

  return NextResponse.redirect(redirectUrl);
}

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get('code');

  if (!code) {
    return redirectToSignIn(request, 'missing_confirmation_code');
  }

  const requestedNext = getSafeNextPath(
    request.nextUrl.searchParams.get('next'),
  );

  const supabase = await createServerSupabaseClient();
  const { error: exchangeError } =
    await supabase.auth.exchangeCodeForSession(code);

  if (exchangeError) {
    return redirectToSignIn(request, 'confirmation_failed');
  }

  // Password recovery needs the newly established session before the user
  // can call updateUser({ password }). It must not be blocked by profile
  // completion or normal content-routing rules.
  if (requestedNext === '/auth/reset-password') {
    return NextResponse.redirect(
      new URL('/auth/reset-password', request.url),
    );
  }

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    return redirectToSignIn(request, 'confirmation_failed');
  }

  const {
    data: profile,
    error: profileError,
  } = await supabase
    .from('profiles')
    .select(
      'account_status, profile_completed, primary_learning_track, clinical_role',
    )
    .eq('id', user.id)
    .maybeSingle<CallbackProfile>();

  if (profileError || !profile) {
    return redirectToPending(request, 'profile-unavailable');
  }

  if (isBlockedAccountStatus(profile.account_status)) {
    return redirectToPending(
      request,
      getBlockedAccountStage(profile.account_status),
    );
  }

  if (!profile.profile_completed) {
    const completeProfileUrl = new URL(
      '/auth/complete-profile',
      request.url,
    );

    if (requestedNext) {
      completeProfileUrl.searchParams.set('next', requestedNext);
    }

    return NextResponse.redirect(completeProfileUrl);
  }

  return NextResponse.redirect(
    new URL(
      requestedNext ??
        getRoleHomePath(
          profile.primary_learning_track ?? profile.clinical_role,
        ),
      request.url,
    ),
  );
}
