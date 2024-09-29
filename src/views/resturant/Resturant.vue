<template>
  <Main class="h-screen mains pt-[80px]">
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
