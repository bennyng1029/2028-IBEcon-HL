# Diagram implementation plan review — Cycle A

Verdict: **REVISE**.

## BLOCKING

1. **Coverage is promoted before the evidence exists.** The design permits changing the 40 statuses only when full four-locale studios and rendered practice exist (`docs/diagram-design.md:15`), and the audit independently requires rendered keyboard-accessible construction before status changes (`docs/diagram-coverage-audit.md:74`). Task 2 instead changes every entry to `taught` before translations (Task 3) and before the interface and browser evidence (Task 4) (`docs/diagram-implementation-plan.md:35-39`, `:50-58`). The existing coverage page immediately displays that canonical status and evidence (`assets/js/app.js:25`), so an interrupted or failed wave leaves a false product claim; calling the intermediate state unreleased does not correct it. The final gate's instruction to keep statuses honest (`docs/diagram-implementation-plan.md:81-83`) does not specify an executable recovery or defer the mutation. **Smallest fix:** keep all 40 statuses and omission explanations intact through implementation and verification; add a final owned promotion step only after every studio has passed the prescribed four-locale rendered checks, with synchronized English/locale schema updates and re-verification. Specify that any unverified objective stays omitted, including on partial failure.

## NON-BLOCKING

1. The complete description is a single scenario string (`docs/diagram-design.md:28-40`), while descriptions must track visible construction layers and only supply the complete final equivalent on reveal/comparison (`docs/diagram-design.md:123-125`; `docs/diagram-implementation-plan.md:60`). Specify how localized descriptions for each intermediate layer are represented or composed so the verifier can check that hidden geometry is neither described as already visible nor omitted from the final equivalent.

## Checks and limits

Compared the canonical English omitted set with the design inventory: 40 in each, no missing or extra IDs. The plan specifies a matching scenario inventory, per-family analytic checks, locale metadata and parity, meaningful layer geometry, browser interactions and common/HL separation. This is a source-only feasibility review; it does not verify translations, diagram legibility or runtime behavior. Graphify identified the existing renderer but did not expose the document/schema details, so exact named-file reads were necessary. No product files were changed.
