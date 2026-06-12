## 2025-05-15 - [Accessibility in Themed UIs]
**Learning:** "Cyberpunk" or "Studio" themed UIs often use non-semantic elements (like `<span>` or `<div>`) to achieve a specific aesthetic for buttons and navigation. This makes them invisible to screen readers and keyboard users.
**Action:** Always wrap stylized "links" in semantic `<button>` or `<a>` tags and add `aria-label` to icon-only buttons, regardless of how "technical" or "minimalist" the UI design is.

## 2025-05-15 - [Environment Dependencies for UI Rendering]
**Learning:** Environment variables (like `GEMINI_API_KEY`) being required at initialization time can prevent even basic UI tests from running if not mocked or provided in a `.env.local`.
**Action:** When a repository fails to render in dev mode, check for module-level initialization of third-party SDKs that might be crashing the app due to missing keys.

## 2025-05-15 - [Keyboard-Accessible Hover Menus]
**Learning:** In RedTeam Studio's Tailwind-heavy architecture, CSS-only hover menus (using `group-hover:block`) are common but inaccessible to keyboard users.
**Action:** Use the `group-focus-within:block` modifier alongside `group-hover` and add `aria-haspopup="true"` to the trigger button. This ensures menus reveal themselves during Tab navigation without requiring custom JS state management.
