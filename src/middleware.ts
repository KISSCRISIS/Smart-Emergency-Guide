import { NextRequest, NextResponse } from 'next/server';

import {
  getBlockedAccountStage,
  isBlockedAccountStatus,
} from '@/lib/auth/profile-access';
import { getRoleHomePath } from '@/lib/auth/role-home';
import { createMiddlewareSupabaseClient } from '@/lib/supabase/middleware';

const PUBLIC_EXACT_PATHS = new Set([
  '/auth/sign-in',
  '/auth/register',
  '/auth/callback',
  '/auth/forgot-password',
  '/auth/reset-password',
  '/pending-approval',
  '/about',
  '/privacy',
  '/terms',
  '/contact',
]);

const PUBLIC_HOME_PATH = '/';
const PROFILE_COMPLETION_PATH = '/auth/complete-profile';

const BASIC_CONTENT_EXACT_PATHS = new Set([
  '/dashboard',
  '/profile',
  '/credentials',
  '/my-home/intern-jmc',
  '/my-home/em-resident',
  '/my-home/medical-student',
  '/my-home/general-practitioner',
  '/my-home/ems-paramedic',
  '/my-home/emergency-nurse',
  '/my-home/other',
  '/bookmarks',
  '/progress',
  '/search',
  '/interns',
  '/interns/overview',
  '/interns/study',
  '/interns/study-plan',
  '/interns/exam-focus-map',
  '/interns/jmc-exam-practice',
  '/interns/drug-essentials',
  '/interns/toxicology-essentials',
  '/interns/emergency-cases',
  '/interns/ecg-essentials',
  '/residents',
  '/students',
  '/students/basic-drugs',
  '/students/basic-ed-approach',
  '/students/clinical-cases',
  '/students/ecg-basics',
  '/students/mcq-practice',
  '/topics',
  '/ecg-atlas',
  '/drug-handbook',
  '/toxicology',
  '/critical-care',
  '/intubation-ventilator',
  '/emergency-cases',
  '/arabic-board-review',
  '/emergency-oral-exam-mastery',
]);

const BASIC_CONTENT_PATH_PREFIXES = [
  '/interns/study/',
  '/interns/jmc-exam-practice/',
  '/drug-handbook/groups/',
  '/emergency-oral-exam-mastery/',
  '/arabic-board-review/',
];

type ProfileAccess = {
  role: string;
  account_status: string;
  profile_completed: boolean;
  primary_learning_track: string;
  clinical_role: string;
};

function isStaticAsset(pathname: string) {
  return pathname.includes('.');
}

function isAdminPath(pathname: string) {
  return pathname === '/admin' || pathname.startsWith('/admin/');
}

function isBasicContentPath(pathname: string) {
  return (
    BASIC_CONTENT_EXACT_PATHS.has(pathname) ||
    BASIC_CONTENT_PATH_PREFIXES.some((prefix) =>
      pathname.startsWith(prefix),
    )
  );
}

function copyResponseCookies(
  source: NextResponse,
  destination: NextResponse,
) {
  source.cookies.getAll().forEach(({ name, value, ...options }) => {
    destination.cookies.set(name, value, options);
  });

  return destination;
}

function redirectWithSessionCookies(
  request: NextRequest,
  sessionResponse: NextResponse,
  pathname: string,
  searchParams: Record<string, string> = {},
) {
  const redirectUrl = request.nextUrl.clone();
  redirectUrl.pathname = pathname;
  redirectUrl.search = '';

  Object.entries(searchParams).forEach(([key, value]) => {
    redirectUrl.searchParams.set(key, value);
  });

  return copyResponseCookies(
    sessionResponse,
    NextResponse.redirect(redirectUrl),
  );
}

function getPrimaryTrack(profile: ProfileAccess) {
  return profile.primary_learning_track || profile.clinical_role;
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/api/') ||
    isStaticAsset(pathname)
  ) {
    return NextResponse.next();
  }

  const sessionResponse = NextResponse.next({ request });
  const supabase = createMiddlewareSupabaseClient(
    request,
    sessionResponse,
  );

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (pathname === PUBLIC_HOME_PATH && (userError || !user)) {
    return sessionResponse;
  }

  if (PUBLIC_EXACT_PATHS.has(pathname)) {
    return sessionResponse;
  }

  if (userError || !user) {
    return redirectWithSessionCookies(
      request,
      sessionResponse,
      '/auth/sign-in',
      { next: `${pathname}${request.nextUrl.search}` },
    );
  }

  if (!user.email_confirmed_at) {
    return redirectWithSessionCookies(
      request,
      sessionResponse,
      '/pending-approval',
      { stage: 'email-confirmation' },
    );
  }

  const {
    data: profile,
    error: profileError,
  } = await supabase
    .from('profiles')
    .select(
      'role, account_status, profile_completed, primary_learning_track, clinical_role',
    )
    .eq('id', user.id)
    .maybeSingle<ProfileAccess>();

  if (profileError || !profile) {
    return redirectWithSessionCookies(
      request,
      sessionResponse,
      '/pending-approval',
      { stage: 'profile-unavailable' },
    );
  }

  if (isBlockedAccountStatus(profile.account_status)) {
    return redirectWithSessionCookies(
      request,
      sessionResponse,
      '/pending-approval',
      {
        stage: getBlockedAccountStage(profile.account_status),
      },
    );
  }

  const primaryTrack = getPrimaryTrack(profile);
  const roleHomePath = getRoleHomePath(primaryTrack);

  if (pathname === PROFILE_COMPLETION_PATH) {
    if (profile.profile_completed) {
      return redirectWithSessionCookies(
        request,
        sessionResponse,
        roleHomePath,
      );
    }

    return sessionResponse;
  }

  if (!profile.profile_completed) {
    return redirectWithSessionCookies(
      request,
      sessionResponse,
      PROFILE_COMPLETION_PATH,
      { next: `${pathname}${request.nextUrl.search}` },
    );
  }

  if (pathname === PUBLIC_HOME_PATH) {
    return redirectWithSessionCookies(
      request,
      sessionResponse,
      roleHomePath,
    );
  }

  if (isAdminPath(pathname)) {
    if (profile.role === 'Admin') {
      return sessionResponse;
    }

    return redirectWithSessionCookies(
      request,
      sessionResponse,
      roleHomePath,
      {
        forbidden: 'admin',
        from: pathname,
      },
    );
  }

  if (isBasicContentPath(pathname)) {
    return sessionResponse;
  }

  return redirectWithSessionCookies(
    request,
    sessionResponse,
    roleHomePath,
    {
      hidden: 'mvp',
      from: pathname,
    },
  );
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
