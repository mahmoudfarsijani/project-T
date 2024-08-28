<template>
  <a v-if="externalLink" :href="to">
    <slot />
  </a>
  <RouterLink v-else v-bind="$props">
    <slot />
  </RouterLink>
</template>

<script setup>
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'

defineProps({
  ...RouterLink
})

const externalLink = () => {
  return typeof to === 'string' && to.startsWith('http')
}
</script>
