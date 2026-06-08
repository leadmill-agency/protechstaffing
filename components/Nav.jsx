'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import icons from '@/components/icons'

// Note: `lng` is the i18next code (still 'vi' for Vietnamese — that's how
// translations are registered in lib/i18n.js). `label` is the display string
// shown in the toggle. Mylinh asked to display "VN" instead of "VI".
const LANGS = [
  { lng: 'en', label: 'EN', flag: '🇺🇸' },
  { lng: 'es', label: 'ES', flag: '🇲🇽' },
  { lng: 'vi', label: 'VN', flag: '🇻🇳' },
]

export default function Nav() {
  const { t, i18n } = useTranslation('common')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [mobileExpanded, setMobileExpanded] = useState(null)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setOpenDropdown(null)
    setMobileExpanded(null)
  }, [pathname])

  const NAV_DROPDOWNS = {
    [t('nav.links.industries')]: {
      href: '/industries',
      items: [
        { label: t('navDropdowns.industries.electronicsManufacturing'), href: '/industries/electronics-manufacturing' },
        { label: t('navDropdowns.industries.lightIndustrial'), href: '/industries/light-industrial' },
        { label: t('navDropdowns.industries.warehouseDistribution'), href: '/industries/warehouse-distribution' },
        { label: t('navDropdowns.industries.supplyChainLogistics'), href: '/industries/supply-chain-logistics' },
        { label: t('navDropdowns.industries.administrativeClerical'), href: '/industries/administrative-clerical' },
        { label: t('navDropdowns.industries.generalLabor'), href: '/industries/general-labor' },
        { label: t('navDropdowns.industries.engineering'), href: '/industries/engineering' },
      ],
    },
    [t('nav.links.locations')]: {
      href: '/locations',
      items: [
        { label: t('navDropdowns.locations.richardsonTx'), href: '/locations/richardson-tx' },
        { label: t('navDropdowns.locations.bedfordTx'), href: '/locations/bedford-tx' },
        { label: t('navDropdowns.locations.austinTx'), href: '/locations/austin-tx' },
        { label: t('navDropdowns.locations.tampaFl'), href: '/locations/tampa-fl' },
        { label: t('navDropdowns.locations.sanJoseCa'), href: '/locations/san-jose-ca' },
        { label: t('navDropdowns.locations.phoenixAz'), href: '/locations/phoenix-az' },
        { label: t('navDropdowns.locations.cincinnatiOh'), href: '/locations/cincinnati-oh' },
      ],
    },
    [t('nav.links.about')]: {
      href: '/about',
      items: [],
    },
  }

  const navLinks = [
    t('nav.links.jobSeekers'),
    t('nav.links.employers'),
    t('nav.links.industries'),
    t('nav.links.locations'),
    t('nav.links.about'),
    t('nav.links.contact'),
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${scrolled ? 'bg-white border-b-2 border-sig-blue shadow-sm' : 'bg-bone border-b-2 border-sig-blue'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Pro-Tech Staffing" className="h-[46px] w-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-4 lg:gap-5">
          {navLinks.map(link => {
            const dropdown = NAV_DROPDOWNS[link]

            if (!dropdown) {
              const pageHref =
                link === t('nav.links.employers') ? '/employers' :
                link === t('nav.links.jobSeekers') ? '/job-seekers' :
                link === t('nav.links.contact') ? '/contact' :
                `/#${link.toLowerCase().replace(' ', '-')}`
              return (
                <Link key={link} href={pageHref} className="text-steel hover:text-carbon text-sm font-medium transition-colors">
                  {link}
                </Link>
              )
            }

            if (dropdown.items.length === 0) {
              return (
                <Link key={link} href={dropdown.href} className="text-steel hover:text-carbon text-sm font-medium transition-colors">
                  {link}
                </Link>
              )
            }

            return (
              <div
                key={link}
                className="relative"
                onMouseEnter={() => setOpenDropdown(link)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link href={dropdown.href} className="text-steel hover:text-carbon text-sm font-medium transition-colors flex items-center gap-1">
                  {link}
                  <span className={`w-3.5 h-3.5 transition-transform ${openDropdown === link ? 'rotate-180' : ''}`}>
                    {icons.chevronDown}
                  </span>
                </Link>

                {openDropdown === link && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                    <div className="bg-white border border-fog shadow-lg rounded-md py-2 min-w-[240px]">
                      <Link href={dropdown.href} className="block px-4 py-2 text-sm font-semibold text-sig-blue hover:bg-bone transition-colors">
                        {t('nav.viewAll', { section: link })}
                      </Link>
                      <div className="border-t border-fog my-1" />
                      {dropdown.items.map(({ label, href }) => (
                        <Link key={label} href={href} className="block px-4 py-2 text-sm text-steel hover:text-carbon hover:bg-bone transition-colors">
                          {label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-1.5 mr-2 text-xs font-medium text-steel">
            {LANGS.map(({ lng, label, flag }) => (
              <button
                key={lng}
                onClick={() => i18n.changeLanguage(lng)}
                className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded transition-colors ${i18n.language === lng ? 'text-carbon font-semibold' : 'hover:text-carbon'}`}
              >
                <span aria-hidden="true" className="text-sm leading-none">{flag}</span>
                {label}
              </button>
            ))}
          </div>
          <Link
            href="/jobs"
            data-track="find_jobs"
            data-track-location="nav_desktop"
            className="text-sm font-semibold bg-sig-blue hover:bg-blue-900 text-white px-4 py-2 rounded-md transition-colors whitespace-nowrap"
          >
            {t('nav.cta.findJobs')}
          </Link>
          <Link href="/employers" className="text-sm font-medium text-sig-blue border border-sig-blue hover:bg-sig-blue hover:text-white px-4 py-2 rounded-md transition-colors whitespace-nowrap">
            {t('nav.cta.hireWorkers')}
          </Link>
        </div>

        <button className="md:hidden w-5 h-5 text-carbon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? icons.close : icons.menu}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-fog px-6 py-5 flex flex-col gap-1 max-h-[80vh] overflow-y-auto">
          {navLinks.map(link => {
            const dropdown = NAV_DROPDOWNS[link]

            if (!dropdown) {
              const pageHref =
                link === t('nav.links.employers') ? '/employers' :
                link === t('nav.links.jobSeekers') ? '/job-seekers' :
                link === t('nav.links.contact') ? '/contact' :
                `/#${link.toLowerCase().replace(' ', '-')}`
              return (
                <Link key={link} href={pageHref} className="text-carbon text-sm font-medium py-2" onClick={() => setMenuOpen(false)}>
                  {link}
                </Link>
              )
            }

            if (dropdown.items.length === 0) {
              return (
                <Link key={link} href={dropdown.href} className="text-carbon text-sm font-medium py-2" onClick={() => setMenuOpen(false)}>
                  {link}
                </Link>
              )
            }

            return (
              <div key={link}>
                <button
                  className="flex items-center justify-between w-full text-carbon text-sm font-medium py-2"
                  onClick={() => setMobileExpanded(mobileExpanded === link ? null : link)}
                >
                  {link}
                  <span className={`w-4 h-4 transition-transform ${mobileExpanded === link ? 'rotate-180' : ''}`}>
                    {icons.chevronDown}
                  </span>
                </button>
                {mobileExpanded === link && (
                  <div className="pl-4 pb-2 flex flex-col gap-1">
                    <Link href={dropdown.href} className="text-sig-blue text-sm font-semibold py-1.5" onClick={() => setMenuOpen(false)}>
                      {t('nav.viewAll', { section: link })}
                    </Link>
                    {dropdown.items.map(({ label, href }) => (
                      <Link key={label} href={href} className="text-steel text-sm py-1.5" onClick={() => setMenuOpen(false)}>
                        {label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
          <div className="flex items-center justify-center gap-3 pt-3 border-t border-fog mt-2">
            {LANGS.map(({ lng, label, flag }) => (
              <button
                key={lng}
                onClick={() => i18n.changeLanguage(lng)}
                className={`inline-flex items-center gap-1 text-xs px-1.5 py-0.5 rounded ${i18n.language === lng ? 'text-carbon font-semibold' : 'text-steel'}`}
              >
                <span aria-hidden="true" className="text-sm leading-none">{flag}</span>
                {label}
              </button>
            ))}
          </div>
          <div className="flex flex-col gap-2 pt-2">
            <Link href="/jobs" data-track="find_jobs" data-track-location="nav_mobile" className="text-sm text-center bg-sig-blue text-white py-2 font-semibold rounded-md" onClick={() => setMenuOpen(false)}>{t('nav.cta.findJobs')}</Link>
            <Link href="/employers" className="text-sm text-center text-sig-blue border border-sig-blue py-2 rounded-md" onClick={() => setMenuOpen(false)}>{t('nav.cta.hireWorkers')}</Link>
          </div>
        </div>
      )}
    </nav>
  )
}
