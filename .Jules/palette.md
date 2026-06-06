## 2025-05-15 - [Accessibility in Themed UIs]
**Learning:** "Cyberpunk" or "Studio" themed UIs often use non-semantic elements (like `<span>` or `<div>`) to achieve a specific aesthetic for buttons and navigation. This makes them invisible to screen readers and keyboard users.
**Action:** Always wrap stylized "links" in semantic `<button>` or `<a>` tags and add `aria-label` to icon-only buttons, regardless of how "technical" or "minimalist" the UI design is.

## 2025-05-15 - [Environment Dependencies for UI Rendering]
**Learning:** Environment variables (like `GEMINI_API_KEY`) being required at initialization time can prevent even basic UI tests from running if not mocked or provided in a `.env.local`.
**Action:** When a repository fails to render in dev mode, check for module-level initialization of third-party SDKs that might be crashing the app due to missing keys.

## 2025-05-15 - [Keyboard Shortcuts for High-Frequency Actions]
**Learning:** In tools requiring repetitive cycles (like prompt engineering), users rely on keyboard shortcuts for flow. Adding `Cmd/Ctrl + Enter` to the main text area significantly improves the experience.
**Action:** Always implement standard shortcuts for submission in multi-line text areas and provide visual hints (tooltips/titles) to make them discoverable.

## 2025-05-15 - [Discoverable Close Actions in Modals]
**Learning:** Minimalist modal designs often use a single 'X' icon for closing. Without `aria-label`, these buttons are inaccessible to screen reader users and fail basic accessibility audits.
**Action:** Ensure every icon-only close button in a modal has a descriptive `aria-label="Close modal"` and use `transition-colors` to provide visual feedback for mouse users.
