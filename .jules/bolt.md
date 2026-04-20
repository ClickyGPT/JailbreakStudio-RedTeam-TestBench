## 2025-01-24 - [Unnecessary Re-renders from Mouse Tracking]
**Learning:** Updating React state on every `mousemove` event in a top-level component (like `App.tsx`) causes the entire application to re-render, leading to significant performance degradation, especially in complex applications.
**Action:** Use CSS variables or direct DOM manipulation via refs for high-frequency updates like mouse position to avoid React's reconciliation cycle.

## 2026-03-17 - [Keystroke-driven Re-render Bottleneck]
**Learning:** Passing top-level state (like a live prompt string) as a prop to complex sibling components (like a results panel) causes expensive re-renders on every single keystroke.
**Action:** Decouple the secondary components from live state by bundling the necessary snapshot (e.g., the prompt that triggered the test) into the result object, and use stable callback references (refs + useLayoutEffect) to prevent child component updates during high-frequency input.

## 2026-03-24 - [Inefficient Loop-based String Matching]
**Learning:** Performing case-insensitive string matching using a loop with `.toLowerCase().includes()` on large text inputs (like AI responses) is significantly slower than using a single pre-compiled `RegExp` with the `i` flag. Benchmarks showed a ~70% performance improvement (171ms down to 51ms for 100KB payloads) by switching to regex.
**Action:** Always prefer pre-compiled `RegExp` (generated outside the hot path) for multi-keyword matching against large text blocks.
