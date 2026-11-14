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
