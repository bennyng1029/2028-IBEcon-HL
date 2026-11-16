# Guided diagram studio: implementation plan

Status: approved for implementation; see docs/reviews/diagram-plan-a-recheck.md and docs/reviews/diagram-plan-b.md. Read `docs/diagram-design.md` and `docs/diagram-coverage-audit.md` first. Original baseline is the working-tree product snapshot `/tmp/econ-diagram-baseline-8o8a0nje`, not merely HEAD. No commits or publishing are authorized by this plan.

## Wave-front package

Objective: substantive, original, four-locale drawing instruction for exactly the frozen40 omitted objectives; all113 objective IDs/order and12 existing summaries survive. Use the scenario inventory, equations, data/geometry contracts and ownership in the design as locked decisions. Finite native-control construction is the selected interaction. No third-party dependency or product scope extension. Existing six calculators, lesson navigation, search, glossary, progress/storage, sources and assessment notices retain behavior.

Assumptions: Node built-in test runner and existing Chrome/CDP harness remain available; original unit and scope research remains applicable. Economic examples teach assumptions, not universal empirical predictions. Source descriptions cannot be copied into practice material. Translation equivalence needs actual reading, not just parity tests.

Main risks: dynamic overlays corrupting metadata; superficial diagram coverage; MC/AC inconsistency; hidden layers not revealing geometry; dense flow labels on mobile; test runtime across every variant; excessive prose or rendering cost. Mitigations: explicit schema; analytic tests; lazy details rendering if necessary within canonical renderer; native controls; complete browser enumeration and sampled visual inspection. Do not create an independent renderer, math engine, translation store or progress system.

Anticipated gates: no outstanding presentation preference. A new dependency, destructive action, missing required source, or scope expansion requires user decision. Routine numeric sampling, label placement, hatch and dash choices within these contracts are implementation decisions. If contract contradiction emerges, stop dependent work and report the smallest proposed correction to coordinator for review; do not silently fork the schema.

Before implementation, coordinator obtains fresh synchronous review A (completeness/feasibility), then fresh synchronous review B (architecture/assumptions, challenge design). Resolve blockers with at most3 fix/review attempts per cycle. Reviewers do the work directly, no delegation/background placeholders. Coordinator writes `docs/diagram-session-handoff.md` with approved references, frozen decisions, task packages, checks, baseline and resume prompt. Each implementer starts fresh and reads handoff first, using subagent-driven-development. This document is the plan; the handoff records final approval/review evidence.

## Task2 — English studios and honest coverage evidence

Own only `assets/js/content-en.js`, `tests/content.test.js`. Starts after Task1 API is verified. Exact diagram schema/design inventory is locked; do not alter models. Add lesson `diagrams` arrays, populated only in owning lessons, and original explanation/practice for every scenario. Each prediction and explanation option needs distinct causal feedback; construction distractors need economic reasons, and each ordered layer must reveal meaningful geometry. Include scenario labels, localized `baseDescription` and per-construction-layer `description` fields whose composed equivalents cover axes, units, curve relationships, coordinates/arrows and areas. Identify assumptions and limitations in each scenario. Common diagram sequences remain qualitatively usable; surplus/intervention/externality numerical assessment goes in the optional canonical scope:hl extension, with translated prompt/options/feedback, rather than common explanation. Verify this against checklist/research; numerical coordinates are illustrative.

Keep all frozen40 coverage entries omitted and their omission explanations and statements intact. Keep113 IDs/order and12 summary statuses, unrelated lesson prose and old six model assignments. Extend exact-key tests rather than disabling schema validation. Diagram payload tests must validate the frozen inventory independently of current coverage status, without permanently requiring omission or early taught status. At this stage translations may temporarily fail new parity checks until Task3; record that boundary.

Success checks:

- `node --check assets/js/content-en.js`; targeted canonical-English tests pass.
- Freeze the40 ID set explicitly in tests independently of current statuses; each appears once as a diagram, in correct lesson with audit scope; its future activation evidence is `diagram:<same-id>`. No invented IDs, missing scenarios, empty fields or placeholder instruction. Existing12 summary IDs/statuses exactly match baseline; checklist remains byte-identical with113 entries.
- Every scenario key resolves geometry, every geometry label key resolves nonempty labels, construction keys exactly equal geometry.layers, correct choices exist and are unique, and answer metadata is valid. Each non-base geometry layer has visible elements and each step adds elements; question feedback aligns one-to-one.
- Preserve original quizzes/challenges and old topic scope tags; diagrams do not imply official assessment coverage. Omission claims remain accurate until final activation.

Fresh verifier checks static results and samples actual economics against independent audit equations, checks all40 existence/scenario inventories, and confirms baseline preservation. Schema alone is not proof of educational depth.
