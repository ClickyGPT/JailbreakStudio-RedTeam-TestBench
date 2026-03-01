## 2025-01-24 - [Unnecessary Re-renders from Mouse Tracking]
**Learning:** Updating React state on every `mousemove` event in a top-level component (like `App.tsx`) causes the entire application to re-render, leading to significant performance degradation, especially in complex applications.
**Action:** Use CSS variables or direct DOM manipulation via refs for high-frequency updates like mouse position to avoid React's reconciliation cycle.

## 2025-05-15 - [State Decoupling for High-Frequency Input]
**Learning:** Passing live input state to heavy sibling components (like a results panel) causes them to re-render on every keystroke. Snapshotting the input into the result object allows the sibling to remain static until a new action is explicitly triggered.
**Action:** Decouple "triggered" result displays from "live" input state by including the source data in the result payload.
