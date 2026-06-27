export type StudyPathStep = {
  id: string;
  title: string;
  subtitle: string;
  moduleType: 'lesson' | 'simulator' | 'ecg-caliper' | 'micro-quiz' | 'visual-drill' | 'case-drill' | 'review';
  linkedHref?: string;
  estimatedTime: string;
  objective: string;
  english: string[];
  arabic: string;
  keyPoints: string[];
  commonMistake: string;
  visuals?: string[];
  quiz?: { question: string; options: string[]; answer: string; explanation: string; arabic: string }[];
};

export type StudyPath = {
  id: string;
  title: string;
  shortTitle: string;
  level: string;
  time: string;
  bestFor: string;
  tone: 'emerald' | 'teal' | 'blue' | 'rose' | 'slate';
  introEnglish: string;
  introArabic: string;
  completionReward: { title: string; description: string; href: string; lockedUntilComplete: boolean };
  steps: StudyPathStep[];
};

const beginnerQuiz = [
  {
    question: 'A trauma patient has noisy breathing and a large thigh bleed. What is the first priority in the ABCDE approach?',
    options: ['Apply a splint to the leg', 'Assess and open the airway with cervical spine protection', 'Order a CT scan', 'Start oral analgesia'],
    answer: 'Assess and open the airway with cervical spine protection',
    explanation: 'Airway compromise kills fastest. In trauma, airway assessment is performed with cervical spine protection before moving down the ABCDE sequence.',
    arabic: 'ابدأ بالمجرى الهوائي مع حماية الرقبة، لأن انسداد التنفس يقتل أسرع من باقي المشاكل.'
  },
  {
    question: 'Tall peaked T waves on ECG should make you immediately consider which emergency?',
    options: ['Hypokalemia', 'Hyperkalemia', 'Hypoglycemia', 'Hyponatremia'],
    answer: 'Hyperkalemia',
    explanation: 'Hyperkalemia can produce tall peaked T waves and may progress to QRS widening and cardiac arrest.',
    arabic: 'T wave عالية وحادة تعني فكر بسرعة بارتفاع البوتاسيوم، خصوصًا إذا المريض كلوي أو عنده ضعف.'
  }
];

