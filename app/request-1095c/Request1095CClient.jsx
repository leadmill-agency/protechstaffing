'use client'

import { useTranslation } from 'react-i18next'
import icons from '@/components/icons'

const OFFICE_PHONE = '(972) 234-0505'
const OFFICE_EMAIL = 'info@protechstaffing.com'

export default function Request1095CClient() {
  const { t } = useTranslation('jobSeekers')

  return (
    <>
      {/* Hero */}
      <section className="bg-bone pt-20 border-b border-fog">
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
          <p className="text-xs font-semibold text-ind-green tracking-widest uppercase mb-3">
            {t('tax1095c.eyebrow')}
          </p>
          <h1 className="font-sans font-semibold text-sig-blue text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight">
            {t('tax1095c.heading')}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-steel text-base md:text-lg leading-relaxed mb-10 max-w-2xl">
            {t('tax1095c.intro')}
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
            {/* Option 1 — Call */}
            <div className="border border-fog rounded-md p-7">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-5 h-5 text-ind-green flex-shrink-0">{icons.phone}</span>
                <h2 className="font-semibold text-carbon text-base">{t('tax1095c.option1Label')}</h2>
              </div>
              <p className="text-steel text-sm leading-relaxed mb-5">
                {t('tax1095c.option1Body')}
              </p>
              <a
                href={`tel:${OFFICE_PHONE.replace(/\D/g, '')}`}
                className="inline-flex items-center gap-1.5 text-sig-blue font-medium text-sm hover:underline"
              >
                <span className="w-3.5 h-3.5">{icons.phone}</span>
                {OFFICE_PHONE}
              </a>
            </div>

            {/* Option 2 — Email */}
            <div className="border border-fog rounded-md p-7">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-5 h-5 text-ind-green flex-shrink-0">{icons.mail}</span>
                <h2 className="font-semibold text-carbon text-base">{t('tax1095c.option2Label')}</h2>
              </div>
              <p className="text-steel text-sm leading-relaxed mb-5">
                {t('tax1095c.option2Body')}
              </p>
              <a
                href={`mailto:${OFFICE_EMAIL}`}
                className="inline-flex items-center gap-1.5 text-sig-blue font-medium text-sm hover:underline break-all"
              >
                <span className="w-3.5 h-3.5 flex-shrink-0">{icons.mail}</span>
                {OFFICE_EMAIL}
              </a>
            </div>
          </div>

          {/* Security note */}
          <div className="mt-10 max-w-3xl bg-bone border border-fog rounded-md px-5 py-4">
            <p className="text-steel text-sm leading-relaxed">
              {t('tax1095c.securityNote')}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
