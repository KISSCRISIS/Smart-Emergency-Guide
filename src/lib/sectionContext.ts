export type SectionContext = {
  title: string;
  englishFocus: string;
  arabicSupport: string;
  audience: string;
  quickPrompts: string[];
  designIdentity: string;
};

export const sectionContexts: Record<string, SectionContext> = {
  '/topics': {
    title: 'Concise Emergency Medicine Textbook',
    englishFocus: 'Full emergency medicine lessons with definitions, ED reasoning, management, exam traps, and topic-matched visuals.',
    arabicSupport: 'هذا القسم يشرح الموضوع كدرس كامل: ما الخطر؟ كيف أفهمه؟ وما أول قرار آمن بالطوارئ؟',
    audience: 'Medical students, interns, GPs, residents, and board learners',
    designIdentity: 'Textbook index + long-form topic lessons',
    quickPrompts: ['Explain this topic simply', 'Give me the ED first action', 'Create 3 MCQs from this lesson'],
  },
  '/ecg-atlas': {
    title: 'ECG Atlas',
    englishFocus: 'ECG condition recognition: what you see, why it happens, immediate ED action, and exam traps.',
    arabicSupport: 'اربط التخطيط بالحالة والخطر والخطوة التالية، وليس بشكل التخطيط فقط.',
    audience: 'Learners who need ECG pattern recognition in emergency decisions',
    designIdentity: 'Rhythm strip / waveform visual cards',
    quickPrompts: ['Explain this ECG pattern', 'What is the dangerous mimic?', 'Give me a board-style ECG MCQ'],
  },
  '/pocus-atlas': {
    title: 'POCUS Atlas',
    englishFocus: 'Bedside ultrasound views, probe placement, normal-vs-abnormal findings, and unstable-patient decisions.',
    arabicSupport: 'POCUS يعني تعرف أين تضع المجس وماذا تبحث عنه ولماذا يغير القرار.',
    audience: 'Emergency learners building bedside ultrasound pattern recognition',
    designIdentity: 'Ultrasound grayscale / probe-position visual workflow',
    quickPrompts: ['Explain probe position', 'Compare normal vs abnormal', 'Give me the common POCUS mistake'],
  },
  '/drug-handbook': {
    title: 'Emergency Drug Handbook',
    englishFocus: 'Emergency drug use, mechanism, dose, route, onset, duration, contraindications, monitoring, and complications.',
    arabicSupport: 'افهم لماذا نستخدم الدواء، كيف يعمل، ما الجرعة، وما أخطر شيء تراقبه.',
    audience: 'Learners who need safe medication recall and ED drug reasoning',
    designIdentity: 'Medication profile / formulary / high-alert card system',
    quickPrompts: ['Explain this drug mechanism', 'What should I monitor?', 'What is the exam trap?'],
  },
  '/critical-care': {
    title: 'Critical Care Command Center',
    englishFocus: 'Unstable patient reasoning, shock, ventilation, vasopressors, monitoring targets, and guideline-based treatment logic.',
    arabicSupport: 'في الحالات الحرجة لا تحفظ فقط؛ افهم السبب، أول خطوة، الجرعة، وكيف تراقب الاستجابة.',
    audience: 'ED/ICU learners managing unstable patients',
    designIdentity: 'ICU command / shock pathway / treatment target dashboard',
    quickPrompts: ['Give me the first 5 minutes', 'Explain the guideline steps', 'What dose and monitoring target matter?'],
  },
  '/toxicology': {
    title: 'Toxicology & Antidotes',
    englishFocus: 'Poisoning patterns, toxidromes, mechanisms, antidotes, decontamination, ECG clues, dosing, monitoring, and disposition.',
    arabicSupport: 'ابدأ بالنمط السمي، ثم العضو المتأثر، ثم الترياق والجرعة والمراقبة.',
    audience: 'Learners studying overdose, toxins, and antidote decisions',
    designIdentity: 'Hazard / toxidrome / antidote command system',
    quickPrompts: ['Identify the toxidrome', 'What antidote and dose?', 'What ECG clue matters?'],
  },
  '/board-review': {
    title: 'Jordanian Board & Exam Review',
    englishFocus: 'Part 1 knowledge, Part 2 scenario reasoning, and Internship/JMC-style safe ED decisions.',
    arabicSupport: 'هدفه أن تفهم نوع الامتحان وطريقة التفكير، وليس فقط حل أسئلة عشوائية.',
    audience: 'Internship, JMC, and Jordanian Board learners',
    designIdentity: 'Exam route / question bank / performance analysis',
    quickPrompts: ['Explain this exam route', 'Make 5 MCQs in this style', 'How do I avoid the trap?'],
  },

  '/exam-question-types': {
    title: 'Exam Question Types & Solving Strategies',
    englishFocus: 'MCQ strategy training: next best step, first action, red flags, exception traps, image questions, drug/dose questions, and time-saving logic.',
    arabicSupport: 'هذا القسم يعلّمك كيف تفهم نوع السؤال بسرعة، وتعرف الفخ، وتختار الجواب الآمن بأقل وقت.',
    audience: 'Internship, JMC, and board learners who want better exam technique',
    designIdentity: 'Exam strategy / trap recognition / solving algorithm cards',
    quickPrompts: ['What type of question is this?', 'How do I solve this faster?', 'Explain the trap in Arabic'],
  },
  '/intubation-ventilator': {
    title: 'Intubation & Ventilator / Modes in ER',
    englishFocus: 'Airway decisions, RSI, post-intubation care, ventilator setup, modes, masks, and ER scenarios.',
    arabicSupport: 'هذا القسم يفكك الانتوبيشن والمنفسة خطوة خطوة حتى تفهمها بدل حفظ أسماء المودات.',
    audience: 'ER learners dealing with airway and mechanical ventilation',
    designIdentity: 'Ventilator screen / airway checklist / mode comparison',
    quickPrompts: ['Explain this ventilator mode', 'How do I connect the patient?', 'What is the first post-intubation check?'],
  },
};

export function getSectionContext(pathname?: string | null): SectionContext {
  const path = pathname || '/';
  const exact = sectionContexts[path];
  if (exact) return exact;
  const prefix = Object.keys(sectionContexts).find((key) => path.startsWith(key));
  if (prefix) return sectionContexts[prefix];
  return {
    title: 'Smart Emergency Guide',
    englishFocus: 'Emergency Medicine study, exam preparation, visual learning, and safe clinical reasoning.',
    arabicSupport: 'اسأل عن الفكرة أو الخطر أو أول خطوة آمنة في الطوارئ.',
    audience: 'Emergency Medicine learners',
    designIdentity: 'Medical learning command center',
    quickPrompts: ['Explain this page', 'Give me exam traps', 'Create a quick MCQ'],
  };
}
