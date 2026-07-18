## 2025-01-24 - [Unnecessary Re-renders from Mouse Tracking]
**Learning:** Updating React state on every `mousemove` event in a top-level component (like `App.tsx`) causes the entire application to re-render, leading to significant performance degradation, especially in complex applications.
**Action:** Use CSS variables or direct DOM manipulation via refs for high-frequency updates like mouse position to avoid React's reconciliation cycle.

## 2026-03-17 - [Keystroke-driven Re-render Bottleneck]
**Learning:** Passing top-level state (like a live prompt string) as a prop to complex sibling components (like a results panel) causes expensive re-renders on every single keystroke.
**Action:** Decouple the secondary components from live state by bundling the necessary snapshot (e.g., the prompt that triggered the test) into the result object, and use stable callback references (refs + useLayoutEffect) to prevent child component updates during high-frequency input.

## 2026-03-18 - [Typing-induced Message List Re-renders]
**Learning:** In a dense chat interface like `RedTeamChat.tsx`, typing in a message input triggers full O(N) re-renders of the entire message history (including icons, markdown formatting, and layouts) on every keystroke, leading to high-frequency typing lag.
**Action:** Extract the message list mapping logic into a separate `MessageList` sub-component and wrap it with `React.memo` so that it only re-renders when the conversation array or typing status actually changes, keeping input response times independent of history size.
