import Link from 'next/link';
import { InternalPage } from '@/components/InternalPage';
import { ArrowRight, ShieldCheck, Brain, Zap } from 'lucide-react';

const tiers = [
  {
    slug: 'tier-1',
    title: 'Tier 1 — Must-Master Resuscitation & Life Threats',
    icon: Zap,
    color: 'rose',
    intro: 'Core life-saving resuscitation topics every candidate must handle confidently in the first 60 seconds of any oral exam scenario.',
    topics: [
      'Cardiac Arrest / ACLS',
      'Post-ROSC Care',
      'Undifferentiated Shock',
      'Septic Shock',
      'ACS / STEMI',
      'Arrhythmias',
      'Airway / RSI / Failed Airway',
      'Major Trauma / ATLS',
      'Respiratory Failure',
      'Severe Asthma / COPD',
      'Stroke / Thrombolysis',
      'Status Epilepticus',
      'DKA / HHS',
      'Hyperkalemia',
      'Anaphylaxis',
      'Toxicology Approach & Antidotes',
    ],
  },
  {
    slug: 'tier-2',
    title: 'Tier 2 — High-Yield ED Presentations',
    icon: Brain,
    color: 'cyan',
    intro: 'Must-recognise ED presentations where the examiner tests pattern recognition, safe first action, and avoiding common traps.',
    topics: [
      'Pulmonary Embolism',
      'Aortic Dissection',
      'Acute Heart Failure / Pulmonary Edema',
      'Hypertensive Emergency',
      'Syncope',
      'SAH / Thunderclap Headache',
      'Altered Mental Status',
      'Meningitis / Encephalitis',
      'GI Bleed',
      'Acute Abdomen / AAA',
      'Burns / Inhalation Injury',
      'Head Injury',
      'Pediatric Sepsis',
      'Pediatric Seizure',
      'Ectopic Pregnancy',
      'Eclampsia',
      'Postpartum Hemorrhage',
      'Rhabdomyolysis / AKI',
      'Sickle Cell Crisis / Acute Chest Syndrome',
    ],
  },
  {
    slug: 'tier-3',
    title: 'Tier 3 — Examiner Traps, Communication, Procedures & Disposition',
    icon: ShieldCheck,
    color: 'amber',
    intro: 'The examiner tests judgment, safety, communication, ethics, and systems thinking — not just clinical knowledge.',
    topics: [
      'Procedural Sedation',
      'Capacity and Refusal of Treatment',
      'Breaking Bad News',
      'Conflict Communication',
      'Consent',
      'Safeguarding / Child Abuse / Domestic Violence',
      'Psychiatric Agitation',
      'ED Triage and Prioritization',
      'Safe Discharge and Safety-Netting',
      'Transfer to ICU / Cath Lab / OR',
      'POCUS Oral Basics',
      'Difficult Consultation',
      'Anticoagulated Bleeding / Reversal',
      'Pain and Opioid Safety',
      'End-of-Life Care in ED',
    ],
  },
];

const colorMap: Record<string, { border: string; bg: string; badge: string; text: string; hover: string }> = {
  rose: { border: 'border-rose-500/20', bg: 'bg-rose-500/5', badge: 'bg-rose-500/15 text-rose-300', text: 'text-rose-400', hover: 'hover:border-rose-500/30 hover:bg-rose-500/10' },
  cyan: { border: 'border-cyan-500/20', bg: 'bg-cyan-500/5', badge: 'bg-cyan-500/15 text-cyan-300', text: 'text-cyan-400', hover: 'hover:border-cyan-500/30 hover:bg-cyan-500/10' },
  amber: { border: 'border-amber-500/20', bg: 'bg-amber-500/5', badge: 'bg-amber-500/15 text-amber-300', text: 'text-amber-400', hover: 'hover:border-amber-500/30 hover:bg-amber-500/10' },
};

export default function EmergencyOralExamMasteryPage() {
  return (
    <InternalPage
      title="Emergency Oral Exam Mastery"
      subtitle="Train your oral exam thinking: first 30 seconds, ABCDE, life threats, examiner logic, and 3-minute answers."
      introText="This section trains emergency medicine oral exam thinking: first 30 seconds, ABCDE, life threats, examiner logic, critical actions, do-not-miss points, 3-minute answers, and disposition. هذا القسم لا يعلّمك الحفظ فقط، بل يدرّبك كيف تفكر كطبيب طوارئ في الامتحان الشفوي: ماذا تفعل أولاً، ما الذي يقتل المريض الآن، متى تنادي المساعدة، وما هي الأخطاء التي يبحث عنها الممتحن."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {tiers.map((tier) => {
          const Icon = tier.icon;
          const c = colorMap[tier.color];
          return (
            <Link
              key={tier.slug}
              href={`/emergency-oral-exam-mastery/${tier.slug}`}
              className={`group flex flex-col rounded-2xl border ${c.border} bg-slate-900/30 p-6 backdrop-blur-md transition hover:-translate-y-1 ${c.hover} hover:shadow-lg`}
            >
              <div className="flex items-center justify-between">
                <span className={`flex h-12 w-12 items-center justify-center rounded-xl ${c.badge}`}>
                  <Icon size={22} />
                </span>
                <span className={`rounded-full border ${c.border} px-3 py-1 text-xs font-black ${c.text}`}>
                  {tier.topics.length} topics
                </span>
              </div>

              <h2 className="mt-5 text-lg font-black leading-snug text-white">{tier.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-400">{tier.intro}</p>

              {/* topic preview — first 5 */}
              <ul className="mt-4 space-y-1.5">
                {tier.topics.slice(0, 5).map((t) => (
                  <li key={t} className="text-xs leading-6 text-slate-500">• {t}</li>
                ))}
                {tier.topics.length > 5 && (
                  <li className="text-xs font-bold text-slate-600">
                    + {tier.topics.length - 5} more topics
                  </li>
                )}
              </ul>

              <div className="mt-auto flex items-center gap-2 pt-5">
                <span className={`text-sm font-black ${c.text} transition group-hover:translate-x-0.5`}>
                  Open Tier
                </span>
                <ArrowRight size={15} className={`${c.text} transition group-hover:translate-x-1`} />
              </div>
            </Link>
          );
        })}
      </div>
    </InternalPage>
  );
}
