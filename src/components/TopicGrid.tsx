'use client';

import { BookOpen, CheckCircle2 } from 'lucide-react';
import { useProgress } from '@/hooks/useProgress';
import { ArabicSupport } from './ArabicSupport';
import { getItemId, getTopicTitle } from '@/lib/database';
import { ProgressActions, progressCardClass } from './ProgressActions';

function listify(value: any, max = 4) {
  if (!value) return [];
  if (Array.isArray(value)) return value.filter(Boolean).slice(0, max);
  return String(value).split(/\n|\u2022|;/).map((x) => x.trim()).filter(Boolean).slice(0, max);
}

export function TopicGrid({ items, section = 'Topics' }: { items: any[]; section?: string }) {
  const { getItemState } = useProgress();
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item, index) => {
        const id = getItemId(item, `${section}-${index}`);
        const state = getItemState(id);
        const title = getTopicTitle(item);
        const facts = listify(item.highYieldFacts || item.keyPoints || item.tables || item.algorithms);
        const traps = listify(item.examTraps || item.relatedTraps, 2);
        return (
          <article key={id} className={`rounded-[2rem] border p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-glow ${progressCardClass(state)}`}>
            <div className="mb-3 flex items-start justify-between gap-3">
              <div className="rounded-2xl bg-emerald-100 p-3 text-emerald-700"><BookOpen size={20} /></div>
              <span className="rounded-full bg-slate-950 px-3 py-1 text-xs font-bold text-white">{state}</span>
            </div>
            <h3 className="text-lg font-black text-slate-950">{title}</h3>
            <p className="mt-2 text-sm font-semibold text-teal-700">{item.specialty || item.source || item.chapterTitle || 'Emergency Medicine'}</p>
            {facts.length ? <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700">{facts.map((fact, i) => <li key={i} className="flex gap-2"><CheckCircle2 className="mt-1 h-4 w-4 flex-none text-emerald-500" /> <span>{fact}</span></li>)}</ul> : null}
            {traps.length ? <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900"><strong>Exam trap:</strong> {traps.join(' • ')}</div> : null}
            <ArabicSupport>{item.arabicMentorExplanation || item.explanation || ''}</ArabicSupport>
            <ProgressActions id={id} section={section} title={title} />
          </article>
        );
      })}
    </div>
  );
}
