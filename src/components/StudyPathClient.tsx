'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { ArrowRight, Award, CheckCircle2, Circle, HeartPulse, Lock, Sparkles, Trophy } from 'lucide-react';
import type { StudyPath, StudyPathStep } from '@/data/studyPaths';
import { ProgressActions } from './ProgressActions';
import { SaveForLater } from './SaveForLater';

type PathMemory = { completed: Record<string, boolean>; unlockAll: boolean; rewardOpened?: boolean; updatedAt?: string };
const keyFor = (slug: string) => `seg_study_path_${slug}_v1`;

function readMemory(slug: string): PathMemory {
  if (typeof window === 'undefined') return { completed: {}, unlockAll: false };
  try { return JSON.parse(localStorage.getItem(keyFor(slug)) || '{"completed":{},"unlockAll":false}'); } catch { return { completed: {}, unlockAll: false }; }
}

function writeMemory(slug: string, memory: PathMemory) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(keyFor(slug), JSON.stringify({ ...memory, updatedAt: new Date().toISOString() }));
  window.dispatchEvent(new CustomEvent('seg-path-progress-updated'));
}

function AbcdeSimulator() {
  const [choice, setChoice] = useState<string | null>(null);
  const options = [
    { id: 'airway', label: 'Assess airway + protect C-spine', good: true, ar: 'ØµØ­ÙŠØ­: Ø§Ù„Ù…Ø¬Ø±Ù‰ Ø§Ù„Ù‡ÙˆØ§Ø¦ÙŠ Ø£ÙˆÙ„Ù‹Ø§ Ù…Ø¹ Ø­Ù…Ø§ÙŠØ© Ø§Ù„Ø±Ù‚Ø¨Ø© ÙÙŠ Ø§Ù„Ø­ÙˆØ§Ø¯Ø«.' },
    { id: 'bleeding', label: 'Control thigh bleeding first', good: false, ar: 'Ø§Ù„Ù†Ø²ÙŠÙ Ù…Ù‡Ù… Ø¬Ø¯Ù‹Ø§ØŒ Ù„ÙƒÙ† ÙˆØ¬ÙˆØ¯ ØµÙˆØª ØµØ±ÙŠØ±/ØªÙ‡Ø¯ÙŠØ¯ airway ÙŠØ¹Ù†ÙŠ Ø§Ø¨Ø¯Ø£ Ø¨Ø§Ù„Ù…Ø¬Ø±Ù‰ Ø§Ù„Ù‡ÙˆØ§Ø¦ÙŠ Ø«Ù… Ø¹Ø§Ù„Ø¬ Ø§Ù„Ù†Ø²ÙŠÙ Ø¨Ø³Ø±Ø¹Ø©.' },
    { id: 'ecg', label: 'Attach ECG monitor only', good: false, ar: 'Ø§Ù„Ù…ÙˆÙ†ÙŠØªÙˆØ± Ù…Ù‡Ù…ØŒ Ù„ÙƒÙ†Ù‡ Ù„ÙŠØ³ Ø£ÙˆÙ„ Ø®Ø·ÙˆØ© Ø¥Ø°Ø§ ÙƒØ§Ù† Ø§Ù„Ù…Ø¬Ø±Ù‰ Ø§Ù„Ù‡ÙˆØ§Ø¦ÙŠ Ù…Ù‡Ø¯Ø¯Ù‹Ø§.' },
    { id: 'xray', label: 'Send patient to X-ray', good: false, ar: 'Ù„Ø§ ØªØ±Ø³Ù„ Ù…Ø±ÙŠØ¶Ù‹Ø§ ØºÙŠØ± Ù…Ø³ØªÙ‚Ø± Ù„Ù„ØªØµÙˆÙŠØ± Ù‚Ø¨Ù„ ABCDE ÙˆØ§Ù„ØªØ«Ø¨ÙŠØª.' },
  ];
  const selected = options.find((x) => x.id === choice);
  return <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-5">
    <div className="text-xs font-black uppercase tracking-wider text-emerald-800">Interactive ABCDE Mini-Simulator</div>
    <h4 className="mt-2 text-lg font-black text-slate-950">Trauma patient: noisy breathing + thigh bleeding</h4>
    <p className="mt-2 text-sm leading-7 text-slate-700">A road-traffic trauma patient is shouting intermittently, has noisy breathing/stridor-like sounds, and visible bleeding from the thigh. What is the safest first priority?</p>
    <div className="mt-4 grid gap-2 md:grid-cols-2">{options.map((opt) => <button key={opt.id} onClick={() => setChoice(opt.id)} className={`rounded-2xl border px-4 py-3 text-left text-sm font-bold transition hover:-translate-y-0.5 ${choice === opt.id ? opt.good ? 'border-emerald-500 bg-emerald-600 text-white' : 'border-amber-500 bg-amber-100 text-amber-950' : 'border-slate-200 bg-white text-slate-700'}`}>{opt.label}</button>)}</div>
    {selected ? <div className={`arabic-support mt-4 rounded-2xl p-4 text-sm leading-7 ${selected.good ? 'bg-white text-emerald-900' : 'bg-white text-amber-950'}`}>{selected.ar}</div> : null}
  </div>;
}

