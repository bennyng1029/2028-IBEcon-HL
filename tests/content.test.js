const test = require('node:test');
const assert = require('node:assert/strict');
const checklist = require('../docs/coverage-checklist.json');
const lessons = require('../assets/js/content-en.js');
test('lessons provide the fixed curriculum and usable learning activities', () => {
  assert.deepEqual(lessons.map(x => x.id), Object.keys(checklist));
  for (const l of lessons) {
    assert.ok(['common','hl'].includes(l.scope));
    if (['2.4','2.10','2.11','2.12'].includes(l.id)) assert.equal(l.scope,'hl');
    assert.ok(l.sections.length && new Set(l.sections.map(s => s.id)).size === l.sections.length);
    for (const s of l.sections) { assert.ok(s.heading && s.body.length && s.body.every(Boolean) && s.limitation); assert.ok(['common','hl'].includes(s.scope)); }
    assert.equal(l.quiz.options.length,4); assert.equal(l.quiz.feedback.length,4); assert.ok(l.quiz.feedback.every(Boolean)); assert.ok(Number.isInteger(l.quiz.answer) && l.quiz.answer >= 0 && l.quiz.answer < 4);
    assert.ok(l.worked.prompt && l.worked.steps.length && l.worked.conclusion && l.challenge.prompt && l.challenge.modelAnswer && l.challenge.rubric.length);
    assert.deepEqual(l.coverage.map(c => c.id), checklist[l.id].map(c => c.id));
    for (const c of l.coverage) { assert.ok(['taught','summary','omitted'].includes(c.status)); assert.ok(c.point && c.evidence); if (c.status !== 'omitted') assert.ok(['worked','quiz','challenge',...l.sections.map(s => 'section:'+s.id),...l.diagrams.map(d=>'diagram:'+d.id)].includes(c.evidence)); }
  }
});

test('classic-script contract and coverage scope remain consistent', () => {
  const keys = ['id','unit','title','summary','question','scope','concepts','terms','sections','model','modelPrompt','modelAssumption','modelLimitation','worked','quiz','challenge','coverage','diagrams'];
  for (const lesson of lessons) {
    assert.deepEqual(Object.keys(lesson), keys);
    assert.ok(['ppc','market','ped','policy','externality','firm','none'].includes(lesson.model));
    assert.ok(lesson.title && lesson.summary && lesson.question && lesson.modelPrompt && lesson.modelAssumption && lesson.modelLimitation);
    assert.ok(lesson.terms.length && lesson.terms.every(t => t.term && t.definition));
    assert.ok(['common','hl'].includes(lesson.quiz.scope) && ['common','hl'].includes(lesson.challenge.scope));
    assert.ok(lesson.challenge.hint && lesson.challenge.command && lesson.challenge.marks > 0);
    for (const [index, point] of lesson.coverage.entries()) {
      const expected = checklist[lesson.id][index];
      if (expected.scope === 'hl' && point.evidence.startsWith('section:')) {
        const section = lesson.sections.find(s => s.id === point.evidence.slice(8));
        assert.equal(section.scope, 'hl', point.id);
      }
    }
  }
});

test('diagnostic activities use distinct options and explain the individual misconception', () => {
  const placeholders = /The opposite must always occur|outcome is unrelated to the information|No economic reasoning is possible|Identify a relevant economic idea|Reach a reasoned conclusion/;
  for (const lesson of lessons) {
    assert.equal(new Set(lesson.quiz.options).size, 4, lesson.id);
    assert.equal(new Set(lesson.quiz.feedback).size, 4, lesson.id);
    for (const text of [...lesson.quiz.options, ...lesson.quiz.feedback, ...lesson.challenge.rubric]) {
      assert.ok(!placeholders.test(text), `${lesson.id}: generic feedback or scoring criterion`);
    }
    assert.ok(lesson.worked.steps.length >= 3, `${lesson.id}: worked reasoning must show intermediate steps`);
    assert.equal(lesson.challenge.rubric.length, lesson.challenge.marks, lesson.id);
    assert.ok(lesson.terms.every(term => term.term !== lesson.title), `${lesson.id}: use economic vocabulary rather than a chapter-title glossary entry`);
  }
  assert.ok(new Set(lessons.map(lesson => lesson.quiz.answer)).size > 1, 'correct positions must vary');
});

