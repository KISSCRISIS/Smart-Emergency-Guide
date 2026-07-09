# EMS / Paramedics Path Route Architecture

## Phase 1 — Hub Only

Implement one page first:

`/ems`

or:

`/paramedics`

Content:
- pathway identity
- disclaimer
- module cards
- coming-later labels for subpages if needed

## Phase 2 — Core EMS Subpages

Implement one page per command/commit:

1. `/ems/scene-safety`
2. `/ems/abcde`
3. `/ems/airway-breathing`
4. `/ems/shock-bleeding`
5. `/ems/chest-pain`
6. `/ems/dyspnea`
7. `/ems/stroke-neuro`
8. `/ems/trauma`
9. `/ems/seizure-ams`
10. `/ems/diabetic-metabolic`
11. `/ems/anaphylaxis`
12. `/ems/pediatrics`
13. `/ems/pregnancy-postpartum`
14. `/ems/toxicology-overdose`
15. `/ems/ecg-danger`
16. `/ems/handover`

## Phase 3 — Expansion

- behavioral/self-harm
- documentation
- infection prevention
- mass casualty
- learning logbook
- EMS-to-intern interface

## UI Rules

- Keep EMS visually separate from Intern, GP, and Student paths.
- Use prehospital wording: scene, transport, handover, receiving ED.
- Do not show “treat/manage” buttons.
- Buttons should say Recognize / Handover / Observe / Review.
- Use badges: Scene Safety, Red Flag, Prehospital, Notify ED, Follow Local Protocol.
- No fake functional buttons.
