<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Engagement context — Pro-Tech Staffing × Lead Mill

**Agency:** Lead Mill (Rameel Sheikh)
**Client contacts:** Mylinh Tieu (primary, Pro-Tech owner), Eric (business partner — DNS/admin).
**Engagement scope:** website + SEO across all 6 Pro-Tech markets.

## GBP scope — IMPORTANT

Lead Mill is **only the GBP manager for Richardson (HQ) and Bedford**. The other 4 branches — **Austin, Tampa, San Jose, Phoenix** — are managed by someone else inside Pro-Tech and Lead Mill does NOT have Manager access.

For those 4 branches, Lead Mill cannot:
- View GBP performance data
- Post weekly GBP content
- Respond to reviews
- Upload photos / update categories / update services

What Lead Mill CAN still do across all 6 branches:
- Website SEO (the `/locations/[slug]` pages, the industry pages, the blog)
- Schema markup (LocalBusiness, EmploymentAgency, FAQPage)
- Citation building at the Pro-Tech corporate level (national directories)
- GSC + GA4 measurement
- Content / blog work
- Internal linking, technical SEO

**Implication:** Any GBP-specific work (posts, photos, Q&A, review responses, category fixes) is scoped to Richardson + Bedford only. Don't draft "ask Mylinh for Manager access on the other 5" tasks — that's already been ruled out and isn't a path forward.

## Baseline measurement (as of May 26, 2026)

Available 6-month GBP data (Dec 2025 – May 2026):
- **Richardson:** 4,019 interactions · 1,623 calls · 987 directions · 1,374 website clicks. Stable Dec–April, sharp drop in May (likely Wix → Next.js migration loss).
- **Bedford:** 1,479 interactions · 678 calls · 416 directions · 385 website clicks. Peaked Jan/Feb, has been declining 4 consecutive months — NOT migration-related, predates the new site. Probable cause: stale GBP profile (no posts/photos), competitor activity.

GSC + GA4 wired May 2026.

## What's live in the codebase

- GA4 (`NEXT_PUBLIC_GA4_MEASUREMENT_ID`) + GSC verification (`NEXT_PUBLIC_GSC_VERIFICATION`) via Vercel env vars
- 5 conversion events: phone_call_click, find_jobs_click, application_iframe_view, form_submit (employers + contact)
- Schema: LocalBusiness + EmploymentAgency in layout, FAQPage on city pages, BlogPosting on posts
- Resend wired for forms → `mylinh.tieu@protechstaffing.com`
- Blog at `/blog` with markdown posts in `content/blog/`
- 6 city pages at `/locations/[slug]` with Market Snapshot section (unique 200+ word per-market content)
- Sitemap + robots wired

## Parked items (waiting on others)

- Resend domain verification (DNS — Mylinh + Eric)
- ZipRecruiter inline listings whitelist (ZR support — Mylinh)
- Maps rank tracker tool (budget decision)

## Reference docs (outside this repo)

- `/Users/rameel/Desktop/Manual Library/Leadmill/playbooks/local-seo-ai-overview-playbook.md` — the master playbook (read this before any SEO decision)
- `../local-seo-ai-overview-playbook copy.md` — project-local copy (may be slightly out of date vs. master)
- `../ProTech_GBP_Optimization_Package.md` — Rameel's GBP execution playbook for Richardson + Bedford
- `../SEO_Sprint_May26_Jun30.md` — current sprint plan
