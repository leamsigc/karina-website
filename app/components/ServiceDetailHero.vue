<script setup lang="ts">
defineProps<{
  title?: string
  subtitle?: string
  image?: string
}>()
</script>

<template>
  <section class="relative h-[60vh] min-h-125 flex items-center justify-center">
    <div class="absolute inset-0">
      <NuxtImg v-if="image" :src="image" :alt="title" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-charcoal/80 mix-blend-multiply"></div>
    </div>

    <div class="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
      <span class="text-gold tracking-widest uppercase text-xs font-bold mb-4 block">Área de Práctica</span>
      <h1 class="font-serif text-5xl md:text-6xl text-cream mb-6 leading-tight">
        {{ title }}
      </h1>
      <p v-if="subtitle" class="text-cream-dark text-xl font-light max-w-2xl mx-auto">
        {{ subtitle }}
      </p>
    </div>
  </section>
</template>
