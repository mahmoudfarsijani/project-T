<template>
 
    <div class="w-full flex flex-col flex-nowrap h-[750px]  relative">
      <!--  -->
      <div class="w-full text-center absolute top-[120px] z-[99]">
        <h1
          class="title font-Archivo smm:text-[20px] md:text-[40px] lg:text-[35px] text-white uppercase"
        >
          welcome to us resturant
        </h1>
      </div>
      <div class="box-img max-w-[950px] flex justify-center pt-[50px] mx-auto">
        <Img src="/public/icon/main.png" alt="" class="w-[90%]" />
      </div>
      <Row tag="ul" class="smm:gap-[30px] md:gap-[10px] smm:justify-center md:justify-center lg:justify-between">
        <CardPages v-for="item in listItem" :key="item.id" :list-item="item" />
      </Row>
    </div>
 
</template>

<script setup>
import Img from '@/components/base/Img.vue'
import CardPages from '@/components/main/resturant/home/CardPages.vue'
import Row from '@/components/base/Row.vue'
import { nanoid } from 'nanoid'

const listItem = [
  {
    route: '/resturant/country',
    label: 'country',
    id: nanoid(3),
    icon:'country'
  },
  {
    route: '/resturant/categories',
    label: 'categories',
    id: nanoid(3),
    icon:'category'
  },
  {
    route: '/resturant/search',
    label: 'search box',
    id: nanoid(3),
    icon:'search-box'
  }
]
</script>

<style scoped>
.bb {
  @apply w-[100px] mx-auto     hover:w-full mt-[-40px] backdrop-blur-xl bg-white/30 hover:p-[40px] rounded-lg overflow-hidden transition-all duration-300;
}
.par {
  @apply text-justify  text-white translate-y-[-2000px] transition-all duration-500 smm:text-[12px] md:lg:text-[14px] lg:text-[16px];
}

.bb:hover .par {
  @apply translate-y-0;
}
</style>
