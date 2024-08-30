<template>
  <Main>
    <Container tag="section" class="flex justify-center items-center h-screen"> 
        <div class="flex flex-col items-center">
            <h1 class="title text-[70px]">
                404
            </h1>
            <p class="subtitle capitalize">
                not found
            </p>
            <span class="capitalize text-center">
                the source requested could not be found on this server!
            </span>
        </div> </Container>
  </Main>
</template>

<script setup>
import Container from '@/components/base/Container.vue'
import Main from '@/components/base/Main.vue'
</script>
