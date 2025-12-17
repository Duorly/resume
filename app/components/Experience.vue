<script setup lang="ts">
const { t } = useI18n()

const experiences = computed(() => [
  {
    date: 'Sept 2025 - Présent',
    title: t('experiences.itic_paris.title'),
    company: 'ITIC PARIS',
    description: t('experiences.itic_paris.description'),
    location: 'Paris, France',
    icon: 'i-lucide-briefcase',
    color: 'bg-amber-500'
  },
  {
    date: 'Oct 2024 - Sept 2025',
    title: t('experiences.xksgroup.title'),
    company: 'XKSGROUP',
    description: t('experiences.xksgroup.description'),
    location: 'Cergy, France',
    icon: 'i-lucide-briefcase',
    color: 'bg-cyan-500'
  },
  {
    date: 'Mai - Sept 2024',
    title: t('experiences.faseya.title'),
    company: 'FASEYA',
    description: t('experiences.faseya.description'),
    location: 'Dakar, Sénégal',
    icon: 'i-lucide-briefcase',
    color: 'bg-blue-500'
  },
  {
    date: 'Oct 2023 - Mars 2024',
    title: t('experiences.nanocreatives.title'),
    company: 'Nanocreatives',
    description: t('experiences.nanocreatives.description'),
    location: 'Brazzaville, Congo',
    icon: 'i-lucide-briefcase',
    color: 'bg-indigo-500'
  },
  {
    date: 'Sept - Nov 2023',
    title: t('experiences.unfpa.title'),
    company: 'UNFPA (Nations Unies)',
    description: t('experiences.unfpa.description'),
    location: 'Brazzaville, Congo',
    icon: 'i-lucide-briefcase',
    color: 'bg-purple-500'
  },
  {
    date: 'Janv - Juin 2022',
    title: t('experiences.agrer.title'),
    company: 'AGRER - Union Européenne',
    description: t('experiences.agrer.description'),
    location: 'Brazzaville, Congo',
    icon: 'i-lucide-briefcase',
    color: 'bg-green-500'
  }
])
</script>

<template>
  <section id="menu_experiences" class="py-20 px-4 bg-gray-100 dark:bg-slate-900/50 transition-colors duration-300">
    <div class="max-w-6xl mx-auto">
      <h2
        class="text-3xl md:text-4xl font-bold mb-12 md:mb-16 text-center bg-linear-to-r from-cyan-500 to-blue-500 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
        {{ $t('experiences_title') }}
      </h2>

      <div class="relative">
        <!-- Ligne verticale - à gauche sur mobile, au centre sur desktop -->
        <div
          class="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-0.5 h-full bg-linear-to-b from-cyan-500 via-blue-500 to-purple-500" />

        <!-- Timeline items -->
        <div class="space-y-8">
          <div v-for="(exp, index) in experiences" :key="index" :class="[
            'relative flex items-center',
            'flex-row',
            'md:' + (index % 2 === 0 ? 'flex-row' : 'flex-row-reverse')
          ]">
            <!-- Contenu -->
            <div :class="[
              // Mobile: pleine largeur moins l'espace pour l'icône
              'w-full pl-16',
              // Desktop: moitié de largeur avec padding selon le côté
              'md:w-[calc(50%-2rem)]',
              index % 2 === 0
                ? 'md:text-right md:pr-8 md:pl-0'
                : 'md:text-left md:pl-8 md:pr-0'
            ]">
              <UiSpotlightCard
                class-name="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/50 hover:border-cyan-400/50 dark:hover:border-cyan-500/50 shadow-lg dark:shadow-none transition-colors duration-300"
                spotlight-color="rgba(255, 255, 255, 0.25)">
                <div class="text-sm text-cyan-600 dark:text-cyan-400 font-semibold mb-2">{{ exp.date }}</div>

                <div :class="[
                  'flex flex-col gap-2 mb-2',
                  'md:flex-row md:items-center md:justify-between',
                  index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
                ]">
                  <h3 class="text-lg md:text-xl font-bold text-slate-900 dark:text-white">{{ exp.title }}</h3>
                  <div class="text-cyan-600 dark:text-cyan-300 font-medium text-sm md:text-base">{{ exp.company }}</div>
                </div>

                <div class="flex items-center gap-1 text-sm text-slate-500 dark:text-gray-400 mb-3"
                  :class="index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'">
                  <UIcon name="i-lucide-map-pin" class="w-4 h-4" />
                  <span>{{ exp.location }}</span>
                </div>

                <p class="text-slate-600 dark:text-gray-300 text-sm leading-relaxed">{{ exp.description }}</p>
              </UiSpotlightCard>
            </div>

            <!-- Point central avec icône -->
            <div :class="[
              'absolute z-10',
              // Mobile: fixé à gauche
              'left-0',
              // Desktop: au centre
              'md:left-1/2 md:transform md:-translate-x-1/2'
            ]">
              <div :class="[
                'w-12 h-12 rounded-full flex items-center justify-center border-4 border-gray-50 dark:border-slate-900 transition-colors duration-300',
                exp.color
              ]">
                <UIcon :name="exp.icon" class="w-6 h-6 text-white" />
              </div>
            </div>

            <!-- Espace vide de l'autre côté (desktop uniquement) -->
            <div class="hidden md:block md:w-[calc(50%-2rem)]" />
          </div>
        </div>
      </div>

      <div class="flex items-center justify-center mb-8 mt-4 mx-auto">
        <UButton :to="$localePath('/experiences')" color="secondary" variant="subtle"
          trailing-icon="i-lucide-arrow-right" size="md"
          :aria-label="$t('experiences.see_more') + ' ' + $t('experiences_title').toLowerCase()">
          {{ $t('experiences.see_more') }}
        </UButton>
      </div>


    </div>
  </section>
</template>