'use client'

import { useReportWebVitals } from 'next/web-vitals'
import { trackEvent } from '@/lib/analytics'

// Sends Next.js Web Vitals (LCP, CLS, FID/INP, FCP, TTFB) to GA4 as custom
// events. Each event includes the metric value rounded to an integer (since
// GA4 stores numeric event params as integers and milliseconds are the natural
// unit for most of these). CLS is multiplied by 1000 to preserve precision.
export default function WebVitals() {
  useReportWebVitals((metric) => {
    const value = metric.name === 'CLS' ? Math.round(metric.value * 1000) : Math.round(metric.value)
    trackEvent('web_vital', {
      metric_name: metric.name,
      metric_value: value,
      metric_id: metric.id,
      metric_rating: metric.rating, // 'good' | 'needs-improvement' | 'poor'
      page_path: typeof window !== 'undefined' ? window.location.pathname : undefined,
    })
  })

  return null
}
