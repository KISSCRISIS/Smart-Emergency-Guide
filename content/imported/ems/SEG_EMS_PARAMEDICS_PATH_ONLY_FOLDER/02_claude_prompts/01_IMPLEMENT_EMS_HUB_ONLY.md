# Claude Prompt — Implement EMS Hub Only

Goal: implement ONLY the EMS / Paramedics Path hub page from the dedicated EMS folder.

Target:
Prefer existing EMS/Paramedics route if present.
Otherwise use:
src/app/ems/page.tsx

Source folder:
SEG_EMS_PARAMEDICS_PATH_ONLY_FOLDER/01_content_modules

Use:
- .claude/rules/page-template.md
- .claude/rules/content-safety.md
- .claude/rules/git-policy.md

Constraints:
- Do not touch Intern/GP/Students/ECG/Resident pages.
- Do not implement subpages yet unless already routed.
- Main page only: EMS hub with module cards.
- English main UI.
- Arabic pearls only.
- Add disclaimer near top.
- No medication doses.
- No procedure instructions.
- No fixed triage/transport rules.
- No local ambulance protocols.
- Not a clinical protocol.
- No copied copyrighted text/questions.

Workflow:
1. Inspect routes and report target file before editing.
2. Edit only target file.
3. npm run build.
4. EMS safety scan.
5. Browser verify.
6. Commit only target file:
   git add <target-file>
   git commit -m "Add EMS paramedics path hub"
7. No push.
