## 2025-05-15 - [Accessibility in Themed UIs]
**Learning:** "Cyberpunk" or "Studio" themed UIs often use non-semantic elements (like `<span>` or `<div>`) to achieve a specific aesthetic for buttons and navigation. This makes them invisible to screen readers and keyboard users.
**Action:** Always wrap stylized "links" in semantic `<button>` or `<a>` tags and add `aria-label` to icon-only buttons, regardless of how "technical" or "minimalist" the UI design is.

## 2025-05-15 - [Environment Dependencies for UI Rendering]
**Learning:** Environment variables (like `GEMINI_API_KEY`) being required at initialization time can prevent even basic UI tests from running if not mocked or provided in a `.env.local`.
**Action:** When a repository fails to render in dev mode, check for module-level initialization of third-party SDKs that might be crashing the app due to missing keys.

## 2025-05-15 - [Keyboard Accessible Dropdowns in Studio Theme]
**Learning:** In UIs using Tailwind 'group' hover patterns for dropdowns, keyboard users are often locked out of sub-menus. Adding `group-focus-within:block` to the menu container and explicit `focus:outline-none` with high-contrast background/text colors to menu items restores full keyboard parity.
**Action:** Always pair `group-hover:block` with `group-focus-within:block` and ensure menu items have distinct `focus:` styles that match their `hover:` counterparts.
