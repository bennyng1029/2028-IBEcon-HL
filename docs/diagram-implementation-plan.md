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

## Task2 — English studios and honest coverage evidence

Own only `assets/js/content-en.js`, `tests/content.test.js`. Starts after Task1 API is verified. Exact diagram schema/design inventory is locked; do not alter models. Add lesson `diagrams` arrays, populated only in owning lessons, and original explanation/practice for every scenario. Each prediction and explanation option needs distinct causal feedback; construction distractors need economic reasons, and each ordered layer must reveal meaningful geometry. Include scenario labels, localized `baseDescription` and per-construction-layer `description` fields whose composed equivalents cover axes, units, curve relationships, coordinates/arrows and areas. Identify assumptions and limitations in each scenario. Common diagram sequences remain qualitatively usable; surplus/intervention/externality numerical assessment goes in the optional canonical scope:hl extension, with translated prompt/options/feedback, rather than common explanation. Verify this against checklist/research; numerical coordinates are illustrative.

Keep all frozen40 coverage entries omitted and their omission explanations and statements intact. Keep113 IDs/order and12 summary statuses, unrelated lesson prose and old six model assignments. Extend exact-key tests rather than disabling schema validation. Diagram payload tests must validate the frozen inventory independently of current coverage status, without permanently requiring omission or early taught status. At this stage translations may temporarily fail new parity checks until Task3; record that boundary.

Success checks:

- `node --check assets/js/content-en.js`; targeted canonical-English tests pass.
- Freeze the40 ID set explicitly in tests independently of current statuses; each appears once as a diagram, in correct lesson with audit scope; its future activation evidence is `diagram:<same-id>`. No invented IDs, missing scenarios, empty fields or placeholder instruction. Existing12 summary IDs/statuses exactly match baseline; checklist remains byte-identical with113 entries.
- Every scenario key resolves geometry, every geometry label key resolves nonempty labels, construction keys exactly equal geometry.layers, correct choices exist and are unique, and answer metadata is valid. Each non-base geometry layer has visible elements and each step adds elements; question feedback aligns one-to-one.
- Preserve original quizzes/challenges and old topic scope tags; diagrams do not imply official assessment coverage. Omission claims remain accurate until final activation.

Fresh verifier checks static results and samples actual economics against independent audit equations, checks all40 existence/scenario inventories, and confirms baseline preservation. Schema alone is not proof of educational depth.

## Task3 — complete matching locale overlays

Own only `assets/js/content-ja.js`, `assets/js/content-ko.js`, `assets/js/content-zh-hant-hk.js`, and locale assertions in `tests/content.test.js` after Task2 ownership ends. Translate every studio's introduction, scenario title, assumption/limitation, `baseDescription`, each construction-layer `description`, label, prediction, construction choice/instruction/feedback, comparison, explanation and optional HL calculation extension. Retain English exam terms beside local terms. Preserve metadata and numerical facts; do not translate canonical keys or alter correct choices. Keep omission statements and omissionExplanation fields intact until final activation; all unrelated translation content survives. Validate diagram payloads independently of current coverage status, without permanently requiring omission or early taught status.

Success: syntax checks on all three scripts then `node --test tests/content.test.js` exit0. Tests compare lesson IDs, diagram IDs, scenario/layer/choice order and metadata, exact label sets, nonempty translated leaves, feedback alignment, scope/answers and all113 canonical coverage entries; no fallback is accepted in studios. Independent fresh verifier reads meaningful economics and diagram terminology across all locales, especially externality signs, firm LR tangency, directional flows and causal feedback; record whether this is agent review or actual human linguistic review. Do not describe parity as native-language certification.

## Task4 — canonical SVG, guided interface and browser evidence

Own only `assets/js/app.js`, `assets/js/ui.js`, `assets/css/site.css`, `tests/ui.test.js`, `tests/browser-check.js`, `README.md`. Starts once Tasks1–3 are verified. No dependency or script load change is required. Reuse svgGraph and existing native helpers. Introduce only the design's guided optional argument; existing calls retain behavior. Add the independent studios to lessonPage even for `none`. Implement path-aware diagram overlay preserving metadata while translating instruction. Add all new UI strings in all four locales together and test exact key parity.

Drawing order: regions behind curves; guides/arrows; points and labels. Render polygon hatches and dash/shape legends, distinct flow nodes/directions and readable comparison panels. Display final geometry only after matching layer choices or explicit reveal. Reset clears prediction/steps/explanation; scenario select resets scenario; incorrect choices give feedback without advancement; compare identifies initial/final states; description composes `baseDescription` and only visible construction-layer `description` fields; comparison initial uses base only and final/reveal uses the complete composition. Native controls and live feedback preserve focus. Use data attributes for objective, scenario, layer, geometry and state to make acceptance inspectable; no private test-only alternate UI.

Extend browser harness; retain every old regression. Enumerate all40 studios and every canonical scenario from English data (assert against frozen inventory), for en/ja/ko/zh-Hant-HK on both file and HTTP `/course/` subpath. For each:

