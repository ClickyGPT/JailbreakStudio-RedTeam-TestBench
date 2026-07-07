import React, { useEffect, useRef } from 'react';

/**
 * BOLT OPTIMIZATION: Isolate purely decorative, high-frequency visual components
 * into memoized components. This prevents them from undergoing expensive
 * reconciliation when the parent component re-renders due to unrelated state updates.
 *
 * Performance Impact:
 * - Reduces reconciliation overhead for the main App component during typing.
 * - Uses direct DOM manipulation to update CSS variables, bypassing React's state system
 *   for 60fps+ visual effects.
 */
const Spotlight: React.FC = React.memo(() => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        containerRef.current.style.setProperty('--mouse-x', `${e.clientX}px`);
        containerRef.current.style.setProperty('--mouse-y', `${e.clientY}px`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-50 transition-opacity duration-300 opacity-30"
      style={{
        background: `radial-gradient(600px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(211, 253, 80, 0.1), transparent 40%)`
      } as React.CSSProperties}
    />
  );
});

export default Spotlight;
