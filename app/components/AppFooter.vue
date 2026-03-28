<script setup lang="ts">
/**
 *
 * Component Description: Global footer with company information and navigation links.
 *
 * @author Karina Orocia Abogada Postulante <karina@abogadaoaxaca.com>
 * @version 0.0.1
 *
 * @todo [ ] Test the component
 * @todo [ ] Integration test.
 * @todo [✔] Update the typescript.
 */
const { t } = useI18n()
const { preference } = useColorMode()
</script>

<template>
    <footer class="bg-navy-900 text-white py-12 border-t border-gold-500">
        <UContainer>
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <div class="flex items-center gap-2 mb-4">
                        <NuxtImg src="/img/logoTransparent.png" alt="Karina Orocia Abogada Logo" class="w-24 h-16" />
                    </div>
                    <p class="text-gray-400 text-sm leading-relaxed mb-4">
                        {{ t('common.licensed_insured') }}
                    </p>
                    <div class="text-gray-400 text-sm">
                        <p>Oaxaca de Juárez, Oaxaca, México</p>
                        <p class="mt-2 text-gold-400 font-bold">951-615-30-10</p>
                    </div>
                    <!-- Social Links -->
                    <div class="flex items-center gap-2 mt-4">
                        <UButton icon="logos:facebook" variant="ghost" size="sm" color="neutral" title="Facebook"
                            to="#" />
                        <UButton icon="logos:whatsapp" variant="ghost" size="sm" color="success"
                            to="https://wa.me/9516153010" title="WhatsApp" />
                    </div>
                </div>

                <!-- Services Links (Placeholder) -->
                <div>
                    <h4 class="font-oswald font-bold text-lg mb-4 text-white uppercase">{{ t('nav.services') }}</h4>
                    <ul class="space-y-2 text-sm text-gray-400">
                        <li>
                            <NuxtLinkLocale to="/services" class="hover:text-gold-500">
                                Revisión de Avalúos
                            </NuxtLinkLocale>
                        </li>
                        <li>
                            <NuxtLinkLocale to="/services" class="hover:text-gold-500">
                                Reducción de Predial
                            </NuxtLinkLocale>
                        </li>
                        <li>
                            <NuxtLinkLocale to="/services" class="hover:text-gold-500">
                                Regularización
                            </NuxtLinkLocale>
                        </li>
                    </ul>
                </div>

                <!-- Quick Links -->
                <div>
                    <h4 class="font-oswald font-bold text-lg mb-4 text-white uppercase">Links</h4>
                    <ul class="space-y-2 text-sm text-gray-400">
                        <li>
                            <NuxtLinkLocale to="/about" class="hover:text-gold-500">
                                {{ t('nav.about') }}
                            </NuxtLinkLocale>
                        </li>
                        <li>
                            <NuxtLinkLocale to="/contact" class="hover:text-gold-500">
                                {{ t('nav.contact') }}
                            </NuxtLinkLocale>
                        </li>
                    </ul>
                </div>
            </div>
            <div
                class="mt-12 pt-8 border-t border-navy-800 text-center text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center">
                <span>&copy; {{ new Date().getFullYear() }} Karina Orocia - Abogada Postulante.</span>
                <span class="mt-2 md:mt-0">Oaxaca, México</span>
            </div>
        </UContainer>
    </footer>
</template>
