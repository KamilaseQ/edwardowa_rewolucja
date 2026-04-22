import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://edeknauczelni.pl/sitemap.xml',
    host: 'https://edeknauczelni.pl',
  }
}
