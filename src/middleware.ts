import { NextRequest, NextResponse } from 'next/server';

const ALLOWED_EXACT_PATHS = new Set([
  '/',
  '/interns',
  '/interns/drug-essentials',
  '/interns/toxicology-essentials',
  '/interns/emergency-cases',
  '/interns/ecg-essentials',
  '/pending-approval',
  '/auth/sign-in',
  '/auth/register',
]);

function isStaticAsset(pathname: string): boolean {
  return pathname.includes('.');
}

function isAllowedPath(pathname: string): boolean {
  if (ALLOWED_EXACT_PATHS.has(pathname)) {
    return true;
  }

  if (pathname.startsWith('/api/')) {
    return true;
  }

  if (pathname.startsWith('/_next/')) {
    return true;
  }

  if (isStaticAsset(pathname)) {
    return true;
  }

  return false;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (isAllowedPath(pathname)) {
    return NextResponse.next();
  }

  const redirectUrl = request.nextUrl.clone();

  if (pathname === '/admin' || pathname.startsWith('/admin/')) {
    redirectUrl.pathname = '/pending-approval';
    redirectUrl.searchParams.set('from', pathname);
    return NextResponse.redirect(redirectUrl);
  }

  redirectUrl.pathname = '/interns';
  redirectUrl.searchParams.set('hidden', 'mvp');
  redirectUrl.searchParams.set('from', pathname);

  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
