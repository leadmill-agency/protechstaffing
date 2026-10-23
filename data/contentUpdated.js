// "Last updated" dates shown on city, industry and data center pages.
// Bump a date only when that page's content actually changes (AI search
// playbook, Section 3C). Pages not listed use DEFAULT_UPDATED.
export const DEFAULT_UPDATED = '2026-10-22'

const CONTENT_UPDATED = {}

export default function contentUpdated(path) {
  return CONTENT_UPDATED[path] || DEFAULT_UPDATED
}
