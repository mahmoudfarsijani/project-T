<template>
  <Main class="min-h-screen mains py-[50px]">
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
