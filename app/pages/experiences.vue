<script setup lang="ts">

useSeoMeta({
  title: 'Experiences',
  description: 'Mes expériences professionnelles en tant que développeur web et mobile, avec des technologies variées et des projets variés.',
})

const { t, tm, rt } = useI18n()

interface Experience {
  id: number
  key: string
  icon: string
  color: string
  technologies: string[]
  title: string
  company: string
  date: string
  description: string
  location: string
  type: string
  missions: string[]
  achievements: string[]
}

// Skeleton data for structure (icons, colors, technologies)
// Text content is pulled from i18n using the 'key'
const experiencesList = [
  {
    id: 1,
    key: 'itic_paris',
    icon: 'lucide:briefcase',
    color: 'amber',
    technologies: ['Vue.js', 'Flutter', 'Nuxt', 'Spring Boot', 'MySQL', 'Docker', 'Redis']
  },
  {
    id: 2,
    key: 'xksgroup',
    icon: 'lucide:code-2',
    color: 'cyan',
    technologies: ['React', 'Next.js', 'Node.js', 'AWS', 'PostgreSQL', 'MongoDB', 'GitLab CI', 'Terraform']
  },
  {
    id: 3,
    key: 'faseya',
    icon: 'lucide:server',
    color: 'blue',
    technologies: ['Node.js', 'NestJS', 'AWS Lambda', 'DynamoDB', 'PostgreSQL', 'Redis', 'Terraform', 'Docker']
  },
  {
    id: 4,
    key: 'nanocreatives',
    icon: 'lucide:rocket',
    color: 'indigo',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'AWS', 'GCP', 'GitHub Actions', 'Docker', 'Nginx']
  },
  {
    id: 5,
    key: 'unfpa',
    icon: 'lucide:globe',
    color: 'purple',
    technologies: ['GLPI', 'PHP', 'MySQL', 'Linux', 'Apache', 'LDAP']
  },
  {
    id: 6,
    key: 'agrer',
    icon: 'lucide:leaf',
    color: 'green',
    technologies: ['Flutter', 'Laravel', 'Vue.js', 'MySQL', 'Google Maps API', 'Firebase']
  }
]

const experiences = computed<Experience[]>(() => experiencesList.map(exp => ({
  ...exp,
  title: t(`experiences.${exp.key}.title`),
  company: t(`experiences.${exp.key}.company`),
  date: t(`experiences.${exp.key}.date`),
  description: t(`experiences.${exp.key}.description`),
  location: t(`experiences.${exp.key}.location`),
  type: t(`experiences.${exp.key}.type`),
  missions: (tm(`experiences.${exp.key}.missions`) as any[]).map(m => rt(m)),
  achievements: (tm(`experiences.${exp.key}.achievements`) as any[]).map(m => rt(m))
})))

const selectedExperienceId = ref(experiencesList[0].id)

const selectedExperience = computed(() => 
  experiences.value.find(e => e.id === selectedExperienceId.value) || experiences.value[0]!
)

const selectExperience = (exp: Experience) => {
  selectedExperienceId.value = exp.id
}

const selectPrevious = () => {
  if (selectedExperience.value.id > 1) {
    const prev = experiences.value.find(e => e.id === selectedExperience.value.id - 1)
    if (prev) selectedExperienceId.value = prev.id
  }
}

