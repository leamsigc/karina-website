<script lang="ts" setup>
/**
 * Blog layout wrapper.
 *
 * @author Ismael Garcia <leamsigc@leamsigc.com>
 * @version 0.0.1
 */
</script>

<template>
  <div class="min-h-screen flex flex-col font-sans text-charcoal bg-cream selection:bg-gold selection:text-charcoal">
    <AppHeader />
    <main class="grow py-12">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
