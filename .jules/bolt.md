## 2025-01-24 - [Unnecessary Re-renders from Mouse Tracking]
**Learning:** Updating React state on every `mousemove` event in a top-level component (like `App.tsx`) causes the entire application to re-render, leading to significant performance degradation, especially in complex applications.
**Action:** Use CSS variables or direct DOM manipulation via refs for high-frequency updates like mouse position to avoid React's reconciliation cycle.

## 2025-01-24 - [Decoupling Simulation Results from Live Input]
**Learning:** Passing a "live" input state (like a text prompt) as a prop to a heavy sibling component (like a results panel) causes that sibling to re-render on every keystroke, even if it's memoized.
**Action:** Capture the specific input state at the moment an action is triggered and store it within the result object. This allows the results panel to depend on the static captured state rather than the live-updating state.

## 2025-01-24 - [Artificial Delays in Simulations]
**Learning:** Some applications include artificial `setTimeout` delays in "simulation" or "loading" states for dramatic effect, which unnecessarily slows down the user experience.
**Action:** Identify and remove these non-functional delays to provide immediate feedback and improve perceived performance.
