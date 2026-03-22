## 2025-05-15 - [Accessibility in Themed UIs]
**Learning:** "Cyberpunk" or "Studio" themed UIs often use non-semantic elements (like `<span>` or `<div>`) to achieve a specific aesthetic for buttons and navigation. This makes them invisible to screen readers and keyboard users.
**Action:** Always wrap stylized "links" in semantic `<button>` or `<a>` tags and add `aria-label` to icon-only buttons, regardless of how "technical" or "minimalist" the UI design is.

## 2025-05-15 - [Environment Dependencies for UI Rendering]
**Learning:** Environment variables (like `GEMINI_API_KEY`) being required at initialization time can prevent even basic UI tests from running if not mocked or provided in a `.env.local`.
**Action:** When a repository fails to render in dev mode, check for module-level initialization of third-party SDKs that might be crashing the app due to missing keys.

## 2026-03-17 - [Contextual Shortcut Hints for Action Feedback]
**Learning:** In technical/developer-focused "Studio" interfaces, users frequently switch between mouse and keyboard. Providing platform-specific shortcut hints (e.g., `⌘⏎` vs `Ctrl+⏎`) directly in button tooltips reduces cognitive load for power users by confirming keyboard parity without searching documentation.
**Action:** Implement reactive platform detection (`isMac`) to serve dynamic keyboard shortcut instructions in `title` attributes and UI labels.
