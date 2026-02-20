## 2025-01-24 - [Unnecessary Re-renders from Mouse Tracking]
**Learning:** Updating React state on every `mousemove` event in a top-level component (like `App.tsx`) causes the entire application to re-render, leading to significant performance degradation, especially in complex applications.
**Action:** Use CSS variables or direct DOM manipulation via refs for high-frequency updates like mouse position to avoid React's reconciliation cycle.

## 2025-05-15 - [Decoupling High-Frequency State from Stable Components]
**Learning:** Passing a high-frequency state (like a live text input) to complex sibling components that only need the state at specific moments (like after a button click) causes significant unnecessary re-renders during interaction.
**Action:** Use a "staged state" or "tested state" pattern where the complex component only receives an update when the specific action (e.g., "Run Test") is triggered, keeping the high-frequency state local to the input component or its immediate parent.
