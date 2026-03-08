## 2025-05-15 - [Accessibility in Themed UIs]
**Learning:** "Cyberpunk" or "Studio" themed UIs often use non-semantic elements (like `<span>` or `<div>`) to achieve a specific aesthetic for buttons and navigation. This makes them invisible to screen readers and keyboard users.
**Action:** Always wrap stylized "links" in semantic `<button>` or `<a>` tags and add `aria-label` to icon-only buttons, regardless of how "technical" or "minimalist" the UI design is.

## 2025-05-15 - [Environment Dependencies for UI Rendering]
**Learning:** Environment variables (like `GEMINI_API_KEY`) being required at initialization time can prevent even basic UI tests from running if not mocked or provided in a `.env.local`.
**Action:** When a repository fails to render in dev mode, check for module-level initialization of third-party SDKs that might be crashing the app due to missing keys.

## 2025-05-15 - [Keyboard Accessibility for Hover-Only Dropdowns]
**Learning:** Tailwind's `group-focus-within` is a powerful tool to make hover-only menus keyboard-accessible without changing the visual design. However, it is sensitive to focus shifts; if focus moves outside the container, the menu closes.
**Action:** Use `group-focus-within` on parent containers of dropdowns to ensure they appear when a child button or link is focused.

## 2025-05-15 - [Non-Blocking Overlays on Inputs]
**Learning:** Adding overlays (like character counts) inside interactive elements (like textareas) can interfere with text selection or clicking if not properly layered.
**Action:** Use absolute positioning with `pointer-events-none` and `select-none` for overlays to ensure they remain purely visual and don't block user interaction with the underlying input.
