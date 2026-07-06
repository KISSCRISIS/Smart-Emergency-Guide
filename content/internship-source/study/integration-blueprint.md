# Internship Study Content — Integration Blueprint

Generated: 2026-06-27  
Status: **Planning only — no pages created yet**

---

## 1. Available Study Sources

| # | File | Specialty | Size | Type | Chapters Detected | Quality |
|---|---|---|---|---|---|---|
| 1 | `internal-medicine-summary.md` | Internal Medicine | 116 KB | Study Summary | Endocrinology, Cardiology, Pulmonology, GI, Nephrology, Infectious Disease, Neurology, Hematology | [needs review] |
| 2 | `surgery-summary.md` | Surgery | 211 KB | Study Summary | Surgical Techniques, Wounds, Fluids/Electrolytes, Trauma, Acute Abdomen, GI Surgery, Vascular, Urology, Breast, Procedures | [needs review] |
| 3 | `obgyn.md` | OBGYN | 169 KB | Study Summary | Reproductive Basics, Obstetrics (Antenatal, Labor, Postpartum, Complications), Gynecology, Oncology Basics | [needs review] |
| 4 | `pediatrics.md` | Pediatrics | 219 KB | Study Summary | Newborn, Growth/Nutrition, Development, Genetics, Immunizations, Respiratory, Allergy/Asthma, GI, Neuro, Behavioral | [needs review] |
| 5 | *(moved to questions/)* | — | — | — | — | — |

> **Note:** `pediatrics-mixed.md` was reclassified and moved to `content/internship-source/questions/pediatrics-mixed-questions.md` — content inspection confirmed it is a full MCQ question bank, not study content.

---

## 2. Proposed Future Website Structure

```
/interns/study/internal-medicine/
/interns/study/surgery/
/interns/study/pediatrics/
/interns/study/obgyn/
```

> These are planning notes only. Do NOT create these routes yet.

---

## 3. Proposed Topic Pages Per Specialty

### Internal Medicine → `/interns/study/internal-medicine/`

| # | Topic Page | Emergency Importance | Exam Frequency | Priority |
|---|---|---|---|---|
| 1 | Emergency Cardiology | 🔴 High | 🔴 High | **1** |
| 2 | Endocrine Emergencies | 🔴 High | 🟡 Medium | **2** |
| 3 | Respiratory Emergencies | 🔴 High | 🔴 High | **3** |
| 4 | Nephrology & Electrolytes | 🟡 Medium | 🔴 High | 4 |
| 5 | GI Emergencies | 🔴 High | 🟡 Medium | 5 |
| 6 | Infectious Disease | 🔴 High | 🟡 Medium | 6 |
| 7 | Neurology Emergencies | 🔴 High | 🔴 High | 7 |
| 8 | Hematology Basics | 🟢 Low | 🟡 Medium | 8 |

### Surgery → `/interns/study/surgery/`

| # | Topic Page | Emergency Importance | Exam Frequency | Priority |
|---|---|---|---|---|
| 1 | Surgical Basics & Techniques | 🟡 Medium | 🟡 Medium | 4 |
| 2 | Fluids, Electrolytes & Transfusion | 🔴 High | 🔴 High | **1** |
| 3 | Acute Abdomen | 🔴 High | 🔴 High | **2** |
| 4 | Trauma Surgery | 🔴 High | 🔴 High | **3** |
| 5 | GI Surgery | 🟡 Medium | 🟡 Medium | 5 |
| 6 | Vascular & Urology | 🟡 Medium | 🟢 Low | 6 |
| 7 | Wounds & Procedures | 🟡 Medium | 🟡 Medium | 7 |

### Pediatrics → `/interns/study/pediatrics/`

| # | Topic Page | Emergency Importance | Exam Frequency | Priority |
|---|---|---|---|---|
| 1 | Neonatal Emergencies | 🔴 High | 🔴 High | **1** |
| 2 | Pediatric Respiratory Emergencies | 🔴 High | 🔴 High | **2** |
| 3 | Dehydration & Gastroenteritis | 🔴 High | 🔴 High | **3** |
| 4 | Infectious Disease & Vaccines | 🟡 Medium | 🔴 High | 4 |
| 5 | Pediatric Red Flags | 🔴 High | 🟡 Medium | 5 |
| 6 | Growth, Development & Nutrition | 🟢 Low | 🔴 High | 6 |
| 7 | Pediatric Emergency Cases | 🔴 High | 🔴 High | 7 |

