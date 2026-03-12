<script setup lang="ts">
defineOptions({
  inheritAttrs: false
})

const props = defineProps<{
  title?: string
  description?: string
  siteName?: string
}>()
</script>

<template>
  <div class="w-full h-full flex flex-col justify-between p-20 bg-slate-900 text-white" style="background: linear-gradient(135deg, #0f172a 0%, #082f49 50%, #172554 100%);">
    
    <!-- Abstract decorative geometric elements (circles to act like light flares) -->
    <div class="absolute top-[-200px] right-[-100px] w-[500px] h-[500px] rounded-full" style="background: radial-gradient(circle, rgba(6,182,212,0.3) 0%, rgba(15,23,42,0) 70%);"></div>
    <div class="absolute bottom-[-200px] left-[-100px] w-[500px] h-[500px] rounded-full" style="background: radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(15,23,42,0) 70%);"></div>

    <div class="flex flex-col relative w-full h-full justify-between">
      <!-- Top Section -->
      <div class="flex items-center justify-between w-full">
        <div class="flex items-center" style="gap: 24px;">
          <div class="w-16 h-16 rounded-2xl flex items-center justify-center border-4 border-[#22d3ee] bg-[#0f172a]">
            <span class="font-bold text-3xl text-[#22d3ee]" style="margin-top: -2px;">DN</span>
          </div>
          <span class="text-3xl font-bold text-[#22d3ee]">
            {{ siteName || 'nebel.dev' }}
          </span>
        </div>
      </div>

      <!-- Main Content -->
      <div class="flex flex-col" style="margin-bottom: 40px; margin-top: auto;">
        <h1 class="text-7xl font-extrabold text-white" style="line-height: 1.1; margin-bottom: 32px; max-width: 90%;">
          {{ title }}
        </h1>
        <p class="text-4xl text-slate-300" style="line-height: 1.4; max-width: 85%;">
          {{ description }}
        </p>
      </div>

      <!-- Bottom / Footer -->
      <div class="flex items-center justify-between border-t border-slate-700" style="padding-top: 32px; border-top-width: 2px; border-color: rgba(51, 65, 85, 0.5);">
        <div class="flex items-center" style="gap: 32px;">
          <div class="flex items-center" style="gap: 12px;">
            <div class="w-4 h-4 rounded-full bg-[#22d3ee]"></div>
            <span class="text-2xl text-slate-300">Software Architect</span>
          </div>
          <div class="flex items-center" style="gap: 12px;">
            <div class="w-4 h-4 rounded-full bg-[#3b82f6]"></div>
            <span class="text-2xl text-slate-300">Full Stack Developer</span>
          </div>
        </div>
        <div class="text-3xl font-medium text-[#22d3ee]">
          @Duorly
        </div>
      </div>
    </div>
  </div>
</template>
