<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <section class="bg-charcoal text-cream py-24">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="font-serif text-4xl mb-6">¿Necesita asesoría legal?</h2>
      <p class="text-cream-dark mb-10 text-lg font-light max-w-2xl mx-auto">
        Agende una consulta confidencial en nuestras oficinas en Oaxaca de Juárez para analizar su caso y diseñar una estrategia legal efectiva.
      </p>
      <NuxtLinkLocale to="/contact" class="inline-flex items-center justify-center px-8 py-4 border border-gold text-gold hover:bg-gold hover:text-charcoal transition-all duration-300 uppercase tracking-widest text-sm font-medium">
        Solicitar Consulta <span class="ml-2">→</span>
      </NuxtLinkLocale>
    </div>
  </section>
</template>
