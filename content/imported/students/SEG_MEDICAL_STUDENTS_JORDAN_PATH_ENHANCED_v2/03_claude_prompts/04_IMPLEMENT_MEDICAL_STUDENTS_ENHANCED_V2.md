# Claude Prompt — Implement Medical Students Jordan Enhanced v2 Safely

You are working inside the existing Smart Emergency Guide Next.js app.

Task: implement the Medical Students Jordan Path Enhanced v2 content safely.

Rules:
- Do not overwrite Intern/JMC, GP, EMS, Resident, ECG, Drug, Toxicology, or Antidotes paths.
- Do not use `git add .`.
- First inspect current `/students` route and AppShell/sidebar.
- Preserve completed pages.
- Start with the hub page only unless explicitly asked to expand subpages.
- Use English main content with short Arabic pearls.
- No official curriculum claim.
- No Ministry of Health endorsement claim.
- No medication doses.
- No independent management/procedure instructions.
- Every student action must be under supervision.

Suggested first implementation:
1. Update `/students` hub to show four cards:
   - Student Roadmap
   - Jordan Clinical Context
   - Clerkship Maps
   - OSCE & Tools
   - Student-to-Intern Bridge
2. Add route cards but mark subpages as prepared/in progress if not implemented.
3. Run `npm run build`.
4. Report changed files.
5. Stop.

Do not implement all 18 new pages in one commit unless explicitly instructed.
