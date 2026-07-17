import Link from 'next/link';
import { InternalPage, GlassCard } from '@/components/InternalPage';
import {
  BookOpen, HeartPulse, Activity, Syringe, Wind,
  Brain, MessageCircle, Bot, Sparkles, Pill, Target,
  Stethoscope, Map, Award, ArrowRight, Zap
} from 'lucide-react';

interface ResidentModule {
  icon: any;
  title: string;
  desc: string;
  link: string | null;
  status: 'live' | 'coming';
}

const modules: ResidentModule[] = [
  { icon: BookOpen, title: 'Full EM Textbook', desc: 'Complete emergency medicine topic chapters with high-yield facts, exam traps, numericals, and Arabic mentor explanations.', link: '/topics', status: 'live' },
  { icon: HeartPulse, title: 'Full ECG Atlas', desc: 'Complete ECG pattern library — ischaemia, arrhythmias, electrolyte patterns, and advanced interpretation.', link: '/ecg-atlas', status: 'live' },
  { icon: Activity, title: 'POCUS Atlas', desc: 'Point-of-care ultrasound views, techniques, and clinical correlations.', link: null, status: 'coming' },
  { icon: Pill, title: 'Drug Handbook', desc: 'Full emergency drug reference with doses, routes, groups, and exam triggers.', link: '/drug-handbook', status: 'live' },
  { icon: Syringe, title: 'Toxicology & Antidotes', desc: 'Complete toxicology reference: toxidromes, overdoses, antidotes, and management protocols.', link: '/toxicology', status: 'live' },
  { icon: Activity, title: 'Critical Care', desc: 'ICU-level critical care guidelines, ventilation strategies, and resuscitation science.', link: '/critical-care', status: 'live' },
  { icon: Wind, title: 'Airway & Ventilator', desc: 'Advanced airway management, RSI, ventilator modes, and failed airway algorithms.', link: '/intubation-ventilator', status: 'live' },
  { icon: Zap, title: 'Shock & Resuscitation', desc: 'Shock classification, fluid resuscitation, vasopressors, and haemodynamic monitoring.', link: null, status: 'coming' },
  { icon: Stethoscope, title: 'Procedures', desc: 'Emergency procedures: central lines, chest tubes, LP, arthrocentesis, and ultrasound-guided techniques.', link: null, status: 'coming' },
  { icon: Stethoscope, title: 'Advanced Cases', desc: 'Complex emergency cases with multi-step decision-making, data interpretation, and disposition planning.', link: '/emergency-cases', status: 'live' },
  { icon: Brain, title: 'Board Review', desc: 'Jordanian and Arab Board exam preparation with high-yield review and structured study paths.', link: '/arabic-board-review', status: 'live' },
  { icon: MessageCircle, title: 'Oral Board / Viva', desc: 'Structured oral exam mastery: ABCDE answers, 3-minute format, examiner follow-ups, and tiers 1–3.', link: '/emergency-oral-exam-mastery', status: 'live' },
  { icon: Bot, title: 'Exam Generator', desc: 'AI-powered board-level exam question generator with custom topic and difficulty filtering.', link: null, status: 'coming' },
  { icon: Sparkles, title: 'Visual Atlas', desc: 'Complete visual reference library: clinical signs, imaging, ECG strips, and procedure illustrations.', link: null, status: 'coming' },
];

export default function ResidentsPage() {
  return (
    <InternalPage
      title="Emergency Medicine Residents Path"
      subtitle="مسار أطباء / مقيمي طب الطوارئ"
      introText="Advanced Emergency Medicine pathway for residents and emergency physicians, with live access to the EM textbook, ECG atlas, drug handbook, toxicology, critical care, airway and ventilator content, advanced cases, board review, and oral exam mastery. POCUS Atlas, Visual Atlas, and AI Exam Generator remain under review. مسار متقدم لمقيمي وأطباء الطوارئ، مع بقاء بعض الأدوات قيد المراجعة."
    >
      <div className="mb-8 flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2.5 text-sm font-black text-emerald-300 backdrop-blur-md">
          <Award size={16} /> Full platform access — all advanced content unlocked
        </span>
      </div>

      {/* Live modules */}
      <div className="mb-8">
        <h2 className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-emerald-400">Live Modules</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modules.filter((m) => m.status === 'live').map((m) => {
            const Icon = m.icon;
            return (
              <Link
                key={m.title}
                href={m.link!}
                className="group rounded-2xl border border-emerald-500/10 bg-slate-900/30 p-5 backdrop-blur-md transition hover:-translate-y-1 hover:border-emerald-500/30 hover:bg-emerald-950/15"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300">
                  <Icon size={19} />
                </div>
                <h3 className="mt-4 text-base font-black text-white">{m.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-400">{m.desc}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-black text-emerald-400 group-hover:translate-x-0.5 transition">
                  Open <ArrowRight size={12} />
                </span>
              </Link>
            );
          })}
        </div>
      </div>

{/* Coming modules hidden for MVP — data preserved in modules array */}

      {/* Note */}
      <div className="mt-10">
        <GlassCard className="border-emerald-500/10 bg-emerald-500/3 p-5 text-center">
          <Award size={22} className="mx-auto text-emerald-400" />
          <h3 className="mt-2 text-sm font-black text-white">Residents = Full Platform</h3>
          <p className="mt-1 text-xs leading-6 text-slate-400">
            This is the only path with unrestricted access to all advanced content, board-level exams, oral exam mastery, and AI tools.
            Students and Interns see curated, role-appropriate subsets only.
          </p>
        </GlassCard>
      </div>
    </InternalPage>
  );
}
