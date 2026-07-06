'use client';

import { useState, useEffect } from 'react';
import { ParsedQuestion } from './parseQuestions';

export function QuestionCard({ q, total }: { q: ParsedQuestion; total: number }) {
  const [selected, setSelected] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    setSelected(null);
    setChecked(false);
    setShowAnswer(false);
  }, [q.id]);

  const handleSelect = (letter: string) => {
    if (checked) return;
    setSelected(letter);
    setChecked(true);
  };

  const getOptionClass = (letter: string) => {
    if (!checked && !showAnswer) {
      return selected === letter
        ? 'border-cyan-400 bg-cyan-500/20 text-white'
        : 'border-slate-700/40 bg-slate-900/40 text-slate-300 hover:border-slate-500 hover:bg-slate-800/50';
    }
    const isCorrect = letter === q.correctAnswer;
    const isWrong = selected === letter && letter !== q.correctAnswer;
    if (isCorrect) return 'border-emerald-400 bg-emerald-500/20 text-emerald-300';
    if (isWrong) return 'border-red-400 bg-red-500/15 text-red-300';
    return 'border-slate-700/40 bg-slate-900/40 text-slate-500 opacity-60';
  };

  return (
    <div className="rounded-2xl border border-slate-700/30 bg-slate-900/40 p-6 shadow-xl backdrop-blur-md">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-6 border-b border-slate-800 pb-4">
        <div className="flex items-center gap-2">
          <span className="rounded-md bg-cyan-500/15 px-3 py-1 text-sm font-black text-cyan-400">
            Q{q.questionNumber} of {total}
          </span>
        </div>
        {!checked && (
          <button
            onClick={() => { setShowAnswer(true); setChecked(true); }}
            className="text-xs font-bold text-amber-400 hover:text-amber-300 transition"
          >
            Show Answer
          </button>
        )}
      </div>

      <p className="text-base leading-relaxed text-slate-200 font-bold mb-6 whitespace-pre-line">
        {q.stem}
      </p>

      <div className="space-y-3">
        {(['A', 'B', 'C', 'D', 'E'] as const).filter(k => q.options[k]).map(letter => (
          <button
            key={letter}
            onClick={() => handleSelect(letter)}
            disabled={checked && !showAnswer && selected !== letter}
            className={`w-full text-left rounded-xl border px-4 py-3 text-sm font-bold transition flex items-start gap-3 ${getOptionClass(letter)}`}
          >
            <span className="inline-flex shrink-0 items-center justify-center rounded-md bg-slate-950 border border-slate-700/50 w-6 h-6 text-xs text-slate-300">
              {letter}
            </span>
            <span className="mt-0.5 leading-relaxed">{q.options[letter]}</span>
          </button>
        ))}
      </div>

      {checked && (
        <div className="mt-6 rounded-xl p-5">
          {selected === q.correctAnswer ? (
            <p className="text-sm font-black text-emerald-400 flex items-center gap-2">Correct</p>
          ) : (
            <div>
              {selected && (
                <p className="text-sm font-black text-red-400 mb-1">
                  Incorrect - you selected {selected}
                </p>
              )}
              {q.correctAnswer && (
                <p className="text-sm font-black text-emerald-400">
                  Correct answer: {q.correctAnswer}
                </p>
              )}
            </div>
          )}
          
          {q.explanation && (
            <div className="mt-4 pt-4 border-t border-slate-700/50">
              <p className="text-xs font-black text-cyan-400 mb-2 uppercase tracking-wider">Explanation</p>
              <p className="text-sm leading-relaxed text-slate-300 whitespace-pre-line">{q.explanation}</p>
            </div>
          )}
          
          {q.arabicExplanation && q.arabicExplanation.trim() && (
            <div className="mt-4 pt-4 border-t border-slate-700/50">
              <p className="text-xs font-black text-emerald-400 mb-2 uppercase tracking-wider">Arabic Explanation</p>
              <p className="text-sm leading-loose" dir="rtl">
                {q.arabicExplanation}
              </p>
            </div>
          )}
          {q.arabicExplanation && !q.arabicExplanation.trim() && (
            <p className="mt-3 text-xs text-amber-400 font-bold">[Arabic explanation needs source encoding review]</p>
          )}

          {q.needsReview && !q.explanation && !q.arabicExplanation && (
            <p className="mt-3 text-xs text-amber-400 font-bold">[Needs Answer Review / Source incomplete]</p>
          )}
        </div>
      )}
    </div>
  );
}
