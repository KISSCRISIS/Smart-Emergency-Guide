// Auto-generated from uploaded Emergency Medicine Master Reference, project database, and verified source map.
// Arabic understanding notes were completed for every lesson during the final textbook pass.
// Do not edit manually unless regenerating the EM Master Textbook data.

export type EmMasterLesson = {
  id: string;
  number: number;
  title: string;
  chapter: string;
  sourceType: string;
  sourceRoots: string[];
  externalUrl?: string;
  core: string[];
  presentation: string[];
  management: string[];
  pearls: string[];
  traps: string[];
  algorithm: string[];
  arabic: string;
  visualHints?: { id?: string; src?: string; title?: string; type?: string; topic?: string; needsReview?: boolean }[];
  needsDoseVerification?: boolean;
  numbers?: string[];
};

export const emMasterBookMeta = {
  "title": "Emergency Medicine Master Compact Textbook",
  "subtitle": "A 250–300 page English-first emergency medicine master summary with mandatory short Arabic understanding notes for every lesson.",
  "lessonCount": 293,
  "pageEstimate": "273–300 compact digital pages",
  "sourceSummary": [
    "Emergency Medicine Master Reference by Dr. Alaa R. AlAsfar",
    "Rosh Rapid Review PDF text and visual mapping",
    "Tintinalli/Rosen/FRCEM-style internal source map",
    "LITFL Part One physiology links provided by user",
    "MDCalc risk tools and UpToDate verification links for selected topics"
  ],
  "safety": "Educational only. Verify medication doses, infusions, procedures, and disposition pathways against current institutional protocols before clinical use.",
  "arabicPolicy": "Every lesson includes a simplified Arabic explanation focused on understanding the emergency logic, not memorization."
} as const;

export const emMasterChapterOrder = [
  "Core Emergency Medicine",
  "ECG Atlas & Cardiology",
  "POCUS & Visual Diagnosis",
  "Emergency Drug Handbook",
  "Critical Care & Infusions",
  "Toxicology & Antidotes",
  "Board Review & Exam Strategy",
  "Airway & Ventilation",
  "Respiratory Emergencies",
  "Neurology & Altered Mental Status",
  "Trauma & Procedures",
  "Renal, Electrolytes & Acid-Base",
  "Endocrine & Metabolic Emergencies",
  "Pediatric Emergencies",
  "OB/GYN Emergencies",
  "GI & Hepatobiliary Emergencies",
  "Hematology & Transfusion",
  "Environmental, Allergy & EENT",
  "Dermatology & Soft Tissue",
  "Psychosocial & Special Situations"
] as const;

export const emMasterLessons = [
  {
    "id": "master-2-stemi-recognition-masterclass",
    "number": 2,
    "title": "Stemi Recognition Masterclass",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "The most dangerous ECG mistake in Emergency Medicine",
      "Missing an acute coronary occlusion.",
      "Not every STEMI looks dramatic.",
      "Many occlusions begin with subtle changes."
    ],
    "presentation": [
      "ST elevation",
      "V1-V4",
      "May extend",
      "V1-V6"
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "The larger the territory,",
      "the larger the mortality.",
      "Anterior STEMI",
      "Highest yield board STEMI."
    ],
    "traps": [
      "True STEMI often has reciprocal changes.",
      "Pericarditis usually does not.",
      "Hyperacute T Waves",
      "Often occur",
      "before",
      "ST elevation."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Stemi Recognition Masterclass: لا تكتفِ بحفظ شكل ECG. اسأل: هل توجد جلطة أو انسداد قلبي لا يحتمل الانتظار؟ اربط التخطيط بالألم والعلامات الحيوية، وابحث عن التغيرات المتبادلة والأنماط الخفية، ولا تؤخر مسار القسطرة/إعادة التروية إذا كان النمط عالي الخطورة.",
    "visualHints": [
      {
        "id": "pdf-acute-decompensated-heart-failure-p51-4",
        "src": "/visual-assets/ecg-atlas/pdf-acute-decompensated-heart-failure-p51-4.jpg",
        "title": "Acute Decompensated Heart Failure",
        "type": "Diagnostic imaging visual",
        "topic": "Acute Decompensated Heart Failure",
        "needsReview": false
      },
      {
        "id": "pdf-toxic-megacolon-p182-2",
        "src": "/visual-assets/toxicology-antidotes/pdf-toxic-megacolon-p182-2.jpg",
        "title": "Toxic Megacolon",
        "type": "Diagnostic imaging visual",
        "topic": "Toxic Megacolon",
        "needsReview": false
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-3-stemi-mimics",
    "number": 3,
    "title": "Stemi MImics",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Not every ST elevation is STEMI.",
      "One of the biggest board traps",
      "Activating STEMI pathway for a mimic.",
      "Major STEMI Mimics",
      "Early Repolarization",
      "Pericarditis"
    ],
    "presentation": [
      "Concave ST elevation",
      "J-point notching",
      "Stable over time",
      "No reciprocal changes",
      "Sharp pain",
      "Better leaning forward",
      "Worse lying flat",
      "Pericarditis vs STEMI"
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Early repolarization patient usually looks well.",
      "Acute Pericarditis"
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Stemi MImics: لا تكتفِ بحفظ شكل ECG. اسأل: هل توجد جلطة أو انسداد قلبي لا يحتمل الانتظار؟ اربط التخطيط بالألم والعلامات الحيوية، وابحث عن التغيرات المتبادلة والأنماط الخفية، ولا تؤخر مسار القسطرة/إعادة التروية إذا كان النمط عالي الخطورة.",
    "visualHints": [
      {
        "id": "pdf-acute-decompensated-heart-failure-p51-4",
        "src": "/visual-assets/ecg-atlas/pdf-acute-decompensated-heart-failure-p51-4.jpg",
        "title": "Acute Decompensated Heart Failure",
        "type": "Diagnostic imaging visual",
        "topic": "Acute Decompensated Heart Failure",
        "needsReview": false
      },
      {
        "id": "pdf-toxic-megacolon-p182-2",
        "src": "/visual-assets/toxicology-antidotes/pdf-toxic-megacolon-p182-2.jpg",
        "title": "Toxic Megacolon",
        "type": "Diagnostic imaging visual",
        "topic": "Toxic Megacolon",
        "needsReview": false
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-4-posterior-mi",
    "number": 4,
    "title": "Posterior MI",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Posterior MI is one of the most commonly missed STEMIs in Emergency Medicine.",
      "Why?",
      "Because the infarction is occurring on the back wall of the heart, but we are looking from the front."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "ST depression in V1-V3",
      "=",
      "Posterior STEMI",
      "until proven otherwise.",
      "Why Tall R Waves?",
      "Posterior Q waves become",
      "Anterior R waves",
      "because of mirror imaging."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "Chest pain",
      "ST depression V1-V3",
      "Tall R waves?",
      "Posterior leads V7-V9",
      "ST elevation present?",
      "Activate reperfusion pathway"
    ],
    "arabic": "الفكرة ببساطة في Posterior MI: لا تكتفِ بحفظ شكل ECG. اسأل: هل توجد جلطة أو انسداد قلبي لا يحتمل الانتظار؟ اربط التخطيط بالألم والعلامات الحيوية، وابحث عن التغيرات المتبادلة والأنماط الخفية، ولا تؤخر مسار القسطرة/إعادة التروية إذا كان النمط عالي الخطورة.",
    "visualHints": [
      {
        "id": "pdf-posterior-cruciate-ligament-injury-p115-2",
        "src": "/visual-assets/topics/pdf-posterior-cruciate-ligament-injury-p115-2.jpg",
        "title": "Posterior Cruciate Ligament Injury",
        "type": "Diagnostic imaging visual",
        "topic": "Posterior Cruciate Ligament Injury",
        "needsReview": true
      },
      {
        "id": "pdf-posterior-cerebral-artery-p292-2",
        "src": "/visual-assets/topics/pdf-posterior-cerebral-artery-p292-2.jpg",
        "title": "Posterior Cerebral Artery",
        "type": "Clinical visual",
        "topic": "Posterior Cerebral Artery",
        "needsReview": true
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-5-right-ventricular-mi",
    "number": 5,
    "title": "Right Ventricular MI",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Right ventricular infarction is usually associated with inferior STEMI.",
      "Missing RV infarction can make treatment dangerous."
    ],
    "presentation": [
      "Inferior STEMI",
      "Ii",
      "Iii",
      "aVF",
      "Especially",
      "Lead III > Lead II",
      "Right-Sided ECG",
      "Most important lead"
    ],
    "management": [
      "Reperfusion",
      "Careful fluids",
      "Hemodynamic monitoring"
    ],
    "pearls": [
      "Inferior STEMI + hypotension + clear lungs",
      "=",
      "RV infarction",
      "until proven otherwise."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Right Ventricular MI: لا تكتفِ بحفظ شكل ECG. اسأل: هل توجد جلطة أو انسداد قلبي لا يحتمل الانتظار؟ اربط التخطيط بالألم والعلامات الحيوية، وابحث عن التغيرات المتبادلة والأنماط الخفية، ولا تؤخر مسار القسطرة/إعادة التروية إذا كان النمط عالي الخطورة.",
    "visualHints": [
      {
        "id": "pdf-right-bundle-branch-block-rbbb-p35-3",
        "src": "/visual-assets/ecg-atlas/pdf-right-bundle-branch-block-rbbb-p35-3.jpg",
        "title": "Right Bundle Branch Block (RBBB)",
        "type": "Diagnostic imaging visual",
        "topic": "Right Bundle Branch Block (RBBB)",
        "needsReview": false
      },
      {
        "id": "pdf-ventricular-fibrillation-p37-3",
        "src": "/visual-assets/ecg-atlas/pdf-ventricular-fibrillation-p37-3.jpg",
        "title": "Ventricular Fibrillation",
        "type": "Diagnostic imaging visual",
        "topic": "Ventricular Fibrillation",
        "needsReview": false
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-6-wellens-syndrome",
    "number": 6,
    "title": "Wellens Syndrome",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Wellens syndrome represents critical proximal LAD disease.",
      "The artery is not fully occluded yet.",
      "But it may become occluded soon."
    ],
    "presentation": [
      "Recent chest pain",
      "Currently pain-free",
      "Minimal enzyme elevation",
      "Characteristic T waves",
      "No major ST elevation"
    ],
    "management": [
      "Cardiology consultation",
      "Angiography",
      "Revascularization"
    ],
    "pearls": [
      "Pain often resolved.",
      "T waves are the clue.",
      "LAD critical stenosis.",
      "Do not stress test.",
      "High-risk ACS."
    ],
    "traps": [
      "Stress testing.",
      "Never.",
      "Why?",
      "Can provoke complete LAD occlusion."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Wellens Syndrome: لا تكتفِ بحفظ شكل ECG. اسأل: هل توجد جلطة أو انسداد قلبي لا يحتمل الانتظار؟ اربط التخطيط بالألم والعلامات الحيوية، وابحث عن التغيرات المتبادلة والأنماط الخفية، ولا تؤخر مسار القسطرة/إعادة التروية إذا كان النمط عالي الخطورة.",
    "visualHints": [
      {
        "id": "pdf-wol-parkinson-white-wpw-syndrome-p20-4",
        "src": "/visual-assets/ecg-atlas/pdf-wol-parkinson-white-wpw-syndrome-p20-4.jpg",
        "title": "Wolﬀ-Parkinson-White (WPW) Syndrome",
        "type": "Diagnostic imaging visual",
        "topic": "Wolﬀ-Parkinson-White (WPW) Syndrome",
        "needsReview": false
      },
      {
        "id": "pdf-wol-parkinson-white-wpw-syndrome-p20-6",
        "src": "/visual-assets/ecg-atlas/pdf-wol-parkinson-white-wpw-syndrome-p20-6.jpg",
        "title": "Wolﬀ-Parkinson-White (WPW) Syndrome",
        "type": "Diagnostic imaging visual",
        "topic": "Wolﬀ-Parkinson-White (WPW) Syndrome",
        "needsReview": false
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-7-de-winter-pattern",
    "number": 7,
    "title": "De Winter Pattern",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "De Winter pattern is an anterior STEMI equivalent.",
      "It represents acute LAD occlusion."
    ],
    "presentation": [
      "Instead of ST elevation",
      "You see",
      "Upsloping ST depression",
      "Tall symmetric T waves",
      "in precordial leads.",
      "Leads",
      "Usually",
      "V1-V6"
    ],
    "management": [
      "Treat as STEMI equivalent."
    ],
    "pearls": [
      "De Winter = LAD occlusion.",
      "Not NSTEMI.",
      "Tall symmetric T waves.",
      "Often no classic ST elevation.",
      "Needs urgent reperfusion."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في De Winter Pattern: لا تكتفِ بحفظ شكل ECG. اسأل: هل توجد جلطة أو انسداد قلبي لا يحتمل الانتظار؟ اربط التخطيط بالألم والعلامات الحيوية، وابحث عن التغيرات المتبادلة والأنماط الخفية، ولا تؤخر مسار القسطرة/إعادة التروية إذا كان النمط عالي الخطورة.",
    "visualHints": [
      {
        "id": "pdf-reassuring-pattern-p461-2",
        "src": "/visual-assets/topics/pdf-reassuring-pattern-p461-2.jpg",
        "title": "Reassuring Pattern",
        "type": "Clinical visual",
        "topic": "Reassuring Pattern",
        "needsReview": true
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-8-left-main-occlusion-pattern",
    "number": 8,
    "title": "Left Main Occlusion Pattern",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "One of the highest mortality ECG patterns.",
      "Represents severe global ischemia."
    ],
    "presentation": [
      "Diffuse ST depression",
      "ST elevation in aVR",
      "Why?",
      "Entire heart is ischemic.",
      "Left main disease",
      "Severe triple-vessel disease",
      "Profound supply-demand mismatch",
      "Distribution"
    ],
    "management": [
      "Urgent cardiology involvement."
    ],
    "pearls": [
      "The more widespread the ST depression,",
      "the more concerning the pattern."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Left Main Occlusion Pattern: لا تكتفِ بحفظ شكل ECG. اسأل: هل توجد جلطة أو انسداد قلبي لا يحتمل الانتظار؟ اربط التخطيط بالألم والعلامات الحيوية، وابحث عن التغيرات المتبادلة والأنماط الخفية، ولا تؤخر مسار القسطرة/إعادة التروية إذا كان النمط عالي الخطورة.",
    "visualHints": [
      {
        "id": "pdf-left-bundle-branch-block-lbbb-p36-3",
        "src": "/visual-assets/ecg-atlas/pdf-left-bundle-branch-block-lbbb-p36-3.jpg",
        "title": "Left Bundle Branch Block (LBBB)",
        "type": "Diagnostic imaging visual",
        "topic": "Left Bundle Branch Block (LBBB)",
        "needsReview": false
      },
      {
        "id": "pdf-retinal-vein-occlusion-p345-2",
        "src": "/visual-assets/topics/pdf-retinal-vein-occlusion-p345-2.jpg",
        "title": "Retinal Vein Occlusion",
        "type": "Algorithm / table / high-yield summary",
        "topic": "Retinal Vein Occlusion",
        "needsReview": true
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-9-hyperacute-t-waves",
    "number": 9,
    "title": "Hyperacute T Waves",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Hyperacute T waves may be the earliest sign of coronary occlusion.",
      "They occur before ST elevation.",
      "Appearance",
      "Broad",
      "Fat",
      "Symmetric"
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Recognizing hyperacute T waves can diagnose MI before STEMI criteria are met."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Hyperacute T Waves: لا تكتفِ بحفظ شكل ECG. اسأل: هل توجد جلطة أو انسداد قلبي لا يحتمل الانتظار؟ اربط التخطيط بالألم والعلامات الحيوية، وابحث عن التغيرات المتبادلة والأنماط الخفية، ولا تؤخر مسار القسطرة/إعادة التروية إذا كان النمط عالي الخطورة.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-10-occlusion-mi-vs-nstemi",
    "number": 10,
    "title": "Occlusion MI Vs Nstemi",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "سنبنيها بنفس المستوى ولكن بعمق أعلى بكثير لأنها أهم فصول الـ ECG في البورد والطوارئ.",
      "Ecg Atlas For Emergency Medicine"
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Emergency medicine is risk management: do not miss the dangerous diagnosis.",
      "Normal early tests do not always exclude serious disease when the story is high-risk.",
      "Trends and reassessment are often more important than one isolated value."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Occlusion MI Vs Nstemi: لا تكتفِ بحفظ شكل ECG. اسأل: هل توجد جلطة أو انسداد قلبي لا يحتمل الانتظار؟ اربط التخطيط بالألم والعلامات الحيوية، وابحث عن التغيرات المتبادلة والأنماط الخفية، ولا تؤخر مسار القسطرة/إعادة التروية إذا كان النمط عالي الخطورة.",
    "visualHints": [
      {
        "id": "pdf-retinal-vein-occlusion-p345-2",
        "src": "/visual-assets/topics/pdf-retinal-vein-occlusion-p345-2.jpg",
        "title": "Retinal Vein Occlusion",
        "type": "Algorithm / table / high-yield summary",
        "topic": "Retinal Vein Occlusion",
        "needsReview": true
      },
      {
        "id": "pdf-retinal-vein-occlusion-p346-2",
        "src": "/visual-assets/topics/pdf-retinal-vein-occlusion-p346-2.jpg",
        "title": "Retinal Vein Occlusion",
        "type": "Diagnostic imaging visual",
        "topic": "Retinal Vein Occlusion",
        "needsReview": true
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-3-stemi-mimics-masterclass",
    "number": 3,
    "title": "Stemi MImics Masterclass",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Not every ST elevation is STEMI.",
      "One of the biggest board traps",
      "Activating STEMI pathway for a mimic."
    ],
    "presentation": [
      "Concave ST elevation",
      "J-point notching",
      "Stable over time",
      "No reciprocal changes"
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Early repolarization patient usually looks well.",
      "Acute Pericarditis",
      "Classic ECG",
      "Diffuse ST elevation",
      "PR depression",
      "Distribution",
      "Many leads.",
      "Not coronary territory."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Stemi MImics Masterclass: لا تكتفِ بحفظ شكل ECG. اسأل: هل توجد جلطة أو انسداد قلبي لا يحتمل الانتظار؟ اربط التخطيط بالألم والعلامات الحيوية، وابحث عن التغيرات المتبادلة والأنماط الخفية، ولا تؤخر مسار القسطرة/إعادة التروية إذا كان النمط عالي الخطورة.",
    "visualHints": [
      {
        "id": "pdf-acute-decompensated-heart-failure-p51-4",
        "src": "/visual-assets/ecg-atlas/pdf-acute-decompensated-heart-failure-p51-4.jpg",
        "title": "Acute Decompensated Heart Failure",
        "type": "Diagnostic imaging visual",
        "topic": "Acute Decompensated Heart Failure",
        "needsReview": false
      },
      {
        "id": "pdf-toxic-megacolon-p182-2",
        "src": "/visual-assets/toxicology-antidotes/pdf-toxic-megacolon-p182-2.jpg",
        "title": "Toxic Megacolon",
        "type": "Diagnostic imaging visual",
        "topic": "Toxic Megacolon",
        "needsReview": false
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-4-posterior-mi-masterclass",
    "number": 4,
    "title": "Posterior MI Masterclass",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Posterior MI is one of the most commonly missed STEMIs in Emergency Medicine.",
      "Why?",
      "Because the infarction is occurring on the back wall of the heart, but we are looking from the front."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "ST depression in V1-V3",
      "=",
      "Posterior STEMI",
      "until proven otherwise.",
      "Why Tall R Waves?",
      "Posterior Q waves become",
      "Anterior R waves",
      "because of mirror imaging."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "Chest pain",
      "ST depression V1-V3",
      "Tall R waves?",
      "Posterior leads V7-V9",
      "ST elevation present?",
      "Activate reperfusion pathway"
    ],
    "arabic": "الفكرة ببساطة في Posterior MI Masterclass: لا تكتفِ بحفظ شكل ECG. اسأل: هل توجد جلطة أو انسداد قلبي لا يحتمل الانتظار؟ اربط التخطيط بالألم والعلامات الحيوية، وابحث عن التغيرات المتبادلة والأنماط الخفية، ولا تؤخر مسار القسطرة/إعادة التروية إذا كان النمط عالي الخطورة.",
    "visualHints": [
      {
        "id": "pdf-posterior-cruciate-ligament-injury-p115-2",
        "src": "/visual-assets/topics/pdf-posterior-cruciate-ligament-injury-p115-2.jpg",
        "title": "Posterior Cruciate Ligament Injury",
        "type": "Diagnostic imaging visual",
        "topic": "Posterior Cruciate Ligament Injury",
        "needsReview": true
      },
      {
        "id": "pdf-posterior-cerebral-artery-p292-2",
        "src": "/visual-assets/topics/pdf-posterior-cerebral-artery-p292-2.jpg",
        "title": "Posterior Cerebral Artery",
        "type": "Clinical visual",
        "topic": "Posterior Cerebral Artery",
        "needsReview": true
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-10-omi-vs-nstemi-modern-occlusion-paradigm",
    "number": 10,
    "title": "Omi Vs Nstemi (Modern Occlusion Paradigm)",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "وهذه ستكون من أهم فصول البورد وRosh لأنها تمثل أكثر الـ ECGs التي يتم تفويتها في الطوارئ",
      "Ecg Atlas For Emergency Medicine"
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Emergency medicine is risk management: do not miss the dangerous diagnosis.",
      "Normal early tests do not always exclude serious disease when the story is high-risk.",
      "Trends and reassessment are often more important than one isolated value."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Omi Vs Nstemi (Modern Occlusion Paradigm): لا تكتفِ بحفظ شكل ECG. اسأل: هل توجد جلطة أو انسداد قلبي لا يحتمل الانتظار؟ اربط التخطيط بالألم والعلامات الحيوية، وابحث عن التغيرات المتبادلة والأنماط الخفية، ولا تؤخر مسار القسطرة/إعادة التروية إذا كان النمط عالي الخطورة.",
    "visualHints": [
      {
        "id": "pdf-retinal-vein-occlusion-p345-2",
        "src": "/visual-assets/topics/pdf-retinal-vein-occlusion-p345-2.jpg",
        "title": "Retinal Vein Occlusion",
        "type": "Algorithm / table / high-yield summary",
        "topic": "Retinal Vein Occlusion",
        "needsReview": true
      },
      {
        "id": "pdf-retinal-vein-occlusion-p346-2",
        "src": "/visual-assets/topics/pdf-retinal-vein-occlusion-p346-2.jpg",
        "title": "Retinal Vein Occlusion",
        "type": "Diagnostic imaging visual",
        "topic": "Retinal Vein Occlusion",
        "needsReview": true
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-10-omi-vs-nstemi",
    "number": 10,
    "title": "Omi Vs Nstemi",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Modern ECG thinking is moving away from",
      "Stemi",
      "vs"
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Emergency medicine is risk management: do not miss the dangerous diagnosis.",
      "Normal early tests do not always exclude serious disease when the story is high-risk.",
      "Trends and reassessment are often more important than one isolated value."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Omi Vs Nstemi: لا تكتفِ بحفظ شكل ECG. اسأل: هل توجد جلطة أو انسداد قلبي لا يحتمل الانتظار؟ اربط التخطيط بالألم والعلامات الحيوية، وابحث عن التغيرات المتبادلة والأنماط الخفية، ولا تؤخر مسار القسطرة/إعادة التروية إذا كان النمط عالي الخطورة.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-11-bundle-branch-blocks",
    "number": 11,
    "title": "Bundle Branch Blocks",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Bundle branch blocks widen the QRS because ventricular conduction is delayed.",
      "The key ED question is",
      "Is this just conduction disease, or is it hiding ischemia?"
    ],
    "presentation": [
      "QRS ≥120 ms",
      "rSR’ pattern in V1",
      "Wide S wave in I and V6",
      "Normal variant",
      "PE / RV strain",
      "Ischemic disease",
      "Structural heart disease",
      "Left Bundle Branch Block — LBBB"
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "LBBB can hide MI.",
      "New ischemic symptoms with LBBB require caution.",
      "RBBB with chest pain can still be ACS.",
      "Wide QRS should trigger systematic review.",
      "Compare old ECG whenever possible."
    ],
    "traps": [
      "❌ “LBBB means no ECG interpretation possible”",
      "❌ Ignoring ischemic symptoms because of BBB",
      "❌ Missing hyperkalemia masquerading as conduction delay",
      "❌ Not comparing old ECG"
    ],
    "algorithm": [
      "Wide QRS",
      "BBB pattern?",
      "Old or new?",
      "Symptoms ischemic?",
      "Look for concordance/excess discordance",
      "Treat high-risk clinical picture"
    ],
    "arabic": "الفكرة ببساطة في Bundle Branch Blocks: فكّر كطبيب طوارئ. ابدأ بما يقتل الآن، ابحث عن العلامات الحمراء، ثبّت المريض قبل التفاصيل، ثم اختر الفحص أو العلاج الذي يغيّر القرار بأسرع وأأمن طريقة.",
    "visualHints": [
      {
        "id": "pdf-right-bundle-branch-block-rbbb-p35-3",
        "src": "/visual-assets/ecg-atlas/pdf-right-bundle-branch-block-rbbb-p35-3.jpg",
        "title": "Right Bundle Branch Block (RBBB)",
        "type": "Diagnostic imaging visual",
        "topic": "Right Bundle Branch Block (RBBB)",
        "needsReview": false
      },
      {
        "id": "pdf-left-bundle-branch-block-lbbb-p36-3",
        "src": "/visual-assets/ecg-atlas/pdf-left-bundle-branch-block-lbbb-p36-3.jpg",
        "title": "Left Bundle Branch Block (LBBB)",
        "type": "Diagnostic imaging visual",
        "topic": "Left Bundle Branch Block (LBBB)",
        "needsReview": false
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-12-brugada-syndrome",
    "number": 12,
    "title": "Brugada Syndrome",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Brugada syndrome is a sodium-channel disorder associated with sudden cardiac death.",
      "It is often recognized by ST elevation patterns in V1–V3."
    ],
    "presentation": [
      "Type 1 Brugada",
      "Coved ST elevation in V1–V3",
      "T wave inversion",
      "Pseudo-RBBB appearance",
      "Syncope",
      "Nocturnal agonal breathing",
      "Family history sudden death",
      "Fever can unmask pattern"
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Brugada involves V1–V3.",
      "Fever can unmask Brugada.",
      "Syncope makes it high-risk.",
      "It can mimic anterior STEMI.",
      "Family history sudden death matters."
    ],
    "traps": [
      "❌ Calling Brugada STEMI automatically",
      "❌ Discharging syncope + Brugada pattern",
      "❌ Ignoring fever-triggered ECG change",
      "❌ Missing family history"
    ],
    "algorithm": [
      "ST elevation V1–V3",
      "Ischemic symptoms or Brugada morphology?",
      "Coved pattern + syncope/family history?",
      "Cardiology/electrophysiology pathway",
      "Treat fever and avoid provoking drugs"
    ],
    "arabic": "الفكرة ببساطة في Brugada Syndrome: أول سؤال دائمًا: هل المريض مستقر؟ إذا كان غير مستقر فالعلاج السريع أهم من تسمية النظم بدقة. بعد ذلك اقرأ ECG بهدوء، وانتبه للأدوية الخطرة في بعض النظم مثل WPW أو QT الطويل.",
    "visualHints": [
      {
        "id": "pdf-wol-parkinson-white-wpw-syndrome-p20-4",
        "src": "/visual-assets/ecg-atlas/pdf-wol-parkinson-white-wpw-syndrome-p20-4.jpg",
        "title": "Wolﬀ-Parkinson-White (WPW) Syndrome",
        "type": "Diagnostic imaging visual",
        "topic": "Wolﬀ-Parkinson-White (WPW) Syndrome",
        "needsReview": false
      },
      {
        "id": "pdf-wol-parkinson-white-wpw-syndrome-p20-6",
        "src": "/visual-assets/ecg-atlas/pdf-wol-parkinson-white-wpw-syndrome-p20-6.jpg",
        "title": "Wolﬀ-Parkinson-White (WPW) Syndrome",
        "type": "Diagnostic imaging visual",
        "topic": "Wolﬀ-Parkinson-White (WPW) Syndrome",
        "needsReview": false
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-13-wolff-parkinson-white-wpw",
    "number": 13,
    "title": "Wolff-Parkinson-White (WPW)",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "WPW is an accessory pathway that allows conduction from atria to ventricles outside the AV node.",
      "The dangerous scenario is",
      "Atrial fibrillation with WPW."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "WPW baseline has delta wave.",
      "WPW + AF is irregular wide fast rhythm.",
      "Avoid AV nodal blockers in WPW + AF.",
      "Unstable = cardioversion.",
      "Can degenerate into VF."
    ],
    "traps": [
      "❌ Adenosine for irregular wide tachycardia",
      "❌ Diltiazem for WPW + AF",
      "❌ Missing delta wave",
      "❌ Calling it simple AF with aberrancy"
    ],
    "algorithm": [
      "Irregular wide fast rhythm",
      "Think WPW + AF",
      "Stable?",
      "No → synchronized cardioversion",
      "Yes → avoid AV nodal blockers",
      "Expert/procainamide pathway"
    ],
    "arabic": "الفكرة ببساطة في Wolff-Parkinson-White (WPW): أول سؤال دائمًا: هل المريض مستقر؟ إذا كان غير مستقر فالعلاج السريع أهم من تسمية النظم بدقة. بعد ذلك اقرأ ECG بهدوء، وانتبه للأدوية الخطرة في بعض النظم مثل WPW أو QT الطويل.",
    "visualHints": [
      {
        "id": "pdf-wol-parkinson-white-wpw-syndrome-p20-4",
        "src": "/visual-assets/ecg-atlas/pdf-wol-parkinson-white-wpw-syndrome-p20-4.jpg",
        "title": "Wolﬀ-Parkinson-White (WPW) Syndrome",
        "type": "Diagnostic imaging visual",
        "topic": "Wolﬀ-Parkinson-White (WPW) Syndrome",
        "needsReview": false
      },
      {
        "id": "pdf-wol-parkinson-white-wpw-syndrome-p20-6",
        "src": "/visual-assets/ecg-atlas/pdf-wol-parkinson-white-wpw-syndrome-p20-6.jpg",
        "title": "Wolﬀ-Parkinson-White (WPW) Syndrome",
        "type": "Diagnostic imaging visual",
        "topic": "Wolﬀ-Parkinson-White (WPW) Syndrome",
        "needsReview": false
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-14-supraventricular-tachycardia-svt",
    "number": 14,
    "title": "Supraventricular Tachycardia (SVT)",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "SVT is usually a regular narrow-complex tachycardia caused by a re-entry circuit above the ventricles."
    ],
    "presentation": [
      "Regular rhythm",
      "Narrow QRS",
      "Rate often 150–250",
      "P waves absent/hidden or retrograde"
    ],
    "management": [
      "Synchronized cardioversion.",
      "Adenosine Pearls",
      "Very short half-life",
      "Rapid IV push",
      "Warn patient about transient unpleasant feeling",
      "Can reveal flutter waves"
    ],
    "pearls": [
      "Regular narrow tachycardia suggests SVT.",
      "Stable SVT: vagal then adenosine.",
      "Unstable SVT: synchronized cardioversion.",
      "Adenosine may unmask atrial flutter.",
      "Do not use adenosine casually in irregular wide rhythm."
    ],
    "traps": [
      "❌ Adenosine for unstable patient instead of electricity",
      "❌ Adenosine for irregular wide rhythm",
      "❌ Forgetting vagal maneuvers",
      "❌ Calling sinus tachycardia SVT"
    ],
    "algorithm": [
      "Regular narrow tachycardia",
      "Stable?",
      "No → synchronized cardioversion",
      "Yes → vagal maneuvers",
      "Adenosine",
      "Reassess rhythm"
    ],
    "arabic": "الفكرة ببساطة في Supraventricular Tachycardia (SVT): أول سؤال دائمًا: هل المريض مستقر؟ إذا كان غير مستقر فالعلاج السريع أهم من تسمية النظم بدقة. بعد ذلك اقرأ ECG بهدوء، وانتبه للأدوية الخطرة في بعض النظم مثل WPW أو QT الطويل.",
    "visualHints": [],
    "needsDoseVerification": true
  },
  {
    "id": "master-15-atrial-flutter",
    "number": 15,
    "title": "Atrial Flutter",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map",
      "Rosh Rapid Review PDF text/visual support"
    ],
    "core": [
      "Atrial flutter is a macro-reentry rhythm usually producing sawtooth flutter waves.",
      "The classic ventricular rate is around 150 due to 2:1 conduction."
    ],
    "presentation": [
      "Sawtooth flutter waves",
      "Best seen in inferior leads",
      "Atrial rate around 300",
      "Ventricular rate commonly 150",
      "Why It Is Missed",
      "Flutter waves can hide inside QRS/T waves.",
      "Adenosine may transiently block AV node and reveal flutter waves."
    ],
    "management": [
      "Depends on",
      "Stability",
      "Duration",
      "Anticoagulation risk",
      "Rate control vs cardioversion"
    ],
    "pearls": [
      "Regular narrow rate 150 = flutter until proven otherwise.",
      "Flutter waves are sawtooth.",
      "Adenosine can reveal flutter but not usually terminate it.",
      "Anticoagulation considerations resemble AF.",
      "Unstable flutter gets synchronized cardioversion."
    ],
    "traps": [
      "❌ Calling all rate-150 tachycardia SVT",
      "❌ Thinking adenosine always cures flutter",
      "❌ Ignoring anticoagulation risk",
      "❌ Missing flutter waves in inferior leads"
    ],
    "algorithm": [
      "Narrow regular tachycardia ~150",
      "Look for flutter waves",
      "Stable?",
      "No → synchronized cardioversion",
      "Yes → rate/rhythm strategy + anticoagulation assessment"
    ],
    "arabic": "الفكرة ببساطة في Atrial Flutter: أول سؤال دائمًا: هل المريض مستقر؟ إذا كان غير مستقر فالعلاج السريع أهم من تسمية النظم بدقة. بعد ذلك اقرأ ECG بهدوء، وانتبه للأدوية الخطرة في بعض النظم مثل WPW أو QT الطويل.",
    "visualHints": [
      {
        "id": "pdf-atrial-flutter-p31-4",
        "src": "/visual-assets/toxicology-antidotes/pdf-atrial-flutter-p31-4.jpg",
        "title": "Atrial Flutter",
        "type": "Diagnostic imaging visual",
        "topic": "Atrial Flutter",
        "needsReview": false
      },
      {
        "id": "pdf-atrial-fibrillation-p30-4",
        "src": "/visual-assets/ecg-atlas/pdf-atrial-fibrillation-p30-4.jpg",
        "title": "Atrial Fibrillation",
        "type": "Diagnostic imaging visual",
        "topic": "Atrial Fibrillation",
        "needsReview": false
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-16-atrial-fibrillation",
    "number": 16,
    "title": "Atrial Fibrillation",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map",
      "Rosh Rapid Review PDF text/visual support"
    ],
    "core": [
      "Atrial fibrillation is an irregularly irregular rhythm with no organized P waves.",
      "Management depends on stability, rate, duration, symptoms, and stroke risk."
    ],
    "presentation": [
      "Irregularly irregular rhythm",
      "No clear P waves",
      "Narrow QRS unless aberrancy/pre-excitation",
      "Variable ventricular response",
      "Unstable AF",
      "Signs",
      "Hypotension",
      "Ischemic chest pain"
    ],
    "management": [
      "Synchronized cardioversion.",
      "Stable AF with RVR",
      "Think",
      "Rate control",
      "Treat trigger",
      "Anticoagulation risk",
      "Rhythm control in selected cases",
      "Common Triggers"
    ],
    "pearls": [
      "Irregularly irregular = AF.",
      "Unstable AF gets cardioversion.",
      "Treat underlying trigger.",
      "AF + WPW is dangerous.",
      "Anticoagulation risk matters."
    ],
    "traps": [
      "❌ Rate control while ignoring sepsis/PE trigger",
      "❌ AV nodal blockers in WPW + AF",
      "❌ Cardioversion delay in unstable AF",
      "❌ Ignoring anticoagulation/disposition"
    ],
    "algorithm": [
      "AF on ECG",
      "Stable?",
      "No → synchronized cardioversion",
      "Yes → rate/rhythm strategy",
      "Find trigger",
      "Stroke/bleeding risk",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Atrial Fibrillation: أول سؤال دائمًا: هل المريض مستقر؟ إذا كان غير مستقر فالعلاج السريع أهم من تسمية النظم بدقة. بعد ذلك اقرأ ECG بهدوء، وانتبه للأدوية الخطرة في بعض النظم مثل WPW أو QT الطويل.",
    "visualHints": [
      {
        "id": "pdf-atrial-fibrillation-p30-4",
        "src": "/visual-assets/ecg-atlas/pdf-atrial-fibrillation-p30-4.jpg",
        "title": "Atrial Fibrillation",
        "type": "Diagnostic imaging visual",
        "topic": "Atrial Fibrillation",
        "needsReview": false
      },
      {
        "id": "pdf-atrial-flutter-p31-4",
        "src": "/visual-assets/toxicology-antidotes/pdf-atrial-flutter-p31-4.jpg",
        "title": "Atrial Flutter",
        "type": "Diagnostic imaging visual",
        "topic": "Atrial Flutter",
        "needsReview": false
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-17-ventricular-tachycardia",
    "number": 17,
    "title": "Ventricular Tachycardia",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map",
      "Rosh Rapid Review PDF text/visual support"
    ],
    "core": [
      "Wide-complex tachycardia in adults is VT until proven otherwise.",
      "This is one of the safest rules in emergency ECG interpretation."
    ],
    "presentation": [
      "Wide QRS",
      "Rate usually >120",
      "Often regular",
      "AV dissociation may occur",
      "Capture/fusion beats support VT",
      "Stable VT",
      "Treat with antiarrhythmic pathway and expert help.",
      "Unstable VT with Pulse"
    ],
    "management": [
      "Synchronized cardioversion.",
      "Pulseless VT",
      "Defibrillation + CPR."
    ],
    "pearls": [
      "Wide regular tachycardia = VT.",
      "VT can have a pulse.",
      "Unstable VT with pulse gets synchronized cardioversion.",
      "Pulseless VT gets defibrillation.",
      "Hyperkalemia can mimic VT."
    ],
    "traps": [
      "❌ Treating VT as SVT",
      "❌ Adenosine first in unstable wide tachycardia",
      "❌ Forgetting pulse check",
      "❌ Not considering hyperkalemia"
    ],
    "algorithm": [
      "Wide tachycardia",
      "Pulse?",
      "No → defibrillate/CPR",
      "Yes → stable?",
      "No → synchronized cardioversion",
      "Yes → treat as VT"
    ],
    "arabic": "الفكرة ببساطة في Ventricular Tachycardia: أول سؤال دائمًا: هل المريض مستقر؟ إذا كان غير مستقر فالعلاج السريع أهم من تسمية النظم بدقة. بعد ذلك اقرأ ECG بهدوء، وانتبه للأدوية الخطرة في بعض النظم مثل WPW أو QT الطويل.",
    "visualHints": [
      {
        "id": "pdf-ventricular-fibrillation-p37-3",
        "src": "/visual-assets/ecg-atlas/pdf-ventricular-fibrillation-p37-3.jpg",
        "title": "Ventricular Fibrillation",
        "type": "Diagnostic imaging visual",
        "topic": "Ventricular Fibrillation",
        "needsReview": false
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-18-torsades-de-pointes",
    "number": 18,
    "title": "Torsades De Pointes",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map",
      "Rosh Rapid Review PDF text/visual support"
    ],
    "core": [
      "Torsades is polymorphic VT associated with prolonged QT.",
      "It can degenerate into VF."
    ],
    "presentation": [
      "Polymorphic VT",
      "Twisting around baseline",
      "Prolonged QT before/after episode",
      "Hypomagnesemia",
      "Hypokalemia",
      "Hypocalcemia",
      "QT-prolonging drugs",
      "Congenital long QT"
    ],
    "management": [
      "Magnesium sulfate",
      "Correct K/Mg/Ca",
      "Stop QT-prolonging drugs",
      "Defibrillate if pulseless/unstable",
      "Overdrive pacing/isoproterenol in recurrent bradycardia-associated cases"
    ],
    "pearls": [
      "Torsades = polymorphic VT + long QT.",
      "Magnesium is first-line.",
      "Correct potassium and magnesium.",
      "Avoid QT-prolonging drugs.",
      "Amiodarone can worsen QT."
    ],
    "traps": [
      "❌ Treating torsades with amiodarone reflexively",
      "❌ Forgetting QT review",
      "❌ Not correcting electrolytes",
      "❌ Missing medication cause"
    ],
    "algorithm": [
      "Polymorphic VT",
      "Pulse/unstable?",
      "Shock if needed",
      "Long QT?",
      "Magnesium",
      "Correct electrolytes/stop drugs"
    ],
    "arabic": "الفكرة ببساطة في Torsades De Pointes: أول سؤال دائمًا: هل المريض مستقر؟ إذا كان غير مستقر فالعلاج السريع أهم من تسمية النظم بدقة. بعد ذلك اقرأ ECG بهدوء، وانتبه للأدوية الخطرة في بعض النظم مثل WPW أو QT الطويل.",
    "visualHints": [],
    "needsDoseVerification": true
  },
  {
    "id": "master-19-complete-heart-block",
    "number": 19,
    "title": "Complete Heart Block",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Complete heart block is AV dissociation: atria and ventricles beat independently.",
      "It can cause syncope, shock, or sudden deterioration."
    ],
    "presentation": [
      "P waves regular",
      "QRS regular",
      "No fixed PR relationship",
      "Ventricular escape rhythm",
      "QRS narrow or wide depending escape site",
      "Hypotension",
      "Syncope",
      "Chest pain"
    ],
    "management": [
      "Atropine may help some nodal blocks",
      "Transcutaneous pacing",
      "Transvenous pacing",
      "Treat cause"
    ],
    "pearls": [
      "AV dissociation defines complete heart block.",
      "Wide escape rhythm is more dangerous.",
      "Anterior MI complete block is high-risk.",
      "Hyperkalemia can cause heart block.",
      "Unstable patients need pacing."
    ],
    "traps": [
      "❌ Calling complete block first-degree block",
      "❌ Delaying pacing in unstable patient",
      "❌ Missing hyperkalemia cause",
      "❌ Assuming atropine always works"
    ],
    "algorithm": [
      "Bradycardia",
      "P-QRS relationship?",
      "AV dissociation?",
      "Complete heart block",
      "Stable?",
      "No → pacing/pressors",
      "Treat cause"
    ],
    "arabic": "الفكرة ببساطة في Complete Heart Block: أول سؤال دائمًا: هل المريض مستقر؟ إذا كان غير مستقر فالعلاج السريع أهم من تسمية النظم بدقة. بعد ذلك اقرأ ECG بهدوء، وانتبه للأدوية الخطرة في بعض النظم مثل WPW أو QT الطويل.",
    "visualHints": [
      {
        "id": "pdf-first-degree-heart-block-p16-4",
        "src": "/visual-assets/ecg-atlas/pdf-first-degree-heart-block-p16-4.jpg",
        "title": "First-Degree Heart Block",
        "type": "Diagnostic imaging visual",
        "topic": "First-Degree Heart Block",
        "needsReview": false
      },
      {
        "id": "pdf-second-degree-heart-block-mobitz-i-p17-4",
        "src": "/visual-assets/ecg-atlas/pdf-second-degree-heart-block-mobitz-i-p17-4.jpg",
        "title": "Second-Degree Heart Block (Mobitz I /",
        "type": "Diagnostic imaging visual",
        "topic": "Second-Degree Heart Block (Mobitz I /",
        "needsReview": false
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-20-pacemaker-ecg-basics",
    "number": 20,
    "title": "Pacemaker ECG Basics",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Pacemaker ECG interpretation focuses on two questions",
      "Is the pacemaker firing?",
      "Is the myocardium capturing?"
    ],
    "presentation": [
      "Battery failure",
      "Lead fracture",
      "Oversensing",
      "Failure to Capture",
      "Pacing spike present",
      "but no QRS follows."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Spike without QRS = failure to capture.",
      "No spike when needed = failure to pace.",
      "Hyperkalemia can cause failure to capture.",
      "Paced rhythm can hide MI.",
      "Symptomatic pacemaker patient needs urgent evaluation."
    ],
    "traps": [
      "❌ Seeing spikes and assuming pacer works",
      "❌ Missing failure to capture",
      "❌ Ignoring hyperkalemia",
      "❌ Not checking device history"
    ],
    "algorithm": [
      "Pacemaker patient symptomatic",
      "Spikes present?",
      "Capture present?",
      "Sense appropriate?",
      "Treat instability + correct causes",
      "Device/cardiology evaluation",
      "ECG Atlas Progress",
      "Chapters 21–30",
      "Hyperkalemia ECG",
      "Hypokalemia ECG"
    ],
    "arabic": "الفكرة ببساطة في Pacemaker ECG Basics: أول سؤال دائمًا: هل المريض مستقر؟ إذا كان غير مستقر فالعلاج السريع أهم من تسمية النظم بدقة. بعد ذلك اقرأ ECG بهدوء، وانتبه للأدوية الخطرة في بعض النظم مثل WPW أو QT الطويل.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-21-hyperkalemia-ecg",
    "number": 21,
    "title": "Hyperkalemia ECG",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map",
      "Rosh Rapid Review PDF text/visual support"
    ],
    "core": [
      "Hyperkalemia is one of the most lethal ECG diagnoses because it can progress rapidly to cardiac arrest.",
      "The ECG may be dramatic, subtle, or even deceptively normal."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "If ECG changes or severe concern",
      "Calcium",
      "Insulin + dextrose",
      "Albuterol",
      "Bicarbonate in selected acidotic cases",
      "Remove potassium: dialysis/diuretics/binders depending case"
    ],
    "pearls": [
      "Calcium protects myocardium.",
      "Calcium does not lower potassium.",
      "Wide QRS + renal failure = calcium now.",
      "ECG can be normal despite hyperkalemia.",
      "Dialysis is definitive in ESRD."
    ],
    "traps": [
      "❌ Waiting for lab potassium with classic ECG",
      "❌ Thinking calcium lowers potassium",
      "❌ Forgetting glucose monitoring after insulin",
      "❌ Reassured by normal ECG in high-risk patient"
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Hyperkalemia ECG: ارتفاع أو اضطراب البوتاسيوم قد يقتل بسبب تأثيره على كهرباء القلب. إذا ظهر ECG خطير مثل QRS واسع أو T waves حادة أو بطء شديد، عالج القلب أولًا ولا تنتظر الصورة الكاملة.",
    "visualHints": [
      {
        "id": "pdf-ecg-changes-due-to-hyperkalemia-p367-2",
        "src": "/visual-assets/ecg-atlas/pdf-ecg-changes-due-to-hyperkalemia-p367-2.jpg",
        "title": "ECG Changes Due to Hyperkalemia",
        "type": "Diagnostic imaging visual",
        "topic": "ECG Changes Due to Hyperkalemia",
        "needsReview": false
      }
    ],
    "needsDoseVerification": true
  },
  {
    "id": "master-22-hypokalemia-ecg",
    "number": 22,
    "title": "Hypokalemia ECG",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map",
      "Rosh Rapid Review PDF text/visual support"
    ],
    "core": [
      "Hypokalemia increases arrhythmia risk, especially in patients with heart disease, digoxin use, or QT-prolonging medications."
    ],
    "presentation": [
      "ST depression",
      "T wave flattening",
      "Prominent U waves",
      "Apparent QT prolongation",
      "PVCs",
      "Ventricular arrhythmias",
      "U Waves"
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "U waves suggest hypokalemia.",
      "Hypokalemia increases digoxin toxicity risk.",
      "Magnesium deficiency can make hypokalemia refractory.",
      "Replace magnesium if low.",
      "Severe hypokalemia can cause weakness/paralysis."
    ],
    "traps": [
      "❌ Ignoring magnesium",
      "❌ Calling U waves extra P waves",
      "❌ Giving QT-prolonging drugs in severe hypokalemia",
      "❌ Underestimating arrhythmia risk"
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Hypokalemia ECG: نقص البوتاسيوم يجعل القلب أكثر قابلية للاضطرابات، خصوصًا مع أدوية مثل الديجوكسين أو أدوية تطيل QT. لا تنسَ فحص المغنيسيوم لأن نقصه قد يجعل التصحيح صعبًا.",
    "visualHints": [
      {
        "id": "pdf-hypokalemia-p368-2",
        "src": "/visual-assets/ecg-atlas/pdf-hypokalemia-p368-2.jpg",
        "title": "Hypokalemia",
        "type": "Diagnostic imaging visual",
        "topic": "Hypokalemia",
        "needsReview": false
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-23-calcium-disorders-ecg",
    "number": 23,
    "title": "Calcium Disorders ECG",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Calcium mainly changes the QT interval."
    ],
    "presentation": [
      "Tetany",
      "Perioral numbness",
      "Seizures",
      "Chvostek/Trousseau signs",
      "Hypercalcemia ECG",
      "Main finding",
      "Short QT"
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Hypocalcemia prolongs QT.",
      "Hypercalcemia shortens QT.",
      "Long QT increases torsades risk.",
      "Massive transfusion can cause hypocalcemia.",
      "Calcium is used to stabilize myocardium in hyperkalemia."
    ],
    "traps": [
      "❌ Forgetting calcium after massive transfusion",
      "❌ Missing hypocalcemia in prolonged QT",
      "❌ Assuming all long QT is drug-related",
      "❌ Missing hypercalcemia in altered patient"
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Calcium Disorders ECG: لا تحفظ الدواء كاسم فقط. افهم متى يفيد، متى يضر، ما الجرعة والطريق، وما الذي يجب مراقبته بعد إعطائه. في الطوارئ، خطأ الجرعة أو اختيار الدواء قد يغيّر مصير المريض.",
    "visualHints": [
      {
        "id": "pdf-conduction-disorders-p29-4",
        "src": "/visual-assets/ecg-atlas/pdf-conduction-disorders-p29-4.jpg",
        "title": "Conduction Disorders",
        "type": "Diagnostic imaging visual",
        "topic": "Conduction Disorders",
        "needsReview": false
      },
      {
        "id": "pdf-conduction-disorders-p32-4",
        "src": "/visual-assets/ecg-atlas/pdf-conduction-disorders-p32-4.jpg",
        "title": "Conduction Disorders",
        "type": "Diagnostic imaging visual",
        "topic": "Conduction Disorders",
        "needsReview": false
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-24-tca-sodium-channel-blockade-ecg",
    "number": 24,
    "title": "Tca & Sodium Channel Blockade ECG",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "TCA overdose kills through sodium channel blockade.",
      "The ECG clue is QRS widening."
    ],
    "presentation": [
      "QRS widening",
      "Terminal R wave in aVR",
      "Right axis deviation of terminal QRS",
      "QT prolongation possible",
      "Ventricular dysrhythmias",
      "Clinical Findings",
      "Anticholinergic toxidrome"
    ],
    "management": [
      "Sodium bicarbonate",
      "Benzodiazepines for seizures",
      "Supportive care",
      "Avoid class IA/IC antiarrhythmics"
    ],
    "pearls": [
      "Wide QRS in overdose = sodium channel blockade.",
      "TCA gets sodium bicarbonate.",
      "Terminal R in aVR is high-yield.",
      "Seizures are common.",
      "Hypotension is dangerous."
    ],
    "traps": [
      "❌ Treating wide-complex TCA rhythm with amiodarone",
      "❌ Missing overdose in altered patient",
      "❌ No ECG in overdose",
      "❌ Forgetting bicarbonate"
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Tca & Sodium Channel Blockade ECG: فكّر كطبيب طوارئ. ابدأ بما يقتل الآن، ابحث عن العلامات الحمراء، ثبّت المريض قبل التفاصيل، ثم اختر الفحص أو العلاج الذي يغيّر القرار بأسرع وأأمن طريقة.",
    "visualHints": [],
    "needsDoseVerification": true
  },
  {
    "id": "master-25-digoxin-ecg-toxicity",
    "number": 25,
    "title": "Digoxin ECG & Toxicity",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Digoxin has characteristic ECG effects, but toxicity is a clinical diagnosis supported by ECG, electrolytes, renal function, and level."
    ],
    "presentation": [
      "Scooped ST depression",
      "Shortened QT",
      "T wave flattening",
      "This is not necessarily toxicity.",
      "Digoxin Toxicity ECG",
      "Can cause almost any arrhythmia, especially",
      "PVCs",
      "AV block"
    ],
    "management": [
      "Digoxin immune Fab for severe toxicity."
    ],
    "pearls": [
      "Scooped ST depression = digoxin effect.",
      "Digoxin toxicity can cause many rhythms.",
      "Hyperkalemia in acute toxicity is dangerous.",
      "Renal failure increases risk.",
      "Digoxin immune Fab treats severe toxicity."
    ],
    "traps": [
      "❌ Calling digoxin effect ischemia automatically",
      "❌ Ignoring potassium",
      "❌ Missing toxicity in elderly renal failure",
      "❌ Treating level without clinical context"
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Digoxin ECG & Toxicity: في التسمم لا تطارد اسم السم قبل إنقاذ المريض. ابدأ بالـ ABCDE، افحص السكر و ECG، تعرف على toxidrome، ثم استخدم الترياق المناسب إذا كان واضحًا ومطلوبًا.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-26-pulmonary-embolism-ecg-patterns",
    "number": 26,
    "title": "Pulmonary Embolism ECG Patterns",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "ECG cannot rule out PE.",
      "But it can show right heart strain and identify high-risk physiology."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Normal ECG does not exclude PE.",
      "Sinus tachycardia is most common ECG finding.",
      "S1Q3T3 is classic but not sensitive.",
      "RV strain pattern suggests higher risk.",
      "PE can cause syncope and shock."
    ],
    "traps": [
      "❌ Excluding PE due to normal ECG",
      "❌ Overdiagnosing PE from S1Q3T3 alone",
      "❌ Missing RV strain in shock",
      "❌ Calling PE anxiety"
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Pulmonary Embolism ECG Patterns: في ضيق النفس اسأل أولًا هل المريض يفشل في الأكسجة أو التهوية. الأكسجين وحده لا يكفي دائمًا؛ قد تحتاج NIV أو intubation أو علاج السبب بسرعة.",
    "visualHints": [
      {
        "id": "pdf-pulmonary-embolism-p226-2",
        "src": "/visual-assets/ecg-atlas/pdf-pulmonary-embolism-p226-2.jpg",
        "title": "Pulmonary Embolism",
        "type": "Diagnostic imaging visual",
        "topic": "Pulmonary Embolism",
        "needsReview": false
      },
      {
        "id": "pdf-noncardiogenic-pulmonary-edema-p203-2",
        "src": "/visual-assets/toxicology-antidotes/pdf-noncardiogenic-pulmonary-edema-p203-2.jpg",
        "title": "Noncardiogenic Pulmonary Edema",
        "type": "Diagnostic imaging visual",
        "topic": "Noncardiogenic Pulmonary Edema",
        "needsReview": true
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-27-pericarditis-ecg",
    "number": 27,
    "title": "Pericarditis ECG",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map",
      "Rosh Rapid Review PDF text/visual support"
    ],
    "core": [
      "Pericarditis causes diffuse inflammation of the pericardium, producing widespread ST elevation and PR depression."
    ],
    "presentation": [
      "Diffuse concave ST elevation",
      "PR depression",
      "PR elevation in aVR",
      "No focal reciprocal depression except aVR/V1",
      "Pericarditis vs STEMI",
      "Pericarditis",
      "Diffuse ST elevation"
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "PR depression is high-yield.",
      "Pericarditis ST elevation is diffuse.",
      "STEMI is regional.",
      "Troponin can rise in myopericarditis.",
      "Effusion/tamponade must be considered if unstable."
    ],
    "traps": [
      "❌ Calling all diffuse ST elevation STEMI",
      "❌ Missing STEMI because pain is pleuritic",
      "❌ Ignoring hypotension/tamponade",
      "❌ Forgetting myocarditis overlap"
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Pericarditis ECG: فكّر كطبيب طوارئ. ابدأ بما يقتل الآن، ابحث عن العلامات الحمراء، ثبّت المريض قبل التفاصيل، ثم اختر الفحص أو العلاج الذي يغيّر القرار بأسرع وأأمن طريقة.",
    "visualHints": [
      {
        "id": "pdf-pericarditis-p27-4",
        "src": "/visual-assets/ecg-atlas/pdf-pericarditis-p27-4.jpg",
        "title": "Pericarditis",
        "type": "Diagnostic imaging visual",
        "topic": "Pericarditis",
        "needsReview": false
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-28-lvh-with-strain",
    "number": 28,
    "title": "Lvh With Strain",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "LVH can mimic ischemia because large ventricular mass creates repolarization abnormalities."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "LVH can mimic ACS.",
      "Look for high voltage.",
      "Strain T waves are often asymmetric.",
      "Compare old ECG.",
      "ACS can occur in LVH patients too."
    ],
    "traps": [
      "❌ Dismissing chest pain as LVH only",
      "❌ Calling all ST depression NSTEMI",
      "❌ Missing STEMI hidden by LVH",
      "❌ No old ECG comparison"
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Lvh With Strain: فكّر كطبيب طوارئ. ابدأ بما يقتل الآن، ابحث عن العلامات الحمراء، ثبّت المريض قبل التفاصيل، ثم اختر الفحص أو العلاج الذي يغيّر القرار بأسرع وأأمن طريقة.",
    "visualHints": [
      {
        "id": "pdf-pericardial-effusion-with-tamponade-p21-4",
        "src": "/visual-assets/pocus-atlas/pdf-pericardial-effusion-with-tamponade-p21-4.jpg",
        "title": "Pericardial Effusion with Tamponade",
        "type": "Diagnostic imaging visual",
        "topic": "Pericardial Effusion with Tamponade",
        "needsReview": false
      },
      {
        "id": "pdf-pericardial-effusion-with-tamponade-p21-6",
        "src": "/visual-assets/pocus-atlas/pdf-pericardial-effusion-with-tamponade-p21-6.jpg",
        "title": "Pericardial Effusion with Tamponade",
        "type": "Diagnostic imaging visual",
        "topic": "Pericardial Effusion with Tamponade",
        "needsReview": false
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-29-hypertrophic-cardiomyopathy-ecg",
    "number": 29,
    "title": "Hypertrophic Cardiomyopathy ECG",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Hypertrophic cardiomyopathy is a high-yield cause of exertional syncope and sudden cardiac death in young patients."
    ],
    "presentation": [
      "Lvh",
      "Deep narrow Q waves, especially lateral/inferior leads",
      "ST-T abnormalities",
      "T wave inversions",
      "Left atrial enlargement",
      "Clinical Clues",
      "Exertional syncope"
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Exertional syncope is high-risk.",
      "HCM can cause sudden death.",
      "Family history matters.",
      "ECG may show LVH/deep Q waves.",
      "Avoid dismissing athlete syncope."
    ],
    "traps": [
      "❌ Calling exertional syncope vasovagal",
      "❌ No ECG in syncope",
      "❌ Ignoring family history",
      "❌ Discharging high-risk athlete"
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Hypertrophic Cardiomyopathy ECG: فكّر كطبيب طوارئ. ابدأ بما يقتل الآن، ابحث عن العلامات الحمراء، ثبّت المريض قبل التفاصيل، ثم اختر الفحص أو العلاج الذي يغيّر القرار بأسرع وأأمن طريقة.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-30-syncope-ecg-red-flags",
    "number": 30,
    "title": "Syncope ECG Red Flags",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Every syncope patient needs an ECG because dangerous causes are often electrical."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "ECG is mandatory in syncope.",
      "Exertional syncope is high-risk.",
      "Long QT can cause torsades.",
      "Brugada syncope is dangerous.",
      "Supine syncope suggests arrhythmia.",
      "Hyperkalemia can kill before lab confirmation.",
      "Hypocalcemia prolongs QT.",
      "Hypercalcemia shortens QT."
    ],
    "traps": [
      "❌ No ECG in syncope",
      "❌ Discharging abnormal ECG syncope",
      "❌ Calling exertional syncope vasovagal",
      "❌ Ignoring family history sudden death",
      "ECG Atlas Progress",
      "Chapters 31–40"
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Syncope ECG Red Flags: فكّر كطبيب طوارئ. ابدأ بما يقتل الآن، ابحث عن العلامات الحمراء، ثبّت المريض قبل التفاصيل، ثم اختر الفحص أو العلاج الذي يغيّر القرار بأسرع وأأمن طريقة.",
    "visualHints": [
      {
        "id": "pdf-causes-of-syncope-p63-4",
        "src": "/visual-assets/topics/pdf-causes-of-syncope-p63-4.jpg",
        "title": "Causes of Syncope",
        "type": "Clinical visual",
        "topic": "Causes of Syncope",
        "needsReview": true
      },
      {
        "id": "pdf-high-risk-factors-of-syncope-p64-4",
        "src": "/visual-assets/topics/pdf-high-risk-factors-of-syncope-p64-4.jpg",
        "title": "High-Risk Factors of Syncope",
        "type": "Diagnostic imaging visual",
        "topic": "High-Risk Factors of Syncope",
        "needsReview": true
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-36-drug-induced-qt-prolongation",
    "number": 36,
    "title": "Drug-Induced QT Prolongation",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Drug-induced QT prolongation increases risk for torsades de pointes, especially when combined with electrolyte abnormalities or bradycardia."
    ],
    "presentation": [
      "QTc markedly prolonged",
      "Syncope",
      "Hypokalemia",
      "Hypomagnesemia",
      "Bradycardia",
      "Multiple QT-prolonging meds",
      "Structural heart disease"
    ],
    "management": [
      "Stop offending drug",
      "Correct electrolytes",
      "Magnesium if torsades",
      "Monitor",
      "Avoid additional QT-prolonging meds"
    ],
    "pearls": [
      "QT prolongation predisposes to torsades.",
      "Low K and low Mg increase risk.",
      "Methadone is high-yield.",
      "Check ECG when stacking QT drugs.",
      "Torsades gets magnesium."
    ],
    "traps": [
      "❌ Giving more QT-prolonging meds to long QT patient",
      "❌ Ignoring electrolytes",
      "❌ Treating torsades with QT-prolonging antiarrhythmics",
      "❌ No ECG in overdose/syncope"
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Drug-Induced QT Prolongation: فكّر كطبيب طوارئ. ابدأ بما يقتل الآن، ابحث عن العلامات الحمراء، ثبّت المريض قبل التفاصيل، ثم اختر الفحص أو العلاج الذي يغيّر القرار بأسرع وأأمن طريقة.",
    "visualHints": [
      {
        "id": "pdf-fixed-drug-eruption-p403-2",
        "src": "/visual-assets/toxicology-antidotes/pdf-fixed-drug-eruption-p403-2.jpg",
        "title": "Fixed Drug Eruption",
        "type": "ECG strip / rhythm visual",
        "topic": "Fixed Drug Eruption",
        "needsReview": false
      },
      {
        "id": "pdf-pretest-probability-scoring-for-heparin-induced-thrombocytopenia-the-4-p550-2",
        "src": "/visual-assets/topics/pdf-pretest-probability-scoring-for-heparin-induced-thrombocytopenia-the-4-p550-2.jpg",
        "title": "Pretest Probability Scoring for Heparin-Induced Thrombocytopenia (The 4T Score)",
        "type": "Algorithm / table / high-yield summary",
        "topic": "Pretest Probability Scoring for Heparin-Induced Thrombocytopenia (The 4T Score)",
        "needsReview": true
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-37-acs-serial-ecg-strategy",
    "number": 37,
    "title": "Acs Serial ECG Strategy",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "A single ECG is a snapshot.",
      "Coronary occlusion is a movie.",
      "Serial ECGs can reveal dynamic ischemia missed on the first tracing."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Initial ECG can be nondiagnostic.",
      "Dynamic changes are high-risk.",
      "Serial ECGs help identify OMI.",
      "Pain recurrence needs repeat ECG.",
      "Compare old ECG when possible."
    ],
    "traps": [
      "❌ One ECG only in ongoing chest pain",
      "❌ Waiting only for troponin",
      "❌ Ignoring dynamic T wave changes",
      "❌ No repeat ECG after symptom change"
    ],
    "algorithm": [
      "Chest pain",
      "Initial ECG",
      "Diagnostic?",
      "If no but concern persists → repeat ECGs",
      "Dynamic changes?",
      "ACS/OMI pathway"
    ],
    "arabic": "الفكرة ببساطة في Acs Serial ECG Strategy: فكّر كطبيب طوارئ. ابدأ بما يقتل الآن، ابحث عن العلامات الحمراء، ثبّت المريض قبل التفاصيل، ثم اختر الفحص أو العلاج الذي يغيّر القرار بأسرع وأأمن طريقة.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-38-ecg-in-cardiac-arrest",
    "number": 38,
    "title": "ECG In Cardiac Arrest",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "During arrest, ECG interpretation is rhythm-directed and must not interrupt CPR."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Defibrillation + CPR.",
      "Non-Shockable Rhythms",
      "Pea",
      "Asystole",
      "CPR + epinephrine + reversible causes.",
      "Electrical activity without pulse.",
      "Think Hs & Ts.",
      "Confirm"
    ],
    "pearls": [
      "VF/pVT are shockable.",
      "PEA/asystole are not shockable.",
      "Rhythm checks must be brief.",
      "PEA requires cause search.",
      "Hyperkalemia can cause arrest rhythms."
    ],
    "traps": [
      "❌ Shocking asystole",
      "❌ Long rhythm checks",
      "❌ Ignoring reversible causes",
      "❌ Treating monitor instead of patient"
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في ECG In Cardiac Arrest: فكّر كطبيب طوارئ. ابدأ بما يقتل الآن، ابحث عن العلامات الحمراء، ثبّت المريض قبل التفاصيل، ثم اختر الفحص أو العلاج الذي يغيّر القرار بأسرع وأأمن طريقة.",
    "visualHints": [
      {
        "id": "pdf-cardiac-biomarkers-p47-4",
        "src": "/visual-assets/topics/pdf-cardiac-biomarkers-p47-4.jpg",
        "title": "Cardiac Biomarkers",
        "type": "Diagnostic imaging visual",
        "topic": "Cardiac Biomarkers",
        "needsReview": true
      },
      {
        "id": "pdf-cardiac-murmurs-p65-4",
        "src": "/visual-assets/topics/pdf-cardiac-murmurs-p65-4.jpg",
        "title": "Cardiac Murmurs",
        "type": "Algorithm / table / high-yield summary",
        "topic": "Cardiac Murmurs",
        "needsReview": true
      }
    ],
    "needsDoseVerification": true
  },
  {
    "id": "master-39-ecg-in-post-rosc-care",
    "number": 39,
    "title": "ECG In Post-Rosc Care",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "After ROSC, ECG helps identify the cause of arrest and guides urgent reperfusion decisions."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Obtain ECG after ROSC.",
      "STEMI post-ROSC needs cath pathway.",
      "Hyperkalemia may be visible.",
      "QT prolongation may explain arrest.",
      "ECG interpretation needs clinical context."
    ],
    "traps": [
      "❌ No post-ROSC ECG",
      "❌ Ignoring STEMI after arrest",
      "❌ Overcalling nonspecific post-arrest changes",
      "❌ Forgetting electrolytes/tox causes"
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في ECG In Post-Rosc Care: لا تعالج الرقم فقط؛ عالج الفسيولوجيا. اسأل هل المشكلة سوائل، أو قلب، أو انسداد، أو توسع أوعية؟ ثم اختر السوائل أو الضواغط أو التهوية أو الإجراء المناسب مع إعادة تقييم مستمرة.",
    "visualHints": [
      {
        "id": "pdf-posterior-cruciate-ligament-injury-p115-2",
        "src": "/visual-assets/topics/pdf-posterior-cruciate-ligament-injury-p115-2.jpg",
        "title": "Posterior Cruciate Ligament Injury",
        "type": "Diagnostic imaging visual",
        "topic": "Posterior Cruciate Ligament Injury",
        "needsReview": true
      },
      {
        "id": "pdf-posterior-cerebral-artery-p292-2",
        "src": "/visual-assets/topics/pdf-posterior-cerebral-artery-p292-2.jpg",
        "title": "Posterior Cerebral Artery",
        "type": "Clinical visual",
        "topic": "Posterior Cerebral Artery",
        "needsReview": true
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-40-final-ecg-board-pearls",
    "number": 40,
    "title": "Final ECG Board Pearls",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Emergency ECG mastery is recognizing the patterns that kill."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Normal ECG does not exclude ACS.",
      "ECG must be interpreted with symptoms.",
      "Compare old ECG.",
      "Serial ECGs matter.",
      "Posterior MI causes ST depression V1–V3.",
      "RV MI: inferior STEMI + hypotension + clear lungs.",
      "Wellens = critical LAD.",
      "Do not stress test Wellens."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Final ECG Board Pearls: أسئلة الامتحان غالبًا تختبر القرار الآمن التالي، وليس المعلومة وحدها. ابحث عن عدم الاستقرار، التشخيص الذي لا يجوز تفويته، والفخ الذي يحاول السؤال أن يدفعك إليه.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-1-pocus-foundations",
    "number": 1,
    "title": "POCUS Foundations",
    "chapter": "POCUS & Visual Diagnosis",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "POCUS is not “mini-radiology.”",
      "POCUS is a bedside extension of the physical exam designed to answer focused, time-sensitive clinical questions.",
      "ACEP’s emergency ultrasound guidance describes emergency ultrasound as bedside ultrasound performed and interpreted by the treating clinician to answer focused questions in acute care."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "POCUS answers focused questions.",
      "Negative FAST does not exclude injury.",
      "Pericardial effusion does not always mean tamponade.",
      "No lung sliding does not always mean pneumothorax.",
      "Ultrasound findings must match clinical context."
    ],
    "traps": [
      "❌ Treating POCUS as definitive for every diagnosis",
      "❌ Calling a poor-quality scan negative",
      "❌ Ignoring clinical deterioration because ultrasound is “normal”",
      "❌ Not documenting the focused question",
      "❌ Not saving images/clips when required"
    ],
    "algorithm": [
      "Clinical problem",
      "Focused question",
      "Choose probe/view",
      "Acquire adequate image",
      "Interpret in clinical context",
      "Act only within limitations",
      "Reassess / confirm when needed"
    ],
    "arabic": "الفكرة ببساطة في POCUS Foundations: السونار في الطوارئ ليس تصويرًا كاملًا، بل جواب سريع لسؤال محدد يغيّر القرار. استخدمه لتأكيد الخطر أو توجيه العلاج، لكن لا تجعل صورة ضعيفة أو غير مكتملة تطمئنك كاذبًا.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-2-ultrasound-physics-essentials",
    "number": 2,
    "title": "Ultrasound Physics Essentials",
    "chapter": "POCUS & Visual Diagnosis",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "You do not need to be a physicist to use POCUS, but you must understand the basic tradeoffs:",
      "Frequency, depth, resolution, and artifact."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Fluid is usually black.",
      "Stones create shadowing.",
      "High-frequency probes give better detail.",
      "Low-frequency probes see deeper.",
      "Artifacts can be diagnostic."
    ],
    "traps": [
      "❌ Using linear probe for deep abdominal FAST in large patient",
      "❌ Misinterpreting bowel gas as pathology",
      "❌ Ignoring artifact patterns",
      "❌ Increasing depth so much that target becomes tiny",
      "❌ Forgetting to adjust gain"
    ],
    "algorithm": [
      "High frequency",
      "High resolution",
      "Low depth",
      "Low frequency",
      "High depth",
      "Lower resolution"
    ],
    "arabic": "الفكرة ببساطة في Ultrasound Physics Essentials: السونار في الطوارئ ليس تصويرًا كاملًا، بل جواب سريع لسؤال محدد يغيّر القرار. استخدمه لتأكيد الخطر أو توجيه العلاج، لكن لا تجعل صورة ضعيفة أو غير مكتملة تطمئنك كاذبًا.",
    "visualHints": [
      {
        "id": "pdf-pericardial-e-usion-p60-4",
        "src": "/visual-assets/pocus-atlas/pdf-pericardial-e-usion-p60-4.jpg",
        "title": "Pericardial Eﬀusion",
        "type": "Ultrasound / bedside imaging visual",
        "topic": "Pericardial Eﬀusion",
        "needsReview": false
      },
      {
        "id": "pdf-superficial-thrombophlebitis-p75-4",
        "src": "/visual-assets/pocus-atlas/pdf-superficial-thrombophlebitis-p75-4.jpg",
        "title": "Superficial Thrombophlebitis",
        "type": "Ultrasound / bedside imaging visual",
        "topic": "Superficial Thrombophlebitis",
        "needsReview": false
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-3-probes-knoblogy",
    "number": 3,
    "title": "Probes & Knoblogy",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Image quality is often not limited by disease.",
      "It is limited by wrong probe, wrong depth, wrong gain, or wrong orientation."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Wrong probe gives bad exam.",
      "Depth and gain fix many “hard scans.”",
      "Linear probe is best for superficial detail.",
      "Phased array is best for cardiac windows.",
      "Color Doppler does not replace anatomy."
    ],
    "traps": [
      "❌ Diagnosing absence of fluid with poor gain/depth",
      "❌ Confusing probe marker orientation",
      "❌ Using color Doppler as proof of no torsion",
      "❌ Not optimizing image before interpreting",
      "❌ Measuring without freezing correctly"
    ],
    "algorithm": [
      "Bad image",
      "Correct probe?",
      "Correct depth?",
      "Correct gain?",
      "Correct orientation?",
      "Reposition patient/probe",
      "Try alternate window"
    ],
    "arabic": "الفكرة ببساطة في Probes & Knoblogy: فكّر كطبيب طوارئ. ابدأ بما يقتل الآن، ابحث عن العلامات الحمراء، ثبّت المريض قبل التفاصيل، ثم اختر الفحص أو العلاج الذي يغيّر القرار بأسرع وأأمن طريقة.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-4-fast-exam",
    "number": 4,
    "title": "Fast Exam",
    "chapter": "POCUS & Visual Diagnosis",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "FAST is a rapid trauma ultrasound exam looking for free fluid, usually blood, in unstable trauma patients.",
      "FAST is most powerful when the patient is unstable.",
      "FAST is part of emergency ultrasound scope and trauma assessment in ACEP guidance."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "FAST is best for unstable trauma.",
      "RUQ is usually the easiest abdominal window.",
      "Negative FAST does not rule out injury.",
      "Positive FAST in unstable trauma is high-risk.",
      "FAST does not evaluate hollow viscus injury well."
    ],
    "traps": [
      "❌ Stable trauma + negative FAST = no CT needed",
      "❌ Poor-quality FAST documented as negative",
      "❌ Forgetting retroperitoneal bleeding",
      "❌ Missing LUQ fluid around spleen tip",
      "❌ Thinking FAST finds all abdominal injuries"
    ],
    "algorithm": [
      "Trauma patient",
      "Stable?",
      "Unstable → FAST",
      "Positive → hemorrhage pathway / trauma surgery",
      "Negative → search other causes + repeat if needed",
      "Stable → CT based on mechanism/exam"
    ],
    "arabic": "الفكرة ببساطة في Fast Exam: السونار في الطوارئ ليس تصويرًا كاملًا، بل جواب سريع لسؤال محدد يغيّر القرار. استخدمه لتأكيد الخطر أو توجيه العلاج، لكن لا تجعل صورة ضعيفة أو غير مكتملة تطمئنك كاذبًا.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-5-efast-exam",
    "number": 5,
    "title": "Efast Exam",
    "chapter": "POCUS & Visual Diagnosis",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "eFAST extends FAST by adding lung views to evaluate pneumothorax and hemothorax."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "eFAST adds pneumothorax evaluation.",
      "Lung point is highly specific.",
      "Absent sliding is not always pneumothorax.",
      "Hemothorax appears as pleural fluid.",
      "Tension pneumothorax remains clinical."
    ],
    "traps": [
      "❌ No lung sliding = always pneumothorax",
      "❌ Waiting for ultrasound in obvious tension pneumothorax",
      "❌ Ignoring clinical instability",
      "❌ Confusing absent lung movement from apnea with pneumothorax",
      "❌ Forgetting hemothorax view above diaphragm"
    ],
    "algorithm": [
      "Trauma eFAST",
      "FAST abdomen/cardiac",
      "Anterior lung sliding?",
      "Absent sliding? look for lung point",
      "Pleural fluid?",
      "Integrate with clinical status",
      "Treat life threats"
    ],
    "arabic": "الفكرة ببساطة في Efast Exam: السونار في الطوارئ ليس تصويرًا كاملًا، بل جواب سريع لسؤال محدد يغيّر القرار. استخدمه لتأكيد الخطر أو توجيه العلاج، لكن لا تجعل صورة ضعيفة أو غير مكتملة تطمئنك كاذبًا.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-6-cardiac-pocus-foundations",
    "number": 6,
    "title": "Cardiac POCUS Foundations",
    "chapter": "POCUS & Visual Diagnosis",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Cardiac POCUS is focused echocardiography for emergency questions.",
      "It is not a comprehensive echocardiogram.",
      "The American Society of Echocardiography emphasizes that cardiac POCUS involves focused acquisition and immediate interpretation to answer specific bedside questions."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Cardiac POCUS is focused, not comprehensive.",
      "RV larger than LV is abnormal in many ED contexts.",
      "Pericardial effusion must be interpreted clinically.",
      "Poor LV squeeze suggests cardiogenic shock.",
      "Small hyperdynamic LV suggests hypovolemia."
    ],
    "traps": [
      "❌ Calling focused POCUS a full echo",
      "❌ Overinterpreting mild findings",
      "❌ Ignoring clinical shock state",
      "❌ Missing tamponade physiology",
      "❌ Assuming no effusion means no cardiac disease"
    ],
    "algorithm": [
      "Shock/dyspnea/arrest",
      "Cardiac POCUS",
      "Activity? Effusion? LV? RV? IVC?",
      "Match shock type",
      "Treat physiology"
    ],
    "arabic": "الفكرة ببساطة في Cardiac POCUS Foundations: السونار في الطوارئ ليس تصويرًا كاملًا، بل جواب سريع لسؤال محدد يغيّر القرار. استخدمه لتأكيد الخطر أو توجيه العلاج، لكن لا تجعل صورة ضعيفة أو غير مكتملة تطمئنك كاذبًا.",
    "visualHints": [
      {
        "id": "pdf-cardiac-biomarkers-p47-4",
        "src": "/visual-assets/topics/pdf-cardiac-biomarkers-p47-4.jpg",
        "title": "Cardiac Biomarkers",
        "type": "Diagnostic imaging visual",
        "topic": "Cardiac Biomarkers",
        "needsReview": true
      },
      {
        "id": "pdf-cardiac-murmurs-p65-4",
        "src": "/visual-assets/topics/pdf-cardiac-murmurs-p65-4.jpg",
        "title": "Cardiac Murmurs",
        "type": "Algorithm / table / high-yield summary",
        "topic": "Cardiac Murmurs",
        "needsReview": true
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-7-pericardial-effusion-tamponade-pocus",
    "number": 7,
    "title": "Pericardial Effusion & Tamponade POCUS",
    "chapter": "POCUS & Visual Diagnosis",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Pericardial effusion is fluid around the heart.",
      "Tamponade is not just fluid.",
      "Tamponade is obstructive shock caused by pressure impairing cardiac filling."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Effusion does not equal tamponade.",
      "Tamponade is physiology.",
      "RV diastolic collapse is concerning.",
      "Plethoric IVC supports tamponade.",
      "Trauma effusion + shock is critical."
    ],
    "traps": [
      "❌ Calling small effusion tamponade in stable patient",
      "❌ Ignoring shock with effusion",
      "❌ Missing clot/hemopericardium in trauma",
      "❌ Delaying definitive drainage in unstable tamponade",
      "❌ Confusing pleural effusion with pericardial effusion"
    ],
    "algorithm": [
      "Shock/dyspnea + cardiac POCUS",
      "Pericardial effusion?",
      "Clinical shock?",
      "RA/RV collapse? plethoric IVC?",
      "Tamponade concern",
      "Drainage/surgical pathway"
    ],
    "arabic": "الفكرة ببساطة في Pericardial Effusion & Tamponade POCUS: السونار في الطوارئ ليس تصويرًا كاملًا، بل جواب سريع لسؤال محدد يغيّر القرار. استخدمه لتأكيد الخطر أو توجيه العلاج، لكن لا تجعل صورة ضعيفة أو غير مكتملة تطمئنك كاذبًا.",
    "visualHints": [
      {
        "id": "pdf-pericardial-effusion-with-tamponade-p21-4",
        "src": "/visual-assets/pocus-atlas/pdf-pericardial-effusion-with-tamponade-p21-4.jpg",
        "title": "Pericardial Effusion with Tamponade",
        "type": "Diagnostic imaging visual",
        "topic": "Pericardial Effusion with Tamponade",
        "needsReview": false
      },
      {
        "id": "pdf-pericardial-effusion-with-tamponade-p21-6",
        "src": "/visual-assets/pocus-atlas/pdf-pericardial-effusion-with-tamponade-p21-6.jpg",
        "title": "Pericardial Effusion with Tamponade",
        "type": "Diagnostic imaging visual",
        "topic": "Pericardial Effusion with Tamponade",
        "needsReview": false
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-8-lv-function-cardiogenic-shock",
    "number": 8,
    "title": "Lv Function & Cardiogenic Shock",
    "chapter": "Critical Care & Infusions",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Cardiac POCUS can rapidly estimate gross LV systolic function.",
      "The ED question is not exact ejection fraction.",
      "The question is"
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Poor LV squeeze supports cardiogenic shock.",
      "Hyperdynamic small LV suggests low volume/distributive physiology.",
      "POCUS guides but does not replace clinical assessment.",
      "B-lines with poor LV suggest pulmonary edema.",
      "Serial POCUS can monitor response."
    ],
    "traps": [
      "❌ Reporting exact EF from quick POCUS",
      "❌ Ignoring valvular/mechanical complications",
      "❌ Giving large fluids to poor LV/pulmonary edema",
      "❌ Assuming normal squeeze excludes ACS",
      "❌ Overcalling poor function from bad window"
    ],
    "algorithm": [
      "Shock",
      "Cardiac POCUS",
      "LV squeeze poor?",
      "Yes → cardiogenic pathway",
      "No/hyperdynamic → consider hypovolemic/distributive/obstructive",
      "Integrate lungs/IVC/clinical exam"
    ],
    "arabic": "الفكرة ببساطة في Lv Function & Cardiogenic Shock: لا تعالج الرقم فقط؛ عالج الفسيولوجيا. اسأل هل المشكلة سوائل، أو قلب، أو انسداد، أو توسع أوعية؟ ثم اختر السوائل أو الضواغط أو التهوية أو الإجراء المناسب مع إعادة تقييم مستمرة.",
    "visualHints": [
      {
        "id": "pdf-cardiogenic-shock-p56-4",
        "src": "/visual-assets/topics/pdf-cardiogenic-shock-p56-4.jpg",
        "title": "Cardiogenic Shock",
        "type": "Algorithm / table / high-yield summary",
        "topic": "Cardiogenic Shock",
        "needsReview": false
      },
      {
        "id": "pdf-endocarditis-p12-3",
        "src": "/visual-assets/pocus-atlas/pdf-endocarditis-p12-3.jpg",
        "title": "ENDOCARDITIS",
        "type": "Diagnostic imaging visual",
        "topic": "ENDOCARDITIS",
        "needsReview": false
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-9-rv-strain-pulmonary-embolism-pocus",
    "number": 9,
    "title": "Rv Strain & Pulmonary Embolism POCUS",
    "chapter": "POCUS & Visual Diagnosis",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "In suspected massive PE, cardiac POCUS can show RV strain.",
      "It does not rule out PE, but it can support high-risk PE diagnosis in unstable patients."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "RV dilation in shock suggests obstructive physiology.",
      "POCUS cannot rule out PE.",
      "RV strain supports high-risk PE when clinical picture fits.",
      "D-shaped LV suggests RV pressure overload.",
      "Compare with history of chronic pulmonary disease."
    ],
    "traps": [
      "❌ Normal cardiac POCUS excludes PE",
      "❌ RV dilation always acute PE",
      "❌ Ignoring chronic pulmonary hypertension",
      "❌ Delaying resuscitation in unstable PE",
      "❌ Using POCUS instead of CT in stable patient when CT indicated"
    ],
    "algorithm": [
      "Suspected PE",
      "Stable?",
      "No → cardiac POCUS",
      "RV strain?",
      "High-risk PE pathway if clinical fit",
      "Stable → standard PE diagnostic pathway"
    ],
    "arabic": "الفكرة ببساطة في Rv Strain & Pulmonary Embolism POCUS: السونار في الطوارئ ليس تصويرًا كاملًا، بل جواب سريع لسؤال محدد يغيّر القرار. استخدمه لتأكيد الخطر أو توجيه العلاج، لكن لا تجعل صورة ضعيفة أو غير مكتملة تطمئنك كاذبًا.",
    "visualHints": [
      {
        "id": "pdf-pulmonary-embolism-p226-2",
        "src": "/visual-assets/ecg-atlas/pdf-pulmonary-embolism-p226-2.jpg",
        "title": "Pulmonary Embolism",
        "type": "Diagnostic imaging visual",
        "topic": "Pulmonary Embolism",
        "needsReview": false
      },
      {
        "id": "pdf-back-strain-sprain-low-back-pain-p78-2",
        "src": "/visual-assets/toxicology-antidotes/pdf-back-strain-sprain-low-back-pain-p78-2.jpg",
        "title": "Back Strain/Sprain/Low Back Pain",
        "type": "Diagnostic imaging visual",
        "topic": "Back Strain/Sprain/Low Back Pain",
        "needsReview": true
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-10-ivc-ultrasound-volume-status",
    "number": 10,
    "title": "Ivc Ultrasound & Volume Status",
    "chapter": "POCUS & Visual Diagnosis",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "IVC ultrasound can provide clues about right-sided filling pressure, but it is imperfect and should never be used alone to decide fluid responsiveness."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "IVC alone does not equal volume status.",
      "Plethoric IVC in tamponade is supportive.",
      "Mechanical ventilation changes interpretation.",
      "Use IVC with heart/lung findings.",
      "Fluid responsiveness requires dynamic assessment."
    ],
    "traps": [
      "❌ Giving fluids solely because IVC is small",
      "❌ Withholding fluids solely because IVC is large",
      "❌ Ignoring RV failure/tamponade",
      "❌ Applying spontaneous breathing rules to ventilated patients",
      "❌ Treating IVC as exact CVP"
    ],
    "algorithm": [
      "Shock assessment",
      "Cardiac POCUS + lungs + IVC",
      "Small LV/IVC?",
      "Poor LV/B-lines?",
      "RV strain/plethoric IVC?",
      "Integrate physiology",
      "Trial therapy + reassess",
      "POCUS Atlas Progress",
      "Chapters 11–20",
      "Lung Ultrasound Foundations"
    ],
    "arabic": "الفكرة ببساطة في Ivc Ultrasound & Volume Status: السونار في الطوارئ ليس تصويرًا كاملًا، بل جواب سريع لسؤال محدد يغيّر القرار. استخدمه لتأكيد الخطر أو توجيه العلاج، لكن لا تجعل صورة ضعيفة أو غير مكتملة تطمئنك كاذبًا.",
    "visualHints": [
      {
        "id": "pdf-pericardial-e-usion-p60-4",
        "src": "/visual-assets/pocus-atlas/pdf-pericardial-e-usion-p60-4.jpg",
        "title": "Pericardial Eﬀusion",
        "type": "Ultrasound / bedside imaging visual",
        "topic": "Pericardial Eﬀusion",
        "needsReview": false
      },
      {
        "id": "pdf-superficial-thrombophlebitis-p75-4",
        "src": "/visual-assets/pocus-atlas/pdf-superficial-thrombophlebitis-p75-4.jpg",
        "title": "Superficial Thrombophlebitis",
        "type": "Ultrasound / bedside imaging visual",
        "topic": "Superficial Thrombophlebitis",
        "needsReview": false
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-11-lung-ultrasound-foundations",
    "number": 11,
    "title": "Lung Ultrasound Foundations",
    "chapter": "POCUS & Visual Diagnosis",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Lung ultrasound was once thought impossible because air reflects ultrasound.",
      "Ironically, lung ultrasound works because of the artifacts created by air and fluid."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "A-lines are normal artifacts.",
      "Lung sliding excludes pneumothorax at that point.",
      "Ultrasound often beats CXR for pneumothorax.",
      "Pleural line is key landmark.",
      "Artifacts are diagnostic."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Lung Ultrasound Foundations: السونار في الطوارئ ليس تصويرًا كاملًا، بل جواب سريع لسؤال محدد يغيّر القرار. استخدمه لتأكيد الخطر أو توجيه العلاج، لكن لا تجعل صورة ضعيفة أو غير مكتملة تطمئنك كاذبًا.",
    "visualHints": [
      {
        "id": "pdf-pericardial-e-usion-p60-4",
        "src": "/visual-assets/pocus-atlas/pdf-pericardial-e-usion-p60-4.jpg",
        "title": "Pericardial Eﬀusion",
        "type": "Ultrasound / bedside imaging visual",
        "topic": "Pericardial Eﬀusion",
        "needsReview": false
      },
      {
        "id": "pdf-superficial-thrombophlebitis-p75-4",
        "src": "/visual-assets/pocus-atlas/pdf-superficial-thrombophlebitis-p75-4.jpg",
        "title": "Superficial Thrombophlebitis",
        "type": "Ultrasound / bedside imaging visual",
        "topic": "Superficial Thrombophlebitis",
        "needsReview": false
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-12-pneumothorax-ultrasound",
    "number": 12,
    "title": "Pneumothorax Ultrasound",
    "chapter": "POCUS & Visual Diagnosis",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Ultrasound is highly sensitive for pneumothorax in many emergency settings."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Lung Point",
      "Pneumothorax until proven otherwise."
    ],
    "traps": [
      "❌ No sliding always means PTX",
      "Other causes",
      "Mainstem intubation",
      "Pleurodesis",
      "Severe fibrosis",
      "Apnea"
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Pneumothorax Ultrasound: السونار في الطوارئ ليس تصويرًا كاملًا، بل جواب سريع لسؤال محدد يغيّر القرار. استخدمه لتأكيد الخطر أو توجيه العلاج، لكن لا تجعل صورة ضعيفة أو غير مكتملة تطمئنك كاذبًا.",
    "visualHints": [
      {
        "id": "pdf-pericardial-e-usion-p60-4",
        "src": "/visual-assets/pocus-atlas/pdf-pericardial-e-usion-p60-4.jpg",
        "title": "Pericardial Eﬀusion",
        "type": "Ultrasound / bedside imaging visual",
        "topic": "Pericardial Eﬀusion",
        "needsReview": false
      },
      {
        "id": "pdf-superficial-thrombophlebitis-p75-4",
        "src": "/visual-assets/pocus-atlas/pdf-superficial-thrombophlebitis-p75-4.jpg",
        "title": "Superficial Thrombophlebitis",
        "type": "Ultrasound / bedside imaging visual",
        "topic": "Superficial Thrombophlebitis",
        "needsReview": false
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-13-pulmonary-edema",
    "number": 13,
    "title": "Pulmonary Edema",
    "chapter": "Respiratory Emergencies",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map",
      "Rosh Rapid Review PDF text/visual support"
    ],
    "core": [
      "Interstitial fluid creates B-lines.",
      "Many B-lines",
      "Think pulmonary edema."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "B-lines indicate increased lung water.",
      "Diffuse bilateral B-lines suggest edema.",
      "Cardiac POCUS improves interpretation.",
      "B-lines are not specific for CHF.",
      "Serial exams track improvement.",
      "Other Causes",
      "Ards",
      "Pulmonary fibrosis"
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Pulmonary Edema: في ضيق النفس اسأل أولًا هل المريض يفشل في الأكسجة أو التهوية. الأكسجين وحده لا يكفي دائمًا؛ قد تحتاج NIV أو intubation أو علاج السبب بسرعة.",
    "visualHints": [
      {
        "id": "pdf-noncardiogenic-pulmonary-edema-p203-2",
        "src": "/visual-assets/toxicology-antidotes/pdf-noncardiogenic-pulmonary-edema-p203-2.jpg",
        "title": "Noncardiogenic Pulmonary Edema",
        "type": "Diagnostic imaging visual",
        "topic": "Noncardiogenic Pulmonary Edema",
        "needsReview": true
      },
      {
        "id": "pdf-pulmonary-embolism-p226-2",
        "src": "/visual-assets/ecg-atlas/pdf-pulmonary-embolism-p226-2.jpg",
        "title": "Pulmonary Embolism",
        "type": "Diagnostic imaging visual",
        "topic": "Pulmonary Embolism",
        "needsReview": false
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-14-pleural-effusion",
    "number": 14,
    "title": "Pleural Effusion",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Pleural effusions are among the easiest POCUS diagnoses.",
      "Fluid is usually obvious.",
      "Ultrasound Appearance"
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Fluid appears black.",
      "Ultrasound beats chest x-ray.",
      "Spine sign is high yield.",
      "Large effusions compress lung.",
      "Helpful before thoracentesis."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Pleural Effusion: فكّر كطبيب طوارئ. ابدأ بما يقتل الآن، ابحث عن العلامات الحمراء، ثبّت المريض قبل التفاصيل، ثم اختر الفحص أو العلاج الذي يغيّر القرار بأسرع وأأمن طريقة.",
    "visualHints": [
      {
        "id": "pdf-pericardial-effusion-with-tamponade-p21-4",
        "src": "/visual-assets/pocus-atlas/pdf-pericardial-effusion-with-tamponade-p21-4.jpg",
        "title": "Pericardial Effusion with Tamponade",
        "type": "Diagnostic imaging visual",
        "topic": "Pericardial Effusion with Tamponade",
        "needsReview": false
      },
      {
        "id": "pdf-pericardial-effusion-with-tamponade-p21-6",
        "src": "/visual-assets/pocus-atlas/pdf-pericardial-effusion-with-tamponade-p21-6.jpg",
        "title": "Pericardial Effusion with Tamponade",
        "type": "Diagnostic imaging visual",
        "topic": "Pericardial Effusion with Tamponade",
        "needsReview": false
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-15-pneumonia-consolidation",
    "number": 15,
    "title": "Pneumonia & Consolidation",
    "chapter": "Respiratory Emergencies",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Consolidated lung begins to resemble liver.",
      "This is called",
      "Hepatization."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Hepatization suggests consolidation.",
      "Dynamic air bronchograms favor pneumonia.",
      "Focal B-lines support local disease.",
      "Ultrasound often outperforms CXR.",
      "Clinical correlation required."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Pneumonia & Consolidation: في ضيق النفس اسأل أولًا هل المريض يفشل في الأكسجة أو التهوية. الأكسجين وحده لا يكفي دائمًا؛ قد تحتاج NIV أو intubation أو علاج السبب بسرعة.",
    "visualHints": [
      {
        "id": "pdf-community-acquired-pneumonia-p218-2",
        "src": "/visual-assets/ecg-atlas/pdf-community-acquired-pneumonia-p218-2.jpg",
        "title": "Community-Acquired Pneumonia",
        "type": "Diagnostic imaging visual",
        "topic": "Community-Acquired Pneumonia",
        "needsReview": true
      },
      {
        "id": "pdf-pneumocystis-pneumonia-p223-2",
        "src": "/visual-assets/topics/pdf-pneumocystis-pneumonia-p223-2.jpg",
        "title": "Pneumocystis Pneumonia",
        "type": "Diagnostic imaging visual",
        "topic": "Pneumocystis Pneumonia",
        "needsReview": true
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-16-aorta-ultrasound",
    "number": 16,
    "title": "Aorta Ultrasound",
    "chapter": "POCUS & Visual Diagnosis",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "AAA is a lethal diagnosis that POCUS can rapidly identify."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Measure outer wall to outer wall.",
      "Entire aorta must be visualized.",
      "Normal proximal scan doesn’t exclude distal AAA.",
      "Rupture can occur before CT.",
      "Shock + AAA = surgical emergency."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Aorta Ultrasound: السونار في الطوارئ ليس تصويرًا كاملًا، بل جواب سريع لسؤال محدد يغيّر القرار. استخدمه لتأكيد الخطر أو توجيه العلاج، لكن لا تجعل صورة ضعيفة أو غير مكتملة تطمئنك كاذبًا.",
    "visualHints": [
      {
        "id": "pdf-pericardial-e-usion-p60-4",
        "src": "/visual-assets/pocus-atlas/pdf-pericardial-e-usion-p60-4.jpg",
        "title": "Pericardial Eﬀusion",
        "type": "Ultrasound / bedside imaging visual",
        "topic": "Pericardial Eﬀusion",
        "needsReview": false
      },
      {
        "id": "pdf-superficial-thrombophlebitis-p75-4",
        "src": "/visual-assets/pocus-atlas/pdf-superficial-thrombophlebitis-p75-4.jpg",
        "title": "Superficial Thrombophlebitis",
        "type": "Ultrasound / bedside imaging visual",
        "topic": "Superficial Thrombophlebitis",
        "needsReview": false
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-17-abdominal-aortic-aneurysm-aaa",
    "number": 17,
    "title": "Abdominal Aortic Aneurysm (Aaa)",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map",
      "Rosh Rapid Review PDF text/visual support"
    ],
    "core": [
      "The emergency question is often",
      "Not “Does AAA exist?”",
      "But"
    ],
    "presentation": [
      "AAA present.",
      "Retroperitoneal rupture may not be directly visualized.",
      "Important Limitation",
      "Negative ultrasound",
      "does NOT exclude rupture completely."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "AAA + hypotension is rupture until proven otherwise.",
      "Ultrasound is fast bedside tool.",
      "Surgical consultation early.",
      "Do not delay resuscitation.",
      "Retroperitoneal bleeding may be hidden."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Abdominal Aortic Aneurysm (Aaa): فكّر كطبيب طوارئ. ابدأ بما يقتل الآن، ابحث عن العلامات الحمراء، ثبّت المريض قبل التفاصيل، ثم اختر الفحص أو العلاج الذي يغيّر القرار بأسرع وأأمن طريقة.",
    "visualHints": [
      {
        "id": "pdf-aortic-valve-stenosis-p66-4",
        "src": "/visual-assets/topics/pdf-aortic-valve-stenosis-p66-4.jpg",
        "title": "Aortic Valve Stenosis",
        "type": "Algorithm / table / high-yield summary",
        "topic": "Aortic Valve Stenosis",
        "needsReview": true
      },
      {
        "id": "pdf-aortic-dissection-p73-4",
        "src": "/visual-assets/topics/pdf-aortic-dissection-p73-4.jpg",
        "title": "Aortic Dissection",
        "type": "Diagnostic imaging visual",
        "topic": "Aortic Dissection",
        "needsReview": true
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-18-biliary-ultrasound",
    "number": 18,
    "title": "Biliary Ultrasound",
    "chapter": "POCUS & Visual Diagnosis",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Gallstones are among the most common ED ultrasound diagnoses."
    ],
    "presentation": [
      "Gallstones",
      "Bright echogenic focus",
      "Posterior shadowing",
      "Mobility",
      "Stones move with patient position.",
      "Best Probe",
      "Curvilinear."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Stones cast shadows.",
      "Mobility supports stone diagnosis.",
      "Gallbladder neck important.",
      "Ultrasound first-line for biliary disease.",
      "Clinical symptoms matter."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Biliary Ultrasound: السونار في الطوارئ ليس تصويرًا كاملًا، بل جواب سريع لسؤال محدد يغيّر القرار. استخدمه لتأكيد الخطر أو توجيه العلاج، لكن لا تجعل صورة ضعيفة أو غير مكتملة تطمئنك كاذبًا.",
    "visualHints": [
      {
        "id": "pdf-pericardial-e-usion-p60-4",
        "src": "/visual-assets/pocus-atlas/pdf-pericardial-e-usion-p60-4.jpg",
        "title": "Pericardial Eﬀusion",
        "type": "Ultrasound / bedside imaging visual",
        "topic": "Pericardial Eﬀusion",
        "needsReview": false
      },
      {
        "id": "pdf-superficial-thrombophlebitis-p75-4",
        "src": "/visual-assets/pocus-atlas/pdf-superficial-thrombophlebitis-p75-4.jpg",
        "title": "Superficial Thrombophlebitis",
        "type": "Ultrasound / bedside imaging visual",
        "topic": "Superficial Thrombophlebitis",
        "needsReview": false
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-19-acute-cholecystitis",
    "number": 19,
    "title": "Acute Cholecystitis",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map",
      "Rosh Rapid Review PDF text/visual support"
    ],
    "core": [
      "Acute cholecystitis is inflammation of an obstructed gallbladder."
    ],
    "presentation": [
      "Gallstones",
      "Wall Thickening",
      "Pericholecystic Fluid",
      "Sonographic Murphy Sign",
      "Probe pressure over gallbladder",
      "Reproduces pain",
      "High Yield"
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Gallstones alone are common.",
      "Murphy sign increases confidence.",
      "Wall thickening supports inflammation.",
      "Pericholecystic fluid is concerning.",
      "Clinical context remains essential."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Acute Cholecystitis: فكّر كطبيب طوارئ. ابدأ بما يقتل الآن، ابحث عن العلامات الحمراء، ثبّت المريض قبل التفاصيل، ثم اختر الفحص أو العلاج الذي يغيّر القرار بأسرع وأأمن طريقة.",
    "visualHints": [
      {
        "id": "pdf-acute-cholecystitis-p142-2",
        "src": "/visual-assets/pocus-atlas/pdf-acute-cholecystitis-p142-2.jpg",
        "title": "Acute Cholecystitis",
        "type": "Diagnostic imaging visual",
        "topic": "Acute Cholecystitis",
        "needsReview": false
      },
      {
        "id": "pdf-acute-cholecystitis-p142-3",
        "src": "/visual-assets/pocus-atlas/pdf-acute-cholecystitis-p142-3.jpg",
        "title": "Acute Cholecystitis",
        "type": "Diagnostic imaging visual",
        "topic": "Acute Cholecystitis",
        "needsReview": false
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-20-renal-ultrasound-hydronephrosis",
    "number": 20,
    "title": "Renal Ultrasound & Hydronephrosis",
    "chapter": "POCUS & Visual Diagnosis",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "The main ED renal ultrasound question",
      "Is there obstruction?"
    ],
    "presentation": [
      "Kidney stone",
      "Mass",
      "Stricture",
      "Retention"
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Hydronephrosis suggests obstruction.",
      "Severity helps risk assessment.",
      "Obstructed infected system is dangerous.",
      "Bilateral hydronephrosis suggests major obstruction.",
      "Ultrasound helps avoid radiation.",
      "POCUS Atlas Progress",
      "Completed Topics",
      "Lung Foundations"
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Renal Ultrasound & Hydronephrosis: السونار في الطوارئ ليس تصويرًا كاملًا، بل جواب سريع لسؤال محدد يغيّر القرار. استخدمه لتأكيد الخطر أو توجيه العلاج، لكن لا تجعل صورة ضعيفة أو غير مكتملة تطمئنك كاذبًا.",
    "visualHints": [
      {
        "id": "pdf-pericardial-e-usion-p60-4",
        "src": "/visual-assets/pocus-atlas/pdf-pericardial-e-usion-p60-4.jpg",
        "title": "Pericardial Eﬀusion",
        "type": "Ultrasound / bedside imaging visual",
        "topic": "Pericardial Eﬀusion",
        "needsReview": false
      },
      {
        "id": "pdf-superficial-thrombophlebitis-p75-4",
        "src": "/visual-assets/pocus-atlas/pdf-superficial-thrombophlebitis-p75-4.jpg",
        "title": "Superficial Thrombophlebitis",
        "type": "Ultrasound / bedside imaging visual",
        "topic": "Superficial Thrombophlebitis",
        "needsReview": false
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-21-bladder-ultrasound",
    "number": 21,
    "title": "Bladder Ultrasound",
    "chapter": "POCUS & Visual Diagnosis",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Bladder ultrasound answers a simple ED question",
      "Is the bladder full or empty?"
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Full bladder improves pelvic FAST.",
      "Retention can cause AKI.",
      "Foley not draining may mean malposition or obstruction.",
      "Bladder volume helps disposition.",
      "Ultrasound avoids unnecessary catheterization sometimes."
    ],
    "traps": [
      "❌ Assuming no urine output means renal failure only",
      "❌ Missing obstructive retention",
      "❌ Forgetting Foley obstruction",
      "❌ Misidentifying pelvic cyst/fluid as bladder"
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Bladder Ultrasound: السونار في الطوارئ ليس تصويرًا كاملًا، بل جواب سريع لسؤال محدد يغيّر القرار. استخدمه لتأكيد الخطر أو توجيه العلاج، لكن لا تجعل صورة ضعيفة أو غير مكتملة تطمئنك كاذبًا.",
    "visualHints": [
      {
        "id": "pdf-pericardial-e-usion-p60-4",
        "src": "/visual-assets/pocus-atlas/pdf-pericardial-e-usion-p60-4.jpg",
        "title": "Pericardial Eﬀusion",
        "type": "Ultrasound / bedside imaging visual",
        "topic": "Pericardial Eﬀusion",
        "needsReview": false
      },
      {
        "id": "pdf-superficial-thrombophlebitis-p75-4",
        "src": "/visual-assets/pocus-atlas/pdf-superficial-thrombophlebitis-p75-4.jpg",
        "title": "Superficial Thrombophlebitis",
        "type": "Ultrasound / bedside imaging visual",
        "topic": "Superficial Thrombophlebitis",
        "needsReview": false
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-22-urinary-retention-pocus",
    "number": 22,
    "title": "Urinary Retention POCUS",
    "chapter": "POCUS & Visual Diagnosis",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Urinary retention is quickly confirmed by seeing a distended bladder."
    ],
    "presentation": [
      "Suprapubic pain",
      "Inability to void",
      "Overflow incontinence",
      "Restlessness",
      "Aki",
      "Enlarged bladder",
      "POCUS Findings",
      "Large anechoic bladder"
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Bladder POCUS rapidly diagnoses retention.",
      "Check kidneys if AKI or prolonged obstruction.",
      "Clot retention may show echogenic material.",
      "Cauda equina can present with retention.",
      "Post-obstructive diuresis can occur after decompression."
    ],
    "traps": [
      "❌ Calling AKI intrinsic before ruling out obstruction",
      "❌ Missing cauda equina red flags",
      "❌ Not considering clot retention",
      "❌ No reassessment after Foley"
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Urinary Retention POCUS: السونار في الطوارئ ليس تصويرًا كاملًا، بل جواب سريع لسؤال محدد يغيّر القرار. استخدمه لتأكيد الخطر أو توجيه العلاج، لكن لا تجعل صورة ضعيفة أو غير مكتملة تطمئنك كاذبًا.",
    "visualHints": [
      {
        "id": "pdf-cystitis-urinary-tract-infection-p363-2",
        "src": "/visual-assets/topics/pdf-cystitis-urinary-tract-infection-p363-2.jpg",
        "title": "Cystitis (Urinary Tract Infection)",
        "type": "Diagnostic imaging visual",
        "topic": "Cystitis (Urinary Tract Infection)",
        "needsReview": true
      },
      {
        "id": "pdf-types-of-urinary-incontinence-p382-2",
        "src": "/visual-assets/topics/pdf-types-of-urinary-incontinence-p382-2.jpg",
        "title": "Types of Urinary Incontinence",
        "type": "Algorithm / table / high-yield summary",
        "topic": "Types of Urinary Incontinence",
        "needsReview": true
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-23-dvt-ultrasound",
    "number": 23,
    "title": "Dvt Ultrasound",
    "chapter": "POCUS & Visual Diagnosis",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "ED DVT ultrasound usually asks",
      "Can the vein compress?",
      "If it cannot compress, thrombus is likely."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Noncompressible vein = DVT.",
      "Compression is more important than seeing clot.",
      "Proximal DVT is highest yield in ED.",
      "DVT ultrasound does not rule out PE.",
      "Compare symptomatic side when useful."
    ],
    "traps": [
      "❌ Using color Doppler alone to exclude DVT",
      "❌ Not compressing directly",
      "❌ Confusing artery and vein",
      "❌ Negative proximal scan but high-risk patient with no follow-up plan"
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Dvt Ultrasound: السونار في الطوارئ ليس تصويرًا كاملًا، بل جواب سريع لسؤال محدد يغيّر القرار. استخدمه لتأكيد الخطر أو توجيه العلاج، لكن لا تجعل صورة ضعيفة أو غير مكتملة تطمئنك كاذبًا.",
    "visualHints": [
      {
        "id": "pdf-pericardial-e-usion-p60-4",
        "src": "/visual-assets/pocus-atlas/pdf-pericardial-e-usion-p60-4.jpg",
        "title": "Pericardial Eﬀusion",
        "type": "Ultrasound / bedside imaging visual",
        "topic": "Pericardial Eﬀusion",
        "needsReview": false
      },
      {
        "id": "pdf-superficial-thrombophlebitis-p75-4",
        "src": "/visual-assets/pocus-atlas/pdf-superficial-thrombophlebitis-p75-4.jpg",
        "title": "Superficial Thrombophlebitis",
        "type": "Ultrasound / bedside imaging visual",
        "topic": "Superficial Thrombophlebitis",
        "needsReview": false
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-24-first-trimester-pregnancy-pocus",
    "number": 24,
    "title": "First Trimester Pregnancy POCUS",
    "chapter": "POCUS & Visual Diagnosis",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "The key ED POCUS question in early pregnancy is",
      "Is there a definite intrauterine pregnancy?"
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Pelvic pain",
      "Vaginal bleeding",
      "Syncope",
      "Positive pregnancy test",
      "Concern for ectopic",
      "Uncertain dates",
      "Definite IUP",
      "Requires more than a simple fluid collection."
    ],
    "pearls": [
      "Positive pregnancy + pain = ectopic until excluded.",
      "Definite IUP usually lowers ectopic risk greatly.",
      "Pseudogestational sac is a trap.",
      "Free fluid plus pain is concerning.",
      "Heterotopic pregnancy is rare but possible, especially fertility treatment."
    ],
    "traps": [
      "❌ Calling any uterine fluid an IUP",
      "❌ Ignoring adnexa/free fluid",
      "❌ Low hCG excludes ectopic",
      "❌ No OB follow-up for pregnancy of unknown location"
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في First Trimester Pregnancy POCUS: السونار في الطوارئ ليس تصويرًا كاملًا، بل جواب سريع لسؤال محدد يغيّر القرار. استخدمه لتأكيد الخطر أو توجيه العلاج، لكن لا تجعل صورة ضعيفة أو غير مكتملة تطمئنك كاذبًا.",
    "visualHints": [
      {
        "id": "pdf-structures-of-1st-trimester-pregnancy-p465-2",
        "src": "/visual-assets/topics/pdf-structures-of-1st-trimester-pregnancy-p465-2.jpg",
        "title": "Structures of 1st Trimester Pregnancy",
        "type": "Diagnostic imaging visual",
        "topic": "Structures of 1st Trimester Pregnancy",
        "needsReview": true
      },
      {
        "id": "pdf-first-degree-heart-block-p16-4",
        "src": "/visual-assets/ecg-atlas/pdf-first-degree-heart-block-p16-4.jpg",
        "title": "First-Degree Heart Block",
        "type": "Diagnostic imaging visual",
        "topic": "First-Degree Heart Block",
        "needsReview": false
      }
    ],
    "needsDoseVerification": true
  },
  {
    "id": "master-25-intrauterine-pregnancy",
    "number": 25,
    "title": "Intrauterine Pregnancy",
    "chapter": "OB/GYN Emergencies",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map",
      "Rosh Rapid Review PDF text/visual support"
    ],
    "core": [
      "A definite IUP is one of the most important findings in early pregnancy POCUS."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Yolk sac confirms true gestational sac.",
      "Gestational sac alone can mislead.",
      "Early pregnancy dating matters.",
      "Definite IUP usually reduces ectopic concern.",
      "Fertility treatment raises heterotopic risk."
    ],
    "traps": [
      "❌ Diagnosing miscarriage too early",
      "❌ Calling pseudogestational sac IUP",
      "❌ Ignoring heterotopic risk",
      "❌ Not arranging follow-up for uncertain findings"
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Intrauterine Pregnancy: في الحمل والنزف النسائي لا تنسَ الأخطار القاتلة مثل ectopic pregnancy والنزف والاختلاجات. ثبّت المريضة أولًا، وافحص الحمل، واستدعِ النساء/الجراحة حسب الحالة.",
    "visualHints": [
      {
        "id": "pdf-intrauterine-pregnancy-p464-2",
        "src": "/visual-assets/pocus-atlas/pdf-intrauterine-pregnancy-p464-2.jpg",
        "title": "Intrauterine pregnancy",
        "type": "Ultrasound / bedside imaging visual",
        "topic": "Intrauterine pregnancy",
        "needsReview": false
      },
      {
        "id": "pdf-ectopic-pregnancy-p457-2",
        "src": "/visual-assets/pocus-atlas/pdf-ectopic-pregnancy-p457-2.jpg",
        "title": "Ectopic Pregnancy",
        "type": "Diagnostic imaging visual",
        "topic": "Ectopic Pregnancy",
        "needsReview": false
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-26-ectopic-pregnancy-pocus",
    "number": 26,
    "title": "Ectopic Pregnancy POCUS",
    "chapter": "POCUS & Visual Diagnosis",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "POCUS cannot always rule out ectopic pregnancy.",
      "It can identify high-risk findings that accelerate management."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "No IUP does not diagnose ectopic alone.",
      "Free fluid increases concern.",
      "RUQ fluid in pregnant patient is high-risk.",
      "Ectopic can rupture at low hCG.",
      "OB consultation early when high-risk."
    ],
    "traps": [
      "❌ POCUS “negative” excludes ectopic",
      "❌ Low hCG reassures falsely",
      "❌ Ignoring free fluid",
      "❌ Delaying OB in unstable patient"
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Ectopic Pregnancy POCUS: السونار في الطوارئ ليس تصويرًا كاملًا، بل جواب سريع لسؤال محدد يغيّر القرار. استخدمه لتأكيد الخطر أو توجيه العلاج، لكن لا تجعل صورة ضعيفة أو غير مكتملة تطمئنك كاذبًا.",
    "visualHints": [
      {
        "id": "pdf-ectopic-pregnancy-p457-2",
        "src": "/visual-assets/pocus-atlas/pdf-ectopic-pregnancy-p457-2.jpg",
        "title": "Ectopic Pregnancy",
        "type": "Diagnostic imaging visual",
        "topic": "Ectopic Pregnancy",
        "needsReview": false
      },
      {
        "id": "pdf-intrauterine-pregnancy-p464-2",
        "src": "/visual-assets/pocus-atlas/pdf-intrauterine-pregnancy-p464-2.jpg",
        "title": "Intrauterine pregnancy",
        "type": "Ultrasound / bedside imaging visual",
        "topic": "Intrauterine pregnancy",
        "needsReview": false
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-27-ocular-ultrasound-foundations",
    "number": 27,
    "title": "Ocular Ultrasound Foundations",
    "chapter": "POCUS & Visual Diagnosis",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Ocular ultrasound is useful for posterior eye pathology when direct visualization is limited.",
      "Use extreme caution when globe rupture is suspected."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Retinal detachment",
      "Vitreous hemorrhage",
      "Lens dislocation",
      "Foreign body",
      "Increased ICP estimation via optic nerve sheath diameter",
      "Contraindication / Major Caution",
      "Suspected globe rupture.",
      "Avoid pressure."
    ],
    "pearls": [
      "Use linear probe.",
      "Use lots of gel and minimal pressure.",
      "Avoid pressure if globe rupture possible.",
      "Eye POCUS helps when fundus exam limited.",
      "Visual acuity remains essential."
    ],
    "traps": [
      "❌ Pressing on suspected ruptured globe",
      "❌ Skipping visual acuity",
      "❌ Overcalling artifacts",
      "❌ Not consulting ophthalmology for vision-threatening findings"
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Ocular Ultrasound Foundations: السونار في الطوارئ ليس تصويرًا كاملًا، بل جواب سريع لسؤال محدد يغيّر القرار. استخدمه لتأكيد الخطر أو توجيه العلاج، لكن لا تجعل صورة ضعيفة أو غير مكتملة تطمئنك كاذبًا.",
    "visualHints": [
      {
        "id": "pdf-pericardial-e-usion-p60-4",
        "src": "/visual-assets/pocus-atlas/pdf-pericardial-e-usion-p60-4.jpg",
        "title": "Pericardial Eﬀusion",
        "type": "Ultrasound / bedside imaging visual",
        "topic": "Pericardial Eﬀusion",
        "needsReview": false
      },
      {
        "id": "pdf-superficial-thrombophlebitis-p75-4",
        "src": "/visual-assets/pocus-atlas/pdf-superficial-thrombophlebitis-p75-4.jpg",
        "title": "Superficial Thrombophlebitis",
        "type": "Ultrasound / bedside imaging visual",
        "topic": "Superficial Thrombophlebitis",
        "needsReview": false
      }
    ],
    "needsDoseVerification": true
  },
  {
    "id": "master-28-retinal-detachment-pocus",
    "number": 28,
    "title": "Retinal Detachment POCUS",
    "chapter": "POCUS & Visual Diagnosis",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Retinal detachment is a vision-threatening diagnosis.",
      "POCUS may show a tethered membrane attached to the optic disc."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Curtain vision loss suggests retinal detachment.",
      "Retinal detachment is tethered to optic disc.",
      "Needs urgent ophthalmology.",
      "POCUS helps if fundus view poor.",
      "Macula-on detachment is time-sensitive."
    ],
    "traps": [
      "❌ Calling all floaters benign",
      "❌ Confusing vitreous detachment with retinal detachment",
      "❌ Delayed ophthalmology",
      "❌ No visual acuity assessment"
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Retinal Detachment POCUS: السونار في الطوارئ ليس تصويرًا كاملًا، بل جواب سريع لسؤال محدد يغيّر القرار. استخدمه لتأكيد الخطر أو توجيه العلاج، لكن لا تجعل صورة ضعيفة أو غير مكتملة تطمئنك كاذبًا.",
    "visualHints": [
      {
        "id": "pdf-retinal-detachment-p344-2",
        "src": "/visual-assets/topics/pdf-retinal-detachment-p344-2.jpg",
        "title": "Retinal Detachment",
        "type": "Algorithm / table / high-yield summary",
        "topic": "Retinal Detachment",
        "needsReview": true
      },
      {
        "id": "pdf-retinal-vein-occlusion-p345-2",
        "src": "/visual-assets/topics/pdf-retinal-vein-occlusion-p345-2.jpg",
        "title": "Retinal Vein Occlusion",
        "type": "Algorithm / table / high-yield summary",
        "topic": "Retinal Vein Occlusion",
        "needsReview": true
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-29-vitreous-hemorrhage-posterior-vitreous-detachment",
    "number": 29,
    "title": "Vitreous Hemorrhage & Posterior Vitreous Detachment",
    "chapter": "Environmental, Allergy & EENT",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Not every echogenic membrane in the eye is retinal detachment.",
      "Vitreous hemorrhage and posterior vitreous detachment can mimic it."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Vitreous hemorrhage appears as mobile echoes.",
      "Retinal detachment is tethered.",
      "Diabetes increases vitreous hemorrhage risk.",
      "PVD can cause flashes/floaters.",
      "Ophthalmology follow-up is important because retinal tear risk exists."
    ],
    "traps": [
      "❌ Confusing PVD with retinal detachment",
      "❌ Ignoring diabetic vitreous hemorrhage",
      "❌ No ophthalmology plan",
      "❌ Forgetting trauma/globe rupture concern"
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Vitreous Hemorrhage & Posterior Vitreous Detachment: فكّر كطبيب طوارئ. ابدأ بما يقتل الآن، ابحث عن العلامات الحمراء، ثبّت المريض قبل التفاصيل، ثم اختر الفحص أو العلاج الذي يغيّر القرار بأسرع وأأمن طريقة.",
    "visualHints": [
      {
        "id": "pdf-posterior-cruciate-ligament-injury-p115-2",
        "src": "/visual-assets/topics/pdf-posterior-cruciate-ligament-injury-p115-2.jpg",
        "title": "Posterior Cruciate Ligament Injury",
        "type": "Diagnostic imaging visual",
        "topic": "Posterior Cruciate Ligament Injury",
        "needsReview": true
      },
      {
        "id": "pdf-cerebral-hemorrhages-p249-2",
        "src": "/visual-assets/topics/pdf-cerebral-hemorrhages-p249-2.jpg",
        "title": "Cerebral Hemorrhages",
        "type": "Clinical visual",
        "topic": "Cerebral Hemorrhages",
        "needsReview": true
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-30-optic-nerve-sheath-diameter-icp",
    "number": 30,
    "title": "Optic Nerve Sheath Diameter & Icp",
    "chapter": "Environmental, Allergy & EENT",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Optic nerve sheath diameter can be used as an adjunctive POCUS sign of elevated intracranial pressure, but it is not definitive."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "ONSD is adjunct only.",
      "Measure 3 mm behind globe.",
      "Use minimal pressure.",
      "Elevated ICP remains clinical/imaging diagnosis.",
      "Do not delay treatment of herniation for ONSD."
    ],
    "traps": [
      "❌ Normal ONSD excludes elevated ICP",
      "❌ Delaying hyperosmolar therapy in herniation",
      "❌ Pressing on injured eye",
      "❌ Treating ONSD as exact ICP monitor",
      "POCUS Atlas Progress",
      "Chapters 31–40"
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Optic Nerve Sheath Diameter & Icp: فكّر كطبيب طوارئ. ابدأ بما يقتل الآن، ابحث عن العلامات الحمراء، ثبّت المريض قبل التفاصيل، ثم اختر الفحص أو العلاج الذي يغيّر القرار بأسرع وأأمن طريقة.",
    "visualHints": [
      {
        "id": "pdf-optic-neuritis-p336-2",
        "src": "/visual-assets/toxicology-antidotes/pdf-optic-neuritis-p336-2.jpg",
        "title": "Optic Neuritis",
        "type": "Diagnostic imaging visual",
        "topic": "Optic Neuritis",
        "needsReview": true
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-31-soft-tissue-ultrasound",
    "number": 31,
    "title": "Soft Tissue Ultrasound",
    "chapter": "POCUS & Visual Diagnosis",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Soft tissue ultrasound helps answer one of the most common ED questions:",
      "Is this cellulitis or an abscess?"
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Linear probe is preferred.",
      "Ultrasound changes management frequently.",
      "Deep abscesses may not be obvious clinically.",
      "Ultrasound improves drainage success.",
      "Cellulitis and abscess require different treatment."
    ],
    "traps": [
      "❌ Draining cellulitis without abscess",
      "❌ Missing deep abscess",
      "❌ Wrong probe selection",
      "❌ Ignoring surrounding vascular structures"
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Soft Tissue Ultrasound: السونار في الطوارئ ليس تصويرًا كاملًا، بل جواب سريع لسؤال محدد يغيّر القرار. استخدمه لتأكيد الخطر أو توجيه العلاج، لكن لا تجعل صورة ضعيفة أو غير مكتملة تطمئنك كاذبًا.",
    "visualHints": [
      {
        "id": "pdf-pericardial-e-usion-p60-4",
        "src": "/visual-assets/pocus-atlas/pdf-pericardial-e-usion-p60-4.jpg",
        "title": "Pericardial Eﬀusion",
        "type": "Ultrasound / bedside imaging visual",
        "topic": "Pericardial Eﬀusion",
        "needsReview": false
      },
      {
        "id": "pdf-superficial-thrombophlebitis-p75-4",
        "src": "/visual-assets/pocus-atlas/pdf-superficial-thrombophlebitis-p75-4.jpg",
        "title": "Superficial Thrombophlebitis",
        "type": "Ultrasound / bedside imaging visual",
        "topic": "Superficial Thrombophlebitis",
        "needsReview": false
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-32-abscess-vs-cellulitis",
    "number": 32,
    "title": "Abscess Vs Cellulitis",
    "chapter": "Dermatology & Soft Tissue",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "This is one of the highest-yield ultrasound topics in Emergency Medicine.",
      "Cellulitis Appearance",
      "Cobblestoning"
    ],
    "presentation": [
      "Increased tissue thickness",
      "Hypoechoic edema",
      "No drainable collection",
      "Abscess Appearance",
      "Usually",
      "Hypoechoic collection",
      "Irregular borders"
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Cobblestoning = cellulitis.",
      "Fluid collection = abscess.",
      "Abscess often shows posterior enhancement.",
      "Dynamic compression helps.",
      "Clinical correlation remains necessary."
    ],
    "traps": [
      "❌ Calling cellulitis abscess",
      "❌ Missing loculated abscess",
      "❌ Draining edema",
      "❌ Assuming all fluctuance equals abscess"
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Abscess Vs Cellulitis: فكّر كطبيب طوارئ. ابدأ بما يقتل الآن، ابحث عن العلامات الحمراء، ثبّت المريض قبل التفاصيل، ثم اختر الفحص أو العلاج الذي يغيّر القرار بأسرع وأأمن طريقة.",
    "visualHints": [
      {
        "id": "pdf-perianal-abscess-p153-2",
        "src": "/visual-assets/topics/pdf-perianal-abscess-p153-2.jpg",
        "title": "Perianal Abscess",
        "type": "Diagnostic imaging visual",
        "topic": "Perianal Abscess",
        "needsReview": true
      },
      {
        "id": "pdf-dental-abscess-p324-2",
        "src": "/visual-assets/topics/pdf-dental-abscess-p324-2.jpg",
        "title": "Dental Abscess",
        "type": "Diagnostic imaging visual",
        "topic": "Dental Abscess",
        "needsReview": true
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-33-foreign-body-ultrasound",
    "number": 33,
    "title": "Foreign Body Ultrasound",
    "chapter": "POCUS & Visual Diagnosis",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Ultrasound is extremely useful for radiolucent foreign bodies."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Wood often missed on X-ray.",
      "Linear probe preferred.",
      "Ultrasound helps localization.",
      "Foreign bodies may cause recurrent infection.",
      "Scan in two planes."
    ],
    "traps": [
      "❌ One-plane scanning",
      "❌ Missing surrounding abscess",
      "❌ Assuming negative X-ray excludes foreign body",
      "❌ Removing without localization"
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Foreign Body Ultrasound: السونار في الطوارئ ليس تصويرًا كاملًا، بل جواب سريع لسؤال محدد يغيّر القرار. استخدمه لتأكيد الخطر أو توجيه العلاج، لكن لا تجعل صورة ضعيفة أو غير مكتملة تطمئنك كاذبًا.",
    "visualHints": [
      {
        "id": "pdf-foreign-body-aspiration-p209-2",
        "src": "/visual-assets/topics/pdf-foreign-body-aspiration-p209-2.jpg",
        "title": "Foreign Body Aspiration",
        "type": "Diagnostic imaging visual",
        "topic": "Foreign Body Aspiration",
        "needsReview": false
      },
      {
        "id": "pdf-foreign-body-aspiration-p209-3",
        "src": "/visual-assets/topics/pdf-foreign-body-aspiration-p209-3.jpg",
        "title": "Foreign Body Aspiration",
        "type": "Diagnostic imaging visual",
        "topic": "Foreign Body Aspiration",
        "needsReview": false
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-34-ultrasound-guided-procedures",
    "number": 34,
    "title": "Ultrasound-Guided Procedures",
    "chapter": "POCUS & Visual Diagnosis",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "POCUS improves safety and success of many emergency procedures.",
      "Major Benefits",
      "Fewer complications"
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Visualize needle tip.",
      "Tip matters more than shaft.",
      "Dynamic guidance improves safety.",
      "Use sterile technique.",
      "Know surrounding anatomy."
    ],
    "traps": [
      "❌ Following shaft instead of tip",
      "❌ Losing needle visualization",
      "❌ Advancing blindly",
      "❌ Ignoring nearby vessels"
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Ultrasound-Guided Procedures: السونار في الطوارئ ليس تصويرًا كاملًا، بل جواب سريع لسؤال محدد يغيّر القرار. استخدمه لتأكيد الخطر أو توجيه العلاج، لكن لا تجعل صورة ضعيفة أو غير مكتملة تطمئنك كاذبًا.",
    "visualHints": [
      {
        "id": "pdf-pericardial-e-usion-p60-4",
        "src": "/visual-assets/pocus-atlas/pdf-pericardial-e-usion-p60-4.jpg",
        "title": "Pericardial Eﬀusion",
        "type": "Ultrasound / bedside imaging visual",
        "topic": "Pericardial Eﬀusion",
        "needsReview": false
      },
      {
        "id": "pdf-superficial-thrombophlebitis-p75-4",
        "src": "/visual-assets/pocus-atlas/pdf-superficial-thrombophlebitis-p75-4.jpg",
        "title": "Superficial Thrombophlebitis",
        "type": "Ultrasound / bedside imaging visual",
        "topic": "Superficial Thrombophlebitis",
        "needsReview": false
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-35-ultrasound-guided-peripheral-iv",
    "number": 35,
    "title": "Ultrasound-Guided Peripheral Iv",
    "chapter": "POCUS & Visual Diagnosis",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Ultrasound-guided IV access has become a core emergency medicine skill."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Difficult access",
      "Obesity",
      "IV drug use",
      "Esrd",
      "Shock",
      "Chronic illness",
      "Preferred Veins",
      "Basilic"
    ],
    "pearls": [
      "Veins compress.",
      "Arteries pulsate.",
      "Deeper veins require longer catheters.",
      "Visualization improves success.",
      "Dynamic guidance is preferred."
    ],
    "traps": [
      "❌ Cannulating artery",
      "❌ Short catheter in deep vein",
      "❌ Losing needle tip",
      "❌ Not confirming placement"
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Ultrasound-Guided Peripheral Iv: السونار في الطوارئ ليس تصويرًا كاملًا، بل جواب سريع لسؤال محدد يغيّر القرار. استخدمه لتأكيد الخطر أو توجيه العلاج، لكن لا تجعل صورة ضعيفة أو غير مكتملة تطمئنك كاذبًا.",
    "visualHints": [
      {
        "id": "pdf-pericardial-e-usion-p60-4",
        "src": "/visual-assets/pocus-atlas/pdf-pericardial-e-usion-p60-4.jpg",
        "title": "Pericardial Eﬀusion",
        "type": "Ultrasound / bedside imaging visual",
        "topic": "Pericardial Eﬀusion",
        "needsReview": false
      },
      {
        "id": "pdf-peripheral-vascular-disease-p62-4",
        "src": "/visual-assets/topics/pdf-peripheral-vascular-disease-p62-4.jpg",
        "title": "Peripheral Vascular Disease",
        "type": "Clinical visual",
        "topic": "Peripheral Vascular Disease",
        "needsReview": true
      }
    ],
    "needsDoseVerification": true
  },
  {
    "id": "master-36-central-venous-access",
    "number": 36,
    "title": "Central Venous Access",
    "chapter": "Environmental, Allergy & EENT",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Ultrasound guidance significantly improves central line safety.",
      "Sites",
      "Internal Jugular"
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "IJ easiest ultrasound site.",
      "Vein compresses.",
      "Artery pulsates.",
      "Real-time guidance improves success.",
      "Ultrasound should be standard."
    ],
    "traps": [
      "❌ No vessel identification",
      "❌ Confusing artery and vein",
      "❌ Blind advancement",
      "❌ Poor sterile technique"
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Central Venous Access: فكّر كطبيب طوارئ. ابدأ بما يقتل الآن، ابحث عن العلامات الحمراء، ثبّت المريض قبل التفاصيل، ثم اختر الفحص أو العلاج الذي يغيّر القرار بأسرع وأأمن طريقة.",
    "visualHints": [
      {
        "id": "pdf-central-cord-syndrome-p288-2",
        "src": "/visual-assets/topics/pdf-central-cord-syndrome-p288-2.jpg",
        "title": "Central Cord Syndrome",
        "type": "Diagnostic imaging visual",
        "topic": "Central Cord Syndrome",
        "needsReview": true
      },
      {
        "id": "pdf-central-cord-syndrome-p288-3",
        "src": "/visual-assets/topics/pdf-central-cord-syndrome-p288-3.jpg",
        "title": "Central Cord Syndrome",
        "type": "Diagnostic imaging visual",
        "topic": "Central Cord Syndrome",
        "needsReview": true
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-37-thoracentesis-guidance",
    "number": 37,
    "title": "Thoracentesis Guidance",
    "chapter": "Environmental, Allergy & EENT",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Ultrasound dramatically improves thoracentesis safety.",
      "Ultrasound Goals",
      "Confirm fluid"
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Ultrasound before needle.",
      "Identify diaphragm.",
      "Mark largest pocket.",
      "Avoid consolidated lung.",
      "Reassess after procedure."
    ],
    "traps": [
      "❌ Blind thoracentesis",
      "❌ Misidentifying diaphragm",
      "❌ Small inaccessible pocket",
      "❌ Ignoring respiratory movement"
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Thoracentesis Guidance: فكّر كطبيب طوارئ. ابدأ بما يقتل الآن، ابحث عن العلامات الحمراء، ثبّت المريض قبل التفاصيل، ثم اختر الفحص أو العلاج الذي يغيّر القرار بأسرع وأأمن طريقة.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-38-paracentesis-guidance",
    "number": 38,
    "title": "Paracentesis Guidance",
    "chapter": "Environmental, Allergy & EENT",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Ultrasound identifies safe ascitic fluid pockets."
    ],
    "presentation": [
      "Free fluid appears",
      "Anechoic",
      "Black",
      "Goals",
      "Confirm ascites",
      "Identify safe pocket",
      "Avoid bowel"
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Ultrasound increases success.",
      "Large pockets are safer.",
      "Avoid bowel loops.",
      "SBP diagnosis requires fluid analysis.",
      "Re-scan before puncture."
    ],
    "traps": [
      "❌ Blind paracentesis",
      "❌ Puncturing bowel",
      "❌ Assuming all ascites is benign",
      "❌ Missing loculated fluid"
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Paracentesis Guidance: فكّر كطبيب طوارئ. ابدأ بما يقتل الآن، ابحث عن العلامات الحمراء، ثبّت المريض قبل التفاصيل، ثم اختر الفحص أو العلاج الذي يغيّر القرار بأسرع وأأمن طريقة.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-39-ultrasound-guided-nerve-blocks",
    "number": 39,
    "title": "Ultrasound-Guided Nerve Blocks",
    "chapter": "POCUS & Visual Diagnosis",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Regional anesthesia is one of the most powerful pain-control tools in Emergency Medicine."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Visualize nerve.",
      "Visualize needle tip.",
      "Watch anesthetic spread.",
      "Aspirate before injection.",
      "Know LAST toxicity."
    ],
    "traps": [
      "❌ Injecting intravascularly",
      "❌ Poor anatomy recognition",
      "❌ Losing needle tip",
      "❌ Forgetting local anesthetic toxicity"
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Ultrasound-Guided Nerve Blocks: السونار في الطوارئ ليس تصويرًا كاملًا، بل جواب سريع لسؤال محدد يغيّر القرار. استخدمه لتأكيد الخطر أو توجيه العلاج، لكن لا تجعل صورة ضعيفة أو غير مكتملة تطمئنك كاذبًا.",
    "visualHints": [
      {
        "id": "pdf-pericardial-e-usion-p60-4",
        "src": "/visual-assets/pocus-atlas/pdf-pericardial-e-usion-p60-4.jpg",
        "title": "Pericardial Eﬀusion",
        "type": "Ultrasound / bedside imaging visual",
        "topic": "Pericardial Eﬀusion",
        "needsReview": false
      },
      {
        "id": "pdf-superficial-thrombophlebitis-p75-4",
        "src": "/visual-assets/pocus-atlas/pdf-superficial-thrombophlebitis-p75-4.jpg",
        "title": "Superficial Thrombophlebitis",
        "type": "Ultrasound / bedside imaging visual",
        "topic": "Superficial Thrombophlebitis",
        "needsReview": false
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-40-final-pocus-board-pearls",
    "number": 40,
    "title": "Final POCUS Board Pearls",
    "chapter": "POCUS & Visual Diagnosis",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Final Pocus Board Pearls",
      "Top 100 High-Yield Pearls (Condensed)",
      "Trauma",
      "FAST best in unstable trauma.",
      "Negative FAST ≠ no injury."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Volume III — EM Drug Handbook Chapters 1-100 and Critical Care Infusions 141-160",
      "Next Major Project",
      "Em Drug Handbook",
      "سيكون الجزء الثالث من موسوعة الطوارئ الخاصة بك، ويشمل",
      "RSI Drugs",
      "Vasopressors",
      "Sedatives",
      "Analgesics"
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Final POCUS Board Pearls: السونار في الطوارئ ليس تصويرًا كاملًا، بل جواب سريع لسؤال محدد يغيّر القرار. استخدمه لتأكيد الخطر أو توجيه العلاج، لكن لا تجعل صورة ضعيفة أو غير مكتملة تطمئنك كاذبًا.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-1-introduction-to-emergency-drugs",
    "number": 1,
    "title": "Introduction To Emergency Drugs",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Emergency Medicine drugs are different from ward medications.",
      "In the ED",
      "Minutes matter."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Pitfalls",
      "High-Yield Categories",
      "RSI Drugs",
      "Vasopressors",
      "Sedatives",
      "Analgesics",
      "ACLS Drugs",
      "Anticoagulants"
    ],
    "pearls": [
      "Most board questions are not about memorizing doses.",
      "They ask",
      "“When should this drug NOT be given?”"
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Introduction To Emergency Drugs: فكّر كطبيب طوارئ. ابدأ بما يقتل الآن، ابحث عن العلامات الحمراء، ثبّت المريض قبل التفاصيل، ثم اختر الفحص أو العلاج الذي يغيّر القرار بأسرع وأأمن طريقة.",
    "visualHints": [
      {
        "id": "pdf-hypertensive-urgency-and-emergency-p54-4",
        "src": "/visual-assets/topics/pdf-hypertensive-urgency-and-emergency-p54-4.jpg",
        "title": "Hypertensive Urgency and Emergency",
        "type": "Algorithm / table / high-yield summary",
        "topic": "Hypertensive Urgency and Emergency",
        "needsReview": true
      }
    ],
    "needsDoseVerification": true
  },
  {
    "id": "master-2-etomidate",
    "number": 2,
    "title": "Etomidate",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Etomidate",
      "Drug Class",
      "Induction Agent"
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Rsi",
      "0.3 mg/kg IV",
      "Onset",
      "30–60 sec",
      "Duration",
      "3–5 min",
      "Advantages",
      "Stable BP"
    ],
    "pearls": [
      "Etomidate is hemodynamically stable.",
      "No analgesia.",
      "Common RSI drug.",
      "Short duration.",
      "Excellent for unstable patients."
    ],
    "traps": [
      "❌ Assuming etomidate treats pain."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Etomidate: لا تحفظ الدواء كاسم فقط. افهم متى يفيد، متى يضر، ما الجرعة والطريق، وما الذي يجب مراقبته بعد إعطائه. في الطوارئ، خطأ الجرعة أو اختيار الدواء قد يغيّر مصير المريض.",
    "visualHints": [],
    "needsDoseVerification": true
  },
  {
    "id": "master-3-ketamine",
    "number": 3,
    "title": "Ketamine",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Ketamine",
      "Drug Class",
      "Dissociative Anesthetic"
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Rsi",
      "1–2 mg/kg IV",
      "Dissociative Sedation",
      "Analgesia",
      "0.1–0.3 mg/kg IV",
      "Advantages",
      "Raises BP",
      "Bronchodilation"
    ],
    "pearls": [
      "Ketamine provides analgesia.",
      "Excellent in asthma.",
      "Good in hypotension.",
      "Useful for excited delirium.",
      "Very versatile."
    ],
    "traps": [
      "❌ Thinking ketamine causes significant hypotension routinely."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Ketamine: لا تحفظ الدواء كاسم فقط. افهم متى يفيد، متى يضر، ما الجرعة والطريق، وما الذي يجب مراقبته بعد إعطائه. في الطوارئ، خطأ الجرعة أو اختيار الدواء قد يغيّر مصير المريض.",
    "visualHints": [],
    "needsDoseVerification": true
  },
  {
    "id": "master-4-propofol",
    "number": 4,
    "title": "Propofol",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Propofol",
      "Drug Class",
      "Sedative-Hypnotic"
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Rsi",
      "1–2 mg/kg",
      "Advantages",
      "Rapid onset",
      "Rapid recovery",
      "Excellent sedation",
      "Major Problem",
      "Hypotension."
    ],
    "pearls": [
      "Propofol lowers BP.",
      "No analgesia.",
      "Fast on/off.",
      "Excellent sedation.",
      "Common ICU infusion."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Propofol: لا تحفظ الدواء كاسم فقط. افهم متى يفيد، متى يضر، ما الجرعة والطريق، وما الذي يجب مراقبته بعد إعطائه. في الطوارئ، خطأ الجرعة أو اختيار الدواء قد يغيّر مصير المريض.",
    "visualHints": [],
    "needsDoseVerification": true
  },
  {
    "id": "master-5-midazolam",
    "number": 5,
    "title": "MIdazolam",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Midazolam",
      "Drug Class",
      "Benzodiazepine"
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Varies by indication.",
      "Uses",
      "Seizures",
      "Sedation",
      "Agitation",
      "Alcohol withdrawal",
      "Major Risks",
      "Respiratory depression"
    ],
    "pearls": [
      "First-line seizure medication.",
      "Respiratory depression possible.",
      "Synergistic with opioids.",
      "Causes amnesia.",
      "Useful in alcohol withdrawal."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في MIdazolam: فكّر كطبيب طوارئ. ابدأ بما يقتل الآن، ابحث عن العلامات الحمراء، ثبّت المريض قبل التفاصيل، ثم اختر الفحص أو العلاج الذي يغيّر القرار بأسرع وأأمن طريقة.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-6-fentanyl",
    "number": 6,
    "title": "Fentanyl",
    "chapter": "Environmental, Allergy & EENT",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Fentanyl",
      "Drug Class",
      "Opioid"
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "1–2 mcg/kg IV",
      "Advantages",
      "Rapid onset",
      "Short duration",
      "Hemodynamically stable",
      "Side Effects",
      "Respiratory depression",
      "Chest wall rigidity (large rapid doses)"
    ],
    "pearls": [
      "Excellent analgesic.",
      "Rapid onset.",
      "Respiratory depression possible.",
      "Often combined with sedatives.",
      "Preferred ED opioid."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Fentanyl: فكّر كطبيب طوارئ. ابدأ بما يقتل الآن، ابحث عن العلامات الحمراء، ثبّت المريض قبل التفاصيل، ثم اختر الفحص أو العلاج الذي يغيّر القرار بأسرع وأأمن طريقة.",
    "visualHints": [],
    "needsDoseVerification": true
  },
  {
    "id": "master-7-morphine",
    "number": 7,
    "title": "Morphine",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Morphine",
      "Drug Class",
      "Opioid",
      "Effects",
      "Disadvantages"
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Morphine can lower BP.",
      "Histamine release occurs.",
      "Longer acting than fentanyl.",
      "Renal dysfunction affects metabolites.",
      "Use carefully in shock."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Morphine: فكّر كطبيب طوارئ. ابدأ بما يقتل الآن، ابحث عن العلامات الحمراء، ثبّت المريض قبل التفاصيل، ثم اختر الفحص أو العلاج الذي يغيّر القرار بأسرع وأأمن طريقة.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-8-naloxone",
    "number": 8,
    "title": "Naloxone",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Naloxone",
      "Drug Class",
      "Opioid Antagonist"
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Titrated to respiratory effort.",
      "Side Effects",
      "Acute withdrawal",
      "Agitation",
      "Vomiting"
    ],
    "pearls": [
      "Treat respiratory depression.",
      "Ventilation matters more than consciousness.",
      "Shorter duration than many opioids.",
      "Recurrent toxicity possible.",
      "Observation often required."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Naloxone: فكّر كطبيب طوارئ. ابدأ بما يقتل الآن، ابحث عن العلامات الحمراء، ثبّت المريض قبل التفاصيل، ثم اختر الفحص أو العلاج الذي يغيّر القرار بأسرع وأأمن طريقة.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-9-succinylcholine",
    "number": 9,
    "title": "Succinylcholine",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Succinylcholine",
      "Drug Class",
      "Depolarizing Paralytic",
      "Use",
      "RSI paralysis."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Hyperkalemia",
      "Neuromuscular disease",
      "Major burns (after initial period)",
      "Crush injury",
      "Prolonged immobilization",
      "Danger",
      "Can cause fatal hyperkalemia."
    ],
    "pearls": [
      "Fastest paralytic.",
      "Short duration.",
      "Hyperkalemia risk.",
      "Burns are important contraindication.",
      "Neuromuscular disease is dangerous."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Succinylcholine: لا تحفظ الدواء كاسم فقط. افهم متى يفيد، متى يضر، ما الجرعة والطريق، وما الذي يجب مراقبته بعد إعطائه. في الطوارئ، خطأ الجرعة أو اختيار الدواء قد يغيّر مصير المريض.",
    "visualHints": [],
    "needsDoseVerification": true
  },
  {
    "id": "master-10-rocuronium",
    "number": 10,
    "title": "Rocuronium",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Rocuronium",
      "Drug Class",
      "Nondepolarizing Paralytic",
      "Use",
      "Rsi."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "1.2 mg/kg RSI dose"
    ],
    "pearls": [
      "Common succinylcholine alternative.",
      "Long paralysis.",
      "No hyperkalemia.",
      "Excellent RSI drug.",
      "Sedation must continue afterward.",
      "EM Drug Handbook Progress",
      "Norepinephrine",
      "Epinephrine"
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Rocuronium: لا تحفظ الدواء كاسم فقط. افهم متى يفيد، متى يضر، ما الجرعة والطريق، وما الذي يجب مراقبته بعد إعطائه. في الطوارئ، خطأ الجرعة أو اختيار الدواء قد يغيّر مصير المريض.",
    "visualHints": [],
    "needsDoseVerification": true
  },
  {
    "id": "master-11-norepinephrine",
    "number": 11,
    "title": "Norepinephrine",
    "chapter": "Critical Care & Infusions",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map",
      "Rosh Rapid Review PDF text/visual support"
    ],
    "core": [
      "Norepinephrine is the first-line vasopressor for most septic shock patients.",
      "The 2026 Surviving Sepsis Campaign recommends norepinephrine as first-line over dopamine, epinephrine, or selepressin in adults with septic shock."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "First-line vasopressor in septic shock.",
      "Raises MAP mainly via vasoconstriction.",
      "Can be started peripherally temporarily under protocol.",
      "Needs close monitoring.",
      "Do not delay in persistent shock."
    ],
    "traps": [
      "❌ Giving endless fluids while delaying norepinephrine in septic shock."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Norepinephrine: لا تحفظ الدواء كاسم فقط. افهم متى يفيد، متى يضر، ما الجرعة والطريق، وما الذي يجب مراقبته بعد إعطائه. في الطوارئ، خطأ الجرعة أو اختيار الدواء قد يغيّر مصير المريض.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-12-epinephrine",
    "number": 12,
    "title": "Epinephrine",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map",
      "Rosh Rapid Review PDF text/visual support"
    ],
    "core": [
      "Epinephrine is a powerful α and β agonist.",
      "It is the key drug in",
      "Cardiac arrest"
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Epinephrine is first-line in anaphylaxis.",
      "Epinephrine is used in cardiac arrest.",
      "It can worsen tachyarrhythmias.",
      "It increases lactate.",
      "It is powerful but not subtle."
    ],
    "traps": [
      "❌ Treating anaphylaxis with antihistamines instead of IM epinephrine."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Epinephrine: لا تحفظ الدواء كاسم فقط. افهم متى يفيد، متى يضر، ما الجرعة والطريق، وما الذي يجب مراقبته بعد إعطائه. في الطوارئ، خطأ الجرعة أو اختيار الدواء قد يغيّر مصير المريض.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-13-vasopressin",
    "number": 13,
    "title": "Vasopressin",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Vasopressin is usually an adjunct vasopressor, not the first standalone drug in septic shock.",
      "The 2026 Surviving Sepsis Campaign suggests adding vasopressin in septic shock patients on escalating norepinephrine doses."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Usually added to norepinephrine.",
      "Not titrated like norepinephrine in many protocols.",
      "Catecholamine-sparing.",
      "Watch ischemia.",
      "Useful in vasodilatory shock."
    ],
    "traps": [
      "❌ Using vasopressin alone as the first septic shock vasopressor."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Vasopressin: فكّر كطبيب طوارئ. ابدأ بما يقتل الآن، ابحث عن العلامات الحمراء، ثبّت المريض قبل التفاصيل، ثم اختر الفحص أو العلاج الذي يغيّر القرار بأسرع وأأمن طريقة.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-14-dopamine",
    "number": 14,
    "title": "Dopamine",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map",
      "Rosh Rapid Review PDF text/visual support"
    ],
    "core": [
      "Dopamine is less favored than norepinephrine for septic shock because of arrhythmia risk."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Not first-line septic shock.",
      "More arrhythmogenic than norepinephrine.",
      "“Renal-dose dopamine” is not useful.",
      "May be considered in bradycardic shock.",
      "Avoid in tachyarrhythmias."
    ],
    "traps": [
      "❌ Choosing dopamine as first-line vasopressor for routine septic shock."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Dopamine: فكّر كطبيب طوارئ. ابدأ بما يقتل الآن، ابحث عن العلامات الحمراء، ثبّت المريض قبل التفاصيل، ثم اختر الفحص أو العلاج الذي يغيّر القرار بأسرع وأأمن طريقة.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-15-dobutamine",
    "number": 15,
    "title": "Dobutamine",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map",
      "Rosh Rapid Review PDF text/visual support"
    ],
    "core": [
      "Dobutamine improves contractility.",
      "It is not primarily a vasoconstrictor."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Dobutamine is an inotrope.",
      "It can lower BP.",
      "Useful for low-output states.",
      "Not first-line for vasodilatory septic shock.",
      "Combine with vasopressor if hypotensive."
    ],
    "traps": [
      "❌ Using dobutamine alone in profoundly hypotensive vasodilatory shock."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Dobutamine: فكّر كطبيب طوارئ. ابدأ بما يقتل الآن، ابحث عن العلامات الحمراء، ثبّت المريض قبل التفاصيل، ثم اختر الفحص أو العلاج الذي يغيّر القرار بأسرع وأأمن طريقة.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-16-phenylephrine",
    "number": 16,
    "title": "Phenylephrine",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Phenylephrine increases vascular tone but can reduce heart rate and cardiac output."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Pure vasoconstrictor.",
      "No β inotropy.",
      "Can cause bradycardia.",
      "Useful when tachycardia limits catecholamines.",
      "Not ideal in cardiogenic shock."
    ],
    "traps": [
      "❌ Treating low-output cardiogenic shock with pure afterload increase alone."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Phenylephrine: فكّر كطبيب طوارئ. ابدأ بما يقتل الآن، ابحث عن العلامات الحمراء، ثبّت المريض قبل التفاصيل، ثم اختر الفحص أو العلاج الذي يغيّر القرار بأسرع وأأمن طريقة.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-17-nitroglycerin",
    "number": 17,
    "title": "Nitroglycerin",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map",
      "Rosh Rapid Review PDF text/visual support"
    ],
    "core": [
      "Nitroglycerin reduces preload and, at higher doses, afterload.",
      "It is extremely useful in hypertensive pulmonary edema and ischemic chest pain, but dangerous in preload-dependent states."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Avoid nitrates in hypotensive RV infarct.",
      "Great for hypertensive pulmonary edema.",
      "PDE-5 inhibitors are a major contraindication.",
      "Does not replace reperfusion in STEMI.",
      "BP monitoring is essential."
    ],
    "traps": [
      "❌ Inferior STEMI + hypotension + clear lungs → giving nitroglycerin."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Nitroglycerin: فكّر كطبيب طوارئ. ابدأ بما يقتل الآن، ابحث عن العلامات الحمراء، ثبّت المريض قبل التفاصيل، ثم اختر الفحص أو العلاج الذي يغيّر القرار بأسرع وأأمن طريقة.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-18-nicardipine",
    "number": 18,
    "title": "Nicardipine",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Nicardipine is a titratable IV antihypertensive used in hypertensive emergencies, especially neurologic emergencies."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Titratable BP infusion.",
      "Useful in neuro emergencies.",
      "Do not rapidly normalize asymptomatic hypertension.",
      "In dissection, HR control matters first.",
      "Monitor BP closely."
    ],
    "traps": [
      "❌ Treating asymptomatic severe hypertension with aggressive IV nicardipine."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Nicardipine: فكّر كطبيب طوارئ. ابدأ بما يقتل الآن، ابحث عن العلامات الحمراء، ثبّت المريض قبل التفاصيل، ثم اختر الفحص أو العلاج الذي يغيّر القرار بأسرع وأأمن طريقة.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-19-amiodarone",
    "number": 19,
    "title": "Amiodarone",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map",
      "Rosh Rapid Review PDF text/visual support"
    ],
    "core": [
      "Amiodarone is used for certain ventricular and atrial arrhythmias, especially refractory VF/pVT in cardiac arrest and stable wide-complex tachycardia pathways.",
      "AHA adult cardiac arrest algorithm includes amiodarone 300 mg IV/IO first dose, then 150 mg second dose for shock-refractory VF/pVT."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Used in refractory VF/pVT.",
      "Useful in stable VT.",
      "Can prolong QT.",
      "Not ideal for torsades from long QT.",
      "Watch hypotension/bradycardia."
    ],
    "traps": [
      "❌ Treating torsades due to long QT with amiodarone."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Amiodarone: لا تحفظ الدواء كاسم فقط. افهم متى يفيد، متى يضر، ما الجرعة والطريق، وما الذي يجب مراقبته بعد إعطائه. في الطوارئ، خطأ الجرعة أو اختيار الدواء قد يغيّر مصير المريض.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-20-adenosine",
    "number": 20,
    "title": "Adenosine",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map",
      "Rosh Rapid Review PDF text/visual support"
    ],
    "core": [
      "Adenosine transiently blocks AV nodal conduction.",
      "It can terminate AV-node dependent SVT and reveal atrial flutter.",
      "AHA tachycardia algorithms list adenosine for regular narrow-complex tachycardia, with first dose 6 mg rapid IV push followed by flush and second dose 12 mg if needed."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Works for AVNRT/AVRT SVT.",
      "Must be rapid push with flush.",
      "Can reveal atrial flutter.",
      "Avoid in irregular wide tachycardia.",
      "Warn patient before giving."
    ],
    "traps": [
      "❌ Adenosine for irregular wide fast rhythm = possible WPW + AF disaster.",
      "EM Drug Handbook Progress",
      "Chapters 21–30",
      "Atropine",
      "Calcium Gluconate/Chloride",
      "Sodium Bicarbonate"
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Adenosine: لا تحفظ الدواء كاسم فقط. افهم متى يفيد، متى يضر، ما الجرعة والطريق، وما الذي يجب مراقبته بعد إعطائه. في الطوارئ، خطأ الجرعة أو اختيار الدواء قد يغيّر مصير المريض.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-21-atropine",
    "number": 21,
    "title": "Atropine",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map",
      "Rosh Rapid Review PDF text/visual support"
    ],
    "core": [
      "Atropine blocks vagal tone.",
      "In emergency medicine, it is mainly used for",
      "Symptomatic bradycardia"
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Atropine treats symptomatic bradycardia.",
      "Max ACLS dose is 3 mg.",
      "High-grade block may need pacing.",
      "In organophosphate toxicity, atropine endpoint is drying secretions.",
      "Atropine can worsen urinary retention/glaucoma symptoms."
    ],
    "traps": [
      "❌ Repeating atropine endlessly instead of pacing unstable complete heart block."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Atropine: لا تحفظ الدواء كاسم فقط. افهم متى يفيد، متى يضر، ما الجرعة والطريق، وما الذي يجب مراقبته بعد إعطائه. في الطوارئ، خطأ الجرعة أو اختيار الدواء قد يغيّر مصير المريض.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-22-calcium-gluconate-calcium-chloride",
    "number": 22,
    "title": "Calcium Gluconate & Calcium Chloride",
    "chapter": "Renal, Electrolytes & Acid-Base",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "In hyperkalemia, calcium stabilizes the myocardium.",
      "It does not lower serum potassium."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Hyperkalemia with ECG changes",
      "Hyperkalemic arrest",
      "Calcium-channel blocker toxicity",
      "Hypocalcemia with symptoms",
      "Massive transfusion-associated hypocalcemia",
      "Typical Hyperkalemia Dose",
      "Calcium gluconate",
      "1–2 g IV"
    ],
    "pearls": [
      "Calcium stabilizes myocardium.",
      "Calcium does not lower potassium.",
      "Give calcium first when ECG changes present.",
      "Calcium chloride has more elemental calcium.",
      "Repeat if ECG does not improve."
    ],
    "traps": [
      "❌ Giving insulin/albuterol first while wide QRS hyperkalemic patient deteriorates."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Calcium Gluconate & Calcium Chloride: لا تحفظ الدواء كاسم فقط. افهم متى يفيد، متى يضر، ما الجرعة والطريق، وما الذي يجب مراقبته بعد إعطائه. في الطوارئ، خطأ الجرعة أو اختيار الدواء قد يغيّر مصير المريض.",
    "visualHints": [],
    "needsDoseVerification": true
  },
  {
    "id": "master-23-sodium-bicarbonate",
    "number": 23,
    "title": "Sodium Bicarbonate",
    "chapter": "Renal, Electrolytes & Acid-Base",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Sodium bicarbonate is not a universal acidosis treatment.",
      "Its most classic ED use is sodium-channel blockade, especially TCA overdose."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "TCA overdose with wide QRS",
      "Sodium-channel blocker toxicity",
      "Severe hyperkalemia with acidosis, selected cases",
      "Severe metabolic acidosis, selected critical cases",
      "Cardiac arrest from hyperkalemia/TCA contexts",
      "Typical TCA Dose",
      "1–2 mEq/kg IV bolus",
      "Repeat to narrow QRS / target alkalinization per protocol."
    ],
    "pearls": [
      "Wide QRS overdose = sodium bicarbonate.",
      "TCA toxicity is classic.",
      "Bicarbonate is not routine for every acidosis.",
      "Monitor pH/electrolytes.",
      "It can worsen hypokalemia."
    ],
    "traps": [
      "❌ Treating TCA wide-complex dysrhythmia with amiodarone instead of bicarbonate."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Sodium Bicarbonate: اربط التحاليل بحالة المريض وليس بالأرقام فقط. اسأل هل يوجد اضطراب يهدد القلب أو الدماغ أو التنفس، وهل يحتاج علاجًا فوريًا قبل اكتمال كل النتائج.",
    "visualHints": [],
    "needsDoseVerification": true
  },
  {
    "id": "master-24-magnesium-sulfate",
    "number": 24,
    "title": "Magnesium Sulfate",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map",
      "Rosh Rapid Review PDF text/visual support"
    ],
    "core": [
      "Magnesium is one of the most versatile emergency drugs.",
      "It treats",
      "Torsades de pointes"
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Torsades",
      "Magnesium is first-line.",
      "Eclampsia",
      "Prevents/treats seizures.",
      "Severe Asthma",
      "Adjunct bronchodilator in severe/refractory exacerbations.",
      "Hypomagnesemia",
      "Replacement."
    ],
    "pearls": [
      "Torsades gets magnesium.",
      "Eclampsia gets magnesium.",
      "Magnesium is not primarily an antihypertensive.",
      "Severe asthma may benefit.",
      "Monitor reflexes/respiration in eclampsia therapy."
    ],
    "traps": [
      "❌ Treating eclamptic seizure with phenytoin instead of magnesium."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Magnesium Sulfate: لا تحفظ الدواء كاسم فقط. افهم متى يفيد، متى يضر، ما الجرعة والطريق، وما الذي يجب مراقبته بعد إعطائه. في الطوارئ، خطأ الجرعة أو اختيار الدواء قد يغيّر مصير المريض.",
    "visualHints": [],
    "needsDoseVerification": true
  },
  {
    "id": "master-25-insulin-dextrose-for-hyperkalemia",
    "number": 25,
    "title": "Insulin & Dextrose For Hyperkalemia",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Insulin shifts potassium into cells.",
      "Dextrose prevents/treats hypoglycemia.",
      "This buys time but does not remove potassium from the body."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Insulin shifts potassium intracellularly.",
      "It does not remove potassium.",
      "Check glucose repeatedly.",
      "Calcium comes first if ECG changes.",
      "Dialysis may still be needed."
    ],
    "traps": [
      "❌ Treating ESRD hyperkalemia with insulin only and no definitive removal plan."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Insulin & Dextrose For Hyperkalemia: ارتفاع أو اضطراب البوتاسيوم قد يقتل بسبب تأثيره على كهرباء القلب. إذا ظهر ECG خطير مثل QRS واسع أو T waves حادة أو بطء شديد، عالج القلب أولًا ولا تنتظر الصورة الكاملة.",
    "visualHints": [
      {
        "id": "pdf-ecg-changes-due-to-hyperkalemia-p367-2",
        "src": "/visual-assets/ecg-atlas/pdf-ecg-changes-due-to-hyperkalemia-p367-2.jpg",
        "title": "ECG Changes Due to Hyperkalemia",
        "type": "Diagnostic imaging visual",
        "topic": "ECG Changes Due to Hyperkalemia",
        "needsReview": false
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-26-albuterol",
    "number": 26,
    "title": "Albuterol",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map",
      "Rosh Rapid Review PDF text/visual support"
    ],
    "core": [
      "Albuterol relaxes bronchial smooth muscle.",
      "It is also used as an adjunct potassium-shifting therapy in hyperkalemia."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "First-line bronchodilator in asthma.",
      "Adjunct in hyperkalemia.",
      "Can cause tachycardia.",
      "Does not replace epinephrine in anaphylaxis.",
      "High doses may raise lactate."
    ],
    "traps": [
      "❌ Treating anaphylaxis bronchospasm with albuterol but forgetting IM epinephrine."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Albuterol: فكّر كطبيب طوارئ. ابدأ بما يقتل الآن، ابحث عن العلامات الحمراء، ثبّت المريض قبل التفاصيل، ثم اختر الفحص أو العلاج الذي يغيّر القرار بأسرع وأأمن طريقة.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-27-tranexamic-acid-txa",
    "number": 27,
    "title": "Tranexamic Acid (Txa)",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "TXA helps prevent clot breakdown.",
      "It is used in selected bleeding emergencies, especially trauma hemorrhage and postpartum hemorrhage protocols."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "TXA prevents clot breakdown.",
      "Early trauma use matters.",
      "Not a substitute for blood/source control.",
      "Useful in postpartum hemorrhage protocols.",
      "Give slowly to avoid hypotension."
    ],
    "traps": [
      "❌ Giving TXA late while ignoring massive transfusion and surgical bleeding control."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Tranexamic Acid (Txa): أسئلة الامتحان غالبًا تختبر القرار الآمن التالي، وليس المعلومة وحدها. ابحث عن عدم الاستقرار، التشخيص الذي لا يجوز تفويته، والفخ الذي يحاول السؤال أن يدفعك إليه.",
    "visualHints": [
      {
        "id": "pdf-acid-base-disorders-p355-2",
        "src": "/visual-assets/topics/pdf-acid-base-disorders-p355-2.jpg",
        "title": "Acid/Base Disorders",
        "type": "Clinical visual",
        "topic": "Acid/Base Disorders",
        "needsReview": true
      },
      {
        "id": "pdf-respiratory-acidosis-ph-7-35-paco2-45-p356-2",
        "src": "/visual-assets/topics/pdf-respiratory-acidosis-ph-7-35-paco2-45-p356-2.jpg",
        "title": "Respiratory Acidosis pH: < 7.35; PaCO2: > 45",
        "type": "Clinical visual",
        "topic": "Respiratory Acidosis pH: < 7.35; PaCO2: > 45",
        "needsReview": true
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-28-aspirin",
    "number": 28,
    "title": "Aspirin",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map",
      "Rosh Rapid Review PDF text/visual support"
    ],
    "core": [
      "Aspirin is one of the most important early medications in suspected ACS.",
      "It inhibits platelet aggregation."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Common ED loading dose",
      "162–325 mg chewed",
      "Contraindications / Cautions",
      "True aspirin allergy",
      "Active major bleeding",
      "Severe aspirin-sensitive asthma caution"
    ],
    "pearls": [
      "Give early in suspected ACS.",
      "Chewed aspirin absorbs faster.",
      "Do not wait for troponin if ACS likely.",
      "Avoid in true allergy/active bleeding.",
      "Aspirin does not relieve pain primarily."
    ],
    "traps": [
      "❌ Waiting for troponin before aspirin in classic ACS."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Aspirin: فكّر كطبيب طوارئ. ابدأ بما يقتل الآن، ابحث عن العلامات الحمراء، ثبّت المريض قبل التفاصيل، ثم اختر الفحص أو العلاج الذي يغيّر القرار بأسرع وأأمن طريقة.",
    "visualHints": [],
    "needsDoseVerification": true
  },
  {
    "id": "master-29-heparin",
    "number": 29,
    "title": "Heparin",
    "chapter": "Hematology & Transfusion",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map",
      "Rosh Rapid Review PDF text/visual support"
    ],
    "core": [
      "Heparin prevents clot propagation.",
      "It does not dissolve clot."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Heparin prevents propagation.",
      "Does not lyse clot.",
      "Reversible with protamine.",
      "Watch HIT.",
      "Useful when rapid on/off needed."
    ],
    "traps": [
      "❌ Thinking heparin dissolves PE like thrombolysis."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Heparin: ابدأ بتحديد هل النزف أو التخثر يهدد الحياة. اعرف الدواء المسبب، قيّم الشدة، ثم اختر العكس أو النقل أو الإيقاف حسب الخطر والبروتوكول.",
    "visualHints": [
      {
        "id": "pdf-pretest-probability-scoring-for-heparin-induced-thrombocytopenia-the-4-p550-2",
        "src": "/visual-assets/topics/pdf-pretest-probability-scoring-for-heparin-induced-thrombocytopenia-the-4-p550-2.jpg",
        "title": "Pretest Probability Scoring for Heparin-Induced Thrombocytopenia (The 4T Score)",
        "type": "Algorithm / table / high-yield summary",
        "topic": "Pretest Probability Scoring for Heparin-Induced Thrombocytopenia (The 4T Score)",
        "needsReview": true
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-30-alteplase-thrombolytics",
    "number": 30,
    "title": "Alteplase & Thrombolytics",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Thrombolytics dissolve clot.",
      "They can save tissue and life, but can cause catastrophic bleeding."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Thrombolytics dissolve clot.",
      "Bleeding risk is major limitation.",
      "Suspected dissection is contraindication.",
      "Stroke thrombolysis requires strict eligibility.",
      "Massive PE with shock may require reperfusion therapy."
    ],
    "traps": [
      "❌ Giving thrombolytic to chest pain patient with possible aortic dissection.",
      "EM Drug Handbook Progress",
      "Chapters 31–40",
      "Ceftriaxone",
      "Piperacillin-Tazobactam",
      "Vancomycin"
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Alteplase & Thrombolytics: فكّر كطبيب طوارئ. ابدأ بما يقتل الآن، ابحث عن العلامات الحمراء، ثبّت المريض قبل التفاصيل، ثم اختر الفحص أو العلاج الذي يغيّر القرار بأسرع وأأمن طريقة.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-31-ceftriaxone",
    "number": 31,
    "title": "Ceftriaxone",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map",
      "Rosh Rapid Review PDF text/visual support"
    ],
    "core": [
      "Ceftriaxone is one of the most useful ED antibiotics because it covers many serious community-acquired infections."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Ceftriaxone is common for community infections.",
      "Does not cover Pseudomonas.",
      "Used in meningitis regimens.",
      "Good for SBP.",
      "Gonorrhea treatment commonly includes ceftriaxone."
    ],
    "traps": [
      "❌ Using ceftriaxone alone for pseudomonal risk or severe healthcare-associated infection."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Ceftriaxone: لا تحفظ الدواء كاسم فقط. افهم متى يفيد، متى يضر، ما الجرعة والطريق، وما الذي يجب مراقبته بعد إعطائه. في الطوارئ، خطأ الجرعة أو اختيار الدواء قد يغيّر مصير المريض.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-32-piperacillin-tazobactam",
    "number": 32,
    "title": "Piperacillin-Tazobactam",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map",
      "Rosh Rapid Review PDF text/visual support"
    ],
    "core": [
      "Piperacillin-tazobactam is a broad ED antibiotic for severe polymicrobial infection, intra-abdominal sepsis, and many healthcare-associated infections."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Good broad empiric sepsis antibiotic.",
      "Covers anaerobes.",
      "Covers Pseudomonas.",
      "Does not cover MRSA reliably.",
      "Combine with vancomycin if MRSA risk."
    ],
    "traps": [
      "❌ Using piperacillin-tazobactam alone for suspected MRSA necrotizing pneumonia or line infection."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Piperacillin-Tazobactam: فكّر كطبيب طوارئ. ابدأ بما يقتل الآن، ابحث عن العلامات الحمراء، ثبّت المريض قبل التفاصيل، ثم اختر الفحص أو العلاج الذي يغيّر القرار بأسرع وأأمن طريقة.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-33-vancomycin",
    "number": 33,
    "title": "Vancomycin",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map",
      "Rosh Rapid Review PDF text/visual support"
    ],
    "core": [
      "Vancomycin is primarily used for serious gram-positive infections, especially MRSA."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Vancomycin covers MRSA.",
      "Needs gram-negative partner in broad sepsis.",
      "Infuse slowly to reduce infusion reaction.",
      "Monitor renal function.",
      "Used in meningitis/endocarditis regimens."
    ],
    "traps": [
      "❌ Using vancomycin alone for septic shock of unknown source."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Vancomycin: فكّر كطبيب طوارئ. ابدأ بما يقتل الآن، ابحث عن العلامات الحمراء، ثبّت المريض قبل التفاصيل، ثم اختر الفحص أو العلاج الذي يغيّر القرار بأسرع وأأمن طريقة.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-34-cefepime",
    "number": 34,
    "title": "Cefepime",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map",
      "Rosh Rapid Review PDF text/visual support"
    ],
    "core": [
      "Cefepime is a broad gram-negative antibiotic with Pseudomonas coverage and is commonly used in febrile neutropenia and severe hospital-associated infections."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Cefepime covers Pseudomonas.",
      "High-yield for febrile neutropenia.",
      "Add vancomycin if MRSA risk.",
      "Add metronidazole if anaerobic intra-abdominal concern.",
      "Neurotoxicity risk rises in renal failure."
    ],
    "traps": [
      "❌ Treating perforated abdominal sepsis with cefepime alone without anaerobic coverage."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Cefepime: فكّر كطبيب طوارئ. ابدأ بما يقتل الآن، ابحث عن العلامات الحمراء، ثبّت المريض قبل التفاصيل، ثم اختر الفحص أو العلاج الذي يغيّر القرار بأسرع وأأمن طريقة.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-35-meropenem",
    "number": 35,
    "title": "Meropenem",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map",
      "Rosh Rapid Review PDF text/visual support"
    ],
    "core": [
      "Meropenem is a very broad antibiotic used for severe resistant gram-negative infections, ESBL concern, and critically ill patients with high resistance risk."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Meropenem covers ESBL better than many β-lactams.",
      "Very broad but not MRSA.",
      "Good anaerobic coverage.",
      "Renal dosing needed.",
      "Avoid unnecessary overuse."
    ],
    "traps": [
      "❌ Assuming meropenem covers MRSA."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Meropenem: فكّر كطبيب طوارئ. ابدأ بما يقتل الآن، ابحث عن العلامات الحمراء، ثبّت المريض قبل التفاصيل، ثم اختر الفحص أو العلاج الذي يغيّر القرار بأسرع وأأمن طريقة.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-36-doxycycline",
    "number": 36,
    "title": "Doxycycline",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map",
      "Rosh Rapid Review PDF text/visual support"
    ],
    "core": [
      "Doxycycline is high-yield because it covers atypical organisms, tick-borne illness, and several zoonotic infections."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Doxycycline covers atypicals.",
      "First-line for many tick-borne illnesses.",
      "Useful for chlamydia.",
      "Can cause photosensitivity.",
      "Take with water and remain upright."
    ],
    "traps": [
      "❌ Treating suspected Rocky Mountain spotted fever without doxycycline."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Doxycycline: فكّر كطبيب طوارئ. ابدأ بما يقتل الآن، ابحث عن العلامات الحمراء، ثبّت المريض قبل التفاصيل، ثم اختر الفحص أو العلاج الذي يغيّر القرار بأسرع وأأمن طريقة.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-37-azithromycin",
    "number": 37,
    "title": "Azithromycin",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map",
      "Rosh Rapid Review PDF text/visual support"
    ],
    "core": [
      "Azithromycin is used for atypical respiratory pathogens and some sexually transmitted infections, but QT prolongation risk matters."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Covers atypical pneumonia.",
      "QT prolongation matters.",
      "Often combined with β-lactam for CAP.",
      "Consider Legionella in severe atypical pneumonia.",
      "Resistance patterns matter."
    ],
    "traps": [
      "❌ Giving azithromycin to long-QT syncope patient without checking ECG/electrolytes."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Azithromycin: فكّر كطبيب طوارئ. ابدأ بما يقتل الآن، ابحث عن العلامات الحمراء، ثبّت المريض قبل التفاصيل، ثم اختر الفحص أو العلاج الذي يغيّر القرار بأسرع وأأمن طريقة.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-38-metronidazole",
    "number": 38,
    "title": "Metronidazole",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map",
      "Rosh Rapid Review PDF text/visual support"
    ],
    "core": [
      "Metronidazole is used when anaerobic coverage is needed, especially intra-abdominal and pelvic infections."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Metronidazole covers anaerobes.",
      "Often paired with ceftriaxone/cefepime for abdominal sources.",
      "Does not cover aerobic gram-negatives alone.",
      "Useful for trichomonas.",
      "Metallic taste is common."
    ],
    "traps": [
      "❌ Using metronidazole alone for polymicrobial abdominal sepsis."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Metronidazole: فكّر كطبيب طوارئ. ابدأ بما يقتل الآن، ابحث عن العلامات الحمراء، ثبّت المريض قبل التفاصيل، ثم اختر الفحص أو العلاج الذي يغيّر القرار بأسرع وأأمن طريقة.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-39-acyclovir",
    "number": 39,
    "title": "Acyclovir",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map",
      "Rosh Rapid Review PDF text/visual support"
    ],
    "core": [
      "Acyclovir is life-saving in HSV encephalitis.",
      "If HSV encephalitis is suspected, do not wait for confirmatory testing before treatment."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "HSV encephalitis needs acyclovir.",
      "Do not delay if suspected.",
      "Renal adjustment matters.",
      "Hydration reduces nephrotoxicity risk.",
      "Temporal lobe seizures/AMS are high-yield clues."
    ],
    "traps": [
      "❌ Treating meningitis/encephalitis without acyclovir when HSV is possible."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Acyclovir: فكّر كطبيب طوارئ. ابدأ بما يقتل الآن، ابحث عن العلامات الحمراء، ثبّت المريض قبل التفاصيل، ثم اختر الفحص أو العلاج الذي يغيّر القرار بأسرع وأأمن طريقة.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-40-oseltamivir",
    "number": 40,
    "title": "Oseltamivir",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map",
      "Rosh Rapid Review PDF text/visual support"
    ],
    "core": [
      "Oseltamivir is used for influenza, especially in high-risk patients, severe disease, or early presentation."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Best benefit early.",
      "Treat severe/hospitalized high-risk patients.",
      "Renal adjustment matters.",
      "Does not replace supportive care.",
      "Influenza can cause pneumonia/sepsis."
    ],
    "traps": [
      "❌ Withholding oseltamivir from hospitalized severe influenza solely because symptoms started >48 hours ago.",
      "EM Drug Handbook Progress",
      "Chapters 41–50",
      "N-acetylcysteine",
      "Fomepizole",
      "Hydroxocobalamin"
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Oseltamivir: فكّر كطبيب طوارئ. ابدأ بما يقتل الآن، ابحث عن العلامات الحمراء، ثبّت المريض قبل التفاصيل، ثم اختر الفحص أو العلاج الذي يغيّر القرار بأسرع وأأمن طريقة.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-41-n-acetylcysteine-nac",
    "number": 41,
    "title": "N-Acetylcysteine (Nac)",
    "chapter": "POCUS & Visual Diagnosis",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "N-acetylcysteine is the antidote for acetaminophen toxicity.",
      "It works best early, but it may still help later in significant liver injury."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Acetaminophen level above treatment line on nomogram",
      "Unknown time with detectable/significant level",
      "Repeated supratherapeutic ingestion with liver injury or elevated level",
      "Acute liver failure with suspected acetaminophen contribution",
      "Routes",
      "Iv Nac",
      "Oral NAC",
      "Protocol depends on institution."
    ],
    "pearls": [
      "Early acetaminophen overdose can be asymptomatic.",
      "NAC is most effective early.",
      "Unknown time ingestion is high-risk.",
      "Always check acetaminophen level in intentional overdose.",
      "Do not delay NAC when high suspicion and timing unclear."
    ],
    "traps": [
      "❌ Reassured by normal initial AST/ALT after early acetaminophen overdose."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في N-Acetylcysteine (Nac): السونار في الطوارئ ليس تصويرًا كاملًا، بل جواب سريع لسؤال محدد يغيّر القرار. استخدمه لتأكيد الخطر أو توجيه العلاج، لكن لا تجعل صورة ضعيفة أو غير مكتملة تطمئنك كاذبًا.",
    "visualHints": [],
    "needsDoseVerification": true
  },
  {
    "id": "master-42-fomepizole",
    "number": 42,
    "title": "Fomepizole",
    "chapter": "POCUS & Visual Diagnosis",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Fomepizole prevents toxic alcohols from being metabolized into toxic acids.",
      "It is used for methanol and ethylene glycol poisoning."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Suspected methanol poisoning",
      "Suspected ethylene glycol poisoning",
      "High anion gap metabolic acidosis with toxic alcohol concern",
      "Elevated osmolar gap with compatible history",
      "Visual symptoms after alcohol exposure",
      "Renal failure/crystalluria after ethylene glycol concern",
      "Typical Dose",
      "Common loading dose"
    ],
    "pearls": [
      "Fomepizole blocks alcohol dehydrogenase.",
      "Methanol causes visual toxicity.",
      "Ethylene glycol causes renal injury.",
      "Osmolar gap may fall late.",
      "Dialysis may still be needed."
    ],
    "traps": [
      "❌ Normal osmolar gap late in illness excludes toxic alcohol."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Fomepizole: السونار في الطوارئ ليس تصويرًا كاملًا، بل جواب سريع لسؤال محدد يغيّر القرار. استخدمه لتأكيد الخطر أو توجيه العلاج، لكن لا تجعل صورة ضعيفة أو غير مكتملة تطمئنك كاذبًا.",
    "visualHints": [],
    "needsDoseVerification": true
  },
  {
    "id": "master-43-hydroxocobalamin",
    "number": 43,
    "title": "Hydroxocobalamin",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Hydroxocobalamin binds cyanide to form cyanocobalamin, which is excreted in urine.",
      "It is a key antidote for suspected cyanide poisoning, especially smoke inhalation with shock or severe lactic acidosis."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Suspected cyanide poisoning",
      "Enclosed-space fire with coma/shock",
      "Severe lactic acidosis after smoke inhalation",
      "Industrial cyanide exposure",
      "Typical Adult Dose",
      "5 g IV",
      "May repeat depending severity/protocol.",
      "Side Effects"
    ],
    "pearls": [
      "Smoke inhalation + severe lactate suggests cyanide.",
      "Hydroxocobalamin is relatively safe.",
      "It turns skin/urine red.",
      "Treat CO poisoning simultaneously with high-flow oxygen.",
      "Do not wait for cyanide level in unstable patient."
    ],
    "traps": [
      "❌ Treating enclosed-space fire patient only for CO while ignoring cyanide shock."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Hydroxocobalamin: فكّر كطبيب طوارئ. ابدأ بما يقتل الآن، ابحث عن العلامات الحمراء، ثبّت المريض قبل التفاصيل، ثم اختر الفحص أو العلاج الذي يغيّر القرار بأسرع وأأمن طريقة.",
    "visualHints": [],
    "needsDoseVerification": true
  },
  {
    "id": "master-44-methylene-blue",
    "number": 44,
    "title": "Methylene Blue",
    "chapter": "POCUS & Visual Diagnosis",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Methylene blue treats symptomatic methemoglobinemia by helping convert methemoglobin back to functional hemoglobin."
    ],
    "presentation": [
      "Cyanosis",
      "Chocolate-brown blood",
      "Saturation gap",
      "SpO₂ around 85%",
      "Symptoms despite oxygen",
      "Normal PaO₂ on ABG may occur",
      "Typical Dose",
      "1–2 mg/kg IV over 5 min"
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "SpO₂ stuck near 85% is high-yield.",
      "Chocolate-colored blood suggests methemoglobinemia.",
      "Methylene blue treats symptomatic cases.",
      "G6PD deficiency is important.",
      "Dapsone may cause prolonged/recurrent methemoglobinemia."
    ],
    "traps": [
      "❌ Escalating oxygen/ventilator endlessly without recognizing methemoglobinemia saturation gap."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Methylene Blue: السونار في الطوارئ ليس تصويرًا كاملًا، بل جواب سريع لسؤال محدد يغيّر القرار. استخدمه لتأكيد الخطر أو توجيه العلاج، لكن لا تجعل صورة ضعيفة أو غير مكتملة تطمئنك كاذبًا.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-45-glucagon",
    "number": 45,
    "title": "Glucagon",
    "chapter": "POCUS & Visual Diagnosis",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Glucagon is used as an antidote in beta-blocker toxicity because it increases intracellular cAMP independent of beta receptors."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Beta-blocker overdose with bradycardia/hypotension",
      "Hypoglycemia when IV access unavailable",
      "Toxicology Dose",
      "Common adult",
      "3–10 mg IV bolus",
      "Then infusion if response.",
      "Protocols vary.",
      "Side Effects"
    ],
    "pearls": [
      "Glucagon is classic for beta-blocker overdose.",
      "Vomiting is common; protect airway.",
      "Response may be transient.",
      "High-dose insulin is often needed in severe BB/CCB toxicity.",
      "Also used for hypoglycemia without IV access."
    ],
    "traps": [
      "❌ Giving standard hypoglycemia-dose glucagon for severe beta-blocker shock and expecting sustained reversal."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Glucagon: السونار في الطوارئ ليس تصويرًا كاملًا، بل جواب سريع لسؤال محدد يغيّر القرار. استخدمه لتأكيد الخطر أو توجيه العلاج، لكن لا تجعل صورة ضعيفة أو غير مكتملة تطمئنك كاذبًا.",
    "visualHints": [],
    "needsDoseVerification": true
  },
  {
    "id": "master-46-high-dose-insulin-euglycemia-therapy",
    "number": 46,
    "title": "High-Dose Insulin Euglycemia Therapy",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "High-dose insulin therapy is a major treatment for severe calcium-channel blocker and beta-blocker poisoning.",
      "It improves myocardial carbohydrate utilization and contractility."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Severe calcium-channel blocker toxicity",
      "Severe beta-blocker toxicity",
      "Shock refractory to initial therapy",
      "Myocardial dysfunction from these poisonings",
      "Typical Protocol Concept",
      "Insulin bolus",
      "High-dose insulin infusion",
      "Dextrose infusion to maintain euglycemia"
    ],
    "pearls": [
      "High-dose insulin treats CCB/BB shock.",
      "It is not the same as hyperkalemia insulin dosing.",
      "Dextrose support is mandatory.",
      "Potassium shifts intracellularly.",
      "Toxicology consultation is recommended."
    ],
    "traps": [
      "❌ Avoiding high-dose insulin in severe CCB shock because glucose is normal."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في High-Dose Insulin Euglycemia Therapy: فكّر كطبيب طوارئ. ابدأ بما يقتل الآن، ابحث عن العلامات الحمراء، ثبّت المريض قبل التفاصيل، ثم اختر الفحص أو العلاج الذي يغيّر القرار بأسرع وأأمن طريقة.",
    "visualHints": [
      {
        "id": "pdf-endocarditis-p15-4",
        "src": "/visual-assets/topics/pdf-endocarditis-p15-4.jpg",
        "title": "Endocarditis",
        "type": "Algorithm / table / high-yield summary",
        "topic": "Endocarditis",
        "needsReview": true
      },
      {
        "id": "pdf-heart-score-p25-4",
        "src": "/visual-assets/topics/pdf-heart-score-p25-4.jpg",
        "title": "HEART Score",
        "type": "Algorithm / table / high-yield summary",
        "topic": "HEART Score",
        "needsReview": true
      }
    ],
    "needsDoseVerification": true
  },
  {
    "id": "master-47-digoxin-immune-fab",
    "number": 47,
    "title": "Digoxin Immune Fab",
    "chapter": "POCUS & Visual Diagnosis",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Digoxin immune Fab binds digoxin and treats life-threatening digoxin toxicity."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Life-threatening dysrhythmia",
      "Severe bradycardia/AV block with instability",
      "Hyperkalemia in acute digoxin toxicity",
      "Cardiac arrest from digoxin toxicity",
      "Very high digoxin level with toxicity",
      "Significant ingestion with severe symptoms",
      "Effects After Fab",
      "Serum digoxin level becomes difficult to interpret"
    ],
    "pearls": [
      "Hyperkalemia in acute digoxin toxicity is ominous.",
      "Fab treats life-threatening toxicity.",
      "Digoxin level after Fab is misleading.",
      "Renal failure increases toxicity risk.",
      "Toxicity can cause many rhythms."
    ],
    "traps": [
      "❌ Treating severe digoxin toxicity hyperkalemia like routine hyperkalemia and forgetting Fab."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Digoxin Immune Fab: السونار في الطوارئ ليس تصويرًا كاملًا، بل جواب سريع لسؤال محدد يغيّر القرار. استخدمه لتأكيد الخطر أو توجيه العلاج، لكن لا تجعل صورة ضعيفة أو غير مكتملة تطمئنك كاذبًا.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-48-flumazenil",
    "number": 48,
    "title": "Flumazenil",
    "chapter": "POCUS & Visual Diagnosis",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Flumazenil reverses benzodiazepines but is rarely used in undifferentiated overdose because it can precipitate seizures."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Flumazenil can cause seizures.",
      "Avoid in mixed overdose.",
      "Avoid in chronic benzodiazepine users.",
      "Supportive airway care is usually safer.",
      "Best use is selected iatrogenic oversedation."
    ],
    "traps": [
      "❌ Giving flumazenil to an unknown overdose patient with possible TCA co-ingestion."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Flumazenil: السونار في الطوارئ ليس تصويرًا كاملًا، بل جواب سريع لسؤال محدد يغيّر القرار. استخدمه لتأكيد الخطر أو توجيه العلاج، لكن لا تجعل صورة ضعيفة أو غير مكتملة تطمئنك كاذبًا.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-49-deferoxamine",
    "number": 49,
    "title": "Deferoxamine",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Deferoxamine binds free iron and is used for severe iron poisoning."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Severe symptoms",
      "Shock/acidosis",
      "High serum iron level",
      "Significant ingestion with systemic toxicity",
      "Side Effects",
      "Hypotension if infused rapidly",
      "ARDS with prolonged high-dose therapy",
      "Yersinia infection risk"
    ],
    "pearls": [
      "Iron causes early GI toxicity.",
      "Severe poisoning causes shock/acidosis.",
      "Deferoxamine chelates iron.",
      "Whole bowel irrigation may be needed for tablets.",
      "Pediatric iron ingestion can be fatal."
    ],
    "traps": [
      "❌ Reassured by temporary improvement after early GI phase of iron poisoning."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Deferoxamine: فكّر كطبيب طوارئ. ابدأ بما يقتل الآن، ابحث عن العلامات الحمراء، ثبّت المريض قبل التفاصيل، ثم اختر الفحص أو العلاج الذي يغيّر القرار بأسرع وأأمن طريقة.",
    "visualHints": [],
    "needsDoseVerification": true
  },
  {
    "id": "master-50-pyridoxine",
    "number": 50,
    "title": "Pyridoxine",
    "chapter": "POCUS & Visual Diagnosis",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map",
      "Rosh Rapid Review PDF text/visual support"
    ],
    "core": [
      "Pyridoxine is the antidote for isoniazid-induced seizures."
    ],
    "presentation": [
      "Seizures",
      "Metabolic acidosis",
      "Coma",
      "TB medication access",
      "Refractory seizures"
    ],
    "management": [
      "Isoniazid overdose",
      "Refractory seizures with suspected INH",
      "TB medication ingestion with seizures/metabolic acidosis",
      "Dose Concept",
      "If known INH amount",
      "Give gram-for-gram pyridoxine equivalent.",
      "If unknown",
      "Protocol-based large adult dose commonly used."
    ],
    "pearls": [
      "INH causes refractory seizures.",
      "Pyridoxine is antidote.",
      "Benzodiazepines still used acutely.",
      "Severe lactic acidosis may occur after seizures.",
      "Consider INH in TB medication access."
    ],
    "traps": [
      "❌ Treating INH seizures only with repeated benzodiazepines and forgetting pyridoxine.",
      "EM Drug Handbook Progress",
      "Chapters 51–60",
      "Haloperidol",
      "Droperidol",
      "Olanzapine"
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Pyridoxine: السونار في الطوارئ ليس تصويرًا كاملًا، بل جواب سريع لسؤال محدد يغيّر القرار. استخدمه لتأكيد الخطر أو توجيه العلاج، لكن لا تجعل صورة ضعيفة أو غير مكتملة تطمئنك كاذبًا.",
    "visualHints": [],
    "needsDoseVerification": true
  },
  {
    "id": "master-51-haloperidol",
    "number": 51,
    "title": "Haloperidol",
    "chapter": "POCUS & Visual Diagnosis",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Haloperidol is useful for severe agitation, psychosis, nausea in selected settings, and delirium-related agitation, but QT prolongation and extrapyramidal effects matter."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Check QT risk.",
      "EPS can occur.",
      "Avoid reflex use in Parkinson disease/Lewy body dementia.",
      "Combine cautiously with other sedatives.",
      "Treat cause of delirium, not agitation only."
    ],
    "traps": [
      "❌ Giving haloperidol to long-QT patient without considering torsades risk."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Haloperidol: السونار في الطوارئ ليس تصويرًا كاملًا، بل جواب سريع لسؤال محدد يغيّر القرار. استخدمه لتأكيد الخطر أو توجيه العلاج، لكن لا تجعل صورة ضعيفة أو غير مكتملة تطمئنك كاذبًا.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-52-droperidol",
    "number": 52,
    "title": "Droperidol",
    "chapter": "POCUS & Visual Diagnosis",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map",
      "Rosh Rapid Review PDF text/visual support"
    ],
    "core": [
      "Droperidol is a potent ED medication for agitation, nausea/vomiting, migraine adjunct, and cannabinoid hyperemesis pathways."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Effective for agitation.",
      "Effective antiemetic.",
      "QT caution matters.",
      "Monitor high-risk patients.",
      "Avoid stacking QT-prolonging drugs."
    ],
    "traps": [
      "❌ Giving multiple QT-prolonging antiemetics without ECG/electrolyte awareness."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Droperidol: السونار في الطوارئ ليس تصويرًا كاملًا، بل جواب سريع لسؤال محدد يغيّر القرار. استخدمه لتأكيد الخطر أو توجيه العلاج، لكن لا تجعل صورة ضعيفة أو غير مكتملة تطمئنك كاذبًا.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-53-olanzapine",
    "number": 53,
    "title": "Olanzapine",
    "chapter": "POCUS & Visual Diagnosis",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map",
      "Rosh Rapid Review PDF text/visual support"
    ],
    "core": [
      "Olanzapine is an atypical antipsychotic useful for agitation and psychosis, with less EPS than haloperidol but important sedation cautions."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Useful atypical antipsychotic.",
      "Less EPS than haloperidol.",
      "Sedation is common.",
      "Avoid unsafe sedative stacking.",
      "Good option in many psychiatric agitation cases."
    ],
    "traps": [
      "❌ Combining sedatives without airway/respiratory monitoring."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Olanzapine: السونار في الطوارئ ليس تصويرًا كاملًا، بل جواب سريع لسؤال محدد يغيّر القرار. استخدمه لتأكيد الخطر أو توجيه العلاج، لكن لا تجعل صورة ضعيفة أو غير مكتملة تطمئنك كاذبًا.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-54-diphenhydramine",
    "number": 54,
    "title": "Diphenhydramine",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map",
      "Rosh Rapid Review PDF text/visual support"
    ],
    "core": [
      "Diphenhydramine is an antihistamine used for allergic symptoms and dystonic reactions, but overdose causes anticholinergic toxicity."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Treats dystonic reactions.",
      "Does not replace epinephrine in anaphylaxis.",
      "Causes sedation.",
      "Overdose causes anticholinergic toxidrome.",
      "Caution elderly patients."
    ],
    "traps": [
      "❌ Treating anaphylaxis with diphenhydramine alone."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Diphenhydramine: فكّر كطبيب طوارئ. ابدأ بما يقتل الآن، ابحث عن العلامات الحمراء، ثبّت المريض قبل التفاصيل، ثم اختر الفحص أو العلاج الذي يغيّر القرار بأسرع وأأمن طريقة.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-55-metoclopramide",
    "number": 55,
    "title": "Metoclopramide",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Metoclopramide is an antiemetic and prokinetic commonly used for nausea and migraine-associated vomiting."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Useful migraine antiemetic.",
      "Akathisia is common board side effect.",
      "Dystonia can be treated with diphenhydramine.",
      "Has prokinetic effects.",
      "Use caution in Parkinson disease."
    ],
    "traps": [
      "❌ Missing akathisia and calling it anxiety."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Metoclopramide: فكّر كطبيب طوارئ. ابدأ بما يقتل الآن، ابحث عن العلامات الحمراء، ثبّت المريض قبل التفاصيل، ثم اختر الفحص أو العلاج الذي يغيّر القرار بأسرع وأأمن طريقة.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-56-ondansetron",
    "number": 56,
    "title": "Ondansetron",
    "chapter": "POCUS & Visual Diagnosis",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Ondansetron is a common antiemetic, but QT prolongation risk matters in susceptible patients."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Common ED antiemetic.",
      "QT caution.",
      "Correct electrolytes in high-risk patients.",
      "Useful in vomiting/dehydration pathways.",
      "Does not treat cause of vomiting."
    ],
    "traps": [
      "❌ Giving ondansetron repeatedly to hypokalemic long-QT patient."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Ondansetron: السونار في الطوارئ ليس تصويرًا كاملًا، بل جواب سريع لسؤال محدد يغيّر القرار. استخدمه لتأكيد الخطر أو توجيه العلاج، لكن لا تجعل صورة ضعيفة أو غير مكتملة تطمئنك كاذبًا.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-57-dexamethasone",
    "number": 57,
    "title": "Dexamethasone",
    "chapter": "Board Review & Exam Strategy",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map",
      "Rosh Rapid Review PDF text/visual support"
    ],
    "core": [
      "Dexamethasone is a long-acting corticosteroid useful in airway edema, croup, asthma/COPD adjunct pathways, cerebral edema contexts, and many inflammatory emergencies."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Croup gets dexamethasone.",
      "Steroids are not immediate bronchodilators.",
      "Useful for asthma relapse prevention.",
      "Can raise glucose.",
      "Does not replace epinephrine in anaphylaxis."
    ],
    "traps": [
      "❌ Treating croup with albuterol while forgetting dexamethasone."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Dexamethasone: أسئلة الامتحان غالبًا تختبر القرار الآمن التالي، وليس المعلومة وحدها. ابحث عن عدم الاستقرار، التشخيص الذي لا يجوز تفويته، والفخ الذي يحاول السؤال أن يدفعك إليه.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-58-hydrocortisone",
    "number": 58,
    "title": "Hydrocortisone",
    "chapter": "POCUS & Visual Diagnosis",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map",
      "Rosh Rapid Review PDF text/visual support"
    ],
    "core": [
      "Hydrocortisone has glucocorticoid and mineralocorticoid effects, making it especially important in adrenal crisis and refractory septic shock contexts."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Adrenal crisis gets steroids.",
      "Do not delay in refractory shock.",
      "Hydrocortisone has mineralocorticoid activity.",
      "Steroids do not replace fluids/pressors when needed.",
      "Check glucose."
    ],
    "traps": [
      "❌ Waiting for cortisol level before treating suspected adrenal crisis shock."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Hydrocortisone: السونار في الطوارئ ليس تصويرًا كاملًا، بل جواب سريع لسؤال محدد يغيّر القرار. استخدمه لتأكيد الخطر أو توجيه العلاج، لكن لا تجعل صورة ضعيفة أو غير مكتملة تطمئنك كاذبًا.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-59-methylprednisolone",
    "number": 59,
    "title": "Methylprednisolone",
    "chapter": "POCUS & Visual Diagnosis",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map",
      "Rosh Rapid Review PDF text/visual support"
    ],
    "core": [
      "Methylprednisolone is a commonly used IV corticosteroid in asthma, COPD, allergic/inflammatory disease, and some autoimmune emergencies."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Steroids reduce relapse in asthma/COPD.",
      "Not immediate rescue bronchodilator.",
      "Monitor diabetic patients.",
      "Does not replace epinephrine in anaphylaxis.",
      "IV route useful if vomiting/severe illness."
    ],
    "traps": [
      "❌ Using steroids as the only treatment for severe asthma."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Methylprednisolone: السونار في الطوارئ ليس تصويرًا كاملًا، بل جواب سريع لسؤال محدد يغيّر القرار. استخدمه لتأكيد الخطر أو توجيه العلاج، لكن لا تجعل صورة ضعيفة أو غير مكتملة تطمئنك كاذبًا.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-60-nebulized-epinephrine",
    "number": 60,
    "title": "Nebulized Epinephrine",
    "chapter": "POCUS & Visual Diagnosis",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Nebulized epinephrine reduces upper airway edema and is high-yield in moderate to severe croup."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Moderate/severe croup gets nebulized epinephrine.",
      "Dexamethasone should also be given.",
      "Observe after epinephrine.",
      "It treats upper airway edema.",
      "Stridor at rest is severe."
    ],
    "traps": [
      "❌ Discharging immediately after racemic/nebulized epinephrine without observation.",
      "EM Drug Handbook Progress",
      "Chapters 61–70",
      "Lidocaine",
      "Bupivacaine",
      "Ketorolac"
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Nebulized Epinephrine: السونار في الطوارئ ليس تصويرًا كاملًا، بل جواب سريع لسؤال محدد يغيّر القرار. استخدمه لتأكيد الخطر أو توجيه العلاج، لكن لا تجعل صورة ضعيفة أو غير مكتملة تطمئنك كاذبًا.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-61-lidocaine",
    "number": 61,
    "title": "Lidocaine",
    "chapter": "POCUS & Visual Diagnosis",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map",
      "Rosh Rapid Review PDF text/visual support"
    ],
    "core": [
      "Lidocaine is widely used for local anesthesia and selected ventricular arrhythmias.",
      "The most important safety issue is",
      "local anesthetic systemic toxicity (LAST)."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Calculate maximum dose before injection.",
      "Aspirate before injecting.",
      "Inject incrementally.",
      "LAST causes CNS then cardiac toxicity.",
      "Lipid emulsion treats severe LAST."
    ],
    "traps": [
      "❌ Injecting large-volume local anesthetic without calculating dose."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Lidocaine: السونار في الطوارئ ليس تصويرًا كاملًا، بل جواب سريع لسؤال محدد يغيّر القرار. استخدمه لتأكيد الخطر أو توجيه العلاج، لكن لا تجعل صورة ضعيفة أو غير مكتملة تطمئنك كاذبًا.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-62-bupivacaine",
    "number": 62,
    "title": "Bupivacaine",
    "chapter": "POCUS & Visual Diagnosis",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Bupivacaine lasts longer than lidocaine but is more cardiotoxic."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Longer acting than lidocaine.",
      "More cardiotoxic than lidocaine.",
      "Excellent for nerve blocks.",
      "LAST preparedness matters.",
      "Avoid intravascular injection."
    ],
    "traps": [
      "❌ Assuming all local anesthetics have equal toxicity."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Bupivacaine: السونار في الطوارئ ليس تصويرًا كاملًا، بل جواب سريع لسؤال محدد يغيّر القرار. استخدمه لتأكيد الخطر أو توجيه العلاج، لكن لا تجعل صورة ضعيفة أو غير مكتملة تطمئنك كاذبًا.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-63-ketorolac",
    "number": 63,
    "title": "Ketorolac",
    "chapter": "POCUS & Visual Diagnosis",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Ketorolac is a strong non-opioid analgesic especially useful for renal colic, musculoskeletal pain, and inflammatory pain."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Excellent for renal colic.",
      "Avoid in significant renal failure.",
      "Avoid in active GI bleed.",
      "Useful opioid-sparing analgesic.",
      "Check dehydration/AKI risk."
    ],
    "traps": [
      "❌ Giving ketorolac to dehydrated AKI patient with renal colic."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Ketorolac: السونار في الطوارئ ليس تصويرًا كاملًا، بل جواب سريع لسؤال محدد يغيّر القرار. استخدمه لتأكيد الخطر أو توجيه العلاج، لكن لا تجعل صورة ضعيفة أو غير مكتملة تطمئنك كاذبًا.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-64-acetaminophen-paracetamol",
    "number": 64,
    "title": "Acetaminophen / Paracetamol",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Acetaminophen is useful and generally safe at therapeutic doses, but overdose is a major cause of acute liver failure."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "N-acetylcysteine."
    ],
    "pearls": [
      "Safe at therapeutic doses.",
      "Overdose may look well early.",
      "NAC is antidote.",
      "Always check level in intentional overdose.",
      "Liver disease/alcohol use may increase risk."
    ],
    "traps": [
      "❌ Reassured by normal early LFTs after overdose."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Acetaminophen / Paracetamol: في التسمم لا تطارد اسم السم قبل إنقاذ المريض. ابدأ بالـ ABCDE، افحص السكر و ECG، تعرف على toxidrome، ثم استخدم الترياق المناسب إذا كان واضحًا ومطلوبًا.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-65-ibuprofen",
    "number": 65,
    "title": "Ibuprofen",
    "chapter": "POCUS & Visual Diagnosis",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map",
      "Rosh Rapid Review PDF text/visual support"
    ],
    "core": [
      "Ibuprofen is a common oral NSAID for pain and fever, but carries the same broad NSAID cautions."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Useful oral analgesic.",
      "Avoid in AKI/dehydration risk.",
      "Avoid in GI bleeding.",
      "Helps inflammatory pain.",
      "Consider multimodal pain control."
    ],
    "traps": [
      "❌ Giving NSAIDs to high-risk GI bleed or AKI patient without thinking."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Ibuprofen: السونار في الطوارئ ليس تصويرًا كاملًا، بل جواب سريع لسؤال محدد يغيّر القرار. استخدمه لتأكيد الخطر أو توجيه العلاج، لكن لا تجعل صورة ضعيفة أو غير مكتملة تطمئنك كاذبًا.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-66-cefazolin",
    "number": 66,
    "title": "Cefazolin",
    "chapter": "POCUS & Visual Diagnosis",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map",
      "Rosh Rapid Review PDF text/visual support"
    ],
    "core": [
      "Cefazolin is a key antibiotic for skin flora coverage and open fracture prophylaxis."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Open fractures need early antibiotics.",
      "Cefazolin covers common skin flora.",
      "Does not cover MRSA reliably.",
      "Add broader coverage depending contamination pattern.",
      "Timing matters in open fractures."
    ],
    "traps": [
      "❌ Delaying antibiotics for open fracture until after X-ray or OR."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Cefazolin: السونار في الطوارئ ليس تصويرًا كاملًا، بل جواب سريع لسؤال محدد يغيّر القرار. استخدمه لتأكيد الخطر أو توجيه العلاج، لكن لا تجعل صورة ضعيفة أو غير مكتملة تطمئنك كاذبًا.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-67-clindamycin",
    "number": 67,
    "title": "Clindamycin",
    "chapter": "POCUS & Visual Diagnosis",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map",
      "Rosh Rapid Review PDF text/visual support"
    ],
    "core": [
      "Clindamycin covers many gram-positive and anaerobic organisms and is important for toxin suppression in necrotizing infections."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Useful for toxin suppression.",
      "Add in necrotizing fasciitis/toxic shock.",
      "Covers anaerobes and gram-positive organisms.",
      "High C. difficile risk.",
      "Resistance patterns matter."
    ],
    "traps": [
      "❌ Treating suspected necrotizing fasciitis with clindamycin alone instead of broad coverage plus surgery."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Clindamycin: السونار في الطوارئ ليس تصويرًا كاملًا، بل جواب سريع لسؤال محدد يغيّر القرار. استخدمه لتأكيد الخطر أو توجيه العلاج، لكن لا تجعل صورة ضعيفة أو غير مكتملة تطمئنك كاذبًا.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-68-trimethoprim-sulfamethoxazole",
    "number": 68,
    "title": "Trimethoprim-Sulfamethoxazole",
    "chapter": "POCUS & Visual Diagnosis",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map",
      "Rosh Rapid Review PDF text/visual support"
    ],
    "core": [
      "TMP-SMX is commonly used for community-associated MRSA skin infections and some urinary infections, but it has important renal/electrolyte cautions."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Covers many CA-MRSA strains.",
      "Watch hyperkalemia.",
      "Less reliable for strep cellulitis alone.",
      "Important for PCP treatment.",
      "Warfarin interaction matters."
    ],
    "traps": [
      "❌ Giving TMP-SMX to renal failure patient on ACE inhibitor without considering hyperkalemia."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Trimethoprim-Sulfamethoxazole: السونار في الطوارئ ليس تصويرًا كاملًا، بل جواب سريع لسؤال محدد يغيّر القرار. استخدمه لتأكيد الخطر أو توجيه العلاج، لكن لا تجعل صورة ضعيفة أو غير مكتملة تطمئنك كاذبًا.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-69-nitrofurantoin",
    "number": 69,
    "title": "Nitrofurantoin",
    "chapter": "POCUS & Visual Diagnosis",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map",
      "Rosh Rapid Review PDF text/visual support"
    ],
    "core": [
      "Nitrofurantoin is for uncomplicated lower UTI, not pyelonephritis or urosepsis."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Good for uncomplicated cystitis.",
      "Not for pyelonephritis.",
      "Not for urosepsis.",
      "Renal function matters.",
      "Minimal tissue penetration."
    ],
    "traps": [
      "❌ Treating febrile flank pain pyelonephritis with nitrofurantoin."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Nitrofurantoin: السونار في الطوارئ ليس تصويرًا كاملًا، بل جواب سريع لسؤال محدد يغيّر القرار. استخدمه لتأكيد الخطر أو توجيه العلاج، لكن لا تجعل صورة ضعيفة أو غير مكتملة تطمئنك كاذبًا.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-70-sti-core-ceftriaxone-doxycycline-azithromycin-concepts",
    "number": 70,
    "title": "Sti Core: Ceftriaxone + Doxycycline / Azithromycin Concepts",
    "chapter": "POCUS & Visual Diagnosis",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Many ED STI regimens combine treatment for gonorrhea and chlamydia because coinfection is common and test results may not be immediately available."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Gonorrhea and chlamydia often treated together.",
      "PID needs anaerobic consideration.",
      "Treat partners/follow-up matters.",
      "Pregnancy changes antibiotic choice.",
      "Sexual assault prophylaxis follows protocol."
    ],
    "traps": [
      "❌ Treating PID with only gonorrhea coverage and forgetting chlamydia/anaerobes.",
      "EM Drug Handbook Progress",
      "Chapters 71–80",
      "Oxytocin",
      "Misoprostol",
      "Methylergonovine"
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Sti Core: Ceftriaxone + Doxycycline / Azithromycin Concepts: السونار في الطوارئ ليس تصويرًا كاملًا، بل جواب سريع لسؤال محدد يغيّر القرار. استخدمه لتأكيد الخطر أو توجيه العلاج، لكن لا تجعل صورة ضعيفة أو غير مكتملة تطمئنك كاذبًا.",
    "visualHints": [
      {
        "id": "pdf-heart-score-p25-4",
        "src": "/visual-assets/topics/pdf-heart-score-p25-4.jpg",
        "title": "HEART Score",
        "type": "Algorithm / table / high-yield summary",
        "topic": "HEART Score",
        "needsReview": true
      },
      {
        "id": "pdf-pretest-probability-scoring-for-heparin-induced-thrombocytopenia-the-4-p550-2",
        "src": "/visual-assets/topics/pdf-pretest-probability-scoring-for-heparin-induced-thrombocytopenia-the-4-p550-2.jpg",
        "title": "Pretest Probability Scoring for Heparin-Induced Thrombocytopenia (The 4T Score)",
        "type": "Algorithm / table / high-yield summary",
        "topic": "Pretest Probability Scoring for Heparin-Induced Thrombocytopenia (The 4T Score)",
        "needsReview": true
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-71-oxytocin",
    "number": 71,
    "title": "Oxytocin",
    "chapter": "POCUS & Visual Diagnosis",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Oxytocin is first-line uterotonic therapy for postpartum hemorrhage due to uterine atony."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Uterine atony is the most common PPH cause.",
      "Boggy uterus → massage + oxytocin.",
      "Maternal resuscitation comes first.",
      "Do not give rapid uncontrolled IV bolus.",
      "Persistent bleeding with firm uterus suggests trauma/tissue/thrombin."
    ],
    "traps": [
      "❌ Treating postpartum hemorrhage with fluids only and forgetting uterine massage/uterotonics."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Oxytocin: السونار في الطوارئ ليس تصويرًا كاملًا، بل جواب سريع لسؤال محدد يغيّر القرار. استخدمه لتأكيد الخطر أو توجيه العلاج، لكن لا تجعل صورة ضعيفة أو غير مكتملة تطمئنك كاذبًا.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-72-misoprostol",
    "number": 72,
    "title": "MIsoprostol",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Misoprostol is a uterotonic used in postpartum hemorrhage and pregnancy-related management pathways."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Misoprostol is a uterotonic.",
      "Multiple routes available.",
      "Fever/chills are common.",
      "Useful adjunct in PPH protocols.",
      "Follow OB/local protocol."
    ],
    "traps": [
      "❌ Forgetting that fever after misoprostol may be medication-related but still must evaluate infection if clinically concerning."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في MIsoprostol: فكّر كطبيب طوارئ. ابدأ بما يقتل الآن، ابحث عن العلامات الحمراء، ثبّت المريض قبل التفاصيل، ثم اختر الفحص أو العلاج الذي يغيّر القرار بأسرع وأأمن طريقة.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-73-methylergonovine",
    "number": 73,
    "title": "Methylergonovine",
    "chapter": "POCUS & Visual Diagnosis",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Methylergonovine causes strong uterine contraction but is contraindicated in hypertension and preeclampsia."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Hypertension",
      "Preeclampsia/eclampsia",
      "Significant cardiovascular disease caution",
      "Side Effects",
      "Nausea/vomiting",
      "Vasospasm",
      "Chest pain rarely"
    ],
    "pearls": [
      "Strong uterotonic.",
      "Avoid in hypertension.",
      "Avoid in preeclampsia.",
      "Used for uterine atony.",
      "Check BP before giving."
    ],
    "traps": [
      "❌ Giving methylergonovine to a postpartum patient with severe hypertension/preeclampsia."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Methylergonovine: السونار في الطوارئ ليس تصويرًا كاملًا، بل جواب سريع لسؤال محدد يغيّر القرار. استخدمه لتأكيد الخطر أو توجيه العلاج، لكن لا تجعل صورة ضعيفة أو غير مكتملة تطمئنك كاذبًا.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-74-carboprost",
    "number": 74,
    "title": "Carboprost",
    "chapter": "POCUS & Visual Diagnosis",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Carboprost is a uterotonic used for postpartum hemorrhage, but it can cause bronchospasm and should be avoided or used with extreme caution in asthma."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Carboprost is a uterotonic.",
      "Avoid in asthma.",
      "Diarrhea is common.",
      "Used in PPH protocols.",
      "Oxytocin remains first-line."
    ],
    "traps": [
      "❌ Giving carboprost to an asthmatic postpartum hemorrhage patient."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Carboprost: السونار في الطوارئ ليس تصويرًا كاملًا، بل جواب سريع لسؤال محدد يغيّر القرار. استخدمه لتأكيد الخطر أو توجيه العلاج، لكن لا تجعل صورة ضعيفة أو غير مكتملة تطمئنك كاذبًا.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-75-magnesium-sulfate-in-ob",
    "number": 75,
    "title": "Magnesium Sulfate In Ob",
    "chapter": "POCUS & Visual Diagnosis",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Magnesium sulfate is first-line for seizure treatment and prevention in eclampsia and preeclampsia with severe features."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Eclampsia",
      "Preeclampsia with severe features",
      "Seizure prophylaxis in high-risk OB patients"
    ],
    "pearls": [
      "Eclampsia gets magnesium.",
      "Monitor reflexes and respirations.",
      "Calcium gluconate treats magnesium toxicity.",
      "Magnesium is not primarily for BP control.",
      "Delivery planning is definitive OB management, but stabilize mother first."
    ],
    "traps": [
      "❌ Treating eclamptic seizure with benzodiazepines only while forgetting magnesium."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Magnesium Sulfate In Ob: السونار في الطوارئ ليس تصويرًا كاملًا، بل جواب سريع لسؤال محدد يغيّر القرار. استخدمه لتأكيد الخطر أو توجيه العلاج، لكن لا تجعل صورة ضعيفة أو غير مكتملة تطمئنك كاذبًا.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-76-rho-d-immune-globulin",
    "number": 76,
    "title": "Rho(D) Immune Globulin",
    "chapter": "POCUS & Visual Diagnosis",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Rho(D) immune globulin prevents Rh sensitization in Rh-negative pregnant patients exposed to Rh-positive fetal blood."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Depends on gestational age and local protocol."
    ],
    "pearls": [
      "Rh status matters in pregnancy bleeding.",
      "Give to Rh-negative patients with sensitizing events.",
      "Trauma in pregnancy can be sensitizing.",
      "Dose depends on gestational age.",
      "Do not forget ectopic/miscarriage contexts."
    ],
    "traps": [
      "❌ Managing early pregnancy bleeding without checking Rh status."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Rho(D) Immune Globulin: السونار في الطوارئ ليس تصويرًا كاملًا، بل جواب سريع لسؤال محدد يغيّر القرار. استخدمه لتأكيد الخطر أو توجيه العلاج، لكن لا تجعل صورة ضعيفة أو غير مكتملة تطمئنك كاذبًا.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-77-levetiracetam",
    "number": 77,
    "title": "Levetiracetam",
    "chapter": "POCUS & Visual Diagnosis",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Levetiracetam is a commonly used second-line antiseizure medication after benzodiazepines in status epilepticus."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Common second-line status medication.",
      "Few interactions.",
      "Hemodynamically stable.",
      "Renal adjustment matters.",
      "Does not replace benzodiazepines for active convulsion."
    ],
    "traps": [
      "❌ Giving levetiracetam first while patient is actively convulsing and delaying benzodiazepine."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Levetiracetam: السونار في الطوارئ ليس تصويرًا كاملًا، بل جواب سريع لسؤال محدد يغيّر القرار. استخدمه لتأكيد الخطر أو توجيه العلاج، لكن لا تجعل صورة ضعيفة أو غير مكتملة تطمئنك كاذبًا.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-78-fosphenytoin-phenytoin",
    "number": 78,
    "title": "Fosphenytoin / Phenytoin",
    "chapter": "POCUS & Visual Diagnosis",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Fosphenytoin is used as a second-line antiseizure medication after benzodiazepines in status epilepticus."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Second-line after benzodiazepines.",
      "Monitor cardiac rhythm/BP during infusion.",
      "Many drug interactions.",
      "Fosphenytoin safer IV than phenytoin.",
      "Avoid as sole therapy for active status without benzodiazepine."
    ],
    "traps": [
      "❌ Rapid phenytoin infusion causing hypotension/arrhythmia."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Fosphenytoin / Phenytoin: السونار في الطوارئ ليس تصويرًا كاملًا، بل جواب سريع لسؤال محدد يغيّر القرار. استخدمه لتأكيد الخطر أو توجيه العلاج، لكن لا تجعل صورة ضعيفة أو غير مكتملة تطمئنك كاذبًا.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-79-valproate",
    "number": 79,
    "title": "Valproate",
    "chapter": "POCUS & Visual Diagnosis",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map",
      "Rosh Rapid Review PDF text/visual support"
    ],
    "core": [
      "Valproate is an effective antiseizure medication used in status epilepticus pathways, migraine treatment, and some psychiatric contexts, but it has major pregnancy and liver cautions."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Avoid in pregnancy when possible.",
      "Can cause hyperammonemia.",
      "Liver toxicity matters.",
      "Check platelets/liver context."
    ],
    "traps": [
      "❌ Choosing valproate in a pregnant seizure patient when safer alternatives exist and eclampsia must be considered."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Valproate: السونار في الطوارئ ليس تصويرًا كاملًا، بل جواب سريع لسؤال محدد يغيّر القرار. استخدمه لتأكيد الخطر أو توجيه العلاج، لكن لا تجعل صورة ضعيفة أو غير مكتملة تطمئنك كاذبًا.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-80-lorazepam",
    "number": 80,
    "title": "Lorazepam",
    "chapter": "POCUS & Visual Diagnosis",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map",
      "Rosh Rapid Review PDF text/visual support"
    ],
    "core": [
      "Lorazepam is a first-line benzodiazepine for active seizures and status epilepticus when IV access is available."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "First-line for active seizure.",
      "Do not underdose status epilepticus.",
      "Prepare airway support.",
      "Add second-line antiseizure medication after benzodiazepine.",
      "Alcohol withdrawal responds to benzodiazepines."
    ],
    "traps": [
      "❌ Giving small repeated underdosed benzodiazepines while status epilepticus continues.",
      "EM Drug Handbook Progress",
      "Chapters 81–90",
      "Diazepam",
      "Midazolam Review",
      "Phenobarbital"
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Lorazepam: السونار في الطوارئ ليس تصويرًا كاملًا، بل جواب سريع لسؤال محدد يغيّر القرار. استخدمه لتأكيد الخطر أو توجيه العلاج، لكن لا تجعل صورة ضعيفة أو غير مكتملة تطمئنك كاذبًا.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-91-pantoprazole",
    "number": 91,
    "title": "Pantoprazole",
    "chapter": "Emergency Drug Handbook",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Pantoprazole suppresses gastric acid production.",
      "In Emergency Medicine, it is commonly used in",
      "Upper GI bleeding"
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Commonly used in UGIB.",
      "Does not replace endoscopy.",
      "Acid suppression helps clot stability.",
      "Generally safe.",
      "Often started before GI consultation."
    ],
    "traps": [
      "❌ Assuming pantoprazole alone treats actively bleeding ulcer."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Pantoprazole: لا تحفظ الدواء كاسم فقط. افهم متى يفيد، متى يضر، ما الجرعة والطريق، وما الذي يجب مراقبته بعد إعطائه. في الطوارئ، خطأ الجرعة أو اختيار الدواء قد يغيّر مصير المريض.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-92-octreotide",
    "number": 92,
    "title": "Octreotide",
    "chapter": "Emergency Drug Handbook",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Octreotide is one of the most important drugs in variceal bleeding."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Variceal bleed → octreotide.",
      "Portal pressure decreases.",
      "Combine with antibiotics.",
      "Endoscopy still required.",
      "Cirrhosis + hematemesis = assume varices until proven otherwise."
    ],
    "traps": [
      "❌ Treating variceal hemorrhage with PPI alone."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Octreotide: لا تحفظ الدواء كاسم فقط. افهم متى يفيد، متى يضر، ما الجرعة والطريق، وما الذي يجب مراقبته بعد إعطائه. في الطوارئ، خطأ الجرعة أو اختيار الدواء قد يغيّر مصير المريض.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-93-lactulose",
    "number": 93,
    "title": "Lactulose",
    "chapter": "Emergency Drug Handbook",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map",
      "Rosh Rapid Review PDF text/visual support"
    ],
    "core": [
      "Lactulose treats hepatic encephalopathy."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Treats hepatic encephalopathy.",
      "Ammonia reduction is goal.",
      "Excess dosing causes dehydration.",
      "Mental status improvement is endpoint.",
      "Search for precipitating cause."
    ],
    "traps": [
      "❌ Giving lactulose but ignoring GI bleed/infection as trigger."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Lactulose: لا تحفظ الدواء كاسم فقط. افهم متى يفيد، متى يضر، ما الجرعة والطريق، وما الذي يجب مراقبته بعد إعطائه. في الطوارئ، خطأ الجرعة أو اختيار الدواء قد يغيّر مصير المريض.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-94-albumin",
    "number": 94,
    "title": "Albumin",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map",
      "Rosh Rapid Review PDF text/visual support"
    ],
    "core": [
      "Albumin expands intravascular volume.",
      "Common Uses",
      "Sbp"
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Common in cirrhosis.",
      "Used after large paracentesis.",
      "Not routine replacement fluid for everyone.",
      "Expensive.",
      "Indication matters."
    ],
    "traps": [
      "❌ Using albumin as routine fluid resuscitation for every shock patient."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Albumin: فكّر كطبيب طوارئ. ابدأ بما يقتل الآن، ابحث عن العلامات الحمراء، ثبّت المريض قبل التفاصيل، ثم اختر الفحص أو العلاج الذي يغيّر القرار بأسرع وأأمن طريقة.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-95-lactated-ringer-s",
    "number": 95,
    "title": "Lactated Ringer’S",
    "chapter": "Emergency Drug Handbook",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "LR is one of the best resuscitation fluids."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Balanced crystalloid.",
      "Often preferred over NS.",
      "Good resuscitation fluid.",
      "Small potassium content rarely causes hyperkalemia.",
      "Useful in DKA."
    ],
    "traps": [
      "❌ Avoiding LR in hyperkalemia solely because it contains potassium."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Lactated Ringer’S: لا تحفظ الدواء كاسم فقط. افهم متى يفيد، متى يضر، ما الجرعة والطريق، وما الذي يجب مراقبته بعد إعطائه. في الطوارئ، خطأ الجرعة أو اختيار الدواء قد يغيّر مصير المريض.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-96-normal-saline",
    "number": 96,
    "title": "Normal Saline",
    "chapter": "Emergency Drug Handbook",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map",
      "Rosh Rapid Review PDF text/visual support"
    ],
    "core": [
      "Normal Saline remains important but has limitations.",
      "Uses",
      "Hypovolemia"
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Widely available.",
      "Good resuscitation fluid.",
      "Excessive volumes can cause acidosis.",
      "Compare with LR.",
      "Fluid choice depends on patient."
    ],
    "traps": [
      "❌ Massive saline administration without monitoring acid-base status."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Normal Saline: لا تحفظ الدواء كاسم فقط. افهم متى يفيد، متى يضر، ما الجرعة والطريق، وما الذي يجب مراقبته بعد إعطائه. في الطوارئ، خطأ الجرعة أو اختيار الدواء قد يغيّر مصير المريض.",
    "visualHints": [
      {
        "id": "pdf-causes-of-abnormal-uterine-bleeding-p456-2",
        "src": "/visual-assets/topics/pdf-causes-of-abnormal-uterine-bleeding-p456-2.jpg",
        "title": "Causes of Abnormal Uterine Bleeding",
        "type": "Clinical visual",
        "topic": "Causes of Abnormal Uterine Bleeding",
        "needsReview": true
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-97-potassium-replacement",
    "number": 97,
    "title": "Potassium Replacement",
    "chapter": "Renal, Electrolytes & Acid-Base",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Hypokalemia kills through arrhythmias."
    ],
    "presentation": [
      "U waves",
      "QT prolongation appearance",
      "Arrhythmias",
      "Important Rule",
      "Correct magnesium too."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Severe hypokalemia is dangerous.",
      "Magnesium matters.",
      "ECG monitoring often required.",
      "Oral replacement preferred when possible.",
      "DKA frequently causes potassium problems."
    ],
    "traps": [
      "❌ Replacing potassium without checking magnesium."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Potassium Replacement: ارتفاع أو اضطراب البوتاسيوم قد يقتل بسبب تأثيره على كهرباء القلب. إذا ظهر ECG خطير مثل QRS واسع أو T waves حادة أو بطء شديد، عالج القلب أولًا ولا تنتظر الصورة الكاملة.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-98-diltiazem",
    "number": 98,
    "title": "Diltiazem",
    "chapter": "Emergency Drug Handbook",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map",
      "Rosh Rapid Review PDF text/visual support"
    ],
    "core": [
      "Diltiazem slows AV node conduction.",
      "Uses",
      "Atrial Fibrillation"
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Excellent AF rate control drug.",
      "Watch BP.",
      "AV nodal blocker.",
      "Useful in flutter.",
      "Not for unstable tachyarrhythmia."
    ],
    "traps": [
      "❌ Giving diltiazem to unstable AF patient instead of cardioversion."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Diltiazem: لا تحفظ الدواء كاسم فقط. افهم متى يفيد، متى يضر، ما الجرعة والطريق، وما الذي يجب مراقبته بعد إعطائه. في الطوارئ، خطأ الجرعة أو اختيار الدواء قد يغيّر مصير المريض.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-99-metoprolol",
    "number": 99,
    "title": "Metoprolol",
    "chapter": "Emergency Drug Handbook",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map",
      "Rosh Rapid Review PDF text/visual support"
    ],
    "core": [
      "Metoprolol reduces heart rate and myocardial oxygen demand.",
      "Uses",
      "AF rate control"
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "β1 selective.",
      "Useful in AF.",
      "Useful in ACS.",
      "Avoid cardiogenic shock.",
      "Monitor HR/BP."
    ],
    "traps": [
      "❌ Giving metoprolol to hypotensive cardiogenic shock."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Metoprolol: لا تحفظ الدواء كاسم فقط. افهم متى يفيد، متى يضر، ما الجرعة والطريق، وما الذي يجب مراقبته بعد إعطائه. في الطوارئ، خطأ الجرعة أو اختيار الدواء قد يغيّر مصير المريض.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-100-esmolol",
    "number": 100,
    "title": "Esmolol",
    "chapter": "Emergency Drug Handbook",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map",
      "Rosh Rapid Review PDF text/visual support"
    ],
    "core": [
      "Esmolol is the emergency physician’s beta blocker."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Very short half-life.",
      "Excellent for dissection.",
      "Easy titration.",
      "Monitor BP closely.",
      "Preferred in many ICU settings."
    ],
    "traps": [
      "❌ Starting vasodilator alone in aortic dissection before heart-rate control.",
      "Em Drug Handbook Progress",
      "Completed Sections",
      "RSI Drugs",
      "Sedatives",
      "Analgesics"
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Esmolol: لا تحفظ الدواء كاسم فقط. افهم متى يفيد، متى يضر، ما الجرعة والطريق، وما الذي يجب مراقبته بعد إعطائه. في الطوارئ، خطأ الجرعة أو اختيار الدواء قد يغيّر مصير المريض.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-141-norepinephrine-infusion-mastery",
    "number": 141,
    "title": "Norepinephrine Infusion Mastery",
    "chapter": "Critical Care & Infusions",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Norepinephrine is the king of vasopressors.",
      "If you master one ICU infusion in Emergency Medicine, it should be norepinephrine.",
      "Physiologic Analogy"
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "First-line septic shock pressor.",
      "Alpha effects dominate.",
      "Peripheral administration may be acceptable temporarily.",
      "MAP target usually ≥65.",
      "Pressors never replace source control."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Norepinephrine Infusion Mastery: لا تحفظ الدواء كاسم فقط. افهم متى يفيد، متى يضر، ما الجرعة والطريق، وما الذي يجب مراقبته بعد إعطائه. في الطوارئ، خطأ الجرعة أو اختيار الدواء قد يغيّر مصير المريض.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-142-epinephrine-infusion-mastery",
    "number": 142,
    "title": "Epinephrine Infusion Mastery",
    "chapter": "Critical Care & Infusions",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Epinephrine is both",
      "Vasopressor",
      "Inotrope"
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "First-line in anaphylaxis.",
      "Raises lactate.",
      "Strong beta effects.",
      "Arrhythmias common.",
      "Excellent rescue vasopressor."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Epinephrine Infusion Mastery: لا تحفظ الدواء كاسم فقط. افهم متى يفيد، متى يضر، ما الجرعة والطريق، وما الذي يجب مراقبته بعد إعطائه. في الطوارئ، خطأ الجرعة أو اختيار الدواء قد يغيّر مصير المريض.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-143-vasopressin-infusion-mastery",
    "number": 143,
    "title": "Vasopressin Infusion Mastery",
    "chapter": "Critical Care & Infusions",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Vasopressin is the vasopressor that works outside catecholamine receptors.",
      "Why Important?",
      "Septic shock patients become catecholamine resistant."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Non-catecholamine pressor.",
      "Useful in vasoplegia.",
      "Fixed-dose infusion.",
      "Added to norepinephrine.",
      "Watch ischemia."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Vasopressin Infusion Mastery: لا تعالج الرقم فقط؛ عالج الفسيولوجيا. اسأل هل المشكلة سوائل، أو قلب، أو انسداد، أو توسع أوعية؟ ثم اختر السوائل أو الضواغط أو التهوية أو الإجراء المناسب مع إعادة تقييم مستمرة.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-144-phenylephrine-infusion",
    "number": 144,
    "title": "Phenylephrine Infusion",
    "chapter": "Critical Care & Infusions",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Pure alpha agonist.",
      "No meaningful beta activity.",
      "Analogy"
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Pure alpha drug.",
      "Reflex bradycardia common.",
      "May decrease CO.",
      "Useful when tachycardia exists.",
      "Avoid in severe pump failure."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Phenylephrine Infusion: لا تعالج الرقم فقط؛ عالج الفسيولوجيا. اسأل هل المشكلة سوائل، أو قلب، أو انسداد، أو توسع أوعية؟ ثم اختر السوائل أو الضواغط أو التهوية أو الإجراء المناسب مع إعادة تقييم مستمرة.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-145-dopamine-infusion",
    "number": 145,
    "title": "Dopamine Infusion",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Historically popular.",
      "Now much less favored.",
      "Why?"
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Not first-line septic shock.",
      "Arrhythmogenic.",
      "Avoid tachycardia.",
      "No renal-protective role.",
      "Rarely preferred today."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Dopamine Infusion: لا تعالج الرقم فقط؛ عالج الفسيولوجيا. اسأل هل المشكلة سوائل، أو قلب، أو انسداد، أو توسع أوعية؟ ثم اختر السوائل أو الضواغط أو التهوية أو الإجراء المناسب مع إعادة تقييم مستمرة.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-146-dobutamine-infusion",
    "number": 146,
    "title": "Dobutamine Infusion",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "The “weak heart” drug.",
      "Analogy",
      "Norepinephrine squeezes pipes."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Inotrope.",
      "Improves contractility.",
      "Can lower BP.",
      "Combine with pressor if needed.",
      "Great for low-output shock."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Dobutamine Infusion: لا تعالج الرقم فقط؛ عالج الفسيولوجيا. اسأل هل المشكلة سوائل، أو قلب، أو انسداد، أو توسع أوعية؟ ثم اختر السوائل أو الضواغط أو التهوية أو الإجراء المناسب مع إعادة تقييم مستمرة.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-147-propofol-infusion",
    "number": 147,
    "title": "Propofol Infusion",
    "chapter": "Critical Care & Infusions",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Most common ICU sedative.",
      "Benefits",
      "Rapid onset"
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Excellent sedation.",
      "No analgesia.",
      "Causes hypotension.",
      "Monitor triglycerides if prolonged.",
      "Watch for infusion syndrome."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Propofol Infusion: لا تحفظ الدواء كاسم فقط. افهم متى يفيد، متى يضر، ما الجرعة والطريق، وما الذي يجب مراقبته بعد إعطائه. في الطوارئ، خطأ الجرعة أو اختيار الدواء قد يغيّر مصير المريض.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-148-midazolam-infusion",
    "number": 148,
    "title": "MIdazolam Infusion",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Benzodiazepine infusion for long-term sedation.",
      "Uses",
      "Mechanical Ventilation"
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Longer recovery than propofol.",
      "Useful for seizures.",
      "Causes respiratory depression.",
      "Delirium risk.",
      "Titrate carefully."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في MIdazolam Infusion: لا تعالج الرقم فقط؛ عالج الفسيولوجيا. اسأل هل المشكلة سوائل، أو قلب، أو انسداد، أو توسع أوعية؟ ثم اختر السوائل أو الضواغط أو التهوية أو الإجراء المناسب مع إعادة تقييم مستمرة.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-149-dexmedetomidine-infusion",
    "number": 149,
    "title": "Dexmedetomidine Infusion",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Sedation without major respiratory depression.",
      "Why ICU Loves It",
      "Patient remains"
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Minimal respiratory suppression.",
      "Excellent extubation sedation.",
      "Bradycardia common.",
      "Not strong analgesia.",
      "ICU favorite."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Dexmedetomidine Infusion: لا تعالج الرقم فقط؛ عالج الفسيولوجيا. اسأل هل المشكلة سوائل، أو قلب، أو انسداد، أو توسع أوعية؟ ثم اختر السوائل أو الضواغط أو التهوية أو الإجراء المناسب مع إعادة تقييم مستمرة.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-150-ketamine-infusion",
    "number": 150,
    "title": "Ketamine Infusion",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "The Swiss Army Knife of Emergency Medicine.",
      "Uses",
      "Analgesia"
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Excellent analgesic.",
      "Excellent sedative.",
      "Good for hypotension.",
      "Good for asthma.",
      "Highly versatile.",
      "Chapters 151–160",
      "Fentanyl Infusion",
      "Hydromorphone Infusion"
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Ketamine Infusion: لا تحفظ الدواء كاسم فقط. افهم متى يفيد، متى يضر، ما الجرعة والطريق، وما الذي يجب مراقبته بعد إعطائه. في الطوارئ، خطأ الجرعة أو اختيار الدواء قد يغيّر مصير المريض.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-151-fentanyl-infusion",
    "number": 151,
    "title": "Fentanyl Infusion",
    "chapter": "Critical Care & Infusions",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Fentanyl is the most commonly used ICU analgesic infusion.",
      "Physiologic Analogy",
      "Think of sedation and analgesia as two separate systems."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Analgesia first.",
      "Common ventilator infusion.",
      "Less hypotension than morphine.",
      "Rapid onset.",
      "Watch respiratory depression."
    ],
    "traps": [
      "❌ Deep sedation without adequate analgesia."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Fentanyl Infusion: لا تعالج الرقم فقط؛ عالج الفسيولوجيا. اسأل هل المشكلة سوائل، أو قلب، أو انسداد، أو توسع أوعية؟ ثم اختر السوائل أو الضواغط أو التهوية أو الإجراء المناسب مع إعادة تقييم مستمرة.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-152-hydromorphone-infusion",
    "number": 152,
    "title": "Hydromorphone Infusion",
    "chapter": "Critical Care & Infusions",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Hydromorphone is a powerful opioid analgesic used in selected ICU patients.",
      "Advantages",
      "Potent analgesia"
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Strong opioid.",
      "Respiratory depression possible.",
      "Excellent severe pain control.",
      "Monitor sedation closely.",
      "Longer duration than fentanyl."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Hydromorphone Infusion: لا تعالج الرقم فقط؛ عالج الفسيولوجيا. اسأل هل المشكلة سوائل، أو قلب، أو انسداد، أو توسع أوعية؟ ثم اختر السوائل أو الضواغط أو التهوية أو الإجراء المناسب مع إعادة تقييم مستمرة.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-153-nicardipine-infusion",
    "number": 153,
    "title": "Nicardipine Infusion",
    "chapter": "Critical Care & Infusions",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Nicardipine is one of the most important ICU antihypertensive infusions.",
      "Uses",
      "Intracranial Hemorrhage"
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Excellent neuro ICU drug.",
      "Easy titration.",
      "Common stroke infusion.",
      "Watch hypotension.",
      "Lower BP gradually."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Nicardipine Infusion: لا تعالج الرقم فقط؛ عالج الفسيولوجيا. اسأل هل المشكلة سوائل، أو قلب، أو انسداد، أو توسع أوعية؟ ثم اختر السوائل أو الضواغط أو التهوية أو الإجراء المناسب مع إعادة تقييم مستمرة.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-154-clevidipine-infusion",
    "number": 154,
    "title": "Clevidipine Infusion",
    "chapter": "Critical Care & Infusions",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Clevidipine is the Formula 1 version of nicardipine.",
      "Ultra-short acting.",
      "Ultra-titratable."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Ultra-short acting.",
      "Excellent titration.",
      "Neuro ICU favorite.",
      "Rapid offset.",
      "Ideal when minute-to-minute control needed."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Clevidipine Infusion: لا تعالج الرقم فقط؛ عالج الفسيولوجيا. اسأل هل المشكلة سوائل، أو قلب، أو انسداد، أو توسع أوعية؟ ثم اختر السوائل أو الضواغط أو التهوية أو الإجراء المناسب مع إعادة تقييم مستمرة.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-155-nitroprusside-infusion",
    "number": 155,
    "title": "Nitroprusside Infusion",
    "chapter": "Critical Care & Infusions",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Nitroprusside is one of the most powerful vasodilators in medicine."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Powerful vasodilator.",
      "Can cause cyanide toxicity.",
      "Continuous monitoring required.",
      "Rapid onset.",
      "Less common today."
    ],
    "traps": [
      "❌ Prolonged nitroprusside without toxicity awareness."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Nitroprusside Infusion: لا تعالج الرقم فقط؛ عالج الفسيولوجيا. اسأل هل المشكلة سوائل، أو قلب، أو انسداد، أو توسع أوعية؟ ثم اختر السوائل أو الضواغط أو التهوية أو الإجراء المناسب مع إعادة تقييم مستمرة.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-156-nitroglycerin-infusion",
    "number": 156,
    "title": "Nitroglycerin Infusion",
    "chapter": "Critical Care & Infusions",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Nitroglycerin is the king of hypertensive pulmonary edema treatment.",
      "Analogy",
      "Imagine reducing the amount of blood returning to a failing heart."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "RV Infarction",
      "Severe Hypotension",
      "PDE5 Inhibitors"
    ],
    "pearls": [
      "Excellent for flash pulmonary edema.",
      "Avoid RV infarction.",
      "Monitor BP closely.",
      "Great preload reduction.",
      "Common ED infusion."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Nitroglycerin Infusion: لا تعالج الرقم فقط؛ عالج الفسيولوجيا. اسأل هل المشكلة سوائل، أو قلب، أو انسداد، أو توسع أوعية؟ ثم اختر السوائل أو الضواغط أو التهوية أو الإجراء المناسب مع إعادة تقييم مستمرة.",
    "visualHints": [],
    "needsDoseVerification": true
  },
  {
    "id": "master-157-amiodarone-infusion",
    "number": 157,
    "title": "Amiodarone Infusion",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "One of the most versatile antiarrhythmics.",
      "Uses",
      "Ventricular Tachycardia"
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "ICU antiarrhythmic workhorse.",
      "Useful in VT.",
      "Useful in electrical storm.",
      "Watch QT.",
      "Watch BP."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Amiodarone Infusion: لا تحفظ الدواء كاسم فقط. افهم متى يفيد، متى يضر، ما الجرعة والطريق، وما الذي يجب مراقبته بعد إعطائه. في الطوارئ، خطأ الجرعة أو اختيار الدواء قد يغيّر مصير المريض.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-158-lidocaine-infusion",
    "number": 158,
    "title": "Lidocaine Infusion",
    "chapter": "Critical Care & Infusions",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Lidocaine remains valuable in ventricular arrhythmias.",
      "Uses",
      "Ventricular Tachycardia"
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Ventricular antiarrhythmic.",
      "Monitor neurologic status.",
      "Toxicity often begins neurologically.",
      "Useful in refractory VT.",
      "Know LAST physiology."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Lidocaine Infusion: لا تعالج الرقم فقط؛ عالج الفسيولوجيا. اسأل هل المشكلة سوائل، أو قلب، أو انسداد، أو توسع أوعية؟ ثم اختر السوائل أو الضواغط أو التهوية أو الإجراء المناسب مع إعادة تقييم مستمرة.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-159-esmolol-infusion",
    "number": 159,
    "title": "Esmolol Infusion",
    "chapter": "Critical Care & Infusions",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "The perfect ICU beta blocker.",
      "Why?",
      "Rapid on."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Ultra-short acting.",
      "Excellent for dissection.",
      "Easy titration.",
      "Monitor BP.",
      "Preferred in many critical situations."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Esmolol Infusion: لا تعالج الرقم فقط؛ عالج الفسيولوجيا. اسأل هل المشكلة سوائل، أو قلب، أو انسداد، أو توسع أوعية؟ ثم اختر السوائل أو الضواغط أو التهوية أو الإجراء المناسب مع إعادة تقييم مستمرة.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-160-icu-infusion-master-algorithms",
    "number": 160,
    "title": "Icu Infusion Master Algorithms",
    "chapter": "Critical Care & Infusions",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Icu Infusion Master Algorithms",
      "Algorithm 1",
      "Septic Shock",
      "Fluids",
      "Norepinephrine"
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Emergency medicine is risk management: do not miss the dangerous diagnosis.",
      "Normal early tests do not always exclude serious disease when the story is high-risk.",
      "Trends and reassessment are often more important than one isolated value."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Icu Infusion Master Algorithms: لا تعالج الرقم فقط؛ عالج الفسيولوجيا. اسأل هل المشكلة سوائل، أو قلب، أو انسداد، أو توسع أوعية؟ ثم اختر السوائل أو الضواغط أو التهوية أو الإجراء المناسب مع إعادة تقييم مستمرة.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-101-dexmedetomidine",
    "number": 101,
    "title": ": Dexmedetomidine",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      ": Dexmedetomidine is a high-yield emergency medicine topic; the first task is to identify whether it represents an immediately life-threatening problem.",
      "Prioritize ABCDE, vital signs, instability, red flags, and the safest next action before detailed diagnosis.",
      "Use pattern recognition, focused testing, early treatment, and repeated reassessment."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Emergency medicine is risk management: do not miss the dangerous diagnosis.",
      "Normal early tests do not always exclude serious disease when the story is high-risk.",
      "Trends and reassessment are often more important than one isolated value."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في : Dexmedetomidine: فكّر كطبيب طوارئ. ابدأ بما يقتل الآن، ابحث عن العلامات الحمراء، ثبّت المريض قبل التفاصيل، ثم اختر الفحص أو العلاج الذي يغيّر القرار بأسرع وأأمن طريقة.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-102-cisatracurium-nimbex",
    "number": 102,
    "title": ": Cisatracurium / Nimbex",
    "chapter": "Emergency Drug Handbook",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      ": Cisatracurium / Nimbex is a high-yield emergency medicine topic; the first task is to identify whether it represents an immediately life-threatening problem.",
      "Prioritize ABCDE, vital signs, instability, red flags, and the safest next action before detailed diagnosis.",
      "Use pattern recognition, focused testing, early treatment, and repeated reassessment."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Emergency medicine is risk management: do not miss the dangerous diagnosis.",
      "Normal early tests do not always exclude serious disease when the story is high-risk.",
      "Trends and reassessment are often more important than one isolated value."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في : Cisatracurium / Nimbex: لا تحفظ الدواء كاسم فقط. افهم متى يفيد، متى يضر، ما الجرعة والطريق، وما الذي يجب مراقبته بعد إعطائه. في الطوارئ، خطأ الجرعة أو اختيار الدواء قد يغيّر مصير المريض.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-103-vecuronium",
    "number": 103,
    "title": ": Vecuronium",
    "chapter": "Emergency Drug Handbook",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      ": Vecuronium is a high-yield emergency medicine topic; the first task is to identify whether it represents an immediately life-threatening problem.",
      "Prioritize ABCDE, vital signs, instability, red flags, and the safest next action before detailed diagnosis.",
      "Use pattern recognition, focused testing, early treatment, and repeated reassessment."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Emergency medicine is risk management: do not miss the dangerous diagnosis.",
      "Normal early tests do not always exclude serious disease when the story is high-risk.",
      "Trends and reassessment are often more important than one isolated value."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في : Vecuronium: لا تحفظ الدواء كاسم فقط. افهم متى يفيد، متى يضر، ما الجرعة والطريق، وما الذي يجب مراقبته بعد إعطائه. في الطوارئ، خطأ الجرعة أو اختيار الدواء قد يغيّر مصير المريض.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-104-nitroglycerin-infusion",
    "number": 104,
    "title": ": Nitroglycerin Infusion",
    "chapter": "Critical Care & Infusions",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      ": Nitroglycerin Infusion is a high-yield emergency medicine topic; the first task is to identify whether it represents an immediately life-threatening problem.",
      "Prioritize ABCDE, vital signs, instability, red flags, and the safest next action before detailed diagnosis.",
      "Use pattern recognition, focused testing, early treatment, and repeated reassessment."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Emergency medicine is risk management: do not miss the dangerous diagnosis.",
      "Normal early tests do not always exclude serious disease when the story is high-risk.",
      "Trends and reassessment are often more important than one isolated value."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في : Nitroglycerin Infusion: لا تعالج الرقم فقط؛ عالج الفسيولوجيا. اسأل هل المشكلة سوائل، أو قلب، أو انسداد، أو توسع أوعية؟ ثم اختر السوائل أو الضواغط أو التهوية أو الإجراء المناسب مع إعادة تقييم مستمرة.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-105-nitroprusside",
    "number": 105,
    "title": ": Nitroprusside",
    "chapter": "Emergency Drug Handbook",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      ": Nitroprusside is a high-yield emergency medicine topic; the first task is to identify whether it represents an immediately life-threatening problem.",
      "Prioritize ABCDE, vital signs, instability, red flags, and the safest next action before detailed diagnosis.",
      "Use pattern recognition, focused testing, early treatment, and repeated reassessment."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Emergency medicine is risk management: do not miss the dangerous diagnosis.",
      "Normal early tests do not always exclude serious disease when the story is high-risk.",
      "Trends and reassessment are often more important than one isolated value."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في : Nitroprusside: لا تحفظ الدواء كاسم فقط. افهم متى يفيد، متى يضر، ما الجرعة والطريق، وما الذي يجب مراقبته بعد إعطائه. في الطوارئ، خطأ الجرعة أو اختيار الدواء قد يغيّر مصير المريض.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-106-clevidipine",
    "number": 106,
    "title": ": Clevidipine",
    "chapter": "Emergency Drug Handbook",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      ": Clevidipine is a high-yield emergency medicine topic; the first task is to identify whether it represents an immediately life-threatening problem.",
      "Prioritize ABCDE, vital signs, instability, red flags, and the safest next action before detailed diagnosis.",
      "Use pattern recognition, focused testing, early treatment, and repeated reassessment."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Emergency medicine is risk management: do not miss the dangerous diagnosis.",
      "Normal early tests do not always exclude serious disease when the story is high-risk.",
      "Trends and reassessment are often more important than one isolated value."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في : Clevidipine: لا تحفظ الدواء كاسم فقط. افهم متى يفيد، متى يضر، ما الجرعة والطريق، وما الذي يجب مراقبته بعد إعطائه. في الطوارئ، خطأ الجرعة أو اختيار الدواء قد يغيّر مصير المريض.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-107-labetalol",
    "number": 107,
    "title": ": Labetalol",
    "chapter": "Emergency Drug Handbook",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      ": Labetalol is a high-yield emergency medicine topic; the first task is to identify whether it represents an immediately life-threatening problem.",
      "Prioritize ABCDE, vital signs, instability, red flags, and the safest next action before detailed diagnosis.",
      "Use pattern recognition, focused testing, early treatment, and repeated reassessment."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Emergency medicine is risk management: do not miss the dangerous diagnosis.",
      "Normal early tests do not always exclude serious disease when the story is high-risk.",
      "Trends and reassessment are often more important than one isolated value."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في : Labetalol: لا تحفظ الدواء كاسم فقط. افهم متى يفيد، متى يضر، ما الجرعة والطريق، وما الذي يجب مراقبته بعد إعطائه. في الطوارئ، خطأ الجرعة أو اختيار الدواء قد يغيّر مصير المريض.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-108-procainamide",
    "number": 108,
    "title": ": Procainamide",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      ": Procainamide is a high-yield emergency medicine topic; the first task is to identify whether it represents an immediately life-threatening problem.",
      "Prioritize ABCDE, vital signs, instability, red flags, and the safest next action before detailed diagnosis.",
      "Use pattern recognition, focused testing, early treatment, and repeated reassessment."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Emergency medicine is risk management: do not miss the dangerous diagnosis.",
      "Normal early tests do not always exclude serious disease when the story is high-risk.",
      "Trends and reassessment are often more important than one isolated value."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في : Procainamide: فكّر كطبيب طوارئ. ابدأ بما يقتل الآن، ابحث عن العلامات الحمراء، ثبّت المريض قبل التفاصيل، ثم اختر الفحص أو العلاج الذي يغيّر القرار بأسرع وأأمن طريقة.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-109-sotalol",
    "number": 109,
    "title": ": Sotalol",
    "chapter": "Emergency Drug Handbook",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      ": Sotalol is a high-yield emergency medicine topic; the first task is to identify whether it represents an immediately life-threatening problem.",
      "Prioritize ABCDE, vital signs, instability, red flags, and the safest next action before detailed diagnosis.",
      "Use pattern recognition, focused testing, early treatment, and repeated reassessment."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Emergency medicine is risk management: do not miss the dangerous diagnosis.",
      "Normal early tests do not always exclude serious disease when the story is high-risk.",
      "Trends and reassessment are often more important than one isolated value."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في : Sotalol: لا تحفظ الدواء كاسم فقط. افهم متى يفيد، متى يضر، ما الجرعة والطريق، وما الذي يجب مراقبته بعد إعطائه. في الطوارئ، خطأ الجرعة أو اختيار الدواء قد يغيّر مصير المريض.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-110-digoxin",
    "number": 110,
    "title": ": Digoxin",
    "chapter": "Emergency Drug Handbook",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      ": Digoxin is a high-yield emergency medicine topic; the first task is to identify whether it represents an immediately life-threatening problem.",
      "Prioritize ABCDE, vital signs, instability, red flags, and the safest next action before detailed diagnosis.",
      "Use pattern recognition, focused testing, early treatment, and repeated reassessment."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Emergency medicine is risk management: do not miss the dangerous diagnosis.",
      "Normal early tests do not always exclude serious disease when the story is high-risk.",
      "Trends and reassessment are often more important than one isolated value."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في : Digoxin: لا تحفظ الدواء كاسم فقط. افهم متى يفيد، متى يضر، ما الجرعة والطريق، وما الذي يجب مراقبته بعد إعطائه. في الطوارئ، خطأ الجرعة أو اختيار الدواء قد يغيّر مصير المريض.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-111-amoxicillin-clavulanate",
    "number": 111,
    "title": ": Amoxicillin-Clavulanate",
    "chapter": "Emergency Drug Handbook",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      ": Amoxicillin-Clavulanate is a high-yield emergency medicine topic; the first task is to identify whether it represents an immediately life-threatening problem.",
      "Prioritize ABCDE, vital signs, instability, red flags, and the safest next action before detailed diagnosis.",
      "Use pattern recognition, focused testing, early treatment, and repeated reassessment."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Emergency medicine is risk management: do not miss the dangerous diagnosis.",
      "Normal early tests do not always exclude serious disease when the story is high-risk.",
      "Trends and reassessment are often more important than one isolated value."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في : Amoxicillin-Clavulanate: لا تحفظ الدواء كاسم فقط. افهم متى يفيد، متى يضر، ما الجرعة والطريق، وما الذي يجب مراقبته بعد إعطائه. في الطوارئ، خطأ الجرعة أو اختيار الدواء قد يغيّر مصير المريض.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-112-linezolid",
    "number": 112,
    "title": ": Linezolid",
    "chapter": "Emergency Drug Handbook",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      ": Linezolid is a high-yield emergency medicine topic; the first task is to identify whether it represents an immediately life-threatening problem.",
      "Prioritize ABCDE, vital signs, instability, red flags, and the safest next action before detailed diagnosis.",
      "Use pattern recognition, focused testing, early treatment, and repeated reassessment."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Emergency medicine is risk management: do not miss the dangerous diagnosis.",
      "Normal early tests do not always exclude serious disease when the story is high-risk.",
      "Trends and reassessment are often more important than one isolated value."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في : Linezolid: لا تحفظ الدواء كاسم فقط. افهم متى يفيد، متى يضر، ما الجرعة والطريق، وما الذي يجب مراقبته بعد إعطائه. في الطوارئ، خطأ الجرعة أو اختيار الدواء قد يغيّر مصير المريض.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-113-daptomycin",
    "number": 113,
    "title": ": Daptomycin",
    "chapter": "Emergency Drug Handbook",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      ": Daptomycin is a high-yield emergency medicine topic; the first task is to identify whether it represents an immediately life-threatening problem.",
      "Prioritize ABCDE, vital signs, instability, red flags, and the safest next action before detailed diagnosis.",
      "Use pattern recognition, focused testing, early treatment, and repeated reassessment."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Emergency medicine is risk management: do not miss the dangerous diagnosis.",
      "Normal early tests do not always exclude serious disease when the story is high-risk.",
      "Trends and reassessment are often more important than one isolated value."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في : Daptomycin: لا تحفظ الدواء كاسم فقط. افهم متى يفيد، متى يضر، ما الجرعة والطريق، وما الذي يجب مراقبته بعد إعطائه. في الطوارئ، خطأ الجرعة أو اختيار الدواء قد يغيّر مصير المريض.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-114-colchicine",
    "number": 114,
    "title": ": Colchicine",
    "chapter": "Emergency Drug Handbook",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      ": Colchicine is a high-yield emergency medicine topic; the first task is to identify whether it represents an immediately life-threatening problem.",
      "Prioritize ABCDE, vital signs, instability, red flags, and the safest next action before detailed diagnosis.",
      "Use pattern recognition, focused testing, early treatment, and repeated reassessment."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Emergency medicine is risk management: do not miss the dangerous diagnosis.",
      "Normal early tests do not always exclude serious disease when the story is high-risk.",
      "Trends and reassessment are often more important than one isolated value."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في : Colchicine: لا تحفظ الدواء كاسم فقط. افهم متى يفيد، متى يضر، ما الجرعة والطريق، وما الذي يجب مراقبته بعد إعطائه. في الطوارئ، خطأ الجرعة أو اختيار الدواء قد يغيّر مصير المريض.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-115-colistin-polymyxin-e",
    "number": 115,
    "title": ": Colistin / Polymyxin E",
    "chapter": "Emergency Drug Handbook",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      ": Colistin / Polymyxin E is a high-yield emergency medicine topic; the first task is to identify whether it represents an immediately life-threatening problem.",
      "Prioritize ABCDE, vital signs, instability, red flags, and the safest next action before detailed diagnosis.",
      "Use pattern recognition, focused testing, early treatment, and repeated reassessment."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Emergency medicine is risk management: do not miss the dangerous diagnosis.",
      "Normal early tests do not always exclude serious disease when the story is high-risk.",
      "Trends and reassessment are often more important than one isolated value."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في : Colistin / Polymyxin E: لا تحفظ الدواء كاسم فقط. افهم متى يفيد، متى يضر، ما الجرعة والطريق، وما الذي يجب مراقبته بعد إعطائه. في الطوارئ، خطأ الجرعة أو اختيار الدواء قد يغيّر مصير المريض.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-116-desmopressin-ddavp",
    "number": 116,
    "title": ": Desmopressin / Ddavp",
    "chapter": "Emergency Drug Handbook",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      ": Desmopressin / Ddavp is a high-yield emergency medicine topic; the first task is to identify whether it represents an immediately life-threatening problem.",
      "Prioritize ABCDE, vital signs, instability, red flags, and the safest next action before detailed diagnosis.",
      "Use pattern recognition, focused testing, early treatment, and repeated reassessment."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Emergency medicine is risk management: do not miss the dangerous diagnosis.",
      "Normal early tests do not always exclude serious disease when the story is high-risk.",
      "Trends and reassessment are often more important than one isolated value."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في : Desmopressin / Ddavp: لا تحفظ الدواء كاسم فقط. افهم متى يفيد، متى يضر، ما الجرعة والطريق، وما الذي يجب مراقبته بعد إعطائه. في الطوارئ، خطأ الجرعة أو اختيار الدواء قد يغيّر مصير المريض.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-117-prothrombin-complex-concentrate-pcc",
    "number": 117,
    "title": ": Prothrombin Complex Concentrate / Pcc",
    "chapter": "Hematology & Transfusion",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      ": Prothrombin Complex Concentrate / Pcc is a high-yield emergency medicine topic; the first task is to identify whether it represents an immediately life-threatening problem.",
      "Prioritize ABCDE, vital signs, instability, red flags, and the safest next action before detailed diagnosis.",
      "Use pattern recognition, focused testing, early treatment, and repeated reassessment."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Emergency medicine is risk management: do not miss the dangerous diagnosis.",
      "Normal early tests do not always exclude serious disease when the story is high-risk.",
      "Trends and reassessment are often more important than one isolated value."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في : Prothrombin Complex Concentrate / Pcc: ابدأ بتحديد هل النزف أو التخثر يهدد الحياة. اعرف الدواء المسبب، قيّم الشدة، ثم اختر العكس أو النقل أو الإيقاف حسب الخطر والبروتوكول.",
    "visualHints": [
      {
        "id": "pdf-complex-regional-pain-syndrome-p274-2",
        "src": "/visual-assets/toxicology-antidotes/pdf-complex-regional-pain-syndrome-p274-2.jpg",
        "title": "Complex Regional Pain Syndrome",
        "type": "Diagnostic imaging visual",
        "topic": "Complex Regional Pain Syndrome",
        "needsReview": true
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-118-idarucizumab",
    "number": 118,
    "title": ": Idarucizumab",
    "chapter": "Emergency Drug Handbook",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      ": Idarucizumab is a high-yield emergency medicine topic; the first task is to identify whether it represents an immediately life-threatening problem.",
      "Prioritize ABCDE, vital signs, instability, red flags, and the safest next action before detailed diagnosis.",
      "Use pattern recognition, focused testing, early treatment, and repeated reassessment."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Emergency medicine is risk management: do not miss the dangerous diagnosis.",
      "Normal early tests do not always exclude serious disease when the story is high-risk.",
      "Trends and reassessment are often more important than one isolated value."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في : Idarucizumab: لا تحفظ الدواء كاسم فقط. افهم متى يفيد، متى يضر، ما الجرعة والطريق، وما الذي يجب مراقبته بعد إعطائه. في الطوارئ، خطأ الجرعة أو اختيار الدواء قد يغيّر مصير المريض.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-119-andexanet-alfa",
    "number": 119,
    "title": ": Andexanet Alfa",
    "chapter": "Emergency Drug Handbook",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      ": Andexanet Alfa is a high-yield emergency medicine topic; the first task is to identify whether it represents an immediately life-threatening problem.",
      "Prioritize ABCDE, vital signs, instability, red flags, and the safest next action before detailed diagnosis.",
      "Use pattern recognition, focused testing, early treatment, and repeated reassessment."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Emergency medicine is risk management: do not miss the dangerous diagnosis.",
      "Normal early tests do not always exclude serious disease when the story is high-risk.",
      "Trends and reassessment are often more important than one isolated value."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في : Andexanet Alfa: لا تحفظ الدواء كاسم فقط. افهم متى يفيد، متى يضر، ما الجرعة والطريق، وما الذي يجب مراقبته بعد إعطائه. في الطوارئ، خطأ الجرعة أو اختيار الدواء قد يغيّر مصير المريض.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-120-final-em-drug-board-pearls",
    "number": 120,
    "title": ": Final Em Drug Board Pearls",
    "chapter": "Environmental, Allergy & EENT",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      ": Final Em Drug Board Pearls is a high-yield emergency medicine topic; the first task is to identify whether it represents an immediately life-threatening problem.",
      "Prioritize ABCDE, vital signs, instability, red flags, and the safest next action before detailed diagnosis.",
      "Use pattern recognition, focused testing, early treatment, and repeated reassessment."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Emergency medicine is risk management: do not miss the dangerous diagnosis.",
      "Normal early tests do not always exclude serious disease when the story is high-risk.",
      "Trends and reassessment are often more important than one isolated value."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في : Final Em Drug Board Pearls: أسئلة الامتحان غالبًا تختبر القرار الآمن التالي، وليس المعلومة وحدها. ابحث عن عدم الاستقرار، التشخيص الذي لا يجوز تفويته، والفخ الذي يحاول السؤال أن يدفعك إليه.",
    "visualHints": [
      {
        "id": "pdf-fixed-drug-eruption-p403-2",
        "src": "/visual-assets/toxicology-antidotes/pdf-fixed-drug-eruption-p403-2.jpg",
        "title": "Fixed Drug Eruption",
        "type": "ECG strip / rhythm visual",
        "topic": "Fixed Drug Eruption",
        "needsReview": false
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-121-push-dose-epinephrine",
    "number": 121,
    "title": ": Push-Dose Epinephrine",
    "chapter": "Emergency Drug Handbook",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      ": Push-Dose Epinephrine is a high-yield emergency medicine topic; the first task is to identify whether it represents an immediately life-threatening problem.",
      "Prioritize ABCDE, vital signs, instability, red flags, and the safest next action before detailed diagnosis.",
      "Use pattern recognition, focused testing, early treatment, and repeated reassessment."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Emergency medicine is risk management: do not miss the dangerous diagnosis.",
      "Normal early tests do not always exclude serious disease when the story is high-risk.",
      "Trends and reassessment are often more important than one isolated value."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في : Push-Dose Epinephrine: لا تحفظ الدواء كاسم فقط. افهم متى يفيد، متى يضر، ما الجرعة والطريق، وما الذي يجب مراقبته بعد إعطائه. في الطوارئ، خطأ الجرعة أو اختيار الدواء قد يغيّر مصير المريض.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-122-push-dose-phenylephrine",
    "number": 122,
    "title": ": Push-Dose Phenylephrine",
    "chapter": "Emergency Drug Handbook",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      ": Push-Dose Phenylephrine is a high-yield emergency medicine topic; the first task is to identify whether it represents an immediately life-threatening problem.",
      "Prioritize ABCDE, vital signs, instability, red flags, and the safest next action before detailed diagnosis.",
      "Use pattern recognition, focused testing, early treatment, and repeated reassessment."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Emergency medicine is risk management: do not miss the dangerous diagnosis.",
      "Normal early tests do not always exclude serious disease when the story is high-risk.",
      "Trends and reassessment are often more important than one isolated value."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في : Push-Dose Phenylephrine: لا تحفظ الدواء كاسم فقط. افهم متى يفيد، متى يضر، ما الجرعة والطريق، وما الذي يجب مراقبته بعد إعطائه. في الطوارئ، خطأ الجرعة أو اختيار الدواء قد يغيّر مصير المريض.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-123-peripheral-vasopressors-extravasation",
    "number": 123,
    "title": ": Peripheral Vasopressors & Extravasation",
    "chapter": "Critical Care & Infusions",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      ": Peripheral Vasopressors & Extravasation is a high-yield emergency medicine topic; the first task is to identify whether it represents an immediately life-threatening problem.",
      "Prioritize ABCDE, vital signs, instability, red flags, and the safest next action before detailed diagnosis.",
      "Use pattern recognition, focused testing, early treatment, and repeated reassessment."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Emergency medicine is risk management: do not miss the dangerous diagnosis.",
      "Normal early tests do not always exclude serious disease when the story is high-risk.",
      "Trends and reassessment are often more important than one isolated value."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في : Peripheral Vasopressors & Extravasation: لا تعالج الرقم فقط؛ عالج الفسيولوجيا. اسأل هل المشكلة سوائل، أو قلب، أو انسداد، أو توسع أوعية؟ ثم اختر السوائل أو الضواغط أو التهوية أو الإجراء المناسب مع إعادة تقييم مستمرة.",
    "visualHints": [
      {
        "id": "pdf-peripheral-vascular-disease-p62-4",
        "src": "/visual-assets/topics/pdf-peripheral-vascular-disease-p62-4.jpg",
        "title": "Peripheral Vascular Disease",
        "type": "Clinical visual",
        "topic": "Peripheral Vascular Disease",
        "needsReview": true
      },
      {
        "id": "pdf-central-vs-peripheral-vertigo-characteristics-p301-2",
        "src": "/visual-assets/topics/pdf-central-vs-peripheral-vertigo-characteristics-p301-2.jpg",
        "title": "Central vs. Peripheral Vertigo Characteristics",
        "type": "Diagnostic imaging visual",
        "topic": "Central vs. Peripheral Vertigo Characteristics",
        "needsReview": true
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-124-intralipid-iv-lipid-emulsion",
    "number": 124,
    "title": ": Intralipid / Iv Lipid Emulsion",
    "chapter": "Emergency Drug Handbook",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      ": Intralipid / Iv Lipid Emulsion is a high-yield emergency medicine topic; the first task is to identify whether it represents an immediately life-threatening problem.",
      "Prioritize ABCDE, vital signs, instability, red flags, and the safest next action before detailed diagnosis.",
      "Use pattern recognition, focused testing, early treatment, and repeated reassessment."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Airway, seizure control with benzodiazepines, lipid emulsion, modified ACLS.",
      "Rosh / Board Pearls",
      "Classic antidote for severe LAST.",
      "Bupivacaine toxicity is high risk.",
      "Treat airway and seizures first.",
      "Use modified ACLS.",
      "Call toxicology/poison center."
    ],
    "pearls": [
      "Emergency medicine is risk management: do not miss the dangerous diagnosis.",
      "Normal early tests do not always exclude serious disease when the story is high-risk.",
      "Trends and reassessment are often more important than one isolated value."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في : Intralipid / Iv Lipid Emulsion: لا تحفظ الدواء كاسم فقط. افهم متى يفيد، متى يضر، ما الجرعة والطريق، وما الذي يجب مراقبته بعد إعطائه. في الطوارئ، خطأ الجرعة أو اختيار الدواء قد يغيّر مصير المريض.",
    "visualHints": [
      {
        "id": "pdf-antiphospholipid-antibody-syndrome-p538-2",
        "src": "/visual-assets/topics/pdf-antiphospholipid-antibody-syndrome-p538-2.jpg",
        "title": "Antiphospholipid Antibody Syndrome",
        "type": "Diagnostic imaging visual",
        "topic": "Antiphospholipid Antibody Syndrome",
        "needsReview": true
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-125-pralidoxime",
    "number": 125,
    "title": ": Pralidoxime",
    "chapter": "Emergency Drug Handbook",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      ": Pralidoxime is a high-yield emergency medicine topic; the first task is to identify whether it represents an immediately life-threatening problem.",
      "Prioritize ABCDE, vital signs, instability, red flags, and the safest next action before detailed diagnosis.",
      "Use pattern recognition, focused testing, early treatment, and repeated reassessment."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Emergency medicine is risk management: do not miss the dangerous diagnosis.",
      "Normal early tests do not always exclude serious disease when the story is high-risk.",
      "Trends and reassessment are often more important than one isolated value."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في : Pralidoxime: لا تحفظ الدواء كاسم فقط. افهم متى يفيد، متى يضر، ما الجرعة والطريق، وما الذي يجب مراقبته بعد إعطائه. في الطوارئ، خطأ الجرعة أو اختيار الدواء قد يغيّر مصير المريض.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-126-physostigmine",
    "number": 126,
    "title": ": Physostigmine",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      ": Physostigmine is a high-yield emergency medicine topic; the first task is to identify whether it represents an immediately life-threatening problem.",
      "Prioritize ABCDE, vital signs, instability, red flags, and the safest next action before detailed diagnosis.",
      "Use pattern recognition, focused testing, early treatment, and repeated reassessment."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Emergency medicine is risk management: do not miss the dangerous diagnosis.",
      "Normal early tests do not always exclude serious disease when the story is high-risk.",
      "Trends and reassessment are often more important than one isolated value."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في : Physostigmine: فكّر كطبيب طوارئ. ابدأ بما يقتل الآن، ابحث عن العلامات الحمراء، ثبّت المريض قبل التفاصيل، ثم اختر الفحص أو العلاج الذي يغيّر القرار بأسرع وأأمن طريقة.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-127-dantrolene",
    "number": 127,
    "title": ": Dantrolene",
    "chapter": "Emergency Drug Handbook",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      ": Dantrolene is a high-yield emergency medicine topic; the first task is to identify whether it represents an immediately life-threatening problem.",
      "Prioritize ABCDE, vital signs, instability, red flags, and the safest next action before detailed diagnosis.",
      "Use pattern recognition, focused testing, early treatment, and repeated reassessment."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stop trigger, dantrolene, active cooling, treat hyperkalemia/acidosis, ICU.",
      "Rosh / Board Pearls",
      "Think after succinylcholine/anesthetic exposure.",
      "Rising CO2 may be early.",
      "Treat hyperkalemia.",
      "Cool aggressively.",
      "Dantrolene is specific therapy."
    ],
    "pearls": [
      "Emergency medicine is risk management: do not miss the dangerous diagnosis.",
      "Normal early tests do not always exclude serious disease when the story is high-risk.",
      "Trends and reassessment are often more important than one isolated value."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في : Dantrolene: لا تحفظ الدواء كاسم فقط. افهم متى يفيد، متى يضر، ما الجرعة والطريق، وما الذي يجب مراقبته بعد إعطائه. في الطوارئ، خطأ الجرعة أو اختيار الدواء قد يغيّر مصير المريض.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-128-cyproheptadine",
    "number": 128,
    "title": ": Cyproheptadine",
    "chapter": "Emergency Drug Handbook",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      ": Cyproheptadine is a high-yield emergency medicine topic; the first task is to identify whether it represents an immediately life-threatening problem.",
      "Prioritize ABCDE, vital signs, instability, red flags, and the safest next action before detailed diagnosis.",
      "Use pattern recognition, focused testing, early treatment, and repeated reassessment."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Emergency medicine is risk management: do not miss the dangerous diagnosis.",
      "Normal early tests do not always exclude serious disease when the story is high-risk.",
      "Trends and reassessment are often more important than one isolated value."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في : Cyproheptadine: لا تحفظ الدواء كاسم فقط. افهم متى يفيد، متى يضر، ما الجرعة والطريق، وما الذي يجب مراقبته بعد إعطائه. في الطوارئ، خطأ الجرعة أو اختيار الدواء قد يغيّر مصير المريض.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-129-high-dose-nitroglycerin-for-scape",
    "number": 129,
    "title": ": High-Dose Nitroglycerin For Scape",
    "chapter": "Emergency Drug Handbook",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      ": High-Dose Nitroglycerin For Scape is a high-yield emergency medicine topic; the first task is to identify whether it represents an immediately life-threatening problem.",
      "Prioritize ABCDE, vital signs, instability, red flags, and the safest next action before detailed diagnosis.",
      "Use pattern recognition, focused testing, early treatment, and repeated reassessment."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Emergency medicine is risk management: do not miss the dangerous diagnosis.",
      "Normal early tests do not always exclude serious disease when the story is high-risk.",
      "Trends and reassessment are often more important than one isolated value."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في : High-Dose Nitroglycerin For Scape: لا تحفظ الدواء كاسم فقط. افهم متى يفيد، متى يضر، ما الجرعة والطريق، وما الذي يجب مراقبته بعد إعطائه. في الطوارئ، خطأ الجرعة أو اختيار الدواء قد يغيّر مصير المريض.",
    "visualHints": [
      {
        "id": "pdf-endocarditis-p15-4",
        "src": "/visual-assets/topics/pdf-endocarditis-p15-4.jpg",
        "title": "Endocarditis",
        "type": "Algorithm / table / high-yield summary",
        "topic": "Endocarditis",
        "needsReview": true
      },
      {
        "id": "pdf-heart-score-p25-4",
        "src": "/visual-assets/topics/pdf-heart-score-p25-4.jpg",
        "title": "HEART Score",
        "type": "Algorithm / table / high-yield summary",
        "topic": "HEART Score",
        "needsReview": true
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-130-labetalol-advanced-use",
    "number": 130,
    "title": ": Labetalol Advanced Use",
    "chapter": "Emergency Drug Handbook",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      ": Labetalol Advanced Use is a high-yield emergency medicine topic; the first task is to identify whether it represents an immediately life-threatening problem.",
      "Prioritize ABCDE, vital signs, instability, red flags, and the safest next action before detailed diagnosis.",
      "Use pattern recognition, focused testing, early treatment, and repeated reassessment."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Emergency medicine is risk management: do not miss the dangerous diagnosis.",
      "Normal early tests do not always exclude serious disease when the story is high-risk.",
      "Trends and reassessment are often more important than one isolated value."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في : Labetalol Advanced Use: لا تحفظ الدواء كاسم فقط. افهم متى يفيد، متى يضر، ما الجرعة والطريق، وما الذي يجب مراقبته بعد إعطائه. في الطوارئ، خطأ الجرعة أو اختيار الدواء قد يغيّر مصير المريض.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-131-prothrombin-complex-concentrate-pcc",
    "number": 131,
    "title": ": Prothrombin Complex Concentrate (Pcc)",
    "chapter": "Hematology & Transfusion",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      ": Prothrombin Complex Concentrate (Pcc) is a high-yield emergency medicine topic; the first task is to identify whether it represents an immediately life-threatening problem.",
      "Prioritize ABCDE, vital signs, instability, red flags, and the safest next action before detailed diagnosis.",
      "Use pattern recognition, focused testing, early treatment, and repeated reassessment."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Emergency medicine is risk management: do not miss the dangerous diagnosis.",
      "Normal early tests do not always exclude serious disease when the story is high-risk.",
      "Trends and reassessment are often more important than one isolated value."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في : Prothrombin Complex Concentrate (Pcc): ابدأ بتحديد هل النزف أو التخثر يهدد الحياة. اعرف الدواء المسبب، قيّم الشدة، ثم اختر العكس أو النقل أو الإيقاف حسب الخطر والبروتوكول.",
    "visualHints": [
      {
        "id": "pdf-complex-regional-pain-syndrome-p274-2",
        "src": "/visual-assets/toxicology-antidotes/pdf-complex-regional-pain-syndrome-p274-2.jpg",
        "title": "Complex Regional Pain Syndrome",
        "type": "Diagnostic imaging visual",
        "topic": "Complex Regional Pain Syndrome",
        "needsReview": true
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-132-vitamin-k",
    "number": 132,
    "title": ": Vitamin K",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      ": Vitamin K is a high-yield emergency medicine topic; the first task is to identify whether it represents an immediately life-threatening problem.",
      "Prioritize ABCDE, vital signs, instability, red flags, and the safest next action before detailed diagnosis.",
      "Use pattern recognition, focused testing, early treatment, and repeated reassessment."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Emergency medicine is risk management: do not miss the dangerous diagnosis.",
      "Normal early tests do not always exclude serious disease when the story is high-risk.",
      "Trends and reassessment are often more important than one isolated value."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في : Vitamin K: فكّر كطبيب طوارئ. ابدأ بما يقتل الآن، ابحث عن العلامات الحمراء، ثبّت المريض قبل التفاصيل، ثم اختر الفحص أو العلاج الذي يغيّر القرار بأسرع وأأمن طريقة.",
    "visualHints": [
      {
        "id": "pdf-vitamin-b12-defi-ciency-p523-2",
        "src": "/visual-assets/topics/pdf-vitamin-b12-defi-ciency-p523-2.jpg",
        "title": "Vitamin B12 Defi ciency",
        "type": "Clinical visual",
        "topic": "Vitamin B12 Defi ciency",
        "needsReview": true
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-133-protamine",
    "number": 133,
    "title": ": Protamine",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      ": Protamine is a high-yield emergency medicine topic; the first task is to identify whether it represents an immediately life-threatening problem.",
      "Prioritize ABCDE, vital signs, instability, red flags, and the safest next action before detailed diagnosis.",
      "Use pattern recognition, focused testing, early treatment, and repeated reassessment."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Emergency medicine is risk management: do not miss the dangerous diagnosis.",
      "Normal early tests do not always exclude serious disease when the story is high-risk.",
      "Trends and reassessment are often more important than one isolated value."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في : Protamine: فكّر كطبيب طوارئ. ابدأ بما يقتل الآن، ابحث عن العلامات الحمراء، ثبّت المريض قبل التفاصيل، ثم اختر الفحص أو العلاج الذي يغيّر القرار بأسرع وأأمن طريقة.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-134-idarucizumab",
    "number": 134,
    "title": ": Idarucizumab",
    "chapter": "Emergency Drug Handbook",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      ": Idarucizumab is a high-yield emergency medicine topic; the first task is to identify whether it represents an immediately life-threatening problem.",
      "Prioritize ABCDE, vital signs, instability, red flags, and the safest next action before detailed diagnosis.",
      "Use pattern recognition, focused testing, early treatment, and repeated reassessment."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Emergency medicine is risk management: do not miss the dangerous diagnosis.",
      "Normal early tests do not always exclude serious disease when the story is high-risk.",
      "Trends and reassessment are often more important than one isolated value."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في : Idarucizumab: لا تحفظ الدواء كاسم فقط. افهم متى يفيد، متى يضر، ما الجرعة والطريق، وما الذي يجب مراقبته بعد إعطائه. في الطوارئ، خطأ الجرعة أو اختيار الدواء قد يغيّر مصير المريض.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-135-andexanet-alfa",
    "number": 135,
    "title": ": Andexanet Alfa",
    "chapter": "Emergency Drug Handbook",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      ": Andexanet Alfa is a high-yield emergency medicine topic; the first task is to identify whether it represents an immediately life-threatening problem.",
      "Prioritize ABCDE, vital signs, instability, red flags, and the safest next action before detailed diagnosis.",
      "Use pattern recognition, focused testing, early treatment, and repeated reassessment."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Emergency medicine is risk management: do not miss the dangerous diagnosis.",
      "Normal early tests do not always exclude serious disease when the story is high-risk.",
      "Trends and reassessment are often more important than one isolated value."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في : Andexanet Alfa: لا تحفظ الدواء كاسم فقط. افهم متى يفيد، متى يضر، ما الجرعة والطريق، وما الذي يجب مراقبته بعد إعطائه. في الطوارئ، خطأ الجرعة أو اختيار الدواء قد يغيّر مصير المريض.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-136-desmopressin-ddavp",
    "number": 136,
    "title": ": Desmopressin (Ddavp)",
    "chapter": "Emergency Drug Handbook",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      ": Desmopressin (Ddavp) is a high-yield emergency medicine topic; the first task is to identify whether it represents an immediately life-threatening problem.",
      "Prioritize ABCDE, vital signs, instability, red flags, and the safest next action before detailed diagnosis.",
      "Use pattern recognition, focused testing, early treatment, and repeated reassessment."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Emergency medicine is risk management: do not miss the dangerous diagnosis.",
      "Normal early tests do not always exclude serious disease when the story is high-risk.",
      "Trends and reassessment are often more important than one isolated value."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في : Desmopressin (Ddavp): لا تحفظ الدواء كاسم فقط. افهم متى يفيد، متى يضر، ما الجرعة والطريق، وما الذي يجب مراقبته بعد إعطائه. في الطوارئ، خطأ الجرعة أو اختيار الدواء قد يغيّر مصير المريض.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-137-colchicine",
    "number": 137,
    "title": ": Colchicine",
    "chapter": "Emergency Drug Handbook",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      ": Colchicine is a high-yield emergency medicine topic; the first task is to identify whether it represents an immediately life-threatening problem.",
      "Prioritize ABCDE, vital signs, instability, red flags, and the safest next action before detailed diagnosis.",
      "Use pattern recognition, focused testing, early treatment, and repeated reassessment."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Emergency medicine is risk management: do not miss the dangerous diagnosis.",
      "Normal early tests do not always exclude serious disease when the story is high-risk.",
      "Trends and reassessment are often more important than one isolated value."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في : Colchicine: لا تحفظ الدواء كاسم فقط. افهم متى يفيد، متى يضر، ما الجرعة والطريق، وما الذي يجب مراقبته بعد إعطائه. في الطوارئ، خطأ الجرعة أو اختيار الدواء قد يغيّر مصير المريض.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-138-linezolid",
    "number": 138,
    "title": ": Linezolid",
    "chapter": "Emergency Drug Handbook",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      ": Linezolid is a high-yield emergency medicine topic; the first task is to identify whether it represents an immediately life-threatening problem.",
      "Prioritize ABCDE, vital signs, instability, red flags, and the safest next action before detailed diagnosis.",
      "Use pattern recognition, focused testing, early treatment, and repeated reassessment."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Emergency medicine is risk management: do not miss the dangerous diagnosis.",
      "Normal early tests do not always exclude serious disease when the story is high-risk.",
      "Trends and reassessment are often more important than one isolated value."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في : Linezolid: لا تحفظ الدواء كاسم فقط. افهم متى يفيد، متى يضر، ما الجرعة والطريق، وما الذي يجب مراقبته بعد إعطائه. في الطوارئ، خطأ الجرعة أو اختيار الدواء قد يغيّر مصير المريض.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-139-daptomycin",
    "number": 139,
    "title": ": Daptomycin",
    "chapter": "Emergency Drug Handbook",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      ": Daptomycin is a high-yield emergency medicine topic; the first task is to identify whether it represents an immediately life-threatening problem.",
      "Prioritize ABCDE, vital signs, instability, red flags, and the safest next action before detailed diagnosis.",
      "Use pattern recognition, focused testing, early treatment, and repeated reassessment."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Emergency medicine is risk management: do not miss the dangerous diagnosis.",
      "Normal early tests do not always exclude serious disease when the story is high-risk.",
      "Trends and reassessment are often more important than one isolated value."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في : Daptomycin: لا تحفظ الدواء كاسم فقط. افهم متى يفيد، متى يضر، ما الجرعة والطريق، وما الذي يجب مراقبته بعد إعطائه. في الطوارئ، خطأ الجرعة أو اختيار الدواء قد يغيّر مصير المريض.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-140-final-advanced-drug-pearls",
    "number": 140,
    "title": ": Final Advanced Drug Pearls",
    "chapter": "Environmental, Allergy & EENT",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      ": Final Advanced Drug Pearls is a high-yield emergency medicine topic; the first task is to identify whether it represents an immediately life-threatening problem.",
      "Prioritize ABCDE, vital signs, instability, red flags, and the safest next action before detailed diagnosis.",
      "Use pattern recognition, focused testing, early treatment, and repeated reassessment."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Emergency medicine is risk management: do not miss the dangerous diagnosis.",
      "Normal early tests do not always exclude serious disease when the story is high-risk.",
      "Trends and reassessment are often more important than one isolated value."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في : Final Advanced Drug Pearls: أسئلة الامتحان غالبًا تختبر القرار الآمن التالي، وليس المعلومة وحدها. ابحث عن عدم الاستقرار، التشخيص الذي لا يجوز تفويته، والفخ الذي يحاول السؤال أن يدفعك إليه.",
    "visualHints": [
      {
        "id": "pdf-fixed-drug-eruption-p403-2",
        "src": "/visual-assets/toxicology-antidotes/pdf-fixed-drug-eruption-p403-2.jpg",
        "title": "Fixed Drug Eruption",
        "type": "ECG strip / rhythm visual",
        "topic": "Fixed Drug Eruption",
        "needsReview": false
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-161-approach-to-the-poisoned-patient",
    "number": 161,
    "title": "Approach To The Poisoned Patient",
    "chapter": "Toxicology & Antidotes",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Most toxicology mistakes happen because physicians chase the poison before stabilizing the patient.",
      "Always remember",
      "ABCDE First"
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Glucose early.",
      "ECG early.",
      "History may be wrong.",
      "Empty pill bottles lie.",
      "Stabilization precedes diagnosis."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "Step 1",
      "Airway",
      "Step 2",
      "Breathing",
      "Step 3",
      "Circulation",
      "Step 4"
    ],
    "arabic": "الفكرة ببساطة في Approach To The Poisoned Patient: في التسمم لا تطارد اسم السم قبل إنقاذ المريض. ابدأ بالـ ABCDE، افحص السكر و ECG، تعرف على toxidrome، ثم استخدم الترياق المناسب إذا كان واضحًا ومطلوبًا.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-162-anticholinergic-toxidrome",
    "number": 162,
    "title": "Anticholinergic Toxidrome",
    "chapter": "Toxicology & Antidotes",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Anticholinergic Toxidrome",
      "Classic Board Toxidrome",
      "Causes",
      "Diphenhydramine",
      "TCAs"
    ],
    "presentation": [
      "May show",
      "Wide QRS",
      "Especially TCA toxicity."
    ],
    "management": [
      "Benzodiazepines",
      "Cooling",
      "Sodium bicarbonate if TCA"
    ],
    "pearls": [
      "Dry skin important clue.",
      "Dilated pupils.",
      "Delirium common.",
      "Urinary retention.",
      "TCA overlap important."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Anticholinergic Toxidrome: في التسمم لا تطارد اسم السم قبل إنقاذ المريض. ابدأ بالـ ABCDE، افحص السكر و ECG، تعرف على toxidrome، ثم استخدم الترياق المناسب إذا كان واضحًا ومطلوبًا.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-163-cholinergic-toxidrome",
    "number": 163,
    "title": "Cholinergic Toxidrome",
    "chapter": "Toxicology & Antidotes",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Cholinergic Toxidrome",
      "Causes",
      "Organophosphates",
      "Carbamates",
      "Nerve agents"
    ],
    "presentation": [
      "Organophosphates",
      "Carbamates",
      "Nerve agents",
      "Classic Mnemonic",
      "Dumbels",
      "Diarrhea",
      "Urination",
      "Miosis"
    ],
    "management": [
      "Atropine",
      "Pralidoxime"
    ],
    "pearls": [
      "Secretions kill.",
      "Miosis common.",
      "Atropine dries secretions.",
      "Atropine endpoint = clear lungs.",
      "PPE matters."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Cholinergic Toxidrome: في التسمم لا تطارد اسم السم قبل إنقاذ المريض. ابدأ بالـ ABCDE، افحص السكر و ECG، تعرف على toxidrome، ثم استخدم الترياق المناسب إذا كان واضحًا ومطلوبًا.",
    "visualHints": [],
    "needsDoseVerification": true
  },
  {
    "id": "master-164-sympathomimetic-toxidrome",
    "number": 164,
    "title": "Sympathomimetic Toxidrome",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Sympathomimetic Toxidrome",
      "Causes",
      "Cocaine",
      "Methamphetamine",
      "Mdma"
    ],
    "presentation": [
      "Cocaine",
      "Methamphetamine",
      "Mdma",
      "Synthetic stimulants"
    ],
    "management": [
      "Benzodiazepines",
      "First-line.",
      "Avoid",
      "Pure beta blockers in acute cocaine toxicity."
    ],
    "pearls": [
      "Sweating present.",
      "Hyperthermia dangerous.",
      "Benzos first-line.",
      "Cocaine can cause MI.",
      "Agitation increases mortality."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Sympathomimetic Toxidrome: في التسمم لا تطارد اسم السم قبل إنقاذ المريض. ابدأ بالـ ABCDE، افحص السكر و ECG، تعرف على toxidrome، ثم استخدم الترياق المناسب إذا كان واضحًا ومطلوبًا.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-165-opioid-toxidrome",
    "number": 165,
    "title": "Opioid Toxidrome",
    "chapter": "Toxicology & Antidotes",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Opioid Toxidrome",
      "Causes",
      "Heroin",
      "Fentanyl",
      "Morphine"
    ],
    "presentation": [
      "Heroin",
      "Fentanyl",
      "Morphine",
      "Oxycodone",
      "Methadone",
      "Classic Triad",
      "CNS Depression",
      "Respiratory Depression"
    ],
    "management": [
      "Naloxone",
      "Titrated to ventilation."
    ],
    "pearls": [
      "Ventilation matters most.",
      "Naloxone may wear off first.",
      "Observe recurrent toxicity.",
      "Fentanyl may require repeat dosing.",
      "Pulse ox may lag."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Opioid Toxidrome: في التسمم لا تطارد اسم السم قبل إنقاذ المريض. ابدأ بالـ ABCDE، افحص السكر و ECG، تعرف على toxidrome، ثم استخدم الترياق المناسب إذا كان واضحًا ومطلوبًا.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-166-sedative-hypnotic-toxidrome",
    "number": 166,
    "title": "Sedative-Hypnotic Toxidrome",
    "chapter": "Toxicology & Antidotes",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Sedative-Hypnotic Toxidrome",
      "Causes",
      "Benzodiazepines",
      "Barbiturates",
      "Z-drugs"
    ],
    "presentation": [
      "Benzodiazepines",
      "Barbiturates",
      "Z-drugs"
    ],
    "management": [
      "Supportive care.",
      "Flumazenil rarely."
    ],
    "pearls": [
      "Airway support key.",
      "Flumazenil risky.",
      "Mixed overdoses common.",
      "Watch respiratory status.",
      "Most survive with support."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Sedative-Hypnotic Toxidrome: في التسمم لا تطارد اسم السم قبل إنقاذ المريض. ابدأ بالـ ABCDE، افحص السكر و ECG، تعرف على toxidrome، ثم استخدم الترياق المناسب إذا كان واضحًا ومطلوبًا.",
    "visualHints": [],
    "needsDoseVerification": true
  },
  {
    "id": "master-167-serotonin-syndrome",
    "number": 167,
    "title": "Serotonin Syndrome",
    "chapter": "Toxicology & Antidotes",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Serotonin Syndrome",
      "Causes",
      "SSRIs",
      "MAOIs",
      "Linezolid"
    ],
    "presentation": [
      "SSRIs",
      "MAOIs",
      "Linezolid",
      "Mdma",
      "Tramadol",
      "Triad",
      "Autonomic Instability",
      "Neuromuscular Hyperactivity"
    ],
    "management": [
      "Benzodiazepines",
      "Cooling",
      "Cyproheptadine"
    ],
    "pearls": [
      "Clonus is key clue.",
      "Hyperreflexia common.",
      "Hyperthermia dangerous.",
      "Stop serotonergic drugs.",
      "Different from NMS."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Serotonin Syndrome: في التسمم لا تطارد اسم السم قبل إنقاذ المريض. ابدأ بالـ ABCDE، افحص السكر و ECG، تعرف على toxidrome، ثم استخدم الترياق المناسب إذا كان واضحًا ومطلوبًا.",
    "visualHints": [
      {
        "id": "pdf-wol-parkinson-white-wpw-syndrome-p20-4",
        "src": "/visual-assets/ecg-atlas/pdf-wol-parkinson-white-wpw-syndrome-p20-4.jpg",
        "title": "Wolﬀ-Parkinson-White (WPW) Syndrome",
        "type": "Diagnostic imaging visual",
        "topic": "Wolﬀ-Parkinson-White (WPW) Syndrome",
        "needsReview": false
      },
      {
        "id": "pdf-wol-parkinson-white-wpw-syndrome-p20-6",
        "src": "/visual-assets/ecg-atlas/pdf-wol-parkinson-white-wpw-syndrome-p20-6.jpg",
        "title": "Wolﬀ-Parkinson-White (WPW) Syndrome",
        "type": "Diagnostic imaging visual",
        "topic": "Wolﬀ-Parkinson-White (WPW) Syndrome",
        "needsReview": false
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-168-neuroleptic-malignant-syndrome",
    "number": 168,
    "title": "Neuroleptic Malignant Syndrome",
    "chapter": "Neurology & Altered Mental Status",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Neuroleptic Malignant Syndrome",
      "Causes",
      "Antipsychotics.",
      "Findings",
      "Rigidity"
    ],
    "presentation": [
      "Antipsychotics."
    ],
    "management": [
      "Cooling",
      "Supportive care",
      "Dantrolene",
      "Bromocriptine"
    ],
    "pearls": [
      "Rigidity.",
      "Elevated CK.",
      "Slower onset.",
      "Antipsychotic exposure.",
      "ICU often required."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Neuroleptic Malignant Syndrome: في الأعصاب ركّز على الزمن والخطر. هل يوجد سكتة؟ نزف؟ عدوى؟ نقص سكر؟ عالج الأشياء القابلة للعكس بسرعة، ولا تطمئن لمريض لديه علامات عصبية خطيرة.",
    "visualHints": [
      {
        "id": "pdf-wol-parkinson-white-wpw-syndrome-p20-4",
        "src": "/visual-assets/ecg-atlas/pdf-wol-parkinson-white-wpw-syndrome-p20-4.jpg",
        "title": "Wolﬀ-Parkinson-White (WPW) Syndrome",
        "type": "Diagnostic imaging visual",
        "topic": "Wolﬀ-Parkinson-White (WPW) Syndrome",
        "needsReview": false
      },
      {
        "id": "pdf-wol-parkinson-white-wpw-syndrome-p20-6",
        "src": "/visual-assets/ecg-atlas/pdf-wol-parkinson-white-wpw-syndrome-p20-6.jpg",
        "title": "Wolﬀ-Parkinson-White (WPW) Syndrome",
        "type": "Diagnostic imaging visual",
        "topic": "Wolﬀ-Parkinson-White (WPW) Syndrome",
        "needsReview": false
      }
    ],
    "needsDoseVerification": true
  },
  {
    "id": "master-169-toxic-alcohols",
    "number": 169,
    "title": "Toxic Alcohols",
    "chapter": "Toxicology & Antidotes",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Toxic Alcohols",
      "Methanol",
      "Blindness",
      "Ethylene Glycol",
      "Renal Failure"
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Fomepizole",
      "Dialysis"
    ],
    "pearls": [
      "Methanol → vision.",
      "Ethylene glycol → kidneys.",
      "Acidosis common.",
      "Dialysis may be lifesaving.",
      "Osmolar gap may disappear late."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Toxic Alcohols: في التسمم لا تطارد اسم السم قبل إنقاذ المريض. ابدأ بالـ ABCDE، افحص السكر و ECG، تعرف على toxidrome، ثم استخدم الترياق المناسب إذا كان واضحًا ومطلوبًا.",
    "visualHints": [
      {
        "id": "pdf-toxic-megacolon-p182-2",
        "src": "/visual-assets/toxicology-antidotes/pdf-toxic-megacolon-p182-2.jpg",
        "title": "Toxic Megacolon",
        "type": "Diagnostic imaging visual",
        "topic": "Toxic Megacolon",
        "needsReview": false
      },
      {
        "id": "pdf-toxic-epidermal-necrolysis-p415-2",
        "src": "/visual-assets/toxicology-antidotes/pdf-toxic-epidermal-necrolysis-p415-2.jpg",
        "title": "Toxic Epidermal Necrolysis",
        "type": "Diagnostic imaging visual",
        "topic": "Toxic Epidermal Necrolysis",
        "needsReview": false
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-170-acetaminophen-toxicity",
    "number": 170,
    "title": "Acetaminophen Toxicity",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Acetaminophen Toxicity",
      "Most Important Overdose Worldwide",
      "Stages",
      "Stage 1",
      "Often asymptomatic."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "N-Acetylcysteine"
    ],
    "pearls": [
      "Early normal labs misleading.",
      "NAC highly effective.",
      "Obtain level.",
      "Use nomogram appropriately.",
      "Do not delay treatment.",
      "Salicylate Toxicity",
      "TCA Toxicity",
      "Calcium Channel Blocker Overdose"
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Acetaminophen Toxicity: في التسمم لا تطارد اسم السم قبل إنقاذ المريض. ابدأ بالـ ABCDE، افحص السكر و ECG، تعرف على toxidrome، ثم استخدم الترياق المناسب إذا كان واضحًا ومطلوبًا.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-171-salicylate-toxicity",
    "number": 171,
    "title": "Salicylate Toxicity",
    "chapter": "Toxicology & Antidotes",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map",
      "Rosh Rapid Review PDF text/visual support"
    ],
    "core": [
      "Salicylate poisoning is one of the most dangerous toxicology emergencies because patients can deteriorate suddenly.",
      "Common Sources",
      "Aspirin"
    ],
    "presentation": [
      "Tinnitus",
      "Tachypnea",
      "Vomiting",
      "Hyperthermia",
      "Confusion",
      "Pulmonary edema",
      "Critical Airway Pearl",
      "Avoid intubation if possible."
    ],
    "management": [
      "Sodium Bicarbonate",
      "Urine alkalinization",
      "Dialysis",
      "Severe cases"
    ],
    "pearls": [
      "Tinnitus is classic.",
      "Mixed acid-base disorder.",
      "Hyperventilation is protective.",
      "Bicarbonate is cornerstone therapy.",
      "Dialysis saves lives."
    ],
    "traps": [
      "❌ Intubating without matching pre-intubation minute ventilation."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Salicylate Toxicity: في التسمم لا تطارد اسم السم قبل إنقاذ المريض. ابدأ بالـ ABCDE، افحص السكر و ECG، تعرف على toxidrome، ثم استخدم الترياق المناسب إذا كان واضحًا ومطلوبًا.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-172-tca-toxicity",
    "number": 172,
    "title": "Tca Toxicity",
    "chapter": "Toxicology & Antidotes",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Tricyclic antidepressant overdose kills through",
      "Arrhythmias",
      "Hypotension"
    ],
    "presentation": [
      "Wide QRS",
      "Most important clue.",
      "Terminal R in aVR",
      "High yield."
    ],
    "management": [
      "Sodium Bicarbonate",
      "First-line.",
      "Dangerous Findings",
      "QRS widening",
      "Seizures",
      "Ventricular dysrhythmias"
    ],
    "pearls": [
      "Wide QRS = danger.",
      "Sodium bicarbonate is antidote.",
      "Seizures common.",
      "Anticholinergic signs frequent.",
      "ECG is critical."
    ],
    "traps": [
      "❌ Treating TCA arrhythmia with class Ia antiarrhythmics."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Tca Toxicity: في التسمم لا تطارد اسم السم قبل إنقاذ المريض. ابدأ بالـ ABCDE، افحص السكر و ECG، تعرف على toxidrome، ثم استخدم الترياق المناسب إذا كان واضحًا ومطلوبًا.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-173-calcium-channel-blocker-overdose",
    "number": 173,
    "title": "Calcium Channel Blocker Overdose",
    "chapter": "Toxicology & Antidotes",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "One of the highest mortality overdoses.",
      "Common Drugs",
      "Amlodipine"
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Calcium",
      "High-dose insulin",
      "Vasopressors",
      "Lipid emulsion (selected cases)"
    ],
    "pearls": [
      "Hyperglycemia is common.",
      "Severe shock develops.",
      "High-dose insulin is critical.",
      "Calcium helps.",
      "ICU care usually required."
    ],
    "traps": [
      "❌ Using only fluids in severe CCB shock."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Calcium Channel Blocker Overdose: لا تحفظ الدواء كاسم فقط. افهم متى يفيد، متى يضر، ما الجرعة والطريق، وما الذي يجب مراقبته بعد إعطائه. في الطوارئ، خطأ الجرعة أو اختيار الدواء قد يغيّر مصير المريض.",
    "visualHints": [],
    "needsDoseVerification": true
  },
  {
    "id": "master-174-beta-blocker-overdose",
    "number": 174,
    "title": "Beta Blocker Overdose",
    "chapter": "Toxicology & Antidotes",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Beta blocker overdose causes cardiovascular collapse.",
      "Findings",
      "Bradycardia"
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Glucagon",
      "High-Dose Insulin",
      "Vasopressors"
    ],
    "pearls": [
      "Bradycardia common.",
      "Glucagon is classic antidote.",
      "High-dose insulin often needed.",
      "Propranolol causes seizures.",
      "Shock can be profound."
    ],
    "traps": [
      "❌ Expecting glucagon alone to fix severe overdose."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Beta Blocker Overdose: في التسمم لا تطارد اسم السم قبل إنقاذ المريض. ابدأ بالـ ABCDE، افحص السكر و ECG، تعرف على toxidrome، ثم استخدم الترياق المناسب إذا كان واضحًا ومطلوبًا.",
    "visualHints": [
      {
        "id": "pdf-beta-thalassemia-p527-2",
        "src": "/visual-assets/topics/pdf-beta-thalassemia-p527-2.jpg",
        "title": "Beta Thalassemia",
        "type": "Clinical visual",
        "topic": "Beta Thalassemia",
        "needsReview": true
      }
    ],
    "needsDoseVerification": true
  },
  {
    "id": "master-175-digoxin-toxicity",
    "number": 175,
    "title": "Digoxin Toxicity",
    "chapter": "Toxicology & Antidotes",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Digoxin toxicity causes almost any arrhythmia.",
      "Symptoms",
      "Nausea"
    ],
    "presentation": [
      "Nausea",
      "Vomiting",
      "Visual Changes",
      "Confusion",
      "ECG Clues",
      "Many possibilities."
    ],
    "management": [
      "Digoxin Immune Fab"
    ],
    "pearls": [
      "Think digoxin in elderly patients.",
      "Hyperkalemia is ominous.",
      "Visual symptoms common.",
      "Fab saves lives.",
      "Arrhythmias vary widely.",
      "Bidirectional VT",
      "Laboratory Clue",
      "Hyperkalemia"
    ],
    "traps": [
      "❌ Ignoring hyperkalemia in acute toxicity."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Digoxin Toxicity: في التسمم لا تطارد اسم السم قبل إنقاذ المريض. ابدأ بالـ ABCDE، افحص السكر و ECG، تعرف على toxidrome، ثم استخدم الترياق المناسب إذا كان واضحًا ومطلوبًا.",
    "visualHints": [],
    "needsDoseVerification": true
  },
  {
    "id": "master-176-carbon-monoxide-poisoning",
    "number": 176,
    "title": "Carbon Monoxide Poisoning",
    "chapter": "Toxicology & Antidotes",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Carbon monoxide is the great imitator.",
      "Sources",
      "House fires"
    ],
    "presentation": [
      "Headache",
      "Dizziness",
      "Nausea",
      "Confusion",
      "Classic Board Clue",
      "Multiple family members sick."
    ],
    "management": [
      "100% Oxygen",
      "Severe Cases",
      "Consider",
      "Hyperbaric Oxygen"
    ],
    "pearls": [
      "Pulse oximetry can look normal.",
      "COHb level helps.",
      "Oxygen is treatment.",
      "Pregnancy lowers threshold for concern.",
      "House fire victims may have cyanide too."
    ],
    "traps": [
      "❌ Reassurance from normal pulse oximetry."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Carbon Monoxide Poisoning: في التسمم لا تطارد اسم السم قبل إنقاذ المريض. ابدأ بالـ ABCDE، افحص السكر و ECG، تعرف على toxidrome، ثم استخدم الترياق المناسب إذا كان واضحًا ومطلوبًا.",
    "visualHints": [
      {
        "id": "pdf-lead-poisoning-p520-2",
        "src": "/visual-assets/toxicology-antidotes/pdf-lead-poisoning-p520-2.jpg",
        "title": "Lead Poisoning",
        "type": "Diagnostic imaging visual",
        "topic": "Lead Poisoning",
        "needsReview": true
      },
      {
        "id": "pdf-lead-poisoning-p520-3",
        "src": "/visual-assets/toxicology-antidotes/pdf-lead-poisoning-p520-3.jpg",
        "title": "Lead Poisoning",
        "type": "Diagnostic imaging visual",
        "topic": "Lead Poisoning",
        "needsReview": true
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-177-cyanide-poisoning",
    "number": 177,
    "title": "Cyanide Poisoning",
    "chapter": "Toxicology & Antidotes",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Cells cannot use oxygen.",
      "The patient dies despite oxygen being available.",
      "Sources"
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Hydroxocobalamin"
    ],
    "pearls": [
      "Think smoke inhalation.",
      "Lactate often very high.",
      "Rapid deterioration.",
      "Treat empirically if suspicion high.",
      "Can coexist with CO poisoning."
    ],
    "traps": [
      "❌ Waiting for cyanide level before treatment."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Cyanide Poisoning: في التسمم لا تطارد اسم السم قبل إنقاذ المريض. ابدأ بالـ ABCDE، افحص السكر و ECG، تعرف على toxidrome، ثم استخدم الترياق المناسب إذا كان واضحًا ومطلوبًا.",
    "visualHints": [
      {
        "id": "pdf-lead-poisoning-p520-2",
        "src": "/visual-assets/toxicology-antidotes/pdf-lead-poisoning-p520-2.jpg",
        "title": "Lead Poisoning",
        "type": "Diagnostic imaging visual",
        "topic": "Lead Poisoning",
        "needsReview": true
      },
      {
        "id": "pdf-lead-poisoning-p520-3",
        "src": "/visual-assets/toxicology-antidotes/pdf-lead-poisoning-p520-3.jpg",
        "title": "Lead Poisoning",
        "type": "Diagnostic imaging visual",
        "topic": "Lead Poisoning",
        "needsReview": true
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-178-snake-envenomation",
    "number": 178,
    "title": "Snake Envenomation",
    "chapter": "Toxicology & Antidotes",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "The most important question",
      "Is there envenomation?",
      "Not"
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Immobilize limb",
      "Mark swelling progression",
      "Serial examinations",
      "Antivenom when indicated",
      "Avoid",
      "❌ Cutting wound",
      "❌ Suction devices",
      "❌ Ice"
    ],
    "pearls": [
      "Swelling progression matters.",
      "Coagulation studies important.",
      "Antivenom saves tissue.",
      "Observe carefully.",
      "Serial exams essential."
    ],
    "traps": [
      "❌ Applying tourniquet."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Snake Envenomation: في التسمم لا تطارد اسم السم قبل إنقاذ المريض. ابدأ بالـ ABCDE، افحص السكر و ECG، تعرف على toxidrome، ثم استخدم الترياق المناسب إذا كان واضحًا ومطلوبًا.",
    "visualHints": [
      {
        "id": "pdf-spider-snake-scorpion-bites-p413-2",
        "src": "/visual-assets/topics/pdf-spider-snake-scorpion-bites-p413-2.jpg",
        "title": "Spider, Snake, Scorpion Bites",
        "type": "Clinical visual",
        "topic": "Spider, Snake, Scorpion Bites",
        "needsReview": true
      }
    ],
    "needsDoseVerification": true
  },
  {
    "id": "master-179-scorpion-envenomation",
    "number": 179,
    "title": "Scorpion Envenomation",
    "chapter": "Toxicology & Antidotes",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Autonomic storm.",
      "Findings",
      "Agitation"
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Supportive care",
      "Benzodiazepines",
      "Antivenom in selected severe cases"
    ],
    "pearls": [
      "Children deteriorate faster.",
      "Secretions can be severe.",
      "Autonomic storm is classic.",
      "Airway monitoring important.",
      "Supportive care remains central."
    ],
    "traps": [
      "❌ Underestimating pediatric envenomation."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Scorpion Envenomation: في التسمم لا تطارد اسم السم قبل إنقاذ المريض. ابدأ بالـ ABCDE، افحص السكر و ECG، تعرف على toxidrome، ثم استخدم الترياق المناسب إذا كان واضحًا ومطلوبًا.",
    "visualHints": [
      {
        "id": "pdf-spider-snake-scorpion-bites-p413-2",
        "src": "/visual-assets/topics/pdf-spider-snake-scorpion-bites-p413-2.jpg",
        "title": "Spider, Snake, Scorpion Bites",
        "type": "Clinical visual",
        "topic": "Spider, Snake, Scorpion Bites",
        "needsReview": true
      }
    ],
    "needsDoseVerification": true
  },
  {
    "id": "master-180-toxicology-mega-pearls",
    "number": 180,
    "title": "Toxicology Mega Pearls",
    "chapter": "Toxicology & Antidotes",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Toxicology Mega Pearls"
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Airway",
      "Airway before antidote.",
      "Glucose early.",
      "ECG early.",
      "Poison history may be wrong.",
      "Unknown overdose = broad thinking.",
      "Wide QRS → think sodium channel blockade.",
      "TCA toxicity loves aVR."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Toxicology Mega Pearls: في التسمم لا تطارد اسم السم قبل إنقاذ المريض. ابدأ بالـ ABCDE، افحص السكر و ECG، تعرف على toxidrome، ثم استخدم الترياق المناسب إذا كان واضحًا ومطلوبًا.",
    "visualHints": [
      {
        "id": "pdf-toxic-megacolon-p182-2",
        "src": "/visual-assets/toxicology-antidotes/pdf-toxic-megacolon-p182-2.jpg",
        "title": "Toxic Megacolon",
        "type": "Diagnostic imaging visual",
        "topic": "Toxic Megacolon",
        "needsReview": false
      },
      {
        "id": "pdf-megaloblastic-anemia-p522-2",
        "src": "/visual-assets/topics/pdf-megaloblastic-anemia-p522-2.jpg",
        "title": "Megaloblastic Anemia",
        "type": "Algorithm / table / high-yield summary",
        "topic": "Megaloblastic Anemia",
        "needsReview": true
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-181-top-rosh-style-emergency-medicine-pearls",
    "number": 181,
    "title": "Top Rosh-Style Emergency Medicine Pearls",
    "chapter": "Environmental, Allergy & EENT",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Rosh-style questions usually test",
      "most dangerous diagnosis",
      "best next step"
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Shock is perfusion failure, not blood pressure.",
      "Normal ECG does not exclude ACS.",
      "Normal CT does not exclude early posterior stroke.",
      "Normal Doppler does not exclude ovarian torsion.",
      "Normal pulses do not exclude compartment syndrome.",
      "Low hCG does not exclude ectopic pregnancy.",
      "No fever does not exclude sepsis.",
      "No neck stiffness does not exclude meningitis."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Top Rosh-Style Emergency Medicine Pearls: أسئلة الامتحان غالبًا تختبر القرار الآمن التالي، وليس المعلومة وحدها. ابحث عن عدم الاستقرار، التشخيص الذي لا يجوز تفويته، والفخ الذي يحاول السؤال أن يدفعك إليه.",
    "visualHints": [
      {
        "id": "pdf-hypertensive-urgency-and-emergency-p54-4",
        "src": "/visual-assets/topics/pdf-hypertensive-urgency-and-emergency-p54-4.jpg",
        "title": "Hypertensive Urgency and Emergency",
        "type": "Algorithm / table / high-yield summary",
        "topic": "Hypertensive Urgency and Emergency",
        "needsReview": true
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-182-top-ecg-traps",
    "number": 182,
    "title": "Top ECG Traps",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Top Ecg Traps",
      "Posterior MI mistaken for NSTEMI.",
      "Wellens sent for stress test.",
      "De Winter missed as nonspecific ST depression.",
      "WPW + AF treated with AV nodal blockers."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Emergency medicine is risk management: do not miss the dangerous diagnosis.",
      "Normal early tests do not always exclude serious disease when the story is high-risk.",
      "Trends and reassessment are often more important than one isolated value."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Top ECG Traps: أسئلة الامتحان غالبًا تختبر القرار الآمن التالي، وليس المعلومة وحدها. ابحث عن عدم الاستقرار، التشخيص الذي لا يجوز تفويته، والفخ الذي يحاول السؤال أن يدفعك إليه.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-183-top-pocus-traps",
    "number": 183,
    "title": "Top POCUS Traps",
    "chapter": "POCUS & Visual Diagnosis",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Top Pocus Traps",
      "Negative FAST used to rule out abdominal trauma.",
      "Poor-quality scan documented as negative.",
      "Pericardial effusion called tamponade without physiology.",
      "No lung sliding assumed pneumothorax every time."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Emergency medicine is risk management: do not miss the dangerous diagnosis.",
      "Normal early tests do not always exclude serious disease when the story is high-risk.",
      "Trends and reassessment are often more important than one isolated value."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Top POCUS Traps: السونار في الطوارئ ليس تصويرًا كاملًا، بل جواب سريع لسؤال محدد يغيّر القرار. استخدمه لتأكيد الخطر أو توجيه العلاج، لكن لا تجعل صورة ضعيفة أو غير مكتملة تطمئنك كاذبًا.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-184-top-shock-algorithms",
    "number": 184,
    "title": "Top Shock Algorithms",
    "chapter": "Critical Care & Infusions",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Top Shock Algorithms",
      "Undifferentiated Shock",
      "Abcde",
      "IV/IO access",
      "ECG + glucose + lactate + POCUS"
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Emergency medicine is risk management: do not miss the dangerous diagnosis.",
      "Normal early tests do not always exclude serious disease when the story is high-risk.",
      "Trends and reassessment are often more important than one isolated value."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Top Shock Algorithms: لا تعالج الرقم فقط؛ عالج الفسيولوجيا. اسأل هل المشكلة سوائل، أو قلب، أو انسداد، أو توسع أوعية؟ ثم اختر السوائل أو الضواغط أو التهوية أو الإجراء المناسب مع إعادة تقييم مستمرة.",
    "visualHints": [
      {
        "id": "pdf-endocarditis-p12-3",
        "src": "/visual-assets/pocus-atlas/pdf-endocarditis-p12-3.jpg",
        "title": "ENDOCARDITIS",
        "type": "Diagnostic imaging visual",
        "topic": "ENDOCARDITIS",
        "needsReview": false
      },
      {
        "id": "pdf-acute-decompensated-heart-failure-p51-4",
        "src": "/visual-assets/ecg-atlas/pdf-acute-decompensated-heart-failure-p51-4.jpg",
        "title": "Acute Decompensated Heart Failure",
        "type": "Diagnostic imaging visual",
        "topic": "Acute Decompensated Heart Failure",
        "needsReview": false
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-185-top-airway-mistakes",
    "number": 185,
    "title": "Top Airway MIstakes",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Top Airway Mistakes",
      "Intubating without resuscitating first.",
      "Forgetting post-intubation hypotension.",
      "No backup airway plan.",
      "No suction ready."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Emergency medicine is risk management: do not miss the dangerous diagnosis.",
      "Normal early tests do not always exclude serious disease when the story is high-risk.",
      "Trends and reassessment are often more important than one isolated value."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Top Airway MIstakes: تأمين المجرى الهوائي ليس مجرد إدخال أنبوب، بل خطة كاملة قبل وأثناء وبعد الإجراء. حضّر الأدوات والأدوية وخطة الفشل، ثم أكد الأنبوب وابدأ التسكين والتهوية المناسبة.",
    "visualHints": [
      {
        "id": "pdf-acute-epiglottitis-p201-2",
        "src": "/visual-assets/topics/pdf-acute-epiglottitis-p201-2.jpg",
        "title": "Acute Epiglottitis",
        "type": "Diagnostic imaging visual",
        "topic": "Acute Epiglottitis",
        "needsReview": false
      },
      {
        "id": "pdf-asthma-p206-2",
        "src": "/visual-assets/topics/pdf-asthma-p206-2.jpg",
        "title": "Asthma",
        "type": "Diagnostic imaging visual",
        "topic": "Asthma",
        "needsReview": false
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-186-top-trauma-algorithms",
    "number": 186,
    "title": "Top Trauma Algorithms",
    "chapter": "Trauma & Procedures",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Top Trauma Algorithms",
      "Trauma Primary Survey",
      "A — Airway/C-spine",
      "B — Breathing",
      "C — Circulation"
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Emergency medicine is risk management: do not miss the dangerous diagnosis.",
      "Normal early tests do not always exclude serious disease when the story is high-risk.",
      "Trends and reassessment are often more important than one isolated value."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Top Trauma Algorithms: في الحوادث لا تبدأ بالتشخيص التفصيلي. ابدأ بما يقتل خلال دقائق: airway، النزف، الصدر، الصدمة، ثم افحص باقي الإصابات بعد تثبيت المريض.",
    "visualHints": [
      {
        "id": "pdf-mitral-regurgitation-p70-3",
        "src": "/visual-assets/topics/pdf-mitral-regurgitation-p70-3.jpg",
        "title": "Mitral Regurgitation",
        "type": "Algorithm / table / high-yield summary",
        "topic": "Mitral Regurgitation",
        "needsReview": false
      },
      {
        "id": "pdf-back-strain-sprain-low-back-pain-p78-2",
        "src": "/visual-assets/toxicology-antidotes/pdf-back-strain-sprain-low-back-pain-p78-2.jpg",
        "title": "Back Strain/Sprain/Low Back Pain",
        "type": "Diagnostic imaging visual",
        "topic": "Back Strain/Sprain/Low Back Pain",
        "needsReview": true
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-187-top-pediatric-emergencies",
    "number": 187,
    "title": "Top Pediatric Emergencies",
    "chapter": "Pediatric Emergencies",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Top Pediatric Emergencies",
      "Neonatal fever.",
      "Pediatric sepsis.",
      "Respiratory failure.",
      "Severe asthma."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Emergency medicine is risk management: do not miss the dangerous diagnosis.",
      "Normal early tests do not always exclude serious disease when the story is high-risk.",
      "Trends and reassessment are often more important than one isolated value."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Top Pediatric Emergencies: الطفل قد يتدهور بسرعة وبعلامات خفية. ركّز على التنفس، الدوران، الجفاف، السلوك العام، والجرعات حسب الوزن، واستدعِ المساعدة مبكرًا عند الشك.",
    "visualHints": [
      {
        "id": "pdf-treatment-of-hypertensive-emergencies-p55-4",
        "src": "/visual-assets/topics/pdf-treatment-of-hypertensive-emergencies-p55-4.jpg",
        "title": "Treatment of Hypertensive Emergencies",
        "type": "Algorithm / table / high-yield summary",
        "topic": "Treatment of Hypertensive Emergencies",
        "needsReview": true
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-188-top-ob-gyn-board-traps",
    "number": 188,
    "title": "Top Ob/Gyn Board Traps",
    "chapter": "Board Review & Exam Strategy",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Top Ob/Gyn Board Traps",
      "No pregnancy test.",
      "Low hCG used to exclude ectopic.",
      "Third-trimester bleeding gets digital exam.",
      "Eclampsia treated without magnesium."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Emergency medicine is risk management: do not miss the dangerous diagnosis.",
      "Normal early tests do not always exclude serious disease when the story is high-risk.",
      "Trends and reassessment are often more important than one isolated value."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Top Ob/Gyn Board Traps: أسئلة الامتحان غالبًا تختبر القرار الآمن التالي، وليس المعلومة وحدها. ابحث عن عدم الاستقرار، التشخيص الذي لا يجوز تفويته، والفخ الذي يحاول السؤال أن يدفعك إليه.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-189-final-rapid-review-table",
    "number": 189,
    "title": "Final Rapid Review Table",
    "chapter": "Board Review & Exam Strategy",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Final Rapid Review Table",
      "Complaint Must-not-miss",
      "Chest pain ACS, dissection, PE",
      "Dyspnea PE, PTX, CHF, asthma",
      "Headache SAH, meningitis, ICH"
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Emergency medicine is risk management: do not miss the dangerous diagnosis.",
      "Normal early tests do not always exclude serious disease when the story is high-risk.",
      "Trends and reassessment are often more important than one isolated value."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Final Rapid Review Table: أسئلة الامتحان غالبًا تختبر القرار الآمن التالي، وليس المعلومة وحدها. ابحث عن عدم الاستقرار، التشخيص الذي لا يجوز تفويته، والفخ الذي يحاول السؤال أن يدفعك إليه.",
    "visualHints": [
      {
        "id": "pdf-endocarditis-p15-4",
        "src": "/visual-assets/topics/pdf-endocarditis-p15-4.jpg",
        "title": "Endocarditis",
        "type": "Algorithm / table / high-yield summary",
        "topic": "Endocarditis",
        "needsReview": true
      },
      {
        "id": "pdf-heart-score-p25-4",
        "src": "/visual-assets/topics/pdf-heart-score-p25-4.jpg",
        "title": "HEART Score",
        "type": "Algorithm / table / high-yield summary",
        "topic": "HEART Score",
        "needsReview": true
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-190-final-em-master-formula",
    "number": 190,
    "title": "Final Em Master Formula",
    "chapter": "Board Review & Exam Strategy",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Final Em Master Formula",
      "Emergency Medicine =",
      "Recognize danger",
      "What can kill this patient?",
      "Resuscitate physiology"
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Emergency medicine is risk management: do not miss the dangerous diagnosis.",
      "Normal early tests do not always exclude serious disease when the story is high-risk.",
      "Trends and reassessment are often more important than one isolated value."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Final Em Master Formula: أسئلة الامتحان غالبًا تختبر القرار الآمن التالي، وليس المعلومة وحدها. ابحث عن عدم الاستقرار، التشخيص الذي لا يجوز تفويته، والفخ الذي يحاول السؤال أن يدفعك إليه.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-191-top-50-disposition-pearls",
    "number": 191,
    "title": "Top 50 Disposition Pearls",
    "chapter": "Environmental, Allergy & EENT",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Top 50 Disposition Pearls",
      "Persistent tachycardia is not benign.",
      "Persistent hypoxia needs explanation.",
      "Elderly abdominal pain is high risk.",
      "Anticoagulated head injury needs caution."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Emergency medicine is risk management: do not miss the dangerous diagnosis.",
      "Normal early tests do not always exclude serious disease when the story is high-risk.",
      "Trends and reassessment are often more important than one isolated value."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Top 50 Disposition Pearls: أسئلة الامتحان غالبًا تختبر القرار الآمن التالي، وليس المعلومة وحدها. ابحث عن عدم الاستقرار، التشخيص الذي لا يجوز تفويته، والفخ الذي يحاول السؤال أن يدفعك إليه.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-192-final-top-50-do-not-miss-actions",
    "number": 192,
    "title": "Final Top 50 “Do Not MIss” Actions",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Final Top 50 “Do Not Miss” Actions",
      "Give IM epinephrine for anaphylaxis.",
      "Give calcium for hyperkalemia with ECG changes.",
      "Defibrillate VF/pVT.",
      "Do not shock asystole."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Emergency medicine is risk management: do not miss the dangerous diagnosis.",
      "Normal early tests do not always exclude serious disease when the story is high-risk.",
      "Trends and reassessment are often more important than one isolated value."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Final Top 50 “Do Not MIss” Actions: فكّر كطبيب طوارئ. ابدأ بما يقتل الآن، ابحث عن العلامات الحمراء، ثبّت المريض قبل التفاصيل، ثم اختر الفحص أو العلاج الذي يغيّر القرار بأسرع وأأمن طريقة.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-193-final-exam-thinking-framework",
    "number": 193,
    "title": "Final Exam Thinking Framework",
    "chapter": "Board Review & Exam Strategy",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Final Exam Thinking Framework",
      "When a question asks",
      "“Best next step”",
      "Choose the action that prevents death first.",
      "“Most appropriate management”"
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Emergency medicine is risk management: do not miss the dangerous diagnosis.",
      "Normal early tests do not always exclude serious disease when the story is high-risk.",
      "Trends and reassessment are often more important than one isolated value."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Final Exam Thinking Framework: أسئلة الامتحان غالبًا تختبر القرار الآمن التالي، وليس المعلومة وحدها. ابحث عن عدم الاستقرار، التشخيص الذي لا يجوز تفويته، والفخ الذي يحاول السؤال أن يدفعك إليه.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-194-final-board-trap-matrix",
    "number": 194,
    "title": "Final Board Trap Matrix",
    "chapter": "Board Review & Exam Strategy",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Final Board Trap Matrix",
      "Trap phrase Think",
      "“Pain resolved” Wellens, unstable angina",
      "“Normal vitals” Early shock still possible",
      "“Young healthy patient” PE/ACS still possible"
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Emergency medicine is risk management: do not miss the dangerous diagnosis.",
      "Normal early tests do not always exclude serious disease when the story is high-risk.",
      "Trends and reassessment are often more important than one isolated value."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Final Board Trap Matrix: أسئلة الامتحان غالبًا تختبر القرار الآمن التالي، وليس المعلومة وحدها. ابحث عن عدم الاستقرار، التشخيص الذي لا يجوز تفويته، والفخ الذي يحاول السؤال أن يدفعك إليه.",
    "visualHints": [
      {
        "id": "pdf-extrapulmonary-manifestations-of-tuberculosis-p234-2",
        "src": "/visual-assets/topics/pdf-extrapulmonary-manifestations-of-tuberculosis-p234-2.jpg",
        "title": "Extrapulmonary Manifestations of Tuberculosis",
        "type": "Clinical visual",
        "topic": "Extrapulmonary Manifestations of Tuberculosis",
        "needsReview": true
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-195-final-20-master-algorithms",
    "number": 195,
    "title": "Final 20 Master Algorithms",
    "chapter": "Board Review & Exam Strategy",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Final 20 Master Algorithms",
      "Shock → classify physiology → treat cause.",
      "Chest pain → ECG → ACS/dissection/PE.",
      "Dyspnea → airway/lung/heart/PE.",
      "AMS → glucose/O₂/temp/tox/sepsis/brain."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Emergency medicine is risk management: do not miss the dangerous diagnosis.",
      "Normal early tests do not always exclude serious disease when the story is high-risk.",
      "Trends and reassessment are often more important than one isolated value."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Final 20 Master Algorithms: أسئلة الامتحان غالبًا تختبر القرار الآمن التالي، وليس المعلومة وحدها. ابحث عن عدم الاستقرار، التشخيص الذي لا يجوز تفويته، والفخ الذي يحاول السؤال أن يدفعك إليه.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-196-final-one-line-em-pearls",
    "number": 196,
    "title": "Final “One-Line” Em Pearls",
    "chapter": "Environmental, Allergy & EENT",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Final “One-Line” Em Pearls",
      "The sickest patient gets physiology first.",
      "The quiet child may be the sick child.",
      "The normal ECG is not a warranty.",
      "The elderly abdomen lies."
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Emergency medicine is risk management: do not miss the dangerous diagnosis.",
      "Normal early tests do not always exclude serious disease when the story is high-risk.",
      "Trends and reassessment are often more important than one isolated value."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Final “One-Line” Em Pearls: أسئلة الامتحان غالبًا تختبر القرار الآمن التالي، وليس المعلومة وحدها. ابحث عن عدم الاستقرار، التشخيص الذي لا يجوز تفويته، والفخ الذي يحاول السؤال أن يدفعك إليه.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-197-final-high-yield-consult-list",
    "number": 197,
    "title": "Final High-Yield Consult List",
    "chapter": "Board Review & Exam Strategy",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Final High-Yield Consult List",
      "Call early for",
      "STEMI/OMI → cardiology",
      "Stroke thrombectomy candidate → stroke/neurointervention",
      "SAH/ICH/herniation → neurosurgery/neurocritical care"
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Emergency medicine is risk management: do not miss the dangerous diagnosis.",
      "Normal early tests do not always exclude serious disease when the story is high-risk.",
      "Trends and reassessment are often more important than one isolated value."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Final High-Yield Consult List: أسئلة الامتحان غالبًا تختبر القرار الآمن التالي، وليس المعلومة وحدها. ابحث عن عدم الاستقرار، التشخيص الذي لا يجوز تفويته، والفخ الذي يحاول السؤال أن يدفعك إليه.",
    "visualHints": [
      {
        "id": "pdf-endocarditis-p15-4",
        "src": "/visual-assets/topics/pdf-endocarditis-p15-4.jpg",
        "title": "Endocarditis",
        "type": "Algorithm / table / high-yield summary",
        "topic": "Endocarditis",
        "needsReview": true
      },
      {
        "id": "pdf-heart-score-p25-4",
        "src": "/visual-assets/topics/pdf-heart-score-p25-4.jpg",
        "title": "HEART Score",
        "type": "Algorithm / table / high-yield summary",
        "topic": "HEART Score",
        "needsReview": true
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-198-final-emergency-medicine-red-flag-words",
    "number": 198,
    "title": "Final Emergency Medicine “Red Flag Words”",
    "chapter": "Board Review & Exam Strategy",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Final Emergency Medicine “Red Flag Words”",
      "When you see these, slow down",
      "syncope",
      "exertional",
      "thunderclap"
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Emergency medicine is risk management: do not miss the dangerous diagnosis.",
      "Normal early tests do not always exclude serious disease when the story is high-risk.",
      "Trends and reassessment are often more important than one isolated value."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Final Emergency Medicine “Red Flag Words”: أسئلة الامتحان غالبًا تختبر القرار الآمن التالي، وليس المعلومة وحدها. ابحث عن عدم الاستقرار، التشخيص الذي لا يجوز تفويته، والفخ الذي يحاول السؤال أن يدفعك إليه.",
    "visualHints": [
      {
        "id": "pdf-hypertensive-urgency-and-emergency-p54-4",
        "src": "/visual-assets/topics/pdf-hypertensive-urgency-and-emergency-p54-4.jpg",
        "title": "Hypertensive Urgency and Emergency",
        "type": "Algorithm / table / high-yield summary",
        "topic": "Hypertensive Urgency and Emergency",
        "needsReview": true
      },
      {
        "id": "pdf-red-flags-of-back-pain-p80-2",
        "src": "/visual-assets/topics/pdf-red-flags-of-back-pain-p80-2.jpg",
        "title": "Red Flags of Back Pain",
        "type": "Clinical visual",
        "topic": "Red Flags of Back Pain",
        "needsReview": true
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "master-199-final-master-checklist-before-answering-any-board-question",
    "number": 199,
    "title": "Final Master Checklist Before Answering Any Board Question",
    "chapter": "Board Review & Exam Strategy",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Final Master Checklist Before Answering Any Board Question",
      "Ask",
      "Is the patient unstable?",
      "What kills first?",
      "Is airway threatened?"
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Emergency medicine is risk management: do not miss the dangerous diagnosis.",
      "Normal early tests do not always exclude serious disease when the story is high-risk.",
      "Trends and reassessment are often more important than one isolated value."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Final Master Checklist Before Answering Any Board Question: أسئلة الامتحان غالبًا تختبر القرار الآمن التالي، وليس المعلومة وحدها. ابحث عن عدم الاستقرار، التشخيص الذي لا يجوز تفويته، والفخ الذي يحاول السؤال أن يدفعك إليه.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "master-200-final-closing-chapter-the-emergency-physician-s-mindset",
    "number": 200,
    "title": "Final Closing Chapter — The Emergency Physician’S MIndset",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Master Reference Chapter",
    "sourceRoots": [
      "Emergency Medicine Master Reference",
      "Tintinalli/Rosen/FRCEM-style internal source map"
    ],
    "core": [
      "Final Closing Chapter — The Emergency Physician’S Mindset",
      "Emergency Medicine is not the specialty of knowing every diagnosis.",
      "It is the specialty of knowing what cannot wait.",
      "The emergency physician does not need perfect certainty.",
      "The emergency physician needs"
    ],
    "presentation": [
      "Look for abnormal vital signs, severe pain, altered mental status, hypoxia, shock, syncope, ECG changes, or rapid clinical deterioration.",
      "Ask focused history questions that separate benign presentations from must-not-miss emergencies.",
      "Use bedside exam, ECG, POCUS, labs, and imaging only when they change immediate management."
    ],
    "management": [
      "Stabilize first: airway, breathing, circulation, glucose, pain control, monitoring, IV access, and early senior help when unstable.",
      "Treat the most dangerous likely diagnosis while confirming with targeted investigations.",
      "Reassess response and decide safe disposition: discharge, observation, admission, ICU, cath lab, OR, or specialist pathway."
    ],
    "pearls": [
      "Emergency medicine is risk management: do not miss the dangerous diagnosis.",
      "Normal early tests do not always exclude serious disease when the story is high-risk.",
      "Trends and reassessment are often more important than one isolated value."
    ],
    "traps": [
      "Do not let a normal initial test overrule a dangerous clinical presentation.",
      "Do not choose a slow diagnostic step when the patient first needs stabilization.",
      "Do not discharge patients with red flags, abnormal vitals, or unresolved high-risk physiology."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Final Closing Chapter — The Emergency Physician’S MIndset: فكّر كطبيب طوارئ. ابدأ بما يقتل الآن، ابحث عن العلامات الحمراء، ثبّت المريض قبل التفاصيل، ثم اختر الفحص أو العلاج الذي يغيّر القرار بأسرع وأأمن طريقة.",
    "visualHints": [
      {
        "id": "pdf-hypertensive-urgency-and-emergency-p54-4",
        "src": "/visual-assets/topics/pdf-hypertensive-urgency-and-emergency-p54-4.jpg",
        "title": "Hypertensive Urgency and Emergency",
        "type": "Algorithm / table / high-yield summary",
        "topic": "Hypertensive Urgency and Emergency",
        "needsReview": true
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "db-0-lung-protective-ventilation",
    "number": 201,
    "title": "Lung-Protective Ventilation",
    "chapter": "Airway & Ventilation",
    "sourceType": "Project Question-Derived Topic",
    "sourceRoots": [
      "Project MCQ/flashcard/numerical source map",
      "Rosen Ch 2",
      "FRCEM Batch 1"
    ],
    "core": [
      "Low tidal volume strategies should begin in the ED, not just the ICU.",
      "Reduces incidence of pulmonary complications and secondary lung injury (VILI).",
      "Inspiratory airway pressures correlate with hospital mortality even without ARDS."
    ],
    "presentation": [
      "Recognize the dangerous pattern, confirm with the fastest useful test, and avoid reassuring yourself before life-threats are excluded."
    ],
    "management": [
      "Stabilize first, choose tests that change management, treat time-sensitive threats, then decide disposition."
    ],
    "pearls": [
      "Low tidal volume strategies should begin in the ED, not just the ICU.",
      "Reduces incidence of pulmonary complications and secondary lung injury (VILI).",
      "Inspiratory airway pressures correlate with hospital mortality even without ARDS."
    ],
    "traps": [
      "Assuming lung-protective strategies are only for patients with established ARDS."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Lung-Protective Ventilation: تأمين المجرى الهوائي ليس مجرد إدخال أنبوب، بل خطة كاملة قبل وأثناء وبعد الإجراء. حضّر الأدوات والأدوية وخطة الفشل، ثم أكد الأنبوب وابدأ التسكين والتهوية المناسبة.",
    "visualHints": [
      {
        "id": "pdf-lung-cancer-p213-2",
        "src": "/visual-assets/ecg-atlas/pdf-lung-cancer-p213-2.jpg",
        "title": "Lung Cancer",
        "type": "Diagnostic imaging visual",
        "topic": "Lung Cancer",
        "needsReview": true
      }
    ],
    "needsDoseVerification": false,
    "numbers": [
      "Target tidal volume: 6-8 mL/kg of Ideal Body Weight."
    ]
  },
  {
    "id": "db-1-sepsis-3-and-qsofa",
    "number": 202,
    "title": "Sepsis-3 and qSOFA",
    "chapter": "Critical Care & Infusions",
    "sourceType": "Project Question-Derived Topic",
    "sourceRoots": [
      "Project MCQ/flashcard/numerical source map",
      "Rosen Ch 2",
      "HIPPO Batch 5"
    ],
    "core": [
      "Sepsis defined as life-threatening organ dysfunction (SOFA change >= 2).",
      "qSOFA is a bedside tool for high-risk identification outside the ICU.",
      "Prioritizes organ dysfunction over non-specific inflammation (SIRS)."
    ],
    "presentation": [
      "Recognize the dangerous pattern, confirm with the fastest useful test, and avoid reassuring yourself before life-threats are excluded."
    ],
    "management": [
      "qSOFA score for mortality prediction."
    ],
    "pearls": [
      "Sepsis defined as life-threatening organ dysfunction (SOFA change >= 2).",
      "qSOFA is a bedside tool for high-risk identification outside the ICU.",
      "Prioritizes organ dysfunction over non-specific inflammation (SIRS)."
    ],
    "traps": [
      "Relying solely on SIRS criteria (fever/HR) to define sepsis in modern practice."
    ],
    "algorithm": [
      "qSOFA score for mortality prediction."
    ],
    "arabic": "الفكرة ببساطة في Sepsis-3 and qSOFA: لا تعالج الرقم فقط؛ عالج الفسيولوجيا. اسأل هل المشكلة سوائل، أو قلب، أو انسداد، أو توسع أوعية؟ ثم اختر السوائل أو الضواغط أو التهوية أو الإجراء المناسب مع إعادة تقييم مستمرة.",
    "visualHints": [
      {
        "id": "pdf-olecranon-bursitis-p83-2",
        "src": "/visual-assets/topics/pdf-olecranon-bursitis-p83-2.jpg",
        "title": "Olecranon Bursitis",
        "type": "Diagnostic imaging visual",
        "topic": "Olecranon Bursitis",
        "needsReview": false
      },
      {
        "id": "pdf-olecranon-bursitis-p83-3",
        "src": "/visual-assets/topics/pdf-olecranon-bursitis-p83-3.jpg",
        "title": "Olecranon Bursitis",
        "type": "Diagnostic imaging visual",
        "topic": "Olecranon Bursitis",
        "needsReview": false
      }
    ],
    "needsDoseVerification": false,
    "numbers": [
      "qSOFA Criteria: Altered mental status (GCS < 15), SBP <= 100 mmHg, RR >= 22 breaths/min."
    ]
  },
  {
    "id": "db-2-cardiogenic-shock-management",
    "number": 203,
    "title": "Cardiogenic Shock Management",
    "chapter": "Critical Care & Infusions",
    "sourceType": "Project Question-Derived Topic",
    "sourceRoots": [
      "Project MCQ/flashcard/numerical source map",
      "Rosen Ch 3",
      "FRCEM Batch 2"
    ],
    "core": [
      "Norepinephrine is the first-line vasopressor.",
      "Avoid fluid boluses if rales and pulmonary edema are present.",
      "Definitive management is rapid reperfusion (PCI/Thrombolytics)."
    ],
    "presentation": [
      "Recognize the dangerous pattern, confirm with the fastest useful test, and avoid reassuring yourself before life-threats are excluded."
    ],
    "management": [
      "Stabilize first, choose tests that change management, treat time-sensitive threats, then decide disposition."
    ],
    "pearls": [
      "Norepinephrine is the first-line vasopressor.",
      "Avoid fluid boluses if rales and pulmonary edema are present.",
      "Definitive management is rapid reperfusion (PCI/Thrombolytics)."
    ],
    "traps": [
      "Giving crystalloid fluid challenges to a hypotensive patient with pulmonary edema (wet lungs)."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Cardiogenic Shock Management: لا تعالج الرقم فقط؛ عالج الفسيولوجيا. اسأل هل المشكلة سوائل، أو قلب، أو انسداد، أو توسع أوعية؟ ثم اختر السوائل أو الضواغط أو التهوية أو الإجراء المناسب مع إعادة تقييم مستمرة.",
    "visualHints": [
      {
        "id": "pdf-cardiogenic-shock-p56-4",
        "src": "/visual-assets/topics/pdf-cardiogenic-shock-p56-4.jpg",
        "title": "Cardiogenic Shock",
        "type": "Algorithm / table / high-yield summary",
        "topic": "Cardiogenic Shock",
        "needsReview": false
      },
      {
        "id": "pdf-endocarditis-p12-3",
        "src": "/visual-assets/pocus-atlas/pdf-endocarditis-p12-3.jpg",
        "title": "ENDOCARDITIS",
        "type": "Diagnostic imaging visual",
        "topic": "ENDOCARDITIS",
        "needsReview": false
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "db-3-targeted-temperature-management-ttm",
    "number": 204,
    "title": "Targeted Temperature Management (TTM)",
    "chapter": "Environmental, Allergy & EENT",
    "sourceType": "Project Question-Derived Topic",
    "sourceRoots": [
      "Project MCQ/flashcard/numerical source map",
      "Rosen Ch 4",
      "HIPPO Batch 4"
    ],
    "core": [
      "Indicated for all comatose patients with ROSC regardless of initial rhythm.",
      "Induction of cooling commonly causes benign sinus bradycardia.",
      "Avoid pre-hospital cold saline due to risk of pulmonary edema/rearrest."
    ],
    "presentation": [
      "Recognize the dangerous pattern, confirm with the fastest useful test, and avoid reassuring yourself before life-threats are excluded."
    ],
    "management": [
      "Stabilize first, choose tests that change management, treat time-sensitive threats, then decide disposition."
    ],
    "pearls": [
      "Indicated for all comatose patients with ROSC regardless of initial rhythm.",
      "Induction of cooling commonly causes benign sinus bradycardia.",
      "Avoid pre-hospital cold saline due to risk of pulmonary edema/rearrest."
    ],
    "traps": [
      "Withdrawing care early; neuro-prognostication is only reliable 72 hours post-arrest.",
      "Treating post-TTM bradycardia if the blood pressure is stable."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Targeted Temperature Management (TTM): فكّر كطبيب طوارئ. ابدأ بما يقتل الآن، ابحث عن العلامات الحمراء، ثبّت المريض قبل التفاصيل، ثم اختر الفحص أو العلاج الذي يغيّر القرار بأسرع وأأمن طريقة.",
    "visualHints": [
      {
        "id": "pdf-initial-interventions-for-management-of-acute-coronary-syndrome-p45-4",
        "src": "/visual-assets/topics/pdf-initial-interventions-for-management-of-acute-coronary-syndrome-p45-4.jpg",
        "title": "Initial Interventions for Management of Acute Coronary Syndrome",
        "type": "Algorithm / table / high-yield summary",
        "topic": "Initial Interventions for Management of Acute Coronary Syndrome",
        "needsReview": true
      },
      {
        "id": "pdf-pharmacologic-management-of-acute-asthma-exacerbations-p207-2",
        "src": "/visual-assets/topics/pdf-pharmacologic-management-of-acute-asthma-exacerbations-p207-2.jpg",
        "title": "Pharmacologic Management of Acute Asthma Exacerbations",
        "type": "Algorithm / table / high-yield summary",
        "topic": "Pharmacologic Management of Acute Asthma Exacerbations",
        "needsReview": true
      }
    ],
    "needsDoseVerification": true,
    "numbers": [
      "Target temperature range: 32°C to 36°C.",
      "Wait 72 hours before declaring poor neurologic prognosis."
    ]
  },
  {
    "id": "db-4-methemoglobinemia",
    "number": 205,
    "title": "Methemoglobinemia",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Project Question-Derived Topic",
    "sourceRoots": [
      "Project MCQ/flashcard/numerical source map",
      "Rosen Ch 10",
      "HIPPO Batch 5"
    ],
    "core": [
      "Oxidizing agents (Benzocaine, Dapsone, Nitrites) convert Fe2+ to Fe3+.",
      "Causes 'refractory' cyanosis (does not improve with 100% O2).",
      "Pulse oximetry often reads ~85% regardless of true PaO2."
    ],
    "presentation": [
      "Recognize the dangerous pattern, confirm with the fastest useful test, and avoid reassuring yourself before life-threats are excluded."
    ],
    "management": [
      "Stabilize first, choose tests that change management, treat time-sensitive threats, then decide disposition."
    ],
    "pearls": [
      "Oxidizing agents (Benzocaine, Dapsone, Nitrites) convert Fe2+ to Fe3+.",
      "Causes 'refractory' cyanosis (does not improve with 100% O2).",
      "Pulse oximetry often reads ~85% regardless of true PaO2."
    ],
    "traps": [
      "Assuming a respiratory cause for low O2 sat when blood appears 'chocolate brown'."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Methemoglobinemia: فكّر كطبيب طوارئ. ابدأ بما يقتل الآن، ابحث عن العلامات الحمراء، ثبّت المريض قبل التفاصيل، ثم اختر الفحص أو العلاج الذي يغيّر القرار بأسرع وأأمن طريقة.",
    "visualHints": [],
    "needsDoseVerification": true,
    "numbers": [
      "Classic SpO2 plateau: 85%.",
      "Antidote dose: Methylene Blue 1-2 mg/kg IV."
    ]
  },
  {
    "id": "db-5-eclampsia",
    "number": 206,
    "title": "Eclampsia",
    "chapter": "OB/GYN Emergencies",
    "sourceType": "Project Question-Derived Topic",
    "sourceRoots": [
      "Project MCQ/flashcard/numerical source map",
      "Rosen Ch 14",
      "Tintinalli Ch 9"
    ],
    "core": [
      "Magnesium Sulfate is the first-line therapy to terminate and prevent seizures.",
      "Superior to phenytoin/benzodiazepines for maintaining uterine blood flow.",
      "Risk period: 20 weeks gestational age up to 8 weeks postpartum."
    ],
    "presentation": [
      "Recognize the dangerous pattern, confirm with the fastest useful test, and avoid reassuring yourself before life-threats are excluded."
    ],
    "management": [
      "Stabilize first, choose tests that change management, treat time-sensitive threats, then decide disposition."
    ],
    "pearls": [
      "Magnesium Sulfate is the first-line therapy to terminate and prevent seizures.",
      "Superior to phenytoin/benzodiazepines for maintaining uterine blood flow.",
      "Risk period: 20 weeks gestational age up to 8 weeks postpartum."
    ],
    "traps": [
      "Using standard anti-epileptics as first-line instead of Magnesium.",
      "Ruling out eclampsia because the patient is postpartum (up to 8 weeks)."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Eclampsia: في الحمل والنزف النسائي لا تنسَ الأخطار القاتلة مثل ectopic pregnancy والنزف والاختلاجات. ثبّت المريضة أولًا، وافحص الحمل، واستدعِ النساء/الجراحة حسب الحالة.",
    "visualHints": [],
    "needsDoseVerification": true,
    "numbers": [
      "Loading dose: 4-6 g IV Magnesium Sulfate.",
      "Maintenance: 1-2 g/hr."
    ]
  },
  {
    "id": "db-6-tension-pneumothorax",
    "number": 207,
    "title": "Tension Pneumothorax",
    "chapter": "Respiratory Emergencies",
    "sourceType": "Project Question-Derived Topic",
    "sourceRoots": [
      "Project MCQ/flashcard/numerical source map",
      "Rosen Ch 22",
      "Tintinalli Ch 4"
    ],
    "core": [
      "Clinical diagnosis: Hypotension, unilateral absent breath sounds, tracheal deviation (late).",
      "In intubated patients: Sudden increased resistance during bagging/ventilation.",
      "Requires immediate needle decompression followed by tube thoracostomy."
    ],
    "presentation": [
      "Recognize the dangerous pattern, confirm with the fastest useful test, and avoid reassuring yourself before life-threats are excluded."
    ],
    "management": [
      "Stabilize first, choose tests that change management, treat time-sensitive threats, then decide disposition."
    ],
    "pearls": [
      "Clinical diagnosis: Hypotension, unilateral absent breath sounds, tracheal deviation (late).",
      "In intubated patients: Sudden increased resistance during bagging/ventilation.",
      "Requires immediate needle decompression followed by tube thoracostomy."
    ],
    "traps": [
      "Waiting for an X-ray to confirm the diagnosis in a hypotensive patient."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Tension Pneumothorax: في ضيق النفس اسأل أولًا هل المريض يفشل في الأكسجة أو التهوية. الأكسجين وحده لا يكفي دائمًا؛ قد تحتاج NIV أو intubation أو علاج السبب بسرعة.",
    "visualHints": [
      {
        "id": "pdf-tension-pneumothorax-p225-2",
        "src": "/visual-assets/topics/pdf-tension-pneumothorax-p225-2.jpg",
        "title": "Tension Pneumothorax",
        "type": "Algorithm / table / high-yield summary",
        "topic": "Tension Pneumothorax",
        "needsReview": true
      },
      {
        "id": "pdf-conduction-disorders-p32-4",
        "src": "/visual-assets/ecg-atlas/pdf-conduction-disorders-p32-4.jpg",
        "title": "Conduction Disorders",
        "type": "Diagnostic imaging visual",
        "topic": "Conduction Disorders",
        "needsReview": false
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "db-7-gastric-outlet-obstruction-goo",
    "number": 208,
    "title": "Gastric Outlet Obstruction (GOO)",
    "chapter": "Core Emergency Medicine",
    "sourceType": "Project Question-Derived Topic",
    "sourceRoots": [
      "Project MCQ/flashcard/numerical source map",
      "Rosen Ch 25",
      "HIPPO Batch 2"
    ],
    "core": [
      "Pathognomonic finding: Vomiting intact, undigested food eaten >12 hours earlier.",
      "Causes include PUD scarring, malignancy, or large polyps.",
      "Physical exam may reveal a 'succussion splash'."
    ],
    "presentation": [
      "Recognize the dangerous pattern, confirm with the fastest useful test, and avoid reassuring yourself before life-threats are excluded."
    ],
    "management": [
      "Stabilize first, choose tests that change management, treat time-sensitive threats, then decide disposition."
    ],
    "pearls": [
      "Pathognomonic finding: Vomiting intact, undigested food eaten >12 hours earlier.",
      "Causes include PUD scarring, malignancy, or large polyps.",
      "Physical exam may reveal a 'succussion splash'."
    ],
    "traps": [
      "Mistaking GOO for simple gastroenteritis by failing to ask 'when was your last meal?'."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Gastric Outlet Obstruction (GOO): فكّر كطبيب طوارئ. ابدأ بما يقتل الآن، ابحث عن العلامات الحمراء، ثبّت المريض قبل التفاصيل، ثم اختر الفحص أو العلاج الذي يغيّر القرار بأسرع وأأمن طريقة.",
    "visualHints": [
      {
        "id": "pdf-small-bowel-obstruction-p192-2",
        "src": "/visual-assets/topics/pdf-small-bowel-obstruction-p192-2.jpg",
        "title": "Small Bowel Obstruction",
        "type": "Diagnostic imaging visual",
        "topic": "Small Bowel Obstruction",
        "needsReview": true
      },
      {
        "id": "pdf-large-bowel-obstruction-p193-2",
        "src": "/visual-assets/topics/pdf-large-bowel-obstruction-p193-2.jpg",
        "title": "Large Bowel Obstruction",
        "type": "Diagnostic imaging visual",
        "topic": "Large Bowel Obstruction",
        "needsReview": true
      }
    ],
    "needsDoseVerification": false,
    "numbers": [
      "Food retention window: >12 hours."
    ]
  },
  {
    "id": "db-8-aortic-dissection",
    "number": 209,
    "title": "Aortic Dissection",
    "chapter": "Core Emergency Medicine",
    "sourceType": "Project Question-Derived Topic",
    "sourceRoots": [
      "Project MCQ/flashcard/numerical source map",
      "Rosen Ch 71",
      "HIPPO Batch 3"
    ],
    "core": [
      "Goal is to reduce shear forces (dP/dt) by lowering HR and BP.",
      "First-line treatment: Beta-1 blockade (Esmolol or Labetalol).",
      "Target Heart Rate: <= 60 bpm."
    ],
    "presentation": [
      "Recognize the dangerous pattern, confirm with the fastest useful test, and avoid reassuring yourself before life-threats are excluded."
    ],
    "management": [
      "Stabilize first, choose tests that change management, treat time-sensitive threats, then decide disposition."
    ],
    "pearls": [
      "Goal is to reduce shear forces (dP/dt) by lowering HR and BP.",
      "First-line treatment: Beta-1 blockade (Esmolol or Labetalol).",
      "Target Heart Rate: <= 60 bpm."
    ],
    "traps": [
      "Using vasodilators like Nitroprusside alone; causes reflex tachycardia which worsens the flap tear."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Aortic Dissection: فكّر كطبيب طوارئ. ابدأ بما يقتل الآن، ابحث عن العلامات الحمراء، ثبّت المريض قبل التفاصيل، ثم اختر الفحص أو العلاج الذي يغيّر القرار بأسرع وأأمن طريقة.",
    "visualHints": [
      {
        "id": "pdf-aortic-dissection-p73-4",
        "src": "/visual-assets/topics/pdf-aortic-dissection-p73-4.jpg",
        "title": "Aortic Dissection",
        "type": "Diagnostic imaging visual",
        "topic": "Aortic Dissection",
        "needsReview": true
      },
      {
        "id": "pdf-aortic-dissection-p73-6",
        "src": "/visual-assets/topics/pdf-aortic-dissection-p73-6.jpg",
        "title": "Aortic Dissection",
        "type": "Diagnostic imaging visual",
        "topic": "Aortic Dissection",
        "needsReview": true
      }
    ],
    "needsDoseVerification": false,
    "numbers": [
      "Target HR: < 60 bpm.",
      "Target SBP: 100-120 mmHg."
    ]
  },
  {
    "id": "db-9-ace-inhibitor-induced-angioedema",
    "number": 210,
    "title": "ACE-Inhibitor Induced Angioedema",
    "chapter": "Core Emergency Medicine",
    "sourceType": "Project Question-Derived Topic",
    "sourceRoots": [
      "Project MCQ/flashcard/numerical source map",
      "Rosen Ch 105",
      "HIPPO Batch 5"
    ],
    "core": [
      "Mediated by Bradykinin accumulation, NOT histamine.",
      "Does NOT respond to Epinephrine, Steroids, or Antihistamines.",
      "Airway protection is the absolute priority; can occur years after starting medication."
    ],
    "presentation": [
      "Recognize the dangerous pattern, confirm with the fastest useful test, and avoid reassuring yourself before life-threats are excluded."
    ],
    "management": [
      "Stabilize first, choose tests that change management, treat time-sensitive threats, then decide disposition."
    ],
    "pearls": [
      "Mediated by Bradykinin accumulation, NOT histamine.",
      "Does NOT respond to Epinephrine, Steroids, or Antihistamines.",
      "Airway protection is the absolute priority; can occur years after starting medication."
    ],
    "traps": [
      "Wasting time with 'Anaphylaxis' protocols while the airway is closing."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في ACE-Inhibitor Induced Angioedema: فكّر كطبيب طوارئ. ابدأ بما يقتل الآن، ابحث عن العلامات الحمراء، ثبّت المريض قبل التفاصيل، ثم اختر الفحص أو العلاج الذي يغيّر القرار بأسرع وأأمن طريقة.",
    "visualHints": [
      {
        "id": "pdf-pretest-probability-scoring-for-heparin-induced-thrombocytopenia-the-4-p550-2",
        "src": "/visual-assets/topics/pdf-pretest-probability-scoring-for-heparin-induced-thrombocytopenia-the-4-p550-2.jpg",
        "title": "Pretest Probability Scoring for Heparin-Induced Thrombocytopenia (The 4T Score)",
        "type": "Algorithm / table / high-yield summary",
        "topic": "Pretest Probability Scoring for Heparin-Induced Thrombocytopenia (The 4T Score)",
        "needsReview": true
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "db-10-acetaminophen-apap-toxicity",
    "number": 211,
    "title": "Acetaminophen (APAP) Toxicity",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Project Question-Derived Topic",
    "sourceRoots": [
      "Project MCQ/flashcard/numerical source map",
      "Rosen Ch 138",
      "HIPPO Batch 5"
    ],
    "core": [
      "Rumack-Matthew nomogram is used for acute, single-time ingestions only.",
      "King's College Criteria determines the need for liver transplant.",
      "Repeated supratherapeutic ingestions cannot be plotted on the nomogram."
    ],
    "presentation": [
      "Recognize the dangerous pattern, confirm with the fastest useful test, and avoid reassuring yourself before life-threats are excluded."
    ],
    "management": [
      "Rumack-Matthew Nomogram",
      "King's College Criteria"
    ],
    "pearls": [
      "Rumack-Matthew nomogram is used for acute, single-time ingestions only.",
      "King's College Criteria determines the need for liver transplant.",
      "Repeated supratherapeutic ingestions cannot be plotted on the nomogram."
    ],
    "traps": [
      "Attempting to use the nomogram for chronic ingestion over multiple days."
    ],
    "algorithm": [
      "Rumack-Matthew Nomogram",
      "King's College Criteria"
    ],
    "arabic": "الفكرة ببساطة في Acetaminophen (APAP) Toxicity: في التسمم لا تطارد اسم السم قبل إنقاذ المريض. ابدأ بالـ ABCDE، افحص السكر و ECG، تعرف على toxidrome، ثم استخدم الترياق المناسب إذا كان واضحًا ومطلوبًا.",
    "visualHints": [],
    "needsDoseVerification": true,
    "numbers": [
      "Transplant criteria: pH < 7.3 or Lactate > 3.5 after resuscitation.",
      "Alternative transplant criteria: Cr > 3.3, INR > 6.5, and Encephalopathy."
    ]
  },
  {
    "id": "db-11-febrile-infant-criteria",
    "number": 212,
    "title": "Febrile Infant Criteria",
    "chapter": "Pediatric Emergencies",
    "sourceType": "Project Question-Derived Topic",
    "sourceRoots": [
      "Project MCQ/flashcard/numerical source map",
      "Rosen Ch 155",
      "FRCEM Batch 1"
    ],
    "core": [
      "Philadelphia Criteria (29-56 days) identifies low-risk infants for SBI.",
      "NPV for Philadelphia is 99.7% for serious bacterial infection.",
      "Rochester Criteria (<= 60 days) excludes Lumbar Puncture."
    ],
    "presentation": [
      "Recognize the dangerous pattern, confirm with the fastest useful test, and avoid reassuring yourself before life-threats are excluded."
    ],
    "management": [
      "Philadelphia Protocol",
      "Rochester Criteria",
      "Boston Criteria"
    ],
    "pearls": [
      "Philadelphia Criteria (29-56 days) identifies low-risk infants for SBI.",
      "NPV for Philadelphia is 99.7% for serious bacterial infection.",
      "Rochester Criteria (<= 60 days) excludes Lumbar Puncture."
    ],
    "traps": [
      "Using Rochester to rule out meningitis; it misses cases compared to Philadelphia because it lacks CSF analysis."
    ],
    "algorithm": [
      "Philadelphia Protocol",
      "Rochester Criteria",
      "Boston Criteria"
    ],
    "arabic": "الفكرة ببساطة في Febrile Infant Criteria: الطفل قد يتدهور بسرعة وبعلامات خفية. ركّز على التنفس، الدوران، الجفاف، السلوك العام، والجرعات حسب الوزن، واستدعِ المساعدة مبكرًا عند الشك.",
    "visualHints": [
      {
        "id": "pdf-light-criteria-p216-2",
        "src": "/visual-assets/topics/pdf-light-criteria-p216-2.jpg",
        "title": "Light Criteria",
        "type": "Algorithm / table / high-yield summary",
        "topic": "Light Criteria",
        "needsReview": true
      },
      {
        "id": "pdf-febrile-seizure-p282-2",
        "src": "/visual-assets/topics/pdf-febrile-seizure-p282-2.jpg",
        "title": "Febrile Seizure",
        "type": "Clinical visual",
        "topic": "Febrile Seizure",
        "needsReview": true
      }
    ],
    "needsDoseVerification": false,
    "numbers": [
      "Low risk WBC: 5,000 - 15,000/mm3.",
      "Band-to-neutrophil ratio: <= 0.2.",
      "CSF WBC: < 8-10/mm3."
    ]
  },
  {
    "id": "db-12-testicular-torsion",
    "number": 213,
    "title": "Testicular Torsion",
    "chapter": "Airway & Ventilation",
    "sourceType": "Project Question-Derived Topic",
    "sourceRoots": [
      "Project MCQ/flashcard/numerical source map",
      "HIPPO Batch 3",
      "Rosen Ch 15"
    ],
    "core": [
      "Time-sensitive emergency; salvage rates drop significantly after 6 hours.",
      "Degree of torsion (rotations) is as important as ischemia time.",
      "Cremasteric reflex presence does NOT 100% rule out torsion."
    ],
    "presentation": [
      "Recognize the dangerous pattern, confirm with the fastest useful test, and avoid reassuring yourself before life-threats are excluded."
    ],
    "management": [
      "Stabilize first, choose tests that change management, treat time-sensitive threats, then decide disposition."
    ],
    "pearls": [
      "Time-sensitive emergency; salvage rates drop significantly after 6 hours.",
      "Degree of torsion (rotations) is as important as ischemia time.",
      "Cremasteric reflex presence does NOT 100% rule out torsion."
    ],
    "traps": [
      "Ruling out torsion based on a 'normal Doppler flow' report; dual blood supply can maintain flow early on."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Testicular Torsion: تأمين المجرى الهوائي ليس مجرد إدخال أنبوب، بل خطة كاملة قبل وأثناء وبعد الإجراء. حضّر الأدوات والأدوية وخطة الفشل، ثم أكد الأنبوب وابدأ التسكين والتهوية المناسبة.",
    "visualHints": [
      {
        "id": "pdf-testicular-torsion-p390-2",
        "src": "/visual-assets/pocus-atlas/pdf-testicular-torsion-p390-2.jpg",
        "title": "Testicular Torsion",
        "type": "Ultrasound / bedside imaging visual",
        "topic": "Testicular Torsion",
        "needsReview": false
      },
      {
        "id": "pdf-ovarian-torsion-p470-2",
        "src": "/visual-assets/pocus-atlas/pdf-ovarian-torsion-p470-2.jpg",
        "title": "Ovarian Torsion",
        "type": "Diagnostic imaging visual",
        "topic": "Ovarian Torsion",
        "needsReview": false
      }
    ],
    "needsDoseVerification": false,
    "numbers": [
      "Salvage 100% within 6 hrs, 20% at 12 hrs, 0% at 24 hrs."
    ]
  },
  {
    "id": "db-14-hypernatremia-correction",
    "number": 215,
    "title": "Hypernatremia Correction",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "Project Question-Derived Topic",
    "sourceRoots": [
      "Project MCQ/flashcard/numerical source map",
      "HIPPO Batch 3",
      "Rosen Ch 113"
    ],
    "core": [
      "Chronic hypernatremia (>48h) requires slow correction to prevent cerebral edema.",
      "Rapid water influx into adapted brain cells causes diffuse swelling.",
      "Contrast with Hyponatremia: Rapid hyponatremia correction causes Osmotic Demyelination (CPM)."
    ],
    "presentation": [
      "Recognize the dangerous pattern, confirm with the fastest useful test, and avoid reassuring yourself before life-threats are excluded."
    ],
    "management": [
      "Stabilize first, choose tests that change management, treat time-sensitive threats, then decide disposition."
    ],
    "pearls": [
      "Chronic hypernatremia (>48h) requires slow correction to prevent cerebral edema.",
      "Rapid water influx into adapted brain cells causes diffuse swelling.",
      "Contrast with Hyponatremia: Rapid hyponatremia correction causes Osmotic Demyelination (CPM)."
    ],
    "traps": [
      "Confusing the complications: Fast Na+ drop = Brain Swelling; Fast Na+ rise = Brain Shriveling/ODS."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Hypernatremia Correction: فكّر كطبيب طوارئ. ابدأ بما يقتل الآن، ابحث عن العلامات الحمراء، ثبّت المريض قبل التفاصيل، ثم اختر الفحص أو العلاج الذي يغيّر القرار بأسرع وأأمن طريقة.",
    "visualHints": [
      {
        "id": "pdf-hypernatremia-p370-2",
        "src": "/visual-assets/topics/pdf-hypernatremia-p370-2.jpg",
        "title": "Hypernatremia",
        "type": "Diagnostic imaging visual",
        "topic": "Hypernatremia",
        "needsReview": true
      }
    ],
    "needsDoseVerification": false,
    "numbers": [
      "Max correction rate: 0.5 mEq/L/h.",
      "Max daily correction: 10-12 mEq in 24 hours."
    ]
  },
  {
    "id": "db-16-cyanide-toxicity-nitroprusside",
    "number": 217,
    "title": "Cyanide Toxicity (Nitroprusside)",
    "chapter": "Toxicology & Antidotes",
    "sourceType": "Project Question-Derived Topic",
    "sourceRoots": [
      "Project MCQ/flashcard/numerical source map",
      "HIPPO Batch 5",
      "FRCEM Batch 2",
      "Emergency Medicine Master Reference"
    ],
    "core": [
      "Nitroprusside metabolism releases 5 cyanide ions per molecule.",
      "Hallmark is unexplained lactic acidosis with a normal PaO2.",
      "Classic finding: Bright red venous blood (venous hyperoxia)."
    ],
    "presentation": [
      "Recognize the dangerous pattern, confirm with the fastest useful test, and avoid reassuring yourself before life-threats are excluded."
    ],
    "management": [
      "Stabilize first, choose tests that change management, treat time-sensitive threats, then decide disposition."
    ],
    "pearls": [
      "Nitroprusside metabolism releases 5 cyanide ions per molecule.",
      "Hallmark is unexplained lactic acidosis with a normal PaO2.",
      "Classic finding: Bright red venous blood (venous hyperoxia)."
    ],
    "traps": [
      "Attributing lactic acidosis to 'shock' while a nitroprusside drip is running."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Cyanide Toxicity (Nitroprusside): في التسمم لا تطارد اسم السم قبل إنقاذ المريض. ابدأ بالـ ABCDE، افحص السكر و ECG، تعرف على toxidrome، ثم استخدم الترياق المناسب إذا كان واضحًا ومطلوبًا.",
    "visualHints": [],
    "needsDoseVerification": false
  },
  {
    "id": "db-17-slipped-capital-femoral-epiphysis-scfe",
    "number": 218,
    "title": "Slipped Capital Femoral Epiphysis (SCFE)",
    "chapter": "Core Emergency Medicine",
    "sourceType": "Project Question-Derived Topic",
    "sourceRoots": [
      "Project MCQ/flashcard/numerical source map",
      "FRCEM Batch 6",
      "Rosen Ch 169"
    ],
    "core": [
      "Classic patient: Obese adolescent male (10-17 years).",
      "Presents with hip, groin, or *referred knee pain* and a limp.",
      "Best seen on 'frog-leg' lateral view of the hip."
    ],
    "presentation": [
      "Recognize the dangerous pattern, confirm with the fastest useful test, and avoid reassuring yourself before life-threats are excluded."
    ],
    "management": [
      "Stabilize first, choose tests that change management, treat time-sensitive threats, then decide disposition."
    ],
    "pearls": [
      "Classic patient: Obese adolescent male (10-17 years).",
      "Presents with hip, groin, or *referred knee pain* and a limp.",
      "Best seen on 'frog-leg' lateral view of the hip."
    ],
    "traps": [
      "Missing the diagnosis by only imaging the knee in a limping child."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Slipped Capital Femoral Epiphysis (SCFE): فكّر كطبيب طوارئ. ابدأ بما يقتل الآن، ابحث عن العلامات الحمراء، ثبّت المريض قبل التفاصيل، ثم اختر الفحص أو العلاج الذي يغيّر القرار بأسرع وأأمن طريقة.",
    "visualHints": [
      {
        "id": "pdf-slipped-capital-femoral-epiphysis-scfe-p125-2",
        "src": "/visual-assets/topics/pdf-slipped-capital-femoral-epiphysis-scfe-p125-2.jpg",
        "title": "Slipped Capital Femoral Epiphysis (SCFE)",
        "type": "Diagnostic imaging visual",
        "topic": "Slipped Capital Femoral Epiphysis (SCFE)",
        "needsReview": true
      }
    ],
    "needsDoseVerification": false
  },
  {
    "id": "db-18-naloxone-vs-long-acting-opioids",
    "number": 219,
    "title": "Naloxone vs. Long-Acting Opioids",
    "chapter": "Toxicology & Antidotes",
    "sourceType": "Project Question-Derived Topic",
    "sourceRoots": [
      "Project MCQ/flashcard/numerical source map",
      "FRCEM Batch 5",
      "Rosen Ch 135",
      "Emergency Medicine Master Reference"
    ],
    "core": [
      "Naloxone half-life (~1h) is much shorter than many opioids (e.g., Methadone, 24-36h).",
      "Risk of 'renarcotization' (re-sedation) as Naloxone wears off.",
      "Observation window after Naloxone: at least 4-6 hours."
    ],
    "presentation": [
      "Recognize the dangerous pattern, confirm with the fastest useful test, and avoid reassuring yourself before life-threats are excluded."
    ],
    "management": [
      "Stabilize first, choose tests that change management, treat time-sensitive threats, then decide disposition."
    ],
    "pearls": [
      "Naloxone half-life (~1h) is much shorter than many opioids (e.g., Methadone, 24-36h).",
      "Risk of 'renarcotization' (re-sedation) as Naloxone wears off.",
      "Observation window after Naloxone: at least 4-6 hours."
    ],
    "traps": [
      "Discharging a patient 30-60 minutes after Naloxone administration."
    ],
    "algorithm": [
      "ABCDE and vitals",
      "Identify red flags",
      "Treat immediate threat",
      "Targeted diagnostic test",
      "Reassess",
      "Disposition"
    ],
    "arabic": "الفكرة ببساطة في Naloxone vs. Long-Acting Opioids: في التسمم لا تطارد اسم السم قبل إنقاذ المريض. ابدأ بالـ ABCDE، افحص السكر و ECG، تعرف على toxidrome، ثم استخدم الترياق المناسب إذا كان واضحًا ومطلوبًا.",
    "visualHints": [],
    "needsDoseVerification": false,
    "numbers": [
      "Naloxone half-life: 60-90 min.",
      "Observation period: 4-6 hours."
    ]
  },
  {
    "id": "external-principles-acid-base-physiology",
    "number": 1185,
    "title": "Principles of Acid-Base Physiology",
    "chapter": "Renal, Electrolytes & Acid-Base",
    "sourceType": "External Verification / Physiology Add-on",
    "sourceRoots": [
      "LITFL Part One / MDCalc / UpToDate verification map"
    ],
    "externalUrl": "https://partone.litfl.com/principles-of-acid-base-physiology.html",
    "core": [
      "Use pH, PaCO2 and bicarbonate to classify the primary disorder, then check whether compensation is appropriate and whether an anion-gap or mixed disorder is present."
    ],
    "presentation": [
      "Use this as a concept bridge when emergency management requires physiology, risk stratification, or calculation support."
    ],
    "management": [
      "Apply clinically only with patient context and local protocol verification."
    ],
    "pearls": [
      "Use validated calculators as decision support, not as a replacement for unstable-patient management."
    ],
    "traps": [
      "Do not let a score delay resuscitation, ECG, glucose, antidote, antibiotics, or airway intervention when clinically urgent."
    ],
    "algorithm": [
      "Identify unstable physiology → apply bedside risk tool if appropriate → treat time-sensitive threats → reassess."
    ],
    "arabic": "الفكرة ببساطة في Principles of Acid-Base Physiology: اربط التحاليل بحالة المريض وليس بالأرقام فقط. اسأل هل يوجد اضطراب يهدد القلب أو الدماغ أو التنفس، وهل يحتاج علاجًا فوريًا قبل اكتمال كل النتائج.",
    "visualHints": [
      {
        "id": "pdf-acid-base-disorders-p355-2",
        "src": "/visual-assets/topics/pdf-acid-base-disorders-p355-2.jpg",
        "title": "Acid/Base Disorders",
        "type": "Clinical visual",
        "topic": "Acid/Base Disorders",
        "needsReview": true
      },
      {
        "id": "pdf-respiratory-acidosis-ph-7-35-paco2-45-p356-2",
        "src": "/visual-assets/topics/pdf-respiratory-acidosis-ph-7-35-paco2-45-p356-2.jpg",
        "title": "Respiratory Acidosis pH: < 7.35; PaCO2: > 45",
        "type": "Clinical visual",
        "topic": "Respiratory Acidosis pH: < 7.35; PaCO2: > 45",
        "needsReview": true
      }
    ],
    "needsDoseVerification": true
  },
  {
    "id": "external-csf",
    "number": 1186,
    "title": "Cerebrospinal Fluid (CSF) Review",
    "chapter": "Neurology & Altered Mental Status",
    "sourceType": "External Verification / Physiology Add-on",
    "sourceRoots": [
      "LITFL Part One / MDCalc / UpToDate verification map"
    ],
    "externalUrl": "https://partone.litfl.com/csf.html",
    "core": [
      "CSF interpretation in the ED should connect opening pressure, cell count, glucose, protein and Gram stain/PCR to meningitis, SAH, inflammation, or raised ICP patterns."
    ],
    "presentation": [
      "Use this as a concept bridge when emergency management requires physiology, risk stratification, or calculation support."
    ],
    "management": [
      "Apply clinically only with patient context and local protocol verification."
    ],
    "pearls": [
      "Use validated calculators as decision support, not as a replacement for unstable-patient management."
    ],
    "traps": [
      "Do not let a score delay resuscitation, ECG, glucose, antidote, antibiotics, or airway intervention when clinically urgent."
    ],
    "algorithm": [
      "Identify unstable physiology → apply bedside risk tool if appropriate → treat time-sensitive threats → reassess."
    ],
    "arabic": "الفكرة ببساطة في Cerebrospinal Fluid (CSF) Review: في الأعصاب ركّز على الزمن والخطر. هل يوجد سكتة؟ نزف؟ عدوى؟ نقص سكر؟ عالج الأشياء القابلة للعكس بسرعة، ولا تطمئن لمريض لديه علامات عصبية خطيرة.",
    "visualHints": [
      {
        "id": "pdf-fluid-and-electrolyte-disorders-p365-2",
        "src": "/visual-assets/topics/pdf-fluid-and-electrolyte-disorders-p365-2.jpg",
        "title": "Fluid and Electrolyte Disorders",
        "type": "Diagnostic imaging visual",
        "topic": "Fluid and Electrolyte Disorders",
        "needsReview": true
      }
    ],
    "needsDoseVerification": true
  },
  {
    "id": "external-erythrocytes",
    "number": 1187,
    "title": "Erythrocytes & Emergency Anemia Patterns",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "External Verification / Physiology Add-on",
    "sourceRoots": [
      "LITFL Part One / MDCalc / UpToDate verification map"
    ],
    "externalUrl": "https://partone.litfl.com/erythrocytes.html",
    "core": [
      "In emergency medicine, RBC physiology matters when anemia, hemolysis, hypoxia, sickle crisis, transfusion, or shock physiology changes oxygen delivery."
    ],
    "presentation": [
      "Use this as a concept bridge when emergency management requires physiology, risk stratification, or calculation support."
    ],
    "management": [
      "Apply clinically only with patient context and local protocol verification."
    ],
    "pearls": [
      "Use validated calculators as decision support, not as a replacement for unstable-patient management."
    ],
    "traps": [
      "Do not let a score delay resuscitation, ECG, glucose, antidote, antibiotics, or airway intervention when clinically urgent."
    ],
    "algorithm": [
      "Identify unstable physiology → apply bedside risk tool if appropriate → treat time-sensitive threats → reassess."
    ],
    "arabic": "الفكرة ببساطة في Erythrocytes & Emergency Anemia Patterns: ابدأ بتحديد هل النزف أو التخثر يهدد الحياة. اعرف الدواء المسبب، قيّم الشدة، ثم اختر العكس أو النقل أو الإيقاف حسب الخطر والبروتوكول.",
    "visualHints": [
      {
        "id": "pdf-hypertensive-urgency-and-emergency-p54-4",
        "src": "/visual-assets/topics/pdf-hypertensive-urgency-and-emergency-p54-4.jpg",
        "title": "Hypertensive Urgency and Emergency",
        "type": "Algorithm / table / high-yield summary",
        "topic": "Hypertensive Urgency and Emergency",
        "needsReview": true
      },
      {
        "id": "pdf-causes-of-anemia-p517-2",
        "src": "/visual-assets/topics/pdf-causes-of-anemia-p517-2.jpg",
        "title": "Causes of Anemia",
        "type": "Clinical visual",
        "topic": "Causes of Anemia",
        "needsReview": true
      }
    ],
    "needsDoseVerification": true
  },
  {
    "id": "external-anticoagulants",
    "number": 1188,
    "title": "Anticoagulants, Bleeding & Reversal",
    "chapter": "Hematology & Transfusion",
    "sourceType": "External Verification / Physiology Add-on",
    "sourceRoots": [
      "LITFL Part One / MDCalc / UpToDate verification map"
    ],
    "externalUrl": "https://partone.litfl.com/anticoagulants.html",
    "core": [
      "Anticoagulant emergencies require identifying the agent, bleeding severity, timing, renal function, and reversal pathway before choosing PCC, vitamin K, idarucizumab, andexanet or supportive measures."
    ],
    "presentation": [
      "Use this as a concept bridge when emergency management requires physiology, risk stratification, or calculation support."
    ],
    "management": [
      "Apply clinically only with patient context and local protocol verification."
    ],
    "pearls": [
      "Use validated calculators as decision support, not as a replacement for unstable-patient management."
    ],
    "traps": [
      "Do not let a score delay resuscitation, ECG, glucose, antidote, antibiotics, or airway intervention when clinically urgent."
    ],
    "algorithm": [
      "Identify unstable physiology → apply bedside risk tool if appropriate → treat time-sensitive threats → reassess."
    ],
    "arabic": "الفكرة ببساطة في Anticoagulants, Bleeding & Reversal: في الحوادث لا تبدأ بالتشخيص التفصيلي. ابدأ بما يقتل خلال دقائق: airway، النزف، الصدر، الصدمة، ثم افحص باقي الإصابات بعد تثبيت المريض.",
    "visualHints": [
      {
        "id": "pdf-gastrointestinal-bleeding-p172-2",
        "src": "/visual-assets/topics/pdf-gastrointestinal-bleeding-p172-2.jpg",
        "title": "Gastrointestinal Bleeding",
        "type": "Algorithm / table / high-yield summary",
        "topic": "Gastrointestinal Bleeding",
        "needsReview": true
      },
      {
        "id": "pdf-gastrointestinal-bleeding-p172-3",
        "src": "/visual-assets/topics/pdf-gastrointestinal-bleeding-p172-3.jpg",
        "title": "Gastrointestinal Bleeding",
        "type": "Clinical visual",
        "topic": "Gastrointestinal Bleeding",
        "needsReview": true
      }
    ],
    "needsDoseVerification": true
  },
  {
    "id": "external-heart-score",
    "number": 1189,
    "title": "HEART Score for ED Chest Pain",
    "chapter": "Environmental, Allergy & EENT",
    "sourceType": "External Verification / Physiology Add-on",
    "sourceRoots": [
      "LITFL Part One / MDCalc / UpToDate verification map"
    ],
    "externalUrl": "https://www.mdcalc.com/calc/1752/heart-score-major-cardiac-events",
    "core": [
      "Use HEART as a risk-stratification tool for ED chest pain, not as a replacement for clinical judgment, unstable-patient care, serial ECGs, or troponin strategy."
    ],
    "presentation": [
      "Use this as a concept bridge when emergency management requires physiology, risk stratification, or calculation support."
    ],
    "management": [
      "Apply clinically only with patient context and local protocol verification."
    ],
    "pearls": [
      "Use validated calculators as decision support, not as a replacement for unstable-patient management."
    ],
    "traps": [
      "Do not let a score delay resuscitation, ECG, glucose, antidote, antibiotics, or airway intervention when clinically urgent."
    ],
    "algorithm": [
      "Identify unstable physiology → apply bedside risk tool if appropriate → treat time-sensitive threats → reassess."
    ],
    "arabic": "الفكرة ببساطة في HEART Score for ED Chest Pain: فكّر كطبيب طوارئ. ابدأ بما يقتل الآن، ابحث عن العلامات الحمراء، ثبّت المريض قبل التفاصيل، ثم اختر الفحص أو العلاج الذي يغيّر القرار بأسرع وأأمن طريقة.",
    "visualHints": [
      {
        "id": "pdf-anginal-chest-pain-p23-4",
        "src": "/visual-assets/topics/pdf-anginal-chest-pain-p23-4.jpg",
        "title": "Anginal Chest Pain",
        "type": "Clinical visual",
        "topic": "Anginal Chest Pain",
        "needsReview": true
      },
      {
        "id": "pdf-cocaine-associated-chest-pain-p24-4",
        "src": "/visual-assets/ecg-atlas/pdf-cocaine-associated-chest-pain-p24-4.jpg",
        "title": "Cocaine-Associated Chest Pain",
        "type": "Diagnostic imaging visual",
        "topic": "Cocaine-Associated Chest Pain",
        "needsReview": false
      }
    ],
    "needsDoseVerification": true
  },
  {
    "id": "external-wells-pe",
    "number": 1190,
    "title": "Wells Criteria for Pulmonary Embolism",
    "chapter": "Respiratory Emergencies",
    "sourceType": "External Verification / Physiology Add-on",
    "sourceRoots": [
      "LITFL Part One / MDCalc / UpToDate verification map"
    ],
    "externalUrl": "https://www.mdcalc.com/calc/115/wells-criteria-pulmonary-embolism",
    "core": [
      "Use Wells to estimate pre-test probability for suspected PE and guide D-dimer/imaging strategy, while remembering unstable patients need resuscitation and urgent diagnostic/therapeutic decisions."
    ],
    "presentation": [
      "Use this as a concept bridge when emergency management requires physiology, risk stratification, or calculation support."
    ],
    "management": [
      "Apply clinically only with patient context and local protocol verification."
    ],
    "pearls": [
      "Use validated calculators as decision support, not as a replacement for unstable-patient management."
    ],
    "traps": [
      "Do not let a score delay resuscitation, ECG, glucose, antidote, antibiotics, or airway intervention when clinically urgent."
    ],
    "algorithm": [
      "Identify unstable physiology → apply bedside risk tool if appropriate → treat time-sensitive threats → reassess."
    ],
    "arabic": "الفكرة ببساطة في Wells Criteria for Pulmonary Embolism: في ضيق النفس اسأل أولًا هل المريض يفشل في الأكسجة أو التهوية. الأكسجين وحده لا يكفي دائمًا؛ قد تحتاج NIV أو intubation أو علاج السبب بسرعة.",
    "visualHints": [
      {
        "id": "pdf-pulmonary-embolism-p226-2",
        "src": "/visual-assets/ecg-atlas/pdf-pulmonary-embolism-p226-2.jpg",
        "title": "Pulmonary Embolism",
        "type": "Diagnostic imaging visual",
        "topic": "Pulmonary Embolism",
        "needsReview": false
      },
      {
        "id": "pdf-noncardiogenic-pulmonary-edema-p203-2",
        "src": "/visual-assets/toxicology-antidotes/pdf-noncardiogenic-pulmonary-edema-p203-2.jpg",
        "title": "Noncardiogenic Pulmonary Edema",
        "type": "Diagnostic imaging visual",
        "topic": "Noncardiogenic Pulmonary Edema",
        "needsReview": true
      }
    ],
    "needsDoseVerification": true
  },
  {
    "id": "external-qsofa-sofa",
    "number": 1191,
    "title": "qSOFA / SOFA in Sepsis",
    "chapter": "Critical Care & Infusions",
    "sourceType": "External Verification / Physiology Add-on",
    "sourceRoots": [
      "LITFL Part One / MDCalc / UpToDate verification map"
    ],
    "externalUrl": "https://www.mdcalc.com/calc/2654/qsofa-quick-sofa-score-sepsis",
    "core": [
      "qSOFA is a bedside risk prompt and SOFA quantifies organ dysfunction; neither should delay antibiotics, fluids, lactate reassessment, source control, or vasopressors when shock is present."
    ],
    "presentation": [
      "Use this as a concept bridge when emergency management requires physiology, risk stratification, or calculation support."
    ],
    "management": [
      "Apply clinically only with patient context and local protocol verification."
    ],
    "pearls": [
      "Use validated calculators as decision support, not as a replacement for unstable-patient management."
    ],
    "traps": [
      "Do not let a score delay resuscitation, ECG, glucose, antidote, antibiotics, or airway intervention when clinically urgent."
    ],
    "algorithm": [
      "Identify unstable physiology → apply bedside risk tool if appropriate → treat time-sensitive threats → reassess."
    ],
    "arabic": "الفكرة ببساطة في qSOFA / SOFA in Sepsis: لا تعالج الرقم فقط؛ عالج الفسيولوجيا. اسأل هل المشكلة سوائل، أو قلب، أو انسداد، أو توسع أوعية؟ ثم اختر السوائل أو الضواغط أو التهوية أو الإجراء المناسب مع إعادة تقييم مستمرة.",
    "visualHints": [
      {
        "id": "pdf-olecranon-bursitis-p83-2",
        "src": "/visual-assets/topics/pdf-olecranon-bursitis-p83-2.jpg",
        "title": "Olecranon Bursitis",
        "type": "Diagnostic imaging visual",
        "topic": "Olecranon Bursitis",
        "needsReview": false
      },
      {
        "id": "pdf-olecranon-bursitis-p83-3",
        "src": "/visual-assets/topics/pdf-olecranon-bursitis-p83-3.jpg",
        "title": "Olecranon Bursitis",
        "type": "Diagnostic imaging visual",
        "topic": "Olecranon Bursitis",
        "needsReview": false
      }
    ],
    "needsDoseVerification": true
  },
  {
    "id": "external-hyperkalemia-uptodate-verification",
    "number": 1192,
    "title": "Hyperkalemia Emergency Treatment Verification",
    "chapter": "ECG Atlas & Cardiology",
    "sourceType": "External Verification / Physiology Add-on",
    "sourceRoots": [
      "LITFL Part One / MDCalc / UpToDate verification map",
      "Emergency Medicine Master Reference"
    ],
    "externalUrl": "https://www.uptodate.com/contents/treatment-and-prevention-of-hyperkalemia-in-adults",
    "core": [
      "For hyperkalemic emergencies, protect the myocardium, shift potassium intracellularly, remove potassium from the body, and reassess ECG and potassium. Doses must be verified locally."
    ],
    "presentation": [
      "Use this as a concept bridge when emergency management requires physiology, risk stratification, or calculation support."
    ],
    "management": [
      "Apply clinically only with patient context and local protocol verification."
    ],
    "pearls": [
      "Use validated calculators as decision support, not as a replacement for unstable-patient management."
    ],
    "traps": [
      "Do not let a score delay resuscitation, ECG, glucose, antidote, antibiotics, or airway intervention when clinically urgent."
    ],
    "algorithm": [
      "Identify unstable physiology → apply bedside risk tool if appropriate → treat time-sensitive threats → reassess."
    ],
    "arabic": "الفكرة ببساطة في Hyperkalemia Emergency Treatment Verification: ارتفاع أو اضطراب البوتاسيوم قد يقتل بسبب تأثيره على كهرباء القلب. إذا ظهر ECG خطير مثل QRS واسع أو T waves حادة أو بطء شديد، عالج القلب أولًا ولا تنتظر الصورة الكاملة.",
    "visualHints": [
      {
        "id": "pdf-hypertensive-urgency-and-emergency-p54-4",
        "src": "/visual-assets/topics/pdf-hypertensive-urgency-and-emergency-p54-4.jpg",
        "title": "Hypertensive Urgency and Emergency",
        "type": "Algorithm / table / high-yield summary",
        "topic": "Hypertensive Urgency and Emergency",
        "needsReview": true
      },
      {
        "id": "pdf-treatment-of-hypertensive-emergencies-p55-4",
        "src": "/visual-assets/topics/pdf-treatment-of-hypertensive-emergencies-p55-4.jpg",
        "title": "Treatment of Hypertensive Emergencies",
        "type": "Algorithm / table / high-yield summary",
        "topic": "Treatment of Hypertensive Emergencies",
        "needsReview": true
      }
    ],
    "needsDoseVerification": true
  }
] satisfies EmMasterLesson[];
