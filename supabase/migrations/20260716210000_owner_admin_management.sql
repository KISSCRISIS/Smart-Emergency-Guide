begin;

alter table public.profiles
  add column if not exists admin_capabilities text[] not null default '{}',
  add column if not exists admin_regions text[] not null default '{}',
  add column if not exists admin_languages text[] not null default '{}',
  add column if not exists admin_previous_role text,
  add column if not exists admin_scope_updated_at timestamptz,
  add column if not exists admin_scope_updated_by uuid
    references auth.users(id) on delete set null;

alter table public.profiles
  drop constraint if exists profiles_admin_level_check;

alter table public.profiles
  add constraint profiles_admin_level_check
  check (admin_level in ('none', 'owner', 'backup', 'regional'));

alter table public.profiles
  drop constraint if exists profiles_admin_capabilities_check;

alter table public.profiles
  add constraint profiles_admin_capabilities_check
  check (
    admin_capabilities <@ array[
      'review_credentials',
      'publish_marketing',
      'publish_approved_medical'
    ]::text[]
  );

alter table public.profiles
  drop constraint if exists profiles_regional_admin_scope_check;

alter table public.profiles
  add constraint profiles_regional_admin_scope_check
  check (
    admin_level <> 'regional'
    or (
      role = 'Admin'
      and cardinality(admin_capabilities) = 3
      and cardinality(admin_regions) between 1 and 50
      and cardinality(admin_languages) between 1 and 50
    )
  );

create table if not exists public.admin_management_audit_events (
  id uuid primary key default gen_random_uuid(),
  actor_user_id uuid not null references auth.users(id),
  target_user_id uuid not null references auth.users(id),
  action text not null check (
    action in (
      'promoted_regional_admin',
      'updated_regional_scope',
      'revoked_regional_admin'
    )
  ),
  previous_state jsonb not null default '{}'::jsonb,
  new_state jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

alter table public.admin_management_audit_events enable row level security;

revoke all on table public.admin_management_audit_events
  from public, anon, authenticated;

create or replace function private.is_owner_admin()
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
      and admin_level = 'owner'
      and account_status = 'active'
  );
$$;

revoke all on function private.is_owner_admin() from public, anon;
grant usage on schema private to authenticated;
grant execute on function private.is_owner_admin() to authenticated;

create or replace function private.admin_has_regional_capability(
  p_capability text,
  p_region text,
  p_language text
)
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
      and admin_level = 'regional'
      and account_status = 'active'
      and p_capability = any(admin_capabilities)
      and upper(trim(p_region)) = any(admin_regions)
      and lower(trim(p_language)) = any(admin_languages)
  );
$$;

revoke all on function private.admin_has_regional_capability(
  text, text, text
) from public, anon;
grant execute on function private.admin_has_regional_capability(
  text, text, text
) to authenticated;

drop policy if exists admin_management_audit_owner_select
  on public.admin_management_audit_events;

create policy admin_management_audit_owner_select
on public.admin_management_audit_events
for select
to authenticated
using (private.is_owner_admin());

grant select on table public.admin_management_audit_events
  to authenticated;

create or replace function private.protect_admin_management_fields()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  if auth.uid() is not null
     and row(
       new.role,
       new.admin_level,
       new.admin_capabilities,
       new.admin_regions,
       new.admin_languages,
       new.admin_previous_role,
       new.admin_scope_updated_at,
       new.admin_scope_updated_by
     ) is distinct from row(
       old.role,
       old.admin_level,
       old.admin_capabilities,
       old.admin_regions,
       old.admin_languages,
       old.admin_previous_role,
       old.admin_scope_updated_at,
       old.admin_scope_updated_by
     )
     and not private.is_owner_admin() then
    raise exception 'Owner Admin access is required.'
      using errcode = '42501';
  end if;

  return new;
end;
$$;

revoke all on function private.protect_admin_management_fields()
  from public, anon, authenticated;

drop trigger if exists protect_admin_management_fields
  on public.profiles;

create trigger protect_admin_management_fields
before update on public.profiles
for each row execute function private.protect_admin_management_fields();

create or replace function public.list_admin_management_profiles(
  p_search text default null
)
returns table (
  id uuid,
  full_name text,
  email text,
  role text,
  admin_level text,
  account_status text,
  admin_capabilities text[],
  admin_regions text[],
  admin_languages text[],
  created_at timestamptz
)
language plpgsql
stable
security definer
set search_path = ''
as $$
declare
  normalized_search text := lower(left(trim(coalesce(p_search, '')), 120));
