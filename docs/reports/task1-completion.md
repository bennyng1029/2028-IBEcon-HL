# Task 1 English completion

The canonical English dataset now provides 14 guided introductory lessons with original explanations, topic-specific multi-step worked examples, 14 diagnostic multiple-choice checks with individually explained distractors, and 14 English written challenges with contextual model answers and four specific scoring criteria. The illustrative four-mark scaffolds are house-created, not official markschemes. Canonical section IDs and order remain unchanged; paragraph counts and glossary terms were expanded, so locale overlays must be authored against this final source.

The prior schema-valid draft is superseded. Added substantive teaching includes the nine concepts; factor classification and real-resource opportunity cost; positive/normative reasoning and confounding; horizontal aggregation and movements versus shifts; numerical diminishing returns; equilibrium adjustment and surplus; named behavioral biases; PED/YED/PES arithmetic, revenue and missing values; binding controls and tax/subsidy wedges; all four externality mechanisms and policy evaluation; public-good funding and contracting; adverse selection versus moral hazard; four named market structures, marginal profit calculations, a numeric two-player payoff matrix and concentration ratio; and wealth-to-income feedback.

Coverage is exactly the fixed 113 identifiers in checklist order: **61 taught, 12 summary, 40 omitted**. “Taught” means substantive introductory instruction for that listed non-diagram objective, not full mastery or complete exam preparation. Historical traditions, selected HL elasticity/policy details and diagram-derived calculations remain compressed summaries. All explicit diagram objectives remain omitted: verbal plotting instructions and illustrative arithmetic do not constitute the required complete diagram set. In particular this work supplies no SVG, PPC/circular-flow set, elasticity/Engel-curve set, four-case externality/policy figure set, or firm-profit/welfare diagram set. Six later frontend models cannot automatically close every omitted objective. Unit 3 and Unit 4 content is outside this release.

Graphify-first reuse decision: the session handoff records no graph exists for this new repository. Targeted reads of the exact handoff, task brief, fixed checklist, existing canonical English module, tests and curriculum/learning-design research were the justified fallback. Reused and extended `assets/js/content-en.js` as the sole lesson-content owner; no duplicate runtime module or dependency was added. Guide-derived objectives and scope were consumed from `docs/research/curriculum.md`; the guide PDF was not independently rechecked in this task. No protected passage or exam question was copied.

Validation performed after the final edit:

- `node --check assets/js/content-en.js` — exit 0.
- `node --check tests/content.test.js` — exit 0.
- `node --test tests/content.test.js` — exit 0 (this environment reports the test file as one outer subtest).
- `node tests/content.test.js` — all four named tests pass, including schema/order/scope, distinct diagnostic activities, and explicit diagram omissions.
- A direct Node coverage count returned 61 taught, 12 summary and 40 omitted (113 total; 14 lessons).

An initial stronger content test caught remaining generic rubrics and an unspecific omitted-diagram explanation; both were corrected before final passing validation. These tests establish data contracts and targeted quality guardrails, not independent subject review or browser behavior. Fresh content verification, translation review, browser checks and wave reviews remain coordinator-owned. No publication, dependency installation, or commit was performed. Graph maintenance remains a wave closeout responsibility.
