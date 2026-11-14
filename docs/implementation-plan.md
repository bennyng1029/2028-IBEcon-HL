# Economics HL learning site Implementation Plan

> **For agentic workers:** Use superpowers:subagent-driven-development. Steps use checkboxes for tracking. Design and plan require the applicable independent review cycles before implementation; do not treat this draft as an implementation approval.

**Goal:** Deliver an original, guided four-language Economics HL learning site for Units 1–2 with an honest full-course map.

**Architecture:** Local classic scripts load a canonical English lesson dataset, three translation overlays, a pure mathematics model module and the interface in that order. The interface renders all content from this shared schema; model calculations are pure and Node-testable, while SVG and controls are browser presentation.

**Tech Stack:** HTML, CSS, classic JavaScript, SVG, Node built-in test runner. No npm install.

**Spec:** `docs/design.md`; curriculum evidence in `docs/research/`.

## Global constraints

- Relative assets and hash navigation work both at `file://` and a GitHub Pages subpath; no fetch, modules, backend, external assets or network at runtime.
- Four manual locales: `en`, `ja`, `ko`, `zh-Hant-HK`; English exam vocabulary and written answer scaffold remain visible. No browser-language detection.
- Original educational prose, data, questions, figures, feedback and rubrics; no copying, translation or close paraphrase of protected papers or guide prose.
- Lessons 1.1, 1.2, 2.1–2.12; Units 3 and 4 forthcoming. Paper 2 common material only; whole-topic HL-only 2.4, 2.10, 2.11, 2.12 and accurately tag other individual HL sections.
- Accessible native controls, keyboard support, focus, visible model values, text equivalent, model reset, responsive layout, and storage failure fallback. No dependency or speculative infrastructure.

## Exact shared data contract

Scripts load in order: `assets/js/content-en.js`, `assets/js/content-ja.js`, `assets/js/content-ko.js`, `assets/js/content-zh-hant-hk.js`, `assets/js/models.js`, `assets/js/ui.js`, `assets/js/app.js`. All files are classic scripts. English assigns `globalThis.ECON_LESSONS` to an array and also exports it with `if (typeof module !== 'undefined') module.exports = ...`. Translations initialize `globalThis.ECON_TRANSLATIONS` and assign each locale to an object keyed by lesson ID; translation scripts also export their locale object for Node checks. No HTML strings in content: render via `textContent`.

Each English lesson has exactly this shape:

```js
{
  id: '2.1', unit: 2, title: 'Demand', summary: '...', question: '...',
  scope: 'common', concepts: ['choice'], terms: [{ term: 'demand', definition: '...' }],
  sections: [{ id: 'law', heading: '...', body: ['...'], scope: 'common', limitation: '...' }],
  model: 'market', modelPrompt: '...', modelAssumption: '...', modelLimitation: '...',
  worked: { prompt: '...', steps: ['...'], conclusion: '...' },
  quiz: { question: '...', options: ['...', '...', '...', '...'], answer: 0,
          feedback: ['...', '...', '...', '...'], scope: 'common' },
  challenge: { prompt: '...', hint: '...', modelAnswer: '...', rubric: ['...'],
               command: 'Explain', marks: 4, scope: 'common' },
  coverage: [{ id: '2.1.law', point: '...', status: 'taught', evidence: 'section:law' }]
}
```

`scope` is `common` or `hl`; section, quiz and challenge scope is independently tagged. `answer` is a zero-based option index, `feedback` aligns one-to-one with options, and each feedback explains the choice. `model` is one of `ppc`, `market`, `ped`, `policy`, `externality`, `firm`, or `none`. `coverage.status` is `taught`, `summary`, or `omitted`; evidence is a section ID, `worked`, `quiz`, `challenge`, or an explanation for an omission. Coverage must contain exactly the IDs for the lesson in `docs/coverage-checklist.json`, in that order, once each. The checklist is the fixed, guide-derived acceptance inventory (point and scope); status and evidence remain canonical. Evidence for taught and summary entries references an existing section (`section:<id>`), `worked`, `quiz`, or `challenge`; omitted evidence is a nonempty explanation. Statuses must honestly distinguish instruction, compressed treatment and omissions. The matrix displays each localized point and any localized omission explanation. `challenge.prompt`, `modelAnswer`, `rubric`, and `command` are intentionally English exam scaffolds; `hint` is localized. The rest is original English text. Terms are English canonical strings; their definitions are localized.

