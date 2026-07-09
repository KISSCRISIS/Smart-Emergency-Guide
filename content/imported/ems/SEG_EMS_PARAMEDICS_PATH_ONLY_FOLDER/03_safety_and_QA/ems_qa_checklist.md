# EMS / Paramedics Path QA Checklist

## Before implementation

- [ ] EMS folder is separate from Intern/GP/Students/ECG.
- [ ] Target route confirmed.
- [ ] Does not claim to be local EMS protocol.
- [ ] Sources used conceptually only.
- [ ] No copyrighted text copied.
- [ ] No images included unless verified and licensed.

## Content QA

- [ ] Scene safety clear.
- [ ] EMS role boundaries clear.
- [ ] ABCDE recognition included.
- [ ] Red flags included.
- [ ] Handover included.
- [ ] Documentation included.
- [ ] Arabic pearls short.
- [ ] No doses.
- [ ] No procedure instructions.
- [ ] No local transport rules.
- [ ] No fixed triage times.
- [ ] No independent high-risk management claims.

## Build/route QA

- [ ] npm run build passes.
- [ ] EMS hub loads.
- [ ] Module cards visible.
- [ ] Mobile layout acceptable.
- [ ] Desktop layout acceptable.
- [ ] Links do not point to missing routes unless disabled/coming soon.

## Git QA

- [ ] git status --short reviewed.
- [ ] git diff --stat reviewed.
- [ ] Only EMS target file committed.
- [ ] No git add .
- [ ] No push unless explicitly requested.
