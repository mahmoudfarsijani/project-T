<template>
  <component :is="tag" :class="['list-grid']">
    <slot />
  </component>
</template>

<script setup>
import { defineProps } from 'vue'
import { oneOf } from 'vue-types'

defineProps({
    tag:oneOf(['div','ul']).def('div')
})
</script>

<style scoped>
    .list-grid {
        @apply grid w-full
    }
</style>
