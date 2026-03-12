## 2025-01-24 - [Unnecessary Re-renders from Mouse Tracking]
**Learning:** Updating React state on every `mousemove` event in a top-level component (like `App.tsx`) causes the entire application to re-render, leading to significant performance degradation, especially in complex applications.
**Action:** Use CSS variables or direct DOM manipulation via refs for high-frequency updates like mouse position to avoid React's reconciliation cycle.

## 2025-01-25 - [Stabilizing Callbacks to Reduce Keyboard Input Latency]
**Learning:** In applications with high-frequency typing, memoized child components still re-render if their parent passes them callbacks that depend on the typing state. This creates significant main-thread contention.
**Action:** Use the "staged state" pattern with `useRef` to provide stable callback references (e.g., `handleRunTest`) to child components. Capture the latest state in the ref during render or an effect, and use the ref inside the callback to ensure the child's props never change while typing.

## 2025-01-25 - [Decoupling Panels via Result-Bound Prompt]
**Learning:** Passing the "live" prompt state to a results panel causes the panel to re-render on every keystroke, even if it's only meant to show data for the *last* simulation.
**Action:** Include the original `prompt` within the `SimulationResult` object returned by the service. This allows the results panel to be completely decoupled from the live input state, enabling it to remain static (memoized) while the user continues to type new vectors.
