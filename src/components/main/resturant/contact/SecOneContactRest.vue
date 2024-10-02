<template>
  <div>
    <div class="w-full flex flex-col items-center  gap-[20px] ">
      <p class="text-[22px] text-white font-Archivo">Contact Us</p>
      <h1 class="text-[30px] text-white font-kanit">Feel Free To Contact</h1>
    </div>
    <div class="mt-[35px]">
      <Row tag="ul" class="smm:flex-col md:flex-row justify-between md:justify-between gap-[20px]">
        <li v-for="item in listContacts" :key="item.id" class="flex flex-col items-center smm:w-full md:w-[200px] ">
          <Icon :name="item.icon"/>
          <h3 class="text-white font-kanit text-[23px] capitalize">
            {{ item.title }}
          </h3>
          <span class="font font-light text-white text-[14px]">
            {{ item.subTitle }}
          </span>
        </li>
      </Row>
    </div>
    <div class="w-full flex smm:flex-col md:flex-row mt-[30px]">
      <div class="flex-1 bg-cyan-800">
        <iframe width="100%" height="250px" loading="lazy" :src="googleMap"></iframe>
      </div>
      <div class="flex-1">
        <FormContact :is-trasparent="true"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import Icon from '@/components/base/Icon.vue'
import Row from '@/components/base/Row.vue'
import FormContact from '@/components/main/store/FormContact.vue';
import { nanoid } from 'nanoid'

const listContacts = [
  {
    icon: 'loc',
    title: 'address',
    subTitle: '123 Street, New York, USA',
    id:nanoid(3)
  },
  {
    icon: 'phone',
    title: 'phone',
    subTitle: '+012 345 6789',
    id:nanoid(3)
  },
  {
    icon: 'gmail',
    title: 'Email',
    subTitle: 'info@example.com',
    id:nanoid(3)
  }
]
</script>
