<script setup lang="ts">

import image1 from '~/assets/images/projects/iticparis/itic-companion-login.png'
import image2 from '~/assets/images/projects/iticparis/itic-companion-dashboard.png'
import image3 from '~/assets/images/projects/iticparis/itic-companion-assignment.png'
import image4 from '~/assets/images/projects/iticparis/itic-companion-note.png'
import image5 from '~/assets/images/projects/iticparis/itic-companion-note2.png'
import image6 from '~/assets/images/projects/iticparis/itic-companion-ranking.png'
import image7 from '~/assets/images/projects/iticparis/itic-companion-ranking2.png'
import image8 from '~/assets/images/projects/iticparis/itic-companion-ranking3.png'

import iticmobile from '~/assets/images/projects/iticparis-mobile/itic-mobile.png'
import iticmobile2 from '~/assets/images/projects/iticparis-mobile/itic-mobile-2.png'
import iticmobile3 from '~/assets/images/projects/iticparis-mobile/itic-mobile-3.png'
import iticmobile4 from '~/assets/images/projects/iticparis-mobile/itic-mobile-4.png'
import iticmobile5 from '~/assets/images/projects/iticparis-mobile/itic-mobile-5.png'


const projects = [
  {
    title: 'ITIC TEACHER COMPANION',
    description: 'Plateforme de gestion de gestion des notes et gamification des étudiants pour les enseignants. Avec un système de classement et de récompenses.',
    tags: ['Vue.js', 'Nuxt', 'Spring Boot', 'PostgreSQL'],
    image: [
      image1,
      image2,
      image3,
      image4,
      image5,
      image6,
      image7,
      image8
    ],
    link: '',
    demo: 'https://demo.example.com',
    color: 'cyan',
    icon: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
  },
  {
    title: 'ITIC STUDENT COMPANION',
    description: 'Plateforme de gestion de gestion des notes et gamification des étudiants pour les étudiants. Avec un système de classement et de récompenses.',
    tags: ['React', 'Next.js', 'NestJS', 'MongoDB'],
    image: [
      iticmobile,
      iticmobile2,
      iticmobile3,
      iticmobile4,
      iticmobile5,
    ],
    link: 'https://github.com/Duorly',
    demo: 'https://demo.example.com',
    color: 'blue',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4'
  },
  {
    title: 'Banque Postale du Congo',
    description: 'Réseau social avec fils d\'actualité personnalisé, messagerie instantanée et partage de contenus multimédia.',
    tags: ['Angular', 'Laravel', 'MySQL', 'AWS'],
    image: '',
    link: 'https://github.com/Duorly',
    demo: 'https://demo.example.com',
    color: 'purple',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
  },
];
</script>

<template>
  <section id="menu_projects" class="py-20 px-4">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
        {{ $t('my_projects') }}
      </h2>
      <p class="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
        Découvrez une sélection de projets que j'ai développés, allant des applications web aux solutions mobiles.
      </p>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <UiSpotlightCard
            v-for="(project, index) in projects"
            :key="index"
            class-name="border border-slate-700/50 hover:border-cyan-500/50 group"
            spotlight-color="rgba(6, 182, 212, 0.15)"
        >
          <div class="flex flex-col h-full">
            <!-- Image/Icon -->
            <div v-if="project.image.length <= 0" class="mb-6 relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 aspect-video flex items-center justify-center">
              <svg class="w-20 h-20 text-cyan-400/30 group-hover:text-cyan-400/50 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="project.icon" />
              </svg>
              <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"/>
            </div>

            <UCarousel
                v-else
                v-slot="{ item }"
                :items="project?.image"
                class="w-full mx-auto mb-6"
                :autoplay="{ delay: 2000 }"
                loop
            >
              <img :src="item"  class="rounded-lg">
            </UCarousel>

            <!-- Content -->
            <div class="flex-1 flex flex-col">
              <h3 class="text-2xl font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors duration-300">
                {{ project.title }}
              </h3>

              <p class="text-slate-400 text-sm mb-4 leading-relaxed flex-1">
                {{ project.description }}
              </p>

              <!-- Tags -->
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                    v-for="(tag, i) in project.tags"
                    :key="i"
                    class="px-3 py-1 bg-slate-700/50 rounded-full text-xs font-medium text-slate-300 hover:bg-cyan-600/20 hover:text-cyan-300 transition-colors"
                >
                  {{ tag }}
                </span>
              </div>

              <!-- Links -->
              <div class="flex gap-3 pt-4 border-t border-slate-700/50">
                <NuxtLink
                    :disabled="project.link === ''"
                    :href="project?.link"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-cyan-600/20 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
                >
                  <UIcon name="lucide:github" size="18"/>
                  Code
                </NuxtLink>
                <NuxtLink
                    :href="project.demo"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 hover:from-cyan-600/30 hover:to-blue-600/30 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 border border-cyan-500/30"
                >
                  <UIcon name="lucide:external-link" size="18"/>
                  Demo
                </NuxtLink>
              </div>
            </div>
          </div>
        </UiSpotlightCard>
      </div>

      <!-- CTA Section -->
      <div class="mt-16 text-center">
        <p class="text-slate-400 mb-6">
          Vous voulez voir plus de projets ?
        </p>
        <a
            href="https://github.com/Duorly"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 backdrop-blur-xl border border-cyan-400/30 hover:border-cyan-400/60 px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-[0_8px_32px_0_rgba(6,182,212,0.2)] hover:shadow-[0_8px_32px_0_rgba(6,182,212,0.4)] hover:scale-105"
        >
          <UIcon name="lucide:github" size="22"/>
          Voir tous mes projets sur GitHub
          <UIcon name="lucide:arrow-right" size="22"/>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Animations optionnelles */
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.group:hover svg {
  animation: float 3s ease-in-out infinite;
}
</style>