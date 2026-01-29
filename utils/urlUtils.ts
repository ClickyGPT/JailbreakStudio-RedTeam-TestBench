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
  try {
    const hash = window.location.hash.slice(1); // Remove #
    if (!hash) return null;
    const json = atob(hash);
    return JSON.parse(json);
  } catch (e) {
    console.error("Failed to decode state", e);
    return null;
  }
};