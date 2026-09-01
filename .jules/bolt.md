## 2025-01-24 - [Unnecessary Re-renders from Mouse Tracking]
**Learning:** Updating React state on every `mousemove` event in a top-level component (like `App.tsx`) causes the entire application to re-render, leading to significant performance degradation, especially in complex applications.
**Action:** Use CSS variables or direct DOM manipulation via refs for high-frequency updates like mouse position to avoid React's reconciliation cycle.

## 2026-03-17 - [Keystroke-driven Re-render Bottleneck]
**Learning:** Passing top-level state (like a live prompt string) as a prop to complex sibling components (like a results panel) causes expensive re-renders on every single keystroke.
**Action:** Decouple the secondary components from live state by bundling the necessary snapshot (e.g., the prompt that triggered the test) into the result object, and use stable callback references (refs + useLayoutEffect) to prevent child component updates during high-frequency input.

## 2026-06-20 - [Redundant Renders from Effect-driven State Initialization]
**Learning:** Initializing component state in a `useEffect` hook based on external sources (like URL hash or localStorage) causes an unnecessary second render cycle (first with default state, second with the actual state).
**Action:** Use the "Lazy Initializer" pattern in `useState` to compute the initial state directly during the first render. When multiple `useState` calls depend on the same expensive computation, implement a module-level or window-based cache to ensure the source is parsed only once.
