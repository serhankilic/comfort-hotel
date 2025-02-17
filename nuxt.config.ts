// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    plugins: [{ src: '~/plugins/aos', mode: 'client' }],
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    modules: [
        [
            '@nuxtjs/google-fonts',
            {
                families: {
                    'Bona+Nova': [300, 400, 500, 700],
                    'Work+Sans': [300, 400, 500, 600, 700],
                    Inter: [400, 700],
                    'Josefin+Sans': true,
                    Lato: [100, 300],
                    Raleway: {
                        wght: [100, 400],
                        ital: [100],
                    },
                },
            },
        ],
        '@nuxt/icon',
        '@nuxtjs/tailwindcss',
        '@vueuse/nuxt',
        '@pinia/nuxt',
    ],
})
