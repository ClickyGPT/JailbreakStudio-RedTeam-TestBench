## 2025-05-14 - Enhancing Overlay and Keyboard Accessibility

**Learning:** In modal-like overlays (e.g., chat drawers), auto-focusing the primary input field via React refs drastically improves the user experience by reducing the number of interactions required to start a task. Additionally, using Tailwind's `group-focus-within` allows hover-based menus to be accessible to keyboard users without adding complex state logic.

**Action:** Always identify the primary action in new overlays and ensure it receives focus on mount. Use `group-focus-within` for any menu that relies on hover to ensure tab-navigation compatibility.
