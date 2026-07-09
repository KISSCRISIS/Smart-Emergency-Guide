# Resident / Specialist Path QA Checklist

## Before implementation

- [ ] Resident folder is separate from Intern/GP/Students/EMS/ECG.
- [ ] Target route confirmed.
- [ ] Does not claim to be local hospital protocol.
- [ ] Sources used conceptually only.
- [ ] No copyrighted text copied.
- [ ] No copied questions.
- [ ] No textbook images included.

## Content QA

- [ ] Resident identity clear.
- [ ] Advanced ED reasoning clear.
- [ ] Leadership and resus room role included.
- [ ] Disposition thinking included.
- [ ] Consultant communication included.
- [ ] Junior supervision included.
- [ ] Board/exam traps included.
- [ ] Arabic pearls short.
- [ ] No medication doses.
- [ ] No procedure instructions.
- [ ] No fixed triage times.
- [ ] No local protocol claims.
- [ ] No one-size-fits-all discharge rules.

## Build/route QA

- [ ] npm run build passes.
- [ ] Resident hub loads.
- [ ] Module cards visible.
- [ ] Mobile layout acceptable.
- [ ] Desktop layout acceptable.
- [ ] Links do not point to missing routes unless disabled/coming soon.

## Git QA

- [ ] git status --short reviewed.
- [ ] git diff --stat reviewed.
- [ ] Only Resident target file committed.
- [ ] No git add .
- [ ] No push unless explicitly requested.
