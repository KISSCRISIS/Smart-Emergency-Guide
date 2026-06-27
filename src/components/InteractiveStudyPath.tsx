'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { CheckCircle2, ChevronRight, Download, Eye, HeartPulse, Lock, Medal, RotateCcw, Sparkles, Trophy } from 'lucide-react';
import type { StudyPath, StudyPathStep } from '@/data/studyPaths';
import { ProgressActions } from './ProgressActions';

function progressKey(pathId: string) { return `seg-study-path:${pathId}`; }

type StoredPathProgress = { completedSteps: string[]; quizScores: Record<string, number>; rewardUnlocked?: boolean };

function readProgress(pathId: string): StoredPathProgress {
  if (typeof window === 'undefined') return { completedSteps: [], quizScores: {} };
  try {
    const raw = localStorage.getItem(progressKey(pathId));
    if (!raw) return { completedSteps: [], quizScores: {} };
    const parsed = JSON.parse(raw);
    return { completedSteps: Array.isArray(parsed.completedSteps) ? parsed.completedSteps : [], quizScores: parsed.quizScores || {}, rewardUnlocked: Boolean(parsed.rewardUnlocked) };
  } catch {
    return { completedSteps: [], quizScores: {} };
  }
}

function writeProgress(pathId: string, value: StoredPathProgress) {
  localStorage.setItem(progressKey(pathId), JSON.stringify(value));
  window.dispatchEvent(new CustomEvent('seg-path-progress', { detail: { pathId, value } }));
}

function toneClass(tone: StudyPath['tone']) {
  if (tone === 'blue') return 'from-blue-600 to-cyan-500';
  if (tone === 'rose') return 'from-rose-600 to-orange-500';
  if (tone === 'teal') return 'from-teal-600 to-emerald-500';
  if (tone === 'slate') return 'from-slate-800 to-slate-600';
  return 'from-emerald-600 to-teal-500';
}

function ABCDESimulator() {
  const [choice, setChoice] = useState<string | null>(null);
  const options = [
    { id: 'airway', label: 'Assess airway + protect C-spine', correct: true },
    { id: 'bleeding', label: 'Control thigh bleeding first', correct: false },
    { id: 'ct', label: 'Send patient to CT immediately', correct: false },
    { id: 'ecg', label: 'Do ECG before airway assessment', correct: false }
  ];
  const selected = options.find((o) => o.id === choice);
  return <div className="rounded-[2rem] border border-emerald-200 bg-emerald-50 p-5">
    <div className="text-xs font-black uppercase tracking-[0.22em] text-emerald-700">Mini-simulator</div>
    <h3 className="mt-2 text-xl font-black text-slate-950">Trauma ABCDE priority</h3>
    <p className="mt-2 text-sm leading-7 text-slate-700">A trauma patient is shouting, has a large thigh bleed, and noisy breathing after a road traffic crash. What should you do first?</p>
    <div className="mt-4 grid gap-3 md:grid-cols-2">
      {options.map((option) => <button key={option.id} onClick={() => setChoice(option.id)} className={`rounded-2xl border p-4 text-left text-sm font-black transition hover:-translate-y-0.5 ${choice === option.id ? 'border-emerald-500 bg-white shadow-glow' : 'border-slate-200 bg-white'}`}>{option.label}</button>)}
    </div>
    {selected ? <div className={`mt-4 rounded-2xl p-4 text-sm leading-7 ${selected.correct ? 'bg-emerald-600 text-white' : 'bg-amber-100 text-amber-950'}`}>
      {selected.correct ? 'Correct. Airway comes first when it is threatened, and trauma airway assessment must include cervical spine protection.' : 'Not first. تذكر دائمًا ترتيب ABCDE: إذا كان الـ Airway مهددًا، لا تنشغل بالنزيف أو الصور قبل تأمين المجرى الهوائي.'}
    </div> : null}
  </div>;
}

