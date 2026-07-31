## 2025-01-24 - [Unnecessary Re-renders from Mouse Tracking]
**Learning:** Updating React state on every `mousemove` event in a top-level component (like `App.tsx`) causes the entire application to re-render, leading to significant performance degradation, especially in complex applications.
**Action:** Use CSS variables or direct DOM manipulation via refs for high-frequency updates like mouse position to avoid React's reconciliation cycle.

## 2026-03-17 - [Keystroke-driven Re-render Bottleneck]
**Learning:** Passing top-level state (like a live prompt string) as a prop to complex sibling components (like a results panel) causes expensive re-renders on every single keystroke.
**Action:** Decouple the secondary components from live state by bundling the necessary snapshot (e.g., the prompt that triggered the test) into the result object, and use stable callback references (refs + useLayoutEffect) to prevent child component updates during high-frequency input.

## 2026-03-18 - [Keystroke-driven Message History Re-render]
**Learning:** Typing inside a chat component (e.g., updating a local `input` string state on every keystroke) causes the entire layout, including all previous chat messages, to re-render. As the chat history ($N$) grows, virtual DOM rendering of long message lists becomes increasingly expensive, leading to noticeable input lag on mobile or lower-end machines.
**Action:** Extract the messages list markup into a sub-component memoized with `React.memo` (e.g., `MessageList`), which only re-renders when the actual `messages` list reference or `isTyping` status changes, completely bypassing re-renders during keyboard typing.
