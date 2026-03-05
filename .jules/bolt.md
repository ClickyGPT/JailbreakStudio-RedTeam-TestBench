## 2025-01-24 - [Unnecessary Re-renders from Mouse Tracking]
**Learning:** Updating React state on every `mousemove` event in a top-level component (like `App.tsx`) causes the entire application to re-render, leading to significant performance degradation, especially in complex applications.
**Action:** Use CSS variables or direct DOM manipulation via refs for high-frequency updates like mouse position to avoid React's reconciliation cycle.

## 2025-05-14 - Decoupling Results from Live State
**Learning:** In highly interactive apps with high-frequency state updates (like a text editor), passing the live state to a results panel causes unnecessary app-wide re-renders on every keystroke. Capturing the state at the moment of action and passing it through the service layer to the result object allows for efficient decoupling.
**Action:** Always include the triggering input in the result object and use refs for stable callback references to avoid re-rendering memoized components.
