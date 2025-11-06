<script setup lang="ts">
const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Plateforme e-commerce complète avec gestion des stocks, paiements sécurisés et tableau de bord administrateur.',
    tags: ['Vue.js', 'Nuxt', 'Spring Boot', 'PostgreSQL'],
    image: [
      'https://picsum.photos/640/400?random=1',
      'https://picsum.photos/640/400?random=2',
      'https://picsum.photos/640/400?random=3',
      'https://picsum.photos/640/400?random=4',
      'https://picsum.photos/640/400?random=5',
      'https://picsum.photos/640/400?random=6'
    ],
    link: 'https://github.com/Duorly',
    demo: 'https://demo.example.com',
    color: 'cyan',
    icon: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
  },
  {
    title: 'Task Management App',
    description: 'Application de gestion de tâches collaborative en temps réel avec système de notifications push.',
    tags: ['React', 'Next.js', 'NestJS', 'MongoDB'],
    image: '',
    link: 'https://github.com/Duorly',
    demo: 'https://demo.example.com',
    color: 'blue',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4'
  },
  {
    title: 'Social Network',
    description: 'Réseau social avec fils d\'actualité personnalisé, messagerie instantanée et partage de contenus multimédia.',
    tags: ['Angular', 'Laravel', 'MySQL', 'AWS'],
    image: '',
    link: 'https://github.com/Duorly',
    demo: 'https://demo.example.com',
    color: 'purple',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
  },
  {
    title: 'AI-Powered Dashboard',
    description: 'Tableau de bord analytique avec intelligence artificielle pour prédictions et recommandations personnalisées.',
    tags: ['Vue.js', 'Python', 'TensorFlow', 'GCP'],
    image: '',
    link: 'https://github.com/Duorly',
    demo: 'https://demo.example.com',
    color: 'emerald',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
  },
  {
    title: 'Mobile Banking App',
    description: 'Application bancaire mobile avec authentification biométrique, virements instantanés et gestion budgétaire.',
    tags: ['Flutter', 'Node.js', 'Firebase', 'Docker'],
    image: '',
    link: 'https://github.com/Duorly',
    demo: 'https://demo.example.com',
    color: 'rose',
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    title: 'Headless CMS',
    description: 'Système de gestion de contenu headless avec API GraphQL et interface d\'administration intuitive.',
    tags: ['Next.js', 'GraphQL', 'Prisma', 'PostgreSQL'],
    image: '',
    link: 'https://github.com/Duorly',
    demo: 'https://demo.example.com',
    color: 'amber',
    icon: 'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z'
  }
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
                <a
                    :href="project.link"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-cyan-600/20 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
                >
                  <UIcon name="lucide:github" size="18"/>
                  Code
                </a>
                <a
                    :href="project.demo"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 hover:from-cyan-600/30 hover:to-blue-600/30 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 border border-cyan-500/30"
                >
                  <UIcon name="lucide:external-link" size="18"/>
                  Demo
                </a>
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