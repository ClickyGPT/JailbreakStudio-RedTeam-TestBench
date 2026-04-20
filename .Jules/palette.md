## 2025-05-15 - [Accessibility in Themed UIs]
**Learning:** "Cyberpunk" or "Studio" themed UIs often use non-semantic elements (like `<span>` or `<div>`) to achieve a specific aesthetic for buttons and navigation. This makes them invisible to screen readers and keyboard users.
**Action:** Always wrap stylized "links" in semantic `<button>` or `<a>` tags and add `aria-label` to icon-only buttons, regardless of how "technical" or "minimalist" the UI design is.

## 2025-05-15 - [Environment Dependencies for UI Rendering]
**Learning:** Environment variables (like `GEMINI_API_KEY`) being required at initialization time can prevent even basic UI tests from running if not mocked or provided in a `.env.local`.
**Action:** When a repository fails to render in dev mode, check for module-level initialization of third-party SDKs that might be crashing the app due to missing keys.

## 2026-03-17 - [Keyboard Accessibility for Custom Dropdowns]
**Learning:** In highly customized or themed UIs (like the RedTeam Studio cyberpunk aesthetic), standard focus indicators are often suppressed or visually inconsistent. Non-standard UI components like custom-built dropdowns are frequently inaccessible to keyboard users because they rely on 'group-hover' for visibility, which does not respond to focus events.
**Action:** Always complement 'group-hover' with 'group-focus-within' on container elements and ensure trigger buttons have 'aria-haspopup="true"'. This ensures that navigating to the menu via Tab key reveals the content, maintaining accessibility without compromising the custom visual design.
