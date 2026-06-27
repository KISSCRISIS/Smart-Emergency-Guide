export type BoardRouteId = 'part1' | 'part2' | 'internship';

export type BoardRouteQuestion = {
  id: string;
  route: BoardRouteId;
  topic: string;
  system: string;
  difficulty: 'Basic' | 'Intermediate' | 'Advanced' | 'Board-level';
  questionType: string;
  trapType: string;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
  arabic: string;
  whyWrong: Record<string, string>;
};

export type BoardReviewRoute = {
  id: BoardRouteId;
  title: string;
  arabicTitle: string;
  learner: string;
  introEn: string;
  introAr: string;
  focus: string[];
  sources: string[];
  examStyle: string[];
  questions: BoardRouteQuestion[];
};

const part1Seeds = [
  ['Hyperkalemia ECG', 'ECG & Electrolytes', 'Basic', 'Recall / high-yield fact', 'Which electrolyte abnormality is classically associated with tall peaked T waves on ECG?', 'Hyperkalemia', ['Hypokalemia', 'Hypocalcemia', 'Hyponatremia'], 'Hyperkalemia classically causes tall peaked T waves and can progress to PR prolongation, QRS widening, sine-wave pattern, and cardiac arrest.', 'ارتفاع البوتاسيوم يغير كهرباء القلب. العلامة المهمة مبكرًا هي T waves عالية وحادة، وإذا زاد الخطر يتوسع QRS.'],
  ['Anaphylaxis', 'Allergy & Resuscitation', 'Basic', 'First-line treatment', 'What is the first-line treatment for anaphylaxis?', 'Intramuscular epinephrine', ['IV antihistamine only', 'Nebulized salbutamol only', 'Oral steroid only'], 'IM epinephrine is the life-saving first-line treatment for anaphylaxis; adjuncts must not delay it.', 'في الحساسية الشديدة لا تنتظر. الإبينفرين العضلي هو الدواء المنقذ، والباقي إضافات.'],
  ['Community-acquired pneumonia', 'Respiratory', 'Basic', 'Most common cause', 'What is the most common typical bacterial cause of community-acquired pneumonia in adults?', 'Streptococcus pneumoniae', ['Pseudomonas aeruginosa', 'Mycoplasma tuberculosis', 'Candida albicans'], 'Streptococcus pneumoniae remains the classic high-yield typical bacterial cause of CAP.', 'السؤال يطلب السبب الكلاسيكي الشائع، لذلك نفكر بـ pneumococcus.'],
  ['Vitamin deficiency', 'Basic Sciences', 'Basic', 'Recall / high-yield fact', 'Which vitamin deficiency causes scurvy?', 'Vitamin C deficiency', ['Vitamin A deficiency', 'Vitamin B12 deficiency', 'Vitamin D deficiency'], 'Scurvy results from vitamin C deficiency causing impaired collagen synthesis.', 'نقص فيتامين C يضعف تكوين الكولاجين؛ لذلك تظهر مشاكل اللثة والنزف والالتئام.'],
  ['Gout flare', 'Rheumatology', 'Basic', 'First-line treatment', 'What is a common first-line treatment option for an acute gout flare if not contraindicated?', 'NSAIDs', ['Allopurinol initiation during severe flare only', 'Warfarin', 'Long-term antibiotics'], 'NSAIDs are commonly used for acute gout flares when safe. Avoid starting urate-lowering therapy as the immediate acute-only answer unless specifically indicated.', 'في النوبة الحادة نعالج الالتهاب والألم أولًا، وليس فقط خفض اليوريك أسيد.'],
  ['Bell palsy', 'Neurology', 'Basic', 'Localization', 'A unilateral facial droop involving the forehead suggests which cranial nerve lesion?', 'Facial nerve, cranial nerve VII', ['Oculomotor nerve III', 'Trigeminal nerve V', 'Hypoglossal nerve XII'], 'Peripheral facial nerve palsy involves the forehead, unlike many upper motor neuron lesions.', 'إذا الجبهة داخلة بالضعف فكر بإصابة العصب السابع المحيطية.'],
  ['Nephrotic syndrome', 'Renal', 'Basic', 'Key laboratory feature', 'Which laboratory finding is most characteristic of nephrotic syndrome?', 'Heavy proteinuria', ['Low urinary protein', 'Isolated hematuria only', 'Respiratory alkalosis'], 'Nephrotic syndrome is characterized by heavy proteinuria, hypoalbuminemia, edema, and often hyperlipidemia.', 'الفكرة الأساسية: الكلية تفقد بروتين بكميات كبيرة فيظهر وذمة ونقص ألبومين.'],
  ['Subarachnoid hemorrhage', 'Neurology', 'Intermediate', 'High-yield association', 'Which artery is classically involved in berry aneurysm rupture causing subarachnoid hemorrhage?', 'Anterior communicating artery', ['Femoral artery', 'Inferior mesenteric artery', 'Radial artery'], 'The anterior communicating artery is a classic location for berry aneurysms associated with SAH.', 'السؤال كلاسيكي: صداع انفجاري وSAH يرتبط كثيرًا بـ anterior communicating artery.'],
  ['Acute pancreatitis', 'Gastrointestinal', 'Basic', 'Common cause', 'What is one of the most common causes of acute pancreatitis?', 'Gallstones', ['Migraine', 'Hypothyroidism', 'Otitis media'], 'Gallstones and alcohol are classic common causes of acute pancreatitis.', 'إذا ألم شرسوفي للظهر بعد أكل دهني، فكر بالمرارة والبنكرياس.'],
  ['Aminoglycosides', 'Pharmacology', 'Intermediate', 'Drug adverse effect', 'Which drug class is classically associated with ototoxicity and nephrotoxicity?', 'Aminoglycosides', ['Macrolides only', 'Antihistamines', 'Proton pump inhibitors'], 'Aminoglycosides require monitoring because of nephrotoxicity and ototoxicity risk.', 'احفظها كدواء يحتاج حذر ومراقبة: الكلى والسمع.'],
];

