<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

const locations = [
    { name: 'nav.location_oaxaca', to: '/abogado-en-oaxaca-de-juarez' },
    { name: 'nav.location_puerto', to: '/abogado-en-puerto-escondido' },
    { name: 'nav.location_huatulco', to: '/abogado-en-huatulco' },
    { name: 'nav.location_salina', to: '/abogado-en-salina-cruz' },
    { name: 'nav.location_juchitan', to: '/abogado-en-juchitan' },
    { name: 'nav.location_tuxtepec', to: '/abogado-en-tuxtepec' },
    { name: 'nav.location_tehuantepec', to: '/abogado-en-tehuantepec' },
    { name: 'nav.location_pochutla', to: '/abogado-en-pochutla' },
    { name: 'nav.location_tlaxiaco', to: '/abogado-en-tlaxiaco' },
    { name: 'nav.location_huajuapan', to: '/abogado-en-huajuapan' },
    { name: 'nav.location_miahuatlan', to: '/abogado-en-miahuatlan' },
    { name: 'nav.location_zimatlan', to: '/abogado-en-zimatlan' },
    { name: 'nav.location_ocotlan', to: '/abogado-en-ocotlan' },
    { name: 'nav.location_tlacolula', to: '/abogado-en-tlacolula' },
]
</script>

<template>
    <footer class="bg-charcoal text-cream py-16 border-t border-gold/20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
            <div class="md:col-span-2">
                <div class="flex items-center space-x-4 mb-6">
                    <div class="border border-cream p-2 flex items-center justify-center w-10 h-10">
                        <span class="text-cream font-serif text-lg">KO</span>
                    </div>
                    <div>
                        <h2 class="text-lg font-serif tracking-widest uppercase text-cream">Karina Orocio</h2>
                        <p class="text-[10px] text-gold tracking-[0.2em] uppercase">{{ t('common.title') }}</p>
                    </div>
                </div>
                <p class="text-sm font-light text-cream-dark leading-relaxed max-w-md">
                    {{ t('common.footer_description') }}
                </p>
            </div>
            
            <div>
                <h3 class="text-gold font-serif text-lg mb-6">{{ t('nav.navigation') }}</h3>
                <ul class="space-y-3 text-sm font-light">
                    <li><NuxtLinkLocale to="/" class="hover:text-gold transition-colors">{{ t('nav.home') }}</NuxtLinkLocale></li>
                    <li><NuxtLinkLocale to="/services" class="hover:text-gold transition-colors">{{ t('nav.services') }}</NuxtLinkLocale></li>
                    <li><NuxtLinkLocale to="/case-studies" class="hover:text-gold transition-colors">{{ t('nav.caseStudies') }}</NuxtLinkLocale></li>
                    <li><NuxtLinkLocale to="/blog" class="hover:text-gold transition-colors">{{ t('nav.blog') }}</NuxtLinkLocale></li>
                    <li><NuxtLinkLocale to="/contact" class="hover:text-gold transition-colors">{{ t('nav.contact') }}</NuxtLinkLocale></li>
                </ul>
            </div>
            
            <div>
                <h3 class="text-gold font-serif text-lg mb-6">{{ t('nav.contact') }}</h3>
                <ul class="space-y-3 text-sm font-light">
                    <li>{{ t('nav.location_oaxaca') }}</li>
                    <li>{{ t('common.appointment') }}</li>
                    <li class="pt-4">
                        <a href="tel:9516153010" class="text-lg font-serif hover:text-gold transition-colors">951-615-30-10</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-12 border-t border-cream/10">
            <h3 class="text-gold font-serif text-lg mb-6">{{ t('common.coverage') }}</h3>
            <div class="flex flex-wrap gap-x-6 gap-y-3 text-xs font-light text-cream-dark/80">
                <NuxtLinkLocale v-for="loc in locations" :key="loc.to" :to="loc.to" class="hover:text-gold transition-colors">
                    {{ t(loc.name) }}
                </NuxtLinkLocale>
            </div>
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-cream/10 text-xs font-light text-cream-dark/60 text-center tracking-wider">
            <p>&copy; {{ new Date().getFullYear() }} KARINA OROCIO. {{ t('common.rights') }}</p>
        </div>
    </footer>
</template>
