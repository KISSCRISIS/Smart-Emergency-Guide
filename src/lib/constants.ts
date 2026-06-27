export const APP_NAME = 'Smart Emergency Guide';
export const APP_TAGLINE = 'Learn faster. Think smarter. Save lives.';
export const OWNER_EMAIL = process.env.NEXT_PUBLIC_OWNER_EMAIL || 'Kisscrisis@proton.me';
export const OWNER_NAME = process.env.NEXT_PUBLIC_OWNER_NAME || 'Dr.Alaa Al-Aqrabawi';
export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '962796959573';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export const HOME_COPY = {
  title: 'Master Emergency Medicine with Confidence',
  tagline: APP_TAGLINE,
  paragraphs: [
    'Smart Emergency Guide is a complete Emergency Medicine learning platform built for medical students, interns, residents, and emergency medicine learners.',
    'It brings ECGs, toxicology, antidotes, critical care, algorithms, visual signs, flashcards, exam traps, and board-style review into one organized study system.',
    'This platform helps you move beyond memorization and build real clinical reasoning — the kind of thinking needed in emergency rooms, exams, and high-pressure medical decisions.',
    'Designed for serious learners. Built for Emergency Medicine. Made to make studying clearer, faster, and more practical.',
  ],
  arabic: 'طب الطوارئ ليس حفظًا فقط؛ هو طريقة تفكير. هذه المنصة تساعدك تدرس بترتيب، تفهم بعمق، وتعرف أين تقوى وأين تحتاج مراجعة.',
  professionalNote:
    'Smart Emergency Guide is an educational and exam-preparation platform. It supports learning and clinical reasoning, but it does not replace licensed medical judgment, official hospital protocols, or direct patient care decisions.',
};
