# Karina Orocio Law Firm Website — ONBOARD.md

## Project Overview
A bilingual (es/en) Nuxt 4 static site for Karina Orocio Cruz, a private law attorney in Oaxaca, Mexico. Built with @nuxt/content v3 (markdown-driven pages), @nuxtjs/i18n, and @nuxtjs/seo. Deployed on Netlify via `nuxt generate`.

## Tech Stack
- **Framework:** Nuxt 4.3.0 (Vue 3, Vite, Tailwind CSS v4)
- **Content:** @nuxt/content 3.13 (Nuxt Content v3 — markdown files, Zod schema, MongoDB-like queries)
- **i18n:** @nuxtjs/i18n 10.2.4 (`prefix_except_default` — `es` is default, `en` gets `/en` prefix)
- **SEO:** @nuxtjs/seo 5.1.3 (automated robots/sitemap/OG), nuxt-seo-utils 8.1, nuxt-og-image 6.4
- **UI:** @nuxt/ui 4.6.1, tailwindcss 4.2.3
- **Schema:** nuxt-schema-org (via @nuxtjs/seo), identity defined in `nuxt.config.ts`
- **Analytics:** nuxt-umami (umami.giessen.dev)
- **Images:** @nuxt/image 2.0.0
- **State:** @pinia/nuxt 0.11.3
- **Dev:** @nuxt/eslint, TypeScript 6.0, @nuxt/test-utils 4.0
- **Package manager:** pnpm

## Directory Structure

```
/                               # Project root
├── nuxt.config.ts              # Main config: site URL, modules, i18n, SEO, schema, fonts
├── content.config.ts           # Nuxt Content v3 collections schema (blog, service, case-study)
├── package.json                # Dependencies & scripts
├── netlify.toml                # Netlify deploy config
├── tsconfig.json
├── app/
│   ├── app.vue                 # Root component (UApp > NuxtLayout > NuxtPage)
│   ├── assets/css/main.css     # Tailwind base styles
│   ├── components/             # 44 Vue components (see below)
│   ├── composables/            # Vue composables
│   ├── layouts/                # Layout components
│   ├── middleware/              # Route middleware
│   ├── pages/
│   │   ├── [...slug].vue       # Catch-all dynamic page for content routes
│   │   └── success.vue         # Form submission success page
│   └── utils/                  # Utilities
├── content/
│   ├── es/                     # Spanish content (default locale — no prefix)
│   │   ├── index.md            # Home page
│   │   ├── about.md
│   │   ├── associates.md
│   │   ├── contact.md
│   │   ├── faq.md
│   │   ├── services-index.md   # /services listing page
│   │   ├── case-studies.md
│   │   ├── blog/               # Blog articles
│   │   │   └── ...
│   │   ├── case-studies/       # Case study detail pages
│   │   │   └── ...
│   │   ├── services/           # Service detail pages
│   │   │   ├── derecho-familiar-oaxaca.md
│   │   │   ├── derecho-civil-oaxaca.md
│   │   │   ├── derecho-mercantil-oaxaca.md
│   │   │   ├── derecho-administrativo-oaxaca.md
│   │   │   ├── derecho-municipal-oaxaca.md
│   │   │   ├── tramites-municipales-oaxaca.md
│   │   │   └── gestoria-notarial-oaxaca.md
│   │   └── abogado-en-*.md     # City landing pages (see below)
│   └── en/                     # English content (prefixed with /en)
│       ├── index.md            # English home page
│       ├── about.md
│       ├── associates.md
│       ├── contact.md
│       ├── faq.md
│       ├── services-index.md
│       ├── case-studies.md
│       ├── blog/
│       │   └── ...
│       ├── case-studies/
│       │   └── ...
│       └── services/
│           └── derecho-familiar-oaxaca.md  # Only one EN service page exists
├── i18n/
│   ├── locales/
│   │   ├── es.json             # Spanish translations (278 lines, complete)
│   │   └── en.json             # English translations (274 lines — MISSING "home.stats" keys)
│   └── i18n.config.ts          # i18n configuration
└── public/
    └── img/                    # Static images
```

