'use client';

import { useState, useMemo } from 'react';
import { InternalPage, GlassCard } from '@/components/InternalPage';
import { TopicMatchedVisuals } from '@/components/TopicMatchedVisuals';
import { ProgressActions } from '@/components/ProgressActions';
import { chapterStudyMap, getTopicTitle, getVisualAssetsForTopic, topics } from '@/lib/database';
import { BookOpen, ChevronDown, HeartPulse, Activity, Brain, Stethoscope, ShieldCheck, Sparkles, Wind, AlertTriangle, Syringe, Pill, Zap } from 'lucide-react';

const ITEMS_PER_PAGE = 12;

const iconMap: Record<string, any> = {
  'Resuscitation': HeartPulse,
  'Cardiovascular': HeartPulse,
  'Infectious Disease': ShieldCheck,
  'Neurology': Brain,
  'Pulmonary': Wind,
  'Trauma': AlertTriangle,
  'Toxicology': Syringe,
  'Pharmacology': Pill,
  'default': BookOpen,
};

function topicIcon(specialty: string) {
  for (const [key, icon] of Object.entries(iconMap)) {
    if ((specialty || '').toLowerCase().includes(key.toLowerCase())) return icon;
  }
  return iconMap.default;
}

function explainTopic(t: any) {
  const title = getTopicTitle(t);
  return {
    definition: `${title} is a core emergency medicine topic that should be understood as a clinical decision problem, not only as memorized facts.`,
    importance: `In the ED, this topic matters because it can change the first action, disposition, monitoring needs, and exam-safe answer choice.`,
    patho: `Focus on the underlying physiology: what is failing, what can kill the patient early, and what intervention reverses the dangerous process.`,
    presentation: (t.highYieldFacts || []).slice(0, 3),
    redFlags: [`Unstable vital signs`, `Altered mental status`, `Hypoxia, shock, severe pain, or rapidly progressive symptoms`, ...(t.examTraps || []).slice(0, 1)],
    dx: [`Start with ABCDE and stability`, `Use targeted history/exam`, `Order tests that change immediate management`, ...(t.numericalFacts || []).slice(0, 1)],
    management: [`Stabilize first if unstable`, `Treat time-sensitive threats`, `Use local protocols for drug doses and disposition`, ...(t.algorithms || []).slice(0, 1)],
    trap: (t.examTraps || ['Do not choose a diagnostic test when the patient first needs stabilization.'])[0],
    arabic: t.arabicMentorExplanation || 'الفكرة ليست حفظ اسم الموضوع فقط؛ اسأل نفسك: ما الخطر؟ كيف أعرفه بسرعة؟ وما أول خطوة آمنة في الطوارئ؟',
  };
}

const chapters = chapterStudyMap.slice(0, 16);

