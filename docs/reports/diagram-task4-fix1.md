# Task 4 annotation readability fix, cycle 1

Status: implementer fix ready for fresh verification; coverage remains unchanged.

## Change and reuse

Read the Task 4 independent verification, implementation report, brief and design. Inspected both reported Japanese desktop screenshots before editing. The defect was shared renderer placement: each numeric identifier used an independent fixed offset, so coincident points and small adjacent regions received overlapping text. Extended canonical `svgGraph` in `assets/js/app.js`; no economics/content/model edits or external dependency. Named-file inspection was an exact targeted fallback. Also ran `graphify query "diagram renderer model curriculum objective coverage"`, which identifies the existing app.js/svgGraph owner; the graph contains pre-studio line positions, so exact reads supply current renderer details.

Identifiers now queue until all geometry has rendered, then use actual SVG text bounds to choose a nearby collision-free position, avoiding existing axis/node text and earlier identifiers. A controlled finite offset search keeps labels inside the plot. Every economic geometry retains its existing coordinates and its own identifier/full localized legend entry. Shifted labels have thin violet dotted leaders to their original curve/point/area anchor; no opaque masks obscure geometry. Identifier `title` text records the localized semantic name. A specific CSS class overrides broad SVG line rules, so annotation leaders remain visually different from economic curves. Flow node names, border clipping, visible-layer descriptions, comparison IDs and the original calculator path remain unchanged.

Changed only app.js, site.css, browser-check.js and this report. ui.test.js required no change.

## Verification and visual evidence

Final checks: `for f in assets/js/*.js tests/*.js; do node --check "$f" || exit; done`; `node --test tests/*.test.js` — passed 44 tests, zero failures in the final unsandboxed local-browser command environment (sandboxed runner groups the same tests into three passing files).

`node tests/browser-check.js --smoke --diagrams-only --annotation-visuals` — passed 136 diagram cases and 72 mobile views with zero runtime errors, plus dense-outcome screenshots. The fresh verifier must rerun the default full matrix, including the old six calculators and lesson regressions. The harness disables the browser cache to use current assets, and now asserts non-overlapping actual SVG identifier bounding boxes with a safety gap, plot containment and nonempty semantic titles in every compared scenario it executes, including the initial and final panels. These assertions fail on the original tax/firm fixed offsets and exercise rendered output, not the placement implementation.

`--annotation-visuals` captures 88 uniquely named screenshots: tax; four externality signs; market/firm price-taking panels; monopolistic competition profit, normal, loss and long-run tangency; each in en/ja/ko/zh-Hant-HK at 1280 and 375 widths. Files are `/tmp/diagram-fix1-<objective>-<scenario>-<locale>-<width>-panel<N>.png`; scenarios cannot overwrite each other. Mobile captures center the local scroll area; the ordinary harness retains local-scroll reachability/overflow checks and optional left/middle/right captures. Inspected all 22 four-locale contact sheets (both viewport widths, every captured outcome/panel), plus individual reported tax and firm-equilibrium views. Identifiers 2/6/12 and 7/8/9 are separately readable, and the nearby positions/leaders preserve their geometric associations. Mobile intentionally uses contained horizontal scrolling; a centered screenshot does not show both extreme axes simultaneously.

## Infrastructure and limits

Chrome 155 CDP was temporarily launched for this fix using `/tmp/econ-fix1-chrome`. Initial sandbox socket launches failed, then escalation permitted Chrome. A loopback server already occupied 8765; no server was started or stopped by this worker. It serves this app at `/` and `/course/`; process listings, even escalated, expose only the command namespace, so its process ownership/root restriction could not be independently confirmed. The coordinator was informed. Do not describe that server as worker-owned or freshly verified workspace-only.

Two initial harness invocations accidentally overlapped on the same CDP page: one was interrupted and the other reported mobile overflow under interference. Those results are discarded. Subsequent runs were sequential. Temporary contact-sheet generation runs only after the harness exits. Owned Chrome is stopped before handoff; existing server is left untouched.

Implementer visual inspection is not fresh independent verification, native-language editorial review, or assistive-technology testing. Full matrix rerun, remaining broader-family visual evidence, Task 5 activation, wave reviews and graphify update remain coordinator-owned. No commit or publication.
