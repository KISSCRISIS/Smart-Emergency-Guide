export const CLINICAL_ROLE_ORDER = [
  'intern_jmc',
  'em_resident',
  'medical_student',
  'general_practitioner',
  'ems_paramedic',
  'emergency_nurse',
  'other',
] as const;

export type ClinicalRole = (typeof CLINICAL_ROLE_ORDER)[number];

export type RoleHomeLink = {
  href: string;
  label: string;
  description: string;
};

export type ClinicalRoleConfig = {
  value: ClinicalRole;
  slug: string;
  homePath: string;
  label: string;
  arabicLabel: string;
  title: string;
  arabicTitle: string;
  description: string;
  links: readonly RoleHomeLink[];
};

export const CLINICAL_ROLE_CONFIG: Record<
  ClinicalRole,
  ClinicalRoleConfig
> = {
  intern_jmc: {
    value: 'intern_jmc',
    slug: 'intern-jmc',
    homePath: '/my-home/intern-jmc',
    label: 'Intern / JMC learner',
    arabicLabel: 'طبيب امتياز / متدرب المجلس الطبي الأردني',
    title: 'Intern / JMC Home',
    arabicTitle: 'مسارك الرئيسي للامتياز وامتحان المجلس',
    description:
      'A focused starting point for internship survival, study planning, and JMC practice.',
    links: [
      {
        href: '/interns',
        label: 'Intern / JMC Hub',
        description: 'Open the complete intern pathway.',
      },
      {
        href: '/interns/study',
        label: 'Study Hub',
        description: 'Review the structured clinical study map.',
      },
      {
        href: '/interns/jmc-exam-practice',
        label: 'JMC Practice',
        description: 'Practice exam-focused questions and modules.',
      },
      {
        href: '/interns/study-plan',
        label: 'Study Plan',
        description: 'Continue from your organized study plan.',
      },
    ],
  },
  em_resident: {
    value: 'em_resident',
    slug: 'em-resident',
    homePath: '/my-home/em-resident',
    label: 'Emergency Medicine resident',
    arabicLabel: 'مقيم طب الطوارئ',
    title: 'Emergency Medicine Resident Home',
    arabicTitle: 'مسارك الرئيسي كمقيم طب طوارئ',
    description:
      'Advanced emergency medicine references, critical care, and board preparation.',
    links: [
      {
        href: '/residents',
        label: 'Residents Hub',
        description: 'Open the resident pathway overview.',
      },
      {
        href: '/topics',
        label: 'Full EM Topics',
        description: 'Browse the core emergency medicine library.',
      },
      {
        href: '/critical-care',
        label: 'Critical Care',
        description: 'Review high-acuity and resuscitation topics.',
      },
      {
        href: '/arabic-board-review',
        label: 'Board Review',
        description: 'Continue board-focused preparation.',
      },
    ],
  },
  medical_student: {
    value: 'medical_student',
    slug: 'medical-student',
    homePath: '/my-home/medical-student',
    label: 'Medical student',
    arabicLabel: 'طالب طب',
    title: 'Medical Student Home',
    arabicTitle: 'مسارك الرئيسي كأساس لطب الطوارئ',
    description:
      'A beginner-friendly route for emergency approach, ECG basics, drugs, and practice.',
    links: [
      {
        href: '/students',
        label: 'Student Hub',
        description: 'Open the complete student pathway.',
      },
      {
        href: '/students/basic-ed-approach',
        label: 'Basic ED Approach',
        description: 'Learn a safe first approach to emergency patients.',
      },
      {
        href: '/students/ecg-basics',
        label: 'ECG Basics',
        description: 'Build the essential ECG foundation.',
      },
      {
        href: '/students/mcq-practice',
        label: 'MCQ Practice',
        description: 'Practice student-level emergency questions.',
      },
    ],
  },
  general_practitioner: {
    value: 'general_practitioner',
    slug: 'general-practitioner',
    homePath: '/my-home/general-practitioner',
    label: 'General practitioner',
    arabicLabel: 'طبيب عام',
    title: 'General Practitioner Home',
    arabicTitle: 'مسارك الرئيسي للطوارئ في الممارسة العامة',
    description:
      'Rapid access to emergency cases, medications, core topics, and toxicology.',
    links: [
      {
        href: '/emergency-cases',
        label: 'Emergency Cases',
        description: 'Review practical emergency presentations.',
      },
      {
        href: '/drug-handbook',
        label: 'Drug Handbook',
        description: 'Open the emergency medication reference.',
      },
      {
        href: '/topics',
        label: 'Core EM Topics',
        description: 'Browse high-yield emergency topics.',
      },
      {
        href: '/toxicology',
        label: 'Toxicology',
        description: 'Review poisoning recognition and management.',
      },
    ],
  },
  ems_paramedic: {
    value: 'ems_paramedic',
    slug: 'ems-paramedic',
    homePath: '/my-home/ems-paramedic',
    label: 'EMS / Paramedic',
    arabicLabel: 'مسعف / خدمات طبية طارئة',
    title: 'EMS / Paramedic Home',
    arabicTitle: 'مسارك الرئيسي للإسعاف والطوارئ قبل المستشفى',
    description:
      'A practical route for airway, critical care, emergency cases, and toxicology.',
    links: [
      {
        href: '/intubation-ventilator',
        label: 'Airway & Ventilator',
        description: 'Review airway support and ventilation essentials.',
      },
      {
        href: '/critical-care',
        label: 'Critical Care',
        description: 'Open resuscitation and high-acuity references.',
      },
      {
        href: '/emergency-cases',
        label: 'Emergency Cases',
        description: 'Practice recognition and initial emergency actions.',
      },
      {
        href: '/toxicology',
        label: 'Toxicology',
        description: 'Review common poisoning emergencies.',
      },
    ],
  },
  emergency_nurse: {
    value: 'emergency_nurse',
    slug: 'emergency-nurse',
    homePath: '/my-home/emergency-nurse',
    label: 'Emergency nurse',
    arabicLabel: 'ممرض / ممرضة طوارئ',
    title: 'Emergency Nursing Home',
    arabicTitle: 'مسارك الرئيسي للتمريض في قسم الطوارئ',
    description:
      'Priority access to critical care, medication safety, cases, and airway support.',
    links: [
      {
        href: '/critical-care',
        label: 'Critical Care',
        description: 'Review monitoring and high-acuity care.',
      },
      {
        href: '/drug-handbook',
        label: 'Drug Handbook',
        description: 'Open emergency medication references.',
      },
      {
        href: '/emergency-cases',
        label: 'Emergency Cases',
        description: 'Review common emergency presentations.',
      },
      {
        href: '/intubation-ventilator',
        label: 'Airway & Ventilator',
        description: 'Review airway and ventilator support.',
      },
    ],
  },
  other: {
    value: 'other',
    slug: 'other',
    homePath: '/my-home/other',
    label: 'Other healthcare learner',
    arabicLabel: 'متعلم صحي آخر',
    title: 'Healthcare Learner Home',
    arabicTitle: 'مسارك العام داخل دليل الطوارئ الذكي',
    description:
      'A flexible starting point for the core emergency medicine library.',
    links: [
      {
        href: '/topics',
        label: 'Emergency Topics',
        description: 'Browse the main emergency medicine library.',
      },
      {
        href: '/ecg-atlas',
        label: 'ECG Atlas',
        description: 'Review ECG patterns and visual learning.',
      },
      {
        href: '/drug-handbook',
        label: 'Drug Handbook',
        description: 'Open the emergency medication reference.',
      },
      {
        href: '/emergency-cases',
        label: 'Emergency Cases',
        description: 'Practice with emergency case material.',
      },
    ],
  },
};

export function isClinicalRole(value: unknown): value is ClinicalRole {
  return (
    typeof value === 'string' &&
    CLINICAL_ROLE_ORDER.includes(value as ClinicalRole)
  );
}

export function normalizeClinicalRole(value: unknown): ClinicalRole {
  return isClinicalRole(value) ? value : 'other';
}

export function getClinicalRoleConfig(
  value: unknown,
): ClinicalRoleConfig {
  return CLINICAL_ROLE_CONFIG[normalizeClinicalRole(value)];
}

export function getRoleHomePath(value: unknown): string {
  return getClinicalRoleConfig(value).homePath;
}

export function getClinicalRoleLabel(value: unknown): string {
  return getClinicalRoleConfig(value).label;
}

export function getAllClinicalRoleConfigs(): ClinicalRoleConfig[] {
  return CLINICAL_ROLE_ORDER.map(
    (role) => CLINICAL_ROLE_CONFIG[role],
  );
}
