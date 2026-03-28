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
  },
  {
    slug: "derecho-mercantil-oaxaca",
    title: "Derecho Mercantil",
    excerpt: "Juicios orales mercantiles, recuperación de cartera, pagarés, facturas, cargos no reconocidos y defensa en procedimientos de amparo.",
    image: "/img/layer-accounting.jpg"
  },
  {
    slug: "tramites-municipales-oaxaca",
    title: "Trámites Municipales",
    excerpt: "Obtención de número oficial, alineamiento, ajuste de pago predial y traslado de dominio en cualquier municipio de Oaxaca.",
    image: "/img/layer-office-building.jpg"
  },
  {
    slug: "gestoria-notarial-oaxaca",
    title: "Gestoría Notarial",
    excerpt: "Asesoría y gestión en trámites notariales, testamentos, contratos y regularización de documentos ante el Registro Civil.",
    image: "/img/layer-meeting.jpg"
  }
];
</script>

<template>
  <section class="py-24 bg-cream">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div v-for="(service, index) in services" :key="service.slug"
        :class="`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`">
        <div
          :class="index % 2 !== 0 ? 'order-2 lg:order-1 bg-cream-dark aspect-square rounded-sm overflow-hidden' : 'bg-cream-dark aspect-square rounded-sm overflow-hidden order-2'">
          <NuxtImg :src="service.image" :alt="service.title"
            class="w-full h-full object-cover mix-blend-multiply opacity-80" />
        </div>
        <div :class="index % 2 !== 0 ? 'order-1 lg:order-2 lg:pl-12' : 'order-1'">
          <span class="text-gold tracking-widest uppercase text-xs font-bold mb-4 block">0{{ index + 1 }}. {{
            service.title }}</span>
          <h2 class="font-serif text-4xl text-charcoal mb-6">
            <NuxtLinkLocale :to="`/services/${service.slug}`" class="hover:text-gold transition-colors">{{ service.title
              }}</NuxtLinkLocale>
          </h2>
          <p class="text-charcoal-light font-light text-lg mb-8 leading-relaxed">
            {{ service.excerpt }}
          </p>
          <NuxtLinkLocale :to="`/services/${service.slug}`"
            class="text-charcoal font-medium text-sm tracking-widest uppercase hover:text-gold transition-colors flex items-center space-x-2">
            <span>Ver Detalles del Servicio</span> <span>→</span>
          </NuxtLinkLocale>
        </div>
      </div>
    </div>
  </section>
</template>
