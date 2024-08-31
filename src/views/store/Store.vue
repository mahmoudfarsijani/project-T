<template>
  <div class="h-[3000px] w-full flex justify-center items-center">
    <RouterView />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
    console.log('parent component');
})
</script>
