## 2025-01-24 - [Unnecessary Re-renders from Mouse Tracking]
**Learning:** Updating React state on every `mousemove` event in a top-level component (like `App.tsx`) causes the entire application to re-render, leading to significant performance degradation, especially in complex applications.
**Action:** Use CSS variables or direct DOM manipulation via refs for high-frequency updates like mouse position to avoid React's reconciliation cycle.

## 2025-01-24 - [Decoupling Input State from Result Panels]
**Learning:** Prop-drilling live input state (like a text editor's value) into heavy sibling components (like a results panel) triggers unnecessary re-renders on every keystroke. Including the input data directly in the result object allows the panel to render independently of the active input state.
**Action:** Store the specific input data used for an asynchronous operation within the result object returned by that operation. This decouples the display of results from the current (and potentially changing) input state.
