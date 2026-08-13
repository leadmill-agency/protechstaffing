// AI retrieval/training crawlers are explicitly allowed: ChatGPT search runs on
// Bing's index + OAI-SearchBot, and Perplexity/Claude/Gemini have their own bots.
// The wildcard already permits them; the explicit rules make the opt-in
// unambiguous and survive any future tightening of the default rule.
const AI_CRAWLERS = [
  'OAI-SearchBot', // ChatGPT search (live retrieval)
  'GPTBot', // OpenAI training
  'ClaudeBot', // Anthropic
  'PerplexityBot', // Perplexity
  'Google-Extended', // Gemini training
  'Bingbot', // Bing index → Copilot + ChatGPT
]

export default function robots() {
  return {
    rules: [
      ...AI_CRAWLERS.map(userAgent => ({
        userAgent,
        allow: '/',
        disallow: ['/api/', '/_next/'],
      })),
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: 'https://www.protechstaffing.com/sitemap.xml',
  }
}
