# Task 1 fix cycle 1 fresh verification

Result: **PASS** for the three reported failures and affected scenarios. The approved schema allows variable ordered layers (`docs/diagram-design.md:59`; `docs/diagram-progress.md:7`).

- Unit PED now has a single (5,5) observation and a single area-25 revenue region; its two steps add the observation/guides and then the rectangle (`assets/js/models.js:164-165`; `tests/models.test.js:122-127`).
- Three single-panel normal-profit cases omit the coincident zero-height rectangle and retain construct/read. The competitive two-panel cases retain a distinct market common-price arrow, and monopolistic long run retains its distinct minimum-AC guides and excess-capacity arrow (`assets/js/models.js:213-220`; `tests/models.test.js:129-135`). Inspection confirms each retained step in these affected cases adds distinct geometry; long-run tangency has a distinct compare step. The novelty test does not itself include monopolistic long run, so this conclusion also rests on direct inspection.
- Natural monopoly marginal-cost pricing independently marks MR=MC at (4,2) and chosen regulated output at (8,2); MR=10−2Q and MC=2 confirm the intersection (`assets/js/models.js:204`, `:209`, `:213`; `tests/models.test.js:137-145`).
- Independently enumerated design inventory: 40 IDs and 67 pairs, all resolve; the model tests check bounded geometry and ordered nonempty layers. Existing APIs and original tests were baseline-checked in the previous fresh verification; the fix touches guided geometry and associated new tests, not the pre-existing API.

Checks in order: `node --check assets/js/models.js`, `node --check tests/models.test.js`, then `node --test tests/models.test.js`; all exited 0. Browser rendering and legibility were not checked.
