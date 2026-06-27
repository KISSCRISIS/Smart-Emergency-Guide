'use client';

import { type ReactNode } from 'react';
import Link from 'next/link';
import { ArrowLeft, Home, Search } from 'lucide-react';

type InternalPageProps = {
  title: string;
  subtitle?: string;
  introText?: string;
  children: ReactNode;
  searchPlaceholder?: string;
  searchValue?: string;
  onSearch?: (value: string) => void;
  backHref?: string;
  backLabel?: string;
};

export function InternalPage({
  title,
  subtitle,
  introText,
  children,
  searchPlaceholder,
  searchValue,
  onSearch,
  backHref = '/',
  backLabel = 'Home',
}: InternalPageProps) {
  return (
    <div className="min-h-screen bg-[#071426]">
      {/* subtle background glows */}
      <div className="pointer-events-none fixed right-0 top-0 h-[400px] w-[400px] rounded-full bg-cyan-500/5 blur-[100px]" />
      <div className="pointer-events-none fixed left-0 bottom-0 h-[300px] w-[300px] rounded-full bg-teal-500/4 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-8">
        {/* ── sub-nav ── */}
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-700/40 bg-slate-900/40 px-4 py-2 text-sm font-bold text-slate-300 backdrop-blur-md transition hover:border-cyan-500/30 hover:text-cyan-300"
          >
            <Home size={15} /> {backLabel}
          </Link>
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-700/40 bg-slate-900/40 px-4 py-2 text-sm font-bold text-slate-300 backdrop-blur-md transition hover:border-cyan-500/30 hover:text-cyan-300"
          >
            <ArrowLeft size={15} /> Dashboard
          </Link>

          {onSearch && (
            <div className="relative w-full sm:ml-auto sm:max-w-sm">
              <Search
                size={15}
                className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                value={searchValue ?? ''}
                onChange={(e) => onSearch(e.target.value)}
                placeholder={searchPlaceholder || 'Search…'}
                className="w-full rounded-xl border border-slate-700/40 bg-slate-900/40 py-2.5 pl-10 pr-4 text-sm font-bold text-white placeholder:text-slate-500 backdrop-blur-md focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
              />
            </div>
          )}
        </div>

        {/* ── intro card ── */}
        <div className="mb-8 rounded-2xl border border-cyan-500/10 bg-slate-900/40 p-6 backdrop-blur-xl sm:p-8">
          <h1 className="text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-2 text-base font-bold text-cyan-400 sm:text-lg">{subtitle}</p>
          )}
          {introText && (
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-400">
              {introText}
            </p>
          )}
        </div>

        {/* ── main content ── */}
        {children}
      </div>
    </div>
  );
}

/** Reusable glass card — use inside InternalPage children */
export function GlassCard({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-slate-700/30 bg-slate-900/30 p-5 backdrop-blur-md ${className}`}
    >
      {children}
    </div>
  );
}
