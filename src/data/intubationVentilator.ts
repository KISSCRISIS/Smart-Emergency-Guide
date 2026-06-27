export type AirwayModule = {
  id: string;
  title: string;
  arabicIntro: string;
  englishCore: string;
  steps: { label: string; why: string; visual: string; arabic: string }[];
};

export type VentMode = {
  id: string;
  mode: string;
  simpleIdeaArabic: string;
  englishCore: string;
  useWhen: string[];
  keySettings: string[];
  avoidPitfalls: string[];
  compare: string;
};

export const airwayModules: AirwayModule[] = [
  {
    id: 'airway-decision',
    title: 'When to Intubate in the ER',
    arabicIntro: 'قرار الانتوبيشن ليس لأن الرقم منخفض فقط؛ القرار يعتمد على ثلاثة أسئلة: هل المريض يحمي مجرى الهواء؟ هل الأكسجين يكفي؟ هل التهوية والتخلص من CO₂ كافيين؟ إذا واحدة منها تفشل، لا تنتظر الانهيار.',
    englishCore: 'Indications include failure to oxygenate, failure to ventilate, inability to protect the airway, anticipated clinical deterioration, severe shock with respiratory fatigue, and procedural control of airway/ventilation.',
    steps: [
      { label: 'Assess oxygenation', why: 'Hypoxemia kills quickly and may require escalation.', visual: 'Pulse oximeter + work of breathing', arabic: 'راقب الأكسجين وشكل التنفس، ليس الرقم وحده.' },
      { label: 'Assess ventilation', why: 'Rising CO₂, exhaustion, or altered mental status suggests ventilatory failure.', visual: 'Capnography / ABG-VBG trend', arabic: 'المريض قد يكون أكسجينه مقبول لكنه لا يطرح ثاني أكسيد الكربون.' },
      { label: 'Assess airway protection', why: 'Vomiting, low GCS, or facial trauma increases aspiration/obstruction risk.', visual: 'Airway protection icon', arabic: 'إذا لا يحمي مجرى الهواء قد يختنق أو يستنشق القيء.' },
    ],
  },
  {
    id: 'rsi-prep',
    title: 'RSI Preparation — Do Not Start Until Ready',
    arabicIntro: 'الانتوبيشن الناجح يبدأ قبل إدخال الأنبوب. جهّز الفريق، الشفط، الأكسجين، الأدوية، الخطة البديلة، والـ ventilator. أكثر الأخطاء تحدث لأننا بدأنا قبل الجاهزية.',
    englishCore: 'RSI preparation includes airway assessment, preoxygenation, suction, monitors, IV/IO access, induction agent, paralytic, backup airway, post-intubation sedation, confirmation tools, and ventilator readiness.',
    steps: [
      { label: 'Preoxygenate', why: 'Increases safe apnea time and reduces peri-intubation hypoxemia.', visual: 'NRB/BVM/NIV preoxygenation', arabic: 'املأ الرئة بالأكسجين قبل لحظة توقف التنفس.' },
      { label: 'Prepare suction and backup', why: 'Vomiting, blood, or failed view can rapidly turn into cannot-intubate situation.', visual: 'Suction + bougie + supraglottic airway', arabic: 'لا تدخل بدون خطة بديلة وشفط جاهز.' },
      { label: 'Choose induction/paralytic', why: 'Hemodynamics and contraindications determine safest drug choice.', visual: 'RSI medication tray', arabic: 'اختيار الدواء يعتمد على الضغط والحالة وليس عادة ثابتة.' },
      { label: 'Confirm tube', why: 'Waveform ETCO₂ is the key confirmation after intubation.', visual: 'ETCO₂ waveform', arabic: 'رؤية الصدر وحدها لا تكفي؛ ETCO₂ أهم تأكيد.' },
    ],
  },
  {
    id: 'vent-connection',
    title: 'Connecting to the Ventilator',
    arabicIntro: 'بعد الأنبوب تبدأ مشكلة جديدة: كيف توصل المريض على الجهاز بأمان؟ اربط الدائرة، فعّل الإعدادات، راقب الضغط والحجم والأكسجين، ولا تترك المريض دون sedation وreassessment.',
    englishCore: 'Post-intubation ventilator setup includes circuit connection, filter/humidification as available, mode selection, FiO₂/PEEP/RR/VT or pressure settings, alarm limits, sedation/analgesia, and immediate reassessment.',
    steps: [
      { label: 'Connect circuit to ETT', why: 'Secure closed ventilation path and prevent disconnection.', visual: 'ETT + circuit + filter', arabic: 'ثبّت الأنبوب وتأكد أن الدائرة متصلة بدون تسريب.' },
      { label: 'Start safe initial settings', why: 'Wrong initial settings can cause hypoxia, hypercapnia, or lung injury.', visual: 'Hamilton-G5 settings panel', arabic: 'ابدأ بإعدادات آمنة ثم عدّل حسب المريض والغازات.' },
      { label: 'Set alarms', why: 'Alarms detect disconnection, obstruction, high pressure, or apnea early.', visual: 'Ventilator alarm panel', arabic: 'الإنذار ليس إزعاج؛ هو حارس المريض.' },
      { label: 'Reassess immediately', why: 'Post-intubation hypotension, pneumothorax, right mainstem, and hypoxia can occur.', visual: 'Post-intubation checklist', arabic: 'بعد الانتوبيشن افحص الضغط، الأكسجين، ETCO₂، وأصوات الرئة.' },
    ],
  },
];

