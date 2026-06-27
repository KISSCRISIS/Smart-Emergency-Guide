import Link from 'next/link';
import { InternalPage, GlassCard } from '@/components/InternalPage';
import {
  Activity, Moon, ClipboardList, AlertTriangle, HeartPulse,
  Pill, Wind, Syringe, Stethoscope, Target, FileText
} from 'lucide-react';

interface InternModule {
  icon: any;
  title: string;
  desc: string;
  link: string | null;
  status: 'placeholder' | 'reference';
}

const modules: InternModule[] = [
  {
    icon: Activity,
    title: 'ED Workflow',
    desc: 'Patient flow, triage, documentation, and working efficiently within the emergency department team.',
    link: '/interns/ed-workflow',
    status: 'placeholder',
  },
  {
    icon: Moon,
    title: 'First Night Shift',
    desc: 'Essential preparation checklist for your first ED night shift — what to review and what to expect.',
    link: '/interns/first-night-shift',
    status: 'placeholder',
  },
  {
    icon: ClipboardList,
    title: 'Handover',
    desc: 'Safe clinical handover using ISBAR — one of the most critical intern skills in the ED.',
    link: '/interns/handover',
    status: 'placeholder',
  },
  {
    icon: AlertTriangle,
    title: 'Red Flags & DDX',
    desc: 'Must-not-miss diagnoses every intern should recognise immediately on shift.',
    link: '/red-flags-ddx',
    status: 'reference',
  },
  {
    icon: HeartPulse,
    title: 'ECG Essentials for Interns',
    desc: 'Dangerous patterns to spot on shift and high-yield ECG for internship exams.',
    link: '/interns/ecg-essentials',
    status: 'placeholder',
  },
  {
    icon: Pill,
    title: 'Drug Essentials for Interns',
    desc: 'Top 30 emergency drugs you will actually prescribe — doses, routes, and safety checks.',
    link: '/interns/drug-essentials',
    status: 'placeholder',
  },
  {
    icon: Wind,
    title: 'Airway Basics',
    desc: 'Airway assessment, basic manoeuvres, BVM ventilation, and when to call for help.',
    link: '/interns/airway-basics',
    status: 'placeholder',
  },
  {
    icon: Syringe,
    title: 'Toxicology Essentials',
    desc: 'Common overdoses, toxidrome recognition, and essential antidotes for ED shifts and exams.',
    link: '/interns/toxicology-essentials',
    status: 'placeholder',
  },
  {
    icon: Stethoscope,
    title: 'Emergency Cases for Interns',
    desc: 'Intern-level cases covering common ED presentations with safe initial actions and escalation.',
    link: '/interns/emergency-cases',
    status: 'placeholder',
  },
  {
    icon: Target,
    title: 'Internship / JMC Exam Practice',
    desc: 'Focused exam practice for internship and JMC-style questions with topic and difficulty filtering.',
    link: '/interns/jmc-exam-practice',
    status: 'placeholder',
  },
];

export default function InternsPage() {
  return (
    <InternalPage
      title="Intern Doctors Path"
      subtitle="مسار أطباء الامتياز"
      introText="A practical emergency medicine path for interns before and during ED shifts: workflow, night shifts, handover, red flags, ECG, drugs, airway, toxicology, cases, and JMC exam practice — all scoped to internship level. هذا المسار مخصص لأطباء الامتياز ليركز على التعامل العملي مع العمل في الطوارئ، المناوبات، التسليم، العلامات الحمراء، تخطيط القلب، الأدوية، مجرى الهواء، السموم، الحالات، والامتحان."
    >
      {/* Scope + PDF notice */}
      <div className="mb-6 flex flex-col items-center gap-3">
        <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-5 py-2.5 text-sm font-black text-amber-300 backdrop-blur-md">
          <Stethoscope size={16} /> Basic + concise platform-wide emergency medicine summary
        </span>
        <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/5 px-4 py-2 text-[11px] font-bold text-amber-400/80 backdrop-blur-md">
          <FileText size={14} /> Internship PDF knowledge bank — integration pending (DeepSeek extraction in progress)
        </span>
      </div>

      {/* Curated modules — most are placeholders */}
      <h2 className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-amber-400">Curated Intern Modules</h2>
      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {modules.filter((m) => m.status === 'placeholder').map((m) => {
          const Icon = m.icon;
          return (
            <Link
              key={m.title}
              href={m.link!}
              className="group rounded-2xl border border-amber-500/15 bg-slate-900/30 p-5 backdrop-blur-md transition hover:-translate-y-1 hover:border-amber-500/30"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/15 text-amber-300">
                <Icon size={19} />
              </div>
              <h3 className="mt-4 text-base font-black text-white">{m.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-400">{m.desc}</p>
              <div className="mt-3 flex items-center gap-2">
                <span className="rounded-full border border-amber-500/20 bg-amber-500/10 px-2 py-0.5 text-[9px] font-black text-amber-400">
                  Coming in this path
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Reference module — temporary link to existing page */}
      <h2 className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-slate-500">Quick Reference (Temporary)</h2>
      <p className="mb-4 text-xs leading-6 text-slate-500">
        This module links to an existing general reference page. A dedicated intern-level page will replace it.
      </p>
      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {modules.filter((m) => m.status === 'reference').map((m) => {
          const Icon = m.icon;
          return (
            <Link
              key={m.title}
              href={m.link!}
              className="group rounded-2xl border border-slate-500/15 bg-slate-900/30 p-5 backdrop-blur-md transition hover:-translate-y-1 hover:border-slate-500/30"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-500/15 text-slate-400">
                <Icon size={19} />
              </div>
              <h3 className="mt-4 text-base font-black text-white">{m.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-400">{m.desc}</p>
              <div className="mt-3 flex items-center gap-2">
                <span className="rounded-full border border-slate-500/20 bg-slate-500/10 px-2 py-0.5 text-[9px] font-black text-slate-400">
                  Reference
                </span>
                <span className="text-[10px] text-slate-500">Temporary</span>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Note */}
      <div className="mt-10">
        <GlassCard className="border-amber-500/10 bg-amber-500/3 p-5 text-center">
          <Stethoscope size={22} className="mx-auto text-amber-400" />
          <h3 className="mt-2 text-sm font-black text-white">Interns = Practical + Exam-Focused</h3>
          <p className="mt-1 text-xs leading-6 text-slate-400">
            This path covers basic and internship-scoped content only. Full advanced atlases, board review, oral exam mastery, and AI exam generation are available under the Residents path.
            The dedicated internship PDF knowledge bank will be integrated when extraction is complete.
          </p>
        </GlassCard>
      </div>
    </InternalPage>
  );
}
