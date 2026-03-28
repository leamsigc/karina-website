<script setup lang="ts">
defineProps<{
  title?: string
  subtitle?: string
  highlight?: string
}>()
</script>

<template>
  <section class="bg-charcoal text-cream py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 class="font-serif text-5xl md:text-6xl mb-6">
        {{ title }}
        <span v-if="highlight" class="italic text-gold">{{ highlight }}</span>
      </h1>
      <p v-if="subtitle" class="font-light text-cream-dark max-w-2xl mx-auto text-lg">
        {{ subtitle }}
      </p>
    </div>
  </section>
</template>
