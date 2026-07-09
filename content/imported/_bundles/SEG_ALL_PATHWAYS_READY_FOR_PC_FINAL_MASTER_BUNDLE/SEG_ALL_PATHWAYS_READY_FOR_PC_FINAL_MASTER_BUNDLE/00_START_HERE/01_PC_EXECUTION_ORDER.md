# PC EXECUTION ORDER — SIMPLE VERSION

## Step 0 — Copy files

Create:

D:\SEG_PREP_FILES

Copy:
- this final master bundle
- the three source PDFs

Extract this bundle.

## Step 1 — Open project

Project path:

D:\New folder (2)\smart-emergency-guide-complete-v2

## Step 2 — Check state

Run:

git log --oneline -8
git status --short
git diff --stat

Expected:
latest commit = 13281b5 Add airway basics intern guide

Expected uncommitted noise:
- .claude/settings.local.json
- tsconfig.tsbuildinfo

Do not commit those unless intentionally reviewed.

## Step 3 — Implement Intern MVP only

Use folder:

02_INTERN_MVP_EXECUTION

Order:
1. Drug Essentials
2. Toxicology Essentials
3. Emergency Cases

## Step 4 — Build

npm run build

## Step 5 — Final QA

Use folder:

08_FINAL_QA_AND_DEPLOYMENT

## Step 6 — Stop

Do not implement GP / Students / EMS / Resident / ECG yet unless specifically decided.

Do not push unless approved.
