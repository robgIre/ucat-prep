/* Strategy library + 4-week plan. Format facts verified against ucat.ac.uk (2026 cycle). */

window.FORMAT = {
  examDate: "2026-09-21",
  sections: [
    { key:"vr",  name:"Verbal Reasoning",      q:44, mins:22, instr:"1 min 30", scale:"300-900", mean2025:602 },
    { key:"dm",  name:"Decision Making",       q:35, mins:37, instr:"1 min 30", scale:"300-900", mean2025:628 },
    { key:"qr",  name:"Quantitative Reasoning",q:36, mins:26, instr:"2 min",    scale:"300-900", mean2025:661 },
    { key:"sjt", name:"Situational Judgement", q:69, mins:26, instr:"1 min 30", scale:"Band 1-4", mean2025:null }
  ],
  deciles: {
    total:[1580,1680,1760,1820,1880,1950,2010,2100,2220],
    vr:[500,540,560,580,600,620,640,670,700],
    dm:[520,560,590,610,630,650,670,700,740],
    qr:[520,570,590,630,650,680,710,750,820]
  },
  meanTotal2025: 1891,
  sjtBands2025: { 1:21, 2:39, 3:29, 4:10 }
};

window.STRATEGY = {
  general: {
    title: "Before anything else",
    points: [
      { h:"There is no negative marking.", p:"A wrong answer costs exactly the same as a blank: nothing. Leaving a question empty is the only guaranteed way to lose a mark you could have had. In the last 20 seconds of every section, fill in every unanswered question, even at random." },
      { h:"Abstract Reasoning no longer exists.", p:"It was removed in 2025. If any book, video or website you are using includes Abstract Reasoning, it is out of date and its timings for the other sections will be wrong too. Bin it." },
      { h:"Pace beats perfection.", p:"Nearly everyone who scores badly does so by running out of time, not by being unable to do the questions. One question answered perfectly in three minutes costs you four other questions. Guess, flag, move on." },
      { h:"Flag and move.", p:"If a question is not yielding after roughly twice its share of time, pick the best remaining option, flag it and go. Coming back with fresh eyes at the end is far more efficient than grinding." },
      { h:"Learn the keyboard.", p:"Alt plus the underlined letter triggers a function. Alt+N moves to the next question. Using the keyboard rather than hunting for buttons with the mouse saves seconds on every single question, and there are 184 of them." },
      { h:"The calculator is only in DM and QR.", p:"It is basic, it opens in a separate window, and it stops responding if you click away from it. It is slower than your head for anything simple. Reserve it for genuinely messy arithmetic." },
      { h:"Use the laminated whiteboard.", p:"You get an A4 laminated notebook and a pen. Use it for Venn diagrams, ordering puzzles and any arithmetic with more than two steps. Trying to hold a logic puzzle in working memory is how careless errors happen." },
      { h:"The timer turns yellow at 5 minutes.", p:"That is the cue to check how many questions remain and start triaging. If time expires, a pop-up appears - press OK immediately or it eats into the next section." }
    ]
  },

  vr: {
    name:"Verbal Reasoning", q:44, mins:22,
    pace:"30 seconds per question. 11 passages, 4 questions each, so roughly 2 minutes per passage including reading.",
    checkpoint:"At 11 minutes you should be starting question 23.",
    approach: [
      "Read the question first, never the passage. The passage is a reference document, not something to be read for pleasure.",
      "Pick two or three distinctive keywords from the question and scan the passage for them. Names, numbers, unusual nouns and dates are easiest to find.",
      "Read only the sentence containing the keyword, plus the one on either side.",
      "Answer from the passage alone. Outside knowledge is a trap, not an advantage. You will know things about medicine and science that the passage does not say."
    ],
    types: [
      { n:"True / False / Can't Tell",
        how:"True means the passage states or directly entails it. False means the passage contradicts it. Can't Tell means the passage neither confirms nor denies it.",
        traps:[
          "Can't Tell is not 'I'm not sure'. It means the information is genuinely absent. If you found the sentence and it settles the matter, the answer is True or False.",
          "Absolutes are usually False or Can't Tell: all, none, never, only, always, must, entirely, solely.",
          "Hedged wording is usually True: may, some, can, suggests, is associated with.",
          "'The main reason', 'the most important factor', 'the primary cause' require the passage to have ranked things explicitly. It usually has not.",
          "A statement about something the passage never mentions at all is Can't Tell, however obviously true it seems in the real world."
        ] },
      { n:"Inference and 'best supported' questions",
        how:"Choose the option that requires the smallest leap beyond what is written. The correct answer is nearly always the most cautious one.",
        traps:[
          "Eliminate options containing information that is true but never appears in the passage.",
          "Eliminate options that overstate a hedged claim in the passage.",
          "Two options often say almost the same thing with different strength. The weaker one is usually correct."
        ] },
      { n:"Author's attitude or tone",
        how:"Look for evaluative language and for structural signals: 'yet', 'however', 'is often described as', 'the claim requires qualification'.",
        traps:["Authors of UCAT passages are rarely extreme. Options like 'entirely wrong' or 'wholeheartedly endorses' are usually distractors."] },
      { n:"NOT / EXCEPT questions",
        how:"Find the three options that are supported. The remaining one is the answer.",
        traps:["Easy to answer backwards under time pressure. Underline the word NOT on the laminate before starting."] }
    ]
  },

  dm: {
    name:"Decision Making", q:35, mins:37,
    pace:"63 seconds per question, the most generous in the exam. The multi-statement questions deserve more than the average; the single-answer ones less.",
    checkpoint:"At 18 minutes you should be starting question 18.",
    approach: [
      "Multi-statement questions are worth 2 marks with 1 mark for a partially correct response. Never leave a statement blank - a coin flip on each of five statements is worth real marks.",
      "Single-answer questions are worth 1 mark. If a puzzle is not falling out within 90 seconds, guess and flag.",
      "Draw. Venn diagrams, ordering lines and grids belong on the laminate, not in your head."
    ],
    types: [
      { n:"Syllogisms (yes/no on five conclusions)",
        how:"Ask only one thing: must this be true given the premises? Not 'is it likely', not 'is it true in real life'.",
        traps:[
          "Reversal: 'all A are B' does NOT give 'all B are A'. This is the single most common trap.",
          "Contrapositive is always valid: 'if P then Q' gives 'if not Q then not P'.",
          "'Some A are B' does convert to 'some B are A'. Unlike 'all'.",
          "'Some' never becomes 'all', and 'all' can be weakened to 'some' only if the group is known to be non-empty.",
          "Sufficient is not necessary. 'Rain causes cancellation' does not mean cancellation implies rain."
        ] },
      { n:"Interpreting information (yes/no on five conclusions from data)",
        how:"Only arithmetic and direct restatement follow. Judgements, recommendations and causal claims do not.",
        traps:[
          "A percentage rising while the base shrinks can hide a falling count. Always ask what the denominator did.",
          "Median is not mean. Check which one the passage gave.",
          "If the passage volunteers a confounder, the causal statement is a No.",
          "'Should' statements are almost always No."
        ] },
      { n:"Strongest argument",
        how:"The strongest argument is directly relevant to the question asked, factually substantive, and engages with the actual trade-off.",
        traps:[
          "Reject: appeals to tradition ('it has always been this way'), popularity ('other countries do it'), and emotion.",
          "Reject: statements that are true but do not bear on the question.",
          "Reject: tu quoque - pointing out that someone else is inconsistent.",
          "Beware options containing 'always' or 'never'. Bare generalisations are weak arguments even when they support the right side.",
          "An argument can be on the 'wrong' side and still be the strongest one offered. Judge the reasoning, not the conclusion."
        ] },
      { n:"Venn diagrams and sets",
        how:"Draw it. Fill in the innermost region first and work outwards, subtracting as you go.",
        traps:[
          "Two sets: total in at least one = A + B - both.",
          "Three sets: add the singles, subtract the three pairs, add back the triple.",
          "'Exactly one' excludes the overlap. 'At least one' includes it. Read which is asked."
        ] },
      { n:"Probabilistic reasoning",
        how:"AND means multiply, OR (mutually exclusive) means add.",
        traps:[
          "'At least one' is easiest as 1 minus the probability of none.",
          "Without replacement changes the denominator on the second draw.",
          "Sensitivity applies to those who have the disease, not to everyone tested."
        ] },
      { n:"Logical puzzles",
        how:"Start from the most constrained fact, not the first one listed. Fixed positions and negatives narrow things fastest.",
        traps:["Build a grid on the laminate. Two minutes of drawing beats five minutes of re-reading."] }
    ]
  },

  qr: {
    name:"Quantitative Reasoning", q:36, mins:26,
    pace:"43 seconds per question. Questions usually come in sets of up to four sharing one chart or table.",
    checkpoint:"At 13 minutes you should be starting question 19.",
    approach: [
      "Read the question before studying the chart. Charts contain far more data than any one question needs.",
      "Check axis labels and units every time: thousands, per month versus per year, cm versus m.",
      "Estimate first. Options are often far apart, and a rough figure eliminates two or three of them without any real calculation.",
      "If the question says 'approximately' or 'roughly', it is telling you not to compute precisely.",
      "Use the calculator only for genuinely awkward arithmetic. Mental arithmetic and paper are faster for everything else."
    ],
    types: [
      { n:"Percentage change",
        how:"Change divided by the ORIGINAL, times 100.",
        traps:["Dividing by the new value is the standard trap and is usually an available option.","Percentage points and per cent are different things. A rise from 22% to 31% is 9 percentage points, not a 9% rise."] },
      { n:"Reverse percentage",
        how:"Divide by the multiplier. After a 15% rise, original = new / 1.15. After a 20% fall, original = new / 0.8.",
        traps:["Subtracting 15% from the new figure is wrong and is always offered as an option."] },
      { n:"Successive percentages",
        how:"Multiply the factors. 30% off then 10% off is 0.7 x 0.9 = 0.63 of the original.",
        traps:["They never add. 30% then 10% is not 40%."] },
      { n:"Ratio and proportion",
        how:"Add the parts to get the total number of parts, divide the quantity by that, then multiply up.",
        traps:["2:7 means 2 parts in 9, not 2 in 7."] },
      { n:"Speed, distance, time",
        how:"Convert minutes to a decimal fraction of an hour before dividing. 48 minutes is 0.8 hours.",
        traps:["Dividing by 2.30 instead of 2.5 for two and a half hours."] },
      { n:"Averages",
        how:"Work with totals. Mean times count gives the total; compare totals before and after.",
        traps:["Weighted means: multiply each value by its weight. The plain average ignores weighting and is always an option."] },
      { n:"Rates and combined work",
        how:"Convert everything to a per-unit rate and add the rates.",
        traps:["Averaging two times is wrong. Combining two workers must be faster than either alone."] },
      { n:"Geometry and formula substitution",
        how:"Substitute carefully and square the right quantity.",
        traps:["Using 3 for pi is accurate enough to choose between options.","BMI squares the height, not the weight."] },
      { n:"Units, scale and currency",
        how:"Sanity check direction: if converting to a weaker currency the number must get bigger.",
        traps:["Where every option has the same digits and different magnitudes, the question is purely about units."] }
    ],
    mental: [
      "Fractions worth knowing cold: 1/8 = 12.5%, 3/8 = 37.5%, 5/8 = 62.5%, 7/8 = 87.5%, 1/6 = 16.7%, 1/3 = 33.3%, 2/3 = 66.7%.",
      "To find 15%: take 10%, halve it, add the two.",
      "To divide by 2.5: double the numerator and divide by 5.",
      "To multiply by 1.18: multiply by 1, then add 18%.",
      "Squares to 20 and times tables to 15 should be automatic."
    ]
  },

  sjt: {
    name:"Situational Judgement", q:69, mins:26,
    pace:"23 seconds per question - by far the tightest in the exam. This section rewards instinct trained on the right principles, not deliberation.",
    checkpoint:"At 13 minutes you should be starting question 35.",
    approach: [
      "Judge each option on its own. They are not ranked against each other, and there is no quota - four options in a row can all be 'very inappropriate'.",
      "Partial marks are awarded for being one band out, so a considered near-miss still scores. Guessing wildly does not.",
      "Do not overthink. Your first reading is usually right, and there is no time for a second.",
      "You are answering as the person described, who is usually a medical student with limited authority, not as a consultant."
    ],
    principles: [
      { h:"Patient safety comes first, always.", p:"It outranks hierarchy, loyalty to colleagues, embarrassment and your own reputation. If an option leaves a patient at risk, it is inappropriate regardless of how polite or reasonable it sounds." },
      { h:"Never do nothing.", p:"Options that involve ignoring the problem, hoping it resolves, or deciding it is not your place are almost always 'very inappropriate'. This is the most reliable single rule in the section." },
      { h:"Never lie, hide or falsify.", p:"Concealment is rated below the original mistake. Amending records to cover an error, or denying knowledge you have, sits at the bottom of the scale." },
      { h:"Try direct first, then escalate.", p:"Speaking privately to the person involved is normally the ideal first step. The exception is immediate risk to patients, where escalating straight away is fully appropriate." },
      { h:"Work within your competence.", p:"As a student you do not communicate results, do not perform unsupervised procedures, and ask for help rather than guessing. Asking for supervision is a mark of good judgement." },
      { h:"Be honest with patients.", p:"When something goes wrong, patients are entitled to know. This is the duty of candour, and it extends to admitting your own errors promptly." },
      { h:"Protect confidentiality.", p:"No identifiable information on personal devices, no discussing patients where others can hear, no social media. But confidentiality never overrides an immediate safety risk." },
      { h:"Assume good faith and ask before judging.", p:"A colleague who has gone silent may be ill. A patient who stopped their medication probably has a reason. Options that find out are better than options that assume." },
      { h:"Do not gossip or humiliate.", p:"Raising a concern with people who cannot act on it, or correcting a colleague in front of a patient, is poor judgement even when the underlying concern is valid." },
      { h:"Never promise confidentiality in advance.", p:"If a patient asks you to keep something secret before telling you what it is, you cannot agree." }
    ],
    scale: [
      { l:"A very appropriate thing to do", d:"Addresses at least part of the situation directly and causes no harm." },
      { l:"Appropriate, but not ideal", d:"Could be done, achieves the right outcome, but is not the best available route - typically clumsy, premature, or missing a kinder step." },
      { l:"Inappropriate, but not awful", d:"Should not be done, but it is not disastrous - usually because the underlying instinct is right and the execution is poor." },
      { l:"A very inappropriate thing to do", d:"Makes the situation worse, or ignores it entirely. Anything dishonest, unsafe or evasive lands here." }
    ],
    importanceScale: [
      { l:"Very important", d:"Directly changes what you should do. Patient safety, competence, consent." },
      { l:"Important", d:"Should be weighed, but does not by itself determine the action." },
      { l:"Of minor importance", d:"Marginally relevant. Worth a thought, carries little weight." },
      { l:"Not important at all", d:"Irrelevant to the decision. Anything about your own popularity, convenience or reputation lives here." }
    ]
  }
};

