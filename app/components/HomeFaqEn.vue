<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <section class="py-24 bg-cream">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="font-serif text-4xl text-charcoal mb-4">Frequently <span class="italic text-gold">Asked Questions</span></h2>
        <p class="font-light text-charcoal-light text-lg">
          Clear answers to the most common legal questions in Oaxaca.
        </p>
      </div>

      <div class="space-y-8">
        <div class="border-b border-gold/30 pb-6">
          <h3 class="font-serif text-2xl text-charcoal mb-3">Is it possible to reduce property tax payments in Oaxaca de Juárez?</h3>
          <p class="font-light text-charcoal-light leading-relaxed">
            Yes. If the charge shows disproportionate increases or is based on erroneous cadastral valuations, it is possible to file an Administrative Appeal or a Nullification Lawsuit before the Administrative Justice Court of the State of Oaxaca to pay what's fair.
          </p>
        </div>
        <div class="border-b border-gold/30 pb-6">
          <h3 class="font-serif text-2xl text-charcoal mb-3">How long does an intestate succession proceeding take in Oaxaca?</h3>
          <p class="font-light text-charcoal-light leading-relaxed">
            Time varies depending on whether there is agreement among heirs. If there is no controversy, the process before the Civil or Family Courts of the Judicial District of Centro can take between 6 and 12 months until the adjudication of assets.
          </p>
        </div>
        <div class="border-b border-gold/30 pb-6">
          <h3 class="font-serif text-2xl text-charcoal mb-3">What do I need for a no-fault (express) divorce in Oaxaca?</h3>
          <p class="font-light text-charcoal-light leading-relaxed">
            It only requires the will of one spouse, marriage certificate, birth certificates of children (if any), and a proposed agreement regulating child support, custody, and liquidation of the conjugal partnership.
          </p>
        </div>
        <div class="border-b border-gold/30 pb-6">
          <h3 class="font-serif text-2xl text-charcoal mb-3">How can I recover my property if the tenant doesn't pay rent in Oaxaca?</h3>
          <p class="font-light text-charcoal-light leading-relaxed">
            Through a Special Eviction Lawsuit. If the tenant owes two or more months, we can initiate this legal process to require payment, seize assets if necessary, and finally achieve the eviction to recover your property.
          </p>
        </div>
        <div class="border-b border-gold/30 pb-6">
          <h3 class="font-serif text-2xl text-charcoal mb-3">What do I do if my business is unfairly closed in Oaxaca?</h3>
          <p class="font-light text-charcoal-light leading-relaxed">
            If the closure by municipal or state authorities was arbitrary, without a founded order or without respecting your right to a hearing, we can file an Indirect Amparo Lawsuit requesting the suspension of the act to reopen your business while the lawsuit is resolved.
          </p>
        </div>
        <div class="border-b border-gold/30 pb-6">
          <h3 class="font-serif text-2xl text-charcoal mb-3">Do you offer free consultations?</h3>
          <p class="font-light text-charcoal-light leading-relaxed">
            Yes, the first consultation to evaluate your case is completely free. We analyze your documents and present the legal viability and strategy to follow without commitment at our offices in Oaxaca.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
