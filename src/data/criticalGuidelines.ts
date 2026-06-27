export type CriticalGuideline = {
  id: string;
  title: string;
  category: string;
  trigger: string;
  conceptAr: string;
  firstMinute: string[];
  treatmentSteps: Array<{ step: string; why: string; dose?: string; route?: string; monitoring?: string; arabic: string }>;
  targets: string[];
  redFlags: string[];
  complications: string[];
  disposition: string;
  safety: string;
};

export const criticalGuidelines: CriticalGuideline[] = [
  {
    id: 'septic-shock',
    title: 'Septic Shock',
    category: 'Shock & Sepsis',
    trigger: 'Suspected infection plus hypotension, altered mental status, lactate elevation, oliguria, mottling, or poor perfusion.',
    conceptAr: 'الفكرة ليست حرارة وعدوى فقط؛ المشكلة أن العدوى بدأت تؤثر على الدورة الدموية والأعضاء. الهدف أن تعيد التروية وتوقف مصدر العدوى بسرعة.',
    firstMinute: ['ABCDE assessment', 'High-flow oxygen if hypoxic', 'Two large-bore IVs or IO if needed', 'Bedside glucose and ECG', 'Lactate, cultures if they do not delay antibiotics', 'Early senior/ICU escalation'],
    treatmentSteps: [
      { step: 'Recognize shock and start resuscitation', why: 'Delays increase organ failure and mortality.', monitoring: 'Mental status, MAP, urine output, lactate, capillary refill', arabic: 'أول خطوة أن تعترف أن المريض في صدمة؛ لا تنتظر كل النتائج.' },
      { step: 'Early broad-spectrum antibiotics', why: 'Source control and antimicrobial therapy are time-critical when sepsis is likely.', route: 'IV', monitoring: 'Allergy, renal function, local antibiogram, cultures when possible', arabic: 'المضاد لا يؤخر إذا الصورة صدمة إنتانية؛ اختياره حسب المصدر والبروتوكول المحلي.' },
      { step: 'Balanced crystalloid fluid when appropriate', why: 'Many septic patients have vasodilation and relative hypovolemia.', dose: 'Common initial adult target up to 30 mL/kg when clinically appropriate; reassess frequently.', route: 'IV bolus with reassessment', monitoring: 'Lung exam, BP/MAP, ultrasound/IVC if available, oxygenation, urine output', arabic: 'السوائل تساعد إذا المريض ناقص تروية، لكن لا نعطيها بلا تقييم خصوصًا مع فشل قلب أو رئة.' },
      { step: 'Start norepinephrine if hypotension persists', why: 'Restores vascular tone and perfusion pressure when fluids alone are not enough.', dose: 'Typical starting range 0.05–0.1 mcg/kg/min; titrate to target per local protocol.', route: 'IV infusion; central line preferred, peripheral may be used temporarily with safety policy.', monitoring: 'MAP target commonly ≥65 mmHg, extravasation, arrhythmia, perfusion', arabic: 'إذا الضغط لا يتحسن، لا تظل تعطي سوائل بلا نهاية؛ ابدأ رافع ضغط حسب البروتوكول.' },
      { step: 'Source control and ICU disposition', why: 'Abscess, obstruction, infected line, perforation, or necrotic tissue can prevent recovery.', monitoring: 'Repeat lactate, cultures, imaging, urine output, vasopressor dose', arabic: 'إذا السبب ما انحل، المريض لن يتحسن حتى لو أخذ سوائل ومضادات.' },
    ],
    targets: ['MAP commonly ≥65 mmHg unless individualized', 'Improving mental status/perfusion', 'Urine output trend', 'Lactate clearance trend', 'Oxygenation and work of breathing'],
    redFlags: ['Persistent hypotension', 'Rising lactate', 'Respiratory failure', 'Oliguria', 'Mottled skin', 'Altered consciousness'],
    complications: ['Pulmonary edema from excess fluids', 'Arrhythmias', 'Vasopressor extravasation', 'Delayed source control'],
    disposition: 'ICU or high-dependency care if vasopressors, respiratory failure, persistent lactate elevation, or organ dysfunction are present.',
    safety: 'Antibiotics, fluid volume, vasopressor concentration, and MAP targets must be verified with local sepsis protocol and pharmacy/ICU policy.',
  },
  {
    id: 'cardiogenic-shock',
    title: 'Cardiogenic Shock',
    category: 'Shock & Cardiology',
    trigger: 'Hypotension or poor perfusion caused by pump failure: ACS, myocarditis, arrhythmia, valvular catastrophe, or decompensated heart failure.',
    conceptAr: 'هنا المشكلة أن القلب لا يضخ كفاية. زيادة السوائل بشكل عشوائي قد تخنق الرئة؛ العلاج يعتمد على السبب: جلطة؟ اضطراب نظم؟ فشل ضخ؟',
    firstMinute: ['ABCDE', 'ECG within minutes', 'Bedside ultrasound if available', 'Oxygen/ventilatory support if needed', 'Avoid blind large fluid loading', 'Urgent cardiology/ICU escalation'],
    treatmentSteps: [
      { step: 'Identify pump failure and cause', why: 'Management differs between MI, arrhythmia, tamponade, PE, or valve failure.', monitoring: 'ECG, echo/POCUS, troponin, CXR, perfusion, lung congestion', arabic: 'لا تعالج الرقم فقط. اعرف لماذا القلب فشل.' },
      { step: 'Treat ACS or rhythm cause early', why: 'Reperfusion or rhythm correction may reverse shock.', route: 'Per ACS/arrhythmia pathway', monitoring: 'ECG, BP, contraindications, bleeding risk', arabic: 'إذا السبب STEMI أو اضطراب نظم، الحل الحقيقي هو علاج السبب بسرعة.' },
      { step: 'Use cautious fluids only if preload-responsive', why: 'Excess fluids worsen pulmonary edema.', dose: 'Small boluses such as 250 mL with reassessment may be considered if no congestion and preload deficit suspected.', route: 'IV', monitoring: 'Lung B-lines, JVP, BP, oxygenation', arabic: 'في صدمة القلب لا تعطي 2 لتر تلقائيًا؛ جرّب قليلًا فقط إذا مناسب وراقب الرئة.' },
      { step: 'Vasopressor/inotrope support', why: 'Perfusion pressure and cardiac output may need pharmacologic support.', dose: 'Norepinephrine often used for hypotension; dobutamine may be considered when low output dominates and BP allows. Dose per ICU/cardiology protocol.', route: 'IV infusion', monitoring: 'MAP, rhythm, ischemia, urine output, lactate', arabic: 'أحيانًا تحتاج رافع ضغط، وأحيانًا منشط انقباض؛ الاختيار حسب الضغط والضخ.' },
      { step: 'Escalate for mechanical support/reperfusion', why: 'Persistent shock may require cath lab, IABP/Impella/ECMO depending on center and cause.', monitoring: 'Shock team activation criteria', arabic: 'إذا لا يتحسن، لا تنتظر؛ صعّد لفريق القلب والعناية.' },
    ],
    targets: ['Perfusion improvement', 'Avoid hypoxia', 'MAP individualized often around ≥65', 'No worsening pulmonary edema', 'Treat culprit lesion'],
    redFlags: ['STEMI with hypotension', 'Pulmonary edema', 'Malignant arrhythmia', 'Cold clammy patient', 'Rising lactate'],
    complications: ['Fluid overload', 'Arrhythmias from inotropes', 'Delayed reperfusion', 'Respiratory failure'],
    disposition: 'ICU/coronary care; cath lab pathway if ACS shock suspected.',
    safety: 'Vasoactive medication selection and dose must be verified with local ICU/cardiology protocol.',
  },
  {
    id: 'hyperkalemia-emergency',
    title: 'Hyperkalemia with ECG Changes',
    category: 'Electrolytes & ECG',
    trigger: 'Weakness, renal failure, missed dialysis, peaked T waves, PR prolongation, QRS widening, sine-wave pattern, or arrhythmia.',
    conceptAr: 'الخطر ليس رقم البوتاسيوم فقط؛ الخطر أن كهرباء القلب بدأت تتغير. الكالسيوم يحمي القلب بسرعة لكنه لا ينزل البوتاسيوم، ثم تحتاج نقل البوتاسيوم للداخل وإخراجه من الجسم.',
    firstMinute: ['Cardiac monitor', 'Repeat/confirm potassium if safe but do not delay treatment if ECG dangerous', 'IV access', 'Calcium for ECG changes', 'Insulin/dextrose shift', 'Remove potassium from body', 'Call nephrology/dialysis early if severe'],
    treatmentSteps: [
      { step: 'Stabilize myocardium with calcium if ECG changes', why: 'Calcium reduces immediate arrhythmia risk but does not lower potassium.', dose: 'Calcium gluconate 10% 10 mL IV over 2–5 min commonly used; calcium chloride via central line in arrest/critical settings per protocol.', route: 'IV', monitoring: 'ECG narrowing/improvement, extravasation risk, repeat dose if ECG persists', arabic: 'الكالسيوم مثل درع للقلب؛ يحمي الكهرباء لكنه لا يزيل البوتاسيوم.' },
      { step: 'Shift potassium intracellularly', why: 'Insulin drives potassium into cells and buys time.', dose: 'Regular insulin 10 units IV with dextrose if glucose not high; local protocols vary.', route: 'IV', monitoring: 'Glucose at baseline and repeated checks, hypoglycemia', arabic: 'الإنسولين ينزل البوتاسيوم مؤقتًا للداخل؛ لذلك راقب السكر جيدًا.' },
      { step: 'Add nebulized beta-agonist if appropriate', why: 'Can further shift potassium intracellularly.', dose: 'High-dose nebulized salbutamol/albuterol per local protocol.', route: 'Nebulized', monitoring: 'Tachycardia, tremor, response variability', arabic: 'البخاخ يساعد لكنه لا يعتمد عليه وحده في حالة خطيرة.' },
      { step: 'Remove potassium from body', why: 'Shifting is temporary; potassium must be eliminated.', route: 'Dialysis, diuretics if appropriate, potassium binders depending on setting', monitoring: 'Renal function, urine output, repeat K+', arabic: 'إذا لم تخرج البوتاسيوم من الجسم سيرتفع مرة ثانية.' },
      { step: 'Treat the cause and disposition', why: 'Renal failure, medications, acidosis, tissue breakdown, or missed dialysis may recur.', monitoring: 'Serial ECG/K+, medication review', arabic: 'اسأل لماذا ارتفع البوتاسيوم حتى لا يعود الخطر.' },
    ],
    targets: ['ECG normalization', 'Potassium trending down', 'No hypoglycemia', 'Stable rhythm', 'Definitive elimination plan'],
    redFlags: ['Wide QRS', 'Sine-wave', 'Bradycardia', 'Renal failure', 'Weakness/paralysis', 'Missed dialysis'],
    complications: ['Cardiac arrest', 'Hypoglycemia after insulin', 'Calcium extravasation', 'Rebound hyperkalemia'],
    disposition: 'Monitored bed/ICU; dialysis pathway if severe, renal failure, recurrent, or refractory.',
    safety: 'Doses and calcium choice must be verified with local electrolyte emergency protocol and pharmacy.',
  },
  {
    id: 'post-intubation-hypotension',
    title: 'Post-Intubation Hypotension',
    category: 'Airway & Ventilation',
    trigger: 'Blood pressure drops after induction, positive pressure ventilation, sedation, or tube placement.',
    conceptAr: 'بعد الانتوبيشن قد ينخفض الضغط بسبب الأدوية، نقص السوائل، زيادة الضغط داخل الصدر، أو مشكلة خطيرة مثل pneumothorax. لا تعتبره طبيعيًا؛ افحص السبب بسرعة.',
    firstMinute: ['Confirm tube with waveform ETCO2', 'Check oxygenation and breath sounds', 'Assess pulse/BP/perfusion', 'Look for tension pneumothorax', 'Reduce excessive intrathoracic pressure if relevant', 'Start fluids/vasopressor as physiology requires'],
    treatmentSteps: [
      { step: 'Confirm airway and ventilation', why: 'Esophageal intubation or severe hypoxia can present as collapse.', monitoring: 'Waveform ETCO2, chest rise, bilateral breath sounds, SpO2', arabic: 'أولًا تأكد أن الأنبوب في المكان الصحيح وأن التهوية فعالة.' },
      { step: 'Identify tension physiology or dynamic hyperinflation', why: 'Asthma/COPD patients can develop air trapping and obstructive shock.', monitoring: 'High pressures, absent breath sounds, auto-PEEP, hypotension', arabic: 'إذا المنفسة تضغط كثيرًا أو المريض عنده ربو/COPD، ممكن الهواء محبوس ويسقط الضغط.' },
      { step: 'Support circulation', why: 'Induction drugs and positive pressure reduce venous return.', dose: 'Small fluid bolus if preload-responsive; vasopressor push-dose/infusion per local protocol if persistent.', route: 'IV/IO', monitoring: 'MAP, perfusion, rhythm, lung congestion', arabic: 'ادعم الدورة حسب السبب: سوائل بحذر أو رافع ضغط إذا احتاج.' },
      { step: 'Adjust ventilator settings', why: 'Excessive rate/volume/PEEP can worsen hypotension.', monitoring: 'Plateau pressure, auto-PEEP, SpO2, ETCO2, BP', arabic: 'إعدادات المنفسة قد تكون سبب المشكلة؛ خفف الضغط أو المعدل إذا في حبس هواء.' },
      { step: 'Continue sedation/analgesia safely', why: 'Undersedation causes distress; oversedation worsens hypotension.', route: 'IV infusion/bolus per protocol', monitoring: 'RASS, BP, pain, ventilator synchrony', arabic: 'بعد الأنبوب لا تترك المريض صاحي ومتألم، لكن لا تغرقه بمهدئات تهبط الضغط.' },
    ],
    targets: ['Correct tube position', 'Adequate oxygenation/ventilation', 'Stable MAP/perfusion', 'No auto-PEEP crisis', 'Appropriate sedation'],
    redFlags: ['Sudden hypoxia', 'Unilateral absent breath sounds', 'High airway pressures', 'Severe hypotension', 'Falling ETCO2'],
    complications: ['Cardiac arrest', 'Tension pneumothorax', 'Ventilator-induced hypotension', 'Awareness/agitation'],
    disposition: 'ICU/critical care after stabilization; urgent imaging/consults based on cause.',
    safety: 'RSI drugs, sedation, vasopressors, and ventilator settings must be verified with local airway/ICU protocols.',
  },
  {
    id: 'dka-critical',
    title: 'DKA / HHS Critical Pathway',
    category: 'Endocrine & Fluids',
    trigger: 'Hyperglycemia plus dehydration, acidosis/ketones for DKA, altered sensorium or extreme hyperosmolarity for HHS.',
    conceptAr: 'العلاج ليس إنسولين فقط. أولًا سوائل وتقييم بوتاسيوم، ثم إنسولين، ثم مراقبة متكررة لأن الخطر قد يكون من العلاج الخاطئ مثل نقص البوتاسيوم أو هبوط السكر.',
    firstMinute: ['ABCDE', 'IV access', 'Glucose and ketones', 'VBG/ABG, electrolytes, renal function', 'ECG for potassium effect', 'Fluids first when appropriate', 'Identify trigger'],
    treatmentSteps: [
      { step: 'Start fluid resuscitation', why: 'DKA/HHS patients are often significantly volume depleted.', dose: 'Initial isotonic crystalloid per local DKA protocol; adjust for age, heart/renal failure.', route: 'IV', monitoring: 'BP, urine output, sodium correction, pulmonary edema risk', arabic: 'الجفاف أساسي في DKA/HHS؛ السوائل غالبًا أول خطوة قبل الإنسولين.' },
      { step: 'Check potassium before insulin', why: 'Insulin lowers potassium and can precipitate fatal hypokalemia.', dose: 'Hold insulin if K+ dangerously low per protocol.', monitoring: 'Serial potassium, ECG', arabic: 'لا تبدأ إنسولين إذا البوتاسيوم منخفض جدًا؛ قد تسبب توقف قلب.' },
      { step: 'Insulin infusion after potassium safety', why: 'Stops ketogenesis and corrects hyperglycemia gradually.', dose: 'Common adult infusion 0.1 units/kg/hr or local protocol strategy.', route: 'IV infusion', monitoring: 'Hourly glucose, potassium, anion gap, ketones', arabic: 'الإنسولين يغلق إنتاج الكيتونات، لكن يجب مراقبة السكر والبوتاسيوم باستمرار.' },
      { step: 'Add dextrose when glucose falls but acidosis persists', why: 'Allows insulin to continue clearing ketones without hypoglycemia.', route: 'IV fluids with dextrose per protocol', monitoring: 'Glucose, anion gap/ketones', arabic: 'نضيف سكر بالمحلول أحيانًا حتى نستمر بالإنسولين لعلاج الحموضة لا مجرد السكر.' },
      { step: 'Find trigger and plan disposition', why: 'Infection, MI, missed insulin, pregnancy, or drugs may drive DKA/HHS.', monitoring: 'Infection workup, ECG/troponin if indicated, mental status', arabic: 'ابحث عن السبب: عدوى؟ جلطة؟ نسيان إنسولين؟ لأن العلاج لا يكتمل بدون السبب.' },
    ],
    targets: ['Closing anion gap/ketosis', 'Safe potassium range', 'Gradual glucose/osmolality correction', 'Improved perfusion and mental status'],
    redFlags: ['Altered mental status', 'Severe acidosis', 'Hypokalemia', 'Pregnancy', 'Renal failure', 'Shock'],
    complications: ['Hypokalemia', 'Hypoglycemia', 'Cerebral edema risk', 'Fluid overload'],
    disposition: 'ICU/high-dependency if severe acidosis, altered mental status, shock, high potassium risk, or complex comorbidity.',
    safety: 'DKA/HHS protocols vary; verify insulin, potassium, and fluid strategy with local protocol.',
  },
];
