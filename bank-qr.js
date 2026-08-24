/* Quantitative Reasoning bank. 36 items: 4 shared-data sets of 4, plus 20 standalone.
   Original practice material written in UCAT style. Not official UCAT content. */

window.QR_SETS = {
  A: { title:"Weekly sales, campus coffee shop", html:`
    <table class="dt"><thead><tr><th>Item</th><th>Price</th><th>Units sold</th></tr></thead>
    <tbody>
      <tr><td>Espresso</td><td>&euro;2.60</td><td>420</td></tr>
      <tr><td>Latte</td><td>&euro;3.80</td><td>610</td></tr>
      <tr><td>Tea</td><td>&euro;2.40</td><td>275</td></tr>
      <tr><td>Pastry</td><td>&euro;3.20</td><td>380</td></tr>
      <tr><td>Sandwich</td><td>&euro;6.50</td><td>240</td></tr>
    </tbody></table>` },
  B: { title:"Bed occupancy, four wards", html:`
    <table class="dt"><thead><tr><th>Ward</th><th>Beds</th><th>Beds occupied</th><th>Nurses on duty</th></tr></thead>
    <tbody>
      <tr><td>A</td><td>24</td><td>21</td><td>6</td></tr>
      <tr><td>B</td><td>30</td><td>27</td><td>8</td></tr>
      <tr><td>C</td><td>18</td><td>12</td><td>5</td></tr>
      <tr><td>D</td><td>32</td><td>30</td><td>9</td></tr>
    </tbody></table>` },
  C: { title:"Journey data", html:`
    <p class="setnote">A driver completes a journey of <b>384 km</b>. Her car consumes <b>6.4 litres per 100 km</b>.
    Diesel costs <b>&euro;1.75 per litre</b>. The journey takes <b>4 hours 48 minutes</b>.</p>` },
  D: { title:"Population change, four towns", html:`
    <table class="dt"><thead><tr><th>Town</th><th>Population 2016</th><th>Population 2026</th></tr></thead>
    <tbody>
      <tr><td>Ashford</td><td>12,400</td><td>15,500</td></tr>
      <tr><td>Brookvale</td><td>8,750</td><td>8,050</td></tr>
      <tr><td>Carrigan</td><td>21,000</td><td>25,200</td></tr>
      <tr><td>Dunmore</td><td>5,600</td><td>7,280</td></tr>
    </tbody></table>` }
};

