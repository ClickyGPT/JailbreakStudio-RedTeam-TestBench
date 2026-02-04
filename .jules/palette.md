## 2025-05-15 - [Keyboard Accessibility for Modals and Dropdowns]
**Learning:** Many interactive elements in this app were optimized for mouse users, missing standard keyboard interactions like the Escape key to close modals or focus-based visibility for menus. Focus management (auto-focusing inputs) significantly improves the perceived speed and usability of chat interfaces.
**Action:** Use the `useEscapeKey` hook for all modals/overlays. Use `group-focus-within` for hover-based menus. Always ensure the primary input in a modal/overlay is auto-focused.
