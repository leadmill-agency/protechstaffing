import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'

export const metadata = {
  title: 'Industrial Staffing Insights | Pro-Tech Staffing Blog',
  description:
    'Insights on industrial staffing, electronics manufacturing, IPC certification, DFW labor markets, and what makes a great staffing partner. Written by the Pro-Tech team.',
  openGraph: {
    title: 'Industrial Staffing Insights | Pro-Tech Staffing Blog',
    description:
      'Insights on industrial staffing, electronics manufacturing, IPC certification, DFW labor markets, and more.',
  },
  alternates: { canonical: '/blog' },
}

function formatDate(isoDate) {
  if (!isoDate) return ''
  const d = new Date(isoDate)
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function BlogIndexPage() {
  const posts = getAllPosts()

  return (
    <>
      {/* Hero */}
      <section className="bg-bone pt-20 border-b border-fog">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          <p className="text-xs font-semibold text-ind-green tracking-widest uppercase mb-4">
            Insights
          </p>
          <h1 className="font-sans font-semibold text-sig-blue text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight mb-4 max-w-2xl">
            Industrial staffing insights from the Pro-Tech team
          </h1>
          <p className="text-steel text-base md:text-lg leading-relaxed max-w-2xl">
            Real-world perspectives on industrial staffing, electronics manufacturing, IPC certification, DFW labor markets,
            and what separates a good staffing partner from a great one.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          {posts.length === 0 ? (
            <p className="text-steel text-base">
              No posts yet — check back soon. In the meantime, browse our{' '}
              <Link href="/industries" className="text-sig-blue hover:underline">
                industries we serve
              </Link>{' '}
              or{' '}
              <Link href="/locations" className="text-sig-blue hover:underline">
                see where we operate
              </Link>
              .
            </p>
          ) : (
            <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link href={`/blog/${post.slug}`} className="group block">
                    {post.image && (
                      <div className="aspect-[16/10] overflow-hidden mb-5 bg-bone">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={post.image}
                          alt={post.imageAlt || post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    )}
                    {post.category && (
                      <p className="text-[10px] font-semibold text-ind-green tracking-widest uppercase mb-2">
                        {post.category}
                      </p>
                    )}
                    <h2 className="font-semibold text-carbon text-xl leading-snug mb-3 group-hover:text-sig-blue transition-colors">
                      {post.title}
                    </h2>
                    {post.description && (
                      <p className="text-steel text-sm leading-relaxed mb-4">{post.description}</p>
                    )}
                    <p className="text-xs text-steel">
                      {formatDate(post.date)}
                      {post.author && <> · {post.author}</>}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  )
}
