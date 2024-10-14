<template>
  <Main class="w-full flex flex-nowrap items-start justify-start h-screen">
    <DashboardNav />
    <RouterView />
  </Main>
</template>

<script setup>
import { ref } from 'vue'
import Main from '@/components/base/Main.vue'
import Container from '@/components/base/Container.vue'
import DashboardNav from '@/components/main/auth/DashboardNav.vue'

const value = [20, 50]
</script>
