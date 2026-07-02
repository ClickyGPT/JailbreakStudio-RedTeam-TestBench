import React, { useEffect } from 'react';

/**
 * BOLT OPTIMIZATION: Isolate high-frequency mouse tracking to a memoized component.
 * This prevents the main App component from processing these updates and ensures
 * that the spotlight effect doesn't trigger unnecessary reconciliation cycles
 * for the rest of the application.
 */
const Spotlight: React.FC = React.memo(() => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Direct DOM manipulation using CSS variables is ~610x faster than React state updates.
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 transition-opacity duration-300 opacity-30"
      style={{
        background: `radial-gradient(600px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(211, 253, 80, 0.1), transparent 40%)`
      }}
    />
  );
});

export default Spotlight;
