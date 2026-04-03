'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import icons from '@/components/icons'

export default function JobSeekersPage() {
  const { t } = useTranslation('jobSeekers')

  const benefits = t('hero.benefits', { returnObjects: true })

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-sig-blue pt-20">
        <div className="max-w-6xl mx-auto px-6 py-10 md:py-16">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-xs font-semibold text-ind-green tracking-widest uppercase mb-5">
                {t('hero.eyebrow')}
              </p>
              <h1 className="font-sans font-semibold text-bone text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight mb-5">
                {t('hero.heading')}
              </h1>
              <p className="text-fog text-base md:text-lg leading-relaxed mb-8 max-w-lg">
                {t('hero.description')}
              </p>

              <div className="grid grid-cols-2 gap-3 mb-10">
                {benefits.map(item => (
                  <div key={item} className="flex items-start gap-2">
                    <div className="w-3.5 h-3.5 text-ind-green mt-0.5 flex-shrink-0">{icons.check}</div>
                    <span className="text-fog text-sm leading-snug">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#open-positions"
                  className="inline-flex items-center justify-center gap-2 bg-bone hover:bg-white text-carbon font-semibold text-sm px-6 py-3 rounded-md transition-colors"
                >
                  {t('hero.ctaViewPositions')}
                  <span className="w-4 h-4">{icons.arrowRight}</span>
                </a>
                <a
                  href="#apply"
                  className="inline-flex items-center justify-center gap-2 border border-fog hover:border-bone text-bone font-medium text-sm px-6 py-3 rounded-md transition-colors"
                >
                  {t('hero.ctaSubmitApplication')}
                </a>
              </div>
            </div>

            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=800&q=75"
                alt={t('hero.imgAlt')}
                className="w-full h-full object-cover"
                style={{ filter: 'grayscale(30%) brightness(0.8)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── What We Offer ── */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-8 md:mb-14">
            <p className="text-xs font-semibold text-steel tracking-widest uppercase mb-4">{t('whyProTech.eyebrow')}</p>
            <h2 className="font-semibold text-carbon text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight max-w-xl mb-4">
              {t('whyProTech.heading')}
            </h2>
            <p className="text-steel max-w-2xl leading-relaxed">
              {t('whyProTech.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-fog">
            {[
              { icon: icons.clock, key: 'fastPlacement' },
              { icon: icons.target, key: 'roleMatched' },
              { icon: icons.shield, key: 'tempToHirePaths' },
              { icon: icons.users, key: 'localRecruiters' },
              { icon: icons.circuit, key: 'trainingCertification' },
              { icon: icons.check, key: 'weeklyPay' },
            ].map(({ icon, key }) => (
              <div key={key} className="bg-white p-8">
                <div className="w-5 h-5 text-ind-green mb-5">{icon}</div>
                <h3 className="font-semibold text-carbon text-base mb-2">{t(`whyProTech.${key}.title`)}</h3>
                <p className="text-steel text-sm leading-relaxed">{t(`whyProTech.${key}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industries We Hire For ── */}
      <section className="bg-bone py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-8 md:mb-14">
            <p className="text-xs font-semibold text-steel tracking-widest uppercase mb-4">{t('industries.eyebrow')}</p>
            <h2 className="font-semibold text-carbon text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight max-w-xl mb-4">
              {t('industries.heading')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { key: 'electronicsManufacturing', href: '/industries/electronics-manufacturing' },
              { key: 'lightIndustrial', href: '/industries/light-industrial' },
              { key: 'warehouseDistribution', href: '/industries/warehouse-distribution' },
              { key: 'supplyChainLogistics', href: '/industries/supply-chain-logistics' },
              { key: 'administrative', href: '/industries/administrative-clerical' },
              { key: 'generalLabor', href: '/industries/general-labor' },
            ].map(({ key, href }) => (
              <Link
                key={key}
                href={href}
                className="bg-white border border-fog p-6 hover:bg-white hover:border-ind-green transition-colors group block"
              >
                <h3 className="font-semibold text-carbon text-base mb-2 group-hover:text-ind-green transition-colors">{t(`industries.${key}.title`)}</h3>
                <p className="text-steel text-sm leading-relaxed mb-3">{t(`industries.${key}.desc`)}</p>
                <span className="text-xs font-semibold text-ind-green tracking-wide">{t('industries.viewRoles')}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Locations ── */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-8 md:mb-14">
            <p className="text-xs font-semibold text-steel tracking-widest uppercase mb-4">{t('locations.eyebrow')}</p>
            <h2 className="font-semibold text-carbon text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight max-w-xl mb-4">
              {t('locations.heading')}
            </h2>
            <p className="text-steel max-w-lg leading-relaxed">
              {t('locations.description')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { city: 'Richardson', state: 'TX', href: '/locations/richardson-tx' },
              { city: 'Bedford', state: 'TX', href: '/locations/bedford-tx' },
              { city: 'Austin', state: 'TX', href: '/locations/austin-tx' },
              { city: 'Tampa', state: 'FL', href: '/locations/tampa-fl' },
              { city: 'San Jose', state: 'CA', href: '/locations/san-jose-ca' },
              { city: 'Phoenix', state: 'AZ', href: '/locations/phoenix-az' },
            ].map(({ city, state, href }) => (
              <Link
                key={city}
                href={href}
                className="bg-bone border border-fog p-4 text-center hover:border-ind-green transition-colors group block"
              >
                <p className="font-semibold text-carbon text-sm group-hover:text-ind-green transition-colors">{city}</p>
                <p className="text-xs text-steel">{state}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Open Positions / Job Board Placeholder ── */}
      <section id="open-positions" className="bg-bone py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-8 md:mb-14">
            <p className="text-xs font-semibold text-steel tracking-widest uppercase mb-4">{t('openPositions.eyebrow')}</p>
            <h2 className="font-semibold text-carbon text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight max-w-xl mb-4">
              {t('openPositions.heading')}
            </h2>
            <p className="text-steel max-w-lg leading-relaxed">
              {t('openPositions.description')}
            </p>
          </div>

          <div className="bg-white border border-fog p-10 md:p-14 text-center">
            <p className="text-steel text-sm mb-6">{t('openPositions.placeholder')}</p>
            <a
              href="#apply"
              className="inline-flex items-center justify-center gap-2 bg-sig-blue hover:bg-blue-900 text-white font-semibold text-sm px-6 py-3 rounded-md transition-colors"
            >
              {t('openPositions.ctaSubmit')}
              <span className="w-4 h-4">{icons.arrowRight}</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── Apply CTA ── */}
      <section id="apply" className="bg-graphite py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold text-fog tracking-widest uppercase mb-6">{t('cta.eyebrow')}</p>
          <h2 className="font-semibold text-bone text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight mb-4">
            {t('cta.heading')}
          </h2>
          <p className="text-fog mb-8">
            {t('cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+19725551234" className="inline-flex items-center justify-center gap-2 bg-bone hover:bg-white text-carbon font-semibold px-7 py-3 text-sm rounded-md transition-colors">
              <span className="w-4 h-4">{icons.phone}</span>
              {t('cta.callUs')}
            </a>
            <a href="mailto:jobs@protechstaffing.com" className="inline-flex items-center justify-center gap-2 border border-fog hover:border-bone text-bone font-medium px-7 py-3 text-sm rounded-md transition-colors">
              <span className="w-4 h-4">{icons.mail}</span>
              {t('cta.emailResume')}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
