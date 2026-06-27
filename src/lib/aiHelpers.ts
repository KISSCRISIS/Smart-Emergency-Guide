import { getAllQuestionItems, searchAll, topics } from '@/lib/database';

export type GeneratedQuestion = {
  id: string;
  track: string;
  topic: string;
  difficulty: string;
  question: string;
  options: string[];
  answer: string;
  explanationEn: string;
  explanationAr: string;
};

function shuffle<T>(items: T[]): T[] {
  return [...items].sort(() => Math.random() - 0.5);
}

export function localExamFallback(input: any): { provider: string; questions: GeneratedQuestion[]; note: string } {
  const track = input?.track || 'Internship Exam Practice';
  const topic = String(input?.topic || '').trim();
  const count = Math.min(Math.max(Number(input?.count || 5), 1), 40);
  const difficulty = input?.difficulty || 'Board-level';
  const all = getAllQuestionItems();
  const filtered = topic
    ? all.filter((q) => `${q.topic} ${q.question} ${q.answer}`.toLowerCase().includes(topic.toLowerCase()))
    : all;
  const pool = filtered.length >= count ? filtered : all;
  const selected = shuffle(pool).slice(0, count);
  const distractors = shuffle(all.map((q) => String(q.answer)).filter(Boolean));

  return {
    provider: 'local-secure-fallback',
    note: 'No OpenAI/Gemini key was configured, so this generated an original practice set from the local approved database. Connect a provider later for full AI generation.',
    questions: selected.map((q, index) => {
      const answer = String(q.answer || 'Correct answer unavailable');
      const options = shuffle([answer, ...distractors.filter((x) => x !== answer).slice(index * 3, index * 3 + 3)]).slice(0, 4);
      return {
        id: `local-${Date.now()}-${index}`,
        track,
        topic: q.topic || topic || 'Emergency Medicine',
        difficulty,
        question: String(q.question || 'Question unavailable'),
        options,
        answer,
        explanationEn: String(q.explanation || answer || 'Review the linked topic and repeat the concept in Learning Mode.'),
        explanationAr: q.arabic || 'راجع الفكرة الأساسية ثم أعد حل السؤال لاحقًا لتثبيت المعلومة.',
      };
    }),
  };
}

export function localStudyFallback(input: any): { provider: string; answerEn: string; answerAr: string; recommendedSections: string[] } {
  const prompt = String(input?.prompt || input?.question || '').trim();
  const results = prompt ? searchAll(prompt).slice(0, 8) : [];
  const topicNames = results.map((r) => r.section).filter(Boolean);
  const matchedTopics = topics
    .filter((t) => prompt && JSON.stringify(t).toLowerCase().includes(prompt.toLowerCase()))
    .slice(0, 5)
    .map((t) => t.topicName || t.topic || 'Emergency Medicine');

  return {
    provider: 'local-secure-fallback',
    answerEn: prompt
      ? `I found ${results.length} relevant local database matches. Start by reviewing: ${matchedTopics.length ? matchedTopics.join(', ') : 'Topics, Flashcards, Exam Traps, and Algorithms'}. Then test yourself in Learning Mode and repeat the weak topics until accuracy is above 80%.`
      : 'Ask a focused Emergency Medicine question, or paste your weak topics from an exam report to receive a study plan.',
    answerAr: prompt
      ? 'ابدأ بمراجعة المواضيع المرتبطة بالسؤال، ثم حل أسئلة بنمط التعلم، وبعدها أعد الاختبار الحقيقي حتى تصل لدقة أعلى من 80٪.'
      : 'اكتب سؤالك أو أرسل نقاط ضعفك من تقرير الامتحان للحصول على خطة مراجعة مختصرة.',
    recommendedSections: Array.from(new Set([...topicNames, 'Exam Yourself', 'Progress', 'Study Map'])).slice(0, 6),
  };
}

export function buildExamPrompt(input: any) {
  return `Create ${input.count || 5} original Emergency Medicine MCQs for ${input.track || 'Exam Practice'} about ${input.topic || 'mixed topics'} at ${input.difficulty || 'board-level'} difficulty. Use English as the main language. For every question include: question, four options, correct answer, detailed English explanation, and short Arabic explanation. Do not copy copyrighted past questions verbatim.`;
}

export function buildStudyPrompt(input: any) {
  return `You are Smart Emergency Guide AI Study Assistant. Answer in English first, then give a short Arabic explanation. Focus on Emergency Medicine exam preparation and clinical reasoning.\n\nCurrent page: ${input.pageTitle || input.pathname || 'Unknown page'}\nPage focus: ${input.pageFocus || 'Emergency Medicine learning'}\nAudience: ${input.audience || 'Emergency Medicine learners'}\nArabic support style required: ${input.arabicSupport || 'simple Arabic for understanding, not memorization'}\n\nRules: never give diagnosis for a real patient; frame content as study support; mention local protocol verification for doses/ventilator settings/high-risk treatment.\n\nUser request: ${input.prompt || input.question || ''}`;
}
