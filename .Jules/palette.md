## 2025-05-15 - [Accessibility in Themed UIs]
**Learning:** "Cyberpunk" or "Studio" themed UIs often use non-semantic elements (like `<span>` or `<div>`) to achieve a specific aesthetic for buttons and navigation. This makes them invisible to screen readers and keyboard users.
**Action:** Always wrap stylized "links" in semantic `<button>` or `<a>` tags and add `aria-label` to icon-only buttons, regardless of how "technical" or "minimalist" the UI design is.

## 2025-05-15 - [Environment Dependencies for UI Rendering]
**Learning:** Environment variables (like `GEMINI_API_KEY`) being required at initialization time can prevent even basic UI tests from running if not mocked or provided in a `.env.local`.
**Action:** When a repository fails to render in dev mode, check for module-level initialization of third-party SDKs that might be crashing the app due to missing keys.

## 2025-05-15 - [Named Tailwind Groups for Keyboard Accessibility]
**Learning:** When multiple hover-based dropdowns are present in the same component, standard `group` classes can cause all dropdowns to trigger simultaneously. Named groups (e.g., `group/item`) allow for isolated interaction.
**Action:** Use named Tailwind groups (e.g., `group/augment`) combined with `group-focus-within/augment` to ensure that keyboard focus only opens the specific targeted menu, preventing UI clutter and maintaining focus logic.
