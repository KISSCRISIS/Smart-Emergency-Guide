'use client';

import { useMemo, useState } from 'react';
import { GitBranch, Search, AlertTriangle, CheckCircle2, ArrowDown, Split } from 'lucide-react';
import { SectionFeatureHero } from '@/components/SectionFeatureHero';
import { TopicMatchedVisuals } from '@/components/TopicMatchedVisuals';
import { algorithms, getVisualAssetsBySection, cleanSource } from '@/lib/database';
import { ProgressActions, progressCardClass } from '@/components/ProgressActions';
import { useProgress } from '@/hooks/useProgress';
import { Button } from '@/components/Button';

const categories = ['All', 'Resuscitation', 'Trauma', 'Sepsis / Shock', 'Cardiology', 'Pediatrics', 'Toxicology', 'Scores / Rules', 'Airway'];

function classifyAlgorithm(a: any) {
  const hay = [a.name, a.topic, a.source].join(' ').toLowerCase();
  if (/airway|intubat|vent/.test(hay)) return 'Airway';
  if (/trauma|head|pecarn|atls|injury/.test(hay)) return 'Trauma';
  if (/sepsis|shock|qsofa|sofa|map|lactate/.test(hay)) return 'Sepsis / Shock';
  if (/cardiac|chest|heart|stemi|arrhythm|syncope|timi/.test(hay)) return 'Cardiology';
  if (/pediatric|child|infant|pecarn/.test(hay)) return 'Pediatrics';
  if (/toxic|poison|overdose|antidote/.test(hay)) return 'Toxicology';
  if (/score|rule|criteria|risk|decision/.test(hay)) return 'Scores / Rules';
  return 'Resuscitation';
}

function stepsFor(category: string) {
  if (category === 'Trauma') return ['Primary survey: ABCDE', 'Control life-threatening bleeding', 'Decide imaging only after stability', 'Treat time-critical injuries', 'Reassess and decide OR/ICU/transfer'];
  if (category === 'Sepsis / Shock') return ['Recognize shock or hypoperfusion', 'Oxygen, IV access, labs, lactate, cultures', 'Fluids when appropriate and early antibiotics', 'Start vasopressor if MAP remains low', 'Reassess source control and ICU disposition'];
  if (category === 'Cardiology') return ['Check stability first', 'Immediate ECG and monitor', 'Treat life-threatening rhythm/ischemia', 'Avoid delays caused by unnecessary tests', 'Disposition by risk and response'];
  if (category === 'Airway') return ['Prepare team and equipment', 'Preoxygenate and plan backup airway', 'RSI / intubation when indicated', 'Confirm with ETCO₂ and bilateral chest rise', 'Connect ventilator and reassess sedation/hemodynamics'];
  if (category === 'Toxicology') return ['Identify toxidrome and unstable threats', 'Check glucose, ECG, temperature, airway', 'Decontamination only if appropriate', 'Give time-sensitive antidote when indicated', 'Monitor complications and disposition'];
  return ['Recognize instability or red flags', 'Stabilize ABCs and immediate threats', 'Use targeted tests that change management', 'Treat time-sensitive causes', 'Reassess response and disposition'];
}

function decisionPoint(category: string) {
  if (category === 'Sepsis / Shock') return 'Is the patient hypotensive, altered, hypoxic, or showing poor perfusion after initial resuscitation?';
  if (category === 'Airway') return 'Can the patient protect airway and maintain oxygenation/ventilation safely?';
  if (category === 'Trauma') return 'Is the patient unstable or showing an immediately life-threatening injury?';
  return 'Is there instability or a must-not-miss emergency that requires immediate action?';
}

