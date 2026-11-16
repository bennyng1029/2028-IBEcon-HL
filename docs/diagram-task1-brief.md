# Guided diagram studio: implementation plan

Status: approved for implementation; see docs/reviews/diagram-plan-a-recheck.md and docs/reviews/diagram-plan-b.md. Read `docs/diagram-design.md` and `docs/diagram-coverage-audit.md` first. Original baseline is the working-tree product snapshot `/tmp/econ-diagram-baseline-8o8a0nje`, not merely HEAD. No commits or publishing are authorized by this plan.

## Wave-front package

Objective: substantive, original, four-locale drawing instruction for exactly the frozen40 omitted objectives; all113 objective IDs/order and12 existing summaries survive. Use the scenario inventory, equations, data/geometry contracts and ownership in the design as locked decisions. Finite native-control construction is the selected interaction. No third-party dependency or product scope extension. Existing six calculators, lesson navigation, search, glossary, progress/storage, sources and assessment notices retain behavior.

Assumptions: Node built-in test runner and existing Chrome/CDP harness remain available; original unit and scope research remains applicable. Economic examples teach assumptions, not universal empirical predictions. Source descriptions cannot be copied into practice material. Translation equivalence needs actual reading, not just parity tests.

Main risks: dynamic overlays corrupting metadata; superficial diagram coverage; MC/AC inconsistency; hidden layers not revealing geometry; dense flow labels on mobile; test runtime across every variant; excessive prose or rendering cost. Mitigations: explicit schema; analytic tests; lazy details rendering if necessary within canonical renderer; native controls; complete browser enumeration and sampled visual inspection. Do not create an independent renderer, math engine, translation store or progress system.

Anticipated gates: no outstanding presentation preference. A new dependency, destructive action, missing required source, or scope expansion requires user decision. Routine numeric sampling, label placement, hatch and dash choices within these contracts are implementation decisions. If contract contradiction emerges, stop dependent work and report the smallest proposed correction to coordinator for review; do not silently fork the schema.

Before implementation, coordinator obtains fresh synchronous review A (completeness/feasibility), then fresh synchronous review B (architecture/assumptions, challenge design). Resolve blockers with at most3 fix/review attempts per cycle. Reviewers do the work directly, no delegation/background placeholders. Coordinator writes `docs/diagram-session-handoff.md` with approved references, frozen decisions, task packages, checks, baseline and resume prompt. Each implementer starts fresh and reads handoff first, using subagent-driven-development. This document is the plan; the handoff records final approval/review evidence.

## Task1 — canonical economics and diagram geometry

Own only `assets/js/models.js`, `tests/models.test.js`. Consume the design's exact `models.guided(id, scenarioKey)` contract and scenario table. Preserve `ppc`, `market`, `ped`, `policy`, `externality`, `firm`, `diagram` public behavior and all old tests. You are not alone: do not revert other changes. No app/content edits.

First action: record graphify reuse query/result; graphify canonical diagram owner is models.js. Exact source fallback is justified for API details or graphify unavailability. Record reused owner and no parallel engine. Add failing numeric and geometry tests before implementation. Implement only finite dispatch and private helpers genuinely reused by scenarios; do not add a generic equation language or excessive framework.

Success checks:

- `node --check assets/js/models.js` and `node --test tests/models.test.js` exit0; old tests unchanged in meaning.
- All scenario keys in design return finite geometry, valid bounds, nonempty panels/base geometry, ordered nonempty layers, closed nondegenerate welfare regions where nonzero, positive-domain hyperbolas and cost curves. Invalid pair returns null.
- Independently calculate PPC costs1/3 versus2/2; actual versus capacity growth; D/S schedule and equilibrium changes; shortage/surplus2; CS/PS12.5; tax revenue8/DWL1; subsidy spend12/DWL1; unit hyperbolaPQ12; PED4/1/.25; TR16→21 and21→16; YED2/.5/−.5; PES origin-ray1 and relative comparisons at common point.
- All four externality cases produce Q4/Q5, loss1 and correct MPB/MSB/MPC/MSC ordering. Corrective tax revenue8; positive-production subsidy expenditure10; weak cap and partial education remaining loss.25 with genuinely distinct geometry.
- Verify MC=dTC/dQ and AC=TC/Q analytically for every cost family; MR=dTR/dQ. Competitive MR=MC Q4/P6, profit8/0/−8 and conditional continuation; competitive LR minAC6 atQ4. Monopoly Q4/P6 versus benchmarkQ8/P2, welfare loss8. Natural-monopoly AC5 atQ4, AC3.5 atQ8 and loss12. Monopolistic LR Q8/3: AR=AC22/3, MR=MC14/3, equal slopes−1, minimumAC at√(64/3)>Q. Check crossing from below and profit rectangles; never use TR/TC as marginal curves.
- Distinct flow nodes and directed real/money edge endpoint tests, S/T/M outward and I/G/X inward, two household groups, income80+20=100 and savings20/2; qualified feedback path. Tests inspect direction, not mere presence of labels.
- Geometry bounds and sampled curve coordinates agree with analytic formulas, area vertices agree with independent polygon/analytic area checks. Test expectations must not import production formula helpers.

A fresh verifier runs these static checks before independent functional math/geometry inspection. Return changed files, query/reuse decision, commands/results and limits. If failure, fresh fix then fresh verify, maximum3 cycles.
