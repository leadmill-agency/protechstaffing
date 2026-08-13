import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllSlugs, getPostBySlug, estimateReadTime } from '@/lib/blog'
import icons from '@/components/icons'

const BASE = 'https://www.protechstaffing.com'

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: `${post.title} | Pro-Tech Staffing`,
    description: post.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: `${BASE}/blog/${slug}`,
      publishedTime: post.date,
      modifiedTime: post.updated || undefined,
      authors: post.author ? [post.author] : undefined,
      images: post.image ? [{ url: post.image }] : undefined,
    },
  }
}

function formatDate(isoDate) {
  if (!isoDate) return ''
  const d = new Date(isoDate)
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const readMinutes = estimateReadTime(post.content)

  // FAQPage JSON-LD — built from the same frontmatter that renders the visible
  // FAQ section, so schema and on-page text can never drift apart.
  const faqSchema = Array.isArray(post.faq) && post.faq.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: post.faq.map(({ q, a }) => ({
          '@type': 'Question',
          name: q,
          acceptedAnswer: { '@type': 'Answer', text: a },
        })),
      }
    : null

  // BlogPosting JSON-LD schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: post.image ? [post.image.startsWith('http') ? post.image : `${BASE}${post.image}`] : undefined,
    datePublished: post.date,
    dateModified: post.updated || post.date,
    author: {
      '@type': 'Organization',
      name: post.author || 'Pro-Tech Staffing Services',
      url: BASE,
      description: post.authorBio || 'Industrial and electronics manufacturing staffing specialists with 30+ years of placement experience.',
      knowsAbout: [
        'Industrial Staffing',
        'Electronics Manufacturing Staffing',
        'Warehouse & Distribution Staffing',
        'Light Industrial Staffing',
      ],
    },
    publisher: {
      '@type': 'Organization',
      name: 'Pro-Tech Staffing Services',
      url: BASE,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE}/blog/${slug}`,
    },
    keywords: Array.isArray(post.keywords) ? post.keywords.join(', ') : post.keywords,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Hero */}
      <section className="bg-bone pt-20 border-b border-fog">
        <div className="max-w-3xl mx-auto px-6 py-12 md:py-16">
          <div className="mb-6">
            <Link
              href="/blog"
              className="text-xs font-semibold text-ind-green hover:text-sig-blue tracking-widest uppercase inline-flex items-center gap-1"
            >
              ← Insights
            </Link>
          </div>
          {post.category && (
            <p className="text-[10px] font-semibold text-steel tracking-widest uppercase mb-4">
              {post.category}
            </p>
          )}
          <h1 className="font-sans font-semibold text-sig-blue text-3xl md:text-4xl lg:text-5xl leading-[1.15] tracking-tight mb-6">
            {post.title}
          </h1>
          {post.description && (
            <p className="text-steel text-lg leading-relaxed mb-6">{post.description}</p>
          )}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-sig-blue text-bone flex items-center justify-center flex-shrink-0">
              <span className="w-4 h-4">{icons.users}</span>
            </div>
            <div className="text-xs">
              <p className="font-semibold text-carbon">{post.author || 'Pro-Tech Staffing'}</p>
              <div className="flex items-center gap-2 text-steel">
                {post.authorRole && <span>{post.authorRole}</span>}
                {post.authorRole && <span aria-hidden>·</span>}
                <span>{formatDate(post.date)}</span>
                {post.updated && (
                  <>
                    <span aria-hidden>·</span>
                    <span>Updated {formatDate(post.updated)}</span>
                  </>
                )}
                <span aria-hidden>·</span>
                <span>{readMinutes} min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero image */}
      {post.image && (
        <div className="bg-white">
          <div className="max-w-4xl mx-auto px-6 py-8 md:py-12">
            <div className="aspect-[16/9] overflow-hidden rounded-md">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.image}
                alt={post.imageAlt || post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      )}

      {/* Body */}
      <section className="bg-white pb-16 md:pb-24">
        <div className="max-w-3xl mx-auto px-6">
          {/* Answer-first block — direct answer for AI Overviews / featured snippets */}
          {post.answerFirst && (
            <div className="answer-first mb-8">
              <p className="answer-label">Quick answer</p>
              <p>{post.answerFirst}</p>
            </div>
          )}
          {Array.isArray(post.keyTakeaways) && post.keyTakeaways.length > 0 && (
            <div className="key-takeaways mb-10">
              <p className="answer-label">Key takeaways</p>
              <ul>
                {post.keyTakeaways.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          <article
            className="blog-content prose-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          {/* FAQs — rendered from the same frontmatter as the FAQPage schema */}
          {Array.isArray(post.faq) && post.faq.length > 0 && (
            <div className="blog-content prose-content mt-10">
              <h2>Frequently asked questions</h2>
              {post.faq.map(({ q, a }, i) => (
                <div key={i}>
                  <h3>{q}</h3>
                  <p>{a}</p>
                </div>
              ))}
            </div>
          )}

          {/* Sources — external authority citations (E-E-A-T / AI-citation signal) */}
          {Array.isArray(post.sources) && post.sources.length > 0 && (
            <div className="mt-10 pt-6 border-t border-fog">
              <p className="answer-label" style={{ marginBottom: '0.5rem' }}>Sources</p>
              <ul className="text-sm text-steel space-y-1.5">
                {post.sources.map(({ title, url }, i) => (
                  <li key={i}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener"
                      className="underline underline-offset-2 hover:text-sig-blue transition-colors"
                    >
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* About the author — E-E-A-T trust signal */}
          {(post.authorBio || post.author) && (
            <div className="author-about mt-12">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-sig-blue text-bone flex items-center justify-center flex-shrink-0">
                  <span className="w-4 h-4">{icons.users}</span>
                </div>
                <div>
                  <p className="answer-label" style={{ marginBottom: '0.35rem' }}>About the author</p>
                  <p className="author-name">{post.author || 'Pro-Tech Staffing'}</p>
                  {post.authorRole && <p className="author-role">{post.authorRole}</p>}
                  <p className="author-bio">
                    {post.authorBio || 'Pro-Tech Staffing has placed industrial, electronics manufacturing, warehouse, and light industrial workers for over 30 years across Texas, Florida, California, Arizona, and the Cincinnati / Northern Kentucky market.'}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-sig-blue py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-semibold text-bone text-2xl md:text-3xl leading-tight mb-3">
            Need workers or looking for work?
          </h2>
          <p className="text-fog mb-6">
            We respond to every inquiry within one business day.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/employers"
              className="inline-flex items-center justify-center gap-2 bg-bone hover:bg-white text-carbon font-semibold px-7 py-3 text-sm rounded-md transition-colors"
            >
              Request Workers
            </Link>
            <Link
              href="/job-seekers"
              data-track="find_jobs"
              data-track-location="blog_cta"
              className="inline-flex items-center justify-center gap-2 border border-fog hover:border-bone text-bone font-medium px-7 py-3 text-sm rounded-md transition-colors"
            >
              Find Jobs
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
