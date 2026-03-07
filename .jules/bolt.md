## 2025-01-24 - [Unnecessary Re-renders from Mouse Tracking]
**Learning:** Updating React state on every `mousemove` event in a top-level component (like `App.tsx`) causes the entire application to re-render, leading to significant performance degradation, especially in complex applications.
**Action:** Use CSS variables or direct DOM manipulation via refs for high-frequency updates like mouse position to avoid React's reconciliation cycle.

## 2025-01-24 - [Decoupled Input/Result State]
**Learning:** In LLM-interactive apps, passing "live" input state to a results panel causes expensive re-renders on every keystroke. Capturing the prompt as part of the result object enables decoupling, improving typing responsiveness and ensuring "Analyze" features use the correct historical context even if the user has modified the input since the test ran.
**Action:** Always include the input "snapshot" in the result object and use it for rendering results and post-run analysis.
