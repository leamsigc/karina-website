<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

interface Props {
  title?: string
  description?: string
  date?: string
  publishedAt?: string
  author?: {
    name?: string
    role?: string
  }
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  description: '',
  date: '',
  publishedAt: '',
  author: () => ({ name: 'Karina Orocio', role: 'Abogada Postulante' })
})

const formatDate = (dateStr: string) => {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  return date.toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  })
}
</script>

<template>
  <article class="bg-cream min-h-screen py-24">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <NuxtLinkLocale to="/blog"
        class="inline-flex items-center space-x-2 text-gold hover:text-charcoal transition-colors mb-12 text-xs font-medium tracking-widest uppercase">
        <span>←</span>
        <span>{{ t('nav.back_to_blog') }}</span>
      </NuxtLinkLocale>

      <header class="mb-16">
        <h1 class="text-4xl md:text-5xl font-serif text-charcoal leading-tight mb-8">{{ title }}</h1>
        <div class="flex items-center space-x-6 text-xs tracking-widest uppercase text-charcoal-light/70 font-sans">
          <div class="flex items-center space-x-2">
            <span>📅</span>
            <span>{{ formatDate(date || publishedAt) }}</span>
          </div>
          <div class="flex items-center space-x-2">
            <span>👤</span>
            <span>Lic. {{ author?.name || 'Karina Orocio' }}</span>
          </div>
        </div>
      </header>

      <div
        class="blog-content prose prose-lg prose-headings:font-serif prose-headings:text-charcoal prose-p:text-charcoal-light prose-p:font-light prose-p:leading-relaxed max-w-none">
        <slot />
      </div>

      <div class="mt-24 py-12 border-t border-gold/20 bg-charcoal">
        <div class=" text-cream p-12 rounded-sm text-center">
          <h3 class="text-3xl font-serif mb-6">{{ t('common.need_consultation') }}</h3>
          <p class="font-light text-cream-dark mb-8 max-w-lg mx-auto">{{ t('common.consultation_subtitle') }}</p>
          <NuxtLinkLocale to="/contact"
            class="inline-block bg-gold text-charcoal px-8 py-4 text-sm tracking-widest uppercase font-medium hover:bg-cream transition-colors">
            {{ t('nav.cta') }}
          </NuxtLinkLocale>
        </div>
      </div>
    </div>
  </article>
</template>
