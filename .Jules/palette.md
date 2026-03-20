## 2025-05-15 - [Accessibility in Themed UIs]
**Learning:** "Cyberpunk" or "Studio" themed UIs often use non-semantic elements (like `<span>` or `<div>`) to achieve a specific aesthetic for buttons and navigation. This makes them invisible to screen readers and keyboard users.
**Action:** Always wrap stylized "links" in semantic `<button>` or `<a>` tags and add `aria-label` to icon-only buttons, regardless of how "technical" or "minimalist" the UI design is.

## 2025-05-15 - [Environment Dependencies for UI Rendering]
**Learning:** Environment variables (like `GEMINI_API_KEY`) being required at initialization time can prevent even basic UI tests from running if not mocked or provided in a `.env.local`.
**Action:** When a repository fails to render in dev mode, check for module-level initialization of third-party SDKs that might be crashing the app due to missing keys.

## 2026-03-17 - [Platform-Specific Keyboard Affordance]
**Learning:** Users expect platform-specific keyboard shortcuts (Cmd on Mac, Ctrl on PC). Providing visual hints that match the user's OS significantly improves discoverability and perceived "polish" of the tool.
**Action:** Detect the user's OS via `navigator.userAgent` and dynamically render shortcut labels (e.g., `⌘↵` vs `Ctrl+↵`) in tooltips and button text.
