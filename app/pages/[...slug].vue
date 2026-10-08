<i18n src="./slug.json"></i18n>
<script lang="ts" setup>
/**
 * Catch-all content renderer for localized content_en / content_es.
 *
 * @author Ismael Garcia <leamsigc@leamsigc.com>
 * @version 0.0.2
 */
import type { Collections } from '@nuxt/content'
import { withLeadingSlash, withoutTrailingSlash } from 'ufo'

const route = useRoute()
const { locale, t } = useI18n()

const slug = computed(() => {
  const raw = Array.isArray(route.params.slug) ? route.params.slug.join('/') : (route.params.slug as string | undefined)
  return withLeadingSlash(raw || '/')
})

const normalizedSlug = computed(() => {
  if (slug.value === '/' || slug.value === '/index')
    return '/'
  return withoutTrailingSlash(slug.value)
})

const collectionName = computed(() => `content_${locale.value}` as keyof Collections)

const finalPath = computed(() => {
  if (normalizedSlug.value === '/')
    return locale.value === 'es' ? '/' : '/en'
  return locale.value === 'es' ? normalizedSlug.value : `/en${normalizedSlug.value}`
})

const fallbackPath = computed(() => {
  if (normalizedSlug.value === '/')
    return locale.value === 'es' ? '/en' : '/'
  return locale.value === 'es' ? `/en${normalizedSlug.value}` : normalizedSlug.value
})

const { data: page } = await useAsyncData(`page-${locale.value}-${normalizedSlug.value}`, async () => {
  const primary = await queryCollection(collectionName.value).path(finalPath.value).first()
  if (primary)
    return primary
  const fallbackCollection = (locale.value === 'es' ? 'content_en' : 'content_es') as keyof Collections
  return await queryCollection(fallbackCollection).path(fallbackPath.value).first()
}, {
  watch: [() => locale.value, () => route.path]
})

if (!page.value && !import.meta.prerender)
  throw createError({ statusCode: 404, statusMessage: t('common.page_not_found') })

const pageImage = computed(() => {
  const image = page.value?.image as string | { src?: string } | undefined
  if (!image)
    return page.value?.ogImage?.props?.image || '/img/HomeHeroBg.png'
  if (typeof image === 'string')
    return image
  return image.src || page.value?.ogImage?.props?.image || '/img/HomeHeroBg.png'
})

const pageTitle = computed(() => page.value?.title || 'Karina Orocio Cruz - Abogada Postulante')
const pageDescription = computed(() => page.value?.description || 'Especialista en asesoría legal patrimonial en Oaxaca')
const canonicalUrl = computed(() => `https://abogada-karina-oaxaca.com${route.path}`)

useHead(() => page.value?.head || {})

useSeoMeta({
  title: () => pageTitle.value,
  description: () => pageDescription.value,
  ogTitle: () => pageTitle.value,
  ogDescription: () => pageDescription.value,
  ogImage: () => pageImage.value,
  twitterCard: 'summary_large_image'
})

// SEO: explicit hreflang alternates. The @nuxtjs/seo strict-mode auto-tags
// cannot infer alternates for this catch-all route (locale lives in the
// content collection, not in distinct route records), so production HTML
// was shipping with zero hreflang and EN/ES competed in the index.
const switchLocalePath = useSwitchLocalePath()
const siteBase = 'https://abogada-karina-oaxaca.com'
const hreflangLinks = computed(() => {
  const esPath = switchLocalePath('es')
  const enPath = switchLocalePath('en')
  const links: { rel: string, hreflang: string, href: string }[] = []
  if (esPath)
    links.push({ rel: 'alternate', hreflang: 'es', href: `${siteBase}${esPath}` })
  if (enPath)
    links.push({ rel: 'alternate', hreflang: 'en', href: `${siteBase}${enPath}` })
  // x-default points at the Spanish canonical (default locale, served at `/`)
  if (esPath)
    links.push({ rel: 'alternate', hreflang: 'x-default', href: `${siteBase}${esPath}` })
  return links
})

useHead(() => ({
  link: hreflangLinks.value
}))

defineOgImageComponent('BlogOgImage', {
  title: page.value?.ogImage?.props?.title || page.value?.title || 'Karina Orocio Cruz - Abogada Postulante',
  description: page.value?.ogImage?.props?.description || page.value?.description || 'Especialista en asesoría legal patrimonial en Oaxaca',
  imageUrl: page.value?.ogImage?.props?.image || pageImage.value,
  headline: page.value?.ogImage?.props?.headline || 'Abogada'
})

