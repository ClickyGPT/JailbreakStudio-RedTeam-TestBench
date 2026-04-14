## 2025-01-24 - [Unnecessary Re-renders from Mouse Tracking]
**Learning:** Updating React state on every `mousemove` event in a top-level component (like `App.tsx`) causes the entire application to re-render, leading to significant performance degradation, especially in complex applications.
**Action:** Use CSS variables or direct DOM manipulation via refs for high-frequency updates like mouse position to avoid React's reconciliation cycle.

## 2026-03-17 - [Keystroke-driven Re-render Bottleneck]
**Learning:** Passing top-level state (like a live prompt string) as a prop to complex sibling components (like a results panel) causes expensive re-renders on every single keystroke.
**Action:** Decouple the secondary components from live state by bundling the necessary snapshot (e.g., the prompt that triggered the test) into the result object, and use stable callback references (refs + useLayoutEffect) to prevent child component updates during high-frequency input.

## 2026-03-24 - [Hoisting String Transformations in Loops]
**Learning:** Performing string transformations like `.toLowerCase()` inside a loop (especially against a long source text and a list of keywords) causes $O(N \times L)$ overhead. Benchmarks showed that hoisting the transformation and pre-lowercasing constants resulted in a ~9x speedup (~146ms down to ~16ms for 10k iterations).
**Action:** Always hoist string transformations out of loops and ensure static keyword lists are pre-processed (lowercased) to minimize runtime allocations.
