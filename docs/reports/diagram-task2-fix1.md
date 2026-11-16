# Diagram Task 2 — fix cycle 1

Implementer result: all 197 correct construction feedback strings rewritten across all 67 scenarios. Fresh verification remains required. Scope owned: `assets/js/content-en.js`, `tests/content.test.js`, this report.

## Repairs

Each correct feedback now explains the geometry added by its own step and its economic role. Initial points establish reference observations; subsequent guides read the displayed coordinates; arrows explain movements or explicitly identify illustrative comparison cues; shaded areas explain their boundaries and meaning. No correct feedback is copied verbatim from its scenario prediction, explanation or comparison. Identical firm geometry can share appropriate economic wording, but feedback is selected for the actual cost, output, policy and layer. No runtime generation or dependency was added.

Reviewed construction instructions, choices and feedback throughout the 67-scenario inventory against the static payload and canonical `models.guided` branches. The rewrite includes all PPC/circular-flow, market, elasticity, intervention, externality and firm scenarios, rather than only the original reported examples. Also revised 13 instructions to identify the actual reference/sector/before-policy stage, replaced 26 distractor label-and-feedback pairs, and corrected one additional social-optimum distractor feedback. These address misleading future-stage revenue/control/polar-case prompts, irrelevant market-total-quantity distractors in single-firm studios, the tax/subsidy price-wedge versus quantity-gap distinction, the demand-only reference step's irrelevant MR/MC claim, and the long-run excess-capacity step.

For regulated natural monopoly, the first layer explicitly identifies MR=MC as the **unregulated reference**, while the selected regulated output uses demand=MC. The regulated reading gives Q=8, P=2, LRAC=3.5; its loss rectangle is 8×1.5=12. The distractor now incorrectly selects the unregulated Q=4 and explains why the regulator instead requires Q=8. The unregulated scenario separately reads Q=4, P=6, LRAC=5. No marginal-cost-pricing policy is rejected as if the firm were unconstrained.

## Checks

Reuse/navigation: `graphify query 'guided diagram construction feedback canonical geometry'` returned `No matching nodes found.` Exact reads of the assigned brief/design, canonical English payload, `assets/js/models.js` and tests supplied the missing layer contracts. Reused canonical static lesson ownership and geometry; no new module, function group or product dependency.

Static checks, run before targeted tests and repeated after the final payload edit:

- `node --check assets/js/content-en.js` — exit 0.
- `node --check tests/content.test.js` — exit 0.

Exact targeted canonical command:

```sh
node --test --experimental-test-isolation=none --test-name-pattern='lessons provide|classic-script contract|diagnostic activities|diagram coverage|lesson 2.7|locale overlays register|every locale distinguishes|canonical guided|guided drafting|omission reasons' tests/content.test.js
```

Result: 11 passed, 0 failed. The additional canonical test detects verbatim whole-scenario recycling across every construction layer and tests semantic landmarks for PPC visibility order, circular-flow sectors versus goods/payment arrows, regulated/unregulated natural-monopoly decisions and cost recovery, quantity caps, and common-reference differentiated demand. These are concept/coordinate checks rather than assertions of complete exact authored strings.

Full boundary command:

```sh
node --test --experimental-test-isolation=none tests/content.test.js
```

Result: 11 passed, 1 failed. Expected failure remains `all manual overlays have complete matching localized content`: overlays lack the new `diagrams` field. Task 3 owns translation. The full run was repeated after the final payload edit with the same result.

Independent baseline assertion:

```js
assert.deepEqual(current.map(({diagrams,...lesson})=>lesson), originalBaseline);
```

Passed against `/tmp/econ-diagram-baseline-8o8a0nje/assets/js/content-en.js`, including all original lesson fields and coverage records. Existing preservation tests also passed after final edits: 40 omitted diagrams, 12 summaries and the frozen 113-entry checklist survive.

## Limits

This is an implementer source inspection and test result, not fresh acceptance or browser proof. The semantic regression checks deliberately sample concepts; they cannot prove every sentence's economics. Fresh verification should independently inspect all 197 revised feedbacks and the instruction/distractor repairs. No browser rendering, locale completion, coverage activation, graph update, commit or publishing was performed here. Graph maintenance remains the coordinator's end-of-wave task.
