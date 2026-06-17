import Link from 'next/link'
import icons from '@/components/icons'

export const metadata = {
  title: 'Leave a Review | Pro-Tech Staffing',
  description: 'Worked with Pro-Tech Staffing? Leave a Google review for your local office — Richardson, Bedford, Austin, Tampa, San Jose, Phoenix, or Cincinnati. It takes about a minute.',
  alternates: { canonical: '/leave-a-review' },
  openGraph: {
    title: 'Leave a Review | Pro-Tech Staffing',
    description: 'Leave a Google review for your local Pro-Tech Staffing office — it takes about a minute.',
  },
}

// Google review short-links per office (from each Google Business Profile → "Get more reviews").
// reviewUrl null = link not yet provided by that office's profile manager; shows a "coming soon"
// state instead of a live button. Never guess these — multiple unrelated firms share the
// "Pro-Tech Staffing" name, so a wrong link could point at a competitor's profile.
const OFFICES = [
  { key: 'richardson', city: 'Richardson, TX', note: 'Headquarters · East DFW',       reviewUrl: 'https://share.google/HAsttqpuYpWraZgs6', href: '/locations/richardson-tx' },
  { key: 'bedford',    city: 'Bedford, TX',    note: 'Tarrant County · Mid-Cities',   reviewUrl: 'https://share.google/jR0ijVQQ5UuSwlrAI', href: '/locations/bedford-tx' },
  { key: 'austin',     city: 'Austin, TX',     note: 'Central TX · I-35 Corridor',    reviewUrl: null,                                    href: '/locations/austin-tx' },
  { key: 'tampa',      city: 'Tampa, FL',      note: 'Tampa Bay',                     reviewUrl: 'https://share.google/L2V8liXNOhjqEknKy', href: '/locations/tampa-fl' },
  { key: 'sanjose',    city: 'San Jose, CA',   note: 'Silicon Valley · South Bay',    reviewUrl: null,                                    href: '/locations/san-jose-ca' },
  { key: 'phoenix',    city: 'Phoenix, AZ',    note: 'Southwest · East Valley',       reviewUrl: null,                                    href: '/locations/phoenix-az' },
  { key: 'cincinnati', city: 'Cincinnati, OH', note: 'CVG Area · N. Kentucky',        reviewUrl: null,                                    href: '/locations/cincinnati-oh' },
]

export default function LeaveAReviewPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bone pt-20 border-b border-fog">
        <div className="max-w-3xl mx-auto px-6 py-12 md:py-16">
          <p className="text-xs font-semibold text-ind-green tracking-widest uppercase mb-3">
            We&apos;d love your feedback
          </p>
          <h1 className="font-sans font-semibold text-sig-blue text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight mb-5">
            Leave Pro-Tech a review
          </h1>
          <p className="text-steel text-lg leading-relaxed">
            If we&apos;ve placed workers for your team — or helped you find work — a quick review
            helps other employers and job seekers find a staffing partner they can trust.
            It takes about a minute, and it means a lot.
          </p>
        </div>
      </section>

      {/* Office review cards */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-semibold text-steel tracking-widest uppercase mb-6">
            Choose the office you worked with
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {OFFICES.map(({ key, city, note, reviewUrl, href }) => (
              <div key={key} className="border border-fog rounded-md p-7 flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-5 h-5 text-ind-green flex-shrink-0">{icons.mapPin}</span>
                  <h2 className="font-semibold text-carbon text-lg">{city}</h2>
                </div>
                <p className="text-[11px] font-semibold text-ind-green tracking-wide uppercase mb-6">{note}</p>

                {reviewUrl ? (
                  <a
                    href={reviewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center justify-center gap-2 bg-sig-blue hover:bg-blue-900 text-white font-semibold text-sm px-6 py-3 rounded-md transition-colors"
                  >
                    <span className="w-4 h-4">{icons.star}</span>
                    Leave a Google Review
                  </a>
                ) : (
                  <div className="mt-auto">
                    <p className="text-steel text-xs mb-2">Google review link coming soon.</p>
                    <Link href={href} className="inline-flex items-center gap-1.5 text-sig-blue font-medium text-sm hover:underline">
                      View office
                      <span className="w-3.5 h-3.5">{icons.arrowRight}</span>
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="text-steel text-sm leading-relaxed mt-10">
            Worked with another Pro-Tech office, or have feedback you&apos;d rather send privately?
            Email us at{' '}
            <a href="mailto:info@protechstaffing.com" className="text-sig-blue font-medium hover:underline">
              info@protechstaffing.com
            </a>{' '}
            or visit our{' '}
            <Link href="/contact" className="text-sig-blue font-medium hover:underline">contact page</Link>.
          </p>
        </div>
      </section>
    </>
  )
}
