import { AnyRecord } from './database';

export type DrugHandbookGroup = {
  slug: string;
  title: string;
  subtitle: string;
  keywords: string[];
  accent: string;
};

export const drugHandbookGroups: DrugHandbookGroup[] = [
  {
    slug: 'cardio-resuscitation',
    title: 'Cardio & Resuscitation',
    subtitle: 'ACLS drugs, rhythm decisions, arrest, ACS, bradycardia, tachycardia, and hemodynamic rescue.',
    keywords: ['cardiac', 'heart', 'acs', 'stemi', 'mi', 'arrest', 'resuscitation', 'brady', 'tachy', 'svt', 'vt', 'vf', 'arrhythmia', 'shock', 'hypotension', 'epinephrine', 'adenosine', 'amiodarone', 'aspirin', 'atropine', 'calcium', 'bicarbonate', 'magnesium'],
    accent: 'emerald',
  },
  {
    slug: 'rsi-airway',
    title: 'RSI & Airway',
    subtitle: 'Induction, paralysis, peri-intubation drugs, airway sedation, and emergency ventilation support.',
    keywords: ['rsi', 'airway', 'intubation', 'sedation', 'induction', 'paralytic', 'paralysis', 'ventilation', 'etomidate', 'ketamine', 'succinylcholine', 'rocuronium', 'propofol', 'midazolam', 'fentanyl', 'lidocaine'],
    accent: 'cyan',
  },
  {
    slug: 'vasopressors-inotropes',
    title: 'Vasopressors & Inotropes',
    subtitle: 'Shock pressors, inotropes, MAP support, infusion logic, and critical-care hemodynamics.',
    keywords: ['vasopressor', 'pressor', 'inotrope', 'infusion', 'shock', 'hypotension', 'map', 'septic', 'cardiogenic', 'norepinephrine', 'epinephrine', 'dopamine', 'dobutamine', 'phenylephrine', 'vasopressin', 'milrinone'],
    accent: 'teal',
  },
  {
    slug: 'analgesia-sedation',
    title: 'Analgesia & Sedation',
    subtitle: 'Pain control, procedural sedation, agitation control, dissociation, and safe reassessment.',
    keywords: ['analgesia', 'pain', 'sedation', 'sedative', 'agitation', 'opioid', 'morphine', 'fentanyl', 'ketamine', 'midazolam', 'propofol', 'lorazepam', 'diazepam', 'haloperidol', 'diclofenac', 'paracetamol', 'acetaminophen'],
    accent: 'violet',
  },
  {
    slug: 'toxicology-antidotes',
    title: 'Toxicology & Antidotes',
    subtitle: 'Overdose patterns, poisonings, reversal agents, antidotes, and ECG/tox exam triggers.',
    keywords: ['toxic', 'toxicity', 'poison', 'poisoning', 'overdose', 'antidote', 'reversal', 'organophosphate', 'opioid', 'tca', 'digoxin', 'naloxone', 'nac', 'acetylcysteine', 'fomepizole', 'atropine', 'pralidoxime', 'bicarbonate', 'calcium', 'glucagon'],
    accent: 'amber',
  },
  {
    slug: 'thrombolytics-reversal',
    title: 'Thrombolytics & Reversal',
    subtitle: 'Stroke, PE, STEMI lysis, anticoagulant reversal, bleeding rescue, and contraindication thinking.',
    keywords: ['thrombolytic', 'thrombolysis', 'alteplase', 'tpa', 'tenecteplase', 'streptokinase', 'stroke', 'ischemic', 'pe', 'pulmonary embolism', 'stemi', 'reversal', 'warfarin', 'pcc', 'vitamin k', 'protamine', 'tranexamic', 'txa', 'bleeding'],
    accent: 'rose',
  },
  {
    slug: 'hypertensive-emergencies',
    title: 'Hypertensive Emergencies',
    subtitle: 'Aortic dissection, intracranial emergencies, severe hypertension, and titratable BP control.',
    keywords: ['hypertension', 'hypertensive', 'blood pressure', 'bp', 'aortic dissection', 'nicardipine', 'labetalol', 'nitroprusside', 'nitroglycerin', 'esmolol', 'hydralazine', 'phentolamine'],
    accent: 'orange',
  },
  {
    slug: 'seizure-neuro',
    title: 'Seizure & Neuro Emergencies',
    subtitle: 'Seizure termination, status epilepticus, raised ICP, stroke-adjacent drugs, and neuro rescue.',
    keywords: ['seizure', 'status epilepticus', 'neuro', 'intracranial', 'cerebral', 'stroke', 'meningitis', 'lorazepam', 'diazepam', 'midazolam', 'levetiracetam', 'phenytoin', 'fosphenytoin', 'mannitol', 'hypertonic saline', 'magnesium', 'dexamethasone'],
    accent: 'blue',
  },
  {
    slug: 'respiratory-anaphylaxis',
    title: 'Respiratory / Asthma / Anaphylaxis',
    subtitle: 'Bronchospasm, asthma/COPD rescue, anaphylaxis, oxygenation support, and airway-adjacent drugs.',
    keywords: ['asthma', 'copd', 'bronchospasm', 'respiratory', 'anaphylaxis', 'allergy', 'wheeze', 'epinephrine', 'salbutamol', 'albuterol', 'ipratropium', 'magnesium', 'steroid', 'hydrocortisone', 'dexamethasone'],
    accent: 'sky',
  },
  {
    slug: 'fluids-electrolytes',
    title: 'Fluids & Electrolytes',
    subtitle: 'Hyperkalemia, calcium, magnesium, sodium, glucose, fluid resuscitation, and electrolyte rescue.',
    keywords: ['fluid', 'electrolyte', 'sodium', 'potassium', 'calcium', 'magnesium', 'glucose', 'dextrose', 'saline', 'hyperkalemia', 'hypokalemia', 'hyponatremia', 'bicarbonate', 'insulin'],
    accent: 'cyan',
  },
  {
    slug: 'antibiotics',
    title: 'Antibiotics',
    subtitle: 'Sepsis, pneumonia, meningitis, soft-tissue infection, anaerobes, and time-critical antimicrobials.',
    keywords: ['antibiotic', 'infection', 'sepsis', 'pneumonia', 'meningitis', 'gonorrhea', 'mrsa', 'anaerobic', 'cellulitis', 'ceftriaxone', 'clindamycin', 'vancomycin', 'piperacillin', 'tazobactam', 'azithromycin', 'metronidazole'],
    accent: 'emerald',
  },
  {
    slug: 'gi-bleeding-liver',
    title: 'GI / Bleeding / Liver',
    subtitle: 'GI bleeding, antiemetics, acid suppression, liver-related emergencies, and bleeding stabilization.',
    keywords: ['gi', 'gastro', 'bleeding', 'bleed', 'liver', 'hepatic', 'variceal', 'ulcer', 'antiemetic', 'vomiting', 'ondansetron', 'pantoprazole', 'octreotide', 'tranexamic', 'txa', 'vitamin k'],
    accent: 'amber',
  },
];

