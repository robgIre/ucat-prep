/* Situational Judgement bank. 10 scenarios x 4 items = 40.
   Scales match the live test:
     appropriateness -> very appropriate / appropriate but not ideal / inappropriate but not awful / very inappropriate
     importance      -> very important / important / of minor importance / not important at all
   Original practice material written in UCAT style. Not official UCAT content. */

window.SJT_SCALES = {
  appropriate: ["A very appropriate thing to do","Appropriate, but not ideal","Inappropriate, but not awful","A very inappropriate thing to do"],
  important:   ["Very important","Important","Of minor importance","Not important at all"]
};

window.SJT_SCENARIOS = {
  s1: { text:"Ravi is a medical student on a hospital placement. He notices that another student on the same placement has photographed a page of a patient's notes on their phone, saying they want to write the case up properly at home." },
  s2: { text:"During a ward round, Sinead, a medical student, observes the consultant speaking abruptly to a patient whose English is limited. The consultant does not check whether the patient has understood the plan before moving on to the next bed." },
  s3: { text:"Two days before a deadline, a friend on Orla's course asks to copy her completed assignment. He explains he has been unwell for a fortnight and has not started." },
  s4: { text:"On placement, Tom sees a nurse administer a medication to a patient. Tom believes the drug chart he glanced at a moment earlier belonged to a different patient in the next bed.", ask:"How important are the following considerations for Tom when deciding what to do?" },
  s5: { text:"A patient stops Niamh, a medical student, in the corridor and asks what her scan showed. Niamh saw the report earlier that morning. The consultant responsible has not yet spoken to the patient." },
  s6: { text:"Conor is part of a five-person group project due in a fortnight. One member has contributed nothing for three weeks and has not replied to any messages from the group." },
  s7: { text:"Aisha is a first-year medical student on her first hospital placement. A junior doctor, who is busy, asks her to take a blood sample from a patient. Aisha has practised the procedure on a mannequin but never on a person.", ask:"How important are the following considerations for Aisha in deciding how to respond?" },
  s8: { text:"At the start of an early shift, Daniel notices that a colleague on his placement smells strongly of alcohol. The colleague is due to spend the morning seeing patients." },
  s9: { text:"A patient tells Grace, a medical student, that she stopped taking her blood pressure medication a month ago because of the side effects. She asks Grace not to mention it to the doctor, saying she does not want a lecture." },
  s10:{ text:"While writing up observations, Peter records a set of blood pressure readings in the wrong patient's notes. He realises his mistake about an hour later, after the ward round has finished." },
  s11:{ text:"Emer is a medical student on a GP placement. The surgery is running forty minutes behind. A patient who has been waiting over an hour becomes visibly frustrated and asks Emer how much longer it will be." },
  s12:{ text:"Ruairi's supervising consultant asks him to present a patient's case at a teaching session tomorrow morning. He has a university assessment the same afternoon and doubts he can prepare properly for both.", ask:"How important are the following considerations for Ruairi in deciding how to respond?" },
  s13:{ text:"During a busy clinic, Fionn notices that the consultant has moved from examining one patient to examining the next without cleaning their hands." },
  s14:{ text:"A patient Sorcha has been following during her placement is transferred to another ward. She would like to keep visiting him so she can follow the case through to discharge.", ask:"How important are the following considerations for Sorcha?" },
  s15:{ text:"A patient's adult son stops Maeve, a medical student, in the corridor and asks how his mother's tests came back. The patient has not said whether she wants her family informed." },
  s16:{ text:"Oisin notices that the allergy box on a patient's drug chart has been left blank. The patient is due to be given intravenous antibiotics within the hour." },
  s17:{ text:"A student on the same placement posts a photograph on social media taken in a staff area. No patient is visible, but the ward and hospital are clearly identifiable and the caption complains about a difficult shift." },
  s18:{ text:"Leah runs a weekly peer teaching session. Reviewing her notes, she realises she gave the group a piece of incorrect clinical information last week and that nobody questioned it." },
  s19:{ text:"A nurse asks Roisin, a medical student, to act as chaperone for an intimate examination that is about to begin. Roisin has not been trained as a chaperone." },
  s20:{ text:"A busy registrar hands Sean, a medical student, a consent form and asks him to sign as the witness to a patient's signature. Sean does not fully understand the procedure being consented to.", ask:"How important are the following considerations for Sean?" },
  s21:{ text:"A rail failure means Nuala will be about an hour late for the start of her hospital placement.", ask:"How important are the following considerations for Nuala?" },
  s22:{ text:"On her last day of a placement, a patient Cormac has been seeing regularly offers him a wrapped gift as a thank you.", ask:"How important are the following considerations for Cormac?" }
};

