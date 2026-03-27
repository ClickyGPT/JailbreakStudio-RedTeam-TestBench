## 2025-05-15 - [Accessibility in Themed UIs]
**Learning:** "Cyberpunk" or "Studio" themed UIs often use non-semantic elements (like `<span>` or `<div>`) to achieve a specific aesthetic for buttons and navigation. This makes them invisible to screen readers and keyboard users.
**Action:** Always wrap stylized "links" in semantic `<button>` or `<a>` tags and add `aria-label` to icon-only buttons, regardless of how "technical" or "minimalist" the UI design is.

## 2025-05-15 - [Environment Dependencies for UI Rendering]
**Learning:** Environment variables (like `GEMINI_API_KEY`) being required at initialization time can prevent even basic UI tests from running if not mocked or provided in a `.env.local`.
**Action:** When a repository fails to render in dev mode, check for module-level initialization of third-party SDKs that might be crashing the app due to missing keys.

## 2026-03-17 - [Contextual Keyboard Shortcut Hints]
**Learning:** For non-obvious keyboard shortcuts (like Cmd+Enter in a textarea), providing a visual hint that only appears when the element is focused (`group-focus-within`) effectively balances discoverability with a clean, distraction-free UI.
**Action:** Implement "focused-only" hints for secondary keyboard actions using absolute positioning and `pointer-events-none` to ensure they don't interfere with the primary interaction.
