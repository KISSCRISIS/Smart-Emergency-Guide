import Link from 'next/link';
import { InternalPage } from '@/components/InternalPage';
import {
  BookOpen, Target, HeartPulse, Pill, Stethoscope, FileText,
  Map, Calendar, ArrowRight, Activity, Moon, ClipboardList, Wind, Syringe,
  Library,
} from 'lucide-react';

interface NavCard {
  icon: any;
  title: string;
  desc: string;
  link: string;
  accent: 'cyan' | 'amber';
}

const orientationLinks = [
  { icon: BookOpen, label: 'دليل أطباء الامتياز',     link: '/interns/overview' },
  { icon: Map,      label: 'خريطة التركيز في الامتحان', link: '/interns/exam-focus-map' },
  { icon: Calendar, label: 'خطة الدراسة 3 أشهر',       link: '/interns/study-plan' },
];

const moduleCards: NavCard[] = [
  {
    icon: Target,
    title: 'بنك أسئلة الامتياز / JMC',
    desc: 'أسئلة محاكاة للفحص الإجمالي والامتياز بتركيز على الموضوعات عالية المردود.',
    link: '/interns/jmc-exam-practice',
    accent: 'cyan',
  },
  {
    icon: HeartPulse,
    title: 'ECG Essentials',
    desc: 'تخطيط القلب العملي: الأنماط الخطرة وأسئلة الامتياز.',
    link: '/interns/ecg-essentials',
    accent: 'cyan',
  },
  {
    icon: Pill,
    title: 'Drug Essentials',
    desc: 'أهم 30 دواءً إسعافيًا — الجرعات، الطرق، والسلامة.',
    link: '/interns/drug-essentials',
    accent: 'cyan',
  },
  {
    icon: Activity,
    title: 'ED Workflow',
    desc: 'Patient flow, triage, documentation, and working efficiently within the ED team.',
    link: '/interns/ed-workflow',
    accent: 'amber',
  },
  {
    icon: Moon,
    title: 'First Night Shift',
    desc: 'Essential preparation checklist for your first ED night shift.',
    link: '/interns/first-night-shift',
    accent: 'amber',
  },
  {
    icon: ClipboardList,
    title: 'Handover',
    desc: 'Safe clinical handover using ISBAR.',
    link: '/interns/handover',
    accent: 'amber',
  },
  {
    icon: Wind,
    title: 'Airway Basics',
    desc: 'Airway assessment, basic manoeuvres, BVM ventilation.',
    link: '/interns/airway-basics',
    accent: 'amber',
  },
  {
    icon: Syringe,
    title: 'Toxicology Essentials',
    desc: 'Common overdoses, toxidrome recognition, essential antidotes.',
    link: '/interns/toxicology-essentials',
    accent: 'amber',
  },
  {
    icon: Stethoscope,
    title: 'Emergency Cases',
    desc: 'Intern-level cases covering common ED presentations.',
    link: '/interns/emergency-cases',
    accent: 'amber',
  },
];

const colorMap: Record<string, { border: string; bg: string; iconBg: string; iconColor: string }> = {
  cyan:  { border: 'border-cyan-500/20',  bg: 'bg-cyan-500/5',  iconBg: 'bg-cyan-500/15',  iconColor: 'text-cyan-300' },
  amber: { border: 'border-amber-500/20', bg: 'bg-amber-500/5', iconBg: 'bg-amber-500/15', iconColor: 'text-amber-300' },
};

