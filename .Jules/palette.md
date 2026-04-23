## 2025-05-15 - [Accessibility in Themed UIs]
**Learning:** "Cyberpunk" or "Studio" themed UIs often use non-semantic elements (like `<span>` or `<div>`) to achieve a specific aesthetic for buttons and navigation. This makes them invisible to screen readers and keyboard users.
**Action:** Always wrap stylized "links" in semantic `<button>` or `<a>` tags and add `aria-label` to icon-only buttons, regardless of how "technical" or "minimalist" the UI design is.

## 2025-05-15 - [Environment Dependencies for UI Rendering]
**Learning:** Environment variables (like `GEMINI_API_KEY`) being required at initialization time can prevent even basic UI tests from running if not mocked or provided in a `.env.local`.
**Action:** When a repository fails to render in dev mode, check for module-level initialization of third-party SDKs that might be crashing the app due to missing keys.

## 2026-03-17 - [Themed Keyboard Accessibility]
**Learning:** In dark-themed or "Studio" style UIs, standard browser focus rings often lack sufficient contrast or break the aesthetic. Using themed focus rings (e.g., `focus-within:ring-cyber-lime/20`) on input containers and `focus-visible:ring-1` on secondary action buttons provides a clear, accessible navigation path that feels integrated with the design.
**Action:** Implement custom focus rings using brand colors with low opacity for containers, and standard focus-visible rings for all interactive buttons to ensure WCAG keyboard accessibility.

## 2026-03-17 - [Non-Intrusive Input Feedback]
**Learning:** For high-frequency text inputs (like adversarial prompt composers), `aria-live` on character counters can be excessively noisy for screen reader users. Additionally, overlaying feedback elements (like counters) over textareas requires `pointer-events-none` to prevent them from interfering with text selection and clicking.
**Action:** Link character counters via `aria-describedby` instead of `aria-live` for high-frequency inputs, and use absolute positioning with `pointer-events-none` and `select-none` for UI overlays that sit inside interactive regions.
