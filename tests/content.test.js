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
    for (const c of l.coverage) { assert.ok(['taught','summary','omitted'].includes(c.status)); assert.ok(c.point && c.evidence); if (c.status !== 'omitted') assert.ok(['worked','quiz','challenge',...l.sections.map(s => 'section:'+s.id)].includes(c.evidence)); }
  }
});

test('classic-script contract and coverage scope remain consistent', () => {
  const keys = ['id','unit','title','summary','question','scope','concepts','terms','sections','model','modelPrompt','modelAssumption','modelLimitation','worked','quiz','challenge','coverage'];
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
        assert.equal(point.status, 'omitted', point.id);
        assert.match(point.evidence, /diagram/i, point.id);
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
      assert.deepEqual(Object.keys(t).sort(), ['title','summary','question','terms','sections','modelPrompt','modelAssumption','modelLimitation','worked','quiz','challenge','coverage'].sort());
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