function EcgCaliper() {
  const [showSt, setShowSt] = useState(true);
  const [showT, setShowT] = useState(false);
  const [showQrs, setShowQrs] = useState(false);
  return <div className="rounded-3xl border border-rose-200 bg-white p-5 shadow-sm">
    <div className="text-xs font-black uppercase tracking-wider text-rose-700">Interactive ECG Caliper</div>
    <h4 className="mt-2 text-lg font-black text-slate-950">Tap highlights to learn where to look</h4>
    <div className="relative mt-4 h-56 overflow-hidden rounded-3xl border border-slate-200 bg-[linear-gradient(#fee2e2_1px,transparent_1px),linear-gradient(90deg,#fee2e2_1px,transparent_1px)] bg-[length:18px_18px]">
      <svg viewBox="0 0 800 240" className="h-full w-full">
        <polyline points="0,130 70,130 90,128 110,130 130,130 145,95 160,165 178,130 240,130 265,122 286,130 350,130 365,85 382,174 402,130 470,130 500,118 528,130 585,130 605,70 626,185 650,130 720,130 750,122 780,130 800,130" fill="none" stroke="#0f172a" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        {showSt ? <rect x="178" y="105" width="72" height="38" rx="10" fill="rgba(239,68,68,.28)" stroke="#ef4444" strokeWidth="3" /> : null}
        {showT ? <path d="M500 118 L528 130 L470 130 Z" fill="rgba(16,185,129,.35)" stroke="#10b981" strokeWidth="3" /> : null}
        {showQrs ? <rect x="595" y="62" width="42" height="130" rx="12" fill="rgba(14,165,233,.22)" stroke="#0284c7" strokeWidth="3" /> : null}
      </svg>
    </div>
    <div className="mt-4 flex flex-wrap gap-2">
      <button onClick={() => setShowSt((v) => !v)} className="rounded-full bg-rose-100 px-4 py-2 text-xs font-black text-rose-800">Show/Hide ST elevation</button>
      <button onClick={() => setShowT((v) => !v)} className="rounded-full bg-emerald-100 px-4 py-2 text-xs font-black text-emerald-800">Show/Hide peaked T wave</button>
      <button onClick={() => setShowQrs((v) => !v)} className="rounded-full bg-sky-100 px-4 py-2 text-xs font-black text-sky-800">Show/Hide wide QRS</button>
    </div>
    <div className="arabic-support mt-4 rounded-2xl bg-slate-50 p-4 text-sm leading-7 text-slate-700">Ø§Ù„ÙÙƒØ±Ø©: Ù„Ø§ ØªÙ†Ø¸Ø± Ù„Ù„ØªØ®Ø·ÙŠØ· ÙƒÙ„Ù‡ Ø¯ÙØ¹Ø© ÙˆØ§Ø­Ø¯Ø©. Ø­Ø¯Ø¯ Ø§Ù„Ø¹Ù„Ø§Ù…Ø©: ST elevationØŸ T wave Ø¹Ø§Ù„ÙŠØ©ØŸ QRS Ø¹Ø±ÙŠØ¶ØŸ Ø«Ù… Ø§Ø±Ø¨Ø·Ù‡Ø§ Ø¨Ø§Ù„Ø®Ø·Ø± ÙˆØ§Ù„Ù‚Ø±Ø§Ø± Ø§Ù„Ø¹Ù„Ø§Ø¬ÙŠ.</div>
  </div>;
}

