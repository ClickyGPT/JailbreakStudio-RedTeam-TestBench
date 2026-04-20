## 2025-05-15 - [Accessibility in Themed UIs]
**Learning:** "Cyberpunk" or "Studio" themed UIs often use non-semantic elements (like `<span>` or `<div>`) to achieve a specific aesthetic for buttons and navigation. This makes them invisible to screen readers and keyboard users.
**Action:** Always wrap stylized "links" in semantic `<button>` or `<a>` tags and add `aria-label` to icon-only buttons, regardless of how "technical" or "minimalist" the UI design is.

## 2025-05-15 - [Environment Dependencies for UI Rendering]
**Learning:** Environment variables (like `GEMINI_API_KEY`) being required at initialization time can prevent even basic UI tests from running if not mocked or provided in a `.env.local`.
**Action:** When a repository fails to render in dev mode, check for module-level initialization of third-party SDKs that might be crashing the app due to missing keys.

## 2025-05-15 - [Cohesive Focus Indicators for Input Groups]
**Learning:** In UIs with custom-styled input containers (e.g., bordered boxes containing a textarea and multiple buttons), applying `focus-visible` to the inner textarea alone can look disjointed.
**Action:** Apply `focus-within:border-cyber-lime` (or the theme's focus color) to the parent container while using `focus:outline-none` on the child input/textarea to provide a single, cohesive focus state for the entire interaction area.
