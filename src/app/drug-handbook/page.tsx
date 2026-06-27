'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { InternalPage, GlassCard } from '@/components/InternalPage';
import { MedicalSafetyNotice } from '@/components/MedicalSafetyNotice';
import { drugList } from '@/lib/database';
import { drugHandbookGroups, getDrugsForGroup, getDrugName as getDrugField } from '@/lib/drugHandbookGroups';
import { ArrowRight, BookOpenCheck, ChevronDown, Pill, Search, Sparkles } from 'lucide-react';

const quickChips = ['ACLS', 'RSI', 'Toxicology', 'Vasopressors', 'Thrombolytics', 'Asthma', 'Electrolytes', 'Antibiotics'];

function getDrugName(d: any) { return d.name || d.medication || 'Unnamed drug'; }
function getDrugClass(d: any) { return d.class || d.category || d.group || ''; }
function getDrugUse(d: any) { return d.use || d.indication || d.indications || d.emergencyUse || ''; }
function getDrugExamTrigger(d: any) {
  const hay = JSON.stringify(d).toLowerCase();
  if (hay.includes('sodium bicarbonate') || hay.includes('wide qrs') || hay.includes('tca')) return 'Wide QRS + TCA → Sodium bicarbonate';
  if (hay.includes('hyperkalemia') || hay.includes('calcium')) return 'Hyperkalemia ECG changes → Calcium';
  if (hay.includes('adenosine') || hay.includes('svt')) return 'Stable narrow-complex SVT → Adenosine';
  if (hay.includes('atropine') || (hay.includes('bradycardia') && hay.includes('hypotension'))) return 'Bradycardia + hypotension → Atropine';
  if (hay.includes('naloxone') || hay.includes('opioid')) return 'Opioid overdose → Naloxone';
  if (hay.includes('digoxin') && hay.includes('fab')) return 'Digoxin toxicity → Digoxin immune Fab';
  if (hay.includes('fomepizole') || hay.includes('toxic alcohol')) return 'Toxic alcohols → Fomepizole';
  return '';
}

const ITEMS_PER_PAGE = 12;

