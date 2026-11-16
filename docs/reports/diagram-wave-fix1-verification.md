# Coverage navigation fix — independent functional verification

Verdict: **PASS**. Fresh verification context; no production edits or delegation. Read the fix report and blocking architecture finding, inspected the actual cumulative Git diffs for `assets/js/app.js`, `tests/ui.test.js` and `tests/browser-check.js`, and inspected the current coverage renderer, route parser and focus handlers. Exact named-file inspection is a justified graphify fallback: this task verifies concrete route strings, DOM assertions and command output rather than discovering architecture. The implementer records graphify query `coverage evidence guided studio routing` and reuse of canonical coverage/lesson/router ownership; no new parallel module or dependency appears in this fix.

Static checks ran before functional verification:

```text
for file in assets/js/*.js tests/*.js; do node --check "$file" || exit; done
exit 0; no syntax errors

node --test tests/*.test.js
ok 1 - tests/content.test.js
ok 2 - tests/models.test.js
ok 3 - tests/ui.test.js
# tests 3
# pass 3
# fail 0
# cancelled 0
# skipped 0
# todo 0
exit 0
```

Independent browser command: `node tests/browser-check.js --coverage-only`, exit 0, Chrome `155.0.8059.79`, CDP protocol `1.3`, cache disabled. Exact final result:

```json
{"coverageMappings":320,"coverageNavigations":320,"errors":0}
```

This checks every canonical mapping and localized title for 40 diagram references × four locales × two protocols (`file://` and HTTP `/course/`). It rejects visible raw reference tokens and verifies all coverage statuses and every non-diagram evidence cell against its existing canonical/localized source. Each target is activated, alternating DOM native-anchor click and real CDP Enter input across targets, with correct studio open, summary focused and selected locale retained.

For each protocol/locale combination, a fresh document load of the first direct studio URL opens and focuses that studio; changing locale reopens it while retaining focus on the language selector. The skip link retains the route and focuses main. Unknown diagram ID, extra route segment and malformed percent encoding all render Home. These additional reload/focus/fallback cases are sampled once per protocol/locale, rather than repeated for all 40 studios. A new document's default English locale remains the existing behavior.

Infrastructure was owned for this verification: temporary profile `/tmp/coverage-fix-verify-chrome`, Chrome CDP on loopback9222, and workspace HTTP server on loopback8765 with `/course/` mapping. Local socket execution used approved escalation. Both owned sessions stopped after completion: Chrome exit 0, HTTP server interrupt exit 130.

Limits: this is fresh targeted browser and source evidence for coverage presentation/navigation. It does not rerun the unchanged 536-case diagram geometry/state suite, certify professional translations or screen-reader behavior, establish independent drawing mastery, or claim external network isolation from Chrome background services. Geometry retains its prior full verification evidence. No blocking defect was found in this targeted scope.
