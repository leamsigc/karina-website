<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

interface Props {
  showAll?: boolean;
}

withDefaults(defineProps<Props>(), {
  showAll: false
})

const services = computed(() => [
  { key: 'predial', link: '/services/reduccion-predial-oaxaca' },
  { key: 'civil', link: '/services/derecho-civil-oaxaca' },
  { key: 'familiar', link: '/services/derecho-familiar-oaxaca' },
  { key: 'administrativo', link: '/services/derecho-administrativo-oaxaca' }
])
</script>

<template>
  <section class="py-24 bg-charcoal text-cream">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-16">
        <div class="md:col-span-1">
          <h2 class="font-serif text-4xl mb-6">{{ t('home.expertise.title') }} <br /><span class="italic text-gold">{{
            t('home.expertise.subtitle') }}</span></h2>
          <p class="font-light text-cream-dark mb-8 leading-relaxed">
            {{ t('home.expertise.description') }}
          </p>
          <NuxtLinkLocale to="/services"
            class="text-gold text-sm tracking-widest uppercase font-medium hover:text-cream transition-colors flex items-center space-x-2">
            <span>{{ t('home.expertise.cta') }}</span>
            <span>→</span>
          </NuxtLinkLocale>
        </div>
        <div class="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-12">
          <div v-for="(service, index) in services" :key="service.key" class="border-t border-gold/30 pt-6 group">
            <span class="text-gold font-serif text-2xl mb-4 block">0{{ index + 1 }}.</span>
            <h3 class="text-xl font-serif mb-3">
              <NuxtLinkLocale :to="service.link" class="hover:text-gold transition-colors">
                {{ t(`home.expertise.services.${service.key}.title`) }}
              </NuxtLinkLocale>
            </h3>
            <p class="font-light text-cream-dark text-sm leading-relaxed mb-4">
              {{ t(`home.expertise.services.${service.key}.description`) }}
            </p>
            <NuxtLinkLocale :to="service.link"
              class="text-xs tracking-widest uppercase font-medium text-gold opacity-50 group-hover:opacity-100 transition-opacity">
              {{ t('common.read_more') }} →
            </NuxtLinkLocale>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
