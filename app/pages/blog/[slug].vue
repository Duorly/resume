<script setup lang="ts">
const { path } = useRoute()
const { data: article } = await useAsyncData(`content-${path}`, () => queryCollection('blog').path(path).first())

const formatDate = (dateString: string) => {
  if (!dateString) return ''
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
    <div class="max-w-3xl mx-auto px-4 py-32">
      <!-- Back Link -->
      <NuxtLink 
        to="/blog" 
        class="inline-flex items-center gap-2 text-slate-500 hover:text-cyan-400 mb-8 transition-colors"
      >
        <UIcon name="lucide:arrow-left" class="w-5 h-5" />
        Retour au blog
      </NuxtLink>

      <article v-if="article">
        <header class="mb-12">
            <div class="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400 mb-4">
              <UIcon name="lucide:calendar" class="w-4 h-4" />
              <time>{{ formatDate(article.date) }}</time>
            </div>
            <h1 class="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {{ article.title }}
            </h1>
            <p class="text-xl text-slate-600 dark:text-slate-300 leading-relaxed border-l-4 border-cyan-400/50 pl-6">
              {{ article.description }}
            </p>
        </header>

        <NuxtImg
          v-if="article.cover"
          :src="article.cover"
          :alt="article.title"
          class="w-full h-64 md:h-96 object-cover rounded-2xl mb-12 shadow-lg"
        />

        <div class="prose dark:prose-invert prose-slate prose-lg max-w-none prose-headings:scroll-mt-24 prose-a:text-cyan-400 hover:prose-a:text-cyan-300">
          <ContentRenderer :value="article" />
        </div>
      </article>

      <div v-else class="text-center py-20">
        <h1 class="text-2xl font-bold mb-4">Article non trouvé</h1>
        <NuxtLink to="/blog" class="text-cyan-400 hover:underline">Retourner au blog</NuxtLink>
      </div>
    </div>
  </div>
</template>


