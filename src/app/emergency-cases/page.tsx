'use client';

import { useMemo, useState } from 'react';
import { AlertTriangle, ClipboardCheck, Stethoscope } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { ArabicSupport } from '@/components/ArabicSupport';
import { SaveForLater } from '@/components/SaveForLater';
import { emergencyCases } from '@/data/emergencyCases';

const all = 'All';

export default function EmergencyCasesPage() {
  const [category, setCategory] = useState(all);
  const [query, setQuery] = useState('');
  const [openId, setOpenId] = useState(emergencyCases[0]?.id || '');
  const categories = [all, ...Array.from(new Set(emergencyCases.map((c) => c.category)))];
  const cases = useMemo(() => emergencyCases.filter((c) => (category === all || c.category === category) && (!query || JSON.stringify(c).toLowerCase().includes(query.toLowerCase()))), [category, query]);
  const selected = emergencyCases.find((c) => c.id === openId) || cases[0] || emergencyCases[0];

  return <div>
    <PageHeader title="Emergency Cases" subtitle="Case-based learning for real ER reasoning: vitals, history, exam, data, first action, management, disposition, and traps." arabic="هذا القسم يدرّبك على التفكير السريري: ماذا أفعل أولًا؟ ما الخطر؟ وما القرار الآمن في الطوارئ؟" />

    <div className="grid gap-4 lg:grid-cols-[360px,1fr]">
      <aside className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm lg:sticky lg:top-4 lg:max-h-[calc(100vh-2rem)] lg:overflow-y-auto">
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search cases..." className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm font-bold outline-none focus:border-emerald-300" />
        <div className="mt-3 flex flex-wrap gap-2">{categories.map((c) => <button key={c} onClick={() => setCategory(c)} className={`rounded-full px-3 py-1.5 text-xs font-black ${category === c ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-700'}`}>{c}</button>)}</div>
        <div className="mt-4 space-y-2">{cases.map((c) => <button key={c.id} onClick={() => setOpenId(c.id)} className={`w-full rounded-2xl border p-3 text-left transition ${selected?.id === c.id ? 'border-emerald-300 bg-emerald-50' : 'border-slate-200 hover:border-emerald-200 hover:bg-slate-50'}`}><div className="text-xs font-black uppercase tracking-wider text-emerald-700">{c.category}</div><div className="mt-1 font-black text-slate-950">{c.title}</div><div className="mt-1 line-clamp-2 text-xs text-slate-500">{c.chiefComplaint}</div></button>)}</div>
      </aside>

      {selected ? <main className="space-y-5">
        <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-start justify-between gap-4"><div><div className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-black uppercase tracking-wider text-emerald-700">{selected.category}</div><h2 className="mt-3 text-3xl font-black text-slate-950">{selected.title}</h2><p className="mt-3 text-lg font-bold leading-8 text-slate-700">{selected.chiefComplaint}</p></div><SaveForLater id={`case-${selected.id}`} title={selected.title} section="Emergency Cases" href="/emergency-cases" note={selected.chiefComplaint} tags={[selected.category]} /></div>
        </section>

        <div className="grid gap-5 lg:grid-cols-2">
          <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"><h3 className="flex items-center gap-2 text-xl font-black text-slate-950"><Stethoscope className="text-cyan-600" /> Vitals & History</h3><div className="mt-4 flex flex-wrap gap-2">{selected.vitals.map((v) => <span key={v} className="rounded-full bg-rose-50 px-3 py-1 text-sm font-bold text-rose-800">{v}</span>)}</div><p className="mt-4 text-sm leading-7 text-slate-700">{selected.history}</p></section>
          <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"><h3 className="text-xl font-black text-slate-950">Focused Exam & Data</h3><ul className="mt-4 space-y-2 text-sm leading-7 text-slate-700">{[...selected.exam, ...selected.data].map((x) => <li key={x} className="rounded-2xl bg-slate-50 p-3">{x}</li>)}</ul></section>
        </div>

        <section className="rounded-[2rem] border border-amber-200 bg-amber-50 p-6 shadow-sm"><h3 className="flex items-center gap-2 text-2xl font-black text-amber-950"><AlertTriangle /> First decision</h3><p className="mt-3 text-lg font-black text-slate-950">{selected.firstQuestion}</p><p className="mt-3 rounded-2xl bg-white p-4 text-sm font-semibold leading-7 text-slate-800">{selected.answer}</p><ArabicSupport>{selected.arabicReasoning}</ArabicSupport></section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><h3 className="flex items-center gap-2 text-2xl font-black text-slate-950"><ClipboardCheck className="text-emerald-600" /> Management Pathway</h3><p className="mt-3 text-sm leading-7 text-slate-600">{selected.reasoning}</p><ol className="mt-4 space-y-3">{selected.management.map((step, i) => <li key={step} className="flex gap-3 rounded-2xl border border-slate-200 p-4"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-sm font-black text-white">{i + 1}</span><span className="text-sm font-semibold leading-7 text-slate-700">{step}</span></li>)}</ol><div className="mt-4 rounded-2xl bg-slate-950 p-4 text-sm font-bold text-white">Disposition: {selected.disposition}</div></section>

        <section className="rounded-3xl border border-rose-200 bg-rose-50 p-6 shadow-sm"><h3 className="text-2xl font-black text-rose-950">Common Traps</h3><ul className="mt-4 space-y-2">{selected.traps.map((trap) => <li key={trap} className="rounded-2xl bg-white p-3 text-sm font-bold leading-6 text-rose-900">{trap}</li>)}</ul></section>
      </main> : null}
    </div>
  </div>;
}
