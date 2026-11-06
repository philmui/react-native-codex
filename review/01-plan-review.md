> Historical review. Findings were addressed; see [final validation](03-final-validation.md).

# Adversarial review of the study plan

Reviewed the technical scope of all ten supplied lecture decks and the proposed learning activities. This review tests teaching quality and correctness rather than predicting official assessment content.

1. **Teach both setter forms correctly.** Lecture 5a slide 10 and React's API support direct values and updater functions. A malformed updater can be repaired by returning a new array. Teach `setMenu(previous => [...previous, item])` and explain both alternatives.
2. **Label original practice clearly.** Use 25-minute original practice interviews and identify their scoring as a self-study rubric. The code-bearing cheat sheet and answer key support studying; they are not statements of course assessment policy.
3. **Preserve all-deck coverage while building foundations first.** Begin with arrow functions, map returns, immutable arrays, callbacks, and TypeScript inference. Coverage also requires core components, styles, the box model, nested Flexbox, modules, state timing, hooks, effects, timers, and Promises. Real fetch, navigation, persistence, and async/await are extensions rather than supplied-deck essentials.
4. **Correct simplified technical claims.** Empty effect dependencies do not mean exactly one setup in every environment: development Strict Mode may run an extra setup-cleanup cycle. Mutating an object and supplying the same reference is unreliable for rendering. Types are erased rather than acting as runtime validators. Arrow functions can return object expressions with parentheses. Stable keys belong on the outermost mapped sibling.
5. **Prevent passive recognition from masquerading as readiness.** Hidden answers and checkboxes alone are insufficient. Require initial predictions, timed attempts before hints, error explanation, reconstruction after closing the answer, and a transfer task with changed data and requirements. Track hint dependence separately from correctness.
6. **Keep the study guide general.** Exclude private identities, correspondence, personal performance, and individual assessment logistics. Ground prioritization in the dependencies between technical concepts.
7. **Make examples reproducible and scoped.** Distinguish full App.tsx files from fragments. Test the complete integrated app against React Native types. Keep offline examples independent of credentials, remote images, or unpredictable services. Clearly state that browser concept labs simulate semantics and do not execute React Native.
8. **Verify the artifacts, not only their generation.** Check actual link targets, HTML keyboard behavior, mobile overflow, answer reveals, copy controls, print output, DOCX pagination, and PDF legibility. Record unresolved limitations honestly.

Verdict: proceed after incorporating these constraints. The planned combination of concepts, original practice, timed reconstruction, and transfer exercises provides several ways to expose and repair misunderstanding.
