<template>
  <component
    :is="tag"
    :class="[
      'cart',
      `cart--${isRow ? 'row' : 'col'}`,
      `cart--${isRounded ? 'rounded' : 'notrounded'}`,
      `cart--${isRouter ? 'router' : 'static'}`,
      elementClass
    ]"
  >
    <div v-if="$slots.header" class="header">
      <slot name="header" />
    </div>
    <slot />
    <div v-if="$slots.footer" class="footer">
      <slot name="footer" />
    </div>
  </component>
</template>

<script setup>
import { defineProps, computed } from 'vue'
import { oneOf, bool } from 'vue-types'

const props = defineProps({
  tag: oneOf(['li', 'div', 'section', 'span', 'RouterLink']).def('div'),
  isRow: bool().def(false),
  isRounded: bool().def(false),
  isRouter: bool().def(false),
  isWhite: bool().def(false),
  isDark: bool().def(false),
  isPointer:bool().def(false),
  isWeather: bool().def(false),
})

const elementClass = computed(() => ({
  'cart--white': props.isWhite,
  'cart--dark': props.isDark,
  'cart--pointer': props.isPointer,
  'card-weather': props.isWeather
}))
</script>

<style scoped>
.cart {
  @apply flex overflow-hidden;
}

.cart--col {
  @apply flex-col items-center;
}

.cart--row {
  @apply flex-row items-center;
}

.cart--rounded {
  @apply rounded-md;
}

.cart--norounded {
  @apply rounded-none;
}

.cart--router {
  @apply cursor-pointer;
}

.cart--static {
  @apply cursor-default;
}

.cart--white {
    @apply bg-gray-100
}

.cart--dark {
    @apply bg-slate-900
}

.cart--pointer {
  @apply cursor-pointer
}
.card-weather {
        @apply w-[35%] min-w-[300px] bg-gray-700 bg-opacity-50 rounded-md py-[20px] shadow-lg items-start px-[10px] gap-[15px]
    }
</style>
