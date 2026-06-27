export type QuestionStrategy = {
  id: string;
  type: string;
  arabicSimple: string;
  englishStrategy: string;
  keyWords: string[];
  timeSaver: string;
  commonTrap: string;
  exampleQuestion: string;
  options: string[];
  answer: string;
  explanation: string;
  arabicTakeaway: string;
};

export const questionSolvingStrategies: QuestionStrategy[] = [
  {
    id: 'next-best-step',
    type: 'Next Best Step',
    arabicSimple: 'هذا السؤال لا يسألك فقط عن التشخيص. يسألك: ما الخطوة الآمنة التالية الآن؟ إذا المريض غير مستقر، ابدأ بالإنعاش والتثبيت قبل الفحوصات التفصيلية.',
    englishStrategy: 'Identify stability first. If unstable, choose resuscitation/ABCDE/definitive emergency action. If stable, choose the test or treatment that changes management next.',
    keyWords: ['next', 'best', 'initial', 'unstable', 'hypotensive', 'altered mental status'],
    timeSaver: 'Ask: what kills first and what must not be delayed?',
    commonTrap: 'Choosing the perfect diagnostic test while the patient is crashing.',
    exampleQuestion: 'A febrile patient with suspected infection is hypotensive and confused. What is the next best step?',
    options: ['Start sepsis resuscitation and early antibiotics', 'Discharge with oral antibiotics', 'Wait for cultures before treatment', 'Schedule outpatient CT next week'],
    answer: 'Start sepsis resuscitation and early antibiotics',
    explanation: 'Hypotension and confusion suggest septic shock. Resuscitation and timely antibiotics are safer than delayed testing-only strategies.',
    arabicTakeaway: 'إذا المريض غير مستقر، لا تبحث عن أجمل فحص؛ ابدأ بالخطوة المنقذة.'
  },
  {
    id: 'most-likely-diagnosis',
    type: 'Most Likely Diagnosis',
    arabicSimple: 'هنا المطلوب ربط العلامات المفتاحية بالتشخيص الأرجح. لا تتوسع بكل الاحتمالات؛ ركّز على clue الأقوى.',
    englishStrategy: 'Find the discriminating clue: timing, risk factor, vital sign pattern, ECG/image finding, or classic triad.',
    keyWords: ['most likely', 'classic', 'associated with', 'presents with'],
    timeSaver: 'Circle the one clue that excludes most distractors.',
    commonTrap: 'Selecting a common disease while ignoring a classic red flag clue.',
    exampleQuestion: 'Sudden tearing chest pain radiating to the back with pulse deficit suggests what diagnosis?',
    options: ['Aortic dissection', 'GERD', 'Panic attack', 'Costochondritis'],
    answer: 'Aortic dissection',
    explanation: 'Tearing pain to the back plus pulse deficit is a classic must-not-miss pattern for aortic dissection.',
    arabicTakeaway: 'كلمة tearing للظهر مع فرق نبض ليست ألم عضلي؛ هذا سؤال red flag.'
  },
  {
    id: 'initial-management',
    type: 'Initial Management / First Action',
    arabicSimple: 'اسأل نفسك: ما أول شيء يجب أن أفعله قبل كل شيء؟ غالبًا ABC، أكسجين، مراقبة، خط وريدي، أو علاج منقذ مثل إبينفرين أو كالسيوم.',
    englishStrategy: 'Choose the first safe action that stabilizes the patient or prevents immediate deterioration.',
    keyWords: ['first', 'initial', 'immediate', 'priority'],
    timeSaver: 'If airway/breathing/circulation is threatened, the first action is rarely a delayed investigation.',
    commonTrap: 'Jumping to definitive diagnosis before stabilization.',
    exampleQuestion: 'A patient after a bee sting has wheeze, urticaria, and hypotension. What is the immediate treatment?',
    options: ['Intramuscular epinephrine', 'Oral antihistamine only', 'Outpatient allergy referral', 'CT chest first'],
    answer: 'Intramuscular epinephrine',
    explanation: 'Anaphylaxis with hypotension/wheeze requires IM epinephrine immediately. Antihistamines are adjunctive and must not delay epinephrine.',
    arabicTakeaway: 'في anaphylaxis لا تؤخر الإبينفرين. هذا هو الجواب المنقذ.'
  },
  {
    id: 'unstable-patient',
    type: 'Unstable Patient First Action',
    arabicSimple: 'إذا السؤال فيه hypotension, hypoxia, altered mental status, no pulse، فالجواب عادة تثبيت وإنقاذ وليس شرح طويل أو فحص مؤجل.',
    englishStrategy: 'Recognize instability markers and choose immediate resuscitation, decompression, cardioversion, defibrillation, airway support, or antidote when indicated.',
    keyWords: ['hypotensive', 'no pulse', 'severe respiratory distress', 'cyanosis', 'shock', 'unresponsive'],
    timeSaver: 'Vitals decide the question type before the diagnosis does.',
    commonTrap: 'Treating an unstable patient like a stable outpatient.',
    exampleQuestion: 'A trauma patient is hypotensive with tracheal deviation and absent breath sounds on the right. What is the immediate action?',
    options: ['Needle/finger decompression for tension pneumothorax', 'Wait for CT chest', 'Discharge after analgesia', 'Order outpatient spirometry'],
    answer: 'Needle/finger decompression for tension pneumothorax',
    explanation: 'Tension pneumothorax in an unstable patient is treated clinically and should not wait for imaging.',
    arabicTakeaway: 'مريض غير مستقر + علامات tension pneumothorax = عالج فورًا.'
  },
  {
    id: 'except-traps',
    type: 'All Except / Least Appropriate / Contraindication',
    arabicSimple: 'هذه أسئلة فخ. اقرأ كلمة EXCEPT أو least مرتين. المطلوب غالبًا الخيار الخطأ أو الممنوع وليس الصحيح.',
    englishStrategy: 'Convert the stem into a positive sentence, mark the requested exception, and eliminate true statements until one false/unsafe option remains.',
    keyWords: ['except', 'least appropriate', 'contraindicated', 'not', 'false'],
    timeSaver: 'Write mentally: “They want the wrong one.”',
    commonTrap: 'Answering the true statement because it looks familiar.',
    exampleQuestion: 'All are appropriate in anaphylaxis EXCEPT:',
    options: ['Delaying epinephrine until antihistamines work', 'Airway assessment', 'IM epinephrine', 'IV fluids for hypotension'],
    answer: 'Delaying epinephrine until antihistamines work',
    explanation: 'Epinephrine is first-line and should not be delayed for adjunctive therapies.',
    arabicTakeaway: 'كلمة EXCEPT تغيّر المطلوب كاملًا. المطلوب الخطأ هنا هو تأخير الإبينفرين.'
  },
  {
    id: 'ecg-image',
    type: 'ECG / Image-Based Question',
    arabicSimple: 'لا تنظر للصورة كرسمة فقط. ابدأ: ما النمط؟ هل المريض مستقر؟ ما الخطر؟ ما أول إجراء؟',
    englishStrategy: 'Use a fixed sequence: identify pattern, link to condition, assess instability, choose immediate action or diagnostic label.',
    keyWords: ['ECG shows', 'image', 'x-ray', 'ultrasound', 'CT demonstrates'],
    timeSaver: 'Name the dangerous pattern before reading all options.',
    commonTrap: 'Recognizing the image but choosing delayed management.',
    exampleQuestion: 'An ECG shows wide QRS complexes progressing toward a sine-wave pattern in renal failure. What is the immediate treatment priority?',
    options: ['IV calcium for myocardial stabilization', 'Routine outpatient potassium binder only', 'No treatment if asymptomatic', 'Oral fluids'],
    answer: 'IV calcium for myocardial stabilization',
    explanation: 'Hyperkalemia with dangerous ECG changes requires immediate calcium to stabilize the myocardium while potassium-lowering therapy is arranged.',
    arabicTakeaway: 'الصورة هنا ليست للحفظ؛ ECG خطير يعني احمِ القلب بالكالسيوم أولًا.'
  },
  {
    id: 'drug-dose',
    type: 'Drug / Dose / Route Question',
    arabicSimple: 'ركز على الدواء، طريق الإعطاء، الحالة، وهل الجرعة لإنقاذ عاجل أو علاج لاحق. لا تختار جرعة بلا route.',
    englishStrategy: 'Match indication to route and urgency. Check for weight-based dosing, contraindications, and monitoring requirements.',
    keyWords: ['dose', 'route', 'mg/kg', 'infusion', 'antidote', 'contraindication'],
    timeSaver: 'If route is wrong in an emergency drug question, the option is often wrong.',
    commonTrap: 'Choosing the correct drug by the wrong route or delayed timing.',
    exampleQuestion: 'First-line treatment for anaphylaxis is best given by which route?',
    options: ['Intramuscular epinephrine', 'Oral epinephrine tablet', 'Topical epinephrine cream', 'Delayed oral antihistamine only'],
    answer: 'Intramuscular epinephrine',
    explanation: 'IM epinephrine is the standard first-line route for anaphylaxis in most emergency contexts.',
    arabicTakeaway: 'ليس اسم الدواء فقط مهم؛ الطريق والتوقيت جزء من الإجابة.'
  },
  {
    id: 'ddx-redflags',
    type: 'Differential Diagnosis / Red Flag Question',
    arabicSimple: 'رتّب التشخيصات حسب الخطورة أولًا، وليس حسب الشيوع فقط. استبعد القاتل قبل الحميد.',
    englishStrategy: 'List must-not-miss diagnoses before benign causes. Choose the option that addresses the dangerous diagnosis suggested by the red flags.',
    keyWords: ['red flag', 'must not miss', 'dangerous cause', 'differential', 'rule out'],
    timeSaver: 'Ask: which diagnosis kills fastest if missed?',
    commonTrap: 'Choosing a benign common diagnosis before excluding a lethal one.',
    exampleQuestion: 'Chest pain with syncope, hypotension, and tearing pain to the back should first raise concern for:',
    options: ['Aortic dissection', 'Mild reflux', 'Muscle strain', 'Stable anxiety'],
    answer: 'Aortic dissection',
    explanation: 'Syncope/hypotension/tearing back pain are dangerous clues for dissection and must be prioritized.',
    arabicTakeaway: 'لا تبدأ بالحميد مع وجود red flags. استبعد القاتل أولًا.'
  }
];
