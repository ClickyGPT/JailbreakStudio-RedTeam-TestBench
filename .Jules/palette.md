## 2025-05-15 - [Accessibility in Themed UIs]
**Learning:** "Cyberpunk" or "Studio" themed UIs often use non-semantic elements (like `<span>` or `<div>`) to achieve a specific aesthetic for buttons and navigation. This makes them invisible to screen readers and keyboard users.
**Action:** Always wrap stylized "links" in semantic `<button>` or `<a>` tags and add `aria-label` to icon-only buttons, regardless of how "technical" or "minimalist" the UI design is.

## 2025-05-15 - [Environment Dependencies for UI Rendering]
**Learning:** Environment variables (like `GEMINI_API_KEY`) being required at initialization time can prevent even basic UI tests from running if not mocked or provided in a `.env.local`.
**Action:** When a repository fails to render in dev mode, check for module-level initialization of third-party SDKs that might be crashing the app due to missing keys.

## 2025-05-16 - [Platform-Aware Keyboard Shortcuts]
**Learning:** Users expect platform-specific keyboard shortcuts (e.g., Cmd+Enter on Mac, Ctrl+Enter on Windows) for primary actions in input-heavy UIs. Displaying these hints only on hover/focus keeps the UI clean for casual users while empowering power users.
**Action:** Use a `useEffect` hook to detect the user's platform and provide dynamically updated tooltips and keyboard handlers. Ensure `e.preventDefault()` is called to avoid double-actions.

## 2025-05-16 - [Keyboard Accessible Dropdowns]
**Learning:** Standard hover-based dropdowns are often inaccessible to keyboard users. Using Tailwind's `group-focus-within` allows these menus to be revealed and navigated when the trigger element or its children receive focus.
**Action:** Wrap dropdown triggers and content in a `group` container and use `group-focus-within:block` (or similar visibility classes) to bridge the gap between hover and focus states.
