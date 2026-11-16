# Task 2 fix 1 — complete fresh semantic verification

Observed pre-fix verdict: **FAIL — one remaining construction-choice clarity defect.** The prior economic and visibility blockers are fixed. Complete source inspection found no further incorrect economic claim in the 197 correct construction feedback strings, their distractors, or their instructions. The remaining defect is small but prevents a meaningful drawing choice at one step.

## All concrete findings

**BLOCKING: unnamed correct drawing choice.** In `2.3.equilibrium_diagram / crossing / read`, the accepted choice is literally “Add , with dashed axis-reading guides.” at `assets/js/content-en.js:2123`. It does not identify what the learner is selecting. Canonical geometry adds the dashed `crossing` segment (4,4)→(6,6), not a newly named point or an axis projection. Feedback at line 2124 correctly explains that segment, but appears after selection and cannot repair the missing choice meaning. Smallest fix: name the supply segment through E in the accepted choice, for example “Add the dashed supply segment through E from (4,4) to (6,6).” Keep the geometry and correct feedback. No other concrete issue found in this complete audit.

## Method and completeness

Read `docs/diagram-session-handoff.md`, `diagram-task2-verification.md`, `diagram-task2-fix1.md`, and `diagram-task2-recheck.md` first. This is the fresh functional semantic recheck requested by those reports. Exact targeted inspection of the named canonical payload and model was appropriate: graph navigation cannot establish the exact authored option/feedback versus coordinates under review; no structural exploration or new implementation was needed.

Inspected scenarios in source order using seven-scenario batches 0–6, 7–13, 14–20, 21–27, 28–34, 35–41, 42–48, 49–55, 56–62, then overlapping five-scenario batch 62–66. Every batch selected prediction, construction instructions, both choices with feedback, comparison, explanation and corresponding actual layer primitives from `ECON_MODELS.guided(id,key)`. One first firm batch exceeded the output limit: reissued the entire 49–55 batch with long sampled curves reduced to actual endpoints and marked decision coordinates, after reading the canonical AC/MC/AR/MR formulas at `assets/js/models.js:199–219`. All text and discrete primitives were then untruncated. This was pagination, not an acceptance limitation. No scenario was skipped. All197 correct feedbacks and197 construction distractors were read against the ordered layer state; the inventory below records every reviewed ID, scenario and construction key.

Confirmed initial-only layers describe their own points, sectors or curves rather than asserting later outcomes are already drawn. Future comparisons expressed as prospective economic purpose do not falsely claim future geometry is present. Same-geometry firm feedback sharing remains appropriate to actual AC and profit conditions.

## Economic checks

