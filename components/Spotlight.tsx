import React, { useEffect, useRef } from 'react';

// BOLT OPTIMIZATION: Isolate the high-frequency spotlight effect into a memoized component.
// This prevents the visual-only gradient from being re-rendered when unrelated state
// (like the prompt text) changes.
const Spotlight: React.FC = React.memo(() => {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (spotlightRef.current) {
        spotlightRef.current.style.setProperty('--mouse-x', `${e.clientX}px`);
        spotlightRef.current.style.setProperty('--mouse-y', `${e.clientY}px`);
      }
    };

    // BOLT OPTIMIZATION: Use passive: true to improve scrolling/interaction performance.
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
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

Spotlight.displayName = 'Spotlight';

export default Spotlight;
