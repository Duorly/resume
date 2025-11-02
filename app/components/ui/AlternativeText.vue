<script setup lang="ts">
import {ref, onMounted, onUnmounted} from 'vue';

const roles = ref(['fullstack_developer', 'tech_lead', 'project_manager', 'software_architect']);
const currentRole = ref(0);

let interval: number;

onMounted(() => {
  interval = window.setInterval(() => {
    currentRole.value = (currentRole.value + 1) % roles.value.length;
  }, 2500);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<template>
  <p class="flex items-center justify-center gap-2 text-center text-lg md:text-3xl mb-4 text-cyan-300 font-semibold">
    {{ $t('i_am') }}
    <transition name="fade-slide" mode="out-in">
      <span :key="roles[currentRole]" class="text-blue-400 font-bold">
        {{ $t(roles[currentRole]) }}
      </span>
    </transition>
  </p>
</template>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.6s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
