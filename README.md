# UCAT Prep

A revision app for the **UCAT**, built for the 2026 test cycle.

**Live:** https://robgire.github.io/ucat-prep/

## Why this exists

The UCAT is an aptitude test, but it is a *coachable* one. Almost nobody scores badly because they
could not do the questions. They score badly because they ran out of time, did not recognise the
question type, or fell for a trap that recurs in every sitting. This app drills those three things.

## The format it targets

Verified against [ucat.ac.uk](https://www.ucat.ac.uk/about-ucat/test-format/) for the 2026 cycle.

| Subtest | Questions | Time | Per question | Scoring |
|---|---|---|---|---|
| Verbal Reasoning | 44 | 22 min | 30s | 300–900 |
| Decision Making | 35 | 37 min | 63s | 300–900 |
| Quantitative Reasoning | 36 | 26 min | 43s | 300–900 |
| Situational Judgement | 69 | 26 min | 23s | Band 1–4 |

Total 900–2700 plus an SJT band. No negative marking.

> **Abstract Reasoning was removed from the UCAT in 2025.** Any prep resource that still
> includes it is out of date, and its timings for the other subtests will be wrong too.

## What's in it

- **Strategy library** — pace targets and halfway checkpoints per subtest, every question type
  with its specific method and its recurring traps, and the ten SJT principles.
- **250 written questions** — 96 Verbal Reasoning across 16 passages, 30 Decision Making covering
  all six question types, 36 Quantitative Reasoning, 88 Situational Judgement across 22 scenarios.
  Every one has a worked explanation that teaches the method, not just the answer.
- **Multi-source Verbal Reasoning** — a third of VR questions cannot be answered from one sentence.
  They require combining two separate statements, which is where the real test does its work.
  Full sections are an even split of single-lookup and multi-source items.
- **Unlimited generated questions** — 22 Quantitative Reasoning and 6 Decision Making generators
  build fresh items on demand with different numbers every time, so there is nothing to memorise.
  Around 30% are multi-step, requiring a derived figure before the question can be answered.
  Distractors are drawn from real error modes and explanations quote the actual figures.
- **Full-length sections for all four subtests** — the true question count and the true clock:
  VR 44Q/22min using 11 whole passages, DM 35Q/37min, QR 36Q/26min, SJT 69Q/26min.
- **Evidence highlighting** — reveal a Verbal Reasoning answer and the sentence that settles it is
  highlighted in the passage: green for True/False, amber for Can't Tell with a note explaining why
  the passage does not settle it.
- **Drill mode** — untimed, filtered by question type, explanation after every question.
- **Timed sections** — real per-question pace, countdown that goes amber at 5 minutes and red at 1,
  flag and navigator, `Alt+N` / `Alt+P` / `Alt+F` shortcuts, and a basic calculator available only
  in DM and QR, exactly as in the live test.
- **Mental maths sprint** — 60 seconds of percentages, ratios, squares and reverse percentages.
- **Four-week plan** — day by day to the exam, built around the four official mocks, tapering
  deliberately over the final 48 hours.
- **Progress tracking** — accuracy per question type, pace against the exam rate, and an estimated
  scaled score placed against the real 2025 decile table.

Works offline, installable to a phone home screen. All progress is stored locally in the browser;
nothing is uploaded anywhere.

## Important

The practice questions here are **original material written in UCAT style**. They are not official
UCAT questions and no official question bank was copied.

The single most valuable resource is the official one, and it is free, with no login:

- [15 question banks and 4 full practice tests](https://www.ucat.ac.uk/prepare/practice-tests/) —
  around 900 questions, every one with an **Explain Answer** rationale. Bank progress is not saved,
  so keep a written list, and use a laptop rather than a phone. Save the 4 practice tests for the last two weeks
- [Question tutorials](https://www.ucat.ac.uk/prepare/question-tutorials/)
- [Question banks](https://www.ucat.ac.uk/prepare/preparation-resources/)
- [Tour tutorial and test tools](https://www.ucat.ac.uk/prepare/test-tools/)

The UCAT Consortium states that paid preparation courses are unnecessary and does not endorse them.

The estimated scaled score is a rough linear mapping from percentage correct. UCAT does not publish
its scaling, so treat the number as a way of tracking movement over time, not as a predicted result.

**On difficulty.** These questions are written to the official structural spec, but they have never
been calibrated against real UCAT items, because the official questions are only viewable inside
Pearson's test player. The likely direction of error is that they are slightly easier than the real
thing. Compare your percentage here against the official question banks: if you score notably higher
here, believe the official number.

## Files

```
index.html    app shell, styles, all UI logic
generators.js procedural question generators for QR and DM
strategies.js format facts, strategy library, 4-week plan
bank-vr.js    Verbal Reasoning passages and questions
bank-dm.js    Decision Making questions
bank-qr.js    Quantitative Reasoning data sets and questions
bank-sjt.js   Situational Judgement scenarios and questions
sw.js         service worker, network-first so updates land immediately
```

No build step and no dependencies. Open `index.html` and it runs.
