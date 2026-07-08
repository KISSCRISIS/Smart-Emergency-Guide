# SEG Toxicology Essentials Content Pack

**Status:** Ready-for-site-content baseline.
**Created:** 2026-07-03
**Primary board-style source:** Tintinalli’s Emergency Medicine Examination and Board Review, 2023 — Chapter 13: Toxicologic Disorders.
**SEG rule:** Every topic is a standalone short page. Do not stack toxicology into one giant page.

## Contents

- `content/00_roadmap/` — Toxicology beginner roadmap.
- `content/01_toxidromes/` — Core toxidromes.
- `content/02_poisonings/` — High-yield poisonings and exposures.
- `content/03_antidotes/` — Antidote handbook pages.
- `content/04_practice/` — MCQs, mini cases, rapid prompts.
- `data/toxicology_index.json` — Site index.
- `data/toxicology_routes.ts` — Next.js route skeleton.
- `image_briefs/toxicology_image_briefs.csv` — Visual requirements.
- `source_mapping/ch13_tintinalli_board_topics.md` — How the uploaded source informed the pack.
- `references.md` — References for final medical audit.
- `safety_audit.md` — Items to verify before public release.

## Language System

- Official academic content: English.
- Arabic simplification: Arabic only.
- Questions and answer choices: English.
- Arabic reasoning after each question.

## Medical Safety Boundary

No fixed drug doses, infusion rates, dialysis thresholds, or local disposition times are included. These must be added only in a later verified protocol layer, with toxicology/pharmacy review and local policy alignment.

## Website Integration Notes

Suggested route base:

```text
/toxicology/roadmap/[slug]
/toxicology/toxidromes/[slug]
/toxicology/poisonings/[slug]
/toxicology/antidotes/[slug]
/toxicology/practice/[slug]
```

Recommended components:

- `<ArabicSimplificationBox />`
- `<AssessmentQuestion />`
- `<CommonTrap />`
- `<ImageBrief />`
- `<RelatedTopics />`
- `<SafetyNotice />`
