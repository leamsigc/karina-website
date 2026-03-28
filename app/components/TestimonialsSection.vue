<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

interface Testimonial {
  quote: string;
  author: string;
  case: string;
}

const testimonials = computed<Testimonial[]>(() => [
  { quote: t('home.testimonials.testimonial1.quote'), author: t('home.testimonials.testimonial1.author'), case: t('home.testimonials.testimonial1.case') },
  { quote: t('home.testimonials.testimonial2.quote'), author: t('home.testimonials.testimonial2.author'), case: t('home.testimonials.testimonial2.case') },
  { quote: t('home.testimonials.testimonial3.quote'), author: t('home.testimonials.testimonial3.author'), case: t('home.testimonials.testimonial3.case') }
])
</script>

<template>
  <section class="py-24 bg-cream-dark border-y border-gold/20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="font-serif text-4xl text-charcoal mb-4">{{ t('home.testimonials.title') }} <span class="italic text-gold">{{ t('home.testimonials.subtitle') }}</span></h2>
        <p class="font-light text-charcoal-light text-lg max-w-2xl mx-auto">
          {{ t('common.testimonials_subtitle') }}
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="testimonial in testimonials" :key="testimonial.author" class="bg-cream p-10 border border-gold/20 relative">
          <div class="flex text-gold mb-6">
            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
          </div>
          <p class="font-light text-charcoal-light italic mb-8 leading-relaxed">
            "{{ testimonial.quote }}"
          </p>
          <div class="border-t border-gold/30 pt-4">
            <p class="font-serif text-lg text-charcoal">{{ testimonial.author }}</p>
            <p class="text-xs tracking-widest uppercase font-medium text-gold">{{ testimonial.case }}</p>
          </div>
        </div>
      </div>

      <div class="mt-16 text-center">
        <NuxtLinkLocale to="/case-studies" class="inline-flex items-center space-x-3 border border-charcoal text-charcoal px-8 py-4 text-sm tracking-widest uppercase font-medium hover:bg-charcoal hover:text-cream transition-colors duration-300">
          <span>{{ t('home.testimonials.cta') }}</span>
        </NuxtLinkLocale>
      </div>
    </div>
  </section>
</template>
