<template>
  <Wrapper>
    <RouterView name="headerStore"/>
    <RouterView :key="$route.path"/>
    <RouterView name="footerStore"/>
    <BtnTop/>
  </Wrapper>
</template>


<script setup>
  import Wrapper from '@/components/base/Wrapper.vue';
  import BtnTop from '@/components/base/BtnTop.vue'
</script>