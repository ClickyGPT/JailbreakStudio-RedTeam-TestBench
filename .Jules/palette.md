## 2025-05-15 - [Initial Entry]
**Learning:** Found that the initial RedTeamChat component lacked basic accessibility features like ARIA labels for icon-only buttons and visible focus indicators.
**Action:** Always ensure interactive elements have clear labels (aria-label/title) and visible focus states (focus-visible) to support keyboard and screen reader users.

**Learning:** Missing script tag in `index.html` can block the entire frontend from loading, making verification impossible without fixing it first.
**Action:** Verify basic app structure and entry points if the dev server doesn't seem to serve the application correctly.
