<script setup lang="ts">
import type { Collections } from '@nuxt/content'
import { withLeadingSlash } from 'ufo'

const { locale, t } = useI18n()
const localePath = useLocalePath()

const route = useRoute()
const slug = computed(() => withLeadingSlash(String(route.params.slug)))

const { data: posts } = await useAsyncData(`blog-${slug.value}`, async () => {
  const collection = (`content_${locale.value}`) as keyof Collections
  const path = `${slug.value}`
  let content = await queryCollection(collection).where('featured', '=', 1).select('path', 'title', 'tags', 'publishedAt', 'image', 'author', 'description').all()

  // Fallback to default locale if content is missing
  if (!content && locale.value !== 'es') {
    const defaultCollection = (`content_es`) as keyof Collections
    content = await queryCollection(defaultCollection).where('featured', '=', 1).select('path', 'title', 'tags', 'publishedAt', 'image', 'author', 'description').order('publishedAt', 'DESC').all()
  }

  return content
}, {
  watch: [locale]
})

const formatDate = (dateStr: string) => {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  return date.toLocaleDateString(locale.value === 'es' ? 'es-ES' : 'en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}
</script>

<template>
  <section class="py-24 bg-cream">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <article v-for="post in posts" :key="post.path" class="group cursor-pointer">
          <div class="border-t border-charcoal pt-6">
            <span class="text-gold tracking-widest uppercase text-[10px] font-bold mb-4 block">{{ post.tags?.[0] ||
              'Legal' }}</span>
            <h2 class="font-serif text-2xl text-charcoal mb-4 group-hover:text-gold transition-colors">
              <NuxtLinkLocale :to="post.path">{{ post.title }}</NuxtLinkLocale>
            </h2>
            <p class="text-charcoal-light font-light text-sm mb-6 leading-relaxed">
              {{ post.description }}
            </p>
            <NuxtLinkLocale :to="post.path"
              class="text-charcoal font-medium text-xs tracking-widest uppercase group-hover:text-gold transition-colors flex items-center space-x-2">
              <span>{{ t('blog.read_article') }}</span> <span>→</span>
            </NuxtLinkLocale>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
