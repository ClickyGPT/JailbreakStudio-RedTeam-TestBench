## 2025-01-24 - [Unnecessary Re-renders from Mouse Tracking]
**Learning:** Updating React state on every `mousemove` event in a top-level component (like `App.tsx`) causes the entire application to re-render, leading to significant performance degradation, especially in complex applications.
**Action:** Use CSS variables or direct DOM manipulation via refs for high-frequency updates like mouse position to avoid React's reconciliation cycle.

## 2026-03-17 - [Keystroke-driven Re-render Bottleneck]
**Learning:** Passing top-level state (like a live prompt string) as a prop to complex sibling components (like a results panel) causes expensive re-renders on every single keystroke.
**Action:** Decouple the secondary components from live state by bundling the necessary snapshot (e.g., the prompt that triggered the test) into the result object, and use stable callback references (refs + useLayoutEffect) to prevent child component updates during high-frequency input.

## 2025-02-14 - [Regex Refusal Detection Speedup]
**Learning:** Using a pre-compiled case-insensitive `RegExp` for keyword matching on large model outputs is significantly faster (~2.1x for 100KB) than iterating with `.some()` and `toLowerCase()`. Iterating and re-lowercasing the target string in a loop creates unnecessary allocations and CPU overhead.
**Action:** Use pre-compiled `RegExp` for keyword filtering in hot paths. Always include a safeguard for empty keyword arrays to avoid unintended matches (e.g., using `/$.^/` if empty).
