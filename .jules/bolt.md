## 2025-01-24 - [Unnecessary Re-renders from Mouse Tracking]
**Learning:** Updating React state on every `mousemove` event in a top-level component (like `App.tsx`) causes the entire application to re-render, leading to significant performance degradation, especially in complex applications.
**Action:** Use CSS variables or direct DOM manipulation via refs for high-frequency updates like mouse position to avoid React's reconciliation cycle.

## 2025-01-24 - [Decoupling Results Panel from Live Input]
**Learning:** Passing "live" state (e.g., the content of a textarea) as a prop to a complex sibling component (like a results panel) causes that sibling to re-render on every keystroke, even if it only needs the data when an action is triggered.
**Action:** Capture the required state within the result object itself (e.g., adding `prompt` to the `SimulationResult` type) and pass the result object to the sibling. This allows the sibling to be wrapped in `React.memo` and only re-render when a new result is generated, bypassing thousands of unnecessary renders during user typing.
