# Supabase setup

## Local development variables

Create `.env.local` in the project root and add only the public browser values:

```env
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_publishable_key
```

Do not add a Supabase secret key or service-role key to the browser application, and do not commit `.env.local`.

## Development project

The current Auth development project is configured with:

- Email signup enabled
- Confirm Email enabled
- Anonymous sign-ins disabled
- Site URL: `http://localhost:3000`
- Redirect URL: `http://localhost:3000/auth/callback`
- Password-reset redirect: `http://localhost:3000/auth/reset-password`

Run `supabase/schema.sql` only against the intended new development project and only after reviewing it.

## Current account model

SEG separates these concepts:

- `account_status`: `active`, `suspended`, `rejected`, or `blocked`
- `professional_verification_status`: credential-review workflow only
- `subscription_status`: `free`, `trial`, `premium`, `expired`, or `cancelled`
- `educator_status`: educator-application workflow only
- `professional_grade`: the user's self-reported current professional grade
- `primary_learning_track`: the default SEG learning track opened after sign-in

`professional_grade` and `primary_learning_track` are intentionally separate. Selecting Specialist or Consultant does not grant professional verification, a badge, or a public verified title.

The legacy `status` and `clinical_role` columns remain temporarily for compatibility. New application code must use `account_status` and `primary_learning_track`.

## Admin bootstrap

Create the owner through the normal Auth signup flow first. After the corresponding profile exists, promote it through a controlled database/admin operation:

```sql
update public.profiles
set role = 'Admin',
    account_status = 'active',
    status = 'Approved',
    ai_enabled = true
where lower(email) = lower('Kisscrisis@proton.me');
```

Do not place privileged database credentials in client-side code.

## Current implementation status

The SSR client foundation consists of:

- `src/lib/supabase.ts` — browser client and temporary compatibility export
- `src/lib/supabase/server.ts` — Server Components, Route Handlers, and Server Actions
- `src/lib/supabase/middleware.ts` — request-scoped middleware client

Authentication routes and middleware authorization use the separated account-status and primary-track model.

## Migration history

Applied development migrations:

- `20260713160000_step6_2_lock_profile_phone.sql`
- `20260713170000_access_status_hardening.sql`

Do not edit an already-applied migration. Add a new timestamped migration for future database changes.
