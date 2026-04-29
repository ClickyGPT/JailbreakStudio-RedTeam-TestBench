## 2025-01-24 - [Unnecessary Re-renders from Mouse Tracking]
**Learning:** Updating React state on every `mousemove` event in a top-level component (like `App.tsx`) causes the entire application to re-render, leading to significant performance degradation, especially in complex applications.
**Action:** Use CSS variables or direct DOM manipulation via refs for high-frequency updates like mouse position to avoid React's reconciliation cycle.

## 2026-03-17 - [Keystroke-driven Re-render Bottleneck]
**Learning:** Passing top-level state (like a live prompt string) as a prop to complex sibling components (like a results panel) causes expensive re-renders on every single keystroke.
**Action:** Decouple the secondary components from live state by bundling the necessary snapshot (e.g., the prompt that triggered the test) into the result object, and use stable callback references (refs + useLayoutEffect) to prevent child component updates during high-frequency input.

## 2026-05-22 - [Efficient Keyword Matching for Large Strings]
**Learning:** Using `Array.some()` with `string.toLowerCase().includes()` inside a loop over large model outputs is inefficient as it performs redundant string transformations and multiple passes. A pre-compiled case-insensitive `RegExp` reduces this to a single pass, yielding a ~3.4x speedup on 100KB+ strings.
**Action:** Pre-compile keyword sets into a single case-insensitive `RegExp` when performing multi-pattern matching on potentially large text blocks.
