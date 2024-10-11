<template>
  <Form
    class="bg-gray-600 bg-opacity-70 flex flex-col items-center gap-[10px] w-full max-w-[450px] px-[20px] py-[15px] rounded-md"
    :validation-schema="schemaVal"
    @submit="formHandler"
  >
    <h2 class="text-white capitalize text-[25px]">create account</h2>
    <div class="boxinput h-[90px] flex flex-col gap-[5px] w-full">
      <label for="username" class="text-[16px] capitalize text-gray-200"> username </label>
      <Field
        as="input"
        type="text"
        name="username"
        id="username"
        v-model="username"
        class="w-full px-[8px] py-[5px] text-[18px] bg-gray-200 rounded-md"
      />

      <ErrorMessage name="username" class="text-[11px] text-red-500 capitalize" />
    </div>
    <div class="boxinput h-[90px] flex flex-col gap-[5px] w-full">
      <label for="emial" class="text-[16px] capitalize text-gray-200"> email </label>
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
    <div class="boxinput h-[90px] flex flex-col gap-[5px] w-full">
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
    <div class="boxinput h-[90px] flex flex-col gap-[5px] w-full">
      <label for="rePassword" class="text-[16px] capitalize text-gray-200"> rePassword </label>
      <Field
        as="input"
        type="password"
        name="rePassword"
        id="rePassword"
        v-model="rePassword"
        class="w-full px-[8px] py-[5px] text-[18px] bg-gray-200 rounded-md"
      />

      <ErrorMessage name="rePassword" class="text-[11px] text-red-500 capitalize" />
    </div>
    <button type="submit" class="text-white rounded-sm bg-teal-700 px-[25px] py-[10px] capitalize">
      submit
    </button>
  </Form>
</template>

<script setup>
import { ref } from 'vue'
import { Form, Field, ErrorMessage } from 'vee-validate'
import { useRouter } from 'vue-router'
import Button from '@/components/base/Button.vue'
import * as Yup from 'yup'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

const username = ref('')
const email = ref('')
const password = ref('')
const rePassword = ref('')
const auth = getAuth()
const router = useRouter()

const schemaVal = Yup.object({
  username: Yup.string().min(8).required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(8).required(),
  rePassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .min(8)
    .required()
})

const formHandler = async () => {
  try {
    await createUserWithEmailAndPassword(auth, email.value, password.value)
    router.push({ name: 'auth' })
  } catch (error) {
    console.log(error.message)
  }
}
</script>
