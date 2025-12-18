<script setup lang="ts">
const route = useRoute()
const { getProjectById } = useProjects()
const { t } = useI18n()

const project = computed(() => getProjectById(route.params.id as string))

// SEO
useSeoMeta({
    title: () => project.value?.title || 'Project',
    description: () => project.value?.description,
    ogTitle: () => project.value?.title,
    ogDescription: () => project.value?.description,
})

if (!project.value) {
    throw createError({
        statusCode: 404,
        statusMessage: 'Project not found',
    })
}
</script>

<template>
    <div v-if="project" class="min-h-screen bg-[#020617] text-slate-200 selection:bg-cyan-500/30">
        <main class="pt-32 pb-20">
            <div class="max-w-6xl mx-auto px-4">
                <!-- Top Actions -->
                <div class="flex items-center justify-between mb-8">
                    <NuxtLink to="/#menu_projects"
                        class="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700/50 backdrop-blur-sm">
                        <UIcon name="lucide:arrow-left" size="18" />
                        {{ t('projects.back_to_projects') }}
                    </NuxtLink>

                    <div class="flex gap-2">
                        <NuxtLink v-if="project.link" :to="project.link" target="_blank"
                            class="p-2 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg border border-slate-700/50 transition-colors"
                            :title="t('projects.code')">
                            <UIcon name="lucide:github" size="20" />
                        </NuxtLink>
                        <NuxtLink v-if="project.demo" :to="project.demo" target="_blank"
                            class="p-2 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg border border-slate-700/50 transition-colors"
                            :title="t('projects.demo')">
                            <UIcon name="lucide:external-link" size="20" />
                        </NuxtLink>
                    </div>
                </div>
                <!-- Hero Section -->
                <div class="relative mb-16">
                    <div
                        class="absolute -top-24 -left-24 w-96 h-96 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />
                    <div
                        class="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

                    <div class="relative text-center max-w-4xl mx-auto mb-12">
                        <div
                            class="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-slate-800/50 border border-slate-700 shadow-xl">
                            <svg class="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    :d="project.icon" />
                            </svg>
                        </div>
                        <h1
                            class="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                            {{ project.title }}
                        </h1>
                        <p class="text-lg md:text-xl text-slate-400 leading-relaxed">
                            {{ project.description }}
                        </p>
                    </div>

                    <!-- Main Image / Carousel -->
                    <div class="rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/50 shadow-2xl">
                        <UCarousel v-slot="{ item }" :items="project.images" :autoplay="{ delay: 4000 }" loop arrows
                            indicators class="w-full" :ui="{
                                item: 'basis-2/3 ps-0',
                                prev: 'sm:start-4',
                                next: 'sm:end-4',
                                container: 'ms-0'
                            }">
                            <img :src="item" :alt="project.title"
                                class="w-full aspect-video object-contain bg-slate-950" format="webp" quality="90" />
                        </UCarousel>
                    </div>
                </div>

                <div class="grid lg:grid-cols-3 gap-12">
                    <!-- Left Content -->
                    <div class="lg:col-span-2 space-y-12">
                        <section>
                            <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
                                <UIcon name="lucide:info" class="text-cyan-400" />
                                Description
                            </h2>
                            <div class="prose prose-invert max-w-none text-slate-400 leading-relaxed text-lg">
                                {{ project.fullDescription }}
                            </div>
                        </section>

                        <section v-if="project.features?.length">
                            <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
                                <UIcon name="lucide:star" class="text-cyan-400" />
                                {{ t('projects.key_features') }}
                            </h2>
                            <div class="grid sm:grid-cols-2 gap-4">
                                <div v-for="feature in project.features" :key="feature"
                                    class="flex items-start gap-3 p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-cyan-500/30 transition-colors">
                                    <UIcon name="lucide:check-circle-2" class="text-cyan-400 mt-1 shrink-0" />
                                    <span class="text-slate-300">{{ feature }}</span>
                                </div>
                            </div>
                        </section>
                    </div>

                    <!-- Right Sidebar -->
                    <div class="space-y-8">
                        <section
                            class="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm sticky top-24">
                            <h3 class="text-xl font-bold mb-6 flex items-center gap-3">
                                <UIcon name="lucide:cpu" class="text-cyan-400" />
                                {{ t('projects.technical_stack') }}
                            </h3>
                            <div class="flex flex-wrap gap-2 mb-8">
                                <span v-for="tag in project.tags" :key="tag"
                                    class="px-4 py-2 bg-slate-800 rounded-xl text-sm font-medium text-slate-300 border border-slate-700/50">
                                    {{ tag }}
                                </span>
                            </div>

                            <div class="space-y-4">
                                <NuxtLink v-if="project.demo" :to="project.demo" target="_blank"
                                    class="w-full flex items-center justify-center gap-3 px-6 py-4 bg-cyan-500 hover:bg-cyan-400 text-[#020617] font-bold rounded-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_8px_30px_rgb(6,182,212,0.3)]">
                                    <UIcon name="lucide:external-link" size="20" />
                                    {{ t('projects.demo') }}
                                </NuxtLink>
                                <NuxtLink v-if="project.link" :to="project.link" target="_blank"
                                    class="w-full flex items-center justify-center gap-3 px-6 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-2xl transition-all duration-300 border border-slate-700">
                                    <UIcon name="lucide:github" size="20" />
                                    {{ t('projects.code') }}
                                </NuxtLink>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<style scoped>
.prose {
    white-space: pre-line;
}
</style>
