<script setup lang="ts">
import { ref, computed } from 'vue'

const { data: articles } = await useAsyncData('blog', () => queryCollection('blog').order('date', 'DESC').all())

const search = ref('')
const selectedCategory = ref('')
const selectedTags = ref<string[]>([])
const showFilters = ref(false)

// Pagination
const currentPage = ref(1)
const articlesPerPage = ref(6)

// Extract unique categories
const categories = computed(() => {
  if (!articles.value) return []
  const uniqueCategories = new Set(articles.value.map(article => article.category).filter(Boolean))
  return Array.from(uniqueCategories)
})

// Extract unique tags
const allTags = computed(() => {
  if (!articles.value) return []
  const tags = new Set<string>()
  articles.value.forEach(article => {
    if (article.tags && Array.isArray(article.tags)) {
      article.tags.forEach((tag: string) => tags.add(tag))
    }
  })
  return Array.from(tags).sort()
})

// Toggle tag selection
const toggleTag = (tag: string) => {
  const index = selectedTags.value.indexOf(tag)
  if (index > -1) {
    selectedTags.value.splice(index, 1)
  } else {
    selectedTags.value.push(tag)
  }
  currentPage.value = 1 // Reset to first page when filter changes
}

// Filter articles
const filteredArticles = computed(() => {
  if (!articles.value) return []

  return articles.value.filter(article => {
    const matchesSearch = search.value === '' ||
      article.title.toLowerCase().includes(search.value.toLowerCase()) ||
      article.description.toLowerCase().includes(search.value.toLowerCase())

    const matchesCategory = selectedCategory.value === '' || article.category === selectedCategory.value

    const matchesTags = selectedTags.value.length === 0 ||
      (article.tags && selectedTags.value.some(tag => article.tags.includes(tag)))

    return matchesSearch && matchesCategory && matchesTags
  })
})

// Pagination computed properties
const totalPages = computed(() => Math.ceil(filteredArticles.value.length / articlesPerPage.value))

const paginatedArticles = computed(() => {
  const start = (currentPage.value - 1) * articlesPerPage.value
  const end = start + articlesPerPage.value
  return filteredArticles.value.slice(start, end)
})

const pageNumbers = computed(() => {
  const pages = []
  const maxVisible = 5

  if (totalPages.value <= maxVisible) {
    for (let i = 1; i <= totalPages.value; i++) {
      pages.push(i)
    }
  } else {
    if (currentPage.value <= 3) {
      for (let i = 1; i <= 4; i++) {
        pages.push(i)
      }
      pages.push('...')
      pages.push(totalPages.value)
    } else if (currentPage.value >= totalPages.value - 2) {
      pages.push(1)
      pages.push('...')
      for (let i = totalPages.value - 3; i <= totalPages.value; i++) {
        pages.push(i)
      }
    } else {
      pages.push(1)
      pages.push('...')
      for (let i = currentPage.value - 1; i <= currentPage.value + 1; i++) {
        pages.push(i)
      }
      pages.push('...')
      pages.push(totalPages.value)
    }
  }

  return pages
})

// Pagination functions
const goToPage = (page: number) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

// Count active filters
const activeFiltersCount = computed(() => {
  let count = 0
  if (selectedCategory.value) count++
  if (selectedTags.value.length > 0) count += selectedTags.value.length
  return count
})

// Reset all filters
const resetFilters = () => {
  search.value = ''
  selectedCategory.value = ''
  selectedTags.value = []
  currentPage.value = 1
}

