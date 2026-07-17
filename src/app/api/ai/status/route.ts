import { NextResponse } from 'next/server';

import { requireActiveApiUser } from '@/lib/auth/require-active-api-user';

export const dynamic = 'force-dynamic';

export async function GET() {
  const accessResponse = await requireActiveApiUser();

  if (accessResponse) {
    return accessResponse;
  }

  return NextResponse.json({
    aiAvailable: Boolean(
      process.env.OPENAI_API_KEY || process.env.GEMINI_API_KEY,
    ),
  });
}
