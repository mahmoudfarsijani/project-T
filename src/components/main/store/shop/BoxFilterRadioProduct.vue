<template>
    <div class="flex flex-nowrap gap-[7px]">
      <label class="uppercase flex flex-nowrap gap-[5px]">
        <input
          type="radio"
          :checked="modelValue === value"
          :name="name"
          :value="value"
          @change="handleChange"
        />
        {{ label }}
      </label>
    </div>
</template>

<script setup>
import { defineEmits, ref, defineProps } from 'vue'
import { string } from 'vue-types'



defineProps({
  value: string(),
  modelValue: string(),
  label: string(),
  name: string()
})


const emits = defineEmits(['update:modelValue'])

const handleChange = (event) => {
  emits('update:modelValue', event.target.value)
}
</script>

<style scoped>
.title {
  @apply capitalize;
}
</style>
