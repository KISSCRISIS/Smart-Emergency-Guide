'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

import { RoleAwareSidebar } from '@/components/RoleAwareSidebar';
import { UserProfileCard } from '@/components/UserProfileCard';

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const isStandalonePage =
    pathname === '/' ||
    pathname === '/about' ||
    pathname === '/privacy' ||
    pathname === '/terms' ||
    pathname === '/contact' ||
    pathname.startsWith('/auth/') ||
    pathname === '/pending-approval';

  if (isStandalonePage) {
    return (
      <main className="min-h-screen bg-slate-950 text-slate-100">
        {children}
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex min-h-screen w-full max-w-[1800px]">
        <RoleAwareSidebar />

        <div className="min-w-0 flex-1">
          <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/90 px-4 py-3 backdrop-blur lg:hidden">
            <div className="flex items-center justify-between gap-3 pl-12">
              <Link
                href="/"
                className="text-sm font-black text-amber-200"
              >
                SEG
              </Link>

              <UserProfileCard compact />
            </div>
          </header>

          {children}
        </div>
      </div>
    </div>
  );
}

export default AppShell;