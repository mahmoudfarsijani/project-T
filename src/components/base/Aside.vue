<template>
  <aside class="aside">
    <slot />
  </aside>
</template>

<script>
import { ref } from 'vue'



</script>


<style scoped>
    .aside {
        @apply w-full lg:w-[20%] min-w-[300px] h-[500px] 
    }
</style>