test('diagram coverage remains distinct from verbal or arithmetic instruction', () => {
  for (const lesson of lessons) {
    for (const point of lesson.coverage) {
      if (point.id.includes('_diagram') || point.id === '2.5.ped_line_hl') {
        assert.equal(point.status, 'taught', point.id);
        assert.equal(point.evidence, 'diagram:'+point.id);
      }
    }
  }
});

test('lesson 2.7 identifies numerical price-control work as HL', () => {
  const lesson = lessons.find(item => item.id === '2.7');
  const controls = lesson.sections.find(section => section.id === 'controls');
  const extension = lesson.sections.find(section => section.id === 'hl');
  assert.equal(controls.scope, 'common');
  assert.match(controls.body.join(' '), /shortage.*surplus/i);
  assert.doesNotMatch(controls.body.join(' '), /Q[ds]\s*=|\$\d/);
  assert.equal(extension.scope, 'hl');
  assert.match(extension.body.join(' '), /\$3 ceiling/);
  assert.match(extension.body.join(' '), /\$5 floor/);
  assert.match(lesson.worked.prompt, /HL extension/i);
  assert.equal(lesson.quiz.scope, 'hl');
  assert.equal(lesson.challenge.scope, 'common');
});

test('all manual overlays have complete matching localized content', () => {
  for (const locale of ['ja','ko','zh-hant-hk']) {
    const overlay = require(`../assets/js/content-${locale}.js`);
    assert.deepEqual(Object.keys(overlay), lessons.map(l => l.id));
    const localized = (value, source, path) => {
      assert.equal(typeof value, 'string', path); assert.ok(value.trim(), path);
      assert.notEqual(value, source, `${path}: untranslated English`);
      assert.match(value, /[\u3040-\u30ff\u3400-\u9fff\uac00-\ud7af]/, path);
    };
    for (const l of lessons) {
      const t = overlay[l.id]; const path = `${locale}/${l.id}`;
      assert.deepEqual(Object.keys(t).sort(), ['title','summary','question','terms','sections','modelPrompt','modelAssumption','modelLimitation','worked','quiz','challenge','coverage','diagrams'].sort());
      for (const key of ['title','summary','question','modelPrompt','modelAssumption','modelLimitation']) localized(t[key],l[key],path+'/'+key);
      assert.equal(t.terms.length,l.terms.length); t.terms.forEach((term,i) => {assert.deepEqual(Object.keys(term).sort(),['definition','term']); assert.equal(term.term,l.terms[i].term); localized(term.definition,l.terms[i].definition,path+'/definition');});
      assert.deepEqual(t.sections.map(s=>s.id),l.sections.map(s=>s.id));
      t.sections.forEach((s,i) => {const source=l.sections[i]; assert.deepEqual(Object.keys(s).sort(),['body','heading','id','limitation']); localized(s.heading,source.heading,path+'/heading'); localized(s.limitation,source.limitation,path+'/limitation'); assert.equal(s.body.length,source.body.length); s.body.forEach((b,j)=>localized(b,source.body[j],path+'/body'));});
      assert.deepEqual(Object.keys(t.worked).sort(),['conclusion','prompt','steps']);
      localized(t.worked.prompt,l.worked.prompt,path+'/worked'); localized(t.worked.conclusion,l.worked.conclusion,path+'/conclusion'); assert.equal(t.worked.steps.length,l.worked.steps.length); t.worked.steps.forEach((s,i)=>localized(s,l.worked.steps[i],path+'/step'));
      assert.deepEqual(Object.keys(t.quiz).sort(),['feedback','options','question']); localized(t.quiz.question,l.quiz.question,path+'/quiz');
      for (const key of ['options','feedback']) {assert.equal(t.quiz[key].length,4); assert.equal(new Set(t.quiz[key]).size,4); t.quiz[key].forEach((s,i)=>localized(s,l.quiz[key][i],path+'/'+key));}
      assert.deepEqual(Object.keys(t.challenge),['hint']); localized(t.challenge.hint,l.challenge.hint,path+'/hint');
      assert.deepEqual(t.coverage.map(c=>c.id),l.coverage.map(c=>c.id));
      t.coverage.forEach((c,i)=>{const source=l.coverage[i]; localized(c.point,source.point,path+'/coverage'); assert.deepEqual(Object.keys(c).sort(),(source.status==='omitted'?['id','point','omissionExplanation']:['id','point']).sort()); if(source.status==='omitted') localized(c.omissionExplanation,source.evidence,path+'/omission');});
    }
  }
});

