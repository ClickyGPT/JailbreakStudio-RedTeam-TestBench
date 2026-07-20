## 2025-01-24 - [Unnecessary Re-renders from Mouse Tracking]
**Learning:** Updating React state on every `mousemove` event in a top-level component (like `App.tsx`) causes the entire application to re-render, leading to significant performance degradation, especially in complex applications.
**Action:** Use CSS variables or direct DOM manipulation via refs for high-frequency updates like mouse position to avoid React's reconciliation cycle.

## 2026-03-17 - [Keystroke-driven Re-render Bottleneck]
**Learning:** Passing top-level state (like a live prompt string) as a prop to complex sibling components (like a results panel) causes expensive re-renders on every single keystroke.
**Action:** Decouple the secondary components from live state by bundling the necessary snapshot (e.g., the prompt that triggered the test) into the result object, and use stable callback references (refs + useLayoutEffect) to prevent child component updates during high-frequency input.

## 2026-07-20 - [Typing-induced Chat Message List Re-renders]
**Learning:** In React components with user-input textareas/inputs alongside historical list elements (like message logs), high-frequency keystroke updates to the input state trigger complete component re-renders. For lists with $O(N)$ elements, React must recreate and diff Virtual DOM nodes for every keystroke.
**Action:** Extract list components into memoized child components (e.g., via `React.memo`) that only re-render when the underlying items or animation states (such as a typing indicator) actually change, isolating typing-induced state updates to the parent container.
