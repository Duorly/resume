<script setup lang="ts">
import {ref} from 'vue'

const experiences = [
  {
    id: 1,
    date: 'Sept 2025 - Présent',
    title: 'Développeur Fullstack / Mentor',
    company: 'ITIC PARIS',
    description:
        "Conception de l'application ITIC COMPANION, un outil de gamification scolaire connecté à l'ERP Ymag Ypareo. En parallèle, j'assure le mentorat technique d'étudiants du BTS au Master et la mise en place d'une architecture microservices documentée pour le campus numérique.",
    location: 'Paris, France',
    icon: 'lucide:briefcase',
    color: 'amber',
    type: 'CDI',
    missions: [
      'Conception et développement de l\'application ITIC COMPANION avec Vue.js et Spring Boot',
      'Intégration API avec l\'ERP Ymag Ypareo pour la synchronisation des données étudiants',
      'Mise en place d\'un système de gamification (points, badges, classements)',
      'Mentorat technique d\'étudiants de BTS à Master (20+ étudiants)',
      'Architecture microservices avec Docker et Kubernetes',
      'Documentation technique complète et formation des équipes'
    ],
    technologies: ['Vue.js', 'Nuxt', 'Spring Boot', 'PostgreSQL', 'Docker', 'Kubernetes', 'Redis', 'RabbitMQ'],
    achievements: [
      'Amélioration de l\'engagement étudiant de 45%',
      'Réduction du temps de synchronisation ERP de 60%',
      'Formation de 20+ étudiants aux bonnes pratiques de développement'
    ]
  },
  {
    id: 2,
    date: 'Oct 2024 - Sept 2025',
    title: 'Tech Lead / Chef de projet',
    company: 'XKSGROUP',
    description:
        "Encadrement technique des projets et conception d'architectures robustes. Revue de code, gestion de la dette technique et accompagnement des développeurs dans une logique de qualité et de scalabilité.",
    location: 'Cergy, France',
    icon: 'lucide:code-2',
    color: 'cyan',
    type: 'CDD',
    missions: [
      'Direction technique de 3 projets simultanés avec équipes de 5-8 développeurs',
      'Revue de code systématique et mise en place de standards qualité',
      'Architecture de solutions scalables sur AWS',
      'Gestion de la dette technique et refactoring stratégique',
      'Coaching technique des développeurs juniors et mid-level',
      'Mise en place de CI/CD avec GitLab CI et automatisation des déploiements'
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'AWS', 'PostgreSQL', 'MongoDB', 'GitLab CI', 'Terraform'],
    achievements: [
      'Réduction de 40% du temps de déploiement',
      'Amélioration de la couverture de tests de 25% à 80%',
      'Montée en compétences de 6 développeurs juniors'
    ]
  },
  {
    id: 3,
    date: 'Mai - Sept 2024',
    title: 'Tech Lead Backend',
    company: 'FASEYA',
    description:
        "Conception et développement backend sur AWS avec focus sur la performance et la sécurité. Encadrement technique de l'équipe et mise en œuvre de bonnes pratiques de développement et de déploiement.",
    location: 'Dakar, Sénégal',
    icon: 'lucide:server',
    color: 'blue',
    type: 'Mission',
    missions: [
      'Architecture backend microservices sur AWS (Lambda, ECS, RDS)',
      'Optimisation des performances API (réduction de 70% des temps de réponse)',
      'Mise en place de la sécurité (OAuth2, JWT, rate limiting)',
      'Encadrement d\'une équipe de 4 développeurs backend',
      'Infrastructure as Code avec Terraform',
      'Monitoring et alerting avec CloudWatch et Datadog'
    ],
    technologies: ['Node.js', 'NestJS', 'AWS Lambda', 'DynamoDB', 'PostgreSQL', 'Redis', 'Terraform', 'Docker'],
    achievements: [
      'Réduction de 70% des temps de réponse API',
      'Économie de 30% sur les coûts AWS',
      'Zero downtime sur 4 mois de production'
    ]
  },
  {
    id: 4,
    date: 'Oct 2023 - Mars 2024',
    title: 'Tech Lead / Chef de projet',
    company: 'Nanocreatives',
    description:
        "Direction technique et coordination des projets web. Déploiement cloud, CI/CD et supervision des équipes dans un environnement agile, garantissant fiabilité et qualité des livrables.",
    location: 'Brazzaville, Congo',
    icon: 'lucide:rocket',
    color: 'indigo',
    type: 'Freelance',
    missions: [
      'Direction technique de projets web pour clients internationaux',
      'Mise en place de pipelines CI/CD avec GitHub Actions',
      'Déploiement cloud multi-providers (AWS, GCP, DigitalOcean)',
      'Formation et supervision d\'équipes agiles (Scrum)',
      'Estimation et planification de projets complexes',
      'Relation client et gestion des attentes techniques'
    ],
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'AWS', 'GCP', 'GitHub Actions', 'Docker', 'Nginx'],
    achievements: [
      'Livraison de 8 projets dans les délais',
      'Satisfaction client de 95%',
      'Formation de 2 équipes aux méthodologies agiles'
    ]
  },
  {
    id: 5,
    date: 'Sept - Nov 2023',
    title: 'Consultant IT',
    company: 'UNFPA (Nations Unies)',
    description:
        "Mise en place de la plateforme GLPI pour la gestion du matériel informatique. Analyse des besoins, configuration du système et formation des utilisateurs dans le cadre d'un projet de modernisation du SI.",
    location: 'Brazzaville, Congo',
    icon: 'lucide:globe',
    color: 'purple',
    type: 'Mission',
    missions: [
      'Analyse des besoins de gestion du parc informatique',
      'Installation et configuration de GLPI sur infrastructure Linux',
      'Paramétrage des workflows de tickets et inventaire',
      'Migration des données depuis l\'ancien système',
      'Formation de 15 utilisateurs à GLPI',
      'Documentation complète en français et anglais'
    ],
    technologies: ['GLPI', 'PHP', 'MySQL', 'Linux', 'Apache', 'LDAP'],
    achievements: [
      'Amélioration de 60% du temps de traitement des incidents',
      'Formation réussie de 15 utilisateurs',
      'Documentation bilingue complète livrée'
    ]
  },
  {
    id: 6,
    date: 'Janv - Juin 2022',
    title: 'Consultant Développeur',
    company: 'AGRER - Union Européenne',
    description:
        "Développement d'une application de suivi agricole financée par l'Union Européenne. Coordination d'équipes et formation de plus de 300 utilisateurs pour améliorer la collecte et l'analyse des données terrain.",
    location: 'Brazzaville, Congo',
    icon: 'lucide:leaf',
    color: 'green',
    type: 'Mission',
    missions: [
      'Développement application mobile Flutter pour collecte de données agricoles',
      'API REST avec Laravel pour synchronisation cloud',
      'Dashboard analytique avec Vue.js pour visualisation des données',
      'Coordination d\'une équipe de 4 développeurs',
      'Formation de 300+ utilisateurs terrain à l\'application mobile',
      'Support technique et maintenance pendant 6 mois'
    ],
    technologies: ['Flutter', 'Laravel', 'Vue.js', 'MySQL', 'Google Maps API', 'Firebase'],
    achievements: [
      'Collecte de données auprès de 5000+ agriculteurs',
      'Formation réussie de 300+ utilisateurs terrain',
      'Amélioration de 80% de la qualité des données collectées'
    ]
  }
]

