<script setup lang="ts">
const { t } = useI18n()

const education = computed(() => [
  {
    degree: t('education.master.degree'),
    school: 'ITIC Paris',
    level: t('education.master.level'),
    period: '2024 - 2026'
  },
  {
    degree: t('education.bachelor.degree'),
    school: 'OpenClassrooms',
    level: t('education.bachelor.level'),
    period: '2022 - 2023'
  },
  {
    degree: t('education.license.degree'),
    school: 'Université Marien Ngouabi',
    level: t('education.license.level'),
    period: '2018 - 2021'
  }
]);
</script>

<template>
  <section id="menu_education" class="py-20 px-4 bg-gray-100 dark:bg-slate-900/50 transition-colors duration-300">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl font-bold mb-12 text-center bg-linear-to-r from-cyan-500 to-blue-500 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
        {{ $t('education_title') }}
      </h2>

      <div class="grid md:grid-cols-3 gap-6">
        <UiSpotlightCard
            v-for="(edu, index) in education"
            :key="index"
            class-name="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/50 hover:border-cyan-400/50 dark:hover:border-cyan-500/50 shadow-lg dark:shadow-none transition-colors duration-300"
            spotlight-color="rgba(255, 255, 255, 0.25)">
          <svg class="text-cyan-500 dark:text-cyan-400 mb-4 w-8 h-8" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M12 14l9-5-9-5-9 5 9 5z"/>
            <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
            <path
                stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
          </svg>
          <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">{{ edu.degree }}</h3>
          <p class="text-cyan-600 dark:text-cyan-400 font-semibold mb-2">{{ edu.school }}</p>
          <p class="text-slate-600 dark:text-slate-400 text-sm mb-2">{{ edu.level }}</p>
          <p class="text-slate-500 dark:text-slate-500 text-sm">{{ edu.period }}</p>
        </UiSpotlightCard>
      </div>
    </div>
  </section>
</template>