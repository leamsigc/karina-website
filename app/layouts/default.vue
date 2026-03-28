<script setup lang="ts">
</script>

<template>
    <div class="min-h-screen flex flex-col font-sans text-charcoal bg-cream selection:bg-gold selection:text-charcoal">
        <AppHeader />
        <main class="grow default-layout">
            <slot />
        </main>
        <AppFooter />
    </div>
</template>