const selectedExperience = ref(experiences[0])

const selectExperience = (exp: typeof experiences[0]) => {
  selectedExperience.value = exp
}

const getColorClasses = (color: string) => {
  const colors: Record<string, { bg: string, text: string, border: string, gradient: string }> = {
    amber: {
      bg: 'bg-amber-500/10',
      text: 'text-amber-400',
      border: 'border-amber-500/30',
      gradient: 'from-amber-500/20 to-amber-600/20'
    },
    cyan: {
      bg: 'bg-cyan-500/10',
      text: 'text-cyan-400',
      border: 'border-cyan-500/30',
      gradient: 'from-cyan-500/20 to-cyan-600/20'
    },
    blue: {
      bg: 'bg-blue-500/10',
      text: 'text-blue-400',
      border: 'border-blue-500/30',
      gradient: 'from-blue-500/20 to-blue-600/20'
    },
    indigo: {
      bg: 'bg-indigo-500/10',
      text: 'text-indigo-400',
      border: 'border-indigo-500/30',
      gradient: 'from-indigo-500/20 to-indigo-600/20'
    },
    purple: {
      bg: 'bg-purple-500/10',
      text: 'text-purple-400',
      border: 'border-purple-500/30',
      gradient: 'from-purple-500/20 to-purple-600/20'
    },
    green: {
      bg: 'bg-green-500/10',
      text: 'text-green-400',
      border: 'border-green-500/30',
      gradient: 'from-green-500/20 to-green-600/20'
    }
  }
  return colors[color] || colors.cyan
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
    <!-- Header -->
    <!--    <div class="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-slate-700/50">
          <div class="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <NuxtLink to="/" class="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
              <UIcon name="lucide:arrow-left" size="20"/>
              <span class="font-semibold">Retour au portfolio</span>
            </NuxtLink>
            <h1 class="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Parcours Professionnel
            </h1>
          </div>
        </div>-->

    <div class="max-w-6xl mx-auto pb-12 pt-32">
      <div class="grid lg:grid-cols-3 gap-8">

        <!-- Sidebar - Liste des expériences -->
        <div class="lg:col-span-1">
          <div class="sticky top-24 space-y-4">
            <h2 class="text-2xl font-bold mb-6 text-white">Expériences professionnelles</h2>

            <div
                v-for="exp in experiences"
                :key="exp.id"
                :class="[
                'cursor-pointer p-4 rounded-xl border transition-all duration-300',
                selectedExperience.id === exp.id
                  ? `${getColorClasses(exp.color).border} ${getColorClasses(exp.color).bg} shadow-lg`
                  : 'border-slate-700/50 hover:border-slate-600 bg-slate-800/30'
              ]"
                @click="selectExperience(exp)"
            >
              <div class="flex items-start gap-3">
                <div
                    :class="[
                  'flex justify-center items-center p-4 rounded-lg',
                  selectedExperience.id === exp.id ? getColorClasses(exp.color).bg : 'bg-slate-700/50'
                ]">
                  <UIcon
                      size="25"
                      :name="exp.icon" :class="[
                    selectedExperience.id === exp.id ? getColorClasses(exp.color).text : 'text-slate-400'
                  ]"/>
                </div>
                <div class="flex-1 min-w-0">
                  <h3
                      class="font-bold text-sm mb-1 truncate" :class="
                    selectedExperience.id === exp.id ? 'text-white' : 'text-slate-300'
                  ">
                    {{ exp.title }}
                  </h3>
                  <p
                      class="text-xs font-medium mb-1" :class="
                    selectedExperience.id === exp.id ? getColorClasses(exp.color).text : 'text-slate-400'
                  ">
                    {{ exp.company }}
                  </p>
                  <p class="text-xs text-slate-500">{{ exp.date }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Contenu principal - Détails de l'expérience -->
        <div class="lg:col-span-2">
          <UiSpotlightCard
              class-name="border border-slate-700/50"
              spotlight-color="rgba(6, 182, 212, 0.15)"
          >
            <!-- Header -->
            <div class="mb-8">
              <div class="flex items-start gap-4 mb-4">
                <div
                    :class="[
                  'flex justify-center items-center p-4 rounded-2xl',
                  getColorClasses(selectedExperience.color).bg
                ]">
                  <UIcon
                      size="40"
                      :name="selectedExperience.icon" :class="[
                    getColorClasses(selectedExperience.color).text
                  ]"/>
                </div>

                <div class="flex-1">
                  <div class="flex flex-wrap items-center gap-3 mb-2">
                    <h2 class="text-2xl md:text-3xl font-bold text-white">
                      {{ selectedExperience.title }}
                    </h2>
                    <span
                        :class="[
                      'px-3 py-1 rounded-full text-xs font-bold border',
                      getColorClasses(selectedExperience.color).bg,
                      getColorClasses(selectedExperience.color).text,
                      getColorClasses(selectedExperience.color).border
                    ]">
                      {{ selectedExperience.type }}
                    </span>
                  </div>

                  <div :class="['text-xl font-bold mb-2', getColorClasses(selectedExperience.color).text]">
                    {{ selectedExperience.company }}
                  </div>

                  <div class="flex flex-wrap gap-4 text-sm text-slate-400">
                    <div class="flex items-center gap-1">
                      <UIcon name="lucide:calendar" class="w-4 h-4"/>
                      <span>{{ selectedExperience.date }}</span>
                    </div>
                    <div class="flex items-center gap-1">
                      <UIcon name="lucide:map-pin" class="w-4 h-4"/>
                      <span>{{ selectedExperience.location }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <p class="text-slate-300 leading-relaxed">
                {{ selectedExperience.description }}
              </p>
            </div>

            <!-- Missions -->
            <div class="mb-8">
              <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
                <UIcon name="lucide:check-circle" :class="getColorClasses(selectedExperience.color).text"/>
                Missions principales
              </h3>
              <ul class="space-y-3">
                <li
                    v-for="(mission, index) in selectedExperience.missions"
                    :key="index"
                    class="flex items-start gap-3 text-slate-300"
                >
                  <div
                      :class="[
                    'w-2 h-2 rounded-full mt-2 shrink-0',
                    getColorClasses(selectedExperience.color).bg
                  ]"/>
                  <span>{{ mission }}</span>
                </li>
              </ul>
            </div>

            <!-- Technologies -->
            <div class="mb-8">
              <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
                <UIcon name="lucide:code" :class="getColorClasses(selectedExperience.color).text"/>
                Stack technique
              </h3>
              <div class="flex flex-wrap gap-2">
                <span
                    v-for="(tech, index) in selectedExperience.technologies"
                    :key="index"
                    :class="[
                    'px-4 py-2 rounded-full text-sm font-medium border transition-colors',
                    getColorClasses(selectedExperience.color).bg,
                    getColorClasses(selectedExperience.color).text,
                    getColorClasses(selectedExperience.color).border,
                    'hover:scale-105'
                  ]"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

            <!-- Réalisations -->
            <div>
              <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
                <UIcon name="lucide:trophy" :class="getColorClasses(selectedExperience.color).text"/>
                Réalisations clés
              </h3>
              <div class="grid md:grid-cols-2 gap-4">
                <div
                    v-for="(achievement, index) in selectedExperience.achievements"
                    :key="index"
                    :class="[
                    'p-4 rounded-xl border',
                    getColorClasses(selectedExperience.color).border,
                    getColorClasses(selectedExperience.color).bg
                  ]"
                >
                  <div class="flex items-start gap-3">
                    <UIcon
                        name="lucide:star" :class="[
                      'w-5 h-5 shrink-0 mt-0.5',
                      getColorClasses(selectedExperience.color).text
                    ]"/>
                    <span class="text-sm text-slate-300">{{ achievement }}</span>
                  </div>
                </div>
              </div>
            </div>

          </UiSpotlightCard>

          <!-- Navigation -->
          <div class="flex justify-between mt-8">
            <button
                v-if="selectedExperience.id > 1"
                class="flex items-center gap-2 px-6 py-3 bg-slate-800/50 hover:bg-slate-700/50 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all"
                @click="selectExperience(experiences[selectedExperience.id - 2])"
            >
              <UIcon name="lucide:chevron-left" size="20"/>
              <span>Précédent</span>
            </button>
            <div v-else/>

            <button
                v-if="selectedExperience.id < experiences.length"
                class="flex items-center gap-2 px-6 py-3 bg-slate-800/50 hover:bg-slate-700/50 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all"
                @click="selectExperience(experiences[selectedExperience.id])"
            >
              <span>Suivant</span>
              <UIcon name="lucide:chevron-right" size="20"/>
            </button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.lg\:col-span-2 > div {
  animation: fadeIn 0.4s ease-out;
}
</style>