begin
  if not private.is_owner_admin() then
    raise exception 'Owner Admin access is required.'
      using errcode = '42501';
  end if;

  return query
  select
    profile.id,
    profile.full_name,
    profile.email,
    profile.role,
    profile.admin_level,
    profile.account_status,
    profile.admin_capabilities,
    profile.admin_regions,
    profile.admin_languages,
    profile.created_at
  from public.profiles profile
  where
    profile.role = 'Admin'
    or (
      normalized_search <> ''
      and profile.account_status = 'active'
      and (
        lower(profile.email) like '%' || normalized_search || '%'
        or lower(profile.full_name) like '%' || normalized_search || '%'
      )
    )
  order by
    case profile.admin_level
      when 'owner' then 0
      when 'backup' then 1
      when 'regional' then 2
      else 3
    end,
    profile.created_at desc
  limit 100;
end;
$$;

revoke all on function public.list_admin_management_profiles(text)
  from public, anon;
grant execute on function public.list_admin_management_profiles(text)
  to authenticated;

create or replace function public.list_admin_management_audit_events()
returns table (
  id uuid,
  action text,
  actor_email text,
  target_email text,
  previous_state jsonb,
  new_state jsonb,
  created_at timestamptz
)
language plpgsql
stable
security definer
set search_path = ''
as $$
begin
  if not private.is_owner_admin() then
    raise exception 'Owner Admin access is required.'
      using errcode = '42501';
  end if;

  return query
  select
    event.id,
    event.action,
    actor.email,
    target.email,
    event.previous_state,
    event.new_state,
    event.created_at
  from public.admin_management_audit_events event
  join public.profiles actor on actor.id = event.actor_user_id
  join public.profiles target on target.id = event.target_user_id
  order by event.created_at desc
  limit 50;
end;
$$;

revoke all on function public.list_admin_management_audit_events()
  from public, anon;
grant execute on function public.list_admin_management_audit_events()
  to authenticated;

create or replace function public.promote_registered_user_to_regional_admin(
  p_target_user_id uuid,
  p_regions text[],
  p_languages text[]
)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  actor_id uuid := auth.uid();
  target_profile public.profiles%rowtype;
  normalized_regions text[];
  normalized_languages text[];
  capabilities constant text[] := array[
    'review_credentials',
    'publish_marketing',
    'publish_approved_medical'
  ]::text[];
begin
  if not private.is_owner_admin() then
    raise exception 'Owner Admin access is required.'
      using errcode = '42501';
  end if;

  if p_target_user_id is null or p_target_user_id = actor_id then
    raise exception 'Choose another registered user.'
      using errcode = '22023';
  end if;

  if cardinality(coalesce(p_regions, '{}')) not between 1 and 50
     or cardinality(coalesce(p_languages, '{}')) not between 1 and 50 then
    raise exception 'Provide between 1 and 50 regions and languages.'
      using errcode = '22023';
  end if;

  select * into target_profile
  from public.profiles
  where profiles.id = p_target_user_id
  for update;

  if not found then
    raise exception 'Registered user was not found.'
      using errcode = 'P0002';
  end if;

  if target_profile.account_status <> 'active' then
    raise exception 'Only an active account can become an Admin.'
      using errcode = '22023';
  end if;

  if target_profile.role = 'Admin'
     or target_profile.admin_level <> 'none' then
    raise exception 'This account already has an Admin identity.'
      using errcode = '22023';
  end if;

  select coalesce(array_agg(distinct upper(trim(value))), '{}')
  into normalized_regions
  from unnest(coalesce(p_regions, '{}')) value
  where trim(value) ~ '^[A-Za-z]{2}$';

  select coalesce(array_agg(distinct lower(trim(value))), '{}')
  into normalized_languages
  from unnest(coalesce(p_languages, '{}')) value
  where trim(value) ~ '^[A-Za-z]{2}(-[A-Za-z]{2})?$';

  if cardinality(normalized_regions) = 0
     or cardinality(normalized_languages) = 0 then
    raise exception 'At least one valid region and language are required.'
      using errcode = '22023';
  end if;

  update public.profiles
  set
    admin_previous_role = target_profile.role,
    role = 'Admin',
    admin_level = 'regional',
    admin_capabilities = capabilities,
    admin_regions = normalized_regions,
    admin_languages = normalized_languages,
    admin_scope_updated_at = now(),
    admin_scope_updated_by = actor_id
  where profiles.id = p_target_user_id;

  insert into public.admin_management_audit_events (
    actor_user_id,
    target_user_id,
    action,
    previous_state,
    new_state
  ) values (
    actor_id,
    p_target_user_id,
    'promoted_regional_admin',
    jsonb_build_object(
      'role', target_profile.role,
      'admin_level', target_profile.admin_level
    ),
    jsonb_build_object(
      'role', 'Admin',
      'admin_level', 'regional',
      'capabilities', capabilities,
      'regions', normalized_regions,
      'languages', normalized_languages
    )
  );