- PPC: capacity versus utilization, opportunity cost 3, equal X increments with Y sacrifices 2/2 versus 1/3 all agree with geometry.
- Circular flows: factors and income oppose; goods and expenditure oppose; S/T/M leave spending and I/G/X enter. Lower-income factor/income, saving2 versus20, transfers and conditional asset returns point to the named sectors. The abstract finance-to-firm investment link is illustrative; conditional wealth wording avoids guaranteed asset returns.
- Markets: own-price movements and same-price shifts are distinguished; shortage/surplus quantities and price-adjustment arrows have correct signs. Price controls distinguish planned quantities from short-side private transactions and do not invent public purchases.
- Elasticity: relative curves use common P/Q and axes; PED hyperbola distinguishes point1 from finite initial-value2; straight-line midpoint is locally stationary revenue, with no fictitious second rectangle; revenue16→21 and21→16, YED2/0.5/−0.5 and PES polar/unit cases agree with coordinates.
- Tax: Q4, buyer6, seller4, wedge2, revenue8 and loss1. Subsidy: Q6, buyer4, seller6, wedge2, expenditure12 and loss1. Price wedges are vertical; controls' excess demand/supply gaps are horizontal.
- Externality signs: negative production MSC=MPC+2; negative consumption MSB=MPB−2; positive production MSC=MPC−2; positive consumption MSB=MPB+2. Private/social crossings are5/4 in negative cases and4/5 in positive cases; loss triangles use the social marginal curves, not total external-effect rectangles.
- Corrective tax aligns effective supply with MSC at Q4 and removes initial loss1; corrective producer subsidy yields Q5, buyer5, seller7, expenditure10. Before-policy shaded loss is explicitly historical. Carbon output does not quantify emissions. Enforced optimal cap Q4 removes loss; weak cap Q4.5 retains triangle area0.25. Education holds MSB fixed; full response Q5 removes loss, partial Q4.5 leaves area0.25.
- Firms: output is separated from demand price and AC profit measurement; short-run loss is conditional on covering variable cost. Competitive MR6 crosses rising MC at Q4; market quantity6 is separate. Profit/normal/loss AC4/6/8 gives8/0/−8. Monopoly MR=MC at Q4 gives demand price6; monopoly welfare benchmark Q8/P2 has loss8 distinct from profit.
- Natural monopoly: unregulated Q4/P6/LRAC5 gives profit4. Regulation uses demand=MC at Q8/P2/LRAC3.5, loss12; the MR=MC point at Q4 is explicitly an unregulated reference. The erroneous regulated distractor has been replaced.
- Monopolistic long run: Q=8/3, AR=AC=22/3, MR=MC=14/3; AR and AC slope−1, minimum AC quantity sqrt(64/3)≈4.619. Zero profit and excess capacity coexist. Cartel geometry is an aggregate coordination benchmark; differentiated-demand elasticity ranking is a qualified shared-point comparison.

## Static and functional evidence

Static checks ran before tests: `node --check assets/js/content-en.js` and `node --check tests/content.test.js`, both exit0.

Exact targeted canonical command from fix1:

```sh
node --test --experimental-test-isolation=none --test-name-pattern='lessons provide|classic-script contract|diagnostic activities|diagram coverage|lesson 2.7|locale overlays register|every locale distinguishes|canonical guided|guided drafting|omission reasons' tests/content.test.js
```

Result: **11 passed, 0 failed**. Full `node --test --experimental-test-isolation=none tests/content.test.js`: **11 passed, 1 failed**. The single expected boundary failure is `all manual overlays have complete matching localized content`, reporting absent `diagrams` in locale overlays. Task3 owns that work; it is separate from the English finding above.

Independent VM-loaded deep comparison of current lessons with `diagrams` removed against `/tmp/econ-diagram-baseline-8o8a0nje/assets/js/content-en.js`: **PASS**, all original lesson fields and coverage records preserved. Independently counted **40 studios / 67 scenarios / 197 construction layers / 40 omitted / 12 summary / 113 coverage entries**.

## Exhaustive reviewed inventory

Every listed key includes its instruction, accepted label/feedback, distractor label/feedback and actual canonical layer primitives; prediction and explanation alternatives and final comparison were also inspected for each scenario.

