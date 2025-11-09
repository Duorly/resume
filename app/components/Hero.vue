<template>
  <section id="hero" class="min-h-screen flex flex-col items-center justify-center px-4 pt-16">
    <div class="max-w-6xl mx-auto text-center">

      <UiGradientText
          text="Duorli Rejouis Nebel MASSENGO"
          :colors="['#00d3f2', '#4c00b8', '#51a2ff', '#c27fff', '#fff']"
          :animation-speed="5"
          :show-border="false"
          class-name="text-2xl md:text-7xl font-extrabold mt-10 mb-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
      />

      <UiAlternativeText/>

      <p class="text-lg md:text-xl mb-8 text-slate-300 max-w-3xl mx-auto leading-relaxed">
        <UiCountUp
            :from="0"
            :to="new Date().getFullYear() - 2019"
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
            class="group relative flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 backdrop-blur-xl border border-cyan-400/30 hover:border-cyan-400/60 px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-[0_8px_32px_0_rgba(6,182,212,0.2)] hover:shadow-[0_8px_32px_0_rgba(6,182,212,0.4)] hover:scale-105"
            style="backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);"
        >
          <div
              class="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/0 via-cyan-400/10 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
          <UIcon
              name="lucide:mail" size="22"
              class="relative z-10 group-hover:rotate-12 transition-transform duration-300"/>
          <span class="relative z-10">{{ $t('contact_me') }}</span>
        </a>

        <a
            href="https://github.com/Duorly"
            target="_blank"
            rel="noopener noreferrer"
            class="group relative flex items-center gap-2 bg-white/5 hover:bg-white/10 backdrop-blur-xl border border-white/20 hover:border-white/40 px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.2)] hover:scale-105"
            style="backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);"
        >
          <div
              class="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
          <svg
              class="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform duration-300" fill="currentColor"
              viewBox="0 0 24 24">
            <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          <span class="relative z-10">GitHub</span>
        </a>
      </div>

      <div class="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
        <div class="flex items-center gap-2 cursor-pointer" title="Cliquer 2 fois pour réveler le numéro"
             @dblclick="revealNumber = !revealNumber">
          <UIcon name="lucide:phone" size="20"/>
          +33 7 75 72 55 {{ !revealNumber ? '**' : '82' }}
        </div>

        <div class="flex items-center gap-2">
          <UIcon name="lucide:map-pin-house" size="20"/>
          Île-de-France
        </div>
      </div>

      <div class="mt-16 animate-bounce">
        <UIcon name="lucide:chevron-down" size="35" class="text-cyan-400"/>
      </div>
    </div>

    <div class="w-full bg-none">
      <UMarquee class="my-5" :overlay="true">
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

<script setup lang="ts">
const revealNumber = ref(false)
</script>