export const ventilatorModes: VentMode[] = [
  { id:'vcv', mode:'VCV / Volume Control', simpleIdeaArabic:'الجهاز يعطي حجم هواء ثابت. الضغط يتغير حسب مقاومة الرئة والأنبوب.', englishCore:'A set tidal volume is delivered with each mandatory breath; airway pressure varies with compliance and resistance.', useWhen:['Default invasive ventilation start in many ED patients','Need guaranteed minute ventilation'], keySettings:['Tidal volume 6–8 mL/kg IBW or lung-protective range','RR','FiO₂','PEEP','Inspiratory flow'], avoidPitfalls:['High pressure may indicate bronchospasm, secretions, biting, pneumothorax, or low compliance'], compare:'Volume guaranteed, pressure variable.' },
  { id:'pcv', mode:'PCV / Pressure Control', simpleIdeaArabic:'الجهاز يعطي ضغط ثابت. الحجم الناتج يتغير حسب الرئة.', englishCore:'A set inspiratory pressure is delivered; tidal volume varies with compliance/resistance.', useWhen:['Poor compliance where pressure limitation is desired','ARDS-like physiology under expert supervision'], keySettings:['Inspiratory pressure','RR','FiO₂','PEEP','Inspiratory time'], avoidPitfalls:['Tidal volume can fall suddenly if compliance worsens or obstruction develops'], compare:'Pressure limited, volume variable.' },
  { id:'ac-cmv', mode:'AC/CMV', simpleIdeaArabic:'كل نفس إما يطلبه المريض أو يعطيه الجهاز، لكن كل نفس يكون كامل الدعم.', englishCore:'Assist-control gives a full mandatory breath for patient-triggered or time-triggered breaths.', useWhen:['Initial support after intubation','Fatigued or sedated patients'], keySettings:['Mode can be volume or pressure targeted','RR','FiO₂','PEEP','VT/pressure target'], avoidPitfalls:['Overbreathing may cause respiratory alkalosis or breath stacking in obstructive disease'], compare:'Full support; patient trigger still receives full breath.' },
  { id:'simv', mode:'SIMV', simpleIdeaArabic:'الجهاز يعطي عدد أنفاس إلزامية، وبينها يسمح للمريض يتنفس مع/بدون دعم.', englishCore:'Synchronized mandatory breaths plus spontaneous breaths; often paired with pressure support.', useWhen:['Weaning context','Partial support patients'], keySettings:['Mandatory rate','VT/pressure target','Pressure support','FiO₂/PEEP'], avoidPitfalls:['Can increase work of breathing if support is too low'], compare:'Less full support than AC; more spontaneous work.' },
  { id:'psv', mode:'Pressure Support / SPONT', simpleIdeaArabic:'المريض يبدأ النفس، والجهاز يساعده بضغط. لا يناسب مريض لا يتنفس.', englishCore:'Patient-triggered spontaneous breaths supported by set pressure above PEEP.', useWhen:['Weaning','Awake patient with respiratory drive','NIV/SPONT modes'], keySettings:['Pressure support','PEEP','FiO₂','Apnea backup if available'], avoidPitfalls:['Not for apneic, deeply sedated, or paralyzed patients without backup'], compare:'Spontaneous mode; patient controls timing.' },
  { id:'cpap', mode:'CPAP', simpleIdeaArabic:'ضغط ثابت يفتح الحويصلات، لكن لا يعطي فرق ضغط كبير للتهوية مثل BiPAP.', englishCore:'Continuous positive airway pressure throughout respiratory cycle.', useWhen:['Obstructive sleep apnea','Pulmonary edema with oxygenation issue and preserved ventilation'], keySettings:['CPAP level','FiO₂'], avoidPitfalls:['May not correct hypercapnia if ventilatory support is needed'], compare:'One pressure level; BiPAP has inspiratory and expiratory pressures.' },
  { id:'bipap-niv', mode:'BiPAP / NIV', simpleIdeaArabic:'ضغط أعلى مع الشهيق وضغط أقل مع الزفير؛ يساعد التنفس ويطرح CO₂.', englishCore:'Noninvasive positive pressure ventilation using IPAP and EPAP to support ventilation and oxygenation.', useWhen:['COPD exacerbation','Cardiogenic pulmonary edema','Selected awake cooperative patients'], keySettings:['IPAP','EPAP/PEEP','FiO₂','Backup rate if NIV-ST'], avoidPitfalls:['Avoid/very cautious in vomiting, inability to protect airway, facial trauma, severe agitation, shock'], compare:'BiPAP supports ventilation better than CPAP.' },
  { id:'aprv-duopap', mode:'APRV / DuoPAP', simpleIdeaArabic:'يحافظ على ضغط عالٍ أغلب الوقت مع إطلاقات قصيرة للزفير؛ يحتاج خبرة ومراقبة.', englishCore:'Pressure-based open lung strategy using high pressure time and brief release time; advanced mode.', useWhen:['Severe hypoxemia/ARDS in experienced hands'], keySettings:['P-high','T-high','P-low','T-low','FiO₂'], avoidPitfalls:['Not a beginner ED mode; inappropriate settings can cause hypercapnia or hemodynamic issues'], compare:'Advanced open-lung strategy, not routine default.' },
  { id:'asv-apv', mode:'ASV / APVcmv / APVsimv', simpleIdeaArabic:'مودات ذكية/تكيفية تحاول تحقق هدف التهوية بأقل ضغط مناسب حسب الجهاز.', englishCore:'Adaptive modes on Hamilton ventilators adjust pressure/volume delivery to reach ventilation targets.', useWhen:['Hamilton-specific workflow','Patients where adaptive support is appropriate and staff understand the mode'], keySettings:['Target minute ventilation or adaptive target','PEEP','FiO₂','limits/alarms'], avoidPitfalls:['Do not use without understanding the device logic and alarm limits'], compare:'Device-adaptive rather than purely fixed pressure/volume.' },
  { id:'hfnc', mode:'High-Flow Oxygen', simpleIdeaArabic:'أكسجين بتدفق عالي يرطب ويدعم الأكسجة، لكنه ليس بديلًا عن intubation إذا المريض يفشل.', englishCore:'High-flow nasal oxygen provides heated humidified oxygen at high flow, improves oxygenation and reduces work of breathing in selected patients.', useWhen:['Hypoxemic respiratory failure with preserved airway and mental status','Bridge/monitoring strategy'], keySettings:['Flow L/min','FiO₂','Temperature/humidification'], avoidPitfalls:['Delayed intubation in a failing patient is dangerous'], compare:'Oxygen support, not guaranteed ventilation like invasive modes.' },
];

