import appDatabase from '@/data/APP_DATABASE.json';
import supplemental from '@/data/supplementalSummary.json';
import visualImages from '@/data/visualAtlasImages.json';
import visualAssetsData from '@/data/visualAssets.json';

export type AnyRecord = Record<string, any>;
export type McqRecord = { id: string; topic: string; question: string; answer: string; options: string[]; explanation?: string; arabic?: string; difficulty?: string };

export const db = appDatabase as AnyRecord;
export const supplementalDb = supplemental as AnyRecord;
export const visualAtlasImages: AnyRecord[] = visualImages as AnyRecord[];
export const visualAssets: AnyRecord[] = visualAssetsData as AnyRecord[];

export const topics: AnyRecord[] = db.topics || [];
export const officialUnifiedTopics: AnyRecord[] = db.officialUnifiedTopics || [];
export const expandedDerivedTopics: AnyRecord[] = db.expandedDerivedTopics || [];
export const flashcards: AnyRecord[] = db.flashcards || [];
export const numericals: AnyRecord[] = db.numericals || [];
export const algorithms: AnyRecord[] = db.algorithms || [];
export const antidotes: AnyRecord[] = db.antidotes || [];
export const visualSigns: AnyRecord[] = db.visualSigns || [];
export const examTraps: AnyRecord[] = db.examTraps || [];
export const chapterStudyMap: AnyRecord[] = db.chapterStudyMap || [];
export const searchIndex: AnyRecord[] = db.searchIndex || [];
export const arabicMentorExplanations: AnyRecord[] = db.arabicMentorExplanations || [];
export const referenceLibrary: AnyRecord[] = db.referenceLibrary || [];
export const drugList: AnyRecord[] = supplementalDb.drugList || [];
export const supplementalSummary: AnyRecord[] = supplementalDb.summaryData || [];
export const trapsList: AnyRecord[] = supplementalDb.trapsList || [];

export function getMetadata() { return db.metadata || {}; }

export function hasArabic(text = '') { return /[\u0600-\u06FF]/.test(String(text)); }
export function cleanSource(source?: string) {
  const s = String(source || '').toLowerCase();
  if (!source) return 'Emergency Medicine Core';
  if (s.includes('tintinalli')) return 'Tintinalli Emergency Medicine';
  if (s.includes('rosen')) return 'Rosen Emergency Medicine';
  if (s.includes('deepseek') || s.includes('summary')) return 'Supplemental EM Summary';
  if (s.includes('acls')) return 'AHA ACLS Reference';
  if (s.includes('toxic')) return 'Toxicology Review';
  if (s.includes('.txt') || s.includes('_batch') || s.includes('=') || s.length > 50) return 'Emergency Medicine Core';
  return source;
}
export function prettyTopicName(raw?: string) {
  const value = String(raw || '').trim();
  if (!value) return 'Emergency Medicine Topic';
  const chapter = value.match(/(Rosen|Tintinalli)\s*Ch\s*(\d+)/i);
  if (chapter) {
    const ref = referenceLibrary.find((x) => String(x.source).toLowerCase().includes(chapter[1].toLowerCase()) && String(x.chapterNumber) === chapter[2]);
    return ref?.chapterTitle ? `${ref.chapterTitle} (${chapter[1]} Ch ${chapter[2]})` : `${chapter[1]} Chapter ${chapter[2]}`;
  }
  return value.replace(/_/g, ' ').replace(/\s+/g, ' ');
}

export function getTopicTitle(item: AnyRecord): string { return prettyTopicName(item.topicName || item.topic || item.title || item.chapterTitle || item.name || item.keyword || 'Untitled item'); }
export function getItemId(item: AnyRecord, fallback = 'item'): string { return String(item.topicId || item.cardId || item.id || item.referenceId || item.keyword || fallback).replace(/\s+/g, '-'); }
export function getArabicExplanationForTopic(topic: string) {
  const exact = arabicMentorExplanations.find((x) => String(x.topic || '').toLowerCase() === topic.toLowerCase());
  return exact?.explanation || '';
}
export function filterTopicsByNeed(terms: string[]) {
  const lower = terms.map((t) => t.toLowerCase());
  return topics.filter((topic) => lower.some((term) => JSON.stringify(topic).toLowerCase().includes(term)));
}
export function searchAll(query: string) {
  const q = query.trim().toLowerCase(); if (!q) return [];
  const mcqs = getAllQuestionItems();
  const pools = [
    { section: 'Topics', href: '/topics', items: topics },
    { section: 'Flashcards', href: '/flashcards', items: flashcards },
    { section: 'Numericals', href: '/numericals', items: numericals },
    { section: 'Algorithms', href: '/algorithms', items: algorithms },
    { section: 'Toxicology & Antidotes', href: '/toxicology', items: antidotes },
    { section: 'Visual Signs', href: '/visual-signs', items: visualSigns },
    { section: 'Exam Traps', href: '/traps', items: examTraps },
    { section: 'Drug Handbook', href: '/drug-handbook', items: drugList },
    { section: 'Visual Assets', href: '/visual-atlas', items: visualAssets },
    { section: 'MCQ Bank', href: '/mcq-bank', items: mcqs },
  ];
  return pools.flatMap((pool) => pool.items
    .map((item) => {
      const hay = JSON.stringify(item).toLowerCase();
      const title = getTopicTitle(item);
      const titleHit = title.toLowerCase().includes(q) ? 3 : 0;
      const tokenScore = q.split(/\s+/).filter(Boolean).reduce((acc, token) => acc + (hay.includes(token) ? 1 : 0), 0);
      return { section: pool.section, href: pool.href, item, score: titleHit + tokenScore };
    })
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 25));
}