test('locale overlays register as classic scripts without altering canonical lessons', () => {
  const fs = require('node:fs');
  const vm = require('node:vm');
  const context = {};
  vm.createContext(context);
  vm.runInContext(fs.readFileSync(require.resolve('../assets/js/content-en.js'), 'utf8'), context);
  const before = JSON.stringify(context.ECON_LESSONS);
  for (const file of ['ja','ko','zh-hant-hk']) {
    vm.runInContext(fs.readFileSync(require.resolve(`../assets/js/content-${file}.js`), 'utf8'), context);
  }
  assert.equal(JSON.stringify(context.ECON_LESSONS), before);
  assert.deepEqual(Object.keys(context.ECON_TRANSLATIONS), ['ja','ko','zh-Hant-HK']);
  for (const overlay of Object.values(context.ECON_TRANSLATIONS)) {
    assert.deepEqual(Object.keys(overlay), lessons.map(l => l.id));
  }
});
test('every locale distinguishes local revenue rules from finite initial-value PED',()=>{for(const locale of ['en','ja','ko','zh-hant-hk']){const data=locale==='en'?lessons:require('../assets/js/content-'+locale+'.js');const list=Array.isArray(data)?data:Object.values(data);const ped=list.find(l=>l.sections?.some(s=>s.id==='revenue'));assert.ok(ped,locale);const text=ped.sections.find(s=>s.id==='revenue').body.join(' ');for(const token of ['P0×Q0','P1×Q1','PED=−0.9','1×10=10','2×1=2'])assert.ok(text.includes(token),locale+' '+token);}});

