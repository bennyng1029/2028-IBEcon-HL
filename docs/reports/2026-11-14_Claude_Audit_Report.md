# Claude audit report — 14 November 2026

**Type:** Report-only audit. No content, code or test files were changed.
**Scope:** `assets/js/content-en.js` (all 14 lessons), the `ja`, `ko` and `zh-Hant-HK` overlays, `assets/js/ui.js`, `assets/js/models.js` and `assets/js/app.js`.
**Method:** Parallel independent reviews. Each one read every field of its assigned files and recomputed every number. The translation reviews aligned each locale with English field by field using scripts, then read every pair.
**For the writing agent:** Line numbers refer to the files as of commit `fe4d286`. Verify each item before editing. Severity scale:
- **High:** factually wrong, or would cost exam marks.
- **Medium:** misleading, incomplete, inconsistent, or a coverage claim the body does not support.
- **Low:** wording or clarity.

---

## 1. Summary

- **No High-severity economics errors were found** in any lesson or locale.
- **Numbers are correct.** Every worked example, quiz and in-text number was recomputed and is correct.
- **Quiz keys are correct.** All 14 quizzes mark the correct option, the distractors are unambiguously wrong, and the feedback matches. No translation changes which answer is correct.
- **Model maths is correct.** The `models.js` functions are mathematically correct: tax/subsidy wedge, ceiling/floor, externality and welfare loss, PED, and firm profit.
- **Scope labels match the guide.** 2.4 and 2.10–2.12 are HL-only.
- **Tests pass.** `node --test tests/*.test.js` passes 19 of 19.
- **Translations are structurally complete.** No unexpected English fallback, no changed numbers or directions, and no Simplified characters in zh-Hant-HK.

The main weaknesses are:
1. **Coverage over-claims.** Several points are marked "taught" that the lesson body does not actually teach. The largest gap is 2.11.
2. **Thin core treatment** of some common-syllabus material: price controls, and specific vs ad valorem tax.
3. **Mismatches between models and lessons.**
4. **Site-coverage notes inside student text.**
5. **Terminology inconsistency in translations,** with one meaning reversal in zh-Hant-HK.

---

## 2. English content — lessons 1.1, 1.2, 2.1, 2.2, 2.3 (lines 1–747)

### Medium

**1. Line 495 (2.2): "market supply is 10 … market supply is 15"**
- **Problem:** The previous sentence says quantity supplied is one point on the supply curve. The text then calls a single point "market supply", which undoes the distinction just taught. The worked example at lines 530–531 is correct.
- **Fix:** Change to "market quantity supplied is 10 / 15".

**2. Line 637 (2.3): "A demand increase with supply fixed normally raises both equilibrium price and quantity"**
- **Problem:** "Supply fixed" can be read as perfectly inelastic supply. In that case quantity does not rise.
- **Fix:** "with the supply curve unchanged (no shift in supply)".

**3. Lines 646 and 648, coverage 734–737 (2.3): "the intersection of marginal benefit and marginal cost maximizes their sum"**
- **Problem:** Coverage marks "maximum social surplus and MB = MC" as taught. The body never states demand = MB or supply = MC, and never names social (community) surplus. "Their sum" has an unclear referent.
- **Fix:** Add: "Demand shows marginal benefit and supply shows marginal cost; at their intersection social surplus (consumer + producer surplus) is maximized."

**4. Line 32, coverage 137–140 (1.1): "Needs and wants can exceed available resources, so sustainability asks…"**
- **Problem 1:** Needs and wants are never defined or contrasted, but coverage marks them as taught.
- **Problem 2:** The "so" links scarcity to sustainability as if one caused the other.
- **Problem 3:** "Can exceed" is weaker than the IB framing of unlimited wants against limited resources.
- **Fix:** Define needs and wants. State that unlimited wants against limited resources is what causes scarcity. Put sustainability in its own sentence.

**5. Line 636 and lines 669–675 (2.3, scope "common"): linear equations "Qd=100−10P and Qs=20+10P"**
- **Status:** Confirmed by the syllabus pass in §7.1. Linear demand/supply functions appear nowhere in the October 2022 or May 2020 guide.
- **Problem:** An out-of-syllabus technique is presented as the core common method. This contradicts the authors' rule in `curriculum.md` that enrichment must be labelled optional.
- **Fix:** Replace it with a schedule or graph-reading example, or tag it "Enrichment — not in current guide".

**6. Lines 73–76 vs `models.js:6` (1.1): PPC model**
- **Problem:** The lesson teaches a frontier from (0,10) to (5,0), where 1 table costs 2 baskets. The linked model uses x+y=10, a 1:1 cost, with generic axes. The model is also straight-line only, so it cannot show the bowed (increasing-cost) case the text describes.
- **Fix:** Align the model with the lesson, or tell students the model uses a different constant 1:1 trade-off.

**7. Line 507 (2.2): "Joint products can move together instead."**
- **Problem:** Too vague to teach joint supply. The terms "competitive supply" and "joint supply" are never named, but coverage 593–596 claims "related goods" as taught.
- **Fix:** Name both. For example, beef and leather in joint supply: a higher beef price raises beef output and shifts leather supply to the right.

### Low

**8. Line 252:** The phrase "whether the subsidy is fair" refers to a subsidy the scenario never mentions; the scenario describes a fare cut.

**9. Line 54:** "A bowed frontier" does not say which way it bows. Use "bowed outward (concave to the origin)".

