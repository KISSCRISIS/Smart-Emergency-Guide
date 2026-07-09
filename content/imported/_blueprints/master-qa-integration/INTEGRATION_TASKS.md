# SEG Integration Task List

## Step 1 — Archive baselines

Create a local folder:

```text
SEG_Content_Baselines/
```

Store the seven ZIP files there and do not edit them directly.

## Step 2 — Create a working import folder

Unzip copies into:

```text
src/content/seg/_raw/
```

## Step 3 — Build unified registry

Use the CSV/JSON indexes to generate a single `segTopics.json` file.

## Step 4 — Build reusable UI components

Start with function over beauty:

- ModuleHub
- TopicCard
- TopicPage
- ArabicSimplificationBox
- AssessmentQuestion
- SafetyNotice
- SourceBadge
- ImageBriefCard
- PrevNextNav
- RelatedTopics

## Step 5 — Import one module first

Start with ECG because it has clean educational flow and the least medication/protocol risk.

## Step 6 — Then import in this order

1. ECG
2. Emergency Cases
3. Toxicology
4. Drugs
5. Critical Care
6. Airway / Ventilator
7. POCUS

## Step 7 — Final QA before deploy

- Build passes locally.
- No broken links.
- No coming-soon placeholders.
- No unverified images.
- High-risk content has safety badges.
- Local protocol verification flags are visible.
