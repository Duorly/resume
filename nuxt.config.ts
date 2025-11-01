// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: {enabled: true},
    css: ['~/assets/css/main.css'],
    modules: [
      '@nuxt/content',
      '@nuxt/eslint',
      '@nuxt/image',
      '@nuxt/scripts',
      '@nuxt/ui',
      '@nuxt/test-utils',
      '@nuxtjs/i18n'
    ],

    i18n: {
        locales: [
            { code: 'en', language: 'en-US', file: 'en.json' },
            { code: 'fr', language: 'fr-FR', file: 'fr.json' },
        ],
        defaultLocale: 'fr',
    }
})