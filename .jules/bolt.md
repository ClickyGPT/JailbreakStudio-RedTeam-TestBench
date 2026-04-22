## 2025-01-24 - [Unnecessary Re-renders from Mouse Tracking]
**Learning:** Updating React state on every `mousemove` event in a top-level component (like `App.tsx`) causes the entire application to re-render, leading to significant performance degradation, especially in complex applications.
**Action:** Use CSS variables or direct DOM manipulation via refs for high-frequency updates like mouse position to avoid React's reconciliation cycle.

## 2026-03-17 - [Keystroke-driven Re-render Bottleneck]
**Learning:** Passing top-level state (like a live prompt string) as a prop to complex sibling components (like a results panel) causes expensive re-renders on every single keystroke.
**Action:** Decouple the secondary components from live state by bundling the necessary snapshot (e.g., the prompt that triggered the test) into the result object, and use stable callback references (refs + useLayoutEffect) to prevent child component updates during high-frequency input.

## 2026-03-20 - [Regex vs Array.some for Multi-Pattern Matching]
**Learning:** Using `Array.some` with `string.includes` for multiple keyword detection is highly dependent on the position of the match. While it can be faster for early matches, it degrades to O(N*M) in the worst case (no match). A pre-compiled `RegExp` with alternation provides consistent O(N) performance and avoids redundant string allocations from `toLowerCase()` calls.
**Action:** Use pre-compiled `RegExp` for keyword filtering in hot paths, especially when processing large text payloads.
