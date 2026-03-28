<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

interface Props {
  title?: string;
  client?: string;
  location?: string;
  result?: string;
  category?: string;
  image?: string;
}

withDefaults(defineProps<Props>(), {
  title: '',
  client: '',
  location: '',
  result: '',
  category: '',
  image: ''
})
</script>

<template>
  <article class="bg-cream pb-24">
    <!-- Breadcrumbs -->
    <div class="bg-cream border-b border-gold/20 py-4">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center space-x-2 text-xs font-medium tracking-widest uppercase text-charcoal-light">
          <NuxtLinkLocale to="/" class="hover:text-gold transition-colors">{{ t('nav.home') }}</NuxtLinkLocale>
          <span>›</span>
          <NuxtLinkLocale to="/case-studies" class="hover:text-gold transition-colors">{{ t('nav.caseStudies') }}</NuxtLinkLocale>
          <span>›</span>
          <span class="text-gold truncate">{{ title }}</span>
        </div>
      </div>
    </div>

    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
      <div class="flex flex-wrap items-center gap-4 mb-8 text-xs font-medium tracking-widest uppercase text-charcoal-light">
        <span class="bg-charcoal text-cream px-3 py-1">{{ category }}</span>
        <span class="flex items-center">📍 {{ location }}</span>
        <span class="flex items-center">👤 Cliente: {{ client }}</span>
      </div>
      
      <h1 class="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.1] mb-8">
        {{ title }}
      </h1>
      
      <div class="bg-gold/10 border border-gold/30 p-6 md:p-8 rounded-sm mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <p class="text-xs font-bold tracking-widest uppercase text-charcoal-light mb-2">Resultado Final</p>
          <p class="font-serif text-2xl text-charcoal flex items-center">
            <span class="text-gold mr-3 shrink-0">🏆</span>
            {{ result }}
          </p>
        </div>
        <NuxtLinkLocale 
          :to="localePath('/contact')"
          class="shrink-0 inline-flex items-center justify-center px-6 py-3 bg-charcoal text-cream hover:bg-gold hover:text-charcoal transition-all duration-300 uppercase tracking-widest text-xs font-medium"
        >
          Consultar mi caso
        </NuxtLinkLocale>
      </div>
    </div>

    <!-- Featured Image -->
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
      <div class="aspect-[21/9] overflow-hidden rounded-sm shadow-md">
        <NuxtImg 
          :src="image" 
          :alt="title" 
          class="w-full h-full object-cover"
        />
      </div>
    </div>
  </article>
</template>
