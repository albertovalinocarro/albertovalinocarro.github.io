// Single source of truth for the backend API endpoints.
const API_BASE = "https://cv-translation-api.vercel.app";

export const ENDPOINTS = {
    contact: `${API_BASE}/api/contact`,
    views: `${API_BASE}/api/views`,
    deployInfo: `${API_BASE}/api/deploy-info`,
    // The translate endpoint is configurable per environment because it is
    // paired with VITE_TRANSLATE_API_KEY at build time.
    translate: import.meta.env.VITE_API_URL ?? `${API_BASE}/api/translate`,
} as const;

export const TRANSLATE_API_KEY: string | undefined = import.meta.env.VITE_TRANSLATE_API_KEY;
