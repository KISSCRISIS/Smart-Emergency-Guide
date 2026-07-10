'use client';

import Link from 'next/link';
import { BookOpen, Target, Map, HeartPulse, ArrowRight } from 'lucide-react';

interface QuickLink {
  icon: any;
  label: string;
  href: string;
  badge?: 'MVP' | 'Preview' | 'Practice';
}

const QUICK_LINKS: QuickLink[] = [
  { icon: BookOpen, label: 'Intern/JMC Study', href: '/interns', badge: 'MVP' },
  { icon: Target, label: 'JMC Practice', href: '/interns', badge: 'Practice' },
  { icon: Map, label: 'Study Plan', href: '/interns', badge: 'MVP' },
  { icon: Map, label: 'Exam Focus Map', href: '/interns', badge: 'MVP' },
];

const badgeStyles: Record<string, string> = {
  MVP: 'bg-cyan-500/10 text-cyan-400 border border-cyan-400/20',
  Practice: 'bg-amber-500/10 text-amber-400 border border-amber-400/20',
  Preview: 'bg-slate-500/10 text-slate-500 border border-slate-400/20',
};

export default function QuickAccess() {
  return (
    <section className="relative z-10 px-4 py-8 sm:px-6 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-lg font-black text-white sm:text-xl">Quick Access</h2>
          <Link
            href="/interns"
            className="inline-flex items-center gap-1 text-xs font-bold text-cyan-400 transition hover:text-cyan-300"
          >
            View all <ArrowRight size={12} />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {QUICK_LINKS.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 backdrop-blur-md transition-all duration-200 hover:-translate-y-1 hover:border-cyan-400/25 hover:shadow-lg hover:shadow-cyan-500/5"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                    <Icon size={17} />
                  </div>
                  {item.badge && (
                    <span className={`rounded-full px-2 py-0.5 text-[9px] font-black tracking-wide ${badgeStyles[item.badge]}`}>
                      {item.badge}
                    </span>
                  )}
                </div>
                <h3 className="mt-3 text-sm font-bold leading-snug text-white group-hover:text-cyan-200 transition-colors">
                  {item.label}
                </h3>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
