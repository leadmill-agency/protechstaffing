'use client'

import { useTranslation } from 'react-i18next'
import contentUpdated from '@/data/contentUpdated'

const DATE_LOCALES = { en: 'en-US', es: 'es-US', vi: 'vi-VN' }

export default function LastUpdated({ path, className = '' }) {
  const { t, i18n } = useTranslation('common')
  const iso = contentUpdated(path)
  const formatted = new Date(`${iso}T12:00:00Z`).toLocaleDateString(DATE_LOCALES[i18n.language] || 'en-US', {
    year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC',
  })
  return (
    <p className={`text-xs text-steel ${className}`}>
      {t('lastUpdated', { defaultValue: 'Last updated' })}{' '}
      <time dateTime={iso}>{formatted}</time>
    </p>
  )
}
