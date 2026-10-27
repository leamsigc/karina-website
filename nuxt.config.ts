import { readdirSync, readFileSync } from 'node:fs'
import { join, resolve } from 'node:path'
import type { NuxtPage } from 'nuxt/schema'
import { ES_TO_EN_CONTENT_PATHS } from './app/utils/i18n-content-paths.ts'

/**
 * Walk a content directory and map every markdown file to the URL it renders at.
 * Keeps `nitro.prerender.routes` in sync with the content tree so pages that are
 * not reachable through internal links are still emitted by `nuxt generate`
 * (orphan pages were silently 404ing while still listed in the sitemap).
 *
 * index.md maps to its directory URL (`content/es/index.md` → `/`,
 * `content/es/blog/index.md` → `/blog`).
 */
function contentRoutes(dir: string, prefix = ''): string[] {
  const routes: string[] = []
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.'))
      continue
    const fullPath = join(dir, entry.name)
    if (entry.isDirectory()) {
      routes.push(...contentRoutes(fullPath, `${prefix}/${entry.name}`))
      continue
    }
    if (!entry.name.endsWith('.md'))
      continue
    const base = entry.name.replace(/\.md$/, '')
    routes.push(base === 'index' ? (prefix || '/') : `${prefix}/${base}`)
  }
  return routes
}

// `import.meta.dirname` is the folder this config lives in, so the walk works
// regardless of the shell's working directory.
const projectRoot = import.meta.dirname
const esPrerenderRoutes = contentRoutes(resolve(projectRoot, 'content/es'))
const enPrerenderRoutes = contentRoutes(resolve(projectRoot, 'content/en'), '/en')
const contentPrerenderRoutes = [...esPrerenderRoutes, ...enPrerenderRoutes]

// A stale entry in the ES↔EN slug map silently breaks hreflang, so fail the
// build instead of shipping a page whose translation points nowhere.
for (const [esPath, enPath] of Object.entries(ES_TO_EN_CONTENT_PATHS)) {
  if (!esPrerenderRoutes.includes(esPath))
    throw new Error(`[i18n-content-paths] ${esPath} has no file in content/es`)
  if (!enPrerenderRoutes.includes(enPath))
    throw new Error(`[i18n-content-paths] ${enPath} has no file in content/en`)
}

// Retired URLs (duplicate-intent consolidation). One JSON file feeds both the
// Nuxt redirect rules below and `public/_redirects` (scripts/generate-redirects.mjs),
// so dev/preview and production cannot disagree.
const { redirects: retiredUrls } = JSON.parse(
  readFileSync(resolve(projectRoot, 'shared/retired-urls.json'), 'utf8'),
) as { redirects: Record<string, string> }

// A redirect must not mask a page that still exists: if the file is still in the
// content tree the route would be prerendered and never reach the 301.
for (const from of Object.keys(retiredUrls)) {
  if (contentPrerenderRoutes.includes(from))
    throw new Error(`[retired-urls] ${from} still has a content file — delete it or drop the redirect`)
}

const retiredUrlRules = Object.fromEntries(
  Object.entries(retiredUrls).map(([from, to]) => [from, { redirect: { to, statusCode: 301 } }]),
)

