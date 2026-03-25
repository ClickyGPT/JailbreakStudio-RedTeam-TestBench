## 2025-05-15 - [Accessibility in Themed UIs]
**Learning:** "Cyberpunk" or "Studio" themed UIs often use non-semantic elements (like `<span>` or `<div>`) to achieve a specific aesthetic for buttons and navigation. This makes them invisible to screen readers and keyboard users.
**Action:** Always wrap stylized "links" in semantic `<button>` or `<a>` tags and add `aria-label` to icon-only buttons, regardless of how "technical" or "minimalist" the UI design is.

## 2025-05-15 - [Environment Dependencies for UI Rendering]
**Learning:** Environment variables (like `GEMINI_API_KEY`) being required at initialization time can prevent even basic UI tests from running if not mocked or provided in a `.env.local`.
**Action:** When a repository fails to render in dev mode, check for module-level initialization of third-party SDKs that might be crashing the app due to missing keys.

## 2026-03-17 - [Non-blocking Textarea Overlays]
**Learning:** To implement non-blocking overlays (like status badges or character counters) over interactive textareas, use absolute positioning (e.g., 'absolute bottom-4 right-6') combined with 'pointer-events-none' and 'select-none' to ensure the UI element does not interfere with the user's ability to select text or click the underlying input.
**Action:** Apply 'pointer-events-none' and 'select-none' to any informational overlays that occupy the same visual space as interactive inputs.