## Content Model

All content pages are markdown files in `content/{locale}/` directories. Each page has frontmatter validated by Zod schemas defined in `content.config.ts`:

### Schema Properties (per page)
- `layout` — `default` or `service-detail` or `blog-layout`
- `title` — page title (used as `<title>` via SEO modules)
- `description` — meta description
- `image` — `{ src, alt }` for page image
- `ogImage` — `{ component, props: { title, description, image, headline } }` for OG image generation
- `publishedAt` — publication date
- `head` — custom `<head>` meta tags (keywords, robots, author, description, og:locale)
- `schemaOrg` — inline JSON-LD (LegalService type, FAQPage for service pages)
- `tags` — array of keyword strings
- `robots` / `sitemap` — from @nuxtjs/seo content integration
- `seo` — optional: `{ title, description, canonical }` for explicit SEO overrides
- `type` — `blog`, `case-study`, or `service`

### City Pages (content/es/abogado-en-{city}.md)
Use `::CityPageHero` and `::CityPageCaseStudy` Vue components via MDC syntax. They also use `::ServiceCta` component for the CTA section.

**WITH good content (3):**
- `abogado-en-oaxaca-de-juarez.md` (164 lines)
- `abogado-en-puerto-escondido.md` (131 lines)
- `abogado-en-huatulco.md` (133 lines)

**THIN/just frontmatter (6):**
- `abogado-en-juchitan.md` (37 lines)
- `abogado-en-pochutla.md` (37 lines)
- `abogado-en-salina-cruz.md` (37 lines)
- `abogado-en-tehuantepec.md` (37 lines)
- `abogado-en-tlaxiaco.md` (37 lines)
- `abogado-en-tuxtepec.md` (37 lines)

**MISSING (5):**
- `abogado-en-huajuapan.md`
- `abogado-en-miahuatlan.md`
- `abogado-en-zimatlan.md`
- `abogado-en-ocotlan.md`
- `abogado-en-tlacolula.md`

### Service Pages (content/{locale}/services/)
Use `::ServiceDetailHero` and `::ServiceDetailContent` Vue components. The Spanish version has a `schemaOrg` with both `LegalService` and `FAQPage` types (list of Q&A). The English version only exists for `derecho-familiar-oaxaca.md`.

### English vs Spanish
- Spanish (`es`) is the default locale — pages are at `/services/derecho-familiar-oaxaca`
- English (`en`) pages are at `/en/services/derecho-familiar-oaxaca`
- `content.config.ts` defines `content_es` (prefix: `''`) and `content_en` (prefix: `'en'`) collections
- Only 1 English service page exists vs 7 Spanish; only the home page and some info pages exist in English

## i18n System

Translation files: `i18n/locales/{es,en}.json`

**Key sections:**
- `home.hero.*` — title, subtitle, CTAs, specialist
- `home.authority.*` — mission/vision, feature highlights
- `home.expertise.*` — area of expertise names/descriptions
- `home.caseStudies.*` — case titles, results
- `home.stats.*` — stats labels: `experience`, `success` (ONLY in es.json, MISSING from en.json!)
- `home.faq.*` — FAQ content
- `home.services.*` — service list (slugs, titles, excerpts)
- `home.testimonials.*` — testimonials
- `nav.*` — navigation labels, location names
- `contact.*` — contact form labels
- `common.*` — shared labels (title, cta_call, footer_description, coverage, etc.)

## SEO Status (from audit 2026-06-16)

### Current GSC (3mo: Feb 15 – May 16, 2026)
- Total clicks: 53
- Total impressions: 1,950
- Avg CTR: 2.7%
- Avg position: 6.1
- Desktop CTR: 0.7% | Mobile CTR: 5.1%

