'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import icons from '@/components/icons'

export default function Footer() {
  const { t } = useTranslation('common')
  return (
    <footer className="bg-carbon border-t border-graphite">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-10 md:mb-14">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="Pro-Tech Staffing" className="h-12 w-auto brightness-0 invert" />
            </div>
            <p className="text-fog text-xs leading-relaxed mb-5">
              {t('footer.tagline')}
            </p>
            <div className="flex gap-2">
              {[t('footer.social.linkedin'), t('footer.social.google'), t('footer.social.indeed')].map(s => (
                <a key={s} href="#" className="text-[10px] font-medium text-fog hover:text-white border border-graphite hover:border-fog px-2.5 py-1 transition-colors">{s}</a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] font-semibold text-white tracking-widest uppercase mb-4">{t('footer.servicesHeading')}</p>
            <ul className="flex flex-col gap-2">
              {[
                t('footer.services.temporaryStaffing'),
                t('footer.services.tempToHire'),
                t('footer.services.directPlacement'),
                t('footer.services.contractStaffing'),
                t('footer.services.onSiteManagement'),
              ].map(s => (
                <li key={s}><a href="#" className="text-xs text-fog hover:text-white transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] font-semibold text-white tracking-widest uppercase mb-4">{t('footer.industriesHeading')}</p>
            <ul className="flex flex-col gap-2">
              {[
                { label: t('footer.industries.electronicsManufacturing'), href: '/industries/electronics-manufacturing' },
                { label: t('footer.industries.lightIndustrial'), href: '/industries/light-industrial' },
                { label: t('footer.industries.warehouse3pl'), href: '/industries/warehouse-distribution' },
                { label: t('footer.industries.supplyChain'), href: '/industries/supply-chain-logistics' },
                { label: t('footer.industries.administrative'), href: '/industries/administrative-clerical' },
                { label: t('footer.industries.generalLabor'), href: '/industries/general-labor' },
              ].map(({ label, href }) => (
                <li key={label}><Link href={href} className="text-xs text-fog hover:text-white transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] font-semibold text-white tracking-widest uppercase mb-4">{t('footer.officesHeading')}</p>
            <ul className="flex flex-col gap-2">
              {[
                { label: t('footer.offices.richardsonHq'), href: '/locations/richardson-tx' },
                { label: t('footer.offices.bedford'), href: '/locations/bedford-tx' },
                { label: t('footer.offices.austin'), href: '/locations/austin-tx' },
                { label: t('footer.offices.tampa'), href: '/locations/tampa-fl' },
                { label: t('footer.offices.sanJose'), href: '/locations/san-jose-ca' },
                { label: t('footer.offices.phoenix'), href: '/locations/phoenix-az' },
              ].map(({ label, href }) => (
                <li key={label} className="flex items-center gap-1.5">
                  <span className="w-3 h-3 text-fog flex-shrink-0">{icons.mapPin}</span>
                  <Link href={href} className="text-xs text-fog hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-graphite pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-fog">{t('footer.copyright')}</p>
          <div className="flex gap-6">
            {[t('footer.legal.privacy'), t('footer.legal.terms'), t('footer.legal.accessibility')].map(l => (
              <a key={l} href="#" className="text-[10px] text-fog hover:text-white transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
