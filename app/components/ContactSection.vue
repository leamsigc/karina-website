<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <section class="bg-cream py-24 min-h-[80vh] flex items-center">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h1 class="font-serif text-5xl md:text-6xl mb-6 text-charcoal">{{ t('contact.title') }}<br/><span class="italic text-gold">{{ t('contact.highlight') }}</span></h1>
          <p class="font-light text-charcoal-light text-lg mb-12 leading-relaxed max-w-md">
            {{ t('contact.description') }}
          </p>
          
          <div class="space-y-8">
            <div class="flex items-start space-x-4">
              <span class="text-gold mt-1">📞</span>
              <div>
                <h3 class="text-gold tracking-widest uppercase text-xs font-bold mb-2">{{ t('contact.phone_label') }}</h3>
                <a href="tel:9516153010" class="font-serif text-3xl text-charcoal hover:text-gold transition-colors">951-615-30-10</a>
                <p class="text-sm font-light text-charcoal-light mt-1">{{ t('contact.phone_note') }}</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-4">
              <span class="text-gold mt-1">📍</span>
              <div>
                <h3 class="text-gold tracking-widest uppercase text-xs font-bold mb-2">{{ t('contact.location_label') }}</h3>
                <p class="text-charcoal-light font-light text-lg">{{ t('contact.location') }}</p>
                <p class="text-sm font-light text-charcoal-light mt-1">{{ t('contact.location_note') }}</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <span class="text-gold mt-1">🕐</span>
              <div>
                <h3 class="text-gold tracking-widest uppercase text-xs font-bold mb-2">{{ t('contact.hours_label') }}</h3>
                <p class="text-charcoal-light font-light text-lg">{{ t('contact.hours_weekday') }}</p>
                <p class="text-sm font-light text-charcoal-light mt-1">{{ t('contact.hours_saturday') }}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="bg-charcoal p-10 rounded-sm text-cream shadow-2xl">
          <h3 class="font-serif text-3xl mb-8">{{ t('contact.form_title') }}</h3>
          <form class="space-y-6">
            <div>
              <label class="block text-xs tracking-widest uppercase text-gold mb-2">{{ t('contact.form_name') }}</label>
              <input type="text" class="w-full bg-transparent border-b border-cream/20 py-2 text-cream focus:outline-none focus:border-gold transition-colors" required />
            </div>
            <div>
              <label class="block text-xs tracking-widest uppercase text-gold mb-2">{{ t('contact.form_phone') }}</label>
              <input type="tel" class="w-full bg-transparent border-b border-cream/20 py-2 text-cream focus:outline-none focus:border-gold transition-colors" required />
            </div>
            <div>
              <label class="block text-xs tracking-widest uppercase text-gold mb-2">{{ t('contact.form_interest') }}</label>
              <select class="w-full bg-transparent border-b border-cream/20 py-2 text-cream focus:outline-none focus:border-gold transition-colors appearance-none" required>
                <option value="" class="text-charcoal">{{ t('contact.form_select') }}</option>
                <option value="predial" class="text-charcoal">{{ t('contact.form_predial') }}</option>
                <option value="civil" class="text-charcoal">{{ t('contact.form_civil') }}</option>
                <option value="familiar" class="text-charcoal">{{ t('contact.form_familiar') }}</option>
                <option value="administrativo" class="text-charcoal">{{ t('contact.form_admin') }}</option>
                <option value="otro" class="text-charcoal">{{ t('contact.form_other') }}</option>
              </select>
            </div>
            <div>
              <label class="block text-xs tracking-widest uppercase text-gold mb-2">{{ t('contact.form_message') }}</label>
              <textarea rows="3" class="w-full bg-transparent border-b border-cream/20 py-2 text-cream focus:outline-none focus:border-gold transition-colors resize-none" required></textarea>
            </div>
            <button type="submit" class="w-full bg-gold text-charcoal py-4 text-sm tracking-widest uppercase font-medium hover:bg-cream transition-colors mt-4">
              {{ t('contact.form_submit') }}
            </button>
            <p class="text-xs text-cream-dark/60 text-center mt-4 font-light">
              {{ t('contact.form_privacy') }}
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
