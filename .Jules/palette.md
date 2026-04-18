## 2025-05-15 - [Accessibility in Themed UIs]
**Learning:** "Cyberpunk" or "Studio" themed UIs often use non-semantic elements (like `<span>` or `<div>`) to achieve a specific aesthetic for buttons and navigation. This makes them invisible to screen readers and keyboard users.
**Action:** Always wrap stylized "links" in semantic `<button>` or `<a>` tags and add `aria-label` to icon-only buttons, regardless of how "technical" or "minimalist" the UI design is.

## 2025-05-15 - [Environment Dependencies for UI Rendering]
**Learning:** Environment variables (like `GEMINI_API_KEY`) being required at initialization time can prevent even basic UI tests from running if not mocked or provided in a `.env.local`.
**Action:** When a repository fails to render in dev mode, check for module-level initialization of third-party SDKs that might be crashing the app due to missing keys.

## 2026-03-24 - [Keyboard Shortcut Discoverability]
**Learning:** Keyboard shortcuts like `Cmd+Enter` significantly enhance the experience for power users but remain "hidden" without visual cues. Using Tailwind's `group-focus-within` allows for contextual hints that only appear when the input is active, preserving UI minimalism while aiding discoverability.
**Action:** Always pair new keyboard shortcuts with a visual hint (visible on focus) and update the `title` or `aria-label` of the corresponding action button to include the shortcut.
