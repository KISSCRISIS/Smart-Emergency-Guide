# Claude Prompt — EMS Path Audit Only

Goal: audit EMS Path content and routes only.

Do not edit files.

Check:
- route existence
- broken links
- placeholders
- disclaimer presence
- Arabic pearls quality
- safety issues
- protocol-like wording
- medication doses
- procedure instructions
- fixed triage/transport rules
- local EMS policy claims
- whether EMS role/safety boundaries are clear

Run:
- git status --short
- git diff --stat
- npm run build

Report:
- files checked
- issues found
- fixes needed
- whether safe to commit/push/deploy

No edits.
No commit.
No push.
