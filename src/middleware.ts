// SEG_STEP1_MVP_GATE
import { NextRequest, NextResponse } from 'next/server';

const ADMIN_PREFIXES = ['/admin'];

const NON_MVP_PREFIXES = [
  '/students',
  '/residents',
  '/topics',
  '/study-map',
  '/courses',
  '/community',
  '/mobile-app',
  '/ai-exam-generator',
  '/ai-study-assistant',
  '/ai-oral-examiner',
  '/critical-care',
  '/ecg-atlas',
  '/pocus-atlas',
  '/toxicology',
  '/visual-atlas',
  '/visual-signs',
  '/em-master-textbook'
];

function startsWithPrefix(pathname: string, prefixes: string[]) {
  return prefixes.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`));
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/_next') || pathname.startsWith('/api') || pathname.includes('.')) {
    return NextResponse.next();
  }

  if (startsWithPrefix(pathname, ADMIN_PREFIXES)) {
    const url = request.nextUrl.clone();
    url.pathname = '/pending-approval';
    url.searchParams.set('from', pathname);
    return NextResponse.redirect(url);
  }

  if (startsWithPrefix(pathname, NON_MVP_PREFIXES)) {
    const url = request.nextUrl.clone();
    url.pathname = '/interns';
    url.searchParams.set('hidden', 'mvp');
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
