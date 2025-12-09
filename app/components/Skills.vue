<script setup lang="ts">
import { computed } from 'vue';
const { t } = useI18n()

const skillCategories = computed(() => [
  {
    title: t('skills.backend'),
    color: 'cyan-400',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    skills: [
      { name: 'Laravel', icon: 'logos:laravel' },
      { name: 'Spring Boot', icon: 'logos:spring-icon' },
      { name: 'Express', icon: 'logos:nodejs-icon' },
      { name: 'NestJS', icon: 'logos:nestjs' }
    ]
  },
  {
    title: t('skills.frontend'),
    color: 'purple-400',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    skills: [
      { name: 'Vue.js', icon: 'logos:vue' },
      { name: 'Nuxt', icon: 'logos:nuxt-icon' },
      { name: 'React', icon: 'logos:react' },
      { name: 'Angular', icon: 'logos:angular-icon' },
      {name: 'Next.js', icon: 'logos:nextjs-icon'},
      { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
      { name: 'Vite', icon: 'logos:vitejs' }
    ]
  },
  {
    title: t('skills.cloud_devops'),
    color: 'blue-400',
    icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
    skills: [
      { name: 'AWS', icon: 'logos:aws' },
      { name: 'GCP', icon: 'logos:google-cloud' },
      { name: 'Cloudflare', icon: 'logos:cloudflare-icon' },
      { name: 'Vercel', icon: 'logos:vercel-icon' }
    ]
  },
  {
    title: t('skills.tools'),
    color: 'green-400',
    icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    skills: [
      { name: 'Docker', icon: 'logos:docker-icon' },
      { name: 'CI/CD (GitHub Actions)', icon: 'logos:github-actions' },
      { name: 'Git', icon: 'logos:git-icon' },
      { name: 'Jira', icon: 'logos:jira' },
      { name: 'Postman', icon: 'logos:postman-icon' }
    ]
  }
]);
</script>

<template>
  <section id="menu_skills" class="py-20 px-4">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
        {{ $t('skills_title') }}
      </h2>

      <div class="grid md:grid-cols-2 gap-6">
        <UiSpotlightCard
            v-for="(category, index) in skillCategories"
            :key="index"
            class-name="border border-slate-700/50 hover:border-cyan-500/50"
            spotlight-color="rgba(255, 255, 255, 0.25)"
        >
          <div class="flex items-center gap-3 mb-6">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="category.icon" />
            </svg>
            <h3 class="text-2xl font-bold text-white">{{ category.title }}</h3>
          </div>

          <div class="flex flex-wrap gap-2">
            <div
                v-for="(skill, i) in category.skills"
                :key="i"
                :class="`flex items-center gap-2 px-4 py-2 bg-slate-700/50 rounded-full text-sm font-medium hover:bg-${category.color.split('-')[0]}-600/20 hover:text-${category.color.split('-')[0]}-300 transition-colors`"
            >
              <UIcon :name="skill.icon" class="size-5 shrink-0" />
              {{ skill.name }}
            </div>
          </div>
        </UiSpotlightCard>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
