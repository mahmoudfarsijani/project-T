<template>
  <div class="w-full flex flex-nowrap gap-[20px] pt-[40px]">
    <FormContact class="flex-1" :is-trasparent="false"/>
    <InfoContact class="flex-1"/>
  </div>
</template>

<script setup>
import FormContact from '@/components/main/store/FormContact.vue'
import InfoContact from '@/components/main/store/InfoContact.vue'
</script>
