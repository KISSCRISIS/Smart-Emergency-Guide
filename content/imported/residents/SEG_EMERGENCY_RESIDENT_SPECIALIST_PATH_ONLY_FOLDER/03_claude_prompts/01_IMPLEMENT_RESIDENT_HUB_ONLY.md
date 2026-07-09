# Claude Prompt — Implement Resident / Specialist Hub Only

Goal: implement ONLY the Emergency Resident / Specialist Path hub page from the dedicated Resident folder.

Target:
Prefer existing Resident/Specialist route if present.
Otherwise use:
src/app/residents/page.tsx

Source folder:
SEG_EMERGENCY_RESIDENT_SPECIALIST_PATH_ONLY_FOLDER/01_content_modules

Use:
- .claude/rules/page-template.md
- .claude/rules/content-safety.md
- .claude/rules/git-policy.md

Constraints:
- Do not touch Intern/GP/Students/EMS/ECG pages.
- Do not implement subpages yet unless already routed.
- Main page only: Resident/Specialist hub with module cards.
- English main UI.
- Arabic pearls only.
- Add disclaimer near top.
- No medication doses.
- No procedure steps.
- No fixed triage times.
- No local hospital protocols.
- Not a clinical protocol.
- No copied copyrighted text/questions.

Workflow:
1. Inspect routes and report target file before editing.
2. Edit only target file.
3. npm run build.
4. Resident safety scan.
5. Browser verify.
6. Commit only target file:
   git add <target-file>
   git commit -m "Add emergency resident specialist path hub"
7. No push.
