<template>
  <div>
    <RouterView />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
    console.log('parent component');
})
</script>
