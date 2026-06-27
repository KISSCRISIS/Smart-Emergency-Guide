# AI Production Setup — Smart Emergency Guide

The project now includes live-provider ready AI routes plus local safe fallback mode.

## Environment variables

```env
OPENAI_API_KEY=...
OPENAI_MODEL=gpt-4o-mini
GEMINI_API_KEY=...
GEMINI_MODEL=gemini-1.5-flash
AI_PROVIDER=auto
```

## Routes

- `/api/ai/status` — checks whether OpenAI/Gemini keys are configured.
- `/api/ai/study` — page-aware study tutor, English first + short Arabic support.
- `/api/ai/exam` — MCQ generation route with local fallback if providers are not configured.

## Safety rules

AI must be used as a study tutor only. It must not replace local protocols or clinical judgment. Doses, ventilator settings, antidote regimens, and high-risk treatment steps require verification with hospital protocol/pharmacy/ICU/toxicology/senior clinicians.

## Access control

Production AI access should be controlled by the `profiles.ai_enabled` field in Supabase and admin dashboard approvals. Client UI can show the tutor, but backend routes should be protected further before public deployment if the app is exposed outside approved users.
