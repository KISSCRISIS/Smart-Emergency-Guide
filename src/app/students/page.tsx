import Link from 'next/link';
import { InternalPage, GlassCard } from '@/components/InternalPage';
import {
  BookOpen, HeartPulse, Activity, HelpCircle, Pill,
  Stethoscope, AlertTriangle, Sparkles, ArrowRight, GraduationCap
} from 'lucide-react';

interface StudentModule {
  icon: any;
  title: string;
  desc: string;
  link: string | null;
  status: 'placeholder' | 'reference';
}

const modules: StudentModule[] = [
  {
    icon: BookOpen,
    title: 'Basic ED Approach',
    desc: 'ABCDE assessment, triage, focused history, vital signs — the foundation every medical student needs.',
    link: '/students/basic-ed-approach',
    status: 'placeholder',
  },
  {
    icon: Sparkles,
    title: 'Common Symptoms',
    desc: 'Chest pain, dyspnoea, abdominal pain, headache — structured approach to common ED presentations.',
    link: '/signs-symptoms-triads',
    status: 'reference',
  },
  {
    icon: AlertTriangle,
    title: 'Red Flags Basics',
    desc: 'Must-not-miss diagnoses and red-flag recognition for students starting clinical rotations.',
    link: '/red-flags-ddx',
    status: 'reference',
  },
  {
    icon: HeartPulse,
    title: 'Basic ECG Recognition',
    desc: 'Normal values, sinus rhythm, STEMI basics, and dangerous pattern recognition for students.',
    link: '/students/ecg-basics',
    status: 'placeholder',
  },
  {
    icon: Pill,
    title: 'Basic Emergency Drugs',
    desc: 'The most common ED medications — what they are, when they are used, and key exam facts.',
    link: '/students/basic-drugs',
    status: 'placeholder',
  },
  {
    icon: Stethoscope,
    title: 'Basic Clinical Cases',
    desc: 'Student-level cases with guided questions and foundational clinical reasoning practice.',
    link: '/students/clinical-cases',
    status: 'placeholder',
  },
  {
    icon: HelpCircle,
    title: 'Student MCQs',
    desc: 'Filtered MCQs for medical students — basic EM knowledge, not board-level questions.',
    link: '/students/mcq-practice',
    status: 'placeholder',
  },
];

export default function StudentsPage() {
  return (
    <InternalPage
      title="Medical Students Path"
      subtitle="مسار طلاب الطب"
      introText="A structured emergency medicine learning path for medical students: basics first, then symptoms, red flags, ECG, drugs, cases, and MCQs — all scoped to student-level knowledge. هذا المسار مخصص لطلاب الطب لبناء أساس قوي في طب الطوارئ — من الأساسيات إلى الأعراض والعلامات الحمراء وتخطيط القلب والأدوية والحالات والأسئلة."
    >
      {/* Scope badge */}
      <div className="mb-8 flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2.5 text-sm font-black text-cyan-300 backdrop-blur-md">
          <GraduationCap size={16} /> Basic emergency medicine foundations only
        </span>
      </div>

      {/* Placeholder modules first */}
      <h2 className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-cyan-400">Curated Modules</h2>
      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {modules.filter((m) => m.status === 'placeholder').map((m) => {
          const Icon = m.icon;
          return (
            <Link
              key={m.title}
              href={m.link!}
              className="group rounded-2xl border border-cyan-500/15 bg-slate-900/30 p-5 backdrop-blur-md transition hover:-translate-y-1 hover:border-cyan-500/30"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300">
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

      {/* Reference modules — temporary links to existing pages */}
      <h2 className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-amber-400">Quick Reference (Temporary)</h2>
      <p className="mb-4 text-xs leading-6 text-slate-500">
        These modules link to existing general reference pages. Dedicated student-level pages will replace them.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {modules.filter((m) => m.status === 'reference').map((m) => {
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
                  Reference
                </span>
                <span className="text-[10px] text-amber-400/60">Temporary</span>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Note */}
      <div className="mt-10">
        <GlassCard className="border-cyan-500/10 bg-cyan-500/3 p-5 text-center">
          <GraduationCap size={22} className="mx-auto text-cyan-400" />
          <h3 className="mt-2 text-sm font-black text-white">Students = Foundations Only</h3>
          <p className="mt-1 text-xs leading-6 text-slate-400">
            This path is scoped to basic emergency medicine. Full advanced content, board review, and oral exam tools are available under the Residents path.
          </p>
        </GlassCard>
      </div>
    </InternalPage>
  );
}
