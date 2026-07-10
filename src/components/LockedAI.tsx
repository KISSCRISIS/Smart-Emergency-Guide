import { Bot, ShieldCheck } from 'lucide-react';
import { Button } from './Button';

export function LockedAI({ title = 'AI access is controlled by the admin.' }: { title?: string }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-emerald-300"><Bot /></div>
      <h3 className="text-2xl font-black text-slate-950">{title}</h3>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">OpenAI / ChatGPT and Gemini must be connected through secure server-side environment variables. Users can only access AI tools after account approval and admin AI activation.</p>
      <div className="mt-5 flex flex-wrap gap-3"><Button href="/interns" variant="secondary"><ShieldCheck size={16} /> Contact Support</Button></div>
    </div>
  );
}