end;
$$;

revoke all on function public.promote_registered_user_to_regional_admin(
  uuid, text[], text[]
) from public, anon;
grant execute on function public.promote_registered_user_to_regional_admin(
  uuid, text[], text[]
) to authenticated;

create or replace function public.update_regional_admin_scope(
  p_target_user_id uuid,
  p_regions text[],
  p_languages text[]
)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  actor_id uuid := auth.uid();
  target_profile public.profiles%rowtype;
  normalized_regions text[];
  normalized_languages text[];
begin
  if not private.is_owner_admin() then
    raise exception 'Owner Admin access is required.'
      using errcode = '42501';
  end if;

  select * into target_profile
  from public.profiles
  where profiles.id = p_target_user_id
  for update;

  if not found or target_profile.admin_level <> 'regional' then
    raise exception 'Regional Admin was not found.'
      using errcode = 'P0002';
  end if;

  if cardinality(coalesce(p_regions, '{}')) not between 1 and 50
     or cardinality(coalesce(p_languages, '{}')) not between 1 and 50 then
    raise exception 'Provide between 1 and 50 regions and languages.'
      using errcode = '22023';
  end if;

  select coalesce(array_agg(distinct upper(trim(value))), '{}')
  into normalized_regions
  from unnest(coalesce(p_regions, '{}')) value
  where trim(value) ~ '^[A-Za-z]{2}$';

  select coalesce(array_agg(distinct lower(trim(value))), '{}')
  into normalized_languages
  from unnest(coalesce(p_languages, '{}')) value
  where trim(value) ~ '^[A-Za-z]{2}(-[A-Za-z]{2})?$';

  if cardinality(normalized_regions) = 0
     or cardinality(normalized_languages) = 0 then
    raise exception 'At least one valid region and language are required.'
      using errcode = '22023';
  end if;

  update public.profiles
  set
    admin_regions = normalized_regions,
    admin_languages = normalized_languages,
    admin_scope_updated_at = now(),
    admin_scope_updated_by = actor_id
  where profiles.id = p_target_user_id;

  insert into public.admin_management_audit_events (
    actor_user_id,
    target_user_id,
    action,
    previous_state,
    new_state
  ) values (
    actor_id,
    p_target_user_id,
    'updated_regional_scope',
    jsonb_build_object(
      'regions', target_profile.admin_regions,
      'languages', target_profile.admin_languages
    ),
    jsonb_build_object(
      'regions', normalized_regions,
      'languages', normalized_languages
    )
  );
end;
$$;

revoke all on function public.update_regional_admin_scope(
  uuid, text[], text[]
) from public, anon;
grant execute on function public.update_regional_admin_scope(
  uuid, text[], text[]
) to authenticated;

create or replace function public.revoke_regional_admin(
  p_target_user_id uuid
)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  actor_id uuid := auth.uid();
  target_profile public.profiles%rowtype;
  restored_role text;
begin
  if not private.is_owner_admin() then
    raise exception 'Owner Admin access is required.'
      using errcode = '42501';
  end if;

  select * into target_profile
  from public.profiles
  where profiles.id = p_target_user_id
  for update;

  if not found or target_profile.admin_level <> 'regional' then
    raise exception 'Only a Regional Admin can be revoked here.'
      using errcode = '22023';
  end if;

  restored_role := coalesce(nullif(target_profile.admin_previous_role, ''), 'Student');

  update public.profiles
  set
    role = restored_role,
    admin_level = 'none',
    admin_capabilities = '{}',
    admin_regions = '{}',
    admin_languages = '{}',
    admin_previous_role = null,
    admin_scope_updated_at = now(),
    admin_scope_updated_by = actor_id
  where profiles.id = p_target_user_id;

  insert into public.admin_management_audit_events (
    actor_user_id,
    target_user_id,
    action,
    previous_state,
    new_state
  ) values (
    actor_id,
    p_target_user_id,
    'revoked_regional_admin',
    jsonb_build_object(
      'role', target_profile.role,
      'admin_level', target_profile.admin_level,
      'capabilities', target_profile.admin_capabilities,
      'regions', target_profile.admin_regions,
      'languages', target_profile.admin_languages
    ),
    jsonb_build_object(
      'role', restored_role,
      'admin_level', 'none'
    )
  );
end;
$$;

revoke all on function public.revoke_regional_admin(uuid)
  from public, anon;
grant execute on function public.revoke_regional_admin(uuid)
  to authenticated;

commit;
