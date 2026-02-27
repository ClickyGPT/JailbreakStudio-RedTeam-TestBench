## 2025-01-24 - [Unnecessary Re-renders from Mouse Tracking]
**Learning:** Updating React state on every `mousemove` event in a top-level component (like `App.tsx`) causes the entire application to re-render, leading to significant performance degradation, especially in complex applications.
**Action:** Use CSS variables or direct DOM manipulation via refs for high-frequency updates like mouse position to avoid React's reconciliation cycle.

## 2025-01-24 - [Decoupling Results from Live Input State]
**Learning:** Passing a live "staged" state (like a typing buffer) to sibling panels that render complex results or trigger expensive AI analysis causes unnecessary re-renders on every keystroke.
**Action:** Update the result data structure to capture the specific input state at the moment of execution. This allows the results panel to render from the static captured state, decoupling it from the live input buffer and preventing redundant reconciliation.
