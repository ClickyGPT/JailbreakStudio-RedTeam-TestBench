## 2025-01-24 - [Unnecessary Re-renders from Mouse Tracking]
**Learning:** Updating React state on every `mousemove` event in a top-level component (like `App.tsx`) causes the entire application to re-render, leading to significant performance degradation, especially in complex applications.
**Action:** Use CSS variables or direct DOM manipulation via refs for high-frequency updates like mouse position to avoid React's reconciliation cycle.

## 2025-05-15 - Decoupling async results from live input state
**Learning:** Capturing the input state (e.g., the current prompt) within the result object of an asynchronous task prevents expensive sibling components (like a results panel) from re-rendering on every keystroke in the input field. This also ensures that subsequent actions on that result (like "Analyze Failure") are performed against the exact input that produced the result, avoiding race conditions if the user continues typing.
**Action:** Always check if a results component is receiving live input state that it doesn't strictly need to render its historical data. If so, move the input snapshot into the result state.
