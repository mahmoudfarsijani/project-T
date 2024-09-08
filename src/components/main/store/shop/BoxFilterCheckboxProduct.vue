<template>
  <div>
    <label>
      <input
        type="checkbox"
        :value="value"
        :checked="modelValue.includes(value)"
        @change="onChange"
      />
      {{ label }}
    </label>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref, toRefs, watch } from 'vue'
import { string, bool, array } from 'vue-types'

const props = defineProps({
  value: string().isRequired,
  label: string().isRequired,
  modelValue: array().isRequired,
})

const emits = defineEmits(['update:modelValue'])
const { modelValue, value } = toRefs(props)

const onChange = (event) => {
  const newValue = [...modelValue.value]

  if (event.target.checked) {
    newValue.push(value.value)
  } else {
    const index = newValue.indexOf(value.value)
    if (index !== -1) newValue.splice(index, 1)
  }

  emits('update:modelValue', newValue)
}
</script>
