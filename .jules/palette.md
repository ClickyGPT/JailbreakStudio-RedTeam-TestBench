## 2025-05-15 - [Reusable Keyboard Navigation and Chat Accessibility]
**Learning:** Overlays and modals should always be dismissible via the 'Escape' key for WCAG compliance. Chat logs should use `role="log"` to ensure new messages are announced to screen readers without interrupting focus.
**Action:** Use the `useEscapeKey` hook for all modal/drawer components. Apply `role="log"` and `aria-live="polite"` to streaming message containers.
