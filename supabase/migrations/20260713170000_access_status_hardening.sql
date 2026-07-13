begin;

-- ---------------------------------------------------------------------------
-- Separate account access, professional verification, subscription,
-- educator approval, professional grade, and primary learning track.
-- ---------------------------------------------------------------------------

alter table public.profiles
  add column if not exists professional_grade text,
  add column if not exists primary_learning_track text,
  add column if not exists account_status text,
  add column if not exists professional_verification_status text,
  add column if not exists subscription_status text,
  add column if not exists educator_status text;

-- Backfill the professional grade from the former combined clinical role.
update public.profiles
set professional_grade = case clinical_role
  when 'medical_student' then 'medical_student'
  when 'intern_jmc' then 'intern_doctor'
  when 'general_practitioner' then 'general_practitioner'
  when 'em_resident' then 'em_resident'
  when 'ems_paramedic' then 'ems_paramedic'
  when 'emergency_nurse' then 'emergency_nurse'
  else 'other'
end
where professional_grade is null;

-- Keep the current learning route as the user's primary track.
update public.profiles
set primary_learning_track = case
  when clinical_role in (
    'intern_jmc',
    'em_resident',
    'medical_student',
    'general_practitioner',
    'ems_paramedic',
    'emergency_nurse',
    'other'
  ) then clinical_role
  else 'other'
end
where primary_learning_track is null;

-- Legacy Pending Approval and Approved accounts are active accounts.
-- Email confirmation and profile completion remain separate requirements.
update public.profiles
set account_status = case status
  when 'Rejected' then 'rejected'
  when 'Suspended' then 'suspended'
  else 'active'
end
where account_status is null;

update public.profiles
set professional_verification_status = 'not_submitted'
where professional_verification_status is null;

update public.profiles
set subscription_status = 'free'
where subscription_status is null;

update public.profiles
set educator_status = 'not_applied'
where educator_status is null;

-- Keep the old field compatible until all application code stops using it.
update public.profiles
set status = 'Approved'
where status = 'Pending Approval';

alter table public.profiles
  alter column professional_grade set default 'other',
  alter column professional_grade set not null,
  alter column primary_learning_track set default 'other',
  alter column primary_learning_track set not null,
  alter column account_status set default 'active',
  alter column account_status set not null,
  alter column professional_verification_status set default 'not_submitted',
  alter column professional_verification_status set not null,
  alter column subscription_status set default 'free',
  alter column subscription_status set not null,
  alter column educator_status set default 'not_applied',
  alter column educator_status set not null,
  alter column status set default 'Approved';

alter table public.profiles
  drop constraint if exists profiles_professional_grade_check;

alter table public.profiles
  add constraint profiles_professional_grade_check
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
  );

alter table public.profiles
  drop constraint if exists profiles_primary_learning_track_check;

alter table public.profiles
  add constraint profiles_primary_learning_track_check
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
  );

alter table public.profiles
  drop constraint if exists profiles_account_status_check;

alter table public.profiles
  add constraint profiles_account_status_check
  check (
    account_status in (
      'active',
      'suspended',
      'rejected',
      'blocked'
    )
  );

alter table public.profiles
  drop constraint if exists profiles_professional_verification_status_check;

alter table public.profiles
  add constraint profiles_professional_verification_status_check
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
  );

alter table public.profiles
  drop constraint if exists profiles_subscription_status_check;

alter table public.profiles
  add constraint profiles_subscription_status_check
  check (
    subscription_status in (
      'free',
      'trial',
      'premium',
      'expired',
      'cancelled'
    )
  );

alter table public.profiles
  drop constraint if exists profiles_educator_status_check;

alter table public.profiles
  add constraint profiles_educator_status_check
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
  );

-- Admin access now depends on the dedicated account status.
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

-- New accounts support a separate professional grade and learning track.
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

-- Protect authorization and review fields while retaining the phone lock.
create or replace function private.protect_profile_security_fields()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
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
  from public, anon;

grant usage on schema private to authenticated;
grant execute on function private.protect_profile_security_fields()
  to authenticated;

-- ---------------------------------------------------------------------------
-- Transitional compatibility between the legacy status field and the new
-- dedicated account_status field. Remove only after all Admin code has moved
-- permanently to account_status.
-- ---------------------------------------------------------------------------

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

drop trigger if exists sync_legacy_account_status
  on public.profiles;

create trigger sync_legacy_account_status
  before insert or update on public.profiles
  for each row
  execute function private.sync_legacy_account_status();

commit;
