<template>

    <Container>
      <div class="w-full   flex flex-col justify-start pt-[100px]   gap-[50px]">
        <div class="w-full flex flex-col items-center">
        <h1 class="smm:text-[17px] md:text-[26px] text-center text-white font-kanit lg:text-[36px] capitalize">
          you can search for anything delicious you can think of
        </h1>
        <p
          class="smm:text-[11px] md:text-[15px] lg:text-[17px] text-gray-400 font-light capitalize"
        >
          this search engine is connected to the meal API site
        </p>
      </div>
      <SearchBoxMeal />
      </div>
    </Container>
</template>

<script setup>
import Container from '@/components/base/Container.vue'
import SearchBoxMeal from '@/components/main/resturant/searching/SearchBoxMeal.vue'
</script>
