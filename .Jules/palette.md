## 2025-05-15 - [Accessibility in Themed UIs]
**Learning:** "Cyberpunk" or "Studio" themed UIs often use non-semantic elements (like `<span>` or `<div>`) to achieve a specific aesthetic for buttons and navigation. This makes them invisible to screen readers and keyboard users.
**Action:** Always wrap stylized "links" in semantic `<button>` or `<a>` tags and add `aria-label` to icon-only buttons, regardless of how "technical" or "minimalist" the UI design is.

## 2025-05-15 - [Environment Dependencies for UI Rendering]
**Learning:** Environment variables (like `GEMINI_API_KEY`) being required at initialization time can prevent even basic UI tests from running if not mocked or provided in a `.env.local`.
**Action:** When a repository fails to render in dev mode, check for module-level initialization of third-party SDKs that might be crashing the app due to missing keys.

## 2026-03-17 - [Accessible Progressive Disclosure via Focus]
**Learning:** Using Tailwind's `group-focus-within` on parent containers allows for implementing "discoverable" keyboard shortcuts and character counters that only appear when relevant, maintaining a clean UI for passive viewing while providing critical feedback during interaction. It also effectively resolves "hover-only" accessibility barriers for dropdown menus.
**Action:** Implement secondary UI elements (hints, counters, dropdown visibility) using `group-focus-within` to balance minimalist design with accessibility and power-user discovery.
