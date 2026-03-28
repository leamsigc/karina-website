<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <section class="relative min-h-[90vh] flex items-center bg-cream overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-12 pb-20">
      <div class="order-2 lg:order-1">
        <div class="inline-flex items-center space-x-2 bg-charcoal/5 text-charcoal px-4 py-2 rounded-full text-xs font-bold mb-8 border border-charcoal/10 uppercase tracking-widest">
          <span class="text-gold">●</span>
          <span>Oaxaca de Juárez, Mexico</span>
        </div>
        <h1 class="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-8 text-charcoal">
          Prestigious legal <br/><span class="italic text-gold">defense</span><br/>and results.
        </h1>
        <p class="text-charcoal-light text-lg font-light max-w-lg mb-10 leading-relaxed">
          We protect your assets and peace of mind with high-level legal strategies. Specialists in strategic litigation, civil law, family law and property tax reduction in the State of Oaxaca.
        </p>
        <div class="flex flex-col sm:flex-row gap-4">
          <NuxtLinkLocale to="/contact" class="inline-flex items-center justify-center space-x-3 bg-charcoal text-cream px-8 py-4 text-sm tracking-widest uppercase font-medium hover:bg-gold transition-colors duration-300">
            <span>Schedule Consultation</span>
            <span>→</span>
          </NuxtLinkLocale>
          <a href="tel:9516153010" class="inline-flex items-center justify-center space-x-3 border border-charcoal text-charcoal px-8 py-4 text-sm tracking-widest uppercase font-medium hover:bg-charcoal hover:text-cream transition-colors duration-300">
            <span>Call: 951-615-30-10</span>
          </a>
        </div>
        
        <div class="mt-12 pt-8 border-t border-gold/30 flex items-center space-x-8">
          <div>
            <p class="font-serif text-3xl text-charcoal mb-1">10+</p>
            <p class="text-xs tracking-widest uppercase font-medium text-charcoal-light">Years of Experience</p>
          </div>
          <div class="w-px h-12 bg-gold/30"></div>
          <div>
            <p class="font-serif text-3xl text-charcoal mb-1">98%</p>
            <p class="text-xs tracking-widest uppercase font-medium text-charcoal-light">Success Cases</p>
          </div>
        </div>
      </div>
      <div class="order-1 lg:order-2 flex justify-center lg:justify-end relative">
        <div class="relative w-full max-w-md aspect-[3/4] rounded-t-full overflow-hidden border border-gold/30 p-3 bg-cream">
          <div class="w-full h-full rounded-t-full overflow-hidden bg-cream-dark relative">
            <NuxtImg src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" alt="Lic. Karina Orocio - Attorney in Oaxaca" class="w-full h-full object-cover object-top mix-blend-multiply" />
          </div>
        </div>
        
        <div class="absolute bottom-10 -left-10 bg-charcoal text-cream p-6 rounded-sm shadow-2xl border border-gold/20 hidden md:block">
          <div class="flex items-center space-x-4">
            <div class="bg-gold/20 p-3 rounded-full">
              <span class="text-gold text-xl">⚖</span>
            </div>
            <div>
              <p class="text-xs tracking-widest uppercase font-medium text-gold mb-1">Specialist in</p>
              <p class="font-serif text-xl">Property Tax Reduction</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
