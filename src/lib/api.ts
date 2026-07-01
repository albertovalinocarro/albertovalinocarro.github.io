// Single source of truth for the backend API endpoints.
const API_BASE = "https://cv-translation-api.vercel.app";

export const ENDPOINTS = {
    contact: `${API_BASE}/api/contact`,
    views: `${API_BASE}/api/views`,
    deployInfo: `${API_BASE}/api/deploy-info`,
} as const;
