## 2025-05-15 - [Accessibility in Themed UIs]
**Learning:** "Cyberpunk" or "Studio" themed UIs often use non-semantic elements (like `<span>` or `<div>`) to achieve a specific aesthetic for buttons and navigation. This makes them invisible to screen readers and keyboard users.
**Action:** Always wrap stylized "links" in semantic `<button>` or `<a>` tags and add `aria-label` to icon-only buttons, regardless of how "technical" or "minimalist" the UI design is.

## 2025-05-15 - [Environment Dependencies for UI Rendering]
**Learning:** Environment variables (like `GEMINI_API_KEY`) being required at initialization time can prevent even basic UI tests from running if not mocked or provided in a `.env.local`.
**Action:** When a repository fails to render in dev mode, check for module-level initialization of third-party SDKs that might be crashing the app due to missing keys.

## 2026-03-24 - [Keyboard Accessibility for Hover Dropdowns]
**Learning:** Hover-activated dropdown menus (like "AI AUGMENT" and "+ VARS") are often inaccessible to keyboard users because they lack a focus-triggered visibility state. Using Tailwind's group-focus-within allows these menus to remain open when a child element (like a menu item) receives focus, enabling full keyboard navigation.
**Action:** Always implement group-focus-within on parent containers of hover-menus to ensure they support keyboard-only interaction without requiring complex JavaScript state management.
