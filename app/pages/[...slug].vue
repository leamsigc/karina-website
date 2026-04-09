<script setup lang="ts">
import type { Collections } from '@nuxt/content'

import { withLeadingSlash } from 'ufo'
const route = useRoute()
const { locale } = useI18n()

const slug = computed(() => Array.isArray(route.params.slug) ? withLeadingSlash(String(route.params.slug.join('/'))) : withLeadingSlash(String(route.params.slug)))

const collection = (`content_${locale.value}`) as keyof Collections

const { data: page } = await useAsyncData(`page-${collection}-${slug.value}`, async () => {
  const collectionName = ('content_' + locale.value) as keyof Collections
  const finalPath = slug.value
  const content = await queryCollection(collectionName).path(finalPath).first()

  if (!content && locale.value !== 'es') {
    return await queryCollection('content_es').path(slug.value).first()
  }

  return content
}, {
  watch: [locale]
})

useHead(page.value?.head || {})

useSeoMeta(page.value?.seo || {})

defineOgImageComponent('BlogOgImage', {
  title: page.value?.ogImage?.props?.title || 'Karina Orocio Cruz - Abogada Postulante',
  description: page.value?.ogImage?.props?.description || 'Especialista en asesoría legal patrimonial en Oaxaca',
  imageUrl: page.value?.ogImage?.props?.image || '/img/HomeHeroBg.png',
  headline: page.value?.ogImage?.props?.headline || 'Abogada',
})
</script>

<template>
  <ContentRenderer v-if="page" :value="page" />
</template>
