<script setup lang="ts">

</script>

<template>
  <section id="hero" class="min-h-screen flex flex-col items-center justify-center px-4 pt-16">
    <div class="max-w-6xl mx-auto text-center">
      <div class="mb-8 inline-block">
        <div
            class="w-32 h-32 mx-auto bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-full flex items-center justify-center text-5xl font-bold shadow-2xl shadow-cyan-500/50 animate-pulse">
          NM
        </div>
      </div>

      <UiGradientText
          text="Duorli Rejouis Nebel MASSENGO"
          :colors="['#00d3f2', '#4c00b8', '#51a2ff', '#c27fff', '#fff']"
          :animation-speed="6"
          :show-border="false"
          class-name="text-2xl md:text-7xl font-extrabold my-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
      />

      <UiAlternativeText/>

      <p class="text-lg md:text-xl mb-8 text-slate-300 max-w-3xl mx-auto leading-relaxed">
        <UiCountUp
            :from="0"
            :to="6"
            separator=","
            direction="up"
            :duration="3"
            :delay="0"
            :start-when="true"
            class-name="count-up-text"
        />
        {{ $t('short_description') }}
      </p>

      <div class="flex flex-wrap justify-center items-center gap-4 mb-12">
        <a
            href="mailto:nebel.mass@gmail.com"
            class="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 px-6 py-3 rounded-full font-semibold transition-all duration-200 shadow-lg"
        >
          <UIcon name="lucide:mail" size="22"/>
          {{ $t('contact_me') }}
        </a>
        <a
            href="https://github.com/Duorly"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-full font-semibold transition-all duration-200 shadow-lg"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          GitHub
        </a>
      </div>

      <div class="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
        <div class="flex items-center gap-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
                stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
          </svg>
          +33 7 75 72 55 82
        </div>
        <div class="flex items-center gap-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
                stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
          </svg>
          Île-de-France
        </div>
      </div>

      <div class="mt-16 animate-bounce">
        <svg class="w-8 h-8 mx-auto text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
        </svg>
      </div>
    </div>

    <div class="w-full overflow-x-hidden">
      <UMarquee class="mt-5" :overlay="true">
        <UIcon name="logos:nuxt-icon" class="size-10 shrink-0"/>
        <UIcon name="logos:nextjs-icon" class="size-10 shrink-0"/>
        <UIcon name="logos:react" class="size-10 shrink-0"/>
        <UIcon name="logos:vue" class="size-10 shrink-0"/>
        <UIcon name="logos:spring-icon" class="size-10 shrink-0"/>
        <UIcon name="logos:laravel" class="size-10 shrink-0"/>
        <UIcon name="logos:angular-icon" class="size-10 shrink-0"/>
        <UIcon name="logos:wordpress-icon" class="size-10 shrink-0"/>
        <UIcon name="logos:flutter" class="size-10 shrink-0"/>
        <UIcon name="logos:nestjs" class="size-10 shrink-0"/>
        <UIcon name="logos:typescript-icon" class="size-10 shrink-0"/>
      </UMarquee>
    </div>

  </section>
</template>