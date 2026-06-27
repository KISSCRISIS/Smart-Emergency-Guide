import { InternalPage, GlassCard } from '@/components/InternalPage';

const topics = [
  { name: 'Procedural Sedation', desc: 'Pre-sedation assessment (airway, fasting, ASA class), capnography, NAPSoO monitoring, propofol/ketamine/midazolam, reversal agents, discharge criteria (Aldrete score).' },
  { name: 'Capacity and Refusal of Treatment', desc: 'Presume capacity unless proven otherwise. Assess: understand, retain, weigh, communicate. Document clearly. High-risk refusals: AMA, leaving before treatment complete, against-medical-advice documentation.' },
  { name: 'Breaking Bad News', desc: 'SPIKES protocol: Setting, Perception, Invitation, Knowledge, Empathy, Strategy/Summary. Private space, senior presence, allow silence, offer follow-up, document conversation.' },
  { name: 'Conflict Communication', desc: 'De-escalation techniques, recognising triggers, security involvement when needed, maintaining safety, separate agitated individuals from crowded areas, verbal de-escalation before physical restraint.' },
  { name: 'Consent', desc: 'Informed consent: nature of procedure, risks, benefits, alternatives. Emergency treatment without consent when: life/limb-threatening AND patient lacks capacity AND no valid advance directive.' },
  { name: 'Safeguarding / Child Abuse / Domestic Violence', desc: 'Recognise red flags: injury pattern inconsistent with history, delayed presentation, frequent attendances. Document verbatim, involve named safeguarding lead, consider MARAC/DASH risk assessment for domestic violence.' },
  { name: 'Psychiatric Agitation', desc: 'Medical clearance (organic cause first), verbal de-escalation, oral medication preferred (lorazepam/olanzapine), IM only if necessary, avoid physical restraint unless imminent risk, observe for QT prolongation with antipsychotics.' },
  { name: 'ED Triage and Prioritization', desc: 'Triage categories (1-5), recognise the unwell patient from the door, clinical gestalt, early warning scores (NEWS/MEWS), assign appropriate location (resus vs majors vs minors vs ambulatory).' },
  { name: 'Safe Discharge and Safety-Netting', desc: 'Structured safety-netting: specific symptoms to return for, timeframe, who to contact, red flags documented. Virtual fracture clinic / hot clinic follow-up. Patient understands the plan — teach-back method.' },
  { name: 'Transfer to ICU / Cath Lab / OR', desc: 'ISBAR handover, pre-transfer stabilisation, monitoring en route, transport team and equipment, documentation, family communication prior to transfer, accepting team confirms readiness.' },
  { name: 'POCUS Oral Basics', desc: 'Extended FAST (eFAST), AAA screening, cardiac views (parasternal long/short, apical 4-chamber, subcostal), IVC assessment, lung sliding/pneumothorax, gallbladder/renal views. Know limitations: operator-dependent, does not replace formal imaging when indicated.' },
  { name: 'Difficult Consultation', desc: 'Acknowledge emotion, avoid defensiveness, manage expectations, involve senior, document contemporaneously, offer second opinion pathway, maintain professionalism throughout, do not discharge in anger.' },
  { name: 'Anticoagulated Bleeding / Reversal', desc: 'Warfarin: vitamin K + PCC (or FFP if PCC unavailable). DOACs: idarucizumab (dabigatran), andexanet alfa (factor Xa inhibitors). Antiplatelets: platelet transfusion only if life-threatening bleeding + neurosurgery. Tranexamic acid as adjunct.' },
  { name: 'Pain and Opioid Safety', desc: 'Multimodal analgesia: paracetamol, NSAIDs, regional blocks, ketamine. Opioids: titrated IV morphine/fentanyl, monitoring for respiratory depression, naloxone availability, consider opioid stewardship and dependence risk.' },
  { name: 'End-of-Life Care in ED', desc: 'Recognise dying patient, involve family early, symptom control (pain, dyspnoea, agitation, secretions), respect advance care directives and treatment escalation plans, spiritual/cultural needs, discuss with palliative care team, do not escalate futile interventions.' },
];

export default function Tier3Page() {
  return (
    <InternalPage
      title="Tier 3 — Examiner Traps, Communication, Procedures & Disposition"
      subtitle="The examiner tests judgment, safety, communication, ethics, and systems thinking."
      introText="These 15 topics separate candidates who know medicine from those who think like safe emergency physicians. The examiner is testing your judgment under uncertainty, your communication with patients and teams, and your ability to navigate complex ethical and system-level challenges. الممتحن لا يختبر معلوماتك فقط؛ يختبر حكمك السريري، كيف تتحدث مع المريض الصعب، وكيف تحمي نفسك والمريض من الأخطاء."
      backHref="/emergency-oral-exam-mastery"
      backLabel="Oral Exam Mastery"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {topics.map((topic, idx) => (
          <GlassCard key={topic.name} className="flex flex-col">
            <div className="flex items-start gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-500/15 text-xs font-black text-amber-300">
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