**10. Line 43:** "A free good has no opportunity cost only where it is sufficiently abundant" is a confusing construction. Use "A free good is so abundant that using it has no opportunity cost."

**11. Line 506:**
- "Cheaper flour or better ovens lowers" should be "lower".
- The expectations example never states the direction of the shift. Add "shifting current supply left".

**12. Line 637:** "It allocates resources toward activities receiving spending" is awkward. Use "Resources move toward goods consumers spend more on, where profits rise."

**13. Line 648:** "relevant information" is non-standard. Use "perfect information (and no market power)".

**14. Line 232:** "Later thinkers studied utility…; Say…" Say (c. 1803) predates the marginalists (1870s), so "Later" puts them in the wrong order.

**15. Lines 43–44 and 67:** Factor rewards are never paired with their factors:
- land – rent
- labour – wages
- capital – interest
- entrepreneurship – profit

**16. Lines 384, 525 and 666:** The model assumption "stable demand and supply" sits next to a prompt that asks students to shift the curves.

**17. Lines 345 and 365:** "complement", "normal good" and "inferior good" are used but have no glossary entries.

---

## 3. English content — lessons 2.4, 2.5, 2.6, 2.7 (lines 748–1371)

All numbers checked:
- 40%→75%
- PED −2 with total revenue $1,000→$880
- YED 2 and −0.5
- 206
- PES 0.5
- 530
- Ceiling and floor 70/50
- Tax: Ps $3, Pb $5, Q 50, revenue $100
- Subsidy: Pb $3, Ps $5, Q 70, spending $140

### Medium

**1. Lines 1038–1040 (coverage 2.5.ped_calculation "taught"):** "Calculate PED, price, quantity or total revenue"
- **Problem:** The lesson never solves for a missing price or quantity from a given PED.
- **Fix:** Add a reverse example, or mark the point "summary".

**2. Line 925:** "To recover missing values, multiply elasticity by the given percentage change"
- **Problem:** This is only valid when solving for %ΔQ. A missing %ΔY or %ΔP requires dividing. Coverage 2.5.yed_calculation (1055–1058) claims "income or quantity" as taught.
- **Fix:** "%ΔQ = YED × %ΔY; %ΔY = %ΔQ ÷ YED", plus an example.

**3. Lines 1182–1185 (2.6.pes_calculation):**
- **Problem:** No missing-price-change example.
- **Fix:** Add one, or mark the point "summary".

**4. Line 1113 (2.6 modelPrompt):**
- **Problem:** The prompt asks about shifting non-price determinants and does not involve supply elasticity. The linked generic market model only shifts demand.
- **Fix:** Make the prompt elasticity-focused. Supply Q=P passes through the origin, so PES = 1 everywhere; ask students to compare %ΔQs with %ΔP after a demand shift.

**5. Line 1231:** "An indirect tax raises suppliers' costs and shifts supply upward"
- **Problem:** This describes a specific tax only. Ad valorem tax (a pivot, with a widening wedge) is never mentioned.
- **Fix:** Distinguish the two.

**6. Line 1222 vs lines 1254–1255:**
- **Problem:** The common "Price controls" section is one generic sentence. The qualitative consequences for stakeholders appear only in the HL section: queues and non-price rationing, informal markets, lower quality, government storage of surplus, and waste.
- **Fix:** Move the qualitative content into the common section, with examples such as rent control, agricultural floors and the minimum wage.

**7. Line 1255 (floor calculation):**
- **Problem:** It stops short of the HL stakeholder figures it implies.
- **Fix:** Add:
  - government spending $5×20 = $100;
  - producer revenue $240 → $350;
  - for the ceiling, producer revenue $240 → $150.

**8. Lines 786–789 and 866–868 (2.4.objectives includes "Profit"):**
- **Problem:** Profit maximisation is never stated as the baseline objective.
- **Fix:** Add one sentence.

**9. Lines 776–777 vs coverage 842–845:**
- **Problem:** The body says "adequate" or "enough" information. The rational-consumer assumption in IB is *perfect* information.

### Low

**10. Line 787:** "satisfactory rather than maximum profit" is clumsy. Name it: "a satisfactory level of profit (satisficing)".

**11. Line 789:** "survival still requires financing costs" is unclear. Use "revenue that covers costs".

**12. Lines 776–777:** The two paragraphs repeat each other. Merge them.

**13. Line 903:** "buyers accept the market price but none above it" is garbled. State "PED = ∞". Optionally, describe unit-elastic demand as a rectangular hyperbola.

**14. Line 913:** "Before that price rise…" refers back to an example in another section. Restate the example.

**15. Line 935:** The explanation of the PED change along the line covers only quantity. Add the price-base half.

**16. Lines 1093–1094:**
- The PES degrees are stated twice.
- Add "PES = 1: any straight supply line through the origin."

**17. Line 1137:** "not necessarily a negative value" implies negative PES is sometimes expected.

**18. Line 1214:** The subsidy definition is hard to parse.

**19. Line 1232:** "It is the wedge … that matters for incidence"
- **Problem:** Incidence is determined by relative PED and PES, not by the wedge itself.

**20. Lines 1231 and 1233:** "per-unit amount times the quantity traded" is said twice.

**21. Line 1273:** "Some successful buyers save $1" — every buyer who obtains the good saves $1.

**22. Line 1257:** The cafeteria-nudge sentence is tacked onto the subsidy calculation.

---

## 4. English content — lessons 2.8–2.12 (lines 1372–2149)