const part2Seeds = [
  ['Aortic dissection', 'Cardiovascular', 'Advanced', 'Most likely diagnosis', 'A patient develops sudden tearing chest pain radiating to the back with pulse deficit. What is the most concerning diagnosis?', 'Aortic dissection', ['GERD', 'Costochondritis', 'Panic attack'], 'Tearing pain to the back plus pulse or neurologic findings is a must-not-miss aortic dissection pattern.', 'ألم صدر ممزق للظهر لا تتعامل معه كألم عضلي قبل استبعاد التشخيص القاتل.'],
  ['Septic shock', 'Critical Care', 'Advanced', 'Next best step', 'A febrile patient is hypotensive with altered mental status and suspected infection. What is the safest immediate priority?', 'Sepsis resuscitation with early antibiotics and hemodynamic support', ['Discharge with oral antibiotics', 'Wait for culture results before any treatment', 'Give only antipyretics and observe at home'], 'Septic shock requires immediate resuscitation, source evaluation, early antibiotics, fluids when appropriate, and vasopressors if hypotension persists.', 'مع ضغط منخفض وتغير وعي وعدوى، لا تنتظر. ابدأ إنعاش وتعامل كصدمة إنتانية.'],
  ['Subarachnoid hemorrhage', 'Neurology', 'Advanced', 'Most likely diagnosis', 'A patient presents with sudden severe thunderclap headache, vomiting, and neck stiffness. What diagnosis must be considered urgently?', 'Subarachnoid hemorrhage', ['Tension headache', 'Sinusitis', 'Benign positional vertigo'], 'Thunderclap headache with meningism is SAH until proven otherwise.', 'أقوى صداع مفاجئ بحياته = لا تطمّن قبل استبعاد النزف.'],
  ['DKA', 'Endocrine', 'Intermediate', 'Scenario recognition', 'A diabetic patient has abdominal pain, Kussmaul breathing, hyperglycemia, ketones, and acidosis. What is the most likely diagnosis?', 'Diabetic ketoacidosis', ['Hyperthyroidism', 'SIADH', 'Acute otitis media'], 'DKA combines hyperglycemia, ketosis, acidosis, dehydration, and compensatory deep breathing.', 'DKA ليست سكر عالي فقط؛ هي حموضة وكيتونات وجفاف وتحتاج سوائل وإنسولين ومراقبة بوتاسيوم.'],
  ['Anaphylaxis', 'Resuscitation', 'Advanced', 'Initial management', 'After a bee sting, a patient has wheeze, urticaria, and hypotension. What is the immediate treatment?', 'Intramuscular epinephrine', ['CT chest first', 'Oral antihistamine only', 'Routine outpatient follow-up'], 'Airway/breathing/circulation involvement after allergen exposure is anaphylaxis; IM epinephrine is first-line.', 'إذا في هبوط ضغط أو صفير بعد التعرض، الإبينفرين أولًا.'],
  ['Pneumothorax', 'Trauma/Respiratory', 'Advanced', 'Unstable patient first action', 'A trauma patient has severe dyspnea, hypotension, tracheal deviation, and absent breath sounds on one side. What is the immediate concern?', 'Tension pneumothorax requiring immediate decompression', ['Simple bronchitis', 'Stable pneumonia', 'Anxiety reaction'], 'Tension pneumothorax is a clinical diagnosis in an unstable patient and should not wait for imaging.', 'هنا لا تنتظر صورة. المريض غير مستقر وعنده علامات tension pneumothorax.'],
  ['Stroke', 'Neurology', 'Intermediate', 'Protocol activation', 'A patient arrives within the treatment window with acute unilateral weakness and speech difficulty. What is the best immediate system action?', 'Activate stroke pathway and urgent brain imaging', ['Give food and observe', 'Delay until outpatient MRI', 'Start antibiotics only'], 'Time-sensitive stroke care requires rapid glucose check, stroke pathway activation, and urgent imaging.', 'في أعراض جلطة حادة الوقت دماغ؛ فعّل المسار ولا تؤخر.'],
  ['Upper GI bleed', 'Gastrointestinal', 'Intermediate', 'Scenario recognition', 'A cirrhotic patient presents with hematemesis and melena. What cause is especially concerning?', 'Esophageal variceal bleeding', ['Appendicitis', 'Migraine', 'Renal colic'], 'Cirrhosis plus hematemesis suggests variceal bleeding, a high-risk emergency.', 'مريض كبد مع قيء دموي = فكر بدوالي مريء ونزف خطير.'],
  ['Opioid intoxication', 'Toxicology', 'Intermediate', 'Toxidrome recognition', 'A patient is found with altered mental status, bradypnea, and pinpoint pupils. What toxidrome is most likely?', 'Opioid toxicity', ['Anticholinergic toxicity', 'Sympathomimetic toxicity', 'Serotonin syndrome'], 'The classic opioid toxidrome is CNS depression, respiratory depression, and miosis.', 'بطء تنفس + حدقات ضيقة + غيبوبة = فكر بالأفيونات وادعم التنفس.'],
  ['Pediatric seizure', 'Pediatrics', 'Intermediate', 'First-line acute management', 'A child is actively seizing for more than five minutes. What is the first-line acute medication class?', 'Benzodiazepine', ['Beta blocker', 'Oral iron', 'Antacid'], 'Prolonged active seizure requires rapid benzodiazepine treatment with airway and glucose assessment.', 'التشنج الطويل لا ينتظر؛ احمِ المجرى التنفسي وأعطِ بنزوديازيبين حسب البروتوكول.'],
];

