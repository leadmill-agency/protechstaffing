'use client'

import { useState, use } from 'react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import icons from '@/components/icons'
import MARKET_DATA from '@/data/markets'

// ─── FAQ ITEM (accordion) ─────────────────────────────────────────────────────
function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-fog last:border-0">
      <button
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-carbon text-sm md:text-base leading-snug">{q}</span>
        <span className={`w-5 h-5 text-ind-green flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}>
          {icons.chevronDown}
        </span>
      </button>
      {open && (
        <p className="text-steel text-sm leading-relaxed pb-5">{a}</p>
      )}
    </div>
  )
}

const SLUG_TO_MARKET = {
  'richardson-tx': 'richardson',
  'bedford-tx': 'bedford',
  'austin-tx': 'austin',
  'tampa-fl': 'tampa',
  'san-jose-ca': 'sanjose',
  'phoenix-az': 'phoenix',
}

// ─── LOCATION PAGE ─────────────────────────────────────────────────────────────
export default function LocationPage({ params }) {
  const { slug } = use(params)
  const market = SLUG_TO_MARKET[slug] || slug

  const { t } = useTranslation('locations')
  const d = MARKET_DATA[market]
  const isBucket1 = !!(d.officeInfo)

  const label = t(`${market}.label`)
  const cities = t(`${market}.cities`, { returnObjects: true })
  const industries = t(`${market}.industries`, { returnObjects: true })
  const roles = t(`${market}.roles`, { returnObjects: true })
  const proof = t(`${market}.proof`, { returnObjects: true })
  const whyUs = t(`${market}.whyUs`, { returnObjects: true })
  const testimonial = t(`${market}.testimonial`, { returnObjects: true })
  const faq = t(`${market}.faq`, { returnObjects: true, defaultValue: [] })
  const localServices = t(`${market}.localServices`, { returnObjects: true, defaultValue: [] })
  const subMarkets = t(`${market}.subMarkets`, { returnObjects: true, defaultValue: [] })
  const relatedCities = t(`${market}.relatedCities`, { returnObjects: true })
  const marketIntro = t(`${market}.marketIntro`, { defaultValue: '' })

  return (
    <>
      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-bone pt-20">
        <div className="max-w-6xl mx-auto px-6 py-10 md:py-16">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-xs font-semibold text-ind-green tracking-wide md:tracking-widest uppercase mb-5">
                Pro-Tech Staffing · {label}
              </p>
              <h1 className="font-sans font-semibold text-carbon text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight mb-4">
                {t(`${market}.h1`)}
              </h1>
              <p className="text-xs font-semibold text-steel tracking-wide mb-5">{t(`${market}.subhead`)}</p>
              {!isBucket1 && (
                <p className="text-steel text-sm md:text-base leading-relaxed mb-4 max-w-lg">
                  {t('detail.servedFromDesc', { parentOffice: d.parentOffice || 'nearest' })}
                </p>
              )}
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <Link href="/#employers" className="inline-flex items-center justify-center gap-2 bg-sig-blue hover:bg-blue-900 text-white font-semibold text-sm px-6 py-3 rounded-md transition-colors">
                  {t('detail.requestWorkers')}
                  <span className="w-4 h-4">{icons.arrowRight}</span>
                </Link>
                <Link href="/locations" className="inline-flex items-center justify-center gap-2 border border-sig-blue hover:bg-sig-blue text-sig-blue hover:text-white font-medium text-sm px-6 py-3 rounded-md transition-colors">
                  {t('detail.allLocations')}
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={d.img}
                  alt={`${label} industrial staffing`}
                  className="w-full h-full object-cover"
                  style={{ filter: 'grayscale(35%) brightness(0.88)' }}
                />
              </div>
              <div className="hidden sm:block absolute -bottom-4 -left-4 bg-white border border-fog px-5 py-4 shadow-sm">
                <p className="font-mono text-2xl font-medium text-carbon">48h</p>
                <p className="text-xs text-steel mt-0.5">{t('detail.avgFillTime')}</p>
              </div>
            </div>
          </div>

          {/* Coverage strip */}
          <div className="mt-10 md:mt-20 pt-8 border-t border-fog flex flex-wrap gap-3 md:gap-6 items-center">
            <p className="text-xs font-semibold text-steel tracking-widest uppercase">{t('detail.coverageArea')}</p>
            {cities.map(city => (
              <span key={city} className="text-xs font-medium text-carbon">{city}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. STATS BAR ────────────────────────────────────────────────────── */}
      <section className="bg-white border-y border-fog">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {proof.map(({ n, label: proofLabel }) => (
              <div key={proofLabel} className="flex flex-col gap-1">
                <span className="font-mono text-2xl font-medium text-carbon">{n}</span>
                <span className="text-xs text-steel leading-snug">{proofLabel}</span>
              </div>
            ))}
          </div>
          {isBucket1 && d.officeInfo.phone && !d.officeInfo.phone.startsWith('[') && (
            <div className="mt-8 pt-6 border-t border-fog">
              <a
                href={d.officeInfo.phoneNote === 'Text only' ? `sms:${d.officeInfo.phone.replace(/\D/g,'')}` : `tel:${d.officeInfo.phone.replace(/\D/g,'')}`}
                className="inline-flex items-center gap-2 text-sig-blue font-semibold text-sm hover:text-blue-900 transition-colors"
              >
                <span className="w-4 h-4">{icons.phone}</span>
                {d.officeInfo.phoneNote === 'Text only' ? t('detail.textPrefix') : t('detail.callPrefix')} {t('detail.officePhoneLabel', { label })}: {d.officeInfo.phone}
                {d.officeInfo.phoneNote === 'Text only' && <span className="text-steel font-normal">{t('detail.textOnly')}</span>}
              </a>
            </div>
          )}
        </div>
      </section>

      {/* ── 3. MARKET INTRO (Bucket 1 only) ─────────────────────────────────── */}
      {isBucket1 && marketIntro && (
        <section className="bg-bone py-14 md:py-20">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-xs font-semibold text-steel tracking-widest uppercase mb-6">{t('detail.aboutThisMarket')}</p>
            <p className="text-carbon text-xl md:text-2xl font-medium leading-relaxed">
              {marketIntro}
            </p>
          </div>
        </section>
      )}

      {/* ── 4. LOCAL SERVICES (Bucket 1) or Industries checklist (Bucket 2) ── */}
      {isBucket1 && localServices && Array.isArray(localServices) && localServices.length > 0 ? (
        <section className="bg-white py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-xs font-semibold text-steel tracking-widest uppercase mb-5">{t('detail.whatWeStaffHere')}</p>
            <h2 className="font-semibold text-carbon text-3xl leading-tight tracking-tight mb-3">
              {t('detail.staffingServicesIn', { label })}
            </h2>
            <p className="text-steel mb-12 max-w-lg leading-relaxed">
              {t('detail.localServicesDesc')}
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {localServices.map(({ title, desc }, i) => (
                <Link
                  key={title}
                  href={d.localServicesHrefs?.[i] || '#'}
                  className="group block border border-fog hover:border-ind-green bg-bone p-7 transition-colors"
                >
                  <h3 className="font-semibold text-carbon text-base mb-3 group-hover:text-ind-green transition-colors">{title}</h3>
                  <p className="text-steel text-sm leading-relaxed mb-4">{desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-ind-green">
                    {t('detail.learnMore')}
                    <span className="w-3.5 h-3.5">{icons.arrowRight}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="bg-bone py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-xs font-semibold text-steel tracking-widest uppercase mb-5">{t('detail.industriesWeStaff')}</p>
            <h2 className="font-semibold text-carbon text-3xl leading-tight tracking-tight mb-8">
              {t('detail.industriesHeading').split('\n').map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </h2>
            <div className="grid sm:grid-cols-2 gap-3 max-w-2xl">
              {industries.map(ind => (
                <div key={ind} className="flex items-center gap-3 border-b border-fog pb-3">
                  <div className="w-3.5 h-3.5 text-ind-green flex-shrink-0">{icons.check}</div>
                  <span className="text-carbon text-sm font-medium">{ind}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 5. INDUSTRIES + ROLES ───────────────────────────────────────────── */}
      <section className={`${isBucket1 ? 'bg-bone' : 'bg-white'} py-16 md:py-24`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20">
            <div>
              <p className="text-xs font-semibold text-steel tracking-widest uppercase mb-5">{t('detail.industriesWeStaff')}</p>
              <h2 className="font-semibold text-carbon text-3xl leading-tight tracking-tight mb-8">
                {t('detail.industriesHeading').split('\n').map((line, i) => (
                  <span key={i}>{line}{i === 0 && <br />}</span>
                ))}
              </h2>
              <div className="flex flex-col gap-3">
                {industries.map(ind => (
                  <div key={ind} className="flex items-center gap-3 border-b border-fog pb-3">
                    <div className="w-3.5 h-3.5 text-ind-green flex-shrink-0">{icons.check}</div>
                    <span className="text-carbon text-sm font-medium">{ind}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-steel tracking-widest uppercase mb-5">{t('detail.rolesWePlace')}</p>
              <h2 className="font-semibold text-carbon text-3xl leading-tight tracking-tight mb-8">
                {t('detail.rolesHeading').split('\n').map((line, i) => (
                  <span key={i}>{line}{i === 0 && <br />}</span>
                ))}
              </h2>
              <div className="flex flex-col gap-3">
                {roles.map(role => (
                  <div key={role} className="flex items-center gap-3 border-b border-fog pb-3">
                    <div className="w-3.5 h-3.5 text-steel flex-shrink-0">{icons.arrowRight}</div>
                    <span className="text-steel text-sm">{role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. WHY PRO-TECH ─────────────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-semibold text-steel tracking-widest uppercase mb-5">{t('detail.whyProTech')}</p>
          <h2 className="font-semibold text-carbon text-3xl leading-tight tracking-tight mb-8 md:mb-12">
            {t('detail.whyHeading', { label }).split('\n').map((line, i) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {whyUs.map(({ title, desc }) => (
              <div key={title} className="border-t-2 border-ind-green pt-6">
                <h3 className="font-semibold text-carbon text-base mb-3">{title}</h3>
                <p className="text-steel text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. TESTIMONIAL ──────────────────────────────────────────────────── */}
      <section className="bg-carbon py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-6 gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="w-4 h-4 text-ind-green inline-block">{icons.star}</span>
            ))}
          </div>
          <blockquote className="font-semibold text-bone text-xl md:text-2xl leading-relaxed tracking-tight mb-8">
            "{testimonial.quote}"
          </blockquote>
          <p className="text-xs font-semibold text-fog tracking-widest uppercase">{testimonial.name}</p>
          <p className="text-xs text-steel tracking-widest mt-1">{testimonial.co}</p>
        </div>
      </section>

      {/* ── 8. OFFICE INFO (Bucket 1 only) ──────────────────────────────────── */}
      {isBucket1 && d.officeInfo && (
        <section className="bg-bone py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">
              <div>
                <p className="text-xs font-semibold text-steel tracking-widest uppercase mb-5">{t('detail.officeEyebrow', { label })}</p>
                <h2 className="font-semibold text-carbon text-3xl leading-tight tracking-tight mb-6">
                  {t('detail.officeHeading').split('\n').map((line, i) => (
                    <span key={i}>{line}{i === 0 && <br />}</span>
                  ))}
                </h2>
                <p className="text-steel leading-relaxed mb-8">
                  {t('detail.officeDescription')}
                </p>
                <div className="flex flex-col gap-4">
                  {d.officeInfo.address && (
                    <div className="flex items-start gap-3">
                      <span className="w-4 h-4 text-ind-green mt-0.5 flex-shrink-0">{icons.mapPin}</span>
                      <div>
                        <p className="text-xs font-semibold text-steel uppercase tracking-widest mb-0.5">{t('detail.addressLabel')}</p>
                        <p className="text-carbon text-sm">{d.officeInfo.address}</p>
                        <p className="text-steel text-sm">{d.officeInfo.city}</p>
                      </div>
                    </div>
                  )}
                  {d.officeInfo.phone && (
                    <div className="flex items-start gap-3">
                      <span className="w-4 h-4 text-ind-green mt-0.5 flex-shrink-0">{icons.phone}</span>
                      <div>
                        <p className="text-xs font-semibold text-steel uppercase tracking-widest mb-0.5">
                          {d.officeInfo.phoneNote === 'Text only' ? t('detail.phoneTextOnly') : t('detail.phoneLabel')}
                        </p>
                        <a
                          href={d.officeInfo.phoneNote === 'Text only' ? `sms:${d.officeInfo.phone.replace(/\D/g,'')}` : `tel:${d.officeInfo.phone.replace(/\D/g,'')}`}
                          className="text-sig-blue text-sm font-medium hover:text-blue-900 transition-colors"
                        >
                          {d.officeInfo.phone}
                        </a>
                      </div>
                    </div>
                  )}
                  {d.officeInfo.fax && (
                    <div className="flex items-start gap-3">
                      <span className="w-4 h-4 text-ind-green mt-0.5 flex-shrink-0">{icons.phone}</span>
                      <div>
                        <p className="text-xs font-semibold text-steel uppercase tracking-widest mb-0.5">{t('detail.faxLabel')}</p>
                        <p className="text-carbon text-sm">{d.officeInfo.fax}</p>
                      </div>
                    </div>
                  )}
                  {d.officeInfo.email && (
                    <div className="flex items-start gap-3">
                      <span className="w-4 h-4 text-ind-green mt-0.5 flex-shrink-0">{icons.mail}</span>
                      <div>
                        <p className="text-xs font-semibold text-steel uppercase tracking-widest mb-0.5">{t('detail.emailLabel')}</p>
                        <a href={`mailto:${d.officeInfo.email}`} className="text-sig-blue text-sm font-medium hover:text-blue-900 transition-colors">
                          {d.officeInfo.email}
                        </a>
                      </div>
                    </div>
                  )}
                  {d.officeInfo.resumes && (
                    <div className="flex items-start gap-3">
                      <span className="w-4 h-4 text-ind-green mt-0.5 flex-shrink-0">{icons.mail}</span>
                      <div>
                        <p className="text-xs font-semibold text-steel uppercase tracking-widest mb-0.5">{t('detail.submitResumeLabel')}</p>
                        <a href={`mailto:${d.officeInfo.resumes}`} className="text-sig-blue text-sm font-medium hover:text-blue-900 transition-colors">
                          {d.officeInfo.resumes}
                        </a>
                      </div>
                    </div>
                  )}
                  {d.officeInfo.hours && (
                    <div className="flex items-start gap-3">
                      <span className="w-4 h-4 text-ind-green mt-0.5 flex-shrink-0">{icons.clock}</span>
                      <div>
                        <p className="text-xs font-semibold text-steel uppercase tracking-widest mb-0.5">{t('detail.hoursLabel')}</p>
                        <p className="text-carbon text-sm">{d.officeInfo.hours}</p>
                      </div>
                    </div>
                  )}
                  {d.officeInfo.recruiterName && (
                    <div className="flex items-start gap-3">
                      <span className="w-4 h-4 text-ind-green mt-0.5 flex-shrink-0">{icons.users}</span>
                      <div>
                        <p className="text-xs font-semibold text-steel uppercase tracking-widest mb-0.5">{t('detail.localRecruiterLabel')}</p>
                        <p className="text-carbon text-sm">{d.officeInfo.recruiterName}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-white border border-fog p-8">
                <p className="text-xs font-semibold text-steel tracking-widest uppercase mb-5">{t('detail.howItWorks')}</p>
                <div className="flex flex-col gap-0 border-l border-fog">
                  {t('detail.howItWorksSteps', { returnObjects: true }).map(({ n, title, desc, descTemplate }) => (
                    <div key={n} className="pl-8 pb-8 last:pb-0 relative">
                      <p className="font-mono text-xs text-ind-green tracking-widest mb-2">{n}</p>
                      <h3 className="font-semibold text-carbon text-sm mb-1.5">{title}</h3>
                      <p className="text-steel text-sm leading-relaxed">{descTemplate ? descTemplate.replace('{{label}}', label) : desc}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-fog">
                  <Link
                    href="/#employers"
                    className="inline-flex items-center gap-2 bg-sig-blue hover:bg-blue-900 text-white font-semibold text-sm px-6 py-3 rounded-md transition-colors w-full justify-center"
                  >
                    {t('detail.submitStaffingRequest')}
                    <span className="w-4 h-4">{icons.arrowRight}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── 9. FAQ (Bucket 1 only) ───────────────────────────────────────────── */}
      {isBucket1 && faq && Array.isArray(faq) && faq.length > 0 && (
        <section className="bg-white py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-6">
            <p className="text-xs font-semibold text-steel tracking-widest uppercase mb-5">{t('detail.faqEyebrow')}</p>
            <h2 className="font-semibold text-carbon text-3xl leading-tight tracking-tight mb-10">
              {t('detail.faqHeading', { label }).split('\n').map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </h2>
            <div>
              {faq.map(({ q, a }) => (
                <FAQItem key={q} q={q} a={a} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 10. SUB-MARKETS ─────────────────────────────────────────────────── */}
      {subMarkets && Array.isArray(subMarkets) && subMarkets.length > 0 && (
        <section className="bg-bone py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-xs font-semibold text-steel tracking-widest uppercase mb-5">{t('detail.nearbyMarkets')}</p>
            <h2 className="font-semibold text-carbon text-3xl leading-tight tracking-tight mb-3">
              {t('detail.nearbyHeading')}
            </h2>
            <p className="text-steel mb-12 max-w-lg leading-relaxed">
              {t('detail.nearbyDescription')}
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {subMarkets.map(({ label: subLabel, desc }, i) => (
                <Link key={subLabel} href={d.subMarketsHrefs?.[i] || '#'} className="group block border border-fog hover:border-carbon bg-white p-6 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <span className="w-5 h-5 text-ind-green">{icons.mapPin}</span>
                    <span className="w-4 h-4 text-steel group-hover:text-carbon transition-colors">{icons.arrowRight}</span>
                  </div>
                  <h3 className="font-semibold text-carbon text-base mb-2">{subLabel}</h3>
                  <p className="text-steel text-sm leading-relaxed">{desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bucket 2: parent office note */}
      {!isBucket1 && d.parentOffice && (
        <section className="bg-bone py-10">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-start gap-4 bg-white border border-fog p-6">
              <span className="w-5 h-5 text-ind-green mt-0.5 flex-shrink-0">{icons.mapPin}</span>
              <div>
                <p className="font-semibold text-carbon text-sm mb-1">{t('detail.servedFrom', { parentOffice: d.parentOffice })}</p>
                <p className="text-steel text-sm leading-relaxed">
                  {t('detail.parentOfficeNote', { city: label.split(' ')[0], parentOffice: d.parentOffice })}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── 11. RELATED CITIES ──────────────────────────────────────────────── */}
      <section className="bg-white py-16 border-t border-fog">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-semibold text-steel tracking-widest uppercase mb-6">{t('detail.alsoServingNearby')}</p>
          <div className="flex flex-wrap gap-3">
            {relatedCities.map(({ label: cityLabel }, i) => (
              <Link
                key={cityLabel}
                href={d.relatedCitiesHrefs?.[i] || '#'}
                className="inline-flex items-center gap-2 border border-fog hover:border-carbon text-steel hover:text-carbon text-sm font-medium px-5 py-2.5 rounded-md transition-colors"
              >
                <span className="w-3.5 h-3.5">{icons.mapPin}</span>
                {cityLabel}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 12. CTA ─────────────────────────────────────────────────────────── */}
      <section id="contact" className="bg-graphite py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold text-fog tracking-widest uppercase mb-6">{t('detail.ctaGetStarted', { label })}</p>
          <h2 className="font-semibold text-bone text-3xl md:text-4xl leading-tight tracking-tight mb-4">
            {t('detail.ctaHeading', { city: label.split('–')[0].split(',')[0].trim() }).split('\n').map((line, i) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}
          </h2>
          <p className="text-white text-sm mb-10">
            {t('detail.ctaDescription')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={isBucket1 && d.officeInfo?.phone && !d.officeInfo.phone.startsWith('[')
                ? `tel:${d.officeInfo.phone.replace(/\D/g,'')}`
                : 'tel:+10000000000'}
              className="inline-flex items-center justify-center gap-2 bg-bone hover:bg-white text-carbon font-semibold px-7 py-3 text-sm rounded-md transition-colors"
            >
              <span className="w-4 h-4">{icons.phone}</span>
              {t('detail.callUsNow')}
            </a>
            <Link href="/#employers" className="inline-flex items-center justify-center gap-2 border border-fog hover:border-bone text-bone font-medium px-7 py-3 text-sm rounded-md transition-colors">
              {t('detail.submitStaffingRequest')}
              <span className="w-4 h-4">{icons.arrowRight}</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