export default function TopicsPage() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [expanded, setExpanded] = useState<string | null>(null);

  /* filter */
  const filtered = useMemo(() => {
    if (!search.trim()) return topics;
    const q = search.trim().toLowerCase();
    return topics.filter(
      (t: any) =>
        (t.topicName || '').toLowerCase().includes(q) ||
        (t.specialty || '').toLowerCase().includes(q) ||
        JSON.stringify(t.highYieldFacts || []).toLowerCase().includes(q),
    );
  }, [search]);

  /* paginate */
  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const safePage = Math.min(page, totalPages);
  const paginated = useMemo(
    () => filtered.slice((safePage - 1) * ITEMS_PER_PAGE, safePage * ITEMS_PER_PAGE),
    [filtered, safePage],
  );

  const handleSearch = (v: string) => { setSearch(v); setPage(1); setExpanded(null); };

  return (
    <InternalPage
      title="Concise Emergency Medicine Textbook"
      subtitle="Full topic lessons with mapped visuals, English explanation, Arabic understanding, and exam pearls."
      introText="A textbook-style study section: chapter index first, then full topic lessons. هذا هو قلب المنصة: ليس كروت قصيرة، بل كتاب طوارئ مختصر يشرح الفكرة، الصورة، القرار، والفخ الامتحاني."
      searchPlaceholder="Search topics by name, specialty, or keyword…"
      searchValue={search}
      onSearch={handleSearch}
    >
      {/* Chapter index */}
      <GlassCard className="mb-8">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <div className="text-xs font-black uppercase tracking-[0.25em] text-cyan-400">Chapter index</div>
            <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">Start from the index, then enter each topic page</h2>
            <p className="mt-2 text-sm leading-7 text-slate-400">The chapter map keeps the learner from studying randomly.</p>
          </div>
          <span className="rounded-full bg-cyan-500/20 px-4 py-2 text-sm font-black text-cyan-300">{chapterStudyMap.length} chapters</span>
        </div>
        <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {chapters.map((ch: any) => (
            <a
              key={`${ch.source}-${ch.chapterNumber}`}
              href={`#chapter-${ch.chapterNumber}`}
              className="rounded-2xl border border-slate-700/30 bg-slate-900/40 p-4 backdrop-blur-md transition hover:border-cyan-500/30 hover:bg-cyan-950/20"
            >
              <div className="text-xs font-black uppercase tracking-wider text-cyan-400">{ch.source} Ch {ch.chapterNumber}</div>
              <h3 className="mt-1 font-black text-white">{ch.entries?.[0]?.chapterTitle || 'Emergency Medicine Chapter'}</h3>
              <p className="mt-2 text-xs font-bold text-slate-400">{ch.count} mapped topics</p>
            </a>
          ))}
        </div>
      </GlassCard>

      {/* Topic count */}
      <div className="mb-5 text-sm font-bold text-slate-400">
        Showing <span className="text-cyan-400">{filtered.length}</span> topics
        {search && <span className="text-slate-500"> (filtered from {topics.length} total)</span>}
      </div>

      {/* Topic card grid */}
      {paginated.length === 0 ? (
        <div className="flex flex-col items-center gap-3 py-16 text-center">
          <BookOpen size={40} className="text-slate-600" />
          <p className="text-base font-bold text-slate-400">No topics match your search.</p>
          <p className="text-sm text-slate-500">Try a different keyword.</p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {paginated.map((t: any, idx: number) => {
            const globalIdx = (safePage - 1) * ITEMS_PER_PAGE + idx + 1;
            const title = getTopicTitle(t);
            const Icon = topicIcon(t.specialty || '');
            const isOpen = expanded === t.topicId;
            const e = explainTopic(t);
            const visuals = getVisualAssetsForTopic(t.topicName, 'Topics', 4);

            return (
              <article
                key={t.topicId}
                id={`topic-${t.topicId}`}
                className="overflow-hidden rounded-2xl border border-slate-700/30 bg-slate-900/30 backdrop-blur-md transition hover:border-cyan-500/30"
              >
                {/* compact card header */}
                <button
                  onClick={() => setExpanded(isOpen ? null : t.topicId)}
                  className="flex w-full items-start gap-4 p-5 text-left transition hover:bg-slate-900/40"
                  aria-expanded={isOpen}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-500/15 text-xs font-black text-cyan-300">
                    #{String(globalIdx).padStart(2, '0')}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-black leading-snug text-white">{title}</h3>
                    <div className="mt-2 flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1 rounded-full border border-slate-700/40 bg-slate-800/40 px-2.5 py-1 text-[10px] font-bold text-slate-400">
                        <Icon size={11} /> {t.specialty || 'Emergency Medicine'}
                      </span>
                      {t.highYieldFacts?.length > 0 && (
                        <span className="rounded-full border border-slate-700/40 bg-slate-800/40 px-2.5 py-1 text-[10px] font-bold text-slate-500">
                          {t.highYieldFacts.length} facts
                        </span>
                      )}
                    </div>
                  </div>
                  <ChevronDown
                    size={18}
                    className={`mt-1 shrink-0 text-slate-500 transition ${isOpen ? 'rotate-180 text-cyan-400' : ''}`}
                  />
                </button>

                {/* expanded lesson */}
                {isOpen && (
                  <div className="border-t border-slate-700/30 p-5">
                    <div className="bg-medical-gradient -mx-5 -mt-5 mb-5 p-5 text-white">
                      <p className="text-sm leading-7 text-slate-200">{e.importance}</p>
                    </div>
                    {visuals.length ? (
                      <TopicMatchedVisuals
                        assets={visuals as any[]}
                        title={`${title} — mapped visuals`}
                        subtitle="Only topic-relevant visuals from the PDF mapping system are shown here."
                        limit={4}
                      />
                    ) : (
                      <div className="mb-5 rounded-2xl border border-dashed border-slate-700/40 bg-slate-900/40 p-4 text-xs font-bold text-slate-400">
                        No reviewed visual is mapped yet.
                      </div>
                    )}
                    <div className="grid gap-4 lg:grid-cols-2">
                      <Box title="Definition / ED importance" items={[e.definition, e.importance]} />
                      <Box title="Pathophysiology logic" items={[e.patho]} />
                      <Box title="Clinical presentation" items={e.presentation.length ? e.presentation : ['Symptoms vary by condition.']} />
                      <Box title="Red flags" items={e.redFlags} />
                      <Box title="Diagnostic approach" items={e.dx} />
                      <Box title="Initial ED management" items={e.management} />
                    </div>
                    <div className="mt-4 rounded-2xl border border-amber-500/20 bg-amber-500/10 p-4 text-sm leading-7 text-amber-200">
                      <strong>Exam / board trap:</strong> {e.trap}
                    </div>
                    <div className="arabic-support mt-4 rounded-2xl bg-emerald-500/10 p-4 text-sm leading-8 text-emerald-100">
                      {e.arabic}
                    </div>
                    <ProgressActions id={`topic-lesson-${t.topicId}`} section="Concise EM Textbook" title={title} />
                  </div>
                )}
              </article>
            );
          })}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={safePage <= 1}
            className="rounded-xl border border-slate-700/40 bg-slate-900/40 px-4 py-2.5 text-sm font-black text-slate-300 backdrop-blur-md transition hover:border-cyan-500/30 hover:text-cyan-300 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .filter((p) => p === 1 || p === totalPages || Math.abs(p - safePage) <= 2)
            .reduce((acc: (number | string)[], p, _, arr) => {
              if (acc.length > 0) {
                const prev = arr[arr.indexOf(p) - 1];
                if (prev && p - prev > 1) acc.push('…');
              }
              acc.push(p);
              return acc;
            }, [])
            .map((p, i) =>
              typeof p === 'string' ? (
                <span key={`gap-${i}`} className="px-1 text-sm font-bold text-slate-600">…</span>
              ) : (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`flex h-10 w-10 items-center justify-center rounded-xl text-sm font-black transition ${
                    p === safePage
                      ? 'bg-cyan-500 text-white shadow-glow'
                      : 'border border-slate-700/40 bg-slate-900/40 text-slate-400 hover:border-cyan-500/30 hover:text-cyan-300'
                  }`}
                >
                  {p}
                </button>
              ),
            )}
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={safePage >= totalPages}
            className="rounded-xl border border-slate-700/40 bg-slate-900/40 px-4 py-2.5 text-sm font-black text-slate-300 backdrop-blur-md transition hover:border-cyan-500/30 hover:text-cyan-300 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next
          </button>
          <span className="w-full text-center text-xs font-bold text-slate-500">
            Page {safePage} of {totalPages}
          </span>
        </div>
      )}
    </InternalPage>
  );
}

function Box({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-slate-700/30 bg-slate-900/40 p-4">
      <h3 className="text-sm font-black text-white">{title}</h3>
      <ul className="mt-2 space-y-1.5">
        {items.map((i) => (
          <li key={i} className="text-sm leading-7 text-slate-300">• {i}</li>
        ))}
      </ul>
    </div>
  );
}
