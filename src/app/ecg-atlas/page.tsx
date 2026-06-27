'use client';

import { useState, useMemo } from 'react';
import { InternalPage } from '@/components/InternalPage';
import { TopicGrid } from '@/components/TopicGrid';
import { filterTopicsByNeed, getVisualAssetsBySection, getVisualAssetsForTopic } from '@/lib/database';
import { TopicMatchedVisuals } from '@/components/TopicMatchedVisuals';
import { ProgressActions } from '@/components/ProgressActions';
import { Activity, ChevronDown, HeartPulse, Zap } from 'lucide-react';

const ecgLessons = [
  { topic: 'Hyperkalemia ECG', query: 'hyperkalemia potassium peaked T wave wide QRS sine wave', category: 'Electrolyte', see: ['Tall narrow peaked T waves', 'PR prolongation and P-wave flattening', 'QRS widening', 'Sine-wave pattern in severe cases'], why: 'High extracellular potassium changes myocardial membrane potential and slows conduction as toxicity worsens.', action: 'If ECG changes are present, stabilize the myocardium first with IV calcium, then shift potassium intracellularly and remove potassium according to local protocol.', trap: 'Do not wait for the potassium result if the unstable patient has classic ECG findings.', ar: 'ارتفاع البوتاسيوم يغيّر كهرباء القلب. بالبداية تشوف T عالية وحادة، ومع الخطورة يتوسع QRS وقد يصبح sine wave. إذا التخطيط واضح أو المريض غير مستقر، أول فكرة هي حماية القلب بالكالسيوم ثم علاج البوتاسيوم حسب البروتوكول.' },
  { topic: 'STEMI and Occlusion MI', query: 'stemi occlusion myocardial infarction elevation reciprocal', category: 'Ischemia', see: ['ST elevation in an anatomic territory', 'Reciprocal ST depression', 'Hyperacute T waves early', 'New LBBB or posterior patterns in the right context'], why: 'Acute coronary occlusion creates transmural ischemia; ECG localization guides immediate reperfusion decisions.', action: 'Activate reperfusion pathway when criteria and clinical picture fit; do not delay for serial troponins in obvious STEMI.', trap: 'Pericarditis, LV aneurysm, early repolarization, and hyperkalemia can mimic STEMI.', ar: 'في STEMI لا تحفظ الارتفاع فقط؛ اسأل: هل الارتفاع بمنطقة تشريحية؟ هل في reciprocal changes؟ وهل القصة السريرية مناسبة؟ إذا نعم، القرار السريع أهم من انتظار التحاليل.' },
  { topic: 'Brugada Pattern', query: 'brugada coved ST elevation V1 V2 sudden death', category: 'Channelopathy', see: ['Coved ST elevation in V1–V3', 'Pseudo-RBBB pattern', 'May be unmasked by fever or sodium-channel blockers'], why: 'Sodium-channel dysfunction increases malignant ventricular arrhythmia risk.', action: 'Treat fever, avoid provoking drugs, monitor high-risk presentations, and involve cardiology/electrophysiology.', trap: 'Do not dismiss syncope with Brugada-like ECG as benign vasovagal syncope.', ar: 'Brugada مهم لأنه قد يظهر مع حرارة أو أدوية معينة، وقد يرتبط باضطرابات نظم قاتلة. المريض مع إغماء وتخطيط مشبوه يحتاج تعامل جدي ومراقبة.' },
  { topic: 'WPW and Pre-excitation', query: 'WPW delta wave preexcitation wide irregular tachycardia', category: 'Arrhythmia', see: ['Short PR interval', 'Delta wave', 'Wide QRS from pre-excitation', 'Dangerous irregular wide tachycardia when AF conducts through accessory pathway'], why: 'An accessory pathway bypasses the AV node and may conduct atrial fibrillation rapidly to the ventricles.', action: 'Avoid AV nodal blockers in unstable or pre-excited AF; follow local ACLS/cardiology pathway.', trap: 'Treating WPW with AF like ordinary AF can precipitate ventricular fibrillation.', ar: 'WPW يعني في طريق كهربائي إضافي. إذا صار AF، النبض ممكن يوصل للبطين بسرعة خطيرة. لذلك بعض أدوية إبطاء AV node قد تكون خطيرة في هذا السياق.' },
  { topic: 'Heart Block', query: 'first degree second degree third degree heart block AV block', category: 'Conduction', see: ['PR prolongation in first-degree block', 'Dropped beats in second-degree block', 'AV dissociation in complete heart block', 'Bradycardia with poor perfusion is high-risk'], why: 'Conduction delay or failure between atria and ventricles can reduce cardiac output and cause syncope/shock.', action: 'Assess perfusion first; unstable bradycardia may require atropine, pacing, catecholamine infusion, and expert help per protocol.', trap: 'A stable-looking rhythm strip can become dangerous if the patient is hypotensive, ischemic, altered, or in shock.', ar: 'في heart block لا يكفي تعرف الدرجة؛ الأهم هل المريض مستقر؟ إذا في هبوط ضغط أو وعي متأثر، تعامل كحالة طارئة وليس كرقم على التخطيط.' },
];

