## 2025-05-15 - [Accessibility in Themed UIs]
**Learning:** "Cyberpunk" or "Studio" themed UIs often use non-semantic elements (like `<span>` or `<div>`) to achieve a specific aesthetic for buttons and navigation. This makes them invisible to screen readers and keyboard users.
**Action:** Always wrap stylized "links" in semantic `<button>` or `<a>` tags and add `aria-label` to icon-only buttons, regardless of how "technical" or "minimalist" the UI design is.

## 2025-05-15 - [Environment Dependencies for UI Rendering]
**Learning:** Environment variables (like `GEMINI_API_KEY`) being required at initialization time can prevent even basic UI tests from running if not mocked or provided in a `.env.local`.
**Action:** When a repository fails to render in dev mode, check for module-level initialization of third-party SDKs that might be crashing the app due to missing keys.

## 2026-03-17 - [SSR-Safe Platform Detection for Micro-UX]
**Learning:** When implementing platform-specific keyboard shortcut hints (e.g., Cmd vs Ctrl), accessing `navigator.userAgent` during render (including within `useMemo`) can cause SSR crashes if the application is ever rendered on the server.
**Action:** Wrap platform detection logic in a `useEffect` hook or perform a `typeof window` check to ensure the code only runs in the browser environment, maintaining SSR safety.
