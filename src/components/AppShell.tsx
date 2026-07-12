import Link from 'next/link';
import type { ReactNode } from 'react';
import {
  BookOpen,
  Brain,
  ClipboardList,
  HeartPulse,
  Home,
  Map,
  MessageCircle,
  Pill,
  ShieldAlert,
  Stethoscope,
  Target,
  Wind,
} from 'lucide-react';

const primaryItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/interns', label: 'Intern / JMC Hub', icon: Stethoscope },
  { href: '/residents', label: 'EM Residents Hub', icon: HeartPulse },
] as const;

const internItems = [
  { href: '/interns/overview', label: 'Intern Overview', icon: ClipboardList },
  { href: '/interns/study', label: 'Intern Study Hub', icon: BookOpen },
  { href: '/interns/study-plan', label: 'Study Plan', icon: Map },
  { href: '/interns/exam-focus-map', label: 'Exam Focus Map', icon: Target },
  {
    href: '/interns/jmc-exam-practice',
    label: 'JMC Exam Practice',
    icon: ClipboardList,
  },
  {
    href: '/interns/ecg-essentials',
    label: 'ECG Essentials',
    icon: HeartPulse,
  },
  {
    href: '/interns/drug-essentials',
    label: 'Drug Essentials',
    icon: Pill,
  },
  {
    href: '/interns/toxicology-essentials',
    label: 'Toxicology Essentials',
    icon: ShieldAlert,
  },
  {
    href: '/interns/emergency-cases',
    label: 'Emergency Cases',
    icon: Stethoscope,
  },
] as const;

const residentItems = [
  { href: '/topics', label: 'Full EM Topics', icon: BookOpen },
  { href: '/ecg-atlas', label: 'ECG Atlas', icon: HeartPulse },
  { href: '/drug-handbook', label: 'Drug Handbook', icon: Pill },
  { href: '/toxicology', label: 'Toxicology', icon: ShieldAlert },
  { href: '/critical-care', label: 'Critical Care', icon: HeartPulse },
  {
    href: '/intubation-ventilator',
    label: 'Airway & Ventilator',
    icon: Wind,
  },
  {
    href: '/emergency-cases',
    label: 'Advanced Emergency Cases',
    icon: Stethoscope,
  },
  {
    href: '/arabic-board-review',
    label: 'Board Review',
    icon: Brain,
  },
  {
    href: '/emergency-oral-exam-mastery',
    label: 'Oral Board / Viva',
    icon: MessageCircle,
  },
] as const;

function SidebarSection({
  title,
  items,
}: {
  title: string;
  items: readonly {
    href: string;
    label: string;
    icon: typeof Home;
  }[];
}) {
  return (
    <section className="space-y-2">
      <h2 className="px-3 text-[11px] font-black uppercase tracking-[0.22em] text-slate-500">
        {title}
      </h2>

      <div className="space-y-1">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-center gap-3 rounded-2xl border border-transparent px-3 py-2.5 text-sm font-bold text-slate-300 transition hover:border-amber-400/30 hover:bg-amber-400/10 hover:text-amber-100"
            >
              <Icon
                size={18}
                className="text-amber-300/80 transition group-hover:text-amber-200"
              />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex min-h-screen w-full max-w-[1600px]">
        <aside className="hidden w-72 shrink-0 border-r border-slate-800/80 bg-slate-950/95 px-4 py-6 lg:block">
          <Link
            href="/"
            className="mb-8 block rounded-3xl border border-amber-400/20 bg-slate-900/80 p-5"
          >
            <div className="text-xs font-black uppercase tracking-[0.25em] text-amber-300">
              SEG
            </div>

            <div className="mt-2 text-lg font-black text-white">
              Smart Emergency Guide
            </div>

            <div className="mt-1 text-xs font-semibold text-slate-400">
              Intern / JMC and Residents
            </div>
          </Link>

          <nav className="space-y-7">
            <SidebarSection title="Learning Paths" items={primaryItems} />
            <SidebarSection title="Intern / JMC" items={internItems} />
            <SidebarSection title="Residents" items={residentItems} />
          </nav>

          <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-xs leading-6 text-slate-400">
            Student, GP, EMS, paramedic, and nursing routes remain hidden until
            their content and route readiness are reviewed.
          </div>
        </aside>

        <div className="min-w-0 flex-1">
          <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/90 px-4 py-3 backdrop-blur lg:hidden">
            <div className="flex items-center justify-between gap-3">
              <Link href="/" className="text-sm font-black text-amber-200">
                SEG
              </Link>

              <div className="flex items-center gap-2">
                <Link
                  href="/interns"
                  className="rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1.5 text-xs font-bold text-amber-100"
                >
                  Intern
                </Link>

                <Link
                  href="/residents"
                  className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1.5 text-xs font-bold text-cyan-100"
                >
                  Residents
                </Link>
              </div>
            </div>
          </header>

          {children}
        </div>
      </div>
    </div>
  );
}

export default AppShell;