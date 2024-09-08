<template>
    <div class="flex gap-[7px]">
      <label class="uppercase flex gap-[5px] text-gray-200 dark:text-gray-700">
        <input
          :type="type"
          :checked="isChecked"
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
import { bool, string } from 'vue-types'



defineProps({
  type:string().validate((v) => ['radio','checkbox'].includes(v)).def('radio').isRequired,
  value: string(),
  modelValue: string(),
  label: string(),
  name: string(),
  isChecked:bool().def(false)
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
