import Link from 'next/link';
import { InternalPage, GlassCard } from '@/components/InternalPage';
import {
  HeartPulse, Activity, Stethoscope, Sparkles, TrendingUp,
  AlertTriangle, ArrowRight, Lightbulb, Zap, Map,
} from 'lucide-react';

const specialties = [
  {
    icon: HeartPulse,
    title: 'Internal Medicine',
    arabic: 'الباطنية',
    priority: 'Highest Priority',
    priorityColor: 'bg-red-500/15 text-red-300 border-red-500/20',
    estPct: '35–40%',
    repeatedClusters: [
      { name: 'Cardiovascular', items: 'ACS, heart failure, arrhythmias, hypertensive emergencies, shock' },
      { name: 'Respiratory', items: 'COPD, asthma, pneumonia, pulmonary embolism, respiratory failure' },
      { name: 'Gastroenterology', items: 'GI bleeding, acute abdomen, liver failure, pancreatitis, bowel obstruction' },
      { name: 'Nephrology & Electrolytes', items: 'AKI, CKD emergencies, hyperkalemia, hyponatremia, acid-base' },
      { name: 'Endocrine', items: 'DKA, HHS, thyroid storm, adrenal crisis, hypoglycemia' },
      { name: 'Infectious Disease', items: 'Sepsis, febrile neutropenia, meningitis, TB emergencies' },
      { name: 'Neurology', items: 'Stroke, seizure, meningitis, altered mental status, SAH' },
      { name: 'Hematology', items: 'Anemia, DIC, thrombocytopenia, transfusion reactions' },
    ],
    firstStudy: 'Start with Cardiovascular and Respiratory — they dominate IM exam weight. Then Endocrine and ID.',
    trap: 'Studying rare diseases before mastering ACS, heart failure, and sepsis. These three topics alone appear in a large portion of IM questions.',
    arabicExplanation: 'ابدأ بالقلب والتنفس — هما الأعلى في أسئلة الباطنية. لا تنشغل بالأمراض النادرة قبل أن تتقن الجلطة القلبية، فشل القلب، والصدمة الإنتانية.',
    jmcHref: '/interns/jmc-exam-practice/internal-medicine',
    jmcLabel: 'Open IM Practice',
  },
  {
    icon: Activity,
    title: 'Surgery',
    arabic: 'الجراحة',
    priority: 'High Priority',
    priorityColor: 'bg-amber-500/15 text-amber-300 border-amber-500/20',
    estPct: '20–25%',
    repeatedClusters: [
      { name: 'Acute Abdomen', items: 'Appendicitis, cholecystitis, bowel obstruction, peritonitis, hernia' },
      { name: 'Trauma', items: 'ATLS principles, head injury, chest trauma, abdominal trauma, burns' },
      { name: 'Vascular', items: 'AAA, acute limb ischemia, DVT, compartment syndrome' },
      { name: 'Fluids & Transfusion', items: 'Maintenance fluids, deficits, blood products, electrolyte correction' },
      { name: 'Wounds & Infections', items: 'Surgical site infection, abscess, necrotising fasciitis, tetanus' },
    ],
    firstStudy: 'Start with Acute Abdomen — it is the highest-yield surgical topic. Then Trauma and Fluids/Electrolytes.',
    trap: 'Memorising surgical steps instead of focusing on diagnosis and decision-making. JMC tests whether you know when to operate, not how.',
    arabicExplanation: 'البطن الحاد هو الموضوع الأعلى في الجراحة. ركّز على التشخيص والقرار (هل يحتاج عملية؟) وليس على تفاصيل العملية. ثم الإصابات والسوائل.',
    jmcHref: '/interns/jmc-exam-practice/surgery',
    jmcLabel: 'Open Surgery Practice',
  },
  {
    icon: Stethoscope,
    title: 'Pediatrics',
    arabic: 'الأطفال',
    priority: 'Foundation Priority',
    priorityColor: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/20',
    estPct: '15–20%',
    repeatedClusters: [
      { name: 'The Newborn', items: 'Jaundice, respiratory distress, Apgar, congenital anomalies, neonatal sepsis' },
      { name: 'Development', items: 'Milestones by age, red flags, primitive reflexes, speech delay' },
      { name: 'Immunizations', items: 'Jordanian schedule, live vs killed vaccines, storage, contraindications' },
      { name: 'Respiratory', items: 'Bronchiolitis, croup, epiglottitis, foreign body, cystic fibrosis' },
      { name: 'Genetics', items: 'Down, Turner, Klinefelter, DiGeorge, Fragile X, Marfan, Beckwith-Wiedemann' },
      { name: 'Growth & Nutrition', items: 'Weight milestones, breastfeeding, vitamin D, failure to thrive' },
      { name: 'Allergy & Asthma', items: 'Anaphylaxis management, asthma severity, acute exacerbation' },
    ],
    firstStudy: 'Start with The Newborn — it is the largest chapter by question count. Then Development and Immunizations.',
    trap: 'Confusing physiological jaundice (appears day 2–3, resolves by day 5–7) with pathological jaundice (first 24 hours = always pathological). This distinction appears in many questions.',
    arabicExplanation: 'حديثي الولادة هو أكبر فصل في الأطفال. ابدأ به. ثم النمو والتطور، ثم التطعيمات. لا تخلط بين اليرقان الفسيولوجي (يظهر يوم 2–3) والمرضي (أول 24 ساعة = دائماً مرضي).',
    jmcHref: '/interns/jmc-exam-practice/pediatrics',
    jmcLabel: 'Open Peds Practice',
  },
  {
    icon: Sparkles,
    title: 'Obstetrics & Gynecology',
    arabic: 'النسائية والتوليد',
    priority: 'Revision Priority',
    priorityColor: 'bg-purple-500/15 text-purple-300 border-purple-500/20',
    estPct: '10–15%',
    repeatedClusters: [
      { name: 'Normal Pregnancy & ANC', items: 'Gestational age, LMP, Naegele rule, prenatal labs, post-term (>42w)' },
      { name: 'Bleeding in Pregnancy', items: 'Placental abruption, placenta previa, ectopic pregnancy, abortion types' },
      { name: 'Hypertensive Disorders', items: 'Pre-eclampsia, eclampsia, gestational HTN, magnesium sulfate' },
      { name: 'Labor & Delivery', items: 'Labor stages, induction indications, CTG basics, VBAC criteria' },
      { name: 'Menstrual & Hormonal', items: 'Adenomyosis, PCOS, endometrial hyperplasia, menopause (age 51)' },
      { name: 'Uterine Fibroids', items: 'Most common uterine tumor, surgery indications, OCP avoidance' },
    ],
    firstStudy: 'Start with Normal Pregnancy and Bleeding in Pregnancy — these two modules have the highest question density.',
    trap: 'Continuing expectant management beyond 42 weeks instead of inducing labor. Also: using OCP in women with uterine fibroids — OCP can enlarge them.',
    arabicExplanation: 'الحمل الطبيعي والنزيف أثناء الحمل هما الأعلى في عدد الأسئلة. لا تستمر في المتابعة بدون تدخل بعد الأسبوع 42 — يجب التحريض. وتجنب حبوب منع الحمل المركبة في مريضات الأورام الليفية.',
    jmcHref: '/interns/jmc-exam-practice/obgyn',
    jmcLabel: 'Open OB/GYN Practice',
  },
];

