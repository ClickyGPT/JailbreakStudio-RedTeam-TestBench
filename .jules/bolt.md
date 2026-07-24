## 2025-01-24 - [Unnecessary Re-renders from Mouse Tracking]
**Learning:** Updating React state on every `mousemove` event in a top-level component (like `App.tsx`) causes the entire application to re-render, leading to significant performance degradation, especially in complex applications.
**Action:** Use CSS variables or direct DOM manipulation via refs for high-frequency updates like mouse position to avoid React's reconciliation cycle.

## 2026-03-17 - [Keystroke-driven Re-render Bottleneck]
**Learning:** Passing top-level state (like a live prompt string) as a prop to complex sibling components (like a results panel) causes expensive re-renders on every single keystroke.
**Action:** Decouple the secondary components from live state by bundling the necessary snapshot (e.g., the prompt that triggered the test) into the result object, and use stable callback references (refs + useLayoutEffect) to prevent child component updates during high-frequency input.

## 2026-03-18 - [Chat Input Re-render Bottleneck in List Component]
**Learning:** Having an inline text input control inside the same component that renders an entire list of complex messages causes the entire list to re-render $O(N)$ times for every single keystroke, causing severe input lag as the chat history grows.
**Action:** Extract the list rendering logic into a separate, memoized sub-component (e.g., `MessageList`) wrapped in `React.memo` so that it only re-renders when the array of messages actually changes, ensuring keystrokes are processed at $O(1)$ efficiency.
