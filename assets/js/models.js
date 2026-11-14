// Illustrative linear models. Inputs are finite numbers within the UI's stated ranges.
(function (root) {
  const clamp = (x, lo, hi) => Math.max(lo, Math.min(hi, Number.isFinite(+x) ? +x : lo));
  const models = {
    // x,y in [0,10]; frontier x+y=10; marginal cost of x is one y.
    ppc(x,y) { x=clamp(x,0,10); y=clamp(y,0,10); return {x,y,frontier:10-x,feasible:y<=10-x,cost:1}; },
    // Demand Q=10+shift-P; supply Q=P. Movement varies price, not equilibrium.
    market(shift,price) { shift=clamp(shift,-4,4); price=clamp(price,0,10); return {price:(10+shift)/2,quantity:(10+shift)/2,demandAtPrice:Math.max(0,10+shift-price),chosenPrice:price,shift}; },
    // Initial-value percentage changes, undefined if initial Q/P or price change is zero.
    ped(q0,q1,p0,p1) { q0=clamp(q0,0,20); q1=clamp(q1,0,20); p0=clamp(p0,0,20); p1=clamp(p1,0,20); return {q0,q1,p0,p1,elasticity:q0===0||p0===0||p1===p0?null:((q1-q0)/q0)/((p1-p0)/p0)}; },
    // Demand Q=10-P, supply Q=P; tax/subsidy per unit [0,10]; price controls [0,10].
    policy(type,value) { value=clamp(value,0,10); let buyer=5,seller=5,quantity=5,binding=false; if(type==='tax'){buyer=5+value/2;seller=5-value/2;quantity=seller;} else if(type==='subsidy'){buyer=5-value/2;seller=5+value/2;quantity=seller;} else if(type==='ceiling'){binding=value<5;if(binding){buyer=seller=value;quantity=value;}} else if(type==='floor'){binding=value>5;if(binding){buyer=seller=value;quantity=10-value;}} return {buyer,seller,quantity,binding,value}; },
    // Marginal external cost in [0,10]; MPB=10-Q and MPC=Q.
    externality(cost) { cost=clamp(cost,0,10); const market=5, social=(10-cost)/2; return {market,social,gap:market-social,loss:(market-social)*cost/2,cost}; },
    // Quantity, price, variable cost per unit and fixed cost in [0,20].
    firm(q,p,variable,fixed) { q=clamp(q,0,20); p=clamp(p,0,20); variable=clamp(variable,0,20); fixed=clamp(fixed,0,20); const revenue=q*p,cost=fixed+q*variable; return {revenue,cost,profit:revenue-cost,q,p,variable,fixed}; }
  };

  // Canonical diagram geometry in the same numeric units as model outputs.
  models.diagram = function(kind,v,type) {
    const g={xMax:10,yMax:10,xLabel:kind==='ppc'?'outputX':'quantity',yLabel:kind==='ppc'?'outputY':kind==='firm'?'money':'price',curves:[],points:[]};
    const curve=(key,a,b)=>g.curves.push({key,a,b});
    const point=(key,x,y)=>g.points.push({key,x,y});
    if(kind==='ppc'){curve('frontier',[0,10],[10,0]);point('allocation',v.x,v.y);}
    if(['market','policy','externality'].includes(kind)){curve('demand',[0,10],[10,0]);curve('supply',[0,0],[10,10]);}
    if(kind==='market'){g.xMax=14;const intercept=10+v.shift;curve('shiftedDemand',[Math.max(0,intercept-g.yMax),Math.min(g.yMax,intercept)],[Math.min(g.xMax,intercept),Math.max(0,intercept-g.xMax)]);point('equilibrium',v.quantity,v.price);point('movement',v.demandAtPrice,v.chosenPrice);}
    if(kind==='policy'){
      if(type==='tax')curve('policySupply',[0,v.value],[10-v.value,10]);
      else if(type==='subsidy')curve('policySupply',[v.value,0],[10,10-v.value]);
      else curve(type,[0,v.value],[10,v.value]);
      if(type==='tax'||type==='subsidy')curve('wedge',[v.quantity,v.seller],[v.quantity,v.buyer]);
      point('buyerPrice',v.quantity,v.buyer);point('sellerPrice',v.quantity,v.seller);
    }
    if(kind==='externality'){curve('socialCost',[0,v.cost],[10-v.cost,10]);point('marketQuantity',v.market,v.market);point('socialQuantity',v.social,v.social+v.cost);}
    if(kind==='ped'){g.xMax=g.yMax=20;point('initialPoint',v.q0,v.p0);point('finalPoint',v.q1,v.p1);}
    if(kind==='firm'){g.xMax=20;g.yMax=Math.max(20,20*v.p,v.fixed+20*v.variable);curve('revenue',[0,0],[20,20*v.p]);curve('cost',[0,v.fixed],[20,v.fixed+20*v.variable]);point('revenue',v.q,v.revenue);point('cost',v.q,v.cost);}
    return g;
  };
  root.ECON_MODELS=models;
  if(typeof module!=='undefined') module.exports=models;
})(globalThis);