### Critical Issues to Fix (Priority Order)
1. **English title mismatch** — "divorce lawyer" query ranks #1, 422 impressions, 0% CTR. Page `content/en/services/derecho-familiar-oaxaca.md` title says "Family Law in Oaxaca" not "Divorce Lawyer in Oaxaca". Fix: change title + meta description + OG props to include "Divorce Lawyer".
2. **Broken i18n keys on /en** — Home page `/en` shows raw keys `10+home.stats.experience98%home.stats.success` because `home.stats.experience` and `home.stats.success` are missing from `en.json`. Fix: add these keys.
3. **Shorten Spanish title** — `/services/derecho-familiar-oaxaca` title is 95 chars (truncated in SERPs). Title: "Abogado de Familia en Oaxaca | Divorcio, Custodia y Pensión - Karina Orocio" (via `seo.title`). Fix: shorten to ~60 chars.
4. **Add FAQ schema to English service page** — ES page has FAQPage schemaOrg; EN page doesn't. Fix: add FAQPage JSON-LD.
5. **Thin city pages** — 6 pages have no body content. Fix: write unique content per city (auto-generate from templates, but each must be unique).
6. **Missing city pages** — 5 cities linked in footer but no content file exists (huajuapan, miahuatlan, zimatlan, ocotlan, tlacolula). Fix: create and write content.
7. **Trailing slash duplicates** — Both `/services/derecho-familiar-oaxaca` and `/services/derecho-familiar-oaxaca/` are indexed. Fix: add `routeRules` in nuxt.config.ts.
8. **Duplicate schemaOrg** — `workTranslation` in nuxt.config.ts creates duplicate LegalService entry. Fix: remove it.

### Site Identity
- URL: https://abogada-karina-oaxaca.com/
- SchemaOrg identity: LegalService
- Name: Karina Orocio Cruz
- Phone: +52-951-615-30-10
- Email: karina@abogada-karina-oaxaca.com
- Areas: Oaxaca de Juárez + 4 surrounding cities
- Default locale: es
- Analytics: Umami (a50c3575-ccdb-49b4-b3d5-5a747b687481)

### Key Vue Components
- `HomeHero.vue` / `HomeHeroEn.vue` — home page hero (uses `t('home.stats.*')` — the broken keys)
- `AppHeader.vue` — site header with navigation
- `AppFooter.vue` — footer with all 14 city links
- `CityPageHero.vue` — city page hero (city name, region, context, image)
- `CityPageCaseStudy.vue` — embedded case study in city pages
- `ServiceDetailHero.vue` — service page hero
- `ServiceDetailContent.vue` — service page body with benefits
- `ServiceCta.vue` — CTA section
- `HomeHero.vue` — Spanish home hero (lines 44-53: renders stats with `t('home.stats.experience')` and `t('home.stats.success')`)
- `[...slug].vue` — catch-all page that reads content from Nuxt Content

### Netlify Deployment
- Static site via `nuxt generate`
- Deployed from git (Netlify)
- `netlify.toml` in project root

### Build Commands
- `pnpm dev` — dev server
- `pnpm build` / `pnpm generate` — static build
- `pnpm lint` — ESLint
- `pnpm test` — Vitest
- `pnpm test:e2e` — Playwright

## Summary for Fix Agent
1. Edit `content/en/services/derecho-familiar-oaxaca.md`: title → "Divorce Lawyer in Oaxaca | No-Fault Divorce & Child Support", description → "Expert divorce lawyer in Oaxaca. No-fault divorce, child support & custody. Consulta gratuita. Karina Orocio Cruz — Private Law Attorney." Update all OG/tags/meta to match.
2. Edit `i18n/locales/en.json`: add `"stats": { "experience": "Years of Experience", "success": "Success Rate" }` under `"home"` section.
3. Edit `content/es/services/derecho-familiar-oaxaca.md`: shorten `seo.title` and frontmatter `title` to 55-60 chars while keeping keywords.
4. Add FAQPage schemaOrg to English service page `content/en/services/derecho-familiar-oaxaca.md`.
5. Write content for 6 thin city pages + 5 new city pages in `content/es/`.
6. Add routeRules to `nuxt.config.ts` for trailing slash redirects.
7. Remove `workTranslation` from schemaOrg identity in `nuxt.config.ts`.
8. Run `pnpm build` to verify no errors.
