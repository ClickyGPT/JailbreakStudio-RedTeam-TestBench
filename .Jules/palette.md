## 2025-05-15 - [Accessibility in Themed UIs]
**Learning:** "Cyberpunk" or "Studio" themed UIs often use non-semantic elements (like `<span>` or `<div>`) to achieve a specific aesthetic for buttons and navigation. This makes them invisible to screen readers and keyboard users.
**Action:** Always wrap stylized "links" in semantic `<button>` or `<a>` tags and add `aria-label` to icon-only buttons, regardless of how "technical" or "minimalist" the UI design is.

## 2025-05-15 - [Environment Dependencies for UI Rendering]
**Learning:** Environment variables (like `GEMINI_API_KEY`) being required at initialization time can prevent even basic UI tests from running if not mocked or provided in a `.env.local`.
**Action:** When a repository fails to render in dev mode, check for module-level initialization of third-party SDKs that might be crashing the app due to missing keys.

## 2025-05-15 - [Keyboard Accessible Dropdowns with Named Groups]
**Learning:** Using `group-focus-within` on a parent container is a reliable way to toggle visibility for hover-based dropdowns for keyboard users without needing JS state for focus tracking. However, when styling nested elements within these menus, using named groups (e.g., `group/item` and `group-focus/item:`) is essential to prevent parent focus states from incorrectly triggering child styles across all items.
**Action:** Implement `group-focus-within:block` on dropdown containers and use specific named group modifiers for granular control over individual menu item focus states.
