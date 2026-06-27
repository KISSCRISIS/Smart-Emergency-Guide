'use client';

import { useMemo, useRef, useState } from 'react';
import { CheckCircle2, XCircle, AlertTriangle, BarChart3 } from 'lucide-react';
import { ArabicSupport } from './ArabicSupport';
import { Button } from './Button';
import { saveExamAttempt } from '@/hooks/useProgress';

export type McqQuestion = {
  id: string;
  topic: string;
  question: string;
  answer: string;
  options: string[];
  explanation?: string;
  arabic?: string;
  difficulty?: string;
  level?: 'Basic' | 'Intermediate' | 'Advanced' | 'Expert' | string;
  whyWrong?: Record<string, string>;
};

export type MCQResult = {
  type: string;
  mode: 'real' | 'learning';
  total: number;
  score: number;
  percent: number;
  answers: Array<{ questionId: string; topic: string; level?: string; selectedAnswer: string; correctAnswer: string; isCorrect: boolean }>;
  byLevel: Array<{ level: string; total: number; correct: number; percent: number }>;
  byTopic: Array<{ topic: string; total: number; correct: number; percent: number }>;
};

function uniqueOptions(q: McqQuestion) {
  const answer = String(q.answer || 'Correct answer unavailable').trim();
  const clean = [answer, ...(q.options || [])]
    .map((x) => String(x || '').trim())
    .filter((x, i, arr) => x.length > 0 && arr.indexOf(x) === i)
    .slice(0, 6);
  while (clean.length < 4) {
    clean.push([
      'Immediate stabilization and reassessment',
      'Delayed outpatient follow-up only',
      'Observation without reassessment',
      'Unrelated intervention',
    ][clean.length - 1] || `Distractor ${clean.length}`);
  }
  return clean.slice(0, 4).includes(answer) ? clean.slice(0, 4) : [answer, ...clean].slice(0, 4);
}

function buildResult(questions: McqQuestion[], selected: Record<string, string>, mode: 'real' | 'learning', attemptType: string): MCQResult {
  const answers = questions.map((q) => ({
    questionId: q.id,
    topic: q.topic,
    level: q.level || q.difficulty,
    selectedAnswer: selected[q.id] || '',
    correctAnswer: q.answer,
    isCorrect: selected[q.id] === q.answer,
  }));
  const score = answers.filter((x) => x.isCorrect).length;
  const levelRows: Record<string, { total: number; correct: number }> = {};
  const topicRows: Record<string, { total: number; correct: number }> = {};
  answers.forEach((answer) => {
    const level = answer.level || 'High-yield';
    levelRows[level] ||= { total: 0, correct: 0 };
    levelRows[level].total += 1;
    if (answer.isCorrect) levelRows[level].correct += 1;

    topicRows[answer.topic] ||= { total: 0, correct: 0 };
    topicRows[answer.topic].total += 1;
    if (answer.isCorrect) topicRows[answer.topic].correct += 1;
  });
  return {
    type: attemptType,
    mode,
    total: questions.length,
    score,
    percent: Math.round((score / Math.max(questions.length, 1)) * 100),
    answers,
    byLevel: Object.entries(levelRows).map(([level, v]) => ({ level, total: v.total, correct: v.correct, percent: Math.round((v.correct / Math.max(v.total, 1)) * 100) })),
    byTopic: Object.entries(topicRows).map(([topic, v]) => ({ topic, total: v.total, correct: v.correct, percent: Math.round((v.correct / Math.max(v.total, 1)) * 100) })).sort((a, b) => a.percent - b.percent),
  };
}

