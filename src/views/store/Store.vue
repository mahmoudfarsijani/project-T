<template>
  <div class="h-[3000px] w-full">
    <Transition name="slide" mode="in-out">
      <RouterView :key="$route.fullPath"/>
    </Transition>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  console.log('parent component')
})
</script>

<style lang="css" scoped>
.slide-enter-active,
.slide-leave-active {
  transition:
    transform 3s,
    opacity 2s;
}


.slide-leave-to {
  transform: translateX(-30%);
}
.slide-enter-from {
  transform: translateX(30%);
}
</style>
