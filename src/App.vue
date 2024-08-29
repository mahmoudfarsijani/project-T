<template>
  <Wrapper>
    <RouterView name="headerStore"/>
    <RouterView/>
  </Wrapper>
</template>


<script setup>
  import Wrapper from '@/components/base/Wrapper.vue';
</script>