<template>
  <Card :is-row="false" tag="div" class="card-drop">
    <div class="relative w-full">
      <Button
        tag="button"
        :is-icon-only="false"
        icon="arrow-bottom"
        :is-rounded-sm="true"
        :is-primary="true"
        class="btn-dropdown"
        @click="showDropdown"
      >
        categories
      </Button>
      <Row :is-col="true" class="list-cat" :class="{ 'show-drop': isShowDropdown }">
        <RouterLink v-for="item in options" :key="item.id" :to="{path:`/store/categories/${item.value}`}" class="list-cat--item" @click="isShowDropdown = !isShowDropdown">
          <p class="text-black whitespace-nowrap capitalize">
            {{ item.label }}
          </p>
        </RouterLink>
      </Row>
    </div>
  </Card>
</template>

<script setup>
import Button from '@/components/base/Button.vue'
import Card from '@/components/base/Card.vue'
import Row from '@/components/base/Row.vue'
import { nanoid } from 'nanoid'
import { ref } from 'vue'

import { listFilterCatStore } from '@/data/listFilterCatStore.js'
const { options } = listFilterCatStore()

const isShowDropdown = ref(false)
const showDropdown = () => {
  isShowDropdown.value = !isShowDropdown.value
}
</script>

<style scoped>
.card-drop {
  @apply relative w-full;
}
.btn-dropdown {
  @apply capitalize text-white dark:text-black 
    w-full px-[10px]  gap-[10px] py-[10px] justify-between outline-none;
}
.list-cat {
  @apply fixed bg-white p-[10px] top-[150px] z-[999]
     overflow-scroll w-[200px] lg:w-[700px]  h-[610px]
    transition-transform duration-500  scale-y-0 origin-top
    rounded-md gap-[15px];
}

.list-cat--item {
  @apply border-b-[1px] border-b-gray-400 px-[20px] py-[10px] text-center;
}

.list-cat--item:last-child {
  @apply border-none;
}
.show-drop {
  @apply  h-[610px]  scale-y-90;
}
</style>
