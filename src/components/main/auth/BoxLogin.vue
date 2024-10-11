<template>
  <Form
    :validation-schema="schemaForm"
    @submit="formHandler"
    class="w-[100%] max-w-[450px] gap-[50px] flex flex-col items-center bg-gray-700 bg-opacity-50 px-[20px] py-[20px] rounded-md"
  >
    <h2 class="title text-gray-50 text-[29px] capitalize">login</h2>
    <div class="input__box flex flex-col gap-[10px] h-[60px] w-full">
      <label for="email" class="text-[16px] capitalize text-gray-200"> email </label>
      <Field
        as="input"
        type="email"
        name="email"
        id="email"
        v-model="email"
        class="w-full px-[8px] py-[5px] text-[18px] bg-gray-200 rounded-md"
      />
      <ErrorMessage name="email" class="text-[11px] text-red-500 capitalize" />
    </div>
    <div class="input__box h-[60px] w-full flex flex-col gap-[10px]">
      <label for="password" class="text-[16px] capitalize text-gray-200"> password </label>
      <Field
        as="input"
        type="password"
        name="password"
        id="password"
        v-model="password"
        class="w-full px-[8px] py-[5px] text-[18px] bg-gray-200 rounded-md"
      />
      <ErrorMessage name="password" class="text-[11px] text-red-500 capitalize" />
    </div>
    <div class="w-full flex flex-nowrap gap-[5px] justify-start">
      <input type="checkbox" id="remember" v-model="isRemember" />
      <label for="remember" class="select-none text-white"> Remember Me </label>
    </div>
    <button
      type="submit"
      class="px-[25px] py-[10px] capitalize bg-teal-700 text-white rounded-lg w-full mt-[20px]"
    >
      submit
    </button>
  </Form>
</template>

<script setup>
import { ref,defineEmits } from 'vue'
import { Field, Form, ErrorMessage } from 'vee-validate'
import * as Yup from 'yup'

const email = ref('')
const password = ref('')
const isRemember = ref(false)
const emits = defineEmits(['update:select-value'])
const schemaForm = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().min(8).required()
})

const formHandler = () => {
    if(password.value && email.value){
        emits('update:select-value',isRemember.value,email.value)
    }
}
</script>
