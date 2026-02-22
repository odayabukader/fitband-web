// ========================================
// 🌐 Site / domain configuration
// ========================================
// Used for meta tags, canonical URL, and any place that needs the public site URL.

/** Your live site URL (no trailing slash). Set via VITE_APP_SITE_URL in production if needed. */
export const siteUrl =
  (typeof import.meta !== 'undefined' && import.meta.env?.VITE_APP_SITE_URL) ||
  'https://www.buyfitband.com';

/** Short site name for titles and labels */
export const siteName = 'Buy Fit Band';

/** Full title for the browser tab and meta */
export const siteTitle = `${siteName} | Fit Band 3`;
