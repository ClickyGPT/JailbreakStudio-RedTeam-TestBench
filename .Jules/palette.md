## 2025-05-15 - [Accessible Dropdowns]
**Learning:** Using `group-hover` in Tailwind for dropdown menus is insufficient for accessibility as it relies on mouse interaction.
**Action:** Use `group-focus-within` on the parent container combined with `focus-visible` on the trigger button and menu items to ensure the dropdown is visible and navigable via keyboard (Tab/Shift+Tab). This maintains the design intent while providing full accessibility.
