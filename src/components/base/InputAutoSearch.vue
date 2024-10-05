<template>
  <input :type="type" :placeholder="placeholder" v-model="localValue" @input="searching" :class="['input',isFull? 'w-full' : 'w-[500px]']" class="bg-gray-200"/>
</template>

<script setup>
import { defineProps, watch, ref, unref,defineEmits } from 'vue'
import { bool, string } from 'vue-types'

const props = defineProps({
  modelValue: string(),
  isFull: bool().def(false)
})
const localValue = ref(unref(props.modelValue))
const emits = defineEmits(['update:modelValue'])

const searching = () => {
    emits('update:modelValue',localValue.value)
}
</script>


<style scoped>
    .input {
        @apply px-[10px] py-[8px]
    }
</style>
