## 2025-01-24 - [Unnecessary Re-renders from Mouse Tracking]
**Learning:** Updating React state on every `mousemove` event in a top-level component (like `App.tsx`) causes the entire application to re-render, leading to significant performance degradation, especially in complex applications.
**Action:** Use CSS variables or direct DOM manipulation via refs for high-frequency updates like mouse position to avoid React's reconciliation cycle.

## 2025-01-24 - [Artificial UI Delays and Prop-Induced Re-renders]
**Learning:** Hardcoded timeouts (e.g., `setTimeout` for "dramatic effect") directly inflate latency and frustrate power users. Additionally, passing high-frequency state (like live input text) to complex sibling components causes redundant re-renders even when those siblings only need the data upon a specific action.
**Action:** Remove artificial delays immediately. Use `useRef` to capture latest state for stable callback references, and include required action-time data (like the input snapshot) within the result object to decouple state-heavy components from live typing.