const guidedInventory = {
  "1.1.ppc_choice_diagram": [
    "choice"
  ],
  "1.1.ppc_growth_diagram": [
    "actual",
    "capacity"
  ],
  "1.1.ppc_cost_diagram": [
    "constant",
    "increasing"
  ],
  "1.1.circular_flow_diagram": [
    "fiveSector"
  ],
  "2.1.curve_diagram": [
    "demand"
  ],
  "2.1.shifts_diagram": [
    "movement",
    "increase"
  ],
  "2.2.curve_diagram": [
    "supply"
  ],
  "2.2.shifts_diagram": [
    "movement",
    "increase"
  ],
  "2.3.equilibrium_diagram": [
    "crossing"
  ],
  "2.3.changes_diagram": [
    "shortage",
    "surplus",
    "demandIncrease",
    "supplyIncrease"
  ],
  "2.3.surplus_diagram": [
    "surplus"
  ],
  "2.5.ped_diagrams": [
    "relative",
    "perfectElastic",
    "perfectInelastic",
    "unit"
  ],
  "2.5.ped_line_hl": [
    "segments"
  ],
  "2.5.ped_revenue_diagram": [
    "elastic",
    "inelastic",
    "unit"
  ],
  "2.5.yed_engel_diagram": [
    "incomeElastic",
    "incomeInelastic",
    "inferior"
  ],
  "2.6.pes_diagrams": [
    "relative",
    "perfectElastic",
    "perfectInelastic",
    "unit"
  ],
  "2.7.ceiling_diagram": [
    "binding"
  ],
  "2.7.floor_diagram": [
    "privateSales"
  ],
  "2.7.tax_diagram": [
    "tax2"
  ],
  "2.7.subsidy_diagram": [
    "subsidy2"
  ],
  "2.8.social_optimum_diagram": [
    "optimum"
  ],
  "2.8.negative_production_diagram": [
    "negativeProduction"
  ],
  "2.8.negative_consumption_diagram": [
    "negativeConsumption"
  ],
  "2.8.positive_production_diagram": [
    "positiveProduction"
  ],
  "2.8.positive_consumption_diagram": [
    "positiveConsumption"
  ],
  "2.8.pigouvian_diagram": [
    "optimalTax"
  ],
  "2.8.carbon_diagram": [
    "industryTax"
  ],
  "2.8.subsidy_diagram": [
    "producerSubsidy"
  ],
  "2.8.regulation_diagram": [
    "optimalCap",
    "weakCap"
  ],
  "2.8.education_diagram": [
    "effective",
    "partial"
  ],
  "2.11.perfect_competition_diagram": [
    "priceTaker"
  ],
  "2.11.perfect_profit_diagram": [
    "profit",
    "normal",
    "loss"
  ],
  "2.11.perfect_equilibrium_diagram": [
    "longRun"
  ],
  "2.11.monopoly_diagram": [
    "profit",
    "normal",
    "loss"
  ],
  "2.11.monopoly_welfare_diagram": [
    "benchmark"
  ],
  "2.11.natural_monopoly_diagram": [
    "unregulated",
    "marginalCostPrice"
  ],
  "2.11.oligopoly_diagram": [
    "cartel"
  ],
  "2.11.monopolistic_profit_diagram": [
    "profit",
    "normal",
    "loss",
    "longRun"
  ],
  "2.11.monopolistic_demand_diagram": [
    "substitutes"
  ],
  "2.12.circular_flow_diagram": [
    "inequality"
  ]
};
const guidedModels = require('../assets/js/models.js');
test('canonical guided studios freeze all 40 objectives and 67 scenarios independently of coverage activation', () => {
  const actual = lessons.flatMap(l => l.diagrams || []);
  assert.equal(actual.length,40);
  assert.deepEqual(actual.map(d=>d.id),Object.keys(guidedInventory));
  assert.equal(actual.reduce((n,d)=>n+d.scenarios.length,0),67);
  for (const lesson of lessons) {
    assert.ok(Array.isArray(lesson.diagrams));
    for (const d of lesson.diagrams) {
      assert.ok(lesson.coverage.some(c=>c.id===d.id));
      assert.equal(d.scope,checklist[lesson.id].find(c=>c.id===d.id).scope);
      assert.deepEqual(Object.keys(d),['id','scope','title','introduction','scenarios']);
      assert.ok(d.title && d.introduction);
      assert.deepEqual(d.scenarios.map(s=>s.key),guidedInventory[d.id]);
      for(const s of d.scenarios){
        assert.deepEqual(Object.keys(s),['key','title','assumption','limitation','baseDescription','labels','prediction','construction','comparison','explanation','extension']);
        for(const key of ['title','assumption','limitation','baseDescription','comparison']) assert.ok(s[key].length>15,d.id+':'+s.key+':'+key);
        const geometry=guidedModels.guided(d.id,s.key);
        assert.deepEqual(s.construction.map(c=>c.key),geometry.layers);
        const keys=new Set();
        for(const p of geometry.panels){
          [p.key,p.xLabel,p.yLabel].forEach(k=>keys.add(k));
          for(const kind of ['curves','points','regions','arrows','guides','nodes','edges']) for(const v of p[kind])keys.add(v.key);
        }
        assert.deepEqual(Object.keys(s.labels).sort(),[...keys].sort());
        assert.ok(Object.values(s.labels).every(v=>typeof v==='string'&&v.trim()));
        for(const layer of s.construction){
          assert.deepEqual(Object.keys(layer),['key','description','instruction','choices','answer']);
          assert.ok(layer.description.length>20 && layer.instruction.length>20);
          assert.equal(layer.choices.filter(c=>c.key===layer.answer).length,1);
          assert.equal(new Set(layer.choices.map(c=>c.key)).size,layer.choices.length);
          assert.ok(layer.choices.length>=2 && layer.choices.every(c=>c.label && c.feedback));
          assert.ok(geometry.panels.some(p=>['curves','points','regions','arrows','guides','nodes','edges'].some(k=>p[k].some(v=>v.layer===layer.key))));
        }
        for(const q of [s.prediction,s.explanation,...(s.extension?[s.extension]:[])]){
          assert.ok(q.question && q.options.length>=2 && q.options.every(Boolean));
          assert.equal(new Set(q.options).size,q.options.length);
          assert.equal(q.feedback.length,q.options.length);
          assert.equal(new Set(q.feedback).size,q.feedback.length);
          assert.ok(q.feedback.every(v=>v.length>20));
          assert.ok(Number.isInteger(q.answer)&&q.answer>=0&&q.answer<q.options.length);
        }
        if(s.extension)assert.equal(s.extension.scope,'hl');
      }
    }
  }
});

