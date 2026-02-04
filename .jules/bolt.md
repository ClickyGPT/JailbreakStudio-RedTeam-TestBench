## 2025-01-24 - [Unnecessary Re-renders from Mouse Tracking]
**Learning:** Updating React state on every `mousemove` event in a top-level component (like `App.tsx`) causes the entire application to re-render, leading to significant performance degradation, especially in complex applications.
**Action:** Use CSS variables or direct DOM manipulation via refs for high-frequency updates like mouse position to avoid React's reconciliation cycle.

## 2025-05-15 - [Throttling Mouse Events with Latest State]
**Learning:** When throttling high-frequency events like `mousemove` using `requestAnimationFrame`, it is critical to capture the *latest* state (e.g., cursor coordinates) in a variable outside the throttle's closure. Failing to do so results in the throttled callback using the coordinates from the *first* event in the frame, causing a perceptible lag or "stutter" in the UI updates.
**Action:** Update shared coordinate variables on every event, and only trigger the `requestAnimationFrame` loop if it isn't already running.

## 2025-05-15 - [Identifying Artificial UI Delays]
**Learning:** Developers sometimes add `setTimeout` delays to asynchronous operations for "dramatic effect" or to simulate work. These artificial delays directly harm the perceived performance and efficiency of the application.
**Action:** Audit asynchronous handlers for `setTimeout` calls that aren't related to actual debouncing or retry logic and remove them to provide immediate user feedback.
