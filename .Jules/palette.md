## 2025-05-15 - [Accessibility in Themed UIs]
**Learning:** "Cyberpunk" or "Studio" themed UIs often use non-semantic elements (like `<span>` or `<div>`) to achieve a specific aesthetic for buttons and navigation. This makes them invisible to screen readers and keyboard users.
**Action:** Always wrap stylized "links" in semantic `<button>` or `<a>` tags and add `aria-label` to icon-only buttons, regardless of how "technical" or "minimalist" the UI design is.

## 2025-05-15 - [Environment Dependencies for UI Rendering]
**Learning:** Environment variables (like `GEMINI_API_KEY`) being required at initialization time can prevent even basic UI tests from running if not mocked or provided in a `.env.local`.
**Action:** When a repository fails to render in dev mode, check for module-level initialization of third-party SDKs that might be crashing the app due to missing keys.

## 2025-05-15 - [Keyboard Shortcuts for Prompt Submission]
**Learning:** For multi-line text inputs (`textarea`) in "Studio" style applications, users expect a power-user shortcut to trigger actions without reaching for the mouse. `Ctrl+Enter` (or `Cmd+Enter` on Mac) is the industry standard for this pattern.
**Action:** Implement `handleKeyDown` on all main prompt `textarea` elements to intercept `(e.ctrlKey || e.metaKey) && e.key === 'Enter'` and trigger the primary action.
