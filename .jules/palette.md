## 2025-05-22 - [Accessibility & UX Enhancement for Chat Interfaces]
**Learning:** Assigning `role="log"` and `aria-live="polite"` to streaming message containers ensures that screen readers announce new content without interrupting the user's current activity. Additionally, using a dedicated `useEscapeKey` hook provides a consistent and expected way for keyboard users to dismiss overlays.
**Action:** Always implement `role="log"` for chat histories and ensure all modal-like drawers are dismissible via the Escape key using a standard utility.

## 2025-05-22 - [Drawer Interaction Polish]
**Learning:** Auto-focusing the primary input field when a drawer or modal opens significantly reduces the interaction cost for the user, allowing them to start typing immediately.
**Action:** Use a React `ref` and `useEffect` to focus the main input in any new overlay component.
