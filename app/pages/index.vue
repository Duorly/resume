<template>
  <div>
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
defineOgImageComponent('NuxtSeo', {
  title: 'Duorli Nebel — Développeur Full Stack',
  description: 'Création d’applications web modernes, performantes et scalables. Expert Vue.js, Nuxt, Spring Boot, Laravel et Cloud (AWS, GCP).',
  theme: '#06b6d4', // ton accent cyan
})
</script>