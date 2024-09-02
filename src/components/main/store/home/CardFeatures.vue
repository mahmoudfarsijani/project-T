<template>
  <Card v-for="item in dataFeature" :key="item.id" tag="li" :is-row="true" :is-rounded="true" class="px-[45px] py-[20px] bg-white duration-700 transition-shadow gap-[10px] ">
    <template #header>
      <Icon :name="item.icon" />
    </template>
    <div class="body">
      <h3 class="title text-black capitalize font-kanit">
        {{ item.title }}
      </h3>
    </div>
  </Card>
</template>

<script setup>
import Card from '@/components/base/Card.vue'
import Icon from '@/components/base/Icon.vue'

import { listFeature } from '@/data/listCardFeaturesStore.js'

const { dataFeature } = listFeature()
</script>