All numbers checked:
- Externality worked example: −2
- Welfare loss: ½×20×6 = 60
- $1,000 vs $600, and $6 per household
- Firm table: profits −6/−1/3/1; MR/MC 10/6 and 8/10; AR $11, AC $9.50, profit $3
- Payoff matrix: Nash equilibrium at (Low, Low)
- Concentration ratio: 80%
- Asset income: $2,000 a year, $166.67 a month, total $2,166.67; wealth $52,000

### Medium

**1. Line 1840 (coverage 2.11.perfect_run, "taught"):**
- **Problem:** Shut-down price (P = min AVC) and break-even price (P = min ATC) are never named. The long-run condition omits P = min ATC.
- **Fix:** State the shut-down price and the break-even price. State that in the long run P = MC = min ATC.
- **Revised after the syllabus pass (§7.1):**
  - The guide (pp. 31–33) does not list a shut-down or break-even rule.
  - `source-validation.md` already says the guide does not establish one.
  - So treat the shut-down and break-even terms, and the existing "cover variable cost" sentence at line 1840, as **optional enrichment** and label them that way.
  - The required wording is "abnormal profit, normal profit, losses" and "allocative efficiency when P = MC". Keep the long-run P = MC = min ATC statement.

**2. Lines 1840, 1850 and 1852:**
- **Problem:** "Allocative efficiency" (P = MC) and "productive efficiency" (minimum ATC) never appear as terms. Coverage 2.11.monopoly_outcomes (1984) and monopolistic_outcomes (2026) claim inefficiency as taught.
- **Fix:** State that perfect competition is allocatively and productively efficient in the long run, and that monopoly and monopolistic competition are not.

**3. Line 1826 (coverage 2.11.structures, "features"):** Missing features:
- high barriers to entry for oligopoly;
- "no close substitutes" for monopoly;
- perfect information and resource mobility for perfect competition;
- a list of barrier types: legal, economies of scale, brand loyalty, control of resources.

**4. Lines 1862–1864 (coverage 2.11.oligopoly_behavior, "inefficiency"):**
- **Problem:** Not discussed.
- **Fix:** Add that a collusive oligopoly behaves like a monopoly: P > MC, restricted output, and a welfare loss.

**5. Lines 1426 and 1429 (coverage 2.8.common_resources, "commons tragedy"):**
- **Problem:** The mechanism is taught, but the term "tragedy of the commons" never appears.
- **Fix:** Name it.

### Low

**6. Lines 1406, 1441, 1852 and 2083:** Notes about the site's own coverage are written into student-facing text, for example "No four-case set of plotted diagrams is supplied here." Line 1441 is a broken sentence. Move these to a separate "diagram not yet available" note.

**7. Lines 1405 and 1473:** "cost-side convention used here" hints that another convention exists. IB is simply MSC < MPC for a positive production externality.

**8. Lines 1416 and 1452:** The −$2 social net benefit assumes no external benefit (MSB = MPB). State this.

**9. Line 1417:** "external-cost rectangle" — the area between MSC and MPC is generally a parallelogram.

**10. Line 1427:** "cleaner research" is unclear.

**11. Line 1472:** "third-party health protection adds to the recipient's private benefit" can be read as the recipient's own benefit rising.

**12. Lines 1616 and 1619:** The "direct provision or contracting, financed by tax" clause is duplicated.

**13. Line 1738:** The $300 break-even premium implicitly assumes a 50/50 mix of risk types. State this.

**14. Lines 1730, 1727 and 1767:**
- The section limitation is too narrow.
- "honour" and "honor" are mixed.

**15. Line 1863:** "dominant strategy" and "prisoner's dilemma" are never named.

**16. Lines 1828 and 1936:**
- "Price maker" never appears in the body.
- The coverage evidence points to section:power, but price-taking is taught in section:structures.

**17. Line 1837:** "when the relevant conditions hold" is vague.

**18. Line 1896:** The quiz feedback is awkward.

**19. Line 2081:** "Firms' spending on factors is therefore not distributed equally merely because markets clear" is confusing.

**20. Lines 2054–2083:** The lesson is titled "equity", but equity is never contrasted with equality.

---

## 5. Models, UI and site-wide

**1. Medium — price ceiling/floor model (`app.js`, `models.js` policy):**
- **Problem:** The size of the shortage or surplus (excess demand or excess supply) is never displayed. Only the traded quantity is shown.

**2. Low — PED model:**
- **Problem:** The model accepts inputs where price and quantity move in the same direction (a positive "PED") with no warning. There is no demand curve on the graph.

**3. Low — UI label `frontier` = "Frontier Y":**
- **Problem:** Ambiguous. Use "Good Y on the frontier".

**4. Low — footer:**
- **Problem:** The text says "The October 2022 guide is the baseline", but the link goes to the IB subject brief, not the guide.

**5. Low — `app.js:9` `label()`:**
- **Problem:** It uses an ASCII ": " separator. CJK locales would expect a full-width "：".

**6. Low — all 14 challenges are "Explain · 4":**
- **Problem:** There is no variety of IB command terms or mark values, so practice is not exam-like.

---

## 6. Translations

### 6.1 zh-Hant-HK (`content-zh-hant-hk.js`)

**1. Medium (meaning reversed) — line 173 (1.2):**
- **Text:** 「先以數據檢驗，考慮其他成因，再把相關性視為因果。」
- **Problem:** It reads as "…then treat correlation as causation."
- **Fix:** 「先以數據檢驗預測，並考慮其他可能成因，才可判斷相關是否代表因果。」

