## 2025-05-15 - [State-driven Accessible Clipboard Actions]
**Learning:** In technical/cyberpunk themed UIs where multiple copy buttons exist, providing dynamic text in the UI (e.g., changing from a copy icon to "COPIED") should always be paired with a dynamic `aria-label` (e.g., `aria-label={copied ? "Copied share link" : "Copy share link"}`) to notify screen readers of the state transition. Additionally, pairing this with `onFocus={(e) => e.target.select()}` on read-only inputs delivers a highly fluid power-user sharing experience.
**Action:** When implementing any clipboard copy trigger in this codebase, ensure both dynamic state-driven `aria-label` and `onFocus` input selection are used.

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
