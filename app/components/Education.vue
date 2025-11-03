<script setup lang="ts">
const education = [
  {
    degree: 'Mastère Expert Lead Développeur Fullstack',
    school: 'ITIC Paris',
    level: 'Titre RNCP de niveau 7 (BAC +5)',
    period: '2024 - 2026'
  },
  {
    degree: 'Bachelor Développeur Concepteur d\'Application',
    school: 'OpenClassrooms',
    level: 'Titre RNCP niveau 6 (BAC +3/4)',
    period: '2022 - 2023'
  },
  {
    degree: 'Licence en Informatique',
    school: 'Université Marien Ngouabi',
    level: 'BAC +3',
    period: '2018 - 2021'
  }
];
</script>

<template>
  <section id="menu_education" class="py-20 px-4">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
        {{ $t('education_title') }}
      </h2>

      <div class="grid md:grid-cols-3 gap-6">
        <UiSpotlightCard
            v-for="(edu, index) in education"
            :key="index"
            class-name="border border-slate-700/50 hover:border-cyan-500/50"
            spotlight-color="rgba(255, 255, 255, 0.25)">
          <svg class="text-cyan-400 mb-4 w-8 h-8" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M12 14l9-5-9-5-9 5 9 5z"/>
            <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
            <path
                stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
          </svg>
          <h3 class="text-xl font-bold text-white mb-2">{{ edu.degree }}</h3>
          <p class="text-cyan-400 font-semibold mb-2">{{ edu.school }}</p>
          <p class="text-slate-400 text-sm mb-2">{{ edu.level }}</p>
          <p class="text-slate-500 text-sm">{{ edu.period }}</p>
        </UiSpotlightCard>
      </div>
    </div>
  </section>
</template>