const internshipSeeds = [
  ['Unresponsive patient', 'Ward/ER Safety', 'Basic', 'First action', 'A patient becomes unresponsive on the ward. What is the first assessment priority?', 'Airway, breathing, and circulation assessment', ['Complete discharge summary first', 'Wait for morning rounds', 'Give oral fluids'], 'ABCDE assessment is the safest first approach for an unresponsive patient.', 'أي مريض فاقد وعي: ابدأ ABC وليس تفاصيل لاحقة.'],
  ['Hypoglycemia', 'Endocrine Emergency', 'Basic', 'Immediate treatment', 'A sweaty confused diabetic patient has glucose of 42 mg/dL. What is the immediate treatment?', 'Give glucose by an appropriate route', ['Give insulin immediately', 'Delay treatment until CT brain', 'Discharge without treatment'], 'Symptomatic hypoglycemia requires immediate glucose while searching for the cause.', 'السكر المنخفض مع أعراض يُعالج فورًا؛ لا تنتظر.'],
  ['STEMI escalation', 'Cardiology', 'Intermediate', 'Escalation', 'A patient with chest pain has ST elevation on ECG. What should the junior doctor do immediately?', 'Escalate urgently for STEMI pathway management', ['Schedule routine clinic follow-up', 'Ignore if pain improved', 'Start only antacid therapy'], 'STEMI requires immediate senior/cardiology pathway activation and reperfusion planning.', 'ST elevation مع ألم صدر = تصعيد فوري ومسار STEMI.'],
  ['Medication allergy', 'Medication Safety', 'Basic', 'Safety action', 'Before prescribing, you notice a documented severe allergy to the planned medication. What is the safest action?', 'Avoid the drug and choose a safe alternative', ['Prescribe it anyway', 'Remove the allergy entry', 'Tell the nurse to decide'], 'Medication allergy checks are a core patient-safety responsibility.', 'وجود حساسية موثقة يعني لا تعطي الدواء وتبحث عن بديل آمن.'],
  ['Capacity', 'Ethics & Safety', 'Intermediate', 'Professional decision', 'A confused patient requests to leave against medical advice. What should be assessed first?', 'Decision-making capacity and immediate clinical risk', ['Force discharge immediately', 'Ignore the request', 'Call security before assessment'], 'Capacity, risk discussion, senior help, and documentation are essential.', 'قبل AMA لازم تعرف هل المريض قادر يقرر وهل يفهم الخطر.'],
  ['Postoperative calf swelling', 'Surgery/ER', 'Intermediate', 'Must-not-miss', 'A postoperative patient has unilateral calf swelling and pain. What should be suspected?', 'Deep vein thrombosis', ['Otitis externa', 'Tension headache', 'Simple gastritis only'], 'Postoperative unilateral leg swelling is DVT until assessed.', 'بعد عملية مع تورم رجل واحدة: لا تطمّن قبل تقييم DVT.'],
  ['No pulse', 'Resuscitation', 'Basic', 'First action', 'A nurse reports a patient has no pulse and is not breathing. What is the next step?', 'Start CPR and call for help', ['Write a routine note first', 'Wait for labs', 'Give oral medication'], 'Cardiac arrest requires immediate CPR and team activation.', 'لا يوجد نبض ولا تنفس = CPR فورًا وطلب مساعدة.'],
  ['Meningococcal concern', 'Pediatrics/Infection', 'Advanced', 'Red flag recognition', 'A child has fever and a non-blanching rash. What must be considered urgently?', 'Meningococcal sepsis', ['Mild acne', 'Simple eczema only', 'Chronic migraine'], 'Fever with non-blanching rash is a dangerous sepsis/meningococcal red flag.', 'حرارة مع طفح لا يختفي بالضغط = علامة خطيرة جدًا.'],
  ['Upper airway obstruction', 'Airway', 'Advanced', 'Urgent concern', 'A patient develops stridor after extubation. What is the urgent concern?', 'Upper airway obstruction', ['Renal colic', 'Stable anemia', 'Routine constipation'], 'Stridor is an upper airway danger sign requiring urgent assessment and escalation.', 'Stridor يعني تضيق بالمجرى التنفسي العلوي؛ لا تنتظر.'],
  ['Warfarin bleeding', 'Medication Safety', 'Intermediate', 'Initial assessment', 'A patient on warfarin develops bleeding. What should be assessed first?', 'Bleeding severity and INR', ['Hair color', 'Visual acuity only', 'Routine outpatient diet'], 'Warfarin bleeding decisions depend on severity, INR, and hemodynamic status.', 'مع وارفارين ونزف: قيّم شدة النزف وINR واستقرار المريض.'],
];

