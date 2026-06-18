## 2026-01-30 - Modal and Overlay Accessibility
**Learning:** Overlays and floating panels in this application (like the ZEPHYR AI Chat) often lack standard keyboard navigation support. Adding Escape key listeners and automatic focus management significantly improves the user experience for keyboard and screen reader users.
**Action:** When creating or modifying overlays, ensure they can be closed with 'Escape', have appropriate ARIA roles (like 'log' for chat), and manage focus correctly when opened.