test('canonical guided construction feedback explains visible steps and regulated policy', () => {
  const studio = (id, key) => lessons.flatMap(l=>l.diagrams).find(d=>d.id===id).scenarios.find(s=>s.key===key);
  const correct = (s, i) => s.construction[i].choices.find(c=>c.key===s.construction[i].answer).feedback;
  // Catch the systematic regression that recycled whole-scenario answers into every layer.
  for (const d of lessons.flatMap(l=>l.diagrams)) for (const s of d.scenarios) {
    const wholeScenario = [s.comparison, ...s.prediction.feedback, ...s.explanation.feedback];
    for (const [i] of s.construction.entries()) assert.ok(!wholeScenario.includes(correct(s,i)), `${d.id}/${s.key}/${i}: recycled feedback`);
  }
  const ppc=studio('1.1.ppc_choice_diagram','choice');
  assert.match(correct(ppc,0), /A.*inside.*B.*(?:on|frontier)/i);
  assert.doesNotMatch(correct(ppc,0), /\b[CD]\b|B→C|dashed/i); // these elements are still hidden
  assert.match(correct(ppc,1), /C.*(?:on|frontier).*D.*(?:beyond|outside|unattainable)/i);
  assert.doesNotMatch(correct(ppc,1), /arrow|dashed|B→C/i);
  assert.match(correct(ppc,2), /(?:3 X|X.*3).*(?:3 Y|8 to 5)/i);
  const flow=studio('1.1.circular_flow_diagram','fiveSector');
  assert.match(correct(flow,0), /finance.*government.*foreign/i);
  assert.doesNotMatch(correct(flow,0), /wage|saving.*arrow/i);
  assert.match(correct(flow,1), /goods.*firms.*households.*spending.*firms/i);
  assert.doesNotMatch(correct(flow,1), /tax|import|investment/i);
  const regulated=studio('2.11.natural_monopoly_diagram','marginalCostPrice');
  const reference=studio('2.11.natural_monopoly_diagram','unregulated');
  assert.match(correct(regulated,0), /unregulated.*MR = MC.*4.*regulated.*demand = MC/i);
  assert.match(correct(regulated,1), /regulated.*8.*2.*3\.5.*unregulated/i);
  assert.match(correct(regulated,2), /loss.*8.*2.*3\.5.*12/i);
  assert.match(correct(reference,1), /4.*6.*LRAC.*5/i);
  const wrongRegulated=regulated.construction[1].choices.find(c=>c.key!==regulated.construction[1].answer);
  assert.match(wrongRegulated.label, /MR = MC.*4/);
  assert.match(wrongRegulated.feedback, /unregulated.*regulator.*P = MC.*8/i);
  for (const key of ['optimalCap','weakCap']) {
    const cap=studio('2.8.regulation_diagram',key);
    assert.doesNotMatch(correct(cap,0), /cap at|remaining triangle/i);
    assert.match(correct(cap,2), key==='weakCap'?/4\.5.*remaining loss/i:/4.*removed/i);
  }
  const substitute=studio('2.11.monopolistic_demand_diagram','substitutes');
  assert.match(correct(substitute,1), /shared.*4.*6.*elasticity/i);
  assert.doesNotMatch(substitute.construction[1].choices.find(c=>c.key!==substitute.construction[1].answer).label, /MR|MC/);
});

