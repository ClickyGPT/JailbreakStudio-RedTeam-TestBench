## 2025-01-24 - [Unnecessary Re-renders from Mouse Tracking]
**Learning:** Updating React state on every `mousemove` event in a top-level component (like `App.tsx`) causes the entire application to re-render, leading to significant performance degradation, especially in complex applications.
**Action:** Use CSS variables or direct DOM manipulation via refs for high-frequency updates like mouse position to avoid React's reconciliation cycle.

## 2026-02-07 - [Decoupling Live Input from Results Display]
**Learning:** Passing a live-updating 'prompt' state to a complex 'SimulationPanel' caused the entire panel to re-render on every keystroke. This significantly increased typing latency.
**Action:** Store the specific prompt that triggered the simulation inside the result object itself. This allows the panel to render the stable result state independently of the active input, eliminating thousands of unnecessary re-renders.

## 2026-02-07 - [Removing Artificial Simulation Latency]
**Learning:** Found an explicit 600ms 'setTimeout' delay intended to simulate processing time. While sometimes used for "dramatic effect", it purely degraded the user experience in this tool.
**Action:** Remove hardcoded artificial delays to ensure the application responds as fast as the underlying API/logic allows.
