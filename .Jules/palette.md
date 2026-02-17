## 2025-05-15 - [Accessibility in Themed UIs]
**Learning:** "Cyberpunk" or "Studio" themed UIs often use non-semantic elements (like `<span>` or `<div>`) to achieve a specific aesthetic for buttons and navigation. This makes them invisible to screen readers and keyboard users.
**Action:** Always wrap stylized "links" in semantic `<button>` or `<a>` tags and add `aria-label` to icon-only buttons, regardless of how "technical" or "minimalist" the UI design is.

## 2025-05-15 - [Environment Dependencies for UI Rendering]
**Learning:** Environment variables (like `GEMINI_API_KEY`) being required at initialization time can prevent even basic UI tests from running if not mocked or provided in a `.env.local`.
**Action:** When a repository fails to render in dev mode, check for module-level initialization of third-party SDKs that might be crashing the app due to missing keys.

## 2026-02-17 - [Keyboard Accessibility for Hover Menus]
**Learning:** Hover-triggered dropdown menus are common in "pro" tool interfaces but are completely inaccessible to keyboard users unless explicitly handled. Tailwind's `group-focus-within` is a powerful, low-code way to bridge this gap without needing complex state management.
**Action:** When implementing hover menus, always apply `group-focus-within` to the parent container and ensure the triggering button has `aria-haspopup="true"` to signal the behavior to assistive technologies.
