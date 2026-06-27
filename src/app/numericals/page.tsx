'use client';

import { useMemo, useState } from 'react';
import { Calculator, Filter, Search, Sparkles, CheckCircle2 } from 'lucide-react';
import { SectionFeatureHero } from '@/components/SectionFeatureHero';
import { numericals, cleanSource } from '@/lib/database';
import { Button } from '@/components/Button';
import { ProgressActions, progressCardClass } from '@/components/ProgressActions';
import { useProgress } from '@/hooks/useProgress';

const categories = ['All', 'Drug doses', 'ACLS values', 'Toxicology levels', 'Critical care thresholds', 'Pediatrics', 'ECG intervals', 'OB/GYN', 'Ventilation', 'Electrolytes'];

function classifyNumerical(item: any) {
  const hay = [item.explanation, item.answer, item.questionNumber].join(' ').toLowerCase();
  if (/cpr|compression|defib|shock|acls|epinephrine/.test(hay)) return 'ACLS values';
  if (/dose|mg|mcg|g\/kg|ml\/kg|units|infusion|bolus/.test(hay)) return 'Drug doses';
  if (/toxic|acetaminophen|salicylate|ethanol|level|poison|antidote/.test(hay)) return 'Toxicology levels';
  if (/qrs|qt|pr|stemi|ecg|heart block|interval/.test(hay)) return 'ECG intervals';
  if (/vent|peep|fio2|tidal|plateau|rr|oxygen/.test(hay)) return 'Ventilation';
  if (/sodium|potassium|calcium|glucose|anion|ph|bicarb|osm/.test(hay)) return 'Electrolytes';
  if (/child|pediatric|infant|neonate|kg/.test(hay)) return 'Pediatrics';
  if (/pregnan|ob|gyn|gestation/.test(hay)) return 'OB/GYN';
  if (/shock|sepsis|map|lactate|pressure|icu|critical/.test(hay)) return 'Critical care thresholds';
  return 'Critical care thresholds';
}

function whyItMatters(item: any, category: string) {
  if (category === 'Drug doses') return 'This number can directly change drug safety, route, and toxicity risk. Always verify protocol-sensitive doses locally.';
  if (category === 'ACLS values') return 'This value is time-sensitive during resuscitation and affects immediate emergency actions.';
  if (category === 'Ventilation') return 'Ventilator numbers affect oxygenation, CO₂ clearance, barotrauma risk, and post-intubation safety.';
  if (category === 'ECG intervals') return 'ECG thresholds help identify dangerous rhythm, conduction, and electrolyte emergencies.';
  if (category === 'Toxicology levels') return 'Toxicology values often determine antidote use, monitoring, and disposition.';
  return 'This is a high-yield emergency threshold that can change management, disposition, or exam answer choice.';
}

export default function NumericalsPage() {
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');
  const [quizId, setQuizId] = useState<string | null>(null);
  const { getItemState } = useProgress();

  const rows = useMemo(() => numericals.map((n: any, i: number) => ({ ...n, id: n.id || `num-${i}`, category: classifyNumerical(n), index: i + 1 })), []);
  const filtered = rows
    .filter((n: any) => category === 'All' || n.category === category)
    .filter((n: any) => !query.trim() || [n.explanation, n.answer, n.category].join(' ').toLowerCase().includes(query.toLowerCase()))
    .slice(0, 180);

  return <>
    <SectionFeatureHero
      title="Numericals Command Center"
      subtitle="A high-yield numbers dashboard for doses, ECG thresholds, ACLS values, ventilator settings, toxicology levels, pediatrics, and exam-sensitive values."
      arabic="الأرقام الطبية ليست للحفظ فقط؛ الرقم الصحيح يغيّر القرار، والجرعة، والخطورة، والتصرف في الطوارئ."
      tone="emerald"
    />

    <section className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div><div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-emerald-700"><Calculator size={16} /> High-yield dashboard</div><h2 className="mt-1 text-2xl font-black text-slate-950">Find the number, understand why it matters</h2></div>
        <div className="rounded-2xl bg-slate-950 px-4 py-3 text-white"><div className="text-2xl font-black">{filtered.length}</div><div className="text-xs font-bold text-slate-300">Visible values</div></div>
      </div>
      <div className="mt-5 grid gap-3 lg:grid-cols-[1fr_auto]">
        <label className="relative block"><Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18}/><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search dose, ECG interval, potassium, CPR, ventilation..." className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm font-semibold outline-none focus:border-emerald-300" /></label>
        <div className="flex items-center gap-2 rounded-2xl bg-emerald-50 px-4 py-3 text-xs font-black text-emerald-800"><Filter size={16}/> Filter by emergency category</div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">{categories.map((c) => <button key={c} onClick={() => setCategory(c)} className={`rounded-full px-3 py-2 text-xs font-black ${category === c ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>{c}</button>)}</div>
    </section>

    <section className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {filtered.map((n: any) => {
        const state = getItemState(n.id);
        const showQuiz = quizId === n.id;
        return <article key={n.id} className={`rounded-[2rem] border p-5 shadow-sm transition hover:-translate-y-1 ${progressCardClass(state)}`}>
          <div className="flex flex-wrap items-center justify-between gap-2"><div className="text-xs font-black uppercase tracking-wider text-emerald-700">{n.category}</div><span className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-black text-slate-600">#{n.index}</span></div>
          <h3 className="mt-3 text-xl font-black leading-7 text-slate-950">{n.explanation || `Numerical value ${n.index}`}</h3>
          <div className="mt-4 rounded-2xl bg-slate-950 p-4 text-white"><div className="text-xs font-black uppercase text-emerald-200">Answer / Value</div><p className="mt-1 text-3xl font-black">{n.answer}</p></div>
          <p className="mt-3 text-sm leading-7 text-slate-700"><strong>Why it matters:</strong> {whyItMatters(n, n.category)}</p>
          <div className="arabic-support mt-3 rounded-2xl bg-emerald-50 p-3 text-sm text-emerald-950">الفكرة: لا تحفظ الرقم وحده؛ اربطه بقرار سريري مثل جرعة، إنعاش، خطورة، أو قرار إدخال/مراقبة.</div>
          <div className="mt-3 rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">Source: {cleanSource(n.sourceFile)}</div>
          {showQuiz ? <div className="mt-4 rounded-2xl border border-emerald-200 bg-white p-4"><div className="flex items-center gap-2 text-sm font-black text-emerald-800"><CheckCircle2 size={18}/> Quick drill</div><p className="mt-2 text-sm font-semibold text-slate-700">What is the key value for: <strong>{n.explanation}</strong>?</p><p className="mt-2 rounded-xl bg-emerald-50 p-3 text-xl font-black text-emerald-950">{n.answer}</p></div> : null}
          <div className="mt-4 flex flex-wrap gap-2"><Button variant="secondary" onClick={() => setQuizId(showQuiz ? null : n.id)}><Sparkles size={16}/> Quiz me</Button></div>
          <ProgressActions id={n.id} section="Numericals" title={n.explanation || String(n.answer)} />
        </article>;
      })}
    </section>
  </>;
}
