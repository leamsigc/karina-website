<script setup lang="ts">
/**
 *
 * Component Description: Checklist section highlighting company standards.
 *
 * @author Karina Orocia Abogada Postulante <karina@abogada-karina-oaxaca.com>
 * @version 0.0.1
 *
 * @todo [ ] Test the component
 * @todo [ ] Integration test.
 * @todo [✔] Update the typescript.
 */
interface ChecklistItem {
    title: string;
    desc: string;
}

interface Props {
    list?: ChecklistItem[];
}

const props = withDefaults(defineProps<Props>(), {
    list: () => [
        { title: "Primera Asesoría Gratis", desc: "Sin compromiso. Evaluamos tu caso sin costo." },
        { title: "Especialista en Predial", desc: "Conocimiento profundo del sistema catastral de Oaxaca." },
        { title: "Atención Personalizada", desc: "Cada caso es único y merece atención individual." },
        { title: "Resultados Reales", desc: "Compromiso con soluciones efectivas y verificables." },
        { title: "Trayectoria en Oaxaca", desc: "Conocimiento de las leyes y procesos locales." },
        { title: "Transparencia Total", desc: "Sin costos ocultos. Te informamos en cada paso." }
    ]
})
</script>

<template>
    <section class="py-24 bg-concrete-50 dark:bg-navy-900 text-white relative border-y border-navy-800">
        <div class="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row gap-20">

            <div class="lg:w-1/2">
                <div class="sticky top-32">
                    <h2
                        class="text-4xl md:text-6xl font-display font-bold mb-8 text-gray-600 dark:text-white uppercase leading-none">
                        <slot name="title" mdc-unwrap="p">
                            Nuestro <br />
                            <span class="text-gold-500">Compromiso</span>
                        </slot>
                    </h2>
                    <p class="text-xl text-gray-400 mb-10 leading-relaxed">
                        <slot name="description" mdc-unwrap="p">
                            No solo cumplimos con los estándares; los superamos. Nuestro compromiso es contigo y tu
                            propiedad.
                        </slot>
                    </p>

                    <div class="p-8 bg-navy-900 border border-navy-800 rounded-sm relative shadow-hard-sm">
                        <div class="absolute -left-1 top-8 h-12 w-1 bg-gold-500"></div>
                        <blockquote class="text-2xl font-display italic text-gray-200">
                            <slot name="quote" mdc-unwrap="p">
                                "La primera asesoría es totalmente gratis. Te ayudo a reducir tu predial de manera
                                legal."
                            </slot>
                        </blockquote>
                    </div>
                </div>
            </div>

            <div class="lg:w-1/2">
                <div class="space-y-6">
                    <div v-for="(item, idx) in list" :key="idx" class="flex gap-6 group">
                        <div class="flex flex-col items-center">
                            <div
                                class="w-12 h-12 bg-navy-800 border border-navy-700 text-teal-500 rounded-sm flex items-center justify-center font-bold text-xl group-hover:bg-gold-500 group-hover:text-navy-900 group-hover:border-gold-500 transition-all shadow-hard">
                                {{ idx + 1 }}
                            </div>
                            <div v-if="idx !== 5" class="w-px h-full bg-navy-800 my-2 group-hover:bg-navy-700"></div>
                        </div>
                        <div class="pb-8">
                            <h3
                                class="text-2xl font-display font-bold text-gray-600 dark:text-white mb-2 group-hover:text-gold-500 transition-colors">
                                {{ item.title }}
                            </h3>
                            <p class="text-gray-400 leading-relaxed">{{ item.desc }}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>
