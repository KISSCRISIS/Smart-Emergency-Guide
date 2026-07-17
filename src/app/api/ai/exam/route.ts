import { NextResponse } from 'next/server';
import { buildExamPrompt, localExamFallback } from '@/lib/aiHelpers';

import { requireActiveApiUser } from '@/lib/auth/require-active-api-user';

export const dynamic = 'force-dynamic';

async function callOpenAI(prompt: string) {
  const key = process.env.OPENAI_API_KEY;
  if (!key) return null;
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key}` },
    body: JSON.stringify({
      model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'Return strict JSON with a questions array. Do not include markdown.' },
        { role: 'user', content: prompt },
      ],
      temperature: 0.7,
    }),
  });
  if (!response.ok) return null;
  const json = await response.json();
  const text = json?.choices?.[0]?.message?.content || '';
  try { return { provider: 'openai', ...JSON.parse(text) }; } catch { return { provider: 'openai', raw: text }; }
}

async function callGemini(prompt: string) {
  const key = process.env.GEMINI_API_KEY;
  if (!key) return null;
  const model = process.env.GEMINI_MODEL || 'gemini-1.5-flash';
  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ contents: [{ parts: [{ text: `${prompt}\nReturn strict JSON only.` }] }] }),
  });
  if (!response.ok) return null;
  const json = await response.json();
  const text = json?.candidates?.[0]?.content?.parts?.[0]?.text || '';
  try { return { provider: 'gemini', ...JSON.parse(text.replace(/```json|```/g, '').trim()) }; } catch { return { provider: 'gemini', raw: text }; }
}

export async function POST(request: Request) {
  const accessDenied = await requireActiveApiUser();

  if (accessDenied) {
    return accessDenied;
  }
  const body = await request.json().catch(() => ({}));
  const prompt = buildExamPrompt(body);
  const providerPreference = body?.provider || 'auto';

  let aiResult = null;
  if (providerPreference === 'openai' || providerPreference === 'auto') aiResult = await callOpenAI(prompt);
  if (!aiResult && (providerPreference === 'gemini' || providerPreference === 'auto')) aiResult = await callGemini(prompt);

  if (aiResult) return NextResponse.json(aiResult);
  return NextResponse.json(localExamFallback(body));
}
