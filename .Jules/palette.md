## 2025-05-15 - [Accessibility in Themed UIs]
**Learning:** "Cyberpunk" or "Studio" themed UIs often use non-semantic elements (like `<span>` or `<div>`) to achieve a specific aesthetic for buttons and navigation. This makes them invisible to screen readers and keyboard users.
**Action:** Always wrap stylized "links" in semantic `<button>` or `<a>` tags and add `aria-label` to icon-only buttons, regardless of how "technical" or "minimalist" the UI design is.

## 2025-05-15 - [Environment Dependencies for UI Rendering]
**Learning:** Environment variables (like `GEMINI_API_KEY`) being required at initialization time can prevent even basic UI tests from running if not mocked or provided in a `.env.local`.
**Action:** When a repository fails to render in dev mode, check for module-level initialization of third-party SDKs that might be crashing the app due to missing keys.

## 2026-03-17 - [Accessible Character Counters]
**Learning:** To implement accessible dynamic character counters for text inputs, link the counter element to the input via 'aria-describedby', use 'aria-live="polite"' on the counter container for real-time updates for screen readers, and ensure sufficient text contrast (e.g., 'text-zinc-500' on dark backgrounds).
**Action:** Use absolute positioning (e.g., 'absolute bottom-4 right-6') combined with 'pointer-events-none' and 'select-none' to ensure the UI element does not interfere with the user's ability to select text or click the underlying input.
