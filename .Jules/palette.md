## 2025-05-15 - [Accessibility in Themed UIs]
**Learning:** "Cyberpunk" or "Studio" themed UIs often use non-semantic elements (like `<span>` or `<div>`) to achieve a specific aesthetic for buttons and navigation. This makes them invisible to screen readers and keyboard users.
**Action:** Always wrap stylized "links" in semantic `<button>` or `<a>` tags and add `aria-label` to icon-only buttons, regardless of how "technical" or "minimalist" the UI design is.

## 2025-05-15 - [Environment Dependencies for UI Rendering]
**Learning:** Environment variables (like `GEMINI_API_KEY`) being required at initialization time can prevent even basic UI tests from running if not mocked or provided in a `.env.local`.
**Action:** When a repository fails to render in dev mode, check for module-level initialization of third-party SDKs that might be crashing the app due to missing keys.

## 2025-05-16 - [Keyboard Shortcut Hints for Power Users]
**Learning:** Adding keyboard shortcuts (like Cmd+Enter) significantly improves the flow for "power user" tools like a prompt composer, but these shortcuts are "hidden" without visual cues. Using Tailwind `group-focus-visible` and `group-hover` on a hint element within a button ensures the shortcut is discoverable exactly when the user is focused on or interacting with that action.
**Action:** Apply 'group-focus-visible:inline' and 'group-hover:inline' to shortcut hint elements within 'group' button containers to provide context-aware discoverability without cluttering the base UI.
