import { InternalPage, GlassCard } from '@/components/InternalPage';
import {
  Wind, AlertTriangle, CheckCircle, Brain, ClipboardList,
  Activity, Eye, Phone,
} from 'lucide-react';

const whyAirwayMatters = [
  'Airway management is one of the most time-critical skills in emergency medicine. A compromised airway can lead to irreversible brain injury or death within minutes.',
  'As an intern, your role is not to perform advanced airway procedures independently — it is to recognise an at-risk airway early, call for help immediately, and provide basic support until the airway team arrives.',
  'The safest intern is the one who knows when to escalate, not the one who tries to manage a difficult airway alone.',
];

const oxygenationVsVentilation = [
  { concept: 'Oxygenation', desc: 'Getting oxygen into the bloodstream. Measured by SpO₂. Can be supported with nasal prongs, simple face mask, non-rebreather mask, or high-flow nasal oxygen. Pre-oxygenation before intubation extends the safe apnoea time.' },
  { concept: 'Ventilation', desc: 'Moving air in and out of the lungs — removing CO₂. Measured by respiratory rate, work of breathing, and CO₂ monitoring (capnography). Supported with bag-valve-mask (BVM) ventilation. Hypoventilation leads to hypercapnia and respiratory acidosis.' },
];

const redFlags = [
  { sign: 'Stridor', meaning: 'Upper airway narrowing — foreign body, infection (croup, epiglottitis), angioedema, anaphylaxis, or tumour. Call senior/anaesthesia immediately.' },
  { sign: 'Drooling / unable to swallow', meaning: 'Often indicates severe upper airway obstruction. Think epiglottitis or retropharyngeal abscess. Do not examine the throat — keep the patient calm and call for urgent anaesthetic help.' },
  { sign: 'Hoarseness / voice change', meaning: 'Laryngeal involvement — oedema, haematoma, or mass. After trauma or thyroid surgery, think expanding haematoma compressing the airway.' },
  { sign: 'Facial or neck swelling / burns', meaning: 'Impending airway compromise. Inhalational burns, angioedema, or expanding neck haematoma can obstruct rapidly. Intubate early — once swelling progresses, intubation becomes much harder.' },
  { sign: 'Tripod position / accessory muscles', meaning: 'The patient is using every muscle to keep the airway open. This is a pre-arrest sign. Do not lay the patient flat. Call for immediate help.' },
  { sign: 'Silent chest / poor air entry', meaning: 'Severe bronchospasm or complete airway obstruction. Wheezing that suddenly stops can mean the airway has closed — this is a peri-arrest situation.' },
  { sign: 'GCS ≤ 8', meaning: 'Loss of airway protective reflexes. The patient cannot protect their own airway and is at risk of aspiration and obstruction. Urgent airway assessment and likely intubation needed.' },
  { sign: 'Facial or neck trauma', meaning: 'Distorted anatomy, blood in the airway, expanding haematoma. Assume a difficult airway until proven otherwise. Call for the most experienced help available.' },
];

const equipmentRecognition = [
  { item: 'Bag-Valve-Mask (BVM)', desc: 'The most important basic airway tool. Used for oxygenation and ventilation. Requires a good mask seal and proper technique — practice on a manikin. Two-person BVM technique gives a better seal.' },
  { item: 'Oropharyngeal Airway (OPA / Guedel)', desc: 'A curved plastic device inserted into the mouth to lift the tongue off the posterior pharynx. Used in unconscious patients (no gag reflex). Sized from the angle of the jaw to the corner of the mouth.' },
  { item: 'Nasopharyngeal Airway (NPA)', desc: 'A soft tube inserted through the nostril into the nasopharynx. Can be used in semi-conscious patients who still have a gag reflex. Contraindicated in suspected base-of-skull fracture.' },
  { item: 'Supraglottic Airway (LMA / i-gel)', desc: 'A device that sits above the glottis and provides a conduit for ventilation. Often used as a rescue device when BVM ventilation or intubation fails. Interns should recognise these but will not be expected to place them independently.' },
  { item: 'Endotracheal Tube (ETT)', desc: 'The definitive airway — a cuffed tube placed through the vocal cords into the trachea. Placement requires training and supervision. Interns prepare equipment and assist, not intubate independently.' },
  { item: 'Suction (Yankauer)', desc: 'Essential for clearing secretions, blood, or vomit from the airway. Always have suction ready and working before any airway procedure. A blocked view makes intubation impossible.' },
];