if (page.value) {
  const isBlog = page.value.type === 'blog' || route.path.includes('/blog/')
  const isService = page.value.type === 'service' || route.path.includes('/services/') || route.path.includes('abogado-en-') || route.path.includes('abogado-de-') || route.path.includes('abogados-de-')

  if (isBlog) {
    useSchemaOrg([
      defineArticle({
        '@type': 'BlogPosting',
        headline: page.value.title,
        description: page.value.description,
        image: pageImage.value.startsWith('http') ? pageImage.value : `https://abogada-karina-oaxaca.com${pageImage.value}`,
        datePublished: page.value.publishedAt || page.value.date || '2026-01-01',
        dateModified: page.value.publishedAt || page.value.date || '2026-01-01',
        author: {
          name: page.value.author?.name || 'Karina Orocio Cruz',
          url: 'https://abogada-karina-oaxaca.com/about'
        }
      }),
      defineWebPage({
        name: page.value.title,
        description: page.value.description
      }),
      defineBreadcrumb({
        itemListElement: [
          { name: locale.value === 'es' ? 'Inicio' : 'Home', item: locale.value === 'es' ? '/' : '/en' },
          { name: page.value.title }
        ]
      }),
      defineWebSite()
    ])
  } else if (isService) {
    useSchemaOrg([
      defineLocalBusiness({
        '@type': 'LegalService',
        name: page.value.title,
        description: page.value.description,
        telephone: '+529516153010',
        url: canonicalUrl.value,
        priceRange: '$$',
        address: {
          streetAddress: 'Oaxaca de Juárez',
          addressLocality: 'Oaxaca de Juárez',
          addressRegion: 'Oaxaca',
          postalCode: '68000',
          addressCountry: 'MX'
        }
      }),
      defineWebPage({
        name: page.value.title,
        description: page.value.description
      }),
      defineBreadcrumb({
        itemListElement: [
          { name: locale.value === 'es' ? 'Inicio' : 'Home', item: locale.value === 'es' ? '/' : '/en' },
          { name: page.value.title }
        ]
      }),
      defineWebSite()
    ])
  }
  // E-E-A-T: Attorney identity on the about pages (no credential number
  // published until Karina provides her cédula — the field is simply omitted).
  if (normalizedSlug.value === '/about') {
    useHead({
      script: [
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Attorney',
            'name': 'Karina Orocio Cruz',
            'url': 'https://abogada-karina-oaxaca.com/about',
            'image': 'https://abogada-karina-oaxaca.com/img/karina-orocio-cruz.png',
            'telephone': '+529516153010',
            'email': 'karina@abogada-karina-oaxaca.com',
            'jobTitle': locale.value === 'es' ? 'Abogada Postulante' : 'Attorney at Law',
            'foundingDate': '2021',
            'address': {
              '@type': 'PostalAddress',
              'addressLocality': 'Oaxaca de Juárez',
              'addressRegion': 'Oaxaca',
              'postalCode': '68000',
              'addressCountry': 'MX'
            },
            'knowsAbout': ['Derecho familiar', 'Divorcio incausado', 'Pensión alimenticia', 'Derecho civil', 'Usucapión', 'Derecho administrativo', 'Juicio de nulidad'],
            'areaServed': { '@type': 'State', 'name': 'Oaxaca' }
          })
        }
      ]
    })
  }
  if (page.value.faqs && Array.isArray(page.value.faqs) && page.value.faqs.length > 0) {
    useHead({
      script: [
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            'mainEntity': page.value.faqs.map((faq: { question: string, answer: string }) => ({
              '@type': 'Question',
              'name': faq.question,
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': faq.answer
              }
            }))
          })
        }
      ]
    })
  }
}
</script>

<template>
  <ContentRenderer v-if="page" :value="page" />
  <div v-else class="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
    <h1 class="font-serif text-4xl text-charcoal mb-4">
      {{ t('page_not_found') }}
    </h1>
    <p class="text-charcoal-light mb-8">
      {{ t('page_not_found_subtitle') }}
    </p>
    <NuxtLinkLocale to="/" class="bg-charcoal text-cream px-6 py-3 text-xs tracking-widest uppercase font-medium hover:bg-gold hover:text-charcoal transition-colors">
      {{ t('back_to_home') }}
    </NuxtLinkLocale>
  </div>
</template>
<style scoped>
</style>
