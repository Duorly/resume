<script setup lang="ts">
const experiences = [
  {
    date: 'Oct 2024 - Présent',
    title: 'Tech Lead',
    company: 'XKSGROUP',
    description: 'Conception d\'architecture technique et validation des choix technologiques. Revue de code et gestion de la dette technique.',
    location: 'Cergy, France',
    icon: 'i-lucide-briefcase',
    color: 'bg-cyan-500',
    tasks: [
      'Conception d\'architecture technique et validation des choix technologiques',
      'Revue de code et gestion de la dette technique',
      'Mentorat et accompagnement des développeurs',
      'Documentation et veille technologique'
    ]
  },
  {
    date: 'Mai - Sept 2024',
    title: 'Tech Lead Backend',
    company: 'FASEYA',
    description: 'Développement backend et déploiement sur AWS. Gestion de la dette technique et choix d\'architectures.',
    location: 'Dakar, Sénégal',
    icon: 'i-lucide-server',
    color: 'bg-blue-500',
    tasks: [
      'Développement backend et déploiement sur AWS',
      'Gestion de la dette technique et choix d\'architectures',
      'Encadrement technique des développeurs',
      'Mise en œuvre de bonnes pratiques'
    ]
  },
  {
    date: 'Oct 2023 - Mars 2024',
    title: 'Tech Lead / Chef de projet',
    company: 'Nanocreatives',
    description: 'Conception et développement de solutions logicielles. Déploiement d\'applications sur cloud Linux.',
    location: 'Brazzaville, Congo',
    icon: 'i-lucide-layers',
    color: 'bg-indigo-500',
    tasks: [
      'Conception et développement de solutions logicielles',
      'Déploiement d\'applications sur cloud Linux',
      'Pilotage de projets agiles',
      'Gestion DNS et certificats de sécurité'
    ]
  },
  {
    date: 'Sept - Nov 2023',
    title: 'Consultant IT',
    company: 'UNFPA (Nations Unies)',
    description: 'Déploiement de la plateforme GLPI. Collecte des besoins secteur santé et production de rapports statistiques.',
    location: 'Brazzaville, Congo',
    icon: 'i-lucide-globe',
    color: 'bg-purple-500',
    tasks: [
      'Déploiement de la plateforme GLPI',
      'Collecte des besoins secteur santé',
      'Production de rapports statistiques',
      'Supervision des agents GLPI'
    ]
  },
  {
    date: 'Janv - Juin 2022',
    title: 'Consultant Développeur',
    company: 'AGRER - Union Européenne',
    description: 'Développement d\'une application agricole. Pilotage de projet et coordination d\'équipes.',
    location: 'Brazzaville, Congo',
    icon: 'i-lucide-leaf',
    color: 'bg-green-500',
    tasks: [
      'Développement d\'une application agricole',
      'Pilotage de projet et coordination d\'équipes',
      'Collaboration avec la délégation UE',
      'Formation de plus de 300 utilisateurs'
    ]
  }
]
</script>

<template>
  <section id="experiences" class="py-20 px-4 bg-slate-900/50">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
        Expérience Professionnelle
      </h2>

      <div class="relative">
        <!-- Ligne verticale centrale -->
        <div
            class="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500"/>

        <!-- Timeline items -->
        <div class="space-y-12">
          <div
              v-for="(exp, index) in experiences"
              :key="index"
              :class="[
              'relative flex items-center',
              index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
            ]"
          >
            <!-- Contenu à gauche ou droite -->
            <div
                :class="[
              'w-[calc(50%-2rem)]',
              index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'
            ]">
              <UiSpotlightCard
                  class-name="border border-slate-700/50 hover:border-cyan-500/50"
                  spotlight-color="rgba(255, 255, 255, 0.25)">
                <div class="text-sm text-cyan-400 font-semibold mb-2">{{ exp.date }}</div>
                <div :class="['flex items-center justify-between mb-2', index % 2 === 0 ? 'flex-row-reverse' : 'flex-row']">
                  <h3 class="text-xl font-bold text-white">{{ exp.title }}</h3>
                  <div class="text-cyan-300 font-medium">{{ exp.company }}</div>
                </div>

                <div
                    class="flex items-center gap-1 text-sm text-gray-400 mb-3"
                    :class="index % 2 === 0 ? 'justify-end' : 'justify-start'">
                  <UIcon name="i-lucide-map-pin" class="w-4 h-4"/>
                  <span>{{ exp.location }}</span>
                </div>
                <p class="text-gray-300 text-sm leading-relaxed">{{ exp.description }}</p>

                <!-- Tâches -->
                <ul class="mt-4 space-y-2" :class="index % 2 === 0 ? 'text-right' : 'text-left'">
                  <li
                      v-for="(task, taskIndex) in exp.tasks"
                      :key="taskIndex"
                      class="text-xs text-gray-400 flex items-start gap-2"
                      :class="index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'"
                  >
                    <span class="text-cyan-400 mt-1">•</span>
                    <span>{{ task }}</span>
                  </li>
                </ul>
              </UiSpotlightCard>
            </div>

            <!-- Point central avec icône -->
            <div class="absolute left-1/2 transform -translate-x-1/2 z-10">
              <div
                  :class="[
                'w-12 h-12 rounded-full flex items-center justify-center border-4 border-slate-900',
                exp.color
              ]">
                <UIcon :name="exp.icon" class="w-6 h-6 text-white"/>
              </div>
            </div>

            <!-- Espace vide de l'autre côté -->
            <div class="w-[calc(50%-2rem)]"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>