window.BANK_QR = [
  /* ---------- Set A ---------- */
  { id:"qr_a1", set:"A", topic:"Tables", stem:"What was the total revenue from lattes?",
    opts:["&euro;1,830","&euro;2,318","&euro;2,440","&euro;2,562"], ans:1,
    why:"3.80 x 610. Split it: 610 x 4 = 2,440, then subtract 610 x 0.20 = 122, giving 2,318. Breaking a decimal into a round number minus a correction is usually faster than the on-screen calculator." },
  { id:"qr_a2", set:"A", topic:"Tables", stem:"Which item generated the most revenue?",
    opts:["Espresso","Pastry","Sandwich","Latte"], ans:3,
    why:"Espresso 1,092; Latte 2,318; Tea 660; Pastry 1,216; Sandwich 1,560. Latte is highest. You do not need all five: sandwiches are the only real rival to lattes, so compare those two first and check the rest are obviously smaller." },
  { id:"qr_a3", set:"A", topic:"Tables", stem:"What was the total revenue for the week?",
    opts:["&euro;6,846","&euro;7,120","&euro;7,486","&euro;7,906"], ans:0,
    why:"1,092 + 2,318 + 660 + 1,216 + 1,560 = 6,846." },
  { id:"qr_a4", set:"A", topic:"Tables", stem:"Each sandwich costs &euro;2.60 to make. What was the total profit on sandwiches?",
    opts:["&euro;624","&euro;936","&euro;1,560","&euro;1,872"], ans:1,
    why:"Margin per sandwich is 6.50 minus 2.60 = 3.90. Then 3.90 x 240 = 936. Work out the per-unit margin first rather than calculating revenue and cost separately." },

  /* ---------- Set B ---------- */
  { id:"qr_b1", set:"B", topic:"Percentages", stem:"Which ward has the highest bed occupancy rate?",
    opts:["Ward A","Ward B","Ward C","Ward D"], ans:3,
    why:"A is 21/24 = 87.5%, B is 27/30 = 90%, C is 12/18 = 66.7%, D is 30/32 = 93.75%. Ward D. Shortcut: D has only 2 free beds out of 32, the smallest shortfall proportionally, so it wins without dividing anything." },
  { id:"qr_b2", set:"B", topic:"Percentages", stem:"Across all four wards, what percentage of beds are occupied? Give your answer to one decimal place.",
    opts:["82.0%","84.5%","85.5%","86.5%"], ans:3,
    why:"Total beds 104, total occupied 90. 90/104 = 0.8654, so 86.5%. Note this is not the average of the four individual rates - larger wards carry more weight." },
  { id:"qr_b3", set:"B", topic:"Ratio", stem:"On Ward B, what is the ratio of occupied beds to nurses on duty, in its simplest form?",
    opts:["27 : 8","9 : 3","30 : 8","3 : 1"], ans:0,
    why:"27 to 8. They share no common factor, so it is already in simplest form. Do not be tempted to round it to 3:1." },
  { id:"qr_b4", set:"B", topic:"Percentages", stem:"If Ward C's occupancy rate rose to match Ward A's, how many of its beds would be occupied, to the nearest whole bed?",
    opts:["14","15","16","17"], ans:2,
    why:"Ward A is at 87.5%. 87.5% of 18 is 15.75, which rounds to 16. Useful fraction: 87.5% is 7/8, so 7/8 of 18 = 126/8 = 15.75." },

  /* ---------- Set C ---------- */
  { id:"qr_c1", set:"C", topic:"Rates", stem:"How much diesel does the journey consume, to the nearest 0.1 litre?",
    opts:["24.6 litres","26.2 litres","28.0 litres","30.7 litres"], ans:0,
    why:"384/100 = 3.84 hundred-km units, times 6.4 = 24.576, so 24.6 litres. Estimate check: nearly 4 lots of 6.4 is a bit under 26." },
  { id:"qr_c2", set:"C", topic:"Rates", stem:"What is the approximate cost of the diesel used?",
    opts:["&euro;37","&euro;43","&euro;49","&euro;55"], ans:1,
    why:"24.576 x 1.75 = 43.01. Because the question says approximate, round first: 24.6 x 1.75 is about 25 x 1.75 = 43.75, which is close enough to pick the answer." },
  { id:"qr_c3", set:"C", topic:"Speed", stem:"What was her average speed?",
    opts:["68 km/h","72 km/h","76 km/h","80 km/h"], ans:3,
    why:"4 hours 48 minutes is 4.8 hours, since 48/60 = 0.8. Then 384/4.8 = 80 km/h. Converting minutes to a decimal fraction of an hour before dividing avoids most speed errors." },
  { id:"qr_c4", set:"C", topic:"Speed", stem:"If she had averaged 96 km/h instead, how much time would she have saved?",
    opts:["36 minutes","42 minutes","48 minutes","54 minutes"], ans:2,
    why:"At 96 km/h the journey takes 384/96 = 4 hours exactly. She saves 0.8 of an hour, which is 48 minutes." },

  /* ---------- Set D ---------- */
  { id:"qr_d1", set:"D", topic:"Percentage change", stem:"Which town had the largest percentage increase in population?",
    opts:["Ashford","Brookvale","Carrigan","Dunmore"], ans:3,
    why:"Ashford +3,100 on 12,400 = 25%. Carrigan +4,200 on 21,000 = 20%. Dunmore +1,680 on 5,600 = 30%. Brookvale fell. Dunmore wins. Carrigan has the biggest absolute rise but the smallest relative one of the three risers - the classic trap." },
  { id:"qr_d2", set:"D", topic:"Percentage change", stem:"What was the percentage decrease in Brookvale's population?",
    opts:["7%","8%","8.7%","9%"], ans:1,
    why:"Fall of 700 on an original of 8,750. 700/8,750 = 0.08, so 8%. Always divide by the original value, not the new one - dividing by 8,050 gives 8.7%, which is option C and is there to catch you." },
  { id:"qr_d3", set:"D", topic:"Tables", stem:"What was the combined population of the four towns in 2026?",
    opts:["56,030","57,400","58,150","61,250"], ans:0,
    why:"15,500 + 8,050 + 25,200 + 7,280 = 56,030." },
  { id:"qr_d4", set:"D", topic:"Percentage change", stem:"If Carrigan grows at the same percentage rate over the next ten years, what will its population be in 2036?",
    opts:["29,400","30,240","31,500","33,600"], ans:1,
    why:"Carrigan grew 20% in the decade. 25,200 x 1.2 = 30,240. Applying the same absolute increase of 4,200 gives 29,400, which is option A and is wrong because the question specifies the same percentage rate." },

  /* ---------- Standalone ---------- */
  { id:"qr_1", topic:"Percentages", stem:"A jacket priced &euro;85 is reduced by 30% in a sale. At the till a further 10% is taken off the sale price. What is the final price?",
    opts:["&euro;47.60","&euro;51.00","&euro;53.10","&euro;53.55"], ans:3,
    why:"85 x 0.7 = 59.50, then 59.50 x 0.9 = 53.55. Successive discounts never add: 30% then 10% is not 40% off, which would give 51.00. Multiply the factors: 0.7 x 0.9 = 0.63, so she pays 63% of 85." },
  { id:"qr_2", topic:"Reverse percentage", stem:"After a 15% increase, a monthly rent is &euro;1,035. What was the rent before the increase?",
    opts:["&euro;879.75","&euro;890.00","&euro;900.00","&euro;920.00"], ans:2,
    why:"Divide, do not subtract. 1,035/1.15 = 900. Taking 15% off 1,035 gives 879.75, which is option A and is the standard trap in every reverse percentage question." },
  { id:"qr_3", topic:"Ratio", stem:"A solution is made by mixing concentrate and water in the ratio 2 : 7. How much concentrate is needed to make 1,350 ml of solution?",
    opts:["150 ml","270 ml","300 ml","386 ml"], ans:2,
    why:"Total parts = 9, so one part is 1,350/9 = 150 ml. Concentrate is 2 parts = 300 ml. The trap is treating 2:7 as 2 in every 7, which gives about 386 ml." },
  { id:"qr_4", topic:"Ratio", stem:"Three people share &euro;4,200 in the ratio 3 : 4 : 7. How much does the person with the largest share receive?",
    opts:["&euro;1,200","&euro;1,800","&euro;2,100","&euro;2,940"], ans:2,
    why:"14 parts in total, so one part is 300. The largest share is 7 parts = 2,100, exactly half the total." },
  { id:"qr_5", topic:"Speed", stem:"A train covers 210 km in 2 hours 30 minutes. What is its average speed?",
    opts:["84 km/h","91 km/h","95 km/h","105 km/h"], ans:0,
    why:"2.5 hours, so 210/2.5. Doubling both gives 420/5 = 84 km/h. Doubling to clear a decimal is quicker than reaching for the calculator." },
  { id:"qr_6", topic:"Time", stem:"A clinic procedure takes 35 minutes, with a 10 minute gap needed between consecutive procedures. If the first starts at 09:15, how many can be completed by 13:00?",
    opts:["5","6","7","8"], ans:0,
    why:"The window is 225 minutes. For n procedures the time needed is 35n + 10(n-1) = 45n - 10. Setting 45n - 10 to at most 225 gives n at most 5.2, so 5. The gap count is one fewer than the procedure count - forgetting that gives 6." },
  { id:"qr_7", topic:"Area", stem:"A rectangular ward measures 12.5 m by 8 m. Vinyl flooring costs &euro;23 per square metre. What is the total cost?",
    opts:["&euro;1,840","&euro;2,300","&euro;2,530","&euro;2,875"], ans:1,
    why:"12.5 x 8 = 100 square metres, which makes the multiplication trivial: 100 x 23 = 2,300. Look for the friendly number before calculating." },
  { id:"qr_8", topic:"Volume", stem:"A cylindrical water tank has a radius of 1.5 m and a height of 4 m. What is its volume to the nearest cubic metre? (Volume = pi r squared h)",
    opts:["19","24","28","38"], ans:2,
    why:"r squared = 2.25, times 4 = 9, times pi = 28.27, so 28 cubic metres. Using 3 for pi gives 27, which is close enough to pick the right option." },
  { id:"qr_9", topic:"Drug calculation", stem:"A drug is prescribed at 6 mg per kg of body weight per day, divided into three equal doses. What is the size of each dose for a 70 kg patient?",
    opts:["140 mg","210 mg","280 mg","420 mg"], ans:0,
    why:"Daily total is 6 x 70 = 420 mg. Divided into three doses gives 140 mg each. The daily total, 420 mg, is offered as a distractor - read to the end of the question." },
  { id:"qr_10", topic:"Concentration", stem:"A solution contains 250 mg of drug in every 5 ml. What volume delivers a 400 mg dose?",
    opts:["5 ml","6 ml","7.5 ml","8 ml"], ans:3,
    why:"250 mg in 5 ml means 50 mg per ml. 400/50 = 8 ml. Reducing to a per-unit rate first makes these instant." },
  { id:"qr_11", topic:"Averages", stem:"The mean of five numbers is 24. A sixth number is added and the mean becomes 26. What is the sixth number?",
    opts:["28","30","34","36"], ans:3,
    why:"Work with totals, not means. Five numbers total 120; six numbers total 156. The new number is 36. Every 'mean changes when a value is added' question is solved this way." },
  { id:"qr_12", topic:"Averages", stem:"A student scores 68% on a paper worth 40% of a module and 77% on a paper worth 60%. What is the overall module percentage?",
    opts:["72.5%","73.4%","74.1%","75.0%"], ans:1,
    why:"0.4 x 68 = 27.2 and 0.6 x 77 = 46.2, giving 73.4%. The simple average of 72.5% is option A and ignores the weighting." },
  { id:"qr_13", topic:"Currency", stem:"The exchange rate is 1 pound to 1.18 euro. A jacket costs 64 pounds in London. What is the cost in euro?",
    opts:["&euro;54.24","&euro;72.00","&euro;75.52","&euro;80.00"], ans:2,
    why:"64 x 1.18 = 75.52. Sanity check the direction: euro is the weaker currency here, so the euro figure must be larger than 64. Dividing instead of multiplying gives 54.24, option A." },
  { id:"qr_14", topic:"Currency", stem:"A hotel bill is 540 dollars. If 1 euro buys 1.08 dollars, what is the bill in euro?",
    opts:["&euro;500","&euro;540","&euro;583","&euro;620"], ans:0,
    why:"540/1.08 = 500. Here the euro is the stronger currency, so the euro figure must be smaller than 540 - that alone rules out three of the four options." },
  { id:"qr_15", topic:"Scale", stem:"On a map with a scale of 1 : 25,000, two points are 7.2 cm apart. What is the actual distance between them?",
    opts:["0.18 km","1.8 km","18 km","180 km"], ans:1,
    why:"7.2 x 25,000 = 180,000 cm. Divide by 100 for metres (1,800 m) and by 1,000 again for kilometres, giving 1.8 km. All four options have the same digits, so the entire question is a units test." },
  { id:"qr_16", topic:"Rates", stem:"One tap fills a 240 litre tank in 16 minutes. A second tap fills the same tank in 24 minutes. How long does it take with both taps running?",
    opts:["9.6 minutes","10.0 minutes","12.0 minutes","20.0 minutes"], ans:0,
    why:"Convert to rates and add: 15 litres per minute and 10 litres per minute make 25. Then 240/25 = 9.6 minutes. Averaging the two times to get 20 minutes is wrong - the combined time must be shorter than either tap alone." },
  { id:"qr_17", topic:"Percentages", stem:"In a school, 55% of students are girls and 40% of the girls play a sport. What percentage of the whole school are girls who play a sport?",
    opts:["15%","18%","20%","22%"], ans:3,
    why:"0.55 x 0.40 = 0.22, so 22%. A percentage of a percentage is a multiplication. Adding or subtracting the two figures is always wrong." },
  { id:"qr_18", topic:"Compound growth", stem:"&euro;5,000 is invested at 4% compound interest per year. What is it worth after three years, to the nearest euro?",
    opts:["&euro;5,600","&euro;5,624","&euro;5,640","&euro;5,700"], ans:1,
    why:"5,000 x 1.04 cubed = 5,000 x 1.124864 = 5,624.32, so 5,624. Simple interest would give 5,600, option A, and the gap between the two options tells you the question is testing compounding." },
  { id:"qr_19", topic:"Formula", stem:"Body mass index is mass in kilograms divided by height in metres squared. A patient is 1.75 m tall and weighs 82 kg. What is the BMI to one decimal place?",
    opts:["23.4","25.1","26.8","28.2"], ans:2,
    why:"1.75 squared = 3.0625, and 82/3.0625 = 26.78, so 26.8. Squaring the height, not the mass, is the whole difficulty. Estimate: 82/3 is about 27." },
  { id:"qr_20", topic:"Fractions", stem:"A tank is three-eighths full. After 120 litres are added it is five-eighths full. What is the capacity of the tank?",
    opts:["320 litres","400 litres","480 litres","600 litres"], ans:2,
    why:"The 120 litres filled two-eighths, which is a quarter of the tank. So capacity is 120 x 4 = 480 litres. Find what fraction the change represents, then scale up." }
];
