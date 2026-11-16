# Diagram wave: code reuse audit

Read-only fresh Sol explorer used graphify query "diagram renderer model curriculum objective coverage", graphify explain "svgGraph", and graphify-out/GRAPH_REPORT.md, then exact source reads for contracts. Current graph identifies canonical owners but cannot encode schema whitelist details.

- models.js calculators (lines6–16) and diagram geometry (line20 onward) remain canonical. Preserve public numerical APIs. Geometry currently supports straight lines and points; extend for polylines, filled regions and directed-flow geometry as necessary.
- app.js svgGraph (line26) owns axis scaling, labels/legends and accessible SVG; extend it. lessonPage (line40) should independently render guided diagrams even when model is none (lesson2.12). Avoid putting economic calculations in app.js.
- Add stable lesson-owned diagram metadata and localized instructional prose with exact schema decided in plan. overlay at app.js:14 treats strings as translated prose except whitelisted metadata: explicitly preserve all new IDs, variant keys and evidence. Translate instructions, labels and accessibility descriptions.
- Existing content tests enforce exact keys and all diagrams omitted (tests/content.test.js:53–62). Replace blanket omission requirement with frozen40 objective evidence and actual diagram/scenario/locale checks; extend coverage evidence resolver for diagram:<id>. Preserve 113 checklist IDs/order and existing12 summaries unless needed to teach diagrams.
- Existing tests/models.test.js checks scalar and limited line geometry; new scenario mathematics, area and direction tests required. tests/ui.test.js checks only literal UI keys; new dynamic labels need coverage.
- Extend existing tests/browser-check.js to all guided diagrams/scenarios in four locales on file and HTTP subpath, including model:none and complex mobile diagrams; keep old regressions.

Baseline: preserve current working tree, not only HEAD fe4d286. Product snapshot before new wave: /tmp/econ-diagram-baseline-8o8a0nje (assets, tests, index, README, checklist). Initial audit found exactly40 omitted objectives. No product changes made.
