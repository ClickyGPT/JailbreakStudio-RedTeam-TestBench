## 2025-05-15 - [Accessibility in Themed UIs]
**Learning:** "Cyberpunk" or "Studio" themed UIs often use non-semantic elements (like `<span>` or `<div>`) to achieve a specific aesthetic for buttons and navigation. This makes them invisible to screen readers and keyboard users.
**Action:** Always wrap stylized "links" in semantic `<button>` or `<a>` tags and add `aria-label` to icon-only buttons, regardless of how "technical" or "minimalist" the UI design is.

## 2025-05-15 - [Environment Dependencies for UI Rendering]
**Learning:** Environment variables (like `GEMINI_API_KEY`) being required at initialization time can prevent even basic UI tests from running if not mocked or provided in a `.env.local`.
**Action:** When a repository fails to render in dev mode, check for module-level initialization of third-party SDKs that might be crashing the app due to missing keys.

## 2025-05-16 - [Keyboard Shortcut Discovery]
**Learning:** Adding keyboard shortcuts (like Cmd+Enter for submission) significantly improves power user efficiency, but they remain "hidden features" unless surfaced in the UI.
**Action:** Always pair keyboard shortcut implementations with visual hints, such as including the shortcut (e.g., "⌘↵") in the button's `title` attribute or a nearby label.

## 2025-05-16 - [Dropdown Accessibility via CSS]
**Learning:** Tailwind's `group-hover` is excellent for mouse-based interaction but fails for keyboard users.
**Action:** Always pair `group-hover:block` with `group-focus-within:block` (and `aria-haspopup="true"` on the trigger) to ensure hover-based dropdowns are accessible via Tab navigation.
