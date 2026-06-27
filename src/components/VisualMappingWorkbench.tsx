'use client';

import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import { CheckCircle2, EyeOff, Filter, Search, ShieldCheck, Wrench } from 'lucide-react';
import type { AnyRecord } from '@/lib/database';

type ReviewState = Record<string, 'reviewed' | 'hidden' | 'needs-fix'>;
const storageKey = 'seg-visual-mapping-review';

function isBadAdministrativePage(asset: AnyRecord) {
  const hay = `${asset.title || ''} ${asset.topic || ''} ${(asset.tags || []).join(' ')}`.toLowerCase();
  return ['cover','author','copyright','preface','acknowledg','contents','table of contents','isbn','rapid review emergency medicine rotation exam'].some((token) => hay.includes(token));
}

export function VisualMappingWorkbench({ assets }: { assets: AnyRecord[] }) {
  const [query, setQuery] = useState('');
  const [section, setSection] = useState('All');
  const [type, setType] = useState('All');
  const [status, setStatus] = useState('All');
  const [review, setReview] = useState<ReviewState>({});

  useEffect(() => {
    try { setReview(JSON.parse(localStorage.getItem(storageKey) || '{}')); } catch { setReview({}); }
  }, []);

  const setAssetStatus = (id: string, value: ReviewState[string]) => {
    setReview((prev) => {
      const next = { ...prev, [id]: value };
      localStorage.setItem(storageKey, JSON.stringify(next));
      return next;
    });
  };

  const sections = useMemo(() => Array.from(new Set(assets.flatMap((a) => a.sectionTargets || []))).sort(), [assets]);
  const types = useMemo(() => Array.from(new Set(assets.map((a) => a.visualType || a.category || 'Visual'))).sort(), [assets]);
  const stats = useMemo(() => {
    const statusFor = (asset: AnyRecord) => review[asset.id] || (asset.hidden ? 'hidden' : asset.approved && !asset.needsReview ? 'reviewed' : 'needs-fix');
    const reviewed = assets.filter((asset) => statusFor(asset) === 'reviewed').length;
    const hidden = assets.filter((asset) => statusFor(asset) === 'hidden' || isBadAdministrativePage(asset)).length;
    const needsFix = assets.filter((asset) => statusFor(asset) === 'needs-fix' && !isBadAdministrativePage(asset)).length;
    return { reviewed, hidden, needsFix, remaining: Math.max(assets.length - reviewed - hidden, 0) };
  }, [review, assets]);

  const filtered = assets
    .filter((asset) => !isBadAdministrativePage(asset) && !asset.hidden)
    .filter((asset) => section === 'All' || (asset.sectionTargets || []).includes(section))
    .filter((asset) => type === 'All' || (asset.visualType || asset.category) === type)
    .filter((asset) => {
      const s = review[asset.id] || (asset.needsReview ? 'needs-fix' : 'reviewed');
      return status === 'All' || s === status;
    })
    .filter((asset) => {
      const q = query.toLowerCase().trim();
      if (!q) return true;
      return `${asset.title} ${asset.topic} ${asset.visualType} ${(asset.tags || []).join(' ')}`.toLowerCase().includes(q);
    })
    .slice(0, 240);

  return <section className="space-y-6">
    <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="text-xs font-black uppercase tracking-[0.25em] text-emerald-700">Admin quality control</div>
      <h1 className="mt-2 text-4xl font-black text-slate-950">Visual Mapping Review</h1>
      <p className="mt-3 max-w-4xl leading-7 text-slate-600">This workbench is the safety layer for the uploaded PDF. Review each extracted visual, confirm the topic and section, hide wrong images, and mark questionable assets for correction before final release.</p>
      <div className="mt-4 rounded-2xl bg-emerald-50 p-4 leading-8 text-slate-800" dir="rtl">هذا هو مكان المراجعة اليدوية: نثبت الصورة الصحيحة، نخفي الغلط، ونعلّم أي صورة تحتاج تعديل قبل النسخة النهائية.</div>
      <div className="mt-5 grid gap-3 md:grid-cols-4">
        <div className="rounded-2xl bg-slate-950 p-4 text-white"><div className="text-sm font-bold opacity-70">Usable extracted assets</div><div className="text-3xl font-black">{assets.filter((a)=>!isBadAdministrativePage(a)).length}</div></div>
        <div className="rounded-2xl bg-emerald-100 p-4 text-emerald-950"><div className="text-sm font-bold opacity-70">Reviewed locally</div><div className="text-3xl font-black">{stats.reviewed}</div></div>
        <div className="rounded-2xl bg-amber-100 p-4 text-amber-950"><div className="text-sm font-bold opacity-70">Needs correction</div><div className="text-3xl font-black">{stats.needsFix}</div></div>
        <div className="rounded-2xl bg-rose-100 p-4 text-rose-950"><div className="text-sm font-bold opacity-70">Hidden / filtered</div><div className="text-3xl font-black">{stats.hidden}</div></div>
      </div>
    </div>

    <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm">
      <div className="grid gap-3 lg:grid-cols-[1fr_200px_200px_180px]">
        <label className="relative"><Search className="absolute left-3 top-3 text-slate-400" size={18}/><input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search topic, ECG, shock, toxicology..." className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm font-bold outline-none focus:border-emerald-400"/></label>
        <select value={section} onChange={(e)=>setSection(e.target.value)} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-black"><option>All</option>{sections.map((s)=><option key={s}>{s}</option>)}</select>
        <select value={type} onChange={(e)=>setType(e.target.value)} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-black"><option>All</option>{types.map((s)=><option key={s}>{s}</option>)}</select>
        <select value={status} onChange={(e)=>setStatus(e.target.value)} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-black"><option>All</option><option value="reviewed">reviewed</option><option value="needs-fix">needs-fix</option><option value="hidden">hidden</option></select>
      </div>
      <div className="mt-3 flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500"><Filter size={14}/> Showing {filtered.length} assets from current filter</div>
    </div>

    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {filtered.map((asset) => {
        const current = review[asset.id] || (asset.approved && !asset.needsReview ? 'reviewed' : 'needs-fix');
        return <article key={asset.id} className={`overflow-hidden rounded-[2rem] border bg-white shadow-sm ${current === 'reviewed' ? 'border-emerald-200' : current === 'hidden' ? 'border-rose-200 opacity-75' : 'border-amber-200'}`}>
          <div className="relative aspect-[16/10] bg-slate-100"><Image src={asset.src} alt={asset.title || asset.topic} fill className="object-contain p-2" /></div>
          <div className="space-y-3 p-5">
            <div className="flex flex-wrap gap-2 text-[11px] font-black uppercase tracking-wider text-emerald-700"><span>{asset.visualType || asset.category}</span><span>PDF page {asset.sourcePage}</span><span>{current}</span></div>
            <h2 className="text-lg font-black text-slate-950">{asset.topic || asset.title}</h2>
            <div className="rounded-2xl bg-slate-50 p-3 text-xs leading-6 text-slate-700"><b>Final mapped sections:</b> {(asset.sectionTargets || []).join(', ') || 'Unmapped'}</div>
            <div className="rounded-2xl bg-blue-50 p-3 text-xs leading-6 text-blue-950"><b>Review checklist:</b> Is it clinically useful? Is the topic correct? Does this visual belong to the mapped sections? High-confidence assets are pre-reviewed but can still be overridden.</div>
            <div className="grid grid-cols-3 gap-2 text-center text-xs font-black">
              <button onClick={()=>setAssetStatus(asset.id, 'reviewed')} className="rounded-xl bg-emerald-50 p-2 text-emerald-800"><CheckCircle2 className="mx-auto mb-1" size={15}/> Reviewed</button>
              <button onClick={()=>setAssetStatus(asset.id, 'needs-fix')} className="rounded-xl bg-amber-50 p-2 text-amber-800"><Wrench className="mx-auto mb-1" size={15}/> Fix</button>
              <button onClick={()=>setAssetStatus(asset.id, 'hidden')} className="rounded-xl bg-rose-50 p-2 text-rose-800"><EyeOff className="mx-auto mb-1" size={15}/> Hide</button>
            </div>
          </div>
        </article>;
      })}
    </div>
  </section>;
}
