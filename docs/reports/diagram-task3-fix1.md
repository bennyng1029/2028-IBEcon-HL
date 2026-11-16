# Task 3 fix cycle 1

Corrected B1 in the guided `2.2.shifts_diagram/increase` correct prediction feedback: English and Japanese, Korean and Hong Kong Traditional Chinese now explain that falling production costs raise sellers' willingness or ability to supply at each price. The corresponding lesson 2.1 demand feedback was preserved. Corrected six occurrences of the Korean particle in new diagram construction feedback (`초과공급가` to `초과공급이`). No other lesson fields or coverage statuses were intentionally changed.

Added a focused content regression checking seller/supply wording and separately checking that the localized demand scenario retains purchasing meaning. The first run revealed that demand's correct feedback is at index 0, unlike supply's index 1; the test now uses the declared answer index.

Verification: `node --check` passed for all four content files and `tests/content.test.js`; `node --test tests/content.test.js` passed (exit 0). Independent locale parity and baseline verification is left to the fresh verifier. No browser or native-language certification is claimed. No new function or module in product code, dependency, commit, or graph update.