function MicroQuiz({ module }: { module: StudyPathStep }) {
  const quiz = module.quiz || [];
  const [answers, setAnswers] = useState<Record<number, string>>({});
  if (!quiz.length) {
    return <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-sm font-bold text-slate-600">Micro-quiz will be generated from this module in the final content pass.</div>;
  }
  const score = quiz.reduce((acc, q, i) => acc + (answers[i] === q.answer ? 1 : 0), 0);
  const answered = Object.keys(answers).length;
  return <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
    <div className="flex flex-wrap items-center justify-between gap-3"><div><div className="text-xs font-black uppercase tracking-wider text-slate-500">Micro-Quiz</div><h4 className="mt-1 text-lg font-black text-slate-950">5â€“10 minute confidence drill</h4></div><div className="rounded-2xl bg-slate-950 px-4 py-2 text-sm font-black text-white">{score}/{quiz.length} points</div></div>
    <div className="mt-4 space-y-4">{quiz.map((q, i) => <article key={q.question} className="rounded-2xl bg-white p-4 shadow-sm">
      <div className="font-black text-slate-950">{i + 1}. {q.question}</div>
      <div className="mt-3 grid gap-2 md:grid-cols-2">{q.options.map((opt) => <button key={opt} onClick={() => setAnswers((prev) => ({ ...prev, [i]: opt }))} className={`rounded-xl border px-3 py-2 text-left text-sm font-bold ${answers[i] === opt ? opt === q.answer ? 'border-emerald-500 bg-emerald-50 text-emerald-900' : 'border-rose-400 bg-rose-50 text-rose-900' : 'border-slate-200 bg-white text-slate-700'}`}>{opt}</button>)}</div>
      {answers[i] ? <div className="mt-3 rounded-xl bg-slate-50 p-3 text-sm leading-6 text-slate-700"><b>Explanation:</b> {q.explanation}<div className="arabic-support mt-2 text-slate-700">{q.arabic}</div></div> : null}
    </article>)}</div>
    {answered === quiz.length ? <div className="mt-4 rounded-2xl bg-emerald-600 p-4 text-sm font-black text-white">Badge earned: Micro-Quiz Complete ðŸ…</div> : null}
  </div>;
}

function SpecialModuleTool({ module }: { module: StudyPathStep }) {
  if (module.moduleType === 'simulator' || module.id.includes('abcde')) return <AbcdeSimulator />;
  if (module.moduleType === 'ecg-caliper' || module.id.includes('ecg')) return <EcgCaliper />;
  if (module.moduleType === 'micro-quiz') return <MicroQuiz module={module} />;
  return null;
}

