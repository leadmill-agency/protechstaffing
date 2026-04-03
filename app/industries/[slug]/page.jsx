'use client'

import { use } from 'react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import icons from '@/components/icons'
import INDUSTRY_DATA from '@/data/industries'

export default function IndustryPage({ params }) {
  const { slug } = use(params)
  const industry = slug
  const { t } = useTranslation('industries')
  const d = INDUSTRY_DATA[industry]

  if (!d) return <div className="pt-32 text-center text-steel">Industry not found</div>

  const label = t(`${industry}.label`)
  const labelLower = label.toLowerCase()

  const proof = t(`${industry}.proof`, { returnObjects: true })
  const roles = t(`${industry}.roles`, { returnObjects: true })
  const certifications = t(`${industry}.certifications`, { returnObjects: true })
  const whyUs = t(`${industry}.whyUs`, { returnObjects: true })
  const testimonial = t(`${industry}.testimonial`, { returnObjects: true })
  const relatedIndustries = t(`${industry}.relatedIndustries`, { returnObjects: true })

  return (
    <>
      {/* Hero */}
      <section className="bg-bone pt-20">
        <div className="max-w-6xl mx-auto px-6 py-10 md:py-16">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-xs font-semibold text-ind-green tracking-wide md:tracking-widest uppercase mb-5">
                Pro-Tech Staffing · {label}
              </p>
              <h1 className="font-sans font-semibold text-carbon text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight mb-4">
                {t(`${industry}.h1`)}
              </h1>
              <p className="text-xs font-semibold text-steel tracking-wide mb-5">{t(`${industry}.subhead`)}</p>
              <p className="text-steel text-base md:text-lg leading-relaxed mb-8 max-w-lg">{t(`${industry}.intro`)}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/#employers" className="inline-flex items-center justify-center gap-2 bg-sig-blue hover:bg-blue-900 text-white font-semibold text-sm px-6 py-3 rounded-md transition-colors">
                  {t('detail.requestWorkers')}
                  <span className="w-4 h-4">{icons.arrowRight}</span>
                </Link>
                <Link href="/#job-seekers" className="inline-flex items-center justify-center gap-2 border border-sig-blue hover:bg-sig-blue text-sig-blue hover:text-white font-medium text-sm px-6 py-3 rounded-md transition-colors">
                  {t('detail.findJobs')}
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={d.img} alt={t(`${industry}.imgAlt`)} className="w-full h-full object-cover" style={{ filter: 'grayscale(35%) brightness(0.88)' }} />
              </div>
              <div className="hidden sm:block absolute -bottom-4 -left-4 bg-white border border-fog px-5 py-4 shadow-sm">
                <p className="font-mono text-2xl font-medium text-carbon">48h</p>
                <p className="text-xs text-steel mt-0.5">{t('detail.avgFillTime')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
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
        </div>
      </section>

      {/* Roles We Staff */}
      <section className="bg-bone py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20">
            <div>
              <p className="text-xs font-semibold text-steel tracking-widest uppercase mb-5">{t('detail.rolesWeStaff')}</p>
              <h2 className="font-semibold text-carbon text-3xl leading-tight tracking-tight mb-6">
                {t('detail.rolesHeading').split('\n').map((line, i) => (
                  <span key={i}>{line}{i === 0 && <br />}</span>
                ))}
              </h2>
              <p className="text-steel leading-relaxed mb-8">
                {t('detail.rolesDescription', { industry: labelLower })}
              </p>
              <Link href="/#employers" className="inline-flex items-center gap-2 bg-sig-blue hover:bg-blue-900 text-white font-semibold text-sm px-6 py-3 rounded-md transition-colors">
                {t('detail.submitRequest')}
                <span className="w-4 h-4">{icons.arrowRight}</span>
              </Link>
            </div>

            <div>
              <div className="grid grid-cols-1 gap-3">
                {roles.map(role => (
                  <div key={role} className="flex items-center gap-3 border-b border-fog pb-3">
                    <div className="w-3.5 h-3.5 text-ind-green flex-shrink-0">{icons.check}</div>
                    <span className="text-carbon text-sm font-medium">{role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      {certifications && Array.isArray(certifications) && certifications.length > 0 && (
        <section className="bg-white py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-xs font-semibold text-steel tracking-widest uppercase mb-5">{t('detail.certifications')}</p>
            <h2 className="font-semibold text-carbon text-3xl leading-tight tracking-tight mb-4">
              {t('detail.certHeading').split('\n').map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </h2>
            <p className="text-steel leading-relaxed mb-10 max-w-2xl">{t('detail.certDescription')}</p>
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map(cert => (
                <div key={cert} className="border-t-2 border-ind-green pt-6 bg-bone p-6">
                  <div className="w-5 h-5 text-ind-green mb-3">{icons.shield}</div>
                  <p className="font-semibold text-carbon text-sm mb-1">{cert}</p>
                  <p className="text-steel text-xs leading-relaxed">{t('detail.certVerified')}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Pro-Tech */}
      <section className="bg-bone py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-semibold text-steel tracking-widest uppercase mb-5">{t('detail.whyProTech')}</p>
          <h2 className="font-semibold text-carbon text-3xl leading-tight tracking-tight mb-8 md:mb-12">
            {t('detail.whyHeadingPrefix', { industry: labelLower }).split('\n').map((line, i) => (
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

      {/* Testimonial */}
      <section className="bg-carbon py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-6 gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="w-4 h-4 text-ind-green inline-block">{icons.star}</span>
            ))}
          </div>
          <blockquote className="font-semibold text-bone text-xl md:text-2xl leading-relaxed tracking-tight mb-8">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>
          <p className="text-xs font-semibold text-fog tracking-widest uppercase">{testimonial.name}</p>
          <p className="text-xs text-steel tracking-widest mt-1">{testimonial.co}</p>
        </div>
      </section>

      {/* Related Industries */}
      <section className="bg-white py-16 border-t border-fog">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-semibold text-steel tracking-widest uppercase mb-6">{t('detail.relatedIndustries')}</p>
          <div className="flex flex-wrap gap-3">
            {relatedIndustries.map(({ label: relLabel, href }) => (
              <Link key={href} href={href} className="inline-flex items-center gap-2 border border-fog hover:border-carbon text-steel hover:text-carbon text-sm font-medium px-5 py-2.5 transition-colors rounded-md">
                {relLabel}
                <span className="w-3.5 h-3.5">{icons.arrowRight}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-graphite py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold text-fog tracking-widest uppercase mb-6">{t('detail.ctaGetStarted', { industry: label })}</p>
          <h2 className="font-semibold text-bone text-3xl md:text-4xl leading-tight tracking-tight mb-4">
            {t('detail.ctaHeading', { industry: labelLower }).split('\n').map((line, i) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}
          </h2>
          <p className="text-white text-sm mb-10">{t('detail.ctaDescription')}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+10000000000" className="inline-flex items-center justify-center gap-2 bg-bone hover:bg-white text-carbon font-semibold px-7 py-3 text-sm rounded-md transition-colors">
              <span className="w-4 h-4">{icons.phone}</span>
              {t('detail.callUsNow')}
            </a>
            <Link href="/#employers" className="inline-flex items-center justify-center gap-2 border border-fog hover:border-bone text-bone font-medium px-7 py-3 text-sm rounded-md transition-colors">
              {t('detail.submitRequest')}
              <span className="w-4 h-4">{icons.arrowRight}</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
