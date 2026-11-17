import type { MetadataRoute } from 'next'
import { ARTICLES } from '@/lib/articles'
import { SITE_URL } from '@/lib/site'

export const dynamic = 'force-static'

const ROUTES = [
  '', '/about', '/vision', '/leadership', '/governance', '/investors', '/careers', '/contact',
  '/divisions/fortress', '/divisions/fractalysium', '/divisions/resources', '/divisions/oil-gas', '/divisions/multi-commodities',
  '/sectors/mining', '/sectors/energy', '/sectors/logistics',
  '/technology', '/sustainability', '/global-connections', '/newsroom', '/compliance', '/legal', '/privacy',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    ...ROUTES.map((r) => ({ url: `${SITE_URL}${r}`, lastModified: now, priority: r === '' ? 1 : r.startsWith('/divisions') ? 0.9 : 0.7 })),
    ...ARTICLES.map((a) => ({ url: `${SITE_URL}/newsroom/${a.slug}`, lastModified: now, priority: 0.5 })),
  ]
}