function ECGCaliper() {
  const [highlight, setHighlight] = useState<'st' | 'twave' | 'qrs'>('st');
  const labels = {
    st: { title: 'ST elevation zone', ar: 'هنا تنظر للـ ST segment: هل مرتفع في leads متجاورة؟ هذا قد يعني occlusion MI.' },
    twave: { title: 'Peaked T wave zone', ar: 'T wave العالية والحادة تجعلنا نفكر بفرط البوتاسيوم، خاصة مع renal failure أو ضعف عام.' },
    qrs: { title: 'QRS width zone', ar: 'اتساع QRS في مريض متعب علامة خطيرة، خصوصًا مع hyperkalemia أو ventricular rhythm.' }
  };
  return <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm">
    <div className="flex flex-wrap items-center justify-between gap-3">
      <div><div className="text-xs font-black uppercase tracking-[0.22em] text-rose-700">Interactive ECG Caliper</div><h3 className="mt-2 text-xl font-black text-slate-950">Click a clue to highlight it</h3></div>
      <div className="flex flex-wrap gap-2">{(['st','twave','qrs'] as const).map((h)=><button key={h} onClick={()=>setHighlight(h)} className={`rounded-xl px-3 py-2 text-xs font-black ${highlight===h?'bg-slate-950 text-white':'bg-slate-100 text-slate-700'}`}>{labels[h].title}</button>)}</div>
    </div>
    <div className="relative mt-5 h-56 overflow-hidden rounded-2xl bg-[linear-gradient(0deg,rgba(16,185,129,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,.12)_1px,transparent_1px)] bg-[length:22px_22px] p-5">
      <svg viewBox="0 0 700 180" className="h-full w-full">
        <polyline points="0,90 40,90 55,72 70,112 85,90 150,90 165,25 180,90 220,90 238,58 256,122 274,90 340,90 355,70 370,112 385,90 450,90 466,35 482,90 530,90 548,55 566,125 584,90 660,90 700,90" fill="none" stroke="#0f172a" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
        {highlight === 'st' ? <rect x="170" y="82" width="56" height="22" rx="8" fill="rgba(239,68,68,.35)" stroke="#ef4444" strokeWidth="3"/> : null}
        {highlight === 'twave' ? <rect x="145" y="18" width="48" height="84" rx="12" fill="rgba(245,158,11,.35)" stroke="#f59e0b" strokeWidth="3"/> : null}
        {highlight === 'qrs' ? <rect x="230" y="48" width="56" height="88" rx="12" fill="rgba(59,130,246,.28)" stroke="#3b82f6" strokeWidth="3"/> : null}
      </svg>
    </div>
    <div className="arabic-support mt-4 rounded-2xl bg-slate-50 p-4 text-sm leading-7">{labels[highlight].ar}</div>
  </div>;
}

function MicroQuiz({ step, pathId, onScore }: { step: StudyPathStep; pathId: string; onScore: (score: number) => void }) {
  const quiz = step.quiz || [];
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const score = quiz.reduce((acc, q, idx) => acc + (answers[idx] === q.answer ? 1 : 0), 0);
  return <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm">
    <div className="text-xs font-black uppercase tracking-[0.22em] text-emerald-700">Micro-quiz</div>
    <h3 className="mt-2 text-xl font-black text-slate-950">Short confidence quiz</h3>
    <div className="mt-4 space-y-4">
      {quiz.map((q, idx) => <div key={q.question} className="rounded-2xl bg-slate-50 p-4">
        <div className="font-black text-slate-950">{idx+1}. {q.question}</div>
        <div className="mt-3 grid gap-2 md:grid-cols-2">
          {q.options.map((option) => <button key={option} disabled={submitted} onClick={() => setAnswers((prev)=>({ ...prev, [idx]: option }))} className={`rounded-xl border px-3 py-2 text-left text-sm font-bold ${answers[idx]===option?'border-emerald-500 bg-emerald-50':'border-slate-200 bg-white'}`}>{option}</button>)}
        </div>
        {submitted ? <div className={`mt-3 rounded-xl p-3 text-sm leading-7 ${answers[idx]===q.answer?'bg-emerald-100 text-emerald-950':'bg-amber-100 text-amber-950'}`}><b>Answer:</b> {q.answer}. {q.explanation}<div dir="rtl" className="mt-1">{q.arabic}</div></div> : null}
      </div>)}
    </div>
    <button onClick={() => { setSubmitted(true); onScore(score); }} className="mt-4 rounded-2xl bg-slate-950 px-5 py-3 text-sm font-black text-white">Submit micro-quiz</button>
    {submitted ? <div className="mt-4 rounded-2xl bg-emerald-50 p-4 font-black text-emerald-900">Score: {score}/{quiz.length} - {score === quiz.length ? 'Badge earned: Golden Basics' : 'Repeat the weak concept once, then try again.'}</div> : null}
  </div>;
}

