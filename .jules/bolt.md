## 2025-01-24 - [Unnecessary Re-renders from Mouse Tracking]
**Learning:** Updating React state on every `mousemove` event in a top-level component (like `App.tsx`) causes the entire application to re-render, leading to significant performance degradation, especially in complex applications.
**Action:** Use CSS variables or direct DOM manipulation via refs for high-frequency updates like mouse position to avoid React's reconciliation cycle.

## 2026-03-17 - [Keystroke-driven Re-render Bottleneck]
**Learning:** Passing top-level state (like a live prompt string) as a prop to complex sibling components (like a results panel) causes expensive re-renders on every single keystroke.
**Action:** Decouple the secondary components from live state by bundling the necessary snapshot (e.g., the prompt that triggered the test) into the result object, and use stable callback references (refs + useLayoutEffect) to prevent child component updates during high-frequency input.

## 2026-06-27 - [Isolating High-Frequency Visual Components]
**Learning:** Even when avoiding React state for high-frequency updates (e.g., using CSS variables), keeping the update logic and the affected DOM in a large parent component (like `App.tsx`) still subjects them to reconciliation cycles whenever the parent re-renders.
**Action:** Isolate purely decorative, high-frequency components into memoized child components with their own internal listeners and refs to completely decouple them from the main application rendering lifecycle.
