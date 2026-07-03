import React, { useEffect, useRef } from 'react';

/**
 * BOLT OPTIMIZATION: Isolated Spotlight Component
 *
 * Performance Wins:
 * 1. Prevents reconciliation of the spotlight effect when parent state (like 'prompt') updates.
 * 2. Uses direct DOM manipulation for high-frequency CSS variable updates.
 * 3. Memoized to skip React rendering entirely during common parent re-renders.
 */
const Spotlight: React.FC = React.memo(() => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        // Direct DOM update avoids React reconciliation cycle
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
      }}
    />
  );
});

export default Spotlight;
