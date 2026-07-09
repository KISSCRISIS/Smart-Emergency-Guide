'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Search, X, ArrowRight, Stethoscope, BookOpen, HeartPulse, GraduationCap, Brain, Users, Activity, Map, Target, Sparkles } from 'lucide-react';

interface SearchSuggestion {
  label: string;
  href: string;
  icon: any;
  badge?: string;
}

const SEARCH_ITEMS: SearchSuggestion[] = [
  { label: 'Intern / JMC Path', href: '/interns', icon: Stethoscope, badge: 'Primary' },
  { label: 'JMC Exam Practice', href: '/interns/jmc-exam-practice', icon: Target, badge: 'Practice' },
  { label: 'Study Plan', href: '/interns/study-plan', icon: Map },
  { label: 'Intern Study', href: '/interns/study', icon: BookOpen },
  { label: 'Exam Focus Map', href: '/interns/exam-focus-map', icon: Map },
];

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  /* Focus input on open */
  useEffect(() => {
    if (isOpen) {
      /* small delay to let the overlay render */
      const t = setTimeout(() => inputRef.current?.focus(), 80);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  /* Escape to close */
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        setQuery('');
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  /* Lock body scroll when open */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  const filtered = query.trim()
    ? SEARCH_ITEMS.filter((item) =>
        item.label.toLowerCase().includes(query.toLowerCase())
      )
    : SEARCH_ITEMS;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center bg-black/70 backdrop-blur-md pt-[12vh]"
      role="dialog"
      aria-modal="true"
      aria-label="Search the platform"
    >
      <div className="w-full max-w-xl mx-4 rounded-3xl border border-white/[0.08] bg-[#0a0f1e] shadow-2xl shadow-violet-500/10 overflow-hidden">
        {/* Search input row */}
        <div className="flex items-center gap-3 border-b border-white/[0.06] px-5 py-4">
          <Search size={18} className="shrink-0 text-slate-500" aria-hidden="true" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search pages, tools, and pathways..."
            className="w-full bg-transparent text-sm font-semibold text-white placeholder-slate-500 outline-none"
            aria-label="Search input"
          />
          <button
            onClick={() => { onClose(); setQuery(''); }}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.03] text-slate-500 transition hover:border-cyan-400/30 hover:text-cyan-400"
            aria-label="Close search"
            type="button"
          >
            <X size={16} />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[50vh] overflow-y-auto px-3 py-3">
          {filtered.length === 0 ? (
            <p className="py-8 text-center text-sm text-slate-500">
              No results found for &quot;{query}&quot;
            </p>
          ) : (
            <ul className="space-y-1" role="listbox" aria-label="Search results">
              {filtered.map((item) => (
                <li key={item.href} role="option" aria-selected={false}>
                  <Link
                    href={item.href}
                    onClick={() => { onClose(); setQuery(''); }}
                    className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-300 transition hover:bg-white/[0.04] hover:text-white group"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white/[0.04] text-slate-500 group-hover:text-cyan-400">
                      <item.icon size={16} />
                    </span>
                    <span className="flex-1">{item.label}</span>
                    {item.badge && (
                      <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-black tracking-wide ${
                        item.badge === 'Primary'
                          ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-400/20'
                          : item.badge === 'Practice'
                          ? 'bg-amber-500/10 text-amber-400 border border-amber-400/20'
                          : 'bg-slate-500/10 text-slate-500 border border-slate-400/20'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                    <ArrowRight size={14} className="shrink-0 text-slate-600 opacity-0 transition group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer hint */}
        <div className="border-t border-white/[0.04] px-5 py-3 text-[10px] font-bold text-slate-600">
          Type to filter · Escape to close · Verified routes only
        </div>
      </div>
    </div>
  );
}
