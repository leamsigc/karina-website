<script setup lang="ts">
import type { Collections } from '@nuxt/content'

/**
 *
 *
 * @author Leamsigc<leamsigc@gmail.com>
 * @version 0.0.1
 *
 * @todo [ ] Test the component
 * @todo [ ] Integration test.
 * @todo [✔] Update the typescript.
 */
import { withLeadingSlash } from 'ufo'
const route = useRoute()
const collectionType = 'content'
const { locale, localeProperties } = useI18n()

const slug = computed(() => Array.isArray(route.params.slug) ? withLeadingSlash(String(route.params.slug.join('/'))) : withLeadingSlash(String(route.params.slug)))

const collection = (`${collectionType}_${locale.value}`) as keyof Collections

const { data: page, refresh } = await useAsyncData(`page-${collection}-${slug.value}`, async () => {
  // Build collection name based on current locale
  const collection = ('content_' + locale.value) as keyof Collections
  const finalPath = `${locale.value === 'en' ? '' : `/${locale.value}`}${slug.value}`
  const content = await queryCollection(collection).path(finalPath).first()
  // Optional: fallback to default locale if content is missing
  if (!content && locale.value !== 'en') {
    return await queryCollection('content_en').path(slug.value).first()
  }

  return content
}, {
  watch: [locale], // Refetch when locale changes
})

useHead(page.value?.head || {})

useSeoMeta(page.value?.seo || {})

defineOgImageComponent('BlogOgImage',
  {
    title: page.value?.ogImage?.props.title || 'Karina Orocia - Abogada Postulante',
    description: page.value?.ogImage?.props.description || 'Especialista en asesoría legal patrimonial en Oaxaca',
    imageUrl: page.value?.ogImage?.props.image || 'https://karinaabogadaoaxaca.com/img/HomeHeroBg.png',
    headline: page.value?.ogImage?.props.headline || 'Abogada',
  }
)

</script>

<template>
  <ContentRenderer v-if="page" :value="page" />
</template>