**2. Medium — 供給 vs 供應:**
- **Problem:** 供給 appears about 60 times, including the titles at lines 356 and 816, 供給彈性, and quiz options. The UI uses 供應. HK/HKDSE usage is 供應.
- **Fix:** Standardise on 供應.

**3. Medium — 財 / 財貨 for "goods":**
- **Locations:** lines 47, 51, 65, 66, 88, 258, 262, 280, 284, 293, 346, 390, 432, 454, 486, 488, 700, 843, 1228, 1232 and 1245.
- **Problem:** The UI uses 商品. HK usage is 物品.

**4. Medium — "social optimum":**
- **Problem:** The lessons use 社會最優 (lines 1076, 1084, 1113) and 社會有效率產出 (line 1082). The UI uses 社會最適數量.
- **Fix:** Use one HK term, e.g. 社會最佳產量.

**5. Medium — "shift":**
- **Problem:** The lessons use 移位 (lines 278 and 324). The UI uses 需求轉移 / 轉移後需求.
- **Fix:** Unify.

**6. Medium — "binding":**
- **Problem:** Line 932 uses 有效price ceiling / 有效floor, which collides with 有效率 ("efficient"). Elsewhere the text uses 具約束力 / 無約束力.
- **Fix:** Unify.

**7. Low:**
- line 607 「存續仍要籌措成本資金」
- line 864 「比…缺乏彈性」
- line 49 (the curve "uses workers")
- line 1084 run-on sentence
- line 924 subsidy definition
- line 1618 「必須」 should be 「必定」
- line 1364 extra 「的關係」
- line 37 lower-case "land"
- lines 950, 1433 and 1537: 意外影響 should be 非預期影響; 利得 should be 回報 / 得益
- ui.js: 'SL/HL共通' should be 'SL/HL共同'; 「調整控制前」 should be 「移動滑桿前」

### 6.2 Japanese (`content-ja.js`)

**1. Medium — 余剰 used for both excess supply and consumer/producer surplus:**
- **Locations:** lines 486, 487, 528, 533, 932, 962 and 986.
- **Fix:** Use 超過供給 for market surplus and 超過需要／品不足 for shortage.

**2. Medium — line 932: 「均衡以下の拘束的price ceiling…均衡以上の拘束的floor」:**
- **Problem:** 以下/以上 include the equilibrium price itself, where a control does not bind.
- **Fix:** 均衡より低い／より高い.

**3. Medium — line 941: 「通常より多く負担する」:**
- **Problem:** Reads as "more than normal".
- **Fix:** 「通常は負担の大きな部分を負う」.

**4. Medium — line 605: 「最大利潤だけでなく」:**
- **Problem:** The English says "rather than" maximum profit; the Japanese says "as well as".
- **Fix:** 「最大利潤の代わりに」.

**5. Medium — line 1412: 異常利潤:**
- **Problem:** Non-standard term.
- **Fix:** Keep "abnormal profit" in English or use 超過利潤.

**6. Medium — line 1434: 発覚:**
- **Problem:** Suggests the cartel being exposed. The English means members detecting each other's cheating.
- **Fix:** 抜け駆けの検知. Also correct 「得できる」 to 「得をできる」.

**7. Medium — line 1595: 清算 for "markets clear":**
- **Fix:** 需給が一致（均衡）.

**8. Medium — ui.js `taught` = 学習済み:**
- **Problem:** Confused with progress or completion.
- **Fix:** 解説あり / 掲載済み.

**9. Medium — inconsistent terms:**
- per-unit tax: 一単位税 / 単位税 / 単位subsidy
- own price: 自己価格 vs 財自体の価格
- spare capacity: 余剰能力 vs 遊休能力
- initial-value method: 初期値法 vs 当初値 (UI)
- frontier: 境界 vs フロンティア (UI)

**10. Low:**
- line 426, ungrammatical quiz feedback
- line 1241: 「を知らせても」 should be 「に知らせても」
- lines 80, 86, 398, 595 and 720 (hedge moved)
- line 709 (劣等)
- line 1096 (run-together text)
- line 1101 (逆効果 is too strong)
- lines 980 and 988: 合法価格 should be 法定価格
- lines 950–951
- ui.js `fallback` and `notice` (「ガイド」 is missing)

### 6.3 Korean (`content-ko.js`)

**1. Medium — 수입 means both "imports" and "revenue":**
- **Locations:** line 1435 (2.11), plus lines 59, 696 and 698.
- **Fix:** Use 수입품 / 해외 수입 for imports and 총수입 for revenue.

**2. Medium — 잉여 used for excess supply (lines 487, 962):**
- **Problem:** It collides with 소비자 잉여.
- **Fix:** Use 초과공급. Also unify 부족 and 초과수요.

**3. Medium — line 284: 소득 효과:**
- **Problem:** This is the technical term for the income effect of a price change, but the line is about an income change shifting demand.
- **Fix:** 「소득 변화가 수요에 미치는 영향」.

**4. Medium — line 370, MC definition:**
- **Problem:** Ambiguous.
- **Fix:** 「총비용의 증가분」.

**5. Medium — line 182, Smith:**
- **Problem:** 「분권화 시장의 조정을 주장했다」 can read as "argued for regulating markets".

**6. Medium — ui.js `point` = 강의 요점:**
- **Fix:** 교육과정 항목.