// Watch for filter changes to reset page
watch([search, selectedCategory], () => {
  currentPage.value = 1
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
  ogImage: '/images/photo1.jpg',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <div
    class="min-h-screen bg-gray-50 text-slate-900 dark:bg-gradient-to-br dark:from-slate-950 dark:via-blue-950 dark:to-slate-900 dark:text-white transition-colors duration-300">
    <div class="max-w-6xl mx-auto px-4 py-32">
      <!-- Header -->
      <div class="mb-12">
        <h1
          class="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Blog
        </h1>
        <p class="text-xl text-slate-600 dark:text-slate-300">
          Partage de connaissances, tutoriels et réflexions sur le développement web.
        </p>
      </div>

      <!-- Filters Section -->
      <div class="mb-8">
        <!-- Search Bar with Filter Toggle -->
        <div class="flex flex-col md:flex-row gap-3 mb-6">
          <div class="relative flex-1">
            <UIcon name="lucide:search"
              class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 pointer-events-none" />
            <input v-model="search" type="text" placeholder="Rechercher un article..."
              class="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none transition-all placeholder:text-slate-400 text-slate-700 dark:text-slate-200">
          </div>

          <button @click="showFilters = !showFilters"
            class="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-cyan-400/50 transition-all font-medium text-slate-700 dark:text-slate-200 relative">
            <UIcon name="lucide:filter" class="w-5 h-5" />
            <span class="hidden sm:inline">Filtres</span>
            <span v-if="activeFiltersCount > 0"
              class="absolute -top-2 -right-2 flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-cyan-600 dark:bg-cyan-500 rounded-full">
              {{ activeFiltersCount }}
            </span>
          </button>

          <button v-if="activeFiltersCount > 0" @click="resetFilters"
            class="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-900/30 transition-all font-medium text-red-600 dark:text-red-400">
            <UIcon name="lucide:x" class="w-5 h-5" />
            <span class="hidden sm:inline">Réinitialiser</span>
          </button>
        </div>

        <!-- Expandable Filters Panel -->
        <transition enter-active-class="transition-all duration-300 ease-out" enter-from-class="opacity-0 max-h-0"
          enter-to-class="opacity-100 max-h-96" leave-active-class="transition-all duration-200 ease-in"
          leave-from-class="opacity-100 max-h-96" leave-to-class="opacity-0 max-h-0">
          <div v-if="showFilters" class="overflow-hidden">
            <div
              class="p-6 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 space-y-6">
              <!-- Categories Filter -->
              <div>
                <div class="flex items-center gap-2 mb-3">
                  <UIcon name="lucide:folder" class="w-4 h-4 text-slate-500 dark:text-slate-400" />
                  <h3 class="font-semibold text-slate-900 dark:text-white">Catégories</h3>
                </div>
                <div class="flex flex-wrap gap-2">
                  <button @click="selectedCategory = ''; currentPage = 1" :class="[
                    'px-4 py-2 rounded-lg border whitespace-nowrap transition-all font-medium text-sm',
                    selectedCategory === ''
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 border-transparent text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-cyan-400/50 hover:text-cyan-600 dark:hover:text-cyan-400'
                  ]">
                    <span class="flex items-center gap-1.5">
                      <UIcon name="lucide:grid-3x3" class="w-4 h-4" />
                      Toutes
                    </span>
                  </button>
                  <button v-for="category in categories" :key="category"
                    @click="selectedCategory = category; currentPage = 1" :class="[
                      'px-4 py-2 rounded-lg border whitespace-nowrap transition-all font-medium text-sm',
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-cyan-600 to-blue-600 border-transparent text-white shadow-lg shadow-cyan-500/25'
                        : 'bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-cyan-400/50 hover:text-cyan-600 dark:hover:text-cyan-400'
                    ]">
                    {{ category }}
                  </button>
                </div>
              </div>

              <!-- Tags Filter -->
              <div>
                <div class="flex items-center gap-2 mb-3">
                  <UIcon name="lucide:tags" class="w-4 h-4 text-slate-500 dark:text-slate-400" />
                  <h3 class="font-semibold text-slate-900 dark:text-white">Tags</h3>
                  <span v-if="selectedTags.length > 0"
                    class="text-xs font-medium text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-900/20 px-2 py-0.5 rounded-full">
                    {{ selectedTags.length }} sélectionné{{ selectedTags.length > 1 ? 's' : '' }}
                  </span>
                </div>
                <div class="flex flex-wrap gap-2">
                  <button v-for="tag in allTags" :key="tag" @click="toggleTag(tag)" :class="[
                    'px-3 py-1.5 rounded-lg border text-sm font-medium transition-all',
                    selectedTags.includes(tag)
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 border-transparent text-white shadow-md shadow-cyan-500/20'
                      : 'bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-cyan-400/50 hover:text-cyan-600 dark:hover:text-cyan-400'
                  ]">
                    <span class="flex items-center gap-1">
                      <span>#{{ tag }}</span>
                      <UIcon v-if="selectedTags.includes(tag)" name="lucide:check" class="w-3 h-3" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </transition>

        <!-- Active Filters Pills (always visible when filters are active) -->
        <div v-if="activeFiltersCount > 0 && !showFilters" class="flex flex-wrap gap-2 mt-4">
          <div v-if="selectedCategory"
            class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-50 dark:bg-cyan-900/20 border border-cyan-200 dark:border-cyan-800 text-cyan-700 dark:text-cyan-300 text-sm font-medium">
            <UIcon name="lucide:folder" class="w-3 h-3" />
            <span>{{ selectedCategory }}</span>
            <button @click="selectedCategory = ''; currentPage = 1"
              class="ml-1 hover:text-cyan-900 dark:hover:text-cyan-100">
              <UIcon name="lucide:x" class="w-3 h-3" />
            </button>
          </div>
          <div v-for="tag in selectedTags" :key="tag"
            class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-sm font-medium">
            <UIcon name="lucide:tag" class="w-3 h-3" />
            <span>#{{ tag }}</span>
            <button @click="toggleTag(tag)" class="ml-1 hover:text-blue-900 dark:hover:text-blue-100">
              <UIcon name="lucide:x" class="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      <!-- Results Count and Articles Per Page -->
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div class="text-sm font-medium text-slate-600 dark:text-slate-400">
          <span class="text-cyan-600 dark:text-cyan-400 font-bold">{{ filteredArticles.length }}</span>
          article{{ filteredArticles.length > 1 ? 's' : '' }} trouvé{{ filteredArticles.length > 1 ? 's' : '' }}
          <span v-if="totalPages > 1" class="text-slate-500 dark:text-slate-500">
            · Page {{ currentPage }} sur {{ totalPages }}
          </span>
        </div>

        <div class="flex items-center gap-2">
          <label class="text-sm text-slate-600 dark:text-slate-400">Articles par page:</label>
          <select v-model.number="articlesPerPage" @change="currentPage = 1"
            class="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 text-sm font-medium focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/20 outline-none transition-all">
            <option :value="3">3</option>
            <option :value="6">6</option>
            <option :value="9">9</option>
            <option :value="12">12</option>
          </select>
        </div>
      </div>

      <!-- Articles Grid -->
      <div v-if="paginatedArticles.length > 0" class="grid gap-6 mb-8">
        <NuxtLink v-for="article in paginatedArticles" :key="article.path" :to="$localePath(article.path)"
          class="group block p-6 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-cyan-400/50 dark:hover:border-cyan-500/50 transition-all shadow-sm hover:shadow-xl hover:shadow-cyan-500/10">
          <div class="flex flex-col md:flex-row md:items-center gap-6">
            <div v-if="article.cover" class="w-full md:w-72 shrink-0">
              <NuxtImg :src="article.cover" :alt="article.title"
                class="w-full h-56 md:h-48 object-cover rounded-xl shadow-sm group-hover:shadow-md transition-shadow" />
            </div>
            <div class="flex-1">
              <div class="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400 mb-2">
                <UIcon name="lucide:calendar" class="w-4 h-4" />
                <time>{{ formatDate(article.date) }}</time>
              </div>
              <div class="flex flex-wrap gap-2 mb-3">
                <span
                  class="px-3 py-1 rounded-lg bg-gradient-to-r from-cyan-600/10 to-blue-600/10 dark:from-cyan-400/10 dark:to-blue-400/10 text-cyan-700 dark:text-cyan-400 text-xs font-bold border border-cyan-600/20 dark:border-cyan-400/20">
                  {{ article.category }}
                </span>
              </div>
              <h2
                class="text-2xl font-bold mb-2 text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                {{ article.title }}
              </h2>
              <p class="text-slate-700 dark:text-slate-300 leading-relaxed line-clamp-2 mb-4">
                {{ article.description }}
              </p>
              <div v-if="article.tags" class="flex flex-wrap gap-2">
                <span v-for="tag in article.tags" :key="tag"
                  class="text-xs text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md font-medium">
                  #{{ tag }}
                </span>
              </div>
            </div>
            <div
              class="flex items-center text-cyan-600 dark:text-cyan-400 font-medium group-hover:translate-x-1 transition-transform">
              Lire
              <UIcon name="lucide:arrow-right" class="ml-2 w-5 h-5" />
            </div>
          </div>
        </NuxtLink>
      </div>

      <!-- Pagination Controls -->
      <div v-if="filteredArticles.length > 0 && totalPages > 1"
        class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
        <div class="flex items-center gap-2">
          <!-- Previous Button -->
          <button @click="goToPage(currentPage - 1)" :disabled="currentPage === 1" :class="[
            'flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all',
            currentPage === 1
              ? 'bg-slate-100 dark:bg-slate-800/50 text-slate-400 dark:text-slate-600 cursor-not-allowed'
              : 'bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:border-cyan-400/50 hover:text-cyan-600 dark:hover:text-cyan-400'
          ]">
            <UIcon name="lucide:chevron-left" class="w-4 h-4" />
            <span class="hidden sm:inline">Précédent</span>
          </button>

          <!-- Page Numbers -->
          <div class="flex items-center gap-1">
            <button v-for="(page, index) in pageNumbers" :key="index" @click="page !== '...' && goToPage(page)"
              :disabled="page === '...'" :class="[
                'min-w-[40px] h-10 rounded-lg font-medium transition-all text-sm',
                page === currentPage
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                  : page === '...'
                    ? 'bg-transparent text-slate-400 dark:text-slate-600 cursor-default'
                    : 'bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:border-cyan-400/50 hover:text-cyan-600 dark:hover:text-cyan-400'
              ]">
              {{ page }}
            </button>
          </div>

          <!-- Next Button -->
          <button @click="goToPage(currentPage + 1)" :disabled="currentPage === totalPages" :class="[
            'flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all',
            currentPage === totalPages
              ? 'bg-slate-100 dark:bg-slate-800/50 text-slate-400 dark:text-slate-600 cursor-not-allowed'
              : 'bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:border-cyan-400/50 hover:text-cyan-600 dark:hover:text-cyan-400'
          ]">
            <span class="hidden sm:inline">Suivant</span>
            <UIcon name="lucide:chevron-right" class="w-4 h-4" />
          </button>
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="filteredArticles.length === 0" class="text-center py-20">
        <div
          class="inline-flex justify-center items-center w-20 h-20 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 mb-6 shadow-lg">
          <UIcon name="lucide:search-x" class="w-10 h-10 text-slate-400" />
        </div>
        <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-3">Aucun article trouvé</h3>
        <p class="text-slate-600 dark:text-slate-400 mb-6 max-w-md mx-auto">
          Aucun article ne correspond à vos critères de recherche. Essayez de modifier vos filtres.
        </p>
        <button @click="resetFilters"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all">
          <UIcon name="lucide:refresh-ccw" class="w-4 h-4" />
          Réinitialiser les filtres
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>