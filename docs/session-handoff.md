# Economics learning site implementation handoff

## Objective

Build the static four-language guided Units 1–2 release specified in docs/design.md and docs/implementation-plan.md. User requested Terra/Sol delegation and instructed continuation. Both plan review cycles now APPROVE (docs/reviews/plan-a-recheck.md and plan-b-recheck.md).

## Locked decisions

- 14 lessons; map later units as forthcoming. Use the fixed 113-point docs/coverage-checklist.json; distinguish taught, summary and omitted honestly.
- Detailed baseline: October 2022 full guide, first assessment 2024. Paper 2 excludes HL extension. See docs/research/ for evidence and limitations.
- Buildless classic JS and relative local assets; works file:// and GitHub Pages subpath; no third-party dependency, backend, runtime AI or external font requests.
- Manual en, ja, ko, zh-Hant-HK. Keep English economic terms and explicitly labelled English written-answer scaffolds. Localize explanations, coverage, controls and model output.
- One canonical lesson dataset, translation overlays, one pure model module, one UI dictionary and one renderer. Exact schemas and ownership are in the plan.
- Supplied repository has no initial commit or pre-existing product code. Work in place; review all created files. No push or publication in this wave.

## Execution

Read this handoff first, then the design and the exact task in the implementation plan. Implement only assigned files. Workers are not alone; preserve others' changes. Do not spawn helpers or reviewers. Record graphify reuse check: no graph presently exists; targeted file reads are the fallback. For new functions record whether an existing owner was reused. Do not re-litigate locked choices.

Task 1: English lessons and content tests. Task 2: locale overlays and content tests. Task 3: frontend, math models, UI dictionaries, model/UI tests and README. Use a fresh implementation context for each task. Implementer reports go under docs/reports/.

## Success criteria

Applicable JS syntax checks and Node built-in tests pass. Independent fresh verifier checks actual Chrome behavior at file:// and HTTP subpath, all locale/model combinations, mobile reflow, keyboard controls, quiz feedback, progress/reset and blocked storage, malformed hashes and localized output. Coverage IDs exactly match checklist. Tests do not replace content and translation review. No false official/full-course/complete-mastery claims.

Two fresh synchronous wave reviews follow verification: quality/requirements and independent architecture/assumptions. Fix blockers with fresh implementer and verifier, maximum three cycles. Record actual checks and remaining limitations in docs/closeout.md; run graphify update . at end and record outcome.

## Resume prompt

Read docs/progress.md to locate the first unfinished task. Read this handoff and the named task in docs/implementation-plan.md. Preserve existing work, finish outstanding verification/review gates, and report the local site location and accurate scope. Research files and current repository are authoritative; no relevant prior memory pointers were found under /home/bennyng/.codex/memories. Do not repeat completed tasks or publish automatically.
