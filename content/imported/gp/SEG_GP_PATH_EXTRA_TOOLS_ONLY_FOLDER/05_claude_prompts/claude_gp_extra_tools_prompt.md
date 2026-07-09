# Claude Prompt — Implement GP Extra Tools Later

Goal: implement GP extra tools after GP hub is approved.

Possible routes:
- /gp/practice
- /gp/referral-tools
- /gp/safety-netting-phrases

Source folder:
SEG_GP_PATH_EXTRA_TOOLS_ONLY_FOLDER

Constraints:
- Original practice questions only.
- Label every question: Practice question — original SEG educational question, not official.
- No copied questions from sources.
- No medication doses.
- No local protocols.
- No fixed triage times.
- No independent high-risk discharge advice.
- Arabic phrases should be practical and short.
- Do not touch Intern/ECG/Resident/EMS pages.

Workflow:
1. Inspect GP routes.
2. Choose one target page only.
3. Implement.
4. Build.
5. Safety scan.
6. Browser verify.
7. Commit only target file.
8. No push.
