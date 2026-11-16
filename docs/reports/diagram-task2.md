# Task 2 — canonical English guided studios

Status: implementation and implementer checks complete; fresh Task2 verification is still required. No coverage activation or rendered/browser proof is claimed.

## Scope and preservation

Changed only `assets/js/content-en.js`, `tests/content.test.js` and this report. Added lesson-owned `diagrams` arrays: exactly40 studios,67 scenarios and197 ordered construction layers. All67 have original prediction and explanation questions, option-specific feedback, construction choices with economic misconception feedback, initial/per-layer descriptions, comparison, assumptions and limitations. Answers and choice order vary. All panel, axis, curve, point, guide, region, arrow, node and edge label keys resolve against actual canonical geometry. Fifteen optional `scope:hl` quantitative checks separate common welfare reasoning from calculations; firm studios remain HL.

The canonical payload is static instructional data. Geometry descriptions were authored against `models.guided` output and serialized as text; content has no runtime model dependency and adds no geometry engine, dependency or content module. Descriptions cover only their own visible layer. Nonlinear AC, PPC and hyperbola descriptions include their curve relationship; sampled coordinate values are rounded to three decimals where necessary. Flow coordinates are explicitly layout positions, not economic measurements. Before-policy welfare-loss triangles remain labelled as before-policy comparisons when a correction removes their loss.

Direct baseline comparison with `/tmp/econ-diagram-baseline-8o8a0nje/assets/js/content-en.js`, excluding only the newly added `diagrams`, returned exact structural equality for all14 lessons. Original quizzes, worked examples, challenges, six model assignments, sections, coverage statements and40 omission reasons survive. All40 remain omitted and all12 summaries remain summary. The checklist has113 entries and its bytes are unchanged. Tests freeze the40 objective IDs and67 scenario keys independently of coverage status, preserve12 summary records and checklist hash, and permit later activation only with `diagram:<same-id>` evidence. The legacy shape test was extended explicitly for `diagrams` rather than relaxed.

## Reuse check

Ran `graphify query "diagram renderer model curriculum objective coverage"`. It located canonical model, curriculum and rendering ownership, but did not expose the new finite scenario/schema details. Exact reads of the assigned design/audit, `assets/js/models.js`, `assets/js/content-en.js` and `tests/content.test.js` were necessary for those contracts. Reused the canonical lesson content owner and verified geometry from `models.guided`; no parallel implementation was introduced.

## Verification evidence

Red check: after adding the frozen inventory/schema test and before content, `node tests/content.test.js` failed the new test with actual0 versus expected40 studios; all8 existing tests passed.

Static checks after final changes:

- `node --check assets/js/content-en.js` — pass.
- `node --check tests/content.test.js` — pass.

Canonical/regression check:

```sh
node --test --experimental-test-isolation=none --test-name-pattern='lessons provide|classic-script contract|diagnostic activities|diagram coverage|lesson 2.7|locale overlays register|every locale distinguishes|canonical guided|guided drafting|omission reasons' tests/content.test.js
```

Result:10 tests passed,0 failed. Checks include geometry layer order, every registered scenario, complete exact label keys, unique valid correct choices/answer metadata, nonempty per-layer primitives, canonical lesson shape, baseline lesson content, twelve summaries and frozen checklist.

Full boundary check:

```sh
node --test --experimental-test-isolation=none tests/content.test.js
```

Result:10 passed,1 expected failure: `all manual overlays have complete matching localized content`, because existing locale overlays do not yet contain `diagrams`. The validator now explicitly requires that field; Task3 must supply complete matching localized studios. No translation fallback is being accepted as completed coverage. The no-isolation flag was used because this managed environment's child-process test run emitted only a file-level failure; direct/in-process execution provides the actual assertions.

## Limits and next step

These are implementer/source checks, not fresh functional acceptance. The fresh verifier should inspect economics against the independent audit, especially point versus finite PED, natural-monopoly cost recovery, long-run tangency, the industry-output emissions qualification and private/social wedge directions. Task3 must translate all instructional leaves and preserve metadata; Task4 must prove actual rendering, interactions, accessibility descriptions and all scenarios/locales before Task5 may activate any omitted objective. No publishing or commit was performed. Graph maintenance remains the coordinator's end-of-wave step.
