# SEG MEDICAL STUDENTS JORDAN PATH ONLY — READ ME FIRST

This folder contains ONLY Medical Students Path content.

It is intentionally separated from:
- Intern Path
- GP Path
- ECG Essentials
- Resident Path
- EMS Path
- Drug Handbook
- Antidotes Handbook

Purpose:
Create a Medical Students pathway aligned with the Jordanian public medical education and healthcare context, especially:
- Ministry of Health clinical/primary-care/emergency environment
- Jordanian public medical faculties and clinical training realities
- transition from preclinical knowledge to safe bedside reasoning
- preparation for clerkships, OSCEs, ED exposure, and internship readiness

Important:
This is NOT an official Ministry of Health curriculum.
This is NOT an official curriculum for any Jordanian university.
It is an SEG educational pathway inspired by public-source information and the user's SEG emergency medicine goals.

Core uploaded emergency medicine source basis:
1. Tintinalli’s Emergency Medicine Examination and Board Review 2023
2. Rosen’s Emergency Medicine 10e Q&A
3. Rosh Rapid Review — Emergency Medicine Rotation Exam

Jordan context source basis:
- Jordan Ministry of Health materials and health system context
- Jordan public university medical faculty pages/study plan pages
- official/academic public information about clinical training and medical education in Jordan

Use source-informed synthesis only.
Do not copy copyrighted wording, questions, tables, images, or explanations.

Recommended implementation timing:
Do NOT implement before Intern MVP is stable unless explicitly decided.
When implementation starts, begin with one Medical Students hub page first, then expand into subpages later.

Suggested first route:
src/app/students/page.tsx

Alternative route:
src/app/medical-students/page.tsx


---

# Enhanced v2 Update

This enhanced version adds the missing Jordanian medical student layers:

- public medical schools alignment cards
- expanded year-by-year roadmap
- clerkship maps
- MOH hospital/referral workflow observation
- OSCE station bank
- clinical logbook and portfolio structure
- Arabic-English bedside communication
- student-to-intern bridge

This enhancement remains separate from Intern, GP, EMS, Resident, ECG, Drug, Toxicology, and Antidotes paths.

Implementation priority remains conservative:
1. Build `/students` hub first.
2. Add roadmap and Jordan context pages.
3. Add clerkship maps.
4. Add OSCE/logbook/communication tools.
5. Link to Intern/JMC path only after student boundaries are clear.