/* 4-week plan template. Day 1 = 4 weeks before the exam. */
window.PLAN = [
  { w:1, title:"Week 1 - learn the machine",
    aim:"Know the format cold and learn what each question type is actually asking. Accuracy first, no timers yet.",
    days:[
      ["Read the Format page in this app. Do the official Tour Tutorial on ucat.ac.uk so the buttons, flag and calculator are familiar.","20 min"],
      ["Verbal Reasoning strategy, then 1 passage set untimed. Read every explanation, including for questions you got right.","40 min"],
      ["Decision Making strategy. Do the syllogism drill untimed. Get the reversal and contrapositive rules solid.","40 min"],
      ["Quantitative Reasoning strategy. Do the mental maths sprint twice. Learn the fraction and percentage conversions.","40 min"],
      ["Situational Judgement strategy. Read the ten principles, then do 2 scenarios untimed.","35 min"],
      ["Official Question Tutorials on ucat.ac.uk - all four subtests. This is UCAT's own strategy guidance; where it disagrees with this app, it wins.","60 min"],
      ["Rest, or a light review of anything that felt weak. Use a laptop for the official material, not a phone - UCAT build those questions for desktop.","0-20 min"]
    ] },
  { w:2, title:"Week 2 - build the pace",
    aim:"Introduce the clock. Expect accuracy to drop at first, that is normal and it recovers.",
    days:[
      ["Timed VR section in this app. Review every error.","35 min"],
      ["Timed DM section. Focus on always answering all five statements.","50 min"],
      ["Timed QR section, plus a mental maths sprint first as a warm-up.","40 min"],
      ["Timed SJT section. 23 seconds a question - practise not deliberating.","35 min"],
      ["Official question banks - there are 15 of them (VR x4, DM x4, QR x4, SJT x3). Start with your weakest subtest and press 'Explain Answer' on every question you get wrong.","60 min"],
      ["Official question banks, second weakest subtest. Keep a written list of which ones you have done - the site does not save your progress.","60 min"],
      ["Rest.","0 min"]
    ] },
  { w:3, title:"Week 3 - full mocks",
    aim:"Two full official practice tests under real conditions. The review matters more than the score.",
    days:[
      ["Official Practice Test 1, start to finish, no pauses, no phone.","2 hr"],
      ["Review Practice Test 1 properly. Write down every error and why it happened - misread, ran out of time, or genuinely did not know.","75 min"],
      ["Drill the weakest question type in this app until it stops being the weakest.","45 min"],
      ["Official Practice Test 2, full conditions.","2 hr"],
      ["Review Practice Test 2. Compare error patterns with Test 1.","75 min"],
      ["Timed sections in this app for the two weakest subtests.","60 min"],
      ["Rest.","0 min"]
    ] },
  { w:4, title:"Week 4 - sharpen, then taper",
    aim:"Two more official mocks early in the week, then wind down. Cramming in the last 48 hours makes scores worse.",
    days:[
      ["Official Practice Test 3, full conditions.","2 hr"],
      ["Review Test 3. Mental maths sprint.","70 min"],
      ["Official Practice Test 4, full conditions.","2 hr"],
      ["Review Test 4. Re-read the SJT principles.","60 min"],
      ["Light drilling only. Re-read strategy notes for the weakest section. Confirm test centre, route and ID.","40 min"],
      ["One short timed section to stay warm. Nothing else. Pack ID. Sleep early.","25 min"],
      ["Rest completely. No practice. Early night.","0 min"]
    ] }
];

