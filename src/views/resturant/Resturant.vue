<template>
  <Main class="min-w-screen mains pt-[80px]">
    <RouterView />
  </Main>
</template>

<script setup>
import Main from '@/components/base/Main.vue'
</script>

<style scoped>
  .mains {
    @apply bg-red-500
  }
</style>
