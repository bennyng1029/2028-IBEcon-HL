const test = require('node:test');
const assert = require('node:assert/strict');
const m = require('../assets/js/models.js');
test('PPC feasibility and opportunity cost', () => { const x=m.ppc(4,3); assert.equal(x.frontier,6); assert.equal(x.feasible,true); assert.equal(x.cost,1); assert.equal(m.ppc(4,7).feasible,false); });
test('market shifts and movements are separate', () => { const a=m.market(0,4), b=m.market(2,4), c=m.market(0,6); assert.equal(a.price,5); assert.equal(a.quantity,5); assert.equal(b.price,6); assert.equal(c.price,a.price); assert.notEqual(c.demandAtPrice,a.demandAtPrice); });
test('PED uses initial-value percentage changes and detects zero denominator', () => { assert.equal(m.ped(10,8,10,12).elasticity,-1); assert.equal(m.ped(0,2,10,11).elasticity,null); assert.equal(m.ped(10,9,10,10).elasticity,null); });
test('policy distinguishes binding controls', () => { assert.equal(m.policy('ceiling',4).binding,true); assert.equal(m.policy('ceiling',6).binding,false); assert.equal(m.policy('floor',6).binding,true); assert.equal(m.policy('floor',4).binding,false); assert.equal(m.policy('tax',2).quantity,4); assert.equal(m.policy('subsidy',2).quantity,6); });
test('externality and firm calculations', () => { assert.equal(m.externality(2).gap,1); const f=m.firm(4,3,2,5); assert.equal(f.revenue,12); assert.equal(f.cost,13); assert.equal(f.profit,-1); });
test('bounded inputs yield finite numeric outputs', () => { for(const x of [m.ppc(0,0),m.market(-4,0),m.policy('tax',0),m.externality(0),m.firm(0,0,0,0)]) for(const v of Object.values(x)) if(typeof v==='number') assert.ok(Number.isFinite(v)); });
test('market quantity is feasible at and above the choke price',()=>{assert.equal(m.market(-4,10).demandAtPrice,0);assert.equal(m.market(-4,6).demandAtPrice,0);assert.equal(m.market(4,0).demandAtPrice,14);const g=m.diagram('market',m.market(0,3));assert.deepEqual(g.points.map(p=>[p.key,p.x,p.y]),[['equilibrium',5,5],['movement',7,3]]);});
test('policy geometry represents the wedge and binding/nonbinding controls',()=>{for(const type of ['tax','subsidy'])for(const value of [0,2,10]){const v=m.policy(type,value),g=m.diagram('policy',v,type),w=g.curves.find(c=>c.key==='wedge');assert.equal(Math.abs(w.b[1]-w.a[1]),value);assert.equal(w.a[0],v.quantity);const shifted=g.curves.find(c=>c.key==='policySupply');assert.equal(shifted.a[1]-shifted.a[0],type==='tax'?value:(-value||0));}for(const type of ['floor','ceiling'])for(const value of [0,5,10]){const g=m.diagram('policy',m.policy(type,value),type);assert.deepEqual(g.curves.find(c=>c.key===type).a,[0,value]);}});
test('firm and PED diagram coordinates use actual quantities and prices',()=>{const f=m.firm(20,20,20,20),g=m.diagram('firm',f);assert.equal(g.xMax,20);assert.equal(g.yMax,420);assert.deepEqual(g.points.map(p=>[p.x,p.y]),[[20,400],[20,420]]);const d=m.diagram('ped',m.ped(20,0,0,20));assert.equal(d.xMax,20);assert.deepEqual(d.points.map(p=>[p.x,p.y]),[[20,0],[0,20]]);});

