<template>
  <Button
    class="fixed right-[20px] bottom-[20px]  p-[20px]"
    v-if="showBtn"
    :is-icon-only="true"
    icon="arrow-up"
    :is-rounded-full="true"
    :is-primary="true"
    @click="scrollHandler"
  />

</template>

<script setup>
import { onUnmounted, onMounted, ref } from 'vue'
import { useEventListener } from '@vueuse/core'
import Button from '@/components/base/Button.vue';

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
