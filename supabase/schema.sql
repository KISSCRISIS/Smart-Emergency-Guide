-- Smart Emergency Guide (SEG)
-- Auth Phase 1: hardened Supabase baseline
-- Target: a NEW Supabase project that has not run an older SEG schema.
-- Review before running. Do not place service-role keys in client code.

begin;

create extension if not exists pgcrypto;

create schema if not exists private;
revoke all on schema private from public;

-- ---------------------------------------------------------------------------
-- User profiles
-- ---------------------------------------------------------------------------

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null
    check (char_length(btrim(full_name)) between 2 and 120),
  email text not null,
  phone text
    check (phone is null or phone ~ '^\+[1-9][0-9]{7,14}$'),
  clinical_role text not null default 'other'
    check (
      clinical_role in (
        'intern_jmc',
        'em_resident',
        'medical_student',
        'general_practitioner',
        'ems_paramedic',
        'emergency_nurse',
        'other'
      )
    ),
  professional_grade text not null default 'other'
    check (
      professional_grade in (
        'medical_student',
        'intern_doctor',
        'general_practitioner',
        'em_resident',
        'specialist_physician',
        'consultant_physician',
        'ems_paramedic',
        'emergency_nurse',
        'other'
      )
    ),
  primary_learning_track text not null default 'other'
    check (
      primary_learning_track in (
        'intern_jmc',
        'em_resident',
        'medical_student',
        'general_practitioner',
        'ems_paramedic',
        'emergency_nurse',
        'other'
      )
    ),
  specialty text,
  role text not null default 'Student'
    check (role in ('Student', 'Editor', 'Admin')),
  status text not null default 'Approved'
    check (
      status in (
        'Pending Approval',
        'Approved',
        'Rejected',
        'Suspended'
      )
    ),
  account_status text not null default 'active'
    check (
      account_status in (
        'active',
        'suspended',
        'rejected',
        'blocked'
      )
    ),
  professional_verification_status text not null default 'not_submitted'
    check (
      professional_verification_status in (
        'not_submitted',
        'draft',
        'submitted',
        'under_review',
        'needs_changes',
        'verified',
        'rejected',
        'revoked',
        'expired'
      )
    ),
  subscription_status text not null default 'free'
    check (
      subscription_status in (
        'free',
        'trial',
        'premium',
        'expired',
        'cancelled'
      )
    ),
  educator_status text not null default 'not_applied'
    check (
      educator_status in (
        'not_applied',
        'draft',
        'submitted',
        'admin_review',
        'needs_changes',
        'approved_educator',
        'temporarily_suspended',
        'rejected'
      )
    ),
  ai_enabled boolean not null default false,
  profile_completed boolean not null default false,
  terms_accepted_at timestamptz,
  educational_disclaimer_accepted_at timestamptz,
  reviewed_at timestamptz,
  reviewed_by uuid references auth.users(id) on delete set null,
  review_note text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint profiles_completed_requirements check (
    profile_completed = false
    or (
      phone is not null
      and terms_accepted_at is not null
      and educational_disclaimer_accepted_at is not null
    )
  )
);

create unique index profiles_email_lower_unique
  on public.profiles (lower(email));

create unique index profiles_phone_unique
  on public.profiles (phone)
  where phone is not null;

-- Returns true only for an authenticated, active SEG administrator.
create or replace function private.is_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1
    from public.profiles
    where id = auth.uid()
      and role = 'Admin'
      and account_status = 'active'
  );
$$;

revoke all on function private.is_admin() from public;
grant usage on schema private to authenticated;
grant execute on function private.is_admin() to authenticated;

-- Creates a safe profile after Supabase Auth creates a user.
-- User-supplied metadata is accepted only for non-privileged profile fields.
create or replace function private.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  metadata jsonb := coalesce(new.raw_user_meta_data, '{}'::jsonb);
  candidate_name text;
  candidate_phone text;
  candidate_primary_track text;
  candidate_professional_grade text;
  accepted_terms boolean;
  accepted_disclaimer boolean;
  completed boolean;
