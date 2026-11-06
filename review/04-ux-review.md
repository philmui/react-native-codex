# Self-directed study hub review

Reviewed 6 November 2026. This record covers the navigation and learning-experience revision. Earlier technical coverage, complete example compilation, and original document review are recorded in `03-final-validation.md`.

## Design decision

The hub now begins with five core skills instead of a timetable. A learner chooses a skill and independently chooses Understand, Example, Try it, or Self-check. Only the selected topic and view appear. The five skills retain emphasis on arrow-function returns, map, immutable arrays, callback props, and TypeScript inference.

Full concepts, visual labs, exercises, mock interviews, and the cheat sheet remain directly accessible. Search includes technical lesson content as well as titles. The day plan is collapsed near the bottom. Mock timing, pacing, and scoring are optional. The printable guide begins with an overview and contents, with the detailed schedule moved to an optional appendix.

## Adversarial findings and fixes

| Review finding | Resolution |
| --- | --- |
| Detailed clock rows and strict pacing created too much pressure on arrival. | Replaced the initial schedule with a compact skill explorer. Kept the schedule in an optional disclosure. |
| The corresponding Concept lesson was missing from searches for TypeScript, Promise, useEffect, and map. | Expanded the search index and ranked topic identifiers and titles. Independent recheck confirmed the relevant lessons appear. |
| A direct topic/view URL did not save the displayed place before navigating away. | Save validated initial topic and view without rewriting the URL or forcing a scroll. The round trip through a lesson now preserves the selected view. |
| A long API name overflowed at 320 pixels with large text. | Allow long technical words to wrap; rechecked all seven pages. |
| Array-state example did not explicitly identify the event-handler context. | State the context directly, avoiding an unconditional setter call in the component body. |
| Callback challenge answer did not show all requested state ownership. | Provide a JavaScript + JSX example with parent array state, child draft state, a callback prop, and a press handler. Link to the typed exercise. |
| Inference quiz relied on strict TypeScript settings without stating them first. | Put the strict-checking assumption in the question. |
| Two concept headings were separated from their first objectives in the revised printable guide. | Keep module metadata with the next paragraph using correctly ordered Word XML. Independent visual recheck confirmed both fixes and all 17 changed pages. |

## Browser verification

Automated and independent browser checks covered:

- All five topics and all four learning views; one active topic and panel at a time.
- Every quiz option, including incorrect-answer explanations and no-selection feedback.
- Guided example step bounds, highlighted lines, and exact copied source text.
- Tab arrow keys, Home and End, radio navigation, native mobile selection, and focus after chapter jumps.
- Topic and view restoration, direct URL restoration, reading-size persistence, and scratchpad persistence.
- Search matches, no-results feedback, clearing, Escape, and user input treated as text.
- All seven pages at 320, 390, 768, and 1440 pixels with large text, with no horizontal page overflow. Wider diagrams scroll inside their own containers.
- Default collapsed schedule and timer, schedule deep links, and timer start, pause, and reset.
- Regression checks for all six existing visual labs and exercise filters.
- Unique HTML IDs, local file links, local anchors, and anonymous wording.
- JavaScript-disabled direct links to complete lessons and practice.

No page JavaScript errors occurred in the completed checks. The new callback JSX example also passed a syntax transformation with the course installation of TypeScript. It is a JavaScript teaching example; the linked E07 exercise provides TypeScript contracts.

The tab implementation follows the keyboard and ARIA relationships described in the [WAI-ARIA tabs pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/). This is not a claim of full accessibility conformance. Screen-reader operation, every browser engine, and native-device execution have not been directly tested.

## Document and package verification

The revised concept guide and practice workbook were rendered from their Word files and inspected. The concept guide contains 43 pages and the workbook contains 35. The four-page cheat sheet and two-page optional plan remain available. Both PDF and editable Word versions are linked from the site.

The downloadable ZIP is rebuilt from the delivered files. It excludes private source notes, temporary authoring files, browser profiles, and the ZIP itself. The public materials are scanned for identifying names and prohibited assessment framing before packaging.
