# Safe Commit Command

Use only after:
- build passes
- content safety scan passes
- browser verification passes
- user approves commit

## Template

```
Goal: create a safe local git checkpoint for the verified task only.

Target file(s):
<target-file-or-files>

Rules:
- Do not edit files.
- Do not use git add .
- Do not push.
- Do not reset or clean.
- Do not stage unrelated modified files.
- Commit only the approved target file(s).

Steps:
1. Run:
   git status --short

2. Run:
   git diff --stat

3. Run:
   git diff -- <target-file-or-files>

4. Confirm the diff matches only the approved task.

5. Stage only the approved target file(s):
   git add <target-file-or-files>

6. Commit:
   git commit -m "<clear commit message>"

7. After commit, run:
   git status --short

8. Report:
   - commit hash
   - commit message
   - files committed
   - remaining modified files
   - confirm no push was done
```