Each translation object is keyed by lesson ID, with the same structure as the English lesson except omit `id`, `unit`, `scope`, `concepts`, `model`, `quiz.answer`, `quiz.scope`, `challenge.prompt`, `challenge.modelAnswer`, `challenge.rubric`, `challenge.command`, `challenge.marks`, `challenge.scope`, and canonical coverage status/evidence. Include `title`, `summary`, `question`, `terms` (same order and `{term, definition}` keys; `term` remains English), `sections` (same order, `{id, heading, body, limitation}`), `modelPrompt`, `modelAssumption`, `modelLimitation`, `worked` (same keys as English), `quiz` (`question`, `options`, `feedback`), and `challenge: {hint}`, plus `coverage: [{id, point, omissionExplanation}]` in canonical ID order; omissionExplanation is nonempty for omitted entries and otherwise omitted. Status and evidence come from English. Missing overlay text must visibly identify an English fallback. UI strings reside exclusively in `assets/js/ui.js` as `globalThis.ECON_UI[locale]`. Merge translations by IDs and positions without mutating English data. Locale is never inferred from the browser.

## File map and review focus

- `index.html`, `assets/css/site.css`: semantic shell and responsive visual system.
- `assets/js/content-en.js`: English lessons, tagged objectives and coverage.
- `assets/js/content-{ja,ko,zh-hant-hk}.js`: matching lesson locale overlays.
- `assets/js/ui.js`: all four locales of interface and model presentation strings, owned by Task 3.
- `assets/js/models.js`: canonical pure calculations exported as `globalThis.ECON_MODELS` and CommonJS.
- `assets/js/app.js`: navigation, rendering, localized UI, progress, search and SVG control wiring.
- `tests/content.test.js`, `tests/models.test.js`: built-in Node tests for schema/coverage and math invariants.
- `README.md`: local launch, scope, evidence boundaries, browser checks and sources.

Review focus: unavailable storage must not break learning; malformed/unknown hashes must show a safe home view; changing locale must preserve selected lesson and never infer locale; zero/boundary values must not produce NaN or misleading graph labels; graph shifts and movements must remain distinct. Test these in the responsible task, with explicit browser checks for DOM interactions.

## Tasks

### 1. English learning content

**Own:** `assets/js/content-en.js`, `tests/content.test.js`. **Consumes:** design and research. **Produces:** exact schema above and coverage matrix entries. Graphify-first reuse check: this is a new repository without a code graph; verify that before creating a canonical module and record the query or justified fallback.

- [ ] Write a Node test checking exact 14 IDs, valid scopes, nonempty original sections and feedback for all options, valid answer indexes, unique section IDs, exactly the checklist IDs in order for every lesson, valid coverage statuses/references, required HL-only topic tags, and that every lesson has a worked example and challenge. Run `node --test tests/content.test.js`; expect failure until content exists.
- [ ] Author topic-specific instruction using the research inventory, including all four externality cases, named market structures and quantitative/diagram expectations. Mark honestly any summarized or omitted guide point. Identify section-level HL extensions, and do not present HL-only material as Paper 2 content.
- [ ] Run `node --check assets/js/content-en.js` and `node --test tests/content.test.js`; expect zero exit status. Review coverage against guide page references and record unresolved gaps rather than claiming complete coverage.

### 2. Localization

**Own:** three locale scripts and translation tests in `tests/content.test.js` after Task 1 is complete. **Consumes:** exact English schema. **Produces:** `ECON_TRANSLATIONS[locale]`.

- [ ] Add a failing test that checks all 14 IDs per locale, identical section IDs and array lengths, matching English term strings, four feedback entries, matching coverage IDs and nonempty localized points and required omission explanations, and nonempty localized fields; run `node --test tests/content.test.js` and expect failure before overlays exist.
- [ ] Write localized explanations, questions, options, feedback and challenge hints. Preserve economic meaning, numerical signs, units, HL boundaries and English terms. A human language review remains a stated limitation unless actually performed.
- [ ] Run `node --check` on each locale script and `node --test tests/content.test.js`; expect zero exit status.

### 3. Models and site

