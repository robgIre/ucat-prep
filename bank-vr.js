/* Verbal Reasoning bank. 8 passages x 4 questions = 32 items.
   Original practice material written in UCAT style. Not official UCAT content. */

window.VR_PASSAGES = {
  p1: {
    title: "Antibiotic resistance",
    text: `Antibiotic resistance is often described as a modern crisis, yet the genes that confer it are ancient. Researchers sampling permafrost sediments dated to roughly 30,000 years ago have recovered DNA sequences encoding resistance to beta-lactam and glycopeptide antibiotics, laid down long before any clinical use of these drugs. Resistance, in other words, is a natural feature of microbial ecology: soil bacteria produce antibiotic compounds to compete with one another, and neighbouring organisms evolve defences against them.

What human medicine has changed is not the existence of resistance but its distribution. The mass production of antibiotics from the 1940s onward, and their widespread use in both clinical settings and livestock farming, created a selection pressure without precedent. Susceptible strains were removed; resistant ones flourished. A further complication is horizontal gene transfer, by which bacteria exchange genetic material directly rather than passing it only to their descendants. This allows a resistance gene that first arose in one species to appear rapidly in another, including in species that cause serious human disease.

Some commentators argue that the pipeline of new antibiotics has dried up because pharmaceutical companies see little profit in drugs that are used briefly and then held in reserve. Whether this is the dominant explanation is disputed. The scientific difficulty of finding novel compounds that are both effective against bacteria and non-toxic to human cells may matter at least as much.`
  },
  p2: {
    title: "Sleep and memory",
    text: `For much of the twentieth century sleep was treated as a passive state, a period in which the brain simply idled. That view has been comprehensively overturned. Sleep is now understood as an active process during which the brain performs work that cannot easily be done while awake.

Among the best supported of these functions is memory consolidation. During slow-wave sleep, patterns of neural firing recorded during the day are replayed, in compressed form, in the hippocampus, and the same patterns appear shortly afterwards in the neocortex. The prevailing interpretation is that experiences are gradually transferred from a fast-learning temporary store to a slower but more durable one. Experiments in which subjects learn a task and are then either allowed to sleep or kept awake for an equivalent period consistently show better retention in the sleeping group, and the effect is not explained by fatigue alone, since naps of ninety minutes produce measurable benefits.

A separate line of research concerns the glymphatic system, a network that clears metabolic waste from brain tissue. Clearance appears to increase substantially during sleep. This has prompted speculation about a link between chronic sleep deprivation and neurodegenerative disease, though the evidence in humans remains correlational and no causal mechanism has been established.`
  },
  p3: {
    title: "Peatlands",
    text: `Peatlands cover only about three per cent of the world's land surface but store roughly twice as much carbon as all the world's forests combined. Peat forms where waterlogged, acidic and oxygen-poor conditions slow the decay of dead plant material, so that organic matter accumulates faster than it breaks down. The process is slow: a metre of peat may represent a thousand years of accumulation.

In Ireland, peatlands once covered around a fifth of the country. Extensive drainage for fuel extraction and agriculture, carried out through the nineteenth and twentieth centuries, has reduced the area of intact raised bog dramatically. Drainage is the critical intervention. Once water is removed, oxygen reaches the peat, decomposition resumes, and the store begins to release carbon dioxide. A drained peatland is therefore not merely a diminished carbon sink; it is an active source.

Restoration efforts generally focus on blocking drainage ditches to raise the water table. Results have been encouraging in terms of hydrology and the return of characteristic vegetation such as Sphagnum mosses. Whether restored bogs recover their former rate of carbon accumulation within a useful timescale is less clear, and several long-term monitoring programmes are still running. Preservation of intact bog is, on any reading of the evidence, considerably more efficient than restoration of damaged bog.`
  },
  p4: {
    title: "The placebo effect",
    text: `The placebo effect is routinely misunderstood as evidence that a condition is imaginary. In fact it describes a measurable change in a patient's state following an intervention that has no specific therapeutic action. The change is real; what is absent is a direct pharmacological cause.

Several mechanisms have been proposed. Expectation appears to matter: patients told that an inert cream is an analgesic report less pain than those told nothing, and brain imaging shows corresponding activity in regions associated with pain modulation. Conditioning also plays a part, as patients who have previously responded to an active drug may respond to an identical-looking placebo. Ritual matters too. Injections generally produce larger placebo responses than tablets, and larger tablets larger responses than small ones.

The effect is not uniform across conditions. It is substantial in pain, nausea, depression and irritable bowel syndrome, and negligible where an objective physiological measure is the outcome, such as tumour size or blood glucose. This distinction is important, because it constrains what placebo can be said to do. There is also a corresponding negative phenomenon, the nocebo effect, in which the expectation of harm produces adverse symptoms. Trials that list side effects in detail during consent tend to record more of those side effects in the placebo arm.`
  },
  p5: {
    title: "The printing press",
    text: `The conventional account holds that Gutenberg's press, developed in Mainz around 1450, caused the intellectual transformation of early modern Europe. The claim requires qualification. Movable type had existed in Korea and China for centuries, and Korean metal type predates Gutenberg by roughly two hundred years. What Gutenberg assembled was a system: a durable metal alloy suitable for casting reusable type, an oil-based ink that adhered to metal rather than running off it, and an adapted screw press. The alphabetic writing systems of Europe, with their small character sets, made the economics of the system far more favourable than they had been for logographic scripts.

The consequences were not immediate. For the first fifty years printers largely reproduced texts that were already circulating in manuscript, and the earliest printed books were designed to resemble manuscripts closely. The distinctive effects appeared later: standardised editions that allowed scholars in different cities to cite the same page, the rapid diffusion of polemical pamphlets, and a collapse in the cost of a book.

Historians continue to disagree about the weight the press should carry in explanations of the Reformation. That Luther's tracts were printed in enormous numbers is not in dispute. Whether the press was a cause of religious upheaval or an accelerant of forces already present is a question of emphasis on which the evidence does not compel a single answer.`
  },
  p6: {
    title: "Urban green space",
    text: `Interest in the health effects of urban green space has grown rapidly, and the literature now includes cohort studies covering several million people. Associations are consistently reported between residential proximity to green space and lower all-cause mortality, reduced cardiovascular disease and better self-reported mental health. The size of the association is modest but persists after adjustment for income, education and smoking.

Establishing causation is harder. People who can choose where to live may select greener neighbourhoods for reasons that also predict good health, and greener areas in many cities are also quieter and less polluted. Studies that exploit natural experiments, such as the construction of a new park, offer better evidence, and the small number conducted so far have generally found improvements in the surrounding population, though sample sizes have been limited.

Mechanisms proposed include increased physical activity, reduced exposure to air pollution and noise, greater opportunity for social contact, and direct psychological restoration through attention recovery. These are not mutually exclusive, and the relative contribution of each is unresolved. One practical finding does appear robust across settings: the benefit is greatest for lower-income groups, who typically have the least access. This has led several public health bodies to argue that green space provision should be assessed on equity grounds rather than average effect alone.`
  },
  p7: {
    title: "Vitamin D",
    text: `Vitamin D occupies an unusual position among nutrients because most of a person's supply is not obtained from food. It is synthesised in the skin on exposure to ultraviolet B radiation, and dietary sources such as oily fish and fortified products contribute comparatively little in most populations. At latitudes above roughly fifty degrees, the intensity of winter UVB is insufficient for synthesis, and serum concentrations decline through the winter months regardless of time spent outdoors.

Severe deficiency causes rickets in children and osteomalacia in adults, and these effects are not in question. Controversy surrounds the much larger set of claims made for lower degrees of insufficiency. Observational studies have linked low vitamin D status to cancer, cardiovascular disease, multiple sclerosis, respiratory infection and all-cause mortality. Randomised trials of supplementation have, with few exceptions, failed to reproduce these benefits.

One explanation is reverse causation. Illness reduces time spent outdoors and increases inflammation, which lowers measured vitamin D; the low reading is then a marker of poor health rather than its cause. A second is that trials have often recruited participants who were already replete, in whom no benefit would be expected. Supplementation trials restricted to genuinely deficient participants have produced somewhat more encouraging results for respiratory infection, though the effect size is small.`
  },
  p8: {
    title: "Ocean plastic",
    text: `Public attention to ocean plastic has concentrated on the visible: bottles, bags and the drifting accumulations described, misleadingly, as garbage patches. These are not floating islands but diffuse regions in which particle concentrations are elevated, often to a degree invisible from a ship's deck.

The accounting does not balance. Estimates of plastic entering the ocean each year run to several million tonnes, yet surveys of surface water recover only a small fraction of the expected mass. The discrepancy, sometimes called the missing plastic problem, has several candidate explanations. Fragmentation reduces items to particles below the mesh size of standard sampling nets. Biofouling by algae and other organisms increases density until the particle sinks. Ingestion by marine organisms transports plastic downward. Sediment cores taken from the deep sea floor show rising plastic concentrations that broadly track production, which supports the view that the deep ocean is the principal sink.

Policy responses have focused on consumption, and bans on particular single-use items have reduced their occurrence in coastal surveys. Whether such measures materially reduce total mass entering the ocean is doubtful, since a large share originates from a small number of river catchments and from fishing gear, neither of which is addressed by consumer bans in high-income countries.`
  }
};

