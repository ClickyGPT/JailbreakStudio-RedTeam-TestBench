## 2025-01-24 - [Unnecessary Re-renders from Mouse Tracking]
**Learning:** Updating React state on every `mousemove` event in a top-level component (like `App.tsx`) causes the entire application to re-render, leading to significant performance degradation, especially in complex applications.
**Action:** Use CSS variables or direct DOM manipulation via refs for high-frequency updates like mouse position to avoid React's reconciliation cycle.

## 2025-01-24 - [Artificial UI Delays for "Effect"]
**Learning:** Developers sometimes add `setTimeout` calls to simulate "processing time" for dramatic effect. These are purely subtractive to performance and should be the first thing removed during optimization.
**Action:** Identify and remove any hardcoded delays in critical paths that don't serve a functional purpose (like debouncing or throttling).
