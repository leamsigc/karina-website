<script setup lang="ts">
import type { Collections } from '@nuxt/content'

const { locale, t } = useI18n()
const localePath = useLocalePath()

const { data: caseStudies } = await useAsyncData('case-studies', async () => {
  const collection = (`content_${locale.value}`) as keyof Collections
  const content = await queryCollection(collection)
    .where("type", "=", 'case')
    .select('path', 'title', 'description', 'tags', 'publishedAt', 'image', 'caseOverview')
    .order('publishedAt', 'DESC')
    .all()

  if (!content && locale.value !== 'es') {
    const defaultCollection = (`content_es`) as keyof Collections
    return await queryCollection(defaultCollection)
      .where("type", "=", 'case')
      .select('path', 'title', 'description', 'tags', 'publishedAt', 'image', 'caseOverview')
      .order('publishedAt', 'DESC')
      .all()
  }

  return content
}, {
  watch: [locale]
})
</script>

<template>
  <section class="py-24 bg-cream">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">

        <div v-for="study in caseStudies" :key="study.path"
          class="group bg-white border border-gold/20 flex flex-col h-full hover:shadow-lg transition-all duration-300">
          <NuxtLinkLocale :to="study.path" class="block relative h-64 overflow-hidden">
            <NuxtImg :src="study.image?.src" :alt="study.title"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div
              class="absolute top-4 left-4 bg-charcoal text-cream px-3 py-1 text-xs tracking-widest uppercase font-medium">
              {{ study.caseOverview?.category || study.tags?.[0] }}
            </div>
          </NuxtLinkLocale>

          <div class="p-8 flex flex-col flex-grow">
            <div
              class="flex items-center space-x-4 mb-4 text-xs font-medium tracking-widest text-charcoal-light uppercase">
              <span class="flex items-center">📍 {{ study.caseOverview?.location || 'Oaxaca' }}</span>
              <span class="flex items-center">👤 {{ study.caseOverview?.client || 'Cliente' }}</span>
            </div>

            <h2 class="font-serif text-2xl text-charcoal mb-4 group-hover:text-gold transition-colors">
              <NuxtLinkLocale :to="study.path">{{ study.title }}</NuxtLinkLocale>
            </h2>

            <div class="flex items-center space-x-2 mb-6 bg-gold/10 p-3 rounded-sm border border-gold/20">
              <span class="text-gold">🏆</span>
              <span class="text-charcoal font-medium text-sm">Resultado: {{ study.caseOverview?.result }}</span>
            </div>

            <p class="text-charcoal-light font-light leading-relaxed mb-8 flex-grow">
              {{ study.caseOverview?.summary || study.description }}
            </p>

            <NuxtLinkLocale :to="study.path"
              class="inline-flex items-center text-gold text-sm tracking-widest uppercase font-medium hover:text-charcoal transition-colors mt-auto">
              {{ t('home.caseStudies.read_more') }} <span class="ml-2">→</span>
            </NuxtLinkLocale>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
