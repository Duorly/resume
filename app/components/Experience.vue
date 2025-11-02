<script setup lang="ts">
import type {TimelineItem} from '@nuxt/ui'

const items = [
  {
    date: 'Oct 2024 - Présent',
    title: 'Tech Lead',
    subtitle: 'XKSGROUP',
    description: 'Conception d\'architecture technique et validation des choix technologiques. Revue de code et gestion de la dette technique.',
    icon: 'i-lucide-briefcase',
    value: 'xksgroup',
    location: 'Cergy, France',
    logo: 'https://via.placeholder.com/60x60/0891b2/ffffff?text=XKS',
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
    subtitle: 'FASEYA',
    description: 'Développement backend et déploiement sur AWS. Gestion de la dette technique et choix d\'architectures.',
    icon: 'i-lucide-server',
    value: 'faseya',
    location: 'Dakar, Sénégal',
    logo: 'https://via.placeholder.com/60x60/06b6d4/ffffff?text=FASEYA',
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
    subtitle: 'Nanocreatives',
    description: 'Conception et développement de solutions logicielles. Déploiement d\'applications sur cloud Linux.',
    icon: 'i-lucide-layers',
    value: 'nanocreatives',
    location: 'Brazzaville, Congo',
    logo: 'https://via.placeholder.com/60x60/0ea5e9/ffffff?text=NC',
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
    subtitle: 'UNFPA (Nations Unies)',
    description: 'Déploiement de la plateforme GLPI. Collecte des besoins secteur santé et production de rapports statistiques.',
    icon: 'i-lucide-globe',
    value: 'unfpa',
    location: 'Brazzaville, Congo',
    logo: 'https://via.placeholder.com/60x60/0284c7/ffffff?text=UN',
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
    subtitle: 'AGRER - Union Européenne',
    description: 'Développement d\'une application agricole. Pilotage de projet et coordination d\'équipes.',
    icon: 'i-lucide-leaf',
    value: 'agrer',
    location: 'Brazzaville, Congo',
    logo: 'https://via.placeholder.com/60x60/0369a1/ffffff?text=EU',
    tasks: [
      'Développement d\'une application agricole',
      'Pilotage de projet et coordination d\'équipes',
      'Collaboration avec la délégation UE',
      'Formation de plus de 300 utilisateurs'
    ]
  }
] satisfies TimelineItem[]
</script>

<template>
  <section id="experiences" class="py-20 px-4 bg-slate-900/50">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
        Experience Professionnelle
      </h2>
      <div class="max-w-2xl mx-auto w-full">
        <UTimeline
            :items="items" :default-value="0"
            :ui="{ item: 'even:flex-row-reverse even:-translate-x-[calc(100%-2rem)] even:text-right' }"
            class="translate-x-[calc(50%-1rem)]"
        >
          <template #title="{ item }">
            <div class="flex justify-between items-center w-full">
              <div class="font-bold">{{ item.title }}</div>
              <div class="flex justify-center items-center gap-2 font-normal text-muted">
                <UIcon name="lucide:map-pin"/>
                {{ item.location }}
              </div>
            </div>
          </template>
        </UTimeline>
      </div>
    </div>
  </section>
</template>