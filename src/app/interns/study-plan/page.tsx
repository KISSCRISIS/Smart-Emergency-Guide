import Link from 'next/link';
import { InternalPage, GlassCard } from '@/components/InternalPage';
import {
  Target, Map, BookOpen, Clock, AlertTriangle, Zap,
  ArrowRight, ListChecks, DollarSign, Moon, Stethoscope,
  Sparkles, Lock, Lightbulb, TrendingUp, HeartPulse,
  Shield, Brain, Activity, CheckCircle, Coffee, Pill,
  FileText, Calendar, Wind,
} from 'lucide-react';

// ── Action Map steps ──
const actionSteps = [
  {
    step: 1,
    title: 'Know your current phase',
    why: 'Pinpoint where you are in the 12-month cycle so you study the right thing at the right time.',
    action: 'Scroll to the 12-Month Roadmap below and identify your month.',
  },
  {
    step: 2,
    title: 'Follow the 12-month roadmap',
    why: 'A phased plan prevents random studying. Each phase has a different goal — survival, foundation, consolidation, or sprint.',
    action: 'Use the four-phase structure below as your master guide.',
  },
  {
    step: 3,
    title: 'Use the weekly rhythm',
    why: 'Internship shifts are unpredictable. A flexible weekly template keeps study alive without burnout.',
    action: 'Copy the Weekly Rhythm section and adapt it to your rotation.',
  },
  {
    step: 4,
    title: 'Study through cases, not random PDFs',
    why: 'JMC tests clinical reasoning, not memorised lists. Case-based study builds the pattern recognition you need.',
    action: 'Use the Internship Study Library for topic pages with clinical recognition, red flags, and exam traps.',
    link: '/interns/study',
    linkLabel: 'Open Study Library',
  },
  {
    step: 5,
    title: 'Practice JMC questions early',
    why: 'The single highest-yield activity. Start MCQs from month 1 — even if you get them wrong — to learn the exam style.',
    action: 'JMC Exam Practice has questions across all 4 specialties with answers and explanations.',
    link: '/interns/jmc-exam-practice',
    linkLabel: 'Open JMC Practice',
  },
  {
    step: 6,
    title: 'Track weak topics and repeat mistakes',
    why: 'Re-reading weak topics and re-doing wrong questions is how real improvement happens.',
    action: 'Save topics you struggle with and revisit them. Track progress.',
    link: '/progress',
    linkLabel: 'View Progress',
  },
];

// ── 4-Pillar Survival Dashboard ──
const pillars = [
  {
    icon: Stethoscope,
    title: 'Clinical Survival',
    arabic: 'البقاء السريري',
    points: [
      'Master ED workflow and handover in month 1.',
      'Learn the 30 most-used emergency drugs.',
      'Recognise dangerous ECG patterns before your first night shift.',
      'Know when to call the senior — this is a strength, not weakness.',
    ],
  },
  {
    icon: Target,
    title: 'JMC Exam Preparation',
    arabic: 'التحضير لامتحان JMC',
    points: [
      'Start MCQs from month 1 — low volume, high consistency.',
      'Follow the Focus Map to weight your study by exam percentage.',
      'Internal Medicine (~35–40%) and Surgery (~20–25%) are the highest-yield blocks.',
      'Use the Study Library topic pages for structured, case-based review.',
    ],
    link: '/interns/exam-focus-map',
    linkLabel: 'Open Focus Map',
  },
  {
    icon: DollarSign,
    title: 'Financial Reality',
    arabic: 'الواقع المالي',
    points: [
      'Internship salary in Jordan is low. Plan for this.',
      'Do not buy every course and book. One good source + one question bank is enough.',
      'Delay paid resources until you know your specific weakness.',
      'SEG is built to be your primary free/affordable intern companion.',
    ],
  },
  {
    icon: Brain,
    title: 'Mental Load Management',
    arabic: 'إدارة الضغط النفسي',
    points: [
      'The first 3 months are adaptation — feeling lost is normal.',
      'Night shifts require micro-learning: 20 focused minutes count.',
      'Do not compare yourself to residents. They were interns once.',
      'Protect sleep when possible. Chronic sleep debt impairs learning.',
      'If anxiety or depression becomes severe or unsafe, seek professional help.',
    ],
  },
];

