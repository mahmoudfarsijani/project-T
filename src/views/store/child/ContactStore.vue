<template>
  <Container class="min-h-screen">
    <!-- <div>
      {{ openConfirm?.title }}
    </div>
   <button @click="saveChanges">change save</button> -->
  </Container>
</template>

<script setup>
import Container from '@/components/base/Container.vue'
import { ref } from 'vue'
// import { onBeforeRouteLeave } from 'vue-router'
// import { useConfirmDialog } from '@vueuse/core'

// const { isConfirmed, openConfirm } = useConfirmDialog()

// const hasUnsavedChange = ref(true)

// const confirmLeave = async () => {
//   openConfirm({
//     title: 'hello',
//     message: 'do you sure?',
//     confirmButtonText: 'yes leave',
//     cancelButtonText: 'stay'
//   })
//   await isConfirmed
//   return isConfirmed.value
// }

// onBeforeRouteLeave(async (to, from, next) => {
//   if (hasUnsavedChange.value) {
//     const shouldLeave = await confirmLeave()

//     if (shouldLeave) {
//       next()
//     } else {
//       next(false)
//     }
//   } else {
//     next()
//   }
// })

// const saveChanges = () => {
//   hasUnsavedChange.value = false
// }
</script>


