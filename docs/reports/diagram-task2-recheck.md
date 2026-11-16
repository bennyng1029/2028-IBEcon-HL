# Task 2 fix 1 — partial fresh recheck (acceptance not established)

Static checks passed first: `node --check assets/js/content-en.js` and `node --check tests/content.test.js`. The targeted canonical command recorded in `diagram-task2-fix1.md` passed 11/11. The full content suite passed 11 and failed 1: `all manual overlays have complete matching localized content` still reports missing `diagrams` in the locale overlays; Task 3 owns that boundary.

An independent deep comparison with `/tmp/econ-diagram-baseline-8o8a0nje/assets/js/content-en.js` passed after removing `diagrams` from each current lesson. Counts independently confirmed: 40 studios, 67 scenarios, 197 construction layers, 40 omitted, 12 summary, 113 coverage entries.

Source inspection confirms the earlier PPC and circular-flow examples now describe their actual layers. In regulated natural monopoly, the first layer explains MR=MC at Q=4 as the unregulated reference, while the next describes regulated P=MC at Q=8, P=2 and LRAC=3.5; the loss rectangle is 8 × 1.5 = 12. The unregulated scenario reads Q=4, P=6 and LRAC=5. This corrects the two previously reported examples, but does not establish the entire requested semantic audit.

**Verification incomplete:** the output used for the independent inspection was truncated, so I cannot honestly certify all 197 explanations, all 26 changed distractor pairs and 13 instructions, or the specialized monopoly comparison and tax/subsidy flows. These require a complete batched source inspection before acceptance. The targeted tests contain sampled semantic landmarks and cannot substitute for that inspection. No browser proof was run. No product files were edited.
