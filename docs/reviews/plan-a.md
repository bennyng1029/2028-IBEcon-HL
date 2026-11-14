# Plan review A — completeness and feasibility

**Verdict: REVISE.** The task sequence and no-dependency static architecture are feasible, but two cross-task contracts need to be fixed before implementation dispatch.

## Blocking findings

1. **The localized interface contract has no owned key inventory.** The plan assigns `ECON_UI.en` to Task 1 and the other locales to Task 2, but Task 3 owns the interface and all six model renderers. The only contract is “the same set of keys” (`docs/implementation-plan.md:23,44,62,70,78-82`). It does not identify the keys for navigation, coverage statuses, progress, feedback, model controls, units, axis labels, dynamic summaries, or source notices, although the design requires these to work in every locale (`docs/design.md:13,17,19`). Task 3 can therefore need new keys after Task 2 has finished, or leave model language in English. **Smallest correction:** freeze a named `ECON_UI` key inventory before Task 1, including model UI and dynamic-result wording; assign one task to own changes to that inventory and require a four-locale parity test and browser check of each model in every locale. If model text is intentionally English, record that exception explicitly in the design.

2. **Coverage acceptance has no fixed set of required points to compare against.** `coverage.point` is free text, and the Task 1 test only validates statuses and references (`docs/implementation-plan.md:38,42,64-66`). An author could omit a syllabus point from the array and still pass. The research inventory includes specific diagrams and calculations that need individual accounting, notably circular flow and PPC in 1.1, YED/PES, four externality types, and the named 2.11 outcomes (`docs/research/curriculum.md:15,26-32`). The plan recognizes the 2.11 risk only in its closing note (`docs/implementation-plan.md:91`). **Smallest correction:** give the research checklist stable point IDs by lesson, including diagram/calculation and common/HL scope where relevant; require exactly one coverage entry per required ID with `taught`, `summary`, or `omitted`, and verify the references for `taught`. Keep human economic-depth review as a separate, explicitly limited check.

## Non-blocking observations

- The lesson schema has a `modelPrompt` that can serve the promised prediction step, but the task and browser checks do not explicitly verify that the learner sees it before changing a model (`docs/design.md:5`; `docs/implementation-plan.md:32,81-83`). Add that check to Task 3 acceptance.
- The plan correctly distinguishes schema parity from language and economics review and records human language review as a limit (`docs/implementation-plan.md:73,87`). Keep that limit visible in closeout if no qualified human review occurs.
