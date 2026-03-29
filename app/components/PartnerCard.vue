<script setup lang="ts">
interface Props {
  name: string
  role: string
  description: string
  image?: string
  specialties?: string[]
  email?: string
  phone?: string
  isPartner?: boolean
}

withDefaults(defineProps<Props>(), {
  image: '/img/karina-hero.png',
  isPartner: false
})
</script>

<template>
  <div class="bg-cream-dark border border-charcoal/10 hover:border-gold transition-all duration-500 group"
    :class="{ 'border-gold': isPartner }">
    <div class="relative overflow-hidden">
      <div class="aspect-square overflow-hidden">
        <NuxtImg :src="image" :alt="name"
          class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105 mix-blend-multiply opacity-90" />
      </div>
      <div v-if="isPartner"
        class="absolute top-0 right-0 bg-gold text-charcoal px-4 py-2 text-xs font-bold uppercase tracking-wider">
        Socio Principal
      </div>
    </div>

    <div class="p-8">
      <h3 class="font-serif text-2xl text-charcoal mb-2">
        {{ name }}
      </h3>
      <p class="text-gold tracking-widest uppercase text-xs font-bold mb-4">
        {{ role }}
      </p>
      <p class="text-charcoal-light font-light text-sm mb-6 leading-relaxed">
        {{ description }}
      </p>

      <div v-if="specialties && specialties.length" class="mb-6">
        <h4 class="text-xs tracking-widest uppercase font-bold text-charcoal/50 mb-3">Especialidades</h4>
        <div class="flex flex-wrap gap-2">
          <span v-for="specialty in specialties" :key="specialty"
            class="px-3 py-1 bg-cream text-charcoal text-xs font-medium border border-charcoal/10">
            {{ specialty }}
          </span>
        </div>
      </div>

      <div v-if="email || phone" class="border-t border-charcoal/10 pt-4 mt-4">
        <div v-if="phone" class="flex items-center gap-2 text-sm text-charcoal-light mb-2">
          <span class="text-gold">📞</span>
          <a :href="`tel:${phone}`" class="hover:text-gold transition-colors">{{ phone }}</a>
        </div>
        <div v-if="email" class="flex items-center gap-2 text-sm text-charcoal-light">
          <span class="text-gold">✉️</span>
          <a :href="`mailto:${email}`" class="hover:text-gold transition-colors">{{ email }}</a>
        </div>
      </div>
    </div>
  </div>
</template>
