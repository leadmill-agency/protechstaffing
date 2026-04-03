'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import icons from '@/components/icons'

const MARKET_KEYS = ['richardson', 'bedford', 'austin', 'tampa', 'sanjose', 'phoenix']
const MARKET_IMGS = {
  richardson: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=70',
  bedford: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=70',
  austin: 'https://images.unsplash.com/photo-1531218150217-54595bc2b934?w=600&q=70',
  tampa: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=70',
  sanjose: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=600&q=70',
  phoenix: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=70',
}
const MARKET_HREFS = {
  richardson: '/locations/richardson-tx',
  bedford: '/locations/bedford-tx',
  austin: '/locations/austin-tx',
  tampa: '/locations/tampa-fl',
  sanjose: '/locations/san-jose-ca',
  phoenix: '/locations/phoenix-az',
}

const DFW_HREFS = {
  arlington: '/staffing-agency-arlington-tx',
  irving: '/staffing-agency-irving-tx',
  garland: '/staffing-agency-garland-tx',
}

export default function LocationsPage() {
  const { t } = useTranslation('locations')

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
          <p className="text-steel text-base md:text-lg leading-relaxed mb-4 max-w-xl">
            {t('page.hero.description')}
          </p>
          <p className="text-steel text-sm max-w-xl leading-relaxed mb-8">
            {t('page.hero.description2')}
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
            {['usMarkets', 'states', 'avgFillTime', 'clientRetention'].map(key => (
              <div key={key} className="flex flex-col gap-1">
                <span className="font-mono text-2xl font-medium text-carbon">{t(`page.stats.${key}.n`)}</span>
                <span className="text-xs text-steel leading-snug">{t(`page.stats.${key}.label`)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Cards */}
      <section className="bg-bone py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-fog">
            {MARKET_KEYS.map(key => {
              const city = t(`locationsPageMarkets.${key}.city`)
              const state = t(`locationsPageMarkets.${key}.state`)
              const tag = t(`locationsPageMarkets.${key}.tag`)
              const roles = t(`locationsPageMarkets.${key}.roles`)
              const serving = t(`locationsPageMarkets.${key}.serving`)
              const href = MARKET_HREFS[key]
              const img = MARKET_IMGS[key]

              const inner = (
                <>
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={img}
                      alt={`${city} ${state} industrial staffing office`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ filter: 'grayscale(40%) brightness(0.9)' }}
                    />
                  </div>
                  <div className="p-5 bg-white group-hover:bg-bone transition-colors">
                    <p className="text-[10px] font-semibold text-ind-green tracking-widest uppercase mb-1">{tag}</p>
                    <div className="flex items-baseline gap-1.5 mb-2">
                      <h3 className="font-semibold text-carbon text-lg">{city}</h3>
                      <span className="text-steel text-sm">{state}</span>
                    </div>
                    <p className="text-steel text-xs leading-snug mb-1">{roles}</p>
                    <p className="text-[10px] text-steel opacity-70">{serving}</p>
                    {href && <p className="text-[10px] font-semibold text-ind-green mt-2 tracking-wide">{t('page.viewMarket')}</p>}
                  </div>
                </>
              )
              return href
                ? <Link key={key} href={href} className="bg-white group overflow-hidden block">{inner}</Link>
                : <div key={key} className="bg-white group overflow-hidden">{inner}</div>
            })}
          </div>
        </div>
      </section>

      {/* DFW Sub-Markets */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-semibold text-steel tracking-widest uppercase mb-5">{t('page.dfwSubMarkets.eyebrow')}</p>
          <h2 className="font-semibold text-carbon text-3xl leading-tight tracking-tight mb-3">
            {t('page.dfwSubMarkets.heading')}
          </h2>
          <p className="text-steel mb-12 max-w-lg leading-relaxed">
            {t('page.dfwSubMarkets.description')}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {['arlington', 'irving', 'garland'].map(key => (
              <Link key={key} href={DFW_HREFS[key]} className="group block border border-fog hover:border-carbon bg-bone p-6 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <span className="w-5 h-5 text-ind-green">{icons.mapPin}</span>
                  <span className="w-4 h-4 text-steel group-hover:text-carbon transition-colors">{icons.arrowRight}</span>
                </div>
                <h3 className="font-semibold text-carbon text-base mb-2">{t(`page.dfwSubMarkets.${key}.label`)}</h3>
                <p className="text-steel text-sm leading-relaxed">{t(`page.dfwSubMarkets.${key}.desc`)}</p>
              </Link>
            ))}
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