window.BANK_SJT = [
  /* s1 - confidentiality */
  { id:"sjt1a", s:"s1", fmt:"appropriate", ans:0,
    stem:"Ask the student to delete the photograph, explaining that identifiable patient information must not be stored on a personal phone.",
    why:"Very appropriate. It addresses the breach directly, at the earliest point, and it educates rather than punishes. Tackling a problem yourself first, where it is safe to do so, is almost always the preferred route." },
  { id:"sjt1b", s:"s1", fmt:"appropriate", ans:1,
    stem:"Report the student to the medical school without speaking to them first.",
    why:"Appropriate, but not ideal. A confidentiality breach is serious enough that escalating is legitimate and nobody would call it wrong. It is not ideal only because a quiet word would likely resolve it immediately, and the student may not realise what they have done." },
  { id:"sjt1c", s:"s1", fmt:"appropriate", ans:3,
    stem:"Say nothing, since the student will probably delete the photograph once the write-up is done.",
    why:"Very inappropriate. Doing nothing about a live breach of patient confidentiality is never acceptable. Assuming a problem will resolve itself is the single most reliably wrong answer in the SJT." },
  { id:"sjt1d", s:"s1", fmt:"appropriate", ans:0,
    stem:"Suggest the student writes the case up using anonymised notes containing no identifiable details.",
    why:"Very appropriate. It solves the underlying need - the student wants to learn from the case - while removing the risk entirely. Answers that meet the legitimate goal by a safe route score highly." },

  /* s2 - challenging a senior */
  { id:"sjt2a", s:"s2", fmt:"appropriate", ans:2,
    stem:"Interrupt the consultant in front of the patient to say that the patient has not understood.",
    why:"Inappropriate, but not awful. The concern is genuine and the patient's understanding matters, so this is not the worst option. But undermining a colleague in front of a patient damages confidence in the team, and the same point can be made moments later in private." },
  { id:"sjt2b", s:"s2", fmt:"appropriate", ans:0,
    stem:"After the ward round, speak to the consultant privately about how the interaction may have come across to the patient.",
    why:"Very appropriate. Right concern, right person, right setting. Raising an issue privately and promptly with the person involved is the model answer pattern for challenging a senior colleague." },
  { id:"sjt2c", s:"s2", fmt:"appropriate", ans:3,
    stem:"Do nothing, on the basis that a student should not question a consultant.",
    why:"Very inappropriate. Seniority never removes the obligation to speak up about patient care. Note the difference from the previous option: how you raise it is a matter of judgement, whether you raise it is not." },
  { id:"sjt2d", s:"s2", fmt:"appropriate", ans:0,
    stem:"Ask the ward staff whether an interpreter can be arranged before the patient's next review.",
    why:"Very appropriate. It fixes the underlying problem rather than the interpersonal one, is entirely within a student's remit, and directly serves the patient." },

  /* s3 - academic integrity */
  { id:"sjt3a", s:"s3", fmt:"appropriate", ans:3,
    stem:"Give him the assignment so that he can submit something before the deadline.",
    why:"Very inappropriate. This is collusion, and sympathy for his situation does not change that. Probity is assessed throughout medical training; helping someone cheat harms them as well as you." },
  { id:"sjt3b", s:"s3", fmt:"appropriate", ans:0,
    stem:"Refuse, and help him apply for an extension on medical grounds.",
    why:"Very appropriate. It declines the improper request while addressing the real problem, which is that he has been ill and needs an adjustment he is probably entitled to." },
  { id:"sjt3c", s:"s3", fmt:"appropriate", ans:2,
    stem:"Refuse, and report the request to the course director.",
    why:"Inappropriate, but not awful. Refusing is right. Escalating an unwise request that was made and declined, with no actual misconduct having occurred, is disproportionate and punitive towards a friend who is unwell." },
  { id:"sjt3d", s:"s3", fmt:"appropriate", ans:3,
    stem:"Give him the assignment but ask him to reword it so the similarity is not detected.",
    why:"Very inappropriate. This is the original misconduct plus a deliberate attempt to conceal it. Any option involving concealment sits at the bottom of the scale." },

  /* s4 - importance, possible drug error */
  { id:"sjt4a", s:"s4", fmt:"important", ans:0,
    stem:"Whether the patient may have come to immediate harm.",
    why:"Very important. Patient safety is the first consideration in every SJT scenario and determines how urgently Tom must act." },
  { id:"sjt4b", s:"s4", fmt:"important", ans:2,
    stem:"Whether the nurse is considerably more experienced than Tom.",
    why:"Of minor importance. It is not wholly irrelevant, because experience makes it somewhat more likely Tom misread the situation. But it carries no weight against a possible drug error, and it must not stop him speaking." },
  { id:"sjt4c", s:"s4", fmt:"important", ans:0,
    stem:"Whether Tom might have misread the situation, having only glanced at the chart.",
    why:"Very important. It shapes how he raises it - asking a question rather than making an accusation - though it never justifies staying silent." },
  { id:"sjt4d", s:"s4", fmt:"important", ans:3,
    stem:"Whether raising the concern will make Tom unpopular with the ward staff.",
    why:"Not important at all. Personal standing is never a legitimate reason to weigh against patient safety. Anything about how the candidate will be perceived is almost always 'not important at all'." },

  /* s5 - scope of practice, honesty */
  { id:"sjt5a", s:"s5", fmt:"appropriate", ans:3,
    stem:"Tell the patient what the scan report said.",
    why:"Very inappropriate. Communicating results, particularly significant ones, is outside a student's competence and responsibility. It could cause serious distress without the context, support or plan that the treating clinician can provide." },
  { id:"sjt5b", s:"s5", fmt:"appropriate", ans:0,
    stem:"Explain that as a student she cannot discuss results, and tell the nursing staff that the patient is anxious for an update.",
    why:"Very appropriate. Honest about her role, kind to the patient, and it actively moves things forward instead of leaving the patient waiting. Declining plus escalating is the standard high-scoring shape." },
  { id:"sjt5c", s:"s5", fmt:"appropriate", ans:2,
    stem:"Tell the patient that she does not know anything about the results.",
    why:"Inappropriate, but not awful. It avoids the real harm of disclosing results, so it is not the worst option. But it is a lie, and if the patient later discovers Niamh had seen the report it damages trust in the whole team. Declining to share is not the same as denying knowledge." },
  { id:"sjt5d", s:"s5", fmt:"appropriate", ans:3,
    stem:"Change the subject and leave the bay as soon as she can.",
    why:"Very inappropriate. It abandons an anxious patient and leaves the underlying need unmet. Avoidance is treated as harshly as an outright wrong action." },

  /* s6 - team working */
  { id:"sjt6a", s:"s6", fmt:"appropriate", ans:2,
    stem:"Quietly complete the missing section himself and say nothing to anyone.",
    why:"Inappropriate, but not awful. It protects the group's submission, which has some merit. But it conceals a problem from the tutor, does nothing to find out whether a fellow student is in difficulty, and is unfair to the rest of the group." },
  { id:"sjt6b", s:"s6", fmt:"appropriate", ans:0,
    stem:"Contact the student directly to ask whether something is wrong and whether they still intend to contribute.",
    why:"Very appropriate. Three weeks of silence may signal illness or crisis rather than laziness. Ask before you judge, and deal with the person directly first." },
  { id:"sjt6c", s:"s6", fmt:"appropriate", ans:2,
    stem:"Email the tutor to report the student without having contacted them.",
    why:"Inappropriate, but not awful. Involving the tutor will be reasonable if direct contact fails, and there is a real deadline at stake, so it is not disastrous. Doing it without a single direct approach is premature." },
  { id:"sjt6d", s:"s6", fmt:"appropriate", ans:3,
    stem:"Remove the student's name from the submission without telling them.",
    why:"Very inappropriate. It has serious academic consequences for someone who has not been contacted, warned, or given any chance to explain." },

  /* s7 - importance, competence */
  { id:"sjt7a", s:"s7", fmt:"important", ans:0,
    stem:"Whether Aisha has been formally assessed as competent to take blood from patients.",
    why:"Very important. Working within the limits of your competence is a core professional duty and is the decisive consideration here." },
  { id:"sjt7b", s:"s7", fmt:"important", ans:0,
    stem:"Whether the junior doctor is able to supervise her while she does it.",
    why:"Very important. Supervision is what converts an unsafe first attempt into an appropriate learning opportunity. It changes the answer entirely." },
  { id:"sjt7c", s:"s7", fmt:"important", ans:0,
    stem:"Whether the patient consents to having blood taken by a student.",
    why:"Very important. Patients must know who is treating them and may decline. Consent for student involvement is not optional." },
  { id:"sjt7d", s:"s7", fmt:"important", ans:3,
    stem:"Whether declining might make Aisha look unenthusiastic to the team.",
    why:"Not important at all. How keen she appears cannot weigh against patient safety. Asking for supervision signals good judgement, not weakness." },

  /* s8 - impaired colleague */
  { id:"sjt8a", s:"s8", fmt:"appropriate", ans:0,
    stem:"Speak to the colleague privately and ask whether they are fit to work today.",
    why:"Very appropriate. It gives the colleague a chance to explain or withdraw, and it happens before any patient is seen. Direct, private, and immediate." },
  { id:"sjt8b", s:"s8", fmt:"appropriate", ans:3,
    stem:"Ignore it, on the basis that he may be mistaken about what he can smell.",
    why:"Very inappropriate. Uncertainty is a reason to check, not a reason to do nothing. A clinician who may be impaired is an immediate risk to patients." },
  { id:"sjt8c", s:"s8", fmt:"appropriate", ans:0,
    stem:"Raise the concern with the supervising doctor before the colleague sees any patients.",
    why:"Very appropriate. Where there is a possible immediate risk to patients, escalating straight away is fully justified even without speaking to the person first. This is the exception to the 'always try direct first' rule." },
  { id:"sjt8d", s:"s8", fmt:"appropriate", ans:3,
    stem:"Mention what he noticed to the other students on the placement.",
    why:"Very inappropriate. It spreads a damaging allegation among people who can do nothing about it, while leaving the actual risk unaddressed. Gossip is never a route to raising a concern." },

  /* s9 - confidentiality vs safety */
  { id:"sjt9a", s:"s9", fmt:"appropriate", ans:3,
    stem:"Agree to keep it to herself, as the patient asked.",
    why:"Very inappropriate. Untreated hypertension carries real risk, and Grace cannot make a promise that withholds clinically important information from the team. Never agree to a confidence before you know what it is." },
  { id:"sjt9b", s:"s9", fmt:"appropriate", ans:0,
    stem:"Explain that the treating team needs to know because it affects her care, and encourage her to raise it with the doctor herself.",
    why:"Very appropriate. Honest about what will happen and why, and it gives the patient the chance to lead. Transparency plus involving the patient in the next step is the ideal shape for these items." },
  { id:"sjt9c", s:"s9", fmt:"appropriate", ans:1,
    stem:"Tell the doctor straight away without discussing it further with the patient.",
    why:"Appropriate, but not ideal. The information does need to reach the team, so the outcome is right. It is not ideal because the patient is not told that her disclosure is being passed on, which she will likely experience as a betrayal." },
  { id:"sjt9d", s:"s9", fmt:"appropriate", ans:0,
    stem:"Ask the patient more about the side effects that led her to stop.",
    why:"Very appropriate. It treats her as a person with a legitimate reason rather than as non-compliant, and the answer is clinically useful - an alternative drug may solve the problem entirely." },

  /* s10 - own error, candour */
  { id:"sjt10a", s:"s10", fmt:"appropriate", ans:0,
    stem:"Correct both sets of notes properly and tell the nurse in charge immediately.",
    why:"Very appropriate. Prompt correction plus prompt disclosure. Notes must be amended transparently, never overwritten, so that the record shows what happened." },
  { id:"sjt10b", s:"s10", fmt:"appropriate", ans:3,
    stem:"Quietly amend the notes so that no one realises the error was made.",
    why:"Very inappropriate. Altering records to conceal a mistake is falsification. The original error was minor and honest; hiding it is neither." },
  { id:"sjt10c", s:"s10", fmt:"appropriate", ans:3,
    stem:"Wait and see whether anyone notices before deciding what to do.",
    why:"Very inappropriate. A decision may already have been taken on the wrong reading. Delay converts a small correctable error into a potential clinical incident." },
  { id:"sjt10d", s:"s10", fmt:"appropriate", ans:0,
    stem:"Tell his supervising doctor and ask whether the other patient needs to be reviewed.",
    why:"Very appropriate. It goes beyond admitting the error to addressing its clinical consequence, which is what the duty of candour actually requires." },

  /* s11 - middle-band practice: honest but passive vs helpful */
  { id:"sjt11a", s:"s11", fmt:"appropriate", ans:0,
    stem:"Apologise, say honestly that she does not know the cause of the delay, and offer to ask reception for an estimate.",
    why:"Very appropriate. Honest about the limits of what she knows, and it does something useful rather than leaving the patient with nothing. Honesty plus a concrete next step is the highest-scoring shape." },
  { id:"sjt11b", s:"s11", fmt:"appropriate", ans:2,
    stem:"Tell the patient it will only be a few more minutes, so that they feel reassured.",
    why:"Inappropriate, but not awful. The intention is kind and the harm is small, which keeps it off the bottom band. But she has no idea whether it is true, and a second broken promise will make the patient angrier than the honest answer would have." },
  { id:"sjt11c", s:"s11", fmt:"appropriate", ans:1,
    stem:"Apologise for the wait and explain that delays are common in general practice.",
    why:"Appropriate, but not ideal. It is honest, civil and does no harm, so it is not wrong. It is not ideal because it explains the delay away instead of finding out anything the patient can actually use." },
  { id:"sjt11d", s:"s11", fmt:"appropriate", ans:2,
    stem:"Explain that she is only a student and carry on with what she was doing.",
    why:"Inappropriate, but not awful. Being a student is a true and relevant limit, so this is not dishonest. But it treats a limit on her knowledge as a reason to disengage from a distressed patient, when she could easily have asked someone who does know." },

  /* s12 - importance, middle band */
  { id:"sjt12a", s:"s12", fmt:"important", ans:0,
    stem:"Whether he can tell the consultant now rather than at the last minute.",
    why:"Very important. Raising it early is what lets the session be rearranged. Flagging a problem while it can still be solved is the difference between a professional and an unreliable colleague." },
  { id:"sjt12b", s:"s12", fmt:"important", ans:1,
    stem:"Whether another student would be willing to present in his place.",
    why:"Important. Offering a workable alternative makes it far easier to raise the problem, and it protects the teaching session. It is not decisive, though, because the decision is the consultant's to make." },
  { id:"sjt12c", s:"s12", fmt:"important", ans:1,
    stem:"Whether the teaching session is formally assessed as part of his course.",
    why:"Important. It affects how much is at stake and therefore how he weighs the clash. It does not change whether he should speak up, only how urgently." },
  { id:"sjt12d", s:"s12", fmt:"important", ans:2,
    stem:"Whether he has managed presentations at short notice before without difficulty.",
    why:"Of minor importance. Mildly relevant as evidence about his own capacity, but a previous success with no competing deadline says very little about a day with two commitments on it." },

  /* s13 - middle-band practice: right concern, wrong delivery */
  { id:"sjt13a", s:"s13", fmt:"appropriate", ans:1,
    stem:"Say nothing during the clinic, but mention it to the consultant afterwards.",
    why:"Appropriate, but not ideal. Raising it at all is right, and privately afterwards is a reasonable setting. It is not ideal because hand hygiene protects the patient in front of him now, and afterwards is too late for that patient." },
  { id:"sjt13b", s:"s13", fmt:"appropriate", ans:0,
    stem:"Quietly offer the consultant the hand gel without drawing attention to it.",
    why:"Very appropriate. It fixes the problem immediately, before the patient is examined, and it does so without embarrassing anyone. Prompt and tactful beats correct but late." },
  { id:"sjt13c", s:"s13", fmt:"appropriate", ans:2,
    stem:"Point out in front of the patient that the consultant has not cleaned their hands.",
    why:"Inappropriate, but not awful. The concern is legitimate and the timing is right, which keeps it off the bottom band. The delivery undermines the consultant in front of a patient when handing over the gel would have achieved the same thing." },
  { id:"sjt13d", s:"s13", fmt:"appropriate", ans:1,
    stem:"Report the consultant to the infection control team without speaking to them first.",
    why:"Appropriate, but not ideal. Hand hygiene is a genuine patient safety matter and infection control is a legitimate route, so this is not wrong. It is disproportionate as a first response to a single lapse that a word at the time would have fixed." },

  /* s14 - importance, patient-first ordering */
  { id:"sjt14a", s:"s14", fmt:"important", ans:0,
    stem:"Whether the patient is happy for her to keep visiting him.",
    why:"Very important. His consent governs her involvement. Her learning does not create any entitlement to his time or his bedside." },
  { id:"sjt14b", s:"s14", fmt:"important", ans:1,
    stem:"Whether the team on the new ward knows she is following the case.",
    why:"Important. Turning up on a ward where nobody knows who she is causes confusion and could interfere with his care. It is a matter of courtesy and safety, but it is easily resolved." },
  { id:"sjt14c", s:"s14", fmt:"important", ans:1,
    stem:"Whether following the case through will benefit her learning.",
    why:"Important. Continuity of care is genuinely valuable to learn and it is a legitimate reason to ask. It ranks below the patient's wishes and below the new team's agreement." },
  { id:"sjt14d", s:"s14", fmt:"important", ans:2,
    stem:"Whether she has already spent several days following this patient.",
    why:"Of minor importance. Time already invested is a sunk cost. It slightly strengthens the educational case for continuity, but it creates no claim on the patient or the new team." },

  { id:"sjt15a", s:"s15", fmt:"appropriate", ans:0,
    stem:"Explain that she cannot share information without the patient's permission, and offer to let the nursing staff know he would like an update.",
    why:"Very appropriate. Confidentiality belongs to the patient, not to the family, and Maeve has no way of knowing what her mother wants shared. Declining while routing the request to someone who can act is the ideal shape." },

  { id:"sjt15b", s:"s15", fmt:"appropriate", ans:2,
    stem:"Give him a general sense of how things are going without mentioning any specific results.",
    why:"Inappropriate, but not awful. The instinct to be kind is understandable and no test result is named, which keeps it off the bottom band. But 'she is doing well' is still disclosure, and it is not Maeve's to give." },

  { id:"sjt15c", s:"s15", fmt:"appropriate", ans:2,
    stem:"Tell him she knows nothing about his mother's care.",
    why:"Inappropriate, but not awful. It avoids a breach, which is the main risk. But it is untrue, and if he later learns she was involved in his mother's care it damages trust in the whole team. Declining to share is not the same as denying knowledge." },

  { id:"sjt15d", s:"s15", fmt:"appropriate", ans:1,
    stem:"Tell him he will need to speak to the consultant, and carry on to her next task.",
    why:"Appropriate, but not ideal. The direction is correct and nothing confidential is disclosed. It is not ideal because it leaves a worried relative to organise it himself when a word to the nurse would have moved things along." },

  { id:"sjt16a", s:"s16", fmt:"appropriate", ans:0,
    stem:"Tell the nurse about the blank allergy box before the antibiotics are given.",
    why:"Very appropriate. An unchecked allergy status before intravenous antibiotics is a genuine safety risk, and this addresses it before any harm can occur. Raise it now, not later." },

  { id:"sjt16b", s:"s16", fmt:"appropriate", ans:2,
    stem:"Wait until the ward round to raise it, so as not to interrupt the nurse mid-task.",
    why:"Inappropriate, but not awful. He does intend to raise it, which is better than ignoring it. But the antibiotics are due within the hour, so the delay could allow exactly the harm he has spotted. Courtesy does not outrank timing where safety is concerned." },

  { id:"sjt16c", s:"s16", fmt:"appropriate", ans:3,
    stem:"Assume the team will already have checked and say nothing.",
    why:"Very inappropriate. Assuming someone else has dealt with it is the reasoning behind a large share of real drug errors. A blank box is precisely the signal that it may not have been checked." },

  { id:"sjt16d", s:"s16", fmt:"appropriate", ans:2,
    stem:"Ask the patient about allergies and write the answer into the drug chart himself.",
    why:"Inappropriate, but not awful. Asking the patient is sensible and the information is useful. Entering it on a drug chart is outside a student's role, and a chart that looks complete may stop a qualified member of staff from checking properly." },

  { id:"sjt17a", s:"s17", fmt:"appropriate", ans:0,
    stem:"Message the student privately, explain why an identifiable hospital plus a complaint about a shift is a problem, and ask them to take it down.",
    why:"Very appropriate. Direct, private, prompt and educational. The student may genuinely not have realised that identifying the workplace is the issue rather than showing a patient." },

  { id:"sjt17b", s:"s17", fmt:"appropriate", ans:2,
    stem:"Reply to the post publicly telling them to delete it.",
    why:"Inappropriate, but not awful. The concern is right and acting quickly matters. Doing it in public draws attention to the very post that should be seen by fewer people, and embarrasses a colleague unnecessarily." },

  { id:"sjt17c", s:"s17", fmt:"appropriate", ans:3,
    stem:"Do nothing, since no patient appears in the photograph.",
    why:"Very inappropriate. Professionalism online is not limited to whether a patient is visible. An identifiable hospital and a public complaint about a shift can breach confidentiality by inference and damage public confidence." },

  { id:"sjt17d", s:"s17", fmt:"appropriate", ans:1,
    stem:"Report the post to the medical school without contacting the student.",
    why:"Appropriate, but not ideal. Social media conduct is taken seriously and escalating is legitimate, so this is not wrong. It is not ideal as a first step for something the student would very likely fix at once if simply asked." },

  { id:"sjt18a", s:"s18", fmt:"appropriate", ans:0,
    stem:"Email the group straight away with the correction and an explanation of what she got wrong.",
    why:"Very appropriate. Prompt, honest and reaches everyone before they revise from the error. Admitting your own mistake without being prompted is exactly what professional honesty looks like." },

  { id:"sjt18b", s:"s18", fmt:"appropriate", ans:1,
    stem:"Correct it at the beginning of next week's session.",
    why:"Appropriate, but not ideal. The correction does get made, publicly, to the right audience. It is not ideal because a week is long enough for the group to have learned and repeated the wrong information." },

  { id:"sjt18c", s:"s18", fmt:"appropriate", ans:2,
    stem:"Work the correct version into a future session without mentioning that the earlier information was wrong.",
    why:"Inappropriate, but not awful. The right content eventually reaches the group. But quietly overwriting an error leaves anyone who wrote down the original version unaware they need to change it, and it dodges the admission." },

  { id:"sjt18d", s:"s18", fmt:"appropriate", ans:3,
    stem:"Say nothing, on the basis that it was a small point and nobody noticed.",
    why:"Very inappropriate. Nobody noticing is the reason to speak, not the reason to stay quiet. Incorrect clinical information left uncorrected can be carried a long way by the people who trusted it." },

  { id:"sjt19a", s:"s19", fmt:"appropriate", ans:0,
    stem:"Explain that she has not been trained as a chaperone and ask whether a trained member of staff is available.",
    why:"Very appropriate. Chaperoning is a defined role with a purpose, and it protects the patient and the examiner. Saying clearly what she is and is not trained for, while helping find a solution, is good judgement rather than obstruction." },

  { id:"sjt19b", s:"s19", fmt:"appropriate", ans:1,
    stem:"Agree, but first tell the patient she is a student and check the patient is content for her to stay.",
    why:"Appropriate, but not ideal. Seeking the patient's agreement is right and is better than simply complying. It is still not ideal, because consent from the patient does not make an untrained student a chaperone." },

  { id:"sjt19c", s:"s19", fmt:"appropriate", ans:2,
    stem:"Agree without comment, because the nurse asked and the patient is already waiting.",
    why:"Inappropriate, but not awful. She is trying to be helpful under time pressure and no harm may follow. But she is taking on a safeguarding role she is not trained for, and the patient is entitled to a proper chaperone." },

  { id:"sjt19d", s:"s19", fmt:"appropriate", ans:1,
    stem:"Say she would rather not and leave it to the nurse to find someone else.",
    why:"Appropriate, but not ideal. Declining something outside her competence is reasonable and she is not obliged to explain herself. It is not ideal because a brief reason would have helped the nurse solve the problem faster." },

  { id:"sjt20a", s:"s20", fmt:"important", ans:0,
    stem:"Whether Sean understands what the patient is being asked to consent to.",
    why:"Very important. Witnessing a signature carries a meaning, and putting his name to a document he does not understand is not something he can defend afterwards." },

  { id:"sjt20b", s:"s20", fmt:"important", ans:0,
    stem:"Whether the clinician has already answered the patient's questions about the procedure.",
    why:"Very important. Valid consent depends on the patient being properly informed. If that conversation has not happened, the form is the least of the problems." },

  { id:"sjt20c", s:"s20", fmt:"important", ans:1,
    stem:"Whether hospital policy allows a medical student to witness a consent form.",
    why:"Important. Local policy governs what he may do and he should know it. It is not the whole answer, though, because even where policy permits it he still should not witness something he does not understand." },

  { id:"sjt20d", s:"s20", fmt:"important", ans:3,
    stem:"Whether declining will hold up the registrar's list.",
    why:"Not important at all. Pressure on the timetable is real but it cannot justify putting his name to a consent process he cannot vouch for. Convenience never outranks consent." },

  { id:"sjt21a", s:"s21", fmt:"important", ans:0,
    stem:"Whether she has told the placement supervisor as soon as she knew.",
    why:"Very important. Early warning is the one thing that lets the team adjust. It is also the part entirely within her control." },

  { id:"sjt21b", s:"s21", fmt:"important", ans:1,
    stem:"Whether her absence leaves a clinic short of staff.",
    why:"Important. It affects how disruptive the delay is and how urgently she needs to let people know, though it does not change what she should do." },

  { id:"sjt21c", s:"s21", fmt:"important", ans:2,
    stem:"Whether the delay was genuinely outside her control.",
    why:"Of minor importance. It bears a little on how the lateness should be viewed afterwards, but it changes nothing about what she should do now, and a good explanation is not a substitute for telling someone." },

  { id:"sjt21d", s:"s21", fmt:"important", ans:3,
    stem:"Whether other students on the placement have been late before.",
    why:"Not important at all. What others have done has no bearing on her own responsibility. Comparisons with colleagues are almost always irrelevant in this section." },

  { id:"sjt22a", s:"s22", fmt:"important", ans:1,
    stem:"Whether the hospital has a policy on accepting gifts from patients.",
    why:"Important. Most organisations do have one, often with a value threshold and a register, and following it protects both of them. It guides the decision without settling it on its own." },

  { id:"sjt22b", s:"s22", fmt:"important", ans:1,
    stem:"Whether the patient is still under the team's care.",
    why:"Important. A gift from someone whose ongoing treatment could be influenced is a different matter from a farewell present at the end of an episode of care." },

  { id:"sjt22c", s:"s22", fmt:"important", ans:2,
    stem:"The monetary value of the gift.",
    why:"Of minor importance. Value matters at the margins and policies often set a threshold, but a small token and an expensive present raise the same question about the relationship, just to different degrees." },

  { id:"sjt22d", s:"s22", fmt:"important", ans:2,
    stem:"Whether refusing would cause offence.",
    why:"Of minor importance. Worth a thought, because a blunt refusal can hurt someone expressing genuine gratitude, and there are graceful ways to decline. It does not determine whether accepting is appropriate." }
];
