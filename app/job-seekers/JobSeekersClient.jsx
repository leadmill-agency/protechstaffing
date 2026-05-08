'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import icons from '@/components/icons'

export default function JobSeekersPage() {
  const { t } = useTranslation('jobSeekers')
  const [iframeHeight, setIframeHeight] = useState(900)

  // Load Avionte job board script
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

  // Responsive iframe height for application form
  useEffect(() => {
    const handleResize = () => {
      setIframeHeight(window.innerWidth < 640 ? 1200 : 900)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

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
                {(Array.isArray(benefits) ? benefits : []).map(item => (
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
                  href="#submit-application"
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

      {/* ── Why Pro-Tech ── */}
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
                className="bg-white border border-fog p-6 hover:border-ind-green transition-colors group block"
              >
                <h3 className="font-semibold text-carbon text-base mb-2 group-hover:text-ind-green transition-colors">{t(`industries.${key}.title`)}</h3>
                <p className="text-steel text-sm leading-relaxed mb-3">{t(`industries.${key}.desc`)}</p>
                <span className="text-xs font-semibold text-ind-green tracking-wide">{t('industries.viewRoles')}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Open Positions / Avionte Job Board ── */}
      <section id="open-positions" className="bg-white py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-8 md:mb-10">
            <p className="text-xs font-semibold text-steel tracking-widest uppercase mb-4">{t('openPositions.eyebrow')}</p>
            <h2 className="font-semibold text-carbon text-3xl md:text-4xl leading-tight tracking-tight mb-3">
              {t('openPositions.heading')}
            </h2>
            <p className="text-steel max-w-2xl leading-relaxed text-sm">
              {t('openPositions.description')}
            </p>
          </div>
          <div id="avionte-job-board" className="min-h-[400px] bg-bone border border-fog rounded-md p-4 md:p-6 overflow-hidden" />
        </div>
      </section>

      {/* ── Submit Application / Avionte Iframe ── */}
      <section id="submit-application" className="bg-bone py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8 md:mb-10 text-center">
            <p className="text-xs font-semibold text-steel tracking-widest uppercase mb-4">{t('application.eyebrow')}</p>
            <h2 className="font-semibold text-carbon text-3xl md:text-4xl leading-tight tracking-tight mb-3">
              {t('application.heading')}
            </h2>
            <p className="text-steel max-w-2xl mx-auto leading-relaxed">
              {t('application.description')}
            </p>
          </div>
          <iframe
            src="https://hire.myavionte.com/sonar/v2/careers/integrations/standalone/general?bId=raT6rfEW_d4&jbId=iM1TUV0_0sw&rpid=general"
            width="100%"
            height={iframeHeight}
            frameBorder="0"
            scrolling="yes"
            title={t('application.iframeTitle')}
            className="w-full border border-fog rounded-md bg-white"
          />
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

      {/* ── More Questions? ── */}
      <section className="bg-graphite py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold text-fog tracking-widest uppercase mb-6">{t('moreQuestions.eyebrow')}</p>
          <h2 className="font-semibold text-bone text-3xl md:text-4xl leading-tight tracking-tight mb-4">
            {t('moreQuestions.heading')}
          </h2>
          <p className="text-fog mb-8">
            {t('moreQuestions.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+19725551234" className="inline-flex items-center justify-center gap-2 bg-bone hover:bg-white text-carbon font-semibold px-7 py-3 text-sm rounded-md transition-colors">
              <span className="w-4 h-4">{icons.phone}</span>
              {t('moreQuestions.callUs')}
            </a>
            <a href="mailto:jobs@protechstaffing.com" className="inline-flex items-center justify-center gap-2 border border-fog hover:border-bone text-bone font-medium px-7 py-3 text-sm rounded-md transition-colors">
              <span className="w-4 h-4">{icons.mail}</span>
              {t('moreQuestions.emailUs')}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
