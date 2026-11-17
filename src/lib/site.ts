// Set NEXT_PUBLIC_SITE_URL in Vercel (Settings > Environment Variables) to your real domain, e.g. https://ushindustries.com
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://ushindustries.com').replace(/\/$/, '')
