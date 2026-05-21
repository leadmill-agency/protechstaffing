// Thin wrapper around window.gtag. Safe to import + call from any client
// component. No-ops cleanly when gtag isn't present (SSR, missing env var,
// ad-blocker, etc.) so callsites stay simple.

export function trackEvent(name, params = {}) {
  if (typeof window === 'undefined') return
  if (typeof window.gtag !== 'function') return
  window.gtag('event', name, params)
}
