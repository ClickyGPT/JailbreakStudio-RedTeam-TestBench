## 2025-05-15 - [Accessibility in Themed UIs]
**Learning:** "Cyberpunk" or "Studio" themed UIs often use non-semantic elements (like `<span>` or `<div>`) to achieve a specific aesthetic for buttons and navigation. This makes them invisible to screen readers and keyboard users.
**Action:** Always wrap stylized "links" in semantic `<button>` or `<a>` tags and add `aria-label` to icon-only buttons, regardless of how "technical" or "minimalist" the UI design is.

## 2025-05-15 - [Environment Dependencies for UI Rendering]
**Learning:** Environment variables (like `GEMINI_API_KEY`) being required at initialization time can prevent even basic UI tests from running if not mocked or provided in a `.env.local`.
**Action:** When a repository fails to render in dev mode, check for module-level initialization of third-party SDKs that might be crashing the app due to missing keys.

## 2026-03-17 - [Dynamic Keyboard Shortcut Hints]
**Learning:** For power-user interfaces like RedTeam Studio, keyboard shortcuts significantly improve the "flow" of rapid iterations. However, providing the wrong hint (e.g., "Cmd" on Windows) can be confusing and reduce trust in the tool.
**Action:** Use a memoized `isMac` check (with SSR safety) to dynamically provide platform-specific hints (e.g., ⌘↩ vs Ctrl+Enter) in button `title` attributes and tooltips.

## 2026-03-17 - [Hydration Latency with ESM.sh]
**Learning:** In headless browser environments with restricted network profiles, apps relying on `importmap` with `esm.sh` can suffer from extreme hydration latency (>60s), causing automated UI tests to time out even when the server is "ready".
**Action:** For automated verification in such environments, prioritize checking build artifacts for string occurrences or using extremely generous timeouts (>120s) if visual verification is strictly required.
