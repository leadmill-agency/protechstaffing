import DATA_CENTER_PAGES, { HUB_PATH } from '@/data/dataCenter'
import DataCenterBody from '@/components/DataCenterBody'

const BASE = 'https://www.protechstaffing.com'

// Metadata and JSON-LD stay English (one URL serves all languages);
// the visible copy switches with the language picker in DataCenterBody.
export function dataCenterMetadata(key) {
  const p = DATA_CENTER_PAGES[key]
  return {
    title: p.metaTitle,
    description: p.metaDescription,
    alternates: { canonical: p.path },
    openGraph: { title: p.metaTitle, description: p.metaDescription, url: `${BASE}${p.path}` },
  }
}

export default function DataCenterPage({ pageKey }) {
  const page = DATA_CENTER_PAGES[pageKey]
  const hub = DATA_CENTER_PAGES.hub
  const isHub = pageKey === 'hub'

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faq.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: hub.breadcrumb, path: HUB_PATH },
    ...(isHub ? [] : [{ name: page.breadcrumb, path: page.path }]),
  ]
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: `${BASE}${c.path}` })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <DataCenterBody pageKey={pageKey} />
    </>
  )
}
