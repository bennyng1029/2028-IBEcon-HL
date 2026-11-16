# Task 2 fix 2 — fresh acceptance

**PASS** for the English construction-choice correction and the requested source-level checks. The separate complete semantic audit in `docs/reports/diagram-task2-semantic-verification.md` reviewed all 67 scenarios and 197 construction layers and identified one blocking choice label before this fix; its other semantic findings passed. I independently checked that one corrected choice against the current canonical model and did not repeat the full audit.

The `2.3.equilibrium_diagram / crossing / read` accepted label now names a dashed supply guide through equilibrium from (4,4) to (6,6), matching both its feedback and `assets/js/models.js`'s `guide('crossing',[[4,4],[6,6]])`. The label is meaningful before feedback is revealed.

Static checks ran first: `node --check assets/js/content-en.js` and `node --check tests/content.test.js`, both exit 0. The exact targeted canonical command in `diagram-task2-fix1.md` then passed **11 tests, 0 failures**. An independent enumeration found **40 studios, 67 scenarios, 197 construction layers, 394 choices and zero empty or whitespace-only choice labels**; coverage statuses are **61 taught, 40 omitted, 12 summary**. The targeted preservation tests passed, and the separate semantic report records its baseline deep comparison of all original lesson fields and coverage records.

Locale completion remains pending Task 3: the separate semantic report records the expected full-suite failure for missing localized `diagrams`. This acceptance is source-level; browser rendering and accessibility are not established here.
