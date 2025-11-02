<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
    <!-- Navigation -->
    <UiSplashCursor/>
    <nav
        :class="[
        'fixed w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-slate-950/95 backdrop-blur-lg shadow-2xl' : 'bg-transparent'
      ]"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center space-x-2">
            <UAvatar size="2xl" src="/images/photo2.png"/>
            <UiShinyText class="font-bold text-xl" text="Duorli Rejouis Nebel Massengo"/>
          </div>

          <div class="hidden md:flex justify-center items-center space-x-8">
            <a
                v-for="item in menuItems"
                :key="item"
                :href="`#${item.toLowerCase().replace(/\s+/g, '-').replace(/à/g, 'a').replace(/é/g, 'e')}`"
                class="hover:text-cyan-400 transition-colors duration-200 font-medium mt-1"
            >
              {{ item }}
            </a>
            <div
                v-if="locale === 'en'"
                class="flex items-center space-x-2 cursor-pointer border border-slate-700/50 hover:border-cyan-500/50 py-0.5 px-2 rounded-lg font-bold"
                @click="setLocale('fr')"
            >
              <span>FR</span>
              <UIcon name="twemoji:flag-france" size="25"/>
            </div>
            <div
                v-if="locale === 'fr'"
                class="flex items-center space-x-2 cursor-pointer border border-slate-700/50 hover:border-cyan-500/50 py-0.5 px-2 rounded-lg font-bold"
                @click="setLocale('en')"
            >
              <span>EN</span>
              <UIcon name="twemoji:flag-united-states" size="25"/>
            </div>

          </div>



          <button
              class="md:hidden text-white"
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
      <div v-if="isMenuOpen" class="md:hidden bg-slate-950/98 backdrop-blur-lg">
        <div class="px-4 pt-2 pb-4 space-y-2">
          <a
              v-for="item in menuItems"
              :key="item"
              :href="`#${item.toLowerCase().replace(/\s+/g, '-').replace(/à/g, 'a')}`"
              class="block px-3 py-2 hover:bg-slate-800 rounded-lg transition-colors"
              @click="isMenuOpen = false"
          >
            {{ item }}
          </a>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <Hero/>

    <!-- About Section -->
    <About/>

    <!-- Skills Section -->
    <Skills/>

    <!-- Experience Section -->
    <Experience/>

    <!-- Education Section -->
    <Education/>

    <!-- Contact Section -->
    <Contact/>

    <!-- Footer -->
    <Footer/>
  </div>
</template>

<script setup>

const isMenuOpen = ref(false);
const isScrolled = ref(false);

const menuItems = ['À propos', 'Compétences', 'Expériences', 'Formation', 'Contact'];

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

</script>

<style scoped>
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