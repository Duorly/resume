<script setup lang="ts">
const experiences = [
  {
    title: 'Tech Lead',
    company: 'XKSGROUP',
    location: 'Cergy, France',
    period: 'Oct 2024 - Présent',
    tasks: [
      'Conception d\'architecture technique et validation des choix technologiques',
      'Revue de code et gestion de la dette technique',
      'Mentorat et accompagnement des développeurs',
      'Documentation et veille technologique'
    ]
  },
  {
    title: 'Tech Lead Backend',
    company: 'FASEYA',
    location: 'Dakar, Sénégal',
    period: 'Mai - Sept 2024',
    tasks: [
      'Développement backend et déploiement sur AWS',
      'Gestion de la dette technique et choix d\'architectures',
      'Encadrement technique des développeurs',
      'Mise en œuvre de bonnes pratiques'
    ]
  },
  {
    title: 'Tech Lead / Chef de projet',
    company: 'Nanocreatives',
    location: 'Brazzaville, Congo',
    period: 'Oct 2023 - Mars 2024',
    tasks: [
      'Conception et développement de solutions logicielles',
      'Déploiement d\'applications sur cloud Linux',
      'Pilotage de projets agiles',
      'Gestion DNS et certificats de sécurité'
    ]
  },
  {
    title: 'Consultant IT',
    company: 'UNFPA (Nations Unies)',
    location: 'Brazzaville, Congo',
    period: 'Sept - Nov 2023',
    tasks: [
      'Déploiement de la plateforme GLPI',
      'Collecte des besoins secteur santé',
      'Production de rapports statistiques',
      'Supervision des agents GLPI'
    ]
  },
  {
    title: 'Consultant Développeur',
    company: 'AGRER - Union Européenne',
    location: 'Brazzaville, Congo',
    period: 'Janv - Juin 2022',
    tasks: [
      'Développement d\'une application agricole',
      'Pilotage de projet et coordination d\'équipes',
      'Collaboration avec la délégation UE',
      'Formation de plus de 300 utilisateurs'
    ]
  }
];
</script>

<template>
  <section id="experiences" class="py-20 px-4 bg-slate-900/50">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
        Expériences Professionnelles
      </h2>

      <div class="space-y-6">
        <div
            v-for="(exp, index) in experiences"
            :key="index"
            class="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
        >
          <div class="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
            <div>
              <h3 class="text-2xl font-bold text-cyan-400 mb-2">{{ exp.title }}</h3>
              <p class="text-xl text-white font-semibold">{{ exp.company }}</p>
              <p class="text-slate-400">{{ exp.location }}</p>
            </div>
            <div class="flex items-center gap-2 text-slate-400 mt-2 md:mt-0">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span class="font-medium">{{ exp.period }}</span>
            </div>
          </div>
          <ul class="space-y-2 mt-4">
            <li
                v-for="(task, i) in exp.tasks"
                :key="i"
                class="flex items-start gap-3 text-slate-300"
            >
              <span class="text-cyan-400 mt-1">▹</span>
              <span>{{ task }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>