begin
  if new.email is null or btrim(new.email) = '' then
    raise exception 'SEG requires an email address';
  end if;

  candidate_name := left(
    coalesce(
      nullif(btrim(metadata ->> 'full_name'), ''),
      nullif(btrim(metadata ->> 'name'), ''),
      split_part(new.email, '@', 1),
      'SEG Learner'
    ),
    120
  );

  if char_length(candidate_name) < 2 then
    candidate_name := 'SEG Learner';
  end if;

  candidate_phone := nullif(btrim(metadata ->> 'phone'), '');

  if candidate_phone is not null
     and candidate_phone !~ '^\+[1-9][0-9]{7,14}$' then
    candidate_phone := null;
  end if;

  candidate_primary_track := coalesce(
    nullif(btrim(metadata ->> 'primary_learning_track'), ''),
    nullif(btrim(metadata ->> 'clinical_role'), ''),
    'other'
  );

  if candidate_primary_track not in (
    'intern_jmc',
    'em_resident',
    'medical_student',
    'general_practitioner',
    'ems_paramedic',
    'emergency_nurse',
    'other'
  ) then
    candidate_primary_track := 'other';
  end if;

  candidate_professional_grade := coalesce(
    nullif(btrim(metadata ->> 'professional_grade'), ''),
    case candidate_primary_track
      when 'medical_student' then 'medical_student'
      when 'intern_jmc' then 'intern_doctor'
      when 'general_practitioner' then 'general_practitioner'
      when 'em_resident' then 'em_resident'
      when 'ems_paramedic' then 'ems_paramedic'
      when 'emergency_nurse' then 'emergency_nurse'
      else 'other'
    end
  );

  if candidate_professional_grade not in (
    'medical_student',
    'intern_doctor',
    'general_practitioner',
    'em_resident',
    'specialist_physician',
    'consultant_physician',
    'ems_paramedic',
    'emergency_nurse',
    'other'
  ) then
    candidate_professional_grade := 'other';
  end if;

  accepted_terms :=
    coalesce(metadata ->> 'accepted_terms', 'false') = 'true';

  accepted_disclaimer :=
    coalesce(
      metadata ->> 'accepted_educational_disclaimer',
      'false'
    ) = 'true';

  completed :=
    candidate_phone is not null
    and accepted_terms
    and accepted_disclaimer;

  insert into public.profiles (
    id,
    full_name,
    email,
    phone,
    clinical_role,
    professional_grade,
    primary_learning_track,
    role,
    status,
    account_status,
    professional_verification_status,
    subscription_status,
    educator_status,
    ai_enabled,
    profile_completed,
    terms_accepted_at,
    educational_disclaimer_accepted_at
  )
  values (
    new.id,
    candidate_name,
    lower(new.email),
    candidate_phone,
    candidate_primary_track,
    candidate_professional_grade,
    candidate_primary_track,
    'Student',
    'Approved',
    'active',
    'not_submitted',
    'free',
    'not_applied',
    false,
    completed,
    case when accepted_terms then now() else null end,
    case when accepted_disclaimer then now() else null end
  );

  return new;
end;
$$;

revoke all on function private.handle_new_user()
  from public, anon, authenticated;

drop trigger if exists on_auth_user_created on auth.users;

create trigger on_auth_user_created
  after insert on auth.users
  for each row
  execute function private.handle_new_user();

-- Prevents normal users from changing authorization or review fields.
create or replace function private.protect_profile_security_fields()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  -- A signed-in user may set a missing phone once but cannot change or clear
  -- an existing phone. A future verified server-only recovery flow can
  -- perform an explicitly authorized phone change.
  if auth.uid() is not null
     and old.phone is not null
     and new.phone is distinct from old.phone then
    raise exception
      'Phone number cannot be changed from an authenticated client'
      using errcode = '42501';
  end if;

  if auth.uid() is not null and not private.is_admin() then
    if row(
      new.id,
      new.email,
      new.role,
      new.status,
      new.account_status,
      new.professional_verification_status,
      new.subscription_status,
      new.educator_status,
      new.ai_enabled,
      new.reviewed_at,
      new.reviewed_by,
      new.review_note,
      new.created_at
    ) is distinct from row(
      old.id,
      old.email,
      old.role,
      old.status,
      old.account_status,
      old.professional_verification_status,
      old.subscription_status,
      old.educator_status,
      old.ai_enabled,
      old.reviewed_at,
      old.reviewed_by,
      old.review_note,
      old.created_at
    ) then
      raise exception
        'Protected profile fields cannot be changed by this user'
        using errcode = '42501';
    end if;
  end if;

  return new;
end;
$$;

revoke all on function private.protect_profile_security_fields()
  from public, anon, authenticated;

create trigger protect_profile_security_fields
  before update on public.profiles
  for each row
  execute function private.protect_profile_security_fields();

-- Transitional compatibility between the legacy status field and the new
-- dedicated account_status field.
create or replace function private.sync_legacy_account_status()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  if tg_op = 'INSERT' then
    if new.account_status is null then
      new.account_status := case new.status
        when 'Rejected' then 'rejected'
        when 'Suspended' then 'suspended'
        else 'active'
      end;
    end if;

    new.status := case new.account_status
      when 'rejected' then 'Rejected'
      when 'suspended' then 'Suspended'
      when 'blocked' then 'Suspended'
      else 'Approved'
    end;

    return new;
  end if;

  if new.account_status is distinct from old.account_status then
    new.status := case new.account_status
      when 'rejected' then 'Rejected'
      when 'suspended' then 'Suspended'
      when 'blocked' then 'Suspended'
      else 'Approved'
    end;
  elsif new.status is distinct from old.status then
    new.account_status := case new.status
      when 'Rejected' then 'rejected'
      when 'Suspended' then 'suspended'
      else 'active'
    end;
  end if;

  return new;
end;
$$;

revoke all on function private.sync_legacy_account_status()
  from public, anon, authenticated;

