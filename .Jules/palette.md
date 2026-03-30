## 2025-05-15 - [Accessibility in Themed UIs]
**Learning:** "Cyberpunk" or "Studio" themed UIs often use non-semantic elements (like `<span>` or `<div>`) to achieve a specific aesthetic for buttons and navigation. This makes them invisible to screen readers and keyboard users.
**Action:** Always wrap stylized "links" in semantic `<button>` or `<a>` tags and add `aria-label` to icon-only buttons, regardless of how "technical" or "minimalist" the UI design is.

## 2025-05-15 - [Environment Dependencies for UI Rendering]
**Learning:** Environment variables (like `GEMINI_API_KEY`) being required at initialization time can prevent even basic UI tests from running if not mocked or provided in a `.env.local`.
**Action:** When a repository fails to render in dev mode, check for module-level initialization of third-party SDKs that might be crashing the app due to missing keys.

## 2024-05-23 - [Keyboard Accessibility for Hover Menus]
**Learning:** Hover-triggered dropdowns in Tailwind-based UIs are often inaccessible to keyboard users because they rely on `group-hover`.
**Action:** Use `group-focus-within` alongside `group-hover` on parent containers to ensure that menu items are revealed when a child element receives focus, and ensure the menu items themselves have `focus-visible` styles.