export function getDrugName(drug: AnyRecord): string {
  return String(drug.name || drug.medication || drug.title || 'Unnamed drug');
}

export function drugSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function compactDrugText(drug: AnyRecord): string {
  return [
    drug.name,
    drug.medication,
    drug.title,
    drug.use,
    drug.indication,
    drug.indications,
    drug.category,
    drug.class,
    drug.dose,
    drug.route,
    drug.mechanism,
    drug.contraindications,
    drug.cautions,
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();
}

export function classifyDrug(drug: AnyRecord): string {
  const text = compactDrugText(drug);
  if (matchesGroup(drug, 'antibiotics')) return 'Antibiotic';
  if (text.includes('antidote') || text.includes('toxic') || text.includes('poison') || text.includes('overdose') || text.includes('reversal')) return 'Toxicology / Antidote';
  if (text.includes('rsi') || text.includes('sedation') || text.includes('paralytic') || text.includes('airway')) return 'RSI / Sedation';
  if (text.includes('vasopressor') || text.includes('inotrope') || text.includes('shock') || text.includes('infusion')) return 'Critical Care Infusion';
  if (text.includes('asthma') || text.includes('anaphylaxis') || text.includes('bronchospasm')) return 'Respiratory';
  if (text.includes('seizure') || text.includes('stroke') || text.includes('intracranial')) return 'Neuro Emergency';
  if (text.includes('bleed') || text.includes('liver') || text.includes('gi')) return 'GI / Bleeding';
  if (text.includes('acs') || text.includes('svt') || text.includes('brady') || text.includes('tachy') || text.includes('ventricular')) return 'ACLS / Cardiac';
  return String(drug.category || drug.class || 'Emergency Medicine');
}

export function inferRoute(drug: AnyRecord): string {
  const route = String(drug.route || '').trim();
  if (route) return route;
  const dose = String(drug.dose || '').toUpperCase();
  const routes = ['IV', 'IM', 'PO', 'IN', 'IO', 'SC', 'SL', 'NEB'];
  const found = routes.filter((item) => new RegExp(`\\b${item}\\b`).test(dose));
  return found.length ? found.join(' / ') : 'Not specified in current handbook data.';
}

export function matchesGroup(drug: AnyRecord, groupSlug: string): boolean {
  const group = drugHandbookGroups.find((item) => item.slug === groupSlug);
  if (!group) return false;
  const text = compactDrugText(drug);
  const name = getDrugName(drug).toLowerCase();

  if (group.slug === 'cardio-resuscitation') {
    if (['adenosine', 'amiodarone', 'aspirin', 'atropine', 'epinephrine', 'calcium gluconate', 'calcium chloride', 'magnesium sulfate', 'sodium bicarbonate'].some((x) => name.includes(x))) return true;
  }
  if (group.slug === 'respiratory-anaphylaxis') {
    if (['epinephrine', 'magnesium sulfate', 'dexamethasone', 'hydrocortisone', 'salbutamol', 'albuterol', 'ipratropium'].some((x) => name.includes(x))) return true;
  }
  if (group.slug === 'toxicology-antidotes') {
    if (['naloxone', 'digoxin', 'atropine', 'sodium bicarbonate', 'calcium', 'glucagon', 'n-acetylcysteine', 'acetylcysteine', 'fomepizole'].some((x) => name.includes(x))) return true;
  }
  if (group.slug === 'fluids-electrolytes') {
    if (['calcium', 'magnesium', 'sodium bicarbonate', 'dextrose', 'insulin', 'saline', 'potassium'].some((x) => name.includes(x))) return true;
  }
  if (group.slug === 'thrombolytics-reversal') {
    if (['alteplase', 'tenecteplase', 'streptokinase', 'tpa', 'tranexamic', 'vitamin k', 'protamine', 'pcc'].some((x) => name.includes(x))) return true;
  }

  return group.keywords.some((keyword) => text.includes(keyword.toLowerCase()));
}

export function getDrugsForGroup(drugs: AnyRecord[], groupSlug: string): AnyRecord[] {
  return drugs.filter((drug) => matchesGroup(drug, groupSlug));
}

export function groupsForDrug(drug: AnyRecord): DrugHandbookGroup[] {
  return drugHandbookGroups.filter((group) => matchesGroup(drug, group.slug));
}

export function getDrugField(drug: AnyRecord, keys: string[], fallback = 'Not specified in current handbook data.'): string {
  for (const key of keys) {
    const value = drug[key];
    if (value !== undefined && value !== null && String(value).trim()) return String(value);
  }
  return fallback;
}
