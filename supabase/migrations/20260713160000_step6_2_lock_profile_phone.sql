-- SEG Step 6.2
-- Lock an existing profile phone number against authenticated client changes.
-- A user with no phone may set it once through Complete Profile.
-- After it is set, users and Admins cannot change or clear it from the app.
-- A future verified server-only recovery action may change it explicitly.

begin;

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
      new.id,
      new.email,
      new.role,
      new.status,
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
      old.ai_enabled,
      old.reviewed_at,
      old.reviewed_by,
      old.review_note,
      old.created_at
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
