export type SignSymptomTriad = {
  id: string;
  name: string;
  type: 'Triad' | 'Sign' | 'Syndrome' | 'Symptom Pattern';
  system: string;
  components: string[];
  meaning: string;
  dangerousCauses: string[];
  howToRecognize: string[];
  firstEdAction: string;
  trap: string;
  arabicSimple: string;
  mcq: { question: string; options: string[]; answer: string; explanation: string };
};

export const signsSymptomsTriads: SignSymptomTriad[] = [
  {
    id: 'becks-triad',
    name: "Beck's Triad",
    type: 'Triad',
    system: 'Trauma / Cardiovascular',
    components: ['Hypotension', 'Jugular venous distension', 'Muffled heart sounds'],
    meaning: 'Classic pattern suggesting cardiac tamponade, especially after trauma or pericardial effusion.',
    dangerousCauses: ['Penetrating chest trauma', 'Pericardial effusion', 'Malignancy-related effusion', 'Post-procedure bleeding'],
    howToRecognize: ['Shock with distended neck veins', 'Quiet heart sounds', 'Pulsus paradoxus may be present', 'POCUS may show pericardial effusion and chamber collapse'],
    firstEdAction: 'Stabilize ABCs, obtain bedside echo if available, and involve emergency/trauma/cardiology team for drainage pathway when unstable.',
    trap: 'The full triad is not always present; do not wait for all components if tamponade physiology is likely.',
    arabicSimple: 'الفكرة أن هناك سائل/دم يضغط على القلب، فيمنعه من الامتلاء والضخ. لذلك ينخفض الضغط وقد تظهر أوردة الرقبة. لا تنتظر كل العلامات إذا المريض ينهار.',
    mcq: { question: 'Hypotension + JVD + muffled heart sounds after stab wound suggests:', options: ['Tension headache', 'Cardiac tamponade', 'DKA', 'Appendicitis'], answer: 'Cardiac tamponade', explanation: "This is Beck's triad, a classic tamponade clue." },
  },
  {
    id: 'charcot-triad',
    name: "Charcot's Triad",
    type: 'Triad',
    system: 'GI / Sepsis',
    components: ['Fever', 'Right upper quadrant pain', 'Jaundice'],
    meaning: 'Suggests acute ascending cholangitis.',
    dangerousCauses: ['Common bile duct obstruction with infection', 'Choledocholithiasis', 'Malignancy obstructing biliary tree'],
    howToRecognize: ['Toxic febrile patient', 'Jaundice/scleral icterus', 'RUQ tenderness', 'Abnormal cholestatic labs'],
    firstEdAction: 'Sepsis care, broad-spectrum antibiotics, fluids as appropriate, cultures, and urgent biliary decompression consultation.',
    trap: 'Do not treat as simple biliary colic when fever and jaundice are present.',
    arabicSimple: 'ألم يمين البطن + حرارة + صفار يعني انسداد بالقناة الصفراوية مع التهاب. هذا قد يتحول لصدمة إنتانية ويحتاج مضاد حيوي وتفريغ الانسداد.',
    mcq: { question: 'Fever, jaundice, and RUQ pain most strongly suggest:', options: ['Cholangitis', 'Migraine', 'Asthma', 'Renal colic'], answer: 'Cholangitis', explanation: "These components form Charcot's triad." },
  },
  {
    id: 'reynolds-pentad',
    name: "Reynolds' Pentad",
    type: 'Syndrome',
    system: 'GI / Shock',
    components: ['Charcot triad', 'Hypotension', 'Altered mental status'],
    meaning: 'Severe ascending cholangitis with sepsis/shock physiology.',
    dangerousCauses: ['Septic shock from biliary obstruction'],
    howToRecognize: ['Fever/RUQ pain/jaundice plus shock or confusion', 'Toxic appearance', 'Need for urgent source control'],
    firstEdAction: 'Resuscitate, give antibiotics early, monitor closely, and arrange urgent ERCP/source control pathway.',
    trap: 'Antibiotics alone may fail if obstruction is not relieved.',
    arabicSimple: 'إذا زادت على ثلاثية Charcot هبوط ضغط أو تشوش وعي، فهذا يعني التهاب صفراوي شديد مع صدمة؛ لا يكفي الدواء بدون تفريغ الانسداد.',
    mcq: { question: 'Charcot triad plus hypotension and confusion indicates:', options: ['Reynolds pentad', 'Beck triad', 'Virchow triad', 'Cushing triad'], answer: 'Reynolds pentad', explanation: 'Reynolds pentad indicates severe cholangitis.' },
  },
  {
    id: 'cushing-triad',
    name: "Cushing's Triad",
    type: 'Triad',
    system: 'Neuro / Trauma',
    components: ['Hypertension', 'Bradycardia', 'Irregular respirations'],
    meaning: 'Late sign of raised intracranial pressure and impending herniation.',
    dangerousCauses: ['Traumatic brain injury', 'Intracranial hemorrhage', 'Mass lesion', 'Cerebral edema'],
    howToRecognize: ['Altered mental status', 'Unequal pupils may occur', 'Abnormal posturing', 'Bradycardia with hypertension'],
    firstEdAction: 'Airway/oxygenation, head elevation, urgent neuroimaging/neurosurgery pathway, and herniation management per protocol.',
    trap: 'This is a late sign; do not wait for it before treating suspected raised ICP.',
    arabicSimple: 'هذه علامة متأخرة وخطيرة لارتفاع الضغط داخل الدماغ. إذا ظهرت، الدماغ قد يكون قريب من الانفتاق. اهتم بالأكسجة والضغط واتصل بجراحة الأعصاب بسرعة.',
    mcq: { question: 'Hypertension, bradycardia, and irregular respirations after head trauma suggest:', options: ['Raised ICP/herniation', 'Simple migraine', 'Anaphylaxis', 'Renal colic'], answer: 'Raised ICP/herniation', explanation: "This is Cushing's triad." },
  },
  {
    id: 'virchow-triad',
    name: "Virchow's Triad",
    type: 'Triad',
    system: 'Vascular',
    components: ['Stasis', 'Endothelial injury', 'Hypercoagulability'],
    meaning: 'Framework for understanding DVT/PE risk.',
    dangerousCauses: ['Pulmonary embolism', 'Deep vein thrombosis'],
    howToRecognize: ['Recent surgery/immobility', 'Cancer', 'Pregnancy/postpartum', 'Hormonal therapy', 'Unilateral leg swelling'],
    firstEdAction: 'Risk-stratify, assess hemodynamic stability, and use D-dimer/imaging/anticoagulation pathway as appropriate.',
    trap: 'Normal oxygen saturation does not exclude PE in the right context.',
    arabicSimple: 'جلطات الأوردة تحدث غالبًا عندما الدم يركد، أو الوعاء يتأذى، أو الجسم يميل للتخثر. هذه الفكرة تساعدك تعرف من هو عالي الخطورة للـ PE.',
    mcq: { question: 'Immobility, vessel injury, and hypercoagulability describe:', options: ['Virchow triad', 'Charcot triad', 'Beck triad', 'Murphy sign'], answer: 'Virchow triad', explanation: 'Virchow triad describes thrombosis risk factors.' },
  },
  {
    id: 'murphy-sign',
    name: "Murphy's Sign",
    type: 'Sign',
    system: 'GI',
    components: ['Inspiratory arrest during RUQ palpation'],
    meaning: 'Suggests acute cholecystitis when paired with compatible symptoms.',
    dangerousCauses: ['Acute cholecystitis', 'Gangrenous cholecystitis', 'Perforation'],
    howToRecognize: ['RUQ pain', 'Fever or leukocytosis', 'Pain stops inspiration during palpation', 'Ultrasound may show stones/wall thickening/pericholecystic fluid'],
    firstEdAction: 'Analgesia, antiemetic, labs, RUQ ultrasound, antibiotics if infection suspected, surgery consultation when indicated.',
    trap: 'A negative Murphy sign does not exclude disease, especially in elderly or analgesic-treated patients.',
    arabicSimple: 'إذا ضغطت تحت الضلع الأيمن والمريض وقف نفسه من الألم، فكر بالمرارة. لكن غياب العلامة لا ينفي التشخيص دائمًا.',
    mcq: { question: 'Inspiratory arrest with RUQ palpation is:', options: ['Murphy sign', 'Rovsing sign', 'Kernig sign', 'Tinel sign'], answer: 'Murphy sign', explanation: 'Murphy sign supports cholecystitis.' },
  },
];
