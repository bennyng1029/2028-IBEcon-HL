// Illustrative linear models. Inputs are finite numbers within the UI's stated ranges.
(function (root) {
  const clamp = (x, lo, hi) => Math.max(lo, Math.min(hi, Number.isFinite(+x) ? +x : lo));
  const models = {
    // x,y in [0,10]; frontier x+y=10; marginal cost of x is one y.
    ppc(x,y) { x=clamp(x,0,10); y=clamp(y,0,10); return {x,y,frontier:10-x,feasible:y<=10-x,cost:1}; },
    // Demand Q=max(0,10+shift-P); supply Q=P. Movement varies price, not equilibrium.
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
    if(kind==='market'){g.xMax=14;const intercept=10+v.shift;curve('shiftedDemand',[Math.max(0,intercept-g.yMax),Math.min(g.yMax,intercept)],[Math.min(g.xMax,intercept),Math.max(0,intercept-g.xMax)]);point('equilibrium',v.quantity,v.price);if(intercept<g.yMax)curve('zeroDemand',[0,intercept],[0,g.yMax]);point(v.chosenPrice>intercept?'zeroDemand':'movement',v.demandAtPrice,v.chosenPrice);}
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
  // Finite guided studios extend the canonical geometry owner; no content or DOM dependency.
  const guidedInventory = {
    '1.1.ppc_choice_diagram':['choice'], '1.1.ppc_growth_diagram':['actual','capacity'],
    '1.1.ppc_cost_diagram':['constant','increasing'], '1.1.circular_flow_diagram':['fiveSector'],
    '2.1.curve_diagram':['demand'], '2.1.shifts_diagram':['movement','increase'],
    '2.2.curve_diagram':['supply'], '2.2.shifts_diagram':['movement','increase'],
    '2.3.equilibrium_diagram':['crossing'], '2.3.changes_diagram':['shortage','surplus','demandIncrease','supplyIncrease'],
    '2.3.surplus_diagram':['surplus'], '2.5.ped_diagrams':['relative','perfectElastic','perfectInelastic','unit'],
    '2.5.ped_line_hl':['segments'], '2.5.ped_revenue_diagram':['elastic','inelastic','unit'],
    '2.5.yed_engel_diagram':['incomeElastic','incomeInelastic','inferior'],
    '2.6.pes_diagrams':['relative','perfectElastic','perfectInelastic','unit'],
    '2.7.ceiling_diagram':['binding'], '2.7.floor_diagram':['privateSales'], '2.7.tax_diagram':['tax2'],
    '2.7.subsidy_diagram':['subsidy2'], '2.8.social_optimum_diagram':['optimum'],
    '2.8.negative_production_diagram':['negativeProduction'], '2.8.negative_consumption_diagram':['negativeConsumption'],
    '2.8.positive_production_diagram':['positiveProduction'], '2.8.positive_consumption_diagram':['positiveConsumption'],
    '2.8.pigouvian_diagram':['optimalTax'], '2.8.carbon_diagram':['industryTax'],
    '2.8.subsidy_diagram':['producerSubsidy'], '2.8.regulation_diagram':['optimalCap','weakCap'],
    '2.8.education_diagram':['effective','partial'], '2.11.perfect_competition_diagram':['priceTaker'],
    '2.11.perfect_profit_diagram':['profit','normal','loss'], '2.11.perfect_equilibrium_diagram':['longRun'],
    '2.11.monopoly_diagram':['profit','normal','loss'], '2.11.monopoly_welfare_diagram':['benchmark'],
    '2.11.natural_monopoly_diagram':['unregulated','marginalCostPrice'], '2.11.oligopoly_diagram':['cartel'],
    '2.11.monopolistic_profit_diagram':['profit','normal','loss','longRun'],
    '2.11.monopolistic_demand_diagram':['substitutes'], '2.12.circular_flow_diagram':['inequality']
  };
  models.guided = function(id, scenario) {
    if(!Object.hasOwn(guidedInventory,id)||!guidedInventory[id].includes(scenario)) return null;
    const layers=['construct','read','compare'];
    const panel=(key='main',xMax=10,yMax=12)=>({key,xMax,yMax,xLabel:'q',yLabel:'p',curves:[],points:[],regions:[],arrows:[],guides:[],nodes:[],edges:[]});
    const g=panel(), out={panels:[g],values:{},layers};
    const curve=(key,points,layer='base',p=g)=>p.curves.push({key,points,layer});
    const sample=(fn,start,end,steps=64)=>Array.from({length:steps+1},(_,i)=>{const q=start+(end-start)*i/steps;return [q,fn(q)];});
    const line=(key,a,b,layer='base',p=g)=>curve(key,[a,b],layer,p);
    const point=(key,x,y,layer='read',p=g)=>p.points.push({key,x,y,layer});
    const guide=(key,points,layer='read',p=g)=>p.guides.push({key,points,layer});
    const arrow=(key,points,layer='compare',p=g)=>p.arrows.push({key,points,layer});
    const region=(key,points,layer='compare',p=g)=>p.regions.push({key,points:[...points,points[0]],layer});
    const read=(key,q,p,layer='read',target=g)=>{point(key,q,p,layer,target);guide(key+'Q',[[q,0],[q,p]],layer,target);guide(key+'P',[[0,p],[q,p]],layer,target);};
    const market=()=>{line('demand',[0,10],[10,0]);line('supply',[0,0],[10,10]);};
    const rect=(key,q,lo,hi,layer='compare')=>{if(lo!==hi)region(key,[[0,lo],[q,lo],[q,hi],[0,hi]],layer);else line(key,[0,lo],[q,hi],layer);};
    if(id.includes('circular_flow')) {
      g.axisFree=true;g.xMax=16;g.yMax=12;g.xLabel='flowX';g.yLabel='flowY';
      const node=(key,x,y,layer='base')=>g.nodes.push({key,x,y,width:2,height:1,layer});
      node('households',2,6);node('firms',10,6);node('finance',6,10,'construct');node('government',6,2,'construct');node('foreign',14,10,'construct');
      const edge=(key,from,to,points,layer)=>g.edges.push({key,from,to,points,layer});
      edge('factors','households','firms',[[4,6.8],[10,6.8]],'base');
      edge('income','firms','households',[[10,6.2],[4,6.2]],'base');
      edge('goods','firms','households',[[10,6],[8,4.5],[5,4.5],[4,6]],'read');
      edge('expenditure','households','firms',[[4,6.4],[5,8],[8,8],[10,6.4]],'read');
      edge('saving','households','finance',[[3,7],[3,10.5],[6,10.5]],'compare');
      edge('investment','finance','firms',[[8,10.5],[11,10.5],[11,7]],'compare');
      edge('tax','households','government',[[3,6],[3,2.5],[6,2.5]],'compare');
      edge('governmentSpending','government','firms',[[8,2.5],[11,2.5],[11,6]],'compare');
      edge('imports','firms','foreign',[[12,6.4],[15,6.4],[15,10]],'compare');
      edge('exports','foreign','firms',[[14,10],[13,9],[12,6.8]],'compare');
      if(scenario==='inequality') {
        node('householdsLow',2,1,'construct');
        edge('factorsLow','householdsLow','firms',[[4,1.8],[9,1.8],[10,6]],'read');
        edge('incomeLow','firms','householdsLow',[[10,6.1],[9,1.2],[4,1.2]],'read');
        edge('savingLow','householdsLow','finance',[[2,2],[1,10],[6,10]],'compare');
        edge('taxLow','householdsLow','government',[[4,1.5],[6,2.2]],'compare');
        edge('transfers','government','householdsLow',[[6,2.8],[5,3.5],[3,3.5],[3,2]],'compare');
        edge('assetFeedback','finance','households',[[6,10.8],[4,11.5],[2,11.5],[2,7]],'compare');
        out.values={incomeHigh:80,incomeLow:20,totalIncome:100,savingHigh:20,savingLow:2,feedbackConditional:true};
      }
      return out;
    }
    if(id.startsWith('1.1.')) {
      g.xLabel='outputX';g.yLabel='outputY';g.xMax=12;g.yMax=12;
      if(id.includes('cost')) {
        const bowed=scenario==='increasing';g.xMax=bowed?4:6;
        curve('frontier',bowed?[...sample(x=>Math.max(0,10-x*x),0,Math.sqrt(10),80),[1,9],[2,6]].sort((a,b)=>a[0]-b[0]):[[0,10],[5,0]]);
        [0,1,2].forEach(x=>read('allocation'+x,x,bowed?10-x*x:10-2*x,x===0?'construct':'read'));
        arrow('firstSacrifice',[[0,10],[1,bowed?9:8]]);arrow('secondSacrifice',[[1,bowed?9:8],[2,6]]);
        out.values.costs=bowed?[1,3]:[2,2];
      } else {
        line('frontier',[0,10],[10,0]);
        if(id.includes('choice')) {
          point('A',2,4,'construct');point('B',2,8,'construct');point('C',5,5);point('D',7,6);
          guide('opportunityCost',[[2,8],[5,8],[5,5]],'compare');arrow('choice',[[2,8],[5,5]]);out.values={opportunityCost:3};
        } else {
          point('initial',2,4,'base');
          if(scenario==='capacity')line('newFrontier',[0,12],[12,0],'construct');else point('capacity',2,8,'construct');
          read('final',2,scenario==='capacity'?10:8);arrow('growth',[[2,4],[2,scenario==='capacity'?10:8]]);out.values={capacity:scenario==='capacity'?12:10};
        }
      }return out;
    }
    if(id.startsWith('2.1.')||id.startsWith('2.2.')) {
      const demand=id.startsWith('2.1.');line(demand?'demand':'supply',demand?[0,10]:[0,0],demand?[10,0]:[10,10]);
      if(id.includes('curve')) {
        read('initial',2,demand?8:2,'construct');read('final',6,demand?4:6);arrow('movement',[[2,demand?8:2],[6,demand?4:6]]);
        out.values={initialQuantity:2,finalQuantity:6};
      }else {
        const p=demand?6:4;read('initial',4,p,'construct');
        if(scenario==='increase')line(demand?'shiftedDemand':'shiftedSupply',demand?[0,12]:[2,0],demand?[10,2]:[10,8],'read');
        else read('final',6,demand?4:6);
        if(scenario==='increase')read('final',6,p);arrow(scenario,[[4,p],[6,scenario==='increase'?p:demand?4:6]]);out.values={initialQuantity:4,finalQuantity:6};
      }return out;
    }
    if(id.startsWith('2.3.')) {
      market();
      if(id.includes('equilibrium')){read('equilibrium',5,5,'construct');guide('crossing',[[4,4],[6,6]]);arrow('adjustment',[[4,6],[5,5]]);out.values={quantity:5,price:5};}
      else if(id.includes('surplus')){read('equilibrium',5,5,'construct');region('consumerSurplus',[[0,5],[0,10],[5,5]],'read');region('producerSurplus',[[0,0],[0,5],[5,5]]);out.values={consumerSurplus:12.5,producerSurplus:12.5,totalSurplus:25};}
      else if(scenario==='shortage'||scenario==='surplus') {const p=scenario==='shortage'?4:6;line('chosenPrice',[0,p],[10,p],'construct');read('demandQuantity',10-p,p);read('supplyQuantity',p,p);arrow('priceAdjustment',[[8,p],[8,5]]);out.values={demandQuantity:10-p,supplyQuantity:p,gap:2};}
      else {const demand=scenario==='demandIncrease';line('shift',demand?[0,12]:[2,0],demand?[10,2]:[10,8],'construct');read('initial',5,5);read('final',6,demand?6:4);arrow('equilibriumChange',[[5,5],[6,demand?6:4]]);out.values={quantity:6,price:demand?6:4};}return out;
    }
    if(id==='2.5.yed_engel_diagram') {
      g.xMax=16;g.yMax=140;g.xLabel='quantity';g.yLabel='income';const q=scenario==='incomeElastic'?14:scenario==='incomeInelastic'?11:9;
      line('engel',[10,100],[q,120]);read('initial',10,100,'construct');read('final',q,120);arrow('incomeChange',[[10,100],[q,120]]);out.values={initialIncome:100,finalIncome:120,initialQuantity:10,finalQuantity:q,yed:(q-10)/2};return out;
    }
    if(id==='2.5.ped_diagrams'||id==='2.6.pes_diagrams') {
      const supply=id.startsWith('2.6.');g.xMax=12;g.yMax=16;
      if(scenario==='relative') {
        line('elastic',supply?[0,2]:[0,8],supply?[12,8]:[12,2]);
        line('inelastic',supply?[2,0]:[0,14],supply?[10,16]:[7,0],'construct');read('reference',4,supply?4:6);arrow('quantityResponse',[[3,supply?4:6],[5,supply?4:6]]);out.values={elastic:supply?2:3,inelastic:supply?.5:.75};
      }else {
        if(scenario==='unit')curve('unit',supply?[[0,0],[12,12]]:sample(q=>12/q,1,12,88));
        else line(scenario,scenario==='perfectElastic'?[0,4]:[4,0],scenario==='perfectElastic'?[12,4]:[4,16]);
        read('initial',scenario==='unit'?2:4,scenario==='unit'?(supply?2:6):4,'construct');
        read('final',scenario==='unit'?4:scenario==='perfectElastic'?8:4,scenario==='unit'?(supply?4:3):scenario==='perfectElastic'?4:8);
        arrow('response',scenario==='unit'?[[2,supply?2:6],[4,supply?4:3]]:scenario==='perfectElastic'?[[4,4],[8,4]]:[[4,4],[4,8]]);out.values={elasticity:scenario==='unit'?1:scenario==='perfectElastic'?'infinite':0};
      }return out;
    }
    if(id==='2.5.ped_line_hl'||id==='2.5.ped_revenue_diagram') {
      line('demand',[0,10],[10,0]);
      if(id.includes('line')){read('upper',2,8,'construct');read('midpoint',5,5);read('lower',8,2,'compare');out.values={upperPED:4,midPED:1,lowerPED:.25};}
      else {const q0=scenario==='elastic'?2:scenario==='inelastic'?7:5,q1=scenario==='elastic'?3:scenario==='inelastic'?8:5;
        read('initial',q0,10-q0,'construct');rect('initialRevenue',q0,0,10-q0,'read');if(scenario==='unit')out.layers=['construct','read'];else {read('final',q1,10-q1);rect('finalRevenue',q1,0,10-q1);}out.values={initialRevenue:q0*(10-q0),finalRevenue:q1*(10-q1),localUnit:scenario==='unit'};}
      return out;
    }
    if(id.startsWith('2.7.')) {
      market();const tax=id.includes('tax'),sub=id.includes('subsidy'),ceiling=id.includes('ceiling');
      if(tax||sub){const q=tax?4:6,buyer=tax?6:4,seller=tax?4:6;line('effectiveSupply',tax?[0,2]:[2,0],tax?[10,12]:[10,8],'construct');read('buyer',q,buyer);read('seller',q,seller);line('wedge',[q,buyer],[q,seller],'read');rect(tax?'taxRevenue':'subsidyExpenditure',q,Math.min(buyer,seller),Math.max(buyer,seller));region('deadweightLoss',tax?[[4,4],[4,6],[5,5]]:[[5,5],[6,4],[6,6]]);out.values={quantity:q,buyerPrice:buyer,sellerPrice:seller,wedge:2,revenue:tax?8:0,expenditure:sub?12:0,loss:1};}
      else {const p=ceiling?4:6;line('control',[0,p],[10,p],'construct');read('demandQuantity',10-p,p);read('supplyQuantity',p,p);arrow('gap',[[4,p+.4],[6,p+.4]]);line('transactions',[4,0],[4,p],'compare');out.values={price:p,demandQuantity:10-p,supplyQuantity:p,transactions:4,gap:2};}return out;
    }
    if(id.startsWith('2.8.')) {
      if(id.includes('social_optimum')){line('msb',[0,10],[10,0]);line('msc',[0,0],[10,10],'construct');read('optimum',5,5);point('belowOptimum',4,6);point('aboveOptimum',6,4);region('netBenefit',[[0,0],[0,10],[5,5]]);out.values={quantity:5,totalSurplus:25,benefitAt4:2,benefitAt6:-2};return out;}
      const negativeConsumption=id.includes('negative_consumption'),positiveProduction=id.includes('positive_production')||id==='2.8.subsidy_diagram',positiveConsumption=id.includes('positive_consumption')||id.includes('education');
      const positive=positiveProduction||positiveConsumption;
      const demandIntercept=negativeConsumption||positiveConsumption?8:10;
      const privateDemand=negativeConsumption?10:demandIntercept;
      const privateCost=positiveProduction?2:0;
      const socialDemand=negativeConsumption?8:10;
      const socialCost=positive?0:negativeConsumption?0:2;
      line('mpb',[0,privateDemand],[privateDemand,0]);line('mpc',[0,privateCost],[10,10+privateCost]);
      if(socialDemand!==privateDemand)line('msb',[0,socialDemand],[socialDemand,0],'construct');
      else line('msb',[0,socialDemand],[socialDemand,0],'construct');
      line('msc',[0,socialCost],[10,10+socialCost],'construct');
      const qm=positive?4:5,qs=positive?5:4;
      read('market',qm,privateDemand-qm);read('optimum',qs,socialDemand-qs);
      if(negativeConsumption||positiveConsumption)line('externalWedge',[qs,privateDemand-qs],[qs,socialDemand-qs],'read');
      else line('externalWedge',[qs,qs+privateCost],[qs,qs+socialCost],'read');
      region('initialLoss',positive?[[4,4],[4,6],[5,5]]:negativeConsumption?[[4,4],[5,3],[5,5]]:[[4,6],[5,5],[5,7]]);
      out.values={marketQuantity:qm,socialQuantity:qs,loss:1,wedge:2};
      if(id.includes('pigouvian')||id.includes('carbon')) {line('effectiveSupply',[0,2],[10,12],'compare');line('policyWedge',[4,4],[4,6],'compare');rect('taxRevenue',4,4,6);Object.assign(out.values,{quantity:4,buyerPrice:6,sellerPrice:4,revenue:8,remainingLoss:0});}
      if(id==='2.8.subsidy_diagram'){line('effectiveSupply',[0,0],[10,10],'compare');line('policyWedge',[5,5],[5,7],'compare');rect('subsidyExpenditure',5,5,7);Object.assign(out.values,{quantity:5,buyerPrice:5,sellerPrice:7,expenditure:10,remainingLoss:0});}
      if(id.includes('regulation')){const q=scenario==='weakCap'?4.5:4;line('quantityCap',[q,0],[q,10],'compare');if(q>4)region('remainingLoss',[[4,6],[q,10-q],[q,q+2]]);out.values.quantity=q;out.values.remainingLoss=q===4?0:.25;}
      if(id.includes('education')){const full=scenario==='effective',a=full?10:9,q=full?5:4.5;line('informedMpb',[0,a],[a,0],'compare');read('response',q,q,'compare');if(!full)region('remainingLoss',[[q,q],[q,10-q],[5,5]]);out.values.quantity=q;out.values.remainingLoss=full?0:.25;}
      return out;
    }
    if(id==='2.11.monopolistic_demand_diagram') {line('monopolyDemand',[0,10],[10,0]);line('differentiatedDemand',[0,8],[10,3],'construct');read('reference',4,6);arrow('response',[[3,6],[5,6]]);out.values={monopolyPED:1.5,differentiatedPED:3};return out;}
    // Marginal curves are derived from the stated total-cost and total-revenue families.
    const competitive=id.includes('perfect_'),longRun=scenario==='longRun',natural=id.includes('natural_monopoly');
    const monocompLR=id.includes('monopolistic_profit')&&longRun;
    const rising=competitive||monocompLR;
    let fixed=competitive?({profit:0,normal:8,loss:16}[scenario]??8):natural?12:monocompLR?32/3:({profit:8,normal:16,loss:24}[scenario]??8);
    const q=monocompLR?8/3:natural&&scenario==='marginalCostPrice'?8:4,p=competitive?6:10-q;
    const ac=x=>2+(rising?x/2:0)+fixed/x,mc=x=>2+(rising?x:0),ar=x=>competitive?6:10-x,mr=x=>competitive?6:10-2*x;
    g.xMax=10;g.yMax=16;
    line('ar',competitive?[0,6]:[0,10],competitive?[10,6]:[10,0]);
    line('mr',competitive?[0,6]:[0,10],competitive?[10,6]:[5,0],'construct');
    line('mc',[0,2],rising?[10,12]:[10,2],'construct');
    // Include exact economically important coordinates in addition to regular sampling.
    const samples=sample(ac,Math.max(.5,fixed/(g.yMax-7)),10,96).filter(([,y])=>y<=g.yMax);
    [q,4,8,competitive?4:Math.sqrt(2*fixed)].filter(x=>x>0&&x<=10&&ac(x)<=16).forEach(x=>samples.push([x,ac(x)]));samples.sort((a,b)=>a[0]-b[0]);
    curve('ac',samples,'read');read('chosenOutput',q,p);const marginalQ=competitive?4:monocompLR?8/3:4;point('marginalIntersection',marginalQ,mc(marginalQ));point('averageCost',q,ac(q));
    if(Math.abs(p-ac(q))>1e-10)rect('profit',q,Math.min(p,ac(q)),Math.max(p,ac(q)));
    if(id.includes('welfare')){read('competitiveBenchmark',8,2,'compare');region('deadweightLoss',[[4,2],[4,6],[8,2]]);}
    if(competitive&&(id.includes('competition')||id.includes('equilibrium'))){const marketPanel=panel('market',10,12);out.panels.unshift(marketPanel);line('marketDemand',[0,12],[10,2],'base',marketPanel);line('marketSupply',[0,0],[10,10],'construct',marketPanel);read('marketEquilibrium',6,6,'read',marketPanel);arrow('commonPrice',[[1,6],[9,6]],'compare',marketPanel);g.key='firm';}
    out.values={quantity:q,price:p,averageCost:ac(q),marginalCost:mc(q),marginalRevenue:mr(q),profit:(p-ac(q))*q,fixedCost:fixed,variableCost:2*q+(rising?q*q/2:0),totalCost:fixed+2*q+(rising?q*q/2:0),totalRevenue:p*q,avc:2+(rising?q/2:0),continuationConditional:scenario==='loss',costFamily:rising?'quadratic':'linear'};
    if(id.includes('welfare'))Object.assign(out.values,{benchmarkQuantity:8,benchmarkPrice:2,loss:8});
    if(monocompLR){const minimum=Math.sqrt(64/3);read('minimumAC',minimum,ac(minimum),'compare');arrow('excessCapacity',[[q,1],[minimum,1]]);Object.assign(out.values,{acSlope:-1,arSlope:-1,minimumACQuantity:minimum});}
    if(!out.panels.some(p=>['curves','points','regions','arrows','guides','nodes','edges'].some(kind=>p[kind].some(item=>item.layer==='compare'))))out.layers=['construct','read'];
    return out;
  };

  root.ECON_MODELS=models;
  if(typeof module!=='undefined') module.exports=models;
})(globalThis);
