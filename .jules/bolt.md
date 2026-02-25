## 2025-01-24 - [Unnecessary Re-renders from Mouse Tracking]
**Learning:** Updating React state on every `mousemove` event in a top-level component (like `App.tsx`) causes the entire application to re-render, leading to significant performance degradation, especially in complex applications.
**Action:** Use CSS variables or direct DOM manipulation via refs for high-frequency updates like mouse position to avoid React's reconciliation cycle.

## 2026-02-25 - Decoupling Simulation Results from Live Prompt State
**Learning:** Passing a live prompt string as a prop to a complex result panel causes unnecessary re-renders on every keystroke. Additionally, artificial delays used for "dramatic effect" hinder perceived performance and real-world efficiency.
**Action:** Store the specific prompt used for a simulation within the result object. This decouples the results view from the input state, allowing for React.memo optimization and removal of artificial UI delays.
