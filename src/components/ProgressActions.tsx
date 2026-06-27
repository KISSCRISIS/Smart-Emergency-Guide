'use client';

import { CheckCircle2, Loader2 } from 'lucide-react';
import { useProgress, ProgressState } from '@/hooks/useProgress';
import { useMemo, useState } from 'react';

export function progressCardClass(state: ProgressState) {
  if (state === 'Mastered') return 'border-emerald-300 bg-emerald-50/95 ring-2 ring-emerald-200';
  if (state === 'Learning') return 'border-cyan-300 bg-cyan-50/95 ring-2 ring-cyan-100';
  if (state === 'Wrong') return 'border-rose-300 bg-rose-50/95 ring-2 ring-rose-100';
  return 'border-slate-200 bg-white';
}

export function ProgressActions({ id, section, title }: { id: string; section: string; title: string }) {
  const { setItemState, getItemState } = useProgress();
  const [toast, setToast] = useState('');
  const state = getItemState(id);
  const opts = useMemo(() => [
    { state: 'Learning' as ProgressState, label: 'Learning', ar: 'قيد الدراسة / لم أتقنه بعد' },
    { state: 'Mastered' as ProgressState, label: 'Mastered', ar: 'تم الإتقان / أتقنه جيدًا' },
  ], []);
  const mark = (next: ProgressState) => {
    setItemState(id, next, section, title);
    setToast(next === 'Mastered' ? 'Marked as Mastered' : 'Marked as Learning');
    window.setTimeout(() => setToast(''), 1800);
  };
  return (
    <div className="mt-5">
      <div className="grid gap-2 sm:grid-cols-2">
        {opts.map((opt) => (
          <button key={opt.state} onClick={() => mark(opt.state)} className={`rounded-2xl border px-4 py-3 text-left transition hover:-translate-y-0.5 ${state === opt.state ? 'border-emerald-500 bg-emerald-500 text-white shadow-glow' : 'border-slate-200 bg-white text-slate-800 hover:border-emerald-300'}`}>
            <div className="flex items-center gap-2 font-black">{state === opt.state ? <CheckCircle2 size={16} /> : <Loader2 size={16} />} {opt.label}</div>
            <div className={`arabic-support mt-1 text-xs ${state === opt.state ? 'text-emerald-50' : 'text-slate-500'}`}>{opt.ar}</div>
          </button>
        ))}
      </div>
      {toast ? <div className="mt-2 rounded-2xl bg-slate-950 px-3 py-2 text-xs font-bold text-white">{toast}</div> : null}
    </div>
  );
}
