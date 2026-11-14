# Economics HL learning site: design

## Purpose and scope

Give a beginner who thinks in scientific models a guided route through IB Diploma Economics HL. Each lesson starts with a question, makes assumptions visible, asks for a prediction, explains a causal chain, tests understanding, and identifies a limitation. The English terms used in examinations remain visible in every language. The site is independently authored and is not an IB product.

The first release teaches 1.1, 1.2 and 2.1–2.12. Units 3 and 4 appear as a course map labelled “forthcoming”, not as available lessons. A coverage matrix in the product records the specific syllabus points addressed and identifies any omissions or summaries; a chapter heading alone is not proof of complete syllabus or assessment coverage. Consult the school's current guide and later session notices before relying on assessment details. The October 2022 guide makes Paper 2 common SL/HL content only; 2.4, 2.10, 2.11 and 2.12 are HL-only, with additional HL elements within other topics.

## Approach and constraints

A guided model-led lesson path is the chosen direction; a reference-first encyclopedia is quicker for lookup but weaker for first encounters, and exam-first practice risks memorising diagrams without their assumptions. A searchable map and glossary support revision alongside the guided path. The user approved continuing with this direction and the locked defaults supplied to this planning task.

Use static HTML, CSS, and classic JavaScript, with local scripts and no build step, third-party dependency, account, server, or AI. Relative paths must work from `file://` and a GitHub Pages subpath. Use system fonts and original illustrations. Four manually selected locales are English, Japanese, Korean, and Hong Kong Traditional Chinese; do not switch based on browser language. Fully translate explanatory content, questions and feedback; retain English exam terms and English written-answer scaffolds, with localized hints. Clearly label original practice and illustrative marks; never reproduce guide or paper text.

## Experience

A cream canvas, navy ink, teal action colour and violet HL accents create a calm editorial style. Large headings, clear unit/topic cards and a lesson sidebar echo useful navigation patterns from the chemistry reference without copying its content. On narrow screens navigation becomes a visible compact menu and content stacks. Home offers a starting point, four-unit map, progress and language choice. Each lesson has a guiding question, scope/HL tags, brief explanations, an illustrative model or topic-specific example, assumptions and limitations, worked reasoning, a concept check with feedback, and an original written challenge with a model answer and rubric. A glossary preserves English terms beside localized explanations. Search matches lesson titles, terms and summaries in the selected language. Local progress is optional, resettable, and remains usable when browser storage fails.

Interactive SVG diagrams and accompanying numeric/text summaries use deterministic illustrative values. Provide labelled keyboard-operable controls, units, current values, reset, and explanatory text independent of colour. Required models: PPC; competitive market with shift versus movement; PED; indirect tax, subsidy and price controls; externalities; and firm costs/profit. Select models appropriate to each topic; use a contextual example/table rather than force an unrelated graph. Models state assumptions and limits, and never imply an illustrative number is empirical evidence.

Use semantic landmarks, headings and native controls; maintain visible focus and readable contrast; support keyboard navigation and reduced motion. Never make the answer or understanding depend on dragging, colour, animation, or storage. Assessment guidance distinguishes common material from HL extensions and uses original teaching examples and house-created rubrics, not official markschemes.

## Sources and coverage

Author against `docs/research/curriculum.md` and `docs/research/source-validation.md`, checking the October 2022 guide's relevant printed pages cited there. `docs/research/learning-design.md` records the reference-site observations and learning rationale. The product links to authoritative sources and notes the guide version and verification boundary; it does not distribute copyrighted guide or paper content. Translation requires meaning, mathematical signs, graph axes, and scope tags to match the English version; automated translation is not a substitute for review.

The fixed guide-derived `docs/coverage-checklist.json` enumerates required Unit 1–2 points, diagrams and calculations by stable lesson-specific ID and common/HL scope. Each point is honestly tagged taught, summary, or omitted with canonical evidence; translated overlays localize point labels and omission explanations while retaining those IDs and canonical statuses. An absent translation displays a visibly labelled English fallback. Coverage records breadth and does not claim exhaustive mastery. All interface and model controls, units, axes, dynamic summaries and explanatory wording are maintained together for all four locales by the frontend owner.
