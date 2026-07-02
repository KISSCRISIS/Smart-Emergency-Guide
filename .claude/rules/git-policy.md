# SEG Git Policy

This project uses small, reviewed local commits.

## Rules

- Never use `git add .`.
- Never use `git push` unless the user explicitly asks.
- Never use `git reset`, `git clean`, or destructive git commands without explicit approval.
- Commit one verified task at a time.
- Commit only the target file(s) for the verified task.
- Before any commit, run:
  - `git status --short`
  - `git diff --stat`
  - `git diff -- <target-file>`
- Confirm unrelated modified files are not staged.
- Generated/cache files such as `tsconfig.tsbuildinfo` should not be committed unless explicitly approved.
- `.claude/settings.local.json` should not be committed unless explicitly approved as a separate config change.
- After commit, report:
  - commit hash
  - commit message
  - files committed
  - remaining modified files
  - confirm no push was done.
