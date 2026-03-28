<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

const services = [
  {
    slug: "reduccion-predial-oaxaca",
    title: "Reducción de Predial",
    excerpt: "Defensa contra cobros excesivos de impuesto predial en Oaxaca de Juárez y municipios conurbados mediante juicios de nulidad.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800"
  },
  {
    slug: "derecho-civil-oaxaca",
    title: "Derecho Civil",
    excerpt: "Regularización de propiedades (Usucapión), juicios sucesorios (intestados y testamentarios) y elaboración de contratos de alto rigor.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
  },
  {
    slug: "derecho-familiar-oaxaca",
    title: "Derecho Familiar",
    excerpt: "Resolución estratégica de divorcios incausados, pensiones alimenticias y guarda y custodia ante los Juzgados Familiares del Centro.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800"
  },
  {
    slug: "derecho-administrativo-oaxaca",
    title: "Derecho Administrativo",
    excerpt: "Defensa contra clausuras de negocios, multas de tránsito y actos arbitrarios de autoridades municipales y estatales.",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800"
  }
];
</script>

<template>
  <section class="bg-charcoal text-cream py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 class="font-serif text-5xl md:text-6xl mb-6">Áreas de <span class="italic text-gold">Práctica</span></h1>
      <p class="font-light text-cream-dark max-w-2xl mx-auto text-lg">
        Representación legal de alto nivel enfocada en la protección de su patrimonio y sus derechos fundamentales en el Estado de Oaxaca.
      </p>
    </div>
  </section>
</template>
