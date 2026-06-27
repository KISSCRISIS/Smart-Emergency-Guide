'use client';

import { useState, useMemo } from 'react';
import { InternalPage } from '@/components/InternalPage';
import { antidotes, drugList, filterTopicsByNeed, getVisualAssetsBySection, getVisualAssetsForTopic } from '@/lib/database';
import { TopicMatchedVisuals } from '@/components/TopicMatchedVisuals';
import { ProgressActions } from '@/components/ProgressActions';
import { MedicalSafetyNotice } from '@/components/MedicalSafetyNotice';
import { Biohazard, ChevronDown, Syringe, HeartPulse, AlertTriangle } from 'lucide-react';

const toxidromes = [
  ['Sympathomimetic', 'Agitation, tachycardia, hypertension, diaphoresis, mydriasis', 'Cocaine, amphetamines', 'Sedation with benzodiazepines, cooling, BP control when severe; avoid missing hyperthermia.'],
  ['Anticholinergic', 'Hot, dry, blind, mad, tachycardic, urinary retention', 'Diphenhydramine, TCAs', 'Supportive care, benzodiazepines, sodium bicarbonate if TCA wide QRS; physostigmine only in selected expert-guided cases.'],
  ['Opioid', 'CNS depression, respiratory depression, miosis', 'Heroin, fentanyl, oxycodone', 'Airway/ventilation first, naloxone titrated to breathing, observe for re-sedation.'],
  ['Cholinergic', 'Salivation, lacrimation, urination, diarrhea, bronchorrhea', 'Organophosphates', 'Decontamination/PPE, atropine for secretions, pralidoxime when indicated, ventilatory support.'],
  ['Sedative-hypnotic', 'CNS depression, ataxia, respiratory depression', 'Benzodiazepines, barbiturates', 'Airway support; flumazenil only in narrow low-risk situations due to seizure risk.'],
];

const poisoningCases = [
  { topic: 'Acetaminophen Toxicity', toxin: 'Acetaminophen / paracetamol', category: 'Overdose', toxidrome: 'Often initially asymptomatic; later nausea, RUQ pain, rising AST/ALT, liver failure', mechanism: 'NAPQI metabolite depletes glutathione and injures hepatocytes.', antidote: 'N-acetylcysteine (NAC)', dose: 'Use Rumack-Matthew nomogram or unknown-time/high-risk protocol; verify local NAC regimen.', route: 'PO or IV depending on protocol', monitoring: 'APAP level, AST/ALT, INR, bilirubin, creatinine, pH/lactate in severe poisoning', ar: 'الخطورة أن المريض قد يكون طبيعي بالبداية ثم يدخل بفشل كبد. NAC يحمي الكبد إذا أُعطي مبكرًا، لذلك لا تنتظر الأعراض إذا القصة أو المستوى خطر.' },
  { topic: 'Opioid Overdose', toxin: 'Opioids / fentanyl / heroin', category: 'Overdose', toxidrome: 'Respiratory depression + CNS depression + miosis', mechanism: 'Mu-opioid receptor activation suppresses respiratory drive.', antidote: 'Naloxone', dose: 'Titrate small repeated doses to restore ventilation; higher doses may be needed for synthetic opioids. Verify local protocol.', route: 'IV/IM/IN', monitoring: 'Respiratory rate, oxygenation, recurrent sedation, aspiration, withdrawal agitation', ar: 'الهدف ليس إيقاظ المريض تمامًا؛ الهدف أن يتنفس. عالج التنفس أولًا ثم أعط naloxone بجرعات تدريجية.' },
  { topic: 'Organophosphate Poisoning', toxin: 'Organophosphate pesticides', category: 'Environmental', toxidrome: 'Cholinergic crisis: bronchorrhea, salivation, diarrhea, bradycardia/secretions, weakness', mechanism: 'Acetylcholinesterase inhibition causes excess acetylcholine at muscarinic and nicotinic receptors.', antidote: 'Atropine + Pralidoxime', dose: 'Atropine repeated/escalated until secretions dry; pralidoxime per protocol.', route: 'IV/IM depending on severity/resources', monitoring: 'Airway secretions, bronchospasm, oxygenation, fasciculations/weakness, atropine endpoints', ar: 'أهم شيء ليس رقم النبض فقط؛ جفّف الإفرازات وافتح التنفس. atropine يُزاد حتى تتحسن الإفرازات، وليس حتى يصبح النبض طبيعي فقط.' },
  { topic: 'TCA Toxicity', toxin: 'Tricyclic antidepressants', category: 'Overdose', toxidrome: 'Anticholinergic features, seizures, hypotension, wide QRS, arrhythmias', mechanism: 'Sodium-channel blockade plus anticholinergic and alpha-blocking effects.', antidote: 'Sodium bicarbonate', dose: 'Bolus for QRS widening, ventricular arrhythmia, or hypotension; repeat/infuse to target pH per protocol.', route: 'IV', monitoring: 'QRS duration, pH, potassium, BP, seizures, serial ECGs', ar: 'في TCA أهم clue هو QRS الواسع. البيكربونات لا تُعطى فقط لأنها "ترياق"، بل لأنها تقلل تأثير سد قنوات الصوديوم وتحسن التوصيل.' },
  { topic: 'Digoxin Toxicity', toxin: 'Digoxin', category: 'Overdose', toxidrome: 'GI symptoms, confusion, visual changes, brady/AV block or ventricular dysrhythmias, hyperkalemia in acute toxicity', mechanism: 'Na/K ATPase inhibition increases intracellular calcium and triggers arrhythmias.', antidote: 'Digoxin-specific antibody fragments', dose: 'Dose based on amount ingested, serum level, or empiric life-threatening protocol.', route: 'IV', monitoring: 'ECG, potassium, renal function, digoxin level interpretation after Fab, hemodynamics', ar: 'Digoxin خطير لأنه يضرب كهرباء القلب والبوتاسيوم. وجود hyperkalemia أو اضطراب نظم خطير يعني فكر بالترياق بسرعة.' },
];

