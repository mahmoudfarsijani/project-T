<template>
    <div>
        <div
        class="w-full flex flex-col flex-nowrap  h-[750px] min-h-screen relative  "
      >
      <!--  -->
        <div class="w-full    text-center absolute top-[120px] z-[99]">
          <h1
            class="title font-Archivo smm:text-[20px] md:text-[40px] lg:text-[35px]   text-white uppercase"
          >
            welcome to us resturant
          </h1>
        </div>
        <div class="box-img   max-w-[950px] flex justify-center pt-[50px]   mx-auto ">
          <Img src="/public/icon/main.png" alt="" class="w-[90%]"/>
        </div>
       
      </div>
    </div>
</template>


<script setup>
    import Img from '@/components/base/Img.vue'
</script>


<style scoped>
.bb {
    @apply w-[100px] mx-auto     hover:w-full mt-[-40px] backdrop-blur-xl bg-white/30 hover:p-[40px] rounded-lg overflow-hidden transition-all duration-300
}
    .par {
        @apply text-justify  text-white translate-y-[-2000px] transition-all duration-500 smm:text-[12px] md:lg:text-[14px] lg:text-[16px]
    }

    .bb:hover .par{
        @apply translate-y-0
    }
</style>