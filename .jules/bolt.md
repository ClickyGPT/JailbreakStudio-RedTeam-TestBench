## 2025-01-24 - [Unnecessary Re-renders from Mouse Tracking]
**Learning:** Updating React state on every `mousemove` event in a top-level component (like `App.tsx`) causes the entire application to re-render, leading to significant performance degradation, especially in complex applications.
**Action:** Use CSS variables or direct DOM manipulation via refs for high-frequency updates like mouse position to avoid React's reconciliation cycle.

## 2025-05-15 - [Artificial UI Delays]
**Learning:** The codebase contained hardcoded `setTimeout` delays (e.g., 600ms) in core application flows (simulations) to "mimic" processing time. This artificially limits performance and degrades user experience.
**Action:** Identify and remove artificial bottlenecks that do not serve a functional purpose (like debouncing or throttle). Replace simulated metrics with real-time measurements where possible.
