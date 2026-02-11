## 2025-01-24 - [Unnecessary Re-renders from Mouse Tracking]
**Learning:** Updating React state on every `mousemove` event in a top-level component (like `App.tsx`) causes the entire application to re-render, leading to significant performance degradation, especially in complex applications.
**Action:** Use CSS variables or direct DOM manipulation via refs for high-frequency updates like mouse position to avoid React's reconciliation cycle.

## 2026-02-11 - [Staged State Pattern for Input Components]
**Learning:** Decoupling a frequently changing input state (like a text prompt) from expensive sibling components (like a result panel) by capturing the state at the moment of action and storing it in the result object significantly reduces unnecessary re-renders during high-frequency input.
**Action:** Use a 'testedPrompt' or 'capturedState' pattern in the result object to keep sibling components static while the user continues to type in the main input field.
