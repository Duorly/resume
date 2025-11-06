<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
    <!-- Navigation -->
    <UiSplashCursor/>
    <nav
        :class="[
        'fixed w-full z-50 transition-all duration-500',
        isScrolled ? 'py-2' : 'py-4'
      ]"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
            :class="[
            'flex justify-between items-center rounded-2xl transition-all duration-500 px-6',
            isScrolled
              ? 'bg-white/10 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-white/20'
              : 'bg-transparent'
          ]"
            style="backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);"
        >
          <div class="flex items-center space-x-2 py-3">
            <UAvatar size="2xl" src="/images/photo2.png" class="ring-2 ring-cyan-400/30"/>
            <UiShinyText class="font-bold text-lg md:text-xl" text="NebelDev"/>
          </div>

          <div class="hidden md:flex justify-center items-center space-x-2">
            <div class="flex items-center space-x-1 bg-white/5 backdrop-blur-xl rounded-full px-2 py-2 border border-white/10 shadow-lg">
              <a
                  v-for="item in menuItems"
                  :key="item"
                  :href="`#${item.toLowerCase()}`"
                  class="relative px-4 py-2 rounded-full font-medium transition-all duration-300 hover:bg-white/20 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] group"
              >
                <span class="relative z-10 group-hover:text-cyan-300 transition-colors duration-300">
                  {{ $t(item) }}
                </span>
                <div class="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>

            <div class="flex items-center space-x-2 ml-4">
              <div
                  v-if="locale === 'en'"
                  class="flex items-center space-x-2 cursor-pointer bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-400/50 hover:bg-white/10 py-2 px-3 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-cyan-500/20"
                  @click="setLocale('fr')"
              >
                <span class="text-sm">FR</span>
                <UIcon name="twemoji:flag-france" size="20"/>
              </div>
              <div
                  v-if="locale === 'fr'"
                  class="flex items-center space-x-2 cursor-pointer bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-400/50 hover:bg-white/10 py-2 px-3 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-cyan-500/20"
                  @click="setLocale('en')"
              >
                <span class="text-sm">EN</span>
                <UIcon name="twemoji:flag-united-states" size="20"/>
              </div>

              <div class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-full p-2 hover:bg-white/10 transition-all duration-300 shadow-lg">
                <UColorModeButton />
              </div>
            </div>
          </div>


          <button
              class="md:hidden text-white bg-white/5 backdrop-blur-xl rounded-full p-2 border border-white/10 hover:bg-white/10 transition-all duration-300"
              @click="isMenuOpen = !isMenuOpen"
          >
            <svg v-if="!isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile menu -->
      <transition
          enter-active-class="transition ease-out duration-200"
          enter-from-class="opacity-0 transform scale-95"
          enter-to-class="opacity-100 transform scale-100"
          leave-active-class="transition ease-in duration-150"
          leave-from-class="opacity-100 transform scale-100"
          leave-to-class="opacity-0 transform scale-95"
      >
        <div v-if="isMenuOpen" class="md:hidden mt-4 mx-4">
          <div class="bg-white/10 backdrop-blur-2xl rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
            <div class="px-4 pt-2 pb-4 space-y-1">
              <a
                  v-for="item in menuItems"
                  :key="item"
                  :href="`#${item.toLowerCase()}`"
                  class="block px-4 py-3 hover:bg-white/10 rounded-xl transition-all duration-300 font-medium"
                  @click="isMenuOpen = false"
              >
                {{ $t(item) }}
              </a>
            </div>
          </div>
        </div>
      </transition>
    </nav>

    <!-- Hero Section -->
    <Hero/>

    <!-- About Section -->
    <About/>

    <!-- Skills Section -->
    <Skills/>

    <!-- Experience Section -->
    <Experience/>

    <!-- Projects Section -->
    <Projects/>

    <!-- Education Section -->
    <Education/>

    <!-- Contact Section -->
    <Contact/>

    <!-- Testimonials Section -->
    <Testimonials/>

    <!-- Footer -->
    <Footer/>
  </div>
</template>

<script setup>

const colorMode = useColorMode();

colorMode.value = 'dark';

const isMenuOpen = ref(false);
const isScrolled = ref(false);

const menuItems = ref(['menu_about', 'menu_skills', 'menu_experiences', 'menu_education', 'menu_contact']);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const {locale, setLocale} = useI18n()

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

defineOgImageComponent('NuxtSeo', {
  title: 'Duorli Nebel — Développeur Full Stack',
  description: 'Création d’applications web modernes, performantes et scalables. Expert Vue.js, Nuxt, Spring Boot, Laravel et Cloud (AWS, GCP).',
  theme: '#06b6d4', // ton accent cyan
  colorMode: 'dark', // s’adapte bien à ton style portfolio
})
</script>

<style scoped>
* {
  font-family: Roboto, sans-serif;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: .8;
  }
}

@keyframes bounce {
  0%, 100% {
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