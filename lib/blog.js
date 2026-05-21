// Blog post loader. Reads markdown files from content/blog/*.md at build time.
// Each post has frontmatter (title, slug, date, description, author, image,
// category, keywords) and a markdown body that gets converted to HTML.
//
// Server-only — uses fs. Don't import from client components.

import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { marked } from 'marked'

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

// Configure marked once at module load
marked.setOptions({
  gfm: true,
  breaks: false,
})

function readPostFile(filename) {
  const filepath = path.join(BLOG_DIR, filename)
  const raw = fs.readFileSync(filepath, 'utf8')
  const { data, content } = matter(raw)
  // Slug defaults to filename without extension
  const slug = data.slug || filename.replace(/\.md$/, '')
  return { slug, ...data, content }
}

/**
 * Returns post metadata (no rendered HTML) for the listing page.
 * Sorted by date descending. Excludes any posts where frontmatter has `draft: true`.
 */
export function getAllPosts() {
  if (!fs.existsSync(BLOG_DIR)) return []
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md'))
  const posts = files
    .map(readPostFile)
    .filter((p) => !p.draft)
    .map((p) => {
      // Strip the heavy content field from the listing payload
      // eslint-disable-next-line no-unused-vars
      const { content, ...meta } = p
      return meta
    })
  posts.sort((a, b) => (a.date < b.date ? 1 : -1))
  return posts
}

/**
 * Returns a single post by slug with rendered HTML. Returns null if not found.
 */
export function getPostBySlug(slug) {
  if (!fs.existsSync(BLOG_DIR)) return null
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md'))
  const filename = files.find((f) => {
    const post = readPostFile(f)
    return post.slug === slug
  })
  if (!filename) return null
  const post = readPostFile(filename)
  if (post.draft) return null
  const html = marked.parse(post.content)
  return { ...post, html }
}

/** Returns the list of slugs — used by generateStaticParams. */
export function getAllSlugs() {
  return getAllPosts().map((p) => p.slug)
}

/**
 * Estimate read time in minutes based on ~225 words per minute.
 */
export function estimateReadTime(content) {
  const wordCount = String(content).trim().split(/\s+/).length
  return Math.max(1, Math.round(wordCount / 225))
}
