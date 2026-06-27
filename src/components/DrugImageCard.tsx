'use client';

import { Camera, CheckCircle2, ExternalLink, Loader2, ShieldAlert, Search } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

type DrugImageCardProps = {
  name: string;
  useCase?: string;
  requiredForm: string;
  searchTarget: string;
  preferredVisual: string;
  safetyNote: string;
};

type DrugImageResult = {
  status: 'verified' | 'candidate' | 'pending' | 'error';
  imageUrl?: string;
  sourceName?: string;
  sourceUrl?: string;
  labelTitle?: string;
  setId?: string;
  reason?: string;
  checkedAt?: string;
};

export function DrugImageCard({ name, useCase = '', requiredForm, searchTarget, preferredVisual, safetyNote }: DrugImageCardProps) {
  const [result, setResult] = useState<DrugImageResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [imageFailed, setImageFailed] = useState(false);

  const query = useMemo(() => new URLSearchParams({ name, use: useCase }).toString(), [name, useCase]);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setImageFailed(false);
    fetch(`/api/drug-image?${query}`, { cache: 'no-store' })
      .then((r) => r.json())
      .then((data) => { if (!cancelled) setResult(data); })
      .catch((error) => { if (!cancelled) setResult({ status: 'error', reason: String(error) }); })
      .finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, [query]);

  const imageUsable = result?.imageUrl && !imageFailed;
  const dailymedSearch = `https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=${encodeURIComponent(name)}&searchdb=all`;
  const googleImages = `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(searchTarget)}`;

  return (
    <div className="rounded-[2rem] border border-white/10 bg-slate-950 p-5 text-white shadow-sm">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-emerald-200">
          <Camera size={16}/> Real medication image
        </div>
        <span className={`rounded-full px-2 py-1 text-[10px] font-black ${result?.status === 'verified' ? 'bg-emerald-400 text-slate-950' : result?.status === 'candidate' ? 'bg-cyan-300 text-slate-950' : 'bg-amber-300 text-slate-950'}`}>
          {result?.status === 'verified' ? 'verified source' : result?.status === 'candidate' ? 'candidate source' : 'needs sourcing'}
        </span>
      </div>

      <div className="mt-5 flex aspect-square items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/15 to-emerald-400/10">
        {loading ? (
          <div className="flex flex-col items-center gap-3 text-center text-sm font-bold text-slate-200"><Loader2 className="animate-spin"/> Searching trusted label images...</div>
        ) : imageUsable ? (
          <img src={result.imageUrl} alt={`${name} medication formulation`} onError={() => setImageFailed(true)} className="h-full w-full object-contain bg-white p-3" loading="lazy" />
        ) : (
          <div className="p-5 text-center">
            <div className="mx-auto flex h-28 w-24 items-center justify-center rounded-[2rem] border-4 border-dashed border-amber-300/80 bg-white/10 text-4xl">💊</div>
            <div className="mt-4 text-sm font-black text-amber-100">Trusted real photo still required</div>
            <div className="mt-2 text-xs leading-5 text-slate-300">Do not publish a random image until the formulation, concentration, and route match.</div>
          </div>
        )}
      </div>

      {result?.sourceName && imageUsable && (
        <div className="mt-3 rounded-2xl border border-emerald-300/20 bg-emerald-300/10 p-3 text-xs leading-5 text-emerald-50">
          <div className="flex items-center gap-2 font-black"><CheckCircle2 size={14}/> Source: {result.sourceName}</div>
          {result.labelTitle && <div className="mt-1 text-emerald-100/90">{result.labelTitle}</div>}
        </div>
      )}

      <div className="mt-4 space-y-3 text-xs leading-5">
        <div className="rounded-2xl bg-white/10 p-3"><strong>Required form:</strong><br/>{requiredForm}</div>
        <div className="rounded-2xl bg-cyan-400/15 p-3"><strong>Preferred visual:</strong><br/>{preferredVisual}</div>
        <div className="rounded-2xl bg-amber-400/20 p-3 text-amber-100"><strong><ShieldAlert className="mr-1 inline" size={14}/> Safety:</strong><br/>{safetyNote}</div>
      </div>

      <div className="mt-4 grid gap-2">
        <a href={result?.sourceUrl || dailymedSearch} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-400 px-3 py-2 text-xs font-black text-slate-950 hover:bg-emerald-300">
          <ExternalLink size={14}/> Open trusted source
        </a>
        <a href={googleImages} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-3 py-2 text-xs font-black text-white hover:bg-white/15">
          <Search size={14}/> Search formulation images
        </a>
      </div>
    </div>
  );
}