export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],

  /* 
    Developer options
  */
  devtools: { enabled: true },
  experimental: {
    viteEnvironmentApi: true,
    typescriptPlugin: true
  },
  runtimeConfig: {
    public: {
      trailingSlash: false,
    }
  },
  future: {
    compatibilityVersion: 5
  },
  nitro: {
    experimental: {
      openAPI: true,
    },
    prerender: {
      crawlLinks: true,
      autoSubfolderIndex: false,
      failOnError: false,
      // Generated from the content tree (see `contentRoutes` above), not hardcoded:
      // every markdown file gets a prerendered route, including orphans.
      routes: contentPrerenderRoutes,
    }
  },

  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/hints',
    '@nuxtjs/seo',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@pinia/nuxt',
    'nuxt-vitalizer',
    'nuxt-umami',
    '@nuxt/content',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    '@nuxt/fonts'
  ],
  routeRules: {
    ...retiredUrlRules,
  },
  fonts: {
    defaults: {
      weights: [400, 500, 600, 700],
      styles: ['normal', 'italic'],
      subsets: [
        'latin-ext',
        'latin',
        'spanish'
      ]
    },
    families: [
      { name: 'Inter', provider: 'google' },
      { name: 'Cormorant Garamond', provider: 'google' }
    ]
  },

  site: {
    url: 'https://abogada-karina-oaxaca.com',
    name: 'Karina Orocio',
    titleTemplate: '%s | Karina Orocio',
    defaultLocale: 'es',
    trailingSlash: false
  },
  robots: {
    allow: ['*'],
    disallow: ['/success', '/en/success']
  },
  sitemap: {
    // Slug parity across locales is not in place yet: the canonical slugs for a
    // handful of topics differ per locale (e.g. `/services/cuanto-cuesta-divorcio-oaxaca`
    // vs `/en/services/divorce-cost-oaxaca`). `autoI18n` derives alternates from the
    // same slug and therefore invents URLs that do not exist (it was listing a
    // phantom `/services/divorce-cost-oaxaca` and dropping the real EN page).
    // Locale alternates are emitted per page in `<head>` and existence-checked in
    // `app/pages/[...slug].vue`, so the sitemap does not need to guess.
    autoI18n: false,
    autoLastmod: true,
    discoverImages: true,
    discoverVideos: true,
    chunks: false,
    exclude: [
      '/success',
      '/en/success',
      // Removed duplicate hub (301 → /services); must not be listed as canonical.
      '/services-index',
      '/en/services-index',
    ]
  },

  schemaOrg: {
    identity: {
      type: 'LegalService',
      name: 'Karina Orocio Cruz - Private Law Attorney',
      alternateName: ['Karina Orocio Cruz', 'Karina Orocio Cruz Law Firm', 'Abogada Karina Orocio Cruz'],
      logo: 'https://abogada-karina-oaxaca.com/img/logo.png',
      image: 'https://abogada-karina-oaxaca.com/img/karina-hero.png',
      description: 'Senior Attorney specializing in Private Law (Family, Civil, Commercial and Administrative) in Oaxaca. Professional legal defense for property and assets.',
      telephone: '+529516153010',
      email: 'karina@abogada-karina-oaxaca.com',
      url: 'https://abogada-karina-oaxaca.com',
      address: {
        streetAddress: 'Oaxaca de Juárez',
        addressLocality: 'Oaxaca de Juárez',
        addressRegion: 'Oaxaca',
        postalCode: '68000',
        addressCountry: 'MX'
      },
      geo: {
        type: 'GeoCoordinates',
        latitude: 17.0654,
        longitude: -96.7236
      },
      openingHoursSpecification: [
        {
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00'
        }
      ],
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Oaxaca' },
        { '@type': 'City', name: 'Oaxaca de Juárez' },
        { '@type': 'City', name: 'Santa Lucía del Camino' },
        { '@type': 'City', name: 'Xoxocotlán' },
        { '@type': 'City', name: 'San Bartolo Coyotepec' }
      ],
      priceRange: '$$',
      sameAs: [
        'https://wa.me/529516153010'
      ],
    },
  },

  // nuxt-vitalizer: eliminate render-blocking entry CSS and excess preload hints
  // that the SEO audit flagged across all 40 pages.
  // disableStylesheets:'entry' removes the blocking /_nuxt/entry.[hash].css link.
  // disablePreloadLinks prevents excessive <link rel="preload"> tags.
  // vitalizer: {
  //   disableStylesheets: 'entry',
  //   disablePreloadLinks: true,
  // },

  i18n: {
    baseUrl: process.env.NUXT_PUBLIC_BASE_URL || 'https://abogada-karina-oaxaca.com',
    langDir: 'locales',
    locales: [
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
      { code: 'es', language: 'es-ES', name: 'Español', file: 'es.json' }
    ],
    strategy: 'prefix_except_default',
    defaultLocale: 'es',
    // SEO: never auto-redirect by browser language. `/` always serves Spanish
    // so Googlebot (mostly US-based) discovers and indexes the ES canonical.
    // Users switch languages explicitly via the ES|EN switcher.
    detectBrowserLanguage: false
  },

  umami: {
    id: 'a50c3575-ccdb-49b4-b3d5-5a747b687481',
    host: 'https://umami.giessen.dev',
    autoTrack: true,
    ignoreLocalhost: true
  },

  /* Hooks */
  hooks: {
    'pages:extend': function (pages) {
      const pagesToRemove: NuxtPage[] = []
      pages.forEach((page) => {
        const pathsToExclude = ['types', 'components', '/api', 'composables', 'utils', '.json']
        if (pathsToExclude.some(excludePath => page.path.includes(excludePath))) {
          pagesToRemove.push(page)
        }
      })
      pagesToRemove.forEach((page: NuxtPage) => {
        pages.splice(pages.indexOf(page), 1)
      })
    },
  },
})