# Karina Nuxt Website - Project Rules

## Project Overview

This is a Nuxt 4 website for Karina Orocio, a lawyer in Oaxaca, Mexico. The project is migrated from a ReactJS implementation.

## Tech Stack

- **Framework**: Nuxt 4 (with Nuxt Content)
- **Styling**: Tailwind CSS
- **i18n**: @nuxtjs/i18n (Spanish and English)
- **Content**: Markdown files with MDC components
- **Images**: NuxtImg

## Required Frontmatter Format

Every single markdown content file MUST have this exact SEO frontmatter format:

```yaml
---
layout: <layout-name>-layout
title: "Page Title | Karina Orocio - SEO Keywords"
description: "Page description for SEO. Should be 150-160 characters max."
featured: true
tags:
  - tag1
  - tag2
  - tag3
  - tag4
  - tag5
author:
  name: 'Karina Orocio'
  role: 'Abogada Postulant' (ES) or 'Attorney at Law' (EN)
  avatar: '/img/logo.png'
  social: 'https://wa.me/529516153010'
image:
  src: 'https://images.unsplash.com/...'
  alt: 'Image alt text for SEO'
ogImage:
  component: BlogOgImage
  props:
    title: 'OG Title'
    description: 'OG Description'
    image: 'https://images.unsplash.com/...'
    headline: 'Headline'
publishedAt: '2024-01-01'
head:
  bodyAttrs:
    class: ''
  meta:
    - name: 'keywords'
      content: 'comma, separated, keywords'
    - name: 'robots'
      content: 'index, follow'
    - name: 'author'
      content: 'Karina Orocio'
    - name: 'description'
      content: 'Meta description (same as top-level)'
---
```

## Layouts

Available layouts (managed by middleware):
- `default-layout` - Home, About, FAQ pages
- `services-layout` - Services index and service detail pages
- `blog-layout` - Blog index and blog posts
- `contact-layout` - Contact page

## Component Structure

All MDC components must follow this pattern with slots and props:

```vue
<script setup lang="ts">
const { t } = useI18n()

interface Props {
  title?: string;
  description?: string;
}

withDefaults(defineProps<Props>(), {
  title: '',
  description: ''
})

const displayTitle = computed(() => props.title || t('fallback.key'))
</script>

<template>
  <section class="py-20 bg-cream">
    <div class="max-w-7xl mx-auto px-4">
      <h1 class="font-serif text-5xl">
        <slot name="title" mdc-unwrap="span">
          {{ displayTitle }}
        </slot>
      </h1>
      <p>
        <slot name="description" mdc-unwrap="p">
          {{ description }}
        </slot>
      </p>
    </div>
  </section>
</template>
```

Key patterns:
- Use `mdc-unwrap` on slots
- Props with defaults and computed fallbacks using i18n
- Use `t()` function for all translatable text
- NO hardcoded Spanish/English text in components
- NO duplicate components for different languages (use i18n)

## Content Page Format

Content pages should use MDC component syntax with props:

```markdown
---
layout: default-layout
title: "Page Title"
description: "Description"
# ... rest of frontmatter
---

::ComponentName
---
prop: value
prop2: value
---
::
```

## i18n Rules

1. All text must use `t()` function from useI18n()
2. Translation files are in `i18n/locales/es.json` and `i18n/locales/en.json`
3. Keys should follow this structure:
   - `home.hero.title`, `home.hero.subtitle`
   - `home.authority.title`, `home.authority.description`
   - `home.expertise.services.predial.title`
   - `common.cta_quote`, `common.read_more`

## Page Types

### Home Page (`content/{locale}/index.md`)
- Uses: HomeHero, ExpertiseSection, AuthoritySection, TestimonialsSection, HomeFaq

### Services Page (`content/{locale}/services.md`)
- Uses: ServicesPage, ServicesList, ServiceCta

### Service Detail (`content/{locale}/services/{slug}.md`)
- Uses: ServiceDetailHero, ServiceDetailContent

### Blog Index (`content/{locale}/blog/index.md`)
- Uses: BlogHero, BlogList

### Blog Post (`content/{locale}/blog/{slug}.md`)
- Uses: BlogHero, ContentNavigation

### Case Studies (`content/{locale}/case-studies.md`)
- Uses: CaseStudiesHero, CaseStudiesList

### Contact (`content/{locale}/contact.md`)
- Uses: ContactSection

### About (`content/{locale}/about.md`)
- Uses: PageHero

## Component Directory Structure

```
app/components/
├── AppCta.vue           # CTA with slots
├── AppHeader.vue        # Navigation header
├── AppFooter.vue        # Footer
├── AuthoritySection.vue # Home page section
├── BlogHero.vue        # Blog hero with slots
├── BlogList.vue        # Blog posts grid
├── CaseStudiesHero.vue # Case studies hero
├── CaseStudiesList.vue # Case studies grid
├── ContactSection.vue  # Contact form/section
├── ExpertiseSection.vue # Services preview
├── HomeFaq.vue        # FAQ section
├── HomeHero.vue       # Home hero section
├── PageHero.vue       # Generic page hero
├── ServiceCta.vue     # Services CTA
├── ServiceDetailContent.vue
├── ServiceDetailHero.vue
├── ServicesList.vue   # Services grid
├── ServicesPage.vue   # Services hero
└── TestimonialsSection.vue
```

## Constants

Company info is stored in `utils/constants.ts`:
- COMPANY_INFO.phone
- COMPANY_INFO.email
- COMPANY_INFO.address

## Common Translation Keys

```json
{
  "common": {
    "cta_quote": "Cotizar / Get Quote",
    "cta_call": "Llamar Ahora / Call Now",
    "read_more": "Leer más / Read more",
    "need_help": "¿Necesita asesoría? / Need consultation?"
  },
  "nav": {
    "home": "Inicio / Home",
    "services": "Servicios / Services",
    "blog": "Editorial / Blog",
    "contact": "Contacto / Contact",
    "caseStudies": "Casos de Éxito / Case Studies"
  }
}
```

## Colors

- `bg-cream` - #F5F0E8 (light cream)
- `bg-cream-dark` - #E8E0D4
- `bg-charcoal` - #2D2A26 (dark brown)
- `text-charcoal` - #2D2A26
- `text-charcoal-light` - #5C5651
- `text-gold` - #B8860B (golden)
- `text-gold/20` - transparent gold

## Fonts

- `font-serif` - Cormorant Garamond
- `font-sans` - System default

## Build & Deploy

```bash
npm run build  # Generate static site
npm run dev    # Development server
```

## Important Notes

1. ALWAYS add `layout` in frontmatter
2. ALWAYS use i18n for text (no hardcoded ES/EN)
3. ALWAYS use the slot pattern for MDC components
4. ALWAYS add proper SEO meta tags in frontmatter
5. NEVER create duplicate components for ES/EN
6. Use Unsplash URLs as image fallbacks when local images missing
