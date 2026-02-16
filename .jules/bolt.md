## 2025-01-24 - [Unnecessary Re-renders from Mouse Tracking]
**Learning:** Updating React state on every `mousemove` event in a top-level component (like `App.tsx`) causes the entire application to re-render, leading to significant performance degradation, especially in complex applications.
**Action:** Use CSS variables or direct DOM manipulation via refs for high-frequency updates like mouse position to avoid React's reconciliation cycle.

## 2025-05-15 - Decoupling Result View from Editor State
**Learning:** Passing live editor state (e.g., `currentPrompt`) to result display components causes expensive, unnecessary re-renders on every keystroke.
**Action:** Snapshot the input state into the result object at execution time. This allows the results panel to remain stable while the user continues editing.
