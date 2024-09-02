<template>
  <component :is="tag" :class="['cardl', elementClass]" :style="{backgroundImage:`url(${src})`}">
    <div class="layout">
      <div class="box-layout">
        <slot name="title-layout" />
      </div>
    </div>
  </component>
</template>

<script setup>
import { ref, defineProps, computed } from 'vue'
import { string, oneOf, bool,number } from 'vue-types'

const props = defineProps({
  tag: oneOf(['div', 'section']).def('div'),
  isRounded: bool().def(false),
  width: number(),
  src: string()
})

const elementClass = computed(() => ({
  'round-md': props.isRounded
}))
</script>

<style scoped>
.cardl {
  @apply  bg-no-repeat  bg-center bg-cover 
  relative overflow-hidden ;
}
.round-md {
  @apply rounded-md;
}

.layout {
  @apply w-full h-full  absolute 
         inset-0 flex justify-center items-center;
}

.box-layout {
    @apply flex justify-center items-center duration-700 bg-black bg-opacity-25 transition-opacity w-full h-full opacity-0 
}

.cardl:hover .box-layout {
    @apply opacity-100 flex justify-center items-center
}
</style>
