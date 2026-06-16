## 2025-01-24 - [Unnecessary Re-renders from Mouse Tracking]
**Learning:** Updating React state on every `mousemove` event in a top-level component (like `App.tsx`) causes the entire application to re-render, leading to significant performance degradation, especially in complex applications.
**Action:** Use CSS variables or direct DOM manipulation via refs for high-frequency updates like mouse position to avoid React's reconciliation cycle.

## 2026-03-17 - [Keystroke-driven Re-render Bottleneck]
**Learning:** Passing top-level state (like a live prompt string) as a prop to complex sibling components (like a results panel) causes expensive re-renders on every single keystroke.
**Action:** Decouple the secondary components from live state by bundling the necessary snapshot (e.g., the prompt that triggered the test) into the result object, and use stable callback references (refs + useLayoutEffect) to prevent child component updates during high-frequency input.

## 2025-07-15 - [Redundant Render Cycles on Mount]
**Learning:** Loading initial state from external sources (like URL hashes) inside a `useEffect` triggers an unnecessary second render cycle immediately after mounting.
**Action:** Use lazy initialization in `useState` to derive state from external sources during the initial render. If multiple state hooks depend on the same expensive parse operation, cache the result temporarily during initialization to avoid redundant computation.

## 2025-07-15 - [Isolating High-Frequency Visuals]
**Learning:** Purely decorative elements that update frequently (e.g., a spotlight following the cursor) can trigger expensive DOM reconciliation in the parent component if not properly isolated, even when using CSS variables.
**Action:** Extract high-frequency visual components into `React.memo` components. This ensures that parent state updates (like typing) don't force React to diff the decorative DOM tree.
