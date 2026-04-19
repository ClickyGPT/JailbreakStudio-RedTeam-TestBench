## 2025-05-15 - [Accessibility in Themed UIs]
**Learning:** "Cyberpunk" or "Studio" themed UIs often use non-semantic elements (like `<span>` or `<div>`) to achieve a specific aesthetic for buttons and navigation. This makes them invisible to screen readers and keyboard users.
**Action:** Always wrap stylized "links" in semantic `<button>` or `<a>` tags and add `aria-label` to icon-only buttons, regardless of how "technical" or "minimalist" the UI design is.

## 2025-05-15 - [Environment Dependencies for UI Rendering]
**Learning:** Environment variables (like `GEMINI_API_KEY`) being required at initialization time can prevent even basic UI tests from running if not mocked or provided in a `.env.local`.
**Action:** When a repository fails to render in dev mode, check for module-level initialization of third-party SDKs that might be crashing the app due to missing keys.

## 2026-03-20 - [Accessible Interactive Overlays & Keyboard Discoverability]
**Learning:** To resolve accessibility barriers in hover-activated menus and non-blocking overlays, use 'group-focus-within' to ensure secondary UI elements (like shortcut hints or dropdowns) remain visible and navigable for keyboard users.
**Action:** Associate visual shortcut hints with 'group-focus-within' on the parent container to provide context only when active, and ensure all icon-only buttons have explicit 'aria-label' and themed focus rings.
