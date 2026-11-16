# Guided diagram studio: approved-direction design draft

Status: approved for implementation after Cycle A recheck and independent Cycle B approval. Scope is the frozen 40 IDs enumerated in `docs/diagram-coverage-audit.md`, whose topic-by-topic numerical, economic and qualification requirements are normative. Resolve review blockers before implementation. Existing `docs/design.md` constraints continue to apply.

## Outcome and presentation

Every omitted diagram becomes an original guided studio inside its lesson: **predict → construct layers → compare → explain**. A learner chooses a finite scenario, answers an original prediction with explanatory feedback, chooses the next meaningful drawing layer from native buttons, compares initial and final states, then answers an explanation or numerical multiple-choice check with feedback for every option. An incorrect construction choice explains the error and leaves the next required layer unchanged. Reveal and reset remain available; reveal does not masquerade as completing construction. No dragging, autoplay or required free-form drawing. This is a diagram teaching experience with finite original examples, not an unrestricted simulation.

Keep the existing six calculators and their controls intact. Add the studios independently of `lesson.model`, including lesson 2.12 (`none`). Group each studio in an initially collapsed native `details` with its objective title and scope. Its initial prediction and base axes appear when opened; one studio can be studied at a time without forcing a sequential course. Each variant has its own complete four-stage exercise; selecting another resets that exercise. Locale change may reset transient exercise state (announce this in localized instructions); the selected lesson and saved completion retain their existing behavior.

A visible English exam term accompanies localized terms, with all instructional prose, axis units, curve descriptions, options, feedback and alternative text in English, Japanese, Korean and Hong Kong Traditional Chinese. Mathematical symbols and canonical identifiers stay unchanged. Keep common/HL tags per objective, especially the HL straight-line PED extension and firm material. Original numerical examples are illustrations, never empirical estimates or official examination questions.

## Locked decisions and acceptance boundaries

No dependency, build step, remote asset, network requirement, publishing or account. Classic scripts and relative assets continue working at `file://` and an HTTP subpath. Preserve all 113 coverage IDs/order and all twelve existing `summary` statuses, fourteen lesson IDs, original quizzes/challenges and six model APIs/behavior. Keep all frozen 40 entries `omitted`, with their omission explanations intact, throughout geometry, content, locale and interface drafting. Only the owned final activation task may promote them to `taught`, after fresh functional verification of rendered practice for every scenario in all four locales; attach `diagram:<full-objective-id>` evidence and remove obsolete omission fields and contradicted omission statements in all locales. On partial failure, every unverified objective stays omitted. No other coverage promotion; preserve unrelated lesson prose.

All economics and geometry belong in canonical `assets/js/models.js`; all SVG construction/scaling belongs in canonical `assets/js/app.js` `svgGraph` (or its extracted-in-place helpers). Extend the existing owners rather than add a parallel engine. Add no content module: lesson-owned `diagrams` in existing English/locale files keeps coverage resolution and translation ownership together and avoids a second overlay system. Geometry is finite scenario dispatch, not parsed formulas or executable content. Existing calculator geometry output remains valid and unchanged.

The named audits and original design/plan are exact targeted document reads; graph navigation is unnecessary for them. Reuse audit graphify queries already located canonical ownership. Before implementation, implementers run `graphify query "diagram renderer model curriculum objective coverage"` and inspect the named owners; if unavailable or unable to reveal schema details, record that fact and use exact named-file reads. There is no reason to search for a separate mathematical renderer.

## Shared contract (freeze before dispatch)

Each English lesson gains `diagrams: []` (empty allowed). Each studio owns exactly one frozen coverage ID; After final activation, `coverage.evidence` is `diagram:<full-objective-id>`. Before activation, coverage remains omitted and diagram payload validation is independent of coverage status. `diagram.id` equals that full ID. Translations use aligned `diagrams` arrays with identical `id`/scenario/layer/choice keys; metadata is copied from canonical English, not translated. Extend schema validators explicitly.

```js
{
 id: '2.7.tax_diagram', scope: 'common', title: '...', introduction: '...',
 scenarios: [{
  key: 'tax2', title: '...', assumption: '...', limitation: '...',
  baseDescription: '...', // localized equivalent of initially visible base geometry
  labels: { q: 'Output per period (Q)', p: 'Price per unit (P)', demand: 'Demand (D)' },
  prediction: { question: '...', options: ['...', '...'], answer: 0, feedback: ['...', '...'] },
  construction: [{ key: 'supplyShift', description: '...', // localized equivalent of this layer only
    instruction: '...', choices: [
    {key: 'supplyShift', label: '...', feedback: '...'},
    {key: 'demandShift', label: '...', feedback: '...'}
  ], answer: 'supplyShift' }],
  comparison: '...', explanation: { question: '...', options: ['...', '...'],
    answer: 0, feedback: ['...', '...'] },
  extension: null // or {scope:'hl', question, options, answer, feedback}; localized original quantitative check
 }]
}
```

