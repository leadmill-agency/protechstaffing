'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import icons from '@/components/icons'

export default function ExploreJobsPage() {
  const { t } = useTranslation('jobs')

  // Load Avionte script
  useEffect(() => {
    const existing = document.getElementById('compas-jobs-widget')
    if (existing) existing.remove()
    const script = document.createElement('script')
    script.id = 'compas-jobs-widget'
    script.type = 'text/javascript'
    script.src = 'https://hire.myavionte.com/app/careers/dist/jobs.js'
    script.setAttribute('data-bid', 'raT6rfEW_d4')
    script.setAttribute('data-jbid', 'j2lLR3ns1qI')
    const container = document.getElementById('avionte-job-board')
    if (container) container.appendChild(script)
    return () => {
      const el = document.getElementById('compas-jobs-widget')
      if (el) el.remove()
    }
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
            <p className="text-steel text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
              {t('hero.description')}
            </p>
            <Link
              href="/apply"
              className="inline-flex items-center justify-center gap-2 bg-sig-blue hover:bg-blue-900 text-white font-semibold text-sm px-6 py-3 rounded-md transition-colors"
            >
              {t('hero.ctaApply')}
              <span className="w-4 h-4">{icons.arrowRight}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Avionte Job Board ── */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-8 md:mb-10">
            <p className="text-xs font-semibold text-steel tracking-widest uppercase mb-4">{t('board.eyebrow')}</p>
            <h2 className="font-semibold text-carbon text-2xl md:text-3xl leading-tight tracking-tight mb-3">
              {t('board.heading')}
            </h2>
            <p className="text-steel max-w-2xl leading-relaxed text-sm">
              {t('board.description')}
            </p>
          </div>
          <div id="avionte-job-board" className="min-h-[400px] bg-bone border border-fog rounded-md p-4 md:p-6 overflow-hidden" />
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="bg-bone py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-8 md:mb-14">
            <p className="text-xs font-semibold text-steel tracking-widest uppercase mb-4">{t('process.eyebrow')}</p>
            <h2 className="font-semibold text-carbon text-3xl md:text-4xl leading-tight tracking-tight max-w-xl mb-4">
              {t('process.heading')}
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-px bg-fog">
            {[
              { icon: icons.clipboard, step: '01', key: 'apply' },
              { icon: icons.search, step: '02', key: 'review' },
              { icon: icons.users, step: '03', key: 'interview' },
              { icon: icons.check, step: '04', key: 'work' },
            ].map(({ icon, step, key }) => (
              <div key={key} className="bg-white p-8">
                <p className="font-mono text-xs text-ind-green tracking-widest mb-3">{step}</p>
                <div className="w-5 h-5 text-ind-green mb-4">{icon}</div>
                <h3 className="font-semibold text-carbon text-base mb-2">{t(`process.${key}.title`)}</h3>
                <p className="text-steel text-sm leading-relaxed">{t(`process.${key}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Work with Pro-Tech ── */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-xs font-semibold text-steel tracking-widest uppercase mb-5">{t('whyProTech.eyebrow')}</p>
              <h2 className="font-semibold text-carbon text-3xl md:text-4xl leading-tight tracking-tight mb-6">
                {t('whyProTech.heading')}
              </h2>
              <p className="text-steel leading-relaxed mb-4">{t('whyProTech.body1')}</p>
              <p className="text-steel text-sm leading-relaxed">{t('whyProTech.body2')}</p>
            </div>

            <div className="bg-bone border border-fog p-8">
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="w-4 h-4 text-safe-amber">{icons.star}</span>
                ))}
              </div>
              <p className="text-carbon text-sm leading-relaxed mb-6 italic">"{t('whyProTech.testimonial.quote')}"</p>
              <div className="pt-4 border-t border-fog">
                <p className="font-semibold text-carbon text-sm">{t('whyProTech.testimonial.name')}</p>
                <p className="text-xs text-steel mt-0.5">{t('whyProTech.testimonial.role')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What Can We Do For You ── */}
      <section className="bg-bone py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-8 md:mb-14">
            <p className="text-xs font-semibold text-steel tracking-widest uppercase mb-4">{t('whatWeDo.eyebrow')}</p>
            <h2 className="font-semibold text-carbon text-3xl md:text-4xl leading-tight tracking-tight max-w-xl mb-4">
              {t('whatWeDo.heading')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-fog">
            {[
              { icon: icons.clock, key: 'fastPlacement' },
              { icon: icons.target, key: 'roleMatching' },
              { icon: icons.shield, key: 'tempToHire' },
              { icon: icons.users, key: 'localRecruiters' },
              { icon: icons.circuit, key: 'training' },
              { icon: icons.check, key: 'weeklyPay' },
            ].map(({ icon, key }) => (
              <div key={key} className="bg-white p-8">
                <div className="w-5 h-5 text-ind-green mb-5">{icon}</div>
                <h3 className="font-semibold text-carbon text-base mb-2">{t(`whatWeDo.${key}.title`)}</h3>
                <p className="text-steel text-sm leading-relaxed">{t(`whatWeDo.${key}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Apply CTA ── */}
      <section className="bg-graphite py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold text-fog tracking-widest uppercase mb-6">{t('cta.eyebrow')}</p>
          <h2 className="font-semibold text-bone text-3xl md:text-4xl leading-tight tracking-tight mb-4">
            {t('cta.heading')}
          </h2>
          <p className="text-fog mb-8">{t('cta.description')}</p>
          <Link
            href="/apply"
            className="inline-flex items-center justify-center gap-2 bg-bone hover:bg-white text-carbon font-semibold px-7 py-3 text-sm rounded-md transition-colors"
          >
            {t('cta.ctaApply')}
            <span className="w-4 h-4">{icons.arrowRight}</span>
          </Link>
        </div>
      </section>
    </>
  )
}
