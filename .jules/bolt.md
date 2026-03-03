## 2025-01-24 - [Unnecessary Re-renders from Mouse Tracking]
**Learning:** Updating React state on every `mousemove` event in a top-level component (like `App.tsx`) causes the entire application to re-render, leading to significant performance degradation, especially in complex applications.
**Action:** Use CSS variables or direct DOM manipulation via refs for high-frequency updates like mouse position to avoid React's reconciliation cycle.

## 2026-03-03 - [Decoupling Components from High-Frequency State]
**Learning:** Passing live input state (e.g., a prompt being typed) as a prop to heavy sibling components causes them to re-render on every keystroke, even if they only need the final value when an action is triggered.
**Action:** Preserve necessary state (like the prompt) within the action's result object and have sibling components read from the result instead of the live state. This decouples the components and eliminates hundreds of unnecessary re-renders during the input phase.
