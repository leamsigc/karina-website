<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <section class="py-24 bg-cream">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="font-serif text-4xl text-charcoal mb-4">Preguntas <span class="italic text-gold">Frecuentes</span></h2>
        <p class="font-light text-charcoal-light text-lg">
          Respuestas claras a las dudas legales más comunes en Oaxaca.
        </p>
      </div>

      <div class="space-y-8">
        <div class="border-b border-gold/30 pb-6">
          <h3 class="font-serif text-2xl text-charcoal mb-3">{{ t('home.faq.question_location') }}</h3>
          <p class="font-light text-charcoal-light leading-relaxed">
            {{ t('home.faq.answer_location') }}
          </p>
        </div>
        <div class="border-b border-gold/30 pb-6">
          <h3 class="font-serif text-2xl text-charcoal mb-3">{{ t('home.faq.question_costs') }}</h3>
          <p class="font-light text-charcoal-light leading-relaxed">
            {{ t('home.faq.answer_costs') }}
          </p>
        </div>
        <div class="border-b border-gold/30 pb-6">
          <h3 class="font-serif text-2xl text-charcoal mb-3">{{ t('home.faq.question_abroad') }}</h3>
          <p class="font-light text-charcoal-light leading-relaxed">
            {{ t('home.faq.answer_abroad') }}
          </p>
        </div>
        <div class="border-b border-gold/30 pb-6">
          <h3 class="font-serif text-2xl text-charcoal mb-3">¿Es posible reducir el pago del impuesto predial en Oaxaca de Juárez?</h3>
          <p class="font-light text-charcoal-light leading-relaxed">
            Sí. Si el cobro presenta incrementos desproporcionados o se basa en valuaciones catastrales erróneas, es posible interponer un Recurso Administrativo o un Juicio de Nulidad ante el Tribunal de Justicia Administrativa del Estado de Oaxaca para pagar lo justo.
          </p>
        </div>
        <div class="border-b border-gold/30 pb-6">
          <h3 class="font-serif text-2xl text-charcoal mb-3">¿Cuánto tiempo tarda un juicio sucesorio intestamentario en Oaxaca?</h3>
          <p class="font-light text-charcoal-light leading-relaxed">
            El tiempo varía dependiendo de si hay acuerdo entre los herederos. Si no hay controversia, el proceso ante los Juzgados Civiles o Familiares del Distrito Judicial del Centro puede tomar entre 6 y 12 meses hasta la adjudicación de los bienes.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