export const studyPaths: StudyPath[] = [
  {
    id: 'beginner-emergency-medicine',
    title: 'Beginner Emergency Medicine Path',
    shortTitle: 'Beginner EM Path',
    level: 'Beginner',
    time: '2-4 weeks',
    bestFor: 'Students and early interns who need a safe, structured start in Emergency Medicine.',
    tone: 'emerald',
    introEnglish: 'This path teaches the first mental framework of Emergency Medicine: recognize danger, stabilize first, and avoid being distracted by details before ABCDE priorities are safe.',
    introArabic: 'هذا المسار للمبتدئ الذي يتشتت في الطوارئ. الهدف أن تتعلم كيف ترتب الخطر: التنفس أولًا، الدورة الدموية، ثم التفاصيل. الفكرة فهم الأولويات قبل الحفظ.',
    completionReward: { title: 'ER Survival Guide PDF', description: 'A short reward guide: dangerous mistakes to avoid in your first ER shift.', href: '/rewards/er-survival-guide.pdf', lockedUntilComplete: true },
    steps: [
      {
        id: 'abcde-mini-simulator',
        title: 'Emergency Approach & ABCDE Mini-Simulator',
        subtitle: 'Learn the first 60 seconds of emergency thinking.',
        moduleType: 'simulator',
        estimatedTime: '20 min',
        linkedHref: '/red-flags-ddx',
        objective: 'Make ABCDE an automatic priority sequence.',
        english: ['Use ABCDE when the patient may be unstable.', 'Do not jump to diagnosis before stabilizing immediate threats.', 'Airway with cervical spine protection comes first in trauma when airway is threatened.'],
        arabic: 'الفكرة ليست أن تحفظ حروف ABCDE فقط. الفكرة أن تسأل: ما الشيء الذي يقتل المريض خلال دقائق؟ إذا التنفس مهدد، لا تنشغل بالجرح أو التحاليل قبل تأمين airway.',
        keyPoints: ['Airway kills fastest.', 'Breathing and circulation follow immediately.', 'Disability includes glucose and neurologic status.', 'Expose the patient but prevent hypothermia.'],
        commonMistake: 'Treating the visible injury before checking airway and breathing.'
      },
      {
        id: 'shock-basics',
        title: 'Shock Basics',
        subtitle: 'Differentiate low volume, pump failure, obstruction, and distributive shock.',
        moduleType: 'lesson',
        estimatedTime: '25 min',
        linkedHref: '/critical-care',
        objective: 'Recognize shock early and choose the first safe intervention.',
        english: ['Shock means inadequate tissue perfusion.', 'Classify the likely cause before giving repeated fluids.', 'Look for skin signs, pulse pressure, JVP, lung findings, bleeding, fever, and bedside ultrasound clues.'],
        arabic: 'الصدمة ليست رقم ضغط فقط. الصدمة تعني أن الأعضاء لا يصلها دم كفاية. العلاج يختلف إذا السبب نزيف، فشل قلب، انسداد مثل tamponade، أو sepsis.',
        keyPoints: ['Hypotension is late in some patients.', 'Treat bleeding with hemorrhage control and blood when needed.', 'Septic shock often needs fluids plus early vasopressor if MAP remains low.'],
        commonMistake: 'Giving unlimited fluids to every hypotensive patient without asking why pressure is low.'
      },
      {
        id: 'interactive-ecg-caliper',
        title: 'ECG Basics with Interactive Caliper',
        subtitle: 'Click highlights to learn where to look.',
        moduleType: 'ecg-caliper',
        estimatedTime: '30 min',
        linkedHref: '/ecg-atlas',
        objective: 'Stop looking at ECGs as a scary full page; learn exact visual targets.',
        english: ['Start with rate, rhythm, axis, intervals, ST-T changes, and comparison with clinical context.', 'Dangerous beginner patterns: STEMI/occlusion MI, hyperkalemia, complete heart block, wide-complex tachycardia.'],
        arabic: 'لا تنظر للتخطيط كله مرة واحدة. ابدأ بخطوات ثابتة: السرعة، النظم، QRS، ثم ST/T. ومع كل حالة ابحث عن العلامة الذهبية مثل ST elevation أو T wave عالية.',
        keyPoints: ['ST elevation must be interpreted with symptoms and territories.', 'Peaked T waves suggest hyperkalemia.', 'Wide QRS in a sick patient is dangerous.'],
        commonMistake: 'Trying to name every small ECG detail before checking for life-threatening patterns.'
      },
      {
        id: 'common-emergencies',
        title: 'Common ER Emergencies',
        subtitle: 'Chest pain, dyspnea, abdominal pain, headache, sepsis, seizure.',
        moduleType: 'case-drill',
        estimatedTime: '40 min',
        linkedHref: '/emergency-cases',
        objective: 'Link chief complaints to must-not-miss diagnoses.',
        english: ['For every complaint, first exclude lethal causes.', 'Chest pain is not gastritis until ACS, dissection, PE, pneumothorax, and esophageal rupture are considered.', 'Headache is not migraine until red flags are checked.'],
        arabic: 'في الطوارئ لا تبدأ بالتشخيص الشائع قبل استبعاد القاتل. ألم الصدر قد يكون بسيطًا، لكن أولًا فكر بالأشياء التي تقتل بسرعة.',
        keyPoints: ['Red flags guide urgency.', 'Disposition is part of the answer.', 'Safe first action matters more than perfect diagnosis in unstable patients.'],
        commonMistake: 'Choosing the common diagnosis before ruling out dangerous mimics.'
      },
      {
        id: 'drug-essentials',
        title: 'Drug Handbook Essentials',
        subtitle: 'The first emergency medications a beginner must know safely.',
        moduleType: 'lesson',
        estimatedTime: '30 min',
        linkedHref: '/drug-handbook',
        objective: 'Know the role, route, and danger of high-yield ER drugs.',
        english: ['Learn epinephrine, adenosine, amiodarone, atropine, naloxone, calcium, magnesium, benzodiazepines, and vasopressors.', 'Focus on indication, route, onset, monitoring, and dangerous contraindications.'],
        arabic: 'لا تحفظ اسم الدواء فقط. اسأل: لماذا أعطيه؟ كيف أعطيه؟ متى يبدأ؟ ما الخطر؟ وما الذي أراقبه بعده؟',
        keyPoints: ['Route matters.', 'Concentration matters.', 'Verify local protocol for high-risk doses.'],
        commonMistake: 'Knowing the drug name but not the route or monitoring target.'
      },
      {
        id: 'beginner-micro-quiz',
        title: 'Beginner Micro-Quiz',
        subtitle: '5-10 high-yield questions instead of a scary long bank.',
        moduleType: 'micro-quiz',
        estimatedTime: '10 min',
        linkedHref: '/exam-yourself',
        objective: 'Build confidence with short, high-yield sessions.',
        english: ['Micro-quizzes prevent early burnout.', 'Each quiz tests only concepts already covered in this path.', 'Immediate feedback helps turn mistakes into memory.'],
        arabic: 'الكويز القصير أفضل للمبتدئ من بنك طويل. الهدف أن تكسب ثقة وتثبت الأفكار الذهبية بدون إحباط.',
        keyPoints: ['Short sessions.', 'Immediate explanation.', 'Repeat wrong concepts later.'],
        commonMistake: 'Starting with a long board-style exam before building the base.',
        quiz: beginnerQuiz
      }
    ]
  },
  {
    id: 'internship-jmc-exam',
    title: 'Internship / JMC Exam Path',
    shortTitle: 'Internship / JMC',
    level: 'Intermediate',
    time: '3-6 weeks',
    bestFor: 'Interns and junior doctors preparing for practical ER and ward decision-making.',
    tone: 'teal',
    introEnglish: 'This path trains safe junior-doctor decisions: first action, escalation, medication safety, documentation, and common ER presentations.',
    introArabic: 'هذا المسار يعلّمك كيف تتصرف كطبيب امتياز بأمان: ما أول خطوة؟ متى أستدعي الأكبر؟ كيف أتجنب خطأ دوائي؟ وكيف أقرر إدخال أو خروج المريض؟',
    completionReward: { title: 'Internship Night Shift Checklist', description: 'A concise checklist for common night-shift ER/ward calls.', href: '/bookmarks', lockedUntilComplete: false },
    steps: [
      { id: 'common-presentations', title: 'High-Yield ER Presentations', subtitle: 'Chest pain, dyspnea, fever, headache, abdominal pain.', moduleType: 'case-drill', linkedHref: '/red-flags-ddx', estimatedTime: '45 min', objective: 'Prioritize dangerous diagnoses.', english: ['Start with red flags and instability.', 'Choose safe first action before full differential.'], arabic: 'في الامتياز، المطلوب قرار آمن وسريع، وليس شرح مطوّل.', keyPoints: ['Vitals first', 'Red flags', 'Escalation'], commonMistake: 'Not calling senior help early enough.' },
      { id: 'numericals-doses', title: 'Numericals & Emergency Doses', subtitle: 'Glucose, potassium, sedation, pediatric basics.', moduleType: 'lesson', linkedHref: '/numericals', estimatedTime: '30 min', objective: 'Prevent unsafe dose errors.', english: ['Know high-yield thresholds and verify high-risk doses.'], arabic: 'الأرقام في الطوارئ مهمة لأنها تغير القرار فورًا.', keyPoints: ['Dose', 'Route', 'Monitoring'], commonMistake: 'Ignoring units or concentration.' },
      { id: 'exam-traps', title: 'Exam Traps', subtitle: 'Safest answer and common wrong choices.', moduleType: 'review', linkedHref: '/traps', estimatedTime: '30 min', objective: 'Recognize traps quickly.', english: ['Many JMC-style questions reward safety and escalation.'], arabic: 'غالبًا الجواب الصحيح هو الأكثر أمانًا وليس الأكثر تعقيدًا.', keyPoints: ['Safety', 'Escalate', 'Document'], commonMistake: 'Choosing a definitive treatment outside junior scope.' },
      { id: 'core-algorithms', title: 'Core Algorithms', subtitle: 'First action decisions.', moduleType: 'lesson', linkedHref: '/algorithms', estimatedTime: '35 min', objective: 'Use pathways under pressure.', english: ['Algorithms reduce hesitation in unstable patients.'], arabic: 'الخوارزمية تساعدك تتصرف عندما يكون الوقت قليل.', keyPoints: ['First action', 'Reassess', 'Disposition'], commonMistake: 'Skipping reassessment.' },
      { id: 'jmc-mcqs', title: 'Internship/JMC Style MCQs', subtitle: 'Short practical questions.', moduleType: 'micro-quiz', linkedHref: '/mcq-bank', estimatedTime: '20 min', objective: 'Practice realistic safe decisions.', english: ['Use filtered MCQs for internship route.'], arabic: 'تمرن على سؤال قصير بقرار واضح.', keyPoints: ['MCQ only', 'Feedback', 'Repeat wrong'], commonMistake: 'Reading too slowly without identifying the task.' },
      { id: 'weakness-report', title: 'Weakness Report', subtitle: 'Turn mistakes into a study plan.', moduleType: 'review', linkedHref: '/progress', estimatedTime: '15 min', objective: 'Choose the next topic based on data.', english: ['Weakness-based review saves time.'], arabic: 'لا تراجع كل شيء؛ راجع المكان الذي تخطئ فيه.', keyPoints: ['Weak topics', 'Next path', 'Retest'], commonMistake: 'Repeating strong topics only.' }
    ]
  },
  {
    id: 'jordanian-board',
    title: 'Jordanian Board Path',
    shortTitle: 'Jordanian Board',
    level: 'Advanced',
    time: '8-12 weeks',
    bestFor: 'Residents and candidates preparing for board-level EM reasoning.',
    tone: 'blue',
    introEnglish: 'This path emphasizes prioritization, unstable patient logic, next best step, critical care, toxicology, ECG, and board-style clinical scenarios.',
    introArabic: 'مسار البورد يدرّبك على التفكير لا الحفظ فقط: ما الأخطر؟ ما الخطوة التالية؟ متى أغيّر الخطة؟ وما الفخ في السؤال؟',
    completionReward: { title: 'Board High-Yield Final Review', description: 'A final review checklist for board-style reasoning.', href: '/board-review', lockedUntilComplete: false },
    steps: [
      { id: 'critical-care-board', title: 'Critical Care Command Center', subtitle: 'Shock, sepsis, ventilation, post-intubation care.', moduleType: 'lesson', linkedHref: '/critical-care', estimatedTime: '60 min', objective: 'Master unstable patient decisions.', english: ['Board questions often test priorities and escalation.'], arabic: 'في البورد، المريض غير المستقر له أولوية على التشخيص التفصيلي.', keyPoints: ['Stabilize', 'Monitor', 'Escalate'], commonMistake: 'Choosing investigation before resuscitation.' },
      { id: 'toxicology-board', title: 'Toxicology & Antidotes', subtitle: 'Toxidromes, antidotes, ECG clues.', moduleType: 'lesson', linkedHref: '/toxicology', estimatedTime: '50 min', objective: 'Recognize poisoning patterns and antidotes.', english: ['Link toxidrome to therapy.'], arabic: 'السموم تعتمد على النمط: عيون، جلد، نبض، حرارة، وECG.', keyPoints: ['Toxidrome', 'Antidote', 'Monitoring'], commonMistake: 'Waiting for lab confirmation when antidote is urgent.' },
      { id: 'advanced-ecg', title: 'Advanced ECG Atlas', subtitle: 'High-risk ECG patterns.', moduleType: 'ecg-caliper', linkedHref: '/ecg-atlas', estimatedTime: '45 min', objective: 'Spot dangerous ECGs quickly.', english: ['Focus on occlusion MI, hyperkalemia, wide complex rhythms, Brugada, blocks.'], arabic: 'لا تحفظ التخطيط، تعلّم أين تنظر وما القرار الذي يتبعه.', keyPoints: ['Pattern', 'Clinical context', 'Action'], commonMistake: 'Calling all ST changes nonspecific.' },
      { id: 'board-part1', title: 'Part 1 Core Knowledge Bank', subtitle: 'Foundations and high-yield facts.', moduleType: 'micro-quiz', linkedHref: '/board-review', estimatedTime: '35 min', objective: 'Strengthen core knowledge.', english: ['Use core facts to support clinical reasoning.'], arabic: 'المعرفة الأساسية هي قاعدة القرار السريري.', keyPoints: ['Facts', 'Mechanism', 'First-line'], commonMistake: 'Knowing facts without applying them.' },
      { id: 'board-part2', title: 'Part 2 Clinical Scenarios', subtitle: 'Next best step and disposition.', moduleType: 'case-drill', linkedHref: '/board-review', estimatedTime: '45 min', objective: 'Think like an examiner.', english: ['Read vitals first and identify instability.'], arabic: 'ابدأ من العلامات الحيوية ثم السؤال: ماذا أفعل الآن؟', keyPoints: ['Vitals', 'Priority', 'Disposition'], commonMistake: 'Answering diagnosis when asked management.' },
      { id: 'board-level-assessment', title: 'Medical Level Assessment', subtitle: 'Find your weak areas.', moduleType: 'review', linkedHref: '/medical-level-assessment', estimatedTime: '30 min', objective: 'Measure progress and re-plan.', english: ['Retest after completing the route.'], arabic: 'الاختبار ليس للحكم عليك؛ هو ليحدد أين تراجع.', keyPoints: ['Score', 'Weakness', 'Next path'], commonMistake: 'Ignoring the report.' }
    ]
  },
  {
    id: 'visual-learning',
    title: 'Visual Learning Path',
    shortTitle: 'Visual Learning',
    level: 'All levels',
    time: 'Ongoing',
    bestFor: 'Learners who remember through images, ECGs, ultrasound, and clinical signs.',
    tone: 'rose',
    introEnglish: 'This path connects visual recognition to clinical meaning: image first, pattern, danger, decision.',
    introArabic: 'إذا كنت تفهم بالصور، هذا المسار يربط الشكل بالتشخيص ثم بالقرار. لا تشاهد الصورة فقط؛ اسأل ماذا تعني وماذا أفعل بعدها؟',
    completionReward: { title: 'Visual Diagnosis Cheat Sheet', description: 'A focused visual pattern checklist.', href: '/visual-atlas', lockedUntilComplete: false },
    steps: [
      { id: 'visual-atlas-map', title: 'Mapped Visual Atlas', subtitle: 'Cleaned visuals linked to topics.', moduleType: 'visual-drill', linkedHref: '/visual-atlas', estimatedTime: '40 min', objective: 'Use visuals with meaning, not random pages.', english: ['Every visual should answer: what is it, why important, what action follows?'], arabic: 'الصورة لا تكفي بدون معنى. اربطها بحالة وخطوة علاجية.', keyPoints: ['Image', 'Pattern', 'Action'], commonMistake: 'Memorizing image names without clinical meaning.' },
      { id: 'ecg-visuals', title: 'ECG Strips by Condition', subtitle: 'Hyperkalemia, STEMI, blocks, WPW.', moduleType: 'ecg-caliper', linkedHref: '/ecg-atlas', estimatedTime: '45 min', objective: 'Recognize high-risk ECGs.', english: ['Use highlights to locate ST/T/QRS clues.'], arabic: 'اسأل: أين العلامة؟ وهل تحتاج إجراء الآن؟', keyPoints: ['ST', 'T wave', 'QRS'], commonMistake: 'Ignoring symptoms and vitals.' },
      { id: 'pocus-views', title: 'POCUS Views', subtitle: 'Probe, view, normal versus abnormal.', moduleType: 'visual-drill', linkedHref: '/pocus-atlas', estimatedTime: '50 min', objective: 'Understand bedside ultrasound orientation.', english: ['Know probe type, position, marker direction, and what abnormality means.'], arabic: 'السونار يبدأ من مكان وضع المسبار واتجاه العلامة، ثم ماذا أبحث عنه.', keyPoints: ['Probe', 'Marker', 'Finding'], commonMistake: 'Interpreting a view without orientation.' },
      { id: 'visual-signs', title: 'Visual Signs & Triads', subtitle: 'Classic signs, patterns, and trauma clues.', moduleType: 'visual-drill', linkedHref: '/visual-signs', estimatedTime: '30 min', objective: 'Link signs to dangerous diagnoses.', english: ['A sign is useful when connected to a differential and first action.'], arabic: 'العلامة السريرية تعني خطر معين يجب التفكير به، وليس معلومة معزولة.', keyPoints: ['Sign', 'D.Dx', 'Red flag'], commonMistake: 'Knowing the name of the sign only.' },
      { id: 'image-mcqs', title: 'Image-Based MCQs', subtitle: 'Practice with visual questions.', moduleType: 'micro-quiz', linkedHref: '/mcq-bank', estimatedTime: '20 min', objective: 'Turn visual recognition into exam performance.', english: ['Read image-based questions by identifying the visual clue first.'], arabic: 'في سؤال الصورة: حدد العلامة البصرية ثم اختر القرار الآمن.', keyPoints: ['Visual clue', 'Diagnosis', 'Action'], commonMistake: 'Reading options before understanding the image.' },
      { id: 'ask-ai-visual', title: 'Ask AI About Visuals', subtitle: 'Use AI to explain what you see.', moduleType: 'review', linkedHref: '/ai-study-assistant', estimatedTime: '15 min', objective: 'Ask targeted visual questions.', english: ['Ask: what should I look at, what is abnormal, what is the trap?'], arabic: 'اسأل الذكاء: أين أنظر؟ ما غير الطبيعي؟ ما الفخ؟', keyPoints: ['Ask focused', 'Compare', 'Repeat'], commonMistake: 'Asking vague questions.' }
    ]
  }
];

export function getStudyPath(id: string) {
  return studyPaths.find((path) => path.id === id);
}
