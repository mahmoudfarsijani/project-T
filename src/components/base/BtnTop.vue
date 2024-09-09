<template>
  <button
    class="fixed right-[20px] bottom-[20px] bg-red-600 p-[20px]"
    v-if="showBtn"
    @click="scrollHandler"
  >
    up
  </button>
</template>

<script setup>
import { onUnmounted, onMounted, ref } from 'vue'
import { useEventListener } from '@vueuse/core'

const showBtn = ref(false)
const scrollEvent = () => {
  showBtn.value = window.scrollY > 200
}
const scrollHandler = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  useEventListener(window, 'scroll', scrollEvent)
})

onUnmounted(() => {
  useEventListener(window, 'scroll', scrollEvent)
  //            //
  delete
  useEventListener(window, 'scroll', scrollEvent)

})
</script>
