'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import icons from '@/components/icons'

const INDUSTRY_SLUGS = [
  'electronics-manufacturing',
  'light-industrial',
  'warehouse-distribution',
  'supply-chain-logistics',
  'administrative-clerical',
  'general-labor',
]

const INDUSTRY_ICONS = {
  'electronics-manufacturing': icons.circuit,
  'light-industrial': icons.gear,
  'warehouse-distribution': icons.box,
  'supply-chain-logistics': icons.truck,
  'administrative-clerical': icons.clipboard,
  'general-labor': icons.hardhat,
}

export default function IndustriesPage() {
  const { t } = useTranslation('industries')

  return (
    <>
      {/* Hero */}
      <section className="bg-bone pt-20">
        <div className="max-w-6xl mx-auto px-6 py-10 md:py-16">
          <p className="text-xs font-semibold text-ind-green tracking-wide md:tracking-widest uppercase mb-5">
            {t('page.hero.eyebrow')}
          </p>
          <h1 className="font-sans font-semibold text-carbon text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight mb-5 max-w-2xl">
            {t('page.hero.heading')}
          </h1>
          <p className="text-steel text-base md:text-lg leading-relaxed mb-8 max-w-xl">
            {t('page.hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/#employers" className="inline-flex items-center justify-center gap-2 bg-sig-blue hover:bg-blue-900 text-white font-semibold text-sm px-6 py-3 rounded-md transition-colors">
              {t('page.hero.ctaRequestWorkers')}
              <span className="w-4 h-4">{icons.arrowRight}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-y border-fog">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['industriesServed', 'workersPlaced', 'avgFillTime', 'yearsExperience'].map(key => (
              <div key={key} className="flex flex-col gap-1">
                <span className="font-mono text-2xl font-medium text-carbon">{t(`page.stats.${key}.n`)}</span>
                <span className="text-xs text-steel leading-snug">{t(`page.stats.${key}.label`)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Cards */}
      <section className="bg-bone py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col gap-12">
            {INDUSTRY_SLUGS.map(slug => {
              const icon = INDUSTRY_ICONS[slug]
              const cardKey = `industriesPageCards.${slug}`
              const title = t(`${cardKey}.title`)
              const desc = t(`${cardKey}.desc`)
              const cert = t(`${cardKey}.cert`, { defaultValue: '' })
              const roles = t(`${cardKey}.roles`, { returnObjects: true })

              return (
                <div key={slug} className="bg-white border border-fog overflow-hidden">
                  <div className="grid lg:grid-cols-5 gap-0">
                    {/* Left -- info */}
                    <div className="lg:col-span-3 p-8 md:p-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-5 h-5 text-ind-green">{icon}</div>
                        <h2 className="font-semibold text-carbon text-xl">{title}</h2>
                      </div>
                      <p className="text-steel leading-relaxed mb-4">{desc}</p>
                      {cert && <p className="text-ind-green text-sm italic mb-4">{cert}</p>}
                      <Link
                        href={`/industries/${slug}`}
                        className="inline-flex items-center gap-2 bg-sig-blue hover:bg-blue-900 text-white font-semibold text-sm px-5 py-2.5 rounded-md transition-colors"
                      >
                        {t('page.learnMore')}
                        <span className="w-4 h-4">{icons.arrowRight}</span>
                      </Link>
                    </div>

                    {/* Right -- roles */}
                    <div className="lg:col-span-2 bg-bone p-8 md:p-10 border-t lg:border-t-0 lg:border-l border-fog">
                      <p className="text-xs font-semibold text-steel tracking-widest uppercase mb-4">{t('page.commonRoles')}</p>
                      <div className="flex flex-col gap-2.5">
                        {roles.map(role => (
                          <div key={role} className="flex items-center gap-2.5">
                            <div className="w-3 h-3 text-ind-green flex-shrink-0">{icons.check}</div>
                            <span className="text-carbon text-sm">{role}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-graphite py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold text-fog tracking-widest uppercase mb-6">{t('page.cta.eyebrow')}</p>
          <h2 className="font-semibold text-bone text-3xl md:text-4xl leading-tight tracking-tight mb-4">
            {t('page.cta.heading')}
          </h2>
          <p className="text-white text-sm mb-10">
            {t('page.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+10000000000" className="inline-flex items-center justify-center gap-2 bg-bone hover:bg-white text-carbon font-semibold px-7 py-3 text-sm rounded-md transition-colors">
              <span className="w-4 h-4">{icons.phone}</span>
              {t('page.cta.callUsNow')}
            </a>
            <Link href="/#employers" className="inline-flex items-center justify-center gap-2 border border-fog hover:border-bone text-bone font-medium px-7 py-3 text-sm rounded-md transition-colors">
              {t('page.cta.submitRequest')}
              <span className="w-4 h-4">{icons.arrowRight}</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
