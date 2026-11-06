> Historical review. Findings were addressed; see [final validation](03-final-validation.md).

# Adversarial review of the interactive study guide

Reviewed the seven generated HTML pages, their JavaScript and CSS, the concept and practice data, and local navigation. The review used Chromium through Playwright at a 375-pixel mobile width and inspected the underlying educational examples. Download documents were still being generated, so this report does not certify PDF or Word pagination.

## Findings to fix

1. **The third mock promises a missing map return that its assigned fragment does not contain.** In `content/practice.json`, mock `m03` requires repairing a missing map return and its rubric awards evidence for that repair. Its debugging checkpoint refers to exercise `e12`, whose map already returns an element correctly. The observable consequence is that a learner cannot demonstrate that rubric item from the assigned broken code. Add `e02` to the checkpoint and solution references, or remove the missing-return criterion. This is a content alignment defect of medium priority.
2. **Rubric inputs can visibly disagree with the reported score.** In `assets/app.js`, the `.rubric` handler clamps only its local calculation. Entering `99` leaves `99` visible in a criterion worth two points while the total shows `2 / 10`; entering `1.5` also produces a fractional score despite the number input's default whole-number step. Normalize the visible value to the supported range and step on change, or display an explicit validation message. This is a low-priority interaction defect.
3. **The compact callback example encourages a repeated literal ID.** The cheat sheet's callback entry illustrates `onAdd({ id: 'a', name, popular })` without explaining ID creation there. Repeated use can create duplicate keys, undermining the list-identity lesson. Prefer a draft callback, with the parent assigning an ID, or call `onAdd(item)` and say that the item already has a unique stable ID. This is a low-priority teaching defect.
4. **Study-plan duration formatting appends a unit to a non-duration.** The overview renders `Overnight min` in both study-plan tables. Append `min` only to timed blocks, or store display-ready duration labels. This is a low-priority editorial defect.

## Completion checks still required

The review observed links to three PDFs, the complete ZIP, and `practice/README.md` before those targets existed. This was expected during generation, rather than evidence that they will be missing from the delivered kit. Recheck all local links after document generation and packaging. Keep build tools, dependency folders, private source extraction, and QA intermediates outside the downloadable kit.

## Properties checked successfully

- All seven pages loaded without JavaScript errors. No broken HTML fragment targets or duplicate element IDs were found. No document-level horizontal overflow appeared at 375 pixels.
- The map lab returned `[4, 8, 12]` for both valid bodies and three `undefined` values for the missing-return body.
- The state queue lab produced 1 for two replacements, 2 for two updaters, and 2 for replacement followed by updater. Its trace correctly retained the old handler's snapshot of zero.
- The callback lab rejected whitespace-only input, appended a valid item, and reset correctly. HTML-like input was displayed as text rather than interpreted as markup.
- The effect lab distinguished unchanged dependencies, cleanup before replacement setup, unmount cleanup, and the optional development Strict Mode check.
- The Promise lab produced A then B then fulfillment or rejection output, followed by finalization. The run button prevented overlapping runs.
- Exercise search correctly displayed an empty state for no matches, and the Essential filter displayed nine matching exercises. The timer paused after elapsed time and reset to 25 minutes.
- Public HTML, content JSON, asset sources, practice sources, and review notes contained no private student identity, private correspondence filename, or disallowed individualized assessment framing in the targeted scan.
- The concept coverage map accounts for all ten supplied decks. It distinguishes actual lecture topics from extensions such as networking, persistent storage, navigation, and async/await. It correctly teaches both setter forms, object-return syntax, type erasure, stable keys, and effect cleanup.

The pages use explain-and-reveal checks rather than automatically graded code execution. That boundary is stated clearly: browser labs model the concepts, while real component practice belongs in a React Native environment. The practice questions and scoring are labeled original self-study materials.

Verdict: needs minor corrections and final download verification. No fundamental technical error was found in the exercised lab traces or complete example solutions during this review.
