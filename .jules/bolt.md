## 2025-01-24 - [Unnecessary Re-renders from Mouse Tracking]
**Learning:** Updating React state on every `mousemove` event in a top-level component (like `App.tsx`) causes the entire application to re-render, leading to significant performance degradation, especially in complex applications.
**Action:** Use CSS variables or direct DOM manipulation via refs for high-frequency updates like mouse position to avoid React's reconciliation cycle.

## 2026-03-17 - [Keystroke-driven Re-render Bottleneck]
**Learning:** Passing top-level state (like a live prompt string) as a prop to complex sibling components (like a results panel) causes expensive re-renders on every single keystroke.
**Action:** Decouple the secondary components from live state by bundling the necessary snapshot (e.g., the prompt that triggered the test) into the result object, and use stable callback references (refs + useLayoutEffect) to prevent child component updates during high-frequency input.

## 2026-03-17 - [Efficient String Matching & Render-Phase State Sync]
**Learning:** For performance-critical string matching (like refusal checks), performing a single-pass `toLowerCase()` on the source string followed by `.some()` with pre-lowercased keywords is significantly faster (~4x) than redundant per-keyword transformations. Additionally, resetting component state in response to prop changes (e.g., clearing 'analysis' when 'result' changes) during the render phase via a 'prevProps' pattern is more efficient than `useEffect`, as it avoids an extra browser paint and re-render cycle.
**Action:** Pre-lowercase static keyword lists and use render-phase checks for state synchronization when possible to maximize responsiveness and minimize unnecessary processing.