1. Navigate to owning lesson; open studio; select scenario. Assert title/scope/localized controls, visible base SVG, axes or flow nodes, nonempty accessible description and no NaN/undefined/fallback/canonical-key leakage.
2. Choose incorrect then correct prediction and observe distinct feedback; choose construction distractor, verify no layer advance; choose every correct layer via native control and verify named SVG elements actually appear, descriptions/progress update and focus remains usable.
3. Compare; assert labelled initial/final drawings, scenario-specific required geometry and nonempty localized labels/legends. Assert SVG IDs are unique across the document, including initial/final comparison roles, and every SVG ID reference resolves to its intended element. Check explanation and optional clearly marked HL extension wrong/correct feedback, reveal, reset and scenario reselection; reset returns base-only and clears prior feedback. At least one full keyboard-only path per locale and family uses Tab/Space/Enter without pointer shortcuts.
4. On every locale switch retain lesson, verify new translated text and announced reset policy; no English fallback. Include lesson2.12 even though model none.

Run every scenario in desktop viewport; inspect at least every diagram in each locale at mobile viewport for page overflow, missing elements and scroll access. Capture/read representative screenshots for PPC increasing cost, five-sector flow, relative/unit elasticity, tax/shaded welfare, four externality signs, firm two-panel/three-outcome/LR tangency, natural monopoly and inequality flow at desktop and mobile for all locales. DOM visibility alone cannot establish visual readability. Fix clipping/overlap that obscures teaching; document any genuinely remaining manual limits.

Retain old browser checks: all14 lesson routes, all six calculators and controls/reset in all4 locales, menu/navigation, original quiz feedback, unknown/malformed hashes, glossary/search, progress/reset with normal and blocked storage, source/scope notices and no runtime/network errors. Compare product baseline properties rather than rely on current content tests to prove no regression.

Static checks first in fresh verifier: `node --check` on all touched JS, `node --test tests/*.test.js`; then `node tests/browser-check.js` (extend existing command flags as required by harness, document exact invocation). No package installation. README describes studios, illustrative data, construction/reveal behavior, keyboard and complex-flow scrolling, validation commands and human review limits; describe guided recognition and construction; do not claim independent drawing mastery.

## Task5 — final coverage activation

Own only `assets/js/content-en.js`, the three locale overlays (`assets/js/content-ja.js`, `assets/js/content-ko.js`, `assets/js/content-zh-hant-hk.js`) and `tests/content.test.js`. Start only after a fresh functional verifier has passed Task4 rendered practice for every scenario in all four locales, including file and subpath browser checks. Promote the verified frozen40 entries to `taught`, set each canonical evidence to `diagram:<same-id>`, and synchronously remove obsolete omission fields and contradicted omission statements in English and all overlays. Preserve all113 IDs/order, all12 summary statuses and unrelated content. If verification is partial or fails, do not start activation: leave all 40 omitted with their explanations intact and report the unverified objectives.

Fresh verification: run `node --check` for all four content scripts, then `node --test tests/content.test.js` and `node tests/browser-check.js` with the documented Task4 invocation. Confirm each taught entry has matching substantive rendered four-locale diagram evidence; any remaining omitted entry retains its explanation. Confirm 113 IDs/order and 12 summaries against baseline. Tests validate payloads independently of coverage state and assert activation only when the final evidence gate has been met.

## Wave review and closeout

After Task5 activation and its fresh verification, fresh synchronous review A covers whole product diff from snapshot: correctness, requirements, tests, regressions, accurate40 coverage claims and all locale meaning. Independent fresh review B challenges the design: whether finite choices actually teach construction, math/area/flow correctness, coincident curves, response-size/readability, accessibility, overlay coupling and preserving old API. Blocking findings get fresh fix/verify and fresh cycle review, maximum3 attempts per cycle. Suggestions do not block. No redundant per-task LLM quality review after functional verification.

Coordinator owns `docs/diagram-session-handoff.md` and `docs/diagram-closeout.md`, not implementers. Closeout describes guided recognition and construction without claiming independent drawing mastery, and records scope, frozen decisions, baseline-preservation evidence, numerical and browser commands/results, all40 scenario/locale evidence, reviews and resolved findings, remaining human-language/visual limitations and graphify status. Refresh graph with `graphify update .` only after reviews/closeout when available and expected; record actual result. Lightweight consistency-check the closeout rather than apply a new product review cycle. No memory edits unless separately requested.

## Final release gate

All static checks pass; fresh functional verifiers confirm scenario math, geometry and every browser combination; Task5 has run only after the fresh rendered four-locale verification, and all40 taught evidence references resolve to substantive four-locale guided studios;113 IDs/order,12 summaries and old functionality remain; both independent wave reviewers approve without blockers. Otherwise keep honest coverage/status and explicitly report unverified or blocked parts. A plan, schema test or source read cannot stand in for rendered teaching evidence.