### OBGYN → `/interns/study/obgyn/`

| # | Topic Page | Emergency Importance | Exam Frequency | Priority |
|---|---|---|---|---|
| 1 | Early Pregnancy Bleeding | 🔴 High | 🔴 High | **1** |
| 2 | Ectopic Pregnancy | 🔴 High | 🔴 High | **2** |
| 3 | Hypertensive Disorders in Pregnancy | 🔴 High | 🔴 High | **3** |
| 4 | Labor & Delivery | 🔴 High | 🟡 Medium | 4 |
| 5 | Postpartum Hemorrhage | 🔴 High | 🔴 High | 5 |
| 6 | Gynecologic Emergencies | 🟡 Medium | 🟡 Medium | 6 |
| 7 | Contraception & Oncology Basics | 🟢 Low | 🟡 Medium | 7 |

---

## 4. Integration Priority — Top 5 Pages to Build First

| Rank | Page | Specialty | Why |
|---|---|---|---|
| **1** | Emergency Cardiology | Internal Medicine | Highest exam weight (~35-40%), high emergency relevance, ACS/arrhythmias/shock always tested |
| **2** | Acute Abdomen | Surgery | Core surgical emergency, tested in every internship exam, clear clinical decisions |
| **3** | Neonatal Emergencies | Pediatrics | High-yield in JMC, distinct from adult medicine, formula-based questions |
| **4** | Early Pregnancy Bleeding | OBGYN | Emergency + exam staple, clear management pathways, high-risk scenarios |
| **5** | Fluids, Electrolytes & Transfusion | Surgery | Cross-specialty relevance, calculation-based, always in exams |

---

## 5. Page Design Rules

Every future study page must follow these rules:

### Structure
- **Short and focused** — one topic per page, no mega-scroll
- English title with Arabic subtitle/explanation
- Back button to Intern Doctors Path
- "Related topics" links at the bottom

### Content Blocks (per topic)
```
English title
Arabic subtitle
Key exam points (bullets)
Red flags section
Best next step section
Common traps section
Simplified Arabic explanation
Related topics links
```

### Do NOT
- Create mega-scroll pages
- Mix question banks with study content
- Link to full resident-level atlases
- Present percentages as official exam statistics
- Add long detailed text directly on /interns

---

## 6. Question Banks — Separated

Question bank files are in `content/internship-source/questions/`:

| File | Specialty | Status |
|---|---|---|
| `internal-medicine-questions.md` | Internal Medicine | Source-only, pending MCQ extraction |
| `surgery-questions.md` | Surgery | Source-only, pending MCQ extraction |

Plus `pediatrics-mixed.md` (study/) should be reclassified to questions/ as `pediatrics-questions.md`.

**Rule:** Do NOT mix question-bank content into study pages yet. MCQs will be processed later into internship/JMC-style question modules.

---

## 7. Files Still Needing Review

| File | Issue |
|---|---|
| `internal-medicine-summary.md` | Headers cleaned — `[needs review: encoding]` marker added. Verify content against original. |
| `surgery-summary.md` | Headers cleaned — `[needs review: encoding]` marker added. Verify content against original. |
| `obgyn.md` | Headers cleaned — `[needs review: encoding]` marker added. Verify content against original. |
| `pediatrics.md` | Headers cleaned — `[needs review: encoding]` marker added. Verify content against original. |
| All files | `needsReview: true` — verify content against original .docx before integration |
| Question banks | Separated in `content/internship-source/questions/` — 3 files, all MCQ format |

---

## 8. Confirmation

- ❌ No app UI changed
- ❌ No routes created
- ❌ No sidebar changed
- ❌ No exam/question bank logic changed
- ✅ Blueprint only — planning document