test('guided drafting preserves the original lessons, twelve summaries and frozen checklist',()=>{
  const crypto=require('node:crypto');
  const fs=require('node:fs');
  const legacy=lessons.map(({diagrams,coverage,...rest})=>rest);
  assert.equal(crypto.createHash('sha256').update(JSON.stringify(legacy)).digest('hex'),'ed3908b6ad44b15931750e220c7c18664e88053758fdbb6230ea0c9a8eebed3d');
  assert.deepEqual(lessons.flatMap(l=>l.coverage).filter(c=>c.status==='summary'),[
  {
    "id": "1.2.smith",
    "point": "18th-century Smith and laissez-faire",
    "status": "summary",
    "evidence": "section:ideas"
  },
  {
    "id": "1.2.nineteenth",
    "point": "19th-century utility, margin, Say's law and Marxist critique",
    "status": "summary",
    "evidence": "section:ideas"
  },
  {
    "id": "1.2.twentieth",
    "point": "Keynesian policy and monetarist/new classical counter-revolution",
    "status": "summary",
    "evidence": "section:ideas"
  },
  {
    "id": "1.2.twentyfirst",
    "point": "Behavioural economics, interdisciplinary links and circular economy",
    "status": "summary",
    "evidence": "section:ideas"
  },
  {
    "id": "2.3.surplus_calculation_hl",
    "point": "Calculate consumer and producer surplus from a diagram",
    "status": "summary",
    "evidence": "section:hl"
  },
  {
    "id": "2.5.ped_commodities_hl",
    "point": "Primary versus manufactured goods PED",
    "status": "summary",
    "evidence": "section:hl"
  },
  {
    "id": "2.5.yed_importance_hl",
    "point": "YED for firms and sectoral change",
    "status": "summary",
    "evidence": "section:hl"
  },
  {
    "id": "2.6.pes_commodities_hl",
    "point": "Primary versus manufactured goods PES",
    "status": "summary",
    "evidence": "section:hl"
  },
  {
    "id": "2.7.nudges_hl",
    "point": "Consumer nudges",
    "status": "summary",
    "evidence": "section:hl"
  },
  {
    "id": "2.7.controls_calculation_hl",
    "point": "Calculate price ceiling and floor market and stakeholder effects",
    "status": "summary",
    "evidence": "section:hl"
  },
  {
    "id": "2.7.tax_subsidy_calculation_hl",
    "point": "Calculate tax and subsidy market and stakeholder effects",
    "status": "summary",
    "evidence": "section:hl"
  },
  {
    "id": "2.8.welfare_calculation_hl",
    "point": "Calculate welfare loss from a diagram",
    "status": "summary",
    "evidence": "section:hl"
  }
]);
  assert.equal(crypto.createHash('sha256').update(fs.readFileSync(require.resolve('../docs/coverage-checklist.json'))).digest('hex'),'764fe949784a296fb22efe8b2c32a49198d98afc8ca1a23474165f95ced98330');
  assert.equal(lessons.flatMap(l=>l.coverage).length,113);
});

test('all frozen objectives have activated matching diagram evidence',()=>{
  const frozenIds = new Set([
    '1.1.ppc_choice_diagram',
    '1.1.ppc_growth_diagram',
    '1.1.ppc_cost_diagram',
    '1.1.circular_flow_diagram',
    '2.1.curve_diagram',
    '2.1.shifts_diagram',
    '2.2.curve_diagram',
    '2.2.shifts_diagram',
    '2.3.equilibrium_diagram',
    '2.3.changes_diagram',
    '2.3.surplus_diagram',
    '2.5.ped_diagrams',
    '2.5.ped_line_hl',
    '2.5.ped_revenue_diagram',
    '2.5.yed_engel_diagram',
    '2.6.pes_diagrams',
    '2.7.ceiling_diagram',
    '2.7.floor_diagram',
    '2.7.tax_diagram',
    '2.7.subsidy_diagram',
    '2.8.social_optimum_diagram',
    '2.8.negative_production_diagram',
    '2.8.negative_consumption_diagram',
    '2.8.positive_production_diagram',
    '2.8.positive_consumption_diagram',
    '2.8.pigouvian_diagram',
    '2.8.carbon_diagram',
    '2.8.subsidy_diagram',
    '2.8.regulation_diagram',
    '2.8.education_diagram',
    '2.11.perfect_competition_diagram',
    '2.11.perfect_profit_diagram',
    '2.11.perfect_equilibrium_diagram',
    '2.11.monopoly_diagram',
    '2.11.monopoly_welfare_diagram',
    '2.11.natural_monopoly_diagram',
    '2.11.oligopoly_diagram',
    '2.11.monopolistic_profit_diagram',
    '2.11.monopolistic_demand_diagram',
    '2.12.circular_flow_diagram',
  ]);
  assert.equal(frozenIds.size, 40);
  const coverage = lessons.flatMap(l => l.coverage);
  assert.deepEqual(Object.fromEntries(['taught','summary','omitted'].map(status => [status,coverage.filter(c => c.status === status).length])), {taught:101,summary:12,omitted:0});
  assert.equal(coverage.filter(c => frozenIds.has(c.id)).length, 40);
  for (const c of coverage.filter(c => frozenIds.has(c.id))) {
    assert.equal(c.status, 'taught');
    assert.equal(c.evidence, 'diagram:' + c.id);
  }
});

