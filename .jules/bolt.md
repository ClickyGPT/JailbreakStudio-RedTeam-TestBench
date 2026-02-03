## 2025-05-22 - Optimizing simulation latency and render cycles

**Learning:** Artificial delays (like `setTimeout`) in simulation logic significantly degrade perceived performance and "snappiness" without providing functional value. Additionally, high-frequency state updates in a parent component (like a text input) can cause expensive re-renders in complex sibling components (like the SimulationPanel) if they share the same state, even if the sibling only needs the state occasionally.

**Action:**
1. Always audit for "dramatic effect" delays and remove them.
2. Use "staged" state (e.g., `testedPrompt` vs `prompt`) to decouple expensive UI components from high-frequency input states.
3. Throttle high-frequency event listeners (like `mousemove`) using `requestAnimationFrame` to prevent main-thread congestion.
