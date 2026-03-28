<script setup lang="ts">
interface Props {
    title: string
    subtitle?: string
}

withDefaults(defineProps<Props>(), {
    title: '',
    subtitle: ''
})
</script>

<template>
    <section class="bg-charcoal text-cream py-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 class=" text-font-serif5xl md:text-6xl mb-6">
                <slot name="title" mdc-unwrap="span"> {{ title }} </slot>
            </h1>
            <p v-if="subtitle" class="font-light text-xl text-cream-dark">
                <slot name="subtitle" mdc-unwrap="p"> {{ subtitle }} </slot>
            </p>
        </div>
    </section>
</template>
