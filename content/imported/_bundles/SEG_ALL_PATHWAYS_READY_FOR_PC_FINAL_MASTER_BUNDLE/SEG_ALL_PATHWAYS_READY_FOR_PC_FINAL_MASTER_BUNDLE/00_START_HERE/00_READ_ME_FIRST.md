# SEG ALL PATHWAYS READY FOR PC — FINAL MASTER BUNDLE

This is the updated final master bundle for the Smart Emergency Guide (SEG) project.

It collects all prepared pathway content and implementation support files into one organized folder.

## Core rule

Keep each pathway separate.

Do not mix:
- Intern Path
- GP Path
- Medical Students Path
- EMS / Paramedics Path
- Resident / Specialist Path
- ECG Preparation

## What is included

### 02_INTERN_MVP_EXECUTION

Use first on PC.

Includes:
- Drug Essentials
- Toxicology Essentials
- Emergency Cases
- Intern implementation bundle

### 03_GP_PATH

General Practitioner Path.

Includes:
- full GP path content
- GP extra tools
- GP practice questions
- referral templates
- safety-netting phrases
- UI copy
- QA and Claude prompts

### 04_MEDICAL_STUDENTS_PATH

Medical Students Jordan Path.

Includes:
- Jordan-aware student pathway
- OSCE tools
- practice questions
- logbooks
- case presentation templates
- clinical rotation checklists
- UI copy

### 05_EMS_PARAMEDICS_PATH

EMS / Paramedics Path.

Includes:
- prehospital recognition
- scene safety
- ABCDE
- handover
- documentation
- EMS module source map and QA

### 06_RESIDENT_SPECIALIST_PATH

Emergency Resident / Specialist Path.

Includes:
- advanced ED reasoning
- resuscitation leadership
- shock
- airway
- ACS/OMI
- POCUS
- toxicology
- disposition
- board traps
- supervision tools

### 07_ECG_PREPARATION

ECG preparation only.

Do not implement ECG yet until separate ECG content and verified images are ready.

### 08_FINAL_QA_AND_DEPLOYMENT

Use after implementing Intern MVP modules.

Includes:
- final QA checklist
- source map template
- risk register
- deployment decision template

### 09_OLDER_SUPPORT_BUNDLES

Older support bundles kept for backup/checkpoint continuity.

## Core source PDFs

Keep the three source PDFs beside this folder, not mixed inside app code:

1. Tintinalli’s Emergency Medicine Examination and Board Review 2023
2. Rosen’s Emergency Medicine 10e Q&A
3. Rosh Rapid Review — Emergency Medicine Rotation Exam

Use them as source-informed conceptual references only.
Do not copy copyrighted questions, text, tables, or images.

## Recommended PC folder

Copy this extracted folder and the three source PDFs to:

D:\SEG_PREP_FILES

## Recommended execution order on PC

1. Open existing project:
   D:\New folder (2)\smart-emergency-guide-complete-v2

2. Verify git checkpoint:
   git log --oneline -8
   git status --short
   git diff --stat

3. Expected latest commit:
   13281b5 Add airway basics intern guide

4. Implement Intern MVP only first:
   - Drug Essentials
   - Toxicology Essentials
   - Emergency Cases

5. Run build and QA.

6. Do Final QA.

7. Do not push unless explicitly approved.

8. Keep GP / Students / EMS / Resident paths as prepared content for later implementation.

9. ECG remains last.

## Git rules

- No git add .
- Commit only target files.
- No push unless user explicitly asks.
- Build before commit.
- Safety scan before commit.

## Safety rules

Avoid:
- medication doses in general pathway pages
- fixed triage times
- local hospital protocols
- local EMS protocols
- copied source questions/text
- non-verified ECG images
- procedure step-by-step instructions in general pages

