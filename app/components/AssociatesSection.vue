<script setup lang="ts">
interface Props {
  title?: string
  subtitle?: string
}

defineProps<Props>()
</script>

<template>
  <section class="py-24 bg-cream">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div v-if="title" class="text-center mb-16">
        <h2 class="font-serif text-4xl md:text-5xl text-charcoal mb-4">
          {{ title }} <span v-if="subtitle" class="italic text-gold">{{ subtitle }}</span>
        </h2>
      </div>
      <slot />
    </div>
  </section>
</template>
