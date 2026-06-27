'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import { Filter, Maximize2, Search, X, Eye, ClipboardCheck } from 'lucide-react';
import { ProgressActions, progressCardClass } from './ProgressActions';
import { useProgress } from '@/hooks/useProgress';

type Visual = {
  id: string;
  title: string;
  topic?: string;
  src: string;
  category?: string;
  visualType?: string;
  sectionTargets?: string[];
  tags?: string[];
  source?: string;
  sourcePage?: number;
  page?: number;
  description?: string;
  englishFocus?: string;
  arabicSupport?: string;
  needsReview?: boolean;
  hidden?: boolean;
};

const banned = /cover|copyright|author|preface|contents|toc|blank|introduction/i;

function includesText(v: Visual, query: string) {
  if (!query.trim()) return true;
  const hay = [v.title, v.topic, v.category, v.visualType, v.description, ...(v.tags || [])].join(' ').toLowerCase();
  return hay.includes(query.toLowerCase());
}

export function VisualGallery({ visuals, title = 'Visual Library' }: { visuals: Visual[]; title?: string }) {
  const cleanVisuals = useMemo(() => visuals.filter((v) => !v.hidden && !banned.test([v.title, v.topic, v.category].join(' '))), [visuals]);
  const cats = useMemo(() => ['All', ...Array.from(new Set(cleanVisuals.map((v) => v.category || 'Clinical visual'))).slice(0, 14)], [cleanVisuals]);
  const types = useMemo(() => ['All', ...Array.from(new Set(cleanVisuals.map((v) => v.visualType || 'Visual summary'))).slice(0, 14)], [cleanVisuals]);
  const [cat, setCat] = useState('All');
  const [type, setType] = useState('All');
  const [query, setQuery] = useState('');
  const [active, setActive] = useState<Visual | null>(null);
  const shown = cleanVisuals
    .filter((v) => cat === 'All' || (v.category || 'Clinical visual') === cat)
    .filter((v) => type === 'All' || (v.visualType || 'Visual summary') === type)
    .filter((v) => includesText(v, query))
    .slice(0, 160);
  const { getItemState } = useProgress();

  return (
    <section className="space-y-5">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-emerald-700"><Eye size={16} /> Clean visual atlas</div>
            <h2 className="mt-1 text-2xl font-black text-slate-950">{title}</h2>
            <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">Filtered gallery for clinically useful visuals only. Cover, intro, author, copyright, and unrelated pages should not appear in learner-facing sections.</p>
            <div className="arabic-support mt-2 text-sm text-slate-600">هذا المعرض للصور الطبية المفيدة فقط؛ الصور العشوائية أو الغلاف لا تدخل في الأقسام التعليمية.</div>
          </div>
          <div className="rounded-2xl bg-slate-950 px-4 py-3 text-white">
            <div className="text-2xl font-black">{shown.length}</div>
            <div className="text-xs font-bold text-slate-300">Visible after filters</div>
          </div>
        </div>

        <div className="mt-5 grid gap-3 lg:grid-cols-[1fr_auto]">
          <label className="relative block">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search topic, ECG, shock, sepsis, toxicology, table..." className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm font-semibold outline-none focus:border-emerald-300 focus:bg-white" />
          </label>
          <div className="flex items-center gap-2 rounded-2xl bg-slate-100 px-4 py-3 text-xs font-black text-slate-700"><Filter size={16} /> Category + visual type filters</div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">{cats.map((c) => <button key={c} onClick={() => setCat(c)} className={`rounded-full px-3 py-2 text-xs font-black ${cat === c ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>{c}</button>)}</div>
        <div className="mt-3 flex flex-wrap gap-2">{types.map((t) => <button key={t} onClick={() => setType(t)} className={`rounded-full px-3 py-2 text-xs font-black ${type === t ? 'bg-cyan-500 text-white' : 'bg-cyan-50 text-cyan-800 hover:bg-cyan-100'}`}>{t}</button>)}</div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {shown.map((v) => {
          const state = getItemState(v.id);
          return <article key={v.id} className={`overflow-hidden rounded-[2rem] border shadow-sm transition hover:-translate-y-1 hover:shadow-glow ${progressCardClass(state)}`}>
            <button onClick={() => setActive(v)} className="group relative block aspect-[4/3] w-full overflow-hidden bg-slate-100">
              <Image src={v.src} alt={v.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
              <span className="absolute right-3 top-3 rounded-full bg-slate-950/80 p-2 text-white"><Maximize2 size={16} /></span>
              {v.needsReview ? <span className="absolute left-3 top-3 rounded-full bg-amber-400 px-3 py-1 text-[10px] font-black uppercase text-amber-950">Needs review</span> : null}
            </button>
            <div className="p-5">
              <div className="text-xs font-black uppercase tracking-wider text-emerald-700">{v.category || 'Clinical visual'} • Page {v.sourcePage || v.page || '—'}</div>
              <h3 className="mt-2 text-lg font-black text-slate-950">{v.title}</h3>
              <p className="mt-1 text-sm font-bold text-cyan-700">Mapped topic: {v.topic || v.title}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{v.englishFocus || v.description || 'Use this visual to recognize the pattern and connect it to the safest emergency decision.'}</p>
              <div className="arabic-support mt-3 rounded-2xl bg-slate-50 p-3 text-sm text-slate-700">{v.arabicSupport || 'الصورة تساعدك تفهم النمط السريري بدل حفظ الكلمات فقط.'}</div>
              <div className="mt-3 flex flex-wrap gap-2">{(v.tags || []).slice(0, 4).map((tag) => <span key={tag} className="rounded-full bg-slate-100 px-2 py-1 text-[10px] font-black text-slate-600">#{tag}</span>)}</div>
              <ProgressActions id={v.id} section="Visual Atlas" title={v.title} />
            </div>
          </article>;
        })}
      </div>

      {active ? <div className="fixed inset-0 z-[80] bg-slate-950/90 p-4" onClick={() => setActive(null)}>
        <button className="absolute right-5 top-5 rounded-2xl bg-white p-3"><X /></button>
        <div className="mx-auto grid h-full max-w-7xl gap-4 lg:grid-cols-[1fr_360px]">
          <div className="relative min-h-[60vh]"><Image src={active.src} alt={active.title} fill className="object-contain" /></div>
          <aside className="my-auto rounded-[2rem] bg-white p-5 text-slate-900" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-2 text-xs font-black uppercase text-emerald-700"><ClipboardCheck size={16} /> Visual lesson note</div>
            <h3 className="mt-2 text-2xl font-black">{active.title}</h3>
            <p className="mt-2 text-sm font-bold text-cyan-700">Topic: {active.topic || active.title}</p>
            <p className="mt-3 text-sm leading-7 text-slate-700">{active.englishFocus || active.description}</p>
            <div className="arabic-support mt-3 rounded-2xl bg-emerald-50 p-3 text-sm">{active.arabicSupport || 'اربط الصورة بالموضوع ثم اسأل: ما الخطر؟ وما أول قرار آمن؟'}</div>
          </aside>
        </div>
      </div> : null}
    </section>
  );
}