const selectNext = () => {
  if (selectedExperience.value.id < experiences.value.length) {
    const next = experiences.value.find(e => e.id === selectedExperience.value.id + 1)
    if (next) selectedExperienceId.value = next.id
  }
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
  return colors[color] || colors.cyan!
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 text-slate-900 dark:bg-gradient-to-br dark:from-slate-950 dark:via-blue-950 dark:to-slate-900 dark:text-white transition-colors duration-300">

    <div class="max-w-6xl mx-auto pb-12 pt-32 px-4 lg:px-0">
      <div class="grid lg:grid-cols-3 gap-8">

        <!-- Sidebar - Liste des expériences -->
        <div class="lg:col-span-1">
          <div class="sticky top-24 space-y-4">
            <h2 class="text-2xl font-bold mb-6 text-slate-800 dark:text-white">{{ t('experiences_title') }}</h2>

            <div
                v-for="exp in experiences"
                :key="exp.id"
                :class="[
                'cursor-pointer p-4 rounded-xl border transition-all duration-300',
                selectedExperience.id === exp.id
                  ? `${getColorClasses(exp.color).border} ${getColorClasses(exp.color).bg} shadow-lg`
                  : 'bg-white dark:bg-slate-800/30 border-slate-200 dark:border-slate-700/50 hover:border-slate-300 dark:hover:border-slate-600'
              ]"
                @click="selectExperience(exp)"
            >
              <div class="flex items-start gap-3">
                <div
                    :class="[
                  'flex justify-center items-center p-4 rounded-lg',
                  selectedExperience.id === exp.id ? getColorClasses(exp.color).bg : 'bg-slate-100 dark:bg-slate-700/50'
                ]">
                  <UIcon
                      size="25"
                      :name="exp.icon" :class="[
                    selectedExperience.id === exp.id ? getColorClasses(exp.color).text : 'text-slate-500 dark:text-slate-400'
                  ]"/>
                </div>
                <div class="flex-1 min-w-0">
                  <h3
                      class="font-bold text-sm mb-1 truncate" :class="
                    selectedExperience.id === exp.id ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300'
                  ">
                    {{ exp.title }}
                  </h3>
                  <p
                      class="text-xs font-medium mb-1" :class="
                    selectedExperience.id === exp.id ? getColorClasses(exp.color).text : 'text-slate-500 dark:text-slate-400'
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
              class-name="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/50 shadow-lg dark:shadow-none"
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
                    <h2 class="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
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

                  <div class="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
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

              <p class="text-slate-600 dark:text-slate-300 leading-relaxed">
                {{ selectedExperience.description }}
              </p>
            </div>

            <!-- Missions -->
            <div class="mb-8">
              <h3 class="text-xl font-bold mb-4 flex items-center gap-2 text-slate-800 dark:text-white">
                <UIcon name="lucide:check-circle" :class="getColorClasses(selectedExperience.color).text"/>
                {{ t('experiences.missions_title') }}
              </h3>
              <ul class="space-y-3">
                <li
                    v-for="(mission, index) in selectedExperience.missions"
                    :key="index"
                    class="flex items-start gap-3 text-slate-600 dark:text-slate-300"
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
              <h3 class="text-xl font-bold mb-4 flex items-center gap-2 text-slate-800 dark:text-white">
                <UIcon name="lucide:code" :class="getColorClasses(selectedExperience.color).text"/>
                {{ t('experiences.stack_title') }}
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
              <h3 class="text-xl font-bold mb-4 flex items-center gap-2 text-slate-800 dark:text-white">
                <UIcon name="lucide:trophy" :class="getColorClasses(selectedExperience.color).text"/>
                {{ t('experiences.achievements_title') }}
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
                    <span class="text-sm text-slate-700 dark:text-slate-300">{{ achievement }}</span>
                  </div>
                </div>
              </div>
            </div>

          </UiSpotlightCard>

          <!-- Navigation -->
          <div class="flex justify-between mt-8">
            <button
                v-if="selectedExperience.id > 1"
                class="flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-700/50 rounded-xl border border-slate-200 dark:border-slate-700/50 hover:border-cyan-400/50 dark:hover:border-cyan-500/50 transition-all text-slate-700 dark:text-slate-300"
                @click="selectPrevious()"
            >
              <UIcon name="lucide:chevron-left" size="20"/>
              <span>{{ t('experiences.previous') }}</span>
            </button>
            <div v-else/>

            <button
                v-if="selectedExperience.id < experiences.length"
                class="flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-700/50 rounded-xl border border-slate-200 dark:border-slate-700/50 hover:border-cyan-400/50 dark:hover:border-cyan-500/50 transition-all text-slate-700 dark:text-slate-300"
                @click="selectNext()"
            >
              <span>{{ t('experiences.next') }}</span>
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