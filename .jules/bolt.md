## 2025-01-24 - [Unnecessary Re-renders from Mouse Tracking]
**Learning:** Updating React state on every `mousemove` event in a top-level component (like `App.tsx`) causes the entire application to re-render, leading to significant performance degradation, especially in complex applications.
**Action:** Use CSS variables or direct DOM manipulation via refs for high-frequency updates like mouse position to avoid React's reconciliation cycle.

## 2026-03-17 - [Keystroke-driven Re-render Bottleneck]
**Learning:** Passing top-level state (like a live prompt string) as a prop to complex sibling components (like a results panel) causes expensive re-renders on every single keystroke.
**Action:** Decouple the secondary components from live state by bundling the necessary snapshot (e.g., the prompt that triggered the test) into the result object, and use stable callback references (refs + useLayoutEffect) to prevent child component updates during high-frequency input.

## 2025-05-15 - [RegExp vs Loop for Keyword Scanning]
**Learning:** For scanning large strings (100KB+) against a set of keywords, a pre-compiled case-insensitive RegExp is significantly faster (~5-6x) than iterative .toLowerCase().includes() calls. The latter causes repeated string allocations and full-text traversals for each keyword.
**Action:** Always prefer pre-compiled RegExp for multi-keyword scanning in hot paths, ensuring special characters are escaped and empty lists are handled with a non-matching pattern like /$.^/.
