## 2025-05-15 - [Accessibility in Themed UIs]
**Learning:** "Cyberpunk" or "Studio" themed UIs often use non-semantic elements (like `<span>` or `<div>`) to achieve a specific aesthetic for buttons and navigation. This makes them invisible to screen readers and keyboard users.
**Action:** Always wrap stylized "links" in semantic `<button>` or `<a>` tags and add `aria-label` to icon-only buttons, regardless of how "technical" or "minimalist" the UI design is.

## 2025-05-15 - [Environment Dependencies for UI Rendering]
**Learning:** Environment variables (like `GEMINI_API_KEY`) being required at initialization time can prevent even basic UI tests from running if not mocked or provided in a `.env.local`.
**Action:** When a repository fails to render in dev mode, check for module-level initialization of third-party SDKs that might be crashing the app due to missing keys.
## 2026-03-24 - Accessibility and Shortcut discoverability
**Learning:** Keyboard shortcuts like Cmd/Ctrl+Enter are essential for productivity in textarea-heavy apps but must be platform-aware to avoid confusion. Hover-only menus exclude keyboard and screen-reader users; using Tailwind's 'group-focus-within' is a low-cost way to ensure accessibility without changing the visual design for mouse users.
**Action:** Always include platform-aware hints (⌘ vs Ctrl) for shortcuts and ensure all hover-triggered UI elements are also accessible via focus states.
