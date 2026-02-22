# Bolt's Performance Journal

## 2024-05-15 - Removed Artificial UI Delay
**Learning:** The application had an intentional 600ms artificial delay in the simulation execution loop, likely for "dramatic effect." While intended to simulate processing time, it creates a significant bottleneck in a tool meant for rapid iteration.
**Action:** Always check for `setTimeout` or `delay` calls in primary user action flows and verify if they are strictly necessary for UX or just adding overhead.

## 2025-01-24 - Decoupling Results from Live Input State
**Learning:** Passing live input state (e.g., `currentPrompt`) as a prop to results display components causes expensive re-renders on every keystroke, even if the result itself hasn't changed.
**Action:** Capture the specific input state at the moment of execution and store it within the result object. Reference the result's captured state in display components to decouple them from live input updates.
