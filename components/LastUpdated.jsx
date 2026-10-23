'use client'

import { useTranslation } from 'react-i18next'
import contentUpdated from '@/data/contentUpdated'

// Reviewer line added at Rameel's request, Oct 22, 2026.
const REVIEWER = { name: 'Eric Yan', linkedIn: 'https://www.linkedin.com/in/ericyan-/' }

const DATE_LOCALES = { en: 'en-US', es: 'es-US', vi: 'vi-VN' }

export default function LastUpdated({ path, className = '' }) {
  const { t, i18n } = useTranslation('common')
  const iso = contentUpdated(path)
  const formatted = new Date(`${iso}T12:00:00Z`).toLocaleDateString(DATE_LOCALES[i18n.language] || 'en-US', {
    year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC',
  })
  return (
    <p className={`text-xs text-steel ${className}`}>
      {t('reviewedBy', { defaultValue: 'Reviewed by' })}{' '}
      <a href={REVIEWER.linkedIn} target="_blank" rel="noopener noreferrer" className="font-semibold text-carbon hover:text-sig-blue underline underline-offset-2">
        {REVIEWER.name}
      </a>
      , {t('reviewerTitle', { defaultValue: 'President' })}
      <span className="mx-1.5" aria-hidden="true">·</span>
      {t('lastUpdated', { defaultValue: 'Last updated' })}{' '}
      <time dateTime={iso}>{formatted}</time>
    </p>
  )
}
