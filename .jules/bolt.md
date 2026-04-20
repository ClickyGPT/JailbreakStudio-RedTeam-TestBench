## 2025-01-24 - [Unnecessary Re-renders from Mouse Tracking]
**Learning:** Updating React state on every `mousemove` event in a top-level component (like `App.tsx`) causes the entire application to re-render, leading to significant performance degradation, especially in complex applications.
**Action:** Use CSS variables or direct DOM manipulation via refs for high-frequency updates like mouse position to avoid React's reconciliation cycle.

## 2026-03-17 - [Keystroke-driven Re-render Bottleneck]
**Learning:** Passing top-level state (like a live prompt string) as a prop to complex sibling components (like a results panel) causes expensive re-renders on every single keystroke.
**Action:** Decouple the secondary components from live state by bundling the necessary snapshot (e.g., the prompt that triggered the test) into the result object, and use stable callback references (refs + useLayoutEffect) to prevent child component updates during high-frequency input.

## 2026-03-17 - [Optimized String Matching for Refusal Checks]
**Learning:** Performing multiple `toLowerCase()` transformations on both the source string and keyword set within a loop (like `.some()`) causes significant performance overhead, especially with large target strings. Pre-lowercasing constants and performing a single-pass lowercasing on the source string reduced execution time by ~77%.
**Action:** Always pre-calculate case-insensitive constants and move string transformations outside of high-frequency loops or iterative matching logic.
