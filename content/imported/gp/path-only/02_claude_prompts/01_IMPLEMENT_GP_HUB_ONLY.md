# Claude Prompt â€” Implement GP Hub Only

Goal: implement ONLY the General Practitioner Path hub page from the dedicated GP folder.

Target:
Prefer existing GP route if present.
Otherwise use:
src/app/gp/page.tsx

Source folder:
SEG_GP_PATH_ONLY_MASTER_FOLDER/01_content_modules

Use:
- .claude/rules/page-template.md
- .claude/rules/content-safety.md
- .claude/rules/git-policy.md

Constraints:
- Do not touch Intern/ECG/Resident/EMS pages.
- Do not implement subpages yet unless already routed.
- Main page only: GP hub with module cards and short descriptions.
- English main UI.
- Arabic pearls only.
- Add disclaimer near top.
- No medication doses.
- No fixed triage times.
- No local protocols.
- Not a clinical protocol.
- No copied copyrighted text/questions.

Workflow:
1. Inspect routes and report target file before editing.
2. Edit only target file.
3. npm run build.
4. GP safety scan.
5. Browser verify.
6. Commit only target file:
   git add <target-file>
   git commit -m "Add general practitioner path hub"
7. No push.

