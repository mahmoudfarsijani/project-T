<template>
  <Card  tag="RouterLink"  :to="listItem.route" class="card__page "  :is-pointer="true">
    <div class="body flex justify-center">
      <!-- <p class="body__par ">
        {{ listItem.label }}
      </p> -->
      <Icon :name="listItem.icon"  />
    </div>
  </Card>
</template>

<script setup>
import { defineProps } from 'vue'
import { object, string } from 'vue-types'
import Card from '@/components/base/Card.vue'
import Icon from '@/components/base/Icon.vue'

const props = defineProps({
  listItem: object()
})
</script>


<style scoped>
  .card__page {
    @apply smm:p-[6px]  md:p-[5px] flex-1 transition-all border-black border-b-[0px]   duration-300 overflow-hidden   relative 
  }

  .body__par {
    @apply capitalize text-center text-white absolute translate-y-[-50px]
  }

  .card__page:hover .body__par {
    @apply translate-y-[1px] 
  }

  .icon {
    @apply opacity-100 transition-opacity duration-500
  }

  .card__page:hover .icon {

    @apply hidden opacity-0
  }
</style>