const filterChips = ['All', 'Overdose', 'Environmental', 'Toxidrome'];

export default function ToxicologyPage() {
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [expanded, setExpanded] = useState<string | null>(null);

  const items = filterTopicsByNeed(['toxicology', 'poison', 'overdose', 'antidote', 'toxicity', 'nac', 'fomepizole', 'cyanide', 'digoxin']).slice(0, 12);
  const visuals = getVisualAssetsBySection('Toxicology & Antidotes', 96);

  const filtered = useMemo(() => {
    let cases = poisoningCases;
    if (activeFilter !== 'All') {
      if (activeFilter === 'Toxidrome') return cases;
      cases = cases.filter((c) => c.category === activeFilter);
    }
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      cases = cases.filter((c) => `${c.topic} ${c.toxin} ${c.antidote} ${c.mechanism} ${c.ar}`.toLowerCase().includes(q));
    }
    return cases;
  }, [search, activeFilter]);

  return (
    <InternalPage
      title="Toxicology & Antidotes"
      subtitle="Integrated poisoning learning: toxidrome + mechanism + antidote dosing + monitoring."
      introText="An integrated toxicology learning system: poisoning topic + toxidrome + mechanism + ECG clues + organ effects + decontamination + antidote dosing + monitoring + disposition. السموم والترياقات يجب أن تُدرّس معًا: ما السم؟ ما النمط؟ ما العضو المتأثر؟ ما الترياق؟ ما الجرعة؟ وكيف أراقب الخطر؟"
      searchPlaceholder="Search poisonings, antidotes, toxidromes…"
      searchValue={search}
      onSearch={(v) => { setSearch(v); setExpanded(null); }}
    >
      <MedicalSafetyNotice note="Antidote doses, decontamination decisions, sodium bicarbonate endpoints, NAC regimens, Fab vial calculations, and toxic alcohol protocols must be verified with local toxicology/poison center or hospital protocol." arabic="جرعات الترياقات وقرارات إزالة السموم تختلف حسب البروتوكول وشدة الحالة؛ راجع مركز السموم أو بروتوكول المستشفى عند الاستخدام السريري." />

      {/* Filter chips + toxidrome quick cards */}
      <div className="mb-6 flex flex-wrap items-center gap-2">
        {filterChips.map((chip) => (
          <button key={chip} onClick={() => { setActiveFilter(chip); setExpanded(null); }} className={`rounded-full px-4 py-2 text-xs font-black transition ${activeFilter === chip ? 'bg-cyan-500 text-slate-950 shadow-glow' : 'border border-slate-700/40 bg-slate-900/40 text-slate-400 hover:border-cyan-500/30 hover:text-cyan-300'}`}>
            {chip}
          </button>
        ))}
        <span className="ml-auto text-xs font-bold text-slate-500">{filtered.length} cases</span>
      </div>

      {/* Toxidrome quick-reference (always visible when Toxidrome filter or All) */}
      {(activeFilter === 'All' || activeFilter === 'Toxidrome') && (
        <div className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {toxidromes.map(([t, s, a, tx]) => (
            <div key={t} className="rounded-2xl border border-amber-500/10 bg-amber-500/5 p-4 backdrop-blur-md">
              <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-amber-400"><Biohazard size={13} /> Toxidrome</div>
              <h4 className="mt-1.5 text-sm font-black text-white">{t}</h4>
              <p className="mt-1 text-xs leading-5 text-slate-400">{s}</p>
              <p className="mt-2 text-[10px] font-bold text-amber-300/70">Agents: {a}</p>
            </div>
          ))}
        </div>
      )}

      {/* Poisoning case accordion cards */}
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center gap-3 py-16 text-center">
          <Biohazard size={40} className="text-slate-600" />
          <p className="text-base font-bold text-slate-400">No poisoning cases match.</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {filtered.map((c) => {
            const isOpen = expanded === c.topic;
            const matched = getVisualAssetsForTopic(`${c.topic} ${c.toxin} ${c.antidote}`, 'Toxicology & Antidotes', 4);
            return (
              <article key={c.topic} className="overflow-hidden rounded-2xl border border-slate-700/30 bg-slate-900/30 backdrop-blur-md transition hover:border-cyan-500/30">
                <button onClick={() => setExpanded(isOpen ? null : c.topic)} className="flex w-full items-start justify-between gap-4 p-5 text-left transition hover:bg-slate-900/40" aria-expanded={isOpen}>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-lg bg-amber-500/15 px-2.5 py-0.5 text-[10px] font-black text-amber-300">{c.category}</span>
                      <span className="text-[10px] font-bold text-slate-500">Antidote: {c.antidote}</span>
                    </div>
                    <h3 className="mt-2 text-lg font-black text-white">{c.topic}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-400 line-clamp-2">Toxin: {c.toxin}</p>
                  </div>
                  <ChevronDown size={18} className={`mt-1 shrink-0 text-slate-500 transition ${isOpen ? 'rotate-180 text-cyan-400' : ''}`} />
                </button>

                {isOpen && (
                  <div className="border-t border-slate-700/30 p-5">
                    {matched.length ? <TopicMatchedVisuals assets={matched as any[]} title={`${c.topic} — mapped toxicology visuals`} subtitle="Matched toxicology/antidote/ECG-clue visuals only." limit={4} /> : null}
                    <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                      <Info title="Toxidrome" value={c.toxidrome} />
                      <Info title="Mechanism" value={c.mechanism} />
                      <Info title="Antidote" value={c.antidote} />
                      <Info title="Dose / regimen" value={c.dose} warn />
                      <Info title="Route" value={c.route} />
                      <Info title="Monitoring" value={c.monitoring} />
                    </div>
                    <div className="arabic-support mt-4 rounded-2xl bg-amber-500/10 p-4 text-sm leading-8 text-amber-100">{c.ar}</div>
                    <ProgressActions id={`tox-${c.topic}`} section="Toxicology & Antidotes" title={c.topic} />
                  </div>
                )}
              </article>
            );
          })}
        </div>
      )}

      {/* Antidote handbook + toxic meds */}
      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-700/30 bg-slate-900/30 p-6 backdrop-blur-md">
          <h3 className="text-lg font-black text-white">Searchable Antidote Handbook</h3>
          <p className="mt-2 text-sm leading-7 text-slate-400">Each antidote linked to its poisoning topic, route, dose, and monitoring.</p>
          <div className="mt-4 grid gap-2">
            {antidotes.slice(0, 10).map((a: any) => (
              <div key={a.id} className="rounded-xl border border-emerald-500/10 bg-emerald-500/10 p-3 text-sm font-bold text-emerald-100">{a.topic} → {a.name}</div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-slate-700/30 bg-slate-900/30 p-6 backdrop-blur-md">
          <h3 className="text-lg font-black text-white">High-risk toxic medications</h3>
          <div className="mt-4 grid gap-2">
            {drugList.filter((d: any) => JSON.stringify(d).toLowerCase().includes('tox') || JSON.stringify(d).toLowerCase().includes('poison') || JSON.stringify(d).toLowerCase().includes('digoxin')).slice(0, 10).map((d: any) => (
              <div key={d.name || d.medication} className="rounded-xl border border-rose-500/10 bg-rose-500/10 p-3 text-sm font-bold text-rose-200">{d.name || d.medication} — {d.use}</div>
            ))}
          </div>
        </div>
      </div>

      {/* Database topics */}
      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {items.map((t: any) => (
          <div key={t.topicId} className="rounded-2xl border border-slate-700/30 bg-slate-900/30 p-5 backdrop-blur-md">
            <div className="text-xs font-black uppercase tracking-wider text-rose-400">Database poisoning topic</div>
            <h4 className="mt-2 text-base font-black text-white">{t.topicName}</h4>
            <p className="mt-2 text-sm leading-6 text-slate-400">{(t.highYieldFacts || []).slice(0, 3).join(' ')}</p>
            <div className="arabic-support mt-3 rounded-xl bg-amber-500/10 p-3 text-sm text-amber-100">{t.arabicMentorExplanation}</div>
          </div>
        ))}
      </div>

      <div className="mt-8"><TopicMatchedVisuals assets={visuals as any[]} title="Toxicology & antidote visual pool" subtitle="Poisoning, toxidrome, overdose, antidote, ECG-clue, and organ-effect visuals." limit={72} /></div>
    </InternalPage>
  );
}

function Info({ title, value, warn = false }: { title: string; value: string; warn?: boolean }) {
  return (
    <div className={`rounded-xl border p-3 ${warn ? 'border-amber-500/20 bg-amber-500/10' : 'border-slate-700/30 bg-slate-900/40'}`}>
      <dt className={`text-[10px] font-black uppercase tracking-wider ${warn ? 'text-amber-300' : 'text-slate-500'}`}>{warn ? <AlertTriangle className="mr-1 inline" size={12} /> : null}{title}</dt>
      <dd className={`mt-1 text-sm font-bold leading-5 ${warn ? 'text-amber-100' : 'text-slate-200'}`}>{value}</dd>
    </div>
  );
}
