import Link from 'next/link';
import { InternalPage, GlassCard } from '@/components/InternalPage';
import {
  Activity, Moon, ClipboardList, AlertTriangle, HeartPulse,
  Pill, Wind, Syringe, Stethoscope, Target, FileText,
  Lightbulb, Calendar, TrendingUp, Sparkles,
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

// ── specialty focus data (estimated guidance only) ──
const specialties = [
  {
    icon: HeartPulse,
    title: 'Internal Medicine / الباطنية',
    estPct: '~35–40%',
    topics: [
      { name: 'Cardiovascular', items: 'ACS, heart failure, arrhythmias, hypertensive emergencies, shock' },
      { name: 'Respiratory', items: 'COPD, asthma, pneumonia, pulmonary embolism, respiratory failure' },
      { name: 'Gastroenterology', items: 'GI bleeding, acute abdomen, liver failure, pancreatitis, bowel obstruction' },
      { name: 'Nephrology & Electrolytes', items: 'AKI, CKD emergencies, hyperkalemia, hyponatremia, acid-base' },
      { name: 'Endocrine', items: 'DKA, HHS, thyroid storm, adrenal crisis, hypoglycemia' },
      { name: 'Neurology', items: 'Stroke, seizure, meningitis, altered mental status, SAH' },
      { name: 'Infectious Disease', items: 'Sepsis, febrile neutropenia, meningitis, TB emergencies' },
      { name: 'Hematology', items: 'Anemia, DIC, thrombocytopenia, transfusion reactions' },
    ],
  },
  {
    icon: Activity,
    title: 'Surgery / الجراحة',
    estPct: '~20–25%',
    topics: [
      { name: 'General Surgery', items: 'Acute abdomen, appendicitis, cholecystitis, bowel obstruction, hernia' },
      { name: 'Trauma', items: 'ATLS principles, head injury, chest trauma, abdominal trauma, burns' },
      { name: 'Vascular', items: 'AAA, acute limb ischemia, DVT, compartment syndrome' },
      { name: 'Urology', items: 'Renal colic, urinary retention, testicular torsion, hematuria' },
      { name: 'ENT & Ophthalmology', items: 'Epistaxis, airway obstruction, acute visual loss, orbital cellulitis' },
    ],
  },
  {
    icon: Stethoscope,
    title: 'Pediatrics / الأطفال',
    estPct: '~15–20%',
    topics: [
      { name: 'Pediatric Emergencies', items: 'Febrile seizure, bronchiolitis, croup, dehydration, sepsis' },
      { name: 'Neonatal', items: 'Neonatal fever, jaundice, congenital heart disease presentation' },
      { name: 'Pediatric-Specific', items: 'Age-adjusted vitals, weight-based dosing, child protection red flags' },
    ],
  },
  {
    icon: Sparkles,
    title: 'Obstetrics & Gynecology / النسائية والتوليد',
    estPct: '~10–15%',
    topics: [
      { name: 'Hypertensive Disorders', items: 'Preeclampsia, eclampsia, magnesium sulfate, HELLP syndrome' },
      { name: 'Bleeding in Pregnancy', items: 'Ectopic pregnancy, abortion types, placenta previa, placental abruption' },
      { name: 'Labor & Postpartum', items: 'Labor stages, CTG basics, postpartum hemorrhage, obstetric emergencies' },
      { name: 'Gynecology Basics', items: 'Contraception contraindications, PID, ovarian torsion, gynecologic oncology concepts' },
    ],
  },
];

// ── 3-month study plan cards ──
const studyMonths = [
  {
    icon: Calendar,
    title: 'الشهر الأول',
    accent: 'cyan',
    desc: 'ابدأ بالباطنية والجراحة، وركّز على الحالات الشائعة والخطرة، خصوصًا الحالات التي تحتاج قرارًا سريعًا أو خطوة علاجية واضحة.',
  },
  {
    icon: Calendar,
    title: 'الشهر الثاني',
    accent: 'amber',
    desc: 'انتقل إلى الأطفال والنسائية والتوليد، واربط العلامات السريرية بالقرارات العملية، مثل التمييز بين الحالات المتشابهة ومعرفة أول خطوة آمنة.',
  },
  {
    icon: Calendar,
    title: 'الشهر الثالث',
    accent: 'emerald',
    desc: 'ركّز على أسئلة السنوات السابقة والسيناريوهات السريرية. قلّل القراءة النظرية الواسعة، ودرّب نفسك على MCQs، best next step، red flags، والأخطاء الشائعة.',
  },
];

const colorMap: Record<string, { border: string; bg: string; iconBg: string; iconColor: string; badge: string }> = {
  cyan:    { border: 'border-cyan-500/20',   bg: 'bg-cyan-500/5',   iconBg: 'bg-cyan-500/15',   iconColor: 'text-cyan-300',   badge: 'bg-cyan-500/15 text-cyan-300' },
  amber:   { border: 'border-amber-500/20',  bg: 'bg-amber-500/5',  iconBg: 'bg-amber-500/15',  iconColor: 'text-amber-300',  badge: 'bg-amber-500/15 text-amber-300' },
  emerald: { border: 'border-emerald-500/20', bg: 'bg-emerald-500/5', iconBg: 'bg-emerald-500/15', iconColor: 'text-emerald-300', badge: 'bg-emerald-500/15 text-emerald-300' },
};

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

      {/* ============================================================ */}
      {/* HIGH-YIELD FOCUS MAP — estimated guidance */}
      {/* ============================================================ */}
      <div className="mb-10">
        <div className="mb-2 text-center">
          <h2 className="text-xl font-black text-white sm:text-2xl">
            Internship High-Yield Focus Map
          </h2>
          <p className="mt-1 text-sm font-bold text-amber-400">
            خريطة التركيز للامتياز — مواضيع عالية الأهمية حسب التخصص
          </p>
        </div>

        {/* Disclaimer — percentages are estimated guidance */}
        <div className="mb-6 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/5 px-4 py-2 text-[11px] font-bold text-amber-400/80 backdrop-blur-md">
            <TrendingUp size={13} /> Percentages are estimated orientation guidance only — not official exam statistics
          </span>
        </div>

        {/* Specialty cards */}
        <div className="grid gap-5 sm:grid-cols-2">
          {specialties.map((spec) => {
            const Icon = spec.icon;
            return (
              <GlassCard key={spec.title} className="flex flex-col">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300">
                      <Icon size={19} />
                    </div>
                    <h3 className="text-base font-black text-white">{spec.title}</h3>
                  </div>
                  <span className="rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-[11px] font-black text-amber-300">
                    ~{spec.estPct}
                  </span>
                </div>
                <div className="mt-4 space-y-2.5">
                  {spec.topics.map((t) => (
                    <div key={t.name} className="rounded-xl border border-slate-700/20 bg-slate-950/30 px-3.5 py-2.5">
                      <span className="text-xs font-black text-cyan-400">{t.name}</span>
                      <p className="mt-1 text-[11px] leading-5 text-slate-400">{t.items}</p>
                    </div>
                  ))}
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>

      {/* ============================================================ */}
      {/* كيف أدرس بناءً على هذه الخريطة؟ — 3-month study plan */}
      {/* ============================================================ */}
      <div className="mb-10">
        <div className="mb-6 text-center">
          <h2 className="text-xl font-black text-white sm:text-2xl">
            كيف أدرس بناءً على هذه الخريطة؟
          </h2>
          <p className="mt-1 text-xs font-bold text-slate-500">
            Suggested 3-month orientation plan — estimated guidance, adaptable to your pace
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {studyMonths.map((month, idx) => {
            const c = colorMap[month.accent];
            const Icon = month.icon;
            return (
              <GlassCard key={month.title} className={`flex flex-col border ${c.border} ${c.bg}`}>
                <div className="flex items-center gap-3">
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${c.iconBg} ${c.iconColor}`}>
                    <Icon size={19} />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-white">{month.title}</h3>
                    <span className={`text-[10px] font-black ${c.iconColor}`}>
                      Month {idx + 1}
                    </span>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {month.desc}
                </p>
              </GlassCard>
            );
          })}
        </div>
      </div>

      {/* ============================================================ */}
      {/* PRACTICAL PEARL */}
      {/* ============================================================ */}
      <div className="mb-10">
        <GlassCard className="border-cyan-500/15 bg-cyan-500/3 p-6 text-center">
          <Lightbulb size={22} className="mx-auto text-amber-400" />
          <p className="mt-3 text-base font-black leading-relaxed text-white sm:text-lg">
            لا تدرس حسب الحجم فقط؛ ادرس حسب الخطورة والتكرار. أي موضوع يجمع بين حالة طارئة + قرار سريع + دواء أو إجراء مهم غالبًا يستحق أولوية أعلى.
          </p>
          <p className="mt-2 text-xs text-slate-500">
            Practical pearl — study by urgency and frequency, not volume alone.
          </p>
        </GlassCard>
      </div>

      {/* ============================================================ */}
      {/* CURATED INTERN MODULES — kept below new content */}
      {/* ============================================================ */}
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

      {/* Reference module */}
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
