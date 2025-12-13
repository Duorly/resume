// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',

    site: {
        url: 'https://nebel.dev',
        name: 'Duorli Nebel — Architecte Logiciel & Chef de Projet',
        description: 'Portfolio de Duorli Nebel, Développeur Full Stack passionné par la création de solutions web performantes, scalables et élégantes. Expertise en Vue.js, Nuxt, Spring Boot, Laravel, et Cloud (AWS, GCP).',
        defaultLocale: 'fr',
    },

    devtools: { enabled: true },
    css: ['~/assets/css/main.css'],
    modules: [
        '@nuxt/content',
        '@nuxt/eslint',
        '@nuxt/image',
        '@nuxt/scripts',
        '@nuxt/ui',
        '@nuxt/test-utils',
        '@nuxtjs/i18n',
        '@nuxtjs/seo',
    ],

    scripts: {
        registry: {
            googleTagManager: true,
            googleAnalytics: true
        }
    },

    runtimeConfig: {
        public: {
            scripts: {
                googleTagManager: {
                    id: process.env.GOOGLE_TAG_MANAGER_ID,
                },
                googleAnalytics: {
                    id: process.env.GOOGLE_ANALYTICS_ID,
                },
            },
        },
    },

    i18n: {
        locales: [
            { code: 'en', language: 'en-US', file: 'en.json' },
            { code: 'fr', language: 'fr-FR', file: 'fr.json' },
        ],
        defaultLocale: 'fr',
    }
})