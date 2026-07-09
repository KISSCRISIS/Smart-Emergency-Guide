# Implementation Notes — Emergency Cases Intern Level

## Target

`src/app/interns/emergency-cases/page.tsx`

## SEG rules

Use:
- `.claude/rules/page-template.md`
- `.claude/rules/content-safety.md`
- `.claude/rules/git-policy.md`

## Safety boundaries

Do not add:
- medication doses
- drug administration instructions
- local hospital protocols
- fixed triage times
- definitive disposition rules
- copied questions from source files

Every case should include:
- Educational case label
- What the intern should notice
- Immediate thinking
- When to call senior
- JMC / exam trap
- Handover line

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
   - give
   - administer
   - discharge
4. Browser verify page.
5. Commit only target file:
   `git add src/app/interns/emergency-cases/page.tsx`
   `git commit -m "Add emergency cases intern guide"`

## Source basis

Core uploaded sources:
- Tintinalli’s Emergency Medicine Examination and Board Review 2023.
- Rosen’s Emergency Medicine 10e Q&A.
- Rosh Rapid Review — Emergency Medicine Rotation Exam.

Use as conceptual source-informed references only. Do not copy copyrighted wording or questions.
