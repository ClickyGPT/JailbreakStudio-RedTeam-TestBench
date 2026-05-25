## 2025-05-15 - [Accessibility in Themed UIs]
**Learning:** "Cyberpunk" or "Studio" themed UIs often use non-semantic elements (like `<span>` or `<div>`) to achieve a specific aesthetic for buttons and navigation. This makes them invisible to screen readers and keyboard users.
**Action:** Always wrap stylized "links" in semantic `<button>` or `<a>` tags and add `aria-label` to icon-only buttons, regardless of how "technical" or "minimalist" the UI design is.

## 2025-05-15 - [Environment Dependencies for UI Rendering]
**Learning:** Environment variables (like `GEMINI_API_KEY`) being required at initialization time can prevent even basic UI tests from running if not mocked or provided in a `.env.local`.
**Action:** When a repository fails to render in dev mode, check for module-level initialization of third-party SDKs that might be crashing the app due to missing keys.

## 2025-05-15 - [Keyboard Accessible Hover Menus]
**Learning:** CSS-only hover menus (using `group-hover`) are inaccessible to keyboard users. Using Tailwind's `group-focus-within` allows these menus to remain visible when child elements receive focus, bridging the gap between mouse and keyboard usability without complex JS state.
**Action:** When implementing hover-to-reveal functionality, always pair `group-hover:block` (or equivalent) with `group-focus-within:block` to ensure keyboard accessibility.

## 2025-05-15 - [SSR-Safe Keyboard Shortcut Hints]
**Learning:** Detecting the user's OS (Mac vs. Windows/Linux) to display appropriate keyboard shortcut hints (e.g., ⌘↵ vs. Ctrl+Enter) can cause hydration mismatches if done during the initial render.
**Action:** Use a `useEffect` hook to set the platform-specific hint after mount, or provide a generic "Enter" hint if the OS detection isn't critical, to ensure consistency between server-side and client-side rendering.
