# Task 3 Japanese overlay implementation

Completed all 40 studios, 67 scenarios, 197 construction layers and 15 optional HL extensions. No Japanese diagrams remain unfinished. The overlay supplies 3,235 translated instructional string leaves, including all 264 base/layer geometry descriptions. All pre-diagram Japanese lesson data deep-equals the working-tree baseline after removing the newly added `diagrams` property. Omission explanations and coverage remain unchanged for Task 5.

## Scope and reuse

Changed only `assets/js/content-ja.js`, appended diagram locale validators in `tests/content.test.js`, and this report. Reused the existing Japanese lesson overlay as the canonical locale owner. Added only static lesson-owned data: no runtime translator, new module, package, dependency, commit or push.

Ran `graphify query "diagram renderer model curriculum objective coverage"`; it found the established `app.js` renderer/overlay and coverage ownership. The graph does not expose the full instructional leaf schema, so exact named-file reads of the approved handoff/design/task brief, canonical English content and existing locale tests supplied the required schema details. No parallel renderer or translation store was created.

All metadata (`id`, `scope`, `key`, numeric/string `answer`) is copied unchanged. Every instructional leaf, label-key set, object-field set, array length/order and correct-answer value is recursively checked by the new per-locale tests. Each locale's validator is independently selectable by test name; missing Korean/Chinese payloads remain failures rather than accepted fallback.

## Authoring approach and reusable preparation

Authoring tools are temporary and are not runtime dependencies or checked-in generated tooling. Next locale authors can reuse the English preparation, while writing their own faithful target-language wording:

- `/tmp/ja-source.json`: ordered JSON array of 1,172 unique English instructional/label strings. Includes all titles, introductions, assumptions, limitations, labels, prediction/explanation/extension questions, options, feedback, bespoke instructions and construction feedback. Excludes templatable `For “…”` instructions, `Add …` labels and geometry descriptions.
- `/tmp/ja-source.txt`: the same inventory with zero-based line identifiers (`0 English source` through `1171 English source`).
- `/tmp/ja-trans.txt`: 1,172 corresponding Japanese translations, one per line. Contains Japanese wording only; it is a resume mapping, not a source for other target-language wording.
- `/tmp/build-ja.cjs`: authoring-time assembler. Pairs the JSON source array and translation lines, recursively preserves metadata, translates standard construction prompts/Add-label forms, and expands geometry-description grammar using translated labels, preserving all coordinates. The small explicit geometry qualifier dictionary covers bowed PPC, the hyperbola and average-cost families. It writes static JSON-shaped classic-script data to the existing Japanese overlay. The standalone special Add instruction is the dashed supply guide through equilibrium. No product code calls this script.
- `/tmp/ja-desc.txt`: unique English base/layer descriptions for inspection.
- `/tmp/ja-descriptions-translated.txt`: all 264 assembled Japanese descriptions in scenario order.
- `/tmp/verify-ja.cjs`: standalone read-only validation of baseline equality, every metadata/text leaf, exact field/label sets and ordered coordinate tuples. Uses the approved snapshot `/tmp/econ-diagram-baseline-8o8a0nje`.

Assembler source paths are deliberately Japanese-specific; another locale author must change the output registration/path and supply target-language templates/translations rather than run it as-is.

## Verification evidence

Implementation-context checks, not fresh-context acceptance:

- `node --check assets/js/content-ja.js`: PASS.
- `node --check tests/content.test.js`: PASS.
- `node --test --test-name-pattern='guided diagram overlay ja' tests/content.test.js`: PASS.
- `node --test-name-pattern='guided diagram overlay ja' tests/content.test.js`: PASS, explicit single Japanese test output.
- `node /tmp/verify-ja.cjs`: PASS: 40 studios, 67 scenarios, 197 layers, 15 extensions, 264 descriptions, 3,235 instructional leaves; pre-diagram baseline unchanged.
- All 264 geometry descriptions retain every numeric coordinate tuple in source order. Descriptions retain visible-state boundaries, sampled-curve qualifiers and directional flow endpoints.
- `node tests/content.test.js`: 12 PASS / 3 FAIL. The expected failures are the pre-existing complete-overlay test at the first missing non-Japanese diagrams field, and the new Korean and Hong Kong Traditional Chinese diagram validators. Japanese passes; no tests were weakened to hide missing locales.

Translation preserves externality signs and private/social curves; tax and subsidy buyer/receipt wedges; distinct before-policy/remaining loss; quantity-cap versus information geometry; point versus finite PED qualifications; market versus firm quantity scales; MR-based quantity versus AR price; normal-profit inclusion in AC; natural-monopoly financing; LR tangency left of minimum AC; real/money flow direction; conditional saving/asset feedback. English examination terms remain alongside Japanese economics terms and symbols. Numerical examples, signs, correct choices and HL scope are preserved.

## Limits and next action

No browser/rendering or independent fresh-context verification was performed by this implementer. The coordinator should commission fresh Japanese semantic/schema verification before accepting Task 3, then complete Korean/Chinese and Task 4's rendered matrix. This is agent-authored Japanese content, not human native-language certification. All 40 coverage objectives remain omitted pending the authorized activation gate.