`models.guided(id, scenarioKey)` returns immutable-by-convention pure geometry and calculated values. Only registered ID/scenario pairs are accepted; unknown pairs return `null`. All implemented scenarios use finite coordinates and explicit positive plotting domains. No locale argument. Return:

```js
{ panels: [{ key:'main', xMax:10, yMax:12, xLabel:'q', yLabel:'p',
  curves:[{key:'demand', layer:'base', points:[[0,10],[10,0]]}],
  points:[{key:'equilibrium',layer:'intersection',x:5,y:5}],
  regions:[{key:'revenue',layer:'area',points:[[0,4],[4,4],[4,6],[0,6]]}],
  arrows:[{key:'adjustment',layer:'adjustment',points:[[6,4],[5,5]]}],
  guides:[{key:'qGuide',layer:'intersection',points:[[5,0],[5,5]]}],
  nodes:[], edges:[]
 }], values:{quantity:4,buyerPrice:6,sellerPrice:4,revenue:8},
 layers:['supplyShift','intersection','area'] }
```

All `key`/`xLabel`/`yLabel` values reference `scenario.labels`. `base` is initially shown; every other geometry layer belongs to exactly one ordered construction step. `layers` equals construction keys in order; every step must add visible meaningful geometry. Multi-point curves are sampled deterministically with analytic invariants tested; do not connect across singularities. Areas are closed polygons, independently checked against analytic values. Guides are dashed and have legend text; arrows have distinct arrowheads. SVG tick values are numeric. Panels share an SVG renderer and separately labelled axes. For flows only, panels add `axisFree:true`, positive layout bounds, `nodes:[{key,x,y,width,height,layer}]` and `edges:[{key,from,to,points,layer}]`; edges have directed arrowheads with distinct non-overlapping real/money paths. Node and edge keys also resolve in labels. Flow coordinates are layout positions, not economic quantities. Use one geometry schema, not one chart type per topic.

`svgGraph(parent, kind, values, type, guidedView)` remains backward compatible for its existing four arguments. With `guidedView={geometry,labels,baseDescription,layerDescriptions,visibleLayers,comparison}` it renders supplied panels through the same coordinate/primitive helpers. `comparison` is `false` during construction and `true` only after construction/reveal; comparison renders base and final side by side with localized headings from UI. Rendering twice must not mutate geometry. Models do not depend on content, DOM or UI strings. `guidedStudio(parent, diagram)` in app owns transient scenario index, prediction selection/feedback, built layer count, revealed flag and explanation selection/feedback. It calls `models.guided` and passes localized labels and descriptions to `svgGraph`; it performs no economics calculations. `layerDescriptions` maps each construction key to its localized `description`: compose `baseDescription` plus only descriptions whose layers are visible. Comparison/reveal supplies the complete composition; the initial comparison panel uses base only. Overlays mirror these exact fields and construction keys in every locale.

Overlay must become path-aware for `diagrams`: preserve `id`, `scope`, `key`, numeric `answer` and string construction `answer`; translate every other instructional string including prediction/explanation questions and choices. Existing globally protected `prompt` exam scaffold logic must not accidentally retain diagram text in English. Validate exact metadata, array lengths, correct-answer equality and label-key sets across locales. Do not silently let metadata or correct answers come from overlays. All overlay leaves are required here; fallback remains a visible safety behavior elsewhere, and tests require no fallback in completed studios.

## Scenario inventory and actual diagram evidence

The following keys are canonical. Every scenario includes prediction, ordered construction, comparison, explanation, localized base and per-layer descriptions and labelled geometry. Each line adopts all acceptance numbers/qualifications for that ID in the coverage audit; these are not placeholders permitting a text-only substitution.

