'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import icons from '@/components/icons'
import DATA_CENTER_PAGES, { HUB_PATH, UI as UI_EN } from '@/data/dataCenter'
import PAGES_ES, { UI as UI_ES } from '@/data/dataCenter.es'
import PAGES_VI, { UI as UI_VI } from '@/data/dataCenter.vi'
import LastUpdated from '@/components/LastUpdated'

const CONTACT = '/contact'
const LOCALES = {
  en: { pages: DATA_CENTER_PAGES, ui: UI_EN },
  es: { pages: PAGES_ES, ui: UI_ES },
  vi: { pages: PAGES_VI, ui: UI_VI },
}

function RequestTalent({ label, inverse = false }) {
  return (
    <Link
      href={CONTACT}
      className={
        inverse
          ? 'inline-flex items-center justify-center gap-2 bg-bone hover:bg-white text-carbon font-semibold px-7 py-3 text-sm rounded-md transition-colors'
          : 'inline-flex items-center justify-center gap-2 bg-sig-blue hover:bg-blue-900 text-white font-semibold px-7 py-3 text-sm rounded-md transition-colors'
      }
    >
      {label}
      <span className="w-4 h-4">{icons.arrowRight}</span>
    </Link>
  )
}

function CheckList({ items }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map(item => (
        <li key={item} className="flex items-start gap-3">
          <span className="w-4 h-4 text-ind-green flex-shrink-0 mt-1">{icons.check}</span>
          <span className="text-carbon text-base leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  )
}

function Block({ block }) {
  if (block.p) return <p className="text-steel text-base md:text-lg leading-relaxed">{block.p}</p>
  if (block.ul) return <CheckList items={block.ul} />
  if (block.links) {
    return (
      <div className="grid md:grid-cols-2 gap-6">
        {block.links.map(({ href, title, body, cta }) => (
          <Link key={href} href={href} className="group block bg-white border border-fog hover:border-carbon p-7 transition-colors">
            <h3 className="font-semibold text-carbon text-lg mb-3">{title}</h3>
            <p className="text-steel text-sm leading-relaxed mb-5">{body}</p>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-ind-green group-hover:text-sig-blue transition-colors">
              {cta}
              <span className="w-4 h-4">{icons.arrowRight}</span>
            </span>
          </Link>
        ))}
      </div>
    )
  }
  return null
}

export default function DataCenterBody({ pageKey }) {
  const { i18n } = useTranslation()
  const { pages, ui } = LOCALES[i18n.language] || LOCALES.en
  const page = pages[pageKey]
  const hub = pages.hub
  const isHub = pageKey === 'hub'
  const siblings = Object.keys(DATA_CENTER_PAGES)
    .filter(k => k !== 'hub' && k !== pageKey)
    .map(k => ({ href: DATA_CENTER_PAGES[k].path, label: pages[k].breadcrumb }))

  return (
    <>
      {/* Hero */}
      <section className="bg-bone pt-20 border-b border-fog">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-3">
            {!isHub && (
              <Link href={HUB_PATH} className="text-xs font-semibold text-ind-green hover:text-sig-blue tracking-widest uppercase inline-flex items-center gap-1 mb-6">
                ← {hub.breadcrumb}
              </Link>
            )}
            <p className="text-xs font-semibold text-ind-green tracking-wide md:tracking-widest uppercase mb-5">{page.eyebrow}</p>
            <h1 className="font-sans font-semibold text-sig-blue text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight mb-6">
              {page.h1}
            </h1>
            <LastUpdated path={DATA_CENTER_PAGES[pageKey].path} className="-mt-2 mb-6" />
            {page.intro.map(para => (
              <p key={para.slice(0, 40)} className="text-steel text-base md:text-lg leading-relaxed mb-8 max-w-2xl">{para}</p>
            ))}
            <RequestTalent label={ui.requestTalent} />
          </div>
          <div className="lg:col-span-2 bg-white border border-fog p-8">
            <p className="text-xs font-semibold text-steel tracking-widest uppercase mb-5">{page.panelTitle}</p>
            <CheckList items={page.panel} />
          </div>
        </div>
      </section>

      {/* Body sections */}
      {page.sections.map(({ h2, blocks }, i) => (
        <section key={h2} className={`${i % 2 === 0 ? 'bg-white' : 'bg-bone'} py-14 md:py-20`}>
          <div className={`${blocks.some(b => b.links) ? 'max-w-6xl' : 'max-w-4xl'} mx-auto px-6`}>
            <h2 className="font-semibold text-carbon text-2xl md:text-3xl leading-tight tracking-tight mb-8">{h2}</h2>
            <div className="flex flex-col gap-6">
              {blocks.map((block, j) => <Block key={j} block={block} />)}
            </div>
          </div>
        </section>
      ))}

      {/* FAQ */}
      <section className={`${page.sections.length % 2 === 0 ? 'bg-white' : 'bg-bone'} py-14 md:py-20 border-t border-fog`}>
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-semibold text-carbon text-2xl md:text-3xl leading-tight tracking-tight mb-8">{ui.faqHeading}</h2>
          <div className="flex flex-col gap-6">
            {page.faq.map(({ q, a }) => (
              <div key={q} className="border-b border-fog pb-6 last:border-0">
                <h3 className="font-semibold text-carbon text-base mb-2">{q}</h3>
                <p className="text-steel text-sm md:text-base leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back to hub + sibling page (sub-pages only; the hub links both in its body) */}
      {!isHub && (
        <section className="bg-white py-12 border-t border-fog">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-xs font-semibold text-steel tracking-widest uppercase mb-6">{ui.moreHeading}</p>
            <div className="flex flex-wrap gap-3">
              {[{ href: HUB_PATH, label: ui.overview }, ...siblings, { href: CONTACT, label: ui.contact }].map(({ href, label }) => (
                <Link key={href} href={href} className="inline-flex items-center gap-2 border border-fog hover:border-carbon text-steel hover:text-carbon text-sm font-medium px-5 py-2.5 rounded-md transition-colors">
                  {label}
                  <span className="w-3.5 h-3.5">{icons.arrowRight}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-sig-blue py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-semibold text-bone text-xl md:text-2xl leading-relaxed mb-8">{page.cta}</p>
          <RequestTalent label={ui.requestTalent} inverse />
        </div>
      </section>
    </>
  )
}
