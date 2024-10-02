<template>
    <form
      @submit.prevent="formHandler"
      :class="['box',elementClass]"
    >
      <div class="box__input">
        <input
          type="text"
          v-model="infos.username"
          class="box__input--style"
          placeholder="Your Name"
        />
      </div>
      <div class="box__input">
        <input
          type="email"
          v-model="infos.email"
          class="box__input--style"
          placeholder="Your Email"
        />
      </div>
      <div class="box__input">
        <input type="text" v-model="infos.subject" class="box__input--style" placeholder="Subject" />
      </div>
      <div class="box__input">
        <textarea
          placeholder="Message"
          class="w-full bg-gray-300 p-[10px] resize-none h-[200px]"
        ></textarea>
      </div>
      <Button tag="button" type="submit" :is-icon-only="false" :is-yellow="true">
        Send Message
      </Button>
    </form>
  </template>
  
  <script setup>
  import { ref,reactive,defineProps,computed } from 'vue';
  import { bool, string } from 'vue-types';
  import Button from '@/components/base/Button.vue'
  
  
  const props = defineProps({
      isTrasparent: bool().def(false)
  })
  
  
  const elementClass = computed(() => ({
      'tranparent-bg': props.isTrasparent
  }))
  
  // const username = ref('')
  // const email = ref('')
  // const subject = ref('')
  
  
  const infos = reactive({
      username: '',
      email: '',
      subject: ''
  });
  
  const formHandler = () => {
      console.log(JSON.stringify(infos));
      infos.username = ''
      infos.email = ''
      infos.subject = ''
  }
  </script>
  
  <style scoped>
  .box {
    @apply p-[20px] max-h-[450px] overflow-hidden bg-gray-200;
  }
  
  .box__input {
    @apply mb-[10px];
  }
  
  .box__input--style {
    @apply bg-gray-300 w-full px-[10px] py-[8px];
  }
  
  .tranparent-bg{
      @apply bg-transparent
  }
  </style>
  