import Link from 'next/link';
import { InternalPage, GlassCard } from '@/components/InternalPage';
import { BookOpen, HeartPulse, Activity, Stethoscope, Sparkles, ArrowRight, Zap } from 'lucide-react';

const specialties = [
  {
    icon: HeartPulse,
    title: 'Internal Medicine / الباطنية',
    desc: 'Emergency cardiology, endocrine, respiratory, nephrology, GI, infectious disease, neurology.',
    link: '/interns/study/internal-medicine',
    badge: '7 topics ready',
    badgeColor: 'bg-emerald-500/15 text-emerald-300',
  },
  {
    icon: Activity,
    title: 'Surgery / الجراحة',
    desc: 'Acute abdomen, fluids & electrolytes, trauma, vascular, wounds, procedures, surgical basics.',
    link: '/interns/study/surgery',
    badge: '7 topics ready',
    badgeColor: 'bg-emerald-500/15 text-emerald-300',
  },
  {
    icon: Stethoscope,
    title: 'Pediatrics / الأطفال',
    desc: 'Neonatal emergencies, respiratory, dehydration, vaccines, red flags, emergency cases.',
    link: '/interns/study/pediatrics',
    badge: '6 topics ready',
    badgeColor: 'bg-emerald-500/15 text-emerald-300',
  },
  {
    icon: Sparkles,
    title: 'OB/GYN / النسائية والتوليد',
    desc: 'Reproductive basics, prenatal care, infections, bleeding, labor, PPH, gynecology, STDs, hormones, breast.',
    link: '/interns/study/obgyn',
    badge: '13 topics ready',
    badgeColor: 'bg-emerald-500/15 text-emerald-300',
  },
];

const highYield = [
  { title: 'Emergency Cardiology', desc: 'ACS, arrhythmias, heart failure, shock — highest exam weight.', link: '/interns/study/internal-medicine/emergency-cardiology', icon: Zap },
  { title: 'Acute Abdomen', desc: 'Appendicitis, cholecystitis, obstruction, peritonitis — surgical red flags.', link: '/interns/study/surgery/acute-abdomen', icon: Zap },
  { title: 'Neonatal Emergencies', desc: 'Danger signs, jaundice, sepsis, Apgar — distinct from adult medicine.', link: '/interns/study/pediatrics/neonatal-emergencies', icon: Zap },
  { title: 'Early Pregnancy Bleeding', desc: 'Ectopic, abortion types, warning signs — emergency + exam staple.', link: '/interns/study/obgyn/early-pregnancy-bleeding', icon: Zap },
  { title: 'Fluids, Electrolytes & Transfusion', desc: 'Maintenance, deficits, blood products — cross-specialty, always tested.', link: '/interns/study/surgery/fluids-electrolytes-transfusion', icon: Zap },
];

export default function StudyLibraryPage() {
  return (
    <InternalPage
      title="Internship Study Library"
      subtitle="مكتبة دراسة أطباء الامتياز"
      introText="Short focused study pages built from internship summary files. Organized by specialty — each page covers one high-yield topic with key recognition, red flags, best next step thinking, common exam traps, and Arabic explanation. هذه المكتبة مبنية من ملفات دراسة الامتياز ومرتبة حسب التخصص، كل صفحة تغطي موضوعًا عالي المردود."
      backHref="/interns"
      backLabel="Intern Doctors Path"
    >
      {/* Specialty cards */}
      <h2 className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-cyan-400">By Specialty</h2>
      <div className="mb-8 grid gap-4 sm:grid-cols-2">
        {specialties.map((spec) => {
          const Icon = spec.icon;
          return (
            <Link
              key={spec.title}
              href={spec.link}
              className="group rounded-2xl border border-cyan-500/15 bg-slate-900/30 p-5 backdrop-blur-md transition hover:-translate-y-1 hover:border-cyan-500/30"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300"><Icon size={19} /></div>
                  <h3 className="text-base font-black text-white">{spec.title}</h3>
                </div>
                <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-black ${spec.badgeColor}`}>{spec.badge}</span>
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-400">{spec.desc}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-black text-cyan-400 group-hover:translate-x-0.5 transition">Browse <ArrowRight size={12} /></span>
            </Link>
          );
        })}
      </div>

      {/* High-yield starter pages */}
      <h2 className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-amber-400">
        Start with High-Yield Pages
      </h2>
      <p className="mb-4 text-xs leading-6 text-slate-500">
        These 5 pages cover the highest-weight topics for internship exams and ED readiness. Start here.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {highYield.map((page) => {
          const Icon = page.icon;
          return (
            <Link
              key={page.link}
              href={page.link}
              className="group rounded-2xl border border-amber-500/15 bg-slate-900/30 p-5 backdrop-blur-md transition hover:-translate-y-1 hover:border-amber-500/30"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/15 text-amber-300"><Icon size={19} /></div>
              <h3 className="mt-4 text-base font-black text-white">{page.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-400">{page.desc}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-black text-amber-400 group-hover:translate-x-0.5 transition">Study <ArrowRight size={12} /></span>
            </Link>
          );
        })}
      </div>
    </InternalPage>
  );
}
