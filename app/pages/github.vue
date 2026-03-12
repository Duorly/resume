<template>
  <div class="min-h-screen pt-24 pb-20 px-4 bg-gray-50 dark:bg-gradient-to-br dark:from-slate-950 dark:via-blue-950 dark:to-slate-900 transition-colors duration-300">
    <div class="max-w-6xl mx-auto">
      
      <!-- Headings / Setup -->
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          {{ $t('github.title', 'GitHub Insights') }}
        </h1>
        <p class="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
          {{ $t('github.description', 'A deep dive into my open-source contributions, repositories, and favorite languages.') }}
        </p>
      </div>

      <!-- Loading State -->
      <div v-if="pending" class="flex flex-col items-center justify-center py-20">
        <UIcon name="lucide:loader-2" class="animate-spin text-cyan-500" size="40" />
        <p class="mt-4 text-slate-500 dark:text-slate-400">Fetching live stats from GitHub...</p>
      </div>

      <!-- Error State -->
      <div v-else-if="error || data?.error" class="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-6 rounded-xl text-center shadow-lg border border-red-200 dark:border-red-800/50">
        <UIcon name="lucide:alert-circle" size="32" class="mx-auto mb-2" />
        <h3 class="text-xl font-bold mb-2">Oops!</h3>
        <p>{{ error?.message || data?.error || 'Could not load GitHub statistics at this time. Please try again later.' }}</p>
      </div>

      <!-- Content -->
      <div v-else-if="data" class="space-y-12">
        
        <!-- Top Metrics Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <UiSpotlightCard class-name="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm dark:shadow-none p-6 flex flex-col items-center text-center">
            <UIcon name="lucide:star" class="text-yellow-400 mb-3" size="32" />
            <div class="text-3xl font-extrabold text-slate-800 dark:text-white mb-1"><UiCountUp :to="data.stats.totalStars" /></div>
            <div class="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider">Total Stars</div>
          </UiSpotlightCard>
          
          <UiSpotlightCard class-name="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm dark:shadow-none p-6 flex flex-col items-center text-center">
            <UIcon name="lucide:git-fork" class="text-cyan-500 mb-3" size="32" />
            <div class="text-3xl font-extrabold text-slate-800 dark:text-white mb-1"><UiCountUp :to="data.stats.totalForks" /></div>
            <div class="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider">Total Forks</div>
          </UiSpotlightCard>
          
          <UiSpotlightCard class-name="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm dark:shadow-none p-6 flex flex-col items-center text-center">
            <UIcon name="lucide:folder-dot" class="text-emerald-500 mb-3" size="32" />
            <div class="text-3xl font-extrabold text-slate-800 dark:text-white mb-1"><UiCountUp :to="data.profile.public_repos" /></div>
            <div class="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider">Public Repos</div>
          </UiSpotlightCard>
        </div>

        <!-- Charts Section -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <!-- Top Languages Chart -->
          <UiSpotlightCard class-name="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm dark:shadow-none p-6 flex flex-col h-full min-h-[400px]">
            <h3 class="text-xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
              <UIcon name="lucide:code-xml" class="text-cyan-500" />
              {{ $t('github.most_used_languages', 'Most Used Languages') }}
            </h3>
            <div class="flex-1 w-full h-full relative" style="min-height: 250px;">
              <Doughnut v-if="languageChartData" :data="languageChartData" :options="chartOptions" />
            </div>
          </UiSpotlightCard>

          <!-- Top Repositories Chart -->
          <UiSpotlightCard class-name="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm dark:shadow-none p-6 flex flex-col h-full min-h-[400px]">
            <h3 class="text-xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
              <UIcon name="lucide:award" class="text-yellow-400" />
              {{ $t('github.most_starred_repos', 'Most Starred Repositories') }}
            </h3>
            <div class="flex-1 w-full h-full relative" style="min-height: 250px;">
              <Bar v-if="repoChartData" :data="repoChartData" :options="barOptions" />
            </div>
          </UiSpotlightCard>

        </div>

        <!-- Heatmap Graph -->
        <div class="mt-8">
          <UiSpotlightCard class-name="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm dark:shadow-none p-6 flex flex-col">
            <h3 class="text-xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
              <UIcon name="lucide:activity" class="text-emerald-500" />
              {{ $t('github.contribution_graph', 'Contribution Graph') }}
            </h3>
            
            <div class="w-full flex justify-center overflow-hidden mb-4">
              <div class="overflow-x-auto pb-4 max-w-full custom-scrollbar">
                <div class="inline-grid grid-flow-col grid-rows-7 gap-1.5" v-if="heatmapDays.length">
                  <!-- Tooltip for each day -->
                  <div v-for="day in heatmapDays" :key="day.date" 
                       class="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-[4px] transition-all duration-300 relative group"
                       :class="[getHeatmapColor(day.intensity), { 'cursor-pointer hover:ring-2 hover:ring-offset-1 hover:ring-cyan-500 dark:hover:ring-offset-slate-900 border border-slate-200/50 dark:border-slate-800/50': !day.isEmpty, 'opacity-0': day.isEmpty }]">
                    
                    <div v-if="!day.isEmpty" class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-slate-900 dark:bg-slate-700 text-white font-medium text-xs rounded-lg shadow-xl opacity-0 group-hover:opacity-100 whitespace-nowrap z-10 pointer-events-none transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                      <span v-if="day.intensity === '0'">No contributions</span>
                      <span v-else>{{ getContributionText(day.intensity) }}</span>
                      <span class="text-slate-400 ml-1">on {{ new Date(day.date).toLocaleDateString() }}</span>
                      <!-- Little arrow for tooltip -->
                      <div class="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900 dark:border-t-slate-700"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Heatmap Legend -->
            <div class="flex items-center justify-end gap-2 mt-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              Less
              <div class="flex gap-1.5">
                <div class="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-[4px] bg-slate-100 dark:bg-slate-800/80 border border-slate-200/50 dark:border-slate-800/50"></div>
                <div class="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-[4px] bg-cyan-200 dark:bg-cyan-900/60 border border-cyan-300/30 dark:border-cyan-800/30"></div>
                <div class="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-[4px] bg-cyan-300 dark:bg-cyan-700/80 border border-cyan-400/30 dark:border-cyan-600/30"></div>
                <div class="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-[4px] bg-cyan-400 dark:bg-cyan-500 border border-cyan-500/30 dark:border-cyan-400/30"></div>
                <div class="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-[4px] bg-cyan-500 dark:bg-cyan-400 border border-cyan-600/30 dark:border-cyan-300/30 shadow-[0_0_8px_rgba(6,182,212,0.4)]"></div>
              </div>
              More
            </div>
          </UiSpotlightCard>
        </div>

        <!-- Commits per Year Chart -->
        <div class="mt-8">
          <UiSpotlightCard class-name="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm dark:shadow-none p-6 flex flex-col h-full min-h-[400px]">
            <h3 class="text-xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
              <UIcon name="lucide:calendar-days" class="text-violet-500" />
              {{ $t('github.commits_per_year', 'Commits per Year') }}
            </h3>
            <div class="flex-1 w-full h-full relative" style="min-height: 250px;">
              <Bar v-if="commitsChartData" :data="commitsChartData" :options="barOptions" />
            </div>
          </UiSpotlightCard>
        </div>
        
        <!-- Top Repositories List -->
        <div class="mt-12">
          <h3 class="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
            <UIcon name="lucide:star" class="text-cyan-500" />
            {{ $t('github.featured_repos', 'Featured Repositories') }}
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a
              v-for="repo in data.topRepos"
              :key="repo.name"
              :href="repo.url"
              target="_blank"
              rel="noopener noreferrer"
              class="block group"
            >
              <UiSpotlightCard class-name="h-full bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm dark:shadow-none p-5 transition-transform duration-300 group-hover:-translate-y-1">
                <div class="flex justify-between items-start mb-3">
                  <h4 class="text-lg font-bold text-slate-800 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {{ repo.name }}
                  </h4>
                  <div class="flex items-center gap-1 text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md text-sm">
                    <UIcon name="lucide:star" size="14" class="text-yellow-500" />
                    {{ repo.stars }}
                  </div>
                </div>
                <p class="text-slate-600 dark:text-slate-400 text-sm line-clamp-2">
                  {{ repo.description || 'No description provided.' }}
                </p>
                <div class="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                  <UIcon name="lucide:arrow-right" class="text-cyan-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </UiSpotlightCard>
            </a>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement
} from 'chart.js'
import { Doughnut, Bar } from 'vue-chartjs'