const positioningConcepts = [
  'Position the patient to optimise airway patency before help arrives. For a spontaneously breathing patient, sit them upright unless contraindicated. For an unconscious patient, use a jaw thrust or chin lift to open the airway.',
  'Pre-oxygenation: apply high-flow oxygen via a non-rebreather mask or BVM before any sedation or intubation attempt. This fills the functional residual capacity with oxygen and extends the safe apnoea time — the time a patient can go without breathing before desaturating.',
  'The "sniffing position" — neck flexed and head extended — aligns the oral, pharyngeal, and laryngeal axes for optimal intubation view. Interns can help by positioning the patient correctly before the intubator arrives.',
  'Ramping obese patients: place towels or blankets under the shoulders and head so the external auditory meatus is level with the sternal notch. This improves the view during laryngoscopy.',
];

const screeningTools = [
  {
    acronym: 'LEMON',
    title: 'Difficult Laryngoscopy',
    desc: 'Look externally (facial trauma, large tongue, short neck) — Evaluate 3-3-2 rule (3 fingers mouth opening, 3 fingers hyoid-to-chin, 2 fingers thyroid-to-floor-of-mouth) — Mallampati class III or IV — Obstruction / Obesity — Neck mobility (limited cervical spine movement).',
  },
  {
    acronym: 'MOANS',
    title: 'Difficult BVM Ventilation',
    desc: 'Mask seal (beard, facial hair, distorted face) — Obstruction / Obesity — Age > 55 — No teeth (edentulous) — Stiff lungs (bronchospasm, COPD, pulmonary oedema). If multiple factors are present, have a backup plan ready.',
  },
  {
    acronym: 'RODS',
    title: 'Difficult Supraglottic Airway',
    desc: 'Restricted mouth opening — Obstruction (upper or lower airway) — Distorted or Disrupted airway — Stiff lungs or cervical spine. A supraglottic device may not seat correctly if these are present.',
  },
  {
    acronym: 'SHORT',
    title: 'Difficult Cricothyroidotomy',
    desc: 'Surgery or Scarring of the neck — Haematoma / Haemorrhage — Obesity — Radiation history — Trauma / Tumour. These factors make the surgical airway technically difficult. Early ENT or surgical backup is critical.',
  },
];

const internRoleDuringAirway = [
  'Recognise the deteriorating airway early — do not wait for desaturation or bradycardia. Call the senior and the airway team as soon as you are concerned.',
  'Apply high-flow oxygen and prepare basic airway equipment: suction on and working, BVM connected to oxygen, OPAs and NPAs available, monitoring attached (SpO₂, ECG, NIBP).',
  'Position the patient optimally — head-up if spontaneously breathing, jaw thrust or chin lift if unconscious.',
  'Prepare for the arrival of the airway team: clear space around the head of the bed, ensure good lighting, and have the intubation equipment trolley ready if available.',
  'During the procedure: your role may include applying cricoid pressure if asked, handing equipment, or documenting. Follow instructions clearly and use closed-loop communication.',
  'After the airway is secured: confirm tube placement (listen for bilateral breath sounds, watch for chest rise, check ETCO₂ if capnography is available), secure the tube, and document the procedure.',
];

const documentationItems = [
  'Indication for airway intervention — why was the decision made?',
  'Airway assessment findings — any predictors of difficulty (LEMON, MOANS).',
  'Method of pre-oxygenation and duration.',
  'Operator(s) — name and role of the person who intubated, and any assistants.',
  'Equipment used — blade type and size, ETT size, use of bougie or stylet, use of video laryngoscopy.',
  'Number of attempts — and any difficulties encountered.',
  'Confirmation of placement — bilateral breath sounds, chest rise, ETCO₂ waveform or reading.',
  'ETT depth at the lips or teeth — and method of securing the tube.',
  'Post-intubation vital signs and plan for ongoing sedation and ventilation.',
  'Senior name and time of procedure.',
];

