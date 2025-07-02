// API endpoint configurations
export const API_CONFIG = {
  // Vite uses import.meta.env instead of process.env
  CONTACT_FORM: import.meta.env.VITE_CONTACT_FORM_WEBHOOK_URL,
  // Add other API endpoints here as needed
};

// Default headers for API requests
export const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
};

// Add any other API-related configurations here
