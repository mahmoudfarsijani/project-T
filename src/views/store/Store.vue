<template>
  <div class="h-[3000px]">
    <RouterView />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
    console.log('parent component');
})
</script>
