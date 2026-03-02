## 2025-05-15 - [Accessibility in Themed UIs]
**Learning:** "Cyberpunk" or "Studio" themed UIs often use non-semantic elements (like `<span>` or `<div>`) to achieve a specific aesthetic for buttons and navigation. This makes them invisible to screen readers and keyboard users.
**Action:** Always wrap stylized "links" in semantic `<button>` or `<a>` tags and add `aria-label` to icon-only buttons, regardless of how "technical" or "minimalist" the UI design is.

## 2025-05-15 - [Environment Dependencies for UI Rendering]
**Learning:** Environment variables (like `GEMINI_API_KEY`) being required at initialization time can prevent even basic UI tests from running if not mocked or provided in a `.env.local`.
**Action:** When a repository fails to render in dev mode, check for module-level initialization of third-party SDKs that might be crashing the app due to missing keys.

## 2025-05-16 - [Keyboard-Accessible Dropdowns in Hover-First Designs]
**Learning:** Retrofitting accessibility into "hover-only" UI designs (common in "cyberpunk" or minimalist themes) can be done without visual regression by augmenting `group-hover:block` with `group-focus-within:block`. This allows keyboard users to access menus when the trigger gains focus.
**Action:** Use the `group-focus-within` pattern for all dropdown and tooltip triggers to ensure keyboard navigability while maintaining the intended "hidden-until-interaction" aesthetic.

## 2025-05-16 - [Non-Blocking UI Overlays in Textareas]
**Learning:** To implement non-blocking overlays (like character counts) over interactive textareas, use absolute positioning (e.g., 'absolute bottom-4 right-6') combined with 'pointer-events-none' and 'select-none'. This ensures the UI element does not interfere with text selection or clicking.
**Action:** Apply 'pointer-events-none' to any stylistic overlay placed inside a clickable container to prevent input "dead zones".
