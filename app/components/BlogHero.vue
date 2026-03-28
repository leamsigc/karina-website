<script setup lang="ts">
const { t } = useI18n()

interface Props {
  title?: string;
  highlight?: string;
  description?: string;
  category?: string;
  date?: string;
}

withDefaults(defineProps<Props>(), {
  title: '',
  highlight: '',
  description: '',
  category: '',
  date: ''
})

const displayTitle = computed(() => t('home.blog.hero.title'))
const displayHighlight = computed(() => t('home.blog.hero.highlight'))
</script>

<template>
  <section class="bg-charcoal text-cream py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div class="flex items-center justify-center space-x-4 text-xs tracking-widest uppercase mb-6">
        <slot name="category" mdc-unwrap="span">
          <span v-if="category" class="text-gold">{{ category }}</span>
        </slot>
      </div>
      <h1 class="font-serif text-5xl md:text-6xl mb-6 leading-tight">
        <slot name="title" mdc-unwrap="span">
          {{ displayTitle }} <span class="italic text-gold">{{ highlight || displayHighlight }}</span>
        </slot>
      </h1>
      <p class="font-light text-cream-dark max-w-2xl mx-auto text-lg">
        <slot name="description" mdc-unwrap="p">
          {{ description }}
        </slot>
      </p>
      <div class="mt-8 text-sm text-cream-dark/60">
        <slot name="date" mdc-unwrap="time">
          <time v-if="date" :datetime="date">{{ new Date(date).toLocaleDateString() }}</time>
        </slot>
      </div>
    </div>
  </section>
</template>
