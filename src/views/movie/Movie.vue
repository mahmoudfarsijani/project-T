<template>
  <Main>
    <Container class="flex flex-col items-center justify-center h-screen gap-[50px]">
      <div>
        <h1 class="smm:text-[23px] md:text-[28px] lg:text-[35px] text-white capitalize">
          find your favorite movies
        </h1>
      </div>
      <FindListMovie />
    </Container>
  </Main>
</template>

<script setup>
import Container from '@/components/base/Container.vue'
import Main from '@/components/base/Main.vue'
import FindListMovie from '@/components/main/movie/FindListMovie.vue'
</script>
