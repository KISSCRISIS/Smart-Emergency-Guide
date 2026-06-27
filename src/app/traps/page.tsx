'use client';

import { useMemo, useState } from 'react';
import { AlertTriangle, Search, ShieldAlert, Target } from 'lucide-react';
import { SectionFeatureHero } from '@/components/SectionFeatureHero';
import { examTraps, cleanSource } from '@/lib/database';
import { Button } from '@/components/Button';
import { ProgressActions, progressCardClass } from '@/components/ProgressActions';
import { useProgress } from '@/hooks/useProgress';

const cats = ['All', 'Critical Care', 'ECG', 'Toxicology', 'Trauma', 'Pediatrics', 'OB/GYN', 'Board Favorite', 'Drug & Dose', 'Legal / Safety'];

function classifyTrap(trap: any) {
  const hay = [trap.topic, trap.text, trap.source].join(' ').toLowerCase();
  if (/ecg|qrs|qt|stemi|heart|arrhythm|timi|heart score/.test(hay)) return 'ECG';
  if (/toxic|poison|antidote|acetaminophen|salicylate|overdose|tox/.test(hay)) return 'Toxicology';
  if (/trauma|blast|burn|head injury|spine|fracture/.test(hay)) return 'Trauma';
  if (/child|pediatric|infant|neonate/.test(hay)) return 'Pediatrics';
  if (/pregnan|ob|gyn|ectopic|postpartum/.test(hay)) return 'OB/GYN';
  if (/dose|mg|drug|medication|calcium|epinephrine|antibiotic/.test(hay)) return 'Drug & Dose';
  if (/emtala|liability|consent|transfer|legal|capacity/.test(hay)) return 'Legal / Safety';
  if (/shock|sepsis|airway|vent|icu|unstable|hypotension|resusc/.test(hay)) return 'Critical Care';
  return 'Board Favorite';
}

function correctRule(trap: any, category: string) {
  if (category === 'Critical Care') return 'Stabilize ABCs and immediate life threats before chasing a complete diagnosis.';
  if (category === 'ECG') return 'Interpret the dangerous ECG pattern in clinical context, then act on unstable or high-risk findings.';
  if (category === 'Toxicology') return 'Identify the toxidrome, check ECG/glucose/temperature, and give time-sensitive antidotes when indicated.';
  if (category === 'Trauma') return 'Use primary survey priorities; do not let normal-looking external findings hide internal injury.';
  if (category === 'Drug & Dose') return 'Confirm dose, route, concentration, contraindications, and monitoring before administration.';
  if (category === 'Legal / Safety') return 'Choose the safest legally and clinically defensible action; document risk, capacity, consent, and transfer details.';
  return 'Find the unsafe assumption, then choose the option that protects the patient first.';
}

export default function TrapsPage() {
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');
  const [practiceId, setPracticeId] = useState<string | null>(null);
  const { getItemState } = useProgress();
  const traps = useMemo(() => examTraps.map((t: any, i: number) => ({ ...t, id: t.id || `trap-${i}`, category: classifyTrap(t), index: i + 1 })), []);
  const filtered = traps
    .filter((t: any) => category === 'All' || t.category === category)
    .filter((t: any) => !query.trim() || [t.topic, t.text, t.category].join(' ').toLowerCase().includes(query.toLowerCase()))
    .slice(0, 180);

  return <>
    <SectionFeatureHero
      title="Exam Traps Command Center"
      subtitle="A trap-focused learning system: the mistake, why it is dangerous, the correct rule, exam pearl, and practice logic."
      arabic="الفخ الامتحاني غالبًا ليس معلومة صعبة؛ هو طريقة تفكير خاطئة تحت الضغط. هنا نتعلم كيف نكشفه بسرعة."
      tone="amber"
    />

    <section className="rounded-[2rem] border border-amber-200 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div><div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-amber-700"><ShieldAlert size={16}/> Trap scanner</div><h2 className="mt-1 text-2xl font-black text-slate-950">Find the mistake before it finds you</h2><p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">Each card is organized as mistake → danger → correct rule → exam pearl → quick practice.</p></div>
        <div className="rounded-2xl bg-amber-400 px-4 py-3 text-amber-950"><div className="text-2xl font-black">{filtered.length}</div><div className="text-xs font-black">Visible traps</div></div>
      </div>
      <label className="relative mt-5 block"><Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18}/><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search trap, topic, ECG, toxicology, trauma..." className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm font-semibold outline-none focus:border-amber-300" /></label>
      <div className="mt-4 flex flex-wrap gap-2">{cats.map((c) => <button key={c} onClick={() => setCategory(c)} className={`rounded-full px-3 py-2 text-xs font-black ${category === c ? 'bg-amber-500 text-white' : 'bg-amber-50 text-amber-900 hover:bg-amber-100'}`}>{c}</button>)}</div>
    </section>

    <section className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {filtered.map((trap: any) => {
        const state = getItemState(trap.id);
        const open = practiceId === trap.id;
        const rule = correctRule(trap, trap.category);
        return <article key={trap.id} className={`rounded-[2rem] border p-5 shadow-sm transition hover:-translate-y-1 ${progressCardClass(state)}`}>
          <div className="flex flex-wrap items-center justify-between gap-2"><div className="text-xs font-black uppercase tracking-wider text-amber-700">{trap.category}</div><span className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-black text-slate-600">Trap #{trap.index}</span></div>
          <h3 className="mt-3 text-xl font-black leading-7 text-slate-950">{trap.topic || 'Emergency Medicine Trap'}</h3>
          <div className="mt-4 rounded-2xl bg-rose-50 p-4 text-sm leading-7 text-rose-950"><strong>The mistake:</strong> {trap.text}</div>
          <div className="mt-3 rounded-2xl bg-amber-50 p-4 text-sm leading-7 text-amber-950"><strong>Why dangerous:</strong> It can make you choose an attractive answer that delays the safest emergency decision.</div>
          <div className="mt-3 rounded-2xl bg-emerald-50 p-4 text-sm leading-7 text-emerald-950"><strong>Correct rule:</strong> {rule}</div>
          <div className="arabic-support mt-3 rounded-2xl bg-slate-50 p-3 text-sm text-slate-700">الفكرة: اسأل نفسك ما الخيار الذي يحمي المريض الآن؟ لا تنخدع بإجابة تبدو علمية لكنها تؤخر التصرف الآمن.</div>
          <div className="mt-3 rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">Source: {cleanSource(trap.source)}</div>
          {open ? <div className="mt-4 rounded-2xl border border-amber-200 bg-white p-4"><div className="flex items-center gap-2 text-sm font-black text-amber-800"><Target size={18}/> Practice this trap</div><p className="mt-2 text-sm font-semibold text-slate-700">When you see this pattern, what should you do first?</p><p className="mt-2 rounded-xl bg-emerald-50 p-3 text-sm font-bold leading-6 text-emerald-950">Apply the correct rule: {rule}</p></div> : null}
          <div className="mt-4"><Button variant="secondary" onClick={() => setPracticeId(open ? null : trap.id)}><AlertTriangle size={16}/> Practice this trap</Button></div>
          <ProgressActions id={trap.id} section="Exam Traps" title={trap.topic || trap.text} />
        </article>;
      })}
    </section>
  </>;
}
