'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';

export type ProgressState = 'New' | 'Learning' | 'Wrong' | 'Mastered';
export type ProgressMap = Record<string, { state: ProgressState; section: string; updatedAt: string; title?: string }>;
const KEY = 'seg_progress_v1';
const EXAM_KEY = 'seg_exam_attempts_v1';
const PROGRESS_EVENT = 'seg-progress-updated';

function readProgress(): ProgressMap {
  if (typeof window === 'undefined') return {};
  try { return JSON.parse(localStorage.getItem(KEY) || '{}'); } catch { return {}; }
}

export function useProgress() {
  const [progress, setProgress] = useState<ProgressMap>({});
  useEffect(() => {
    const refresh = () => setProgress(readProgress());
    refresh();
    window.addEventListener(PROGRESS_EVENT, refresh);
    window.addEventListener('storage', refresh);
    return () => {
      window.removeEventListener(PROGRESS_EVENT, refresh);
      window.removeEventListener('storage', refresh);
    };
  }, []);

  const setItemState = useCallback((id: string, state: ProgressState, section: string, title?: string) => {
    setProgress((prev) => {
      const next = { ...prev, [id]: { state, section, title, updatedAt: new Date().toISOString() } };
      localStorage.setItem(KEY, JSON.stringify(next));
      window.dispatchEvent(new CustomEvent(PROGRESS_EVENT));
      return next;
    });
  }, []);

  const getItemState = useCallback((id: string): ProgressState => progress[id]?.state || 'New', [progress]);
  const stats = useMemo(() => {
    const values = Object.values(progress);
    const mastered = values.filter((x) => x.state === 'Mastered').length;
    const learning = values.filter((x) => x.state === 'Learning').length;
    const wrong = values.filter((x) => x.state === 'Wrong').length;
    return { total: values.length, mastered, learning, wrong, percent: values.length ? Math.round((mastered / values.length) * 100) : 0, recent: values.slice(-8).reverse() };
  }, [progress]);

  return { progress, setItemState, getItemState, stats };
}

export function saveExamAttempt(attempt: any) {
  if (typeof window === 'undefined') return;
  const existing = JSON.parse(localStorage.getItem(EXAM_KEY) || '[]');
  existing.unshift({ ...attempt, createdAt: new Date().toISOString() });
  localStorage.setItem(EXAM_KEY, JSON.stringify(existing.slice(0, 100)));
}

export function getExamAttempts(): any[] {
  if (typeof window === 'undefined') return [];
  try { return JSON.parse(localStorage.getItem(EXAM_KEY) || '[]'); } catch { return []; }
}

export function analyzeAttempts(attempts: any[]) {
  const byTopic: Record<string, { total: number; correct: number }> = {};
  attempts.forEach((attempt) => {
    (attempt.answers || []).forEach((answer: any) => {
      const topic = answer.topic || 'Emergency Medicine';
      byTopic[topic] ||= { total: 0, correct: 0 };
      byTopic[topic].total += 1;
      if (answer.isCorrect) byTopic[topic].correct += 1;
    });
  });
  const rows = Object.entries(byTopic).map(([topic, v]) => ({ topic, total: v.total, correct: v.correct, accuracy: Math.round((v.correct / Math.max(v.total, 1)) * 100) }));
  return {
    rows: rows.sort((a, b) => a.accuracy - b.accuracy),
    weak: rows.filter((x) => x.total >= 1 && x.accuracy < 60).sort((a, b) => a.accuracy - b.accuracy),
    strong: rows.filter((x) => x.total >= 1 && x.accuracy >= 80).sort((a, b) => b.accuracy - a.accuracy),
  };
}
