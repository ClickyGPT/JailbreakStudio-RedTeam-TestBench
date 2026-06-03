## 2025-05-15 - [Accessibility in Themed UIs]
**Learning:** "Cyberpunk" or "Studio" themed UIs often use non-semantic elements (like `<span>` or `<div>`) to achieve a specific aesthetic for buttons and navigation. This makes them invisible to screen readers and keyboard users.
**Action:** Always wrap stylized "links" in semantic `<button>` or `<a>` tags and add `aria-label` to icon-only buttons, regardless of how "technical" or "minimalist" the UI design is.

## 2025-05-15 - [Environment Dependencies for UI Rendering]
**Learning:** Environment variables (like `GEMINI_API_KEY`) being required at initialization time can prevent even basic UI tests from running if not mocked or provided in a `.env.local`.
**Action:** When a repository fails to render in dev mode, check for module-level initialization of third-party SDKs that might be crashing the app due to missing keys.

## 2025-06-03 - [Keyboard Accessibility for Hover Menus]
**Learning:** Technical UIs often use CSS-only hover menus for "cleanliness". These are completely inaccessible to keyboard users unless explicitly handled. Using Tailwind's `group-focus-within` on the parent and `focus-visible` on children provides a zero-JS way to make these menus fully accessible.
**Action:** Always check if "hover" menus can be triggered via Tab and ensure children have high-contrast focus states (e.g., `focus-visible:bg-cyber-lime focus-visible:text-black`).
