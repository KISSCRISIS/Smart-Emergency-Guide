'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { AnyRecord } from '@/lib/database';
import { DrugHandbookGroup, classifyDrug, getDrugField, getDrugName, inferRoute } from '@/lib/drugHandbookGroups';
import { ArrowLeft, ChevronDown, ChevronLeft, ChevronRight, Search } from 'lucide-react';

const PAGE_SIZE = 9;

type Props = {
  group: DrugHandbookGroup;
  drugs: AnyRecord[];
};

function haystack(drug: AnyRecord) {
  return JSON.stringify(drug).toLowerCase();
}

export function DrugGroupClient({ group, drugs }: Props) {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return drugs;
    return drugs.filter((drug) => haystack(drug).includes(q));
  }, [query, drugs]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const visible = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  function updateQuery(value: string) {
    setQuery(value);
    setPage(1);
    setOpen(null);
  }

  return <>
    <section className="rounded-[2.5rem] bg-gradient-to-br from-slate-950 via-teal-950 to-emerald-700 p-6 text-white shadow-glass sm:p-8">
      <Link href="/drug-handbook" className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-black text-emerald-50 transition hover:bg-white/20"><ArrowLeft size={16}/> Drug Handbook</Link>
      <p className="mt-5 text-xs font-black uppercase tracking-[0.32em] text-emerald-200">Drug group</p>
      <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-5xl">{group.title}</h1>
      <p className="mt-4 max-w-4xl text-base leading-8 text-slate-100 sm:text-lg">{group.subtitle}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-black text-emerald-50">{drugs.length} matched entries</span>
        <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-black text-emerald-50">9 cards per page</span>
        <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-black text-emerald-50">Phase 1A compact cards</span>
      </div>
    </section>

    <section className="mt-6 rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm">
      <label className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
        <Search size={18} className="text-emerald-700"/>
        <input value={query} onChange={(event)=>updateQuery(event.target.value)} placeholder="Search inside this group by drug, dose, use, or warning..." className="w-full bg-transparent text-sm font-bold text-slate-800 outline-none placeholder:text-slate-400" />
      </label>
      <div className="mt-3 text-sm font-bold text-slate-500">Showing {filtered.length} of {drugs.length} matching drugs in this group.</div>
    </section>

    <section className="mt-6 grid gap-4">
      {visible.length ? visible.map((drug) => {
        const name = getDrugName(drug);
        const isOpen = open === name;
        return <article key={name} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
          <button onClick={()=>setOpen(isOpen ? null : name)} className="flex w-full items-start justify-between gap-4 p-5 text-left transition hover:bg-emerald-50/50" aria-expanded={isOpen}>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-800">{classifyDrug(drug)}</span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-600">Compact profile</span>
              </div>
              <h2 className="mt-3 text-2xl font-black text-slate-950">{name}</h2>
              <p className="mt-2 max-w-4xl text-sm font-bold leading-7 text-slate-600">{getDrugField(drug, ['use', 'indication', 'indications'])}</p>
            </div>
            <ChevronDown className={`mt-2 shrink-0 text-emerald-700 transition ${isOpen ? 'rotate-180' : ''}`} />
          </button>
          {isOpen ? <div className="border-t border-slate-100 p-5">
            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              <Info label="Emergency use" value={getDrugField(drug, ['use', 'indication', 'indications'])}/>
              <Info label="Dose" value={getDrugField(drug, ['dose', 'dosage'])}/>
              <Info label="Route" value={inferRoute(drug)}/>
              <Info label="Mechanism" value={getDrugField(drug, ['mechanism', 'mechanismOfAction'])}/>
            </div>
            <div className="mt-4 rounded-2xl border border-amber-100 bg-amber-50 p-4 text-sm font-bold leading-7 text-amber-950">
              Full profile route will be added in Phase 1B. This Phase 1A card intentionally avoids stacking long profiles inside the group page.
            </div>
          </div> : null}
        </article>
      }) : <div className="rounded-[2rem] border border-dashed border-slate-300 bg-white p-8 text-center text-sm font-black text-slate-500">No matching drugs found in current handbook data.</div>}
    </section>

    {totalPages > 1 ? <nav className="mt-8 flex flex-col items-center justify-between gap-3 rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm sm:flex-row" aria-label="Drug group pagination">
      <button disabled={safePage === 1} onClick={()=>setPage((p)=>Math.max(1, p-1))} className="inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-4 py-2 text-sm font-black text-white disabled:cursor-not-allowed disabled:opacity-40"><ChevronLeft size={16}/> Previous</button>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <span className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-black text-emerald-800 sm:hidden">Page {safePage} / {totalPages}</span>
        {Array.from({ length: totalPages }).map((_, index) => {
          const item = index + 1;
          return <button key={item} onClick={()=>setPage(item)} className={`hidden h-10 w-10 rounded-xl text-sm font-black sm:block ${item === safePage ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-700 hover:bg-emerald-50'}`}>{item}</button>
        })}
      </div>
      <button disabled={safePage === totalPages} onClick={()=>setPage((p)=>Math.min(totalPages, p+1))} className="inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-4 py-2 text-sm font-black text-white disabled:cursor-not-allowed disabled:opacity-40">Next <ChevronRight size={16}/></button>
    </nav> : null}
  </>;
}

function Info({ label, value }: { label: string; value: string }) {
  return <div className="rounded-2xl bg-slate-50 p-4">
    <dt className="text-xs font-black uppercase tracking-wider text-slate-500">{label}</dt>
    <dd className="mt-1 text-sm font-bold leading-6 text-slate-800">{value}</dd>
  </div>;
}
