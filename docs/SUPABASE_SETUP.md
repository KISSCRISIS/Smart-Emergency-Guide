# Supabase setup

1. Create a free Supabase account.
2. Create a new project.
3. Open SQL Editor and run `supabase/schema.sql`.
4. Copy your project URL and anon key into `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...
```

5. Create the first account using `Kisscrisis@proton.me`.
6. In `profiles`, set this user to:
   - role: `Admin`
   - status: `Approved`
   - ai_enabled: true if desired

Do not expose `SUPABASE_SERVICE_ROLE_KEY`, `OPENAI_API_KEY`, or `GEMINI_API_KEY` in client-side code.


## Production tables now included

The project now includes `supabase/schema.sql` with production-ready starting tables for:

- `profiles` with approval status, role, and `ai_enabled`
- `progress_items`
- `bookmarks`
- `exam_attempts`
- `ai_usage_logs`
- `protection_logs`
- `visual_asset_reviews`

After running the schema, create the owner account using `Kisscrisis@proton.me`, then run:

```sql
update public.profiles
set role='Admin', status='Approved', ai_enabled=true
where email='Kisscrisis@proton.me';
```

The app still works in local demo mode when Supabase variables are missing, but real approval, progress sync, and AI permission control require this database.
