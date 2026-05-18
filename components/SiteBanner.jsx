'use client'

import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

/**
 * Thin announcement banner that sits above the Nav. Dismissible — once
 * dismissed it stays hidden via localStorage. Lives in the same fixed
 * stack as the Nav (z-index 60, above Nav's 50).
 *
 * Banner is h-9 (36px). Nav is offset top-9 when banner is visible so
 * both fixed bars stack cleanly at the top.
 *
 * Update the bannerVersion constant when copy changes — bumping the
 * version re-shows the banner to users who previously dismissed it.
 */
const BANNER_VERSION = '2026-05-18-launch'
const STORAGE_KEY = 'protech-banner-dismissed'

export default function SiteBanner() {
  const { t } = useTranslation('common')
  const [visible, setVisible] = useState(false)

  // Show the banner on mount unless this version has been dismissed.
  useEffect(() => {
    if (typeof window === 'undefined') return
    const dismissed = localStorage.getItem(STORAGE_KEY)
    if (dismissed !== BANNER_VERSION) setVisible(true)
  }, [])

  // Sync `data-banner` attribute on <html> so CSS can adjust Nav top + page
  // padding when the banner is/isn't shown.
  useEffect(() => {
    if (typeof document === 'undefined') return
    if (visible) {
      document.documentElement.dataset.banner = 'shown'
    } else {
      delete document.documentElement.dataset.banner
    }
  }, [visible])

  const dismiss = () => {
    setVisible(false)
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, BANNER_VERSION)
    }
  }

  if (!visible) return null

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed top-0 left-0 right-0 z-[60] bg-sig-blue text-white"
    >
      <div className="max-w-7xl mx-auto px-6 h-9 flex items-center justify-center text-center relative">
        <p className="text-xs sm:text-sm font-medium leading-tight pr-8">
          {t('banner.message')}{' '}
          <a
            href="/contact"
            className="underline underline-offset-2 hover:text-bone whitespace-nowrap"
          >
            {t('banner.cta')}
          </a>
        </p>
        <button
          type="button"
          onClick={dismiss}
          aria-label={t('banner.dismiss')}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white text-base leading-none"
        >
          ×
        </button>
      </div>
    </div>
  )
}
