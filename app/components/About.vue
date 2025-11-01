<script setup lang="ts">

</script>

<template>
  <section id="a-propos" class="py-20 px-4 bg-slate-900/50">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
        À propos
      </h2>

      <div class="grid md:grid-cols-2 gap-8">

        <UiSpotlightCard
            class-name="custom-spotlight-card"
            spotlight-color="rgba(255, 255, 255, 0.25)"
        >
          <h3 class="text-2xl font-bold mb-4 text-cyan-400">Profil</h3>
          <p class="text-slate-300 leading-relaxed">
            Développeur Full Stack avec <strong>6 ans d'expérience</strong>, spécialisé dans la conception de solutions robustes et optimisées.
            Expert en architecture logicielle et déploiement cloud, j'ai piloté des projets en méthodologie agile et accompagné des équipes techniques vers l'excellence.
          </p>
        </UiSpotlightCard>

        <UiSpotlightCard
            class-name="custom-spotlight-card"
            spotlight-color="rgba(255, 255, 255, 0.25)"
        >
          <h3 class="text-2xl font-bold mb-4 text-cyan-400">Recherche</h3>
          <div class="space-y-3 text-slate-300">
            <p><strong class="text-white">Type de poste :</strong> CDI - Développeur Full Stack / Tech Lead</p>
            <p><strong class="text-white">Disponibilité :</strong> Immédiate</p>
            <p><strong class="text-white">Mobilité :</strong> Île-de-France</p>
            <p><strong class="text-white">Permis :</strong> B</p>
          </div>
        </UiSpotlightCard>

      </div>
    </div>
  </section>
</template>

<style scoped>

</style>