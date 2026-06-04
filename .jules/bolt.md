## 2025-01-24 - [Unnecessary Re-renders from Mouse Tracking]
**Learning:** Updating React state on every `mousemove` event in a top-level component (like `App.tsx`) causes the entire application to re-render, leading to significant performance degradation, especially in complex applications.
**Action:** Use CSS variables or direct DOM manipulation via refs for high-frequency updates like mouse position to avoid React's reconciliation cycle.

## 2026-03-17 - [Keystroke-driven Re-render Bottleneck]
**Learning:** Passing top-level state (like a live prompt string) as a prop to complex sibling components (like a results panel) causes expensive re-renders on every single keystroke.
**Action:** Decouple the secondary components from live state by bundling the necessary snapshot (e.g., the prompt that triggered the test) into the result object, and use stable callback references (refs + useLayoutEffect) to prevent child component updates during high-frequency input.

## 2025-01-24 - [Regex-based Refusal Detection]
**Learning:** Pre-compiling a static list of keywords into a single case-insensitive RegExp provides a massive performance boost (up to 50x on long strings) compared to iterative .some() with .toLowerCase().includes(). This avoids repeated string allocations and benefits from optimized regex engines.
**Action:** Always prefer pre-compiled Regex for multi-keyword matching against a single target string, especially in hot paths like model output processing.
