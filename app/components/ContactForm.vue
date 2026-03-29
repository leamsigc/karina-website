<script setup lang="ts">
/**
 *
 * Component Description: Contact form with validation and success state.
 *
 * @author Karina Orocia Abogada Postulante <karina@abogada-karina-oaxaca.com>
 * @version 0.0.1
 *
 * @todo [ ] Test the component
 * @todo [ ] Integration test.
 * @todo [✔] Update the typescript.
 */
const { t, locale } = useI18n()
const status = ref<'IDLE' | 'SENDING' | 'SUCCESS'>('IDLE')
const form = reactive({
    name: '',
    email: '',
    interest: '',
    message: ''
})

const interestOptions = computed(() => {
    if (locale.value === 'es') {
        return [
            { value: '', label: 'Selecciona un área de interés' },
            { value: 'reduccion-predial', label: 'Reducción de Predial' },
            { value: 'derecho-civil', label: 'Derecho Civil' },
            { value: 'derecho-familiar', label: 'Derecho Familiar' },
            { value: 'derecho-mercantil', label: 'Derecho Mercantil' },
            { value: 'derecho-administrativo', label: 'Derecho Administrativo' },
            { value: 'tramites-municipales', label: 'Trámites Municipales' },
            { value: 'gestoria-notarial', label: 'Gestoría Notarial' },
            { value: 'otro', label: 'Otro' }
        ]
    }
    return [
        { value: '', label: 'Select an area of interest' },
        { value: 'reduccion-predial', label: 'Property Tax Reduction' },
        { value: 'derecho-civil', label: 'Civil Law' },
        { value: 'derecho-familiar', label: 'Family Law' },
        { value: 'derecho-mercantil', label: 'Commercial Law' },
        { value: 'derecho-administrativo', label: 'Administrative Law' },
        { value: 'tramites-municipales', label: 'Municipal Procedures' },
        { value: 'gestoria-notarial', label: 'Notarial Services' },
        { value: 'otro', label: 'Other' }
    ]
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
                email: form.email,
                interest: form.interest,
                message: form.message
            })
        })
        if (response.ok) {
            navigateTo('/success')
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
    <div class="bg-white dark:bg-navy-800 p-8 md:p-12 h-full">
        <div v-if="status === 'SUCCESS'"
            class="h-full flex flex-col items-center justify-center text-center py-10 animate-fade-in">
            <div
                class="w-24 h-24 bg-gold-100 dark:bg-gold-900/30 text-gold-600 dark:text-gold-400 rounded-full flex items-center justify-center mb-6 border-4 border-gold-500">
                <UIcon name="i-heroicons-paper-airplane" class="w-12 h-12" />
            </div>
            <h3 class="text-3xl font-bold text-navy-900 dark:text-white mb-2">Message Sent</h3>
            <p class="text-gray-600 dark:text-gray-300 text-lg mb-8">Thank you! We will be in touch shortly.</p>
            <button type="button" @click="status = 'IDLE'"
                class="text-navy-700 dark:text-navy-400 font-bold hover:underline text-lg uppercase tracking-wide">
                Send another
            </button>
        </div>

        <form v-else @submit.prevent="handleSubmit" class="space-y-6" data-netlify="true" netlify
            data-netlify-honeypot="bot-field" name="contact" action="/success/">
            <input type="hidden" name="form-name" value="contact" />
            <div style="display: none;">
                <label>Don't fill this out if you're human: <input name="bot-field" /></label>
            </div>
            <h3 class="text-3xl font-display font-black text-navy-900 dark:text-white mb-10 uppercase">{{
                t('common.cta_quote') }}</h3>

            <div>
                <label
                    class="block text-sm font-bold text-gray-600 dark:text-gray-400 mb-2 uppercase tracking-wider">Name</label>
                <input v-model="form.name" name="name" required type="text"
                    class="w-full px-5 py-4 rounded-sm bg-gray-50 dark:bg-navy-900 border-2 border-gray-200 dark:border-navy-700 focus:border-gold-500 focus:outline-none transition-colors text-lg text-navy-900 dark:text-white placeholder-gray-400"
                    placeholder="John Doe" />
            </div>

            <div>
                <label
                    class="block text-sm font-bold text-gray-600 dark:text-gray-400 mb-2 uppercase tracking-wider">E-Mail</label>
                <input v-model="form.email" name="email" required type="email"
                    class="w-full px-5 py-4 rounded-sm bg-gray-50 dark:bg-navy-900 border-2 border-gray-200 dark:border-navy-700 focus:border-gold-500 focus:outline-none transition-colors text-lg text-navy-900 dark:text-white placeholder-gray-400"
                    placeholder="name@example.com" />
            </div>

            <div>
                <label class="block text-sm font-bold text-gray-600 dark:text-gray-400 mb-2 uppercase tracking-wider">{{
                    locale === 'es' ? 'Área de Interés' : 'Area of Interest' }}</label>
                <select v-model="form.interest" name="interest" required
                    class="w-full px-5 py-4 rounded-sm bg-gray-50 dark:bg-navy-900 border-2 border-gray-200 dark:border-navy-700 focus:border-gold-500 focus:outline-none transition-colors text-lg text-navy-900 dark:text-white">
                    <option v-for="option in interestOptions" :key="option.value" :value="option.value">
                        {{ option.label }}
                    </option>
                </select>
            </div>

            <div>
                <label
                    class="block text-sm font-bold text-gray-600 dark:text-gray-400 mb-2 uppercase tracking-wider">Message</label>
                <textarea v-model="form.message" name="message" required rows="5"
                    class="w-full px-5 py-4 rounded-sm bg-gray-50 dark:bg-navy-900 border-2 border-gray-200 dark:border-navy-700 focus:border-gold-500 focus:outline-none transition-colors text-lg text-navy-900 dark:text-white placeholder-gray-400 resize-none"
                    :placeholder="locale === 'es' ? '¿En qué puedo ayudarte?' : 'How can I help you?'"></textarea>
            </div>

            <UButton type="submit" :loading="status === 'SENDING'" block size="xl" color="primary" variant="solid"
                class="font-display font-bold uppercase tracking-widest text-navy-900">
                {{ t('common.cta_call') }} Request
            </UButton>
        </form>
    </div>
</template>
