'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import icons from '@/components/icons'

export default function AboutPage() {
  const { t } = useTranslation('about')

  return (
    <>
      {/* Hero */}
      <section className="bg-bone pt-20">
        <div className="max-w-6xl mx-auto px-6 py-10 md:py-16">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-xs font-semibold text-ind-green tracking-wide md:tracking-widest uppercase mb-5">
                {t('hero.eyebrow')}
              </p>
              <h1 className="font-sans font-semibold text-carbon text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight mb-5">
                {t('hero.heading')}
              </h1>
              <p className="text-steel text-base md:text-lg leading-relaxed mb-8 max-w-lg">
                {t('hero.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/#employers" className="inline-flex items-center justify-center gap-2 bg-sig-blue hover:bg-blue-900 text-white font-semibold text-sm px-6 py-3 rounded-md transition-colors">
                  {t('hero.ctaRequestWorkers')}
                  <span className="w-4 h-4">{icons.arrowRight}</span>
                </Link>
                <Link href="/#job-seekers" className="inline-flex items-center justify-center gap-2 border border-sig-blue hover:bg-sig-blue text-sig-blue hover:text-white font-medium text-sm px-6 py-3 rounded-md transition-colors">
                  {t('hero.ctaFindJobs')}
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=900&q=75"
                  alt={t('hero.imgAlt')}
                  className="w-full h-full object-cover"
                  style={{ filter: 'grayscale(35%) brightness(0.88)' }}
                />
              </div>
              <div className="hidden sm:block absolute -bottom-4 -left-4 bg-white border border-fog px-5 py-4 shadow-sm">
                <p className="font-mono text-2xl font-medium text-carbon">{t('hero.statNumber')}</p>
                <p className="text-xs text-steel mt-0.5">{t('hero.statLabel')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-y border-fog">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['yearsInBusiness', 'workersPlaced', 'usMarkets', 'clientsReorder'].map(key => (
              <div key={key} className="flex flex-col gap-1">
                <span className="font-mono text-2xl font-medium text-carbon">{t(`stats.${key}.n`)}</span>
                <span className="text-xs text-steel leading-snug">{t(`stats.${key}.label`)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-bone py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20">
            <div>
              <p className="text-xs font-semibold text-steel tracking-widest uppercase mb-5">{t('ourStory.eyebrow')}</p>
              <h2 className="font-semibold text-carbon text-3xl leading-tight tracking-tight mb-6">
                {t('ourStory.heading').split('\n').map((line, i) => (
                  <span key={i}>{line}{i === 0 && <br />}</span>
                ))}
              </h2>
              <p className="text-steel leading-relaxed mb-4">
                {t('ourStory.p1')}
              </p>
              <p className="text-steel leading-relaxed mb-4">
                {t('ourStory.p2')}
              </p>
              <p className="text-steel leading-relaxed">
                {t('ourStory.p3')}
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold text-steel tracking-widest uppercase mb-5">{t('beliefs.eyebrow')}</p>
              <h2 className="font-semibold text-carbon text-3xl leading-tight tracking-tight mb-8">
                {t('beliefs.heading').split('\n').map((line, i) => (
                  <span key={i}>{line}{i === 0 && <br />}</span>
                ))}
              </h2>
              <div className="flex flex-col gap-6">
                {['staffingIsLocal', 'screenForRole', 'stayInvolved', 'doFewerThings'].map(key => (
                  <div key={key} className="flex gap-4 items-start">
                    <div className="w-4 h-4 text-ind-green mt-0.5 flex-shrink-0">{icons.check}</div>
                    <div>
                      <p className="font-semibold text-carbon text-sm mb-0.5">{t(`beliefs.${key}.title`)}</p>
                      <p className="text-steel text-sm leading-relaxed">{t(`beliefs.${key}.desc`)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-semibold text-steel tracking-widest uppercase mb-5">{t('howWeWork.eyebrow')}</p>
          <h2 className="font-semibold text-carbon text-3xl leading-tight tracking-tight mb-8 md:mb-12">
            {t('howWeWork.heading')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: icons.target, key: 'roleSpecific' },
              { icon: icons.clock, key: 'fillTime' },
              { icon: icons.users, key: 'localTeams' },
            ].map(({ icon, key }) => (
              <div key={key} className="border-t-2 border-ind-green pt-6">
                <div className="w-5 h-5 text-ind-green mb-4">{icon}</div>
                <h3 className="font-semibold text-carbon text-base mb-3">{t(`howWeWork.${key}.title`)}</h3>
                <p className="text-steel text-sm leading-relaxed">{t(`howWeWork.${key}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="bg-bone py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-semibold text-steel tracking-widest uppercase mb-5">{t('offices.eyebrow')}</p>
          <h2 className="font-semibold text-carbon text-3xl leading-tight tracking-tight mb-3">
            {t('offices.heading')}
          </h2>
          <p className="text-steel mb-12 max-w-lg leading-relaxed">
            {t('offices.description')}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { key: 'richardson', href: '/staffing-agency-dallas-fort-worth' },
              { key: 'bedford', href: '/staffing-agency-bedford-tx' },
              { key: 'austin', href: '/locations' },
              { key: 'tampa', href: '/locations' },
              { key: 'sanJose', href: '/locations' },
              { key: 'phoenix', href: '/locations' },
            ].map(({ key, href }) => (
              <Link key={key} href={href} className="group block border border-fog hover:border-carbon bg-white p-6 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <span className="w-5 h-5 text-ind-green">{icons.mapPin}</span>
                  <span className="w-4 h-4 text-steel group-hover:text-carbon transition-colors">{icons.arrowRight}</span>
                </div>
                <p className="text-[10px] font-semibold text-ind-green tracking-widest uppercase mb-1">{t(`offices.${key}.tag`)}</p>
                <h3 className="font-semibold text-carbon text-base mb-2">{t(`offices.${key}.city`)}</h3>
                <p className="text-steel text-sm leading-relaxed">{t(`offices.${key}.desc`)}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Overview */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-semibold text-steel tracking-widest uppercase mb-5">{t('industriesOverview.eyebrow')}</p>
          <h2 className="font-semibold text-carbon text-3xl leading-tight tracking-tight mb-3">
            {t('industriesOverview.heading')}
          </h2>
          <p className="text-steel mb-12 max-w-lg leading-relaxed">
            {t('industriesOverview.description')}
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { key: 'electronicsManufacturing', href: '/industries/electronics-manufacturing' },
              { key: 'lightIndustrial', href: '/industries/light-industrial' },
              { key: 'warehouseDistribution', href: '/industries/warehouse-distribution' },
              { key: 'supplyChainLogistics', href: '/industries/supply-chain-logistics' },
              { key: 'administrativeClerical', href: '/industries/administrative-clerical' },
              { key: 'generalLabor', href: '/industries/general-labor' },
            ].map(({ key, href }) => (
              <Link
                key={href}
                href={href}
                className="inline-flex items-center gap-2 border border-fog hover:border-carbon text-steel hover:text-carbon text-sm font-medium px-5 py-2.5 transition-colors rounded-md"
              >
                {t(`industriesOverview.${key}`)}
                <span className="w-3.5 h-3.5">{icons.arrowRight}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-graphite py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold text-fog tracking-widest uppercase mb-6">{t('cta.eyebrow')}</p>
          <h2 className="font-semibold text-bone text-3xl md:text-4xl leading-tight tracking-tight mb-4">
            {t('cta.heading')}
          </h2>
          <p className="text-white text-sm mb-10">
            {t('cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/#employers" className="inline-flex items-center justify-center gap-2 bg-bone hover:bg-white text-carbon font-semibold px-7 py-3 text-sm rounded-md transition-colors">
              <span className="w-4 h-4">{icons.phone}</span>
              {t('cta.ctaRequestWorkers')}
            </Link>
            <Link href="/#job-seekers" className="inline-flex items-center justify-center gap-2 border border-fog hover:border-bone text-bone font-medium px-7 py-3 text-sm rounded-md transition-colors">
              {t('cta.ctaFindJobs')}
              <span className="w-4 h-4">{icons.arrowRight}</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