const answerPool = flashcards.map((c) => String(c.answer || '').trim()).filter((x) => x.length > 2 && x.length < 180);
function deterministicOptions(answer: string, seed: number): string[] {
  const correct = String(answer || 'Correct answer').trim();
  const pool = answerPool.filter((x) => x !== correct && !hasArabic(x));
  const picks: string[] = [];
  for (let i = 0; i < pool.length && picks.length < 3; i++) {
    const idx = (seed * 37 + i * 29) % pool.length;
    const val = pool[idx];
    if (val && !picks.includes(val)) picks.push(val);
  }
  while (picks.length < 3) picks.push(['Immediate stabilization and reassessment','Observation only without intervention','Outpatient follow-up after discharge'][picks.length]);
  const arr = [correct, ...picks].slice(0,4);
  return arr.sort((a,b) => ((a.length + seed) % 7) - ((b.length + seed) % 7));
}
function englishQuestion(card: AnyRecord, index: number) {
  const q = String(card.question || '').trim();
  if (q && !hasArabic(q) && q.length > 12) return q;
  const topic = prettyTopicName(card.source || card.topic || card.type || `Emergency concept ${index+1}`);
  return `Which statement is most accurate regarding ${topic}?`;
}

export function getAllQuestionItems(): McqRecord[] {
  return flashcards.map((card, index) => {
    const answer = String(card.answer || 'Answer unavailable').trim();
    const topic = prettyTopicName(card.source || card.topic || card.type || 'Emergency Medicine');
    return { id: getItemId(card, `card-${index}`), topic, question: englishQuestion(card, index), answer, options: deterministicOptions(answer, index), explanation: answer, arabic: getArabicExplanationForTopic(card.source || card.topic || '') || 'راجع الفكرة الأساسية ثم أعد حل السؤال لاحقًا لتثبيت المعلومة.', difficulty: card.yield || 'High-yield' };
  });
}
export function getStats() {
  return { topics: topics.length, flashcards: flashcards.length, numericals: numericals.length, algorithms: algorithms.length, antidotes: antidotes.length, visualSigns: visualSigns.length, examTraps: examTraps.length, searchIndex: searchIndex.length, drugs: drugList.length, visuals: visualAtlasImages.length };
}


export function getVisualAssetsBySection(section: string, limit = 120) {
  return visualAssets
    .filter((asset) => !asset.hidden && Array.isArray(asset.sectionTargets) && asset.sectionTargets.includes(section))
    .slice(0, limit);
}

export function getVisualAssetsForTopic(topic: string, section?: string, limit = 12) {
  const q = String(topic || '').toLowerCase();
  const words = q.split(/[^a-z0-9]+/).filter((w) => w.length > 3);
  return visualAssets
    .filter((asset) => !asset.hidden)
    .filter((asset) => !section || (Array.isArray(asset.sectionTargets) && asset.sectionTargets.includes(section)))
    .map((asset) => {
      const hay = [asset.topic, asset.title, asset.category, asset.visualType, ...(asset.tags || [])].join(' ').toLowerCase();
      const score = words.reduce((acc, w) => acc + (hay.includes(w) ? 1 : 0), 0) + (hay.includes(q) ? 3 : 0);
      return { asset, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((x) => x.asset)
    .slice(0, limit);
}


export function categorizeQuestion(item: McqRecord) {
  const text = `${item.topic} ${item.question} ${item.answer}`.toLowerCase();
  if (text.includes('ecg') || text.includes('stemi') || text.includes('arrhythmia')) return 'ECG & Cardiology';
  if (text.includes('shock') || text.includes('sepsis') || text.includes('pressor') || text.includes('critical')) return 'Critical Care';
  if (text.includes('toxic') || text.includes('poison') || text.includes('antidote') || text.includes('overdose')) return 'Toxicology';
  if (text.includes('airway') || text.includes('intubat') || text.includes('ventilat')) return 'Airway & Ventilation';
  if (text.includes('trauma') || text.includes('fracture') || text.includes('bleed')) return 'Trauma';
  if (text.includes('pediatric') || text.includes('child') || text.includes('infant')) return 'Pediatrics';
  if (text.includes('dose') || text.includes('mg') || text.includes('drug') || text.includes('medication')) return 'Drug & Dose';
  return 'Core EM';
}

export function inferQuestionType(item: McqRecord) {
  const q = item.question.toLowerCase();
  if (q.includes('next best') || q.includes('most appropriate next')) return 'Next Best Step';
  if (q.includes('initial') || q.includes('first')) return 'Initial Management';
  if (q.includes('most likely')) return 'Most Likely Diagnosis';
  if (q.includes('contraindication') || q.includes('except') || q.includes('least')) return 'Exception / Trap';
  if (q.includes('dose') || q.includes('mg') || q.includes('route')) return 'Drug/Dose';
  if (q.includes('ecg') || q.includes('image') || q.includes('x-ray') || q.includes('ultrasound')) return 'Image/ECG';
  return 'Core Knowledge';
}

export function getOrganizedQuestionBank() {
  return getAllQuestionItems().map((question, index) => ({
    ...question,
    index,
    category: categorizeQuestion(question),
    questionType: inferQuestionType(question),
    examRoute: index % 3 === 0 ? 'Internship/JMC Style' : index % 3 === 1 ? 'Board Part 1' : 'Board Part 2',
    usedStatus: 'Unused',
    reviewStatus: 'Needs Review',
  }));
}
