<template>
  <Wrapper>
    <!-- hedare-store -->
    <RouterView name="headerStore"/>
    <!-- header-resturant -->
    <RouterView name="headerResturant"/>

    <!-- dashboard nav -->
    <!-- <RouterView name="dashboard"/> -->


    <RouterView :key="$route.path"/>

    
    <!-- footer-store -->
    <RouterView name="footerStore"/>
    <!-- footer-resturant -->
    <RouterView name="footerResturant"/>
    <BtnTop/>
  </Wrapper>
</template>


<script setup>
  import Wrapper from '@/components/base/Wrapper.vue';
  import BtnTop from '@/components/base/BtnTop.vue'
</script>