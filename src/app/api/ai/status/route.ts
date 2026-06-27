import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json({
    openaiConfigured: Boolean(process.env.OPENAI_API_KEY),
    geminiConfigured: Boolean(process.env.GEMINI_API_KEY),
    defaultProvider: process.env.AI_PROVIDER || 'auto',
    openaiModel: process.env.OPENAI_MODEL || 'gpt-4o-mini',
    geminiModel: process.env.GEMINI_MODEL || 'gemini-1.5-flash',
    mode: process.env.OPENAI_API_KEY || process.env.GEMINI_API_KEY ? 'live-ai-ready' : 'local-secure-fallback',
    safety: 'AI output is study support only. High-risk doses, ventilator settings, antidotes, and treatment pathways must be verified locally.',
  });
}
