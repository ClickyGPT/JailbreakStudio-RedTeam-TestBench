## 2025-05-15 - [Accessibility in Themed UIs]
**Learning:** "Cyberpunk" or "Studio" themed UIs often use non-semantic elements (like `<span>` or `<div>`) to achieve a specific aesthetic for buttons and navigation. This makes them invisible to screen readers and keyboard users.
**Action:** Always wrap stylized "links" in semantic `<button>` or `<a>` tags and add `aria-label` to icon-only buttons, regardless of how "technical" or "minimalist" the UI design is.

## 2025-05-15 - [Environment Dependencies for UI Rendering]
**Learning:** Environment variables (like `GEMINI_API_KEY`) being required at initialization time can prevent even basic UI tests from running if not mocked or provided in a `.env.local`.
**Action:** When a repository fails to render in dev mode, check for module-level initialization of third-party SDKs that might be crashing the app due to missing keys.

## 2026-06-10 - [Keyboard Accessibility for Hover Menus]
**Learning:** CSS-only hover menus (using `group-hover:block`) are inaccessible to keyboard users as they don't trigger on focus. In the RedTeam Studio theme, using `group-focus-within:block` on the container and `aria-haspopup="true"` on the trigger provides a low-overhead accessibility win.
**Action:** Always pair `group-hover` with `group-focus-within` for dropdowns and ensure interactive triggers have appropriate ARIA roles.

## 2026-06-10 - [High-Contrast Focus States in Dark Themes]
**Learning:** Standard browser focus rings are often hard to see against the dark, high-detail background of RedTeam Studio. Using `focus-visible:bg-cyber-lime focus-visible:text-black` provides a consistent, high-contrast visual indicator that matches the "Cyberpunk" aesthetic.
**Action:** Use the `cyber-lime` background for `focus-visible` states on buttons and navigation elements to ensure clear keyboard navigation paths.
