## 2025-05-15 - [Accessibility in Themed UIs]
**Learning:** "Cyberpunk" or "Studio" themed UIs often use non-semantic elements (like `<span>` or `<div>`) to achieve a specific aesthetic for buttons and navigation. This makes them invisible to screen readers and keyboard users.
**Action:** Always wrap stylized "links" in semantic `<button>` or `<a>` tags and add `aria-label` to icon-only buttons, regardless of how "technical" or "minimalist" the UI design is.

## 2025-05-15 - [Environment Dependencies for UI Rendering]
**Learning:** Environment variables (like `GEMINI_API_KEY`) being required at initialization time can prevent even basic UI tests from running if not mocked or provided in a `.env.local`.
**Action:** When a repository fails to render in dev mode, check for module-level initialization of third-party SDKs that might be crashing the app due to missing keys.

## 2025-05-15 - [Keyboard Accessible Dropdowns via Tailwind]
**Learning:** Dropdowns implemented solely with hover states (e.g., `group-hover:block`) are inaccessible to keyboard users. Using `group-focus-within:block` (often combined with `focus:outline-none` on the child and a clear focus ring on the trigger) allows menus to be toggled via the Tab key without requiring complex React state management for simple presentation menus.
**Action:** Always pair `group-hover` with `group-focus-within` for CSS-only dropdowns to ensure keyboard accessibility.