**7. Medium — UI and lesson terms differ:**
- 외부효과 vs 외부성
- 사회적 한계비용 vs 한계사회비용
- 변동 vs 가변비용
- 가격 상한 vs 최고가격

**8. Medium — ui.js `notice`:**
- **Problem:** Reads as a vague admission of errors.
- **Fix:** 「학습 범위 표에 요약·누락 항목이 표시되어 있습니다.」

**9. Low — hedges dropped:**
- **Locations:** line 47 (PPC outside point), lines 942 and 978, 2.9, 2.11 and 2.6.
- **Problem:** "may/can" becomes definite, or definite becomes "may".

**10. Low — line 1597:**
- **Problem:** "fairness" was rendered as "unfairness".

**11. Low — awkward phrasing:** lines 182, 1076, 520, 522, 640, 690, 846, 1097, 1098, 1115, 1324 and 208.

**12. Low — minor term mismatches:**
- 개인수요 vs 개별공급
- 배급 vs 배분
- 경쟁적 초과이윤
- line 1364 adds 「의 관계」

---

## 7. Additional passes from different angles

Five further independent passes were run:

1. Syllabus alignment against the guide text itself, in two halves.
2. Exam readiness, from the view of an IB examiner.
3. A student's view in a real browser (Playwright).
4. Internal consistency between the docs and the content.

**Source for the syllabus passes.** Both PDFs linked in `docs/research/source-validation.md` were downloaded and their text extracted:

- The October 2022 update. Its cover says "First assessment 2024", and its imprint reads "Published February 2020, updated … October 2022".
- The May 2020 copy.

For Units 1–2.6, the only difference between the two copies is that the 2.4 heading gains "(HL only)" in October 2022. HL-only material was identified from the guide's bold formatting.

### 7.1 Syllabus alignment (verified against the guide text)

**What is correct:**

- **SL/HL scope labels are correct everywhere** in Units 1–2. No item is mislabelled. HL-only items, according to the guide's bold text:
  - 2.1: income and substitution effects, and diminishing marginal utility.
  - 2.2: marginal returns and marginal cost.
  - 2.3: calculating consumer and producer surplus.
  - 2.4: the whole subtopic.
  - 2.5: PED along a straight line, primary vs manufactured goods, and the importance of YED.
  - 2.6: primary vs manufactured PES.
  - 2.7: nudges, and the price control, tax and subsidy calculations.
  - 2.8: calculating welfare loss.
  - 2.10–2.12: the whole subtopics.
- **The response lists match the guide's wording.**
  - The site correctly leaves out nationalization and trade liberalization for market power. The guide lists only legislation and regulation, government ownership, and fines.
  - The site correctly leaves out nudges from 2.8.
  - `curriculum.md` and `coverage-checklist.json` are accurate inventories for 1.1–2.6.
- **Every coverage status marked omitted for a diagram is honest.**

**High**

1. **2.11 "Diagram: market power where AR > MC" (guide p. 32, HL) is missing from the checklist and from coverage entirely.**
   - **Fix:** Add the id `2.11.market_power_diagram` (HL, omitted) to `coverage-checklist.json` and to lesson 2.11.
2. **2.7 HL calculations stop short of what the guide asks for** (p. 30: "effects on markets and stakeholders"). The following are not calculated:
   - consumer expenditure and producer revenue, before and after;
   - government spending to buy a floor surplus (5 × 20 = $100);
   - the total tax burden on each side ($50 / $50);
   - each side's share of a subsidy;
   - changes in CS and PS;
   - welfare loss.

   Keep the status at "summary" until these are added. Example for the tax case: consumer spending 5 × 50 = $250, producer revenue 3 × 50 = $150.
3. **Linear demand/supply functions are not in the current guide.** See §2, item 5 (now confirmed).

**Medium**

4. **2.4 overclaims "taught" status:**
   - profit maximization is never explained;
   - CSR is never named;
   - imperfect information is only listed;
   - "perfect information" is softened to "adequate";
   - "choice architecture" is never defined;
   - "restricted choice" is illustrated by a ban. A ban overlaps with regulation; the guide means limiting the set of options.
5. **2.11 overclaims "taught" status:**
   - oligopoly "allocative inefficiency (market failure)" is not stated;
   - the payoff matrix is given as prose only, with no 2×2 grid and no dominant strategy;
   - "Meaning of allocative efficiency, necessary conditions" (p. 32) has no text point;
   - monopolistic competition "more elastic demand curve compared with monopoly" (p. 33) is not stated;
   - the guide terms "allocative inefficiency" and "market failure" are not used.
6. **2.8 overclaims "taught" status:**
   - the "tragedy of the commons" is not named;
   - unsustainable production is not linked to negative externalities;
   - the guide term "common pool / common access resources" is not used;
   - "collective self-governance" is described but not named;
   - government provision gets one clause;
   - "global nature of sustainability issues" is not addressed;
   - "allocative efficiency" and "community surplus maximized" are not used at MSB = MSC.
7. **Key concepts are not linked.** Every lesson has `"concepts": ["choice"]`, and app.js never displays the field. The guide expects the nine concepts to be linked throughout. For example:
   - 2.3 efficiency;
   - 2.7 intervention;
   - 2.8 sustainability;
   - 2.11 interdependence;
   - 2.12 equity.
8. **Material beyond the guide is not marked optional:**
   - the shut-down rule (line 1840);
   - "Nash equilibrium" as a glossary term (the guide asks only for a simple payoff matrix).

**Low**

