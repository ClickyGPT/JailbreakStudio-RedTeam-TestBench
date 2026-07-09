## 2025-05-15 - [Accessibility in Themed UIs]
**Learning:** "Cyberpunk" or "Studio" themed UIs often use non-semantic elements (like `<span>` or `<div>`) to achieve a specific aesthetic for buttons and navigation. This makes them invisible to screen readers and keyboard users.
**Action:** Always wrap stylized "links" in semantic `<button>` or `<a>` tags and add `aria-label` to icon-only buttons, regardless of how "technical" or "minimalist" the UI design is.

## 2025-05-15 - [Environment Dependencies for UI Rendering]
**Learning:** Environment variables (like `GEMINI_API_KEY`) being required at initialization time can prevent even basic UI tests from running if not mocked or provided in a `.env.local`.
**Action:** When a repository fails to render in dev mode, check for module-level initialization of third-party SDKs that might be crashing the app due to missing keys.

## 2025-05-15 - [Keyboard Accessibility for Hover Menus]
**Learning:** Hover-only dropdown menus are a common accessibility blocker for keyboard and screen reader users. Using Tailwind's `group-focus-within` utility provides a non-disruptive way to reveal these menus when their trigger or child elements receive focus.
**Action:** Always complement `hover:` based visibility with `group-focus-within:` on menu containers to ensure they are accessible to keyboard-only users without changing the mouse-driven experience.

## 2025-05-15 - [Minimalist Modal Accessibility]
**Learning:** In dense, tool-heavy interfaces where visual labels create clutter, the `sr-only` class is essential for providing accessible names to input fields without impacting the minimalist aesthetic. Additionally, the `Escape` key listener is a non-negotiable standard for power-user productivity and accessibility in modals.
**Action:** Use `sr-only` for labels in compact forms and always implement `Escape` key dismissal in modal components to balance "cyber" aesthetics with usability.

## 2025-05-15 - [Instant Copy UX for Share Links]
**Learning:** For high-utility read-only inputs like share links, users almost always intend to copy the text. Adding `onFocus={(e) => e.target.select()}` provides a significant micro-UX improvement by facilitating instant text selection.
**Action:** Apply `onFocus={(e) => e.target.select()}` to any read-only input meant for copying (e.g., share links, API keys, IDs).
