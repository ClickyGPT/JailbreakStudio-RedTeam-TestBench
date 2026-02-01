## 2025-01-24 - [Unnecessary Re-renders from Mouse Tracking]
**Learning:** Updating React state on every `mousemove` event in a top-level component (like `App.tsx`) causes the entire application to re-render, leading to significant performance degradation, especially in complex applications.
**Action:** Use CSS variables or direct DOM manipulation via refs for high-frequency updates like mouse position to avoid React's reconciliation cycle.

## 2025-05-15 - [Ref-Based Stabilization for Typing Performance]
**Learning:** In editors where a central state (like a prompt) is updated on every keystroke, passing that state as a prop to many memoized children still causes reconciliation overhead. Stabilizing callbacks and components by using a `useRef` to track the state value allows children to skip re-renders entirely during typing.
**Action:** Pass `promptRef` to secondary components that only need the value on-demand (e.g., for analysis or submission) and stabilize `useCallback` hooks by removing the state dependency and reading from the ref instead.
