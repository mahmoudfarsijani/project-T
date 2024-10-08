<template>
  <Main class="bg-gradient-to-tl from-slate-900 from-50%  to-cyan-900 to-50%">
    <Container>
        <BoxWeather/>
    </Container>
  </Main>
</template>

<script setup>
import { ref } from 'vue'
import Container from '@/components/base/Container.vue'
import Main from '@/components/base/Main.vue'
import BoxWeather from '@/components/main/weather/BoxWeather.vue'
</script>
