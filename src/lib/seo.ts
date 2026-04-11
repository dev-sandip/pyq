const DEFAULT_SITE_URL = 'https://dev-sandip.github.io/pyq'

export const SITE_NAME = 'IOE Archive'
export const SITE_URL = (
  import.meta.env.VITE_SITE_URL || DEFAULT_SITE_URL
).replace(/\/$/, '')
export const DEFAULT_OG_IMAGE = '/logo512.png'

type SeoOptions = {
  title: string
  description: string
  path?: string
  keywords?: Array<string>
  type?: 'website' | 'article' | 'profile'
  image?: string
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>
}

export function absoluteUrl(path = '/') {
  if (/^https?:\/\//.test(path)) {
    return path
  }

  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}

export function buildSeo({
  title,
  description,
  path = '/',
  keywords = [],
  type = 'website',
  image = DEFAULT_OG_IMAGE,
  jsonLd,
}: SeoOptions) {
  const canonicalUrl = absoluteUrl(path)
  const imageUrl = absoluteUrl(image)

  return {
    meta: [
      { title },
      { name: 'description', content: description },
      {
        name: 'robots',
        content:
          'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
      },
      { name: 'keywords', content: keywords.join(', ') },
      { property: 'og:type', content: type },
      { property: 'og:site_name', content: SITE_NAME },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: canonicalUrl },
      { property: 'og:image', content: imageUrl },
      { property: 'og:image:alt', content: 'IOE Archive logo' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: imageUrl },
      { name: 'twitter:url', content: canonicalUrl },
    ],
    links: [{ rel: 'canonical', href: canonicalUrl }],
    scripts: jsonLd
      ? [
          {
            type: 'application/ld+json',
            children: JSON.stringify(jsonLd),
          },
        ]
      : [],
  }
}
