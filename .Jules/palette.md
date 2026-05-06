## 2025-05-15 - [Accessibility in Themed UIs]
**Learning:** "Cyberpunk" or "Studio" themed UIs often use non-semantic elements (like `<span>` or `<div>`) to achieve a specific aesthetic for buttons and navigation. This makes them invisible to screen readers and keyboard users.
**Action:** Always wrap stylized "links" in semantic `<button>` or `<a>` tags and add `aria-label` to icon-only buttons, regardless of how "technical" or "minimalist" the UI design is.

## 2025-05-15 - [Environment Dependencies for UI Rendering]
**Learning:** Environment variables (like `GEMINI_API_KEY`) being required at initialization time can prevent even basic UI tests from running if not mocked or provided in a `.env.local`.
**Action:** When a repository fails to render in dev mode, check for module-level initialization of third-party SDKs that might be crashing the app due to missing keys.
## 2025-05-14 - Keyboard Shortcut Discoverability
**Learning:** For power-user actions like prompt submission, keyboard shortcuts (Cmd/Ctrl+Enter) are essential but often invisible. Using Tailwind's 'group-hover' and 'group-focus-visible' on a shortcut hint span allows for a clean default UI while ensuring discoverability for both mouse and keyboard users.
**Action:** Always pair keyboard shortcuts with a 'title' attribute and a conditional visual hint that responds to both hover and focus states.
