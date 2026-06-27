import { ArabicSupport } from './ArabicSupport';

export function PageHeader({ title, subtitle, arabic }: { title: string; subtitle?: string; arabic?: string }) {
  return (
    <header className="mb-8 rounded-[2rem] bg-medical-gradient p-6 text-white shadow-glass sm:p-8">
      <p className="mb-2 text-xs font-black uppercase tracking-[0.35em] text-emerald-200">Smart Emergency Guide</p>
      <h1 className="text-3xl font-black tracking-tight sm:text-5xl">{title}</h1>
      {subtitle ? <p className="mt-4 max-w-4xl text-base leading-8 text-slate-100 sm:text-lg">{subtitle}</p> : null}
      {arabic ? <div className="mt-5 rounded-2xl border border-white/10 bg-white/10 p-4 text-sm leading-7 text-emerald-50 arabic-support">{arabic}</div> : null}
    </header>
  );
}
