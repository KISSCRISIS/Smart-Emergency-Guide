# Medical Students Path Route Architecture

## Phase 1 — Hub Only

Implement one page first:

`/students`

or:

`/medical-students`

Content:
- pathway identity
- disclaimer
- stage cards: preclinical / clinical / senior
- module cards
- coming-later labels for subpages if needed

## Phase 2 — Core Student Subpages

Implement one page per command/commit:

1. `/students/roadmap`
2. `/students/preclinical-bridge`
3. `/students/history-taking`
4. `/students/physical-exam`
5. `/students/vitals-abcde`
6. `/students/red-flags`
7. `/students/ed-presentations`
8. `/students/osce`
9. `/students/case-presentation`
10. `/students/clinical-reasoning`
11. `/students/labs-ecg-imaging`
12. `/students/medication-safety`
13. `/students/infection-prevention`
14. `/students/pediatrics`
15. `/students/obgyn-red-flags`
16. `/students/ed-logbook`
17. `/students/internship-readiness`

## Phase 3 — Expanded Student Tools

- practice questions
- OSCE stations
- clerkship checklists
- logbook templates
- Jordan public hospital orientation
- research/EBM mini-course

## UI Rules

- Keep Medical Students visually separate from Intern dashboard.
- Do not show intern-level duty cards as if students can act independently.
- Buttons should say Learn / Observe / Practice / Prepare, not Manage / Treat.
- Use badges: Preclinical, Clinical, Senior Student, OSCE, Red Flag, Supervised.
- No fake functional buttons.


---

# Enhanced v2 Route Additions

## Phase 4 — Jordan Alignment Pages

- `/students/jordan-public-schools`
- `/students/year-by-year-roadmap`
- `/students/moh-workflow`

## Phase 5 — Clerkship Maps

- `/students/clerkships/internal-medicine`
- `/students/clerkships/surgery`
- `/students/clerkships/pediatrics`
- `/students/clerkships/obgyn`
- `/students/clerkships/family-primary-care`
- `/students/clerkships/emergency-medicine`
- `/students/clerkships/psychiatry`
- `/students/clerkships/orthopedics-trauma`
- `/students/clerkships/ent-ophthalmology`
- `/students/clerkships/radiology`
- `/students/clerkships/icu-anesthesia`

## Phase 6 — Practical Student Tools

- `/students/osce-bank`
- `/students/clinical-logbook`
- `/students/arabic-english-communication`
- `/students/student-to-intern-bridge`

## Enhanced UI Rules

- Add badges: Jordan Context, Clerkship, OSCE, Communication, Logbook, Senior Student.
- Do not expose all subpages on homepage at once.
- Keep `/students` hub simple: Roadmap, Clerkships, OSCE/Tools, Internship Bridge.
- Keep all high-risk clinical pages explicitly supervised.
