export type DrugImageRequirement = {
  searchName: string;
  requiredForm: string;
  preferredVisual: string;
  trustedSourcePriority: string[];
  safetyNote: string;
};

const defaultSources = ['DailyMed label/product image when available', 'FDA label or manufacturer product page', 'Hospital formulary-approved reference photo', 'Pharmacy-verified local product photo'];

export function getDrugImageRequirement(name: string, use = ''): DrugImageRequirement {
  const x = `${name} ${use}`.toLowerCase();
  if (x.includes('epinephrine') || x.includes('adrenaline')) return { searchName: 'Epinephrine adrenaline emergency ampoule prefilled syringe', requiredForm: 'Ampoule / prefilled syringe / auto-injector depending on indication', preferredVisual: 'Real ampoule or prefilled syringe label showing concentration clearly', trustedSourcePriority: defaultSources, safetyNote: 'Concentration varies widely; image must match the formulation used locally.' };
  if (x.includes('adenosine')) return { searchName: 'Adenosine injection vial emergency', requiredForm: 'Rapid IV push vial/ampoule', preferredVisual: 'Real vial/ampoule with dose concentration visible', trustedSourcePriority: defaultSources, safetyNote: 'Must match rapid-push formulation and local concentration.' };
  if (x.includes('amiodarone')) return { searchName: 'Amiodarone IV ampoule vial', requiredForm: 'IV ampoule/vial', preferredVisual: 'Real IV ampoule/vial used for arrhythmia loading', trustedSourcePriority: defaultSources, safetyNote: 'Different concentrations and dilutions exist; verify local preparation.' };
  if (x.includes('atropine')) return { searchName: 'Atropine injection prefilled syringe ampoule', requiredForm: 'Ampoule / prefilled syringe', preferredVisual: 'Emergency atropine injection label', trustedSourcePriority: defaultSources, safetyNote: 'Verify concentration and maximum dose protocol.' };
  if (x.includes('naloxone')) return { searchName: 'Naloxone nasal spray vial injection', requiredForm: 'Nasal spray / vial / prefilled syringe', preferredVisual: 'Route-specific naloxone product image', trustedSourcePriority: defaultSources, safetyNote: 'Image should match available route: IN, IM, or IV.' };
  if (x.includes('calcium')) return { searchName: `${name} injection vial ampoule`, requiredForm: 'IV vial/ampoule', preferredVisual: 'Real calcium salt vial/ampoule with salt type visible', trustedSourcePriority: defaultSources, safetyNote: 'Calcium gluconate and calcium chloride are not interchangeable dose-for-dose.' };
  if (x.includes('norepinephrine') || x.includes('dobutamine') || x.includes('vasopressin')) return { searchName: `${name} infusion vial ampoule`, requiredForm: 'Ampoule/vial for IV infusion', preferredVisual: 'Real infusion medication vial/ampoule label', trustedSourcePriority: defaultSources, safetyNote: 'Infusion concentration and pump settings must follow local ICU/ED protocol.' };
  if (x.includes('albuterol') || x.includes('salbutamol')) return { searchName: `${name} nebulizer inhaler`, requiredForm: 'Nebule / inhaler', preferredVisual: 'Nebule or inhaler used in emergency care', trustedSourcePriority: defaultSources, safetyNote: 'Use route-specific image: MDI vs nebulized solution.' };
  if (x.includes('aspirin') || x.includes('ibuprofen') || x.includes('diclofenac')) return { searchName: `${name} emergency medicine tablet injection`, requiredForm: 'Tablet / injection depending on drug', preferredVisual: 'Common ED formulation photo', trustedSourcePriority: defaultSources, safetyNote: 'Use formulation that matches the dose shown on the card.' };
  return { searchName: `${name} medication vial ampoule emergency`, requiredForm: 'Real emergency-use formulation: ampoule, vial, syringe, tablet, inhaler, or infusion bag', preferredVisual: 'Clear real medication photo with name/concentration visible', trustedSourcePriority: defaultSources, safetyNote: 'Do not use random web images without checking drug name, concentration, route, and formulation.' };
}