| Studio ID | Scenario → reviewed construction keys | Status |
| --- | --- | --- |
| 1.1.ppc_choice_diagram | choice → construct, read, compare | Reviewed |
| 1.1.ppc_growth_diagram | actual → construct, read, compare; capacity → construct, read, compare | Reviewed |
| 1.1.ppc_cost_diagram | constant → construct, read, compare; increasing → construct, read, compare | Reviewed |
| 1.1.circular_flow_diagram | fiveSector → construct, read, compare | Reviewed |
| 2.1.curve_diagram | demand → construct, read, compare | Reviewed |
| 2.1.shifts_diagram | movement → construct, read, compare; increase → construct, read, compare | Reviewed |
| 2.2.curve_diagram | supply → construct, read, compare | Reviewed |
| 2.2.shifts_diagram | movement → construct, read, compare; increase → construct, read, compare | Reviewed |
| 2.3.equilibrium_diagram | crossing → construct, read, compare | Reviewed |
| 2.3.changes_diagram | shortage → construct, read, compare; surplus → construct, read, compare; demandIncrease → construct, read, compare; supplyIncrease → construct, read, compare | Reviewed |
| 2.3.surplus_diagram | surplus → construct, read, compare | Reviewed |
| 2.5.ped_diagrams | relative → construct, read, compare; perfectElastic → construct, read, compare; perfectInelastic → construct, read, compare; unit → construct, read, compare | Reviewed |
| 2.5.ped_line_hl | segments → construct, read, compare | Reviewed |
| 2.5.ped_revenue_diagram | elastic → construct, read, compare; inelastic → construct, read, compare; unit → construct, read | Reviewed |
| 2.5.yed_engel_diagram | incomeElastic → construct, read, compare; incomeInelastic → construct, read, compare; inferior → construct, read, compare | Reviewed |
| 2.6.pes_diagrams | relative → construct, read, compare; perfectElastic → construct, read, compare; perfectInelastic → construct, read, compare; unit → construct, read, compare | Reviewed |
| 2.7.ceiling_diagram | binding → construct, read, compare | Reviewed |
| 2.7.floor_diagram | privateSales → construct, read, compare | Reviewed |
| 2.7.tax_diagram | tax2 → construct, read, compare | Reviewed |
| 2.7.subsidy_diagram | subsidy2 → construct, read, compare | Reviewed |
| 2.8.social_optimum_diagram | optimum → construct, read, compare | Reviewed |
| 2.8.negative_production_diagram | negativeProduction → construct, read, compare | Reviewed |
| 2.8.negative_consumption_diagram | negativeConsumption → construct, read, compare | Reviewed |
| 2.8.positive_production_diagram | positiveProduction → construct, read, compare | Reviewed |
| 2.8.positive_consumption_diagram | positiveConsumption → construct, read, compare | Reviewed |
| 2.8.pigouvian_diagram | optimalTax → construct, read, compare | Reviewed |
| 2.8.carbon_diagram | industryTax → construct, read, compare | Reviewed |
| 2.8.subsidy_diagram | producerSubsidy → construct, read, compare | Reviewed |
| 2.8.regulation_diagram | optimalCap → construct, read, compare; weakCap → construct, read, compare | Reviewed |
| 2.8.education_diagram | effective → construct, read, compare; partial → construct, read, compare | Reviewed |
| 2.11.perfect_competition_diagram | priceTaker → construct, read, compare | Reviewed |
| 2.11.perfect_profit_diagram | profit → construct, read, compare; normal → construct, read; loss → construct, read, compare | Reviewed |
| 2.11.perfect_equilibrium_diagram | longRun → construct, read, compare | Reviewed |
| 2.11.monopoly_diagram | profit → construct, read, compare; normal → construct, read; loss → construct, read, compare | Reviewed |
| 2.11.monopoly_welfare_diagram | benchmark → construct, read, compare | Reviewed |
| 2.11.natural_monopoly_diagram | unregulated → construct, read, compare; marginalCostPrice → construct, read, compare | Reviewed |
| 2.11.oligopoly_diagram | cartel → construct, read, compare | Reviewed |
| 2.11.monopolistic_profit_diagram | profit → construct, read, compare; normal → construct, read; loss → construct, read, compare; longRun → construct, read, compare | Reviewed |
| 2.11.monopolistic_demand_diagram | substitutes → construct, read, compare | Reviewed |
| 2.12.circular_flow_diagram | inequality → construct, read, compare | Reviewed |

## Limits and ownership

This is complete source semantic verification of the English scenarios and their canonical layer geometry, not browser-rendered, accessibility or native-language proof. Full base/per-layer prose-coordinate fidelity beyond the selected instructions/choices/feedback is not separately certified by this report. Task4 must establish the rendered interaction and visibility matrix before coverage activation. No browser, production edit, locale edit, coverage promotion, graph update, commit or push was performed. Only this report was written in the repository. The expected locale suite failure remains open for Task3.

Coordinator subsequently reported the single-label fix in `docs/reports/diagram-task2-fix2.md`. This report preserves the pre-fix observation; a separate fresh verifier owns acceptance of that exact correction and post-fix static checks. No re-audit is claimed here.
