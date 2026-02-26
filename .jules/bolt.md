## 2025-01-24 - [Unnecessary Re-renders from Mouse Tracking]
**Learning:** Updating React state on every `mousemove` event in a top-level component (like `App.tsx`) causes the entire application to re-render, leading to significant performance degradation, especially in complex applications.
**Action:** Use CSS variables or direct DOM manipulation via refs for high-frequency updates like mouse position to avoid React's reconciliation cycle.

## 2025-05-15 - [Defensive UI Rendering for Async Results]
**Learning:** Decoupling a result panel from live parent state (to prevent re-renders) requires strict defensive programming (null guards/optional chaining) for the result object, as it will be null during initial load and pending states.
**Action:** Always use optional chaining or early returns when accessing properties of asynchronous result objects in React components to avoid runtime crashes.
