import { useEffect } from 'react';

/**
 * Custom hook that triggers a callback when the Escape key is pressed.
 * @param onEscape - Function to call when Escape is pressed.
 */
export const useEscapeKey = (onEscape: () => void) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onEscape();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onEscape]);
};
