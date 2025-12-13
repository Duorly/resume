<script setup lang="ts">
import { ref, computed } from 'vue'

const { data: articles } = await useAsyncData('blog', () => queryCollection('blog').order('date', 'DESC').all())

const search = ref('')
const selectedCategory = ref('')

// Extract unique categories
const categories = computed(() => {
  if (!articles.value) return []
  const uniqueCategories = new Set(articles.value.map(article => article.category).filter(Boolean))
  return Array.from(uniqueCategories)
})

// Filter articles
const filteredArticles = computed(() => {
  if (!articles.value) return []

  return articles.value.filter(article => {
    const matchesSearch = search.value === '' || 
      article.title.toLowerCase().includes(search.value.toLowerCase()) || 
      article.description.toLowerCase().includes(search.value.toLowerCase())
    
    const matchesCategory = selectedCategory.value === '' || article.category === selectedCategory.value

    return matchesSearch && matchesCategory
  })
})

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(date)
}

useSeoMeta({
  title: 'Blog - Nebeldev',
  description: 'Partage de connaissances, tutoriels et réflexions sur le développement web, Vue.js, Nuxt et l\'architecture logicielle.',
  ogTitle: 'Blog - Nebeldev',
  ogDescription: 'Partage de connaissances, tutoriels et réflexions sur le développement web, Vue.js, Nuxt et l\'architecture logicielle.',
  ogImage: '/images/photo1.jpg', // Fallback image or a dedicated blog cover
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <div class="min-h-screen bg-gray-50 text-slate-900 dark:bg-gradient-to-br dark:from-slate-950 dark:via-blue-950 dark:to-slate-900 dark:text-white transition-colors duration-300">
    <div class="max-w-6xl mx-auto px-4 py-32">
      <h1 class="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
        Blog
      </h1>
      <p class="text-xl text-slate-600 dark:text-slate-300 mb-12">
        Partage de connaissances, tutoriels et réflexions sur le développement web.
      </p>

      <!-- Search and Filter -->
      <div class="flex flex-col md:flex-row gap-4 mb-12">
        <div class="relative flex-1">
          <UIcon name="lucide:search" class="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 pointer-events-none" />
          <input 
            v-model="search"
            type="text" 
            placeholder="Rechercher un article..." 
            class="w-full pl-10 pr-4 py-3 rounded-xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-all placeholder:text-slate-400 text-slate-700 dark:text-slate-200"
          >
        </div>
        <div class="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
          <button 
            @click="selectedCategory = ''"
            :class="[
              'px-4 py-3 rounded-xl border whitespace-nowrap transition-all font-medium',
              selectedCategory === '' 
                ? 'bg-cyan-400/10 border-cyan-400 text-cyan-400' 
                : 'bg-white dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-cyan-400/50'
            ]"
          >
            Tous
          </button>
          <button 
            v-for="category in categories"
            :key="category"
            @click="selectedCategory = category"
            :class="[
              'px-4 py-3 rounded-xl border whitespace-nowrap transition-all font-medium',
              selectedCategory === category
                ? 'bg-cyan-400/10 border-cyan-400 text-cyan-400' 
                : 'bg-white dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-cyan-400/50'
            ]"
          >
            {{ category }}
          </button>
        </div>
      </div>

      <div v-if="filteredArticles.length > 0" class="grid gap-8">
        <NuxtLink
          v-for="article in filteredArticles"
          :key="article.path"
          :to="article.path"
          class="group block p-6 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-cyan-400/50 dark:hover:border-cyan-500/50 transition-all shadow-sm hover:shadow-lg"
        >
          <div class="flex flex-col md:flex-row md:items-center gap-6">
             <div v-if="article.cover" class="w-full md:w-72 shrink-0">
                <NuxtImg
                  :src="article.cover"
                  :alt="article.title"
                  class="w-full h-56 md:h-48 object-cover rounded-xl shadow-sm"
                />
             </div>
             <div class="flex-1">
                <div class="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400 mb-2">
                  <UIcon name="lucide:calendar" class="w-4 h-4" />
                  <time>{{ formatDate(article.date) }}</time>
                </div>
                <div class="flex flex-wrap gap-2 mb-3">
                  <span class="px-2 py-0.5 rounded-md bg-cyan-400/10 text-cyan-400 text-xs font-bold border border-cyan-400/20">
                    {{ article.category }}
                  </span>
                </div>
                <h2 class="text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                  {{ article.title }}
                </h2>
                <p class="text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2 mb-4">
                  {{ article.description }}
                </p>
                <div v-if="article.tags" class="flex flex-wrap gap-2">
                  <span 
                    v-for="tag in article.tags" 
                    :key="tag" 
                    class="text-xs text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded"
                  >
                    #{{ tag }}
                  </span>
                </div>
             </div>
             <div class="flex items-center text-cyan-400 font-medium group-hover:translate-x-1 transition-transform">
                Lire
                <UIcon name="lucide:arrow-right" class="ml-2 w-5 h-5" />
             </div>
          </div>
        </NuxtLink>
      </div>

      <!-- Empty State -->
      <div v-else class="text-center py-20">
        <div class="inline-flex justify-center items-center p-4 rounded-full bg-slate-100 dark:bg-slate-800 mb-4">
          <UIcon name="lucide:search-x" class="w-8 h-8 text-slate-400" />
        </div>
        <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">Aucun article trouvé</h3>
        <p class="text-slate-500 dark:text-slate-400">
          Essayez de modifier votre recherche ou les filtres.
        </p>
        <button 
          @click="search = ''; selectedCategory = ''"
          class="mt-6 text-cyan-400 hover:text-cyan-300 font-medium"
        >
          Réinitialiser les filtres
        </button>
      </div>
    </div>
  </div>
</template>
