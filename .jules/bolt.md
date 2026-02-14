## 2025-01-24 - [Unnecessary Re-renders from Mouse Tracking]
**Learning:** Updating React state on every `mousemove` event in a top-level component (like `App.tsx`) causes the entire application to re-render, leading to significant performance degradation, especially in complex applications.
**Action:** Use CSS variables or direct DOM manipulation via refs for high-frequency updates like mouse position to avoid React's reconciliation cycle.

## 2025-05-15 - [Decoupling Input State from Result Components]
**Learning:** Passing a "live" input state (like a prompt being typed) to sibling components that only need the state "at execution time" causes unnecessary re-renders on every keystroke.
**Action:** Capture the input state at the start of the asynchronous task and store it in the result object. This ensures components rendering the result are decoupled from the active editor state.
