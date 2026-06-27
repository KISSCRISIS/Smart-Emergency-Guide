'use client';

import { useMemo, useState } from 'react';
import { Filter, ListChecks, Shuffle } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { ArabicSupport } from '@/components/ArabicSupport';
import { MCQEngine } from '@/components/MCQEngine';
import { SaveForLater } from '@/components/SaveForLater';
import { getOrganizedQuestionBank } from '@/lib/database';

const all = 'All';

export default function MCQBankPage() {
  const bank = useMemo(() => getOrganizedQuestionBank().slice(0, 600), []);
  const [route, setRoute] = useState(all);
  const [category, setCategory] = useState(all);
  const [type, setType] = useState(all);
  const [difficulty, setDifficulty] = useState(all);
  const [query, setQuery] = useState('');
  const [practice, setPractice] = useState(false);

  const routes = [all, ...Array.from(new Set(bank.map((q) => q.examRoute)))];
  const categories = [all, ...Array.from(new Set(bank.map((q) => q.category)))];
  const types = [all, ...Array.from(new Set(bank.map((q) => q.questionType)))];
  const difficulties = [all, ...Array.from(new Set(bank.map((q) => q.difficulty || 'High-yield')))];

  const filtered = bank.filter((q) => {
    const hay = `${q.topic} ${q.question} ${q.answer}`.toLowerCase();
    return (route === all || q.examRoute === route) && (category === all || q.category === category) && (type === all || q.questionType === type) && (difficulty === all || (q.difficulty || 'High-yield') === difficulty) && (!query || hay.includes(query.toLowerCase()));
  });

  const practiceQuestions = filtered.slice(0, 12);

  return <div>
    <PageHeader title="MCQ Bank Organization" subtitle="Organize every question by exam route, topic, difficulty, question type, system, usage status, and review needs." arabic="هذا القسم يمنع عشوائية الأسئلة؛ كل سؤال له مسار وموضوع ونوع ومستوى حتى تعرف لماذا تحله." />

    <div className="grid gap-4 md:grid-cols-4">
      <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"><div className="text-sm font-bold text-slate-500">Question Pool</div><div className="mt-2 text-3xl font-black text-slate-950">{bank.length}</div></div>
      <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"><div className="text-sm font-bold text-slate-500">Filtered</div><div className="mt-2 text-3xl font-black text-emerald-700">{filtered.length}</div></div>
      <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"><div className="text-sm font-bold text-slate-500">Routes</div><div className="mt-2 text-3xl font-black text-slate-950">{routes.length - 1}</div></div>
      <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"><div className="text-sm font-bold text-slate-500">Question Types</div><div className="mt-2 text-3xl font-black text-slate-950">{types.length - 1}</div></div>
    </div>

    <section className="mt-6 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-2 text-sm font-black uppercase tracking-wider text-emerald-700"><Filter size={17} /> Filters</div>
      <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
        <select value={route} onChange={(e) => setRoute(e.target.value)} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold"><option>{all}</option>{routes.filter((x) => x !== all).map((x) => <option key={x}>{x}</option>)}</select>
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold"><option>{all}</option>{categories.filter((x) => x !== all).map((x) => <option key={x}>{x}</option>)}</select>
        <select value={type} onChange={(e) => setType(e.target.value)} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold"><option>{all}</option>{types.filter((x) => x !== all).map((x) => <option key={x}>{x}</option>)}</select>
        <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold"><option>{all}</option>{difficulties.filter((x) => x !== all).map((x) => <option key={x}>{x}</option>)}</select>
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search bank..." className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold outline-none focus:border-emerald-300" />
      </div>
      <div className="mt-4"><button onClick={() => setPractice((v) => !v)} className="inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-5 py-3 text-sm font-black text-white"><Shuffle size={17} /> {practice ? 'Hide Practice Mode' : 'Practice Filtered Set'}</button></div>
    </section>

    {practice ? <div className="mt-6"><MCQEngine questions={practiceQuestions} mode="learning" attemptType="Organized MCQ Bank" onRestart={() => setPractice(false)} /></div> : null}

    <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-2"><ListChecks className="text-emerald-600" /><h2 className="text-2xl font-black text-slate-950">Organized Question List</h2></div>
      <ArabicSupport>رتّب الأسئلة حسب نوعها ومسارها. لا تدرس الأسئلة ككتلة واحدة؛ السؤال له نمط وطريقة تفكير.</ArabicSupport>
      <div className="mt-5 space-y-3">
        {filtered.slice(0, 60).map((q) => <article key={q.id} className="rounded-2xl border border-slate-200 p-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-2 text-xs font-black"><span className="rounded-full bg-emerald-50 px-3 py-1 text-emerald-700">{q.examRoute}</span><span className="rounded-full bg-cyan-50 px-3 py-1 text-cyan-700">{q.category}</span><span className="rounded-full bg-slate-100 px-3 py-1 text-slate-600">{q.questionType}</span><span className="rounded-full bg-amber-50 px-3 py-1 text-amber-700">{q.difficulty || 'High-yield'}</span></div>
            <SaveForLater id={`mcq-${q.id}`} title={q.question} section="MCQ Bank" href="/mcq-bank" note={q.topic} tags={[q.examRoute, q.category, q.questionType]} />
          </div>
          <h3 className="mt-3 font-black leading-7 text-slate-950">{q.question}</h3>
          <p className="mt-2 text-sm font-semibold text-slate-500">Topic: {q.topic}</p>
        </article>)}
      </div>
    </section>
  </div>;
}
