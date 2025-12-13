<script setup lang="ts">
const props = defineProps<{
  text: string
}>()

const revealed = ref(false)

const handleReveal = (event: Event) => {
  if (!revealed.value) {
    event.preventDefault()
    event.stopPropagation()
    revealed.value = true
  }
}
</script>

<template>
  <span 
    @click="handleReveal"
    class="relative inline-block transition-all duration-300"
    :class="{ 'cursor-pointer': !revealed }"
  >
    <span 
      class="transition-opacity duration-300"
      :class="{ 'opacity-0 blur-sm pointer-events-none select-none': !revealed, 'opacity-100': revealed }"
    >
      {{ text }}
    </span>
    
    <span 
      v-if="!revealed"
      class="absolute inset-0 flex items-center justify-center bg-slate-200/50 dark:bg-slate-800/50 backdrop-blur-sm rounded px-2 text-xs font-bold text-slate-500 hover:bg-slate-300/50 dark:hover:bg-slate-700/50 transition-colors"
    >
      Voir
    </span>
  </span>
</template>
