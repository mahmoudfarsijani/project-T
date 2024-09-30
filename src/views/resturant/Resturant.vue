<template>
  <Main class="min-h-screen mains pb-[50px] pt-[100px]">
    <RouterView />
  </Main>
</template>

<script setup>
import Main from '@/components/base/Main.vue'
</script>

<style scoped>
  .mains {
    @apply  from-cyan-950   to-cyan-950 via-cyan-900  bg-gradient-to-b
  }
</style>
