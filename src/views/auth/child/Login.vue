<template>
  <Main class="bg-gradient-to-tr from-cyan-700 to-slate-800">
    <Container class="h-screen flex justify-center items-center">
      <BoxLogin @update:select-value="selected" />
    </Container>
  </Main>
</template>

<script setup>
import { ref } from 'vue'
import Container from '@/components/base/Container.vue'
import Main from '@/components/base/Main.vue'
import  Cookie  from 'js-cookie'
import BoxLogin from '@/components/main/auth/BoxLogin.vue'
const val = ref('')
const selected = (cookie, email) => {
  if (cookie === true) {
    Cookie.set('cookie-user', email, { expires: 7 })
  }
}
</script>
