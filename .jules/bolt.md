## 2025-01-24 - [Unnecessary Re-renders from Mouse Tracking]
**Learning:** Updating React state on every `mousemove` event in a top-level component (like `App.tsx`) causes the entire application to re-render, leading to significant performance degradation, especially in complex applications.
**Action:** Use CSS variables or direct DOM manipulation via refs for high-frequency updates like mouse position to avoid React's reconciliation cycle.

## 2025-01-24 - [Decoupling Input from Expensive Siblings]
**Learning:** Passing high-frequency state (like a text input value) directly to complex sibling components can cause "typing lag" because the expensive component re-renders on every keystroke.
**Action:** Use a "staged" state (e.g., `testedPrompt`) that only updates when an action is triggered (like a button click) to decouple the expensive rendering from the input event loop.

## 2025-01-24 - [Removing Artificial UI Delays]
**Learning:** Developers sometimes add `setTimeout` for "dramatic effect" or to simulate processing, which unnecessarily slows down the user experience.
**Action:** Identify and remove artificial delays in critical paths to improve perceived and actual application performance.
