## 2025-05-15 - [Accessibility in Themed UIs]
**Learning:** "Cyberpunk" or "Studio" themed UIs often use non-semantic elements (like `<span>` or `<div>`) to achieve a specific aesthetic for buttons and navigation. This makes them invisible to screen readers and keyboard users.
**Action:** Always wrap stylized "links" in semantic `<button>` or `<a>` tags and add `aria-label` to icon-only buttons, regardless of how "technical" or "minimalist" the UI design is.

## 2025-05-15 - [Environment Dependencies for UI Rendering]
**Learning:** Environment variables (like `GEMINI_API_KEY`) being required at initialization time can prevent even basic UI tests from running if not mocked or provided in a `.env.local`.
**Action:** When a repository fails to render in dev mode, check for module-level initialization of third-party SDKs that might be crashing the app due to missing keys.

## 2025-05-16 - [Platform-Specific Keyboard Shortcut Hints]
**Learning:** Hardcoding keyboard shortcut hints (e.g., "Cmd+Enter") in the UI can be confusing for users on different operating systems. Detecting the OS and showing the correct modifier (⌘ vs Ctrl) provides a much more polished and helpful experience.
**Action:** To ensure SSR safety and prevent hydration mismatches, detect Mac OS using `/Mac|iPod|iPhone|iPad/.test(navigator.userAgent)` inside a `useEffect` hook, providing platform-specific keyboard shortcut hints.
