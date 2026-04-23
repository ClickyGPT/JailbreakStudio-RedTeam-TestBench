## 2025-01-24 - [Unnecessary Re-renders from Mouse Tracking]
**Learning:** Updating React state on every `mousemove` event in a top-level component (like `App.tsx`) causes the entire application to re-render, leading to significant performance degradation, especially in complex applications.
**Action:** Use CSS variables or direct DOM manipulation via refs for high-frequency updates like mouse position to avoid React's reconciliation cycle.

## 2026-03-17 - [Keystroke-driven Re-render Bottleneck]
**Learning:** Passing top-level state (like a live prompt string) as a prop to complex sibling components (like a results panel) causes expensive re-renders on every single keystroke.
**Action:** Decouple the secondary components from live state by bundling the necessary snapshot (e.g., the prompt that triggered the test) into the result object, and use stable callback references (refs + useLayoutEffect) to prevent child component updates during high-frequency input.

## 2026-03-17 - [Inefficient String Matching in Loops]
**Learning:** Performing expensive string transformations like `.toLowerCase()` inside a loop (especially on large AI-generated outputs) causes significant CPU overhead that scales with the number of keywords.
**Action:** Pre-lowercase constants/keywords and transform the source string once outside the loop to reduce complexity from O(N*M) to O(N+M). Additionally, use `performance.now()` instead of `Date.now()` for sub-millisecond precision in performance-sensitive metrics.