function wrongMap(answer: string, wrongs: string[]) {
  return wrongs.reduce<Record<string, string>>((acc, wrong) => {
    acc[wrong] = `${wrong} is a distractor because it does not address the key emergency clue or immediate safety priority in this stem.`;
    return acc;
  }, {});
}

function buildQuestions(route: BoardRouteId, seeds: any[], count = 100): BoardRouteQuestion[] {
  const modifiers = [
    { suffix: 'Choose the safest answer.', difficulty: 'Basic' },
    { suffix: 'What is the next best step?', difficulty: 'Intermediate' },
    { suffix: 'What is the most dangerous trap?', difficulty: 'Advanced' },
    { suffix: 'Which option best matches board-style emergency reasoning?', difficulty: 'Board-level' },
  ];
  return Array.from({ length: count }, (_, i) => {
    const seed = seeds[i % seeds.length];
    const mod = modifiers[Math.floor(i / seeds.length) % modifiers.length];
    const [topic, system, seedDifficulty, qType, question, answer, wrongs, explanation, arabic] = seed;
    const options = [answer, ...wrongs].sort((a, b) => ((a.length + i) % 5) - ((b.length + i) % 5));
    return {
      id: `${route}-${String(i + 1).padStart(3, '0')}`,
      route,
      topic,
      system,
      difficulty: (mod.difficulty || seedDifficulty) as BoardRouteQuestion['difficulty'],
      questionType: qType,
      trapType: i % 3 === 0 ? 'Unsafe delay' : i % 3 === 1 ? 'Wrong priority' : 'Diagnosis-management confusion',
      question: i < seeds.length ? question : `${question} ${mod.suffix}`,
      options,
      answer,
      explanation,
      arabic,
      whyWrong: wrongMap(answer, wrongs),
    };
  });
}

