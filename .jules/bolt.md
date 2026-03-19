## 2025-01-24 - [Unnecessary Re-renders from Mouse Tracking]
**Learning:** Updating React state on every `mousemove` event in a top-level component (like `App.tsx`) causes the entire application to re-render, leading to significant performance degradation, especially in complex applications.
**Action:** Use CSS variables or direct DOM manipulation via refs for high-frequency updates like mouse position to avoid React's reconciliation cycle.

## 2026-03-17 - [Keystroke-driven Re-render Bottleneck]
**Learning:** Passing top-level state (like a live prompt string) as a prop to complex sibling components (like a results panel) causes expensive re-renders on every single keystroke.
**Action:** Decouple the secondary components from live state by bundling the necessary snapshot (e.g., the prompt that triggered the test) into the result object, and use stable callback references (refs + useLayoutEffect) to prevent child component updates during high-frequency input.

## 2026-03-17 - [Eliminating Redundant Mount and Prop-Change Render Cycles]
**Learning:** Using `useEffect` to synchronize component state with external sources (like URL hash on mount) or props (like resetting child state when parent props change) triggers an additional commit and paint cycle.
**Action:** Use lazy state initialization for mount-time sync and render-phase state updates (comparing against `prevProp` in state) to handle prop-driven resets, ensuring the UI updates in a single render pass.

## 2026-03-17 - [Regex Pre-compilation for Hot-Path Logic]
**Learning:** Iterating through arrays with `.some()` and performing multiple `.includes()` and `.toLowerCase()` calls in a hot path (like checking LLM output for refusal keywords) is computationally more expensive than a single pass with a pre-compiled Regular Expression.
**Action:** Pre-compile static keyword lists into a single `RegExp` at the module level to optimize string matching performance.
