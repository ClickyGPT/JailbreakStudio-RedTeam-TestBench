## 2025-05-15 - [Accessibility in Themed UIs]
**Learning:** "Cyberpunk" or "Studio" themed UIs often use non-semantic elements (like `<span>` or `<div>`) to achieve a specific aesthetic for buttons and navigation. This makes them invisible to screen readers and keyboard users.
**Action:** Always wrap stylized "links" in semantic `<button>` or `<a>` tags and add `aria-label` to icon-only buttons, regardless of how "technical" or "minimalist" the UI design is.

## 2025-05-15 - [Environment Dependencies for UI Rendering]
**Learning:** Environment variables (like `GEMINI_API_KEY`) being required at initialization time can prevent even basic UI tests from running if not mocked or provided in a `.env.local`.
**Action:** When a repository fails to render in dev mode, check for module-level initialization of third-party SDKs that might be crashing the app due to missing keys.

## 2026-05-01 - [Accessible Dropdowns via group-focus-within]
**Learning:** Purely hover-activated dropdown menus are inaccessible to keyboard users. Using Tailwind's `group-focus-within` allows these menus to be revealed when any element inside the group (like the trigger button) receives focus.
**Action:** Wrap hover-menus in a `group` container and apply `group-focus-within:block` (or equivalent) to the menu and `group-focus-within:ring-1` to the trigger to ensure keyboard visibility and navigation.

## 2026-05-01 - [Contextual Shortcut Hints]
**Learning:** Discoverability of keyboard shortcuts can be improved without cluttering the UI by using `group-hover:inline` and `group-focus-visible:inline` on a hint element within a button.
**Action:** Implement visual shortcut hints within a Tailwind 'group' container to balance discoverability with a clean default UI, ensuring hints appear for both mouse and keyboard users.
