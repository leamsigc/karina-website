<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

const status = ref<'IDLE' | 'SENDING' | 'SUCCESS'>('IDLE')
const form = reactive({
  name: '',
  phone: '',
  interest: '',
  message: ''
})

const handleSubmit = async () => {
  status.value = 'SENDING'
  try {
    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        'form-name': 'contact',
        name: form.name,
        phone: form.phone,
        interest: form.interest,
        message: form.message
      })
    })
    if (response.ok) {
      navigateTo(localePath('/success'))
    } else {
      throw new Error('Submission failed')
    }
  } catch (error) {
    console.error('Form submission error:', error)
    status.value = 'IDLE'
  }
}
</script>

<template>
  <section class="bg-cream py-24 min-h-[80vh] flex items-center">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h1 class="font-serif text-5xl md:text-6xl mb-6 text-charcoal">{{ t('contact.title') }}<br /><span
              class="italic text-gold">{{ t('contact.highlight') }}</span></h1>
          <p class="font-light text-charcoal-light text-lg mb-12 leading-relaxed max-w-md">
            {{ t('contact.description') }}
          </p>

          <div class="space-y-8">
            <div class="flex items-start space-x-4">
              <span class="text-gold mt-1">📞</span>
              <div>
                <h3 class="text-gold tracking-widest uppercase text-xs font-bold mb-2">{{ t('contact.phone_label') }}
                </h3>
                <a href="tel:9516153010"
                  class="font-serif text-3xl text-charcoal hover:text-gold transition-colors">951-615-30-10</a>
                <p class="text-sm font-light text-charcoal-light mt-1">{{ t('contact.phone_note') }}</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <span class="text-gold mt-1">📍</span>
              <div>
                <h3 class="text-gold tracking-widest uppercase text-xs font-bold mb-2">{{ t('contact.location_label') }}
                </h3>
                <p class="text-charcoal-light font-light text-lg">{{ t('contact.location') }}</p>
                <p class="text-sm font-light text-charcoal-light mt-1">{{ t('contact.location_note') }}</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <span class="text-gold mt-1">🕐</span>
              <div>
                <h3 class="text-gold tracking-widest uppercase text-xs font-bold mb-2">{{ t('contact.hours_label') }}
                </h3>
                <p class="text-charcoal-light font-light text-lg">{{ t('contact.hours_weekday') }}</p>
                <p class="text-sm font-light text-charcoal-light mt-1">{{ t('contact.hours_saturday') }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-charcoal p-10 rounded-sm text-cream shadow-2xl">
          <div v-if="status === 'SUCCESS'"
            class="h-full flex flex-col items-center justify-center text-center py-10 animate-fade-in">
            <div class="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-charcoal" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 class="font-serif text-3xl mb-4">{{ t('contact.success_title') }}</h3>
            <p class="text-cream-dark mb-8">{{ t('contact.success_message') }}</p>
            <button type="button" @click="status = 'IDLE'"
              class="text-gold font-medium hover:underline uppercase tracking-wide text-sm">
              {{ t('contact.success_button') }}
            </button>
          </div>

          <form v-else @submit.prevent="handleSubmit" class="space-y-6" data-netlify="true" netlify
            data-netlify-honeypot="bot-field" name="contact" action="/success/">
            <input type="hidden" name="form-name" value="contact" />
            <div style="display: none;">
              <label>Don't fill this out if you're human: <input name="bot-field" /></label>
            </div>
            <h3 class="font-serif text-3xl mb-8">{{ t('contact.form_title') }}</h3>
            <div>
              <label class="block text-xs tracking-widest uppercase text-gold mb-2">{{ t('contact.form_name') }}</label>
              <input v-model="form.name" name="name" type="text"
                class="w-full bg-transparent border-b border-cream/20 py-2 text-cream focus:outline-none focus:border-gold transition-colors"
                required />
            </div>
            <div>
              <label class="block text-xs tracking-widest uppercase text-gold mb-2">
                {{ t('contact.form_phone') }}</label>
              <input v-model="form.phone" name="phone" type="tel"
                class="w-full bg-transparent border-b border-cream/20 py-2 text-cream focus:outline-none focus:border-gold transition-colors"
                required />
            </div>
            <div>
              <label class="block text-xs tracking-widest uppercase text-gold mb-2">{{ t('contact.form_interest')
              }}</label>
              <select v-model="form.interest" name="interest"
                class="w-full bg-transparent border-b border-cream/20 py-2 text-cream focus:outline-none focus:border-gold transition-colors appearance-none"
                required>
                <option value="" class="text-charcoal">{{ t('contact.form_select') }}</option>
                <option value="predial" class="text-charcoal">{{ t('contact.form_predial') }}</option>
                <option value="civil" class="text-charcoal">{{ t('contact.form_civil') }}</option>
                <option value="familiar" class="text-charcoal">{{ t('contact.form_familiar') }}</option>
                <option value="administrativo" class="text-charcoal">{{ t('contact.form_admin') }}</option>
                <option value="mercantil" class="text-charcoal">{{ t('contact.form_mercantil') }}</option>
                <option value="municipal" class="text-charcoal">{{ t('contact.form_municipal') }}</option>
                <option value="notarial" class="text-charcoal">{{ t('contact.form_notarial') }}</option>
                <option value="otro" class="text-charcoal">{{ t('contact.form_other') }}</option>
              </select>
            </div>
            <div>
              <label class="block text-xs tracking-widest uppercase text-gold mb-2">{{ t('contact.form_message')
              }}</label>
              <textarea v-model="form.message" name="message" rows="3"
                class="w-full bg-transparent border-b border-cream/20 py-2 text-cream focus:outline-none focus:border-gold transition-colors resize-none"
                required></textarea>
            </div>
            <button type="submit" :disabled="status === 'SENDING'"
              class="w-full bg-gold text-charcoal py-4 text-sm tracking-widest uppercase font-medium hover:bg-cream transition-colors mt-4 disabled:opacity-50 disabled:cursor-not-allowed">
              {{ status === 'SENDING' ? t('contact.form_sending') : t('contact.form_submit') }}
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
