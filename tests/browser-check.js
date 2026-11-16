// Run with an existing Chrome CDP on 9222 and workspace-only HTTP server on 8765.
const fs=require('node:fs');const assert=require('node:assert/strict');
(async()=>{const pages=await(await fetch('http://127.0.0.1:9222/json')).json();const ws=new WebSocket(pages.find(p=>p.type==='page').webSocketDebuggerUrl);await new Promise(r=>ws.onopen=r);let seq=0;const pending=new Map();const errors=[],requests=[];ws.onmessage=e=>{const m=JSON.parse(e.data);if(m.id){const p=pending.get(m.id);pending.delete(m.id);m.error?p.reject(m.error):p.resolve(m.result);}if(m.method==='Runtime.exceptionThrown')errors.push(m.params.exceptionDetails);if(m.method==='Network.requestWillBeSent')requests.push(m.params.request.url);};const send=(method,params={})=>new Promise((resolve,reject)=>{const id=++seq;pending.set(id,{resolve,reject});ws.send(JSON.stringify({id,method,params}));});const ev=async expression=>{const r=await send('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true});if(r.exceptionDetails)throw Error(JSON.stringify(r.exceptionDetails)+' expression '+expression);return r.result.value;};const wait=async()=>{const end=Date.now()+5000;while(Date.now()<end){if(await ev(`document.readyState==='complete' && !!document.querySelector('#main h1')`))return;await new Promise(r=>setTimeout(r,30));}throw Error('Render readiness timeout');};const nav=async url=>{await send('Page.navigate',{url});await wait();};await send('Page.enable');await send('Runtime.enable');await send('Network.enable');await send('Network.setCacheDisabled',{cacheDisabled:true});console.log(await send('Browser.getVersion'));

// --diagrams-only omits legacy regressions; --smoke samples scenario families.
// Default runs all 536 scenario/locale/protocol cases and all 320 mobile studio views.
const options=new Set(process.argv.slice(2));let diagramCases=0,mobileCases=0;
await nav('http://127.0.0.1:8765/course/index.html');
const studios=await ev(`ECON_LESSONS.flatMap(l=>(l.diagrams||[]).map(d=>({lesson:l.id,id:d.id,scenarios:d.scenarios.map(s=>s.key)})))`);
assert.equal(studios.length,40);assert.equal(studios.reduce((n,d)=>n+d.scenarios.length,0),67);
const frozen=[...fs.readFileSync(require.resolve('../docs/diagram-design.md'),'utf8').matchAll(/^\| ([12]\.[^ |]+) \| ([^|]+) \|/gm)].map(m=>({id:m[1],scenarios:[...m[2].matchAll(/`([^`]+)`/g)].map(x=>x[1])}));assert.deepEqual(studios.map(({id,scenarios})=>({id,scenarios})),frozen);
// Targeted coverage navigation gate: all canonical references, languages and protocols.
if(options.has('--coverage-only')){
 let mappings=0,navigations=0;
 for(const base of ['file:///home/bennyng/2028-IBEconAA-HL/index.html','http://127.0.0.1:8765/course/index.html']){
  await nav(base);
  for(const loc of ['en','ja','ko','zh-Hant-HK']){
   await ev(`document.getElementById('language').value=${JSON.stringify(loc)};document.getElementById('language').dispatchEvent(new Event('change'))`);
   await nav(base+'#coverage');
   const refs=await ev(`(()=>{if(/diagram:[12]\\./.test(document.getElementById('main').innerText))throw Error('raw reference');const rows=[...document.querySelectorAll('table tr')].filter(r=>r.querySelector('td'));ECON_LESSONS.flatMap(l=>l.coverage.map((c,i)=>({l,c,i}))).forEach(({l,c,i},index)=>{const cells=rows[index].querySelectorAll('td');if(cells[1].textContent!==ECON_UI[document.documentElement.lang][c.status])throw Error('status changed');if(!c.evidence.startsWith('diagram:')){const expected=c.status==='omitted'&&document.documentElement.lang!=='en'?ECON_TRANSLATIONS[document.documentElement.lang][l.id].coverage[i].omissionExplanation:c.evidence;if(cells[2].textContent!==expected)throw Error('other evidence changed');}});return ECON_LESSONS.flatMap(l=>l.coverage.filter(c=>c.evidence.startsWith('diagram:')).map(c=>{const id=c.evidence.slice(8),d=l.diagrams.find(d=>d.id===id),title=document.documentElement.lang==='en'?d.title:ECON_TRANSLATIONS[document.documentElement.lang][l.id].diagrams.find(d=>d.id===id).title,hash='#lesson/'+l.id+'/diagram/'+id,a=[...document.querySelectorAll('td a')].find(a=>a.getAttribute('href')===hash);if(!a||a.textContent!==title)throw Error('mapping '+id);return {id,hash};}));})()`);
   assert.equal(refs.length,40);mappings+=refs.length;
   for(const [index,ref] of refs.entries()){
    await nav(base+'#coverage');
    await ev(`document.querySelector('td a[href="'+${JSON.stringify(ref.hash)}+'"]').focus()`);
    if(index%2){await send('Input.dispatchKeyEvent',{type:'keyDown',key:'Enter',code:'Enter',windowsVirtualKeyCode:13,text:'\r'});await send('Input.dispatchKeyEvent',{type:'keyUp',key:'Enter',code:'Enter',windowsVirtualKeyCode:13});}
    else await ev(`document.activeElement.click()`);
    // CDP input resolves before the hashchange task in some Chrome versions.
    for(let attempt=0;attempt<100;attempt++){if(await ev(`location.hash===${JSON.stringify(ref.hash)} && document.activeElement.closest('.guided-studio')?.dataset.objective===${JSON.stringify(ref.id)}`))break;await new Promise(r=>setTimeout(r,10));}
    assert.ok(await ev(`document.documentElement.lang===${JSON.stringify(loc)} && document.activeElement.tagName==='SUMMARY' && document.activeElement.parentElement.open && document.activeElement.parentElement.dataset.objective===${JSON.stringify(ref.id)}`),ref.id+' '+loc);
    navigations++;
   }
   const ref=refs[0];await nav(base+'?coverage-reload='+loc+ref.hash);
   assert.ok(await ev(`document.activeElement.parentElement?.dataset.objective===${JSON.stringify(ref.id)} && document.activeElement.parentElement.open`));
   // Reload starts a new document with the existing default English locale.
   await ev(`document.getElementById('language').focus();document.getElementById('language').value=${JSON.stringify(loc)};document.getElementById('language').dispatchEvent(new Event('change'))`);
   assert.ok(await ev(`document.documentElement.lang===${JSON.stringify(loc)} && document.querySelector('.guided-studio[open]').dataset.objective===${JSON.stringify(ref.id)}`));
   assert.equal(await ev('document.activeElement.id'),'language');
   await ev(`document.getElementById('skip').click()`);assert.equal(await ev('document.activeElement.id'),'main');assert.equal(await ev('location.hash'),ref.hash);
   for(const hash of ['#lesson/1.1/diagram/no-such-id','#lesson/1.1/diagram/1.1.ppc_cost_diagram/extra','#%E0%A4%A']){await nav(base+hash);assert.ok(await ev('!!document.querySelector("progress")'));}
  }
 }
 assert.equal(errors.length,0,JSON.stringify(errors));console.log(JSON.stringify({coverageMappings:mappings,coverageNavigations:navigations,errors:errors.length}));ws.close();return;
}
const sampleIds=['1.1.ppc_cost_diagram','1.1.circular_flow_diagram','2.5.ped_diagrams','2.7.tax_diagram','2.8.negative_production_diagram','2.11.perfect_competition_diagram','2.11.monopolistic_profit_diagram','2.11.natural_monopoly_diagram','2.12.circular_flow_diagram'];
const selected=options.has('--smoke')?studios.filter(d=>sampleIds.includes(d.id)):studios;
for(const base of ['file:///home/bennyng/2028-IBEconAA-HL/index.html','http://127.0.0.1:8765/course/index.html']){
 await nav(base);
 for(const loc of ['en','ja','ko','zh-Hant-HK']){
  await send('Emulation.setDeviceMetricsOverride',{width:1280,height:1000,deviceScaleFactor:1,mobile:false});
  await ev(`document.getElementById('language').value=${JSON.stringify(loc)};document.getElementById('language').dispatchEvent(new Event('change'))`);
  assert.ok(await ev(`!!document.querySelector('.locale-reset-notice[role=status]')`));
  for(const studio of selected){await nav(base+'#lesson/'+studio.lesson);
   for(const scenario of studio.scenarios){
    const result=await ev(`(()=>{
     const fail=message=>{throw Error(${JSON.stringify(studio.id+' / '+scenario+' / '+loc+': ')}+message)};
     const canonical=ECON_LESSONS.find(l=>l.id===${JSON.stringify(studio.lesson)}).diagrams.find(d=>d.id===${JSON.stringify(studio.id)}),s=canonical.scenarios.find(s=>s.key===${JSON.stringify(scenario)}),g=ECON_MODELS.guided(canonical.id,s.key);
     const d=[...document.querySelectorAll('.guided-studio')].find(d=>d.dataset.objective===canonical.id);d.open=true;const select=d.querySelector('select');select.value=canonical.scenarios.indexOf(s);select.dispatchEvent(new Event('change'));
     const geometry=()=>[...d.querySelectorAll('[data-geometry]')],desc=()=>d.querySelector('svg desc').textContent;
     if(!d.querySelector('svg[role=img]')||!desc()||geometry().some(x=>x.dataset.layer!=='base'))fail('initial geometry/description');
     const expectedBase=s.baseDescription;const localized=${JSON.stringify(loc)}==='en'?s:ECON_TRANSLATIONS[${JSON.stringify(loc)}][${JSON.stringify(studio.lesson)}].diagrams.find(x=>x.id===canonical.id).scenarios.find(x=>x.key===s.key);
     if(desc()!==localized.baseDescription)fail('localized base description');
     const answer=(key,index)=>{const field=d.querySelector('[data-question='+key+']');field.querySelectorAll('input')[index].checked=true;field.querySelector('button').click();return field.querySelector('.feedback').textContent;};
     for(let i=0;i<s.prediction.options.length;i++)if(i!==s.prediction.answer){if(!answer('prediction',i).includes(ECON_UI[${JSON.stringify(loc)}].incorrect))fail('wrong prediction');if(d.dataset.built!=='0')fail('wrong prediction advances');}
     if(!answer('prediction',s.prediction.answer).includes(ECON_UI[${JSON.stringify(loc)}].correct))fail('correct prediction');
     let before=geometry().length;
     s.construction.forEach((step,i)=>{const section=d.querySelector('[data-step='+step.key+']');for(const choice of step.choices.filter(c=>c.key!==step.answer)){section.querySelector('[data-choice='+choice.key+']').click();if(Number(d.dataset.built)!==i||geometry().length!==before)fail('wrong layer advances');}
      const button=section.querySelector('[data-choice='+step.answer+']');button.focus();button.click();if(document.activeElement!==button)fail('focus lost');if(Number(d.dataset.built)!==i+1||geometry().length<=before)fail('layer missing');if(!geometry().some(x=>x.dataset.layer===step.key)||!desc().includes(localized.construction[i].description))fail('layer geometry/description');before=geometry().length;
     });
     if(d.dataset.state!=='constructed')fail('completion state');d.querySelector('[data-action=compare]').click();if(d.querySelectorAll('svg').length!==g.panels.length*2)fail('comparison panels');
     for(const svg of d.querySelectorAll('svg')){if(svg.querySelector('title').id.includes('-initial-')&&svg.querySelector('desc').textContent!==localized.baseDescription)fail('initial description leak');}
     for(const svg of d.querySelectorAll('svg')){
      const labels=[...svg.querySelectorAll('[data-annotation]')];
      for(let i=0;i<labels.length;i++){
       const a=labels[i].getBBox();if(a.x<90||a.x+a.width>720||a.y<60||a.y+a.height>445)fail('annotation outside plot: '+labels[i].dataset.annotation);
       for(const b of labels.slice(i+1).map(x=>x.getBBox()))if(a.x<b.x+b.width+3&&a.x+a.width+3>b.x&&a.y<b.y+b.height+3&&a.y+a.height+3>b.y)fail('overlapping annotations: '+labels[i].dataset.annotation);
      }
      if(labels.some(x=>!x.querySelector('title')?.textContent))fail('annotation identity missing');
     }
     for(const key of ['explanation',...(s.extension?['extension']:[])]){const data=s[key];if(key==='extension')d.querySelector('[data-question=extension]').parentElement.open=true;for(let i=0;i<data.options.length;i++)if(!answer(key,i).includes(ECON_UI[${JSON.stringify(loc)}][i===data.answer?'correct':'incorrect']))fail(key+' feedback');}
     const ids=[...document.querySelectorAll('svg [id]')].map(x=>x.id);if(ids.length!==new Set(ids).size)fail('duplicate SVG ID');for(const svg of document.querySelectorAll('svg'))for(const el of svg.querySelectorAll('*'))for(const a of el.attributes){if(a.name==='aria-labelledby')for(const id of a.value.split(/\s+/))if(!svg.querySelector('[id="'+id+'"]'))fail('unresolved accessible reference');for(const match of a.value.matchAll(/url\(#([^)]*)\)/g))if(!svg.querySelector('[id="'+match[1]+'"]'))fail('unresolved SVG reference');}
     d.querySelector('[data-action=reset]').click();if(d.dataset.built!=='0'||geometry().some(x=>x.dataset.layer!=='base')||d.querySelector('input:checked')||[...d.querySelectorAll('.feedback')].some(x=>x.textContent))fail('reset');
     d.querySelector('[data-action=reveal]').click();if(d.dataset.state!=='revealed'||d.dataset.built!=='0'||!g.layers.every(layer=>geometry().some(x=>x.dataset.layer===layer)))fail('reveal');d.querySelector('[data-action=compare]').click();if(d.querySelectorAll('svg').length!==g.panels.length*2)fail('reveal comparison');
     if(/NaN|undefined|English fallback|英語に代替|영어 대체|以英文代替/.test(d.innerText))fail('invalid/fallback text');
     d.querySelector('[data-action=reset]').click();select.dispatchEvent(new Event('change'));if(d.dataset.built!=='0')fail('scenario reset');
     return {layers:g.layers.length,panels:g.panels.length};
    })()`);assert.ok(result.layers>=2);diagramCases++;
   }
  }
  // Real keyboard activation: Tab navigation from summary to the prediction and ordered layers.
  if(base.startsWith('http'))for(const studio of selected.filter(d=>sampleIds.includes(d.id))){
   await nav(base+'#lesson/'+studio.lesson);
   const selector='.guided-studio[data-objective="'+studio.id+'"]';
   await ev(`(()=>{const d=document.querySelector(${JSON.stringify(selector)});d.open=false;const s=d.querySelector('select');s.value=0;s.dispatchEvent(new Event('change'));d.querySelector('summary').focus();})()`);
   const key=async(name,code,num)=>{await send('Input.dispatchKeyEvent',{type:'keyDown',key:name,code,windowsVirtualKeyCode:num,text:name==='Enter'?'\r':name===' '?' ':undefined});await send('Input.dispatchKeyEvent',{type:'keyUp',key:name,code,windowsVirtualKeyCode:num});};
   await key(' ','Space',32);
   const tabTo=async target=>{for(let i=0;i<120;i++){if(await ev(`document.activeElement.matches(${JSON.stringify(selector+' '+target)})`))return;await key('Tab','Tab',9);}throw Error('Keyboard target '+studio.id+' '+target);};
   const data=await ev(`(()=>{const d=ECON_LESSONS.flatMap(l=>l.diagrams||[]).find(d=>d.id===${JSON.stringify(studio.id)});return d.scenarios[0];})()`);
   await tabTo('[data-question=prediction] input');for(let i=0;i<data.prediction.answer;i++)await key('ArrowDown','ArrowDown',40);await key(' ','Space',32);await tabTo('[data-question=prediction] button');await key('Enter','Enter',13);
   for(const step of data.construction){await tabTo('[data-step='+step.key+'] [data-choice='+step.answer+']');await key('Enter','Enter',13);}
   await tabTo('[data-action=compare]');await key('Enter','Enter',13);assert.ok(await ev(`document.querySelector(${JSON.stringify(selector)}).querySelectorAll('svg').length>=2`));
   if(options.has('--screenshots')){await ev(`document.querySelector(${JSON.stringify(selector)}+' figcaption').scrollIntoView({block:'start'})`);const shot=await send('Page.captureScreenshot',{format:'png'});fs.writeFileSync('/tmp/diagram-'+studio.id+'-'+loc+'-desktop.png',Buffer.from(shot.data,'base64'));await ev(`[...document.querySelectorAll(${JSON.stringify(selector)}+' figcaption')].at(-1).scrollIntoView({block:'start'})`);const final=await send('Page.captureScreenshot',{format:'png'});fs.writeFileSync('/tmp/diagram-'+studio.id+'-'+loc+'-desktop-final.png',Buffer.from(final.data,'base64'));}
  }
  await send('Emulation.setDeviceMetricsOverride',{width:375,height:812,deviceScaleFactor:1,mobile:true});
  for(const studio of selected){await nav(base+'#lesson/'+studio.lesson);await ev(`(()=>{const d=[...document.querySelectorAll('.guided-studio')].find(d=>d.dataset.objective===${JSON.stringify(studio.id)});d.open=true;d.querySelector('[data-action=reveal]').click();d.querySelector('figcaption').scrollIntoView({block:'start'});})()`);assert.ok(await ev(`document.documentElement.scrollWidth<=375 && innerWidth<=375`),studio.id+' '+loc+' mobile overflow');assert.ok(await ev(`(()=>{const d=[...document.querySelectorAll('.guided-studio')].find(d=>d.dataset.objective===${JSON.stringify(studio.id)});return [...d.querySelectorAll('.diagram-scroll')].every(x=>x.clientWidth>0&&x.scrollWidth>=x.clientWidth);})()`));mobileCases++;
   if(options.has('--screenshots')&&base.startsWith('http')&&sampleIds.includes(studio.id)){const shot=await send('Page.captureScreenshot',{format:'png'});fs.writeFileSync('/tmp/diagram-'+studio.id+'-'+loc+'-mobile.png',Buffer.from(shot.data,'base64'));await ev(`(()=>{const d=[...document.querySelectorAll('.guided-studio')].find(d=>d.dataset.objective===${JSON.stringify(studio.id)});const s=d.querySelector('.diagram-scroll');s.scrollLeft=s.scrollWidth;})()`);const right=await send('Page.captureScreenshot',{format:'png'});fs.writeFileSync('/tmp/diagram-'+studio.id+'-'+loc+'-mobile-right.png',Buffer.from(right.data,'base64'));await ev(`(()=>{const d=[...document.querySelectorAll('.guided-studio')].find(d=>d.dataset.objective===${JSON.stringify(studio.id)});const s=d.querySelector('.diagram-scroll');s.scrollLeft=(s.scrollWidth-s.clientWidth)/2;})()`);const middle=await send('Page.captureScreenshot',{format:'png'});fs.writeFileSync('/tmp/diagram-'+studio.id+'-'+loc+'-mobile-middle.png',Buffer.from(middle.data,'base64'));}
  }
  await send('Emulation.clearDeviceMetricsOverride');
 }
}
// Distinct outcome captures and bounds checks for the dense economic families.
if(options.has('--annotation-visuals'))for(const loc of ['en','ja','ko','zh-Hant-HK'])for(const width of [1280,375]){
 await nav('http://127.0.0.1:8765/course/index.html');await ev(`document.getElementById('language').value=${JSON.stringify(loc)};document.getElementById('language').dispatchEvent(new Event('change'))`);
 await send('Emulation.setDeviceMetricsOverride',{width,height:1000,deviceScaleFactor:1,mobile:width===375});
 for(const studio of studios.filter(d=>/tax_diagram|2.8.*(?:production|consumption)_diagram|perfect_competition_diagram|monopolistic_profit_diagram/.test(d.id)))for(const scenario of studio.scenarios){
  await nav('http://127.0.0.1:8765/course/index.html#lesson/'+studio.lesson);
  await ev(`(()=>{const d=document.querySelector('.guided-studio[data-objective="'+${JSON.stringify(studio.id)}+'"]');d.open=true;const s=d.querySelector('select');s.value=${studio.scenarios.indexOf(scenario)};s.dispatchEvent(new Event('change'));d.querySelector('[data-action=reveal]').click();d.querySelector('figcaption').scrollIntoView({block:'start'});})()`);
  const count=await ev(`document.querySelector('.guided-studio[data-objective="'+${JSON.stringify(studio.id)}+'"]').querySelectorAll('.diagram-scroll').length`);
  for(let panel=0;panel<count;panel++){
   await ev(`(()=>{const s=document.querySelector('.guided-studio[data-objective="'+${JSON.stringify(studio.id)}+'"]').querySelectorAll('.diagram-scroll')[${panel}];s.scrollLeft=(s.scrollWidth-s.clientWidth)/2;s.scrollIntoView({block:'start'});})()`);
   const shot=await send('Page.captureScreenshot',{format:'png'});fs.writeFileSync('/tmp/diagram-fix1-'+studio.id+'-'+scenario+'-'+loc+'-'+width+'-panel'+panel+'.png',Buffer.from(shot.data,'base64'));
  }
 }
}
console.log(JSON.stringify({diagramCases,mobileCases,mode:options.has('--smoke')?'smoke':'full'}));
if(options.has('--diagrams-only')){assert.equal(errors.length,0,JSON.stringify(errors));ws.close();return;}

let cases=0;for(const base of ['file:///home/bennyng/2028-IBEconAA-HL/index.html','http://127.0.0.1:8765/course/index.html']){await nav(base);assert.equal(await ev('document.querySelectorAll("#main .card").length'),14);for(const loc of ['en','ja','ko','zh-Hant-HK']){await ev(`document.getElementById('language').value='${loc}';document.getElementById('language').dispatchEvent(new Event('change'))`);for(const model of ['ppc','market','ped','policy','externality','firm']){const id=await ev(`ECON_LESSONS.find(l=>l.model==='${model}').id`);await nav(base+'#lesson/'+id);assert.equal(await ev('document.documentElement.lang'),loc);const state=await ev(`(()=>{const p=[...document.querySelectorAll('#main section.panel')].find(x=>x.querySelector('svg'));const inputs=[...p.querySelectorAll('input[type=range]')];const initial=inputs.map(x=>x.value);for(const x of inputs){x.value=x.max;x.dispatchEvent(new Event('input'));}const finite=!/NaN|Infinity/.test(p.innerText);p.querySelector('button').click();return {initial,reset:inputs.map(x=>x.value),finite,prompt:p.innerText.includes(ECON_UI['${loc}'].predict),axes:[...p.querySelectorAll('svg text')].map(x=>x.textContent)};})()`);assert.deepEqual(state.initial,state.reset);assert.ok(state.finite&&state.prompt);assert.ok(state.axes.every(Boolean));assert.ok(await ev(`!!document.querySelector('.graph-legend li') && !!document.querySelector('.feedback') && !!document.querySelector('button.primary')`));cases++;}
// Every lesson and every quiz option must yield feedback.
for(const id of await ev('ECON_LESSONS.map(x=>x.id)')){await nav(base+'#lesson/'+id);assert.ok(await ev(`!!document.querySelector('button.primary')`));assert.ok(await ev(`(()=>{const q=document.querySelector('.lesson-quiz');for(const r of q.querySelectorAll('input')){r.checked=true;q.querySelector('button').click();if(!q.querySelector('.feedback').textContent)return false;}return true;})()`));}
await nav(base+'#coverage');assert.equal(await ev("document.querySelectorAll('table tr').length"),127);
}for(const hash of ['#lesson/999','#%E0%A4%A','#unknown']){await nav(base+hash);assert.ok(await ev('document.querySelector("progress")!==null'));}
await nav(base+'#lesson/1.1');await ev(`document.querySelector('button.primary').click()`);await nav(base+'#home');assert.equal(await ev('document.querySelector("progress").value'),1);await ev(`document.querySelector('#main button').click()`);assert.equal(await ev('document.querySelector("progress").value'),0);
await send('Emulation.setDeviceMetricsOverride',{width:375,height:812,deviceScaleFactor:1,mobile:true});for(const hash of ['#home','#coverage','#lesson/2.7']){await nav(base+hash);assert.ok(await ev('document.documentElement.scrollWidth<=innerWidth'),hash+' overflow');}await send('Page.captureScreenshot',{format:'png'}).then(r=>fs.writeFileSync('/tmp/econ-mobile.png',Buffer.from(r.data,'base64')));await send('Emulation.clearDeviceMetricsOverride');}
// Actual movement marker and stable equilibrium remain separate; mobile map starts compact.
await nav('http://127.0.0.1:8765/course/index.html#lesson/2.1');
assert.ok(await ev(`(()=>{const p=document.querySelector('.model-grid');const input=p.querySelectorAll('input')[1];const before=p.querySelector('[data-point=equilibrium]').getAttribute('cx');input.value=3;input.dispatchEvent(new Event('input'));const eq=p.querySelector('[data-point=equilibrium]'),move=p.querySelector('[data-point=movement]');return eq.getAttribute('cx')===before && Number(move.getAttribute('x'))>Number(eq.getAttribute('cx'));})()`));
await send('Emulation.setDeviceMetricsOverride',{width:375,height:812,deviceScaleFactor:1,mobile:true});await nav('http://127.0.0.1:8765/course/index.html#lesson/1.1');
assert.equal(await ev('document.querySelector(".lesson-menu").open'),false);await send('Emulation.clearDeviceMetricsOverride');
// Keyboard focuses native locale select and changes its value via keyboard.
await nav('http://127.0.0.1:8765/course/index.html#lesson/2.1');await ev(`const localeSelect=document.getElementById('language');localeSelect.value='en';localeSelect.dispatchEvent(new Event('change'));localeSelect.focus()`);await send('Input.dispatchKeyEvent',{type:'keyDown',key:'ArrowDown',code:'ArrowDown',windowsVirtualKeyCode:40});await send('Input.dispatchKeyEvent',{type:'keyUp',key:'ArrowDown',code:'ArrowDown',windowsVirtualKeyCode:40});await wait();assert.equal(await ev('document.activeElement.id'),'language');assert.equal(await ev('document.getElementById("language").value'),'ja');assert.equal(await ev('document.documentElement.lang'),'ja');
// Missing translation fallback is visible and canonical content remains intact.
assert.ok(await ev(`(()=>{const s=document.getElementById('language');s.value='ja';s.dispatchEvent(new Event('change'));delete ECON_TRANSLATIONS.ja['2.1'].summary;location.hash='home';return true;})()`));await wait();assert.ok(await ev(`document.getElementById('main').innerText.includes(ECON_UI.ja.fallback)`));
// Skip activation preserves lesson/search routes and places keyboard focus in main.
for(const hash of ['#lesson/2.1','#search']){
await nav('http://127.0.0.1:8765/course/index.html'+hash);
await ev(`document.getElementById('skip').focus()`);
await send('Input.dispatchKeyEvent',{type:'keyDown',key:'Enter',code:'Enter',windowsVirtualKeyCode:13});
await send('Input.dispatchKeyEvent',{type:'keyUp',key:'Enter',code:'Enter',windowsVirtualKeyCode:13});
assert.deepEqual(await ev(`({hash:location.hash,focus:document.activeElement.id})`),{hash,focus:'main'});
}
await nav('http://127.0.0.1:8765/course/index.html#lesson/2.1');
assert.ok(await ev(`(()=>{const p=document.querySelector('.model-grid');const i=p.querySelectorAll('input');i[0].value=-4;i[1].value=10;i[0].dispatchEvent(new Event('input'));const line=p.querySelector('[data-curve=zeroDemand]'),point=p.querySelector('[data-point=zeroDemand]');return line && point && Number(line.getAttribute('x1'))===48 && Number(line.getAttribute('y1'))===106 && Number(line.getAttribute('y2'))===38 && Number(point.getAttribute('x'))+3===48 && Number(point.getAttribute('y'))+3===38 && !p.querySelector('[data-point=movement]') && p.innerText.includes(ECON_UI[document.documentElement.lang].zeroDemand);})()`));
// A successful read followed by failed writes must explicitly disclose failed reset.
const failedWrite=await send('Page.addScriptToEvaluateOnNewDocument',{source:`Object.defineProperty(window,'localStorage',{value:{getItem(){return '{"1.1":true}'},setItem(){throw new Error('write failed')}}})`});
await nav('http://127.0.0.1:8765/course/index.html?failedWrite=1#home');assert.equal(await ev('document.querySelector("progress").value'),1);await ev(`document.querySelector('#main button').click()`);assert.equal(await ev('document.querySelector("progress").value'),0);assert.ok(await ev(`document.getElementById('main').innerText.includes(ECON_UI.en.resetFailed)`));await nav('http://127.0.0.1:8765/course/index.html?failedWrite=2#home');assert.equal(await ev('document.querySelector("progress").value'),1);await send('Page.removeScriptToEvaluateOnNewDocument',{identifier:failedWrite.identifier});
await send('Page.addScriptToEvaluateOnNewDocument',{source:`Object.defineProperty(window,'localStorage',{get(){throw new Error('blocked storage')}})`});await nav('http://127.0.0.1:8765/course/index.html');assert.ok(await ev(`document.querySelector('#main').innerText.includes(ECON_UI.en.storageOff)`));await nav('http://127.0.0.1:8765/course/index.html#lesson/1.1');await ev(`document.querySelector('button.primary').click()`);await nav('http://127.0.0.1:8765/course/index.html#home');assert.equal(await ev('document.querySelector("progress").value'),1);await send('Page.captureScreenshot',{format:'png'}).then(r=>fs.writeFileSync('/tmp/econ-desktop.png',Buffer.from(r.data,'base64')));assert.equal(errors.length,0);assert.ok(requests.every(x=>/^(file:|http:\/\/127\.0\.0\.1:8765\/|about:)/.test(x)),JSON.stringify(requests));console.log(JSON.stringify({matrixCases:cases,quizCases:112,errors:errors.length,networkLocalOnly:true,mobileOverflow:false,storageFailurePassed:true}));ws.close();})().catch(e=>{console.error(e);process.exit(1);});
