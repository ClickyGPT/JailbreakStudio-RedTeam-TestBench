## 2025-01-24 - [Unnecessary Re-renders from Mouse Tracking]
**Learning:** Updating React state on every `mousemove` event in a top-level component (like `App.tsx`) causes the entire application to re-render, leading to significant performance degradation, especially in complex applications.
**Action:** Use CSS variables or direct DOM manipulation via refs for high-frequency updates like mouse position to avoid React's reconciliation cycle.

## 2026-03-14 - [Decoupling Results from Input State]
**Learning:** Passing a high-frequency state (like a textarea value) as a prop to a complex sibling component (like a results panel) causes redundant O(n) re-renders during every keystroke.
**Action:** Include the specific input context within the result object returned by the service. This allows the sibling component to be decoupled from the live input state, preventing unnecessary re-renders while maintaining functional requirements like "Analyze" features.
