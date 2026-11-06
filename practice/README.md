# Run the campus menu example

`MenuApp.tsx` is a complete React Native screen written in TypeScript. It uses React and React Native only. It demonstrates a parent-owned array, controlled inputs, callback props, immutable updates, stable keys, and reusable components.

1. Use the existing course Expo project so its package versions remain consistent.
2. Keep a copy of your current screen before replacing it. In a project with an `App.tsx` entry, copy this example into `App.tsx`. In an Expo Router project, use it as the contents of a screen such as `app/index.tsx` or `src/app/index.tsx`, whichever your project uses. Keep the project's layout and configuration files.
3. From the project directory, run `npx tsc --noEmit` to check types and `npx expo start` to start the development server.
4. Open the app using the course's normal simulator, device, or web workflow. If using Expo Snack, select a compatible TypeScript React Native project and copy the screen there.

The HTML study guide contains conceptual browser demonstrations. Its scratchpads do not execute this TSX file.

## Test the example

- The initial menu contains two items.
- A blank or whitespace-only name cannot be added.
- Add an item with popularity switched on. The trimmed name appears once, the count increases, and the draft resets.
- Add the same display name again. Each item still has a separate ID, so toggling one does not toggle the other.
- Remove an item. The count and list change together.
- Remove every item. The empty-state message appears.
- Add several items one at a time, scroll, and confirm the controls remain usable.

The ID counter is local to this mounted screen; it is an instructional example for one submission per press. If adding several items in one programmatic batch, allocate IDs in a combined state update or use a suitable ID generator. Persistence and multi-user ID coordination are outside this example.

The fixed top padding is deliberately simple. Check safe areas, keyboard behavior, larger text, and scrolling on actual target devices before using the screen in a product. The guide's layout chapter explains these cross-platform considerations.

## Learn from it

Read the requirements in exercise E10 before opening the reference file. Rebuild the app from a blank screen, then compare the event flow and state ownership. Finally change the data model to tasks with a completed flag and explain each adaptation.
