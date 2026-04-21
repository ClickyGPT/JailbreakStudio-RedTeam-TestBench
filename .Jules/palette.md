## 2025-05-15 - [Accessibility in Themed UIs]
**Learning:** "Cyberpunk" or "Studio" themed UIs often use non-semantic elements (like `<span>` or `<div>`) to achieve a specific aesthetic for buttons and navigation. This makes them invisible to screen readers and keyboard users.
**Action:** Always wrap stylized "links" in semantic `<button>` or `<a>` tags and add `aria-label` to icon-only buttons, regardless of how "technical" or "minimalist" the UI design is.

## 2025-05-15 - [Environment Dependencies for UI Rendering]
**Learning:** Environment variables (like `GEMINI_API_KEY`) being required at initialization time can prevent even basic UI tests from running if not mocked or provided in a `.env.local`.
**Action:** When a repository fails to render in dev mode, check for module-level initialization of third-party SDKs that might be crashing the app due to missing keys.

## 2026-03-24 - [Accessible Hover Menus]
**Learning:** Hover-activated dropdown menus are common in complex UIs but are often inaccessible to keyboard users. Using Tailwind's `group-focus-within:block` (or similar) on the menu container, paired with a `group` class on the parent, ensures that the menu remains visible and navigable when any child (like the trigger button) receives focus.
**Action:** To resolve accessibility barriers in hover-activated menus, wrap the trigger and menu in a Tailwind 'group' container and use 'group-focus-within:block' on the menu.
