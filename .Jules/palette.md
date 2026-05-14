## 2025-05-15 - [Accessibility in Themed UIs]
**Learning:** "Cyberpunk" or "Studio" themed UIs often use non-semantic elements (like `<span>` or `<div>`) to achieve a specific aesthetic for buttons and navigation. This makes them invisible to screen readers and keyboard users.
**Action:** Always wrap stylized "links" in semantic `<button>` or `<a>` tags and add `aria-label` to icon-only buttons, regardless of how "technical" or "minimalist" the UI design is.

## 2025-05-15 - [Environment Dependencies for UI Rendering]
**Learning:** Environment variables (like `GEMINI_API_KEY`) being required at initialization time can prevent even basic UI tests from running if not mocked or provided in a `.env.local`.
**Action:** When a repository fails to render in dev mode, check for module-level initialization of third-party SDKs that might be crashing the app due to missing keys.

## 2025-05-16 - [Accessibility in Chat Overlays]
**Learning:** Chat overlays often trap focus or fail to provide easy exit paths for keyboard users. Additionally, dynamic content in these overlays is often missed by screen readers.
**Action:** Always implement a global 'Escape' key listener for overlays and modals. Use `role="log"` and `aria-live="polite"` on message containers to ensure new messages are announced. Always auto-focus the input field when an interactive overlay opens.