const examTraps = [
  { title: 'Not recognising the at-risk airway early', desc: 'Stridor, voice change, drooling, or tripod positioning are all pre-arrest signs. JMC exams expect you to call for help immediately — not after attempting management alone.' },
  { title: 'Delaying airway intervention', desc: 'Waiting too long in a deteriorating patient. A patient who is tiring, has rising CO₂, or dropping GCS needs an airway now — not in 30 minutes.' },
  { title: 'Not checking for difficult airway predictors', desc: 'Missing a difficult airway before induction leads to a "cannot intubate, cannot ventilate" situation. Always assess LEMON and MOANS before any airway procedure.' },
  { title: 'Forgetting pre-oxygenation', desc: 'Adequate pre-oxygenation extends the safe apnoea time. Skipping this step is a common exam trap and a real clinical error.' },
  { title: 'Not having a backup plan', desc: 'Every airway plan must include a Plan B (supraglottic airway), Plan C (bag-valve-mask ventilation), and Plan D (surgical airway). Exams frequently test what you do when Plan A fails.' },
  { title: 'Removing oxygen to examine the throat', desc: 'In suspected epiglottitis or upper airway obstruction, do not examine the throat or distress the child. Keep them calm with a parent, maintain oxygenation, and call for urgent anaesthetic help.' },
];

const checklistItems = [
  'Is the patient\'s airway at risk? If yes, call for help now.',
  'Is oxygen being delivered at the highest available concentration?',
  'Is suction on and working?',
  'Is BVM connected to oxygen and ready?',
  'Are basic adjuncts available — OPA and NPA?',
  'Is monitoring attached — SpO₂, ECG, NIBP?',
  'Is the patient optimally positioned?',
  'Have I assessed for difficult airway predictors?',
  'Is the intubation trolley / equipment ready?',
  'Do I know who to call if the airway fails?',
];

