<script setup lang="ts">
const { t } = useI18n()

defineProps<{
  title?: string
  subtitle?: string
  description?: string
  benefits?: string[]
}>()
</script>

<template>
  <section class="py-24 bg-cream">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="prose prose-lg prose-charcoal max-w-none mb-16">
        <p class="text-xl leading-relaxed text-charcoal font-light">{{ description }}</p>
      </div>

      <div class="bg-white p-10 shadow-sm border border-cream-dark/20 rounded-sm">
        <h3 class="font-serif text-3xl text-charcoal mb-8 text-center">{{ t('common.how_can_we_help') }}</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div v-for="(benefit, index) in benefits" :key="index" class="flex items-start space-x-4">
            <span class="text-gold text-xl">✓</span>
            <p class="text-charcoal-light leading-relaxed">{{ benefit }}</p>
          </div>
        </div>
      </div>
      <div class="prose prose-lg prose-charcoal max-w-none mt-10">
        <slot/>
      </div>
      <p class="mt-10 text-xs font-light text-charcoal-light/70 border-t border-cream-dark/20 pt-4">
        {{ t('common.legal_disclaimer') }}
      </p>
    </div>
  </section>
</template>