9. **Guide terms not used:**
   - "social/community surplus" (the site says "total surplus");
   - "command and control regulation";
   - "services" in income-elastic demand (line 923).
10. **YED importance is filed under the wrong heading.** It sits under "Elasticity along a line"; give it its own HL sub-heading.
11. **The primary-commodity PES text is over-hedged.** Lead with the guide's reasons: time lags, limited storage, factor immobility.
12. **Small "taught" gaps:**
    - "the use of logic" (1.2);
    - "economic well-being" is defined too narrowly.
13. **Coverage under-reports some content that is taught.** The non-diagram halves of these points are bundled inside entries marked "omitted diagram". Split each into a content entry and a diagram entry:
    - 1.1 circular flow;
    - 2.1 and 2.2 movement vs shift;
    - 2.3 new equilibrium and CS/PS concepts;
    - 2.5 PED along a straight line.
14. **2.4 title:** use the guide's title, "Critique of the maximizing behaviour of consumers and producers". The current title covers only the consumer half.

**Required diagrams not supplied.** All of these are recorded as omitted, except AR > MC, which is missing from the inventory. Priority 1 is the common SL/HL diagrams, which can appear in every paper, including the shared Paper 2.

**Priority 1: common SL/HL**

- **1.1** — 4 PPC diagrams: choice/efficiency, growth, increasing vs constant cost.
- **2.1** — 2 diagrams. **2.2** — 2 diagrams.
- **2.3** — 3 diagrams.
- **2.5** — 4 common diagrams, plus 1 HL (PED along a line).
- **2.6** — 1 diagram.
- **2.7** — 4 diagrams: price ceiling, price floor, indirect tax, subsidy.
- **2.8** — allocative efficiency.
- **2.8** — 4 externality diagrams: negative production, negative consumption, positive production, positive consumption.
- **2.8** — 5 response diagrams: Pigouvian tax, carbon tax, subsidy, legislation/regulation, education.

**Priority 2: HL**

**2.11:**

- PC firm with P = D = AR = MR;
- PC abnormal profit / normal profit / losses;
- PC equilibrium with allocative efficiency;
- **market power AR > MC (not inventoried)**;
- monopoly abnormal profit / normal profit / losses;
- monopoly vs PC with welfare loss;
- natural monopoly;
- collusive oligopoly as a monopoly;
- monopolistic competition abnormal profit / normal profit / losses;
- monopolistic competition demand more elastic than monopoly.

**2.12:** circular flow showing why free markets produce inequality.

### 7.2 Exam readiness (examiner's view)

**High**

1. **Every challenge is "Explain · 4".**
   - **Location:** lines 113, 281, 422, 563, 704, 835, 983, 1152, 1304, 1488, 1666, 1774, 1912 and 2130.
   - **Missing:**
     - Define (2);
     - Calculate;
     - Draw;
     - "Using an appropriate diagram, explain" (4);
     - Paper 1 (a) 10-mark;
     - Paper 1 (b) and Paper 2 final 15-mark evaluate/discuss;
     - Paper 3 (b) 10-mark recommendation;
     - any data-response stimulus.
   - **Fix:** Add at least one Paper 2-style chain per lesson. Add Paper 3-style sets for HL lessons. Tag each item with paper, part and marks.
2. **Rubrics never reward a diagram or a real-world example.** They are 4-point checklists, not level-based markbands. Several prompts are natural "using a diagram" questions:
   - 2.1 (line 412);
   - 2.2 (line 553);
   - 2.3 (line 694);
   - 2.7 (line 1294);
   - 2.8 (line 1478).

   Without a diagram, these model answers would cap at about 2/4.
3. **There are no real-world examples anywhere.** Every context is hypothetical; no country, year or named policy appears. Paper 1 (b) markbands require real-world examples.
   - **Fix:** Add 1–2 sourced, dated cases per lesson, each with a "last verified" date. Suggestions:
     - rent control (2.7);
     - a sugar levy (2.7/2.8);
     - an emissions trading scheme or carbon tax (2.8);
     - fisheries quotas (2.8);
     - pension auto-enrolment and organ-donation defaults (2.4);
     - a cartel fine or a blocked merger (2.11);
     - minimum wage and agricultural price support (price floor).
4. **Evaluation is described but never shown in an answer.** The evaluation criteria at lines 1243–1245, 1427–1433, 1662 and 1858 are good, but every model answer is 3–4 sentences long.
   - **Fix:** Add one annotated 15-mark exemplar per Unit 2 policy lesson. Structure: theory and diagram → example → counter-argument → short vs long run and stakeholders → assumptions → justified conclusion. Add one 10-mark Paper 3 recommendation.
5. **Diagrams are the largest mark gap.** See §7.1 for the full list. The firm model draws linear TR/TC lines, which is not an IB firm diagram; replace it with MC/AC/AR/MR.

**Medium**

6. **Definitions may not earn full definition marks:**
   - PED, YED and PES are given as formulas only. Lead with "a measure of the responsiveness of…".
   - Subsidy: use "a payment by government to producers that lowers costs and increases supply".
   - Adverse selection is too abstract.
   - Moral hazard: add "does not bear the full cost".
   - PPC: say "maximum combinations when all resources are fully and efficiently employed".
   - Indirect tax: add specific / ad valorem.
   - Scarcity: add "unlimited wants".
   - Demand and supply: add the time period and ceteris paribus.
