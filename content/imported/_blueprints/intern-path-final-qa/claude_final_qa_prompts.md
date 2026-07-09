# Claude Final QA Prompts

## Prompt 1 â€” Final Intern Path Audit Only

Goal: audit the SEG Intern Path after implementing Drug Essentials, Toxicology Essentials, and Emergency Cases.

Do not edit files.

Run:
- git status --short
- git log --oneline -10
- git diff --stat
- npm run build

Then inspect routes/pages:
- /interns
- /interns/first-night-shift
- /interns/ed-workflow
- /interns/handover
- /interns/airway-basics
- /interns/drug-essentials
- /interns/toxicology-essentials
- /interns/emergency-cases
- /interns/jmc-exam-practice
- /interns/jmc-exam-practice/obgyn

Report:
- build status
- broken routes
- placeholders
- safety scan findings
- mobile/desktop visual issues
- uncommitted files
- whether ready for push/deploy

No edits. No commit. No push.

---

## Prompt 2 â€” Safety Scan Only

Goal: scan completed Intern pages for SEG safety violations.

Scan for:
- medication doses
- mg/mcg/mL/units/kg
- infusion/drip/bolus/dosage
- fixed triage times
- local hospital protocol claims
- copied source text/questions if obvious
- independent discharge instructions
- antidote dosing
- decontamination steps
- RSI dosing/procedure steps

Pages:
- First Night Shift
- ED Workflow
- Handover
- Airway Basics
- Drug Essentials
- Toxicology Essentials
- Emergency Cases

Report exact file path and line/context for each finding.
Do not edit.

---

## Prompt 3 â€” Fix Only Critical QA Issues

Goal: fix only critical QA issues found in the previous audit.

Before editing:
- show target files
- explain each fix
- do not touch unrelated files

Constraints:
- no git add .
- no push
- build after fixes
- commit only target files if build and safety scan pass

Stop before commit if any uncertainty.

