<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
    <div class="min-h-screen flex flex-col font-sans text-charcoal bg-cream selection:bg-gold selection:text-charcoal">
        <AppHeader />
        <main class="grow case-studies">
            <slot />
            <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
                <div class="mt-20 pt-10 border-t border-gold/20 flex justify-between items-center">
                    <NuxtLinkLocale to="/case-studies"
                        class="inline-flex items-center text-charcoal-light hover:text-gold transition-colors text-sm tracking-widest uppercase font-medium">
                        <span class="mr-2">←</span> {{ t('nav.back_to_case_studies') || 'Ver todos los casos' }}
                    </NuxtLinkLocale>
                </div>
            </div>
        </main>
        <AppFooter />
    </div>
</template>
