'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { createServerSupabaseClient } from '@/lib/supabase/server';

const ALLOWED_REVIEW_STATUSES = new Set([
  'submitted',
  'under_review',
  'needs_changes',
  'verified',
  'rejected',
  'revoked',
]);

function requiredText(
  formData: FormData,
  field: string,
) {
  const value = formData.get(field);

  if (typeof value !== 'string' || !value.trim()) {
    throw new Error(`Missing required field: ${field}`);
  }

  return value.trim();
}

function isUuid(value: string) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
    value,
  );
}

export async function reviewCredentialSubmission(
  formData: FormData,
) {
  const submissionId = requiredText(
    formData,
    'submission_id',
  );
  const nextStatus = requiredText(
    formData,
    'submission_status',
  );
  const noteValue = formData.get('review_note');
  const reviewNote =
    typeof noteValue === 'string'
      ? noteValue.trim().slice(0, 2000)
      : '';

  if (!isUuid(submissionId)) {
    throw new Error('Invalid submission identifier.');
  }

  if (!ALLOWED_REVIEW_STATUSES.has(nextStatus)) {
    throw new Error('Invalid credential review status.');
  }

  const supabase = await createServerSupabaseClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/auth/sign-in?next=/admin/credentials');
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

  const { error } = await supabase.rpc(
    'review_professional_credential_submission',
    {
      p_submission_id: submissionId,
      p_new_status: nextStatus,
      p_review_note: reviewNote || null,
    },
  );

  if (error) {
    throw new Error(
      `Could not review credential: ${error.message}`,
    );
  }

  revalidatePath('/admin');
  revalidatePath('/admin/credentials');
  revalidatePath('/credentials');
  revalidatePath('/profile');
  revalidatePath('/my-home/em-resident');
  revalidatePath('/my-home/intern-jmc');
  revalidatePath('/my-home/medical-student');
  revalidatePath('/my-home/general-practitioner');
  revalidatePath('/my-home/ems-paramedic');
  revalidatePath('/my-home/emergency-nurse');
  revalidatePath('/my-home/other');

  redirect('/admin/credentials?updated=1');
}