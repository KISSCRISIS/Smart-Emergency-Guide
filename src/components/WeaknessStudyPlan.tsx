'use client';

import { ArrowRight, Brain, Target, AlertTriangle } from 'lucide-react';
import { Button } from './Button';

type WeakTopic = { topic: string; accuracy: number; total?: number };

const routeRules: Array<{ keywords: string[]; href: string; label: string; reason: string }> = [
  { keywords: ['drug', 'dose', 'medication', 'vasopressor', 'rsi'], href: '/drug-handbook', label: 'Drug Handbook', reason: 'dose, route, contraindication, and monitoring practice' },
  { keywords: ['airway', 'intubation', 'ventilator', 'oxygen'], href: '/intubation-ventilator', label: 'Intubation & Ventilator', reason: 'airway-first ER reasoning and post-intubation setup' },
];

function pickPath(weak: WeakTopic[]) {
  const weakText = weak.map((x) => x.topic).join(' ').toLowerCase();
  const chosen = routeRules.filter((rule) => rule.keywords.some((k) => weakText.includes(k))).slice(0, 4);
  const defaults = [
    { href: '/exam-yourself', label: 'Exam Yourself', reason: 'turn weaknesses into repeated MCQ practice' },
    { href: '/flashcards', label: 'Flashcards Review Center', reason: 'space-review facts you missed' },
  ];
  return [...chosen, ...defaults].filter((item, index, arr) => arr.findIndex((x) => x.href === item.href) === index).slice(0, 5);
}

export function WeaknessStudyPlan({ weak = [], strong = [] }: { weak?: WeakTopic[]; strong?: WeakTopic[] }) {
  const path = pickPath(weak);
  return (
    <section className="rounded-[2rem] border border-amber-200 bg-gradient-to-br from-amber-50 via-white to-emerald-50 p-6 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-xs font-black uppercase tracking-wider text-amber-900"><Target size={15} /> Weakness-Based Study Plan</div>
          <h2 className="mt-3 text-2xl font-black text-slate-950">Study what your mistakes are pointing to.</h2>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">This plan uses your MCQ attempts and marked progress to suggest the next safest study sequence instead of random revision.</p>
          <div className="arabic-support mt-3 rounded-2xl bg-white/80 p-3 text-sm leading-7 text-slate-800">ابدأ بالأقسام التي ظهرت فيها أخطاؤك أكثر. الهدف ليس كثرة الدراسة، بل دراسة المكان الذي يسبب لك قرارات خاطئة في الطوارئ.</div>
        </div>
        <Brain className="h-12 w-12 text-emerald-600" />
      </div>
      {weak.length ? <div className="mt-5 rounded-2xl border border-rose-100 bg-white p-4">
        <div className="flex items-center gap-2 text-sm font-black text-rose-800"><AlertTriangle size={17} /> Highest priority weak areas</div>
        <div className="mt-3 flex flex-wrap gap-2">{weak.slice(0, 6).map((x) => <span key={x.topic} className="rounded-full bg-rose-50 px-3 py-1 text-xs font-bold text-rose-800">{x.topic} • {x.accuracy}%</span>)}</div>
      </div> : <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-600">No weak-area data yet. Complete one MCQ assessment to unlock a personalized plan.</div>}
      <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {path.map((step, i) => <div key={step.href} className="rounded-2xl border border-slate-200 bg-white p-4">
          <div className="text-xs font-black uppercase tracking-wider text-emerald-700">Step {i + 1}</div>
          <h3 className="mt-1 text-lg font-black text-slate-950">{step.label}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">Focus: {step.reason}.</p>
          <div className="mt-4"><Button href={step.href} variant="secondary">Open <ArrowRight size={15} /></Button></div>
        </div>)}
      </div>
      {strong.length ? <p className="mt-4 text-xs font-semibold text-slate-500">Strong areas detected: {strong.slice(0, 4).map((x) => x.topic).join(', ')}. Keep them in spaced review.</p> : null}
    </section>
  );
}