export function MCQEngine({
  questions,
  mode = 'learning',
  attemptType = 'Exam',
  onRestart,
  onComplete,
}: {
  questions: McqQuestion[];
  mode?: 'real' | 'learning';
  attemptType?: string;
  onRestart?: () => void;
  onComplete?: (result: MCQResult) => void;
}) {
  const [selected, setSelected] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitWarning, setSubmitWarning] = useState('');
  const calledComplete = useRef(false);
  const safeQuestions = useMemo(() => questions.map((q) => ({ ...q, options: uniqueOptions(q) })), [questions]);
  const answeredCount = Object.keys(selected).length;
  const score = useMemo(() => safeQuestions.filter((q) => selected[q.id] === q.answer).length, [safeQuestions, selected]);

  const submit = () => {
    if (answeredCount < safeQuestions.length) {
      setSubmitWarning('Answer all MCQs before final submission. لا يوجد أسئلة كتابة؛ اختر إجابة لكل سؤال أولًا.');
      return;
    }
    const result = buildResult(safeQuestions, selected, mode, attemptType);
    setSubmitted(true);
    setSubmitWarning('');
    saveExamAttempt(result);
    if (!calledComplete.current) {
      calledComplete.current = true;
      onComplete?.(result);
    }
  };

  return <section className="space-y-5">
    <div className="rounded-[2rem] border border-emerald-200 bg-emerald-50 p-4 text-sm font-bold leading-7 text-emerald-950">
      MCQ-only engine: choose one option per question. {mode === 'real' ? 'Real Exam Mode hides explanations until final submission.' : 'Learning Mode reveals explanation after selection.'}
      <div className="arabic-support mt-2 text-xs text-emerald-900">هذا القسم اختيارات فقط؛ لا يوجد كتابة. في الوضع الحقيقي لا تظهر الإجابات إلا بعد التسليم.</div>
    </div>

    {safeQuestions.map((q, i) => {
      const chosen = selected[q.id];
      const reveal = (mode === 'learning' && chosen) || submitted;
      const correct = chosen === q.answer;
      return <article key={q.id} className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex flex-wrap items-center gap-2 text-xs font-black uppercase tracking-wider text-emerald-700">
          <span>Question {i + 1}</span>
          <span>•</span>
          <span>{q.topic}</span>
          <span>•</span>
          <span>{q.level || q.difficulty || 'High-yield'}</span>
        </div>
        <h3 className="mt-3 text-xl font-black leading-8 text-slate-950">{q.question}</h3>
        <div className="mt-5 grid gap-3">
          {q.options.map((opt, idx) => {
            const picked = chosen === opt;
            const isAnswer = q.answer === opt;
            const showState = reveal && (picked || isAnswer);
            return <button key={idx} disabled={submitted} onClick={() => setSelected((prev) => ({ ...prev, [q.id]: opt }))} className={`rounded-2xl border p-4 text-left font-semibold transition ${showState ? (isAnswer ? 'border-emerald-400 bg-emerald-50 text-emerald-950' : 'border-rose-300 bg-rose-50 text-rose-950') : picked ? 'border-cyan-400 bg-cyan-50 text-slate-950' : 'border-slate-200 bg-white hover:border-emerald-300 hover:bg-emerald-50'}`}>
              <span className="font-black">{String.fromCharCode(65 + idx)}.</span> {opt}
            </button>;
          })}
        </div>
        {reveal ? <div className={`mt-5 rounded-2xl p-4 ${correct ? 'bg-emerald-50' : 'bg-rose-50'}`}>
          <div className="flex items-center gap-2 text-sm font-black uppercase tracking-wider text-slate-900">{correct ? <CheckCircle2 className="text-emerald-600" /> : <XCircle className="text-rose-600" />} {correct ? 'Correct answer' : 'Review this concept'}</div>
          <p className="mt-2 text-lg font-black text-slate-950">{q.answer}</p>
          <p className="mt-3 text-sm leading-7 text-slate-700">{q.explanation || q.answer}</p>
          {!correct && chosen && q.whyWrong?.[chosen] ? <p className="mt-3 rounded-xl bg-white/70 p-3 text-sm font-semibold leading-6 text-rose-950"><strong>Why your selected option is wrong:</strong> {q.whyWrong[chosen]}</p> : null}
          {!correct ? <ArabicSupport>راجع الفكرة الأساسية ثم أعد حل السؤال لاحقًا لتثبيت المعلومة.</ArabicSupport> : <ArabicSupport>{q.arabic || 'ممتاز. اربط الإجابة بالفكرة السريرية حتى تثبت في الذاكرة.'}</ArabicSupport>}
        </div> : null}
      </article>;
    })}
    <div className="sticky bottom-4 z-20 rounded-3xl border border-slate-200 bg-white/90 p-4 shadow-glass backdrop-blur">
      {submitWarning ? <div className="mb-3 flex items-center gap-2 rounded-2xl bg-amber-50 p-3 text-sm font-bold text-amber-900"><AlertTriangle size={18} /> {submitWarning}</div> : null}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="font-bold text-slate-700">Answered {answeredCount} / {safeQuestions.length}</span>
        {submitted ? <div className="flex items-center gap-3"><span className="flex items-center gap-2 text-xl font-black text-emerald-700"><BarChart3 size={22} /> Score: {score} / {safeQuestions.length}</span>{onRestart ? <Button onClick={onRestart} variant="secondary">New Exam</Button> : null}</div> : <Button onClick={submit}>Submit Final Answers</Button>}
      </div>
    </div>
  </section>;
}
