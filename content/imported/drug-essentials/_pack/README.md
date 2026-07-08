# SEG Drug Essentials Content Pack

## Status
**Ready-for-site-content baseline. Not final bedside dosing layer.**

## Purpose
This package prepares the Drug Essentials section of SEG using a safe content-first workflow:
- stand-alone short pages;
- English academic content;
- Arabic simplification;
- board-style ED thinking;
- dose placeholders pending final verification.

## Contents
- 8 roadmap pages
- 71 drug profile pages
- 3 practice files
- JSON index
- CSV index
- TypeScript route skeleton
- image briefs
- source mapping
- references
- safety audit

## Folder Structure
```text
content/
  roadmap/
  drugs/
  practice/
data/
routes/
images/
```

## Integration Rule
Do not stack all drugs on one page. Each drug must remain a standalone page with:
- definition;
- core ED uses;
- mechanism;
- dose layer status;
- monitoring;
- dangerous caution;
- exam trap;
- Arabic simplification;
- assessment question.

## Dose Rule
Every drug page intentionally avoids final numeric dosing. The final site stage must add a verified dose layer only after medical/pharmacy audit.

## Authorship Style
SEG educational style:
- English for academic material and assessment questions.
- Arabic for simplification and reasoning.
