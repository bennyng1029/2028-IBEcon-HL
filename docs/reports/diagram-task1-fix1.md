# Task 1 fix cycle 1

Fixed the three fresh-verification findings in canonical `assets/js/models.js` and added regressions in `tests/models.test.js`. Exact named-file inspection is appropriate for this targeted repair; the original Task 1 report records the graphify reuse query and canonical-owner decision. No dependencies or content changes.

The local unit-PED scenario now displays its single observation and revenue rectangle exactly once. It retains `localUnit:true` and the point's revenue 25, without drawing or claiming a finite move with unchanged revenue. Normal-profit scenarios omit the coincident zero-height profit stroke; the long-run tangency case also omits a numerically negligible floating-point rectangle. Two-panel competitive cases retain their meaningful common-price comparison arrow. The marginal-intersection point now uses MR=MC output independently of the selected regulation: natural-monopoly marginal-cost pricing correctly marks MR=MC at (4,2), while chosen output remains (8,2).

Changed layer sequences (all other scenarios retain `construct`, `read`, `compare`):

- `2.5.ped_revenue_diagram/unit`: `construct`, `read`.
- `2.11.perfect_profit_diagram/normal`: `construct`, `read`.
- `2.11.monopoly_diagram/normal`: `construct`, `read`.
- `2.11.monopolistic_profit_diagram/normal`: `construct`, `read`.

No new geometry label keys. Unit scenario no longer emits `final`, `finalQ`, `finalP`, or `finalRevenue`. Zero-profit cases no longer emit `profit`. Existing chosen-output and marginal-intersection keys remain.

Validation: `node --check assets/js/models.js`, `node --check tests/models.test.js`, and `node --test tests/models.test.js` all exit 0. Tests assert the variable ordered-layer contract, single unit observation/region, no zero-profit primitive, meaningful retained layers in affected cases, and every firm marginal-intersection point's independent MC/MR equations, including the regulated point distinction. First test run exposed floating-point tangency noise; corrected by omitting profit geometry within 1e-10 per-unit equality. The original calculator tests retain their meaning. Fresh coordinator verification is still required; these tests do not prove browser rendering or legibility.
