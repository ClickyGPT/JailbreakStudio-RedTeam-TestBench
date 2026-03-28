## 2025-05-15 - [Accessibility in Themed UIs]
**Learning:** "Cyberpunk" or "Studio" themed UIs often use non-semantic elements (like `<span>` or `<div>`) to achieve a specific aesthetic for buttons and navigation. This makes them invisible to screen readers and keyboard users.
**Action:** Always wrap stylized "links" in semantic `<button>` or `<a>` tags and add `aria-label` to icon-only buttons, regardless of how "technical" or "minimalist" the UI design is.

## 2025-05-15 - [Environment Dependencies for UI Rendering]
**Learning:** Environment variables (like `GEMINI_API_KEY`) being required at initialization time can prevent even basic UI tests from running if not mocked or provided in a `.env.local`.
**Action:** When a repository fails to render in dev mode, check for module-level initialization of third-party SDKs that might be crashing the app due to missing keys.

## 2026-02-19 - Keyboard-Accessible Dropdowns and Chat ARIA Roles
**Learning:** Hover-only menus using Tailwind's `group-hover:block` are inaccessible to keyboard users. This pattern was prevalent in the 'RedTeam Studio' codebase, specifically in the Composer component.
**Action:** Use `group-focus-within:block` in conjunction with `group-hover:block` to ensure menus appear when the parent or any child receives focus. Always supplement this with `aria-haspopup="true"` on the trigger and `focus-visible` styles for all interactive items.

**Learning:** Dynamic chat logs require specific ARIA roles to ensure screen readers announce new content as it streams in.
**Action:** Assign `role="log"` and `aria-live="polite"` to chat history containers to provide an accessible live-region for message updates.
