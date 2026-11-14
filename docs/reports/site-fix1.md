# Integrated site blockers — implementation fix 1

Scope: renderer/model/UI regression fix only. No lesson content, dependencies, publication or commits. Reused canonical `models.js`, `app.js`, `ui.js` and the existing no-dependency browser harness. `graphify query "canonical model calculations and SVG renderer"` returned `graph file not found: .../graphify-out/graph.json`; exact assigned-file reads were the justified fallback. Diagram economic coordinates now belong to canonical `models.diagram`; the renderer only maps those units to SVG pixels.

- Model summaries are lazy functions, so only the selected model's result fields are evaluated. Every model lesson now reaches worked activities, quiz and completion.
- Market demanded quantity is floored at zero above the choke price; selected-price movement and equilibrium have separate marker identities, shapes and letter labels. Existing correctly clipped shifted-demand endpoints are preserved. The quantity axis extends to 14 to include the highest feasible selected quantity.
- Every graph has numeric ticks, localized axis units, numbered curve legends and lettered point legends with actual coordinates. PED uses 0–20 quantities/prices. Firm uses Q0–20 and an explicit currency axis sized to both full revenue/cost lines; selected points show actual Q, TR and TC.
- Tax/subsidy show clipped shifted supply, buyer/seller markers and a vertical price wedge. Ceiling/floor show the control line, including nonbinding cases. Externality shows marginal social cost and market/social points. These remain illustrative sketches and do not change the explicit assessed-diagram omissions.
- The sidebar is a native details/summary course map: collapsed on narrow-screen initial rendering and expanded on desktop. All lesson links remain keyboard accessible through the summary.
- Extended existing browser harness: readiness polling replaces fixed waits, CDP chooses an actual page target instead of an extension background target, every model/lesson checks quiz/completion, and added marker-movement and mobile collapsed-map assertions.

## Implementation evidence

After final changes, `for f in assets/js/*.js tests/*.js; do node --check "$f" || exit; done` exited 0 and `node --test tests/*.test.js` passed all 3 file suites. Boundary regressions cover choke prices, maximum quantity14, independent market movement, tax/subsidy wedge 0/2/10, control lines 0/5/10, firm Q20/TR400/TC420, and unscaled PED endpoints. One test initially distinguished JS negative zero from zero in the expected subsidy-zero value; corrected the expectation, with no production change needed.

Actual Chrome/155.0.8059.79 using `node tests/browser-check.js` passed after the final renderer changes: 48 file/HTTP locale-model cases, 112 lesson-locale quiz cases, zero runtime errors, local-only navigation requests, no checked mobile overflow, and blocked-storage completion. File URLs and localhost `/course/` subpath both exercised. Existing harness additionally checks missing-overlay fallback, malformed/unknown hashes, reset/completion and native keyboard focus. Movement-marker displacement and collapsed mobile sidebar assertions passed. Browser/server required sandbox escalation; HTTP server exposed only this workspace, bound to localhost. QA Chrome and server are stopped at return.

This is implementer evidence; fresh-context verification and wave reviews remain the coordinator's acceptance gates. Browser checks establish mechanics, not native-language accuracy or exhaustive economic/content review.