export default function AirwayBasicsPage() {
  return (
    <InternalPage
      title="Airway Basics"
      subtitle="أساسيات مجرى الهواء"
      introText="A practical guide for interns: recognising the at-risk airway, understanding basic equipment and concepts, calling for help early, and assisting safely during airway emergencies. This is educational guidance — all airway procedures must be performed under direct senior supervision."
      backHref="/interns"
      backLabel="Intern Doctors Path"
    >
      {/* ── Disclaimer ── */}
      <div className="mb-8 flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-slate-500/20 bg-slate-500/5 px-4 py-2 text-xs font-bold text-slate-400 backdrop-blur-md">
          General educational framework. Always follow your hospital policy and senior instructions.
        </span>
      </div>

      {/* ── 1. Why Airway Matters in the ED ── */}
      <section className="mb-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/15 text-red-300">
            <AlertTriangle size={19} />
          </div>
          <h2 className="text-lg font-black text-white">Why Airway Matters in the ED</h2>
        </div>
        <GlassCard>
          <ul className="space-y-2.5 text-sm leading-7 text-slate-300">
            {whyAirwayMatters.map((item, i) => (
              <li key={i} className="flex gap-3">
                <CheckCircle size={15} className="mt-1.5 shrink-0 text-emerald-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </section>

      {/* ── 2. Oxygenation vs Ventilation ── */}
      <section className="mb-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/15 text-sky-300">
            <Activity size={19} />
          </div>
          <h2 className="text-lg font-black text-white">Oxygenation vs Ventilation</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {oxygenationVsVentilation.map((item) => (
            <GlassCard key={item.concept}>
              <h3 className="text-sm font-black text-cyan-300">{item.concept}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-400">{item.desc}</p>
            </GlassCard>
          ))}
        </div>
        <div className="mt-4 rounded-xl border border-amber-500/15 bg-amber-500/5 px-4 py-3 text-sm font-bold leading-7 text-amber-300">
          الأكسجة تعني إيصال الأكسجين للدم. التهوية تعني إخراج ثاني أكسيد الكربون. كلاهما ضروري — ومريضك قد يحتاج الدعم في أحدهما دون الآخر.
        </div>
      </section>

      {/* ── 3. Airway Red Flags ── */}
      <section className="mb-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/15 text-red-300">
            <Eye size={19} />
          </div>
          <h2 className="text-lg font-black text-white">Airway Red Flags — Call Senior Immediately</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {redFlags.map((item) => (
            <GlassCard key={item.sign}>
              <h3 className="text-sm font-black text-red-300">{item.sign}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-400">{item.meaning}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* ── 4. Basic Airway Equipment ── */}
      <section className="mb-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-300">
            <ClipboardList size={19} />
          </div>
          <h2 className="text-lg font-black text-white">Basic Airway Equipment — Know What You Are Looking At</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {equipmentRecognition.map((item) => (
            <GlassCard key={item.item}>
              <h3 className="text-sm font-black text-white">{item.item}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-400">{item.desc}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* ── 5. Positioning and Pre-Oxygenation Concepts ── */}
      <section className="mb-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300">
            <Wind size={19} />
          </div>
          <h2 className="text-lg font-black text-white">Positioning and Pre-Oxygenation Concepts</h2>
        </div>
        <GlassCard>
          <ul className="space-y-2.5 text-sm leading-7 text-slate-300">
            {positioningConcepts.map((item, i) => (
              <li key={i} className="flex gap-3">
                <CheckCircle size={15} className="mt-1.5 shrink-0 text-emerald-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </section>

      {/* ── 6. Airway Screening Tools — LEMON / MOANS / RODS / SHORT ── */}
      <section className="mb-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
            <Brain size={19} />
          </div>
          <h2 className="text-lg font-black text-white">Airway Screening Tools</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {screeningTools.map((tool) => (
            <GlassCard key={tool.acronym}>
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-500/20 text-xs font-black text-cyan-300">
                  {tool.acronym.charAt(0)}
                </span>
                <h3 className="text-sm font-black text-cyan-300">{tool.acronym} — {tool.title}</h3>
              </div>
              <p className="mt-2 text-sm leading-7 text-slate-400">{tool.desc}</p>
            </GlassCard>
          ))}
        </div>
        <div className="mt-4 rounded-xl border border-amber-500/15 bg-amber-500/5 px-4 py-3 text-sm font-bold leading-7 text-amber-300">
          في الامتحان، إذا وُصف مريض بمجرى هوائي صعب ولم تُذكر أدوات التقييم LEMON أو MOANS — فهذا غالباً هو محور السؤال.
        </div>
      </section>

      {/* ── 7. What the Intern Should Do During an Airway Call ── */}
      <section className="mb-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300">
            <Phone size={19} />
          </div>
          <h2 className="text-lg font-black text-white">What the Intern Should Do During an Airway Call</h2>
        </div>
        <GlassCard>
          <ul className="space-y-2.5 text-sm leading-7 text-slate-300">
            {internRoleDuringAirway.map((item, i) => (
              <li key={i} className="flex gap-3">
                <CheckCircle size={15} className="mt-1.5 shrink-0 text-emerald-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </section>

      {/* ── 8. Documentation and Handover After Airway Intervention ── */}
      <section className="mb-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500/15 text-rose-300">
            <ClipboardList size={19} />
          </div>
          <h2 className="text-lg font-black text-white">Documentation and Handover After Airway Intervention</h2>
        </div>
        <GlassCard>
          <ul className="space-y-2 text-sm leading-7 text-slate-300">
            {documentationItems.map((item, i) => (
              <li key={i} className="flex gap-3">
                <CheckCircle size={15} className="mt-1.5 shrink-0 text-emerald-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
        <div className="mt-4 rounded-xl border border-amber-500/15 bg-amber-500/5 px-4 py-3 text-sm font-bold leading-7 text-amber-300">
          توثيق إجراء مجرى الهواء يحمي المريض ويحمي الفريق. لا تنس كتابة اسم المشرف ووقت الإجراء.
        </div>
      </section>

      {/* ── 9. JMC / Exam Traps ── */}
      <section className="mb-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/15 text-purple-300">
            <Brain size={19} />
          </div>
          <h2 className="text-lg font-black text-white">JMC / Exam Traps</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {examTraps.map((trap) => (
            <GlassCard key={trap.title}>
              <h3 className="text-sm font-black text-white">{trap.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-400">{trap.desc}</p>
            </GlassCard>
          ))}
        </div>
        <div className="mt-4 rounded-xl border border-red-500/15 bg-red-500/5 px-4 py-3 text-sm font-bold leading-7 text-red-300">
          In the exam, the intern who calls for help early, pre-oxygenates properly, and checks for difficult airway predictors is the intern who gets the mark.
        </div>
      </section>

      {/* ── 10. Quick Airway Checklist ── */}
      <section className="mb-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/15 text-amber-300">
            <CheckCircle size={19} />
          </div>
          <h2 className="text-lg font-black text-white">Quick Airway Checklist</h2>
        </div>
        <GlassCard>
          <ul className="space-y-2.5 text-sm leading-7 text-slate-300">
            {checklistItems.map((item, i) => (
              <li key={i} className="flex gap-3">
                <CheckCircle size={15} className="mt-1.5 shrink-0 text-emerald-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </section>
    </InternalPage>
  );
}
