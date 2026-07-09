# Claude Code Implementation Prompts â€” SEG Intern Modules

Use these only after reviewing each content file.

---

## 1. Drug Essentials

Goal: implement Drug Essentials intern page from prepared Markdown.

Target:
src/app/interns/drug-essentials/page.tsx

Source file to use:
drug_essentials_intern_level_v2.md

Use:
- .claude/rules/page-template.md
- .claude/rules/content-safety.md
- .claude/rules/git-policy.md

Constraints:
- Edit only target file.
- No medication doses.
- No mg/mcg/mL/units/kg/drip/infusion dosing.
- No RSI/sedation/paralytic dosing.
- No antidote dosing.
- No hospital-specific protocols.
- English main content.
- Arabic only short pearls.
- Standard disclaimer near top.

Workflow:
1. Implement only target file.
2. npm run build.
3. Content safety scan.
4. Browser verify.
5. Commit only target file:
   git add src/app/interns/drug-essentials/page.tsx
   git commit -m "Add drug essentials intern guide"
6. No push.

---

## 2. Toxicology Essentials

Goal: implement Toxicology Essentials intern page from prepared Markdown.

Target:
src/app/interns/toxicology-essentials/page.tsx

Source file to use:
toxicology_essentials_intern_level.md

Use:
- .claude/rules/page-template.md
- .claude/rules/content-safety.md
- .claude/rules/git-policy.md

Constraints:
- Edit only target file.
- No antidote doses.
- No decontamination procedure steps.
- No activated charcoal instructions.
- No medication doses.
- No hospital-specific protocols.
- English main content.
- Arabic only short pearls.
- Standard disclaimer near top.

Workflow:
1. Implement only target file.
2. npm run build.
3. Content safety scan.
4. Browser verify.
5. Commit only target file:
   git add src/app/interns/toxicology-essentials/page.tsx
   git commit -m "Add toxicology essentials intern guide"
6. No push.

---

## 3. Emergency Cases

Goal: implement Emergency Cases intern page from prepared Markdown.

Target:
src/app/interns/emergency-cases/page.tsx

Source file to use:
emergency_cases_intern_level.md

Use:
- .claude/rules/page-template.md
- .claude/rules/content-safety.md
- .claude/rules/git-policy.md

Constraints:
- Edit only target file.
- Every case must be clearly educational.
- Not a clinical protocol.
- No medication doses.
- No drug administration instructions.
- No local hospital protocols.
- No fixed triage times.
- No definitive discharge/disposition rules without senior framing.
- English main content.
- Arabic only short pearls.
- Standard disclaimer near top.

Workflow:
1. Implement only target file.
2. npm run build.
3. Content safety scan.
4. Browser verify.
5. Commit only target file:
   git add src/app/interns/emergency-cases/page.tsx
   git commit -m "Add emergency cases intern guide"
6. No push.

---

## Final checkpoint after all three

Goal: end-of-phase checkpoint report only.

Report:
- latest commit
- build status
- completed modules
- remaining modules
- git status --short
- confirm no push

ECG Essentials remains postponed until the separate ECG content is provided/approved.

