<template>
  <div class=" w-full">
    <RouterView v-slot="{Component}" class="pt-[180px]">
      <Transition name="slide" mode="out-in">
        <component :is="Component" :key="$route.fullPath"></component>
      </Transition>
    </RouterView>
    
  </div>
</template>

<script setup>
import { onMounted } from 'vue'


onMounted(() => {
  console.log('parent component')
})
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition:
    transform 3s;
}



.slide-enter-from {
  transform: translateX(30%);
}
.slide-leave-to {
  transform: translateX(-30%);
}
</style>
