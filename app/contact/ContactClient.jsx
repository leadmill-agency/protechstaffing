'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import icons from '@/components/icons'
import ContactForm from './ContactForm'

const OFFICES = [
  { key: 'richardson', city: 'Richardson, TX', address: '2150 E. Arapaho Rd, Ste 100, Richardson, TX 75081', phone: '(972) 234-0505', email: 'info@protechstaffing.com', href: '/locations/richardson-tx' },
  { key: 'bedford',    city: 'Bedford, TX',    address: '3508 Harwood Rd, Ste 108, Bedford, TX 76021',       phone: '(972) 234-0505', email: 'info@protechstaffing.com', href: '/locations/bedford-tx' },
  { key: 'austin',     city: 'Austin, TX',     address: '9800 N Lamar Blvd, Ste 212, Austin, TX 78753',      phone: null,             email: 'info@protechstaffing.com', href: '/locations/austin-tx' },
  { key: 'tampa',      city: 'Tampa, FL',      address: '10320 49th St N, #103, Clearwater, FL 33762',      phone: '(469) 632-8854', email: 'info@protechstaffing.com', href: '/locations/tampa-fl' },
  { key: 'sanjose',    city: 'San Jose, CA',   address: '1000 Corporate Way, Fremont, CA 94539',            phone: '(408) 667-7990', email: 'info@protechstaffing.com', href: '/locations/san-jose-ca' },
  { key: 'phoenix',    city: 'Phoenix, AZ',    address: 'Phoenix office — coming soon',                     phone: null,             email: 'info@protechstaffing.com', href: '/locations/phoenix-az' },
]

export default function ContactClient() {
  const { t } = useTranslation('contact')

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-bone pt-20">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          <p className="text-xs font-semibold text-ind-green tracking-widest uppercase mb-4">
            {t('hero.eyebrow')}
          </p>
          <h1 className="font-sans font-semibold text-sig-blue text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight mb-4 max-w-2xl">
            {t('hero.heading')}
          </h1>
          <p className="text-steel text-base md:text-lg leading-relaxed max-w-2xl">
            {t('hero.description')}
          </p>
        </div>
      </section>

      {/* ── 3 Route Cards ── */}
      <section className="bg-white py-12 md:py-16 border-b border-fog">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { key: 'jobSeekers', href: '/job-seekers#submit-application', icon: icons.users },
              { key: 'employers',  href: '/employers#contact',              icon: icons.target },
              { key: 'general',    href: '#general-form',                    icon: icons.mail   },
            ].map(({ key, href, icon }) => (
              <Link
                key={key}
                href={href}
                className="group block border border-fog hover:border-sig-blue bg-white hover:shadow-md transition-all p-6 rounded-md"
              >
                <div className="w-6 h-6 text-ind-green mb-4">{icon}</div>
                <h2 className="font-semibold text-carbon text-base mb-2 group-hover:text-sig-blue transition-colors">
                  {t(`routes.${key}.title`)}
                </h2>
                <p className="text-steel text-sm leading-relaxed mb-3">
                  {t(`routes.${key}.desc`)}
                </p>
                <span className="text-xs font-semibold text-sig-blue inline-flex items-center gap-1">
                  {t(`routes.${key}.cta`)}
                  <span className="w-3.5 h-3.5">{icons.arrowRight}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── General Form ── */}
      <section id="general-form" className="bg-bone py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-8">
            <p className="text-xs font-semibold text-steel tracking-widest uppercase mb-3">{t('form.eyebrow')}</p>
            <h2 className="font-semibold text-sig-blue text-3xl md:text-4xl leading-tight tracking-tight mb-3">
              {t('form.heading')}
            </h2>
            <p className="text-steel max-w-2xl mx-auto">{t('form.description')}</p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* ── Offices ── */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8 md:mb-12">
            <p className="text-xs font-semibold text-steel tracking-widest uppercase mb-4">{t('offices.eyebrow')}</p>
            <h2 className="font-semibold text-carbon text-3xl md:text-4xl leading-tight tracking-tight mb-3">
              {t('offices.heading')}
            </h2>
            <p className="text-steel max-w-2xl leading-relaxed">{t('offices.description')}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {OFFICES.map(({ key, city, address, phone, email, href }) => (
              <div key={key} className="border border-fog rounded-md p-6 hover:border-carbon transition-colors">
                <div className="flex items-start gap-2 mb-3">
                  <span className="w-5 h-5 text-ind-green flex-shrink-0">{icons.mapPin}</span>
                  <h3 className="font-semibold text-carbon text-base">{city}</h3>
                </div>
                <p className="text-steel text-xs leading-relaxed mb-3">{address}</p>
                <div className="flex flex-col gap-1.5 text-xs">
                  {phone && (
                    <a href={`tel:${phone.replace(/[^\d+]/g, '')}`} className="inline-flex items-center gap-1.5 text-sig-blue hover:underline">
                      <span className="w-3 h-3">{icons.phone}</span>
                      {phone}
                    </a>
                  )}
                  {email && (
                    <a href={`mailto:${email}`} className="inline-flex items-center gap-1.5 text-sig-blue hover:underline truncate">
                      <span className="w-3 h-3 flex-shrink-0">{icons.mail}</span>
                      <span className="truncate">{email}</span>
                    </a>
                  )}
                </div>
                <Link href={href} className="inline-flex items-center gap-1 text-[11px] font-semibold text-ind-green mt-4 tracking-wide hover:text-sig-blue transition-colors">
                  {t('offices.viewMarket')}
                  <span className="w-3 h-3">{icons.arrowRight}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
