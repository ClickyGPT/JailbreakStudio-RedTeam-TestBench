## 2025-01-24 - [Unnecessary Re-renders from Mouse Tracking]
**Learning:** Updating React state on every `mousemove` event in a top-level component (like `App.tsx`) causes the entire application to re-render, leading to significant performance degradation, especially in complex applications.
**Action:** Use CSS variables or direct DOM manipulation via refs for high-frequency updates like mouse position to avoid React's reconciliation cycle.

## 2026-03-17 - [Keystroke-driven Re-render Bottleneck]
**Learning:** Passing top-level state (like a live prompt string) as a prop to complex sibling components (like a results panel) causes expensive re-renders on every single keystroke.
**Action:** Decouple the secondary components from live state by bundling the necessary snapshot (e.g., the prompt that triggered the test) into the result object, and use stable callback references (refs + useLayoutEffect) to prevent child component updates during high-frequency input.

## 2026-03-17 - [Single-pass Normalization & High-Precision Timing]
**Learning:** Performing `toLowerCase()` inside a loop (e.g., `REFUSAL_KEYWORDS.some()`) creates redundant string allocations and transformations. Pre-normalizing both the search corpus and the target string once significantly improves performance in hot paths. Additionally, `performance.now()` provides sub-millisecond precision, which is critical for accurate API latency measurement compared to the lower-resolution `Date.now()`.
**Action:** Pre-lowercase static keyword lists and perform a single-pass `toLowerCase()` on target strings before entering matching loops. Standardize on `performance.now()` for all latency-sensitive measurements.
