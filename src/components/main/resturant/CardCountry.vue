<template>
  <Card
    tag="RouterLink"
    :to="`/resturant/country-meal/${country.strArea}`"
    v-if="country"
    class="bg-cyan-950 bg-opacity-55 duration-1000 py-[20px]"
    :is-rounded="true"
    :is-pointer="true"
  >
    <div class="body">
      <h2 class="text-white font-light">
        {{ country.strArea }}
      </h2>
    </div>
  </Card>
</template>

<script setup>
import { defineProps } from 'vue'
import { string, number, shape, object } from 'vue-types'
import Card from '@/components/base/Card.vue'

const props = defineProps({
  country: object({
    strArea: string()
  })
})
</script>
