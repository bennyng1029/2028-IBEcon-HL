# Wave review fix cycle 1

Implemented A1, B1 and B2 in the existing canonical renderer, model module, UI dictionaries and four content files. No dependencies or alternative model implementation added.

- A1: all locales now restrict the total-revenue rule to point elasticity and sufficiently small changes, describe unit elasticity as zero first-order change, and require direct P0×Q0 versus P1×Q1 comparison for finite initial-value estimates. All include Q0=10, Q1=1, P0=1, P1=2: PED=−0.9 and revenue 10→2. The initial-value convention remains unchanged. Model assumptions state the distinction; the PED UI shows initial/final revenue with translated labels.
- B1: native skip-link click activation prevents its default hash navigation and focuses the existing tabindex=-1 main landmark. Actual Enter activation from lesson and search retains the route and focuses main.
- B2: the canonical demand diagram explicitly plots the zero-demand segment Q=0 above the choke price and labels any above-choke marker as zero demand rather than movement along the positive-demand line. The underlying nonnegative-demand assumption is explicit in the model source. The translated legend describes the zero-demand region; axes retain localized units. The actual −4 shift / price 10 SVG is asserted at segment (48,106)→(48,38) and marker centre (48,38).
- Related nonblocking issues: hash-route navigation now focuses main, while locale and model updates do not run that route-focus handler. Failed progress reset explicitly warns in all locales that saved completions may return after reload. Browser regression tests distinguish successful storage reads followed by failed writes and verify that reloaded completions return with that limitation disclosed.

## Reuse and checks

Graphify navigation was unnecessary for this exact review-named scope; the approved handoff also records that no graph exists. Targeted reads reused ECON_MODELS.diagram, svgGraph, the existing skip link, main landmark and ECON_UI dictionaries. No new module/function group or third-party dependency was introduced.

PASS: `for f in assets/js/*.js tests/*.js; do node --check "$f" || exit; done` and `node --test tests/*.test.js` (three files, zero failures). Added meaningful model arithmetic/zero-demand geometry and four-locale caveat checks.

PASS: `node tests/browser-check.js` on temporary Chrome/155.0.8059.79 and a server exposing only the workspace under `/course/`, using file and HTTP subpath routes. Output: `{"matrixCases":48,"quizCases":112,"errors":0,"networkLocalOnly":true,"mobileOverflow":false,"storageFailurePassed":true}`. New assertions cover actual keyboard Enter skip from lesson/search, above-choke rendered SVG and successful-read/failed-write reset persistence. Initial browser attempt failed because same-document navigation did not run a new-document storage injection; the test now uses distinct query URLs to force document loads, and the rerun passed. This was a harness setup correction, not a production fix cycle.

No publication or commit. Translation edits preserve economic meaning but are not professional language review. Browser assertions are limited automated evidence, not full accessibility review. Fresh verification and independent wave re-reviews remain required; this report is not self-approval. Graph maintenance/closeout belongs to the coordinating context.
