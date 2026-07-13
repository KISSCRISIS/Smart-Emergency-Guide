import type { ClinicalRole } from '@/lib/auth/role-home';

export const PROFESSIONAL_GRADE_ORDER = [
  'medical_student',
  'intern_doctor',
  'general_practitioner',
  'em_resident',
  'specialist_physician',
  'consultant_physician',
  'ems_paramedic',
  'emergency_nurse',
  'other',
] as const;

export type ProfessionalGrade =
  (typeof PROFESSIONAL_GRADE_ORDER)[number];

export const PROFESSIONAL_GRADE_OPTIONS: ReadonlyArray<{
  value: ProfessionalGrade;
  label: string;
  arabicLabel: string;
}> = [
  {
    value: 'medical_student',
    label: 'Medical Student',
    arabicLabel: 'طالب طب',
  },
  {
    value: 'intern_doctor',
    label: 'Intern Doctor',
    arabicLabel: 'طبيب امتياز',
  },
  {
    value: 'general_practitioner',
    label: 'General Practitioner',
    arabicLabel: 'طبيب عام',
  },
  {
    value: 'em_resident',
    label: 'Emergency Medicine Resident',
    arabicLabel: 'مقيم طب طوارئ',
  },
  {
    value: 'specialist_physician',
    label: 'Specialist Physician',
    arabicLabel: 'طبيب اختصاصي',
  },
  {
    value: 'consultant_physician',
    label: 'Consultant Physician',
    arabicLabel: 'طبيب استشاري',
  },
  {
    value: 'ems_paramedic',
    label: 'EMS / Paramedic',
    arabicLabel: 'مسعف / خدمات طبية طارئة',
  },
  {
    value: 'emergency_nurse',
    label: 'Emergency Nurse',
    arabicLabel: 'ممرض / ممرضة طوارئ',
  },
  {
    value: 'other',
    label: 'Other Healthcare Professional',
    arabicLabel: 'ممارس صحي آخر',
  },
];

export function isProfessionalGrade(
  value: unknown,
): value is ProfessionalGrade {
  return (
    typeof value === 'string' &&
    PROFESSIONAL_GRADE_ORDER.includes(value as ProfessionalGrade)
  );
}

export function normalizeProfessionalGrade(
  value: unknown,
): ProfessionalGrade {
  return isProfessionalGrade(value) ? value : 'other';
}

export function getProfessionalGradeLabel(value: unknown): string {
  const normalized = normalizeProfessionalGrade(value);

  return (
    PROFESSIONAL_GRADE_OPTIONS.find(
      (option) => option.value === normalized,
    )?.label ?? 'Other Healthcare Professional'
  );
}

export function getSuggestedTrackForProfessionalGrade(
  value: unknown,
): ClinicalRole {
  switch (normalizeProfessionalGrade(value)) {
    case 'medical_student':
      return 'medical_student';
    case 'intern_doctor':
      return 'intern_jmc';
    case 'general_practitioner':
      return 'general_practitioner';
    case 'em_resident':
    case 'specialist_physician':
    case 'consultant_physician':
      return 'em_resident';
    case 'ems_paramedic':
      return 'ems_paramedic';
    case 'emergency_nurse':
      return 'emergency_nurse';
    default:
      return 'other';
  }
}

export const ACCOUNT_STATUS_ORDER = [
  'active',
  'suspended',
  'rejected',
  'blocked',
] as const;

export type AccountStatus = (typeof ACCOUNT_STATUS_ORDER)[number];

export function normalizeAccountStatus(value: unknown): AccountStatus {
  if (typeof value !== 'string') {
    return 'active';
  }

  switch (value) {
    case 'suspended':
    case 'Suspended':
      return 'suspended';
    case 'rejected':
    case 'Rejected':
      return 'rejected';
    case 'blocked':
    case 'Blocked':
      return 'blocked';
    case 'active':
    case 'Active':
    case 'Approved':
    case 'Pending Approval':
    default:
      return 'active';
  }
}

export function isBlockedAccountStatus(value: unknown): boolean {
  const status = normalizeAccountStatus(value);

  return (
    status === 'suspended' ||
    status === 'rejected' ||
    status === 'blocked'
  );
}

export function getBlockedAccountStage(
  value: unknown,
): 'suspended' | 'rejected' | 'blocked' {
  const status = normalizeAccountStatus(value);

  if (status === 'suspended') {
    return 'suspended';
  }

  if (status === 'rejected') {
    return 'rejected';
  }

  return 'blocked';
}

const ACCOUNT_STATUS_LABELS: Record<AccountStatus, string> = {
  active: 'Active',
  suspended: 'Suspended',
  rejected: 'Rejected',
  blocked: 'Blocked',
};

export function getAccountStatusLabel(value: unknown): string {
  return ACCOUNT_STATUS_LABELS[normalizeAccountStatus(value)];
}

export const PROFESSIONAL_VERIFICATION_STATUS_LABELS = {
  not_submitted: 'Not Submitted',
  draft: 'Draft',
  submitted: 'Submitted',
  under_review: 'Under Review',
  needs_changes: 'Needs Changes',
  verified: 'Verified',
  rejected: 'Rejected',
  revoked: 'Revoked',
  expired: 'Expired',
} as const;

export type ProfessionalVerificationStatus =
  keyof typeof PROFESSIONAL_VERIFICATION_STATUS_LABELS;

export function getProfessionalVerificationStatusLabel(
  value: unknown,
): string {
  if (
    typeof value === 'string' &&
    value in PROFESSIONAL_VERIFICATION_STATUS_LABELS
  ) {
    return PROFESSIONAL_VERIFICATION_STATUS_LABELS[
      value as ProfessionalVerificationStatus
    ];
  }

  return PROFESSIONAL_VERIFICATION_STATUS_LABELS.not_submitted;
}

export const SUBSCRIPTION_STATUS_LABELS = {
  free: 'Free',
  trial: 'Trial',
  premium: 'Premium',
  expired: 'Expired',
  cancelled: 'Cancelled',
} as const;

export type SubscriptionStatus =
  keyof typeof SUBSCRIPTION_STATUS_LABELS;

export function getSubscriptionStatusLabel(value: unknown): string {
  if (
    typeof value === 'string' &&
    value in SUBSCRIPTION_STATUS_LABELS
  ) {
    return SUBSCRIPTION_STATUS_LABELS[
      value as SubscriptionStatus
    ];
  }

  return SUBSCRIPTION_STATUS_LABELS.free;
}

export const EDUCATOR_STATUS_LABELS = {
  not_applied: 'Not Applied',
  draft: 'Draft',
  submitted: 'Submitted',
  admin_review: 'Admin Review',
  needs_changes: 'Needs Changes',
  approved_educator: 'Approved Educator',
  temporarily_suspended: 'Temporarily Suspended',
  rejected: 'Rejected',
} as const;

export type EducatorStatus = keyof typeof EDUCATOR_STATUS_LABELS;

export function getEducatorStatusLabel(value: unknown): string {
  if (
    typeof value === 'string' &&
    value in EDUCATOR_STATUS_LABELS
  ) {
    return EDUCATOR_STATUS_LABELS[value as EducatorStatus];
  }

  return EDUCATOR_STATUS_LABELS.not_applied;
}
