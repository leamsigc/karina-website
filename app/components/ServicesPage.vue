<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section class="bg-charcoal text-cream py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 class="font-serif text-5xl md:text-6xl mb-6">{{ t('common.practice_areas_title') }} <span class="italic text-gold">{{ t('common.practice_areas_highlight') }}</span></h1>
      <p class="font-light text-cream-dark max-w-2xl mx-auto text-lg">
        {{ t('common.practice_areas_description') }}
      </p>
    </div>
  </section>
</template>

