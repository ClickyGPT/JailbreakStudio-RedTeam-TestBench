## 2025-01-24 - [Unnecessary Re-renders from Mouse Tracking]
**Learning:** Updating React state on every `mousemove` event in a top-level component (like `App.tsx`) causes the entire application to re-render, leading to significant performance degradation, especially in complex applications.
**Action:** Use CSS variables or direct DOM manipulation via refs for high-frequency updates like mouse position to avoid React's reconciliation cycle.

## 2025-01-24 - [Artificial UI Delays and Hardcoded Metrics]
**Learning:** Artificial delays (e.g., `setTimeout` for "dramatic effect") and hardcoded performance metrics in the UI can mask the actual efficiency of the application and degrade user experience.
**Action:** Remove intentional performance throttles and replace static metric displays with real-time telemetry to provide an accurate and responsive interface.