export default function InternsPage() {
  return (
    <InternalPage
      title="Intern Doctors Path"
      subtitle="مسار أطباء الامتياز"
      introText="A practical emergency medicine path for interns before and during ED shifts. هذا المسار مخصص لأطباء الامتياز ليركز على التعامل العملي مع العمل في الطوارئ، المناوبات، التسليم، العلامات الحمراء، تخطيط القلب، الأدوية، مجرى الهواء، السموم، الحالات، والامتحان."
    >
      {/* Scope + PDF notice */}
      <div className="mb-6 flex flex-col items-center gap-3">
        <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-5 py-2.5 text-sm font-black text-amber-300 backdrop-blur-md">
          <Stethoscope size={16} /> Basic + concise platform-wide emergency medicine summary
        </span>
        <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/5 px-4 py-2 text-[11px] font-bold text-amber-400/80 backdrop-blur-md">
          <FileText size={14} /> Internship PDF knowledge bank — integration pending
        </span>
      </div>

      {/* ============================================================ */}
      {/* ORIENTATION STRIP — ابدأ من هنا */}
      {/* ============================================================ */}
      <div className="mb-8 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6 backdrop-blur-md">
        <div className="mb-4 text-center">
          <h2 className="text-xl font-extrabold text-amber-300 sm:text-2xl">ابدأ من هنا</h2>
          <p className="mt-1 text-sm font-bold text-slate-400">
            روابط سريعة لفهم سنة الامتياز وخطة الامتحان
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {orientationLinks.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.link}
                href={item.link}
                className="inline-flex items-center gap-2.5 rounded-xl border border-amber-500/30 bg-amber-500/10 px-5 py-3 text-sm font-extrabold text-amber-300 backdrop-blur-md transition hover:border-amber-400/50 hover:bg-amber-500/20 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/10"
              >
                <Icon size={18} />
                {item.label}
                <ArrowRight size={14} className="text-amber-400/60" />
              </Link>
            );
          })}
        </div>
      </div>

      {/* ============================================================ */}
      {/* STUDY LIBRARY CARD — prominent gateway */}
      {/* ============================================================ */}
      <div className="mb-8">
        <Link
          href="/interns/study"
          className="group flex flex-col sm:flex-row sm:items-center gap-4 rounded-2xl border-2 border-emerald-500/30 bg-emerald-500/5 p-5 backdrop-blur-md transition hover:-translate-y-0.5 hover:border-emerald-400/50 hover:bg-emerald-500/10 hover:shadow-lg hover:shadow-emerald-500/10"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-300 shadow-glow">
            <Library size={24} />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-lg font-black text-white">Internship Study Library</h3>
            <p className="mt-1 text-sm font-bold text-emerald-300">مكتبة دراسة الامتياز</p>
            <p className="mt-1 text-xs leading-5 text-slate-400">27 high-yield study topics across 4 specialties — مبنية من ملفات الامتياز المرفوعة</p>
            <span className="mt-2 inline-flex items-center gap-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-black text-emerald-300">27 topics ready</span>
          </div>
          <span className="shrink-0 inline-flex items-center gap-1.5 rounded-xl bg-emerald-500/15 px-4 py-2.5 text-sm font-black text-emerald-300 group-hover:bg-emerald-500/25 transition">
            Open Study Library <ArrowRight size={15} />
          </span>
        </Link>
      </div>

      {/* ============================================================ */}
      {/* MAIN INTERN MODULE CARDS */}
      {/* ============================================================ */}
      <h2 className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-cyan-400">
        Intern Learning Modules
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {moduleCards.map((card) => {
          const c = colorMap[card.accent];
          const Icon = card.icon;
          return (
            <Link
              key={card.link}
              href={card.link}
              className={`group rounded-2xl border ${c.border} ${c.bg} p-5 backdrop-blur-md transition hover:-translate-y-1 hover:bg-opacity-20`}
            >
              <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${c.iconBg} ${c.iconColor}`}>
                <Icon size={19} />
              </div>
              <h3 className="mt-4 text-base font-black text-white">{card.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-400">{card.desc}</p>
              <span className={`mt-3 inline-flex items-center gap-1 text-xs font-black ${c.iconColor} group-hover:translate-x-0.5 transition`}>
                Open <ArrowRight size={12} />
              </span>
            </Link>
          );
        })}
      </div>
    </InternalPage>
  );
}
