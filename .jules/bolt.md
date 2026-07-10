## 2025-01-24 - [Unnecessary Re-renders from Mouse Tracking]
**Learning:** Updating React state on every `mousemove` event in a top-level component (like `App.tsx`) causes the entire application to re-render, leading to significant performance degradation, especially in complex applications.
**Action:** Use CSS variables or direct DOM manipulation via refs for high-frequency updates like mouse position to avoid React's reconciliation cycle.

## 2026-03-17 - [Keystroke-driven Re-render Bottleneck]
**Learning:** Passing top-level state (like a live prompt string) as a prop to complex sibling components (like a results panel) causes expensive re-renders on every single keystroke.
**Action:** Decouple the secondary components from live state by bundling the necessary snapshot (e.g., the prompt that triggered the test) into the result object, and use stable callback references (refs + useLayoutEffect) to prevent child component updates during high-frequency input.

## 2025-01-24 - [Optimizing Growing Chat Histories]
**Learning:** In chat interfaces, managing the message history and the current input text in the same component state causes the entire message list (which can grow large) to re-render on every keystroke.
**Action:** Extract the message list into a memoized component (`React.memo`) to decouple it from the high-frequency input state, ensuring typing remains snappy (O(1) re-render cost relative to message count).