window.TEST_DAY = [
  "Bring the ID you registered with. No ID, no test - Pearson VUE will not make exceptions.",
  "Arrive early. Aim to be at the centre 30 minutes before the appointment.",
  "You get a laminated A4 notebook and a pen. Ask for a fresh one if the pen is poor - check it before starting.",
  "You cannot bring your own calculator. The only one is the basic on-screen calculator, and it appears in Decision Making and Quantitative Reasoning only. Personal belongings are stored away and there is a security check before you sit down.",
  "Test centres are usually quiet but you will not be alone in the room. You may bring your own non-electronic ear defenders or earplugs, or ask the centre for earplugs.",
  "You can request a break by raising your hand, but unless you have approved rest breaks the test cannot be paused and you lose the time you are out of the room. If you do need one, take it between subtests rather than mid-section - that is where it costs least.",
  "Each subtest has its own instruction screen with its own timer. That is thinking time, not dead time: use it to steady your breathing.",
  "Timer goes yellow at 5 minutes remaining. That is the signal to triage, not to panic.",
  "If time expires and a pop-up appears, press OK immediately or it eats into the next section.",
  "No negative marking. In the last 20 seconds of every section, fill every blank.",
  "You get your score report before leaving the centre.",
  "If anything goes wrong during the test - technical fault, noise, feeling unwell - raise a hand at the time and report it. It cannot be dealt with afterwards."
];
