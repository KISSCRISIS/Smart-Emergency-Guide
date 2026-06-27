'use client';

import { useState, useEffect } from 'react';
import { InternalPage } from '@/components/InternalPage';
import { BookmarkCheck, BookOpen, Brain, Clock, ClipboardCheck, HeartPulse, Map, Search, ShieldCheck, Sparkles, Stethoscope, Target, TrendingUp } from 'lucide-react';
import { getStats } from '@/lib/database';

const quickActions = [
  { href: '/topics', label: 'Continue Learning', icon: BookOpen, desc: 'Pick up where you left off in the EM textbook.' },
  { href: '/bookmarks', label: 'Review Bookmarks', icon: BookmarkCheck, desc: 'Return to your saved items.' },
  { href: '/study-map', label: 'Open Study Map', icon: Map, desc: 'Choose a structured learning path.' },
  { href: '/mcq-bank', label: 'Start MCQ Practice', icon: Target, desc: 'Filter by topic, difficulty, or exam route.' },
];

export default function DashboardPage() {
  const stats = getStats();
  const [recentlyViewed, setRecentlyViewed] = useState<any[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('seg_recently_viewed');
      if (stored) setRecentlyViewed(JSON.parse(stored).slice(0, 6));
    } catch { /* no stored data */ }
  }, []);

  return (
    <InternalPage
      title="Your Study Command Center"
      subtitle="Everything you need to study, review, and master Emergency Medicine."
      introText="Start from the core sections, test yourself, then use progress reports to identify strengths, weaknesses, and your next review plan. ابدأ من الأقسام الأساسية، اختبر نفسك، ثم استخدم تقرير الأداء لمعرفة نقاط القوة والضعف وخطة المراجعة التالية."
    >
      {/* Real content stats — from database */}
      <div className="mb-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {[
          { label: 'Topics', value: stats.topics, icon: BookOpen },
          { label: 'Flashcards', value: stats.flashcards, icon: Sparkles },
          { label: 'Numericals', value: stats.numericals, icon: TrendingUp },
          { label: 'Algorithms', value: stats.algorithms, icon: Brain },
          { label: 'Exam Traps', value: stats.examTraps, icon: Target },
        ].map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="flex flex-col items-center rounded-2xl border border-cyan-500/10 bg-slate-900/40 p-4 text-center backdrop-blur-md">
              <Icon size={18} className="text-cyan-400/70" />
              <span className="mt-2 text-2xl font-black text-white">{s.value}</span>
              <span className="mt-1 text-xs font-bold text-slate-400">{s.label}</span>
            </div>
          );
        })}
      </div>

      {/* 3-column layout */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Quick Actions */}
        <div className="rounded-2xl border border-slate-700/30 bg-slate-900/30 p-6 backdrop-blur-md">
          <h2 className="flex items-center gap-2 text-lg font-black text-white">
            <ZapIcon /> Quick Actions
          </h2>
          <div className="mt-4 grid gap-2">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <a
                  key={action.href}
                  href={action.href}
                  className="group flex items-start gap-3 rounded-xl border border-slate-700/30 bg-slate-900/40 p-3.5 backdrop-blur-md transition hover:border-cyan-500/30 hover:bg-cyan-950/20"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-cyan-400">
                    <Icon size={16} />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-sm font-black text-white">{action.label}</h3>
                    <p className="mt-0.5 text-xs leading-5 text-slate-400">{action.desc}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Recently Viewed */}
        <div className="rounded-2xl border border-slate-700/30 bg-slate-900/30 p-6 backdrop-blur-md">
          <h2 className="flex items-center gap-2 text-lg font-black text-white">
            <Clock size={18} className="text-cyan-400" /> Recently Viewed
          </h2>
          {recentlyViewed.length > 0 ? (
            <div className="mt-4 grid gap-2">
              {recentlyViewed.map((item: any, idx: number) => (
                <a
                  key={idx}
                  href={item.href || '#'}
                  className="block rounded-xl border border-slate-700/30 bg-slate-900/40 p-3 text-sm font-bold text-slate-300 transition hover:border-cyan-500/30 hover:text-white"
                >
                  {item.title || 'Untitled item'}
                </a>
              ))}
            </div>
          ) : (
            <div className="mt-8 flex flex-col items-center gap-2 py-6 text-center">
              <Clock size={32} className="text-slate-600" />
              <p className="text-sm font-bold text-slate-500">No recently viewed topics yet.</p>
              <p className="text-xs text-slate-600">Start learning to build your history.</p>
            </div>
          )}
        </div>

        {/* Progress / Empty state */}
        <div className="rounded-2xl border border-slate-700/30 bg-slate-900/30 p-6 backdrop-blur-md">
          <h2 className="flex items-center gap-2 text-lg font-black text-white">
            <TrendingUp size={18} className="text-cyan-400" /> Your Progress
          </h2>
          <div className="mt-8 flex flex-col items-center gap-2 py-6 text-center">
            <TrendingUp size={32} className="text-slate-600" />
            <p className="text-sm font-bold text-slate-500">No progress recorded yet.</p>
            <p className="text-xs text-slate-600">Start learning to build your dashboard.</p>
          </div>
        </div>
      </div>

      {/* Core sections quick links */}
      <div className="mt-8">
        <h2 className="mb-4 text-lg font-black text-white">Core Sections</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
          {[
            { href: '/topics', label: 'Textbook', icon: BookOpen },
            { href: '/ecg-atlas', label: 'ECG Atlas', icon: HeartPulse },
            { href: '/drug-handbook', label: 'Drugs', icon: ClipboardCheck },
            { href: '/toxicology', label: 'Toxicology', icon: ShieldCheck },
            { href: '/study-map', label: 'Study Map', icon: Map },
            { href: '/search', label: 'Search', icon: Search },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 rounded-xl border border-slate-700/30 bg-slate-900/30 p-3.5 backdrop-blur-md transition hover:-translate-y-0.5 hover:border-cyan-500/30"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800 text-cyan-400">
                  <Icon size={15} />
                </span>
                <span className="text-sm font-black text-white">{item.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </InternalPage>
  );
}

function ZapIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}
