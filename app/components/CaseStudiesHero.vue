<script setup lang="ts">
const { t } = useI18n()

interface Props {
  title?: string;
  highlight?: string;
  subtitle?: string;
}

withDefaults(defineProps<Props>(), {
  title: '',
  highlight: '',
  subtitle: ''
})

const displayTitle = computed(() => t('home.caseStudies.hero.title'))
const displayHighlight = computed(() => t('home.caseStudies.hero.highlight'))
const displaySubtitle = computed(() => t('home.caseStudies.hero.subtitle'))
</script>

<template>
  <section class="py-24 bg-charcoal text-cream">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 class="font-serif text-5xl md:text-6xl mb-6">
        <slot name="title" mdc-unwrap="span">
          {{ displayTitle }} <span class="italic text-gold">{{ highlight || displayHighlight }}</span>
        </slot>
      </h1>
      <p class="font-light text-xl max-w-2xl mx-auto text-cream-dark">
        <slot name="subtitle" mdc-unwrap="p">
          {{ subtitle || displaySubtitle }}
        </slot>
      </p>
    </div>
  </section>
</template>
