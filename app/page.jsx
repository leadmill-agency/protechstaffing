'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import icons from '@/components/icons'
import MotionFadeIn, { MotionFadeInItem } from '@/components/MotionFadeIn'

function Hero() {
  const { t } = useTranslation('home')
  // TODO: Replace with client-provided electronics/manufacturing hero asset when available.
  // Interim image swapped May 2026 — client did not want the prior hard-hat/construction photo,
  // since Pro-Tech mostly staffs electronics manufacturing, circuit-board, and light-industrial work.
  const HERO_IMG = 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=75'
  const HERO_ALT = 'Close-up of a printed circuit board on an electronics manufacturing line'

  return (
    <>
      <section className="relative pt-20 bg-white overflow-hidden">
        {/* Desktop: image fills the right half, full-bleed to viewport edge */}
        <div className="hidden lg:block absolute top-20 bottom-0 left-1/2 right-0 overflow-hidden">
          <img
            src={HERO_IMG}
            alt={HERO_ALT}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content layer */}
        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 lg:gap-12 lg:min-h-[640px]">
          {/* Left — text on white */}
          <div className="px-6 lg:pl-12 xl:pl-16 py-12 lg:py-24 lg:pr-12 flex items-center">
            <MotionFadeIn immediate>
              <h1 className="text-xs font-semibold text-ind-green tracking-wide md:tracking-widest uppercase mb-5 leading-relaxed">
                {t('hero.eyebrow')}
              </h1>
              <p className="font-sans font-semibold text-sig-blue text-4xl md:text-5xl lg:text-6xl leading-[1.08] tracking-tight mb-8">
                {t('hero.headline')}
              </p>
              <p className="text-steel text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
                {t('hero.subhead')}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/job-seekers"
                  data-track="find_jobs"
                  data-track-location="hero"
                  className="inline-flex items-center justify-center gap-2 bg-sig-blue hover:bg-blue-900 text-white font-semibold px-8 py-4 rounded-md transition-colors"
                >
                  {t('hero.ctaSecondary')}
                  <span className="w-4 h-4">{icons.arrowRight}</span>
                </Link>
                <Link href="/employers" className="inline-flex items-center justify-center gap-2 border-2 border-sig-blue hover:bg-sig-blue text-sig-blue hover:text-white font-semibold px-8 py-4 rounded-md transition-colors">
                  {t('hero.ctaPrimary')}
                </Link>
              </div>
            </MotionFadeIn>
          </div>

          {/* Mobile-only: image stacks below text on small screens */}
          <div className="aspect-[4/3] sm:aspect-[16/10] overflow-hidden lg:hidden relative">
            <img
              src={HERO_IMG}
              alt={HERO_ALT}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 w-32 h-32 rounded-full bg-white border-[3px] border-ind-green shadow-lg flex flex-col items-center justify-center text-center px-3">
              <p className="font-mono text-3xl font-bold text-sig-blue leading-none mb-1">{t('hero.statChipValue')}</p>
              <p className="text-[9px] uppercase tracking-wider text-steel leading-tight">{t('hero.statChipLabel')}</p>
            </div>
          </div>
        </div>

        {/* Desktop stat chip — circle with green outline, overlapping the right-side image */}
        <div className="hidden lg:flex absolute bottom-10 left-1/2 ml-6 w-44 h-44 rounded-full bg-white border-4 border-ind-green shadow-2xl flex-col items-center justify-center text-center px-4 z-10">
          <p className="font-mono text-5xl font-bold text-sig-blue leading-none mb-2">{t('hero.statChipValue')}</p>
          <p className="text-[11px] uppercase tracking-wider text-steel leading-tight">{t('hero.statChipLabel')}</p>
        </div>
      </section>

      {/* Operating-in strip */}
      <section className="bg-white border-b border-fog">
        <MotionFadeIn>
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-wrap gap-4 md:gap-8 items-center">
            <p className="text-xs font-semibold text-steel tracking-widest uppercase">{t('hero.operatingIn')}</p>
            {[
              { name: t('hero.cities.richardsonTx'), href: '/locations/richardson-tx' },
              { name: t('hero.cities.bedfordTx'), href: '/locations/bedford-tx' },
              { name: t('hero.cities.austinTx'), href: '/locations/austin-tx' },
              { name: t('hero.cities.tampaFl'), href: '/locations/tampa-fl' },
              { name: t('hero.cities.sanJoseCa'), href: '/locations/san-jose-ca' },
              { name: t('hero.cities.phoenixAz'), href: '/locations/phoenix-az' },
            ].map(({ name, href }) => (
              <Link key={name} href={href} className="text-sm font-medium text-carbon hover:text-ind-green transition-colors">{name}</Link>
            ))}
          </div>
        </MotionFadeIn>
      </section>
    </>
  )
}

