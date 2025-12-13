<script setup lang="ts">
const { data: articles } = await useAsyncData('blog', () => queryCollection('blog').order('date', 'DESC').all())

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(date)
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 text-slate-900 dark:bg-gradient-to-br dark:from-slate-950 dark:via-blue-950 dark:to-slate-900 dark:text-white transition-colors duration-300">
    <div class="max-w-4xl mx-auto px-4 py-32">
      <h1 class="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
        Blog
      </h1>
      <p class="text-xl text-slate-600 dark:text-slate-300 mb-12">
        Partage de connaissances, tutoriels et réflexions sur le développement web.
      </p>

      <div class="grid gap-8">
        <NuxtLink
          v-for="article in articles"
          :key="article.path"
          :to="article.path"
          class="group block p-6 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-cyan-400/50 dark:hover:border-cyan-500/50 transition-all shadow-sm hover:shadow-lg"
        >
          <div class="flex flex-col md:flex-row md:items-center gap-6">
             <div class="flex-1">
                <div class="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400 mb-2">
                  <UIcon name="lucide:calendar" class="w-4 h-4" />
                  <time>{{ formatDate(article.date) }}</time>
                </div>
                <h2 class="text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                  {{ article.title }}
                </h2>
                <p class="text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                  {{ article.description }}
                </p>
             </div>
             <div class="flex items-center text-cyan-400 font-medium group-hover:translate-x-1 transition-transform">
                Lire l'article
                <UIcon name="lucide:arrow-right" class="ml-2 w-5 h-5" />
             </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
