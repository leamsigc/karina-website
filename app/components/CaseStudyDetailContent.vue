<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

interface Props {
  challenge?: string;
  strategy?: string;
  outcome?: string;
}

withDefaults(defineProps<Props>(), {
  challenge: '',
  strategy: '',
  outcome: ''
})
</script>

<template>
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
    <div
      class="prose prose-lg prose-headings:font-serif prose-headings:text-charcoal prose-p:text-charcoal-light prose-p:font-light prose-p:leading-relaxed max-w-none">
      <div v-if="challenge">
        <slot name="challenge" mdc-unwrap="p">
          <h2 class="text-3xl mt-12 mb-6 border-b border-gold/20 pb-4">El Desafío</h2>
          <p class="text-xl leading-relaxed">{{ challenge }}</p>
        </slot>
      </div>

      <div v-if="strategy">
        <slot name="strategy" mdc-unwrap="p">
          <h2 class="text-3xl mt-16 mb-6 border-b border-gold/20 pb-4">Nuestra Estrategia</h2>
          <p class="text-xl leading-relaxed">{{ strategy }}</p>
        </slot>
      </div>

      <div v-if="outcome">
        <slot name="outcome" mdc-unwrap="p">
          <h2 class="text-3xl mt-16 mb-6 border-b border-gold/20 pb-4">El Resultado</h2>
          <p class="text-xl leading-relaxed">{{ outcome }}</p>
        </slot>
      </div>
    </div>

  </div>
</template>