// Interface for API response
interface GithubStatsResponse {
  profile: {
    followers: number;
    public_repos: number;
    avatar_url: string;
  };
  stats: {
    totalStars: number;
    totalForks: number;
  };
  topLanguages: Array<{
    name: string;
    count: number;
  }>;
  topRepos: Array<{
    name: string;
    stars: number;
    url: string;
    description: string;
  }>;
  contributionsYears?: Array<{
    year: string;
    total: number;
  }>;
  dailyContributions?: Array<{
    date: string;
    count: number;
    intensity: string;
  }>;
  error?: string;
}

// Register Chart.js components
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement)

// Nuxt SEO Ogden
defineOgImageComponent('PremiumPortfolio', {
  title: 'GitHub Insights',
  description: 'A deep dive into my open-source contributions',
  siteName: 'nebel.dev'
})

// Fetch data from our cached Nitro endpoint
const { data, pending, error } = await useFetch<GithubStatsResponse>('/api/github-stats')

const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')

// Chart Color Palettes
const CHART_COLORS = [
  'rgba(6, 182, 212, 0.8)',   // Cyan 500
  'rgba(59, 130, 246, 0.8)',  // Blue 500
  'rgba(139, 92, 246, 0.8)',  // Violet 500
  'rgba(236, 72, 153, 0.8)',  // Pink 500
  'rgba(245, 158, 11, 0.8)',  // Amber 500
]

