## 2025-01-24 - [Unnecessary Re-renders from Mouse Tracking]
**Learning:** Updating React state on every `mousemove` event in a top-level component (like `App.tsx`) causes the entire application to re-render, leading to significant performance degradation, especially in complex applications.
**Action:** Use CSS variables or direct DOM manipulation via refs for high-frequency updates like mouse position to avoid React's reconciliation cycle.

## 2026-03-17 - [Keystroke-driven Re-render Bottleneck]
**Learning:** Passing top-level state (like a live prompt string) as a prop to complex sibling components (like a results panel) causes expensive re-renders on every single keystroke.
**Action:** Decouple the secondary components from live state by bundling the necessary snapshot (e.g., the prompt that triggered the test) into the result object, and use stable callback references (refs + useLayoutEffect) to prevent child component updates during high-frequency input.

## 2026-03-18 - [Throttling Inline Style Updates on High-frequency Event Listeners]
**Learning:** Updating container inline styles or CSS custom properties directly on high-frequency events like mousemove can still cause major style recalculation and layout thrashing if updates trigger faster than the screen's refresh rate.
**Action:** Always throttle DOM-level CSS variable updates on high-frequency events using requestAnimationFrame, and ensure any scheduled frames are properly canceled when a new event arrives or when the component unmounts.
