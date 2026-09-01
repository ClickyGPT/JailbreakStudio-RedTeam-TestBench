import React, { useEffect, useRef } from 'react';

/**
 * BOLT OPTIMIZATION:
 * This component isolates high-frequency mouse tracking logic.
 * By using a local ref and direct DOM manipulation for CSS variables,
 * we avoid triggering React re-renders or even reconciliation in the
 * parent App component when the mouse moves.
 *
 * It is memoized to ensure it doesn't even undergo reconciliation
 * when the parent App re-renders (e.g., during keystrokes).
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

    window.addEventListener('mousemove', handleMouseMove);
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

export default Spotlight;
