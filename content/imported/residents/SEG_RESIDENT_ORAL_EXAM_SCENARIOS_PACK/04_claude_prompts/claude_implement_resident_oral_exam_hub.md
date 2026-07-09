# Claude Prompt — Implement Resident Oral Exam Hub Only

Goal: implement ONLY the Resident Oral Exam hub page.

Target:
Prefer:
src/app/residents/oral-exam/page.tsx

Source folder:
SEG_RESIDENT_ORAL_EXAM_SCENARIOS_PACK

Use:
- .claude/rules/page-template.md
- .claude/rules/content-safety.md
- .claude/rules/git-policy.md

Constraints:
- Do not touch Intern/GP/Students/EMS/ECG pages.
- Do not implement all scenarios yet.
- Main hub only: identity, disclaimer, candidate framework, scenario category cards, scoring rubric preview.
- English main UI.
- Arabic pearls only.
- Add disclaimer near top.
- Label content as original SEG educational scenarios.
- No official exam claim.
- No medication doses.
- No procedure steps.
- No fixed triage times.
- No local hospital protocols.
- No copied copyrighted text/questions.

Workflow:
1. Inspect resident routes and report target file before editing.
2. Edit only target file.
3. npm run build.
4. Oral exam safety scan.
5. Browser verify.
6. Commit only target file:
   git add <target-file>
   git commit -m "Add resident oral exam scenarios hub"
7. No push.