test('shifted demand endpoints and feasible movements share the model curve at shift boundaries',()=>{
  for(const shift of [-4,0,4]){
    const intercept=10+shift;
    for(const price of [0,Math.min(10,intercept)/2,Math.min(10,intercept)]){
      const g=m.diagram('market',m.market(shift,price));
      const demand=g.curves.find(c=>c.key==='shiftedDemand');
      assert.deepEqual(demand.a,[Math.max(0,intercept-10),Math.min(10,intercept)]);
      assert.deepEqual(demand.b,[intercept,0]);
      for(const [x,y] of [demand.a,demand.b]){
        assert.equal(x+y,intercept);
        assert.ok(x>=0&&x<=g.xMax&&y>=0&&y<=g.yMax);
      }
      const movement=g.points.find(p=>p.key==='movement');
      assert.equal(movement.x+movement.y,intercept);
      assert.ok(movement.x>=demand.a[0]&&movement.x<=demand.b[0]);
      assert.ok(movement.y>=demand.b[1]&&movement.y<=demand.a[1]);
    }
  }
});
test('finite initial-value inelastic PED can accompany falling revenue',()=>{const v=m.ped(10,1,1,2);assert.equal(v.elasticity,-0.9);assert.equal(v.p0*v.q0,10);assert.equal(v.p1*v.q1,2);});
test('above-choke demand has an explicit zero-demand segment and accurate marker',()=>{const g=m.diagram('market',m.market(-4,10));assert.deepEqual(g.curves.find(c=>c.key==='zeroDemand'),{key:'zeroDemand',a:[0,6],b:[0,10]});assert.deepEqual(g.points.find(p=>p.key==='zeroDemand'),{key:'zeroDemand',x:0,y:10});assert.ok(!g.points.some(p=>p.key==='movement'));});

test('guided finite dispatch rejects unknown pairs and returns real PPC geometry',()=>{
  assert.equal(m.guided('unknown','choice'),null);
  const g=m.guided('1.1.ppc_cost_diagram','increasing');
  assert.deepEqual(g.values.costs,[1,3]);
  assert.ok(g.panels[0].curves[0].points.some(([x,y])=>x===2&&y===6));
});