7. **Missing glossary terms:**
   - normal and inferior good, complement;
   - merit and demerit good;
   - producer surplus and social surplus;
   - welfare loss, price mechanism;
   - productive efficiency;
   - normal and abnormal profit;
   - barriers to entry, economies of scale, natural monopoly;
   - monopoly, oligopoly, concentration ratio;
   - tradable permit, carbon tax;
   - choice architecture, primary commodity;
   - free good, factors of production, sustainability.
8. **Paper 3 HL quantitative work is incomplete.**
   - **Within Units 1–2,** these are missing:
     - spending and revenue changes;
     - the cost of buying a floor surplus;
     - CS, PS and welfare changes from an intervention;
     - how changing a or b in Qd = a − bP moves the curve;
     - plotting curves from functions.
   - **Beyond Units 1–2,** the quantitative work for Units 3–4 does not exist yet: multiplier, GDP and deflator, CPI, exchange rates, tariff/quota welfare, Gini/Lorenz. Paper 3 covers the whole syllabus.
9. **The research notes link to third-party copies of IB documents.**
   - **Location:** `docs/research/curriculum.md:9` and `source-validation.md` (an ibdocs.re copy of the guide, a github.io copy of specimen papers).
   - **Problem:** This is an IP and reputational risk in a public repo.
   - **Fix:** Cite titles and page numbers, and the official route (Programme Resource Centre or IB store).

**Low**

10. The disclaimer is adequate. No challenge prompt resembles specimen wording. Keep any new data extracts original.
11. Checklist rubrics teach point-counting. Add a note that markbands reward integrated, applied explanation.

**Verdict:** The site is a strong conceptual first course. As exam preparation alone, it would likely cap a student at the middle markbands on Papers 1–2, and it does not yet prepare for most of Paper 3.

**Fix order:**
1. Diagrams.
2. Extended question types and markbands.
3. Real-world examples.
4. Evaluation exemplars.
5. Paper 3 calculation sets.

### 7.3 Student view in a browser (Playwright, about 70 screenshots)

No JS errors or NaN values were found. Numeric readouts match the plotted coordinates in every state that was swept. Mobile home and lesson layouts work.

**High**

1. **The ceiling and floor models show no shortage or surplus**, even though the prompt asks students to "identify… any shortage".
   - The buyer-price and seller-price points sit on top of each other.
   - The readout shows a lone "Binding" line.
   - Qd and Qs are never shown.
   - **Location:** `models.js:12`, `models.js:27–33`, `app.js:37`.
   - **Fix:** Return qd, qs and the shortage/surplus. Mark both quantities on the graph with a bracket.
2. **2.2 Supply and 2.6 PES use a model where only demand can shift.**
   - Supply is always Q = P, so PES = 1 at every point.
   - The 2.2 prompt "identify which curve shifts" can never be answered with supply.
   - **Location:** `content-en.js:523–525` and `1112–1114`, `models.js:8`, `models.js:26`.
   - **Fix:** Add supply-shift and slope controls, or set `model: "none"` and state the limitation.
3. **The 2.11 model contradicts its prompt.**
   - The prompt says "compare MR with MC… price from demand". The model is a price-taker TR/TC chart with no MR, MC or demand curve.
   - The y-axis rescales on every change (ticks such as 105, 210, 315).
   - **Location:** `models.js:16`, `models.js:36`.
4. **The skip link sends keyboard users to the Home page.**
   - `href="#main"` triggers a hashchange, and `render()` falls back to home.
   - **Location:** `index.html:3`, `app.js:41`.

**Medium**

5. **Next, Previous and course-map links keep the old scroll position.** Students land mid-page; one test landed at scrollY 3361 of 4261. "Mark complete" re-renders the page, which drops focus and clears quiz feedback.
   - **Location:** `app.js:41`.
6. **The PED model shows positive values with no warning.** Example: "PED: 5.00".
   - There is no |PED| classification and no total-revenue readout, though the prompt asks about revenue.
   - The two points are not joined.
7. **The externality model uses non-IB labels.**
   - The legend says "Demand/Supply" instead of MPB = MSB and MPC.
   - The welfare-loss triangle is not shaded.
   - At cost = 10, the MSC line collapses to a single point.
8. **Labels collide with points.**
   - Curve-number labels sit on points: tax "3" on A, externality "3" on B, firm "1" on A (`app.js:34`).
   - A tax or subsidy of 10 draws a zero-length line.
9. **The legend and readouts are hard to decode.**
   - Curves differ only by dash pattern, and the legend shows no line swatches.
   - Coordinates appear as (Q, P), but the market readout says "price / quantity".
   - "Shifted demand" is listed even when shift = 0.
   - "Frontier Y" is used for both the curve and the readout.
   - Axes say "Price (units)" and "Money (units)".
10. **In the market model, "point at chosen price" leaves the curve** above the choke price. The surplus (Qs) is not shown.
11. **Localisation:**
    - The challenge prompt, command, model answer and rubric are fully English in all locales, and not labelled "(English exam wording)".
    - Glossary headwords stay English, in lower case.
    - Roughly 80 strings per locale embed English mid-sentence (for example "ceiling" and "floor").
    - The chosen language is not saved across reloads.
12. **Search misses obvious queries.** "PED", "monopoly" and ja "価格上限" return 0 results; only title, summary and terms are searched (`app.js:23`).
13. **The coverage page confuses students.**
    - It shows raw ids and "section:x" tokens.
    - A diagram the student just used is marked "Omitted"; word these as "Partial – interactive sketch only".
    - On an iPhone 13 the table overflows (420 px in a 390 px viewport).
    - The page is 18,700 px long with no collapsing.
    - There is no scope column.
