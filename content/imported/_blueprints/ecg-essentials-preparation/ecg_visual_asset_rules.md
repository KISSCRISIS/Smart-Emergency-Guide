# ECG Visual Asset Rules â€” SEG

## Absolute Rule

Only ECG images belong in ECG Essentials.

Do not place:
- POCUS images
- chest X-rays
- CT scans
- anatomy illustrations
- generic heart icons as diagnostic examples
- random monitor strips if not clearly ECG
- mismatched images

## Each ECG image needs metadata

For every ECG image, create a record:

- file name
- topic
- source
- permission/license status
- patient identifiers removed
- verified diagnosis/pattern
- reviewer
- date reviewed
- notes
- safe to publish? yes/no

## Image status labels

Use one:

- `verified_topic_matched`
- `pending_review`
- `needs_replacement`
- `do_not_use`
- `no_verified_visual_available`

## On page display rule

If no verified image exists, show:

No verified topic-matched ECG visual available yet.

Do not fill the gap with unrelated visuals.

## Naming convention

Use clear file names:

- ecg_stemi_anterior_verified_01.png
- ecg_posterior_mi_pending_01.png
- ecg_hyperkalemia_verified_01.png
- ecg_wide_complex_tachycardia_pending_01.png

Avoid:
- image1.png
- screenshot.png
- ecg-new.png
- random downloaded names

## Copyright caution

Do not use textbook ECG images directly unless:
- permission exists
- license allows reuse
- image is from an open-access source with clear license
- patient identifiers are removed
- source attribution is included

## AI-generated ECG warning

Avoid AI-generated ECGs for diagnostic teaching unless clearly labeled as synthetic and medically reviewed.
For ECG teaching, real verified examples are preferred.

