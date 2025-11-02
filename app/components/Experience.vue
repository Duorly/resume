<script setup lang="ts">
const experiences = [
  {
    date: 'Sept 2025 - Présent',
    title: 'Développeur Fullstack / Mentor',
    company: 'ITIC PARIS',
    description:
        "Conception de l’application ITIC COMPANION, un outil de gamification scolaire connecté à l’ERP Ymag Ypareo. En parallèle, j’assure le mentorat technique d’étudiants du BTS au Master et la mise en place d’une architecture microservices documentée pour le campus numérique.",
    location: 'Paris, France',
    icon: 'i-lucide-briefcase',
    color: 'bg-amber-500'
  },
  {
    date: 'Oct 2024 - Présent',
    title: 'Tech Lead',
    company: 'XKSGROUP',
    description:
        "Encadrement technique des projets et conception d’architectures robustes. Revue de code, gestion de la dette technique et accompagnement des développeurs dans une logique de qualité et de scalabilité.",
    location: 'Cergy, France',
    icon: 'i-lucide-briefcase',
    color: 'bg-cyan-500'
  },
  {
    date: 'Mai - Sept 2024',
    title: 'Tech Lead Backend',
    company: 'FASEYA',
    description:
        "Conception et développement backend sur AWS avec focus sur la performance et la sécurité. Encadrement technique de l’équipe et mise en œuvre de bonnes pratiques de développement et de déploiement.",
    location: 'Dakar, Sénégal',
    icon: 'i-lucide-briefcase',
    color: 'bg-blue-500'
  },
  {
    date: 'Oct 2023 - Mars 2024',
    title: 'Tech Lead / Chef de projet',
    company: 'Nanocreatives',
    description:
        "Direction technique et coordination des projets web. Déploiement cloud, CI/CD et supervision des équipes dans un environnement agile, garantissant fiabilité et qualité des livrables.",
    location: 'Brazzaville, Congo',
    icon: 'i-lucide-briefcase',
    color: 'bg-indigo-500'
  },
  {
    date: 'Sept - Nov 2023',
    title: 'Consultant IT',
    company: 'UNFPA (Nations Unies)',
    description:
        "Mise en place de la plateforme GLPI pour la gestion du matériel informatique. Analyse des besoins, configuration du système et formation des utilisateurs dans le cadre d’un projet de modernisation du SI.",
    location: 'Brazzaville, Congo',
    icon: 'i-lucide-briefcase',
    color: 'bg-purple-500'
  },
  {
    date: 'Janv - Juin 2022',
    title: 'Consultant Développeur',
    company: 'AGRER - Union Européenne',
    description:
        "Développement d’une application de suivi agricole financée par l’Union Européenne. Coordination d’équipes et formation de plus de 300 utilisateurs pour améliorer la collecte et l’analyse des données terrain.",
    location: 'Brazzaville, Congo',
    icon: 'i-lucide-leaf',
    color: 'bg-green-500'
  }
]
</script>


<template>
  <section id="menu_experiences" class="py-20 px-4 bg-slate-900/50">
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