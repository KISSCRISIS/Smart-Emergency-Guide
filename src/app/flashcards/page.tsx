'use client';

import { useMemo, useState } from 'react';
import { RotateCcw, Search, Layers3, BarChart3, ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionFeatureHero } from '@/components/SectionFeatureHero';
import { getAllQuestionItems } from '@/lib/database';
import { useProgress } from '@/hooks/useProgress';
import { Button } from '@/components/Button';
import { ArabicSupport } from '@/components/ArabicSupport';

const ratings = [
  { state: 'Wrong', label: 'Again', ar: 'أعدها لاحقًا / لم أفهمها', note: 'Repeat soon' },
  { state: 'Learning', label: 'Learning', ar: 'قيد الدراسة / لم أتقنه بعد', note: 'Still building' },
  { state: 'Learning', label: 'Good', ar: 'فهمتها جزئيًا', note: 'Review later' },
  { state: 'Mastered', label: 'Mastered', ar: 'تم الإتقان / أتقنه جيدًا', note: 'Strong recall' },
] as const;

export default function FlashcardsPage() {
  const cards = useMemo(() => getAllQuestionItems(), []);
  const topics = useMemo(() => Array.from(new Set(cards.map((c) => c.topic))).sort().slice(0, 120), [cards]);
  const difficulties = useMemo(() => ['All', ...Array.from(new Set(cards.map((c) => c.difficulty || 'High-yield'))).slice(0, 12)], [cards]);
  const [topic, setTopic] = useState('All');
  const [difficulty, setDifficulty] = useState('All');
  const [query, setQuery] = useState('');
  const [idx, setIdx] = useState(0);
  const [show, setShow] = useState(false);
  const { setItemState, stats } = useProgress();

  const filtered = useMemo(() => cards
    .filter((c) => topic === 'All' || c.topic === topic)
    .filter((c) => difficulty === 'All' || (c.difficulty || 'High-yield') === difficulty)
    .filter((c) => !query.trim() || [c.question, c.answer, c.topic, c.explanation].join(' ').toLowerCase().includes(query.toLowerCase())), [cards, topic, difficulty, query]);

  const safeIndex = filtered.length ? Math.min(idx, filtered.length - 1) : 0;
  const card = filtered[safeIndex];
  const progressPercent = filtered.length ? Math.round(((safeIndex + 1) / filtered.length) * 100) : 0;
  const resetPosition = () => { setIdx(0); setShow(false); };
  const rate = (state: any) => {
    if (!card) return;
    setItemState(card.id, state, 'Flashcards', card.topic);
    setShow(false);
    setIdx((i) => filtered.length ? (i + 1) % filtered.length : 0);
  };

  return <>
    <SectionFeatureHero
      title="Flashcards Review Center"
      subtitle="A real review system with decks, topic filters, difficulty filters, answer reveal, self-rating, and saved progress."
      arabic="راجع بذكاء: اختر الدك، أظهر الجواب، ثم قيّم نفسك: Again / Learning / Good / Mastered."
      tone="emerald"
    />

    <section className="grid gap-5 lg:grid-cols-[340px_1fr]">
      <aside className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-emerald-700"><Layers3 size={16} /> Deck control</div>
        <h2 className="mt-1 text-2xl font-black text-slate-950">Review Settings</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">Choose the deck, filter by difficulty, then work through cards using spaced-review style ratings.</p>

        <div className="mt-4 grid grid-cols-2 gap-3 text-center"><Stat k="Reviewed" v={stats.total}/><Stat k="Mastered" v={stats.mastered}/><Stat k="Learning" v={stats.learning}/><Stat k="Again" v={stats.wrong}/></div>

        <label className="mt-5 block text-sm font-black text-slate-700">Deck / Topic</label>
        <select value={topic} onChange={(e) => { setTopic(e.target.value); resetPosition(); }} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold"><option>All</option>{topics.map((t) => <option key={t}>{t}</option>)}</select>

        <label className="mt-4 block text-sm font-black text-slate-700">Difficulty / Yield</label>
        <select value={difficulty} onChange={(e) => { setDifficulty(e.target.value); resetPosition(); }} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold">{difficulties.map((d) => <option key={d}>{d}</option>)}</select>

        <label className="relative mt-4 block">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={17} />
          <input value={query} onChange={(e) => { setQuery(e.target.value); resetPosition(); }} placeholder="Search inside cards..." className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm font-semibold outline-none focus:border-emerald-300" />
        </label>

        <div className="mt-5 rounded-2xl bg-emerald-50 p-4">
          <div className="flex items-center gap-2 text-sm font-black text-emerald-900"><BarChart3 size={18} /> Current deck progress</div>
          <div className="mt-3 h-3 overflow-hidden rounded-full bg-white"><div className="h-full rounded-full bg-emerald-500" style={{ width: `${progressPercent}%` }} /></div>
          <div className="mt-2 text-xs font-bold text-emerald-800">Card {filtered.length ? safeIndex + 1 : 0} of {filtered.length}</div>
        </div>
      </aside>

      <main className="rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-glass">
        {!card ? <div className="rounded-2xl bg-amber-50 p-5 font-bold text-amber-900">No cards match these filters.</div> : <>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="text-sm font-black uppercase tracking-wider text-emerald-700">Card {safeIndex + 1} / {filtered.length}</div>
            <div className="flex flex-wrap gap-2"><span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">{card.topic}</span><span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">{card.difficulty || 'High-yield'}</span></div>
          </div>

          <div className={`mt-6 min-h-[280px] rounded-[2rem] border p-6 transition ${show ? 'border-emerald-200 bg-emerald-50' : 'border-slate-200 bg-slate-50'}`}>
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500"><RotateCcw size={15} /> {show ? 'Back of card' : 'Front of card'}</div>
            <h3 className="mt-4 text-3xl font-black leading-tight text-slate-950">{card.question}</h3>
            {show ? <div className="mt-6">
              <div className="text-xs font-black uppercase text-emerald-700">Answer</div>
              <p className="mt-2 text-2xl font-black text-slate-950">{card.answer}</p>
              <p className="mt-3 text-sm leading-7 text-slate-700">{card.explanation}</p>
              <ArabicSupport>{card.arabic}</ArabicSupport>
            </div> : <p className="mt-5 text-sm font-semibold leading-7 text-slate-600">Try to answer before revealing. ركّز على الفكرة الأساسية قبل فتح الجواب.</p>}
          </div>

          {show ? <div className="mt-5 grid gap-3 sm:grid-cols-4">{ratings.map((r) => <button key={r.label} onClick={() => rate(r.state)} className="rounded-2xl border border-slate-200 bg-white p-4 text-left transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-sm"><div className="font-black text-slate-900">{r.label}</div><div className="mt-1 text-xs font-bold text-slate-500">{r.note}</div><div className="arabic-support mt-1 text-xs text-slate-500">{r.ar}</div></button>)}</div> : <div className="mt-6"><Button onClick={() => setShow(true)}>Show Answer</Button></div>}

          <div className="mt-6 flex justify-between gap-3"><Button variant="secondary" onClick={() => { setIdx((i) => Math.max(0, i - 1)); setShow(false); }}><ChevronLeft size={18} /> Previous</Button><Button variant="secondary" onClick={() => { setIdx((i) => filtered.length ? (i + 1) % filtered.length : 0); setShow(false); }}>Next <ChevronRight size={18} /></Button></div>
        </>}
      </main>
    </section>
  </>;
}

function Stat({ k, v }: { k: string; v: number }) { return <div className="rounded-2xl bg-slate-50 p-3"><div className="text-2xl font-black text-slate-950">{v}</div><div className="text-xs font-bold text-slate-500">{k}</div></div>; }
