## 2025-01-24 - [Unnecessary Re-renders from Mouse Tracking]
**Learning:** Updating React state on every `mousemove` event in a top-level component (like `App.tsx`) causes the entire application to re-render, leading to significant performance degradation, especially in complex applications.
**Action:** Use CSS variables or direct DOM manipulation via refs for high-frequency updates like mouse position to avoid React's reconciliation cycle.

## 2026-03-17 - [Keystroke-driven Re-render Bottleneck]
**Learning:** Passing top-level state (like a live prompt string) as a prop to complex sibling components (like a results panel) causes expensive re-renders on every single keystroke.
**Action:** Decouple the secondary components from live state by bundling the necessary snapshot (e.g., the prompt that triggered the test) into the result object, and use stable callback references (refs + useLayoutEffect) to prevent child component updates during high-frequency input.

## 2026-03-17 - [Redundant Mount-time Re-renders from State Sync]
**Learning:** Initializing React state with a default and then immediately updating it in `useEffect` to sync with external sources (like URL hash or localStorage) causes a redundant and expensive second render cycle on mount. Using `useState` to store a DOM element reference (via a callback ref) also triggers a re-render when the element mounts.
**Action:** Use lazy state initialization (`useState(() => ... )`) and module-level constants to compute the initial state from external sources before the first render. Use `useRef` for DOM element references that don't need to trigger UI updates when they are established. Ensure module-level constants are SSR-safe with `typeof window !== 'undefined'` checks.
