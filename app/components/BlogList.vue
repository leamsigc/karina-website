<script setup lang="ts">
const { locale, t } = useI18n()
const localePath = useLocalePath()

const { data: posts } = await useAsyncData('blog-posts', () => 
  queryContent(locale.value, 'blog')
    .where({ _partial: false })
    .sort({ date: -1 })
    .find()
)

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
  <section class="py-20 bg-cream">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article v-for="post in posts" :key="post._path" class="bg-cream-dark border border-gold/20 overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
          <NuxtLinkLocale :to="post._path" class="block">
            <div class="aspect-video overflow-hidden">
              <NuxtImg 
                :src="post.image?.src || 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800'" 
                :alt="post.image?.alt || post.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div class="p-6">
              <span class="text-xs tracking-widest uppercase font-medium text-gold">{{ post.category }}</span>
              <h3 class="font-serif text-xl text-charcoal mt-2 mb-3 group-hover:text-gold transition-colors line-clamp-2">
                {{ post.title }}
              </h3>
              <p class="font-light text-charcoal-light text-sm leading-relaxed line-clamp-3 mb-4">
                {{ post.description }}
              </p>
              <div class="flex items-center justify-between text-xs text-charcoal-light">
                <span>{{ formatDate(post.date || post.publishedAt) }}</span>
                <span class="text-gold font-medium">{{ t('common.read_more') }} →</span>
              </div>
            </div>
          </NuxtLinkLocale>
        </article>
      </div>
    </div>
  </section>
</template>