// ── 12-Month Roadmap phases ──
const phases = [
  {
    title: 'Phase 1: Month 1 — Orientation & Survival',
    accent: 'cyan' as const,
    goal: 'Survive the transition. Learn the hospital, the ED flow, and your role.',
    weekly: '1–2 ED shifts + 1 study session on workflow/safety topics.',
    segLink: 'Read the Intern Doctors Guide for your role, duties, and legal boundaries.',
    segHref: '/interns/overview',
    segLabel: 'Intern Guide',
    trap: 'Trying to study everything at once. Month 1 is about orientation — learn where things are, who to call, and how to stay safe.',
    arabic: 'الشهر الأول للنجاة والتكيف. تعرّف على المستشفى، نظام الطوارئ، ودورك. لا تحاول دراسة كل شيء — ركّز على الأمان ومعرفة متى تستدعي الأقدم.',
  },
  {
    title: 'Phase 2: Months 2–4 — Core Clinical Foundation',
    accent: 'amber' as const,
    goal: 'Build your clinical base: common ED presentations, basic ECG, essential drugs.',
    weekly: '2 study sessions/week. One case-based topic + 10–15 MCQs.',
    segLink: 'Use the Exam Focus Map to prioritise topics. Start JMC Practice with Internal Medicine.',
    segHref: '/interns/exam-focus-map',
    segLabel: 'Focus Map',
    trap: 'Jumping between specialties randomly. Follow the Focus Map weights — Internal Medicine first, then Surgery.',
    arabic: 'الأشهر 2–4 لبناء الأساس السريري. ابدأ بالباطنية لأنها الأعلى في الامتحان. ادرس بالحالات وليس بالحفظ. حل 10–15 سؤال JMC كل أسبوع.',
  },
  {
    title: 'Phase 3: Months 5–8 — Exam-Focused Consolidation',
    accent: 'emerald' as const,
    goal: 'Cover all 4 JMC specialties systematically. Increase MCQ volume.',
    weekly: '3 study sessions/week. Rotate specialties: IM → Surgery → Peds → OB/GYN.',
    segLink: 'Use JMC Exam Practice for all 4 specialties. Use the Study Library for topic review.',
    segHref: '/interns/jmc-exam-practice',
    segLabel: 'JMC Practice',
    trap: 'Reading without MCQs. By month 5 you must be doing questions. Reading alone does not prepare you for the exam format.',
    arabic: 'الأشهر 5–8 للتركيز على الامتحان. غطِّ التخصصات الأربعة. ادرس الموضوع ثم حل الأسئلة مباشرة. لا تقرأ بدون ما تحل — هذا أكبر خطأ.',
  },
  {
    title: 'Phase 4: Months 9–12 — Final Exam Sprint',
    accent: 'cyan' as const,
    goal: 'Full exam simulation. Close weak points. Build exam stamina.',
    weekly: '4+ study sessions/week. Timed MCQ blocks. Weak-topic deep dives.',
    segLink: 'Re-do all JMC questions. Re-study weak topics saved in your bookmarks. Simulate exam conditions.',
    segHref: '/interns/jmc-exam-practice',
    segLabel: 'JMC Practice',
    trap: 'Starting new sources in the last 2 months. Stick to what you already used. Review your mistake notebook. Do not add new books now.',
    arabic: 'الأشهر 9–12 للسباق النهائي. درّب نفسك على وقت الامتحان. أعد الأسئلة التي أخطأت فيها. لا تفتح مصادر جديدة في آخر شهرين. ركّز على المراجعة والتكرار.',
  },
];

// ── SEG active modules ──
const activeModules = [
  { icon: Calendar, title: 'Study Plan', arabic: 'خطة سنة الامتياز الذكية', desc: 'This page — your master roadmap.', href: '/interns/study-plan' },
  { icon: BookOpen, title: 'Intern Doctors Guide', arabic: 'دليل أطباء الامتياز', desc: 'Your role, duties, ED work, and legal boundaries.', href: '/interns/overview' },
  { icon: Map, title: 'Exam Focus Map', arabic: 'خريطة التركيز في الامتحان', desc: 'Estimated topic weight by specialty for JMC.', href: '/interns/exam-focus-map' },
  { icon: Target, title: 'JMC Exam Practice', arabic: 'بنك أسئلة الامتياز', desc: 'MCQs across IM, Surgery, Peds, OB/GYN with explanations.', href: '/interns/jmc-exam-practice' },
];