export const oxygenInterfaces = [
  { name:'Nasal Cannula', flow:'1–6 L/min', use:'Mild hypoxia', arabic:'أنبوب بسيط للأنف، مناسب للحالات الخفيفة وليس للمريض المنهك.' },
  { name:'Simple Face Mask', flow:'5–10 L/min', use:'Moderate oxygen need', arabic:'ماسك عادي يحتاج تدفق كافي حتى لا يعيد المريض استنشاق CO₂.' },
  { name:'Non-Rebreather Mask', flow:'10–15 L/min', use:'High oxygen need before escalation', arabic:'ماسك الطوارئ للأكسجين العالي، لكن إذا المريض يفشل لا تؤخر NIV أو intubation.' },
  { name:'Venturi Mask', flow:'Fixed FiO₂ device', use:'COPD/controlled oxygen', arabic:'يفيد لما نحتاج نسبة أكسجين محددة، خصوصًا مرضى COPD حسب الحالة.' },
  { name:'BVM', flow:'15 L/min with reservoir', use:'Preoxygenation or assisted ventilation', arabic:'الأداة الأساسية للتهوية اليدوية؛ تحتاج seal جيد وتقنية صحيحة.' },
  { name:'NIV Full Face Mask', flow:'Ventilator dependent', use:'BiPAP/CPAP/NIV', arabic:'للمريض الواعي المتعاون، ولا يناسب القيء أو عدم حماية مجرى الهواء.' },
  { name:'HFNC', flow:'High flow heated humidified', use:'Hypoxemic failure selected patients', arabic:'مريح وفعال لبعض المرضى لكنه لا يحمي مجرى الهواء.' },
];
