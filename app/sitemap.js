const BASE = 'https://www.protechstaffing.com'

export default function sitemap() {
  const now = new Date().toISOString()

  const staticPages = [
    { url: `${BASE}/`, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/employers`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/job-seekers`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/jobs`, changeFrequency: 'daily', priority: 0.9 },
    { url: `${BASE}/apply`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/about`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/industries`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/locations`, changeFrequency: 'monthly', priority: 0.8 },
  ]

  const industries = [
    'electronics-manufacturing',
    'light-industrial',
    'warehouse-distribution',
    'supply-chain-logistics',
    'administrative-clerical',
    'general-labor',
  ].map(slug => ({
    url: `${BASE}/industries/${slug}`,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const locations = [
    'richardson-tx',
    'bedford-tx',
    'austin-tx',
    'tampa-fl',
    'san-jose-ca',
    'phoenix-az',
  ].map(slug => ({
    url: `${BASE}/locations/${slug}`,
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  return [...staticPages, ...industries, ...locations].map(entry => ({
    ...entry,
    lastModified: now,
  }))
}