function ModuleWidget({ step, pathId, onScore }: { step: StudyPathStep; pathId: string; onScore: (score: number) => void }) {
  if (step.moduleType === 'simulator') return <ABCDESimulator />;
  if (step.moduleType === 'ecg-caliper') return <ECGCaliper />;
  if (step.moduleType === 'micro-quiz' && step.quiz?.length) return <MicroQuiz step={step} pathId={pathId} onScore={onScore} />;
  return <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm">
    <div className="text-xs font-black uppercase tracking-[0.22em] text-teal-700">Mini lesson</div>
    <h3 className="mt-2 text-xl font-black text-slate-950">{step.objective}</h3>
    <div className="mt-4 grid gap-3 md:grid-cols-2">
      {step.english.map((item) => <div key={item} className="rounded-2xl bg-slate-50 p-4 text-sm font-bold leading-7 text-slate-700">{item}</div>)}
    </div>
    <div className="arabic-support mt-4 rounded-2xl bg-emerald-50 p-4 text-sm leading-7">{step.arabic}</div>
  </div>;
}

export function InteractiveStudyPath({ path }: { path: StudyPath }) {
  const [activeStepId, setActiveStepId] = useState(path.steps[0]?.id || '');
  const [progress, setProgress] = useState<StoredPathProgress>({ completedSteps: [], quizScores: {} });
  const activeStep = path.steps.find((step) => step.id === activeStepId) || path.steps[0];
  const completedCount = progress.completedSteps.length;
  const percent = Math.round((completedCount / path.steps.length) * 100);
  const complete = percent >= 100;
  const nextStep = path.steps.find((step) => !progress.completedSteps.includes(step.id));

  useEffect(() => setProgress(readProgress(path.id)), [path.id]);

  const markComplete = (stepId: string) => {
    setProgress((prev) => {
      const completedSteps = prev.completedSteps.includes(stepId) ? prev.completedSteps : [...prev.completedSteps, stepId];
      const next = { ...prev, completedSteps, rewardUnlocked: completedSteps.length >= path.steps.length };
      writeProgress(path.id, next);
      return next;
    });
  };

  const reset = () => {
    const blank = { completedSteps: [], quizScores: {} };
    setProgress(blank);
    if (typeof window !== 'undefined') localStorage.removeItem(progressKey(path.id));
  };

  const setQuizScore = (stepId: string, score: number) => {
    setProgress((prev) => {
      const next = { ...prev, quizScores: { ...prev.quizScores, [stepId]: score } };
      writeProgress(path.id, next);
      return next;
    });
  };

  return <section className="space-y-6">
    <div className={`overflow-hidden rounded-[2.5rem] bg-gradient-to-br ${toneClass(path.tone)} p-1 shadow-glow`}>
      <div className="rounded-[2.35rem] bg-slate-950/90 p-6 text-white sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="max-w-3xl">
            <div className="text-xs font-black uppercase tracking-[0.28em] text-emerald-200">Interactive Study Path</div>
            <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">{path.title}</h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-200">{path.introEnglish}</p>
            <div dir="rtl" className="mt-4 rounded-2xl bg-white/10 p-4 text-right text-sm leading-8 text-emerald-50">{path.introArabic}</div>
          </div>
          <div className="rounded-[2rem] bg-white/10 p-5 text-center">
            <div className="text-sm font-bold text-slate-200">Progress</div>
            <div className="mt-2 text-5xl font-black">{percent}%</div>
            <div className="mt-1 text-xs font-black uppercase tracking-wider text-emerald-200">{completedCount}/{path.steps.length} steps</div>
          </div>
        </div>
        <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-emerald-300 transition-all" style={{ width: `${percent}%` }} /></div>
      </div>
    </div>

    <div className="grid gap-6 lg:grid-cols-[360px_1fr]">
      <aside className="space-y-3 rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between gap-3 px-2"><h2 className="font-black text-slate-950">Path steps</h2><button onClick={reset} className="inline-flex items-center gap-1 rounded-xl bg-slate-100 px-2 py-1 text-xs font-black text-slate-600"><RotateCcw size={13}/> Reset</button></div>
        {path.steps.map((step, index) => {
          const done = progress.completedSteps.includes(step.id);
          const locked = index > 0 && !progress.completedSteps.includes(path.steps[index - 1].id);
          return <button key={step.id} onClick={() => setActiveStepId(step.id)} className={`w-full rounded-2xl border p-3 text-left transition hover:-translate-y-0.5 ${activeStepId===step.id?'border-emerald-400 bg-emerald-50 shadow-sm':'border-slate-200 bg-white'} ${locked ? 'opacity-70' : ''}`}>
            <div className="flex items-center gap-3"><span className={`flex h-8 w-8 flex-none items-center justify-center rounded-full text-xs font-black ${done?'bg-emerald-500 text-white': locked?'bg-slate-200 text-slate-500':'bg-slate-950 text-white'}`}>{done?<CheckCircle2 size={17}/>:locked?<Lock size={15}/>:index+1}</span><div><div className="text-sm font-black text-slate-950">{step.title}</div><div className="text-xs font-bold text-slate-500">{step.estimatedTime} • {step.moduleType}</div></div></div>
          </button>;
        })}
      </aside>

      <main className="space-y-5">
        <article className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div><div className="text-xs font-black uppercase tracking-[0.22em] text-emerald-700">Step module</div><h2 className="mt-2 text-3xl font-black text-slate-950">{activeStep.title}</h2><p className="mt-2 text-sm font-bold text-slate-500">{activeStep.subtitle}</p></div>
            {activeStep.linkedHref ? <Link href={activeStep.linkedHref} className="inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-4 py-3 text-sm font-black text-white">Open related section <ChevronRight size={16}/></Link> : null}
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-4"><div className="text-xs font-black uppercase tracking-wider text-slate-500">Objective</div><p className="mt-2 text-sm font-bold leading-7 text-slate-700">{activeStep.objective}</p></div>
            <div className="rounded-2xl bg-amber-50 p-4"><div className="text-xs font-black uppercase tracking-wider text-amber-700">Common mistake</div><p className="mt-2 text-sm font-bold leading-7 text-amber-950">{activeStep.commonMistake}</p></div>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">{activeStep.keyPoints.map((point)=><span key={point} className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-800">{point}</span>)}</div>
        </article>

        <ModuleWidget step={activeStep} pathId={path.id} onScore={(score)=>setQuizScore(activeStep.id, score)} />

        <div className="flex flex-wrap items-center gap-3 rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm">
          <button onClick={() => markComplete(activeStep.id)} className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-black text-white"><CheckCircle2 size={18}/> Mark step complete</button>
          <ProgressActions id={`path-${path.id}-${activeStep.id}`} section="Study Path" title={`${path.title}: ${activeStep.title}`} />
        </div>
      </main>
    </div>

    <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div><div className="text-xs font-black uppercase tracking-[0.22em] text-emerald-700">Completion reward</div><h2 className="mt-2 text-2xl font-black text-slate-950">{path.completionReward.title}</h2><p className="mt-2 text-sm font-bold text-slate-600">{path.completionReward.description}</p></div>
        {complete || !path.completionReward.lockedUntilComplete ? <Link href={path.completionReward.href} className="inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-5 py-3 text-sm font-black text-white"><Download size={17}/> Open reward</Link> : <div className="rounded-2xl bg-slate-100 px-5 py-3 text-sm font-black text-slate-500"><Lock size={16} className="mr-2 inline"/> Complete all steps to unlock</div>}
      </div>
      {complete ? <div className="mt-5 rounded-2xl bg-emerald-50 p-4 text-sm font-black text-emerald-900"><Trophy size={18} className="mr-2 inline"/> Path completed. Next suggested step: {path.id === 'beginner-emergency-medicine' ? 'Internship / JMC Exam Path' : 'review weak topics on the Progress page'}.</div> : nextStep ? <div className="mt-5 rounded-2xl bg-blue-50 p-4 text-sm font-black text-blue-900"><Sparkles size={18} className="mr-2 inline"/> Continue next: {nextStep.title}</div> : null}
    </div>
  </section>;
}
