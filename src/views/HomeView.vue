<script setup>
import Container from '@/components/base/Container.vue'
import Main from '@/components/base/Main.vue'
import ListCardRoute from '@/components/main/ListCardRoute.vue'
</script>

<template>
  <Main class="flex flex-col justify-center gap-[45px]">
    <Container tag="section">
      <div>
        <h1 class="title">Links for you</h1>
        <p class="subtitle">you can click each link and go to website.</p>
      </div>
    </Container>
    <ListCardRoute/>
  </Main>
</template>

<style scoped>
.title {
  @apply text-white text-[45px];
}

.subtitle {
  @apply text-white text-[25px] capitalize;
}
</style>
