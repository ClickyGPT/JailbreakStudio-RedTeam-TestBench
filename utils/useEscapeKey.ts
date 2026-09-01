import { useEffect, useRef } from 'react';

/**
 * Custom hook that listens for the 'Escape' key press and executes a callback.
 * @param onEscape - Function to call when Escape is pressed.
 * @param active - Whether the listener should be active (default: true).
 */
export const useEscapeKey = (onEscape: () => void, active: boolean = true) => {
  const onEscapeRef = useRef(onEscape);

  // Update the ref whenever onEscape changes to ensure the latest callback is used
  useEffect(() => {
    onEscapeRef.current = onEscape;
  }, [onEscape]);

  useEffect(() => {
    if (!active) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onEscapeRef.current();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [active]);
};
