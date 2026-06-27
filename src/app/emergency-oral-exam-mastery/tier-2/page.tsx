import { InternalPage, GlassCard } from '@/components/InternalPage';

const topics = [
  { name: 'Pulmonary Embolism', desc: 'Wells/PERC criteria, RV strain on echo/CT, troponin + BNP, thrombolysis for massive PE (sustained hypotension), heparin for submassive, outpatient management for low-risk.' },
  { name: 'Aortic Dissection', desc: 'Type A vs B, Stanford classification, BP control first (esmolol/labetalol), then HR control, CT angiogram, urgent cardiothoracic referral for Type A, medical management for uncomplicated Type B.' },
  { name: 'Acute Heart Failure / Pulmonary Edema', desc: 'Sit upright, CPAP/NIV, IV nitrates, loop diuretic, assess for ACS/valvular emergency/arrhythmia, avoid beta-blockers acutely in decompensated state.' },
  { name: 'Hypertensive Emergency', desc: 'End-organ damage (brain, heart, kidneys, retina), gradual BP reduction (25% in first hour), avoid rapid drops causing ischaemia, IV labetalol/nitroglycerine/nicardipine.' },
  { name: 'Syncope', desc: 'San Francisco Syncope Rule, ECG first, orthostatic vitals, rule out PE/dissection/arrhythmia/SAH, discharge if no high-risk features and clear vasovagal trigger.' },
  { name: 'SAH / Thunderclap Headache', desc: 'CT head non-contrast within 6 hours of onset. If negative and >6h, perform LP for xanthochromia. CT angiogram if LP equivocal. Nimodipine for vasospasm prevention.' },
  { name: 'Altered Mental Status', desc: 'AEIOU TIPS mnemonic, check glucose + naloxone if indicated, CT head if trauma/focal signs, consider infection, toxicology, metabolic, seizure, psychiatric causes.' },
  { name: 'Meningitis / Encephalitis', desc: 'Blood cultures, LP (unless contraindicated: focal neuro signs, papilloedema, seizures, GCS <12 — then CT first), antibiotics + aciclovir + dexamethasone within 1 hour.' },
  { name: 'GI Bleed', desc: 'ABCDE, large-bore IV access, tranexamic acid, risk stratification (Glasgow-Blatchford), PPI infusion, endoscopy timing, variceal vs non-variceal management, octreotide/terlipressin for varices.' },
  { name: 'Acute Abdomen / AAA', desc: 'Surgical abdomen assessment, bedside ultrasound for AAA/ free fluid, CT if stable, urgent vascular surgery if ruptured AAA suspected, analgesia, crossmatch.' },
  { name: 'Burns / Inhalation Injury', desc: 'Parkland formula, rule of nines, airway assessment for inhalation injury (stridor, carbonaceous sputum, facial burns), early intubation if airway threatened, CO/cyanide levels.' },
  { name: 'Head Injury', desc: 'GCS, CT head criteria (NICE/Canadian CT rules), neurosurgery consultation, ICP management: head elevation 30°, mannitol/hypertonic saline, avoid hypotension/hypoxia/hyperthermia.' },
  { name: 'Pediatric Sepsis', desc: 'Age-adjusted vitals, capillary refill, early antibiotics within 1 hour, fluid boluses 10-20 mL/kg reassessing after each, inotropes if fluid-refractory, PICU early escalation.' },
  { name: 'Pediatric Seizure', desc: 'Check glucose, IV/IO lorazepam 0.1 mg/kg, repeat if ongoing, second-line: levetiracetam/phenytoin/fosphenytoin, consider pyridoxine in infants, prepare for RSI if refractory.' },
  { name: 'Ectopic Pregnancy', desc: 'Pregnancy test in any woman of childbearing age with abdominal pain/syncope, transvaginal ultrasound, Rh status, methotrexate criteria vs surgical management, activate OBGYN early if unstable.' },
  { name: 'Eclampsia', desc: 'Magnesium sulfate 4-6 g IV load then infusion, BP control (labetalol/hydralazine/nifedipine), delivery is definitive treatment, monitor for magnesium toxicity (reflexes, respiratory rate, renal function).' },
  { name: 'Postpartum Hemorrhage', desc: 'Uterine massage, oxytocin, tranexamic acid, ergometrine/carboprost/misoprostol, Bakri balloon/tamponade, massive transfusion protocol, activate OBGYN and IR/theatre early.' },
  { name: 'Rhabdomyolysis / AKI', desc: 'CK markedly elevated, aggressive IV fluids, urine output monitoring, watch for compartment syndrome, electrolyte monitoring (K⁺, Ca²⁺, phosphate), renal replacement if refractory hyperkalemia/acidosis/fluid overload.' },
  { name: 'Sickle Cell Crisis / Acute Chest Syndrome', desc: 'Opioid analgesia, IV fluids, oxygen for hypoxia, incentive spirometry, antibiotics, exchange transfusion for severe acute chest syndrome/multi-organ failure, involve haematology early.' },
];

export default function Tier2Page() {
  return (
    <InternalPage
      title="Tier 2 — High-Yield ED Presentations"
      subtitle="Must-recognise presentations where the examiner tests pattern recognition and safe first action."
      introText="These 19 high-yield ED presentations test your ability to recognise patterns, prioritise safely, and avoid the traps examiners deliberately build into oral scenarios. الفكرة ليست فقط التشخيص الصحيح؛ الفكرة أن تثبت للممتحن أنك تعرف كيف تفكر، لا أنك تحفظ."
      backHref="/emergency-oral-exam-mastery"
      backLabel="Oral Exam Mastery"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {topics.map((topic, idx) => (
          <GlassCard key={topic.name} className="flex flex-col">
            <div className="flex items-start gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-500/15 text-xs font-black text-cyan-300">
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
