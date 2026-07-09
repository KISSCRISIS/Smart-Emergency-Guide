# Implementation Notes â€” Drug Essentials Intern Level v2

## Target

`src/app/interns/drug-essentials/page.tsx`

## SEG rules

Use:
- `.claude/rules/page-template.md`
- `.claude/rules/content-safety.md`
- `.claude/rules/git-policy.md`

## Safety boundaries

Do not add:
- medication doses
- mg / mcg / mL dosing
- infusion/drip rates
- RSI medication dosing
- antidote dosing
- local hospital protocol language
- copied questions from source files

## Build workflow

1. Implement only target file.
2. Run `npm run build`.
3. Run content safety scan for:
   - mg
   - mcg
   - mL
   - units/kg
   - dose
   - dosage
   - bolus
   - infusion
   - drip
   - protocol
   - RSI
   - antidote
4. Browser verify page.
5. Commit only target file:
   `git add src/app/interns/drug-essentials/page.tsx`
   `git commit -m "Add drug essentials intern guide"`

## Source basis

Core uploaded sources:
- Tintinalliâ€™s Emergency Medicine Examination and Board Review 2023.
- Rosenâ€™s Emergency Medicine 10e Q&A.
- Rosh Rapid Review â€” Emergency Medicine Rotation Exam.

Use as conceptual source-informed references only. Do not copy copyrighted wording or questions.

