<template>
  <Wrapper class="bg-red-500">
    <RouterView name="headerStore"/>
    <RouterView :key="$route.path"/>
    <RouterView name="footerStore"/>
    <button class="fixed right-[20px] bottom-[20px] bg-red-600 p-[20px]"  @click="scrollHandler" v-show="showBtn">
      up
    </button>

  </Wrapper>
</template>


<script setup>
  import Wrapper from '@/components/base/Wrapper.vue';
import { useEventListener } from '@vueuse/core';
import { onUnmounted } from 'vue';
import { onMounted } from 'vue';
import { ref } from 'vue';


  const showBtn = ref(false)
  const scrollEvent = () => {
    if(window.scrollY> 10){
      showBtn.value = true
    } else {
      showBtn.value = false
    }
  }
  const scrollHandler = () => {
    window.scrollTo({top:0,behavior:'smooth'})
  }
 

  onMounted(() => {
    scrollEvent()
    scrollHandler()
    useEventListener(window,'scroll',scrollEvent)
    useEventListener(window,'scroll',scrollHandler)

  })

 

  onUnmounted(() => {
    useEventListener(window,'scroll',scrollEvent)
    delete
    useEventListener(window,'scroll',scrollEvent)
   //            //
    useEventListener(window,'scroll',scrollHandler)
    delete
    useEventListener(window,'scroll',scrollHandler)
  })
</script>