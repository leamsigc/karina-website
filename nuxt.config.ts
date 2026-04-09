import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { join } from 'node:path'
import type { NuxtPage } from 'nuxt/schema'

const currentDir = dirname(fileURLToPath(import.meta.url))
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
    }
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/hints',
    '@nuxtjs/seo',
    'nuxt-seo-utils',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui',
    '@pinia/nuxt',
    'nuxt-vitalizer',
    'nuxt-umami',
    '@nuxt/content',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    '@nuxt/fonts'
  ],
  // routeRules: {
  //   '/blog/**': {
  //     seoMeta: {
  //       ogType: 'article'
  //     }
  //   },
  //   '/tools/**': {
  //     seoMeta: {
  //       ogType: 'tools'
  //     }
  //   }
  // },
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
    url: 'https://abogada-karina-oaxaca.com/',
    name: 'Karina Orocio - Abogada Postulante en Oaxaca',
    defaultLocale: 'es',
    trailingSlash: false
  },
  content: {
    build: {

    }
  },
  robots: {
    allow: ['*'],
    disallow: []
  },
  sitemap: {
    autoI18n: true,
    autoLastmod: true,
    discoverImages: true,
    discoverVideos: true,
    chunks: false,
  },

  schemaOrg: {
    identity: {
      type: 'LegalService',
      name: 'Karina Orocio Cruz - Private Law Attorney',
      alternateName: ['Karina Orocio Cruz', 'Karina Orocio Cruz Law Firm', 'Abogada Karina Orocio Cruz'],
      logo: '/img/logo.png',
      image: '/img/karina-hero.png',
      description: 'Senior Attorney specializing in Private Law (Family, Civil, Commercial and Administrative) in Oaxaca. Professional legal defense for property and assets.',
      telephone: '+52-951-615-30-10',
      email: 'karina@abogada-karina-oaxaca.com',
      url: 'https://abogada-karina-oaxaca.com',
      address: {
        streetAddress: 'Oaxaca de Juárez',
        addressLocality: 'Oaxaca de Juárez',
        addressRegion: 'Oaxaca',
        addressCountry: 'MX'
      },
      openingHoursSpecification: [
        {
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00'
        }
      ],
      areaServed: [
        { type: 'State', name: 'Oaxaca' },
        { type: 'City', name: 'Oaxaca de Juárez' },
        { type: 'City', name: 'Santa Lucía del Camino' },
        { type: 'City', name: 'Xoxocotlán' },
        { type: 'City', name: 'San Bartolo Coyotepec' }
      ],
      priceRange: '$$',
      sameAs: [
        'https://wa.me/529516153010'
      ]
    }
  },

  // nuxt-vitalizer: eliminate render-blocking entry CSS and excess preload hints
  // that the SEO audit flagged across all 40 pages.
  // disableStylesheets:'entry' removes the blocking /_nuxt/entry.[hash].css link.
  // disablePreloadLinks prevents excessive <link rel="preload"> tags.
  vitalizer: {
    disableStylesheets: 'entry',
    disablePreloadLinks: true,
  },

  i18n: {
    baseUrl: process.env.NUXT_PUBLIC_BASE_URL,
    locales: [
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
      { code: 'es', language: 'es-ES', name: 'Español', file: 'es.json' },
    ],
    strategy: 'prefix_except_default',
    defaultLocale: 'es',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
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
  vite: {
    optimizeDeps: {
      include: []
    }
  }
})