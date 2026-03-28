<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

const services = [
  {
    slug: "reduccion-predial-oaxaca",
    title: "Reducción de Predial",
    excerpt: "Defensa contra cobros excesivos de impuesto predial en Oaxaca de Juárez y municipios conurbados mediante juicios de nulidad.",
    image: "/img/one.jpeg"
  },
  {
    slug: "derecho-civil-oaxaca",
    title: "Derecho Civil",
    excerpt: "Regularización de propiedades (Usucapión), juicios sucesorios (intestados y testamentarios) y elaboración de contratos de alto rigor.",
    image: "/img/two.jpeg"
  },
  {
    slug: "derecho-familiar-oaxaca",
    title: "Derecho Familiar",
    excerpt: "Resolución estratégica de divorcios incausados, pensiones alimenticias y guarda y custodia ante los Juzgados Familiares del Centro.",
    image: "/img/tres.jpeg"
  },
  {
    slug: "derecho-administrativo-oaxaca",
    title: "Derecho Administrativo",
    excerpt: "Defensa contra clausuras de negocios, multas de tránsito y actos arbitrarios de autoridades municipales y estatales.",
    image: "/img/layer-services-1.jpg"
  }
];
</script>

<template>
  <section class="bg-charcoal text-cream py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 class="font-serif text-5xl md:text-6xl mb-6">Áreas de <span class="italic text-gold">Práctica</span></h1>
      <p class="font-light text-cream-dark max-w-2xl mx-auto text-lg">
        Representación legal de alto nivel enfocada en la protección de su patrimonio y sus derechos fundamentales en el
        Estado de Oaxaca.
      </p>
    </div>
  </section>
</template>
