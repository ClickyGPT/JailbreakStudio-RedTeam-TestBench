import { SharedState } from '../types';

export const encodeStateToHash = (state: SharedState): string => {
  try {
    const json = JSON.stringify(state);
    // Use btoa for simple base64 encoding (sufficient for MVP demo)
    return btoa(json);
  } catch (e) {
    console.error("Failed to encode state", e);
    return "";
  }
};

export const decodeStateFromHash = (): SharedState | null => {
  if (typeof window === 'undefined') return null;
  try {
    let hash = window.location.hash.slice(1); // Remove #
    if (!hash) return null;

    // Handle both raw hash and state= prefix
    if (hash.startsWith('state=')) {
      hash = hash.substring(6);
    }

    const json = atob(hash);
    return JSON.parse(json);
  } catch (e) {
    console.error("Failed to decode state", e);
    return null;
  }
};