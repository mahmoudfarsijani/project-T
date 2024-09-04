<template>
  <div class="flex flex-nowrap gap-[15px]">
    <p class="title">sizes</p>
    <div v-for="(item, index) in dataModel" :key="index" class="flex flex-nowrap gap-[7px]">
      <label for="radio" class="uppercase">
        {{ item }}
        <input type="radio"  :value="item" @change="changeValue" />
      </label>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, ref } from 'vue'

const radioModel = ref('')

const dataModel = ['xs', 's', 'm', 'l', 'xl']
const emits = defineEmits(['select-value'])

const changeValue = () => {
  emits('select-value', radioModel.value)
}
</script>  


<style scoped>
    .title {
        @apply capitalize
    }
</style>
