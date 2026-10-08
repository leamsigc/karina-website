<i18n src="./BlogOgImage.json"></i18n>
<script lang="ts" setup>
/**
 * OG image component for blog and content pages.
 *
 * @author Ismael Garcia <leamsigc@leamsigc.com>
 * @version 0.0.2
 */

const props = withDefaults(defineProps<{ title?: string, description?: string, headline?: string, imageUrl?: string, image?: string }>(), {
  title: 'title',
  description: 'description',
  imageUrl: '/img/HomeHeroBg.png',
  image: undefined,
  headline: 'headline'
});

const titleTrim = computed(() => (props.title || 'title').slice(0, 60))
const descriptionTrim = computed(() => (props.description || 'description').slice(0, 140))
</script>

<template>
  <div class="w-full h-full flex items-center justify-between bg-[#1A1A1A] px-[80px]">
    <div class="w-[600px]">
      <p v-if="props.headline" class="uppercase text-[24px] text-[#C5A880] mb-4 font-semibold">
        {{ props.headline }}
      </p>
      <h1 class="m-0 text-[64px] font-semibold mb-4 text-white leading-tight">
        {{ titleTrim }}
      </h1>
      <p class="text-[28px] text-[#E4E4E7] leading-snug">
        {{ descriptionTrim }}
      </p>
    </div>
    <img :src="props.imageUrl" :alt="props.title" width="440" height="440" class="object-cover rounded-sm">
  </div>
</template>