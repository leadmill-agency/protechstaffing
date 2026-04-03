'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import icons from '@/components/icons'

export default function ApplyNowPage() {
  const { t } = useTranslation('apply')
  const [iframeHeight, setIframeHeight] = useState(900)

  // Adjust iframe height on mobile
  useEffect(() => {
    const handleResize = () => {
      setIframeHeight(window.innerWidth < 640 ? 1200 : 900)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-bone pt-20">
        <div className="max-w-6xl mx-auto px-6 py-10 md:py-16">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold text-ind-green tracking-widest uppercase mb-5">
              {t('hero.eyebrow')}
            </p>
            <h1 className="font-sans font-semibold text-carbon text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight mb-5">
              {t('hero.heading')}
            </h1>
            <p className="text-steel text-base md:text-lg leading-relaxed max-w-2xl">
              {t('hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* ── Application Form ── */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <iframe
            src="https://hire.myavionte.com/sonar/v2/careers/integrations/standalone/general?bId=raT6rfEW_d4&jbId=iM1TUV0_0sw&rpid=general"
            width="100%"
            height={iframeHeight}
            frameBorder="0"
            scrolling="yes"
            title={t('form.title')}
            className="w-full border border-fog rounded-md"
          />
        </div>
      </section>

      {/* ── What Happens Next ── */}
      <section className="bg-bone py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-8 md:mb-14">
            <p className="text-xs font-semibold text-steel tracking-widest uppercase mb-4">{t('faq.eyebrow')}</p>
            <h2 className="font-semibold text-carbon text-3xl md:text-4xl leading-tight tracking-tight max-w-xl mb-4">
              {t('faq.heading')}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-fog">
            {[
              { icon: icons.clipboard, key: 'step1' },
              { icon: icons.users, key: 'step2' },
              { icon: icons.check, key: 'step3' },
            ].map(({ icon, key }) => (
              <div key={key} className="bg-white p-8">
                <div className="w-5 h-5 text-ind-green mb-5">{icon}</div>
                <h3 className="font-semibold text-carbon text-base mb-2">{t(`faq.${key}.title`)}</h3>
                <p className="text-steel text-sm leading-relaxed">{t(`faq.${key}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Browse Jobs CTA ── */}
      <section className="bg-graphite py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold text-fog tracking-widest uppercase mb-6">{t('cta.eyebrow')}</p>
          <h2 className="font-semibold text-bone text-3xl md:text-4xl leading-tight tracking-tight mb-4">
            {t('cta.heading')}
          </h2>
          <p className="text-fog mb-8">{t('cta.description')}</p>
          <Link
            href="/jobs"
            className="inline-flex items-center justify-center gap-2 bg-bone hover:bg-white text-carbon font-semibold px-7 py-3 text-sm rounded-md transition-colors"
          >
            {t('cta.ctaBrowse')}
            <span className="w-4 h-4">{icons.arrowRight}</span>
          </Link>
        </div>
      </section>
    </>
  )
}
