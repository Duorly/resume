<script setup lang="ts">
const skillCategories = [
  {
    title: 'Backend',
    color: 'cyan-400',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    skills: ['PHP (Laravel, Symfony)', 'Java (Spring Boot)', 'Python', 'Node.js (Express, NestJS)']
  },
  {
    title: 'Frontend',
    color: 'purple-400',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    skills: ['Vue.js', 'Nuxt', 'React', 'Angular']
  },
  {
    title: 'Cloud & DevOps',
    color: 'blue-400',
    icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
    skills: ['AWS', 'GCP', 'Cloudflare']
  },
  {
    title: 'Outils & Méthodologies',
    color: 'green-400',
    icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    skills: ['Docker', 'CI/CD (Jenkins, Github Actions)', 'Git', 'Jira', 'Scrum/Agile']
  }
];
</script>

<template>
  <section id="competences" class="py-20 px-4">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
        Compétences Techniques
      </h2>

      <div class="grid md:grid-cols-2 gap-6">
        <div
            v-for="(category, index) in skillCategories"
            :key="index"
            class="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
        >
          <div class="flex items-center gap-3 mb-6">
            <svg :class="`text-${category.color}`" class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="category.icon" />
            </svg>
            <h3 :class="`text-2xl font-bold text-${category.color}`">{{ category.title }}</h3>
          </div>
          <div class="flex flex-wrap gap-2">
              <span
                  v-for="(skill, i) in category.skills"
                  :key="i"
                  :class="`px-4 py-2 bg-slate-700/50 rounded-full text-sm font-medium hover:bg-${category.color.split('-')[0]}-600/20 hover:text-${category.color.split('-')[0]}-300 transition-colors`"
              >
                {{ skill }}
              </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>