window.BANK_VR = [
  // ---- p1 ----
  { id:"vr1a", p:"p1", kind:"tfct",
    stem:"Genes conferring resistance to antibiotics existed before humans began manufacturing those antibiotics.",
    ev:["Researchers sampling permafrost sediments dated to roughly 30,000 years ago have recovered DNA sequences encoding resistance to beta-lactam and glycopeptide antibiotics, laid down long before any clinical use of these drugs."],
    why:"True. The passage states that DNA from permafrost dated to roughly 30,000 years ago encoded resistance to beta-lactam and glycopeptide antibiotics, 'long before any clinical use of these drugs'.", ans:0 },
  { id:"vr1b", p:"p1", kind:"tfct",
    stem:"Horizontal gene transfer occurs only between bacteria of the same species.",
    ev:["This allows a resistance gene that first arose in one species to appear rapidly in another, including in species that cause serious human disease."],
    why:"False. The passage says horizontal gene transfer 'allows a resistance gene that first arose in one species to appear rapidly in another'. The word 'only' is directly contradicted.", ans:1 },
  { id:"vr1c", p:"p1", kind:"tfct",
    stem:"The main reason no new antibiotics are being developed is that they are not profitable.",
    ev:["Some commentators argue that the pipeline of new antibiotics has dried up because pharmaceutical companies see little profit in drugs that are used briefly and then held in reserve. Whether this is the dominant explanation is disputed."],
    why:"Can't Tell. The passage reports that 'some commentators argue' this, then explicitly says whether it is the dominant explanation 'is disputed'. The passage declines to settle it, so neither True nor False is supported. Watch for 'the main reason' - a ranking claim needs explicit ranking in the text.", ans:2 },
  { id:"vr1d", p:"p1", kind:"mcq",
    stem:"Which of the following best describes the author's attitude to calling antibiotic resistance a 'modern crisis'?",
    opts:["The phrase misstates the origin of resistance, though the scale of the current problem is not denied","The phrase is accurate in every respect","The phrase is alarmist and the problem has been exaggerated","The phrase is correct because resistance genes only appeared after 1940"],
    ev:["Antibiotic resistance is often described as a modern crisis, yet the genes that confer it are ancient."],
    why:"A. The opening sentence sets up a contrast ('often described as... yet') and the passage then explains that resistance is ancient and natural. But the author also describes 'a selection pressure without precedent' and 'species that cause serious human disease', so the problem itself is not being minimised. C overstates; B and D contradict the text.", ans:0 },

  // ---- p2 ----
  { id:"vr2a", p:"p2", kind:"tfct",
    stem:"Naps shorter than ninety minutes produce no measurable memory benefit.",
    ev:["since naps of ninety minutes produce measurable benefits"],
    why:"Can't Tell. The passage says ninety-minute naps produce measurable benefits. It says nothing at all about shorter naps. A statement about something the passage never mentions is Can't Tell.", ans:2 },
  { id:"vr2b", p:"p2", kind:"tfct",
    stem:"The better retention seen in subjects who slept is fully explained by their being less tired.",
    ev:["the effect is not explained by fatigue alone"],
    why:"False. The passage states 'the effect is not explained by fatigue alone'.", ans:1 },
  { id:"vr2c", p:"p2", kind:"tfct",
    stem:"Chronic sleep deprivation has been shown to cause neurodegenerative disease in humans.",
    ev:["though the evidence in humans remains correlational and no causal mechanism has been established"],
    why:"False. The passage says this link is 'speculation' and that the human evidence 'remains correlational and no causal mechanism has been established'. 'Has been shown to cause' is contradicted.", ans:1 },
  { id:"vr2d", p:"p2", kind:"mcq",
    stem:"The claim that memories move from a temporary store to a durable one is described in the passage as:",
    opts:["A proven fact established by direct observation","A hypothesis that has been refuted by imaging studies","An interpretation of the observed sequence of replayed firing patterns","An idea held only in the twentieth century"],
    ev:["The prevailing interpretation is that experiences are gradually transferred from a fast-learning temporary store to a slower but more durable one."],
    why:"C. The passage reports that patterns appear in the hippocampus and then 'shortly afterwards' in the neocortex, and calls the transfer account 'the prevailing interpretation'. That is an inference from timing, not a direct observation of transfer.", ans:2 },

  // ---- p3 ----
  { id:"vr3a", p:"p3", kind:"tfct",
    stem:"Peatlands store more carbon than the world's forests.",
    ev:["store roughly twice as much carbon as all the world's forests combined"],
    why:"True. The passage states peatlands store 'roughly twice as much carbon as all the world's forests combined'.", ans:0 },
  { id:"vr3b", p:"p3", kind:"tfct",
    stem:"A drained peatland releases carbon dioxide.",
    ev:["Once water is removed, oxygen reaches the peat, decomposition resumes, and the store begins to release carbon dioxide."],
    why:"True. 'Once water is removed, oxygen reaches the peat, decomposition resumes, and the store begins to release carbon dioxide.'", ans:0 },
  { id:"vr3c", p:"p3", kind:"tfct",
    stem:"Restored bogs return to their original rate of carbon accumulation within twenty years.",
    ev:["Whether restored bogs recover their former rate of carbon accumulation within a useful timescale is less clear, and several long-term monitoring programmes are still running."],
    why:"Can't Tell. The passage says whether they recover their former rate 'within a useful timescale is less clear' and monitoring is ongoing. No figure is given, so the specific claim of twenty years is unsupported either way.", ans:2 },
  { id:"vr3d", p:"p3", kind:"mcq",
    stem:"Which conclusion is best supported by the passage?",
    opts:["Restoration of damaged bog should be abandoned in favour of other measures","Peat extraction in Ireland has now ceased entirely","Sphagnum moss is the main carbon store in a peatland","Protecting bog that is still intact is a better use of resources than repairing bog that is already damaged"],
    ev:["Preservation of intact bog is, on any reading of the evidence, considerably more efficient than restoration of damaged bog."],
    why:"D. The final sentence states preservation of intact bog is 'considerably more efficient than restoration of damaged bog'. A goes too far - the passage calls restoration results 'encouraging'. B and C are not stated.", ans:3 },

  // ---- p4 ----
  { id:"vr4a", p:"p4", kind:"tfct",
    stem:"The placebo effect shows that a patient's symptoms were imaginary.",
    ev:["The change is real; what is absent is a direct pharmacological cause."],
    why:"False. The first paragraph says this is a misunderstanding and that the change is 'real'; what is absent is a direct pharmacological cause.", ans:1 },
  { id:"vr4b", p:"p4", kind:"tfct",
    stem:"Placebo injections tend to produce a larger response than placebo tablets.",
    ev:["Injections generally produce larger placebo responses than tablets"],
    why:"True. 'Injections generally produce larger placebo responses than tablets.'", ans:0 },
  { id:"vr4c", p:"p4", kind:"tfct",
    stem:"Placebo treatment can reduce the size of a tumour.",
    ev:["negligible where an objective physiological measure is the outcome, such as tumour size or blood glucose"],
    why:"False. The passage states the effect is 'negligible where an objective physiological measure is the outcome, such as tumour size'.", ans:1 },
  { id:"vr4d", p:"p4", kind:"mcq",
    stem:"A trial reports unusually high rates of headache and nausea in its placebo group. Which part of the passage best accounts for this?",
    opts:["Conditioning from previous exposure to an active drug","The nocebo effect, amplified by detailed listing of side effects during consent","The ritual value of injections over tablets","The absence of an objective physiological outcome measure"],
    ev:["Trials that list side effects in detail during consent tend to record more of those side effects in the placebo arm."],
    why:"B. The passage explicitly says trials that list side effects in detail during consent 'tend to record more of those side effects in the placebo arm'. That is the nocebo effect.", ans:1 },

  // ---- p5 ----
  { id:"vr5a", p:"p5", kind:"tfct",
    stem:"Gutenberg invented movable type.",
    ev:["Movable type had existed in Korea and China for centuries, and Korean metal type predates Gutenberg by roughly two hundred years."],
    why:"False. The passage says movable type existed in Korea and China for centuries and that Korean metal type predates Gutenberg by around two hundred years. What Gutenberg assembled was a system.", ans:1 },
  { id:"vr5b", p:"p5", kind:"tfct",
    stem:"The small character sets of European alphabets improved the economics of printing compared with logographic scripts.",
    ev:["The alphabetic writing systems of Europe, with their small character sets, made the economics of the system far more favourable than they had been for logographic scripts."],
    why:"True. 'The alphabetic writing systems of Europe, with their small character sets, made the economics of the system far more favourable than they had been for logographic scripts.'", ans:0 },
  { id:"vr5c", p:"p5", kind:"tfct",
    stem:"Printing was the cause of the Reformation.",
    ev:["Whether the press was a cause of religious upheaval or an accelerant of forces already present is a question of emphasis on which the evidence does not compel a single answer."],
    why:"Can't Tell. The passage says historians disagree and that whether the press was a cause or an accelerant 'is a question of emphasis on which the evidence does not compel a single answer'. The author refuses to decide.", ans:2 },
  { id:"vr5d", p:"p5", kind:"mcq",
    stem:"According to the passage, why were the effects of the press slow to appear?",
    opts:["Early printers mostly reproduced texts already circulating in manuscript, in a form designed to look like manuscript","The presses were unreliable and frequently broke down","Literacy rates were too low for printed books to sell","The Church restricted what could be printed"],
    ev:["For the first fifty years printers largely reproduced texts that were already circulating in manuscript, and the earliest printed books were designed to resemble manuscripts closely."],
    why:"A. Directly stated: for the first fifty years printers 'largely reproduced texts that were already circulating in manuscript, and the earliest printed books were designed to resemble manuscripts closely'. B, C and D are plausible historically but are never mentioned - do not import outside knowledge.", ans:0 },

  // ---- p6 ----
  { id:"vr6a", p:"p6", kind:"tfct",
    stem:"The association between green space and better health disappears once income and education are taken into account.",
    ev:["The size of the association is modest but persists after adjustment for income, education and smoking."],
    why:"False. The passage says the association 'persists after adjustment for income, education and smoking'.", ans:1 },
  { id:"vr6b", p:"p6", kind:"tfct",
    stem:"Natural experiments provide stronger evidence of causation than cohort studies, but few have been carried out.",
    ev:["Studies that exploit natural experiments, such as the construction of a new park, offer better evidence, and the small number conducted so far have generally found improvements in the surrounding population, though sample sizes have been limited."],
    why:"True. The passage says studies exploiting natural experiments 'offer better evidence' and that only 'a small number' have been conducted so far.", ans:0 },
  { id:"vr6c", p:"p6", kind:"tfct",
    stem:"Attention restoration is the principal mechanism by which green space improves health.",
    ev:["These are not mutually exclusive, and the relative contribution of each is unresolved."],
    why:"Can't Tell. It is listed as one of four proposed mechanisms, and the passage states 'the relative contribution of each is unresolved'. Nothing identifies it as principal.", ans:2 },
  { id:"vr6d", p:"p6", kind:"mcq",
    stem:"Which finding does the passage present as most robust across different settings?",
    opts:["The overall size of the health benefit","That green space reduces air pollution","That the benefit is largest for lower-income groups","That new parks improve the health of nearby residents"],
    ev:["One practical finding does appear robust across settings: the benefit is greatest for lower-income groups, who typically have the least access."],
    why:"C. The passage says 'One practical finding does appear robust across settings: the benefit is greatest for lower-income groups'. D is described as coming from a small number of studies with limited sample sizes.", ans:2 },

  // ---- p7 ----
  { id:"vr7a", p:"p7", kind:"tfct",
    stem:"Most vitamin D in a typical population comes from diet.",
    ev:["It is synthesised in the skin on exposure to ultraviolet B radiation, and dietary sources such as oily fish and fortified products contribute comparatively little in most populations."],
    why:"False. The passage says most supply is 'not obtained from food' and that dietary sources 'contribute comparatively little in most populations'.", ans:1 },
  { id:"vr7b", p:"p7", kind:"tfct",
    stem:"Spending more time outdoors in winter at high latitudes will prevent the seasonal fall in vitamin D.",
    ev:["At latitudes above roughly fifty degrees, the intensity of winter UVB is insufficient for synthesis, and serum concentrations decline through the winter months regardless of time spent outdoors."],
    why:"False. The passage says at latitudes above roughly fifty degrees winter UVB is insufficient and levels decline 'regardless of time spent outdoors'.", ans:1 },
  { id:"vr7c", p:"p7", kind:"tfct",
    stem:"Randomised trials of vitamin D supplementation have generally failed to reproduce the benefits suggested by observational studies.",
    ev:["Randomised trials of supplementation have, with few exceptions, failed to reproduce these benefits."],
    why:"True. 'Randomised trials of supplementation have, with few exceptions, failed to reproduce these benefits.' Check the direction of the claim before answering - flip this statement round, to trials confirming the benefits, and the answer becomes False.", ans:0 },
  { id:"vr7d", p:"p7", kind:"mcq",
    stem:"The passage suggests that a low vitamin D reading in an unwell patient may be:",
    opts:["The cause of their illness","Evidence that supplementation will improve their outcome","An error in laboratory measurement","A consequence of their illness rather than its cause"],
    ev:["Illness reduces time spent outdoors and increases inflammation, which lowers measured vitamin D; the low reading is then a marker of poor health rather than its cause."],
    why:"D. This is the reverse causation explanation: illness reduces time outdoors and raises inflammation, which lowers measured vitamin D, 'the low reading is then a marker of poor health rather than its cause'.", ans:3 },

  // ---- p8 ----
  { id:"vr8a", p:"p8", kind:"tfct",
    stem:"Garbage patches are solid floating masses of rubbish.",
    ev:["These are not floating islands but diffuse regions in which particle concentrations are elevated, often to a degree invisible from a ship's deck."],
    why:"False. The passage calls the term misleading and says they are 'not floating islands but diffuse regions in which particle concentrations are elevated'.", ans:1 },
  { id:"vr8b", p:"p8", kind:"tfct",
    stem:"Surface surveys recover less plastic than the estimated amount entering the ocean.",
    ev:["yet surveys of surface water recover only a small fraction of the expected mass"],
    why:"True. 'Surveys of surface water recover only a small fraction of the expected mass.'", ans:0 },
  { id:"vr8c", p:"p8", kind:"tfct",
    stem:"Bans on particular single-use items have reduced how often those items appear in coastal surveys.",
    ev:["bans on particular single-use items have reduced their occurrence in coastal surveys"],
    why:"True. Directly stated. Note that the passage is sceptical about a different, broader claim - whether such bans reduce the total mass of plastic entering the ocean. Scepticism about the broad claim is not a reason to reject the narrow one.", ans:0 },
  { id:"vr8d", p:"p8", kind:"mcq",
    stem:"Which evidence does the passage cite in support of the deep ocean being the main destination of missing plastic?",
    opts:["Surface net surveys using a finer mesh","Rising plastic concentrations in deep sea sediment cores that track production","Direct observation of sinking particles by submersible","Measurements of plastic in the stomachs of marine organisms"],
    ev:["Sediment cores taken from the deep sea floor show rising plastic concentrations that broadly track production, which supports the view that the deep ocean is the principal sink."],
    why:"B. 'Sediment cores taken from the deep sea floor show rising plastic concentrations that broadly track production, which supports the view that the deep ocean is the principal sink.' Ingestion is mentioned as a transport route, not as the supporting evidence.", ans:1 }
];
