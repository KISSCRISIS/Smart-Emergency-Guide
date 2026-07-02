# Inspect Only Command

Use this before implementing any SEG page.

## Template

```
Goal: inspect <module/page> only.

Target:
<target-file>

Rules:
- Do not edit files.
- Do not create files.
- Do not delete files.
- Do not install packages.
- Do not run git add, commit, push, reset, clean, or stash.
- Only inspect and report.

Report:
1. Current content state: real content or placeholder.
2. Components used.
3. Layout pattern.
4. Existing Arabic text.
5. Existing buttons/links.
6. Any safety or medical content risks.
7. Whether unrelated modified files exist:
   - run git status --short
   - run git diff --stat
8. Short plan only.
9. Do not implement until approved.
```
