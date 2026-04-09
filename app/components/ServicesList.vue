<script setup lang="ts">
const { tm, rt, t } = useI18n()
const localePath = useLocalePath()

const services = computed(() => {
  const list = tm('home.services.list') || []
  return (list as any[]).map((item: any) => ({
    slug: rt(item.slug),
    title: rt(item.title),
    excerpt: rt(item.excerpt),
    image: rt(item.image) || "/img/karina-hero.png"
  }))
})
</script>

<template>
  <section class="py-24 bg-cream">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div v-for="(service, index) in services" :key="service.slug"
        :class="`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`">
        <div
          :class="index % 2 !== 0 ? 'order-2 lg:order-1 bg-cream-dark aspect-square rounded-sm overflow-hidden' : 'bg-cream-dark aspect-square rounded-sm overflow-hidden order-2'">
          <NuxtImg :src="service.image" :alt="service.title"
            class="w-full h-full object-cover mix-blend-multiply opacity-80" />
        </div>
        <div :class="index % 2 !== 0 ? 'order-1 lg:order-2 lg:pl-12' : 'order-1'">
          <span class="text-gold tracking-widest uppercase text-xs font-bold mb-4 block">0{{ index + 1 }}. {{
            service.title }}</span>
          <h2 class="font-serif text-4xl text-charcoal mb-6">
            <NuxtLinkLocale :to="`/services/${service.slug}`" class="hover:text-gold transition-colors">{{ service.title
            }}</NuxtLinkLocale>
          </h2>
          <p class="text-charcoal-light font-light text-lg mb-8 leading-relaxed">
            {{ service.excerpt }}
          </p>
          <NuxtLinkLocale :to="`/services/${service.slug}`"
            class="text-charcoal font-medium text-sm tracking-widest uppercase hover:text-gold transition-colors flex items-center space-x-2">
            <span>{{ t('common.view_details') }}</span> <span>→</span>
          </NuxtLinkLocale>
        </div>
      </div>
    </div>
  </section>
</template>