14. **Accessibility gaps:**
    - Slider names read "Quantity (units)4".
    - There is no `aria-valuetext`.
    - Readouts have no `aria-live`.
    - The SVG `aria-label` is generic.
    - The page `<title>` never changes.

**Low**

- The glossary is in lesson order, not alphabetical, with no filter; links are bare "2.1".
- Correct quiz feedback reads "Correct · Correct: …".
- The PED lesson's quiz is about YED.
- Lessons without a model still say "Predict … before moving a control".
- The PPC model gives no hint for points beyond the frontier.
- The focus ring is about 3:1 contrast.
- SVG text renders at about 10.5 px on mobile.

### 7.4 Internal consistency and claims (docs vs content)

**Verified correct:**
- 14 lessons and 113 coverage entries (61 taught, 12 summary, 40 omitted).
- Ids and labels match `coverage-checklist.json` exactly.
- All `section:` evidence references exist.
- 43 glossary terms, all unique.
- Tests pass 19/19.

**Medium**

1. **The guide-version wording could mislead a May 2028 candidate.** The README and the UI `notice` say "October 2022 guide, first assessment 2024", but the linked brief says "first assessment 2022, last 2029". "First assessment 2024" reads like a different syllabus.
   - **Fix:** Use wording like: "Economics guide (first assessment 2022, last assessment 2029), October 2022 update applying from 2024 exams; Paper 2 is identical at SL/HL and excludes HL extension material." Apply it to the README and all four UI notices.
2. **README.md:7 is ambiguous.** "Paper 2 covers common material, with HL extensions marked separately" can be read as Paper 2 containing HL extensions. Split it into two sentences.
3. **`docs/progress.md` contradicts itself and is out of date.**
   - Lines 3 and 5 say Task 1 is in progress, but line 11 says it is complete.
   - It says "no initial commit" or "no HEAD", but git has commits.
   - It says "Sol fix cycle 1 is running", but `site-fix1.md` and `verification-recheck.md` (overall FAIL) exist and are not referenced.
   - The README does not say that integrated and browser verification are still open.
4. **The glossary and coverage pages show no HL scope.**
   - HL-only terms (bounded rationality, nudge, satisficing, adverse selection, moral hazard, Nash equilibrium, economic profit and others) are untagged.
   - HL coverage points inside common lessons are recognisable only by an id suffix.

**Low**

5. **Spelling mix:**
   - US spellings: "behavior" (lines 806, 1232, 1716, and the id `2.11.oligopoly_behavior`), "neighbors" (1405), "favors" (233), "honor" (1727, 1767).
   - British spellings nearby: "honour" (1730), "criticised" (232).
   - Standardise to IB/Oxford style: behaviour and -ize. Changing the id needs a checklist and test update.
6. **Surplus is named three ways:** total, social and community. Use "total (community/social) surplus" once.
7. **Profit term mismatch:** the glossary has "economic profit", but the lessons say "abnormal profit" 13 times. Add normal and abnormal profit to the glossary.
8. **Line 957** (2.5 quiz): "demand for a good falls 5%" should be "quantity demanded falls 5%".
9. **Line 1415:** "social marginal benefit" is used, while the rest of the site uses MSB. The externality model labels do not match the lesson text either.
10. **Duplicate paragraph:** the merit/demerit explanation appears twice in 2.8 (lines 1426 and 1431).
11. **Summary equals question:** in all 14 lessons, `summary` is identical to `question`, so the card and the lesson page repeat the same sentence.
12. **2.7's only concept check is HL** although the lesson is common. The common tax section contains HL arithmetic.
13. **Evidence format is inconsistent:** a few entries use the raw value "worked" instead of the `section:` format.
14. **The PPC model assumption** (line 75) does not state that opportunity cost is constant.
15. **Research-doc citation drift:**
    - Paper 2 page ranges: "pp. 58, 61–62" vs "pp. 58, 60–62".
    - Examiner-instruction edition: 2025 vs 2022.
    - "May 2020 copy" vs "published February 2020".

---

## 8. Priority list for the writing agent

1. **Diagrams.** Start with the 14 common SL/HL diagrams for 2.7–2.8, then the rest of §7.1. Add the missing AR > MC inventory item.
2. **Fix the coverage over-claims.** Either teach the missing points or downgrade them to "summary". This covers §2.3–2.4, §3, §4, §7.1 items 4–6, and the 2.5 and 2.6 reverse calculations.
3. **Remove or label out-of-guide content.** This covers linear demand/supply functions, the shut-down rule and Nash equilibrium.
4. **Complete the 2.7 HL stakeholder and welfare calculations.**
5. **Fix the models.**
   - ceiling and floor: show the shortage or surplus;
   - supply shift and PES controls for 2.2 and 2.6;
   - 2.11 MR/MC firm model;
   - IB curve labels on the externality model;
   - fix the skip link.
6. **Assessment variety.** Add a range of command terms and mark values, markband-style rubrics, real-world examples, and 15-mark evaluation exemplars.
7. **Translations.**
   - Fix the zh-Hant-HK meaning reversal at line 173.
   - Make terms consistent across locales and the UI, and use Hong Kong terms (供應, 物品).
   - Separate words that are used for two concepts: ja 余剰, ko 수입 and 잉여.
8. **Docs and claims.**
   - Update the guide-version wording.
   - Update `progress.md`.
   - Remove links to third-party IB copies.
   - Standardise spelling.
