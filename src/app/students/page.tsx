import Link from 'next/link';
import { InternalPage, GlassCard } from '@/components/InternalPage';
import { BookOpen, HeartPulse, Activity, HelpCircle, Sparkles, Map, Brain, GraduationCap, ArrowRight } from 'lucide-react';

const sections = [
  { icon: BookOpen, title: 'Start with Core Topics', desc: 'Begin with high-yield emergency medicine topics — understand before memorizing.', link: '/topics' },
  { icon: HeartPulse, title: 'ECG Basics', desc: 'Learn ECG pattern recognition step by step with the interactive ECG Atlas.', link: '/ecg-atlas' },
  { icon: Activity, title: 'Emergency Cases for Students', desc: 'Practice clinical reasoning with real emergency department cases.', link: '/emergency-cases' },
  { icon: HelpCircle, title: 'MCQ Practice', desc: 'Test your knowledge with filtered MCQs designed for medical students.', link: '/mcq-bank' },
  { icon: Sparkles, title: 'Visual Atlas', desc: 'Learn through images — ECG strips, clinical signs, POCUS views, and more.', link: '/visual-atlas' },
  { icon: Map, title: 'Study Map', desc: 'Follow a structured learning path from basics to advanced topics.', link: '/study-map' },
  { icon: Brain, title: 'Board-style Basics', desc: 'Get introduced to board-style question formats and reasoning early.', link: '/board-review' },
];

export default function StudentsPage() {
  return (
    <InternalPage
      title="Medical Students Path"
      subtitle="مسار خاص لطلاب الطب"
      introText="A structured emergency medicine learning path for medical students: basics first, then cases, ECG, drugs, MCQs, and visual learning. هذا المسار مخصص لطلاب الطب لبناء أساس قوي في طب الطوارئ بطريقة مرتبة وسهلة، من المبادئ الأساسية إلى الحالات السريرية والأسئلة والمراجعة البصرية."
    >
      {/* Section cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sections.map((s) => {
          const Icon = s.icon;
          return (
            <Link key={s.title} href={s.link} className="group rounded-2xl border border-slate-700/30 bg-slate-900/30 p-5 backdrop-blur-md transition hover:-translate-y-1 hover:border-cyan-500/30">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300"><Icon size={19} /></div>
              <h3 className="mt-4 text-base font-black text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-400">{s.desc}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-black text-cyan-400 group-hover:translate-x-0.5 transition">Open <ArrowRight size={12} /></span>
            </Link>
          );
        })}
      </div>

      {/* Course promotion */}
      <div className="mt-8">
        <GlassCard className="border-cyan-500/20 bg-cyan-500/5 p-6 text-center">
          <GraduationCap size={28} className="mx-auto text-cyan-400" />
          <h2 className="mt-3 text-xl font-black text-white">Online & In-Person Courses Available</h2>
          <p className="mt-2 text-sm text-cyan-300 font-bold">دورات أونلاين وحضورية متاحة للطلاب</p>
          <p className="mt-2 text-sm leading-7 text-slate-400">Students can join structured online or in-person emergency medicine courses, workshops, and guided review sessions.</p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="rounded-xl bg-button-gradient px-5 py-3 text-sm font-black text-white shadow-glow transition hover:-translate-y-0.5">Request Course Info</Link>
            <Link href="/contact" className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-5 py-3 text-sm font-black text-cyan-300 transition hover:-translate-y-0.5">Join Student Course</Link>
          </div>
          <p className="mt-4 text-[10px] font-bold text-amber-300">Course registration system requires backend/payment integration before production.</p>
        </GlassCard>
      </div>
    </InternalPage>
  );
}
