## 2025-01-24 - [Unnecessary Re-renders from Mouse Tracking]
**Learning:** Updating React state on every `mousemove` event in a top-level component (like `App.tsx`) causes the entire application to re-render, leading to significant performance degradation, especially in complex applications.
**Action:** Use CSS variables or direct DOM manipulation via refs for high-frequency updates like mouse position to avoid React's reconciliation cycle.

## 2026-03-17 - [Keystroke-driven Re-render Bottleneck]
**Learning:** Passing top-level state (like a live prompt string) as a prop to complex sibling components (like a results panel) causes expensive re-renders on every single keystroke.
**Action:** Decouple the secondary components from live state by bundling the necessary snapshot (e.g., the prompt that triggered the test) into the result object, and use stable callback references (refs + useLayoutEffect) to prevent child component updates during high-frequency input.

## 2026-03-18 - [Typing-induced O(N) Chat List Re-renders]
**Learning:** Storing active message history in the same component state as chat text input causes the entire message history list to re-render on every keystroke. Since rendering long chats takes O(N) time, this makes typing feel laggy as history grows.
**Action:** Extract and memoize the message list rendering logic into a `MessageList` sub-component using `React.memo` to prevent re-renders when typing in the input field.
