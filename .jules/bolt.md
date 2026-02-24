## 2025-01-24 - [Unnecessary Re-renders from Mouse Tracking]
**Learning:** Updating React state on every `mousemove` event in a top-level component (like `App.tsx`) causes the entire application to re-render, leading to significant performance degradation, especially in complex applications.
**Action:** Use CSS variables or direct DOM manipulation via refs for high-frequency updates like mouse position to avoid React's reconciliation cycle.

## 2025-05-15 - [Unnecessary Re-renders from Input State Propagation]
**Learning:** Passing live input state (e.g., `prompt`) from a top-level component to its siblings (like `SimulationPanel`) triggers expensive re-renders across the tree on every keystroke, even when the sibling only needs the state once an action is triggered.
**Action:** Store the relevant input state within the action result object itself. This decouples the display of results from the live input state, preventing redundant re-renders and ensuring the UI remains consistent even if the user continues editing.
