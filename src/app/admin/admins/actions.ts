'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { createServerSupabaseClient } from '@/lib/supabase/server';

function requiredUuid(formData: FormData, field: string) {
  const value = formData.get(field);

  if (
    typeof value !== 'string' ||
    !/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
      value,
    )
  ) {
    throw new Error(`Invalid ${field}.`);
  }

  return value;
}

function parseCodes(
  formData: FormData,
  field: string,
  pattern: RegExp,
) {
  const value = formData.get(field);

  if (typeof value !== 'string') {
    throw new Error(`Missing ${field}.`);
  }

  const codes = Array.from(
    new Set(
      value
        .split(',')
        .map((item) => item.trim())
        .filter(Boolean),
    ),
  );

  if (
    codes.length === 0 ||
    codes.length > 50 ||
    codes.some((code) => !pattern.test(code))
  ) {
    throw new Error(`Invalid ${field}. Use comma-separated codes.`);
  }

  return codes;
}

async function requireOwnerAction() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/auth/sign-in?next=/admin/admins');
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('role, admin_level, account_status')
    .eq('id', user.id)
    .maybeSingle<{
      role: string;
      admin_level: string;
      account_status: string;
    }>();

  if (
    !profile ||
    profile.role !== 'Admin' ||
    profile.admin_level !== 'owner' ||
    profile.account_status !== 'active'
  ) {
    redirect('/admin');
  }

  return supabase;
}

export async function promoteRegionalAdmin(formData: FormData) {
  const targetUserId = requiredUuid(formData, 'target_user_id');
  const regions = parseCodes(
    formData,
    'regions',
    /^[A-Za-z]{2}$/,
  ).map((code) => code.toUpperCase());
  const languages = parseCodes(
    formData,
    'languages',
    /^[A-Za-z]{2}(?:-[A-Za-z]{2})?$/,
  ).map((code) => code.toLowerCase());
  const supabase = await requireOwnerAction();

  const { error } = await supabase.rpc(
    'promote_registered_user_to_regional_admin',
    {
      p_target_user_id: targetUserId,
      p_regions: regions,
      p_languages: languages,
    },
  );

  if (error) {
    throw new Error(`Could not promote Admin: ${error.message}`);
  }

  revalidatePath('/admin/admins');
  redirect('/admin/admins?updated=promoted');
}

export async function updateRegionalAdminScope(formData: FormData) {
  const targetUserId = requiredUuid(formData, 'target_user_id');
  const regions = parseCodes(
    formData,
    'regions',
    /^[A-Za-z]{2}$/,
  ).map((code) => code.toUpperCase());
  const languages = parseCodes(
    formData,
    'languages',
    /^[A-Za-z]{2}(?:-[A-Za-z]{2})?$/,
  ).map((code) => code.toLowerCase());
  const supabase = await requireOwnerAction();

  const { error } = await supabase.rpc('update_regional_admin_scope', {
    p_target_user_id: targetUserId,
    p_regions: regions,
    p_languages: languages,
  });

  if (error) {
    throw new Error(`Could not update Admin scope: ${error.message}`);
  }

  revalidatePath('/admin/admins');
  redirect('/admin/admins?updated=scope');
}

export async function revokeRegionalAdmin(formData: FormData) {
  const targetUserId = requiredUuid(formData, 'target_user_id');
  const supabase = await requireOwnerAction();
  const { error } = await supabase.rpc('revoke_regional_admin', {
    p_target_user_id: targetUserId,
  });

  if (error) {
    throw new Error(`Could not revoke Admin: ${error.message}`);
  }

  revalidatePath('/admin/admins');
  redirect('/admin/admins?updated=revoked');
}
