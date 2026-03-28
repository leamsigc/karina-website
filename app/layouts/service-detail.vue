<script setup lang="ts">
import type { Collections } from '@nuxt/content'
import { withLeadingSlash, withoutTrailingSlash } from 'ufo'

const route = useRoute()
const { locale } = useI18n()

const slug = computed(() => withLeadingSlash(String(route.params.slug)))

const collection = (`content_${locale.value}`) as keyof Collections
const { data } = await useAsyncData(`hero-${locale.value}-${route.path}-service-hero`, async () => {
    const path = route.path.includes('services') ? route.path : `${withoutTrailingSlash(route.path)}`
    let content = await queryCollection(collection).path(`${path}`).select('title', 'description', 'image', 'subtitle').first()
    if (!content && locale.value !== 'es') {
        const defaultCollection = (`content_es`) as keyof Collections
        content = await queryCollection(defaultCollection).path(`${path}`).select('title', 'description', 'image', 'subtitle').first()
    }
    return content
})
</script>

<template>
    <div class="min-h-screen flex flex-col font-sans text-charcoal bg-cream selection:bg-gold selection:text-charcoal">
        <AppHeader />
        <main class="grow service-detail">
            <!-- Service Hero -->
            <!-- <section v-if="data" class="relative h-[60vh] min-h-125 flex items-center justify-center">
                <div class="absolute inset-0">
                    <img v-if="data.image" :src="data.image" :alt="data.title" class="w-full h-full object-cover" />
                    <div class="absolute inset-0 bg-charcoal/80 mix-blend-multiply"></div>
                </div>

                <div class="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
                    <span class="text-gold tracking-widest uppercase text-xs font-bold mb-4 block">
                        Área de Práctica
                    </span>
                    <h1 class="font-serif text-5xl md:text-6xl text-cream mb-6 leading-tight">
                        {{ data.title }}
                    </h1>
                    <p v-if="data.subtitle" class="text-cream-dark text-xl font-light max-w-2xl mx-auto">
                        {{ data.subtitle }}
                    </p>
                </div>
            </section> -->

            <slot />
            <ServiceDetailCta />
        </main>
        <AppFooter />
    </div>
</template>
