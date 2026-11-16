# Integrated fix 2

The market diagram's shifted demand endpoint now clips against its actual horizontal domain (`xMax = 14`) in the canonical diagram geometry. At shift +4 the curve ends at (14, 0), matching the selected-price movement point at price 0. The existing vertical clipping remains in place.

A boundary regression checks shifts -4, 0, and +4, including endpoint bounds and feasible movement points on the demand curve. The browser harness now asserts that ArrowDown on the focused native locale selector changes both its value and the document language to Japanese. These changes were present in the partial work when this retry began and were inspected and retained.

Verification: `for f in assets/js/*.js tests/*.js; do node --check "$f" || exit; done` passed; `node --test tests/*.test.js` passed all 3 file suites with zero failures. The browser harness was not rerun in this implementation context; independent browser verification remains pending.
