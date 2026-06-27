# Automated Certificate of Completion

Smart Emergency Guide includes a production-ready certificate flow:

- A certificate route at `/certificates`.
- Certificate eligibility after a study path reaches 100% completion.
- Student name, path name, date of issue, serial number, and QR verification.
- Print / Save PDF support through the browser print dialog.
- Share buttons for Facebook, X, Instagram link-copy, WhatsApp, and native share.
- Verification route: `/certificates/verify/[serial]`.
- Supabase table: `public.certificates`.

## Serial format

`SEG-[PATH-CODE]-[YEAR]-[MMDDHHMM]`

Examples:

- `SEG-BEG-2026-06232145`
- `SEG-JMC-2026-06232145`
- `SEG-BOARD-2026-06232145`

## Production note

The current local version stores issued certificates in `localStorage` for demo/offline readiness. In production, connect the same fields to `public.certificates` in Supabase and store the generated PDF URL in `pdf_url`.