const fs=require('node:fs');
const inventory=[...fs.readFileSync('docs/diagram-design.md','utf8').matchAll(/^\| ([12]\.\d+\.[\w_]+) \| (.+) \|$/gm)].map(([,id,text])=>[id,[...text.matchAll(/`([^`]+)`/g)].map(m=>m[1])]);
const area=points=>Math.abs(points.reduce((sum,a,i)=>{const b=points[(i+1)%points.length];return sum+a[0]*b[1]-b[0]*a[1];},0))/2;
const close=(a,b)=>assert.ok(Math.abs(a-b)<1e-8,`${a} != ${b}`);
const get=(id,key)=>m.guided(id,key);
const main=g=>g.panels.find(p=>p.key==='main')||g.panels.at(-1);
const item=(g,key)=>main(g).curves.find(c=>c.key===key);
const regionArea=(g,key)=>area(main(g).regions.find(r=>r.key===key).points);
test('all forty studios and every registered scenario have bounded complete layer geometry',()=>{
 assert.equal(inventory.length,40);
 for(const [id,keys] of inventory){assert.equal(get(id,'invalid'),null);for(const key of keys){
 const g=get(id,key);assert.ok(g,`${id}/${key}`);assert.ok(g.layers.length>=2);assert.deepEqual(g.layers,['construct','read','compare'].slice(0,g.layers.length));
 const visible=new Set();for(const p of g.panels){assert.ok(p.xMax>0&&p.yMax>0);assert.ok(p.curves.length+p.nodes.length>0);
 for(const kind of ['curves','guides','arrows','regions','points','nodes','edges'])for(const a of p[kind]){
 assert.ok(['base',...g.layers].includes(a.layer));visible.add(a.layer);
 const coords=a.points||(kind==='nodes'?[[a.x,a.y],[a.x+a.width,a.y+a.height]]:[[a.x,a.y]]);
 for(const [x,y] of coords){assert.ok(Number.isFinite(x)&&Number.isFinite(y));assert.ok(x>=-1e-9&&x<=p.xMax+1e-9&&y>=-1e-9&&y<=p.yMax+1e-9,`${id}/${key}/${a.key} bounds ${x},${y}`);}
 if(kind==='regions'){assert.deepEqual(a.points[0],a.points.at(-1));assert.ok(area(a.points)>0);}
 } } for(const layer of ['base',...g.layers])assert.ok(visible.has(layer),`${id}/${key} missing ${layer}`);
 for(const v of Object.values(g.values))if(typeof v==='number')assert.ok(Number.isFinite(v));
 }}
});
test('PPC costs, actual growth and capacity growth are analytically distinct',()=>{
 assert.deepEqual(get('1.1.ppc_cost_diagram','constant').values.costs,[2,2]);
 const a=get('1.1.ppc_growth_diagram','actual'),c=get('1.1.ppc_growth_diagram','capacity');assert.equal(a.values.capacity,10);assert.equal(c.values.capacity,12);
 for(const [x,y] of item(get('1.1.ppc_cost_diagram','increasing'),'frontier').points)close(y,10-x*x);
 assert.equal(item(a,'newFrontier'),undefined);assert.deepEqual(item(c,'newFrontier').points,[[0,12],[12,0]]);
});
test('schedule shifts equilibrium shortages and surplus polygons agree with equations',()=>{
 for(const [id,key,curve,a,b] of [['2.1.curve_diagram','demand','demand',10,-1],['2.2.curve_diagram','supply','supply',0,1],['2.1.shifts_diagram','increase','shiftedDemand',12,-1],['2.2.shifts_diagram','increase','shiftedSupply',-2,1]])for(const [q,p] of item(get(id,key),curve).points)close(p,a+b*q);
 for(const key of ['shortage','surplus'])assert.equal(get('2.3.changes_diagram',key).values.gap,2);
 assert.deepEqual(get('2.3.changes_diagram','demandIncrease').values,{quantity:6,price:6});assert.deepEqual(get('2.3.changes_diagram','supplyIncrease').values,{quantity:6,price:4});
 const g=get('2.3.surplus_diagram','surplus');close(regionArea(g,'consumerSurplus'),12.5);close(regionArea(g,'producerSurplus'),12.5);
});
test('elasticities use common points positive domains and correct revenue rectangles',()=>{
 for(const [q,p] of item(get('2.5.ped_diagrams','unit'),'unit').points){assert.ok(q>0);close(p*q,12);}
 assert.deepEqual(get('2.5.ped_line_hl','segments').values,{upperPED:4,midPED:1,lowerPED:.25});
 for(const [key,a,b] of [['elastic',16,21],['inelastic',21,16]]){const g=get('2.5.ped_revenue_diagram',key);close(regionArea(g,'initialRevenue'),a);close(regionArea(g,'finalRevenue'),b);}
 for(const [key,yed] of [['incomeElastic',2],['incomeInelastic',.5],['inferior',-.5]])close(get('2.5.yed_engel_diagram',key).values.yed,yed);
 for(const [q,p] of item(get('2.6.pes_diagrams','unit'),'unit').points)close(p,q);
 for(const [id,p0,slopes] of [['2.5.ped_diagrams',6,[-.5,-2]],['2.6.pes_diagrams',4,[.5,2]]]){const g=get(id,'relative');['elastic','inelastic'].forEach((key,i)=>{const [[q,p],[q1,p1]]=item(g,key).points;close(p+(4-q)*(p1-p)/(q1-q),p0);close((p1-p)/(q1-q),slopes[i]);close(Math.abs(p0/(4*slopes[i])),g.values[key]);});}
});
test('policy wedges, revenue expenditure and deadweight loss have independently correct areas',()=>{
 const t=get('2.7.tax_diagram','tax2'),s=get('2.7.subsidy_diagram','subsidy2');close(regionArea(t,'taxRevenue'),8);close(regionArea(s,'subsidyExpenditure'),12);close(regionArea(t,'deadweightLoss'),1);close(regionArea(s,'deadweightLoss'),1);
 for(const [id,key] of [['2.7.ceiling_diagram','binding'],['2.7.floor_diagram','privateSales']]){const g=get(id,key);assert.equal(g.values.transactions,4);assert.equal(g.values.gap,2);}
});
test('all externalities preserve private social ordering and real policy differences',()=>{
 for(const [id,key,qm,qs] of [['negative_production','negativeProduction',5,4],['negative_consumption','negativeConsumption',5,4],['positive_production','positiveProduction',4,5],['positive_consumption','positiveConsumption',4,5]]){const g=get('2.8.'+id+'_diagram',key);assert.equal(g.values.marketQuantity,qm);assert.equal(g.values.socialQuantity,qs);close(regionArea(g,'initialLoss'),1);
 const ordinate=(name,q)=>{const [[x,y],[xx,yy]]=item(g,name).points;return y+(q-x)*(yy-y)/(xx-x);};close(ordinate('msb',qs),ordinate('msc',qs));close(ordinate('mpb',qm),ordinate('mpc',qm));
 if(id==='negative_production')close(ordinate('msc',4)-ordinate('mpc',4),2);if(id==='negative_consumption')close(ordinate('mpb',4)-ordinate('msb',4),2);if(id==='positive_production')close(ordinate('mpc',4)-ordinate('msc',4),2);if(id==='positive_consumption')close(ordinate('msb',4)-ordinate('mpb',4),2);
 }
 close(regionArea(get('2.8.pigouvian_diagram','optimalTax'),'taxRevenue'),8);close(regionArea(get('2.8.subsidy_diagram','producerSubsidy'),'subsidyExpenditure'),10);
 for(const [id,key] of [['regulation','weakCap'],['education','partial']]){const g=get('2.8.'+id+'_diagram',key);close(regionArea(g,'remainingLoss'),.25);assert.equal(g.values.quantity,4.5);}
 assert.ok(item(get('2.8.regulation_diagram','weakCap'),'quantityCap'));assert.equal(item(get('2.8.regulation_diagram','weakCap'),'informedMpb'),undefined);assert.ok(item(get('2.8.education_diagram','partial'),'informedMpb'));
 close(regionArea(get('2.8.social_optimum_diagram','optimum'),'netBenefit'),25);
});
test('firm marginal cost average cost and revenue share consistent analytic total families',()=>{
 for(const [id,keys] of inventory.filter(([id])=>id.startsWith('2.11.')&&!id.includes('demand_diagram')))for(const key of keys){const g=get(id,key),v=g.values,p=main(g),rising=id.includes('perfect_')||(id.includes('monopolistic_profit')&&key==='longRun');
 for(const [q,ac] of p.curves.find(c=>c.key==='ac').points){assert.ok(q>0);close(ac,(v.fixedCost+2*q+(rising?q*q/2:0))/q);}
 for(const [q,mc] of p.curves.find(c=>c.key==='mc').points)close(mc,2+(rising?q:0));
 for(const [q,mr] of p.curves.find(c=>c.key==='mr').points)close(mr,id.includes('perfect_')?6:10-2*q);
 close(v.totalCost,v.fixedCost+2*v.quantity+(rising?v.quantity*v.quantity/2:0));close(v.profit,v.totalRevenue-v.totalCost);
 if(!(id.includes('natural')&&key==='marginalCostPrice'))close(v.marginalCost,v.marginalRevenue);
 if(key==='loss')assert.ok(v.price>=v.avc&&v.continuationConditional);
 }
 for(const family of ['perfect_profit','monopoly','monopolistic_profit'])for(const [key,profit] of [['profit',8],['normal',0],['loss',-8]])close(get('2.11.'+family+'_diagram',key).values.profit,profit);
 const n=get('2.11.natural_monopoly_diagram','marginalCostPrice');close(n.values.averageCost,3.5);close(n.values.profit,-12);close(get('2.11.natural_monopoly_diagram','unregulated').values.averageCost,5);
 close(regionArea(get('2.11.monopoly_welfare_diagram','benchmark'),'deadweightLoss'),8);
 const lr=get('2.11.monopolistic_profit_diagram','longRun').values;close(lr.quantity,8/3);close(lr.price,22/3);close(lr.averageCost,22/3);close(lr.marginalCost,14/3);close(-lr.fixedCost/lr.quantity**2+.5,-1);assert.ok(lr.minimumACQuantity>lr.quantity);
});
test('circular flows have directed endpoint connections real money opposites and unequal income groups',()=>{
 for(const [id,key] of [['1.1.circular_flow_diagram','fiveSector'],['2.12.circular_flow_diagram','inequality']]){const g=get(id,key),p=main(g),edge=key=>p.edges.find(e=>e.key===key);
 for(const e of p.edges){const a=p.nodes.find(n=>n.key===e.from),b=p.nodes.find(n=>n.key===e.to);assert.ok(a&&b);const on=(n,[x,y])=>x>=n.x-1e-8&&x<=n.x+n.width+1e-8&&y>=n.y-1e-8&&y<=n.y+n.height+1e-8;assert.ok(on(a,e.points[0]),e.key+' source');assert.ok(on(b,e.points.at(-1)),e.key+' destination');}
 for(const [k,a,b] of [['factors','households','firms'],['income','firms','households'],['goods','firms','households'],['expenditure','households','firms'],['saving','households','finance'],['investment','finance','firms'],['tax','households','government'],['governmentSpending','government','firms'],['imports','firms','foreign'],['exports','foreign','firms']]){assert.equal(edge(k).from,a);assert.equal(edge(k).to,b);}
 if(key==='inequality'){assert.equal(edge('incomeLow').to,'householdsLow');assert.equal(edge('savingLow').to,'finance');assert.equal(edge('transfers').from,'government');assert.equal(g.values.incomeHigh+g.values.incomeLow,100);assert.equal(g.values.savingHigh,20);assert.equal(g.values.savingLow,2);}
 }
});


test('local unit PED uses one observation and revenue area without a duplicate comparison',()=>{
 const g=get('2.5.ped_revenue_diagram','unit'),p=main(g);
 assert.deepEqual(g.layers,['construct','read']);
 assert.deepEqual(p.points.map(({x,y})=>[x,y]),[[5,5]]);
 assert.equal(p.regions.length,1);close(regionArea(g,'initialRevenue'),25);
 assert.equal(g.values.localUnit,true);
});
test('normal-profit cases omit coincident profit geometry and retain only meaningful layers',()=>{
 for(const [id,key] of [['2.11.perfect_profit_diagram','normal'],['2.11.monopoly_diagram','normal'],['2.11.monopolistic_profit_diagram','normal'],['2.11.perfect_competition_diagram','priceTaker'],['2.11.perfect_equilibrium_diagram','longRun'],['2.11.monopolistic_profit_diagram','longRun']]){
 const g=get(id,key),p=main(g);close(g.values.profit,0);
 assert.ok(!p.curves.concat(p.regions).some(item=>item.key==='profit'));
 if(g.panels.length===1&&key!=='longRun')assert.deepEqual(g.layers,['construct','read']);
 else assert.ok(g.panels.some(panel=>panel.arrows.some(a=>a.layer==='compare')));
 }
});
test('every firm marginal intersection lies on both MR and MC independently of regulation',()=>{
 for(const [id,keys] of inventory.filter(([id])=>id.startsWith('2.11.')&&!id.includes('demand_diagram')))for(const key of keys){
 const g=get(id,key),p=main(g),a=p.points.find(a=>a.key==='marginalIntersection');
 const rising=id.includes('perfect_')||(id.includes('monopolistic_profit')&&key==='longRun');
 close(a.y,2+(rising?a.x:0));close(a.y,id.includes('perfect_')?6:10-2*a.x);
 }
 const p=main(get('2.11.natural_monopoly_diagram','marginalCostPrice'));
 assert.deepEqual(p.points.filter(a=>['chosenOutput','marginalIntersection'].includes(a.key)).map(({key,x,y})=>[key,x,y]),[['chosenOutput',8,2],['marginalIntersection',4,2]]);
});

test('affected construction layers add geometry beyond prior visible primitives',()=>{
 const cases=[['2.5.ped_revenue_diagram','unit'],['2.11.perfect_profit_diagram','normal'],['2.11.monopoly_diagram','normal'],['2.11.monopolistic_profit_diagram','normal'],['2.11.perfect_competition_diagram','priceTaker'],['2.11.perfect_equilibrium_diagram','longRun']];
 for(const [id,key] of cases){const g=get(id,key),seen=new Set();
 for(const layer of ['base',...g.layers]){let novel=false;
 for(const p of g.panels)for(const kind of ['curves','guides','arrows','regions','points','nodes','edges'])for(const a of p[kind].filter(a=>a.layer===layer)){
 // Curves and guides with identical paths count as the same visible stroke.
 const signature=JSON.stringify([p.key,['curves','guides'].includes(kind)?'stroke':kind,a.points||[a.x,a.y,a.width,a.height]]);
 if(!seen.has(signature))novel=true;seen.add(signature);
 }
 assert.ok(novel,`${id}/${key}/${layer} must add visible geometry`);
 }
 }
});
