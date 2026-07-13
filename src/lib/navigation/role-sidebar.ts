import type { ClinicalRole } from '@/lib/auth/role-home';

export type SidebarIconName =
  | 'activity'
  | 'book'
  | 'bookmark'
  | 'brain'
  | 'clipboard'
  | 'compass'
  | 'graduation'
  | 'heart'
  | 'home'
  | 'map'
  | 'message'
  | 'pill'
  | 'search'
  | 'shield'
  | 'stethoscope'
  | 'target'
  | 'user'
  | 'users'
  | 'wind';

export type SidebarNavItem = {
  href: string;
  label: string;
  icon: SidebarIconName;
};

export type SidebarNavSection = {
  title: string;
  items: SidebarNavItem[];
};

export const ROLE_SIDEBAR_SECTIONS: Record<
  ClinicalRole,
  SidebarNavSection[]
> = {
  intern_jmc: [
    {
      title: 'Intern / JMC Core',
      items: [
        {
          href: '/interns',
          label: 'Intern / JMC Hub',
          icon: 'stethoscope',
        },
        {
          href: '/interns/study',
          label: 'Study Hub',
          icon: 'book',
        },
        {
          href: '/interns/study-plan',
          label: 'Study Plan',
          icon: 'map',
        },
        {
          href: '/interns/exam-focus-map',
          label: 'Exam Focus Map',
          icon: 'target',
        },
      ],
    },
    {
      title: 'Exam and Essentials',
      items: [
        {
          href: '/interns/jmc-exam-practice',
          label: 'JMC Exam Practice',
          icon: 'clipboard',
        },
        {
          href: '/interns/ecg-essentials',
          label: 'ECG Essentials',
          icon: 'heart',
        },
        {
          href: '/interns/drug-essentials',
          label: 'Drug Essentials',
          icon: 'pill',
        },
        {
          href: '/interns/toxicology-essentials',
          label: 'Toxicology Essentials',
          icon: 'shield',
        },
        {
          href: '/interns/emergency-cases',
          label: 'Emergency Cases',
          icon: 'stethoscope',
        },
      ],
    },
  ],

  em_resident: [
    {
      title: 'Emergency Medicine Core',
      items: [
        {
          href: '/residents',
          label: 'Residents Hub',
          icon: 'heart',
        },
        {
          href: '/topics',
          label: 'Full EM Topics',
          icon: 'book',
        },
        {
          href: '/critical-care',
          label: 'Resuscitation and Critical Care',
          icon: 'activity',
        },
        {
          href: '/intubation-ventilator',
          label: 'Airway and Ventilation',
          icon: 'wind',
        },
        {
          href: '/ecg-atlas',
          label: 'Advanced ECG',
          icon: 'heart',
        },
        {
          href: '/drug-handbook',
          label: 'Drug Handbook',
          icon: 'pill',
        },
        {
          href: '/toxicology',
          label: 'Toxicology',
          icon: 'shield',
        },
        {
          href: '/emergency-cases',
          label: 'Advanced Emergency Cases',
          icon: 'stethoscope',
        },
      ],
    },
    {
      title: 'Academic and Exam Prep',
      items: [
        {
          href: '/arabic-board-review',
          label: 'Board Review',
          icon: 'brain',
        },
        {
          href: '/emergency-oral-exam-mastery',
          label: 'Oral Board / Viva',
          icon: 'message',
        },
      ],
    },
  ],

  medical_student: [
    {
      title: 'Student Foundations',
      items: [
        {
          href: '/students',
          label: 'Medical Student Hub',
          icon: 'graduation',
        },
        {
          href: '/students/basic-ed-approach',
          label: 'Basic ED Approach',
          icon: 'stethoscope',
        },
        {
          href: '/students/ecg-basics',
          label: 'ECG Basics',
          icon: 'heart',
        },
        {
          href: '/students/basic-drugs',
          label: 'Basic Emergency Drugs',
          icon: 'pill',
        },
      ],
    },
    {
      title: 'Cases and Practice',
      items: [
        {
          href: '/students/clinical-cases',
          label: 'Clinical Cases',
          icon: 'clipboard',
        },
        {
          href: '/students/mcq-practice',
          label: 'MCQ Practice',
          icon: 'target',
        },
      ],
    },
  ],

  general_practitioner: [
    {
      title: 'GP Emergency Practice',
      items: [
        {
          href: '/emergency-cases',
          label: 'Emergency Cases',
          icon: 'stethoscope',
        },
        {
          href: '/red-flags-ddx',
          label: 'Red Flags and Differentials',
          icon: 'shield',
        },
        {
          href: '/topics',
          label: 'Core Emergency Topics',
          icon: 'book',
        },
        {
          href: '/critical-care',
          label: 'Initial Stabilization',
          icon: 'activity',
        },
      ],
    },
    {
      title: 'Clinical References',
      items: [
        {
          href: '/drug-handbook',
          label: 'Medication Awareness',
          icon: 'pill',
        },
        {
          href: '/ecg-atlas',
          label: 'ECG Essentials',
          icon: 'heart',
        },
        {
          href: '/toxicology',
          label: 'Toxicology',
          icon: 'shield',
        },
      ],
    },
  ],

  ems_paramedic: [
    {
      title: 'Prehospital Core',
      items: [
        {
          href: '/algorithms',
          label: 'EMS Algorithms',
          icon: 'clipboard',
        },
        {
          href: '/intubation-ventilator',
          label: 'Airway and Oxygen',
          icon: 'wind',
        },
        {
          href: '/critical-care',
          label: 'Resuscitation',
          icon: 'activity',
        },
        {
          href: '/emergency-cases',
          label: 'Prehospital Cases',
          icon: 'stethoscope',
        },
      ],
    },
    {
      title: 'References',
      items: [
        {
          href: '/red-flags-ddx',
          label: 'Emergency Red Flags',
          icon: 'shield',
        },
        {
          href: '/toxicology',
          label: 'Poisoning Emergencies',
          icon: 'shield',
        },
        {
          href: '/drug-handbook',
          label: 'Prehospital Medications',
          icon: 'pill',
        },
      ],
    },
  ],

  emergency_nurse: [
    {
      title: 'Emergency Nursing Core',
      items: [
        {
          href: '/critical-care',
          label: 'Resuscitation Nursing',
          icon: 'activity',
        },
        {
          href: '/emergency-cases',
          label: 'Emergency Cases',
          icon: 'stethoscope',
        },
        {
          href: '/intubation-ventilator',
          label: 'Airway Support',
          icon: 'wind',
        },
        {
          href: '/algorithms',
          label: 'Emergency Algorithms',
          icon: 'clipboard',
        },
      ],
    },
    {
      title: 'Nursing References',
      items: [
        {
          href: '/drug-handbook',
          label: 'Emergency Medications',
          icon: 'pill',
        },
        {
          href: '/red-flags-ddx',
          label: 'Triage Red Flags',
          icon: 'shield',
        },
        {
          href: '/topics',
          label: 'Emergency Topics',
          icon: 'book',
        },
      ],
    },
  ],

  other: [
    {
      title: 'Core SEG Library',
      items: [
        {
          href: '/topics',
          label: 'Emergency Topics',
          icon: 'book',
        },
        {
          href: '/ecg-atlas',
          label: 'ECG Atlas',
          icon: 'heart',
        },
        {
          href: '/drug-handbook',
          label: 'Drug Handbook',
          icon: 'pill',
        },
        {
          href: '/emergency-cases',
          label: 'Emergency Cases',
          icon: 'stethoscope',
        },
        {
          href: '/toxicology',
          label: 'Toxicology',
          icon: 'shield',
        },
      ],
    },
  ],
};

export function getRoleSidebarSections(
  role: ClinicalRole,
): SidebarNavSection[] {
  return ROLE_SIDEBAR_SECTIONS[role];
}