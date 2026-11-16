# Final wave fix 1 — coverage evidence navigation

Scope: architecture review B's blocking learner-facing evidence issue. Only `assets/js/app.js`, `tests/ui.test.js`, `tests/browser-check.js` and this report were edited in this fix. Existing user/wave changes were preserved; content, translations, model geometry, stored canonical evidence and UI dictionaries were not changed.

Coverage now resolves a taught row's exact canonical `diagram:<id>` reference against that lesson's localized diagram and renders its existing human-readable title as a native anchor. The anchor uses `#lesson/<lesson-id>/diagram/<diagram-id>`. Other evidence and all statuses retain their existing presentation.

The existing hash router accepts an exact, valid lesson/studio pair, opens the corresponding details panel, and focuses its native summary on hash navigation or direct document load. Unknown targets, extra route segments and malformed encoding fall back to Home. Locale changes rerender and reopen the requested studio without moving focus from the language selector. The skip link still focuses main without changing the route. No new prose requires translation.

Reuse: `graphify query 'coverage evidence guided studio routing'` identified canonical `coverage`, `lesson`, `link`, `render` and `lessonPage` ownership in app.js. Those implementations were extended; no parallel renderer/router or dependency was introduced. The initial exact named-file contract inspection preceded this query, contrary to the preferred query-first order; graph navigation alone did not expose the current route/focus contracts.

Validation by implementer (fresh independent verification remains coordinator-owned):

- `node --check assets/js/app.js`, `node --check tests/browser-check.js`, `node --check tests/ui.test.js`: pass.
- `node --test tests/*.test.js`: pass, all three test files. The new UI test checks all 40 canonical mappings in each of four locales.
- `node tests/browser-check.js --coverage-only`: targeted owned Chrome 155 checks on `file://` and HTTP `/course/` subpath. Checks all 40 localized titles and anchors per locale/protocol; native click and Enter navigation alternate across all targets; the correct studio opens with summary focus and locale retained. Direct reload, locale selector focus, skip link and invalid-route cases are covered, plus preservation of all non-diagram evidence and statuses. Final result recorded below.

No full 536-case scenario rerun was needed for this presentation/navigation fix. This report does not establish professional translation review, screen-reader certification or independent drawing mastery. Cross-reload language persistence is unchanged: a new document starts in English; in-document routes retain the selected locale.

Final targeted browser result: `{"coverageMappings":320,"coverageNavigations":320,"errors":0}`. Both complete targeted runs passed; the final run additionally checked other evidence/status preservation and locale-selector focus. No full browser suite was repeated.
