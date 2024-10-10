<template>
  <Form class="bg-gray-200 flex flex-col gap-[20px]" :validation-schema="schemaVal" >
    <div class="boxinput">
      <Field as="input" type="text" name="username" id="username" v-model="username" class="bg-gray-400"/>
      <ErrorMessage name="username" />
    </div>
    <div class="boxinput">
      <Field as="input" type="email" name="email" id="email" v-model="email" class="bg-gray-400"/>
      <ErrorMessage name="email" />
    </div>
    <div class="boxinput">
      <Field as="input" type="password" name="password" id="password" v-model="password" class="bg-gray-400"/>
      <ErrorMessage name="password" />
    </div>
    <div class="boxinput">
      <Field as="input" type="password" name="rePassword" id="rePassword" v-model="rePassword" class="bg-gray-400"/>
      <ErrorMessage name="rePassword" />
    </div>
    <button type="submit" :is-icon-only="false"> submit </button>
  </Form>
</template>

<script setup>
import { ref } from 'vue'
import { Form, Field, ErrorMessage } from 'vee-validate'
import Button from '@/components/base/Button.vue'
import * as Yup from 'yup'

const username = ref('')
const email = ref('')
const password = ref('')
const rePassword = ref('')

const schemaVal = Yup.object({
  username: Yup.string().min(8).required('please fill in sec'),
  email: Yup.string().email().required('please fill email'),
  password: Yup.string().min(8).required('[lease fill pass]'),
  rePassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .min(8)
    .required()
})
</script>
