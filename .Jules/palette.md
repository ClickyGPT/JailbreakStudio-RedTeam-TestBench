## 2025-05-15 - [Accessibility in Themed UIs]
**Learning:** "Cyberpunk" or "Studio" themed UIs often use non-semantic elements (like `<span>` or `<div>`) to achieve a specific aesthetic for buttons and navigation. This makes them invisible to screen readers and keyboard users.
**Action:** Always wrap stylized "links" in semantic `<button>` or `<a>` tags and add `aria-label` to icon-only buttons, regardless of how "technical" or "minimalist" the UI design is.

## 2025-05-15 - [Environment Dependencies for UI Rendering]
**Learning:** Environment variables (like `GEMINI_API_KEY`) being required at initialization time can prevent even basic UI tests from running if not mocked or provided in a `.env.local`.
**Action:** When a repository fails to render in dev mode, check for module-level initialization of third-party SDKs that might be crashing the app due to missing keys.

## 2025-05-15 - [Keyboard Shortcut Functional Parity]
**Learning:** Power-user keyboard shortcuts (like Cmd+Enter for submission) are often implemented without the same guards as the primary UI button (e.g., checking if the input is empty or if a process is already running). This can lead to unexpected app behavior if users bypass visual state restrictions via the keyboard.
**Action:** Ensure keyboard event handlers mirror the exact logic and state-checks of the primary interactive element they trigger to maintain a consistent and predictable user experience across all input methods.