export default function AlgorithmsPage() {
  const visuals = getVisualAssetsBySection('Algorithms', 160).filter((v: any) => /algorithm|table|score|criteria|management|treatment|classification|staging|summary|flow/i.test([v.visualType, v.title, v.topic, v.category].join(' '))).slice(0, 120);
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');
  const [openId, setOpenId] = useState<string | null>(null);
  const { getItemState } = useProgress();
  const rows = useMemo(() => algorithms.map((a: any, i: number) => ({ ...a, id: a.id || `algorithm-${i}`, category: classifyAlgorithm(a), index: i + 1 })), []);
  const filtered = rows
    .filter((a: any) => category === 'All' || a.category === category)
    .filter((a: any) => !query.trim() || [a.name, a.topic, a.category].join(' ').toLowerCase().includes(query.toLowerCase()))
    .slice(0, 80);

  return <>
    <SectionFeatureHero
      title="Algorithms & Decision Trees"
      subtitle="Emergency workflows as clinical flowcharts with steps, decision points, red flags, first action, disposition, common mistakes, and related visuals."
      arabic="الخوارزمية ليست عنوانًا؛ هي طريقة تفكير مرتبة: ماذا أفعل أولًا؟ متى أغيّر المسار؟ ومتى أدخل المريض أو أحوله؟"
      tone="blue"
    />

    <section className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-3"><div><div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-cyan-700"><GitBranch size={16}/> Flowchart control</div><h2 className="mt-1 text-2xl font-black text-slate-950">Choose a pathway and follow the decisions</h2><p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">Each pathway now shows a first action, sequential steps, a decision branch, common mistakes, and related PDF visuals when available.</p></div><div className="rounded-2xl bg-slate-950 px-4 py-3 text-white"><div className="text-2xl font-black">{filtered.length}</div><div className="text-xs font-bold text-slate-300">Pathways</div></div></div>
      <label className="relative mt-5 block"><Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18}/><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search algorithm, trauma, sepsis, ECG, airway..." className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm font-semibold outline-none focus:border-cyan-300" /></label>
      <div className="mt-4 flex flex-wrap gap-2">{categories.map((c) => <button key={c} onClick={() => setCategory(c)} className={`rounded-full px-3 py-2 text-xs font-black ${category === c ? 'bg-cyan-600 text-white' : 'bg-cyan-50 text-cyan-900 hover:bg-cyan-100'}`}>{c}</button>)}</div>
    </section>

    <section className="mt-6 grid gap-5 lg:grid-cols-2">
      {filtered.map((a: any) => {
        const state = getItemState(a.id);
        const steps = stepsFor(a.category);
        const open = openId === a.id;
        return <article key={a.id} className={`rounded-[2rem] border p-6 shadow-sm transition hover:-translate-y-1 ${progressCardClass(state)}`}>
          <div className="flex flex-wrap items-center justify-between gap-2"><div className="text-xs font-black uppercase tracking-wider text-cyan-700">{a.category} pathway</div><span className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-black text-slate-600">{cleanSource(a.source)}</span></div>
          <h2 className="mt-2 text-2xl font-black leading-8 text-slate-950">{a.name || a.topic}</h2>
          <p className="mt-1 text-sm font-bold text-teal-700">{a.topic}</p>

          <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4"><div className="flex items-center gap-2 text-sm font-black text-amber-900"><AlertTriangle size={18}/> First decision</div><p className="mt-2 text-sm leading-7 text-amber-950">{decisionPoint(a.category)}</p></div>

          <div className="mt-5 space-y-3">
            {steps.map((s, idx) => <div key={s} className="flex gap-3"><span className={`flex h-9 w-9 flex-none items-center justify-center rounded-full text-sm font-black text-white ${idx === 0 ? 'bg-rose-600' : idx === 1 ? 'bg-amber-500' : 'bg-emerald-600'}`}>{idx + 1}</span><div className="flex-1 rounded-2xl bg-slate-50 p-3 text-sm font-semibold leading-6 text-slate-700">{s}</div>{idx < steps.length - 1 ? <ArrowDown className="mt-2 hidden text-slate-300 sm:block" size={18}/> : null}</div>)}
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2"><div className="rounded-2xl bg-emerald-50 p-4 text-sm leading-7 text-emerald-950"><div className="flex items-center gap-2 font-black"><CheckCircle2 size={18}/> Safe branch</div>Stable or improving → continue targeted workup and reassessment.</div><div className="rounded-2xl bg-rose-50 p-4 text-sm leading-7 text-rose-950"><div className="flex items-center gap-2 font-black"><Split size={18}/> Danger branch</div>Unstable or worsening → return to ABCs, treat immediately, escalate disposition.</div></div>
          <div className="arabic-support mt-4 rounded-2xl bg-cyan-50 p-3 text-sm text-cyan-950">ابدأ بالأخطر: إذا كان المريض غير مستقر لا تضيع الوقت في تفاصيل لا تغيّر العلاج الآن.</div>

          {open ? <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4"><h3 className="font-black text-slate-950">Common mistakes</h3><ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700"><li>Following the algorithm mechanically without reassessing instability.</li><li>Ordering tests before treating immediate life threats.</li><li>Missing disposition: discharge, observation, ICU, OR, or transfer.</li></ul></div> : null}
          <div className="mt-4"><Button variant="secondary" onClick={() => setOpenId(open ? null : a.id)}>{open ? 'Hide details' : 'Open decision details'}</Button></div>
          <ProgressActions id={a.id} section="Algorithms" title={a.name || a.topic} />
        </article>;
      })}
    </section>

    <div className="mt-8"><TopicMatchedVisuals assets={visuals as any[]} title="Mapped algorithms, tables & decision visuals" subtitle="Extracted visual summaries from the PDF after excluding cover/intro/unrelated pages." limit={96}/></div>
  </>;
}
