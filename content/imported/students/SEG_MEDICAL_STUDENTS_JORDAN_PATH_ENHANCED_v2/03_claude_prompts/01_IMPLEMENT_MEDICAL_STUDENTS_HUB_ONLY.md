# Claude Prompt — Implement Medical Students Hub Only

Goal: implement ONLY the Medical Students Path hub page from the dedicated Medical Students folder.

Target:
Prefer existing student/medical-students route if present.
Otherwise use:
src/app/students/page.tsx

Source folder:
SEG_MEDICAL_STUDENTS_JORDAN_PATH_ONLY_FOLDER/01_content_modules

Use:
- .claude/rules/page-template.md
- .claude/rules/content-safety.md
- .claude/rules/git-policy.md

Constraints:
- Do not touch Intern/GP/ECG/Resident/EMS pages.
- Do not implement subpages yet unless already routed.
- Main page only: Medical Students hub with stage cards and module cards.
- English main UI.
- Arabic pearls only.
- Add disclaimer near top.
- No medication doses.
- No fixed triage times.
- No local protocols.
- Not an official curriculum.
- Not a clinical protocol.
- No copied copyrighted text/questions.

Workflow:
1. Inspect routes and report target file before editing.
2. Edit only target file.
3. npm run build.
4. Student path safety scan.
5. Browser verify.
6. Commit only target file:
   git add <target-file>
   git commit -m "Add medical students path hub"
7. No push.
