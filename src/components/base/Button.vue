<template>
  <component
    :is="tag"
    :class="['button', `button--${isIconOnly ? 'default' : 'simple'}`, elementClass]"
  >
    <Icon v-if="icon && isLeft" :name="icon" />
    <slot v-if="!isIconOnly" />
    <Icon v-if="icon && !isLeft" :name="icon" />
  </component>
</template>

<script setup>
import { defineProps, computed } from 'vue'
import { string, oneOf, bool } from 'vue-types'

import Icon from '@/components/base/Icon.vue'

const props =  defineProps({
  tag: oneOf(['button', 'a', 'RouterLink', 'span']).def('button'),
  isIconOnly: bool().def(false),
  icon: string(),
  isPrimary: bool().def(false),
  isDanger: bool().def(false),
  isRoundedFull: bool().def(false),
  isRoundedSm: bool().def(false),
  isLeft: bool().def(false)
})

const elementClass = computed(() => ({
  'but--primary': props.isPrimary,
  'but--danger': props.isDanger,
  'but--roundedfull': props.isRoundedFull,
  'but--roundedsm': props.isRoundedSm
}))
</script>

<style scoped>
.button {
  @apply flex flex-nowrap whitespace-nowrap cursor-pointer;
}

.button--default {
    @apply justify-center
}

.button--simple {
    @apply items-center px-[10px] py-[7px]
}

.but--primary {
  @apply bg-blue-500;
}

.but--danger {
  @apply bg-red-600;
}

.but--roundedfull {
  @apply rounded-full;
}

.but--roundedsm {
  @apply rounded-sm;
}
</style>
