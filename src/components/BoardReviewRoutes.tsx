'use client';

import { useMemo, useState } from 'react';
import { BookOpen, ClipboardCheck, GraduationCap, ShieldAlert } from 'lucide-react';
import { boardReviewRoutes, BoardRouteId } from '@/data/boardReviewRoutes';
import { MCQEngine } from './MCQEngine';
import { ArabicSupport } from './ArabicSupport';

const routeIcons: Record<BoardRouteId, any> = { part1: BookOpen, part2: ClipboardCheck, internship: GraduationCap };

export function BoardReviewRoutes() {
  const [active, setActive] = useState<BoardRouteId>('part1');
  const [limit, setLimit] = useState(20);
  const route = boardReviewRoutes.find((r) => r.id === active) || boardReviewRoutes[0];
  const questions = useMemo(() => route.questions.slice(0, limit).map((q) => ({
    id: q.id,
    topic: q.topic,
    question: q.question,
    answer: q.answer,
    options: q.options,
    explanation: q.explanation,
    arabic: q.arabic,
    difficulty: q.difficulty,
    level: q.difficulty,
    whyWrong: q.whyWrong,
  })), [route, limit]);

  return <section className="space-y-6">
    <div className="grid gap-4 lg:grid-cols-3">
      {boardReviewRoutes.map((item) => { const Icon = routeIcons[item.id]; const selected = active === item.id; return <button key={item.id} onClick={() => setActive(item.id)} className={`rounded-[2rem] border p-5 text-left shadow-sm transition hover:-translate-y-1 ${selected ? 'border-emerald-400 bg-emerald-50' : 'border-slate-200 bg-white'}`}>
        <Icon className={selected ? 'text-emerald-700' : 'text-slate-500'} />
        <div className="mt-3 text-xs font-black uppercase tracking-wider text-emerald-700">100 MCQs bank</div>
        <h3 className="mt-2 text-xl font-black text-slate-950">{item.title}</h3>
        <p className="arabic-support mt-2 text-sm font-bold text-slate-700">{item.arabicTitle}</p>
      </button>; })}
    </div>

    <article className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
      <div className="bg-medical-gradient p-6 text-white">
        <div className="text-xs font-black uppercase tracking-[0.22em] text-emerald-200">Dedicated exam route</div>
        <h2 className="mt-2 text-3xl font-black">{route.title}</h2>
        <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-100">{route.introEn}</p>
        <div className="arabic-support mt-4 rounded-2xl bg-white/10 p-4 text-sm leading-7 text-white">{route.introAr}</div>
      </div>
      <div className="grid gap-5 p-6 lg:grid-cols-3">
        <div>
          <h3 className="text-lg font-black text-slate-950">Who is it for?</h3>
          <p className="mt-2 text-sm leading-7 text-slate-600">{route.learner}</p>
        </div>
        <div>
          <h3 className="text-lg font-black text-slate-950">What it focuses on</h3>
          <ul className="mt-2 space-y-2 text-sm text-slate-700">{route.focus.map((x) => <li key={x}>• {x}</li>)}</ul>
        </div>
        <div>
          <h3 className="text-lg font-black text-slate-950">Suggested sources</h3>
          <ul className="mt-2 space-y-2 text-sm text-slate-700">{route.sources.map((x) => <li key={x}>• {x}</li>)}</ul>
        </div>
      </div>
      <div className="border-t border-slate-100 p-6">
        <h3 className="text-lg font-black text-slate-950">Question style</h3>
        <div className="mt-3 flex flex-wrap gap-2">{route.examStyle.map((x) => <span key={x} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-700">{x}</span>)}</div>
        <div className="mt-4 flex items-start gap-3 rounded-2xl bg-amber-50 p-4 text-sm leading-7 text-amber-950"><ShieldAlert className="mt-1 shrink-0" size={18} /><span>Exam format and official instructions may change by session or committee. Always verify the current Jordan Medical Council or hospital training announcement before relying on timing, pass rules, or question count.</span></div>
        <ArabicSupport>هذا القسم يحاكي أسلوب التفكير، لكن التفاصيل الرسمية مثل عدد الأسئلة والوقت يجب مراجعتها من الإعلان الرسمي الحالي.</ArabicSupport>
      </div>
    </article>

    <div className="flex flex-wrap items-center justify-between gap-3 rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm">
      <div><div className="text-sm font-black text-slate-950">Practice set</div><p className="text-xs text-slate-500">The bank contains {route.questions.length} MCQs for this route. Choose how many to practice now.</p></div>
      <select value={limit} onChange={(e) => setLimit(Number(e.target.value))} className="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-bold">
        {[10,20,40,60,100].map((n) => <option key={n} value={n}>{n} questions</option>)}
      </select>
    </div>

    <MCQEngine questions={questions} mode="learning" attemptType={`Board Review — ${route.title}`} />
  </section>;
}