export const boardReviewRoutes: BoardReviewRoute[] = [
  {
    id: 'part1',
    title: 'Part 1 — Core Knowledge',
    arabicTitle: 'المسار الأول: المعرفة الأساسية',
    learner: 'Residents, board candidates, and interns strengthening their emergency medicine base.',
    introEn: 'This route trains high-yield emergency medicine knowledge: mechanisms, definitions, ECG/drug facts, core diseases, first-line treatments, and must-know concepts. It is knowledge-heavy, but every fact is linked to emergency practice.',
    introAr: 'هذا المسار يقوي الأساسيات. الفكرة ليست حفظ معلومات متفرقة؛ بل فهم المعلومة التي ستحتاجها بسرعة في الطوارئ والامتحان.',
    focus: ['Recall and understanding', 'High-yield mechanisms', 'Core emergency facts', 'ECG/drug/toxicology basics', 'First-line treatment principles'],
    sources: ['Tintinalli-style EM objectives', 'Emergency medicine review texts', 'Hospital teaching notes', 'Official/current exam instructions when available'],
    examStyle: ['Short direct stems', 'Single best answer', 'High-yield facts', 'Mechanism-to-practice links'],
    questions: buildQuestions('part1', part1Seeds),
  },
  {
    id: 'part2',
    title: 'Part 2 — Clinical Scenarios',
    arabicTitle: 'المسار الثاني: السيناريوهات السريرية',
    learner: 'Residents and board candidates preparing for applied written or clinical reasoning exams.',
    introEn: 'This route trains case-based reasoning: diagnosis from clues, immediate priorities, next best step, investigation choice, treatment escalation, and disposition decisions.',
    introAr: 'هنا السؤال يشبه مريض حقيقي. اقرأ العلامات الخطيرة، حدّد الخطر، ثم اختر الخطوة التي تغيّر مصير المريض أولًا.',
    focus: ['Clinical clues', 'Differential diagnosis', 'Next best step', 'Unstable patient logic', 'Disposition and escalation'],
    sources: ['Clinical emergency medicine texts', 'ED/ICU protocols', 'Board-style case discussion', 'Official/current exam instructions when available'],
    examStyle: ['Longer stems', 'Best next step', 'Must-not-miss diagnosis', 'Decision-focused distractors'],
    questions: buildQuestions('part2', part2Seeds),
  },
  {
    id: 'internship',
    title: 'Internship / JMC Style',
    arabicTitle: 'مسار الامتياز / أسلوب المجلس الطبي الأردني',
    learner: 'Interns, junior doctors, and candidates practicing safe ward and ER decisions.',
    introEn: 'This route trains practical junior-doctor decisions: ABCDE, escalation, documentation, medication safety, common ER presentations, ward emergencies, and safe first actions.',
    introAr: 'هذا المسار عملي جدًا. المطلوب غالبًا ليس تشخيص نادر؛ المطلوب أن تتصرف بأمان، تصعّد في الوقت المناسب، ولا تؤخر خطوة منقذة.',
    focus: ['First safe action', 'Escalation and referral', 'Medication safety', 'Ward/ER basics', 'Documentation and consent'],
    sources: ['Internship manuals', 'Emergency algorithms', 'Hospital policies', 'Official/current JMC instructions when available'],
    examStyle: ['Practical stems', 'Safety-first answers', 'Escalation decisions', 'On-call scenarios'],
    questions: buildQuestions('internship', internshipSeeds),
  },
];

export function getBoardRoute(id: BoardRouteId) {
  return boardReviewRoutes.find((route) => route.id === id) || boardReviewRoutes[0];
}
