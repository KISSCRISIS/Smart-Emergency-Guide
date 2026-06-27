# Smart Emergency Guide — Complete Clean Rebuild v2

**Master Emergency Medicine with Confidence**  
**Learn faster. Think smarter. Save lives.**

This is a clean professional rebuild of Smart Emergency Guide using:

- Next.js App Router
- TypeScript
- Tailwind CSS
- Supabase-ready Auth/PostgreSQL/Storage architecture
- Secure AI routes for OpenAI / Gemini
- Local fallback mode when Supabase or AI keys are not configured

## What is included

- English-first UI with short Arabic support explanations
- Official logo and four-corner watermarks
- User watermark and content protection layer
- Admin owner information
- WhatsApp support link
- Dashboard
- Topics
- ECG Atlas
- POCUS Atlas
- Drug Handbook
- Critical Care
- Toxicology
- Board Review
- Visual Atlas
- Flashcards
- Numericals
- Exam Traps
- Algorithms
- Antidotes
- Visual Signs
- Study Map
- Search
- Bookmarks
- Progress Intelligence
- Exam Yourself
- Medical Level Assessment
- AI Exam Generator
- AI Study Assistant
- Admin Dashboard
- Supabase SQL schema
- Netlify and GitHub deployment notes

## Run locally

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

## Build

```bash
npm run build
npm run start
```

## Supabase setup

1. Create a Supabase account and project.
2. Open Supabase SQL Editor.
3. Run `supabase/schema.sql`.
4. Copy `.env.example` to `.env.local`.
5. Fill in the Supabase URL and anon key.
6. Restart the dev server.

The app also includes a local demo fallback so the interface can be used before Supabase is connected.

## AI setup

AI works in two modes:

1. **Local secure fallback**: works without API keys using approved internal database content.
2. **Provider mode**: add `OPENAI_API_KEY` or `GEMINI_API_KEY` in `.env.local` to use server-side AI calls.

Never put AI API keys in client-side code.

## Admin owner

- Name: Dr.Alaa Al-Aqrabawi
- Email: Kisscrisis@proton.me
- WhatsApp: +962796959573

## Content note

This platform is built for private medical education, exam preparation, and clinical reasoning support. It does not replace licensed medical judgment, official hospital protocols, or direct patient care decisions.
