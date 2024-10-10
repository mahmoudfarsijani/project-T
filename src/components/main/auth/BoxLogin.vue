<template>
    <Form :validation-schema="schemaForm" class="w-[100%] max-w-[450px] gap-[10px] flex flex-col items-center bg-gray-700 bg-opacity-50 px-[20px] py-[10px]">
        <h2 class="title text-gray-50 text-[29px] capitalize">
            login
        </h2>
        <div class="input__box fex flex-col gap-[5px] h-[60px] w-full">
            <Field as="input" type="email" name="email" id="email" v-model="email" class="w-full px-[8px] py-[5px] text-[18px] bg-gray-200 rounded-md"/>
            <ErrorMessage name="email" class="text-[11px] text-red-500 capitalize"/>
        </div>
        <div class="input__box h-[60px] w-full">
            <Field as="input" type="password" name="password" id="password" v-model="password" class="w-full px-[8px] py-[5px] text-[18px] bg-gray-200 rounded-md"/>
            <ErrorMessage name="password" class="text-[11px] text-red-500 capitalize"/>
        </div>
        <button type="submit" class="px-[25px] py-[10px] capitalize bg-teal-700 text-black rounded-lg">
            submit
        </button>
    </Form>
</template>

<script setup>
import { ref } from 'vue'
import { Field, Form, ErrorMessage } from 'vee-validate'
import * as Yup from 'yup'


const email = ref('')
const password = ref('')
const schemaForm = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().min(8).required()
})
</script>
