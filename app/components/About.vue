<script setup lang="ts">

</script>

<template>
  <section id="menu_about" class="py-20 px-4 bg-gray-50 dark:bg-slate-900/50 transition-colors duration-300">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
        {{ $t('about_me')}}
      </h2>

      <div class="grid md:grid-cols-2 gap-8">

        <UiSpotlightCard
            class-name="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/50 hover:border-cyan-400/50 dark:hover:border-cyan-500/50 shadow-lg dark:shadow-none transition-colors duration-300"
            spotlight-color="rgba(255, 255, 255, 0.25)"
        >
          <h3 class="text-2xl font-bold mb-4 text-cyan-500 dark:text-cyan-400">{{ $t('profile') }}</h3>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed">
            {{ $t('profile_description').replace("0", (new Date().getFullYear() - 2019)).toString() }}
          </p>
        </UiSpotlightCard>

        <UiSpotlightCard
            class-name="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/50 hover:border-cyan-400/50 dark:hover:border-cyan-500/50 shadow-lg dark:shadow-none transition-colors duration-300"
            spotlight-color="rgba(255, 255, 255, 0.25)"
        >
          <h3 class="text-2xl font-bold mb-4 text-cyan-500 dark:text-cyan-400">{{ $t('research') }}</h3>
          <div class="space-y-3 text-slate-600 dark:text-slate-300">
            <p><strong class="text-slate-900 dark:text-white">{{ $t('job_type') }} :</strong> {{ $t('about.job_value') }}</p>
            <p><strong class="text-slate-900 dark:text-white">{{ $t('availability')}} :</strong> {{ $t('about.availability_value') }}</p>
            <p><strong class="text-slate-900 dark:text-white">{{ $t('mobility')}} :</strong> {{ $t('about.mobility_value') }}</p>
            <p><strong class="text-slate-900 dark:text-white">{{ $t('permit')}} :</strong> {{ $t('about.permit_value') }}</p>
          </div>
        </UiSpotlightCard>

      </div>
    </div>
  </section>
</template>

<style scoped>

</style>