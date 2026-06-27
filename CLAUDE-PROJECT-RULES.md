# CLAUDE-PROJECT-RULES.md

## Drug Handbook Groups
Cardio & Resuscitation
RSI & Airway
Vasopressors & Inotropes
Analgesia & Sedation
Toxicology & Antidotes
Thrombolytics & Reversal
Hypertensive Emergencies
Seizure & Neuro Emergencies
Respiratory / Asthma / Anaphylaxis
Fluids & Electrolytes
Antibiotics
GI / Bleeding / Liver

## Group pages
/drug-handbook/groups/[groupSlug]

## Full profile pages
/drug-handbook/[slug]

## Accordion cards should be compact
- drug name
- category/class
- emergency use
- dose if available
- route if available
- mechanism if available
- Open Full Profile button only if real route exists

## High-Yield Arabic Note title only
High-Yield Arabic Note

## Avoid generic labels
- Arabic Support
- شرح عربي مبسط
- Arabic explanation
- Arabic Understanding Note

## Arabic note structure
- الفكرة الأساسية:
- المهم للحفظ:
- التريك الامتحاني:
- متى أفكر فيه؟

## Medical safety rules
- Do not invent dosing.
- Do not overstate classic exam traps as absolute modern contraindications when medically nuanced.

## Important exam triggers to preserve when relevant
- Wide QRS + TCA toxicity → Sodium bicarbonate
- Hyperkalemia ECG changes → Calcium
- INH seizure → Pyridoxine / Vitamin B6
- Stable regular narrow-complex SVT → Adenosine
- Bradycardia + hypotension → Atropine
- Stroke alteplase/tPA dose → 0.9 mg/kg IV, max 90 mg, 10% bolus then 90% over 60 minutes
- Organophosphate poisoning → Atropine + Pralidoxime
- Methemoglobinemia → Methylene blue
- Cyanide poisoning → Hydroxocobalamin
- Toxic alcohols → Fomepizole
- Digoxin toxicity with dangerous features → Digoxin immune Fab

## Arabic content rules
- Arabic must be useful, not generic.
- Avoid repeated generic Arabic filler.
- Good Arabic notes should explain:
  - what the idea is
  - why it matters in the ED
  - common exam trap
  - first clinical trigger/action
- Arabic must be readable RTL.
- English drug names and doses should remain visually clean.

## Image / visual matching rules
- Do not use random images as decoration in medical topic pages.
- If no verified topic-matched visual exists, show: "No verified topic-matched visual available yet."
- ECG topics must use ECG/cardiology visuals only.
- POCUS topics must use ultrasound visuals only.
- Toxicology topics must use toxicology/antidote visuals only.

## Content protection rules (CRITICAL)
- Do NOT modify scientific/educational content files. They will be edited manually later.
- Do NOT rewrite, summarize, translate, enrich, delete, rename, or restructure scientific content/data.
- Protected files include (but are not limited to):
  - `src/data/APP_DATABASE.json`
  - `src/data/emMasterTextbookData.ts`
  - `src/data/studyPaths.ts`
  - `src/data/emergencyCases.ts`
  - `src/data/criticalGuidelines.ts`
  - `src/data/boardReviewRoutes.ts`
  - `src/data/intubationVentilator.ts`
  - `src/data/redFlagsDdx.ts`
  - `src/data/signsSymptomsTriads.ts`
  - `src/data/questionSolvingStrategies.ts`
  - `public/arabic-board-review/*.html`
- Allowed: UI cleanup, layout improvements, navigation fixes, removing fake buttons, fixing duplicate rendering, styling improvements, browsing UX.
- Not allowed: changing medical text, drug doses, Arabic explanations, board questions, topic content, deleting study modules, replacing real data with hardcoded fake data.
- Before editing: report which files will be changed.
- After editing: report exactly which files changed and confirm scientific content files were not modified.

## Final report required after each task
After each edit, report:
- Files changed
- Routes added or modified
- What was fixed
- What was preserved
- Whether build ran
- Whether build passed
- Whether lint ran
- Whether lint passed
- Remaining limitations
- Never generate a ZIP unless explicitly requested.
