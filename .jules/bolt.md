## 2025-01-24 - [Unnecessary Re-renders from Mouse Tracking]
**Learning:** Updating React state on every `mousemove` event in a top-level component (like `App.tsx`) causes the entire application to re-render, leading to significant performance degradation, especially in complex applications.
**Action:** Use CSS variables or direct DOM manipulation via refs for high-frequency updates like mouse position to avoid React's reconciliation cycle.

## 2025-01-24 - Decoupling Results from Live State
**Learning:** Passing live input state to complex sibling components causes unnecessary re-renders during every keystroke. Removing artificial delays significantly improves perceived performance.
**Action:** Use a "staged state" (e.g., activePrompt) to decouple results display from live input state, and audit services for artificial timeouts.
