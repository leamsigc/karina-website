<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

const caseStudies = computed(() => [
  {
    slug: 'nulidad-multa-clausura-oaxaca',
    title: t('caseStudies.case1.title'),
    client: t('caseStudies.case1.client'),
    location: t('caseStudies.case1.location'),
    result: t('caseStudies.case1.result'),
    category: t('caseStudies.case1.category'),
    image: 'https://images.unsplash.com/photo-1541888087625-f8148fa53436?auto=format&fit=crop&q=80&w=1200',
    summary: t('caseStudies.case1.summary')
  },
  {
    slug: 'regularizacion-propiedad-costera',
    title: t('caseStudies.case2.title'),
    client: t('caseStudies.case2.client'),
    location: t('caseStudies.case2.location'),
    result: t('caseStudies.case2.result'),
    category: t('caseStudies.case2.category'),
    image: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&q=80&w=1200',
    summary: t('caseStudies.case2.summary')
  },
  {
    slug: 'defensa-arrendamiento-eolico',
    title: t('caseStudies.case3.title'),
    client: t('caseStudies.case3.client'),
    location: t('caseStudies.case3.location'),
    result: t('caseStudies.case3.result'),
    category: t('caseStudies.case3.category'),
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
    summary: t('caseStudies.case3.summary')
  },
  {
    slug: 'reduccion-predial-comercial',
    title: t('caseStudies.case4.title'),
    client: t('caseStudies.case4.client'),
    location: t('caseStudies.case4.location'),
    result: t('caseStudies.case4.result'),
    category: t('caseStudies.case4.category'),
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200',
    summary: t('caseStudies.case4.summary')
  }
])
</script>

<template>
  <section class="py-20 bg-cream">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <article v-for="study in caseStudies" :key="study.slug" class="bg-cream-dark border border-gold/20 overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
          <NuxtLinkLocale :to="`/case-studies/${study.slug}`" class="block">
            <div class="aspect-video overflow-hidden">
              <NuxtImg 
                :src="study.image" 
                :alt="study.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div class="p-8">
              <span class="text-xs tracking-widest uppercase font-medium text-gold">{{ study.category }}</span>
              <h3 class="font-serif text-2xl text-charcoal mt-2 mb-3 group-hover:text-gold transition-colors">
                {{ study.title }}
              </h3>
              <p class="font-light text-charcoal-light text-sm leading-relaxed mb-4">
                {{ study.summary }}
              </p>
              <div class="flex items-center justify-between pt-4 border-t border-gold/20">
                <div>
                  <p class="font-medium text-charcoal text-sm">{{ study.client }}</p>
                  <p class="text-xs text-charcoal-light">{{ study.location }}</p>
                </div>
                <div class="text-right">
                  <p class="font-serif text-lg text-gold">{{ study.result }}</p>
                </div>
              </div>
            </div>
          </NuxtLinkLocale>
        </article>
      </div>
    </div>
  </section>
</template>
