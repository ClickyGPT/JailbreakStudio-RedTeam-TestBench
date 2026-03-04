## 2025-01-24 - [Unnecessary Re-renders from Mouse Tracking]
**Learning:** Updating React state on every `mousemove` event in a top-level component (like `App.tsx`) causes the entire application to re-render, leading to significant performance degradation, especially in complex applications.
**Action:** Use CSS variables or direct DOM manipulation via refs for high-frequency updates like mouse position to avoid React's reconciliation cycle.

## 2025-02-14 - [Input Lag from Prop Drilling and State Updates]
**Learning:** Passing live "keystroke-level" state to complex sibling components (like a results panel) causes massive input lag as the entire UI tree reconciles on every character typed.
**Action:** Decouple components by capturing the "snapshot" of the state (e.g., the prompt) at execution time within the result object, and use refs for stable callback references to prevent parent state updates from triggering child re-renders during high-frequency input.