export function StudyPathClient({ path }: { path: StudyPath }) {
  const [memory, setMemory] = useState<PathMemory>({ completed: {}, unlockAll: false });
  const [activeModule, setActiveModule] = useState(path.steps[0]?.id || '');

  useEffect(() => { setMemory(readMemory(path.id)); }, [path.id]);

  const completedCount = path.steps.filter((m) => memory.completed[m.id]).length;
  const percent = Math.round((completedCount / Math.max(path.steps.length, 1)) * 100);
  const active = path.steps.find((m) => m.id === activeModule) || path.steps[0];

  const markComplete = (moduleId: string) => {
    const next = { ...memory, completed: { ...memory.completed, [moduleId]: true } };
    setMemory(next); writeMemory(path.id, next);
  };
  const toggleUnlock = () => {
    const next = { ...memory, unlockAll: !memory.unlockAll };
    setMemory(next); writeMemory(path.id, next);
  };
  const openReward = () => {
    const next = { ...memory, rewardOpened: true };
    setMemory(next); writeMemory(path.id, next);
  };

  const unlocked = (index: number) => memory.unlockAll || index === 0 || Boolean(memory.completed[path.steps[index - 1]?.id]);

  return <div className="space-y-8">
    <section className="overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-sm">
      <div className="bg-medical-gradient p-8 text-white">
        <div className="text-xs font-black uppercase tracking-[0.28em] text-emerald-100">Interactive Study Path</div>
        <h1 className="mt-3 text-4xl font-black lg:text-5xl">{path.title}</h1>
        <p className="mt-4 max-w-4xl text-lg leading-8 text-emerald-50">{path.introEnglish}</p>
        <div className="arabic-support mt-4 max-w-4xl rounded-2xl bg-white/10 p-4 text-base leading-8 text-white">{path.introArabic}</div>
        <div className="mt-6 flex flex-wrap gap-3 text-sm font-black"><span className="rounded-full bg-white/15 px-4 py-2">{path.level}</span><span className="rounded-full bg-white/15 px-4 py-2">{path.time}</span><span className="rounded-full bg-white/15 px-4 py-2">Best for: {path.bestFor}</span></div>
      </div>
      <div className="grid gap-4 p-6 md:grid-cols-[1fr_220px]">
        <div>
          <div className="flex items-center justify-between gap-4"><div className="font-black text-slate-950">Path progress</div><div className="text-sm font-black text-emerald-700">{percent}% complete</div></div>
          <div className="mt-3 h-4 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-emerald-500 transition-all" style={{ width: `${percent}%` }} /></div>
        </div>
        <button onClick={toggleUnlock} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-black text-slate-700 transition hover:border-emerald-300 hover:text-emerald-700">{memory.unlockAll ? 'Recommended order ON' : 'Unlock all steps'}</button>
      </div>
    </section>

    <section className="grid gap-6 lg:grid-cols-[360px_1fr]">
      <aside className="space-y-3 lg:sticky lg:top-6 lg:self-start">
        {path.steps.map((module, index) => {
          const isUnlocked = unlocked(index);
          const isDone = Boolean(memory.completed[module.id]);
          const isActive = active?.id === module.id;
          return <button key={module.id} disabled={!isUnlocked} onClick={() => isUnlocked && setActiveModule(module.id)} className={`w-full rounded-3xl border p-4 text-left transition ${isActive ? 'border-emerald-400 bg-emerald-50 shadow-sm' : isUnlocked ? 'border-slate-200 bg-white hover:-translate-y-0.5 hover:border-emerald-300' : 'border-slate-200 bg-slate-100 opacity-70'}`}>
            <div className="flex items-start gap-3"><span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-black ${isDone ? 'bg-emerald-600 text-white' : isUnlocked ? 'bg-slate-950 text-white' : 'bg-slate-300 text-slate-600'}`}>{isDone ? <CheckCircle2 size={17} /> : isUnlocked ? index + 1 : <Lock size={15} />}</span><div><h3 className="font-black text-slate-950">{module.title}</h3><p className="mt-1 text-xs font-bold leading-5 text-slate-500">{module.subtitle}</p><div className="mt-2 text-[11px] font-black uppercase tracking-wider text-emerald-700">{module.estimatedTime} â€¢ {module.moduleType}</div></div></div>
          </button>;
        })}
      </aside>

      {active ? <article className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-start justify-between gap-4"><div><div className="text-xs font-black uppercase tracking-[0.22em] text-emerald-700">Mini Lesson</div><h2 className="mt-2 text-3xl font-black text-slate-950">{active.title}</h2><p className="mt-2 text-sm font-bold text-slate-500">{active.subtitle}</p></div><div className="flex gap-2"><SaveForLater id={`path-${path.id}-${active.id}`} title={`${path.title}: ${active.title}`} section="Study Path" href="/interns" /><Link href="/interns" className="inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-4 py-3 text-sm font-black text-white hover:bg-emerald-700">Open source section <ArrowRight size={16} /></Link></div></div>
        <div className="mt-5 grid gap-4 md:grid-cols-3"><div className="rounded-2xl bg-slate-50 p-4"><div className="text-xs font-bold text-slate-500">Goal</div><div className="mt-1 text-sm font-black text-slate-950">{path.completionReward.description}</div></div><div className="rounded-2xl bg-slate-50 p-4"><div className="text-xs font-bold text-slate-500">Visual needed</div><div className="mt-1 text-sm font-black text-slate-950">{(active.visuals?.join(', ') || 'Use topic-matched visuals where available.')}</div></div><div className="rounded-2xl bg-slate-50 p-4"><div className="text-xs font-bold text-slate-500">Common mistake</div><div className="mt-1 text-sm font-black text-slate-950">{active.commonMistake}</div></div></div>
        <div className="mt-6 rounded-3xl bg-slate-50 p-5 text-sm leading-8 text-slate-700"><b>English lesson:</b> {(Array.isArray(active.english) ? active.english.join(' ') : active.english)}</div>
        <div className="arabic-support mt-4 rounded-3xl bg-emerald-50 p-5 text-sm leading-8 text-slate-800">{active.arabic}</div>
        <div className="mt-6 grid gap-3 md:grid-cols-2">{active.keyPoints.map((point) => <div key={point} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-bold text-slate-700"><CheckCircle2 className="mb-2 text-emerald-600" size={18} />{point}</div>)}</div>
        <div className="mt-6"><SpecialModuleTool module={active} /></div>
        {active.moduleType !== 'micro-quiz' ? <div className="mt-6"><MicroQuiz module={active} /></div> : null}
        <div className="mt-6 flex flex-wrap gap-3"><button onClick={() => markComplete(active.id)} className="btn-shine relative overflow-hidden rounded-2xl bg-button-gradient px-5 py-3 text-sm font-black text-white shadow-glow"><CheckCircle2 className="mr-2 inline" size={17} /> Mark step complete</button><ProgressActions id={`study-path-${path.id}-${active.id}`} section="Study Paths" title={`${path.title}: ${active.title}`} /></div>
      </article> : null}
    </section>

    <section className={`rounded-[2rem] border p-6 shadow-sm ${percent === 100 ? 'border-emerald-300 bg-emerald-50' : 'border-slate-200 bg-white'}`}>
      <div className="flex flex-wrap items-center justify-between gap-4"><div><div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-emerald-700"><Award size={16} /> Completion Reward</div><h2 className="mt-2 text-2xl font-black text-slate-950">{path.completionReward.title}</h2><p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">{path.completionReward.description}</p></div>{percent === 100 ? <div className="flex flex-wrap gap-2"><button onClick={openReward} className="rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-black text-white shadow-glow"><Trophy className="mr-2 inline" size={17} /> Unlock reward</button><Link href="/interns" className="rounded-2xl bg-amber-500 px-5 py-3 text-sm font-black text-slate-950 shadow-glow"><Award className="mr-2 inline" size={17} /> Generate Certificate</Link></div> : <div className="rounded-2xl bg-slate-100 px-5 py-3 text-sm font-black text-slate-500">Complete all steps to unlock</div>}</div>
      {memory.rewardOpened ? <div className="arabic-support mt-4 rounded-2xl bg-white p-4 text-sm leading-7 text-slate-800">ØªÙ… ÙØªØ­ Ø§Ù„Ù…ÙƒØ§ÙØ£Ø©. ÙÙŠ Ø§Ù„Ù†Ø³Ø®Ø© Ø§Ù„Ù†Ù‡Ø§Ø¦ÙŠØ© Ø³ÙŠØªÙ… ØªÙˆÙ„ÙŠØ¯/Ø¥Ø±ÙØ§Ù‚ PDF Ø®Ø§Øµ Ø¨Ù‡Ø°Ø§ Ø§Ù„Ù…Ø³Ø§Ø± ÙƒÙ…ÙƒØ§ÙØ£Ø© Ø¥ÙƒÙ…Ø§Ù„.</div> : null}
    </section>
  </div>;
}
