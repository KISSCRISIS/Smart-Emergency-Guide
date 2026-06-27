import Link from 'next/link';
import { InternalPage, GlassCard } from '@/components/InternalPage';
import { Monitor, Users, GraduationCap, Stethoscope, HeartPulse, MessageCircle, Activity, Sparkles } from 'lucide-react';

const formats = [
  { icon: Monitor, title: 'Online Courses', desc: 'Study from anywhere with structured online emergency medicine courses. Self-paced with guided modules.', badge: 'Request Info' },
  { icon: Users, title: 'In-Person Courses', desc: 'Attend hands-on workshops, simulation sessions, and in-person exam preparation bootcamps.', badge: 'Request Info' },
  { icon: GraduationCap, title: 'Student Courses', desc: 'Medical student focused: foundations, ECG basics, clinical cases, and board-style introduction.', badge: 'Request Info' },
  { icon: Stethoscope, title: 'Intern Bootcamps', desc: 'Practical ED readiness: night shift prep, emergency drugs, airway basics, and red flags.', badge: 'Request Info' },
  { icon: HeartPulse, title: 'ECG Workshops', desc: 'Hands-on ECG interpretation workshops for all levels — from basic pattern recognition to advanced board cases.', badge: 'Request Info' },
  { icon: MessageCircle, title: 'Oral Exam Preparation', desc: 'Practice oral exam answers with examiner-style feedback, structured 3-minute answers, and common traps.', badge: 'Request Info' },
  { icon: Activity, title: 'Emergency Cases Workshops', desc: 'Case-based learning sessions covering the most high-yield ED presentations and decision-making.', badge: 'Request Info' },
];

export default function CoursesPage() {
  return (
    <InternalPage
      title="Courses & Training"
      subtitle="Online and in-person emergency medicine courses for all levels."
      introText="We offer online and in-person courses for medical students, interns, residents, and practitioners. Choose your path and start learning with structured, high-yield emergency medicine training. نوفر دورات أونلاين وحضورية لجميع الأطباء والطلاب، مع مسارات خاصة لطلاب الطب وأطباء الامتياز والمقيمين."
    >
      <div className="mb-8 flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-5 py-2.5 text-sm font-black text-amber-300 backdrop-blur-md">
          <Sparkles size={16} /> Course catalog is a preview — no booking, payment, or enrollment backend is connected yet
        </span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {formats.map((fmt) => {
          const Icon = fmt.icon;
          return (
            <GlassCard key={fmt.title}>
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300"><Icon size={19} /></div>
                <span className={`rounded-full px-2.5 py-0.5 text-[9px] font-black ${fmt.badge === 'Available' ? 'bg-emerald-500/15 text-emerald-300' : 'bg-amber-500/15 text-amber-300'}`}>{fmt.badge}</span>
              </div>
              <h3 className="mt-4 text-base font-black text-white">{fmt.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-400">{fmt.desc}</p>
            </GlassCard>
          );
        })}
      </div>

      <div className="mt-8 text-center">
        <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-button-gradient px-6 py-3.5 text-sm font-black text-white shadow-glow transition hover:-translate-y-0.5">
          Request Course Information →
        </Link>
        <p className="mt-3 text-xs text-slate-500">No fake prices or dates. Real course schedules coming when backend is integrated.</p>
      </div>
    </InternalPage>
  );
}