const filterChips = ['All', 'Ischemia', 'Arrhythmia', 'Conduction', 'Electrolyte', 'Channelopathy'];

export default function EcgAtlasPage() {
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [expanded, setExpanded] = useState<string | null>(null);

  const items = filterTopicsByNeed(['ecg', 'stemi', 'brugada', 'tamponade', 'arrhythmia', 'heart', 'cardiac']).slice(0, 24);
  const visuals = getVisualAssetsBySection('ECG Atlas', 160)
    .filter((v: any) => /ecg|heart block|wpw|atrial|ventricular|bundle|stemi|pericarditis|fibrillation|flutter|tachycardia|bradycardia|qrs|p wave|delta|potassium|hyperkal/i.test([v.topic, v.title, v.visualType, (v.tags || []).join(' ')].join(' ')))
    .slice(0, 96);

  const filtered = useMemo(() => {
    let lessons = ecgLessons;
    if (activeFilter !== 'All') lessons = lessons.filter((l) => l.category === activeFilter);
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      lessons = lessons.filter((l) => `${l.topic} ${l.see.join(' ')} ${l.why} ${l.ar}`.toLowerCase().includes(q));
    }
    return lessons;
  }, [search, activeFilter]);

  return (
    <InternalPage
      title="ECG Atlas"
      subtitle="Pattern-first ECG learning: see the strip, interpret the pattern, connect to action."
      introText="A true ECG condition atlas: each rhythm or emergency pattern shows matched ECG visuals first, then English interpretation, ED action, exam traps, and simple Arabic understanding. القاعدة هنا: الصورة أولًا، ثم ماذا ترى، لماذا يحدث، ما الخطر، وما أول تصرف آمن في الطوارئ."
      searchPlaceholder="Search ECG patterns, findings, or keywords…"
      searchValue={search}
      onSearch={(v) => { setSearch(v); setExpanded(null); }}
    >
      {/* Filter chips */}
      <div className="mb-6 flex flex-wrap gap-2">
        {filterChips.map((chip) => (
          <button
            key={chip}
            onClick={() => { setActiveFilter(chip); setExpanded(null); }}
            className={`rounded-full px-4 py-2 text-xs font-black transition ${
              activeFilter === chip
                ? 'bg-cyan-500 text-slate-950 shadow-glow'
                : 'border border-slate-700/40 bg-slate-900/40 text-slate-400 hover:border-cyan-500/30 hover:text-cyan-300'
            }`}
          >
            {chip}
          </button>
        ))}
        <span className="ml-auto rounded-full border border-slate-700/40 bg-slate-900/40 px-3 py-2 text-xs font-bold text-slate-500">
          {filtered.length} of {ecgLessons.length} conditions
        </span>
      </div>

      {/* ECG lesson cards */}
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center gap-3 py-16 text-center">
          <HeartPulse size={40} className="text-slate-600" />
          <p className="text-base font-bold text-slate-400">No ECG conditions match.</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {filtered.map((lesson) => {
            const isOpen = expanded === lesson.topic;
            const matched = getVisualAssetsForTopic(`${lesson.topic} ${lesson.query}`, 'ECG Atlas', 6);
            return (
              <article
                key={lesson.topic}
                className="overflow-hidden rounded-2xl border border-slate-700/30 bg-slate-900/30 backdrop-blur-md transition hover:border-cyan-500/30"
              >
                <button
                  onClick={() => setExpanded(isOpen ? null : lesson.topic)}
                  className="flex w-full items-start justify-between gap-4 p-5 text-left transition hover:bg-slate-900/40"
                  aria-expanded={isOpen}
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-lg bg-cyan-500/15 px-2.5 py-0.5 text-[10px] font-black text-cyan-300">{lesson.category}</span>
                      <span className="text-[10px] font-bold text-slate-500">ECG condition</span>
                    </div>
                    <h3 className="mt-2 text-lg font-black text-white">{lesson.topic}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-400 line-clamp-2">{lesson.see.slice(0, 2).join(' • ')}</p>
                  </div>
                  <ChevronDown size={18} className={`mt-1 shrink-0 text-slate-500 transition ${isOpen ? 'rotate-180 text-cyan-400' : ''}`} />
                </button>

                {isOpen && (
                  <div className="border-t border-slate-700/30 p-5">
                    {matched.length ? (
                      <TopicMatchedVisuals assets={matched as any[]} title={`${lesson.topic} — extracted ECG visuals`} subtitle="Only ECG-relevant mapped visuals should appear here." limit={6} />
                    ) : (
                      <div className="mb-4 rounded-2xl border border-dashed border-slate-600/40 bg-slate-900/40 p-4 text-xs font-bold text-slate-400">No reviewed ECG visual is mapped yet for this condition.</div>
                    )}
                    <div className="grid gap-4 lg:grid-cols-2">
                      <Panel title="What you see on ECG" icon={<Activity size={16} />} items={lesson.see} />
                      <Panel title="Why it happens" icon={<Zap size={16} />} items={[lesson.why]} />
                      <Panel title="Immediate ED action" icon={<HeartPulse size={16} />} items={[lesson.action]} />
                      <Panel title="Exam trap" icon={<Zap size={16} />} items={[lesson.trap]} amber />
                    </div>
                    <div className="arabic-support mt-4 rounded-2xl bg-cyan-500/10 p-4 text-sm leading-8 text-cyan-100">{lesson.ar}</div>
                    <ProgressActions id={`ecg-lesson-${lesson.topic}`} section="ECG Atlas" title={lesson.topic} />
                  </div>
                )}
              </article>
            );
          })}
        </div>
      )}

      <div className="mt-8"><TopicMatchedVisuals assets={visuals as any[]} title="ECG visual review pool" subtitle="ECG strips and rhythm visuals extracted from the PDF." defaultQuery="" limit={72} /></div>
      <div className="mt-8"><TopicGrid items={items} section="ECG Atlas" /></div>
    </InternalPage>
  );
}

function Panel({ title, items, icon, amber = false }: { title: string; items: string[]; icon: any; amber?: boolean }) {
  return (
    <div className={`rounded-xl border p-4 ${amber ? 'border-amber-500/20 bg-amber-500/10' : 'border-slate-700/30 bg-slate-900/40'}`}>
      <h3 className={`flex items-center gap-2 text-sm font-black ${amber ? 'text-amber-200' : 'text-white'}`}>{icon}{title}</h3>
      <ul className="mt-2 space-y-1.5">{items.map((i) => <li key={i} className={`text-sm leading-6 ${amber ? 'text-amber-100' : 'text-slate-300'}`}>• {i}</li>)}</ul>
    </div>
  );
}
