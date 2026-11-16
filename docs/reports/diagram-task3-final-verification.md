# Task 3 correction: fresh final verification

Verdict: **PASS for Task3 source/content acceptance.** B1 is fixed in all four languages; N1's six Korean particles are corrected.

Read `diagram-task3-verification.md` and `diagram-task3-fix1.md`. Exact named scenario inspection and rerunning the existing independent parity checker make graph navigation unnecessary. This fresh context made no product edits and used no browser or delegation.

## Static then functional evidence

Ran `node --check` for all four `assets/js/content-{en,ja,ko,zh-hant-hk}.js` files and `tests/content.test.js`, then `node --test tests/content.test.js`: all exit 0; the Node runner reports one passing test-file subtest. Read the new regression: it selects feedback through each declared answer index, checks seller/supply wording, and preserves localized demand purchasing wording.

Reran the previous independent `/tmp/task3-independent.cjs` after reading its assertions: exit 0. For each locale, protected metadata (`id`, `scope`, `key`, `answer`), object fields/order, arrays/order and other non-instructional values match canonical English. All 1,213 coordinate tuples in descriptions preserve exact English text/order. All pre-existing lesson fields, excluding only `diagrams`, equal `/tmp/econ-diagram-baseline-8o8a0nje` in all four languages. Coverage remains baseline-equal: 113 entries, 12 summaries and all 40 diagram objectives still omitted with omission fields intact.

Counts remain 40 studios, 67 scenarios, 197 construction layers and 15 non-null `extension` questions in every language. The independent checker also confirms 3,235 translated instructional leaves per overlay.

## Direct correction inspection

For `2.2.shifts_diagram/increase`, correct prediction feedback now states:

- English: lower production costs increase sellers' willingness or ability to supply at every price.
- Japanese: 生産費の低下 increases 売り手の供給意欲や供給能力 at 各価格.
- Korean: 생산비가 하락 increases 판매자의 공급 의사나 능력 at 모든 가격.
- Hong Kong Traditional Chinese: 生產成本下降 increases 賣方在各價格下的供應意欲或能力.

These describe the seller response to lower costs at every price, consistent with the scenario's rightward supply shift. Directly read the corresponding demand feedback, which retains neutral English willingness/ability and localized purchasing/payment meaning. Exactly six repeated Korean feedback sentences now contain `부족 또는 초과공급이 발생합니다`; no `초과공급가` remains.

## Limits

Accepted the prior report's 26-scenario-per-locale semantic sampling for unchanged content; did not repeat it. This verifies the narrow correction and current structural/baseline gates, rather than certifying every translation natively. No browser rendering, accessibility, keyboard, mobile, file/subpath or rendered fallback verification is claimed. Task4 evidence and Task5 activation gates remain separate; this PASS does not promote coverage.
