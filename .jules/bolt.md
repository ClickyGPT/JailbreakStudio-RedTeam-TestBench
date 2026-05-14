## 2025-01-24 - [Unnecessary Re-renders from Mouse Tracking]
**Learning:** Updating React state on every `mousemove` event in a top-level component (like `App.tsx`) causes the entire application to re-render, leading to significant performance degradation, especially in complex applications.
**Action:** Use CSS variables or direct DOM manipulation via refs for high-frequency updates like mouse position to avoid React's reconciliation cycle.

## 2026-03-17 - [Keystroke-driven Re-render Bottleneck]
**Learning:** Passing top-level state (like a live prompt string) as a prop to complex sibling components (like a results panel) causes expensive re-renders on every single keystroke.
**Action:** Decouple the secondary components from live state by bundling the necessary snapshot (e.g., the prompt that triggered the test) into the result object, and use stable callback references (refs + useLayoutEffect) to prevent child component updates during high-frequency input.

## 2026-03-17 - [Redundant String Operations in Loops]
**Learning:** Performing `.toLowerCase()` on a large source string inside a loop against multiple keywords causes $O(N)$ redundant string allocations and transformations ($N$ = number of keywords).
**Action:** Perform the transformation exactly once before entering the loop and ensure keyword constants are pre-lowercased at the source (e.g., in `constants.ts`) to achieve ~2x speedup in matching logic.
