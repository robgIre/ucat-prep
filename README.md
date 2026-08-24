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
- **154 practice questions** — 32 Verbal Reasoning across 8 passages, 30 Decision Making covering
  all six question types, 36 Quantitative Reasoning, 56 Situational Judgement across 14 scenarios.
  Every one has a worked explanation that teaches the method, not just the answer.
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

The single most valuable resource is the official one, and it is free:

- [Four full practice tests](https://www.ucat.ac.uk/prepare/practice-tests/) — save these for the last two weeks
- [Question tutorials](https://www.ucat.ac.uk/prepare/question-tutorials/)
- [Question banks](https://www.ucat.ac.uk/prepare/preparation-resources/)
- [Tour tutorial and test tools](https://www.ucat.ac.uk/prepare/test-tools/)

The UCAT Consortium states that paid preparation courses are unnecessary and does not endorse them.

The estimated scaled score is a rough linear mapping from percentage correct. UCAT does not publish
its scaling, so treat the number as a way of tracking movement over time, not as a predicted result.

## Files

```
index.html    app shell, styles, all UI logic
strategies.js format facts, strategy library, 4-week plan
bank-vr.js    Verbal Reasoning passages and questions
bank-dm.js    Decision Making questions
bank-qr.js    Quantitative Reasoning data sets and questions
bank-sjt.js   Situational Judgement scenarios and questions
sw.js         service worker, network-first so updates land immediately
```

No build step and no dependencies. Open `index.html` and it runs.
