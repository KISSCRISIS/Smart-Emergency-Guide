import { ReactNode } from 'react';
import { ArabicSupport } from './ArabicSupport';

type Props = { title: string; subtitle: string; arabic?: string; children?: ReactNode; tone?: 'emerald'|'blue'|'rose'|'amber'|'slate' };
export function SectionFeatureHero({ title, subtitle, arabic, children, tone = 'emerald' }: Props) {
  const tones = {
    emerald: 'from-slate-950 via-teal-900 to-emerald-600', blue: 'from-slate-950 via-blue-900 to-cyan-600', rose: 'from-slate-950 via-rose-950 to-amber-600', amber: 'from-slate-950 via-amber-950 to-orange-500', slate: 'from-slate-950 via-slate-800 to-slate-600'
  } as const;
  return <>
    <header className={`mb-8 overflow-hidden rounded-[2.5rem] bg-gradient-to-br ${tones[tone]} p-6 text-white shadow-glass sm:p-8`}>
      <p className="mb-2 text-xs font-black uppercase tracking-[0.35em] text-emerald-200">Smart Emergency Guide</p>
      <h1 className="text-3xl font-black tracking-tight sm:text-5xl">{title}</h1>
      <p className="mt-4 max-w-4xl text-base leading-8 text-slate-100 sm:text-lg">{subtitle}</p>
      {arabic ? <ArabicSupport>{arabic}</ArabicSupport> : null}
      {children ? <div className="mt-6">{children}</div> : null}
    </header>
  </>;
}
