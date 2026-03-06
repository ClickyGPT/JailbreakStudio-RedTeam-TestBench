## 2025-01-24 - [Unnecessary Re-renders from Mouse Tracking]
**Learning:** Updating React state on every `mousemove` event in a top-level component (like `App.tsx`) causes the entire application to re-render, leading to significant performance degradation, especially in complex applications.
**Action:** Use CSS variables or direct DOM manipulation via refs for high-frequency updates like mouse position to avoid React's reconciliation cycle.

## 2025-01-24 - [Stable Callbacks for High-Frequency Input]
**Learning:** Using the `useRef` + `useEffect` pattern to synchronize state values into a stable reference allows memoized child components to receive stable callback props. This prevents them from re-rendering on every keystroke in a parent's state-driven text input.
**Action:** For performance-critical components with frequent state updates (like real-time typing), wrap callbacks that depend on that state in stable references instead of including the state in the dependency array of `useCallback`.
