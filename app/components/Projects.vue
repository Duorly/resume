<script setup lang="ts">
const { projects } = useProjects()
</script>

<template>
  <section id="menu_projects" class="py-20 px-4">
    <div class="max-w-7xl mx-auto">
      <h2
        class="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
        {{ $t('projects.section_title') }}
      </h2>
      <p class="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
        {{ $t('projects.section_description') }}
      </p>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <UiSpotlightCard v-for="project in projects" :key="project.id"
          class-name="border border-slate-700/50 hover:border-cyan-500/50 group"
          spotlight-color="rgba(6, 182, 212, 0.15)">
          <div class="flex flex-col h-full">
            <!-- Image/Icon -->
            <div v-if="project.images.length <= 0"
              class="mb-6 relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 aspect-video flex items-center justify-center cursor-pointer"
              @click="navigateTo(`/projects/${project.id}`)">
              <svg class="w-20 h-20 text-cyan-400/30 group-hover:text-cyan-400/50 transition-colors duration-300"
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="project.icon" />
              </svg>
              <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
            </div>

            <UCarousel v-else v-slot="{ item }" :items="project?.images" class="w-full mx-auto mb-6 cursor-pointer"
              :autoplay="{ delay: 2000 }" loop @click="navigateTo(`/projects/${project.id}`)">
              <NuxtImg :src="item" :alt="project.title" class="rounded-lg aspect-video object-cover" loading="lazy"
                format="webp" quality="80" />
            </UCarousel>

            <!-- Content -->
            <div class="flex-1 flex flex-col">
              <NuxtLink :to="`/projects/${project.id}`" class="group/title inline-block">
                <h3
                  class="text-xl font-bold mb-3 dark:text-white text-slate-800 group-hover:text-cyan-300 transition-colors duration-300 flex items-center gap-2">
                  {{ project.title }}
                  <UIcon name="lucide:arrow-up-right" size="18"
                    class="opacity-0 group-hover:opacity-100 group-hover/title:translate-x-1 group-hover/title:-translate-y-1 transition-all" />
                </h3>
              </NuxtLink>

              <p class="text-slate-400 text-sm mb-4 leading-relaxed flex-1">
                {{ project.description }}
              </p>

              <!-- Tags -->
              <div class="flex flex-wrap gap-2 mb-6">
                <span v-for="(tag, i) in project.tags" :key="i"
                  class="px-3 py-1 bg-slate-700/50 rounded-full text-xs font-medium text-slate-300 hover:bg-cyan-600/20 hover:text-cyan-300 transition-colors">
                  {{ tag }}
                </span>
              </div>

              <!-- Links -->
              <div class="flex flex-col gap-3 pt-4 border-t border-slate-700/50">
                <NuxtLink :to="`/projects/${project.id}`"
                  class="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-cyan-600/10 hover:bg-cyan-600/20 text-cyan-400 border border-cyan-500/20 rounded-lg text-sm font-bold transition-all duration-300">
                  {{ $t('projects.view_details') }}
                </NuxtLink>
                <div class="flex gap-3">
                  <NuxtLink :disabled="project.link === ''" :href="project?.link" target="_blank"
                    rel="noopener noreferrer"
                    class="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg text-xs font-medium transition-all duration-300">
                    <UIcon name="lucide:github" size="14" />
                    {{ $t('projects.code') }}
                  </NuxtLink>
                  <NuxtLink :href="project.demo" target="_blank" rel="noopener noreferrer"
                    class="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg text-xs font-medium transition-all duration-300">
                    <UIcon name="lucide:external-link" size="14" />
                    {{ $t('projects.demo') }}
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </UiSpotlightCard>
      </div>

      <!-- CTA Section -->
      <div class="mt-16 text-center">
        <p class="text-slate-400 mb-6">
          {{ $t('projects.more_projects') }}
        </p>
        <a href="https://github.com/Duorly" target="_blank" rel="noopener noreferrer"
          class="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 backdrop-blur-xl border border-cyan-400/30 hover:border-cyan-400/60 px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-[0_8px_32px_0_rgba(6,182,212,0.2)] hover:shadow-[0_8px_32px_0_rgba(6,182,212,0.4)] hover:scale-105">
          <UIcon name="lucide:github" size="22" />
          {{ $t('projects.see_all_github') }}
          <UIcon name="lucide:arrow-right" size="22" />
        </a>
      </div>
    </div>
  </section>
</template>


<style scoped>
/* Animations optionnelles */
@keyframes float {

  0%,
  100% {
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