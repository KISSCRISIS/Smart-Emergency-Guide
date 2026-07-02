# SEG Medical Content Safety Rules

SEG is an educational emergency medicine study platform. It is not a hospital protocol, diagnostic tool, or substitute for senior clinical judgment.

## General Rules

- Keep content educational and intern-focused.
- Do not invent local hospital protocols.
- Do not present triage colors or triage waiting times as universal rules.
- Do not include medication doses unless the page is specifically a verified drug reference page with sources.
- Do not include rigid diagnostic cutoffs as absolute rules without source context.
- Avoid giving actionable treatment protocols in general intern pages.
- Use escalation language: call senior early, follow hospital policy, and follow local protocols.

## Arabic

- English is the main medical language.
- Arabic should be short pearls/golden rules only.
- Do not translate long medical paragraphs into Arabic.
- Arabic must be readable and natural.

## High-Risk Content

- **Drug Essentials:** needs stronger source checking and disclaimer.
- **Toxicology Essentials:** avoid antidote/decontamination steps unless verified and framed safely.
- **ECG Essentials:** avoid overconfident diagnosis language; encourage senior review.
- **Emergency Cases:** must be clearly labeled as educational cases, not clinical protocols.

## Required Disclaimer

For general clinical workflow pages, include this one-liner:

> General educational framework. Always follow your hospital policy and senior instructions.

## Practice Questions

- Uploaded/source-derived JMC questions must remain separated from generated practice questions.
- Any generated question must be labeled:
  > Practice question — not an official JMC question.

## Content Safety Scan

Before committing any clinical page, run a content safety scan for:

- `mg`
- `mcg`
- `mL`
- `dose`
- `dosage`
- `bolus`
- `protocol`
- Fixed triage waiting times such as `10 minutes`, `30 minutes`, `60 minutes`, `120 minutes`
- Triage colors used as universal protocol labels: `red`, `orange`, `yellow`, `green`

Build passing is not enough. A page must pass content safety review and browser verification before commit.
