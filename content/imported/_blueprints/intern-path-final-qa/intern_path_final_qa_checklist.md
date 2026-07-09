# SEG Intern Path â€” Final QA Checklist

## Scope

This checklist is for the Intern Doctors Path after these modules exist:

- First Night Shift
- ED Workflow
- Handover
- Airway Basics
- Drug Essentials
- Toxicology Essentials
- Emergency Cases
- JMC Exam Practice
- Study Library / Intern Hub links

## 1. Build QA

- [ ] `npm run build` passes.
- [ ] No TypeScript errors.
- [ ] No ESLint blocking errors.
- [ ] No new route errors.
- [ ] Page count is stable/expected.
- [ ] No unexpected generated files committed.

## 2. Git QA

Run:

```bash
git status --short
git log --oneline -10
git diff --stat
```

Confirm:

- [ ] No unrelated source changes.
- [ ] No `git add .`.
- [ ] Only intended target files committed.
- [ ] `.claude/settings.local.json` not committed unless intentionally reviewed.
- [ ] `tsconfig.tsbuildinfo` not committed unless intentionally reviewed.
- [ ] No push unless explicitly approved.

## 3. Browser / Visual QA

Check each page manually in browser:

- [ ] Intern hub loads.
- [ ] First Night Shift loads.
- [ ] ED Workflow loads.
- [ ] Handover loads.
- [ ] Airway Basics loads.
- [ ] Drug Essentials loads.
- [ ] Toxicology Essentials loads.
- [ ] Emergency Cases loads.
- [ ] JMC Exam Practice loads.
- [ ] OB/GYN JMC module loads.
- [ ] Mobile layout acceptable.
- [ ] Desktop layout acceptable.
- [ ] No broken buttons that appear functional but do nothing.
- [ ] No duplicate banners.
- [ ] No raw HTML/CSS loading issue.
- [ ] Back/route navigation works.

## 4. Content QA

For each page:

- [ ] Main title is clear.
- [ ] Subtitle is useful.
- [ ] Disclaimer present where clinically sensitive.
- [ ] Content is intern-level.
- [ ] Arabic pearls are short and useful.
- [ ] No generic Arabic filler.
- [ ] No copied copyrighted questions/text.
- [ ] No claims that page is a protocol.
- [ ] No treatment certainty beyond intern level.
- [ ] Clear â€œcall seniorâ€ or escalation framing.
- [ ] JMC/exam traps are present where relevant.
- [ ] Checklist or handover tool present where relevant.

## 5. Safety Scan â€” Global

Search source code for:

- [ ] `mg`
- [ ] `mcg`
- [ ] `mL`
- [ ] `units/kg`
- [ ] `dose`
- [ ] `dosage`
- [ ] `bolus`
- [ ] `infusion`
- [ ] `drip`
- [ ] `protocol`
- [ ] `triage time`
- [ ] `within 10 minutes`
- [ ] `within 30 minutes`
- [ ] `within 60 minutes`
- [ ] `discharge home`

Important:
Some terms may appear in warnings, disclaimers, or â€œdo not do aloneâ€ contexts. Do not blindly fail the page. Review the context.

## 6. Page-Specific Safety

### Drug Essentials

- [ ] No medication dosing.
- [ ] No RSI drug dosing.
- [ ] No antidote dosing.
- [ ] No drug administration protocol.
- [ ] Medication risks framed as safety thinking.

### Toxicology Essentials

- [ ] No antidote dosing.
- [ ] No activated charcoal instructions.
- [ ] No decontamination steps.
- [ ] Poison center/senior escalation is clear.
- [ ] Urine drug screen limitations framed correctly.
- [ ] Temporary improvement warning present.

### Emergency Cases

- [ ] Every case is clearly educational.
- [ ] No clinical protocol language.
- [ ] No definitive independent discharge decisions.
- [ ] Senior escalation included.
- [ ] Handover line included.
- [ ] Cross-case red flags included.

### Airway Basics

- [ ] No RSI dosing.
- [ ] No procedural intubation protocol.
- [ ] Intern role is preparation/recognition/escalation.

### ED Workflow

- [ ] No fixed triage waiting times.
- [ ] No local triage color protocol.
- [ ] ED thinking is general and educational.

## 7. Placeholder QA

Search for:

- [ ] `Coming Soon`
- [ ] `Lorem`
- [ ] `placeholder`
- [ ] `TODO`
- [ ] `TBD`
- [ ] `generic`
- [ ] `dummy`
- [ ] `example only`

Acceptable only if intentionally used for future locked modules, not inside completed intern modules.

## 8. Final Decision

Choose one:

- [ ] Ready for local commit only.
- [ ] Ready for push.
- [ ] Ready for deploy.
- [ ] Needs fixes before push/deploy.

Do not push/deploy if any critical safety item is unresolved.

