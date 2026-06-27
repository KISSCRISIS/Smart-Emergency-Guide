-- Smart Emergency Guide Supabase schema
-- Run this in Supabase SQL Editor after creating the project.

create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null,
  email text not null unique,
  phone text,
  specialty text,
  role text not null default 'Student' check (role in ('Student','Admin','Editor')),
  status text not null default 'Pending Approval' check (status in ('Pending Approval','Approved','Rejected','Suspended')),
  ai_enabled boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.progress_items (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  item_id text not null,
  section text not null,
  status text not null check (status in ('learning','mastered','again','good')),
  title text,
  updated_at timestamptz not null default now(),
  unique(user_id, item_id)
);

create table if not exists public.bookmarks (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  item_id text not null,
  title text not null,
  section text not null,
  href text not null,
  type text,
  created_at timestamptz not null default now(),
  unique(user_id, item_id)
);

create table if not exists public.exam_attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  attempt_type text not null,
  mode text,
  total int not null,
  score int not null,
  percent int not null,
  answers jsonb not null default '[]'::jsonb,
  by_level jsonb not null default '[]'::jsonb,
  by_topic jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.ai_usage_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  page_path text,
  page_title text,
  provider text,
  prompt text,
  response_preview text,
  created_at timestamptz not null default now()
);

create table if not exists public.protection_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  action text not null,
  page_path text,
  severity text default 'info',
  metadata jsonb default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.visual_asset_reviews (
  id uuid primary key default gen_random_uuid(),
  asset_id text not null unique,
  reviewed_by uuid references auth.users(id) on delete set null,
  status text not null default 'needs_review' check (status in ('needs_review','approved','hidden','remap_needed')),
  mapped_topic text,
  mapped_section text,
  notes text,
  updated_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.progress_items enable row level security;
alter table public.bookmarks enable row level security;
alter table public.exam_attempts enable row level security;
alter table public.ai_usage_logs enable row level security;
alter table public.protection_logs enable row level security;
alter table public.visual_asset_reviews enable row level security;

create policy "profiles read own" on public.profiles for select using (auth.uid() = id);
create policy "profiles insert own" on public.profiles for insert with check (auth.uid() = id);
create policy "profiles update own limited" on public.profiles for update using (auth.uid() = id) with check (auth.uid() = id);

create policy "progress own" on public.progress_items for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "bookmarks own" on public.bookmarks for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "attempts own" on public.exam_attempts for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "ai logs own" on public.ai_usage_logs for insert with check (auth.uid() = user_id or user_id is null);
create policy "protection logs own" on public.protection_logs for insert with check (auth.uid() = user_id or user_id is null);

-- Admin/editor policies should be tightened for production through SECURITY DEFINER functions or service-role API routes.
-- The first admin should be manually set after sign-up:
-- update public.profiles set role='Admin', status='Approved', ai_enabled=true where email='Kisscrisis@proton.me';

-- Automated Certificates of Completion
create table if not exists public.certificates (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  student_name text not null,
  path_id text not null,
  path_name text not null,
  serial_number text not null unique,
  verification_url text not null,
  status text not null default 'valid' check (status in ('valid','revoked','expired')),
  issued_at timestamptz not null default now(),
  pdf_url text,
  metadata jsonb not null default '{}'::jsonb
);

alter table public.certificates enable row level security;

create policy "certificates public verification read" on public.certificates for select using (status = 'valid');
create policy "certificates owner insert" on public.certificates for insert with check (auth.uid() = user_id or user_id is null);
create policy "certificates owner read" on public.certificates for select using (auth.uid() = user_id or status = 'valid');
