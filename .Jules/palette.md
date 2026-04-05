## 2025-05-15 - [Accessibility in Themed UIs]
**Learning:** "Cyberpunk" or "Studio" themed UIs often use non-semantic elements (like `<span>` or `<div>`) to achieve a specific aesthetic for buttons and navigation. This makes them invisible to screen readers and keyboard users.
**Action:** Always wrap stylized "links" in semantic `<button>` or `<a>` tags and add `aria-label` to icon-only buttons, regardless of how "technical" or "minimalist" the UI design is.

## 2025-05-15 - [Environment Dependencies for UI Rendering]
**Learning:** Environment variables (like `GEMINI_API_KEY`) being required at initialization time can prevent even basic UI tests from running if not mocked or provided in a `.env.local`.
**Action:** When a repository fails to render in dev mode, check for module-level initialization of third-party SDKs that might be crashing the app due to missing keys.

## 2025-05-15 - [Enhancing Input Composers]
**Learning:** For multi-line text inputs (textareas) in "Studio" applications, users expect power-user shortcuts (`Ctrl/Cmd + Enter`) and immediate visual feedback on input length. Additionally, using `group-focus-within` on dropdown containers ensures they remain accessible to keyboard users who navigate using Tab into the menu items.
**Action:** Always include a character count display and a keyboard shortcut for primary actions in composer-style components. Use `group-focus-within:block` combined with `focus-visible` styles on menu items to bridge the gap between "hover-only" and "keyboard-friendly" menus.
