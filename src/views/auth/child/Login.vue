<template>
  <Main class="bg-gradient-to-tr from-cyan-700 to-slate-800">
    <Container class="h-screen flex justify-center items-center">
      <BoxLogin />
    </Container>
  </Main>
</template>

<script setup>
import Container from '@/components/base/Container.vue'
import Main from '@/components/base/Main.vue'
import BoxLogin from '@/components/main/auth/BoxLogin.vue'
</script>
