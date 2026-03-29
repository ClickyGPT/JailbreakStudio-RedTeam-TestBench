## 2025-05-15 - [Accessibility in Themed UIs]
**Learning:** "Cyberpunk" or "Studio" themed UIs often use non-semantic elements (like `<span>` or `<div>`) to achieve a specific aesthetic for buttons and navigation. This makes them invisible to screen readers and keyboard users.
**Action:** Always wrap stylized "links" in semantic `<button>` or `<a>` tags and add `aria-label` to icon-only buttons, regardless of how "technical" or "minimalist" the UI design is.

## 2025-05-15 - [Environment Dependencies for UI Rendering]
**Learning:** Environment variables (like `GEMINI_API_KEY`) being required at initialization time can prevent even basic UI tests from running if not mocked or provided in a `.env.local`.
**Action:** When a repository fails to render in dev mode, check for module-level initialization of third-party SDKs that might be crashing the app due to missing keys.

## 2026-03-17 - [Accessible Dynamic Character Counters]
**Learning:** For dynamic UI overlays like character counters, simple absolute positioning can visually block text if not carefully placed. Furthermore, these elements are invisible to screen readers unless explicitly linked to the input.
**Action:** Always use `aria-describedby` on the target textarea to link it to the counter's ID, and add `aria-live="polite"` to the counter itself to ensure screen readers announce updates without interrupting the user's flow. Ensure color contrast meets WCAG AA standards (e.g., zinc-500 on dark backgrounds instead of low-contrast grays).
