import { useEffect, useRef } from 'react';

/**
 * Custom hook that listens for the Escape key and calls the provided callback.
 * Uses a ref for the callback to avoid unnecessary effect re-runs.
 */
export const useEscapeKey = (onEscape: () => void) => {
  const onEscapeRef = useRef(onEscape);

  useEffect(() => {
    onEscapeRef.current = onEscape;
  }, [onEscape]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onEscapeRef.current();
      }
    };

    document.addEventListener('keydown', handleKeyDown, true);
    return () => {
      document.removeEventListener('keydown', handleKeyDown, true);
    };
  }, []);
};
