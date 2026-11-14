# Task 1 fresh functional verification

**Verdict: FAIL — one scope-label acceptance gap.** Syntax and automated content checks pass. No arithmetic or answer/feedback error found in the 14 worked examples and quizzes.

## Blocking acceptance failure

`assets/js/content-en.js:1223–1226` teaches numerical price-ceiling/floor effects inside the `common` controls section. The worked activity at lines 1268–1273 calculates ceiling effects with no HL indication; the numerical shortage/trade quiz at lines 1278–1292 is explicitly `common`. `docs/research/curriculum.md` classifies specified controls calculations as HL; the task requires independently accurate HL tagging and no presentation of HL extensions as Paper 2 material. Coverage pointing `2.7.controls_calculation_hl` at the HL section does not fix the duplicated unmarked calculations elsewhere.

Smallest correction: retain qualitative controls instruction as common; move the numerical control paragraphs into the existing HL section (preserve canonical section IDs/order), identify the worked prompt explicitly as an HL extension because the agreed schema has no worked.scope field, and set the numerical quiz scope to `hl`. Alternatively replace these common activities with qualitative activities and keep calculations exclusively in the HL section. Add a focused regression assertion for the selected scope correction.

## Checks and passing evidence

Ran sequentially, before accepting functional results:

1. `node --check assets/js/content-en.js` — exit 0.
2. `node --check tests/content.test.js` — exit 0.
3. `node --test tests/content.test.js` — exit 0; one outer file subtest, zero failures.

A direct Node assertion check independently confirmed 14 lessons, checklist IDs in exact order, one Correct feedback per quiz aligned with its answer index, and 113 coverage records: 61 taught, 12 summary, 40 omitted. Read the test source: it checks the exact top-level key contract, valid model/scopes/answers, unique sections, required HL topics, usable worked/challenge content, coverage references, diagnostic placeholder exclusion and diagram omissions. It does not detect the scope failure above.

Manually checked all 14 worked examples and every quiz option against its individual feedback. Results: PPC trade-off 4 baskets; comparison-city increment 1,000 journeys; market demand 5/9 and supply 10/15; equilibrium $4/60 and shortage 20; enrollment 40%→75% (+35 percentage points); PED −2 and revenue $1,000→$880; PES 0.5; ceiling shortage 20/trade at most 50; external-cost social net benefit −$2; public-good benefits $1,000/cost $600/equal funding $6; insurance selection mechanism correctly distinguished from moral hazard; discrete firm profit maximum Q=2 at $3 with MR/MC increments $10/$6 then $8/$10; asset income $2,000 annually≈$166.67 monthly and wealth $52,000 if retained. Quiz answer positions and explanations match the economic reasoning in all 14. Additional inspected section examples include diminishing returns (14 then 8), tax $2 with Ps=$3/Pb=$5/Q=50/revenue $100, subsidy Pb=$3/Ps=$5/Q=70/cost $140, welfare triangle $60, payoff best responses and 80% concentration ratio.

Original generic distractors/feedback are replaced by topic-specific alternatives explaining distinct misconceptions. The placeholder regression checks pass. Four externality mechanisms and four named market structures are present. HL evidence references resolve to HL sections where required; the specific scope leak above remains.

## Evidence boundaries

Exact task-file reads were the justified graphify fallback: the handoff/completion records this new repository has no graph, and this verification needed exact data and assertions rather than graph navigation. Completion records reuse/extension of the canonical English module with no duplicate runtime owner or dependency; no new function/module was introduced by this verifier.

Honest omissions are permitted by the plan: all 40 explicit diagram objectives remain omitted with explanations; 12 compressed objectives remain summaries. These are introductory lessons, not complete assessed diagram preparation. This verifier checked against the fixed checklist and existing curriculum research, not a fresh guide-PDF or external-source audit. No browser, translation, architecture or broad code-quality review was performed; these belong to later tasks/wave review. No production edits, dependencies or commits were made.
