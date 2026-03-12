<template>
  <div>
    <UiSplashCursor />
    <Hero />

    <!-- About Section -->
    <About />

    <!-- Skills Section -->
    <Skills />

    <!-- Experience Section -->
    <Experience />

    <!-- Projects Section -->
    <Projects />

    <!-- Education Section -->
    <Education />

    <!-- Contact Section -->
    <Contact />

    <!-- Testimonials Section -->
    <Testimonials />

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
defineOgImageComponent('PremiumPortfolio', {
  title: 'Duorli Nebel',
  description: 'Software Architect & Full Stack Developer',
  siteName: 'nebel.dev'
})
</script>