export default function ExamFocusMapPage() {
  return (
    <InternalPage
      title="خريطة التركيز في امتحان الامتياز"
      subtitle="Internship JMC Exam Focus Map"
      introText="Estimated orientation map based on available local JMC question data and student-facing review patterns. This is not an official JMC blueprint — it is a practical guide to help you prioritise study by topic weight and repetition."
      backHref="/interns"
      backLabel="Intern Doctors Path"
    >
      {/* Disclaimer + Study Plan connection */}
      <div className="mb-6 flex flex-col items-center gap-3">
        <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/5 px-4 py-2 text-[11px] font-bold text-amber-400/80 backdrop-blur-md">
          <TrendingUp size={13} /> Percentages are estimated orientation guidance based on SEG&apos;s available JMC/PYQ question data and student-facing review patterns. They are not an official JMC blueprint.
        </span>
        <Link
          href="/interns/study-plan"
          className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-2 text-[11px] font-bold text-cyan-400 backdrop-blur-md transition hover:border-cyan-500/40 hover:bg-cyan-500/10"
        >
          <Map size={12} /> How to use this map with your Study Plan <ArrowRight size={11} />
        </Link>
      </div>

      {/* Specialty cards */}
      <div className="grid gap-5 sm:grid-cols-2">
        {specialties.map((spec) => {
          const Icon = spec.icon;
          return (
            <GlassCard key={spec.title} className="flex flex-col">
              {/* Header row */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300">
                    <Icon size={19} />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-white">{spec.title}</h3>
                    <p className="text-[10px] font-bold text-slate-500" dir="auto">{spec.arabic}</p>
                  </div>
                </div>
              </div>

              {/* Priority + Weight badges */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className={`rounded-full border px-2.5 py-0.5 text-[10px] font-black ${spec.priorityColor}`}>
                  {spec.priority}
                </span>
                <span className="rounded-full border border-slate-600/30 bg-slate-800/40 px-2.5 py-0.5 text-[10px] font-black text-slate-300">
                  ~{spec.estPct} of exam
                </span>
              </div>

              {/* First-study focus */}
              <div className="mb-3 rounded-lg border border-cyan-500/10 bg-cyan-500/3 px-3 py-2">
                <div className="flex items-center gap-1.5 mb-1">
                  <Zap size={11} className="text-cyan-400" />
                  <span className="text-[10px] font-black text-cyan-400">Study This First</span>
                </div>
                <p className="text-[11px] leading-5 text-slate-300">{spec.firstStudy}</p>
              </div>

              {/* Repeated topic clusters */}
              <p className="mb-2 text-[10px] font-black uppercase tracking-wider text-slate-500">Repeated Topic Clusters</p>
              <div className="space-y-2 mb-3">
                {spec.repeatedClusters.map((t) => (
                  <div key={t.name} className="rounded-lg border border-slate-700/20 bg-slate-950/30 px-3 py-2">
                    <span className="text-[11px] font-black text-cyan-400">{t.name}</span>
                    <p className="mt-0.5 text-[10px] leading-4 text-slate-400">{t.items}</p>
                  </div>
                ))}
              </div>

              {/* Common trap */}
              <div className="mb-3 rounded-lg border border-red-500/10 bg-red-500/3 px-3 py-2">
                <div className="flex items-center gap-1.5 mb-1">
                  <AlertTriangle size={11} className="text-red-400" />
                  <span className="text-[10px] font-black text-red-400">Common Exam Trap</span>
                </div>
                <p className="text-[11px] leading-5 text-slate-400">{spec.trap}</p>
              </div>

              {/* Arabic explanation */}
              <div className="mb-3 rounded-lg border border-cyan-500/10 bg-cyan-500/3 px-3 py-2">
                <div className="flex items-center gap-1.5 mb-1">
                  <Lightbulb size={11} className="text-amber-400" />
                  <span className="text-[10px] font-black text-amber-400">Arabic</span>
                </div>
                <p className="text-[11px] leading-5 text-slate-400" dir="auto">{spec.arabicExplanation}</p>
              </div>

              {/* JMC Practice link */}
              <Link
                href={spec.jmcHref}
                className="mt-auto inline-flex items-center justify-center gap-1.5 rounded-xl border border-cyan-500/20 bg-cyan-500/10 px-4 py-2.5 text-xs font-black text-cyan-300 backdrop-blur-md transition hover:border-cyan-500/40 hover:bg-cyan-500/20"
              >
                {spec.jmcLabel} <ArrowRight size={13} />
              </Link>
            </GlassCard>
          );
        })}
      </div>

      {/* Bottom note */}
      <p className="mt-8 text-center text-[10px] font-bold text-slate-600">
        Repeated topic clusters are based on available local question data and may be incomplete. This map is a study aid, not an official exam syllabus.
      </p>
    </InternalPage>
  );
}
