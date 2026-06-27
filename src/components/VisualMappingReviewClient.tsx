'use client';

import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import { CheckCircle2, Eye, EyeOff, Search, SlidersHorizontal } from 'lucide-react';

type Asset = Record<string, any>;
type ReviewStatus = { status: 'approved' | 'hidden' | 'needs-review'; correctedTopic?: string; note?: string; updatedAt: string };
const KEY = 'seg_visual_mapping_review_v1';

function readReviews(): Record<string, ReviewStatus> {
  if (typeof window === 'undefined') return {};
  try { return JSON.parse(localStorage.getItem(KEY) || '{}'); } catch { return {}; }
}
function writeReviews(next: Record<string, ReviewStatus>) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(KEY, JSON.stringify(next));
}

export function VisualMappingReviewClient({ assets }: { assets: Asset[] }) {
  const [query, setQuery] = useState('');
  const [section, setSection] = useState('All');
  const [type, setType] = useState('All');
  const [reviewFilter, setReviewFilter] = useState('All');
  const [reviews, setReviews] = useState<Record<string, ReviewStatus>>({});

  useEffect(() => setReviews(readReviews()), []);

  const sections = useMemo(() => ['All', ...Array.from(new Set(assets.flatMap((a) => a.sectionTargets || []).filter(Boolean))).sort()], [assets]);
  const types = useMemo(() => ['All', ...Array.from(new Set(assets.map((a) => a.visualType || 'visual').filter(Boolean))).sort()], [assets]);
  const merged: any[] = useMemo(() => assets.map((asset) => ({ ...asset, review: reviews[asset.id] })), [assets, reviews]);
  const counts = useMemo(() => {
    const approved = Object.values(reviews).filter((r) => r.status === 'approved').length;
    const hidden = Object.values(reviews).filter((r) => r.status === 'hidden').length;
    const needs = assets.length - approved - hidden;
    return { approved, hidden, needs };
  }, [assets.length, reviews]);

  const filtered = merged.filter((asset: any) => {
    const hay = JSON.stringify(asset).toLowerCase();
    const q = query.trim().toLowerCase();
    const status = asset.review?.status || (asset.needsReview ? 'needs-review' : 'approved');
    return (!q || hay.includes(q)) && (section === 'All' || (asset.sectionTargets || []).includes(section)) && (type === 'All' || asset.visualType === type) && (reviewFilter === 'All' || status === reviewFilter);
  }).slice(0, 240);

  const setStatus = (asset: Asset, status: ReviewStatus['status']) => {
    const next = { ...reviews, [asset.id]: { ...(reviews[asset.id] || {}), status, updatedAt: new Date().toISOString() } as ReviewStatus };
    setReviews(next); writeReviews(next);
  };
  const updateTopic = (asset: Asset, correctedTopic: string) => {
    const current = reviews[asset.id] || { status: 'needs-review', updatedAt: new Date().toISOString() };
    const next = { ...reviews, [asset.id]: { ...current, correctedTopic, updatedAt: new Date().toISOString() } };
    setReviews(next); writeReviews(next);
  };

  return <section className="space-y-6">
    <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="text-xs font-black uppercase tracking-[0.25em] text-emerald-700">Admin quality control</div>
      <h1 className="mt-2 text-4xl font-black text-slate-950">Visual Mapping Review</h1>
      <p className="mt-3 max-w-4xl leading-7 text-slate-600">Approve, hide, or retag extracted PDF visuals before they are trusted inside educational pages. This is the manual safety layer that prevents cover pages, wrong ECGs, and unrelated tables from appearing under the wrong topic.</p>
      <div className="arabic-support mt-4 rounded-2xl bg-emerald-50 p-4 leading-8 text-slate-800">راجع كل صورة: هل هي مفيدة طبيًا؟ هل مرتبطة بالموضوع الصحيح؟ هل يجب عرضها أم إخفاؤها؟</div>
      <div className="mt-5 grid gap-3 md:grid-cols-4">
        <div className="rounded-2xl bg-slate-950 p-4 text-white"><div className="text-sm font-bold opacity-70">Total extracted</div><div className="text-3xl font-black">{assets.length}</div></div>
        <div className="rounded-2xl bg-amber-100 p-4 text-amber-950"><div className="text-sm font-bold opacity-70">Needs review</div><div className="text-3xl font-black">{counts.needs}</div></div>
        <div className="rounded-2xl bg-emerald-100 p-4 text-emerald-950"><div className="text-sm font-bold opacity-70">Approved locally</div><div className="text-3xl font-black">{counts.approved}</div></div>
        <div className="rounded-2xl bg-rose-100 p-4 text-rose-950"><div className="text-sm font-bold opacity-70">Hidden locally</div><div className="text-3xl font-black">{counts.hidden}</div></div>
      </div>
    </div>

    <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm">
      <div className="grid gap-3 lg:grid-cols-[1fr_180px_180px_180px]">
        <label className="relative"><Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18}/><input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search topic, tag, page, visual type..." className="w-full rounded-2xl border border-slate-200 py-3 pl-11 pr-4 text-sm font-bold outline-none focus:border-emerald-400"/></label>
        <select value={section} onChange={(e)=>setSection(e.target.value)} className="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-bold"><option>All</option>{sections.slice(1).map((s)=><option key={s}>{s}</option>)}</select>
        <select value={type} onChange={(e)=>setType(e.target.value)} className="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-bold"><option>All</option>{types.slice(1).map((s)=><option key={s}>{s}</option>)}</select>
        <select value={reviewFilter} onChange={(e)=>setReviewFilter(e.target.value)} className="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-bold"><option>All</option><option value="needs-review">needs-review</option><option value="approved">approved</option><option value="hidden">hidden</option></select>
      </div>
      <div className="mt-3 flex items-center gap-2 text-xs font-bold text-slate-500"><SlidersHorizontal size={14}/> Showing {filtered.length} of {assets.length}. Review states are saved locally until Supabase review table is activated.</div>
    </div>

    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {filtered.map((asset:any)=><article key={asset.id} className={`overflow-hidden rounded-[2rem] border bg-white shadow-sm ${asset.review?.status === 'approved' ? 'border-emerald-300 ring-2 ring-emerald-100' : asset.review?.status === 'hidden' ? 'border-rose-300 opacity-75' : 'border-slate-200'}`}>
        <div className="relative aspect-[16/10] bg-slate-100"><Image src={asset.src} alt={asset.title || asset.topic} fill className="object-contain p-2" /></div>
        <div className="space-y-3 p-5">
          <div className="flex flex-wrap gap-2 text-[11px] font-black uppercase tracking-wider text-emerald-700"><span>{asset.visualType}</span><span>PDF page {asset.sourcePage}</span><span>{asset.review?.status || 'needs-review'}</span></div>
          <h2 className="text-lg font-black text-slate-950">{asset.review?.correctedTopic || asset.topic}</h2>
          <div className="rounded-2xl bg-slate-50 p-3 text-xs leading-6 text-slate-700"><b>Suggested sections:</b> {(asset.sectionTargets||[]).join(', ') || 'Unmapped'}</div>
          <input value={asset.review?.correctedTopic ?? asset.topic ?? ''} onChange={(e)=>updateTopic(asset, e.target.value)} className="w-full rounded-2xl border border-slate-200 px-3 py-2 text-sm font-bold outline-none focus:border-emerald-400" aria-label="Corrected topic" />
          <div className="grid grid-cols-3 gap-2 text-center text-xs font-black">
            <button onClick={()=>setStatus(asset,'approved')} className="rounded-xl bg-emerald-50 p-2 text-emerald-800 hover:bg-emerald-100"><CheckCircle2 className="mx-auto mb-1" size={15}/>Approve</button>
            <button onClick={()=>setStatus(asset,'needs-review')} className="rounded-xl bg-amber-50 p-2 text-amber-800 hover:bg-amber-100"><Eye className="mx-auto mb-1" size={15}/>Review</button>
            <button onClick={()=>setStatus(asset,'hidden')} className="rounded-xl bg-rose-50 p-2 text-rose-800 hover:bg-rose-100"><EyeOff className="mx-auto mb-1" size={15}/>Hide</button>
          </div>
        </div>
      </article>)}
    </div>
  </section>;
}
