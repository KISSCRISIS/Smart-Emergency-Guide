'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Search, SlidersHorizontal } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { ArabicSupport } from '@/components/ArabicSupport';
import { SaveForLater } from '@/components/SaveForLater';
import { getItemId, getTopicTitle, searchAll } from '@/lib/database';

const sectionOrder = ['All', 'Topics', 'MCQ Bank', 'Visual Assets', 'Drug Handbook', 'Toxicology & Antidotes', 'ECG Atlas', 'Critical Care', 'Algorithms', 'Numericals', 'Exam Traps', 'Flashcards'];

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [section, setSection] = useState('All');
  const rawResults = useMemo(() => searchAll(query).slice(0, 150), [query]);
  const sections = useMemo(() => ['All', ...Array.from(new Set(rawResults.map((x: any) => x.section)))], [rawResults]);
  const results = section === 'All' ? rawResults : rawResults.filter((x: any) => x.section === section);

  return <div>
    <PageHeader title="Smart Search Engine" subtitle="Search across topics, ECG, drugs, toxicology, antidotes, critical care, numericals, algorithms, visual assets, and MCQs." arabic="ابحث في كل المنصة، وستظهر النتائج مرتبة حسب القسم بدل أن تضيع بين صفحات كثيرة." />

    <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center gap-3 rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 focus-within:border-emerald-300 focus-within:ring-4 focus-within:ring-emerald-100">
        <Search className="text-emerald-600" />
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search: hyperkalemia, shock, adrenaline, intubation, antidote, ECG..." className="w-full bg-transparent text-lg font-semibold outline-none" />
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500"><SlidersHorizontal size={14} /> Filter</span>
        {sections.filter((x) => sectionOrder.includes(x) || x === 'All').map((s) => <button key={s} onClick={() => setSection(s)} className={`rounded-full px-3 py-1.5 text-xs font-black transition ${section === s ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-700 hover:bg-emerald-100'}`}>{s}</button>)}
      </div>
    </div>

    <div className="mt-5 text-sm font-bold text-slate-500">{query ? `${results.length} organized results` : 'Type a term to search the platform.'}</div>

    <div className="mt-4 grid gap-4">
      {results.map(({ section: resultSection, item, href, score }: any, i: number) => {
        const title = getTopicTitle(item);
        const id = `search-${resultSection}-${getItemId(item, String(i))}`;
        const snippet = item.text || item.question || item.answer || item.explanation || item.topic || item.use || item.title || item.englishFocus || JSON.stringify(item).slice(0, 240);
        return <article key={`${resultSection}-${i}`} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-glow">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-black uppercase tracking-wider text-emerald-700">{resultSection}</span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-500">Relevance {score}</span>
            </div>
            <SaveForLater id={id} title={title} section={resultSection} href={href} note={String(snippet).slice(0, 180)} tags={[resultSection]} />
          </div>
          <h3 className="mt-3 text-xl font-black text-slate-950">{title}</h3>
          <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-600">{String(snippet)}</p>
          <ArabicSupport>{item.arabicMentorExplanation || item.explanation_ar || item.arabic || item.arabicSupport || 'استخدم البحث للوصول السريع للمعلومة، ثم افتح القسم المرتبط لتدرسها ضمن سياقها الصحيح.'}</ArabicSupport>
          <div className="mt-4"><Link href={href || '/dashboard'} className="text-sm font-black text-emerald-700 hover:text-emerald-900">Open related section →</Link></div>
        </article>;
      })}
    </div>
    {query && !results.length ? <div className="mt-5 rounded-3xl border border-slate-200 bg-white p-8 text-center text-slate-600">No results found. Try a broader term like shock, ECG, airway, drug, dose, or toxicology.</div> : null}
  </div>;
}