| Frozen objective ID | Finite scenario keys and required visible construction |
| --- | --- |
| 1.1.ppc_choice_diagram | `choice`: frontier; A/B/C/D; B→C opportunity-cost guides |
| 1.1.ppc_growth_diagram | `actual`, `capacity`: interior→frontier arrow versus old/new frontier |
| 1.1.ppc_cost_diagram | `constant`, `increasing`: equal X increments, Y sacrifices; smooth bowed frontier |
| 1.1.circular_flow_diagram | `fiveSector`: two-sector core real/money arrows, finance, government, foreign leakages/injections |
| 2.1.curve_diagram | `demand`: D, schedule points and own-price guides |
| 2.1.shifts_diagram | `movement`, `increase`: along D0 versus D0→D1 at fixed price |
| 2.2.curve_diagram | `supply`: S, schedule points and guides |
| 2.2.shifts_diagram | `movement`, `increase`: along S0 versus S0→S1 at fixed price |
| 2.3.equilibrium_diagram | `crossing`: D/S, crossing E and P*/Q* guides |
| 2.3.changes_diagram | `shortage`, `surplus`, `demandIncrease`, `supplyIncrease`: quantities/adjustment arrows and new equilibria |
| 2.3.surplus_diagram | `surplus`: CS and PS separate triangles, total 25 |
| 2.5.ped_diagrams | `relative`, `perfectElastic`, `perfectInelastic`, `unit`: common reference point; polar cases; sampled hyperbola |
| 2.5.ped_line_hl | `segments`: upper/mid/lower regions with elasticity 4/1/0.25 |
| 2.5.ped_revenue_diagram | `elastic`, `inelastic`, `unit`: initial/final TR rectangles, local unit-point caveat |
| 2.5.yed_engel_diagram | `incomeElastic`, `incomeInelastic`, `inferior`: income vertical, quantity horizontal; illustrated positive ranges |
| 2.6.pes_diagrams | `relative`, `perfectElastic`, `perfectInelastic`, `unit`: common-point comparison and origin ray |
| 2.7.ceiling_diagram | `binding`: price line, Qs/Qd, shortage and actual transactions |
| 2.7.floor_diagram | `privateSales`: price line, Qd/Qs, surplus and private sales; no invented public purchase |
| 2.7.tax_diagram | `tax2`: shifted supply, buyer/seller wedge, revenue rectangle, DWL |
| 2.7.subsidy_diagram | `subsidy2`: effective supply, receipts wedge, public expenditure rectangle, DWL |
| 2.8.social_optimum_diagram | `optimum`: MSB/MSC, optimum guides, net-benefit area; compare Q4/Q6 |
| 2.8.negative_production_diagram | `negativeProduction`: MPB=MSB/MPC/MSC; Qm/Q*, external-cost wedge and loss |
| 2.8.negative_consumption_diagram | `negativeConsumption`: MPB/MSB/MPC=MSC; overconsumption and loss |
| 2.8.positive_production_diagram | `positiveProduction`: MPC/MSC/MPB=MSB; underproduction and loss |
| 2.8.positive_consumption_diagram | `positiveConsumption`: MPB/MSB/MPC=MSC; underconsumption and loss |
| 2.8.pigouvian_diagram | `optimalTax`: negative-production baseline, corrective supply=MSC, wedge/revenue, loss removed |
| 2.8.carbon_diagram | `industryTax`: industry output, private/social costs, tax wedge and revenue; emissions caveat |
| 2.8.subsidy_diagram | `producerSubsidy`: positive-production baseline, effective supply=MSC, price/receipt wedge, expenditure |
| 2.8.regulation_diagram | `optimalCap`, `weakCap`: quantity caps 4/4.5, removed/remaining welfare loss; no fictitious supply shift |
| 2.8.education_diagram | `effective`, `partial`: MPB shifts to MSB fully/partly; private response conditional; MSB fixed |
| 2.11.perfect_competition_diagram | `priceTaker`: market/firm panels, common P6, horizontal AR=MR and MC |
| 2.11.perfect_profit_diagram | `profit`, `normal`, `loss`: MR/MC/AC; rectangles 8/0/−8 |
| 2.11.perfect_equilibrium_diagram | `longRun`: market/firm panels; MR=MC=min AC; P=MC |
| 2.11.monopoly_diagram | `profit`, `normal`, `loss`: AR/MR/MC/AC; MR=MC→AR price→profit rectangle |
| 2.11.monopoly_welfare_diagram | `benchmark`: same D/MC, Q4 versus Q8, DWL triangle 8 |
| 2.11.natural_monopoly_diagram | `unregulated`, `marginalCostPrice`: declining LRAC/MC/D/MR; profit4 versus loss12 |
| 2.11.oligopoly_diagram | `cartel`: aggregate joint-profit-maximizing D/MR/MC; joint Q4/P6; stability caveat |
| 2.11.monopolistic_profit_diagram | `profit`, `normal`, `loss`, `longRun`: SR outcomes; LR AR/AC tangency with excess capacity |
| 2.11.monopolistic_demand_diagram | `substitutes`: curves crossing common Q4/P6; PED1.5 versus3 |
| 2.12.circular_flow_diagram | `inequality`: two household groups, factors/income80/20, saving20/2, taxes/transfers/finance and qualified asset feedback |

There is no frozen common-resource diagram ID among these 40. Do not invent one or reclassify another topic. Existing common-resource prose remains; where comparing its policies, do not equate private property/quotas/permits/taxes or imply an education demand shift mechanically solves an open-access resource. Any additional diagram would require a separate scope decision.

## Economic construction details that must survive implementation

