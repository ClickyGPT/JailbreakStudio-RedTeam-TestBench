## 2025-05-15 - [Accessibility in Themed UIs]
**Learning:** "Cyberpunk" or "Studio" themed UIs often use non-semantic elements (like `<span>` or `<div>`) to achieve a specific aesthetic for buttons and navigation. This makes them invisible to screen readers and keyboard users.
**Action:** Always wrap stylized "links" in semantic `<button>` or `<a>` tags and add `aria-label` to icon-only buttons, regardless of how "technical" or "minimalist" the UI design is.

## 2025-05-15 - [Environment Dependencies for UI Rendering]
**Learning:** Environment variables (like `GEMINI_API_KEY`) being required at initialization time can prevent even basic UI tests from running if not mocked or provided in a `.env.local`.
**Action:** When a repository fails to render in dev mode, check for module-level initialization of third-party SDKs that might be crashing the app due to missing keys.

## 2026-02-10 - Keyboard Accessibility for Hover-Triggered Menus
**Learning:** Dropdown menus that use `group-hover` for visibility are inaccessible to keyboard users. Using `group-focus-within` alongside `group-hover` allows the menu to remain visible when any of its children (like the trigger button or menu items) have focus.
**Action:** Always pair `group-hover` with `group-focus-within` for menus, and ensure all interactive elements have `focus-visible` styles that match their hover states.