const futureModules = [
  { icon: Moon, title: 'First Night Shift' },
  { icon: Activity, title: 'ED Workflow' },
  { icon: HeartPulse, title: 'ECG Essentials' },
  { icon: Pill, title: 'Drug Essentials' },
  { icon: Wind, title: 'Airway Basics' },
  { icon: Shield, title: 'Toxicology Essentials' },
  { icon: Zap, title: 'Emergency Cases' },
  { icon: FileText, title: 'Handover' },
  { icon: AlertTriangle, title: 'Red Flags' },
];

// ── Weekly Rhythm ──
const weeklyRhythm = [
  { day: 'Post-call day', icon: Moon, desc: 'Rest first. 20 min light review only. Do not force heavy study on a sleep-deprived brain.', accent: 'text-indigo-300', bg: 'bg-indigo-500/10', border: 'border-indigo-500/20' },
  { day: 'Normal working day', icon: Activity, desc: '1 focused study block: 45–60 min. Case-based topic + 10 MCQs. Quality over quantity.', accent: 'text-cyan-300', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20' },
  { day: 'Day off', icon: Coffee, desc: '2 study blocks: morning topic review + afternoon MCQ drill. Best day for deep work.', accent: 'text-emerald-300', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
  { day: 'Minimum 20-minute day', icon: Clock, desc: 'Even on the busiest day: 20 min. Read one topic page or do 5 MCQs. Consistency beats cramming.', accent: 'text-amber-300', bg: 'bg-amber-500/10', border: 'border-amber-500/20' },
];

// ── Low-budget strategy ──
const budgetRules = [
  'One main source + one question bank/file. Do not collect PDFs endlessly.',
  'Use the SEG Study Library as your primary topic reference — it is built from internship source files.',
  'Keep a mistake notebook (paper or digital). Review it weekly.',
  'Delay paid courses until you have identified a specific, persistent weakness.',
  'Free high-yield: your seniors, hospital protocols, and the cases you see on shift.',
];

// ── Mental survival ──
const mentalNotes = [
  'The first 3 months are adaptation. Feeling lost does not mean you are failing.',
  'Do not compare yourself to residents — they were interns once and they struggled too.',
  'Night shifts require micro-learning. 20 focused minutes is enough on those days.',
  'Protect sleep when possible. Chronic sleep debt impairs memory and clinical judgment.',
  'If anxiety or depression becomes severe, persistent, or unsafe — seek professional help. This is a sign of strength, not weakness.',
];

// ── Mistakes that make interns fail ──
const failureMistakes = [
  { title: 'Random study', desc: 'Jumping between topics without a plan wastes time and leaves gaps.' },
  { title: 'Too many sources', desc: 'Collecting 20 PDFs and reading none completely. Pick one. Finish it.' },
  { title: 'No MCQs', desc: 'Reading only. The exam is MCQ-format. You must practise the format.' },
  { title: 'No mistake notebook', desc: 'Repeating the same errors because you never recorded them.' },
  { title: 'Waiting for the perfect time', desc: 'There is no perfect time. Start with 20 minutes today.' },
  { title: 'Ignoring burnout', desc: 'Studying through exhaustion produces diminishing returns. Rest is part of preparation.' },
];

// ── This week checklist ──
const weeklyChecklist = [
  'Identify which month of internship you are in.',
  'Check the 12-Month Roadmap phase for your current month.',
  'Pick 2 topic pages from the Study Library that match your current rotation.',
  'Do 10–15 JMC MCQs from the specialty you are studying.',
  'Save at least 1 weak topic to your Saved Topics.',
  'Review last week\'s mistakes from your notebook.',
  'Plan next week\'s study blocks around your shift schedule.',
];

export default function StudyPlanPage() {
  return (
    <InternalPage
      title="The Realistic Intern Year Master Plan"
      subtitle="خطة سنة الامتياز الذكية"
      introText="A practical 12-month survival and study roadmap for Jordanian interns preparing for the JMC exam. This is not an idealised schedule — it accounts for shift exhaustion, financial pressure, and the reality of internship life."
      backHref="/interns"
      backLabel="Intern Doctors Path"
    >
      {/* ============================================================ */}
      {/* START HERE — ACTION MAP */}
      {/* ============================================================ */}
      <div className="mb-10">
        <div className="mb-4 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/20 text-amber-300">
            <Zap size={16} />
          </div>
          <h2 className="text-lg font-black text-white">Start Here — Action Map</h2>
          <span className="text-xs font-bold text-amber-400" dir="auto">خريطة العمل</span>
        </div>
        <p className="mb-5 text-sm leading-relaxed text-slate-400">
          Six steps to move from lost to on-track. Each step tells you what to do, why it matters, and where to go inside SEG.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {actionSteps.map((s) => (
            <GlassCard key={s.step} className="flex flex-col">
              <div className="flex items-start gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-amber-500/15 text-xs font-black text-amber-300">
                  {s.step}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-black text-white">{s.title}</h3>
                  <p className="mt-1 text-xs leading-5 text-slate-500">Why: {s.why}</p>
                  <p className="mt-2 text-xs leading-5 text-slate-300">{s.action}</p>
                  {s.link && (
                    <Link
                      href={s.link}
                      className="mt-2 inline-flex items-center gap-1 text-xs font-black text-amber-400 hover:text-amber-300 transition"
                    >
                      {s.linkLabel} <ArrowRight size={11} />
                    </Link>
                  )}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* ============================================================ */}
      {/* 4-PILLAR SURVIVAL DASHBOARD */}
      {/* ============================================================ */}
      <div className="mb-10">
        <div className="mb-4 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-300">
            <Shield size={16} />
          </div>
          <h2 className="text-lg font-black text-white">4-Pillar Survival Dashboard</h2>
          <span className="text-xs font-bold text-cyan-400" dir="auto">لوحة النجاة</span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <GlassCard key={p.title} className="flex flex-col">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300">
                    <Icon size={19} />
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-white">{p.title}</h3>
                    <p className="text-[10px] font-bold text-slate-500" dir="auto">{p.arabic}</p>
                  </div>
                </div>
                <ul className="mt-3 space-y-1.5">
                  {p.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs leading-5 text-slate-400">
                      <CheckCircle size={12} className="mt-0.5 shrink-0 text-cyan-500/60" />
                      {pt}
                    </li>
                  ))}
                </ul>
                {p.link && (
                  <Link
                    href={p.link}
                    className="mt-3 inline-flex items-center gap-1 text-xs font-black text-cyan-400 hover:text-cyan-300 transition"
                  >
                    {p.linkLabel} <ArrowRight size={11} />
                  </Link>
                )}
              </GlassCard>
            );
          })}
        </div>
      </div>

      {/* ============================================================ */}
      {/* 12-MONTH ROADMAP */}
      {/* ============================================================ */}
      <div className="mb-10">
        <div className="mb-4 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-300">
            <TrendingUp size={16} />
          </div>
          <h2 className="text-lg font-black text-white">12-Month Roadmap</h2>
          <span className="text-xs font-bold text-emerald-400" dir="auto">خريطة الـ 12 شهرًا</span>
        </div>
        <p className="mb-5 text-sm leading-relaxed text-slate-400">
          Four phases from orientation to exam day. Each phase has a different goal — do not skip ahead.
        </p>

        <div className="space-y-4">
          {phases.map((phase) => {
            const colorMap: Record<string, { border: string; bg: string; badge: string }> = {
              cyan:    { border: 'border-cyan-500/20',   bg: 'bg-cyan-500/3',   badge: 'bg-cyan-500/15 text-cyan-300' },
              amber:   { border: 'border-amber-500/20',  bg: 'bg-amber-500/3',  badge: 'bg-amber-500/15 text-amber-300' },
              emerald: { border: 'border-emerald-500/20', bg: 'bg-emerald-500/3', badge: 'bg-emerald-500/15 text-emerald-300' },
            };
            const c = colorMap[phase.accent];
            return (
              <GlassCard key={phase.title} className={`border ${c.border} ${c.bg}`}>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <h3 className="text-base font-black text-white">{phase.title}</h3>
                  <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-black ${c.badge}`}>
                    Goal
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-slate-300 mb-3">{phase.goal}</p>

                <div className="grid gap-3 sm:grid-cols-2 text-xs leading-5">
                  <div>
                    <span className="font-black text-slate-300">Weekly Focus:</span>{' '}
                    <span className="text-slate-400">{phase.weekly}</span>
                  </div>
                  <div>
                    <span className="font-black text-slate-300">In SEG:</span>{' '}
                    <span className="text-slate-400">{phase.segLink}</span>
                    {' '}
                    <Link href={phase.segHref} className="inline-flex items-center gap-0.5 font-black text-cyan-400 hover:text-cyan-300 transition">
                      {phase.segLabel} <ArrowRight size={10} />
                    </Link>
                  </div>
                </div>

                <div className="mt-3 rounded-xl border border-red-500/10 bg-red-500/3 px-3.5 py-2.5">
                  <div className="flex items-center gap-1.5 mb-1">
                    <AlertTriangle size={12} className="text-red-400" />
                    <span className="text-[10px] font-black text-red-400">Common Trap</span>
                  </div>
                  <p className="text-xs leading-5 text-slate-400">{phase.trap}</p>
                </div>

                <div className="mt-3 rounded-xl border border-cyan-500/10 bg-cyan-500/3 px-3.5 py-2.5">
                  <p className="text-xs leading-6 text-slate-400" dir="auto">{phase.arabic}</p>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>

      {/* ============================================================ */}
      {/* SEG MODULE CONNECTION MAP */}
      {/* ============================================================ */}
      <div className="mb-10">
        <div className="mb-4 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-300">
            <Map size={16} />
          </div>
          <h2 className="text-lg font-black text-white">SEG Module Connection Map</h2>
          <span className="text-xs font-bold text-cyan-400" dir="auto">خريطة اتصال الوحدات</span>
        </div>
        <p className="mb-5 text-sm leading-relaxed text-slate-400">
          How this study plan connects to the rest of SEG. Active modules are ready now. Future modules are being built.
        </p>

        {/* Active modules */}
        <h3 className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-emerald-400">Active Now</h3>
        <div className="mb-6 grid gap-3 sm:grid-cols-2">
          {activeModules.map((m) => {
            const Icon = m.icon;
            return (
              <Link
                key={m.href}
                href={m.href}
                className="group flex items-start gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4 backdrop-blur-md transition hover:border-emerald-500/40 hover:bg-emerald-500/10"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-300">
                  <Icon size={17} />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-sm font-black text-white">{m.title}</h4>
                  <p className="text-[10px] font-bold text-emerald-400/80" dir="auto">{m.arabic}</p>
                  <p className="mt-1 text-[11px] leading-5 text-slate-400">{m.desc}</p>
                </div>
                <ArrowRight size={14} className="mt-1 shrink-0 text-emerald-400/50 group-hover:translate-x-0.5 transition" />
              </Link>
            );
          })}
        </div>

        {/* Future modules */}
        <h3 className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-slate-500">
          Future Modules <span dir="auto">(قيد الإعداد)</span>
        </h3>
        <div className="grid gap-2 sm:grid-cols-3">
          {futureModules.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.title}
                className="flex items-center gap-2.5 rounded-xl border border-slate-700/20 bg-slate-900/20 px-3.5 py-2.5"
              >
                <Icon size={14} className="shrink-0 text-slate-600" />
                <span className="text-[11px] font-bold text-slate-600">{m.title}</span>
                <Lock size={10} className="ml-auto shrink-0 text-slate-700" />
              </div>
            );
          })}
        </div>
      </div>

      {/* ============================================================ */}
      {/* WEEKLY RHYTHM */}
      {/* ============================================================ */}
      <div className="mb-10">
        <div className="mb-4 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-300">
            <Clock size={16} />
          </div>
          <h2 className="text-lg font-black text-white">Weekly Rhythm</h2>
          <span className="text-xs font-bold text-indigo-400" dir="auto">الإيقاع الأسبوعي</span>
        </div>
        <p className="mb-5 text-sm leading-relaxed text-slate-400">
          A flexible weekly template. Adapt to your shift schedule — consistency matters more than volume.
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          {weeklyRhythm.map((w) => {
            const Icon = w.icon;
            return (
              <GlassCard key={w.day} className={`flex items-start gap-3 border ${w.border} ${w.bg}`}>
                <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${w.bg} ${w.accent}`}>
                  <Icon size={17} />
                </div>
                <div>
                  <h4 className={`text-sm font-black ${w.accent}`}>{w.day}</h4>
                  <p className="mt-1 text-xs leading-5 text-slate-400">{w.desc}</p>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>

      {/* ============================================================ */}
      {/* LOW-BUDGET STRATEGY */}
      {/* ============================================================ */}
      <div className="mb-10">
        <div className="mb-4 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/20 text-amber-300">
            <DollarSign size={16} />
          </div>
          <h2 className="text-lg font-black text-white">Low-Budget Strategy</h2>
          <span className="text-xs font-bold text-amber-400" dir="auto">استراتيجية الميزانية المنخفضة</span>
        </div>

        <GlassCard>
          <ul className="space-y-3">
            {budgetRules.map((rule, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-amber-500/15 text-[10px] font-black text-amber-300">
                  {i + 1}
                </span>
                <span className="text-sm leading-6 text-slate-300">{rule}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </div>

      {/* ============================================================ */}
      {/* MENTAL SURVIVAL */}
      {/* ============================================================ */}
      <div className="mb-10">
        <div className="mb-4 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/20 text-purple-300">
            <Brain size={16} />
          </div>
          <h2 className="text-lg font-black text-white">Mental Survival</h2>
          <span className="text-xs font-bold text-purple-400" dir="auto">البقاء النفسي</span>
        </div>
        <p className="mb-5 text-sm leading-relaxed text-slate-400">
          Practical mental health notes — not motivational fluff. Internship is hard. These are reality-based.
        </p>

        <GlassCard className="border-purple-500/10 bg-purple-500/3">
          <ul className="space-y-3">
            {mentalNotes.map((note, i) => (
              <li key={i} className="flex items-start gap-3">
                <Lightbulb size={14} className="mt-0.5 shrink-0 text-purple-400/60" />
                <span className="text-sm leading-6 text-slate-300">{note}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </div>

      {/* ============================================================ */}
      {/* MISTAKES THAT MAKE INTERNS FAIL */}
      {/* ============================================================ */}
      <div className="mb-10">
        <div className="mb-4 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-500/20 text-red-300">
            <AlertTriangle size={16} />
          </div>
          <h2 className="text-lg font-black text-white">Mistakes That Make Interns Fail</h2>
          <span className="text-xs font-bold text-red-400" dir="auto">أخطاء تؤدي إلى الفشل</span>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {failureMistakes.map((m) => (
            <GlassCard key={m.title} className="border-red-500/10 bg-red-500/3">
              <h4 className="text-sm font-black text-red-300">{m.title}</h4>
              <p className="mt-1.5 text-xs leading-5 text-slate-400">{m.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* ============================================================ */}
      {/* THIS WEEK CHECKLIST */}
      {/* ============================================================ */}
      <div className="mb-6">
        <div className="mb-4 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-300">
            <ListChecks size={16} />
          </div>
          <h2 className="text-lg font-black text-white">This Week Checklist</h2>
          <span className="text-xs font-bold text-emerald-400" dir="auto">قائمة هذا الأسبوع</span>
        </div>

        <GlassCard className="border-emerald-500/15 bg-emerald-500/3">
          <ul className="space-y-2.5">
            {weeklyChecklist.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded border border-emerald-500/30 bg-emerald-500/10">
                  <CheckCircle size={11} className="text-emerald-400" />
                </div>
                <span className="text-sm leading-6 text-slate-200">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[10px] font-bold text-slate-600">
            Return to this checklist each week. Adjust based on your shift schedule and current rotation.
          </p>
        </GlassCard>
      </div>
    </InternalPage>
  );
}
