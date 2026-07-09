# SEG GP PATH ONLY â€” READ ME FIRST

This folder contains ONLY General Practitioner Path content.

It is intentionally separated from:
- Intern Path
- ECG Essentials
- Resident Path
- EMS Path
- Drug Handbook
- Antidotes Handbook

Purpose:
Create a dedicated GP/Primary Care pathway focused on emergency recognition, safe referral, and safety-netting.

Core identity:
GP Path = Emergency Recognition & Referral
NOT ED management
NOT a treatment protocol
NOT a drug/dose handbook

Core uploaded source basis:
1. Tintinalliâ€™s Emergency Medicine Examination and Board Review 2023
2. Rosenâ€™s Emergency Medicine 10e Q&A
3. Rosh Rapid Review â€” Emergency Medicine Rotation Exam

Use source-informed synthesis only.
Do not copy copyrighted wording, questions, tables, images, or explanations.

Recommended implementation timing:
Do NOT implement before Intern MVP is stable unless explicitly decided.
When implementation starts, begin with one GP hub page first, then expand into subpages later.

Suggested first route:
src/app/gp/page.tsx

Alternative route:
src/app/general-practitioner/page.tsx

Main prepared files:
- 01_content_modules/*.md
- 02_claude_prompts/*.md
- 03_safety_and_QA/*.md
- 04_source_map/*.csv
- 05_route_architecture/*.md

