import { InternalPage, GlassCard } from '@/components/InternalPage';
import { Zap, HeartPulse, Activity, Wind, AlertTriangle } from 'lucide-react';

const topics = [
  { name: 'Cardiac Arrest / ACLS', desc: 'Immediate recognition, high-quality CPR, reversible causes (Hs & Ts), early defibrillation, airway, access, adrenaline/amiodarone per ALS algorithm.' },
  { name: 'Post-ROSC Care', desc: 'Optimise oxygenation/ventilation, avoid hyperoxia, target MAP ≥65 mmHg, identify and treat underlying cause, targeted temperature management, early PCI if indicated.' },
  { name: 'Undifferentiated Shock', desc: 'Rapid classification: hypovolemic, cardiogenic, obstructive, distributive. Bedside echo, IV access, fluid challenge vs early vasopressor, lactate, and reassessment.' },
  { name: 'Septic Shock', desc: 'Early recognition, blood cultures, lactate, broad-spectrum antibiotics within 1 hour, IV fluids 30 mL/kg, vasopressors if persistent hypotension, source control.' },
  { name: 'ACS / STEMI', desc: 'ECG within 10 minutes, STEMI activation, antiplatelet/anticoagulation, pain control, cath lab activation, recognise posterior MI and LBBB equivalents.' },
  { name: 'Arrhythmias', desc: 'Stable vs unstable approach. Unstable = synchronised cardioversion. Stable narrow-complex = vagal maneuvers/adenosine. Stable wide-complex = cardiology guidance/amiodarone.' },
  { name: 'Airway / RSI / Failed Airway', desc: 'LEMON assessment, preoxygenation, apneic oxygenation, induction/paralysis, first-pass success, failed airway plan: supraglottic airway, surgical airway as last resort.' },
  { name: 'Major Trauma / ATLS', desc: 'ABCDE, primary survey, adjuncts (FAST, CXR, pelvis XR, CT), massive transfusion protocol 1:1:1, tranexamic acid, damage control principles.' },
  { name: 'Respiratory Failure', desc: 'Type 1 vs Type 2, ABG interpretation, NIV indications (COPD, APO), intubation triggers: GCS ≤8, refractory hypoxia, hypercapnic coma, airway protection.' },
  { name: 'Severe Asthma / COPD', desc: 'Asthma: continuous nebulised bronchodilators, IV magnesium, IV steroids, NIV, intubation as last resort. COPD: controlled O2 (88-92%), NIV first, treat infective trigger.' },
  { name: 'Stroke / Thrombolysis', desc: 'FAST assessment, CT head non-contrast, NIHSS, onset time, BP control if thrombolysis candidate, alteplase 0.9 mg/kg (max 90 mg), 10% bolus, 90% over 60 min.' },
  { name: 'Status Epilepticus', desc: 'ABC, check glucose, IV lorazepam/diazepam, repeat if ongoing, second-line: levetiracetam/phenytoin/valproate, refractory: propofol/midazolam infusion, EEG monitoring.' },
  { name: 'DKA / HHS', desc: 'DKA: pH <7.3 or HCO₃ <15 + ketones + glucose >11. Fluid resuscitation with 0.9% NaCl, fixed-rate insulin infusion, potassium monitoring. HHS: slower fluid correction, VTE prophylaxis.' },
  { name: 'Hyperkalemia', desc: 'ECG first: peaked T waves → wide QRS → sine wave. If ECG changes or K⁺ >6.5, stabilise with IV calcium gluconate/chloride, shift with insulin+dextrose/salbutamol, remove with dialysis/diuretics.' },
  { name: 'Anaphylaxis', desc: 'ABCDE, remove trigger, IM adrenaline 0.5 mg (repeat every 5 min), high-flow O₂, IV fluids, antihistamine + steroid as second-line, observe for biphasic reaction.' },
  { name: 'Toxicology Approach & Antidotes', desc: 'Toxidrome recognition, decontamination if indicated, supportive care, specific antidotes: N-acetylcysteine (paracetamol), naloxone (opioid), sodium bicarbonate (TCA), fomepizole (toxic alcohols), digoxin-Fab, methylene blue, hydroxocobalamin.' },
];

export default function Tier1Page() {
  return (
    <InternalPage
      title="Tier 1 — Must-Master Resuscitation & Life Threats"
      subtitle="Core life-saving topics every candidate must handle in the first 60 seconds."
      introText="These 16 topics form the foundation of emergency oral exam performance. The examiner expects you to identify life threats immediately, state your first action, and demonstrate calm, structured resuscitation logic. الأساس في الامتحان الشفوي: تعرف الخطر المباشر، قول أول خطوة بوضوح، ثم اشرح المنطق بهدوء."
      backHref="/emergency-oral-exam-mastery"
      backLabel="Oral Exam Mastery"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {topics.map((topic, idx) => (
          <GlassCard key={topic.name} className="flex flex-col">
            <div className="flex items-start gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-rose-500/15 text-xs font-black text-rose-300">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="text-base font-black leading-snug text-white">{topic.name}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-400">{topic.desc}</p>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </InternalPage>
  );
}