test('shift feedback distinguishes sellers supplying from buyers purchasing', () => {
  const feedback = (data, lessonId) => {
    const prediction = data.diagrams.find(d => d.id === `${lessonId}.shifts_diagram`).scenarios.find(s => s.key === 'increase').prediction;
    return prediction.feedback[prediction.answer];
  };
  const englishSupply = feedback(lessons.find(l => l.id === '2.2'), '2.2');
  assert.match(englishSupply, /sellers.*supply/i);
  for (const [locale, supply, demand] of [
    ['ja', /売り手.*供給/, /購入|購買/],
    ['ko', /판매자.*공급/, /지불/],
    ['zh-hant-hk', /賣方.*供應/, /購買/],
  ]) {
    const overlay = require(`../assets/js/content-${locale}.js`);
    assert.match(feedback(overlay['2.2'], '2.2'), supply, locale);
    assert.match(feedback(overlay['2.1'], '2.1'), demand, locale);
  }
});

// Diagram overlays are complete payloads: no inherited English leaves or overlay-owned metadata.
for (const locale of ['ja','ko','zh-hant-hk']) {
  test(`guided diagram overlay ${locale} matches every canonical field and protected value`, () => {
    const overlay = require(`../assets/js/content-${locale}.js`);
    const protectedFields = new Set(['id','scope','key','answer']);
    let studios = 0, scenarios = 0, layers = 0, extensions = 0;
    function matching(value, source, path, field) {
      if (source === null || typeof source !== 'object') {
        if (typeof source !== 'string' || protectedFields.has(field)) {
          assert.equal(value, source, path);
        } else {
          assert.equal(typeof value, 'string', path);
          assert.ok(value.trim(), path);
          assert.notEqual(value, source, `${path}: English fallback`);
          assert.match(value, /[\u3040-\u30ff\u3400-\u9fff\uac00-\ud7af]/, path);
        }
        return;
      }
      if (Array.isArray(source)) {
        assert.ok(Array.isArray(value), path);
        assert.equal(value.length, source.length, path);
        source.forEach((entry, i) => matching(value[i], entry, `${path}/${i}`, field));
      } else {
        assert.ok(value && typeof value === 'object' && !Array.isArray(value), path);
        assert.deepEqual(Object.keys(value).sort(), Object.keys(source).sort(), path);
        for (const key of Object.keys(source)) matching(value[key], source[key], `${path}/${key}`, key);
      }
    }
    for (const lesson of lessons) {
      const translated = overlay[lesson.id].diagrams;
      matching(translated, lesson.diagrams, `${locale}/${lesson.id}/diagrams`, 'diagrams');
      for (const d of translated) {
        studios++;
        for (const s of d.scenarios) {
          scenarios++; layers += s.construction.length;
          if (s.extension) extensions++;
          for (const q of [s.prediction,s.explanation,...(s.extension?[s.extension]:[])]) {
            assert.equal(new Set(q.options).size,q.options.length,`${locale}/${d.id}/${s.key}: distinct options`);
            assert.equal(new Set(q.feedback).size,q.feedback.length,`${locale}/${d.id}/${s.key}: aligned distinct feedback`);
          }
        }
      }
    }
    assert.deepEqual({studios,scenarios,layers,extensions},{studios:40,scenarios:67,layers:197,extensions:15});
  });
}
