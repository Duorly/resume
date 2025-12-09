<script setup lang="ts">

</script>

<template>
  <section id="menu_about" class="py-20 px-4 bg-slate-900/50">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
        {{ $t('about_me')}}
      </h2>

      <div class="grid md:grid-cols-2 gap-8">

        <UiSpotlightCard
            class-name="border border-slate-700/50 hover:border-cyan-500/50"
            spotlight-color="rgba(255, 255, 255, 0.25)"
        >
          <h3 class="text-2xl font-bold mb-4 text-cyan-400">{{ $t('profile') }}</h3>
          <p class="text-slate-300 leading-relaxed">
            {{ $t('profile_description').replace("0", (new Date().getFullYear() - 2019)).toString() }}
          </p>
        </UiSpotlightCard>

        <UiSpotlightCard
            class-name="border border-slate-700/50 hover:border-cyan-500/50"
            spotlight-color="rgba(255, 255, 255, 0.25)"
        >
          <h3 class="text-2xl font-bold mb-4 text-cyan-400">{{ $t('research') }}</h3>
          <div class="space-y-3 text-slate-300">
            <p><strong class="text-white">{{ $t('job_type') }} :</strong> {{ $t('about.job_value') }}</p>
            <p><strong class="text-white">{{ $t('availability')}} :</strong> {{ $t('about.availability_value') }}</p>
            <p><strong class="text-white">{{ $t('mobility')}} :</strong> {{ $t('about.mobility_value') }}</p>
            <p><strong class="text-white">{{ $t('permit')}} :</strong> {{ $t('about.permit_value') }}</p>
          </div>
        </UiSpotlightCard>

      </div>
    </div>
  </section>
</template>

<style scoped>

</style>