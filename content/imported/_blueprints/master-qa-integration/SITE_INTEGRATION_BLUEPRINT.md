# SEG Site Integration Blueprint

## Goal

Turn the seven approved content baselines into a structured SEG learning system without repeating the old one-page-stacking problem.

## Recommended Next.js structure

```text
src/
  content/seg/
    ecg/
    toxicology/
    drugs/
    emergency-cases/
    critical-care/
    airway-ventilator/
    pocus/
  app/(dashboard)/learn/
    ecg/page.tsx
    ecg/[section]/[slug]/page.tsx
    toxicology/page.tsx
    toxicology/[section]/[slug]/page.tsx
    drugs/page.tsx
    drugs/[slug]/page.tsx
    critical-care/page.tsx
    critical-care/[slug]/page.tsx
    airway-ventilator/page.tsx
    airway-ventilator/[section]/[slug]/page.tsx
    pocus/page.tsx
    pocus/[section]/[slug]/page.tsx
  app/(dashboard)/practice/
    emergency-cases/page.tsx
    emergency-cases/[slug]/page.tsx
  components/seg/
    ModuleHub.tsx
    TopicPage.tsx
    ArabicSimplificationBox.tsx
    AssessmentQuestion.tsx
    SafetyNotice.tsx
    ImageBriefCard.tsx
    SourceBadge.tsx
    PrevNextNav.tsx
    RelatedTopics.tsx
    SaveMasteredControls.tsx
```

## Unified page layout

Each topic page should render:

1. Title and module badge
2. Safety/source badge
3. Definition / clinical frame
4. Key clues / pattern recognition
5. Why it matters in ED
6. What can kill the patient now? when applicable
7. Conceptual ED actions
8. Common trap
9. Arabic simplification
10. Image brief / verified visual slot
11. Assessment question
12. Related topics
13. Previous / next navigation
14. Save / Mastered controls

## Import sequence

### Phase A — Content freeze

Keep all ZIP baselines unchanged. Copy them into a local archive folder named `SEG_Content_Baselines`.

### Phase B — Normalize indexes

Convert every module index into one unified registry format:

```ts
type SegTopic = {
  module: string;
  title: string;
  slug: string;
  route: string;
  section: string;
  filePath: string;
  sourceBasis?: string;
  requiresMedicalAudit: boolean;
  hasImageBrief: boolean;
};
```

### Phase C — Build shell pages first

Build hub pages and dynamic topic routes before polishing design. Use each pack’s indexed route where available. Avoid flat routes when duplicate slugs exist across sections. Verify links, filters, search, and prev/next.

### Phase D — Add visuals last

Use only licensed, original, generated, or verified open-license visuals. Do not use textbook screenshots unless permission/license is clear.

## Sidebar placement

Use `MASTER_SIDEBAR_STRUCTURE.json` from this package as the initial navigation plan.

## Important safety decisions

- Drug doses and RSI doses are draft educational values only when present.
- Ventilator settings are educational drafts only.
- Toxicology thresholds/antidote/dialysis decisions require final verification.
- POCUS pages require credentialing/QA language.
- Local protocol decisions must come from local hospital policy, not from content packs alone.


## Routing warning

ECG contains the title/slug `complete-heart-block` in both Never-Miss and Atlas. This is acceptable educationally, but it requires nested or namespaced routing. Do not collapse ECG into `/learn/ecg/[slug]` unless you rename one slug during import.
