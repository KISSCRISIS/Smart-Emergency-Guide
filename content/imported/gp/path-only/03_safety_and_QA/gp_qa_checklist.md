# GP Path QA Checklist

## Before implementation

- [ ] GP folder is separate from Intern/ECG.
- [ ] Target route confirmed.
- [ ] Sources used conceptually only.
- [ ] No copyrighted text copied.
- [ ] No textbook images included.

## Content QA

- [ ] GP identity clear.
- [ ] Not an ED management protocol.
- [ ] Red flags included.
- [ ] Referral framing included.
- [ ] Safety-netting included.
- [ ] Arabic pearls short.
- [ ] No generic filler.
- [ ] No doses.
- [ ] No fixed triage times.
- [ ] No local protocols.
- [ ] No independent high-risk discharge advice.

## Build/route QA

- [ ] npm run build passes.
- [ ] GP hub loads.
- [ ] Module cards visible.
- [ ] Mobile layout acceptable.
- [ ] Desktop layout acceptable.
- [ ] Links do not point to missing routes unless clearly disabled/coming later.

## Git QA

- [ ] git status --short reviewed.
- [ ] git diff --stat reviewed.
- [ ] Only GP target file committed.
- [ ] No git add .
- [ ] No push unless explicitly requested.

