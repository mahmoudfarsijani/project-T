<template>
  <Wrapper>
    <RouterView name="headerStore"/>
    <RouterView :key="$route.path"/>
  </Wrapper>
</template>


<script setup>
  import Wrapper from '@/components/base/Wrapper.vue';
</script>