# Unified SEG Topic Page Schema

Use this structure for all imported topics, even if the original pack varies slightly.

```yaml
---
title: ""
module: "ecg | toxicology | drugs | emergency_cases | critical_care | airway | pocus"
section: ""
slug: ""
route: ""
audience: ["Interns", "Medical Students", "General Practitioners", "Emergency Residents"]
source_basis: ""
safety_level: "standard | high"
requires_medical_audit: true
requires_local_protocol_verification: true
image_brief: ""
verified_visual_status: "pending | verified | none"
---
```

## Required content blocks

- `Definition / Clinical Frame`
- `Key Clues`
- `Why It Matters in ED`
- `What Can Kill the Patient Now?` when relevant
- `Conceptual First ED Actions`
- `Common Trap`
- `Arabic Simplification`
- `Assessment Question`

## Standard safety footer

> Educational guide for clinical learning and board-style reasoning. Not a standalone treatment protocol. Verify dosing, procedures, imaging decisions, and local workflow with current guidelines and local hospital policy.
