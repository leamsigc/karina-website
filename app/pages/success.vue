<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-navy-950 flex items-center justify-center px-4">
    <div class="max-w-md w-full bg-white dark:bg-navy-900 rounded-lg shadow-lg p-8 text-center">
      <div class="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
        <UIcon name="i-heroicons-check-circle" class="w-12 h-12 text-green-600 dark:text-green-400" />
      </div>
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">{{ t('contact.success_title') }}</h1>
      <p class="text-gray-600 dark:text-gray-300 mb-6">
        {{ t('contact.success_message') }}
      </p>
      <NuxtLink
        :to="localePath('/')"
        class="inline-block bg-navy-900 dark:bg-navy-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-navy-800 dark:hover:bg-navy-700 transition-colors"
      >
        {{ t('contact.success_home') }}
      </NuxtLink>
    </div>
  </div>
</template>
