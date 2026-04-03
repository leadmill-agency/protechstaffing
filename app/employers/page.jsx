'use client'

import { useTranslation } from 'react-i18next'
import icons from '@/components/icons'

export default function EmployersPage() {
  const { t } = useTranslation('employers')

  return (
    <>
      {/* ── Staffing Request CTA ── */}
      <section className="bg-bone pt-20">
        <div className="max-w-6xl mx-auto px-6 py-10 md:py-16">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-xs font-semibold text-ind-green tracking-widest uppercase mb-5">
                {t('hero.eyebrow')}
              </p>
              <h1 className="font-sans font-semibold text-carbon text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight mb-5">
                {t('hero.heading')}
              </h1>
              <p className="text-steel text-base md:text-lg leading-relaxed mb-8 max-w-lg">
                {t('hero.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-sig-blue hover:bg-blue-900 text-white font-semibold text-sm px-6 py-3 rounded-md transition-colors"
                >
                  {t('hero.ctaSubmit')}
                  <span className="w-4 h-4">{icons.arrowRight}</span>
                </a>
                <a
                  href="tel:+19725551234"
                  className="inline-flex items-center justify-center gap-2 border border-sig-blue hover:bg-sig-blue text-sig-blue hover:text-white font-medium text-sm px-6 py-3 rounded-md transition-colors"
                >
                  <span className="w-4 h-4">{icons.phone}</span>
                  {t('hero.ctaPhone')}
                </a>
              </div>
              <p className="text-steel text-xs">
                {t('hero.servingNote')}
              </p>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=75"
                  alt={t('hero.imgAlt')}
                  className="w-full h-full object-cover"
                  style={{ filter: 'grayscale(30%) brightness(0.88)' }}
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

      {/* ── Services: Beyond Staffing ── */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-8 md:mb-14">
            <p className="text-xs font-semibold text-steel tracking-widest uppercase mb-4">{t('services.eyebrow')}</p>
            <h2 className="font-semibold text-carbon text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight max-w-xl mb-4">
              {t('services.heading')}
            </h2>
            <p className="text-steel max-w-2xl leading-relaxed">
              {t('services.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-fog">
            {[
              { icon: icons.clock, key: 'temporaryStaffing' },
              { icon: icons.target, key: 'tempToHire' },
              { icon: icons.users, key: 'directPlacement' },
              { icon: icons.clipboard, key: 'payrollServices' },
              { icon: icons.shield, key: 'peo' },
              { icon: icons.gear, key: 'consulting' },
            ].map(({ icon, key }) => (
              <div key={key} className="bg-white p-8">
                <div className="w-5 h-5 text-ind-green mb-5">{icon}</div>
                <h3 className="font-semibold text-carbon text-base mb-2">{t(`services.${key}.title`)}</h3>
                <p className="text-steel text-sm leading-relaxed">{t(`services.${key}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Training & Certification ── */}
      <section className="bg-bone py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <p className="text-xs font-semibold text-ind-green tracking-widest uppercase mb-5">
                {t('certification.eyebrow')}
              </p>
              <h2 className="font-semibold text-carbon text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight mb-6">
                {t('certification.heading')}
              </h2>
              <p className="text-steel text-base leading-relaxed mb-4">
                {t('certification.description1')}
              </p>
              <p className="text-steel text-base leading-relaxed mb-8">
                {t('certification.description2')}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-sig-blue hover:bg-blue-900 text-white font-semibold text-sm px-6 py-3 rounded-md transition-colors"
              >
                {t('certification.cta')}
                <span className="w-4 h-4">{icons.arrowRight}</span>
              </a>
            </div>

            <div className="bg-white border border-fog p-8 md:p-10">
              <p className="text-xs font-semibold text-steel tracking-widest uppercase mb-6">{t('certification.certsEyebrow')}</p>
              <div className="flex flex-col gap-6">
                {['ipc610', 'ipc620', 'jstd001'].map(key => (
                  <div key={key} className="pb-6 border-b border-fog last:border-0 last:pb-0">
                    <div className="flex items-baseline gap-2 mb-1">
                      <p className="font-mono font-semibold text-carbon text-lg">{t(`certification.${key}.title`)}</p>
                      <p className="text-xs text-steel">— {t(`certification.${key}.subtitle`)}</p>
                    </div>
                    <p className="text-steel text-sm leading-relaxed">{t(`certification.${key}.desc`)}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-fog">
                <p className="text-ind-green text-sm font-semibold">
                  {t('certification.footerHighlight')}
                </p>
                <p className="text-steel text-xs mt-1">
                  {t('certification.footerNote')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section id="contact" className="bg-graphite py-14 md:py-20">
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
            <a href="mailto:staffing@protechstaffing.com" className="inline-flex items-center justify-center gap-2 border border-fog hover:border-bone text-bone font-medium px-7 py-3 text-sm rounded-md transition-colors">
              <span className="w-4 h-4">{icons.mail}</span>
              {t('cta.emailUs')}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
