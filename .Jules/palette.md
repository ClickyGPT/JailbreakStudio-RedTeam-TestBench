## 2025-05-15 - [Accessibility in Themed UIs]
**Learning:** "Cyberpunk" or "Studio" themed UIs often use non-semantic elements (like `<span>` or `<div>`) to achieve a specific aesthetic for buttons and navigation. This makes them invisible to screen readers and keyboard users.
**Action:** Always wrap stylized "links" in semantic `<button>` or `<a>` tags and add `aria-label` to icon-only buttons, regardless of how "technical" or "minimalist" the UI design is.

## 2025-05-15 - [Environment Dependencies for UI Rendering]
**Learning:** Environment variables (like `GEMINI_API_KEY`) being required at initialization time can prevent even basic UI tests from running if not mocked or provided in a `.env.local`.
**Action:** When a repository fails to render in dev mode, check for module-level initialization of third-party SDKs that might be crashing the app due to missing keys.

## 2026-03-17 - [Keyboard Accessibility for Hover Menus]
**Learning:** Dropdown menus that only appear on `:hover` are completely inaccessible to keyboard-only users who rely on the `Tab` key to navigate.
**Action:** Use Tailwind's `group-focus-within:block` (or equivalent CSS) on the menu container to ensure the dropdown remains visible when any child element (like a button) receives focus, enabling keyboard navigation through the menu options.

## 2026-03-17 - [Platform-Specific Shortcut Discoverability]
**Learning:** Users expect power-user shortcuts (like Cmd+Enter) in textareas, but often don't know they exist unless explicitly told.
**Action:** Always provide platform-specific hints (e.g., "⌘⏎" for Mac, "Ctrl+⏎" for Windows) in tooltips and button labels using a simple `useMemo` platform check to reduce friction and improve feature adoption.
