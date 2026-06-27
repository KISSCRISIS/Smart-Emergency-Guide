# Drug Image Sourcing Workflow

The Drug Handbook now uses a real-medication-image workflow rather than decorative placeholders.

## What changed

- `src/components/DrugImageCard.tsx` renders the medication image area for each drug.
- `src/app/api/drug-image/route.ts` searches trusted sources automatically:
  - Static verified open-source images when available.
  - DailyMed SPL media via the official DailyMed API.
  - Fallback source links for manual admin/pharmacy verification.
- Each drug still keeps required formulation guidance from `src/data/drugImageRequirements.ts`.

## Safety rule

Do not treat an image as clinically valid until the product name, concentration, formulation, and route match the local ED/hospital formulation.

## Source priority

1. DailyMed SPL product/label media when available.
2. FDA label or manufacturer product page.
3. Hospital formulary-approved photo.
4. Pharmacy-verified local product photo.

## Publishing rule

If no trusted image is found automatically, the card shows a “trusted real photo still required” state and provides links to trusted search/source workflows. Do not use random search images without checking drug identity and concentration.
