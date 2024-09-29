<template>
  <Main class="h-screen mains">
    <RouterView />
  </Main>
</template>

<script setup>
import Main from '@/components/base/Main.vue'
</script>

<style scoped>
  .mains {
    @apply bg-slate-800
  }
</style>
