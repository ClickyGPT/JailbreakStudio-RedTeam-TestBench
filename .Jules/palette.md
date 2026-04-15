## 2025-05-15 - [Accessibility in Themed UIs]
**Learning:** "Cyberpunk" or "Studio" themed UIs often use non-semantic elements (like `<span>` or `<div>`) to achieve a specific aesthetic for buttons and navigation. This makes them invisible to screen readers and keyboard users.
**Action:** Always wrap stylized "links" in semantic `<button>` or `<a>` tags and add `aria-label` to icon-only buttons, regardless of how "technical" or "minimalist" the UI design is.

## 2025-05-15 - [Environment Dependencies for UI Rendering]
**Learning:** Environment variables (like `GEMINI_API_KEY`) being required at initialization time can prevent even basic UI tests from running if not mocked or provided in a `.env.local`.
**Action:** When a repository fails to render in dev mode, check for module-level initialization of third-party SDKs that might be crashing the app due to missing keys.

## 2026-03-05 - [Accessible Hover Dropdowns]
**Learning:** Hover-activated dropdown menus in Tailwind can be made keyboard-accessible by using the `group` class on the parent and `group-focus-within:block` on the menu, ensuring visibility when a child link or button receives focus.
**Action:** Always pair `hover:block` with `group-focus-within:block` for dropdown containers to support keyboard navigation.

## 2026-03-05 - [Platform-Specific Shortcut Hints]
**Learning:** Hardcoding 'Ctrl+Enter' for keyboard shortcuts confuses Mac users who expect '⌘↵'. Detecting the platform allows for accurate, high-delight UI hints.
**Action:** Use `navigator.userAgent` within a `useMemo` (to avoid unnecessary re-renders in CSR apps) to dynamically switch shortcut hints in `title` attributes and labels.
