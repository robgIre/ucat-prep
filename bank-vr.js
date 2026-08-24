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
  },
  p9: {
    title: "Mitochondria",
    text: `The mitochondria present in almost all eukaryotic cells were once free-living bacteria. The evidence is now considered decisive: mitochondria carry their own circular genome, distinct from that of the nucleus, they divide independently of the cell cycle, and their ribosomes resemble bacterial ribosomes more closely than those of the cell they inhabit. Antibiotics that act on bacterial ribosomes can interfere with mitochondrial protein synthesis, which accounts for some drug side effects that appear unconnected to infection.

The engulfment is thought to have happened once, in a single ancestral lineage, rather than repeatedly. Over the two billion years since, the great majority of the original bacterial genes were either lost or relocated to the host nucleus. Human mitochondria retain only thirty-seven genes, a small fraction of what any free-living bacterium requires.

Why any genes remain in the mitochondrion at all is disputed. One proposal is that the proteins they encode are so hydrophobic that importing them across the mitochondrial membrane would be impractical. Another holds that local genetic control permits rapid adjustment of energy output to local conditions in a way that centralised control from the nucleus could not. The two accounts are not incompatible, and the balance between them is unresolved.`
  },
  p10: {
    title: "Shift work and the body clock",
    text: `Human physiology is organised around a roughly twenty-four hour cycle governed by a small cluster of cells in the hypothalamus. This master clock is entrained principally by light reaching the retina, and it in turn coordinates peripheral clocks in the liver, gut and other tissues. Core body temperature, cortisol secretion and alertness all follow predictable daily curves.

Night shift work places these systems in conflict. The worker is awake and eating when the internal clock is signalling rest, and the peripheral clocks, which respond partly to meal timing, drift out of alignment with the master clock. Epidemiological studies report associations between long-term shift work and cardiovascular disease, metabolic syndrome and certain cancers. In 2007 an international body classified shift work involving circadian disruption as a probable human carcinogen, a classification that was reviewed and retained in later assessments.

Interpreting these findings is not straightforward. Shift workers differ from day workers in income, diet, smoking rates and access to healthcare, and studies vary widely in how they define shift work. Interventions have been tried, including timed light exposure and restricting eating to daytime hours, and small trials suggest they can shift the clock measurably. Whether they reduce disease over a working lifetime has not been established.`
  },
  p11: {
    title: "Concrete",
    text: `Concrete is the most widely used manufactured material on earth, and its production accounts for a substantial share of global carbon dioxide emissions. The figure usually quoted lies between seven and eight per cent. Most of this arises not from the energy used to heat the kiln but from the chemistry of the process itself: converting limestone to lime releases carbon dioxide that was locked in the rock, and no improvement in fuel efficiency can avoid it.

Several routes to reduction are under investigation. Substituting a portion of the cement with fly ash or ground blast furnace slag is established practice and cuts emissions per tonne, but both materials are by-products of coal power and steel making, industries that are themselves contracting. Novel binders based on magnesium or on alkali activation avoid the limestone chemistry altogether, though none has yet been produced at anything approaching the scale required.

There is also a partial offset that is frequently overlooked. Cured concrete slowly reabsorbs carbon dioxide from the air, a process known as carbonation. Estimates suggest this recovers a meaningful fraction of the process emissions over the life of a structure, though the proportion depends heavily on surface area, exposure and eventual demolition method, and published figures vary considerably.`
  },
  p12: {
    title: "Bird navigation",
    text: `Migratory birds cross thousands of kilometres and arrive at destinations they may never have visited. How they do so has been studied for over a century and is still not fully explained. Several mechanisms are known to operate together rather than in isolation.

The best established is a sun compass, corrected for the time of day by the bird's internal clock. Birds held under artificially shifted light cycles orient in a predictably wrong direction, which is strong evidence that the clock and the compass are coupled. A star compass has also been demonstrated: hand-reared birds shown a rotating artificial sky learn to orient relative to its axis of rotation rather than to any particular constellation.

Magnetic sensing is more contested. Birds clearly respond to magnetic fields, but the receptor has not been identified with certainty. One hypothesis places it in the eye, in a light-sensitive protein whose chemistry is altered by magnetic fields; another proposes magnetite particles in the upper beak. Evidence exists for both, and they are not mutually exclusive. What is reasonably clear is that experienced adults can correct for displacement in a way that first-year birds cannot, which implies a learned map rather than an inherited compass heading alone.`
  },
  p13: {
    title: "The Antikythera mechanism",
    text: `Recovered from a Roman-era shipwreck in 1901, the Antikythera mechanism was for decades an object of speculation rather than analysis. Corroded into a few lumps of bronze, it yielded little to visual inspection. X-ray tomography carried out from the 1970s onwards, and at much higher resolution after 2005, revealed at least thirty interlocking gears and inscriptions running to thousands of characters.

The device modelled astronomical cycles. It tracked the positions of the sun and moon, reproduced the irregular apparent motion of the moon using a pin-and-slot arrangement that mimics an elliptical orbit, and predicted eclipses using a cycle known to Babylonian astronomers. Dials on the back recorded a four-year cycle of games. Whether it also displayed the five planets known in antiquity is likely on the basis of the inscriptions but has not been demonstrated from surviving gearing.

The mechanism's significance lies partly in what it implies about lost technology. Nothing of comparable complexity survives from the following thousand years. Whether that reflects a genuine collapse in capability or simply the poor survival of bronze objects, which were routinely melted down, is a question on which the evidence is thin and specialists disagree.`
  },
  p14: {
    title: "Statins",
    text: `Statins reduce the concentration of low-density lipoprotein cholesterol in the blood by inhibiting an enzyme in its synthesis pathway. That they lower LDL is not in dispute, and large randomised trials show that in people who have already had a heart attack or stroke, statin treatment reduces the likelihood of a further event. The evidence in this group is regarded as among the strongest in clinical medicine.

Controversy attaches to their use in primary prevention, that is, in people with no established cardiovascular disease. Here the absolute benefit is smaller because the baseline risk is lower, and it must be weighed against the inconvenience and cost of lifelong medication. Muscle pain is the side effect most commonly reported by patients. Blinded trials, in which neither patient nor doctor knows who is receiving the drug, find rates of muscle symptoms close to those in the placebo group, a discrepancy usually attributed to the nocebo effect and to expectations shaped by media coverage.

Critics respond that trial populations are healthier than the general population and that follow-up is too short to capture rare harms. Defenders point to the consistency of benefit across dozens of trials and hundreds of thousands of participants. The disagreement is less about whether statins work than about where the threshold for treating an otherwise healthy person should be drawn.`
  },
  p15: {
    title: "Language endangerment",
    text: `Of the roughly seven thousand languages spoken today, linguists estimate that between a third and a half are unlikely to survive the century. The distribution is very uneven: a small number of languages account for most speakers, while the median language has fewer than ten thousand.

Languages are rarely lost because speakers are forbidden to use them, though that has happened. The more common pattern is a shift over three generations. Grandparents speak the local language, parents are bilingual, and children acquire only the dominant language, usually because it carries economic and educational advantage. The process is driven by rational individual choices whose collective consequence nobody intended.

Revitalisation has succeeded in some cases and failed in many others. Hebrew is the example most often cited, though its circumstances were unusual, involving a state, an ideology and a population with no shared alternative. Welsh and Maori have seen measurable increases in the number of young speakers following sustained investment in education and broadcasting. What distinguishes the successes appears to be transmission within the home rather than instruction in school alone, a finding that is uncomfortable for policy because homes are much harder to influence than curricula.`
  },
  p16: {
    title: "Urban heat",
    text: `Cities are consistently warmer than the countryside around them, an effect that can reach several degrees on a still, clear night. The causes are well understood. Dark surfaces such as asphalt absorb more solar radiation than vegetation; the geometry of streets traps radiation that would otherwise escape to the sky; buildings and vehicles release waste heat directly; and the removal of vegetation eliminates the cooling that evaporation from leaves would provide.

The effect is strongest at night rather than during the day, because the difference lies chiefly in the rate at which stored heat is released. This matters for health. Sustained high night-time temperatures prevent the physiological recovery that follows daytime heat stress, and excess mortality during heatwaves correlates more closely with night-time minimums than with daytime maximums.

Mitigation measures are well rehearsed: reflective roofing, street trees, and permeable surfaces that allow evaporation. Their effectiveness varies with climate. Reflective roofs perform best in hot dry conditions and can be counterproductive in cities with cold winters, where the same property increases heating demand. Street trees cool reliably but require water, which is scarce in precisely the places where cooling is most needed. No single measure is adequate on its own.`
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
    why:"B. 'Sediment cores taken from the deep sea floor show rising plastic concentrations that broadly track production, which supports the view that the deep ocean is the principal sink.' Ingestion is mentioned as a transport route, not as the supporting evidence.", ans:1 },

  { id:"vr9a", p:"p9", kind:"tfct",
    stem:"Mitochondria carry a genome that is separate from the one in the cell nucleus.",
    ev:["mitochondria carry their own circular genome, distinct from that of the nucleus"],
    why:"True. Directly stated in the first paragraph as part of the evidence for the bacterial origin.", ans:0 },

  { id:"vr9b", p:"p9", kind:"tfct",
    stem:"The engulfment that produced mitochondria happened on many separate occasions.",
    ev:["The engulfment is thought to have happened once, in a single ancestral lineage, rather than repeatedly."],
    why:"False. The passage says the opposite: it is thought to have happened once, in a single ancestral lineage.", ans:1 },

  { id:"vr9c", p:"p9", kind:"tfct",
    stem:"Human mitochondria contain fewer genes than the mitochondria of other animals.",
    ev:["Human mitochondria retain only thirty-seven genes, a small fraction of what any free-living bacterium requires."],
    why:"Can't Tell. The passage gives the human figure of thirty-seven and compares it to a free-living bacterium, never to another animal. No cross-species comparison is made.", ans:2 },

  { id:"vr9d", p:"p9", kind:"mcq",
    stem:"Why, according to the passage, can some antibiotics cause side effects that seem unrelated to infection?",
    opts:["Mitochondrial ribosomes resemble bacterial ribosomes, so drugs targeting bacteria also disrupt them","Mitochondria divide independently of the cell cycle","Most mitochondrial genes were transferred to the nucleus","Mitochondrial proteins are unusually hydrophobic"],
    ev:["Antibiotics that act on bacterial ribosomes can interfere with mitochondrial protein synthesis, which accounts for some drug side effects that appear unconnected to infection."],
    why:"A. The passage links the two directly: mitochondrial ribosomes resemble bacterial ones, so a drug aimed at bacterial ribosomes can disrupt the patient's own mitochondria. B, C and D are all mentioned in the passage but none is offered as the explanation for side effects.", ans:0 },

  { id:"vr10a", p:"p10", kind:"tfct",
    stem:"Peripheral clocks in tissues such as the liver respond partly to when a person eats.",
    ev:["the peripheral clocks, which respond partly to meal timing, drift out of alignment with the master clock"],
    why:"True. Stated directly when explaining why night work pulls the peripheral clocks out of alignment.", ans:0 },

  { id:"vr10b", p:"p10", kind:"tfct",
    stem:"Shift work has been classified as a definite human carcinogen.",
    ev:["an international body classified shift work involving circadian disruption as a probable human carcinogen"],
    why:"False. The passage says 'probable', not definite. Watch the strength of the wording in classification claims.", ans:1 },

  { id:"vr10c", p:"p10", kind:"tfct",
    stem:"Timed light exposure reduces the rate of cardiovascular disease among shift workers.",
    ev:["Whether they reduce disease over a working lifetime has not been established."],
    why:"Can't Tell. Small trials show these interventions can shift the clock, but the passage explicitly says whether they reduce disease over a working lifetime has not been established.", ans:2 },

  { id:"vr10d", p:"p10", kind:"mcq",
    stem:"Which of the following most weakens the claim that shift work itself causes cardiovascular disease?",
    opts:["The master clock is entrained by light reaching the retina","Shift workers differ from day workers in income, diet and smoking rates","The carcinogen classification was retained in later assessments","Peripheral clocks respond to meal timing as well as to light"],
    ev:["Shift workers differ from day workers in income, diet, smoking rates and access to healthcare, and studies vary widely in how they define shift work."],
    why:"B. The passage names income, diet, smoking and healthcare access as ways shift workers differ from day workers, which is the definition of confounding. A and C are true of the passage but do not bear on causation, and D describes the mechanism rather than challenging it.", ans:1 },

  { id:"vr11a", p:"p11", kind:"tfct",
    stem:"Most of the carbon dioxide from cement production comes from the chemical reaction rather than from fuel.",
    ev:["Most of this arises not from the energy used to heat the kiln but from the chemistry of the process itself"],
    why:"True. The passage says most arises 'not from the energy used to heat the kiln but from the chemistry of the process itself'.", ans:0 },

  { id:"vr11b", p:"p11", kind:"tfct",
    stem:"Improving kiln fuel efficiency would eliminate the emissions from cement production.",
    ev:["no improvement in fuel efficiency can avoid it"],
    why:"False. The passage states that no improvement in fuel efficiency can avoid the carbon dioxide released by converting limestone to lime.", ans:1 },

  { id:"vr11c", p:"p11", kind:"tfct",
    stem:"Carbonation reabsorbs more than half of the carbon dioxide released during cement production.",
    ev:["Estimates suggest this recovers a meaningful fraction of the process emissions over the life of a structure, though the proportion depends heavily on surface area, exposure and eventual demolition method, and published figures vary considerably."],
    why:"Can't Tell. The passage says a 'meaningful fraction' is recovered and that published figures vary considerably. No specific proportion is given, so 'more than half' is unsupported either way.", ans:2 },

  { id:"vr11d", p:"p11", kind:"mcq",
    stem:"What problem does the passage identify with using fly ash and blast furnace slag as cement substitutes?",
    opts:["The technique is unproven and has not been used commercially","They increase the total emissions per tonne of concrete","They are by-products of industries that are themselves shrinking","They prevent the concrete from reabsorbing carbon dioxide later"],
    ev:["both materials are by-products of coal power and steel making, industries that are themselves contracting"],
    why:"C. The passage notes both are by-products of coal power and steel making, 'industries that are themselves contracting', so the supply is tied to declining sources. A is wrong because the practice is described as established. B and D are never claimed.", ans:2 },

  { id:"vr12a", p:"p12", kind:"tfct",
    stem:"Birds kept under artificially shifted light cycles orient in the wrong direction.",
    ev:["Birds held under artificially shifted light cycles orient in a predictably wrong direction"],
    why:"True. This is given as evidence that the internal clock and the sun compass are coupled.", ans:0 },

  { id:"vr12b", p:"p12", kind:"tfct",
    stem:"Birds using a star compass orient themselves by particular constellations.",
    ev:["learn to orient relative to its axis of rotation rather than to any particular constellation"],
    why:"False. Hand-reared birds learn to orient to the axis of rotation of the sky, 'rather than to any particular constellation'.", ans:1 },

  { id:"vr12c", p:"p12", kind:"tfct",
    stem:"The magnetic receptor in birds is located in the eye.",
    ev:["the receptor has not been identified with certainty"],
    why:"Can't Tell. The passage offers this as one hypothesis alongside magnetite in the beak, says evidence exists for both, and states the receptor has not been identified with certainty.", ans:2 },

  { id:"vr12d", p:"p12", kind:"mcq",
    stem:"What does the difference between adult and first-year birds suggest, according to the passage?",
    opts:["That the sun compass develops before the star compass","That magnetic sensing is inherited rather than learned","That first-year birds rely more heavily on the star compass","That navigation involves a learned map, not only an inherited compass heading"],
    ev:["experienced adults can correct for displacement in a way that first-year birds cannot, which implies a learned map rather than an inherited compass heading alone"],
    why:"D. Experienced adults can correct for displacement while first-year birds cannot, which the passage says implies a learned map rather than an inherited heading alone. The other options describe mechanisms the passage discusses but does not connect to this particular difference.", ans:3 },

  { id:"vr13a", p:"p13", kind:"tfct",
    stem:"The mechanism's inscriptions were revealed by imaging rather than by visual inspection.",
    ev:["X-ray tomography carried out from the 1970s onwards, and at much higher resolution after 2005, revealed at least thirty interlocking gears and inscriptions running to thousands of characters"],
    why:"True. The object was corroded and 'yielded little to visual inspection'; the gears and inscriptions were revealed by X-ray tomography.", ans:0 },

  { id:"vr13b", p:"p13", kind:"tfct",
    stem:"Surviving gearing proves that the mechanism displayed the five planets known in antiquity.",
    ev:["Whether it also displayed the five planets known in antiquity is likely on the basis of the inscriptions but has not been demonstrated from surviving gearing."],
    why:"False. The passage says this is likely on the basis of the inscriptions but 'has not been demonstrated from surviving gearing'.", ans:1 },

  { id:"vr13c", p:"p13", kind:"tfct",
    stem:"Technological capability in the Mediterranean declined after the mechanism was built.",
    ev:["Whether that reflects a genuine collapse in capability or simply the poor survival of bronze objects, which were routinely melted down, is a question on which the evidence is thin and specialists disagree."],
    why:"Can't Tell. The passage raises exactly this question and says the evidence is thin and specialists disagree, offering poor survival of bronze as the alternative explanation.", ans:2 },

  { id:"vr13d", p:"p13", kind:"mcq",
    stem:"How did the mechanism reproduce the irregular apparent motion of the moon?",
    opts:["A pin-and-slot arrangement imitating an elliptical orbit","A cycle borrowed from Babylonian astronomers","A four-year dial on the back of the device","A series of at least thirty interlocking gears"],
    ev:["reproduced the irregular apparent motion of the moon using a pin-and-slot arrangement that mimics an elliptical orbit"],
    why:"A. Stated directly: a pin-and-slot arrangement mimicking an elliptical orbit. B describes eclipse prediction, C the games dial, and D the imaging technique - all in the passage, none the answer to this question.", ans:0 },

  { id:"vr14a", p:"p14", kind:"tfct",
    stem:"In people who have already had a heart attack, statins reduce the chance of another cardiovascular event.",
    ev:["in people who have already had a heart attack or stroke, statin treatment reduces the likelihood of a further event"],
    why:"True. The passage calls the evidence in this group among the strongest in clinical medicine.", ans:0 },

  { id:"vr14b", p:"p14", kind:"tfct",
    stem:"Blinded trials find much higher rates of muscle pain in patients taking statins than in those taking placebo.",
    ev:["Blinded trials, in which neither patient nor doctor knows who is receiving the drug, find rates of muscle symptoms close to those in the placebo group"],
    why:"False. Blinded trials find rates 'close to those in the placebo group'. Note the passage does not deny that patients report muscle pain, only that blinded trials separate the two groups.", ans:1 },

  { id:"vr14c", p:"p14", kind:"tfct",
    stem:"Statins should not be prescribed to people without established cardiovascular disease.",
    ev:["The disagreement is less about whether statins work than about where the threshold for treating an otherwise healthy person should be drawn."],
    why:"Can't Tell. The passage sets out the disagreement about where the treatment threshold should lie and takes no position on it. A recommendation is not something a balanced passage establishes.", ans:2 },

  { id:"vr14d", p:"p14", kind:"mcq",
    stem:"Why is the absolute benefit of statins smaller in primary prevention?",
    opts:["Statins lower LDL cholesterol less effectively in healthy people","The people treated are at lower risk to begin with","Trial follow-up is too short to detect the benefit","Muscle pain causes many patients to stop taking them"],
    ev:["Here the absolute benefit is smaller because the baseline risk is lower"],
    why:"B. The passage states the absolute benefit is smaller 'because the baseline risk is lower'. A misstates the trial evidence, C is a criticism made of the trials rather than a reason about absolute benefit, and D is never claimed.", ans:1 },

  { id:"vr15a", p:"p15", kind:"tfct",
    stem:"Most languages are spoken by relatively few people.",
    ev:["a small number of languages account for most speakers, while the median language has fewer than ten thousand"],
    why:"True. The passage says a small number of languages account for most speakers and that the median language has fewer than ten thousand.", ans:0 },

  { id:"vr15b", p:"p15", kind:"tfct",
    stem:"Languages are usually lost because speakers are prohibited from using them.",
    ev:["Languages are rarely lost because speakers are forbidden to use them, though that has happened."],
    why:"False. The passage says this is rare, though it has happened, and that the more common pattern is a three-generation shift.", ans:1 },

  { id:"vr15c", p:"p15", kind:"tfct",
    stem:"Welsh now has more speakers than it did a century ago.",
    ev:["Welsh and Maori have seen measurable increases in the number of young speakers following sustained investment in education and broadcasting."],
    why:"Can't Tell. The passage reports measurable increases in the number of young speakers following investment, which says nothing about the total compared with a century ago.", ans:2 },

  { id:"vr15d", p:"p15", kind:"mcq",
    stem:"Why does the passage describe its finding about successful revitalisation as uncomfortable for policy?",
    opts:["Because revitalisation has failed in most of the cases attempted","Because the Hebrew example involved circumstances that cannot be repeated","Because what matters most is use in the home, which policy cannot easily reach","Because school instruction has been shown to make no difference at all"],
    ev:["What distinguishes the successes appears to be transmission within the home rather than instruction in school alone, a finding that is uncomfortable for policy because homes are much harder to influence than curricula."],
    why:"C. What distinguishes successes is transmission in the home, and the passage says homes are much harder for policy to influence than curricula. A and B are not stated as the reason, and D reverses the finding.", ans:2 },

  { id:"vr16a", p:"p16", kind:"tfct",
    stem:"The urban heat island effect is more pronounced at night than during the day.",
    ev:["The effect is strongest at night rather than during the day, because the difference lies chiefly in the rate at which stored heat is released."],
    why:"True. Stated directly, and the passage explains why: the difference lies in the rate at which stored heat is released.", ans:0 },

  { id:"vr16b", p:"p16", kind:"tfct",
    stem:"Reflective roofing is beneficial in every climate.",
    ev:["Reflective roofs perform best in hot dry conditions and can be counterproductive in cities with cold winters, where the same property increases heating demand."],
    why:"False. The passage says it can be counterproductive in cities with cold winters, where the same property increases heating demand.", ans:1 },

  { id:"vr16c", p:"p16", kind:"tfct",
    stem:"Planting street trees is the most effective single way to cool a city.",
    ev:["Street trees cool reliably but require water, which is scarce in precisely the places where cooling is most needed."],
    why:"Can't Tell. Street trees are said to cool reliably but to need water that is scarce where cooling matters most, and the passage concludes no single measure is adequate alone. It never ranks the measures.", ans:2 },

  { id:"vr16d", p:"p16", kind:"mcq",
    stem:"Why does the passage say night-time temperature matters particularly for health?",
    opts:["Because dark surfaces absorb more solar radiation than vegetation","Because street geometry traps radiation that would otherwise escape","Because buildings and vehicles release waste heat directly","Because it prevents the body recovering from daytime heat stress"],
    ev:["Sustained high night-time temperatures prevent the physiological recovery that follows daytime heat stress, and excess mortality during heatwaves correlates more closely with night-time minimums than with daytime maximums."],
    why:"D. Sustained high night-time temperatures prevent the physiological recovery that follows daytime heat stress, and excess mortality tracks night-time minimums more closely than daytime maximums. A, B and C appear in the passage but none is given as the health reason.", ans:3 },

  { id:"vr1e", p:"p1", kind:"tfct", syn:true,
    stem:"Resistance genes existed before antibiotics were manufactured, and such genes can pass between different bacterial species.",
    ev:["laid down long before any clinical use of these drugs","This allows a resistance gene that first arose in one species to appear rapidly in another"],
    why:"True, but it needs two separate parts of the passage. The permafrost finding establishes the first half; horizontal gene transfer establishes the second. Neither sentence alone settles the statement.", ans:0 },

  { id:"vr1f", p:"p1", kind:"mcq", syn:true,
    stem:"Taking the passage as a whole, what best explains how resistance became common in species that cause serious human disease?",
    opts:["Widespread use removed susceptible strains, and horizontal transfer moved resistance genes between species","Resistance genes first evolved in response to antibiotics manufactured after 1940","Pharmaceutical companies stopped developing replacement antibiotics","Soil bacteria produce antibiotic compounds to compete with one another"],
    ev:["Susceptible strains were removed; resistant ones flourished.","This allows a resistance gene that first arose in one species to appear rapidly in another, including in species that cause serious human disease."],
    why:"A. Two mechanisms have to be combined: mass use removed susceptible strains, and horizontal transfer carried resistance genes into other species. B is contradicted by the permafrost evidence, C is disputed in the passage and concerns new drugs rather than spread, and D explains where resistance came from originally, not how it reached pathogens.", ans:0 },

  { id:"vr2e", p:"p2", kind:"tfct", syn:true,
    stem:"The passage presents the movement of memories from the hippocampus to the neocortex as something researchers have observed directly.",
    ev:["the same patterns appear shortly afterwards in the neocortex","The prevailing interpretation is that experiences are gradually transferred"],
    why:"False, and you need two places to be sure. The passage reports only the order in which patterns appear, then calls the transfer account 'the prevailing interpretation'. An interpretation of a sequence is not a direct observation.", ans:1 },

  { id:"vr2f", p:"p2", kind:"mcq", syn:true,
    stem:"How does the passage's treatment of memory consolidation compare with its treatment of the neurodegeneration link?",
    opts:["Both are presented as established causes","Consolidation is well supported, while the neurodegeneration link remains correlational","The neurodegeneration link is the better supported of the two","Neither has any experimental support"],
    ev:["Among the best supported of these functions is memory consolidation.","though the evidence in humans remains correlational and no causal mechanism has been established"],
    why:"B. Consolidation is described as among the best supported functions of sleep; the neurodegeneration link is called speculation resting on correlational evidence. The comparison requires reading both paragraphs.", ans:1 },

  { id:"vr3e", p:"p3", kind:"tfct", syn:true,
    stem:"Blocking drainage ditches has failed to bring back the vegetation characteristic of bogs.",
    ev:["Restoration efforts generally focus on blocking drainage ditches to raise the water table.","Results have been encouraging in terms of hydrology and the return of characteristic vegetation such as Sphagnum mosses."],
    why:"False. Restoration works by blocking ditches to raise the water table, and results are described as encouraging both for hydrology and for the return of Sphagnum mosses. What remains unclear is the carbon accumulation rate, which is a different claim.", ans:1 },

  { id:"vr3f", p:"p3", kind:"mcq", syn:true,
    stem:"Which combination of facts best explains the passage's conclusion that preserving intact bog beats restoring damaged bog?",
    opts:["Restoration has failed to return characteristic vegetation","Restored bogs release more carbon than drained ones","Peat accumulates very slowly, and it is unclear whether restored bogs regain their former rate","Peat extraction in Ireland has already ceased"],
    ev:["a metre of peat may represent a thousand years of accumulation","Whether restored bogs recover their former rate of carbon accumulation within a useful timescale is less clear"],
    why:"C. The slowness of accumulation and the uncertainty about whether restored bogs regain their former rate together make preservation the safer bet. A is contradicted, B is never claimed, and D is not stated.", ans:2 },

  { id:"vr4e", p:"p4", kind:"tfct", syn:true,
    stem:"Expectation can produce both improvement and harm in patients given an inactive treatment.",
    ev:["Expectation appears to matter: patients told that an inert cream is an analgesic report less pain than those told nothing","the nocebo effect, in which the expectation of harm produces adverse symptoms"],
    why:"True. The analgesic cream shows expectation producing benefit; the nocebo effect shows expectation producing harm. Both halves are needed.", ans:0 },

  { id:"vr4f", p:"p4", kind:"mcq", syn:true,
    stem:"A trial gives its placebo by injection and lists possible side effects in detail during consent. What should the researchers expect in the placebo arm?",
    opts:["A small response and few reported side effects","No response, because the treatment is inactive","A large response but no reported side effects","A large response and more reported side effects than usual"],
    ev:["Injections generally produce larger placebo responses than tablets","Trials that list side effects in detail during consent tend to record more of those side effects in the placebo arm."],
    why:"D. Two separate findings combine: injections produce larger placebo responses than tablets, and detailed side-effect disclosure raises reported side effects in the placebo group. So expect both a large response and more side effects.", ans:3 },

  { id:"vr5e", p:"p5", kind:"tfct", syn:true,
    stem:"Printing reduced the cost of a book more in Europe than it did in Korea.",
    ev:["The alphabetic writing systems of Europe, with their small character sets, made the economics of the system far more favourable than they had been for logographic scripts.","a collapse in the cost of a book"],
    why:"Can't Tell, and this is a trap built from two real statements. The passage says European alphabets made the economics more favourable than for logographic scripts, and separately that costs collapsed. It never compares the cost of books between Europe and Korea. Two true facts do not license a comparison the author never makes.", ans:2 },

  { id:"vr5f", p:"p5", kind:"mcq", syn:true,
    stem:"Which pair of points from the passage most supports the view that the press's importance has been overstated?",
    opts:["Movable type predated Gutenberg, and the distinctive effects took about fifty years to appear","Luther's tracts were printed in large numbers, and books became cheaper","Standardised editions allowed shared citation, and pamphlets spread rapidly","The ink adhered to metal, and the press was adapted from a screw press"],
    ev:["Movable type had existed in Korea and China for centuries","For the first fifty years printers largely reproduced texts that were already circulating in manuscript"],
    why:"A. Movable type predating Gutenberg undercuts the invention claim, and fifty years of merely reproducing manuscripts undercuts the immediacy claim. The other options list genuine effects of printing, which support the opposite case.", ans:0 },

  { id:"vr6e", p:"p6", kind:"tfct", syn:true,
    stem:"New parks produce a larger health benefit in low-income neighbourhoods than in wealthy ones.",
    ev:["Studies that exploit natural experiments, such as the construction of a new park, offer better evidence","the benefit is greatest for lower-income groups, who typically have the least access"],
    why:"Can't Tell. The passage says natural experiments such as new parks give better evidence, and separately that the benefit is greatest for lower-income groups. It never applies the second finding to the first. Combining two statements the author kept apart is the commonest way to get these wrong.", ans:2 },

  { id:"vr6f", p:"p6", kind:"mcq", syn:true,
    stem:"On what grounds does the passage report that some public health bodies argue for green space provision?",
    opts:["That the average health effect is large enough to justify the cost","That those with the least access stand to gain the most","That natural experiments have produced conclusive evidence","That green areas are quieter and less polluted"],
    ev:["the benefit is greatest for lower-income groups, who typically have the least access","This has led several public health bodies to argue that green space provision should be assessed on equity grounds rather than average effect alone."],
    why:"B. The equity argument follows directly from the finding that those with least access gain most. A misstates the evidence, C and D are mentioned but are not the basis of the argument.", ans:1 },

  { id:"vr7e", p:"p7", kind:"tfct", syn:true,
    stem:"The passage offers a single explanation for why supplementation trials failed to reproduce the observational findings.",
    ev:["One explanation is reverse causation.","A second is that trials have often recruited participants who were already replete"],
    why:"False. Two are given: reverse causation, and the recruitment of participants who were already replete. Counting how many reasons a passage gives is a classic synthesis question.", ans:1 },

  { id:"vr7f", p:"p7", kind:"mcq", syn:true,
    stem:"Which observation would most support the reverse causation explanation?",
    opts:["Supplementation helps deficient participants avoid respiratory infection","Winter sunlight above fifty degrees is too weak for synthesis","Becoming unwell reduces time outdoors and raises inflammation, lowering the measured level","Severe deficiency causes rickets in children"],
    ev:["Illness reduces time spent outdoors and increases inflammation, which lowers measured vitamin D","Observational studies have linked low vitamin D status to cancer, cardiovascular disease, multiple sclerosis, respiratory infection and all-cause mortality."],
    why:"C. Reverse causation says illness lowers measured vitamin D rather than the reverse, so evidence that developing illness itself depresses the reading is what supports it. A supports the opposite reading, B is about synthesis not causation, and D concerns severe deficiency, which is not in dispute.", ans:2 },

  { id:"vr8e", p:"p8", kind:"tfct", syn:true,
    stem:"Two of the proposed explanations for the missing plastic involve particles moving downwards out of the surface layer.",
    ev:["Biofouling by algae and other organisms increases density until the particle sinks.","Ingestion by marine organisms transports plastic downward."],
    why:"True. Biofouling increases density until the particle sinks, and ingestion transports plastic downward. Fragmentation, the third explanation, is about particles becoming too small to catch rather than sinking.", ans:0 },

  { id:"vr8f", p:"p8", kind:"mcq", syn:true,
    stem:"Why is the passage doubtful that consumer bans will substantially reduce the mass of plastic entering the ocean?",
    opts:["Because bans have not reduced the occurrence of the banned items","Because most plastic already lies on the deep sea floor","Because fragmentation makes the total mass impossible to measure","Because most input comes from a few rivers and from fishing gear, which bans do not address"],
    ev:["bans on particular single-use items have reduced their occurrence in coastal surveys","a large share originates from a small number of river catchments and from fishing gear, neither of which is addressed by consumer bans in high-income countries"],
    why:"D. Bans demonstrably cut how often those items appear in coastal surveys, but most input comes from a few river catchments and from fishing gear, which such bans do not touch. Both halves are needed: the bans work, just not on the bulk of the problem.", ans:3 },

  { id:"vr9e", p:"p9", kind:"tfct", syn:true,
    stem:"Every one of the original bacterial genes has been lost from the mitochondrion.",
    ev:["the great majority of the original bacterial genes were either lost or relocated to the host nucleus","Human mitochondria retain only thirty-seven genes"],
    why:"False. The great majority were lost or moved to the nucleus, but human mitochondria retain thirty-seven. 'Great majority' and 'every' are not the same, and the second sentence settles it.", ans:1 },

  { id:"vr9f", p:"p9", kind:"mcq", syn:true,
    stem:"Which pair of observations most directly supports the claim that mitochondria descend from bacteria?",
    opts:["They carry their own circular genome and their ribosomes resemble bacterial ones","They are affected by antibiotics and are present in almost all eukaryotes","Most of their genes moved to the nucleus and only thirty-seven remain","Their remaining proteins are hydrophobic and hard to import"],
    ev:["mitochondria carry their own circular genome, distinct from that of the nucleus","their ribosomes resemble bacterial ribosomes more closely than those of the cell they inhabit"],
    why:"A. A separate circular genome and bacteria-like ribosomes are both structural inheritances from a bacterial ancestor. B mixes a consequence with a distribution fact, C describes gene loss rather than ancestry, and D concerns why genes remain.", ans:0 },

  { id:"vr10e", p:"p10", kind:"tfct", syn:true,
    stem:"Restricting eating to daytime hours lowers the risk of cancer in shift workers.",
    ev:["Interventions have been tried, including timed light exposure and restricting eating to daytime hours, and small trials suggest they can shift the clock measurably.","Whether they reduce disease over a working lifetime has not been established."],
    why:"Can't Tell. Such interventions are reported to shift the clock measurably in small trials, and the passage then says explicitly that whether they reduce disease over a working lifetime has not been established. Shifting a clock is not the same as preventing disease.", ans:2 },

  { id:"vr10f", p:"p10", kind:"mcq", syn:true,
    stem:"Why does night work pull the peripheral clocks out of step with the master clock?",
    opts:["The master clock stops working during the night","The master clock follows light while peripheral clocks respond partly to when a person eats","Cortisol secretion ceases entirely on night shifts","Shift workers tend to have poorer diets than day workers"],
    ev:["This master clock is entrained principally by light reaching the retina","the peripheral clocks, which respond partly to meal timing, drift out of alignment with the master clock"],
    why:"B. The two clocks answer to different cues: the master clock to light, the peripheral clocks partly to meal timing. Night work sends those cues in conflicting directions.", ans:1 },

  { id:"vr11e", p:"p11", kind:"tfct", syn:true,
    stem:"Carbonation offsets more of cement's emissions than substituting fly ash does.",
    ev:["Substituting a portion of the cement with fly ash or ground blast furnace slag is established practice and cuts emissions per tonne","Estimates suggest this recovers a meaningful fraction of the process emissions over the life of a structure"],
    why:"Can't Tell. The passage describes both, saying substitution cuts emissions per tonne and carbonation recovers a meaningful fraction. It never puts a figure on either in comparable terms, so no ranking is possible.", ans:2 },

  { id:"vr11f", p:"p11", kind:"mcq", syn:true,
    stem:"Which best captures the passage's assessment of the two substitution routes it describes?",
    opts:["Both are ready for deployment at the scale required","Neither reduces emissions per tonne of concrete","One is established but depends on contracting industries; the other avoids the chemistry but is not yet at scale","Carbonation makes both of them unnecessary"],
    ev:["both materials are by-products of coal power and steel making, industries that are themselves contracting","none has yet been produced at anything approaching the scale required"],
    why:"C. One route works but depends on industries that are shrinking; the other sidesteps the chemistry but is not yet available at scale. Each limitation appears in a different sentence.", ans:2 },

  { id:"vr12e", p:"p12", kind:"tfct", syn:true,
    stem:"All three navigation mechanisms described have been demonstrated experimentally.",
    ev:["A star compass has also been demonstrated","the receptor has not been identified with certainty"],
    why:"False. The sun and star compasses have supporting experiments, but for magnetic sensing the receptor has not been identified with certainty and two rival hypotheses remain. 'All three' fails on the third.", ans:1 },

  { id:"vr12f", p:"p12", kind:"mcq", syn:true,
    stem:"What makes the passage confident that the sun compass and the internal clock are linked?",
    opts:["Birds navigate only in daylight hours","The star compass depends on the sky's axis of rotation","Experienced adults can correct for displacement","Shifting a bird's light cycle produces a predictable error in its orientation"],
    ev:["The best established is a sun compass, corrected for the time of day by the bird's internal clock.","Birds held under artificially shifted light cycles orient in a predictably wrong direction, which is strong evidence that the clock and the compass are coupled."],
    why:"D. The experiment is the evidence: shift a bird's light cycle and its orientation error is predictable, which only makes sense if the compass is being corrected by the clock. The other options are true statements about other mechanisms.", ans:3 },

  { id:"vr13e", p:"p13", kind:"tfct", syn:true,
    stem:"The inscriptions point to a capability that the surviving gears do not confirm.",
    ev:["inscriptions running to thousands of characters","Whether it also displayed the five planets known in antiquity is likely on the basis of the inscriptions but has not been demonstrated from surviving gearing."],
    why:"True. Thousands of characters of inscription survive, and on their basis planetary display is thought likely, yet the passage says this has not been demonstrated from the gearing that remains.", ans:0 },

  { id:"vr13f", p:"p13", kind:"mcq", syn:true,
    stem:"Why did the mechanism remain poorly understood for decades after it was recovered?",
    opts:["It was corroded into lumps, and only imaging later revealed the interior","The inscriptions were written in a language nobody could read","Specialists disagreed over whether the object was genuine","Bronze objects from the period were routinely melted down"],
    ev:["Corroded into a few lumps of bronze, it yielded little to visual inspection.","X-ray tomography carried out from the 1970s onwards, and at much higher resolution after 2005, revealed at least thirty interlocking gears"],
    why:"A. Two facts combine: it was corroded into lumps that revealed little to the eye, and it was imaging from the 1970s onward that exposed the gearing. D is offered in the passage as an explanation for something else entirely.", ans:0 },

  { id:"vr14e", p:"p14", kind:"tfct", syn:true,
    stem:"Statins reduce deaths from all causes in people who have no established cardiovascular disease.",
    ev:["Controversy attaches to their use in primary prevention, that is, in people with no established cardiovascular disease.","Here the absolute benefit is smaller because the baseline risk is lower"],
    why:"Can't Tell. The passage says the absolute benefit in primary prevention is smaller because baseline risk is lower, and that the argument is about where to set the threshold. It never states whether all-cause mortality falls in that group.", ans:2 },

  { id:"vr14f", p:"p14", kind:"mcq", syn:true,
    stem:"Which best describes what the disagreement over statins is actually about?",
    opts:["Whether statins lower LDL cholesterol at all","Where to set the treatment threshold in people without established disease","Whether statins help those who have already had a heart attack","Whether patients genuinely experience muscle pain"],
    ev:["Controversy attaches to their use in primary prevention","The disagreement is less about whether statins work than about where the threshold for treating an otherwise healthy person should be drawn."],
    why:"B. The passage is explicit that the argument is less about whether statins work than about the treatment threshold in people without established disease. A, C and D are all matters the passage treats as settled.", ans:1 },

  { id:"vr15e", p:"p15", kind:"tfct", syn:true,
    stem:"The increases in young Welsh and Maori speakers show that school instruction alone can reverse language loss.",
    ev:["Welsh and Maori have seen measurable increases in the number of young speakers following sustained investment in education and broadcasting.","What distinguishes the successes appears to be transmission within the home rather than instruction in school alone"],
    why:"False. Those increases followed investment in education and broadcasting, but the passage then identifies transmission in the home, rather than instruction in school alone, as what distinguishes the successes. The second sentence directly rules out the claim.", ans:1 },

  { id:"vr15f", p:"p15", kind:"mcq", syn:true,
    stem:"Why does the passage treat Hebrew as a poor guide to what will work elsewhere?",
    opts:["Because it has fewer speakers than Welsh or Maori","Because its revival came about through schooling rather than the home","Because it involved a state, an ideology and no shared alternative language","Because the shift to it took three generations"],
    ev:["Hebrew is the example most often cited, though its circumstances were unusual, involving a state, an ideology and a population with no shared alternative.","Revitalisation has succeeded in some cases and failed in many others."],
    why:"C. Its circumstances are described as unusual: a state, an ideology, and a population with no shared alternative language. That combination is not available to most endangered languages.", ans:2 },

  { id:"vr16e", p:"p16", kind:"tfct", syn:true,
    stem:"Planting street trees reduces deaths during heatwaves.",
    ev:["Street trees cool reliably but require water, which is scarce in precisely the places where cooling is most needed.","excess mortality during heatwaves correlates more closely with night-time minimums than with daytime maximums"],
    why:"Can't Tell. The passage says trees cool reliably, and separately that mortality tracks night-time temperature. It never links tree planting to a change in deaths. The inference is reasonable but the passage does not make it.", ans:2 },

  { id:"vr16f", p:"p16", kind:"mcq", syn:true,
    stem:"Why does the passage conclude that no single mitigation measure is adequate on its own?",
    opts:["None of the measures has yet been tested in practice","The heat island effect is strongest at night","Permeable surfaces prevent evaporation from taking place","Reflective roofs can raise heating demand, and street trees need water that is scarce where it is needed"],
    ev:["Reflective roofs perform best in hot dry conditions and can be counterproductive in cities with cold winters, where the same property increases heating demand.","Street trees cool reliably but require water, which is scarce in precisely the places where cooling is most needed."],
    why:"D. Each measure carries a limitation stated in a different sentence: reflective roofs can raise heating demand in cold-winter cities, and street trees need water that is scarce where cooling is most needed.", ans:3 }
];
