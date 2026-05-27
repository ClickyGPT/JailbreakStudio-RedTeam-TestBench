## 2025-05-15 - [Accessibility in Themed UIs]
**Learning:** "Cyberpunk" or "Studio" themed UIs often use non-semantic elements (like `<span>` or `<div>`) to achieve a specific aesthetic for buttons and navigation. This makes them invisible to screen readers and keyboard users.
**Action:** Always wrap stylized "links" in semantic `<button>` or `<a>` tags and add `aria-label` to icon-only buttons, regardless of how "technical" or "minimalist" the UI design is.

## 2025-05-15 - [Environment Dependencies for UI Rendering]
**Learning:** Environment variables (like `GEMINI_API_KEY`) being required at initialization time can prevent even basic UI tests from running if not mocked or provided in a `.env.local`.
**Action:** When a repository fails to render in dev mode, check for module-level initialization of third-party SDKs that might be crashing the app due to missing keys.

## 2025-05-20 - [Keyboard Accessible CSS Dropdowns]
**Learning:** CSS-only hover menus implemented with `group-hover` are inaccessible to keyboard users as they don't respond to focus events. Using Tailwind's `group-focus-within` allows these menus to be toggled via Tab navigation without requiring JavaScript state management.
**Action:** Use `group-focus-within:block` alongside `group-hover:block` for dropdown menus to ensure they are discoverable and usable by keyboard and screen reader users.
