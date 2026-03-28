<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

interface Props {
  image?: string;
}

withDefaults(defineProps<Props>(), {
  image: '/img/book.jpeg'
})
</script>

<template>
  <section class="py-24 bg-cream">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col lg:flex-row items-center gap-16">
        <div class="lg:w-1/2">
          <div class="relative">
            <div class="absolute inset-0 bg-gold/20 transform translate-x-4 translate-y-4"></div>
            <NuxtImg :src="image" :alt="t('home.authority.title')"
              class="w-full aspect-4/5 object-cover relative z-10 grayscale hover:grayscale-0 transition-all duration-700" />
          </div>
        </div>
        <div class="lg:w-1/2">
          <h2 class="font-serif text-4xl text-charcoal mb-6">{{ t('home.authority.title') }} <br /><span
              class="italic text-gold">{{ t('home.authority.location') }}</span></h2>
          <p class="text-charcoal-light font-light text-lg mb-6 leading-relaxed">
            {{ t('home.authority.description1') }}
          </p>
          <p class="text-charcoal-light font-light text-lg mb-10 leading-relaxed">
            {{ t('home.authority.description2') }}
          </p>

          <div class="grid grid-cols-2 gap-6 mb-10">
            <div class="flex items-start space-x-3">
              <div class="h-6 w-6 text-gold shrink-0 text-xl">🛡</div>
              <div>
                <h4 class="font-serif text-lg text-charcoal mb-1">{{ t('home.authority.feature1_title') }}</h4>
                <p class="text-sm font-light text-charcoal-light">{{ t('home.authority.feature1_desc') }}</p>
              </div>
            </div>
            <div class="flex items-start space-x-3">
              <div class="h-6 w-6 text-gold shrink-0 text-xl">⚖</div>
              <div>
                <h4 class="font-serif text-lg text-charcoal mb-1">{{ t('home.authority.feature2_title') }}</h4>
                <p class="text-sm font-light text-charcoal-light">{{ t('home.authority.feature2_desc') }}</p>
              </div>
            </div>
          </div>

          <NuxtLinkLocale to="/blog"
            class="inline-flex items-center space-x-3 border border-charcoal text-charcoal px-8 py-4 text-sm tracking-widest uppercase font-medium hover:bg-charcoal hover:text-cream transition-colors duration-300">
            <span>{{ t('home.authority.cta') }}</span>
          </NuxtLinkLocale>
        </div>
      </div>
    </div>
  </section>
</template>
