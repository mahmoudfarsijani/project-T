<template>
  <component
    :is="tag"
    :class="['list', `list--${isCol ? 'col' : 'row'}`, `list--${isNoWrap ? 'nowrap' : 'wrap'}`]"
  >
    <slot />
  </component>
</template>

<script setup>
import { defineProps } from 'vue'
import {  oneOf, bool } from 'vue-types'

const props = defineProps({
  tag: oneOf(['div', 'section', 'ul']).def('div'),
  isCol: bool().def(false),
  isNoWrap: bool().def(false)
})
</script>

<style scoped>
.list {
  @apply flex;
}

.list--col {
  @apply flex-col;
}

.list--row {
  @apply flex-row;
}

.list-nowrap {
  @apply flex-nowrap;
}

.list--wrap {
  @apply flex-wrap;
}
</style>
