begin;

alter table public.profiles
  add column if not exists admin_level text not null default 'none',
  add column if not exists avatar_path text,
  add column if not exists avatar_is_public boolean not null default false,
  add column if not exists avatar_updated_at timestamptz,
  add column if not exists professional_verification_review_note text,
  add column if not exists professional_verification_reviewed_at timestamptz,
  add column if not exists professional_verification_reviewed_by uuid
    references auth.users(id) on delete set null;

alter table public.profiles
  drop constraint if exists profiles_admin_level_check;

alter table public.profiles
  add constraint profiles_admin_level_check
  check (admin_level in ('none', 'owner', 'backup'));

insert into storage.buckets (
  id, name, public, file_size_limit, allowed_mime_types
)
values (
  'avatars', 'avatars', false, 3145728,
  array['image/jpeg', 'image/png', 'image/webp']
)
on conflict (id) do update
set public = excluded.public,
    file_size_limit = excluded.file_size_limit,
    allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists avatars_owner_or_admin_read on storage.objects;
create policy avatars_owner_or_admin_read
  on storage.objects for select to authenticated
  using (
    bucket_id = 'avatars'
    and (
      (storage.foldername(name))[1] = auth.uid()::text
      or private.is_admin()
    )
  );

drop policy if exists avatars_owner_insert on storage.objects;
create policy avatars_owner_insert
  on storage.objects for insert to authenticated
  with check (
    bucket_id = 'avatars'
    and (storage.foldername(name))[1] = auth.uid()::text
  );

drop policy if exists avatars_owner_update on storage.objects;
create policy avatars_owner_update
  on storage.objects for update to authenticated
  using (
    bucket_id = 'avatars'
    and (storage.foldername(name))[1] = auth.uid()::text
  )
  with check (
    bucket_id = 'avatars'
    and (storage.foldername(name))[1] = auth.uid()::text
  );

drop policy if exists avatars_owner_delete on storage.objects;
create policy avatars_owner_delete
  on storage.objects for delete to authenticated
  using (
    bucket_id = 'avatars'
    and (storage.foldername(name))[1] = auth.uid()::text
  );

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
    raise exception 'Phone number cannot be changed from an authenticated client'
      using errcode = '42501';
  end if;

  if auth.uid() is not null and not private.is_admin() then
    if row(
      new.id, new.email, new.role, new.admin_level,
      new.status, new.account_status,
      new.professional_verification_status,
      new.professional_verification_review_note,
      new.professional_verification_reviewed_at,
      new.professional_verification_reviewed_by,
      new.subscription_status, new.educator_status,
      new.ai_enabled, new.reviewed_at, new.reviewed_by,
      new.review_note, new.created_at
    ) is distinct from row(
      old.id, old.email, old.role, old.admin_level,
      old.status, old.account_status,
      old.professional_verification_status,
      old.professional_verification_review_note,
      old.professional_verification_reviewed_at,
      old.professional_verification_reviewed_by,
      old.subscription_status, old.educator_status,
      old.ai_enabled, old.reviewed_at, old.reviewed_by,
      old.review_note, old.created_at
    ) then
      raise exception 'Protected profile fields cannot be changed by this user'
        using errcode = '42501';
    end if;
  end if;

  return new;
end;
$$;

revoke all on function private.protect_profile_security_fields()
  from public, anon, authenticated;

commit;