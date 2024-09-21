<template>
  <Wrapper>
    <RouterView name="headerStore"/>
    <RouterView name="headerResturant"/>
    <RouterView :key="$route.path"/>
    <RouterView name="footerStore"/>
    <RouterView name="footerResturant"/>
    <BtnTop/>
  </Wrapper>
</template>


<script setup>
  import Wrapper from '@/components/base/Wrapper.vue';
  import BtnTop from '@/components/base/BtnTop.vue'
</script>