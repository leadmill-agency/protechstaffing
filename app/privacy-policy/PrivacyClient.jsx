'use client'

import { useTranslation } from 'react-i18next'

export default function PrivacyClient() {
  const { t } = useTranslation('privacy')

  const paragraphs = t('paragraphs', { returnObjects: true })

  return (
    <>
      {/* Hero */}
      <section className="bg-bone pt-20 border-b border-fog">
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
          <p className="text-xs font-semibold text-ind-green tracking-widest uppercase mb-3">
            {t('hero.eyebrow')}
          </p>
          <h1 className="font-sans font-semibold text-sig-blue text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight">
            {t('hero.heading')}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose-content space-y-5">
            {(Array.isArray(paragraphs) ? paragraphs : []).map((p, i) => (
              <p key={i} className="text-steel text-base leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-fog">
            <h2 className="text-sig-blue font-semibold text-xl mb-3">{t('sms.heading')}</h2>
            <p className="text-steel text-base leading-relaxed">{t('sms.body')}</p>
          </div>
        </div>
      </section>
    </>
  )
}