function StatsBar() {
  const { t } = useTranslation('home')
  const stats = [
    { number: t('statsBar.workersPlaced.number'), label: t('statsBar.workersPlaced.label') },
    { number: t('statsBar.avgTime.number'),       label: t('statsBar.avgTime.label') },
    { number: t('statsBar.fillRate.number'),       label: t('statsBar.fillRate.label') },
    { number: t('statsBar.clientsReorder.number'), label: t('statsBar.clientsReorder.label') },
    { number: t('statsBar.yearsInBusiness.number'),label: t('statsBar.yearsInBusiness.label') },
  ]
  return (
    <section className="bg-sig-blue">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <MotionFadeIn stagger>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {stats.map(({ number, label }) => (
              <MotionFadeInItem key={label}>
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-3xl font-medium text-white">{number}</span>
                  <span className="text-xs text-fog leading-snug">{label}</span>
                </div>
              </MotionFadeInItem>
            ))}
          </div>
        </MotionFadeIn>
      </div>
    </section>
  )
}

function Employers() {
  const { t } = useTranslation('home')
  return (
    <section id="employers" className="bg-bone py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <MotionFadeIn>
            <p className="text-xs font-semibold text-ind-green tracking-widest uppercase mb-5">{t('employers.eyebrow')}</p>
            <h2 className="font-semibold text-carbon text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight mb-6 whitespace-pre-line">
              {t('employers.headline')}
            </h2>
            <p className="text-steel leading-relaxed mb-3">{t('employers.body1')}</p>
            <p className="text-steel leading-relaxed mb-2">{t('employers.body2')}</p>
            <div className="flex flex-col gap-5 mb-10 mt-8">
              {[
                { title: t('employers.features.screening.title'), desc: t('employers.features.screening.desc') },
                { title: t('employers.features.fastResponse.title'), desc: t('employers.features.fastResponse.desc') },
                { title: t('employers.features.recruiters.title'), desc: t('employers.features.recruiters.desc') },
              ].map(({ title, desc }) => (
                <div key={title} className="flex gap-4 items-start">
                  <div className="w-4 h-4 text-ind-green mt-0.5 flex-shrink-0">{icons.check}</div>
                  <div>
                    <p className="font-semibold text-carbon text-sm mb-0.5">{title}</p>
                    <p className="text-steel text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/employers#contact" className="inline-flex items-center gap-2 bg-sig-blue hover:bg-blue-900 text-white font-semibold text-sm px-6 py-3 rounded-md transition-colors">
              {t('employers.cta')}
              <span className="w-4 h-4">{icons.arrowRight}</span>
            </Link>
          </MotionFadeIn>

          <MotionFadeIn delay={0.1}>
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=75"
                  alt="Electronics manufacturing facility worker performing quality control inspection"
                  className="w-full h-full object-cover"
                  style={{ filter: 'grayscale(30%) brightness(0.9)' }}
                />
              </div>
              <div className="hidden sm:block absolute -bottom-4 -right-4 bg-white border border-fog px-5 py-4 shadow-sm max-w-[180px]">
                <p className="font-mono text-2xl font-medium text-carbon">{t('employers.statChipValue')}</p>
                <p className="text-xs text-steel mt-0.5 leading-snug">{t('employers.statChipLabel')}</p>
              </div>
            </div>
          </MotionFadeIn>
        </div>
      </div>
    </section>
  )
}

function Industries() {
  const { t } = useTranslation('home')
  const categories = t('industries.categories', { returnObjects: true })
  const cats = Array.isArray(categories) ? categories : []
  const [active, setActive] = useState(0)
  const current = cats[active] || cats[0]

  return (
    <section id="industries" className="bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <MotionFadeIn>
          <div className="mb-8 md:mb-12">
            <p className="text-xs font-semibold text-steel tracking-widest uppercase mb-4">{t('industries.eyebrow')}</p>
            <h2 className="font-semibold text-carbon text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight max-w-xl mb-4">
              {t('industries.headline')}
            </h2>
            <p className="text-steel max-w-2xl leading-relaxed">{t('industries.subhead')}</p>
          </div>
        </MotionFadeIn>

        {/* Category tabs */}
        <div className="flex flex-col sm:flex-row gap-2 border-b border-fog mb-8">
          {cats.map((c, i) => (
            <button
              key={c.key || c.title}
              onClick={() => setActive(i)}
              className={`text-left sm:text-center font-semibold text-sm px-5 py-3 -mb-px border-b-2 transition-colors ${
                i === active
                  ? 'border-ind-green text-sig-blue'
                  : 'border-transparent text-steel hover:text-carbon'
              }`}
            >
              {c.title}
            </button>
          ))}
        </div>

        {/* Active category panel */}
        {current && (
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-1">
              <p className="text-steel leading-relaxed mb-6">{current.desc}</p>
              <div className="flex flex-col gap-2">
                {(Array.isArray(current.links) ? current.links : []).map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-ind-green hover:text-sig-blue transition-colors"
                  >
                    {label}
                    <span className="w-3.5 h-3.5">{icons.arrowRight}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="lg:col-span-2">
              <p className="text-xs font-semibold text-steel tracking-widest uppercase mb-4">{t('industries.rolesLabel')}</p>
              <div className="flex flex-wrap gap-2.5">
                {(Array.isArray(current.roles) ? current.roles : []).map(role => (
                  <span key={role} className="inline-flex items-center gap-2 border border-fog bg-bone text-carbon text-sm px-3.5 py-2 rounded-md">
                    <span className="w-3 h-3 text-ind-green flex-shrink-0">{icons.check}</span>
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

function HowItWorks() {
  const { t } = useTranslation('home')
  const steps = [
    { n: t('howItWorks.steps.step1.n'), title: t('howItWorks.steps.step1.title'), desc: t('howItWorks.steps.step1.desc') },
    { n: t('howItWorks.steps.step2.n'), title: t('howItWorks.steps.step2.title'), desc: t('howItWorks.steps.step2.desc') },
    { n: t('howItWorks.steps.step3.n'), title: t('howItWorks.steps.step3.title'), desc: t('howItWorks.steps.step3.desc') },
  ]

  return (
    <section className="bg-sig-blue py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <MotionFadeIn>
            <p className="text-xs font-semibold text-ind-green tracking-widest uppercase mb-5">{t('howItWorks.eyebrow')}</p>
            <h2 className="font-semibold text-bone text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight mb-6 whitespace-pre-line">
              {t('howItWorks.headline')}
            </h2>
            <p className="text-fog leading-relaxed mb-4">{t('howItWorks.body1')}</p>
            <p className="text-fog text-sm leading-relaxed">{t('howItWorks.body2')}</p>
          </MotionFadeIn>

          <MotionFadeIn stagger delay={0.1}>
            <div className="flex flex-col gap-0 border-l border-white/20">
              {steps.map(({ n, title, desc }) => (
                <MotionFadeInItem key={n}>
                  <div className="pl-8 pb-10 last:pb-0 relative">
                    <div className="absolute -left-px top-0 w-px h-full bg-white/20" />
                    <p className="font-mono text-xs text-ind-green tracking-widest mb-2">{n}</p>
                    <h3 className="font-semibold text-bone text-base mb-1.5">{title}</h3>
                    <p className="text-fog text-sm leading-relaxed">{desc}</p>
                  </div>
                </MotionFadeInItem>
              ))}
            </div>
          </MotionFadeIn>
        </div>
      </div>
    </section>
  )
}

function Locations() {
  const { t } = useTranslation('home')
  const markets = [
    { city: t('locations.markets.richardson.city'), state: t('locations.markets.richardson.state'), label: t('locations.markets.richardson.label'), roles: t('locations.markets.richardson.roles'), serving: t('locations.markets.richardson.serving'), href: '/locations/richardson-tx', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=70' },
    { city: t('locations.markets.bedford.city'), state: t('locations.markets.bedford.state'), label: t('locations.markets.bedford.label'), roles: t('locations.markets.bedford.roles'), serving: t('locations.markets.bedford.serving'), href: '/locations/bedford-tx', img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=70' },
    { city: t('locations.markets.austin.city'), state: t('locations.markets.austin.state'), label: t('locations.markets.austin.label'), roles: t('locations.markets.austin.roles'), serving: t('locations.markets.austin.serving'), href: '/locations/austin-tx', img: 'https://images.unsplash.com/photo-1531218150217-54595bc2b934?w=600&q=70' },
    { city: t('locations.markets.tampa.city'), state: t('locations.markets.tampa.state'), label: t('locations.markets.tampa.label'), roles: t('locations.markets.tampa.roles'), serving: t('locations.markets.tampa.serving'), href: '/locations/tampa-fl', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=70' },
    { city: t('locations.markets.sanJose.city'), state: t('locations.markets.sanJose.state'), label: t('locations.markets.sanJose.label'), roles: t('locations.markets.sanJose.roles'), serving: t('locations.markets.sanJose.serving'), href: '/locations/san-jose-ca', img: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=600&q=70' },
    { city: t('locations.markets.phoenix.city'), state: t('locations.markets.phoenix.state'), label: t('locations.markets.phoenix.label'), roles: t('locations.markets.phoenix.roles'), serving: t('locations.markets.phoenix.serving'), href: '/locations/phoenix-az', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=70' },
  ]

  return (
    <section id="locations" className="bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <MotionFadeIn>
          <div className="mb-8 md:mb-14">
            <p className="text-xs font-semibold text-steel tracking-widest uppercase mb-4">{t('locations.eyebrow')}</p>
            <h2 className="font-semibold text-carbon text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight max-w-xl mb-4 whitespace-pre-line">
              {t('locations.headline')}
            </h2>
            <p className="text-steel max-w-lg leading-relaxed mb-3">{t('locations.body1')}</p>
            <p className="text-steel text-sm max-w-lg leading-relaxed">{t('locations.body2')}</p>
          </div>
        </MotionFadeIn>

        <MotionFadeIn stagger>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-fog">
            {markets.map(({ city, state, label, roles, serving, href, img }) => (
              <MotionFadeInItem key={city}>
                <Link href={href} className="bg-white group overflow-hidden block h-full">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img src={img} alt={`${city} ${state} industrial staffing office`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" style={{ filter: 'grayscale(40%) brightness(0.9)' }} />
                  </div>
                  <div className="p-5 bg-white group-hover:bg-bone transition-colors">
                    <p className="text-[10px] font-semibold text-ind-green tracking-widest uppercase mb-1">{label}</p>
                    <div className="flex items-baseline gap-1.5 mb-2">
                      <h3 className="font-semibold text-carbon text-lg">{city}</h3>
                      <span className="text-steel text-sm">{state}</span>
                    </div>
                    <p className="text-steel text-xs leading-snug mb-1">{roles}</p>
                    <p className="text-[10px] text-steel opacity-70">{serving}</p>
                    <p className="text-[10px] font-semibold text-ind-green mt-2 tracking-wide">{t('locations.viewMarket')}</p>
                  </div>
                </Link>
              </MotionFadeInItem>
            ))}
          </div>
        </MotionFadeIn>
      </div>
    </section>
  )
}

function Testimonials() {
  const { t } = useTranslation('home')
  const reviews = [
    { headline: t('testimonials.reviews.review1.headline'), quote: t('testimonials.reviews.review1.quote'), name: t('testimonials.reviews.review1.name'), role: t('testimonials.reviews.review1.role'), location: t('testimonials.reviews.review1.location') },
    { headline: t('testimonials.reviews.review2.headline'), quote: t('testimonials.reviews.review2.quote'), name: t('testimonials.reviews.review2.name'), role: t('testimonials.reviews.review2.role'), location: t('testimonials.reviews.review2.location') },
    { headline: t('testimonials.reviews.review3.headline'), quote: t('testimonials.reviews.review3.quote'), name: t('testimonials.reviews.review3.name'), role: t('testimonials.reviews.review3.role'), location: t('testimonials.reviews.review3.location') },
  ]

  return (
    <section className="bg-bone py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <MotionFadeIn>
          <div className="mb-8 md:mb-14">
            <p className="text-xs font-semibold text-steel tracking-widest uppercase mb-4">{t('testimonials.eyebrow')}</p>
            <div className="flex items-center gap-2 mb-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="w-4 h-4 text-safe-amber">{icons.star}</span>
              ))}
              <span className="text-xs text-steel ml-2">{t('testimonials.ratingText')}</span>
            </div>
            <h2 className="font-semibold text-carbon text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight max-w-xl mb-3">
              {t('testimonials.headline')}
            </h2>
            <p className="text-steel max-w-lg leading-relaxed">{t('testimonials.subhead')}</p>
          </div>
        </MotionFadeIn>

        <MotionFadeIn stagger>
          <div className="grid md:grid-cols-3 gap-px bg-fog">
            {reviews.map(({ headline, quote, name, role, location }) => (
              <MotionFadeInItem key={name}>
                <div className="bg-white p-8 flex flex-col h-full">
                  <p className="text-ind-green font-semibold text-sm uppercase tracking-wide mb-2">{role}</p>
                  <p className="font-semibold text-carbon text-lg leading-snug mb-4">{headline}</p>
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="w-3.5 h-3.5 text-safe-amber">{icons.star}</span>
                    ))}
                  </div>
                  <p className="text-carbon text-sm leading-relaxed flex-1 mb-8">&ldquo;{quote}&rdquo;</p>
                  <div className="pt-5 border-t border-fog">
                    <p className="font-semibold text-carbon text-sm">{name}</p>
                    <p className="text-[10px] text-steel mt-0.5 tracking-wide">{location}</p>
                  </div>
                </div>
              </MotionFadeInItem>
            ))}
          </div>
        </MotionFadeIn>
      </div>
    </section>
  )
}

function JobSeekersSection() {
  const { t } = useTranslation('home')
  return (
    <section id="job-seekers" className="bg-sig-blue py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <MotionFadeIn>
            <p className="text-xs font-semibold text-ind-green tracking-widest uppercase mb-5">{t('jobSeekers.eyebrow')}</p>
            <h2 className="font-semibold text-bone text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight mb-6 whitespace-pre-line">
              {t('jobSeekers.headline')}
            </h2>
            <p className="text-fog leading-relaxed mb-8">{t('jobSeekers.body')}</p>

            <div className="grid grid-cols-2 gap-3 mb-10">
              {[
                t('jobSeekers.benefits.weeklyPay'),
                t('jobSeekers.benefits.activeOpenings'),
                t('jobSeekers.benefits.tempToHire'),
                t('jobSeekers.benefits.shifts'),
                t('jobSeekers.benefits.entryLevel'),
                t('jobSeekers.benefits.recruiterSupport'),
              ].map(item => (
                <div key={item} className="flex items-start gap-2">
                  <div className="w-3.5 h-3.5 text-ind-green mt-0.5 flex-shrink-0">{icons.check}</div>
                  <span className="text-fog text-sm leading-snug">{item}</span>
                </div>
              ))}
            </div>

            <Link href="/job-seekers" className="inline-flex items-center gap-2 bg-bone hover:bg-white text-carbon font-semibold text-sm px-6 py-3 rounded-md transition-colors">
              {t('jobSeekers.cta')}
              <span className="w-4 h-4">{icons.arrowRight}</span>
            </Link>
          </MotionFadeIn>

          <MotionFadeIn delay={0.1}>
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=800&q=75"
                alt="Warehouse worker in Dallas Fort Worth distribution center ready for temp-to-hire placement"
                className="w-full h-full object-cover"
                style={{ filter: 'grayscale(30%) brightness(0.8)' }}
              />
            </div>
          </MotionFadeIn>
        </div>
      </div>
    </section>
  )
}

function CTABand() {
  const { t } = useTranslation('home')
  return (
    <section id="contact" className="bg-graphite py-14 md:py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <MotionFadeIn>
          <p className="text-xs font-semibold text-fog tracking-widest uppercase mb-6">{t('ctaBand.eyebrow')}</p>
          <h2 className="font-semibold text-bone text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight mb-4 whitespace-pre-line">
            {t('ctaBand.headline')}
          </h2>
          <p className="text-fog mb-3">{t('ctaBand.body1')}</p>
          <p className="text-white text-sm mb-10">{t('ctaBand.body2')}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+10000000000" className="inline-flex items-center justify-center gap-2 bg-bone hover:bg-white text-carbon font-semibold px-7 py-3 text-sm rounded-md transition-colors">
              <span className="w-4 h-4">{icons.phone}</span>
              {t('ctaBand.ctaCall')}
            </a>
            <Link href="/employers#contact" className="inline-flex items-center justify-center gap-2 border border-fog hover:border-bone text-bone font-medium px-7 py-3 text-sm rounded-md transition-colors">
              {t('ctaBand.ctaRequest')}
              <span className="w-4 h-4">{icons.arrowRight}</span>
            </Link>
          </div>
        </MotionFadeIn>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <Employers />
      <Industries />
      <HowItWorks />
      <Locations />
      <Testimonials />
      <JobSeekersSection />
      <CTABand />
    </>
  )
}
