<template>
    <div
        class="min-h-screen bg-gray-50 text-slate-900 dark:bg-gradient-to-br dark:from-slate-950 dark:via-blue-950 dark:to-slate-900 dark:text-white transition-colors duration-300">
        <!-- Navigation -->
        <UiSplashCursor />
        <nav :class="[
            'fixed w-full z-50 transition-all duration-500',
            isScrolled ? 'py-2' : 'py-4'
        ]">
            <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                <div :class="[
                    'flex justify-between items-center rounded-2xl transition-all duration-500 px-2 lg:px-6',
                    isScrolled
                        ? 'bg-white/80 dark:bg-white/10 backdrop-blur-2xl shadow-lg border border-slate-200 dark:border-white/20'
                        : 'bg-transparent'
                ]" style="backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);">
                    <NuxtLink to="/" class="flex items-center space-x-2 py-3">
                        <UAvatar chip size="2xl" src="/images/photo2.png" alt="NebelDev"
                            class="ring-2 ring-cyan-500 dark:ring-cyan-400/30" />
                        <UiShinyText class="font-bold text-lg md:text-xl" text="NebelDev" />
                    </NuxtLink>

                    <!-- Desktop Navigation - Compact Design -->
                    <div class="hidden lg:flex justify-center items-center space-x-2">
                        <div
                            class="flex items-center space-x-1 bg-white/60 dark:bg-white/5 backdrop-blur-xl rounded-full px-1.5 py-1.5 border border-slate-200 dark:border-white/10 shadow-lg">
                            <!-- Primary Menu Items (Most Important) -->
                            <NuxtLink v-for="item in primaryMenuItems" :key="item.key" :to="item.to"
                                class="relative px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-slate-200 dark:hover:bg-white/20 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] group text-slate-700 dark:text-slate-200">
                                <span
                                    class="relative z-10 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors duration-300">
                                    {{ $t(item.key) }}
                                </span>
                                <div
                                    class="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </NuxtLink>

                            <!-- More Menu Dropdown -->
                            <div class="relative" @mouseenter="isMoreMenuOpen = true"
                                @mouseleave="isMoreMenuOpen = false">
                                <button
                                    class="relative px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-slate-200 dark:hover:bg-white/20 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] group text-slate-700 dark:text-slate-200 flex items-center gap-1">
                                    <span
                                        class="relative z-10 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors duration-300">
                                        Plus
                                    </span>
                                    <svg class="w-4 h-4 transition-transform duration-300"
                                        :class="{ 'rotate-180': isMoreMenuOpen }" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                <!-- Dropdown Menu -->
                                <transition enter-active-class="transition ease-out duration-200"
                                    enter-from-class="opacity-0 transform scale-95 -translate-y-2"
                                    enter-to-class="opacity-100 transform scale-100 translate-y-0"
                                    leave-active-class="transition ease-in duration-150"
                                    leave-from-class="opacity-100 transform scale-100 translate-y-0"
                                    leave-to-class="opacity-0 transform scale-95 -translate-y-2">
                                    <div v-if="isMoreMenuOpen"
                                        class="absolute top-full right-0 mt-2 w-48 bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl rounded-xl border border-slate-200 dark:border-white/20 shadow-2xl overflow-hidden">
                                        <NuxtLink v-for="item in secondaryMenuItems" :key="item.key" :to="item.to"
                                            class="block px-4 py-3 hover:bg-slate-100 dark:hover:bg-white/10 transition-all duration-300 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400"
                                            @click="isMoreMenuOpen = false">
                                            {{ $t(item.key) }}
                                        </NuxtLink>
                                    </div>
                                </transition>
                            </div>
                        </div>

                        <!-- Language & Theme Toggles -->
                        <div class="flex items-center space-x-2">
                            <div v-if="locale === 'en'"
                                class="flex items-center space-x-2 cursor-pointer bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 hover:border-cyan-400/50 hover:bg-slate-100 dark:hover:bg-white/10 py-2 px-3 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-cyan-500/20 text-slate-700 dark:text-slate-200"
                                @click="setLocale('fr')">
                                <span class="text-sm">FR</span>
                                <UIcon name="twemoji:flag-france" size="20" />
                            </div>
                            <div v-if="locale === 'fr'"
                                class="flex items-center space-x-2 cursor-pointer bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 hover:border-cyan-400/50 hover:bg-slate-100 dark:hover:bg-white/10 py-2 px-3 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-cyan-500/20 text-slate-700 dark:text-slate-200"
                                @click="setLocale('en')">
                                <span class="text-sm">EN</span>
                                <UIcon name="twemoji:flag-united-states" size="20" />
                            </div>

                            <div @click="colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'"
                                class="flex items-center justify-center cursor-pointer bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-full p-2 hover:bg-slate-100 dark:hover:bg-white/10 transition-all duration-300 shadow-lg text-slate-700 dark:text-slate-200">
                                <UIcon v-if="colorMode.value === 'dark'"
                                    name="line-md:moon-to-sunny-outline-loop-transition" size="24" />
                                <UIcon v-else name="line-md:moon-loop" size="24" />
                            </div>
                        </div>
                    </div>

                    <!-- Mobile Menu Button -->
                    <button
                        class="lg:hidden text-slate-800 dark:text-white bg-white/60 dark:bg-white/5 backdrop-blur-xl rounded-full p-2 border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10 transition-all duration-300"
                        @click="isMenuOpen = !isMenuOpen" aria-label="Toggle menu" type="button" role="button"
                        tabindex="0">
                        <svg v-if="!isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Mobile menu -->
            <transition enter-active-class="transition ease-out duration-200"
                enter-from-class="opacity-0 transform scale-95" enter-to-class="opacity-100 transform scale-100"
                leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 transform scale-100"
                leave-to-class="opacity-0 transform scale-95">
                <div v-if="isMenuOpen" class="lg:hidden mt-4 mx-4">
                    <div
                        class="bg-white/90 dark:bg-white/10 backdrop-blur-2xl rounded-2xl border border-slate-200 dark:border-white/20 shadow-2xl overflow-hidden">
                        <div class="px-4 pt-2 pb-4 space-y-1">
                            <!-- All menu items on mobile -->
                            <NuxtLink v-for="item in allMenuItems" :key="item.key" :to="item.to"
                                class="block px-4 py-3 hover:bg-slate-100 dark:hover:bg-white/10 rounded-xl transition-all duration-300 font-medium text-slate-800 dark:text-white"
                                @click="isMenuOpen = false">
                                {{ $t(item.key) }}
                            </NuxtLink>

                            <!-- Mobile Language & Theme Toggles -->
                            <div
                                class="flex items-center justify-center gap-3 pt-3 border-t border-slate-200 dark:border-white/20 mt-3">
                                <div v-if="locale === 'en'"
                                    class="flex items-center space-x-2 cursor-pointer bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 py-2 px-4 rounded-full font-bold transition-all duration-300"
                                    @click="setLocale('fr')">
                                    <span class="text-sm">FR</span>
                                    <UIcon name="twemoji:flag-france" size="25" />
                                </div>
                                <div v-if="locale === 'fr'"
                                    class="flex items-center space-x-2 cursor-pointer bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 py-2 px-4 rounded-full font-bold transition-all duration-300"
                                    @click="setLocale('en')">
                                    <span class="text-sm">EN</span>
                                    <UIcon name="twemoji:flag-for-flag-united-states" size="25" />
                                </div>

                                <div @click="colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'"
                                    class="flex items-center justify-center cursor-pointer bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 rounded-full p-2 transition-all duration-300">
                                    <UIcon v-if="colorMode.value === 'dark'"
                                        name="line-md:moon-to-sunny-outline-loop-transition" size="24" />
                                    <UIcon v-else name="line-md:moon-loop" size="24" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </nav>

        <main>
            <slot />
        </main>
    </div>
</template>

<script setup>

const colorMode = useColorMode();

const isMenuOpen = ref(false);
const isScrolled = ref(false);
const isMoreMenuOpen = ref(false);

// Séparer les éléments du menu en prioritaires et secondaires
const primaryMenuItems = ref([
    { key: 'menu_about', to: '/#menu_about' },
    { key: 'menu_skills', to: '/#menu_skills' },
    { key: 'menu_blog', to: '/blog' }
]);

const secondaryMenuItems = ref([
    { key: 'menu_experiences', to: '/#menu_experiences' },
    { key: 'menu_education', to: '/#menu_education' },
    { key: 'menu_contact', to: '/#menu_contact' }
]);

// Tous les éléments pour mobile
const allMenuItems = computed(() => [
    ...primaryMenuItems.value,
    ...secondaryMenuItems.value
]);

const handleScroll = () => {
    isScrolled.value = window.scrollY > 50;
};

const { locale, setLocale } = useI18n()

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
@keyframes pulse {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: .8;
    }
}

@keyframes bounce {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }
}

.animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.animate-bounce {
    animation: bounce 1s infinite;
}
</style>