## 2025-01-24 - [Unnecessary Re-renders from Mouse Tracking]
**Learning:** Updating React state on every `mousemove` event in a top-level component (like `App.tsx`) causes the entire application to re-render, leading to significant performance degradation, especially in complex applications.
**Action:** Use CSS variables or direct DOM manipulation via refs for high-frequency updates like mouse position to avoid React's reconciliation cycle.

## 2025-01-30 - [Artificial Delays and Prop-Drilling Induced Re-renders]
**Learning:** Found artificial `setTimeout` delays used for "dramatic effect" which directly impact perceived performance. Additionally, passing high-frequency state (like a live text prompt) down to complex result panels causes unnecessary re-render pressure, even if memoized.
**Action:** Remove artificial UI delays. Decouple results from live input state by capturing the state at the time of the action and including it in the result object.
