<script setup lang="ts">
const localePath = useLocalePath()
const { t, locale, setLocale } = useI18n()

const links = computed(() => [
    { label: t('nav.home'), to: '/', icon: 'i-heroicons-home' },
    { label: t('nav.services'), to: '/services' },
    { label: t('nav.caseStudies'), to: '/case-studies' },
    { label: t('nav.blog'), to: '/blog' },
    { label: t('nav.contact'), to: '/contact' }
])

const toggleLanguage = (lang: 'en' | 'es') => {
    setLocale(lang)
}
</script>

<template>
    <header class="bg-cream border-b border-gold/20 sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-24">
                <NuxtLinkLocale to="/" class="flex items-center space-x-4 group">
                    <div class="border border-charcoal p-2 flex items-center justify-center w-12 h-12 group-hover:bg-charcoal transition-colors duration-300">
                        <span class="text-charcoal font-serif text-xl group-hover:text-cream transition-colors duration-300">KO</span>
                    </div>
                    <div>
                        <h1 class="text-xl font-serif tracking-widest uppercase text-charcoal">Karina Orocio</h1>
                        <p class="text-[10px] text-gold tracking-[0.2em] uppercase">{{ t('common.title') }}</p>
                    </div>
                </NuxtLinkLocale>
                
                <nav class="hidden md:flex space-x-10 items-center">
                    <NuxtLinkLocale v-for="link in links" :key="link.to" :to="link.to"
                        class="text-xs tracking-widest uppercase font-medium hover:text-gold transition-colors"
                        active-class="text-gold">
                        {{ link.label }}
                    </NuxtLinkLocale>
                    <NuxtLinkLocale to="/contact"
                        class="bg-charcoal text-cream px-6 py-3 text-xs tracking-widest uppercase font-medium hover:bg-gold hover:text-charcoal transition-colors duration-300">
                        {{ t('nav.cta') }}
                    </NuxtLinkLocale>
                </nav>

                <div class="flex items-center gap-2">
                    <SwitchLocalePathLink locale="es" 
                        :class="['text-xs tracking-widest uppercase font-medium transition-colors', locale === 'es' ? 'text-gold' : 'text-charcoal hover:text-gold']"
                        @click="toggleLanguage('es')">
                        ES
                    </SwitchLocalePathLink>
                    <span class="text-gold">|</span>
                    <SwitchLocalePathLink locale="en" 
                        :class="['text-xs tracking-widest uppercase font-medium transition-colors', locale === 'en' ? 'text-gold' : 'text-charcoal hover:text-gold']"
                        @click="toggleLanguage('en')">
                        EN
                    </SwitchLocalePathLink>
                </div>
            </div>
        </div>
    </header>
</template>
