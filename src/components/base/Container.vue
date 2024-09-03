<template>
    <component :is="tag" class="container mx-auto">
        <slot/>
    </component>
</template>

<script setup>
    import { defineProps } from 'vue';
    import { oneOf } from 'vue-types';

    defineProps({
        tag:oneOf(['div','section']).def('div')
    })
</script>

<style lang="css" scoped>
    .container {
        --max-width:100%;
        width:var(--max-width)
    
    }
    @media screen and  (max-width:768) {
       .container {
        --max-width:990px
       }
    }
</style>