export default function DrugHandbookPage() {
  const drugs = drugList as any[];
  const total = drugs.length;
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [expanded, setExpanded] = useState<string | null>(null);

  const letters = Array.from(
    new Set(drugs.map((d: any) => getDrugName(d).trim().charAt(0).toUpperCase()).filter(Boolean))
  ).sort();

  const filtered = useMemo(() => {
    if (!search.trim()) return drugs;
    const q = search.trim().toLowerCase();
    return drugs.filter((d: any) => JSON.stringify(d).toLowerCase().includes(q));
  }, [search, drugs]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const safePage = Math.min(page, totalPages);
  const paginated = filtered.slice((safePage - 1) * ITEMS_PER_PAGE, safePage * ITEMS_PER_PAGE);

  const handleSearch = (v: string) => { setSearch(v); setPage(1); setExpanded(null); };

  return (
    <InternalPage
      title="Emergency Drug Handbook"
      subtitle="Navigate by emergency use, A–Z index, or search. Compact cards with exam triggers."
      introText="A cleaner navigation-first handbook: start by emergency use, open a focused group, then review compact drug cards with exam triggers and full profiles. هنا نرتّب الأدوية حسب قرار الطوارئ: إنعاش، مجرى هواء، سموم، ضغط، تشنجات، سوائل وكهارل."
      searchPlaceholder="Search drugs by name, class, use, or mechanism…"
      searchValue={search}
      onSearch={handleSearch}
    >
      <MedicalSafetyNotice
        note="Medication doses, concentrations, dilution, infusion rates, pediatric dosing, contraindications, and local availability must be verified with pharmacy/hospital protocol before clinical use."
        arabic="جرعات الأدوية وتركيزاتها وطريقة إعطائها يجب أن تُراجع حسب بروتوكول المستشفى والصيدلية قبل الاستخدام السريري."
      />

      {/* Drug groups */}
      <div className="mt-6 mb-8">
        <div className="flex flex-wrap items-end justify-between gap-3 mb-4">
          <div>
            <div className="text-xs font-black uppercase tracking-[0.28em] text-cyan-400">Browse by emergency use</div>
            <h2 className="mt-1 text-xl font-black text-white sm:text-2xl">Drug groups</h2>
          </div>
          <div className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-black text-cyan-300">{total} entries</div>
        </div>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {drugHandbookGroups.map((group) => {
            const count = getDrugsForGroup(drugs, group.slug).length;
            return (
              <Link
                key={group.slug}
                href={`/drug-handbook/groups/${group.slug}`}
                className="group rounded-2xl border border-slate-700/30 bg-slate-900/30 p-5 backdrop-blur-md transition hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/5"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="rounded-xl bg-slate-800 p-3 text-cyan-400"><Sparkles size={18} /></div>
                  <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-black text-cyan-300">{count} drugs</span>
                </div>
                <h3 className="mt-4 text-base font-black text-white">{group.title}</h3>
                <p className="mt-2 text-xs leading-6 text-slate-400">{group.subtitle}</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs font-black text-cyan-400">
                  Open group <ArrowRight size={13} className="transition group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* A–Z + Quick chips */}
      <GlassCard className="mb-8">
        <div className="flex flex-wrap items-center gap-3">
          <BookOpenCheck size={16} className="text-cyan-400" />
          <span className="text-xs font-black uppercase tracking-wider text-cyan-400">A–Z index • Quick filters</span>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {letters.map((l) => (
            <button
              key={l}
              onClick={() => handleSearch(l)}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-700/40 bg-slate-800/40 text-sm font-black text-cyan-300 transition hover:border-cyan-500/30 hover:bg-cyan-950/30"
            >
              {l}
            </button>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {quickChips.map((chip) => (
            <button
              key={chip}
              onClick={() => handleSearch(chip)}
              className="rounded-full border border-slate-700/40 bg-slate-800/40 px-3 py-1.5 text-xs font-bold text-slate-400 transition hover:border-cyan-500/30 hover:text-cyan-300"
            >
              {chip}
            </button>
          ))}
        </div>
      </GlassCard>

      {/* Drug cards */}
      <div className="mb-2 text-sm font-bold text-slate-400">
        {search ? `Found ${filtered.length} matching drugs` : `${total} drugs available`}
        {paginated.length > 0 && ` • showing ${(safePage - 1) * ITEMS_PER_PAGE + 1}–${Math.min(safePage * ITEMS_PER_PAGE, filtered.length)}`}
      </div>

      {paginated.length === 0 ? (
        <div className="flex flex-col items-center gap-3 py-16 text-center">
          <Pill size={40} className="text-slate-600" />
          <p className="text-base font-bold text-slate-400">No matching drugs found.</p>
          <p className="text-sm text-slate-500">Try a different name, class, or keyword.</p>
        </div>
      ) : (
        <div className="grid gap-3">
          {paginated.map((drug: any, idx: number) => {
            const name = getDrugName(drug);
            const cls = getDrugClass(drug);
            const use = getDrugUse(drug);
            const trigger = getDrugExamTrigger(drug);
            const isOpen = expanded === name;
            const globalIdx = (safePage - 1) * ITEMS_PER_PAGE + idx + 1;
            return (
              <article
                key={name + idx}
                className="overflow-hidden rounded-2xl border border-slate-700/30 bg-slate-900/30 backdrop-blur-md transition hover:border-cyan-500/30"
              >
                <button
                  onClick={() => setExpanded(isOpen ? null : name)}
                  className="flex w-full items-start justify-between gap-4 p-5 text-left transition hover:bg-slate-900/40"
                  aria-expanded={isOpen}
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-lg bg-cyan-500/15 px-2 py-0.5 text-[10px] font-black text-cyan-300">
                        #{String(globalIdx).padStart(2, '0')}
                      </span>
                      {cls && (
                        <span className="rounded-full border border-slate-700/40 bg-slate-800/40 px-2.5 py-0.5 text-[10px] font-bold text-slate-400">{cls}</span>
                      )}
                      {trigger && (
                        <span className="rounded-full border border-amber-500/20 bg-amber-500/10 px-2.5 py-0.5 text-[10px] font-bold text-amber-300">Exam trigger</span>
                      )}
                    </div>
                    <h3 className="mt-2 text-lg font-black text-white">{name}</h3>
                    {use && <p className="mt-1 text-sm leading-6 text-slate-400 line-clamp-2">{use}</p>}
                  </div>
                  <ChevronDown size={18} className={`mt-1 shrink-0 text-slate-500 transition ${isOpen ? 'rotate-180 text-cyan-400' : ''}`} />
                </button>

                {isOpen && (
                  <div className="border-t border-slate-700/30 p-5">
                    <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                      <Info label="Class" value={cls || '—'} />
                      <Info label="Emergency use" value={use || '—'} />
                      <Info label="Dose" value={drug.dose || drug.dosage || '—'} />
                      <Info label="Route" value={drug.route || '—'} />
                    </div>
                    {trigger && (
                      <div className="mt-3 rounded-xl border border-amber-500/20 bg-amber-500/10 p-3 text-xs font-bold leading-5 text-amber-200">
                        ⚡ Exam trigger: {trigger}
                      </div>
                    )}
                    {drug.mechanism && (
                      <div className="mt-3 rounded-xl border border-slate-700/30 bg-slate-900/40 p-3 text-xs leading-5 text-slate-300">
                        <strong className="text-slate-400">Mechanism:</strong> {drug.mechanism}
                      </div>
                    )}
                    {drug.cautions && (
                      <div className="mt-2 rounded-xl border border-rose-500/10 bg-rose-500/5 p-3 text-xs leading-5 text-rose-200">
                        <strong className="text-rose-300">Cautions:</strong> {drug.cautions}
                      </div>
                    )}
                    {drug.arabic && (
                      <div className="arabic-support mt-3 rounded-xl bg-emerald-500/10 p-3 text-sm leading-7 text-emerald-100">
                        {drug.arabic}
                      </div>
                    )}
                    <Link
                      href={`/drug-handbook/groups/${drugHandbookGroups[0]?.slug || 'cardio-resuscitation'}`}
                      className="mt-4 inline-flex items-center gap-2 rounded-xl border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-black text-cyan-300 transition hover:bg-cyan-500/20"
                    >
                      Open Full Profile <ArrowRight size={14} />
                    </Link>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={safePage <= 1}
            className="rounded-xl border border-slate-700/40 bg-slate-900/40 px-4 py-2.5 text-sm font-black text-slate-300 backdrop-blur-md transition hover:border-cyan-500/30 hover:text-cyan-300 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .filter((p) => p === 1 || p === totalPages || Math.abs(p - safePage) <= 2)
            .reduce((acc: (number | string)[], p, _, arr) => {
              if (acc.length > 0) { const prev = arr[arr.indexOf(p) - 1]; if (prev && p - prev > 1) acc.push('…'); }
              acc.push(p); return acc;
            }, [])
            .map((p, i) =>
              typeof p === 'string' ? (
                <span key={`gap-${i}`} className="px-1 text-sm font-bold text-slate-600">…</span>
              ) : (
                <button key={p} onClick={() => setPage(p)} className={`flex h-10 w-10 items-center justify-center rounded-xl text-sm font-black transition ${p === safePage ? 'bg-cyan-500 text-white shadow-glow' : 'border border-slate-700/40 bg-slate-900/40 text-slate-400 hover:border-cyan-500/30 hover:text-cyan-300'}`}>
                  {p}
                </button>
              )
            )}
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={safePage >= totalPages}
            className="rounded-xl border border-slate-700/40 bg-slate-900/40 px-4 py-2.5 text-sm font-black text-slate-300 backdrop-blur-md transition hover:border-cyan-500/30 hover:text-cyan-300 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next
          </button>
          <span className="w-full text-center text-xs font-bold text-slate-500">Page {safePage} of {totalPages}</span>
        </div>
      )}
    </InternalPage>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-700/30 bg-slate-900/40 p-3">
      <dt className="text-[10px] font-black uppercase tracking-wider text-slate-500">{label}</dt>
      <dd className="mt-1 text-sm font-bold leading-5 text-slate-200">{value}</dd>
    </div>
  );
}