**Own:** `index.html`, `assets/css/site.css`, `assets/js/models.js`, `assets/js/ui.js`, `assets/js/app.js`, `tests/models.test.js`, `tests/ui.test.js`, `README.md`. **Consumes:** English and overlay globals. **Produces:** usable local site and `ECON_MODELS` pure functions. Define each function with explicit input/output and domain in code; use finite bounded controls and return named numeric values. No model logic is duplicated in the view. Run a graphify-first reuse check and record decision; no existing implementation is expected in this new repository.

- [ ] Own all four locales in `ui.js`. Freeze and populate the complete categories: navigation and menus; units and forthcoming labels; scope and coverage statuses/fallback; search and empty states; progress, storage and reset; quiz and feedback; sources and assessment notices; all six models’ titles, controls, units, axes, current values, reset, assumptions, limitations, calculated-state summaries and explanation templates. Dynamic values must be interpolated into localized templates. Extend categories/keys only in all four locales together. Test recursive key parity, nonempty strings and every renderer’s used keys; no visible runtime copy may be hard-coded outside locale data except English exam terms/scaffolds, numeric values and symbols.
- [ ] Write failing Node tests for PPC feasibility and opportunity cost; market equilibrium and separate shift/movement; PED sign/zero denominator; tax/subsidy and binding/nonbinding controls; externality welfare gap; firm total revenue, total cost and profit. Include boundary inputs and finite outputs; assert the declared elasticity percentage-change convention and undefined zero denominators, feasible intersections, and binding versus nonbinding controls. Run `node --test tests/models.test.js`; expect failure before model module exists.
- [ ] Implement the six model families and SVG/text renderers, each with assumptions, labeled controls and reset. Choose appropriate models per topic; preserve an informative example when `model` is `none`.
- [ ] Build home/map, lesson navigation, coverage, glossary, search, locale selector, answer feedback and progress/reset. Unknown hashes return home; guarded storage errors leave the site functional. Include forthcoming Units 3 and 4; visible source and scope notices; no unsupported claim of comprehensive coverage.
- [ ] Run `node --check assets/js/models.js`, `node --check assets/js/ui.js`, `node --check assets/js/app.js`, and `node --test tests/*.test.js`; expect zero exit status. Open `index.html` from `file://` and also serve it under a non-root path if a browser is available. Check keyboard-only controls, locale switching on a lesson, all six models and reset in each locale, localized controls, units, axes and dynamic summaries, visible prediction prompt before controls are changed, each quiz's feedback, progress/reset with storage allowed and blocked, narrow viewport, unknown hash, and visible coverage/source labels. Record browser and results; if unavailable, explicitly report unverified behavior.

### 4. Independent verification and closeout

- [ ] In a fresh context run all syntax checks and tests before functional verification; independently inspect lesson and localization coverage, scope, calculations, accessibility and file/subpath behavior. Record actual command outputs and untested limitations. Do not treat schema tests as linguistic or economic accuracy proof.
- [ ] Conduct fresh synchronous plan review cycles A (completeness/feasibility) and B (architecture/assumptions) before implementation, and independent wave-level code-quality and architecture review after implementation. Resolve blockers with fresh fix and verification contexts, at most three cycles.
- [ ] Produce the required multi-step handoff before implementation and closeout artifact after review, recording scope, decisions, checks, risks and graphify status. Run `graphify update .` at closeout only if available and expected by the repository; otherwise record why it was not run.

**Browser availability:** `/usr/bin/google-chrome` and Node are present. Use Chrome headless and, if Node exposes `WebSocket`, DevTools Protocol for interaction checks without installing packages; otherwise use another already available browser-driving method and record any remaining manual checks. Review the entire created file set because the repository has no Git HEAD. In 2.11 separately enumerate perfect competition, monopoly (including natural monopoly and welfare loss), oligopoly (including payoff matrices), and monopolistic competition, their specifically required diagrams/outcomes and calculations; label any compressed coverage `summary` and missing items `omitted`.

**Review-resolution rationale:** Task 3 owns every locale of the UI and model wording because it owns the renderers and can keep keys synchronized as presentation evolves. The independent checklist fixes the required syllabus point population; canonical status and evidence prevent translations changing coverage claims. Checklist and schema tests cannot establish teaching depth or translation quality, so human economic and language review remains separate.
