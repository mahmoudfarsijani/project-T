<script setup>
import { ref,provide } from 'vue';
import {useDark} from '@vueuse/core'
import Container from '@/components/base/Container.vue'
import Main from '@/components/base/Main.vue'
import ListCardRoute from '@/components/main/ListCardRoute.vue'
import Button from '@/components/base/Button.vue';

const isChange = useDark()


const changeColor = () => {
  isChange.value = !isChange.value
  document.documentElement.classList.toggle('dark',isChange.value)
}
provide('changeColor',isChange.value)

</script>

<template>
  <Main class="flex flex-col justify-center gap-[45px] px-[5px] bg-red-500">
    <Container tag="section" >
      <div class="box-home w-full flex justify-between items-center">
        <div>
          <h1 class="title font-Matemasie">-Links for you-</h1>
          <p class="subtitle">you can click each link and go to website.</p>
        </div>
        <div class="box-btn">
          <Button tag="button" @click="changeColor" :is-icon-only="true" :icon=" isChange ? 'moon':'sun' "/>
        </div>
      </div>
    </Container>
    <ListCardRoute />
  </Main>
</template>

<style scoped>
.title {
  @apply text-white text-[45px] dark:text-gray-900;
}

.subtitle {
  @apply text-white text-[25px] capitalize dark:text-gray-900 ;
}
</style>
