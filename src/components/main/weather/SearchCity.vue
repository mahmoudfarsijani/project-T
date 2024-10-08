<template>
  <form @submit.prevent="formHandler" class="flex flex-nowrap relative w-[100%] max-w-[650px]">
    <input
      type="text"
      v-model="inputValue"
      placeholder="Search City..."
      class="input w-full px-[10px] py-[7px] text-gray-200 bg-gray-300 bg-opacity-50 rounded-md text-[18px] outline-none"
      ref="input"
    />
    <!-- <Button type="submit" icon="search" class="absolute right-0"/> -->
  </form>
</template>

<script setup>
import { defineEmits, watch, ref, onMounted } from 'vue'
import Button from '@/components/base/Button.vue'
 

const inputValue = ref('')
const input = ref(null)
const emits = defineEmits(['update:input-value'])

const formHandler = () => {
  emits('update:input-value', inputValue.value)
  inputValue.value = ''
}

onMounted(() => {
    input.value.focus()
})
</script>

<style scoped>
.input::placeholder {
  @apply text-gray-700;
}
</style>
