'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { createServerSupabaseClient } from '@/lib/supabase/server';

const ALLOWED_VERIFICATION_STATUSES = new Set([
  'not_submitted',
  'draft',
  'submitted',
  'under_review',
  'needs_changes',
  'rejected',
  'revoked',
  'expired',
]);

function readRequiredText(
  formData: FormData,
  field: string,
): string {
  const value = formData.get(field);

  if (typeof value !== 'string' || !value.trim()) {
    throw new Error(`Missing required field: ${field}`);
  }

  return value.trim();
}

function isUuid(value: string): boolean {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
    value,
  );
}

export async function updateProfessionalVerification(
  formData: FormData,
) {
  const profileId = readRequiredText(formData, 'profile_id');
  const nextStatus = readRequiredText(
    formData,
    'professional_verification_status',
  );
  const reviewNoteValue = formData.get('review_note');
  const reviewNote =
    typeof reviewNoteValue === 'string'
      ? reviewNoteValue.trim().slice(0, 2000)
      : '';

  if (!isUuid(profileId)) {
    throw new Error('Invalid profile identifier.');
  }

  if (!ALLOWED_VERIFICATION_STATUSES.has(nextStatus)) {
    throw new Error('Invalid professional verification status.');
  }

  const supabase = await createServerSupabaseClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/auth/sign-in?next=/admin');
  }

  const { data: adminProfile } = await supabase
    .from('profiles')
    .select('role, account_status')
    .eq('id', user.id)
    .maybeSingle<{
      role: string;
      account_status: string;
    }>();

  if (
    !adminProfile ||
    adminProfile.role !== 'Admin' ||
    adminProfile.account_status !== 'active'
  ) {
    redirect('/');
  }

  if (profileId === user.id) {
    throw new Error(
      'Another Admin must review your professional verification status.',
    );
  }

  const { error } = await supabase
    .from('profiles')
    .update({
      professional_verification_status: nextStatus,
      professional_verification_reviewed_at: new Date().toISOString(),
      professional_verification_reviewed_by: user.id,
      professional_verification_review_note: reviewNote || null,
    })
    .eq('id', profileId);

  if (error) {
    throw new Error(
      `Could not update professional verification: ${error.message}`,
    );
  }

  revalidatePath('/admin');
  revalidatePath('/profile');
  revalidatePath('/my-home/em-resident');
  revalidatePath('/my-home/intern-jmc');
  revalidatePath('/my-home/medical-student');
  revalidatePath('/my-home/general-practitioner');
  revalidatePath('/my-home/ems-paramedic');
  revalidatePath('/my-home/emergency-nurse');
  revalidatePath('/my-home/other');

  redirect('/admin?updated=1');
}