const CHART_BORDERS = [
  'rgba(6, 182, 212, 1)',   
  'rgba(59, 130, 246, 1)',  
  'rgba(139, 92, 246, 1)',  
  'rgba(236, 72, 153, 1)',  
  'rgba(245, 158, 11, 1)',  
]

// Base chart options for styling readability depending on theme
const chartOptions = computed(() => ({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom' as const,
      labels: {
        color: isDark.value ? '#cbd5e1' : '#475569', // slate-300 or slate-600
        padding: 20,
        font: { family: 'Inter, sans-serif' }
      }
    },
    tooltip: {
      backgroundColor: isDark.value ? 'rgba(15, 23, 42, 0.9)' : 'rgba(255, 255, 255, 0.9)',
      titleColor: isDark.value ? '#f8fafc' : '#0f172a',
      bodyColor: isDark.value ? '#cbd5e1' : '#334155',
      borderColor: isDark.value ? 'rgba(51, 65, 85, 0.5)' : 'rgba(226, 232, 240, 1)',
      borderWidth: 1,
      padding: 12,
      displayColors: true,
      cornerRadius: 8,
    }
  }
}))

const barOptions = computed(() => ({
  ...chartOptions.value,
  plugins: {
    ...chartOptions.value.plugins,
    legend: { display: false } // Hide legend for bar chart
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: isDark.value ? 'rgba(51, 65, 85, 0.3)' : 'rgba(226, 232, 240, 0.8)',
      },
      ticks: {
        color: isDark.value ? '#94a3b8' : '#64748b',
        stepSize: 1
      }
    },
    x: {
      grid: { display: false },
      ticks: {
        color: isDark.value ? '#94a3b8' : '#64748b',
      }
    }
  }
}))

// Populate chart data gracefully from fetched `data`
const languageChartData = computed(() => {
  if (!data.value?.topLanguages) return null
  return {
    labels: data.value.topLanguages.map((l: any) => l.name),
    datasets: [{
      data: data.value.topLanguages.map((l: any) => l.count),
      backgroundColor: CHART_COLORS,
      borderColor: CHART_BORDERS,
      borderWidth: 1,
      hoverOffset: 4
    }]
  }
})

const repoChartData = computed(() => {
  if (!data.value?.topRepos) return null
  return {
    labels: data.value.topRepos.map((r: any) => r.name),
    datasets: [{
      label: 'Stars',
      data: data.value.topRepos.map((r: any) => r.stars),
      backgroundColor: 'rgba(6, 182, 212, 0.6)', // Cyan
      borderColor: 'rgba(6, 182, 212, 1)',
      borderWidth: 1,
      borderRadius: 4,
      hoverBackgroundColor: 'rgba(6, 182, 212, 0.8)',
    }]
  }
})

const commitsChartData = computed(() => {
  if (!data.value?.contributionsYears) return null
  
  // Sort by year ascending
  const sortedYears = [...data.value.contributionsYears].sort((a, b) => parseInt(a.year) - parseInt(b.year))
  
  return {
    labels: sortedYears.map((c: any) => c.year),
    datasets: [{
      label: 'Commits',
      data: sortedYears.map((c: any) => c.total),
      backgroundColor: 'rgba(139, 92, 246, 0.6)', // Violet
      borderColor: 'rgba(139, 92, 246, 1)',
      borderWidth: 1,
      borderRadius: 4,
      hoverBackgroundColor: 'rgba(139, 92, 246, 0.8)',
    }]
  }
})

// Pad the heatmap so the grid starts on a Sunday
const heatmapDays = computed(() => {
  if (!data.value?.dailyContributions?.length) return []
  
  const days = [...data.value.dailyContributions].map(d => ({...d, isEmpty: false}))
  const firstDay = days.length > 0 ? new Date(days[0]?.date || '').getDay() : 0 // 0 = Sunday
  
  const paddedDays = []
  for (let i = 0; i < firstDay; i++) {
    paddedDays.push({ date: `empty-${i}`, count: 0, intensity: '0', isEmpty: true })
  }
  
  return [...paddedDays, ...days]
})

// Helper for Heatmap colors
const getHeatmapColor = (intensity: string) => {
  // Empty padded days
  if (intensity === '0') return 'bg-slate-100 dark:bg-slate-800/80'
  
  switch (intensity) {
    case '1': return 'bg-cyan-200 dark:bg-cyan-900/60'
    case '2': return 'bg-cyan-300 dark:bg-cyan-700/80'
    case '3': return 'bg-cyan-400 dark:bg-cyan-500'
    case '4': return 'bg-cyan-500 dark:bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.4)]'
    default: return 'bg-slate-100 dark:bg-slate-800/80'
  }
}

// Map the 0-4 intensity index from Github to some text
const getContributionText = (intensity: string) => {
  switch (intensity) {
    case '1': return 'Some contributions'
    case '2': return 'Multiple contributions'
    case '3': return 'Many contributions'
    case '4': return 'Massive contributions'
    default: return 'Contributions'
  }
}
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  height: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: rgba(148, 163, 184, 0.3);
  border-radius: 20px;
}
.dark .custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: rgba(51, 65, 85, 0.5);
}
</style>
