export type RedFlagPresentation = {
  id: string;
  presentation: string;
  chiefComplaint: string;
  arabicCore: string;
  redFlags: string[];
  mustNotMiss: string[];
  ddxBySystem: { system: string; diagnoses: string[] }[];
  keyQuestions: string[];
  focusedExam: string[];
  initialTests: string[];
  firstEdAction: string;
  disposition: string;
  commonTrap: string;
  mcq: { question: string; options: string[]; answer: string; explanation: string; arabicTakeaway: string };
};

export const redFlagsDdx: RedFlagPresentation[] = [
  {
    id: 'chest-pain',
    presentation: 'Chest Pain',
    chiefComplaint: 'Pain, pressure, burning, tightness, or discomfort from jaw to epigastrium.',
    arabicCore: 'أي ألم صدر في الطوارئ لا نبدأ بتفسيره كحموضة أو شد عضلي قبل أن نستبعد الأشياء التي تقتل بسرعة: جلطة قلب، تسلخ أبهر، جلطة رئة، استرواح ضاغط، أو تمزق مريء.',
    redFlags: ['Hypotension or shock', 'Syncope', 'Diaphoresis', 'New ECG changes', 'Tearing pain to back', 'Hypoxia', 'Unequal pulses', 'Pain with neurologic deficit'],
    mustNotMiss: ['ACS/STEMI', 'Aortic dissection', 'Pulmonary embolism', 'Tension pneumothorax', 'Esophageal rupture', 'Pericardial tamponade'],
    ddxBySystem: [
      { system: 'Cardiac', diagnoses: ['ACS', 'pericarditis', 'myocarditis', 'tamponade'] },
      { system: 'Vascular', diagnoses: ['aortic dissection', 'pulmonary embolism'] },
      { system: 'Pulmonary', diagnoses: ['pneumothorax', 'pneumonia', 'pleurisy'] },
      { system: 'GI/MSK', diagnoses: ['esophageal rupture/reflux', 'costochondritis'] },
    ],
    keyQuestions: ['Exertional or at rest?', 'Radiation?', 'Syncope?', 'Back tearing pain?', 'PE risk factors?', 'Cocaine use?', 'Anticoagulant use?'],
    focusedExam: ['Vitals and perfusion', 'Pulse symmetry', 'Heart sounds', 'Lung sounds', 'JVP', 'Leg swelling', 'Neurologic screen'],
    initialTests: ['ECG within 10 minutes', 'Troponin pathway', 'CXR', 'Bedside echo if unstable', 'D-dimer/CTPA if PE pathway appropriate', 'CTA aorta if dissection suspected'],
    firstEdAction: 'If unstable: ABCs, monitor, IV access, ECG, treat life threat immediately. Do not delay stabilization for full workup.',
    disposition: 'High-risk chest pain generally needs monitored bed, observation, cardiology/vascular consult, or ICU depending on cause.',
    commonTrap: 'Normal first troponin does not exclude early ACS; a normal CXR does not exclude dissection or PE.',
    mcq: {
      question: 'A patient with chest pain radiating to the back has hypotension and unequal arm pulses. What diagnosis must be prioritized?',
      options: ['GERD', 'Aortic dissection', 'Costochondritis', 'Panic attack'],
      answer: 'Aortic dissection',
      explanation: 'Tearing chest/back pain with pulse or blood pressure differential is a classic red-flag pattern for aortic dissection.',
      arabicTakeaway: 'ألم صدر مع ألم ظهر + فرق بالنبض أو الضغط = فكّر بتسلخ الأبهر قبل الأسباب البسيطة.',
    },
  },
  {
    id: 'shortness-of-breath',
    presentation: 'Shortness of Breath',
    chiefComplaint: 'Dyspnea, respiratory distress, hypoxia, inability to speak, or increased work of breathing.',
    arabicCore: 'ضيق النفس لا يعني فقط ربو أو التهاب. أولًا اسأل: هل المريض ينهار؟ هل يحتاج أكسجين/تهوية؟ ثم فكر بالأسباب القاتلة مثل PE، pneumothorax، pulmonary edema، severe asthma/COPD، sepsis، أو airway obstruction.',
    redFlags: ['SpO₂ persistently low', 'Silent chest', 'Exhaustion', 'Cyanosis', 'Altered mental status', 'Hypotension', 'Stridor', 'Unilateral absent breath sounds'],
    mustNotMiss: ['Tension pneumothorax', 'Pulmonary embolism', 'Acute pulmonary edema', 'Severe asthma/COPD with fatigue', 'Sepsis', 'Upper airway obstruction', 'Anaphylaxis'],
    ddxBySystem: [
      { system: 'Airway', diagnoses: ['anaphylaxis', 'foreign body', 'angioedema'] },
      { system: 'Breathing', diagnoses: ['asthma/COPD', 'pneumothorax', 'pneumonia', 'ARDS'] },
      { system: 'Circulation', diagnoses: ['heart failure', 'PE', 'shock'] },
      { system: 'Metabolic', diagnoses: ['DKA/Kussmaul breathing', 'toxin', 'acidosis'] },
    ],
    keyQuestions: ['Sudden or gradual?', 'Chest pain?', 'Wheeze?', 'Fever?', 'Leg swelling?', 'Allergy exposure?', 'Intubation history?'],
    focusedExam: ['Work of breathing', 'Ability to speak', 'Breath sounds symmetry', 'Wheeze vs crackles', 'JVP/edema', 'Skin rash/swelling'],
    initialTests: ['Pulse oximetry', 'ABG/VBG if severe', 'CXR', 'ECG', 'Bedside lung/cardiac ultrasound', 'Labs guided by differential'],
    firstEdAction: 'Oxygenate first. If failing oxygenation/ventilation or mental status worsens, escalate early to NIV or intubation depending on cause.',
    disposition: 'Severe respiratory distress, NIV, intubation, shock, or persistent hypoxia require monitored/ICU-level care.',
    commonTrap: 'A wheezing patient may have pulmonary edema, PE, anaphylaxis, or foreign body—not only asthma.',
    mcq: {
      question: 'A dyspneic patient becomes drowsy with a silent chest after prolonged wheezing. What is the safest next step?',
      options: ['Discharge with inhaler', 'Oral antibiotics only', 'Prepare for advanced airway and ventilatory support', 'Wait for CXR before treatment'],
      answer: 'Prepare for advanced airway and ventilatory support',
      explanation: 'Silent chest plus altered mental status suggests impending respiratory failure.',
      arabicTakeaway: 'الصدر الصامت بعد صفير شديد علامة خطيرة؛ المريض تعب وقد يحتاج تهوية بسرعة.',
    },
  },
  {
    id: 'headache',
    presentation: 'Headache',
    chiefComplaint: 'Head pain with or without neurologic, infectious, vascular, ocular, or trauma features.',
    arabicCore: 'معظم الصداع بسيط، لكن في الطوارئ هدفك ألا تفوّت الصداع القاتل: نزف تحت العنكبوتية، التهاب سحايا، ارتفاع ضغط داخل الجمجمة، stroke، temporal arteritis، أو acute angle closure glaucoma.',
    redFlags: ['Thunderclap onset', 'Worst headache of life', 'Fever/neck stiffness', 'New neurologic deficit', 'Papilledema', 'Pregnancy/postpartum', 'Cancer/immunosuppression', 'Age > 50 new headache'],
    mustNotMiss: ['Subarachnoid hemorrhage', 'Meningitis/encephalitis', 'Intracranial mass/raised ICP', 'Cerebral venous thrombosis', 'Stroke', 'Temporal arteritis', 'Acute glaucoma'],
    ddxBySystem: [
      { system: 'Vascular', diagnoses: ['SAH', 'stroke', 'CVST', 'dissection'] },
      { system: 'Infectious', diagnoses: ['meningitis', 'encephalitis', 'sinusitis complication'] },
      { system: 'Pressure/Mass', diagnoses: ['tumor', 'hydrocephalus', 'IIH'] },
      { system: 'Primary/Ocular', diagnoses: ['migraine', 'cluster', 'glaucoma'] },
    ],
    keyQuestions: ['Time to peak?', 'Fever?', 'Neck stiffness?', 'Neuro symptoms?', 'Pregnancy?', 'Anticoagulation?', 'Trauma?', 'Visual symptoms?'],
    focusedExam: ['Neuro exam', 'Meningism', 'Fundoscopy if possible', 'Temporal artery tenderness', 'Eye redness/pupil', 'Vitals'],
    initialTests: ['CT head if red flags', 'LP when indicated after imaging pathway', 'ESR/CRP for temporal arteritis suspicion', 'Pregnancy test', 'CTA/CTV when vascular cause suspected'],
    firstEdAction: 'Treat instability and neurologic emergency first. Analgesia is appropriate, but do not let pain relief stop the dangerous workup when red flags exist.',
    disposition: 'Red flags, abnormal neuro exam, suspected infection/SAH/stroke, or raised ICP require urgent specialist pathway.',
    commonTrap: 'Migraine history does not protect the patient from SAH or stroke; compare with usual headache pattern.',
    mcq: {
      question: 'A sudden thunderclap headache reaches maximal intensity within seconds. What must be excluded?',
      options: ['Tension headache', 'Subarachnoid hemorrhage', 'Sinusitis', 'Dehydration'],
      answer: 'Subarachnoid hemorrhage',
      explanation: 'Thunderclap onset is a red flag for SAH and other vascular emergencies.',
      arabicTakeaway: 'صداع انفجاري مفاجئ = لا تعتبره migraine قبل استبعاد النزف.',
    },
  },
  {
    id: 'abdominal-pain',
    presentation: 'Abdominal Pain',
    chiefComplaint: 'Acute or progressive abdominal pain with GI, vascular, urinary, gynecologic, or systemic causes.',
    arabicCore: 'ألم البطن خطير لأنه يخدع. قبل ما تفكر بقولون أو gastritis، استبعد: AAA، ectopic pregnancy، mesenteric ischemia، perforation، appendicitis، sepsis، DKA، torsion، وGI bleed.',
    redFlags: ['Hypotension', 'Peritonitis', 'Severe pain out of proportion', 'Syncope', 'Pregnancy', 'Pulsatile mass', 'GI bleeding', 'Fever with toxicity'],
    mustNotMiss: ['AAA rupture', 'Ectopic pregnancy', 'Mesenteric ischemia', 'Perforated viscus', 'Appendicitis', 'Ovarian/testicular torsion', 'Sepsis', 'DKA'],
    ddxBySystem: [
      { system: 'Vascular', diagnoses: ['AAA', 'mesenteric ischemia'] },
      { system: 'Surgical GI', diagnoses: ['appendicitis', 'cholecystitis', 'perforation', 'obstruction'] },
      { system: 'GU/Gyn', diagnoses: ['ectopic pregnancy', 'torsion', 'renal colic', 'PID'] },
      { system: 'Medical', diagnoses: ['DKA', 'MI referred pain', 'sepsis'] },
    ],
    keyQuestions: ['Pregnancy possibility?', 'Migration?', 'Pain out of proportion?', 'Bleeding?', 'Prior surgery?', 'Anticoagulants?', 'Vascular disease?'],
    focusedExam: ['Vitals', 'Peritonitis signs', 'Pulsatile mass', 'Pelvic/testicular exam when indicated', 'Hydration and perfusion'],
    initialTests: ['Pregnancy test for reproductive-age patients', 'CBC/CMP/lactate as indicated', 'Urinalysis', 'ECG in older/high-risk', 'Ultrasound/CT based on risk'],
    firstEdAction: 'Unstable abdominal pain needs resuscitation and early surgical/OB/vascular involvement while diagnostics are expedited.',
    disposition: 'Peritonitis, vascular concern, ectopic, torsion, sepsis, or uncontrolled pain/vomiting generally need admission/urgent specialty care.',
    commonTrap: 'Do not give repeated analgesia and discharge without reconsidering vascular, pregnancy, or surgical red flags.',
    mcq: {
      question: 'Severe abdominal pain out of proportion to examination in an elderly patient with atrial fibrillation suggests what diagnosis?',
      options: ['Viral gastroenteritis', 'Mesenteric ischemia', 'Constipation', 'Simple dyspepsia'],
      answer: 'Mesenteric ischemia',
      explanation: 'Pain out of proportion plus embolic risk is classic for mesenteric ischemia.',
      arabicTakeaway: 'ألم شديد جدًا والفحص خفيف خصوصًا مع AF = فكر بنقص تروية الأمعاء.',
    },
  },
];
