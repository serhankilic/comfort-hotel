// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    modules: [
        [
            '@nuxtjs/google-fonts',
            {
                families: {
                    'Bona+Nova': [400, 700],
                    'Work+Sans': true,
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
    ],
})
