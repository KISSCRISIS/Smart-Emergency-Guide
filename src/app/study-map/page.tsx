'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { InternalPage } from '@/components/InternalPage';
import { topics } from '@/lib/database';
import { ArrowRight, BookOpen, ChevronLeft, ChevronRight, HeartPulse, Brain, Activity, Wind, ShieldCheck, AlertTriangle, Stethoscope, Sparkles, Zap, Syringe } from 'lucide-react';

const ITEMS_PER_PAGE = 12;

type ModuleCard = {
  slug: string;
  title: string;
  category: string;
  topicId: string;
};

const categoryIcons: Record<string, { icon: any; color: string; bg: string }> = {
  cardiovascular: { icon: HeartPulse, color: 'text-rose-400', bg: 'bg-rose-500/10' },
  resuscitation: { icon: Activity, color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
  pulmonary: { icon: Wind, color: 'text-sky-400', bg: 'bg-sky-500/10' },
  neurology: { icon: Brain, color: 'text-violet-400', bg: 'bg-violet-500/10' },
  infectious: { icon: ShieldCheck, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
  trauma: { icon: AlertTriangle, color: 'text-amber-400', bg: 'bg-amber-500/10' },
  toxicology: { icon: Syringe, color: 'text-orange-400', bg: 'bg-orange-500/10' },
  pharmacology: { icon: Zap, color: 'text-yellow-400', bg: 'bg-yellow-500/10' },
  default: { icon: BookOpen, color: 'text-teal-400', bg: 'bg-teal-500/10' },
};

function getCategoryStyle(category: string) {
  const key = (category || '').toLowerCase();
  for (const [k, v] of Object.entries(categoryIcons)) {
    if (key.includes(k)) return v;
  }
  return categoryIcons.default;
}

function normalize(s: string): string {
  return (s || '').trim().toLowerCase().replace(/\s+/g, ' ');
}

function slugify(s: string): string {
  return (s || '')
    .trim()
    .toLowerCase()
    .replace(/[_\s]+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

export default function StudyMapPage() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const uniqueModules: ModuleCard[] = useMemo(() => {
    const seen = new Map<string, ModuleCard>();
    for (const topic of topics) {
      const rawId = String(topic.topicId || '');
      const title = (topic.topicName || topic.topic || '').trim();
      const category = (topic.specialty || 'Emergency Medicine').trim();
      let slug = slugify(rawId);
      if (!slug) slug = slugify(title);
      if (!slug) slug = slugify(`${title}-${category}`);
      const dedupKey = normalize(rawId) || normalize(title) || normalize(`${title}__${category}`);
      if (seen.has(dedupKey)) continue;
      seen.set(dedupKey, { slug: slug || `topic-${seen.size}`, title: title || 'Emergency Medicine Topic', category, topicId: rawId });
    }
    return Array.from(seen.values());
  }, []);

  const handleSearchChange = (value: string) => { setSearch(value); setPage(1); };

  const filtered = useMemo(() => {
    if (!search.trim()) return uniqueModules;
    const q = search.trim().toLowerCase();
    return uniqueModules.filter((m) => m.title.toLowerCase().includes(q) || m.category.toLowerCase().includes(q) || m.topicId.toLowerCase().includes(q));
  }, [search, uniqueModules]);

  const totalPages = Math.max(Math.ceil(filtered.length / ITEMS_PER_PAGE), 1);
  const safePage = Math.min(page, totalPages);
  const paginated = useMemo(() => filtered.slice((safePage - 1) * ITEMS_PER_PAGE, safePage * ITEMS_PER_PAGE), [filtered, safePage]);

  const visiblePages = useMemo(() => {
    if (totalPages <= 5) return Array.from({ length: totalPages }, (_, i) => i + 1);
    const start = Math.max(1, Math.min(safePage - 2, totalPages - 4));
    return Array.from({ length: 5 }, (_, i) => start + i);
  }, [totalPages, safePage]);

  return (
    <InternalPage
      title="Study Map"
      subtitle="Choose your emergency medicine learning route."
      introText="Browse all 218 emergency medicine topics organized as learning modules. Search, filter, and navigate your personalized study path."
      searchPlaceholder="Search by title or category…"
      searchValue={search}
      onSearch={handleSearchChange}
    >
      {/* count */}
      <div className="mb-6 text-sm font-bold text-slate-400">
        Showing <span className="text-cyan-400">{filtered.length}</span> unique modules
        {filtered.length !== uniqueModules.length && (
          <span className="text-slate-500"> (filtered from {uniqueModules.length} total)</span>
        )}
      </div>

      {/* Grid */}
      {paginated.length === 0 ? (
        <div className="flex flex-col items-center gap-4 py-20 text-center">
          <BookOpen size={48} className="text-slate-600" />
          <p className="text-lg font-bold text-slate-400">No modules found.</p>
          <p className="text-sm text-slate-500">Try a different search term.</p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {paginated.map((module, idx) => {
            const globalIndex = (safePage - 1) * ITEMS_PER_PAGE + idx + 1;
            return (
              <Link
                key={module.slug || module.topicId}
                href={`/study-map/${module.slug}`}
                className="group flex flex-col rounded-2xl border border-slate-700/30 bg-slate-900/30 p-5 backdrop-blur-md transition hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/5"
              >
                <div className="flex items-center justify-between">
                  {(() => {
                    const { icon: Icon, color, bg } = getCategoryStyle(module.category);
                    return (
                      <span className={`flex h-9 w-9 items-center justify-center rounded-xl ${bg}`}>
                        <Icon size={16} className={color} />
                      </span>
                    );
                  })()}
                  <span className="rounded-lg bg-cyan-500/10 px-2.5 py-1 text-[10px] font-black text-cyan-300">
                    #{globalIndex}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-black leading-snug text-white">{module.title}</h3>
                <div className="mt-auto flex items-center justify-between pt-4">
                  <span className="rounded-full border border-slate-700/40 bg-slate-800/40 px-3 py-1 text-[10px] font-bold text-slate-400">
                    {module.category}
                  </span>
                  <ArrowRight size={15} className="text-slate-600 transition group-hover:translate-x-1 group-hover:text-cyan-400" />
                </div>
              </Link>
            );
          })}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-10">
          <nav className="flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              disabled={safePage <= 1}
              className="flex items-center gap-1 rounded-xl border border-slate-700/40 bg-slate-900/40 px-4 py-2.5 text-sm font-black text-slate-300 backdrop-blur-md transition hover:border-cyan-500/30 hover:text-cyan-300 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronLeft size={15} /> Previous
            </button>
            <div className="flex items-center gap-1">
              {visiblePages[0] > 1 && (
                <>
                  <PageButton page={1} current={safePage} onClick={setPage} />
                  {visiblePages[0] > 2 && <span className="px-1 text-sm font-bold text-slate-600">…</span>}
                </>
              )}
              {visiblePages.map((p) => <PageButton key={p} page={p} current={safePage} onClick={setPage} />)}
              {visiblePages[visiblePages.length - 1] < totalPages && (
                <>
                  {visiblePages[visiblePages.length - 1] < totalPages - 1 && <span className="px-1 text-sm font-bold text-slate-600">…</span>}
                  <PageButton page={totalPages} current={safePage} onClick={setPage} />
                </>
              )}
            </div>
            <button
              onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
              disabled={safePage >= totalPages}
              className="flex items-center gap-1 rounded-xl border border-slate-700/40 bg-slate-900/40 px-4 py-2.5 text-sm font-black text-slate-300 backdrop-blur-md transition hover:border-cyan-500/30 hover:text-cyan-300 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next <ChevronRight size={15} />
            </button>
          </nav>
          <p className="mt-3 text-center text-xs font-bold text-slate-500">Page {safePage} of {totalPages}</p>
        </div>
      )}
    </InternalPage>
  );
}

function PageButton({ page, current, onClick }: { page: number; current: number; onClick: (p: number) => void }) {
  const isActive = page === current;
  return (
    <button
      onClick={() => onClick(page)}
      className={`flex h-10 w-10 items-center justify-center rounded-xl text-sm font-black transition ${
        isActive ? 'bg-cyan-500 text-white shadow-glow' : 'border border-slate-700/40 bg-slate-900/40 text-slate-400 hover:border-cyan-500/30 hover:text-cyan-300'
      }`}
    >
      {page}
    </button>
  );
}
