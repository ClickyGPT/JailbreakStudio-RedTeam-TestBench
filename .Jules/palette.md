## 2025-05-15 - [Accessibility in Themed UIs]
**Learning:** "Cyberpunk" or "Studio" themed UIs often use non-semantic elements (like `<span>` or `<div>`) to achieve a specific aesthetic for buttons and navigation. This makes them invisible to screen readers and keyboard users.
**Action:** Always wrap stylized "links" in semantic `<button>` or `<a>` tags and add `aria-label` to icon-only buttons, regardless of how "technical" or "minimalist" the UI design is.

## 2025-05-15 - [Environment Dependencies for UI Rendering]
**Learning:** Environment variables (like `GEMINI_API_KEY`) being required at initialization time can prevent even basic UI tests from running if not mocked or provided in a `.env.local`.
**Action:** When a repository fails to render in dev mode, check for module-level initialization of third-party SDKs that might be crashing the app due to missing keys.

## 2026-03-17 - [Platform-Specific Keyboard Shortcut Hints]
**Learning:** For multi-line textareas (like prompt composers), users expect standard 'Cmd+Enter' or 'Ctrl+Enter' shortcuts to trigger actions. Providing visible, platform-specific hints (e.g., '⌘⏎' for Mac, 'Ctrl+⏎' for Windows) significantly increases feature discoverability and improves the perceived 'snappiness' of the UX for power users.
**Action:** Always detect the user's OS and display the appropriate shortcut hint in the UI (labels or tooltips) when implementing keyboard-driven triggers for primary actions.
