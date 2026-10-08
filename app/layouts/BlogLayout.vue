<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="min-h-screen flex flex-col font-sans text-charcoal bg-cream selection:bg-gold selection:text-charcoal">
    <AppHeader />
    <main class="grow py-12">
      <UContainer>
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <!-- Main Content -->
          <article class="lg:col-span-8 prose max-w-none prose-headings:font-serif prose-a:text-gold">
            <slot />
          </article>

          <!-- Sidebar -->
          <aside class="lg:col-span-4 space-y-8">
            <div class="bg-white p-6 rounded-sm border border-gold/20 shadow-sm">
              <h3 class="font-serif text-lg font-bold text-charcoal mb-4">{{ t('blog.sidebar.practice_areas') }}</h3>
              <ul class="space-y-3 text-sm font-medium text-charcoal-light">
                <li>
                  <NuxtLinkLocale to="/services" class="hover:text-gold transition-colors flex items-center justify-between">
                    <span>{{ t('blog.sidebar.family_law') }}</span> <span>→</span>
                  </NuxtLinkLocale>
                </li>
                <li>
                  <NuxtLinkLocale to="/services" class="hover:text-gold transition-colors flex items-center justify-between">
                    <span>{{ t('blog.sidebar.civil_law') }}</span> <span>→</span>
                  </NuxtLinkLocale>
                </li>
                <li>
                  <NuxtLinkLocale to="/services" class="hover:text-gold transition-colors flex items-center justify-between">
                    <span>{{ t('blog.sidebar.real_estate') }}</span> <span>→</span>
                  </NuxtLinkLocale>
                </li>
                <li>
                  <NuxtLinkLocale to="/services" class="hover:text-gold transition-colors flex items-center justify-between">
                    <span>{{ t('blog.sidebar.litigation') }}</span> <span>→</span>
                  </NuxtLinkLocale>
                </li>
              </ul>
            </div>

            <div class="bg-charcoal text-cream p-6 rounded-sm shadow-md border border-gold/30">
              <h3 class="font-serif text-xl font-bold mb-2 text-gold">{{ t('blog.sidebar.cta_title') }}</h3>
              <p class="text-sm font-light text-cream-dark mb-6">{{ t('blog.sidebar.cta_description') }}</p>
              <NuxtLinkLocale to="/contact" class="block w-full text-center bg-gold text-charcoal py-3 px-4 text-xs font-bold uppercase tracking-widest hover:bg-cream transition-colors">
                {{ t('blog.sidebar.cta_button') }}
              </NuxtLinkLocale>
            </div>
          </aside>
        </div>
      </UContainer>
    </main>

    <AppFooter />
  </div>
</template>
