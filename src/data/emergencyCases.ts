export type EmergencyCase = {
  id: string;
  title: string;
  category: string;
  chiefComplaint: string;
  vitals: string[];
  history: string;
  exam: string[];
  data: string[];
  firstQuestion: string;
  answer: string;
  reasoning: string;
  management: string[];
  disposition: string;
  arabicReasoning: string;
  traps: string[];
};

export const emergencyCases: EmergencyCase[] = [
  {
    id: 'case-septic-shock',
    title: 'Fever, hypotension, and confusion',
    category: 'Critical Care',
    chiefComplaint: 'A 68-year-old patient arrives with fever, confusion, and generalized weakness.',
    vitals: ['BP 82/46', 'HR 128', 'RR 30', 'Temp 39.2°C', 'SpO₂ 92% on room air'],
    history: 'Diabetes, dysuria for 3 days, reduced oral intake, new altered mental status.',
    exam: ['Confused and ill-looking', 'Cool extremities', 'Suprapubic tenderness', 'Delayed capillary refill'],
    data: ['Lactate 5.1 mmol/L', 'Creatinine elevated', 'Urinalysis suggests infection'],
    firstQuestion: 'What is the safest first management priority?',
    answer: 'Recognize septic shock, start ABCs, oxygen, IV access, cultures when feasible, broad-spectrum antibiotics early, and fluid resuscitation with reassessment.',
    reasoning: 'The patient has infection plus shock physiology and organ dysfunction. Treat circulation and infection immediately rather than waiting for full diagnostic certainty.',
    management: ['Airway/oxygen and monitor', 'Two large-bore IV lines', 'Lactate and blood cultures if this does not delay antibiotics', 'Broad-spectrum antibiotics as early as possible', 'Fluid bolus with frequent reassessment', 'Norepinephrine if hypotension persists after fluids or if fluid overload risk is high'],
    disposition: 'ICU / resuscitation area with sepsis pathway activation.',
    arabicReasoning: 'المريض ليس فقط عنده التهاب؛ عنده صدمة. الفكرة أن الضغط منخفض والوعي تغير، لذلك لا ننتظر كل النتائج. نبدأ دعم الدورة الدموية ومضاد حيوي مبكر ونراقب الاستجابة.',
    traps: ['Waiting for culture results before antibiotics', 'Giving fluids without reassessment', 'Ignoring persistent hypotension after fluids'],
  },
  {
    id: 'case-hyperkalemia-ecg',
    title: 'Weakness with wide QRS ECG',
    category: 'ECG & Electrolytes',
    chiefComplaint: 'A dialysis patient presents with weakness and palpitations.',
    vitals: ['BP 96/60', 'HR 44', 'RR 20', 'SpO₂ 97%'],
    history: 'Missed dialysis session, takes ACE inhibitor, no chest pain.',
    exam: ['Bradycardic', 'No focal neurologic deficit', 'Mild volume overload'],
    data: ['ECG: peaked T waves and QRS widening', 'Potassium pending'],
    firstQuestion: 'What should be done before waiting for lab confirmation?',
    answer: 'Give IV calcium immediately for membrane stabilization, then shift potassium intracellularly and remove potassium.',
    reasoning: 'ECG changes in suspected hyperkalemia are a cardiac arrest warning. Calcium protects the myocardium; insulin/dextrose and beta-agonists shift potassium; dialysis/removal treats the body burden.',
    management: ['IV calcium for ECG changes', 'Insulin with dextrose unless already hyperglycemic per protocol', 'Nebulized beta-agonist as adjunct', 'Consider bicarbonate if severe acidosis', 'Urgent dialysis or potassium removal strategy'],
    disposition: 'Resuscitation area / ICU or dialysis-capable unit.',
    arabicReasoning: 'إذا التخطيط يقول فرط بوتاسيوم، لا تنتظر الرقم. الكالسيوم يحمي القلب بسرعة، وبعدها نبدأ نقل البوتاسيوم داخل الخلايا ثم التخلص منه.',
    traps: ['Waiting for potassium result despite classic ECG', 'Treating only with insulin/dextrose and forgetting calcium', 'No repeat ECG after treatment'],
  },
  {
    id: 'case-copd-niv',
    title: 'COPD exacerbation with CO₂ retention',
    category: 'Airway & Ventilation',
    chiefComplaint: 'A 62-year-old smoker arrives with severe dyspnea and drowsiness.',
    vitals: ['BP 148/88', 'HR 118', 'RR 32', 'SpO₂ 84% on room air'],
    history: 'Known COPD, increased sputum, uses accessory muscles.',
    exam: ['Wheeze with poor air entry', 'Drowsy but protecting airway', 'No shock'],
    data: ['ABG: pH 7.25, PaCO₂ 72 mmHg', 'CXR: hyperinflation, no pneumothorax'],
    firstQuestion: 'What oxygen/ventilation strategy is most appropriate if no contraindication?',
    answer: 'Controlled oxygen plus NIV/BiPAP with close reassessment, bronchodilators, steroids, and antibiotics when indicated.',
    reasoning: 'COPD with acute hypercapnic respiratory failure often improves with NIV if the patient can protect the airway and cooperate. Avoid uncontrolled high oxygen and monitor for failure.',
    management: ['Target controlled oxygen saturation per protocol', 'Start NIV/BiPAP if appropriate', 'Nebulized bronchodilators', 'Systemic corticosteroid', 'Antibiotics if infectious features', 'Prepare for intubation if NIV fails'],
    disposition: 'High-acuity monitored bed, ICU if severe acidosis/fatigue/NIV failure.',
    arabicReasoning: 'المشكلة هنا ليست نقص أكسجين فقط؛ يوجد احتباس CO₂. الـ BiPAP يساعد المريض يطلع ثاني أكسيد الكربون ويخفف تعب التنفس إذا كان مناسبًا.',
    traps: ['Giving high-flow oxygen without target', 'Delaying intubation when NIV fails', 'Using NIV when airway protection is lost'],
  },
  {
    id: 'case-chest-pain-dissection',
    title: 'Tearing chest pain radiating to the back',
    category: 'Red Flags & D.Dx',
    chiefComplaint: 'A 55-year-old patient has sudden severe tearing chest pain radiating to the back.',
    vitals: ['BP 190/110 right arm', 'HR 104', 'RR 22', 'SpO₂ 98%'],
    history: 'Hypertension, pain maximal at onset, transient neurologic symptoms.',
    exam: ['Unequal pulses', 'New diastolic murmur suspected', 'No reproducible chest wall tenderness'],
    data: ['ECG nonspecific', 'CXR may show widened mediastinum'],
    firstQuestion: 'Which must-not-miss diagnosis should be prioritized?',
    answer: 'Aortic dissection must be considered and managed urgently with pain control, impulse control, and definitive imaging/surgical pathway when stable enough.',
    reasoning: 'Sudden maximal tearing pain, pulse deficit, neurologic symptoms, and severe hypertension are red flags. Do not treat as simple gastritis or musculoskeletal pain.',
    management: ['High-acuity monitoring', 'Pain control', 'Blood pressure/heart rate control per protocol', 'CTA aorta if stable', 'Urgent vascular/cardiothoracic consultation'],
    disposition: 'Resuscitation area and surgical pathway if confirmed/suspected high risk.',
    arabicReasoning: 'ألم الصدر المفاجئ القوي الممتد للظهر مع فرق نبض أو أعراض عصبية = فكر بتسلخ الأبهر قبل الأسباب البسيطة. الخطأ أن تطمئن لأن ECG غير واضح.',
    traps: ['Ruling out dissection because ECG is not STEMI', 'Giving anticoagulation before considering dissection when story fits', 'Ignoring pulse deficit'],
  },
  {
    id: 'case-peds-seizure',
    title: 'Child with ongoing seizure',
    category: 'Pediatrics',
    chiefComplaint: 'A 3-year-old child is actively seizing on arrival.',
    vitals: ['Airway at risk', 'HR 150', 'SpO₂ 88%', 'Glucose unknown'],
    history: 'Fever today, seizure lasting 8 minutes before arrival.',
    exam: ['Generalized tonic-clonic activity', 'No IV access yet', 'Hot to touch'],
    data: ['Point-of-care glucose pending'],
    firstQuestion: 'What is the first practical ED approach?',
    answer: 'ABCs, oxygen, check glucose, terminate seizure with appropriate benzodiazepine route, then evaluate cause and prevent recurrence.',
    reasoning: 'In active seizure, immediate stabilization and seizure termination matter more than detailed diagnostic workup. Choose a route that is actually available now.',
    management: ['Position/airway support and oxygen', 'Check bedside glucose and treat if low', 'Benzodiazepine using IV/IN/IM/rectal route per access and protocol', 'Second-line antiseizure medication if persistent', 'Evaluate fever, CNS infection, trauma, toxins, electrolytes'],
    disposition: 'Depends on return to baseline, cause, recurrence risk, and age; admit if complex/prolonged or concerning cause.',
    arabicReasoning: 'في التشنج المستمر لا نضيع الوقت بمحاولة تركيب IV فقط. افتح مجرى الهواء، أعطِ أكسجين، افحص السكر، واستخدم طريق دواء متاح بسرعة لإيقاف التشنج.',
    traps: ['Delaying benzodiazepine while searching for IV access', 'Forgetting glucose', 'No reassessment after first dose'],
  },
];
