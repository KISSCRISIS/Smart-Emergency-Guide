import Link from 'next/link';
import { InternalPage, GlassCard } from '@/components/InternalPage';
import { HeartPulse, Activity, Stethoscope, Baby, ArrowRight, FileText } from 'lucide-react';

const specialties = [
  {
    icon: HeartPulse,
    title: 'Internal Medicine',
    desc: 'Practice modules including IHD, Heart Failure, Arrhythmias, Valvular Disease, and more.',
    link: '/interns/jmc-exam-practice/internal-medicine',
    count: 'Available',
    source: 'internal-medicine-questions.md',
  },
  {
    icon: Activity,
    title: 'Surgery',
    desc: 'Practice modules including Pre-op, Post-op, Trauma, Acute Abdomen, and more.',
    link: '/interns/jmc-exam-practice/surgery',
    count: 'Available',
    source: 'surgery-questions.md',
  },
  {
    icon: Stethoscope,
    title: 'Pediatrics',
    desc: 'Practice chapters including The Newborn, Genetics, Growth, Development, Respiratory, and more.',
    link: '/interns/jmc-exam-practice/pediatrics',
    count: 'Available',
    source: 'pediatrics-mixed-questions.md',
  },
  {
    icon: Baby,
    title: 'OB/GYN / النسائية والتوليد',
    desc: 'Practice modules from uploaded source — Obstetrics & Gynecology.',
    link: '/interns/jmc-exam-practice/obgyn',
    count: 'Available',
    source: 'obgyn-questions.md',
  },
];

export default function JmcPracticePage() {
  return (
    <InternalPage
      title="Internship / JMC Exam Practice"
      subtitle="Internship / JMC Exam Practice"
      introText="Practice internship exam questions organized by specialty. Questions imported from uploaded internship question banks with answers and explanations."
      backHref="/interns"
      backLabel="Intern Doctors Path"
    >
      <div className="mb-6 flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-bold text-cyan-300 backdrop-blur-md">
          <FileText size={13} /> Questions sourced from uploaded internship files â€” answers preserved as found in source
        </span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {specialties.map((spec) => {
          const Icon = spec.icon;
          return (
            <Link
              key={spec.link}
              href={spec.link}
              className="group rounded-2xl border border-cyan-500/15 bg-slate-900/30 p-5 backdrop-blur-md transition hover:-translate-y-1 hover:border-cyan-500/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300 mb-4">
                <Icon size={22} />
              </div>
              <h3 className="text-base font-black text-white">{spec.title}</h3>
              <span className="mt-1 mb-2 inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-black text-emerald-400">
                {spec.count}
              </span>
              <p className="mt-1 text-sm leading-relaxed text-slate-400">{spec.desc}</p>
              <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-black text-cyan-400 group-hover:translate-x-1 transition-transform">
                Open Practice <ArrowRight size={14} />
              </div>
            </Link>
          );
        })}
      </div>
    </InternalPage>
  );
}
