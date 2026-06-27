import Link from 'next/link';
import { InternalPage, GlassCard } from '@/components/InternalPage';
import { Moon, AlertTriangle, Activity, HeartPulse, Pill, Wind, Syringe, MessageCircle, HelpCircle, GraduationCap, ArrowRight, Star } from 'lucide-react';

const sections = [
  { icon: Moon, title: 'Before First Night Shift', desc: 'Essential preparation checklist for your first ED night shift — what to review and what to expect.', link: '/topics' },
  { icon: AlertTriangle, title: 'Red Flags & DDX', desc: 'Must-not-miss diagnoses every intern should recognise immediately.', link: '/red-flags-ddx' },
  { icon: Activity, title: 'Emergency Cases', desc: 'Practice real ED scenarios with vitals, data, and safe decision-making.', link: '/emergency-cases' },
  { icon: HeartPulse, title: 'ECG for Interns', desc: 'Spot dangerous ECG patterns — STEMI, hyperkalemia, blocks, and arrhythmias.', link: '/ecg-atlas' },
  { icon: Pill, title: 'Drug Handbook Essentials', desc: 'Emergency medications every intern must know: doses, routes, and exam triggers.', link: '/drug-handbook' },
  { icon: Wind, title: 'Airway & Ventilation Basics', desc: 'RSI preparation, basic ventilator modes, and failed airway planning.', link: '/intubation-ventilator' },
  { icon: Syringe, title: 'Toxicology Essentials', desc: 'Common overdoses, toxidromes, and antidotes you will see in the ED.', link: '/toxicology' },
  { icon: MessageCircle, title: 'Oral Exam Practice', desc: 'Practice structured oral exam answers with examiner-style prompts.', link: '/ai-oral-examiner' },
  { icon: HelpCircle, title: 'MCQ Bank', desc: 'Filter by internship/JMC route for targeted exam practice.', link: '/mcq-bank' },
];

export default function InternsPage() {
  return (
    <InternalPage
      title="Intern Doctors Path"
      subtitle="مسار خاص لأطباء الامتياز"
      introText="A practical emergency medicine path for interns before and during ED shifts: what to do first, what not to miss, and how to think safely. هذا المسار مخصص لأطباء الامتياز، خصوصًا قبل أول شفتات في الطوارئ، ليركز على التعامل العملي مع الحالات الخطرة، العلامات الحمراء، الأدوية، التخطيط، والتنبيب الأساسي."
    >
      {/* Section cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sections.map((s, idx) => {
          const Icon = s.icon;
          return (
            <Link key={s.title} href={s.link} className="group relative rounded-2xl border border-slate-700/30 bg-slate-900/30 p-5 backdrop-blur-md transition hover:-translate-y-1 hover:border-cyan-500/30">
              {idx === 0 && (
                <span className="absolute -top-2 right-3 rounded-full bg-amber-500 px-2.5 py-0.5 text-[9px] font-black text-slate-950">Most Popular</span>
              )}
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
          <div className="flex justify-center gap-2">
            <Star size={16} className="text-amber-400" /><span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-0.5 text-[10px] font-black text-amber-300">Recommended</span>
          </div>
          <h2 className="mt-3 text-xl font-black text-white">Online & In-Person Internship Courses</h2>
          <p className="mt-2 text-sm text-cyan-300 font-bold">دورات أونلاين وحضورية لأطباء الامتياز</p>
          <p className="mt-2 text-sm leading-7 text-slate-400">Intern doctors can join practical emergency medicine bootcamps, case-based sessions, oral exam preparation, ECG workshops, and ED readiness courses.</p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="rounded-xl bg-button-gradient px-5 py-3 text-sm font-black text-white shadow-glow transition hover:-translate-y-0.5">Request Internship Course Info</Link>
            <Link href="/contact" className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-5 py-3 text-sm font-black text-cyan-300 transition hover:-translate-y-0.5">Join Intern Bootcamp</Link>
          </div>
          <p className="mt-4 text-[10px] font-bold text-amber-300">Course registration system requires backend/payment integration before production.</p>
        </GlassCard>
      </div>
    </InternalPage>
  );
}