Use the audit equations for linear examples and label coincident curves together. For bowed PPC use Y=10−X² on 0≤X≤√10, with exact teaching points (0,10),(1,9),(2,6); this is concave as a function of X. Relative PED curves at Q4/P6 can be P=8−0.5Q and P=14−2Q; point magnitudes3 and0.75. Relative PES curves at Q4/P4 can be P=2+0.5Q and P=2Q−4 on positive visible domains; magnitudes2 and0.5. Hyperbola P=12/Q uses positive Q only. Engel variants connect only positive-income sample ranges with the stated percentage convention.

For short-run competitive cases use MC=2+Q, variable cost VC=2Q+Q²/2 and AC=2+Q/2+F/Q; F=0,8,16 gives AC4/6/8 at Q4 and AVC4, so the loss case covers variable cost. Competitive long-run uses the same F=8 cost family; min AC=MC=6 at Q4. For monopoly-like short-run cases use MC=AVC=2 and AC=2+F/Q, F=8,16,24 to obtain AC4/6/8 at Q4, maintaining MR10−2Q and D10−Q. Natural monopoly is F12 with AC2+12/Q. For monopolistic competition long-run use AR=10−Q, MR=10−2Q, TC=32/3+2Q+Q²/2, AC=32/(3Q)+2+Q/2 and MC=2+Q. At Q=8/3: AR=AC=22/3, MR=MC=14/3, AR′=AC′=−1, MC crosses MR from below; minimum AC occurs at Q=√(64/3)>8/3. Sample only positive output, preserve tangency and distinguish AR price from MR. All fixed costs are per illustrated period; AC is per unit. Do not reuse TR/TC calculator geometry as MR/MC.

Partial education uses MPB=9−Q, fixed MSB10−Q and MSC=Q: Q4.5, remaining loss0.25; compare with initial Q4/loss1 and full response Q5/loss0. Negative-production weak cap Q4.5 similarly leaves loss0.25. The two mechanisms remain geometrically distinct. Flow diagrams use distinct sector nodes and actual arrow endpoints; savings connect to finance, taxes to government, imports to foreign sector, injections reverse toward domestic activity. Real goods/factors arrows oppose money payment arrows; redistribution flow must distinguish transfers from factor incomes and stocks from flows.

## Access, layout and evidence

SVG has unique IDs per rendered studio/scenario/panel and comparison role (`initial` or `final`), `title`/`desc`, role img, visible axes/units, labels and legend. Each geometry item has a stable `data-geometry` key and layer attribute; regions use different hatch patterns, curves use dash styles and names, and points use shapes. Colour is supplementary. Legends and complete descriptions remain HTML and reflect visible layers/state; provide full final description separately on reveal/comparison. Side-by-side panels stack on mobile. SVG uses a sufficiently large viewBox with deliberate label placements; bounded local horizontal scrolling is acceptable for complex flows with a visible localized instruction. Page itself must not overflow. Preserve readable text rather than shrinking five-sector labels until illegible.

Native scenario selects, radio groups with legends, layer buttons, check/reveal/reset and details must be keyboard usable; focus stays on the initiating control, and a polite live region announces feedback/layer progress. Reset clears both question attempts and drawing layers. Prediction may be skipped via explicit reveal, but reveal communicates that construction was shown. Compare makes the base/final distinction explicit; construction adds each named geometry group rather than merely advancing a text counter.

Coverage and README describe guided recognition and construction; this evidence does not establish independent drawing mastery. Completion evidence combines deterministic mathematical tests, content/translation parity checks, and actual Chrome DOM/SVG interactions at file and subpath URLs. Schema validity does not prove translation quality or diagram legibility. Record visual inspection of the most complex graph/flow in every locale at narrow and desktop sizes; state any remaining human linguistic-review limitation honestly.

## Common versus HL quantitative practice

The fixed checklist, research and existing common/HL distinctions remain authoritative. Numeric coordinates may illustrate a common diagram without turning an HL assessed calculation into common practice. For common surplus, intervention and externality objectives, prediction/construction/explanation stay qualitative and usable independently: identify who pays, direction, welfare region and assumptions. Their numerical calculation exercise belongs in optional `scenario.extension` with canonical `scope:'hl'` and the question/options/answer/feedback shape above. English always supplies `extension` as null or that object; overlays mirror it with translated prose and protected scope/answer. HL studios may use quantitative explanation directly. Renderer places the optional extension in a clearly labelled HL `details`; do not require it to complete the common sequence. Display illustrative coordinates and per-unit wedge labels in common views; derived numerical area/revenue arithmetic is explained inside the HL extension. Internal numeric/geometry tests remain mandatory for every scenario regardless of visible scope. Freeze per-check scope against checklist before content acceptance, and do not relabel a shared common objective HL to avoid this distinction.
