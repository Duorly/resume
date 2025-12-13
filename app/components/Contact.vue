<script setup lang="ts">
const { t } = useI18n()

const contacts = computed(() => [
  {
    label: t('contact.email'),
    value: 'contact@nebel.dev',
    link: 'mailto:contact@nebel.dev',
    icon: 'lucide:mail',
    external: false,
    masked: false
  },
  {
    label: t('contact.appointment'),
    value: 'Google Calendar',
    link: 'https://calendar.app.google/6hGWYNKqyGVmuuVM9',
    icon: 'lucide:calendar-clock',
    external: true,
    masked: false
  },
  {
    label: t('contact.github'),
    value: '@Duorly',
    link: 'https://github.com/Duorly',
    icon: 'lucide:github',
    external: true,
    masked: false
  }
]);
</script>

<template>
  <section id="menu_contact" class="py-20 px-4">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
        {{ $t('work_together') }}
      </h2>

      <p class="text-xl text-slate-600 dark:text-slate-300 mb-12 leading-relaxed">
        {{ $t('contact.description') }}
      </p>

      <div class="grid md:grid-cols-3 gap-6 mb-12">
        <a
            v-for="contact in contacts"
            :key="contact.label"
            :href="contact.link"
            :target="contact.external ? '_blank' : undefined"
            :rel="contact.external ? 'noopener noreferrer' : undefined"
            class="block"
        >
          <UiSpotlightCard
              class-name="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/50 hover:border-cyan-400/50 dark:hover:border-cyan-500/50 shadow-lg dark:shadow-none transition-colors duration-300"
              spotlight-color="rgba(6, 182, 212, 0.15)"
          >
            <div class="flex flex-col items-center p-2 group">
              <UIcon
                  class="mb-4 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform"
                  :name="contact.icon"
                  size="28"
              />

              <p class="text-sm text-slate-600 dark:text-slate-400 mb-2">{{ contact.label }}</p>
              <p
                  class="text-slate-900 dark:text-white font-semibold flex items-center justify-center gap-2"
              >
                <UiReveal 
                  v-if="contact.masked" 
                  :text="contact.value" 
                />
                <span v-else>{{ contact.value }}</span>
                <UIcon v-if="contact.external" name="mi:external-link" size="22"/>
              </p>
            </div>
          </UiSpotlightCard>
        </a>
      </div>
    </div>
  </section>
</template>