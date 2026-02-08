## 2025-01-24 - [Unnecessary Re-renders from Mouse Tracking]
**Learning:** Updating React state on every `mousemove` event in a top-level component (like `App.tsx`) causes the entire application to re-render, leading to significant performance degradation, especially in complex applications.
**Action:** Use CSS variables or direct DOM manipulation via refs for high-frequency updates like mouse position to avoid React's reconciliation cycle.

## 2025-05-22 - Decoupling live input from expensive simulation panels
**Learning:** Re-rendering a complex simulation result panel on every keystroke in a sibling composer component causes noticeable input lag.
**Action:** Use a secondary "tested" state that only updates when the user explicitly triggers a simulation/test. Pass this stable state to the result panel to keep it isolated from rapid typing updates.
