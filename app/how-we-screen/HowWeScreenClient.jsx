'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import icons from '@/components/icons'

export default function HowWeScreenClient() {
  const { t } = useTranslation('employers')
  const steps = t('screening.steps', { returnObjects: true })

  return (
    <>
      {/* Hero */}
      <section className="bg-bone pt-20 border-b border-fog">
        <div className="max-w-3xl mx-auto px-6 py-12 md:py-16">
          <p className="text-xs font-semibold text-ind-green tracking-widest uppercase mb-3">
            {t('screening.eyebrow')}
          </p>
          <h1 className="font-sans font-semibold text-sig-blue text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight mb-5">
            {t('screening.heading')}
          </h1>
          <p className="text-steel text-lg leading-relaxed">{t('screening.intro')}</p>
        </div>
      </section>

      {/* Screening steps */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-fog">
            {(Array.isArray(steps) ? steps : []).map(({ title, desc }, i) => (
              <div key={title} className="bg-white p-8">
                <p className="font-mono text-sm text-ind-green tracking-widest mb-4">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h2 className="font-semibold text-carbon text-base mb-2">{title}</h2>
                <p className="text-steel text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Closing — W-2 / liability */}
          <div className="mt-12 border-l-2 border-ind-green pl-6 max-w-3xl">
            <h2 className="font-semibold text-carbon text-xl mb-2">{t('screening.closingHeading')}</h2>
            <p className="text-steel leading-relaxed">{t('screening.closingBody')}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sig-blue py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-semibold text-bone text-2xl md:text-3xl leading-tight mb-3">
            {t('screening.ctaHeading')}
          </h2>
          <p className="text-fog mb-6">{t('screening.ctaBody')}</p>
          <Link
            href="/employers#contact"
            className="inline-flex items-center justify-center gap-2 bg-bone hover:bg-white text-carbon font-semibold px-7 py-3 text-sm rounded-md transition-colors"
          >
            {t('screening.ctaButton')}
            <span className="w-4 h-4">{icons.arrowRight}</span>
          </Link>
        </div>
      </section>
    </>
  )
}
