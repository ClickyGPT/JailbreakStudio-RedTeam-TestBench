## 2025-01-24 - [Unnecessary Re-renders from Mouse Tracking]
**Learning:** Updating React state on every `mousemove` event in a top-level component (like `App.tsx`) causes the entire application to re-render, leading to significant performance degradation, especially in complex applications.
**Action:** Use CSS variables or direct DOM manipulation via refs for high-frequency updates like mouse position to avoid React's reconciliation cycle.

## 2026-03-17 - [Keystroke-driven Re-render Bottleneck]
**Learning:** Passing top-level state (like a live prompt string) as a prop to complex sibling components (like a results panel) causes expensive re-renders on every single keystroke.
**Action:** Decouple the secondary components from live state by bundling the necessary snapshot (e.g., the prompt that triggered the test) into the result object, and use stable callback references (refs + useLayoutEffect) to prevent child component updates during high-frequency input.

## 2026-03-17 - [Redundant String Matching in Loops]
**Learning:** Performing `toLowerCase()` on a large source string inside a loop (e.g., matching multiple keywords) is a significant computational bottleneck as it creates a new string allocation for every iteration.
**Action:** Perform a single-pass `toLowerCase()` on the source string before entering the loop, and ensure all comparison keywords are pre-lowercased in the constants definition.

## 2026-03-17 - [Unnecessary Re-render for Prop-based State Reset]
**Learning:** Using `useEffect` to clear or reset component state when a prop changes (e.g., clearing 'analysis' when 'result' changes) triggers an extra, redundant re-render cycle (render with old state -> effect -> set state -> second render).
**Action:** Implement a render-phase check by comparing the current prop to a value stored in state (e.g., `prevResult`). This allows React to update the state immediately during the same render pass, skipping the redundant intermediate render.
