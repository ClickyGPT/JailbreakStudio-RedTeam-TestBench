## 2025-05-15 - [Accessibility in Themed UIs]
**Learning:** "Cyberpunk" or "Studio" themed UIs often use non-semantic elements (like `<span>` or `<div>`) to achieve a specific aesthetic for buttons and navigation. This makes them invisible to screen readers and keyboard users.
**Action:** Always wrap stylized "links" in semantic `<button>` or `<a>` tags and add `aria-label` to icon-only buttons, regardless of how "technical" or "minimalist" the UI design is.

## 2025-05-15 - [Environment Dependencies for UI Rendering]
**Learning:** Environment variables (like `GEMINI_API_KEY`) being required at initialization time can prevent even basic UI tests from running if not mocked or provided in a `.env.local`.
**Action:** When a repository fails to render in dev mode, check for module-level initialization of third-party SDKs that might be crashing the app due to missing keys.

## 2025-05-15 - [Keyboard Accessibility for Hover Menus]
**Learning:** Hover-only dropdown menus are a common accessibility blocker for keyboard and screen reader users. Using Tailwind's `group-focus-within` utility provides a non-disruptive way to reveal these menus when their trigger or child elements receive focus.
**Action:** Always complement `hover:` based visibility with `group-focus-within:` on menu containers to ensure they are accessible to keyboard-only users without changing the mouse-driven experience.

## 2025-05-16 - [Standardizing Brand Consistency]
**Learning:** The primary brand color for RedTeam Studio is `cyber-lime` (#d3fd50). The use of `cyber-blue` or `cyber-green` in component styles is deprecated as they are unmapped in the Tailwind configuration, leading to fallback styles or visual inconsistency.
**Action:** Always use `cyber-lime` for primary accents and interactive elements to ensure visual harmony and proper style application.

## 2025-05-16 - [Modal Keyboard Accessibility]
**Learning:** Dismissing modals with the 'Escape' key is a fundamental expectation for keyboard accessibility.
**Action:** Implement a `useEffect` hook with a window event listener in all modal components to handle the 'Escape' key for closing the modal, ensuring proper cleanup.
