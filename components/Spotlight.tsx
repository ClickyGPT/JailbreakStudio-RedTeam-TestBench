import React, { useEffect, useRef } from 'react';

/**
 * BOLT OPTIMIZATION: Isolate decorative, high-frequency visual effects
 * into a memoized component. This prevents the spotlight from undergoing
 * expensive reconciliation when the parent (App) re-renders due to
 * unrelated state changes like keystrokes in the Composer.
 */
const Spotlight: React.FC = React.memo(() => {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (spotlightRef.current) {
        // Direct DOM manipulation via style.setProperty avoids React's
        // reconciliation cycle for 60fps+ updates.
        spotlightRef.current.style.setProperty('--mouse-x', `${e.clientX}px`);
        spotlightRef.current.style.setProperty('--mouse-y', `${e.clientY}px`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={spotlightRef}
      className="pointer-events-none fixed inset-0 z-50 transition-opacity duration-300 opacity-30"
      style={{
        background: `radial-gradient(600px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(211, 253, 80, 0.1), transparent 40%)`
      }}
    />
  );
});

export default Spotlight;
