## 2025-01-24 - [Unnecessary Re-renders from Mouse Tracking]
**Learning:** Updating React state on every `mousemove` event in a top-level component (like `App.tsx`) causes the entire application to re-render, leading to significant performance degradation, especially in complex applications.
**Action:** Use CSS variables or direct DOM manipulation via refs for high-frequency updates like mouse position to avoid React's reconciliation cycle.

## 2025-02-12 - [Staged State Pattern for Stable Callbacks]
**Learning:** In applications with high-frequency input (like a large textarea), standard `useCallback` hooks with dependencies on the input state cause downstream memoized components to re-render on every keystroke. Using a "staged state" pattern with `useRef` and `useLayoutEffect` to synchronize the latest state into a ref allows for stable callback identities while still accessing the freshest data when an action is finally triggered.
**Action:** Apply the `promptRef`/`resultRef` synchronization pattern in `App.tsx` to keep `handleRunTest` and `handleShare` stable, preventing `Composer` re-renders.
