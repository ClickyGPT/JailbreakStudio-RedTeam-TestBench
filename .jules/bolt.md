## 2025-01-24 - [Unnecessary Re-renders from Mouse Tracking]
**Learning:** Updating React state on every `mousemove` event in a top-level component (like `App.tsx`) causes the entire application to re-render, leading to significant performance degradation, especially in complex applications.
**Action:** Use CSS variables or direct DOM manipulation via refs for high-frequency updates like mouse position to avoid React's reconciliation cycle.

## 2025-02-13 - [Decoupling Results from Live Typing]
**Learning:** Passing live typing state (like a `prompt` string) to non-input components causes them to re-render on every keystroke. Including the captured prompt *within* the result object allows dependent components to render based on the stable result state instead of the high-frequency input state.
**Action:** Always include the input context in result objects (e.g., `SimulationResult`) and use that context in result-display components to decouple them from the active composer state.
