/* Decision Making bank. 30 items across the six DM question types.
   'five' items are the yes/no multi-statement format: 2 marks, 1 mark for partially correct.
   Original practice material written in UCAT style. Not official UCAT content. */

window.BANK_DM = [

  /* ================= SYLLOGISMS (5-statement, 2 marks) ================= */
  { id:"dm_s1", sub:"syllogism", kind:"five",
    stem:"All members of the choir can read music. Some members of the choir play the piano. No pianist in the choir is under 18.",
    ask:"Decide whether each conclusion follows.",
    sts:[
      {t:"All choir members who play the piano can read music.", a:true,  why:"Every choir member can read music, so this holds for the piano-playing subset."},
      {t:"Everyone who can read music is in the choir.", a:false, why:"Reversal fallacy. 'All A are B' does not give 'all B are A'."},
      {t:"Some pianists are 18 or over.", a:true,  why:"Some choir members play piano, and no choir pianist is under 18, so those people are 18 or over."},
      {t:"No choir member is under 18.", a:false, why:"The age restriction applies only to pianists in the choir. Non-pianist members are unconstrained."},
      {t:"All pianists can read music.", a:false, why:"Only pianists who are in the choir are covered. Pianists outside the choir are not mentioned."}
    ],
    why:"Two traps here: reversing a universal statement, and widening a restriction from a subgroup to the whole group." },

  { id:"dm_s2", sub:"syllogism", kind:"five",
    stem:"Every student who passed the exam attended the revision course. Ciara attended the revision course. Diarmuid did not attend the revision course.",
    ask:"Decide whether each conclusion follows.",
    sts:[
      {t:"Ciara passed the exam.", a:false, why:"Affirming the consequent. Passing guarantees attendance, not the other way round."},
      {t:"Diarmuid did not pass the exam.", a:true,  why:"Contrapositive, and it is always valid. Passed implies attended, so not attended implies not passed."},
      {t:"Everyone who attended the revision course passed the exam.", a:false, why:"This is the reverse of the premise and does not follow."},
      {t:"Every student who passed the exam attended the revision course.", a:true,  why:"This is a restatement of the premise."},
      {t:"No student who failed the exam attended the revision course.", a:false, why:"Students who failed may well have attended. Nothing rules it out."}
    ],
    why:"The one reliable move with a conditional is the contrapositive. Learn it: 'if P then Q' gives you 'if not Q then not P', and nothing else." },

  { id:"dm_s3", sub:"syllogism", kind:"five",
    stem:"No reptile is warm-blooded. All snakes are reptiles. Some pets are snakes.",
    ask:"Decide whether each conclusion follows.",
    sts:[
      {t:"No snake is warm-blooded.", a:true,  why:"Snakes are reptiles, and no reptile is warm-blooded."},
      {t:"Some pets are not warm-blooded.", a:true,  why:"Some pets are snakes; snakes are not warm-blooded."},
      {t:"All pets are reptiles.", a:false, why:"Only some pets are snakes. The rest are unspecified."},
      {t:"Some reptiles are pets.", a:true,  why:"'Some' statements convert. Some pets are snakes, snakes are reptiles, so some reptiles are pets."},
      {t:"No warm-blooded animal is a pet.", a:false, why:"Nothing prevents a warm-blooded animal from being a pet."}
    ],
    why:"Note the difference from item 1: 'some A are B' does convert to 'some B are A'. 'All A are B' does not convert." },

  { id:"dm_s4", sub:"syllogism", kind:"five",
    stem:"All the nurses on Ward B have completed the training. Some of the nurses on Ward B work night shifts. Nobody who has completed the training works in the pharmacy.",
    ask:"Decide whether each conclusion follows.",
    sts:[
      {t:"Some nurses who work night shifts have completed the training.", a:true,  why:"Some Ward B nurses work nights, and all Ward B nurses have completed the training."},
      {t:"No nurse on Ward B works in the pharmacy.", a:true,  why:"All Ward B nurses have the training, and nobody with the training works in the pharmacy."},
      {t:"Everyone who has completed the training works on Ward B.", a:false, why:"Reversal. Staff elsewhere may also have completed it."},
      {t:"Some pharmacy staff work night shifts.", a:false, why:"Nothing links pharmacy staff to shift patterns."},
      {t:"All night shift workers have completed the training.", a:false, why:"Only the Ward B night workers are covered."}
    ],
    why:"Chaining two universal statements is valid: Ward B implies trained, trained implies not pharmacy, therefore Ward B implies not pharmacy." },

  { id:"dm_s5", sub:"syllogism", kind:"five",
    stem:"Some cyclists in the club are vegetarian. All vegetarians in the club take vitamin B12. Everyone in the club who takes vitamin B12 has had a blood test.",
    ask:"Decide whether each conclusion follows.",
    sts:[
      {t:"Some cyclists in the club take vitamin B12.", a:true,  why:"Some cyclists are vegetarian, and all club vegetarians take B12."},
      {t:"Some cyclists in the club have had a blood test.", a:true,  why:"Chain it through: those cyclists take B12, and everyone taking B12 has had a blood test."},
      {t:"All cyclists in the club are vegetarian.", a:false, why:"Only 'some' were stated."},
      {t:"Everyone in the club who has had a blood test is vegetarian.", a:false, why:"Reversal. Others may have had blood tests for unrelated reasons."},
      {t:"All vegetarians in the club have had a blood test.", a:true,  why:"All club vegetarians take B12, and all who take B12 have had a blood test."}
    ],
    why:"A 'some' at the start of a chain carries through the chain, but it stays 'some' at the end. It never strengthens to 'all'." },

  { id:"dm_s6", sub:"syllogism", kind:"five",
    stem:"If it rains, the match is cancelled. The match was not cancelled. Whenever the match is cancelled, the ground staff are sent home.",
    ask:"Decide whether each conclusion follows.",
    sts:[
      {t:"It did not rain.", a:true,  why:"Contrapositive of the first premise: rain implies cancelled, not cancelled implies no rain."},
      {t:"The ground staff were not sent home.", a:false, why:"Cancellation is sufficient for them to be sent home, not necessary. They could be sent home for other reasons."},
      {t:"If the ground staff were sent home, the match was cancelled.", a:false, why:"Reversal of the third premise."},
      {t:"It rained but the match went ahead.", a:false, why:"This directly contradicts the first premise."},
      {t:"If it rains, the ground staff are sent home.", a:true,  why:"Chain the conditionals: rain implies cancelled, cancelled implies sent home."},
    ],
    why:"Conditionals chain forwards and reverse only as contrapositives. Sufficient is not the same as necessary." },

  /* ================= LOGICAL PUZZLES ================= */
  { id:"dm_p1", sub:"puzzle", kind:"mcq",
    stem:"Five students - Aoife, Ben, Cian, Dara and Eve - finished a race in different positions. Aoife finished ahead of Ben but behind Cian. Dara finished last. Eve finished immediately after Cian. Who finished first?",
    opts:["Cian","Aoife","Eve","Ben"], ans:0,
    why:"Dara is 5th. Eve is immediately after Cian, so they occupy consecutive places. If Cian were 2nd or later, first place would have to go to Aoife or Ben, but both must finish after Cian. So Cian is 1st, Eve 2nd, Aoife 3rd, Ben 4th, Dara 5th. Write the five slots on the laminate and fill in the fixed one first." },

  { id:"dm_p2", sub:"puzzle", kind:"mcq",
    stem:"Four colleagues - Priya, Quinn, Rosa and Sam - each drive a different car: a Golf, a Civic, a Focus and a Leaf. Quinn drives neither the Golf nor the Leaf. Rosa drives the Focus. Sam does not drive the Leaf. Which car does Priya drive?",
    opts:["Golf","Civic","Focus","Leaf"], ans:3,
    why:"Rosa takes the Focus. Quinn is excluded from the Golf, Leaf and Focus, so Quinn drives the Civic. Sam is excluded from the Leaf, Focus and Civic, so Sam drives the Golf. Priya takes what is left: the Leaf. A four-by-four grid on the laminate resolves this in under thirty seconds." },

  { id:"dm_p3", sub:"puzzle", kind:"mcq",
    stem:"Three boxes are labelled 'apples', 'oranges' and 'apples and oranges'. Every label is known to be wrong. You may remove one fruit, without looking inside, from a single box. From which box should you draw in order to work out the contents of all three?",
    opts:["The box labelled 'apples'","The box labelled 'oranges'","The box labelled 'apples and oranges'","Any box will do"], ans:2,
    why:"Because every label is wrong, the box labelled 'apples and oranges' cannot be mixed, so it is pure. One fruit tells you which. Say you draw an apple: that box is apples. The box labelled 'apples' cannot be apples and cannot be the mixed box's contents, so it is oranges, and the remaining box is mixed. Drawing from either other box leaves two possibilities open." },

  { id:"dm_p4", sub:"puzzle", kind:"mcq",
    stem:"Six people sit evenly spaced around a circular table. Freya sits directly opposite Gus. Hana sits two seats clockwise from Freya. Idris sits directly opposite Hana. Jo sits directly clockwise of Gus. Kit takes the remaining seat. Who sits directly opposite Jo?",
    opts:["Freya","Hana","Idris","Kit"], ans:3,
    why:"Number the seats 1 to 6 clockwise and put Freya in 1. Gus is opposite, in 4. Hana is two clockwise of Freya, in 3. Idris is opposite Hana, in 6. Jo is directly clockwise of Gus, in 5. Kit takes seat 2. Opposite seat 5 is seat 2, so Kit. With six seats, 'opposite' always means add three." },

  { id:"dm_p5", sub:"puzzle", kind:"mcq",
    stem:"Five doctors - Murphy, Nolan, O'Brien, Power and Quirke - each use one of rooms 1 to 5. Dr Nolan's room number is lower than Dr Murphy's. Dr O'Brien is in room 3. Dr Murphy is not in room 5. Dr Power is in the room immediately after Dr Murphy. Dr Quirke is in room 1. Which room is Dr Nolan in?",
    opts:["Room 1","Room 2","Room 4","Room 5"], ans:1,
    why:"Quirke is in 1 and O'Brien in 3. Murphy cannot be 5, cannot be 3 or 1, and Power must be Murphy plus one. Murphy in 2 would put Power in 3, which is taken. So Murphy is in 4 and Power in 5. Nolan must be below 4, and only room 2 is free. Start from the most constrained fact, not the first one listed." },

  /* ================= STRONGEST ARGUMENT ================= */
  { id:"dm_a1", sub:"argument", kind:"mcq",
    stem:"Should secondary schools require phones to be handed in for the school day?",
    opts:[
      "Yes, because phones are expensive and might be stolen if students keep them.",
      "No, because students have a right to keep their own property with them.",
      "No, because teachers use their phones during the school day as well.",
      "Yes, because trials in which phones were collected found the largest attainment gains among lower-achieving students, narrowing the attainment gap."
    ], ans:3,
    why:"D is the strongest: it is directly relevant to what schools are for, it cites evidence, and it identifies who benefits. A addresses theft, not education. B asserts a right without engaging with the trade-off. C is a tu quoque - pointing at inconsistency rather than arguing the case." },

  { id:"dm_a2", sub:"argument", kind:"mcq",
    stem:"Should Ireland expand offshore wind generation?",
    opts:[
      "Yes, because most other European countries are doing so.",
      "No, because turbines spoil the view along the coast.",
      "Yes, because Ireland has among the highest average wind speeds in Europe and currently imports most of its energy, so the resource directly addresses an existing dependency.",
      "No, because the wind does not blow all the time."
    ], ans:2,
    why:"C ties a specific national advantage to a specific national problem. A is bandwagon reasoning. B raises a real but comparatively minor consideration. D states a fact about wind without engaging with storage, grid mix or the fact that no one proposes wind alone." },

  { id:"dm_a3", sub:"argument", kind:"mcq",
    stem:"Should hospitals publish mortality statistics for individual surgeons?",
    opts:[
      "No, because patients would not be able to understand the figures.",
      "Yes, because transparency is always a good thing.",
      "No, because surgeons who take the highest-risk cases would appear to perform worst, which could deter them from operating on the patients most in need of surgery.",
      "Yes, because other industries publish performance data."
    ], ans:2,
    why:"C identifies a concrete mechanism by which the policy could harm the people it is meant to protect. A is unevidenced and patronising. B is a bare generalisation - 'always' is a warning sign. D is a weak analogy that ignores what makes surgery different." },

  { id:"dm_a4", sub:"argument", kind:"mcq",
    stem:"Should the minimum driving age be raised from 17 to 18?",
    opts:[
      "No, because many young people in rural areas rely on driving to reach work or education and have no public transport alternative.",
      "Yes, because 17-year-olds are not mature enough to drive.",
      "Yes, because insurance premiums for 17-year-olds are very high.",
      "No, because the age has been 17 for a long time and the system works."
    ], ans:0,
    why:"A names a specific group, a specific harm and the absence of an alternative. B is assertion without evidence. C describes a consequence of risk rather than an argument about the age limit, and could even support the opposite conclusion. D is an appeal to tradition." },

  { id:"dm_a5", sub:"argument", kind:"mcq",
    stem:"Should antibiotics be available without a prescription for common infections?",
    opts:[
      "No, because wider and less targeted use accelerates the spread of resistant bacteria, reducing the effectiveness of these drugs for everyone.",
      "Yes, because it would save patients the cost and inconvenience of a GP appointment.",
      "No, because pharmacists are already too busy to advise patients properly.",
      "Yes, because most people can tell when they have an infection."
    ], ans:0,
    why:"A identifies a harm that falls on the whole population, not just the individual - the classic externality argument, and the strongest available here. B is a genuine benefit but a small one against a large risk. C is a practical staffing point, easily fixed. D is false in the relevant sense: distinguishing bacterial from viral infection is exactly what patients cannot reliably do." },

  /* ================= VENN / SETS ================= */
  { id:"dm_v1", sub:"venn", kind:"mcq",
    stem:"In a class of 30 students, 18 study Biology, 15 study Chemistry and 7 study both. How many study neither subject?",
    opts:["4","6","8","10"], ans:0,
    why:"Fill the overlap first: 7. Biology only is 18 minus 7 = 11. Chemistry only is 15 minus 7 = 8. Total in at least one subject is 11 + 7 + 8 = 26. Neither is 30 minus 26 = 4. Always write the intersection in before anything else." },

  { id:"dm_v2", sub:"venn", kind:"mcq",
    stem:"In a survey of 120 people, 70 own a dog, 55 own a cat and 20 own neither. How many own both?",
    opts:["15","20","25","30"], ans:2,
    why:"At least one pet: 120 minus 20 = 100. Use the union formula: 70 + 55 minus both = 100, so both = 125 minus 100 = 25." },

  { id:"dm_v3", sub:"venn", kind:"mcq",
    stem:"Of 200 patients on a register, 110 have hypertension, 90 have diabetes and 45 have both. How many have exactly one of the two conditions?",
    opts:["65","110","155","45"], ans:1,
    why:"Hypertension only is 110 minus 45 = 65. Diabetes only is 90 minus 45 = 45. Exactly one is 65 + 45 = 110. Read the wording carefully: 'exactly one' excludes the overlap, whereas 'at least one' would include it and give 155." },

  { id:"dm_v4", sub:"venn", kind:"mcq",
    stem:"Among 60 medical students, 32 speak French, 25 speak German and 20 speak Spanish. 12 speak French and German, 10 speak French and Spanish, 8 speak German and Spanish, and 5 speak all three. How many speak none of these languages?",
    opts:["6","8","10","12"], ans:1,
    why:"Inclusion-exclusion for three sets: add the singles, subtract the pairs, add back the triple. 32 + 25 + 20 = 77. Subtract 12 + 10 + 8 = 30, giving 47. Add back 5, giving 52 who speak at least one. None is 60 minus 52 = 8." },

  /* ================= PROBABILISTIC REASONING ================= */
  { id:"dm_r1", sub:"prob", kind:"mcq",
    stem:"A bag contains 5 red and 3 blue counters. Two are drawn at random without replacement. What is the probability that both are red?",
    opts:["25/64","5/14","5/8","1/2"], ans:1,
    why:"Without replacement, the second draw changes. 5/8 for the first red, then 4/7 for the second, giving 20/56 = 5/14. The trap answer 25/64 comes from treating it as with replacement." },

  { id:"dm_r2", sub:"prob", kind:"mcq",
    stem:"The probability that a given patient attends a booked appointment is 0.8, independently of other patients. Three patients are booked. What is the probability that at least one fails to attend?",
    opts:["0.200","0.384","0.488","0.512"], ans:2,
    why:"'At least one' is almost always easier as one minus the probability of none. All three attend: 0.8 cubed = 0.512. So at least one misses = 1 minus 0.512 = 0.488. The 0.384 option is the probability that exactly one patient misses, which answers a different question." },

  { id:"dm_r3", sub:"prob", kind:"mcq",
    stem:"A screening test has a sensitivity of 90%. It is applied to 1,000 people, of whom 50 actually have the disease. How many people with the disease will the test correctly identify?",
    opts:["45","50","900","855"], ans:0,
    why:"Sensitivity is the proportion of people who have the disease that the test correctly flags. 90% of 50 = 45. The 1,000 figure is there to tempt you into applying 90% to the whole group." },

  { id:"dm_r4", sub:"prob", kind:"mcq",
    stem:"Two fair six-sided dice are rolled. What is the probability that the total is 9?",
    opts:["1/12","1/9","1/6","4/9"], ans:1,
    why:"Count the ordered outcomes: 3 and 6, 4 and 5, 5 and 4, 6 and 3. That is 4 out of 36, which is 1/9. Counting unordered pairs and getting 2/36 is the usual error." },

  { id:"dm_r5", sub:"prob", kind:"mcq",
    stem:"A raffle sells 400 tickets. Eve buys 12 of them. Two different winning tickets are drawn without replacement. What is the probability that Eve wins neither prize?",
    opts:["0.03","0.06","0.94","0.97"], ans:2,
    why:"388/400 for the first draw, then 387/399 for the second. That is roughly 0.970 times 0.970, which is about 0.941. Estimate rather than compute exactly: she holds 3% of tickets, so missing both is close to 0.97 squared." },

  /* ================= INTERPRETING INFORMATION (5-statement) ================= */
  { id:"dm_i1", sub:"interpret", kind:"five",
    stem:"A hospital audited its emergency department over four weeks. Median waiting times were 210 minutes in week 1, 185 in week 2, 240 in week 3 and 175 in week 4. A new triage system was introduced at the start of week 4. Total attendances were 1,420, 1,390, 1,610 and 1,380 in weeks 1 to 4 respectively.",
    ask:"Decide whether each conclusion follows from the information above.",
    sts:[
      {t:"The median wait was shorter in week 4 than in week 3.", a:true,  why:"175 minutes against 240 minutes."},
      {t:"The new triage system caused the reduction in waiting time in week 4.", a:false, why:"Attendances also fell to their lowest level that week. One week of data with a confounder present cannot establish cause."},
      {t:"Week 3 had both the highest attendance and the longest median wait.", a:true,  why:"1,610 attendances and 240 minutes are both the highest figures in their columns."},
      {t:"More than half of patients in week 1 waited longer than 210 minutes.", a:false, why:"210 was the median, so roughly half waited longer and half less. 'More than half' is not supported."},
      {t:"The mean waiting time in week 2 was 185 minutes.", a:false, why:"185 was the median. A skewed distribution can have a very different mean."}
    ],
    why:"Two habits to build here: check whether a figure is a median or a mean, and look for what else changed before accepting a causal claim." },

  { id:"dm_i2", sub:"interpret", kind:"five",
    stem:"A study of 4,000 adults found that people who reported eating breakfast daily had a lower average body mass index than those who skipped breakfast. 22% of breakfast eaters were classified as obese, compared with 31% of breakfast skippers. Breakfast eaters also reported more physical activity and were less likely to smoke.",
    ask:"Decide whether each conclusion follows from the information above.",
    sts:[
      {t:"Eating breakfast reduces the risk of obesity.", a:false, why:"This is an observational association with two confounders named in the text. It does not establish that breakfast is the cause."},
      {t:"Fewer than a quarter of breakfast eaters in the study were obese.", a:true,  why:"22% is below 25%."},
      {t:"The study included both smokers and non-smokers.", a:true,  why:"The groups are compared on how likely they were to smoke, so both must be present."},
      {t:"Breakfast skippers were more likely to smoke than breakfast eaters.", a:true,  why:"A direct restatement of 'breakfast eaters were less likely to smoke'."},
      {t:"The difference in obesity rates between the two groups was more than 10 percentage points.", a:false, why:"31 minus 22 is 9 percentage points."}
    ],
    why:"When a passage volunteers confounders, it is signalling that the causal statement is the wrong answer." },

  { id:"dm_i3", sub:"interpret", kind:"five",
    stem:"A rail operator counts a train as punctual if it arrives within five minutes of its scheduled time. In 2024, 88% of its services were punctual, up from 84% in 2023. Over the same period the operator removed 40 services per day from the timetable and added eight minutes to the scheduled journey time on each of its two longest routes.",
    ask:"Decide whether each conclusion follows from the information above.",
    sts:[
      {t:"Punctuality improved between 2023 and 2024 on the operator's own definition.", a:true,  why:"88% against 84%, using the stated definition."},
      {t:"Journeys took less time in 2024 than in 2023.", a:false, why:"Scheduled times went up on the longest routes, so journeys did not get faster."},
      {t:"More trains arrived on time in 2024 than in 2023.", a:false, why:"The percentage rose but 40 services a day were removed. Without the total number of services, the absolute count cannot be determined."},
      {t:"A train arriving four minutes behind schedule in 2024 was counted as punctual.", a:true,  why:"Four minutes is within the stated five-minute threshold."},
      {t:"The improvement in punctuality was entirely due to the timetable changes.", a:false, why:"The timetable changes could explain some or all of it, but 'entirely' cannot be established from these figures."}
    ],
    why:"A percentage rising while the base shrinks is one of the most common traps in the whole exam. Always ask what the denominator did." },

  { id:"dm_i4", sub:"interpret", kind:"five",
    stem:"A trial randomised 600 patients with chronic pain to drug X or placebo, 300 in each arm. After 12 weeks, 168 patients on drug X reported a clinically meaningful reduction in pain, compared with 120 on placebo. Forty-two patients on drug X withdrew because of side effects, compared with nine on placebo.",
    ask:"Decide whether each conclusion follows from the information above.",
    sts:[
      {t:"The response rate on drug X was 56%.", a:true,  why:"168 out of 300 is 56%."},
      {t:"Drug X produced a higher response rate than placebo.", a:true,  why:"56% against 120/300 = 40%."},
      {t:"More than a third of patients on drug X withdrew because of side effects.", a:false, why:"42 out of 300 is 14%."},
      {t:"Drug X should be approved for routine clinical use.", a:false, why:"An approval decision needs cost, comparison with existing treatments, longer follow-up and safety data. It does not follow from one trial result."},
      {t:"The absolute difference in response rate between the arms was 16 percentage points.", a:true,  why:"56% minus 40% is 16 percentage points."}
    ],
    why:"Recommendations and policy judgements almost never 'follow' from a data passage. Only arithmetic and direct restatement do." },

  { id:"dm_i5", sub:"interpret", kind:"five",
    stem:"A school reports that the proportion of its students achieving the top grade in higher-level Mathematics rose from 6% to 11% over three years. During the same period the school introduced extra Mathematics classes for students predicted to achieve a high grade, and the number of students sitting higher-level Mathematics fell from 150 to 74.",
    ask:"Decide whether each conclusion follows from the information above.",
    sts:[
      {t:"The proportion of students achieving the top grade increased.", a:true,  why:"6% to 11%, as stated."},
      {t:"The number of students achieving the top grade increased.", a:false, why:"6% of 150 is 9 students; 11% of 74 is about 8. The count went down even though the percentage went up."},
      {t:"Restricting who sits higher-level Mathematics could partly explain the rise in the percentage.", a:false, why:"Careful: the passage does not say entry was restricted, only that numbers fell and extra classes were offered to strong candidates. This is a plausible hypothesis, not something the information establishes."},
      {t:"Fewer students sat higher-level Mathematics at the end of the period than at the start.", a:true,  why:"150 down to 74."},
      {t:"The extra classes were the sole cause of the improvement in the percentage.", a:false, why:"'Sole cause' cannot be established, particularly when the cohort composition changed at the same time."}
    ],
    why:"Same lesson as the rail item, in a setting you will recognise. A rising percentage on a shrinking base can hide a falling count." }
];
