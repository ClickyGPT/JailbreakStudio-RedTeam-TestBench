## 2025-01-24 - [Unnecessary Re-renders from Mouse Tracking]
**Learning:** Updating React state on every `mousemove` event in a top-level component (like `App.tsx`) causes the entire application to re-render, leading to significant performance degradation, especially in complex applications.
**Action:** Use CSS variables or direct DOM manipulation via refs for high-frequency updates like mouse position to avoid React's reconciliation cycle.

## 2025-05-15 - [Artificial Delays and Display State Decoupling]
**Learning:** Artificial UI delays (e.g., setTimeout for "dramatic effect") directly harm UX without providing value. Additionally, passing high-frequency input state (like a live prompt) to complex sibling components (like a simulation panel) causes unnecessary re-renders; it's better to capture the state at the moment of action and include it in the result object.
**Action:** Always identify and remove artificial sleep calls. Decouple results from live input by capturing the relevant snapshot when the operation starts.
