// Runs before app frontend code. Sets up GA4 + global event delegation.
// Falls back to a no-op if NEXT_PUBLIC_GA4_MEASUREMENT_ID is not set so
// dev / preview without the env var doesn't error or send phantom events.

const GA_ID = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID

if (typeof window !== 'undefined') {
  if (GA_ID) {
    // 1. Inject gtag.js
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
    document.head.appendChild(script)

    // 2. Init dataLayer + gtag
    window.dataLayer = window.dataLayer || []
    window.gtag = function gtag() {
      window.dataLayer.push(arguments)
    }
    window.gtag('js', new Date())
    window.gtag('config', GA_ID, {
      // Default send_page_view fires automatically on config — Next.js client-side
      // navigation also dispatches pushState which gtag picks up via _gtag's auto
      // page_view in GA4. If we observe undercounting, swap to manual page_view
      // events via a router-change listener.
    })
  }

  // 3. Global event delegation for clicks. Runs regardless of GA_ID so
  // local dev still shows the listener firing (without sending events).
  document.addEventListener(
    'click',
    (e) => {
      const target = e.target?.closest?.('a, button, [data-track]')
      if (!target) return

      // phone_call_click — any tel: link anywhere on the site
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('tel:')) {
        if (window.gtag) {
          window.gtag('event', 'phone_call_click', {
            phone_number: target.getAttribute('href').replace('tel:', ''),
            page_path: window.location.pathname,
          })
        }
        return
      }

      // data-track="find_jobs" (or any other tagged CTA)
      const trackName = target.getAttribute('data-track')
      if (trackName && window.gtag) {
        const location = target.getAttribute('data-track-location') || 'unknown'
        window.gtag('event', `${trackName}_click`, {
          cta_location: location,
          page_path: window.location.pathname,
        })
      }
    },
    { capture: true }
  )
}
