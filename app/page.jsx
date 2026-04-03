'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import icons from '@/components/icons'

function Hero() {
  const { t } = useTranslation('home')
  return (
    <section className="bg-bone pt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 md:py-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <h1 className="text-xs font-semibold text-ind-green tracking-wide md:tracking-widest uppercase mb-5 leading-relaxed">
              {t('hero.eyebrow')}
            </h1>
            <p className="font-sans font-semibold text-carbon text-4xl md:text-5xl lg:text-6xl leading-[1.08] tracking-tight mb-6">
              {t('hero.headline')}
            </p>
            <p className="text-steel text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
              {t('hero.subhead')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/jobs" className="inline-flex items-center justify-center gap-2 bg-sig-blue hover:bg-blue-900 text-white font-semibold px-8 py-4 rounded-md transition-colors">
                {t('hero.ctaSecondary')}
                <span className="w-4 h-4">{icons.arrowRight}</span>
              </Link>
              <Link href="/employers" className="inline-flex items-center justify-center gap-2 border-2 border-sig-blue hover:bg-sig-blue text-sig-blue hover:text-white font-semibold px-8 py-4 rounded-md transition-colors">
                {t('hero.ctaPrimary')}
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=900&q=75"
                alt="Industrial worker at light manufacturing facility"
                className="w-full h-full object-cover grayscale opacity-80 mix-blend-multiply"
                style={{ filter: 'grayscale(40%) brightness(0.85)' }}
              />
              <div className="absolute inset-0 bg-bone/20" />
            </div>
            <div className="hidden sm:block absolute -bottom-4 -left-4 bg-white border border-fog px-5 py-4 shadow-sm">
              <p className="font-mono text-2xl font-medium text-carbon">{t('hero.statChipValue')}</p>
              <p className="text-xs text-steel mt-0.5">{t('hero.statChipLabel')}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-20 pt-8 border-t border-fog flex flex-wrap gap-4 md:gap-8 items-center">
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
      </div>
    </section>
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
    <section className="bg-white border-y border-fog">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map(({ number, label }) => (
            <div key={label} className="flex flex-col gap-1">
              <span className="font-mono text-2xl font-medium text-carbon">{number}</span>
              <span className="text-xs text-steel leading-snug">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Employers() {
  const { t } = useTranslation('home')
  return (
    <section id="employers" className="bg-bone py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
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
            <a href="#contact" className="inline-flex items-center gap-2 bg-sig-blue hover:bg-blue-900 text-white font-semibold text-sm px-6 py-3 rounded-md transition-colors">
              {t('employers.cta')}
              <span className="w-4 h-4">{icons.arrowRight}</span>
            </a>
          </div>

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
        </div>
      </div>
    </section>
  )
}

function Industries() {
  const { t } = useTranslation('home')
  const list = [
    { icon: icons.circuit,   title: t('industries.list.electronics.title'),      desc: t('industries.list.electronics.desc'),      cert: t('industries.list.electronics.cert'), href: '/industries/electronics-manufacturing' },
    { icon: icons.gear,      title: t('industries.list.lightIndustrial.title'),   desc: t('industries.list.lightIndustrial.desc'),   href: '/industries/light-industrial' },
    { icon: icons.box,       title: t('industries.list.warehouse.title'),         desc: t('industries.list.warehouse.desc'),         href: '/industries/warehouse-distribution' },
    { icon: icons.truck,     title: t('industries.list.supplyChain.title'),       desc: t('industries.list.supplyChain.desc'),       href: '/industries/supply-chain-logistics' },
    { icon: icons.clipboard, title: t('industries.list.administrative.title'),    desc: t('industries.list.administrative.desc'),    href: '/industries/administrative-clerical' },
    { icon: icons.hardhat,   title: t('industries.list.generalLabor.title'),      desc: t('industries.list.generalLabor.desc'),      href: '/industries/general-labor' },
  ]

  return (
    <section id="industries" className="bg-white py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-8 md:mb-14">
          <p className="text-xs font-semibold text-steel tracking-widest uppercase mb-4">{t('industries.eyebrow')}</p>
          <h2 className="font-semibold text-carbon text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight max-w-xl mb-4">
            {t('industries.headline')}
          </h2>
          <p className="text-steel max-w-2xl leading-relaxed">{t('industries.subhead')}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-fog">
          {list.map(({ icon, title, desc, cert, href }) => (
            <Link key={title} href={href} className="bg-white p-8 hover:bg-bone transition-colors group block">
              <div className="w-5 h-5 text-ind-green mb-5">{icon}</div>
              <h3 className="font-semibold text-carbon text-base mb-2 group-hover:text-ind-green transition-colors">{title}</h3>
              <p className="text-steel text-sm leading-relaxed">{desc}</p>
              {cert && <p className="text-ind-green text-sm italic mt-2 leading-relaxed">{cert}</p>}
            </Link>
          ))}
        </div>
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
    <section className="bg-bone py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div>
            <p className="text-xs font-semibold text-steel tracking-widest uppercase mb-5">{t('howItWorks.eyebrow')}</p>
            <h2 className="font-semibold text-carbon text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight mb-6 whitespace-pre-line">
              {t('howItWorks.headline')}
            </h2>
            <p className="text-steel leading-relaxed mb-4">{t('howItWorks.body1')}</p>
            <p className="text-steel text-sm leading-relaxed">{t('howItWorks.body2')}</p>
          </div>

          <div className="flex flex-col gap-0 border-l border-fog">
            {steps.map(({ n, title, desc }) => (
              <div key={n} className="pl-8 pb-10 last:pb-0 relative">
                <div className="absolute -left-px top-0 w-px h-full bg-fog" />
                <p className="font-mono text-xs text-ind-green tracking-widest mb-2">{n}</p>
                <h3 className="font-semibold text-carbon text-base mb-1.5">{title}</h3>
                <p className="text-steel text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
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
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-8 md:mb-14">
          <p className="text-xs font-semibold text-steel tracking-widest uppercase mb-4">{t('locations.eyebrow')}</p>
          <h2 className="font-semibold text-carbon text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight max-w-xl mb-4 whitespace-pre-line">
            {t('locations.headline')}
          </h2>
          <p className="text-steel max-w-lg leading-relaxed mb-3">{t('locations.body1')}</p>
          <p className="text-steel text-sm max-w-lg leading-relaxed">{t('locations.body2')}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-fog">
          {markets.map(({ city, state, label, roles, serving, href, img }) => (
            <Link key={city} href={href} className="bg-white group overflow-hidden block">
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
          ))}
        </div>
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
      <div className="max-w-6xl mx-auto px-6">
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

        <div className="grid md:grid-cols-3 gap-px bg-fog">
          {reviews.map(({ headline, quote, name, role, location }) => (
            <div key={name} className="bg-white p-8 flex flex-col">
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
          ))}
        </div>
      </div>
    </section>
  )
}

function JobSeekersSection() {
  const { t } = useTranslation('home')
  return (
    <section id="job-seekers" className="bg-sig-blue py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
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

            <a href="#apply" className="inline-flex items-center gap-2 bg-bone hover:bg-white text-carbon font-semibold text-sm px-6 py-3 rounded-md transition-colors">
              {t('jobSeekers.cta')}
              <span className="w-4 h-4">{icons.arrowRight}</span>
            </a>
          </div>

          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=800&q=75"
              alt="Warehouse worker in Dallas Fort Worth distribution center ready for temp-to-hire placement"
              className="w-full h-full object-cover"
              style={{ filter: 'grayscale(30%) brightness(0.8)' }}
            />
          </div>
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
          <a href="#request" className="inline-flex items-center justify-center gap-2 border border-fog hover:border-bone text-bone font-medium px-7 py-3 text-sm rounded-md transition-colors">
            {t('ctaBand.ctaRequest')}
            <span className="w-4 h-4">{icons.arrowRight}</span>
          </a>
        </div>
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
