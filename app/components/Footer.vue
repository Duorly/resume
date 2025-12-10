<script setup lang="ts">

</script>

<template>
  <footer class="py-8 px-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 transition-colors duration-300">
    <div class="max-w-6xl mx-auto text-center text-slate-500 dark:text-slate-400">
      <p>© {{new Date().getFullYear() }} Nebel Massengo - {{ $t('footer.rights_reserved') }}</p>
      <p class="text-sm mt-2">{{ $t('footer.role') }} • {{new Date().getFullYear() - 2019 }} {{ $t('footer.experience') }} • {{ $t('footer.location') }}</p>
    </div>
  </footer>
</template>