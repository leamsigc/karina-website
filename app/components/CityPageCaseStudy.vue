<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

interface Props {
  title?: string
  result?: string
  description?: string
}

withDefaults(defineProps<Props>(), {
  title: '',
  result: '',
  description: ''
})
</script>

<template>
  <section class="py-24 bg-charcoal text-cream">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="font-serif text-4xl mb-4">{{ t('home.caseStudies.hero.title') }} <span class="italic text-gold">{{ t('home.caseStudies.hero.highlight') }}</span></h2>
        <p class="font-light text-cream-dark text-lg max-w-2xl mx-auto">
          {{ t('home.caseStudies.hero.subtitle') }}
        </p>
      </div>
      
      <div class="bg-cream/5 border border-gold/20 p-8 md:p-12 rounded-sm max-w-4xl mx-auto relative">
        <div class="absolute top-0 right-0 bg-gold text-charcoal px-4 py-1 text-xs font-bold tracking-widest uppercase transform translate-x-2 -translate-y-2">
          Caso Destacado
        </div>
        <h3 class="font-serif text-2xl md:text-3xl text-gold mb-4">{{ title }}</h3>
        <div class="flex items-center space-x-2 mb-6">
          <span class="text-cream font-medium tracking-wider uppercase text-sm">🏆 Resultado: {{ result }}</span>
        </div>
        <p class="text-cream-dark font-light leading-relaxed text-lg mb-8">
          {{ description }}
        </p>
        <NuxtLinkLocale 
          to="/case-studies"
          class="inline-flex items-center text-gold text-sm tracking-widest uppercase font-medium hover:text-cream transition-colors"
        >
          {{ t('home.caseStudies.read_more') }} <span class="ml-2">→</span>
        </NuxtLinkLocale>
      </div>
    </div>
  </section>
</template>
