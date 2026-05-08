## 2025-05-15 - [Accessibility in Themed UIs]
**Learning:** "Cyberpunk" or "Studio" themed UIs often use non-semantic elements (like `<span>` or `<div>`) to achieve a specific aesthetic for buttons and navigation. This makes them invisible to screen readers and keyboard users.
**Action:** Always wrap stylized "links" in semantic `<button>` or `<a>` tags and add `aria-label` to icon-only buttons, regardless of how "technical" or "minimalist" the UI design is.

## 2025-05-15 - [Environment Dependencies for UI Rendering]
**Learning:** Environment variables (like `GEMINI_API_KEY`) being required at initialization time can prevent even basic UI tests from running if not mocked or provided in a `.env.local`.
**Action:** When a repository fails to render in dev mode, check for module-level initialization of third-party SDKs that might be crashing the app due to missing keys.

## 2025-05-15 - [Keyboard Shortcut Hints and SSR Safety]
**Learning:** When adding keyboard shortcuts (e.g., Cmd/Ctrl+Enter) in a CSR application like RedTeam Studio, platform detection must happen inside `useEffect` to avoid SSR hydration mismatches. Visual hints should be implemented using Tailwind `group` containers with `hidden group-hover:inline group-focus-visible:inline` to maintain a clean UI while ensuring discoverability for keyboard users.
**Action:** Use a `isMac` state updated in `useEffect` for platform-specific hints, and always include `e.preventDefault()` in shortcut handlers to prevent unwanted default browser behaviors.
