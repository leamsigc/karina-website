<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

interface Props {
  cityName?: string
  region?: string
  image?: string
  context?: string
}

withDefaults(defineProps<Props>(), {
  cityName: 'Oaxaca',
  region: 'Oaxaca',
  image: '',
  context: ''
})
</script>

<template>
  <section class="relative min-h-[75vh] flex items-center bg-cream overflow-hidden">
    <div class="absolute inset-0">
      <NuxtImg
        :src="image"
        :alt="`Servicios legales en ${cityName}, Oaxaca`"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-charcoal/85 mix-blend-multiply"></div>
    </div>
    
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 pb-20 text-center">
      <div class="inline-flex items-center space-x-2 bg-cream/10 text-cream px-4 py-2 rounded-full text-xs font-bold mb-8 border border-cream/20 uppercase tracking-widest">
        <span>📍</span>
        <span>{{ cityName }}, Oaxaca</span>
      </div>
      <h1 class="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-8 text-cream">
        Abogada Especialista en <br/><span class="italic text-gold">{{ cityName }}</span>
      </h1>
      <p class="text-cream-dark text-lg font-light max-w-3xl mx-auto mb-10 leading-relaxed">
        {{ context }}
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <NuxtLinkLocale to="/contact" class="inline-flex items-center justify-center space-x-3 bg-gold text-charcoal px-8 py-4 text-sm tracking-widest uppercase font-medium hover:bg-cream transition-colors duration-300">
          <span>{{ t('nav.cta') }}</span>
          <span>→</span>
        </NuxtLinkLocale>
        <a href="tel:9516153010" class="inline-flex items-center justify-center space-x-3 border border-cream text-cream px-8 py-4 text-sm tracking-widest uppercase font-medium hover:bg-cream hover:text-charcoal transition-colors duration-300">
          <span>Llamar: 951-615-30-10</span>
        </a>
      </div>
    </div>
  </section>
</template>
