'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import { Maximize2, Search, ShieldCheck, X } from 'lucide-react';
import { ProgressActions, progressCardClass } from './ProgressActions';
import { useProgress } from '@/hooks/useProgress';

export type VisualAsset = {
  id: string;
  title: string;
  topic: string;
  chapter?: string;
  category: string;
  sectionTargets?: string[];
  visualType: string;
  src: string;
  source?: string;
  sourcePage?: number;
  page?: number;
  tags?: string[];
  approved?: boolean;
  hidden?: boolean;
  needsReview?: boolean;
  description?: string;
  englishFocus?: string;
  arabicSupport?: string;
};

function matchesQuery(asset: VisualAsset, query: string) {
  if (!query.trim()) return true;
  const q = query.toLowerCase();
  return [asset.title, asset.topic, asset.chapter, asset.category, asset.visualType, ...(asset.tags || [])]
    .filter(Boolean)
    .join(' ')
    .toLowerCase()
    .includes(q);
}

export function TopicMatchedVisuals({
  assets,
  title = 'Topic-matched visuals from the PDF',
  subtitle = 'Filtered clinical visuals only: no cover, author, intro, copyright, or unrelated pages.',
  defaultQuery = '',
  limit = 48,
}: {
  assets: VisualAsset[];
  title?: string;
  subtitle?: string;
  defaultQuery?: string;
  limit?: number;
}) {
  const [query, setQuery] = useState(defaultQuery);
  const [type, setType] = useState('All');
  const [active, setActive] = useState<VisualAsset | null>(null);
  const { getItemState } = useProgress();

  const types = useMemo(() => ['All', ...Array.from(new Set(assets.map((a) => a.visualType))).slice(0, 10)], [assets]);
  const shown = useMemo(
    () => assets.filter((a) => !a.hidden).filter((a) => type === 'All' || a.visualType === type).filter((a) => matchesQuery(a, query)).slice(0, limit),
    [assets, query, type, limit]
  );

  return (
    <section className="space-y-5">
      <div className="rounded-[2rem] border border-emerald-200 bg-white p-5 shadow-sm">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="text-xs font-black uppercase tracking-[0.25em] text-emerald-700">PDF visual mapping system</div>
            <h2 className="mt-2 text-2xl font-black text-slate-950">{title}</h2>
            <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">{subtitle}</p>
            <div className="mt-3 rounded-2xl bg-emerald-50 p-3 text-sm font-semibold leading-7 text-slate-800" dir="rtl">
              الصور هنا ليست صفحات عشوائية من الكتاب؛ هي عناصر تعليمية مستخرجة ومربوطة بالموضوع حتى تساعدك تفهم الحالة قبل الحفظ.
            </div>
          </div>
          <div className="rounded-2xl bg-slate-950 px-4 py-3 text-sm font-black text-white">
            {assets.length} mapped visuals
          </div>
        </div>
        <div className="mt-5 flex flex-col gap-3 lg:flex-row lg:items-center">
          <label className="flex min-w-0 flex-1 items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700">
            <Search size={16} />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search condition, ECG pattern, table, algorithm..." className="min-w-0 flex-1 bg-transparent outline-none" />
          </label>
          <div className="flex flex-wrap gap-2">
            {types.map((t) => (
              <button key={t} onClick={() => setType(t)} className={`rounded-full px-3 py-2 text-xs font-black ${type === t ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-700'}`}>
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {shown.map((asset) => {
          const state = getItemState(asset.id);
          return (
            <article key={asset.id} className={`overflow-hidden rounded-[2rem] border shadow-sm transition hover:-translate-y-1 hover:shadow-glow ${progressCardClass(state)}`}>
              <button onClick={() => setActive(asset)} className="group relative block aspect-[16/10] w-full overflow-hidden bg-slate-100">
                <Image src={asset.src} alt={asset.title} fill className="object-contain p-2 transition duration-500 group-hover:scale-105" />
                <span className="absolute right-3 top-3 rounded-full bg-slate-950/80 p-2 text-white"><Maximize2 size={16} /></span>
                {asset.needsReview ? <span className="absolute left-3 top-3 rounded-full bg-amber-500 px-3 py-1 text-xs font-black text-white">Needs review</span> : null}
              </button>
              <div className="space-y-3 p-5">
                <div className="flex flex-wrap items-center gap-2 text-xs font-black uppercase tracking-wider text-emerald-700">
                  <span>{asset.visualType}</span>
                  <span>•</span>
                  <span>PDF page {asset.sourcePage || asset.page}</span>
                </div>
                <h3 className="text-xl font-black text-slate-950">{asset.topic || asset.title}</h3>
                <p className="text-sm leading-7 text-slate-700">{asset.englishFocus}</p>
                <div className="rounded-2xl bg-emerald-50 p-3 text-sm leading-7 text-slate-800" dir="rtl">{asset.arabicSupport}</div>
                <div className="flex flex-wrap gap-2">
                  {(asset.tags || []).slice(0, 5).map((tag) => <span key={tag} className="rounded-full bg-slate-100 px-2 py-1 text-[11px] font-bold text-slate-600">#{tag}</span>)}
                </div>
                <ProgressActions id={asset.id} section="PDF Visual Mapping" title={asset.title} />
              </div>
            </article>
          );
        })}
      </div>
      {!shown.length ? <div className="rounded-[2rem] border border-dashed border-slate-300 bg-white p-8 text-center font-bold text-slate-500">No matched visuals found for this filter yet.</div> : null}

      {active ? (
        <div className="fixed inset-0 z-[80] bg-slate-950/90 p-4" onClick={() => setActive(null)}>
          <button className="absolute right-5 top-5 rounded-2xl bg-white p-3"><X /></button>
          <div className="mx-auto grid h-full max-w-7xl gap-4 lg:grid-cols-[1.6fr_0.9fr]" onClick={(e) => e.stopPropagation()}>
            <div className="relative min-h-[60vh] rounded-[2rem] bg-white/5"><Image src={active.src} alt={active.title} fill className="object-contain p-4" /></div>
            <aside className="max-h-full overflow-auto rounded-[2rem] bg-white p-6 shadow-2xl">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-emerald-700"><ShieldCheck size={16} /> Topic-mapped visual</div>
              <h3 className="mt-3 text-3xl font-black text-slate-950">{active.topic}</h3>
              <p className="mt-3 text-sm font-bold text-slate-500">{active.visualType} • Source page {active.sourcePage}</p>
              <p className="mt-5 leading-7 text-slate-700">{active.englishFocus}</p>
              <div className="mt-4 rounded-2xl bg-emerald-50 p-4 leading-8 text-slate-800" dir="rtl">{active.arabicSupport}</div>
            </aside>
          </div>
        </div>
      ) : null}
    </section>
  );
}
