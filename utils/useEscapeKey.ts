import { useEffect, useRef } from 'react';

/**
 * Custom hook that listens for the Escape key and executes a callback.
 * @param onEscape Callback to execute when Escape is pressed.
 * @param active Whether the listener is currently active.
 */
export const useEscapeKey = (onEscape: () => void, active: boolean = true) => {
  const callbackRef = useRef(onEscape);

  // Update the ref whenever the callback changes to avoid stale closures
  // while keeping the effect dependencies stable.
  useEffect(() => {
    callbackRef.current = onEscape;
  }, [onEscape]);

  useEffect(() => {
    if (!active) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        callbackRef.current();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [active]);
};
