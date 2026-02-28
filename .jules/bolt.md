## 2025-01-24 - [Unnecessary Re-renders from Mouse Tracking]
**Learning:** Updating React state on every `mousemove` event in a top-level component (like `App.tsx`) causes the entire application to re-render, leading to significant performance degradation, especially in complex applications.
**Action:** Use CSS variables or direct DOM manipulation via refs for high-frequency updates like mouse position to avoid React's reconciliation cycle.

## 2026-02-28 - [Decoupled Rendering and Real-Time Latency]
**Learning:** Removing artificial UI delays (like setTimeouts for "effect") and replacing them with high-resolution latency measurements (performance.now()) improves perceived speed and provides honest feedback. Storing the source prompt within the result object allows the results panel to remain stable even as the user continues typing in the composer, preventing unnecessary re-renders of complex result views.
**Action:** Always capture the exact input state that triggered an async operation and store it in the resulting state to decouple the view from the live input.
