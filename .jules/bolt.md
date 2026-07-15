## 2025-01-24 - [Unnecessary Re-renders from Mouse Tracking]
**Learning:** Updating React state on every `mousemove` event in a top-level component (like `App.tsx`) causes the entire application to re-render, leading to significant performance degradation, especially in complex applications.
**Action:** Use CSS variables or direct DOM manipulation via refs for high-frequency updates like mouse position to avoid React's reconciliation cycle.

## 2026-03-17 - [Keystroke-driven Re-render Bottleneck]
**Learning:** Passing top-level state (like a live prompt string) as a prop to complex sibling components (like a results panel) causes expensive re-renders on every single keystroke.
**Action:** Decouple the secondary components from live state by bundling the necessary snapshot (e.g., the prompt that triggered the test) into the result object, and use stable callback references (refs + useLayoutEffect) to prevent child component updates during high-frequency input.

## 2026-03-18 - [O(N) Render Cost in Chat UI]
**Learning:** In a chat interface, keeping the message list inside the main component that manages high-frequency input state (typing) leads to O(N) re-renders on every keystroke, where N is the number of messages.
**Action:** Extract the message list into a memoized component. This reduces the typing render cost from O(N) to O(1), as the list will only re-render when the message array or typing status actually changes.
