# Task 4 independent verification

**Result: NOT PASS — visual readability blocker.** Automated checks passed, but numbered geometry identifiers overlap in rendered diagrams. Do not activate coverage until corrected and freshly verified.

## Checks

- `for f in assets/js/*.js tests/*.js; do node --check "$f" || exit; done; node --test tests/*.test.js` — exit 0; three test files passed, zero failures.
- `node tests/browser-check.js --screenshots` — exit 0, Chrome 155.0.8059.79 with a temporary loopback HTTP server on 8765 and CDP on 9222. Output: `{"diagramCases":536,"mobileCases":320,"mode":"full"}` and `{"matrixCases":48,"quizCases":112,"errors":0,"networkLocalOnly":true,"mobileOverflow":false,"storageFailurePassed":true}`. The harness also executes 36 keyboard paths (nine sampled studios × four locales over HTTP). File and `/course/` HTTP are both covered. The owned server and Chrome were stopped after the run. An initial sandboxed Chrome launch failed; the successful run used escalation for local sockets.
- The automated assertions do not determine whether labels overlap or teaching diagrams are visually readable.

## Visual findings and remaining inspection

1. `/tmp/diagram-2.7.tax_diagram-ja-desktop-final.png`, captured 2026-11-15 19:54:48 JST, shows identifiers 2, 6 and 12 overlapping around the wedge and deadweight-loss triangle. The legend cannot reliably be mapped to those obscured marks. Separate/offset the labels so all identifiers are legible, then inspect the same geometry at desktop and mobile.
2. `/tmp/diagram-2.11.perfect_competition_diagram-ja-desktop-final.png`, captured 19:54:49 JST, shows identifiers 7, 8 and 9 overprinted at firm equilibrium. This indicates the same issue affects coincident points. Preserve each semantic item while making its identifier readable.

Both screenshots show the final comparison drawing for the harness's first scenario, not every outcome. The fresh run generated `/tmp/diagram-<objective>-<locale>-desktop.png`, `-desktop-final.png`, `-mobile.png`, `-mobile-middle.png`, and `-mobile-right.png` for the nine sampled objectives and four locales. These are temporary artifacts. This verifier inspected the two final desktop screenshots above and an earlier `/tmp/diagram-flow-ja-center-inspected.png`; the latter showed readable Japanese node names and arrowheads, but predates this run. Other screenshots and required representative outcomes, including all four externality signs and short-run firm profit/normal/loss, were not visually inspected here. Capture distinct outcomes where the harness only captures its first scenario, and complete the prescribed locale/family/viewport inspection after the fix.

Native-language editorial review and actual screen-reader testing remain manual limits. Automated completion is not visual approval or independent mastery evidence. Task 5, wave reviews, closeout and graphify update remain outstanding.
