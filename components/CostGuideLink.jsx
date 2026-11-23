'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import icons from '@/components/icons'

// Points employers at the staffing-cost guide from service pages, so the guide
// isn't only reachable from the blog (internal-link support for ranking).
export const COST_GUIDE_HREF = '/blog/temp-vs-temp-to-hire-vs-direct-hire-staffing-costs'

export default function CostGuideLink({ variant = 'inline', className = '' }) {
  const { t } = useTranslation('common')
  const title = t('costGuide.title', { defaultValue: 'What does a staffing agency cost?' })
  const desc = t('costGuide.desc', { defaultValue: 'How pricing works for temp, temp-to-hire, and direct hire, and which fits your roles.' })
  const cta = t('costGuide.cta', { defaultValue: 'Read the guide' })

  if (variant === 'band') {
    return (
      <section className={`bg-bone border-y border-fog py-10 ${className}`}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-carbon text-lg">{title}</p>
            <p className="text-steel text-sm leading-relaxed mt-1">{desc}</p>
          </div>
          <Link href={COST_GUIDE_HREF} className="inline-flex items-center gap-2 border border-carbon text-carbon hover:bg-carbon hover:text-white font-semibold text-sm px-5 py-2.5 rounded-md transition-colors flex-shrink-0">
            {cta}
            <span className="w-4 h-4">{icons.arrowRight}</span>
          </Link>
        </div>
      </section>
    )
  }
  return (
    <p className={`text-sm text-steel ${className}`}>
      {title}{' '}
      <Link href={COST_GUIDE_HREF} className="font-semibold text-sig-blue underline underline-offset-2 hover:text-ind-green">
        {cta}
      </Link>
    </p>
  )
}
