/* Procedural question generators: unlimited original QR and DM items.
   Every generator returns { id, topic, stem, opts, ans, why, meta }.
   Numeric options are presented in ascending order, as in the live test, with
   distractors chosen to straddle the correct value so its position varies.
   `meta` carries the raw parameters so the test suite can re-derive the answer
   independently rather than trusting the generator. */

(function(){
"use strict";

/* ---------------- helpers ---------------- */
var _n=0;
function uid(p){ return p+"_g"+(++_n); }
function ri(a,b){ return a+Math.floor(Math.random()*(b-a+1)); }        // inclusive
function pick(a){ return a[Math.floor(Math.random()*a.length)]; }
function r2(x){ return Math.round(x*100)/100; }
function r1(x){ return Math.round(x*10)/10; }
function commas(n){
  var s=String(n), p=s.split(".");
  p[0]=p[0].replace(/\B(?=(\d{3})+(?!\d))/g,",");
  return p.join(".");
}
function money(x){ return "&euro;"+commas(r2(x).toFixed(2).replace(/\.00$/,"")); }
function money0(x){ return "&euro;"+commas(Math.round(x)); }

/* Build 4 ascending numeric options around `correct`.
   Deduplication is done on the FORMATTED string, so two options can never look
   identical to the student and the answer index is always found.
   A random number of distractors is placed below the correct value, which keeps
   the answer's position uniform across A-D while preserving ascending order. */
function numOpts(correct, wrongs, fmt){
  fmt = fmt || function(v){ return commas(v); };
  var cs=fmt(correct), seen={}; seen[cs]=1;
  var below=[], above=[];
  function offer(v){
    if(v==null || !isFinite(v) || v<0) return;
    var s=fmt(v); if(seen[s]) return; seen[s]=1;
    (v<correct?below:above).push(v);
  }
  (wrongs||[]).forEach(offer);
  var step=Math.max(0.01, Math.abs(correct)*0.09);
  for(var k=1;k<=60 && (below.length<3 || above.length<3);k++){
    offer(correct-step*k);
    offer(correct+step*k);
  }
  below.sort(function(a,b){return a-b;});    // nearest-below last
  above.sort(function(a,b){return a-b;});    // nearest-above first
  var wantBelow=Math.min(Math.floor(Math.random()*4), below.length);
  var wantAbove=3-wantBelow;
  if(wantAbove>above.length){ wantAbove=above.length; wantBelow=Math.min(3-wantAbove, below.length); }
  var chosen=(wantBelow? below.slice(-wantBelow):[]).concat(above.slice(0,wantAbove));
  chosen.push(correct);
  chosen.sort(function(a,b){ return a-b; });
  var opts=chosen.map(fmt);
  return { opts:opts, ans:opts.indexOf(cs) };
}
/* Options that are not numeric (names, labels) - shuffle freely. */
function textOpts(correct, wrongs){
  var all=[correct].concat(wrongs);
  for(var i=all.length-1;i>0;i--){ var j=Math.floor(Math.random()*(i+1)); var t=all[i]; all[i]=all[j]; all[j]=t; }
  return { opts: all, ans: all.indexOf(correct) };
}

/* ======================================================================
   QUANTITATIVE REASONING
   ====================================================================== */
var ITEMS=["laptop","bicycle","jacket","printer","mattress","camera","desk","kettle"];
var PLACES=["Ashford","Brookvale","Carrigan","Dunmore","Eskerton","Fairhill","Glenmore","Holbrook"];
var NAMES=["Aoife","Ben","Cian","Dara","Eve","Finn","Grace","Hugh","Iris","Jack"];
var PRODUCTS=["Espresso","Latte","Tea","Pastry","Sandwich","Muffin","Juice","Salad"];
var DEPTS=["Cardiology","Radiology","Oncology","Paediatrics","Neurology","Dermatology"];

var QR_GEN = [

/* 1. percentage change */
function(){
  var old=ri(3,45)*100, pc=pick([4,5,6,8,10,12,15,20,25,30,40]);
  var up=Math.random()<0.6, nw=Math.round(old*(up?1+pc/100:1-pc/100));
  var actual=(nw-old)/old*100;
  var o=numOpts(Math.abs(r1(actual)),
    [ Math.abs(r1((nw-old)/nw*100)), Math.abs(r1(actual))+ri(2,6), Math.abs(r1(actual))-ri(2,5), Math.abs(nw-old)/10 ],
    function(v){ return r1(v)+"%"; });
  return { id:uid("qr"), topic:"Percentage change",
    stem:"The number of patients seen by a clinic changed from <b>"+commas(old)+"</b> to <b>"+commas(nw)+"</b>. What was the percentage "+(up?"increase":"decrease")+"?",
    opts:o.opts, ans:o.ans,
    why:"Change is "+commas(Math.abs(nw-old))+", and percentage change always divides by the ORIGINAL value: "+
        commas(Math.abs(nw-old))+"/"+commas(old)+" = "+r1(Math.abs(actual))+"%. Dividing by the new value ("+commas(nw)+") gives "+
        r1(Math.abs((nw-old)/nw*100))+"%, which is the standard trap.",
    meta:{k:"pctchange",old:old,nw:nw} };
},

/* 2. reverse percentage */
function(){
  var pc=pick([8,10,12,15,20,25,30,40]), up=Math.random()<0.6;
  var orig=ri(6,90)*25, after=Math.round(orig*(up?1+pc/100:1-pc/100));
  var correct=after/(up?1+pc/100:1-pc/100);
  var o=numOpts(r2(correct),
    [ r2(after*(up?1-pc/100:1+pc/100)), r2(after), r2(correct*1.1), r2(correct*0.9) ], money);
  return { id:uid("qr"), topic:"Reverse percentage",
    stem:"After "+(up?"an increase":"a decrease")+" of <b>"+pc+"%</b>, a monthly cost is <b>"+money(after)+"</b>. What was it before the change, to the nearest cent?",
    opts:o.opts, ans:o.ans,
    why:"Divide, do not add or subtract. "+money(after)+" / "+(up?(1+pc/100):(1-pc/100)).toFixed(2)+" = "+money(correct)+
        ". Taking "+pc+"% off "+money(after)+" gives "+money(after*(up?1-pc/100:1+pc/100))+", which is wrong and is always offered.",
    meta:{k:"reverse",after:after,pc:pc,up:up} };
},

/* 3. successive percentage changes */
function(){
  var p=ri(2,10)*5+ri(0,1)*5, base=ri(3,20)*5, d1=pick([10,15,20,25,30]), d2=pick([5,10,15,20]);
  var price=base*5, correct=price*(1-d1/100)*(1-d2/100);
  var o=numOpts(r2(correct),
    [ r2(price*(1-(d1+d2)/100)), r2(price*(1-d1/100)), r2(correct*1.06), r2(correct*0.94) ], money);
  return { id:uid("qr"), topic:"Successive percentages",
    stem:"A "+pick(ITEMS)+" priced <b>"+money(price)+"</b> is reduced by <b>"+d1+"%</b>. At the till a further <b>"+d2+"%</b> is taken off the reduced price. What is the final price, to the nearest cent?",
    opts:o.opts, ans:o.ans,
    why:"Multiply the factors: "+(1-d1/100).toFixed(2)+" x "+(1-d2/100).toFixed(2)+" = "+r2((1-d1/100)*(1-d2/100))+
        ", so the final price is "+money(correct)+". Successive discounts never add - "+d1+"% then "+d2+"% is not "+(d1+d2)+"% off, which would give "+money(price*(1-(d1+d2)/100))+".",
    meta:{k:"succ",price:price,d1:d1,d2:d2} };
},

/* 4. ratio share */
function(){
  var a=ri(1,9), b=ri(1,10), c=ri(1,11), parts=a+b+c;
  var unit=ri(2,60)*25, total=parts*unit;
  var big=Math.max(a,b,c), correct=big*unit;
  var o=numOpts(correct, [ Math.min(a,b,c)*unit, total/3, correct+unit, correct-unit ], money0);
  return { id:uid("qr"), topic:"Ratio",
    stem:"Three people share <b>"+money0(total)+"</b> in the ratio <b>"+a+" : "+b+" : "+c+"</b>. How much does the largest share come to?",
    opts:o.opts, ans:o.ans,
    why:"Total parts = "+a+" + "+b+" + "+c+" = "+parts+", so one part is "+money0(total)+"/"+parts+" = "+money0(unit)+
        ". The largest share is "+big+" parts = "+money0(correct)+".",
    meta:{k:"ratio3",a:a,b:b,c:c,total:total} };
},

/* 5. ratio mixture */
function(){
  var a=pick([1,2,3,4,5]), b=pick([3,4,5,6,7,8,9]);
  if(a===b) b=a+2;
  var parts=a+b, unit=ri(4,40)*25, total=parts*unit;
  var correct=a*unit;
  var o=numOpts(correct, [ total*a/b, b*unit, total/2, correct+unit ], function(v){ return commas(Math.round(v))+" ml"; });
  return { id:uid("qr"), topic:"Ratio",
    stem:"A solution mixes concentrate and water in the ratio <b>"+a+" : "+b+"</b>. How much concentrate is needed to make <b>"+commas(total)+" ml</b> of solution?",
    opts:o.opts, ans:o.ans,
    why:a+":"+b+" means "+a+" parts in every "+parts+", not "+a+" in every "+b+". One part is "+commas(total)+"/"+parts+" = "+commas(unit)+
        " ml, so concentrate is "+a+" x "+commas(unit)+" = "+commas(correct)+" ml.",
    meta:{k:"ratiomix",a:a,b:b,total:total} };
},

/* 6. speed / distance / time */
function(){
  var speed=pick([60,64,70,72,75,80,84,90,96]), hrs=pick([1.5,2,2.25,2.5,3,3.5,4,4.5,4.8]);
  var dist=Math.round(speed*hrs);
  var mins=Math.round((hrs%1)*60), whole=Math.floor(hrs);
  var timeStr = mins ? whole+" hours "+mins+" minutes" : whole+" hours";
  var correct=dist/hrs;
  var o=numOpts(r1(correct), [ r1(dist/(whole+mins/100)), r1(correct*1.1), r1(correct*0.9), r1(dist/(whole+1)) ],
    function(v){ return r1(v)+" km/h"; });
  return { id:uid("qr"), topic:"Speed",
    stem:"A journey of <b>"+commas(dist)+" km</b> takes <b>"+timeStr+"</b>. What is the average speed, to one decimal place?",
    opts:o.opts, ans:o.ans,
    why:(mins? "Convert the minutes to a decimal fraction of an hour first: "+mins+"/60 = "+r2(mins/60)+", so the time is "+hrs+" hours. "
              : "The time is "+hrs+" hours. ")+
        commas(dist)+" / "+hrs+" = "+r1(correct)+" km/h."+
        (mins? " Dividing by "+whole+"."+mins+" instead of "+hrs+" is the usual error." : ""),
    meta:{k:"speed",dist:dist,hrs:hrs} };
},

/* 7. mean changes when a value is added */
function(){
  var n=ri(4,12), m1=ri(11,64), m2=m1+ri(1,7);
  var correct=(n+1)*m2 - n*m1;
  var o=numOpts(correct, [ m2, m2+n, correct-n, correct+ri(2,6) ]);
  return { id:uid("qr"), topic:"Averages",
    stem:"The mean of <b>"+n+"</b> numbers is <b>"+m1+"</b>. A further number is added and the mean becomes <b>"+m2+"</b>. What is the number that was added?",
    opts:o.opts, ans:o.ans,
    why:"Work with totals, never with the means directly. "+n+" numbers total "+n+" x "+m1+" = "+(n*m1)+
        ". "+(n+1)+" numbers total "+(n+1)+" x "+m2+" = "+((n+1)*m2)+". The new value is "+((n+1)*m2)+" - "+(n*m1)+" = "+correct+".",
    meta:{k:"meanadd",n:n,m1:m1,m2:m2} };
},

/* 8. weighted mean */
function(){
  var w1=pick([20,30,40,50,60,70,80]), w2=100-w1;
  var s1=ri(38,94), s2=ri(38,96);
  var correct=(w1*s1+w2*s2)/100;
  var o=numOpts(r1(correct), [ r1((s1+s2)/2), r1((w2*s1+w1*s2)/100), r1(correct+ri(2,5)), r1(correct-ri(2,5)) ],
    function(v){ return r1(v)+"%"; });
  return { id:uid("qr"), topic:"Averages",
    stem:"A student scores <b>"+s1+"%</b> on a paper worth <b>"+w1+"%</b> of a module and <b>"+s2+"%</b> on a paper worth <b>"+w2+"%</b>. What is the overall module mark?",
    opts:o.opts, ans:o.ans,
    why:"Multiply each mark by its weight: "+(w1/100).toFixed(2)+" x "+s1+" = "+r2(w1*s1/100)+" and "+(w2/100).toFixed(2)+" x "+s2+" = "+r2(w2*s2/100)+
        ", giving "+r1(correct)+"%. The plain average of "+r1((s1+s2)/2)+"% ignores the weighting and is always offered.",
    meta:{k:"weighted",w1:w1,w2:w2,s1:s1,s2:s2} };
},

/* 9. combined rates */
function(){
  var t1=pick([10,12,15,16,18,20,24]), t2=pick([20,24,30,36,40,45,60]);
  if(t1===t2) t2=t1*2;
  var cap=pick([120,180,240,300,360]);
  var correct=1/(1/t1+1/t2);
  var o=numOpts(r2(correct), [ (t1+t2)/2, t1+t2, r2(correct*1.15), r2(correct*0.85) ],
    function(v){ return r2(v)+" minutes"; });
  return { id:uid("qr"), topic:"Rates",
    stem:"One tap fills a <b>"+cap+" litre</b> tank in <b>"+t1+" minutes</b>. A second tap fills the same tank in <b>"+t2+" minutes</b>. How long does it take with both taps running? Give your answer to two decimal places.",
    opts:o.opts, ans:o.ans,
    why:"Convert to rates and add them: "+r2(cap/t1)+" litres/min and "+r2(cap/t2)+" litres/min give "+r2(cap/t1+cap/t2)+
        " litres/min, so "+cap+"/"+r2(cap/t1+cap/t2)+" = "+r2(correct)+" minutes. Averaging the two times gives "+r2((t1+t2)/2)+
        " minutes and is wrong - together must be faster than either tap alone.",
    meta:{k:"rates",t1:t1,t2:t2,cap:cap} };
},

/* 10. map scale / units */
function(){
  var scale=pick([10000,20000,25000,50000,100000]), cm=r1(ri(15,95)/10);
  var km=cm*scale/100000;
  var o=numOpts(r2(km), [ r2(km*10), r2(km/10), r2(km*100), r2(km/100) ],
    function(v){ return r2(v)+" km"; });
  return { id:uid("qr"), topic:"Scale and units",
    stem:"On a map with a scale of <b>1 : "+commas(scale)+"</b>, two points are <b>"+cm+" cm</b> apart. What is the actual distance, to two decimal places?",
    opts:o.opts, ans:o.ans,
    why:cm+" x "+commas(scale)+" = "+commas(cm*scale)+" cm. Divide by 100 for metres ("+commas(r2(cm*scale/100))+
        " m) and by 1,000 again for kilometres, giving "+r2(km)+" km. Every option here has the same digits, so this is purely a units question.",
    meta:{k:"scale",scale:scale,cm:cm} };
},

/* 11. currency conversion */
function(){
  var rate=pick([1.08,1.12,1.15,1.18,1.22,0.84,0.86,0.88]);
  var cur=rate>1?"dollars":"pounds", amt=ri(4,60)*10;
  var toEuro=Math.random()<0.5;
  var correct = toEuro ? amt/rate : amt*rate;
  var o=numOpts(r2(correct), [ r2(toEuro?amt*rate:amt/rate), r2(amt), r2(correct*1.1), r2(correct*0.9) ],
    function(v){ return toEuro ? money(v) : (r2(v)+" "+cur); });
  return { id:uid("qr"), topic:"Currency",
    stem: toEuro
      ? "One euro buys <b>"+rate+" "+cur+"</b>. A bill comes to <b>"+commas(amt)+" "+cur+"</b>. What is it in euro, to the nearest cent?"
      : "One euro buys <b>"+rate+" "+cur+"</b>. An item costs <b>"+money0(amt)+"</b>. What is it in "+cur+", to two decimal places?",
    opts:o.opts, ans:o.ans,
    why:(toEuro? "Divide by the rate: "+commas(amt)+" / "+rate+" = "+money(correct)+"."
               : "Multiply by the rate: "+amt+" x "+rate+" = "+r2(correct)+" "+cur+".")+
        " Sanity check the direction before calculating: the "+(rate>1?(toEuro?"euro figure must be smaller":"figure must be larger"):(toEuro?"euro figure must be larger":"figure must be smaller"))+
        ", which rules out options on the wrong side straight away.",
    meta:{k:"fx",rate:rate,amt:amt,toEuro:toEuro} };
},

/* 12. drug dose by body weight */
function(){
  var perKg=pick([2,2.5,3,4,5,6,7.5,8,10,12]), kg=ri(9,49)*2, doses=pick([2,3,4]);
  var daily=perKg*kg, correct=daily/doses;
  var o=numOpts(r2(correct), [ daily, r2(daily/(doses+1)), r2(correct*2), r2(perKg*kg/2) ],
    function(v){ return commas(r2(v))+" mg"; });
  return { id:uid("qr"), topic:"Drug calculation",
    stem:"A drug is prescribed at <b>"+perKg+" mg per kg</b> of body weight per day, divided into <b>"+doses+"</b> equal doses. What is each dose for a <b>"+kg+" kg</b> patient? Give your answer to two decimal places where needed.",
    opts:o.opts, ans:o.ans,
    why:"Daily total is "+perKg+" x "+kg+" = "+commas(r2(daily))+" mg. Divided into "+doses+" doses that is "+commas(r2(correct))+
        " mg each. The daily total is offered as a distractor - read to the end of the question.",
    meta:{k:"dose",perKg:perKg,kg:kg,doses:doses} };
},

/* 13. concentration */
function(){
  var mg=pick([50,100,125,200,250,500]), ml=pick([2,4,5,10]), want=mg*pick([1.5,2,2.4,3,4]);
  var perMl=mg/ml, correct=want/perMl;
  var o=numOpts(r2(correct), [ r2(want/mg), r2(correct/2), r2(correct*2), r2(want*ml/mg/2) ],
    function(v){ return r2(v)+" ml"; });
  return { id:uid("qr"), topic:"Concentration",
    stem:"A solution contains <b>"+mg+" mg</b> in every <b>"+ml+" ml</b>. What volume delivers a <b>"+commas(want)+" mg</b> dose?",
    opts:o.opts, ans:o.ans,
    why:"Reduce to a per-unit rate first: "+mg+" mg in "+ml+" ml is "+r2(perMl)+" mg per ml. Then "+commas(want)+" / "+r2(perMl)+" = "+r2(correct)+" ml.",
    meta:{k:"conc",mg:mg,ml:ml,want:want} };
},

/* 14. compound growth */
function(){
  var p=ri(2,30)*500, r=pick([2,2.5,3,4,5,6,7,8]), y=ri(2,5);
  var correct=p*Math.pow(1+r/100,y);
  var o=numOpts(Math.round(correct), [ Math.round(p*(1+r*y/100)), Math.round(correct*1.03), Math.round(correct*0.97), p ], money0);
  return { id:uid("qr"), topic:"Compound growth",
    stem:"<b>"+money0(p)+"</b> is invested at <b>"+r+"%</b> compound interest per year. What is it worth after <b>"+y+"</b> years, to the nearest euro?",
    opts:o.opts, ans:o.ans,
    why:money0(p)+" x "+(1+r/100).toFixed(2)+" to the power of "+y+" = "+money0(correct)+
        ". Simple interest would give "+money0(p*(1+r*y/100))+", and the gap between the two tells you the question is testing compounding.",
    meta:{k:"compound",p:p,r:r,y:y} };
},

/* 15. area and cost */
function(){
  var L=r1(ri(45,225)/10), W=ri(3,18), rate=ri(11,58);
  var area=L*W, correct=area*rate;
  var o=numOpts(Math.round(correct), [ Math.round(2*(L+W)*rate), Math.round(area), Math.round(correct*1.15), Math.round(correct*0.85) ], money0);
  return { id:uid("qr"), topic:"Area",
    stem:"A rectangular room measures <b>"+L+" m</b> by <b>"+W+" m</b>. Flooring costs <b>"+money0(rate)+" per square metre</b>. What is the total cost, to the nearest euro?",
    opts:o.opts, ans:o.ans,
    why:"Area is "+L+" x "+W+" = "+r2(area)+" square metres, so the cost is "+r2(area)+" x "+rate+" = "+money0(correct)+
        ". Using the perimeter instead of the area gives "+money0(2*(L+W)*rate)+".",
    meta:{k:"area",L:L,W:W,rate:rate} };
},

/* 16. percentage of a percentage */
function(){
  var p1=ri(2,9)*10, p2=ri(3,19)*5;
  var correct=p1*p2/100;
  var o=numOpts(r1(correct), [ r1(p1+p2-100), r1(Math.abs(p1-p2)), r1(correct*1.4), r1(correct*0.7) ],
    function(v){ return r1(v)+"%"; });
  return { id:uid("qr"), topic:"Percentages",
    stem:"In a hospital, <b>"+p1+"%</b> of staff are nurses. <b>"+p2+"%</b> of the nurses work night shifts. What percentage of all staff are nurses who work night shifts?",
    opts:o.opts, ans:o.ans,
    why:"A percentage of a percentage is a multiplication: "+(p1/100).toFixed(2)+" x "+(p2/100).toFixed(2)+" = "+r2(correct/100)+
        ", so "+r1(correct)+"%. Adding or subtracting the two figures is always wrong.",
    meta:{k:"pctofpct",p1:p1,p2:p2} };
},

/* 17. table set - total revenue */
function(){
  var rows=[], n=ri(4,5), used={};
  for(var i=0;i<n;i++){
    var nm; do{ nm=pick(PRODUCTS); }while(used[nm]); used[nm]=1;
    rows.push({ n:nm, p:r2(ri(120,780)/100), u:ri(80,900) });
  }
  var revs=rows.map(function(r){ return r.p*r.u; });
  var total=revs.reduce(function(a,b){return a+b;},0);
  var html='<table class="dt"><thead><tr><th>Item</th><th>Price</th><th>Units sold</th></tr></thead><tbody>'+
    rows.map(function(r){ return "<tr><td>"+r.n+"</td><td>"+money(r.p)+"</td><td>"+commas(r.u)+"</td></tr>"; }).join("")+
    '</tbody></table>';
  var o=numOpts(Math.round(total),
    [ Math.round(total*1.08), Math.round(total*0.92), Math.round(total*1.15), Math.round(rows.reduce(function(a,r){return a+r.u;},0)) ], money0);
  return { id:uid("qr"), topic:"Tables",
    stem:"<b>Weekly sales</b>"+html+"What was the total revenue for the week, to the nearest euro?",
    opts:o.opts, ans:o.ans,
    why:rows.map(function(r,i){ return r.n+" "+money(r.p)+" x "+commas(r.u)+" = "+money0(revs[i]); }).join("; ")+
        ". Total = "+money0(total)+".",
    meta:{k:"tabletotal",rows:rows} };
},

/* 19. multi-step: one row's share of the total, awkward figures */
function(){
  var rows=[], n=5, used={};
  for(var i=0;i<n;i++){
    var nm; do{ nm=pick(PRODUCTS); }while(used[nm]); used[nm]=1;
    rows.push({ n:nm, p:r2(ri(137,879)/100), u:ri(63,487) });
  }
  var revs=rows.map(function(r){ return r.p*r.u; });
  var total=revs.reduce(function(a,b){return a+b;},0);
  var t=ri(0,n-1), correct=r1(revs[t]/total*100);
  var html='<table class="dt"><thead><tr><th>Item</th><th>Price</th><th>Units sold</th></tr></thead><tbody>'+
    rows.map(function(r){ return "<tr><td>"+r.n+"</td><td>"+money(r.p)+"</td><td>"+commas(r.u)+"</td></tr>"; }).join("")+
    "</tbody></table>";
  var o=numOpts(correct,
    [ r1(rows[t].u/rows.reduce(function(a,r){return a+r.u;},0)*100), r1(correct*1.2), r1(correct*0.8), r1(100/n) ],
    function(v){ return r1(v)+"%"; });
  return { id:uid("qr"), topic:"Multi-step tables",
    stem:"<b>Weekly sales</b>"+html+"What percentage of total revenue came from "+rows[t].n+"? Give your answer to one decimal place.",
    opts:o.opts, ans:o.ans,
    why:"Two steps, and the second is the one people skip. First find every row's revenue and add them: total "+money0(total)+
        ". Then "+rows[t].n+" is "+money(rows[t].p)+" x "+commas(rows[t].u)+" = "+money0(revs[t])+", so "+money0(revs[t])+"/"+money0(total)+
        " = "+r1(correct)+"%. Using the share of UNITS instead of revenue gives "+r1(rows[t].u/rows.reduce(function(a,r){return a+r.u;},0)*100)+
        "%, which is offered and is wrong because the prices differ.",
    meta:{k:"tablepct",rows:rows,t:t} };
},

/* 20. multi-step: derived rate, compare rows */
function(){
  var rows=[], used={};
  for(var i=0;i<4;i++){
    var nm; do{ nm=pick(DEPTS); }while(used[nm]); used[nm]=1;
    rows.push({ n:nm, pat:ri(43,317), cost:ri(18,94)*1000+ri(1,999) });
  }
  var per=rows.map(function(r){ return r.cost/r.pat; });
  var bi=per.indexOf(Math.max.apply(null,per));
  var html='<table class="dt"><thead><tr><th>Department</th><th>Patients seen</th><th>Total cost</th></tr></thead><tbody>'+
    rows.map(function(r){ return "<tr><td>"+r.n+"</td><td>"+commas(r.pat)+"</td><td>"+money0(r.cost)+"</td></tr>"; }).join("")+
    "</tbody></table>";
  var o=textOpts(rows[bi].n, rows.filter(function(_,i){return i!==bi;}).map(function(r){return r.n;}));
  return { id:uid("qr"), topic:"Multi-step tables",
    stem:"<b>Quarterly activity</b>"+html+"Which department has the highest cost per patient seen?",
    opts:o.opts, ans:o.ans,
    why:"Neither column answers this on its own - you have to derive the rate. "+
        rows.map(function(r,i){ return r.n+" "+money0(r.cost)+"/"+commas(r.pat)+" = "+money0(per[i]); }).join("; ")+
        ". Highest is "+rows[bi].n+". Estimate rather than dividing precisely: round each pair and only compute the close ones properly.",
    meta:{k:"tablerate",rows:rows} };
},

/* 21. multi-step: percentage change in a combined total */
function(){
  var rows=[], used={};
  for(var i=0;i<4;i++){
    var nm; do{ nm=pick(PLACES); }while(used[nm]); used[nm]=1;
    var a=ri(1207,8934); rows.push({ n:nm, a:a, b:Math.round(a*(0.82+Math.random()*0.46)) });
  }
  var t1=rows.reduce(function(x,r){return x+r.a;},0), t2=rows.reduce(function(x,r){return x+r.b;},0);
  var correct=r1((t2-t1)/t1*100);
  var html='<table class="dt"><thead><tr><th>Town</th><th>2020</th><th>2026</th></tr></thead><tbody>'+
    rows.map(function(r){ return "<tr><td>"+r.n+"</td><td>"+commas(r.a)+"</td><td>"+commas(r.b)+"</td></tr>"; }).join("")+
    "</tbody></table>";
  var o=numOpts(correct, [ r1((t2-t1)/t2*100), r1(correct*1.3), r1(correct*0.7), r1(correct+ri(3,8)) ],
    function(v){ return r1(v)+"%"; });
  return { id:uid("qr"), topic:"Multi-step tables",
    stem:"<b>Registered patients</b>"+html+"What was the percentage change in the combined total across all four towns? Give your answer to one decimal place, using a minus sign for a fall.",
    opts:o.opts, ans:o.ans,
    why:"Add each column before doing anything else: 2020 total "+commas(t1)+", 2026 total "+commas(t2)+
        ". Change is "+commas(t2-t1)+", and dividing by the ORIGINAL total gives "+r1(correct)+
        "%. Averaging the four individual percentage changes is not the same thing and gives a different answer, because the towns are different sizes.",
    meta:{k:"twoyear",t1:t1,t2:t2} };
},

/* 22. multi-step: what is needed to hit an average */
function(){
  var total=pick([10,12,16,20]), done=Math.floor(total*pick([0.5,0.6,0.75]));
  var target=ri(23,87), sofar=target+ri(-9,9);
  var correct=(total*target - done*sofar)/(total-done);
  if(correct<0) { sofar=target-ri(1,6); correct=(total*target - done*sofar)/(total-done); }
  var o=numOpts(r1(correct), [ target, r1(2*target-sofar), r1(correct*1.15), r1(correct*0.85) ],
    function(v){ return r1(v)+""; });
  return { id:uid("qr"), topic:"Averages",
    stem:"A ward must average <b>"+target+"</b> procedures a week across a <b>"+total+"</b> week period. Over the first <b>"+done+
         "</b> weeks it averaged <b>"+sofar+"</b>. What average must it achieve over the remaining weeks? Give your answer to one decimal place.",
    opts:o.opts, ans:o.ans,
    why:"Work in totals throughout. The full period needs "+total+" x "+target+" = "+commas(total*target)+
        " procedures. So far: "+done+" x "+sofar+" = "+commas(done*sofar)+". That leaves "+commas(total*target-done*sofar)+
        " over "+(total-done)+" weeks, so "+r1(correct)+" a week. The trap is answering "+target+", the overall target, which only works if it is exactly on track.",
    meta:{k:"avgtarget",total:total,done:done,target:target,sofar:sofar} };
},

/* 18. table set - which is highest */
function(){
  var rows=[], n=4, used={};
  for(var i=0;i<n;i++){
    var nm; do{ nm=pick(DEPTS); }while(used[nm]); used[nm]=1;
    var beds=ri(12,40); rows.push({ n:nm, beds:beds, occ:Math.max(1,beds-ri(1,9)) });
  }
  var rates=rows.map(function(r){ return r.occ/r.beds; });
  var bi=rates.indexOf(Math.max.apply(null,rates));
  // guarantee a unique winner
  if(rates.filter(function(x){return x===rates[bi];}).length>1){ rows[bi].occ=rows[bi].beds; }
  rates=rows.map(function(r){ return r.occ/r.beds; });
  bi=rates.indexOf(Math.max.apply(null,rates));
  var html='<table class="dt"><thead><tr><th>Ward</th><th>Beds</th><th>Beds occupied</th></tr></thead><tbody>'+
    rows.map(function(r){ return "<tr><td>"+r.n+"</td><td>"+r.beds+"</td><td>"+r.occ+"</td></tr>"; }).join("")+
    '</tbody></table>';
  var o=textOpts(rows[bi].n, rows.filter(function(_,i){return i!==bi;}).map(function(r){return r.n;}));
  return { id:uid("qr"), topic:"Tables",
    stem:"<b>Bed occupancy</b>"+html+"Which ward has the highest occupancy rate?",
    opts:o.opts, ans:o.ans,
    why:rows.map(function(r,i){ return r.n+" "+r.occ+"/"+r.beds+" = "+r1(rates[i]*100)+"%"; }).join("; ")+
        ". Highest is "+rows[bi].n+". Compare free beds as a fraction rather than dividing each one out in full.",
    meta:{k:"tablemax",rows:rows} };
}
];

/* ======================================================================
   DECISION MAKING
   ====================================================================== */
var GROUPS=[
 {a:"nurses on Ward B", b:"completed the safeguarding training", c:"work night shifts"},
 {a:"members of the choir", b:"can read music", c:"play the piano"},
 {a:"students in the class", b:"study Biology", c:"play a sport"},
 {a:"cyclists in the club", b:"are vegetarian", c:"take vitamin B12"},
 {a:"doctors in the practice", b:"are registered trainers", c:"work part time"},
 {a:"books in the library", b:"are hardbacks", c:"are borrowed weekly"}
];

/* Syllogism templates. Truth values are fixed properties of the logical form,
   so randomising only the surface nouns cannot make them wrong. */
var SYLL=[
 { prem:function(g){ return "All "+g.a+" "+g.b+". Some "+g.a+" "+g.c+"."; },
   sts:function(g){ return [
     {t:"Some who "+g.c+" also "+g.b+".", a:true,  why:"Those who "+g.c+" are among the "+g.a+", and all of them "+g.b+"."},
     {t:"All who "+g.b+" are "+g.a+".", a:false, why:"Reversal. 'All A are B' does not give 'all B are A'."},
     {t:"All "+g.a+" "+g.c+".", a:false, why:"Only 'some' was stated."},
     {t:"Some "+g.a+" both "+g.b+" and "+g.c+".", a:true,  why:"Some "+g.a+" "+g.c+", and every one of the "+g.a+" "+g.b+"."},
     {t:"No one who "+g.c+" "+g.b+".", a:false, why:"Directly contradicted - some of them do."}
   ]; } },
 { prem:function(g){ return "No "+g.a+" "+g.c+". All who "+g.b+" are "+g.a+"."; },
   sts:function(g){ return [
     {t:"No one who "+g.b+" "+g.c+".", a:true,  why:"Those who "+g.b+" are all "+g.a+", and no "+g.a+" "+g.c+"."},
     {t:"All "+g.a+" "+g.b+".", a:false, why:"Reversal of the second premise."},
     {t:"Some who "+g.c+" "+g.b+".", a:false, why:"Contradicts the chain: anyone who "+g.b+" cannot "+g.c+"."},
     {t:"Anyone who "+g.c+" is not one of the "+g.a+".", a:true,  why:"Contrapositive of the first premise."},
     {t:"Everyone who "+g.c+" "+g.b+".", a:false, why:"The opposite follows."}
   ]; } },
 { prem:function(g){ return "Some "+g.a+" "+g.b+". No one who "+g.b+" "+g.c+"."; },
   sts:function(g){ return [
     {t:"Some "+g.a+" do not "+g.c+".", a:true,  why:"Some "+g.a+" "+g.b+", and nobody who "+g.b+" "+g.c+"."},
     {t:"No "+g.a+" "+g.c+".", a:false, why:"Only the subgroup that "+g.b+" is excluded. The rest are unconstrained."},
     {t:"Some who "+g.c+" are among the "+g.a+".", a:false, why:"Nothing establishes this either way."},
     {t:"Anyone who "+g.c+" does not "+g.b+".", a:true,  why:"Contrapositive of the second premise."},
     {t:"All "+g.a+" "+g.b+".", a:false, why:"Only 'some' was stated."}
   ]; } },
 { prem:function(g){ return "All "+g.a+" "+g.c+". Some who "+g.b+" are not among the "+g.a+"."; },
   sts:function(g){ return [
     {t:"Some who "+g.b+" do not "+g.c+".", a:false, why:"They are not "+g.a+", but they may still "+g.c+" for other reasons."},
     {t:"All "+g.a+" "+g.c+".", a:true,  why:"A restatement of the first premise."},
     {t:"Some "+g.a+" "+g.b+".", a:false, why:"Not established. The premise only tells you about people who are NOT "+g.a+"."},
     {t:"Anyone who does not "+g.c+" is not one of the "+g.a+".", a:true,  why:"Contrapositive of the first premise."},
     {t:"Nobody who "+g.b+" is one of the "+g.a+".", a:false, why:"Only 'some' were said not to be."}
   ]; } },
 { prem:function(g){ return "No "+g.a+" "+g.b+". All who "+g.c+" are among the "+g.a+"."; },
   sts:function(g){ return [
     {t:"Nobody who "+g.c+" "+g.b+".", a:true,  why:"Chain it: anyone who "+g.c+" is one of the "+g.a+", and no "+g.a+" "+g.b+"."},
     {t:"Anyone who "+g.b+" does not "+g.c+".", a:true,  why:"Contrapositive of that chain."},
     {t:"All "+g.a+" "+g.c+".", a:false, why:"Reversal of the second premise."},
     {t:"Some who "+g.b+" "+g.c+".", a:false, why:"Directly contradicted by the chain."},
     {t:"Everyone who does not "+g.b+" is one of the "+g.a+".", a:false, why:"Reversal again, and plainly too strong."}
   ]; } },
 { prem:function(g){ return "Every "+g.a+" who "+g.b+" also "+g.c+". No "+g.a+" "+g.c+"."; },
   sts:function(g){ return [
     {t:"No "+g.a+" "+g.b+".", a:true,  why:"If one did, they would "+g.c+", which the second premise rules out."},
     {t:"Some "+g.a+" "+g.b+".", a:false, why:"The premises together rule this out."},
     {t:"Anyone who "+g.c+" is not one of the "+g.a+".", a:true,  why:"Contrapositive of the second premise."},
     {t:"All "+g.a+" "+g.b+".", a:false, why:"The opposite follows."},
     {t:"Everyone who "+g.b+" is one of the "+g.a+".", a:false, why:"Reversal. People outside the group are not covered."}
   ]; } },
 { prem:function(g){ return "Anyone who is one of the "+g.a+" "+g.b+". Some who "+g.b+" also "+g.c+"."; },
   sts:function(g){ return [
     {t:"All "+g.a+" "+g.b+".", a:true,  why:"A restatement of the first premise."},
     {t:"Some "+g.a+" "+g.c+".", a:false, why:"The overlap between "+g.b+" and "+g.c+" need not contain any of the "+g.a+"."},
     {t:"Some who "+g.c+" also "+g.b+".", a:true,  why:"'Some' statements convert."},
     {t:"Anyone who does not "+g.b+" is not one of the "+g.a+".", a:true,  why:"Contrapositive of the first premise."},
     {t:"Everyone who "+g.b+" is one of the "+g.a+".", a:false, why:"Reversal of the first premise."}
   ]; } },
 { prem:function(g){ return "No "+g.a+" "+g.b+". Some who "+g.c+" are among the "+g.a+"."; },
   sts:function(g){ return [
     {t:"Some who "+g.c+" do not "+g.b+".", a:true,  why:"Those who are "+g.a+" cannot "+g.b+"."},
     {t:"Everyone who "+g.c+" is one of the "+g.a+".", a:false, why:"Only 'some' was stated."},
     {t:"Nobody who "+g.c+" "+g.b+".", a:false, why:"Only the ones who are also "+g.a+" are excluded. Others may well "+g.b+"."},
     {t:"Some "+g.a+" "+g.c+".", a:true,  why:"'Some' converts."},
     {t:"Anyone who "+g.b+" is not one of the "+g.a+".", a:true,  why:"Contrapositive of the first premise."}
   ]; } },
 { prem:function(g){ return "All "+g.a+" "+g.b+". Everyone who "+g.b+" "+g.c+"."; },
   sts:function(g){ return [
     {t:"All "+g.a+" "+g.c+".", a:true,  why:"Two universal statements chain: "+g.a+" implies "+g.b+" implies "+g.c+"."},
     {t:"Everyone who "+g.c+" "+g.b+".", a:false, why:"Reversal of the second premise."},
     {t:"Anyone who does not "+g.c+" is not one of the "+g.a+".", a:true,  why:"Contrapositive of the chain."},
     {t:"Some who "+g.b+" are not among the "+g.a+".", a:false, why:"Possible, but not established."},
     {t:"No "+g.a+" "+g.c+".", a:false, why:"The exact opposite follows."}
   ]; } },
 { prem:function(g){ return "Every one of the "+g.a+" who "+g.b+" also "+g.c+". Some "+g.a+" do not "+g.c+"."; },
   sts:function(g){ return [
     {t:"Some "+g.a+" do not "+g.b+".", a:true,  why:"If they did "+g.b+" they would "+g.c+", and these ones do not."},
     {t:"No "+g.a+" "+g.b+".", a:false, why:"Too strong. Only some were shown not to."},
     {t:"All "+g.a+" who "+g.c+" also "+g.b+".", a:false, why:"Reversal - they may "+g.c+" for other reasons."},
     {t:"Some "+g.a+" "+g.c+".", a:false, why:"Not established. It is possible that none of them "+g.b+", in which case none need "+g.c+"."},
     {t:"Anyone among the "+g.a+" who does not "+g.c+" does not "+g.b+".", a:true, why:"Contrapositive of the first premise."}
   ]; } }
];

var DM_GEN = [

/* syllogism, 5 statements, 2 marks */
function(){
  var g=pick(GROUPS), tpl=pick(SYLL);
  return { id:uid("dm"), sub:"syllogism", kind:"five",
    stem:tpl.prem(g), ask:"Decide whether each conclusion follows.",
    sts:tpl.sts(g),
    why:"Only what MUST follow counts. The two moves that are always valid are chaining universal statements and taking the contrapositive. Reversing a universal statement never is.",
    meta:{k:"syll"} };
},

/* two-set Venn */
function(){
  var total=ri(4,16)*10, both=ri(3,19);
  var onlyA=ri(4,26), onlyB=ri(4,26);
  var neither=total-(onlyA+both+onlyB);
  if(neither<0){ total=onlyA+both+onlyB+ri(2,10); neither=total-(onlyA+both+onlyB); }
  var A=onlyA+both, B=onlyB+both;
  var ask=Math.random()<0.5;
  var correct= ask ? neither : both;
  var o=numOpts(correct,
    ask ? [ total-A-B, both, neither+ri(2,6), Math.abs(neither-ri(2,5)) ]
        : [ A+B-total, neither, both+ri(2,5), Math.abs(both-ri(1,4)) ]);
  return { id:uid("dm"), sub:"venn", kind:"mcq",
    stem: ask
      ? "In a group of <b>"+total+"</b> people, <b>"+A+"</b> study Biology, <b>"+B+"</b> study Chemistry and <b>"+both+"</b> study both. How many study neither?"
      : "In a group of <b>"+total+"</b> people, <b>"+A+"</b> own a dog, <b>"+B+"</b> own a cat and <b>"+neither+"</b> own neither. How many own both?",
    opts:o.opts, ans:o.ans,
    why: ask
      ? "Fill the overlap first: "+both+". Biology only is "+A+" - "+both+" = "+onlyA+", Chemistry only is "+B+" - "+both+" = "+onlyB+
        ". At least one subject: "+(onlyA+both+onlyB)+". Neither = "+total+" - "+(onlyA+both+onlyB)+" = "+neither+"."
      : "At least one pet = "+total+" - "+neither+" = "+(total-neither)+". Union formula: "+A+" + "+B+" - both = "+(total-neither)+
        ", so both = "+(A+B)+" - "+(total-neither)+" = "+both+".",
    meta:{k:"venn2",total:total,A:A,B:B,both:both,neither:neither,ask:ask} };
},

/* three-set Venn */
function(){
  var abc=ri(2,11), ab=abc+ri(1,9), ac=abc+ri(1,9), bc=abc+ri(1,9);
  var A=ab+ac-abc+ri(3,14), B=ab+bc-abc+ri(3,14), C=ac+bc-abc+ri(3,14);
  var union=A+B+C-ab-ac-bc+abc;
  var total=union+ri(3,15);
  var correct=total-union;
  var o=numOpts(correct, [ total-(A+B+C), Math.abs(union-total+ri(3,9)), correct+ri(2,7), Math.abs(correct-ri(1,5)) ]);
  return { id:uid("dm"), sub:"venn", kind:"mcq",
    stem:"Among <b>"+total+"</b> students, <b>"+A+"</b> speak French, <b>"+B+"</b> speak German and <b>"+C+"</b> speak Spanish. "+
         "<b>"+ab+"</b> speak French and German, <b>"+ac+"</b> speak French and Spanish, <b>"+bc+"</b> speak German and Spanish, and <b>"+abc+"</b> speak all three. How many speak none of the three?",
    opts:o.opts, ans:o.ans,
    why:"Inclusion-exclusion: add the singles, subtract the three pairs, add the triple back. "+
        A+" + "+B+" + "+C+" = "+(A+B+C)+", minus ("+ab+" + "+ac+" + "+bc+") = "+(A+B+C-ab-ac-bc)+", plus "+abc+" = "+union+
        " who speak at least one. None = "+total+" - "+union+" = "+correct+".",
    meta:{k:"venn3",total:total,A:A,B:B,C:C,ab:ab,ac:ac,bc:bc,abc:abc,union:union} };
},

/* probability without replacement */
function(){
  var r=ri(3,11), b=ri(2,10), n=r+b;
  var correct=(r/n)*((r-1)/(n-1));
  var o=numOpts(r2(correct*1000)/1000,
    [ r2(Math.pow(r/n,2)*1000)/1000, r2((r/n)*1000)/1000, r2(correct*1000)/1000+0.05, Math.max(0.01,r2(correct*1000)/1000-0.05) ],
    function(v){ return v.toFixed(3); });
  return { id:uid("dm"), sub:"prob", kind:"mcq",
    stem:"A bag contains <b>"+r+"</b> red and <b>"+b+"</b> blue counters. Two are drawn at random <b>without replacement</b>. What is the probability that both are red? Give your answer to three decimal places.",
    opts:o.opts, ans:o.ans,
    why:"The second draw changes the bag. "+r+"/"+n+" x "+(r-1)+"/"+(n-1)+" = "+r2(correct*1000)/1000+
        ". Treating it as with replacement gives ("+r+"/"+n+") squared = "+(r2(Math.pow(r/n,2)*1000)/1000).toFixed(3)+", the standard trap.",
    meta:{k:"probwo",r:r,b:b} };
},

/* at least one */
function(){
  var p=pick([0.6,0.7,0.75,0.8,0.85,0.9]), n=ri(2,4);
  var correct=1-Math.pow(p,n);
  var o=numOpts(r2(correct*1000)/1000,
    [ r2(Math.pow(p,n)*1000)/1000, r2((1-p)*1000)/1000, r2(n*(1-p)*Math.pow(p,n-1)*1000)/1000, r2(correct*1000)/1000+0.06 ],
    function(v){ return v.toFixed(3); });
  return { id:uid("dm"), sub:"prob", kind:"mcq",
    stem:"The probability that a patient attends a booked appointment is <b>"+p+"</b>, independently of the others. <b>"+n+"</b> patients are booked. What is the probability that <b>at least one</b> fails to attend? Give your answer to three decimal places.",
    opts:o.opts, ans:o.ans,
    why:"'At least one' is nearly always easier as one minus the probability of none. All "+n+" attend: "+p+" to the power of "+n+" = "+
        (r2(Math.pow(p,n)*1000)/1000).toFixed(3)+". So at least one misses = 1 - "+(r2(Math.pow(p,n)*1000)/1000).toFixed(3)+" = "+
        (r2(correct*1000)/1000).toFixed(3)+".",
    meta:{k:"atleast",p:p,n:n} };
},

/* dice total */
function(){
  var target=ri(4,10);
  var ways=0; for(var i=1;i<=6;i++) for(var j=1;j<=6;j++) if(i+j===target) ways++;
  var correct=ways/36;
  var o=numOpts(r2(correct*1000)/1000,
    [ r2(ways/2/36*1000)/1000, r2((ways+1)/36*1000)/1000, r2(Math.max(1,ways-1)/36*1000)/1000, r2(1/6*1000)/1000 ],
    function(v){ return v.toFixed(3); });
  return { id:uid("dm"), sub:"prob", kind:"mcq",
    stem:"Two fair six-sided dice are rolled. What is the probability that the total is <b>"+target+"</b>? Give your answer to three decimal places.",
    opts:o.opts, ans:o.ans,
    why:"Count the ORDERED outcomes that give "+target+": there are "+ways+" of them out of 36, so "+(r2(correct*1000)/1000).toFixed(3)+
        ". Counting unordered pairs halves the count and is the usual error.",
    meta:{k:"dice",target:target,ways:ways} };
}
];

/* ---------------- public API ---------------- */
function tag(q){ q.raw=true; q.sk="gen:"+q.meta.k; return q; }

/* Multi-step items are weighted up: the live test leans on them far more heavily
   than a uniform draw across generators would produce. Weights are derived by
   probing each generator once, so adding a generator needs no bookkeeping. */
var MULTI=/^(tablepct|tablerate|twoyear|avgtarget)$/;
var QR_POOL=[];
QR_GEN.forEach(function(f,i){
  var w=1;
  try { if(MULTI.test(f().meta.k)) w=3; } catch(e){}
  for(var j=0;j<w;j++) QR_POOL.push(i);
});

window.GEN = {
  qr:function(){ return tag(QR_GEN[pick(QR_POOL)]()); },
  dm:function(){ return tag(pick(DM_GEN)()); },
  batch:function(sec,n){
    var out=[]; for(var i=0;i<n;i++) out.push(window.GEN[sec]());
    return out;
  },
  counts:{ qr:QR_GEN.length, dm:DM_GEN.length },
  _qr:QR_GEN, _dm:DM_GEN
};
})();
