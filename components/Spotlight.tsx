import React, { useEffect, useRef } from 'react';

/**
 * BOLT OPTIMIZATION: Isolated Spotlight Component
 *
 * This component handles the high-frequency mouse-tracking spotlight effect.
 * By isolating it from the main App state and using direct DOM manipulation (setProperty),
 * we prevent the entire application from re-rendering on every mouse movement.
 * Memoization ensures it doesn't re-evaluate when parent components update.
 */
const Spotlight: React.FC = React.memo(() => {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (spotlightRef.current) {
        spotlightRef.current.style.setProperty('--mouse-x', `${e.clientX}px`);
        spotlightRef.current.style.setProperty('--mouse-y', `${e.clientY}px`);
      }
    };

    // Passive listener for minimal overhead
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={spotlightRef}
      className="pointer-events-none fixed inset-0 z-50 transition-opacity duration-300 opacity-30"
      style={{
          background: `radial-gradient(600px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(211, 253, 80, 0.1), transparent 40%)`
      } as React.CSSProperties}
    />
  );
});

Spotlight.displayName = 'Spotlight';

export default Spotlight;
