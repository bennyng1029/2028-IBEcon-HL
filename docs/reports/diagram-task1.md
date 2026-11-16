# Diagram Task 1 implementation

Implemented the finite `models.guided(id, scenarioKey)` geometry dispatch for all 40 frozen objective IDs and 67 canonical scenario pairs. Unknown IDs/scenarios return null. Existing six calculators and `models.diagram` remain unchanged. Owned files: `assets/js/models.js`, `tests/models.test.js`, this report. No content, coverage, renderer, dependency or publishing changes.

## Reuse and shared contract

Ran `graphify query "diagram renderer model curriculum objective coverage"`. Graph located the app/model relationships but did not expose the finite geometry/schema requirements, so read the exact named source and approved documents. Extended the existing canonical `models.js`; reused the established linear market/PPC conventions where valid. New cost curves derive from the approved total-cost families rather than reusing the TR/TC calculator as marginal curves.

All scenarios return layers `construct`, `read`, `compare` in this order, confirmed by coordinator. Base contains initial curves/core flow; construct adds changed/alternative curves, sector nodes or initial observations; read adds quantity/price guides, schedule observations or real/money flows; compare adds directed changes, welfare/revenue/profit regions or leakage/injection flows. Geometry item keys and panel/axis keys are available directly from each returned scenario; labels must cover them. Panel keys are `main`, except competitive market/firm comparisons use `market` and `firm`. Flow axes use `flowX`/`flowY` with `axisFree:true`; PPC uses `outputX`/`outputY`; Engel uses `quantity`/`income`; other axes use `q`/`p`.

The normal-profit rectangle is deliberately represented by a zero-height labelled line instead of a degenerate polygon. Welfare polygons are explicitly closed. Cost/hyperbola curves sample positive domains; key teaching and tangency coordinates are inserted exactly. Long-run monopolistic competition also marks minimum AC and the excess-capacity interval. Externality diagrams include explicit private/social wedges. Flow node positions use bottom-left x/y with positive width/height; every edge begins and ends within its named node.

## Evidence

Added a failing guided PPC/unknown-pair test before implementation (guided API absent). Final checks:

- `node --check assets/js/models.js`: exit 0.
- `node --test tests/models.test.js`: exit 0.
- `node tests/models.test.js`: 21 tests passed, 0 failed (12 original tests, 9 guided tests).

Tests independently enumerate the approved design table (40 IDs, 67 scenarios); check every primitive's finite positive bounds, every ordered layer, nonempty base and exact closed nonzero polygon area. Analytic expectations are independent of production helpers: PPC 1/3 and 2/2 costs; schedule/equilibrium changes; shortage/surplus; CS/PS; tax/subsidy areas; positive-domain PQ=12; PED/PES common-point ratios; revenue rectangles; Engel YED; all four externality equations/quantities/losses; weak-cap/partial-education loss .25; corrective revenue/expenditure; every AC/MC/MR sample and TC family; profit/loss/AVC; natural-monopoly cost/loss; monopoly welfare; LR monopolistic tangency and excess capacity. Directed flow tests inspect actual source/destination nodes, endpoint containment, opposing real/money directions, leakages/injections, unequal income and savings.

## Limits and next action

This is implementation evidence, not fresh-context verification or rendered proof. Coordinator must dispatch the required fresh verifier, then run rendered all-scenario/all-locale checks in Task 4. Sampled curves are deterministic polylines; exact economic points are included, but their rendered interpolation is an approximation between samples. No coverage activation occurred. Language quality, keyboard behavior and legibility require later content/UI verification.
