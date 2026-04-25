## 2025-05-15 - [Accessibility in Themed UIs]
**Learning:** "Cyberpunk" or "Studio" themed UIs often use non-semantic elements (like `<span>` or `<div>`) to achieve a specific aesthetic for buttons and navigation. This makes them invisible to screen readers and keyboard users.
**Action:** Always wrap stylized "links" in semantic `<button>` or `<a>` tags and add `aria-label` to icon-only buttons, regardless of how "technical" or "minimalist" the UI design is.

## 2025-05-15 - [Environment Dependencies for UI Rendering]
**Learning:** Environment variables (like `GEMINI_API_KEY`) being required at initialization time can prevent even basic UI tests from running if not mocked or provided in a `.env.local`.
**Action:** When a repository fails to render in dev mode, check for module-level initialization of third-party SDKs that might be crashing the app due to missing keys.

## 2026-03-24 - [Keyboard Accessibility for Hover Menus]
**Learning:** Dropdown menus that appear only on hover (using CSS 'group-hover') are inaccessible to keyboard users. Using Tailwind's 'group-focus-within' allows these menus to remain visible when a child element (like a button) is focused, bridging the gap between mouse and keyboard interaction.
**Action:** Always combine 'group-hover:block' with 'group-focus-within:block' on stylized dropdown containers.

## 2026-03-24 - [Shortcut Discoverability and Safety]
**Learning:** While keyboard shortcuts improve power-user efficiency, they are "invisible" features unless communicated. Including 'e.preventDefault()' in handlers is critical to prevent unwanted side effects (like newlines in textareas).
**Action:** Pair shortcut implementation with visual hints (e.g., '(⌘↵)') in tooltips or button labels, and always call 'e.preventDefault()' in the event handler.
