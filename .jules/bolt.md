## 2025-01-24 - [Unnecessary Re-renders from Mouse Tracking]
**Learning:** Updating React state on every `mousemove` event in a top-level component (like `App.tsx`) causes the entire application to re-render, leading to significant performance degradation, especially in complex applications.
**Action:** Use CSS variables or direct DOM manipulation via refs for high-frequency updates like mouse position to avoid React's reconciliation cycle.

## 2025-01-24 - [Stable Callback Pattern for Input-Driven Components]
**Learning:** In applications where a parent manages state for a high-frequency input (like a text editor), passing handlers that depend on that state to memoized child components causes those children to re-render on every keystroke, even if they don't use the state directly.
**Action:** Use a `useRef` and `useLayoutEffect` pattern (Event Handler pattern) to stabilize callback identities. This allows handlers to access the current state without triggering re-renders in memoized children.