create trigger sync_legacy_account_status
  before insert or update on public.profiles
  for each row
  execute function private.sync_legacy_account_status();

create or replace function private.set_updated_at()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  new.updated_at := now();
  return new;
end;
$$;

revoke all on function private.set_updated_at()
  from public, anon, authenticated;

create trigger set_profiles_updated_at
  before update on public.profiles
  for each row
  execute function private.set_updated_at();

-- ---------------------------------------------------------------------------
-- Learning data
-- ---------------------------------------------------------------------------

create table public.progress_items (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  item_id text not null,
  section text not null,
  status text not null
    check (status in ('learning', 'mastered', 'again', 'good')),
  title text,
  updated_at timestamptz not null default now(),
  unique (user_id, item_id)
);

create table public.bookmarks (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  item_id text not null,
  title text not null,
  section text not null,
  href text not null,
  type text,
  created_at timestamptz not null default now(),
  unique (user_id, item_id)
);

create table public.exam_attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  attempt_type text not null,
  mode text,
  total integer not null check (total >= 0),
  score integer not null check (score >= 0),
  percent integer not null check (percent between 0 and 100),
  answers jsonb not null default '[]'::jsonb,
  by_level jsonb not null default '[]'::jsonb,
  by_topic jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now(),
  constraint exam_attempt_score_valid check (score <= total)
);

create table public.ai_usage_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  page_path text,
  page_title text,
  provider text,
  prompt text,
  response_preview text,
  created_at timestamptz not null default now()
);

create table public.protection_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  action text not null,
  page_path text,
  severity text not null default 'info'
    check (severity in ('info', 'warning', 'high')),
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table public.visual_asset_reviews (
  id uuid primary key default gen_random_uuid(),
  asset_id text not null unique,
  reviewed_by uuid references auth.users(id) on delete set null,
  status text not null default 'needs_review'
    check (
      status in (
        'needs_review',
        'approved',
        'hidden',
        'remap_needed'
      )
    ),
  mapped_topic text,
  mapped_section text,
  notes text,
  updated_at timestamptz not null default now()
);

create table public.certificates (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  student_name text not null,
  path_id text not null,
  path_name text not null,
  serial_number text not null unique,
  verification_url text not null,
  status text not null default 'valid'
    check (status in ('valid', 'revoked', 'expired')),
  issued_at timestamptz not null default now(),
  pdf_url text,
  metadata jsonb not null default '{}'::jsonb
);

-- ---------------------------------------------------------------------------
-- Row Level Security
-- ---------------------------------------------------------------------------

alter table public.profiles enable row level security;
alter table public.progress_items enable row level security;
alter table public.bookmarks enable row level security;
alter table public.exam_attempts enable row level security;
alter table public.ai_usage_logs enable row level security;
alter table public.protection_logs enable row level security;
alter table public.visual_asset_reviews enable row level security;
alter table public.certificates enable row level security;

create policy profiles_select_own_or_admin
  on public.profiles
  for select
  to authenticated
  using (auth.uid() = id or private.is_admin());

create policy profiles_update_own_or_admin
  on public.profiles
  for update
  to authenticated
  using (auth.uid() = id or private.is_admin())
  with check (auth.uid() = id or private.is_admin());

create policy progress_items_own
  on public.progress_items
  for all
  to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy bookmarks_own
  on public.bookmarks
  for all
  to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy exam_attempts_own
  on public.exam_attempts
  for all
  to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy ai_usage_logs_insert_own
  on public.ai_usage_logs
  for insert
  to authenticated
  with check (auth.uid() = user_id);

create policy protection_logs_insert_own
  on public.protection_logs
  for insert
  to authenticated
  with check (auth.uid() = user_id);

create policy visual_asset_reviews_admin_only
  on public.visual_asset_reviews
  for all
  to authenticated
  using (private.is_admin())
  with check (private.is_admin());

create policy certificates_owner_or_admin_read
  on public.certificates
  for select
  to authenticated
  using (auth.uid() = user_id or private.is_admin());

-- ---------------------------------------------------------------------------
-- Explicit API grants
-- ---------------------------------------------------------------------------

revoke all on all tables in schema public from anon, authenticated;

grant select, update
  on public.profiles
  to authenticated;

grant select, insert, update, delete
  on public.progress_items,
     public.bookmarks,
     public.exam_attempts
  to authenticated;

grant insert
  on public.ai_usage_logs,
     public.protection_logs
  to authenticated;

grant select, insert, update, delete
  on public.visual_asset_reviews
  to authenticated;

grant select
  on public.certificates
  to authenticated;

commit;

-- First administrator:
-- 1. Register normally through SEG.
-- 2. Confirm the email.
-- 3. Run the following manually in Supabase SQL Editor:
--
-- update public.profiles
-- set
--   role = 'Admin',
--   account_status = 'active',
--   status = 'Approved',
--   reviewed_at = now(),
--   reviewed_by = id
-- where lower(email) = lower('Kisscrisis@proton.me');
